import { C as computed, F as h, H as nextTick, L as init_runtime_core_esm_bundler, M as defineComponent, Q as provide, R as inject, St as toRef, at as watch, ct as withDirectives, ft as init_reactivity_esm_bundler, s as Transition, u as init_runtime_dom_esm_bundler, yt as ref } from "./request-CkCeAZAO.js";
import { f as Target_default, l as Follower_default, m as useAdjustedTo, p as Binder } from "./Popover-BND3al2G.js";
import { i as happensIn } from "./create-CudfGvR5.js";
import { B as enUS, H as useMergedState, I as Input_default, z as useLocale } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { n as useKeyboard } from "./create-ref-setter-DaJWCCRT.js";
import { c as focus_detector_default } from "./Select-DRoqCGUj.js";
import { $r as cE, Cn as millisecondsInSecond, Jn as call, K as Button, Mn as useThemeClass, Nn as useConfig, Qn as markEventEffectPerformed, Sn as millisecondsInMinute, St as useTheme, Xr as c, Yn as throwError, Yr as getPreciseEventTarget, Zr as cB, _n as getDefaultOptions$1, _r as createInjectionKey, bn as millisecondsInDay, ei as cM, gn as toDate$1, hn as startOfWeek, it as fadeInScaleUpTransition, jn as useFormItem, k as timePickerLight, mn as isSameWeek, or as clickoutside, st as Scrollbar, ti as cNotM, vn as normalizeDates, vr as isMounted, wn as millisecondsInWeek, xn as millisecondsInHour, xt as Icon_default, yn as constructFrom, yt as replaceable } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/icons/Time.mjs
init_runtime_core_esm_bundler();
var Time_default = replaceable("time", () => h("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 512 512"
}, h("path", {
	d: "M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z",
	style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-miterlimit: 10;\n        stroke-width: 32px;\n      "
}), h("polyline", {
	points: "256 128 256 272 352 272",
	style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "
})));
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addDays.js
/**
* The {@link addDays} function options.
*/
/**
* @name addDays
* @category Day Helpers
* @summary Add the specified number of days to the given date.
*
* @description
* Add the specified number of days to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of days to be added.
* @param options - An object with options
*
* @returns The new date with the days added
*
* @example
* // Add 10 days to 1 September 2014:
* const result = addDays(new Date(2014, 8, 1), 10)
* //=> Thu Sep 11 2014 00:00:00
*/
function addDays(date, amount, options) {
	const _date = toDate$1(date, options?.in);
	if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
	if (!amount) return _date;
	_date.setDate(_date.getDate() + amount);
	return _date;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMonths.js
/**
* The {@link addMonths} function options.
*/
/**
* @name addMonths
* @category Month Helpers
* @summary Add the specified number of months to the given date.
*
* @description
* Add the specified number of months to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of months to be added.
* @param options - The options object
*
* @returns The new date with the months added
*
* @example
* // Add 5 months to 1 September 2014:
* const result = addMonths(new Date(2014, 8, 1), 5)
* //=> Sun Feb 01 2015 00:00:00
*
* // Add one month to 30 January 2023:
* const result = addMonths(new Date(2023, 0, 30), 1)
* //=> Tue Feb 28 2023 00:00:00
*/
function addMonths(date, amount, options) {
	const _date = toDate$1(date, options?.in);
	if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
	if (!amount) return _date;
	const dayOfMonth = _date.getDate();
	const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
	endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
	if (dayOfMonth >= endOfDesiredMonth.getDate()) return endOfDesiredMonth;
	else {
		_date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
		return _date;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeek.js
/**
* The {@link startOfISOWeek} function options.
*/
/**
* @name startOfISOWeek
* @category ISO Week Helpers
* @summary Return the start of an ISO week for the given date.
*
* @description
* Return the start of an ISO week for the given date.
* The result will be in the local timezone.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of an ISO week
*
* @example
* // The start of an ISO week for 2 September 2014 11:55:00:
* const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfISOWeek(date, options) {
	return startOfWeek(date, {
		...options,
		weekStartsOn: 1
	});
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeekYear.js
/**
* The {@link getISOWeekYear} function options.
*/
/**
* @name getISOWeekYear
* @category ISO Week-Numbering Year Helpers
* @summary Get the ISO week-numbering year of the given date.
*
* @description
* Get the ISO week-numbering year of the given date,
* which always starts 3 days before the year's first Thursday.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The given date
*
* @returns The ISO week-numbering year
*
* @example
* // Which ISO-week numbering year is 2 January 2005?
* const result = getISOWeekYear(new Date(2005, 0, 2))
* //=> 2004
*/
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
	if (_date.getTime() >= startOfNextYear.getTime()) return year + 1;
	else if (_date.getTime() >= startOfThisYear.getTime()) return year;
	else return year - 1;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
/**
* Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
* They usually appear for dates that denote time before the timezones were introduced
* (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
* and GMT+01:00:00 after that date)
*
* Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
* which would lead to incorrect calculations.
*
* This function returns the timezone offset in milliseconds that takes seconds in account.
*/
function getTimezoneOffsetInMilliseconds$1(date) {
	const _date = toDate$1(date);
	const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
	utcDate.setUTCFullYear(_date.getFullYear());
	return +date - +utcDate;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js
/**
* The {@link startOfDay} function options.
*/
/**
* @name startOfDay
* @category Day Helpers
* @summary Return the start of a day for the given date.
*
* @description
* Return the start of a day for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a day
*
* @example
* // The start of a day for 2 September 2014 11:55:00:
* const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 02 2014 00:00:00
*/
function startOfDay(date, options) {
	const _date = toDate$1(date, options?.in);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarDays.js
/**
* The {@link differenceInCalendarDays} function options.
*/
/**
* @name differenceInCalendarDays
* @category Day Helpers
* @summary Get the number of calendar days between the given dates.
*
* @description
* Get the number of calendar days between the given dates. This means that the times are removed
* from the dates and then the difference in days is calculated.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - The options object
*
* @returns The number of calendar days
*
* @example
* // How many calendar days are between
* // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
* const result = differenceInCalendarDays(
*   new Date(2012, 6, 2, 0, 0),
*   new Date(2011, 6, 2, 23, 0)
* )
* //=> 366
* // How many calendar days are between
* // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
* const result = differenceInCalendarDays(
*   new Date(2011, 6, 3, 0, 1),
*   new Date(2011, 6, 2, 23, 59)
* )
* //=> 1
*/
function differenceInCalendarDays(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	const laterStartOfDay = startOfDay(laterDate_);
	const earlierStartOfDay = startOfDay(earlierDate_);
	const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds$1(laterStartOfDay);
	const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds$1(earlierStartOfDay);
	return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeekYear.js
/**
* The {@link startOfISOWeekYear} function options.
*/
/**
* @name startOfISOWeekYear
* @category ISO Week-Numbering Year Helpers
* @summary Return the start of an ISO week-numbering year for the given date.
*
* @description
* Return the start of an ISO week-numbering year,
* which always starts 3 days before the year's first Thursday.
* The result will be in the local timezone.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of an ISO week-numbering year
*
* @example
* // The start of an ISO week-numbering year for 2 July 2005:
* const result = startOfISOWeekYear(new Date(2005, 6, 2))
* //=> Mon Jan 03 2005 00:00:00
*/
function startOfISOWeekYear(date, options) {
	const year = getISOWeekYear(date, options);
	const fourthOfJanuary = constructFrom(options?.in || date, 0);
	fourthOfJanuary.setFullYear(year, 0, 4);
	fourthOfJanuary.setHours(0, 0, 0, 0);
	return startOfISOWeek(fourthOfJanuary);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addQuarters.js
/**
* The {@link addQuarters} function options.
*/
/**
* @name addQuarters
* @category Quarter Helpers
* @summary Add the specified number of year quarters to the given date.
*
* @description
* Add the specified number of year quarters to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of quarters to be added.
* @param options - An object with options
*
* @returns The new date with the quarters added
*
* @example
* // Add 1 quarter to 1 September 2014:
* const result = addQuarters(new Date(2014, 8, 1), 1)
* //=; Mon Dec 01 2014 00:00:00
*/
function addQuarters(date, amount, options) {
	return addMonths(date, amount * 3, options);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addYears.js
/**
* The {@link addYears} function options.
*/
/**
* @name addYears
* @category Year Helpers
* @summary Add the specified number of years to the given date.
*
* @description
* Add the specified number of years to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type.
*
* @param date - The date to be changed
* @param amount - The amount of years to be added.
* @param options - The options
*
* @returns The new date with the years added
*
* @example
* // Add 5 years to 1 September 2014:
* const result = addYears(new Date(2014, 8, 1), 5)
* //=> Sun Sep 01 2019 00:00:00
*/
function addYears(date, amount, options) {
	return addMonths(date, amount * 12, options);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameDay.js
/**
* The {@link isSameDay} function options.
*/
/**
* @name isSameDay
* @category Day Helpers
* @summary Are the given dates in the same day (and year and month)?
*
* @description
* Are the given dates in the same day (and year and month)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same day (and year and month)
*
* @example
* // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
* const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
* //=> true
*
* @example
* // Are 4 September and 4 October in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
* //=> false
*
* @example
* // Are 4 September, 2014 and 4 September, 2015 in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
* //=> false
*/
function isSameDay(laterDate, earlierDate, options) {
	const [dateLeft_, dateRight_] = normalizeDates(options?.in, laterDate, earlierDate);
	return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isDate.js
/**
* @name isDate
* @category Common Helpers
* @summary Is the given value a date?
*
* @description
* Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
*
* @param value - The value to check
*
* @returns True if the given value is a date
*
* @example
* // For a valid date:
* const result = isDate(new Date())
* //=> true
*
* @example
* // For an invalid date:
* const result = isDate(new Date(NaN))
* //=> true
*
* @example
* // For some value:
* const result = isDate('2014-02-31')
* //=> false
*
* @example
* // For an object:
* const result = isDate({})
* //=> false
*/
function isDate(value) {
	return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js
/**
* @name isValid
* @category Common Helpers
* @summary Is the given date valid?
*
* @description
* Returns false if argument is Invalid Date and true otherwise.
* Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
* Invalid Date is a Date, whose time value is NaN.
*
* Time value of Date: http://es5.github.io/#x15.9.1.1
*
* @param date - The date to check
*
* @returns The date is valid
*
* @example
* // For the valid date:
* const result = isValid(new Date(2014, 1, 31))
* //=> true
*
* @example
* // For the value, convertible into a date:
* const result = isValid(1393804800000)
* //=> true
*
* @example
* // For the invalid date:
* const result = isValid(new Date(''))
* //=> false
*/
function isValid(date) {
	return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate$1(date)));
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getQuarter.js
/**
* The {@link getQuarter} function options.
*/
/**
* @name getQuarter
* @category Quarter Helpers
* @summary Get the year quarter of the given date.
*
* @description
* Get the year quarter of the given date.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The quarter
*
* @example
* // Which quarter is 2 July 2014?
* const result = getQuarter(new Date(2014, 6, 2));
* //=> 3
*/
function getQuarter(date, options) {
	const _date = toDate$1(date, options?.in);
	return Math.trunc(_date.getMonth() / 3) + 1;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfQuarter.js
/**
* The {@link startOfQuarter} function options.
*/
/**
* @name startOfQuarter
* @category Quarter Helpers
* @summary Return the start of a year quarter for the given date.
*
* @description
* Return the start of a year quarter for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a quarter
*
* @example
* // The start of a quarter for 2 September 2014 11:55:00:
* const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Jul 01 2014 00:00:00
*/
function startOfQuarter(date, options) {
	const _date = toDate$1(date, options?.in);
	const currentMonth = _date.getMonth();
	const month = currentMonth - currentMonth % 3;
	_date.setMonth(month, 1);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMonth.js
/**
* The {@link startOfMonth} function options.
*/
/**
* @name startOfMonth
* @category Month Helpers
* @summary Return the start of a month for the given date.
*
* @description
* Return the start of a month for the given date. The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
* Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
* or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a month
*
* @example
* // The start of a month for 2 September 2014 11:55:00:
* const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfMonth(date, options) {
	const _date = toDate$1(date, options?.in);
	_date.setDate(1);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfYear.js
/**
* The {@link startOfYear} function options.
*/
/**
* @name startOfYear
* @category Year Helpers
* @summary Return the start of a year for the given date.
*
* @description
* Return the start of a year for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a year
*
* @example
* // The start of a year for 2 September 2014 11:55:00:
* const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
* //=> Wed Jan 01 2014 00:00:00
*/
function startOfYear(date, options) {
	const date_ = toDate$1(date, options?.in);
	date_.setFullYear(date_.getFullYear(), 0, 1);
	date_.setHours(0, 0, 0, 0);
	return date_;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDayOfYear.js
/**
* The {@link getDayOfYear} function options.
*/
/**
* @name getDayOfYear
* @category Day Helpers
* @summary Get the day of the year of the given date.
*
* @description
* Get the day of the year of the given date.
*
* @param date - The given date
* @param options - The options
*
* @returns The day of year
*
* @example
* // Which day of the year is 2 July 2014?
* const result = getDayOfYear(new Date(2014, 6, 2))
* //=> 183
*/
function getDayOfYear(date, options) {
	const _date = toDate$1(date, options?.in);
	return differenceInCalendarDays(_date, startOfYear(_date)) + 1;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeek.js
/**
* The {@link getISOWeek} function options.
*/
/**
* @name getISOWeek
* @category ISO Week Helpers
* @summary Get the ISO week of the given date.
*
* @description
* Get the ISO week of the given date.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The given date
* @param options - The options
*
* @returns The ISO week
*
* @example
* // Which week of the ISO-week numbering year is 2 January 2005?
* const result = getISOWeek(new Date(2005, 0, 2))
* //=> 53
*/
function getISOWeek(date, options) {
	const _date = toDate$1(date, options?.in);
	const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
	return Math.round(diff / millisecondsInWeek) + 1;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeekYear.js
/**
* The {@link getWeekYear} function options.
*/
/**
* @name getWeekYear
* @category Week-Numbering Year Helpers
* @summary Get the local week-numbering year of the given date.
*
* @description
* Get the local week-numbering year of the given date.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @param date - The given date
* @param options - An object with options.
*
* @returns The local week-numbering year
*
* @example
* // Which week numbering year is 26 December 2004 with the default settings?
* const result = getWeekYear(new Date(2004, 11, 26))
* //=> 2005
*
* @example
* // Which week numbering year is 26 December 2004 if week starts on Saturday?
* const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
* //=> 2004
*
* @example
* // Which week numbering year is 26 December 2004 if the first week contains 4 January?
* const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
* //=> 2004
*/
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
	if (+_date >= +startOfNextYear) return year + 1;
	else if (+_date >= +startOfThisYear) return year;
	else return year - 1;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeekYear.js
/**
* The {@link startOfWeekYear} function options.
*/
/**
* @name startOfWeekYear
* @category Week-Numbering Year Helpers
* @summary Return the start of a local week-numbering year for the given date.
*
* @description
* Return the start of a local week-numbering year.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a week-numbering year
*
* @example
* // The start of an a week-numbering year for 2 July 2005 with default settings:
* const result = startOfWeekYear(new Date(2005, 6, 2))
* //=> Sun Dec 26 2004 00:00:00
*
* @example
* // The start of a week-numbering year for 2 July 2005
* // if Monday is the first day of week
* // and 4 January is always in the first week of the year:
* const result = startOfWeekYear(new Date(2005, 6, 2), {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> Mon Jan 03 2005 00:00:00
*/
function startOfWeekYear(date, options) {
	const defaultOptions = getDefaultOptions$1();
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const year = getWeekYear(date, options);
	const firstWeek = constructFrom(options?.in || date, 0);
	firstWeek.setFullYear(year, 0, firstWeekContainsDate);
	firstWeek.setHours(0, 0, 0, 0);
	return startOfWeek(firstWeek, options);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeek.js
/**
* The {@link getWeek} function options.
*/
/**
* @name getWeek
* @category Week Helpers
* @summary Get the local week index of the given date.
*
* @description
* Get the local week index of the given date.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @param date - The given date
* @param options - An object with options
*
* @returns The week
*
* @example
* // Which week of the local week numbering year is 2 January 2005 with default options?
* const result = getWeek(new Date(2005, 0, 2))
* //=> 2
*
* @example
* // Which week of the local week numbering year is 2 January 2005,
* // if Monday is the first day of the week,
* // and the first week of the year always contains 4 January?
* const result = getWeek(new Date(2005, 0, 2), {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> 53
*/
function getWeek(date, options) {
	const _date = toDate$1(date, options?.in);
	const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
	return Math.round(diff / millisecondsInWeek) + 1;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros$1(number, targetLength) {
	return (number < 0 ? "-" : "") + Math.abs(number).toString().padStart(targetLength, "0");
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
	y(date, token) {
		const signedYear = date.getFullYear();
		const year = signedYear > 0 ? signedYear : 1 - signedYear;
		return addLeadingZeros$1(token === "yy" ? year % 100 : year, token.length);
	},
	M(date, token) {
		const month = date.getMonth();
		return token === "M" ? String(month + 1) : addLeadingZeros$1(month + 1, 2);
	},
	d(date, token) {
		return addLeadingZeros$1(date.getDate(), token.length);
	},
	a(date, token) {
		const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "a":
			case "aa": return dayPeriodEnumValue.toUpperCase();
			case "aaa": return dayPeriodEnumValue;
			case "aaaaa": return dayPeriodEnumValue[0];
			default: return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
		}
	},
	h(date, token) {
		return addLeadingZeros$1(date.getHours() % 12 || 12, token.length);
	},
	H(date, token) {
		return addLeadingZeros$1(date.getHours(), token.length);
	},
	m(date, token) {
		return addLeadingZeros$1(date.getMinutes(), token.length);
	},
	s(date, token) {
		return addLeadingZeros$1(date.getSeconds(), token.length);
	},
	S(date, token) {
		const numberOfDigits = token.length;
		const milliseconds = date.getMilliseconds();
		return addLeadingZeros$1(Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3)), token.length);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
};
var formatters$1 = {
	G: function(date, token, localize) {
		const era = date.getFullYear() > 0 ? 1 : 0;
		switch (token) {
			case "G":
			case "GG":
			case "GGG": return localize.era(era, { width: "abbreviated" });
			case "GGGGG": return localize.era(era, { width: "narrow" });
			default: return localize.era(era, { width: "wide" });
		}
	},
	y: function(date, token, localize) {
		if (token === "yo") {
			const signedYear = date.getFullYear();
			const year = signedYear > 0 ? signedYear : 1 - signedYear;
			return localize.ordinalNumber(year, { unit: "year" });
		}
		return lightFormatters.y(date, token);
	},
	Y: function(date, token, localize, options) {
		const signedWeekYear = getWeekYear(date, options);
		const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
		if (token === "YY") return addLeadingZeros$1(weekYear % 100, 2);
		if (token === "Yo") return localize.ordinalNumber(weekYear, { unit: "year" });
		return addLeadingZeros$1(weekYear, token.length);
	},
	R: function(date, token) {
		return addLeadingZeros$1(getISOWeekYear(date), token.length);
	},
	u: function(date, token) {
		return addLeadingZeros$1(date.getFullYear(), token.length);
	},
	Q: function(date, token, localize) {
		const quarter = Math.ceil((date.getMonth() + 1) / 3);
		switch (token) {
			case "Q": return String(quarter);
			case "QQ": return addLeadingZeros$1(quarter, 2);
			case "Qo": return localize.ordinalNumber(quarter, { unit: "quarter" });
			case "QQQ": return localize.quarter(quarter, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return localize.quarter(quarter, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.quarter(quarter, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(date, token, localize) {
		const quarter = Math.ceil((date.getMonth() + 1) / 3);
		switch (token) {
			case "q": return String(quarter);
			case "qq": return addLeadingZeros$1(quarter, 2);
			case "qo": return localize.ordinalNumber(quarter, { unit: "quarter" });
			case "qqq": return localize.quarter(quarter, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return localize.quarter(quarter, {
				width: "narrow",
				context: "standalone"
			});
			default: return localize.quarter(quarter, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(date, token, localize) {
		const month = date.getMonth();
		switch (token) {
			case "M":
			case "MM": return lightFormatters.M(date, token);
			case "Mo": return localize.ordinalNumber(month + 1, { unit: "month" });
			case "MMM": return localize.month(month, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return localize.month(month, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.month(month, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(date, token, localize) {
		const month = date.getMonth();
		switch (token) {
			case "L": return String(month + 1);
			case "LL": return addLeadingZeros$1(month + 1, 2);
			case "Lo": return localize.ordinalNumber(month + 1, { unit: "month" });
			case "LLL": return localize.month(month, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return localize.month(month, {
				width: "narrow",
				context: "standalone"
			});
			default: return localize.month(month, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(date, token, localize, options) {
		const week = getWeek(date, options);
		if (token === "wo") return localize.ordinalNumber(week, { unit: "week" });
		return addLeadingZeros$1(week, token.length);
	},
	I: function(date, token, localize) {
		const isoWeek = getISOWeek(date);
		if (token === "Io") return localize.ordinalNumber(isoWeek, { unit: "week" });
		return addLeadingZeros$1(isoWeek, token.length);
	},
	d: function(date, token, localize) {
		if (token === "do") return localize.ordinalNumber(date.getDate(), { unit: "date" });
		return lightFormatters.d(date, token);
	},
	D: function(date, token, localize) {
		const dayOfYear = getDayOfYear(date);
		if (token === "Do") return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
		return addLeadingZeros$1(dayOfYear, token.length);
	},
	E: function(date, token, localize) {
		const dayOfWeek = date.getDay();
		switch (token) {
			case "E":
			case "EE":
			case "EEE": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(date, token, localize, options) {
		const dayOfWeek = date.getDay();
		const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
		switch (token) {
			case "e": return String(localDayOfWeek);
			case "ee": return addLeadingZeros$1(localDayOfWeek, 2);
			case "eo": return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
			case "eee": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(date, token, localize, options) {
		const dayOfWeek = date.getDay();
		const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
		switch (token) {
			case "c": return String(localDayOfWeek);
			case "cc": return addLeadingZeros$1(localDayOfWeek, token.length);
			case "co": return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
			case "ccc": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return localize.day(dayOfWeek, {
				width: "short",
				context: "standalone"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(date, token, localize) {
		const dayOfWeek = date.getDay();
		const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
		switch (token) {
			case "i": return String(isoDayOfWeek);
			case "ii": return addLeadingZeros$1(isoDayOfWeek, token.length);
			case "io": return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
			case "iii": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(date, token, localize) {
		const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "a":
			case "aa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(date, token, localize) {
		const hours = date.getHours();
		let dayPeriodEnumValue;
		if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
		else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
		else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "b":
			case "bb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(date, token, localize) {
		const hours = date.getHours();
		let dayPeriodEnumValue;
		if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
		else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
		else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
		else dayPeriodEnumValue = dayPeriodEnum.night;
		switch (token) {
			case "B":
			case "BB":
			case "BBB": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(date, token, localize) {
		if (token === "ho") {
			let hours = date.getHours() % 12;
			if (hours === 0) hours = 12;
			return localize.ordinalNumber(hours, { unit: "hour" });
		}
		return lightFormatters.h(date, token);
	},
	H: function(date, token, localize) {
		if (token === "Ho") return localize.ordinalNumber(date.getHours(), { unit: "hour" });
		return lightFormatters.H(date, token);
	},
	K: function(date, token, localize) {
		const hours = date.getHours() % 12;
		if (token === "Ko") return localize.ordinalNumber(hours, { unit: "hour" });
		return addLeadingZeros$1(hours, token.length);
	},
	k: function(date, token, localize) {
		let hours = date.getHours();
		if (hours === 0) hours = 24;
		if (token === "ko") return localize.ordinalNumber(hours, { unit: "hour" });
		return addLeadingZeros$1(hours, token.length);
	},
	m: function(date, token, localize) {
		if (token === "mo") return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
		return lightFormatters.m(date, token);
	},
	s: function(date, token, localize) {
		if (token === "so") return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
		return lightFormatters.s(date, token);
	},
	S: function(date, token) {
		return lightFormatters.S(date, token);
	},
	X: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		if (timezoneOffset === 0) return "Z";
		switch (token) {
			case "X": return formatTimezoneWithOptionalMinutes$1(timezoneOffset);
			case "XXXX":
			case "XX": return formatTimezone$1(timezoneOffset);
			default: return formatTimezone$1(timezoneOffset, ":");
		}
	},
	x: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "x": return formatTimezoneWithOptionalMinutes$1(timezoneOffset);
			case "xxxx":
			case "xx": return formatTimezone$1(timezoneOffset);
			default: return formatTimezone$1(timezoneOffset, ":");
		}
	},
	O: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + formatTimezoneShort$1(timezoneOffset, ":");
			default: return "GMT" + formatTimezone$1(timezoneOffset, ":");
		}
	},
	z: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + formatTimezoneShort$1(timezoneOffset, ":");
			default: return "GMT" + formatTimezone$1(timezoneOffset, ":");
		}
	},
	t: function(date, token, _localize) {
		return addLeadingZeros$1(Math.trunc(+date / 1e3), token.length);
	},
	T: function(date, token, _localize) {
		return addLeadingZeros$1(+date, token.length);
	}
};
function formatTimezoneShort$1(offset, delimiter = "") {
	const sign = offset > 0 ? "-" : "+";
	const absOffset = Math.abs(offset);
	const hours = Math.trunc(absOffset / 60);
	const minutes = absOffset % 60;
	if (minutes === 0) return sign + String(hours);
	return sign + String(hours) + delimiter + addLeadingZeros$1(minutes, 2);
}
function formatTimezoneWithOptionalMinutes$1(offset, delimiter) {
	if (offset % 60 === 0) return (offset > 0 ? "-" : "+") + addLeadingZeros$1(Math.abs(offset) / 60, 2);
	return formatTimezone$1(offset, delimiter);
}
function formatTimezone$1(offset, delimiter = "") {
	const sign = offset > 0 ? "-" : "+";
	const absOffset = Math.abs(offset);
	const hours = addLeadingZeros$1(Math.trunc(absOffset / 60), 2);
	const minutes = addLeadingZeros$1(absOffset % 60, 2);
	return sign + hours + delimiter + minutes;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong) => {
	switch (pattern) {
		case "P": return formatLong.date({ width: "short" });
		case "PP": return formatLong.date({ width: "medium" });
		case "PPP": return formatLong.date({ width: "long" });
		default: return formatLong.date({ width: "full" });
	}
};
var timeLongFormatter = (pattern, formatLong) => {
	switch (pattern) {
		case "p": return formatLong.time({ width: "short" });
		case "pp": return formatLong.time({ width: "medium" });
		case "ppp": return formatLong.time({ width: "long" });
		default: return formatLong.time({ width: "full" });
	}
};
var dateTimeLongFormatter = (pattern, formatLong) => {
	const matchResult = pattern.match(/(P+)(p+)?/) || [];
	const datePattern = matchResult[1];
	const timePattern = matchResult[2];
	if (!timePattern) return dateLongFormatter(pattern, formatLong);
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
		default: dateTimeFormat = formatLong.dateTime({ width: "full" });
	}
	return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
	p: timeLongFormatter,
	P: dateTimeLongFormatter
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function isProtectedDayOfYearToken(token) {
	return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
	return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
	const _message = message(token, format, input);
	console.warn(_message);
	if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
	const subject = token[0] === "Y" ? "years" : "days of the month";
	return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js
var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'([^]*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
/**
* The {@link format} function options.
*/
/**
* @name format
* @alias formatDate
* @category Common Helpers
* @summary Format the date.
*
* @description
* Return the formatted date string in the given format. The result may vary by locale.
*
* > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
* > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* The characters wrapped between two single quotes characters (') are escaped.
* Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
* (see the last example)
*
* Format of the string is based on Unicode Technical Standard #35:
* https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* with a few additions (see note 7 below the table).
*
* Accepted patterns:
* | Unit                            | Pattern | Result examples                   | Notes |
* |---------------------------------|---------|-----------------------------------|-------|
* | Era                             | G..GGG  | AD, BC                            |       |
* |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
* |                                 | GGGGG   | A, B                              |       |
* | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
* |                                 | yy      | 44, 01, 00, 17                    | 5     |
* |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
* |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
* |                                 | yyyyy   | ...                               | 3,5   |
* | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
* |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
* |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
* |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
* |                                 | YYYYY   | ...                               | 3,5   |
* | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
* |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
* |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
* |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
* |                                 | RRRRR   | ...                               | 3,5,7 |
* | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
* |                                 | uu      | -43, 01, 1900, 2017               | 5     |
* |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
* |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
* |                                 | uuuuu   | ...                               | 3,5   |
* | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
* |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | QQ      | 01, 02, 03, 04                    |       |
* |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
* |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
* | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
* |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | qq      | 01, 02, 03, 04                    |       |
* |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
* |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
* | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
* |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | MM      | 01, 02, ..., 12                   |       |
* |                                 | MMM     | Jan, Feb, ..., Dec                |       |
* |                                 | MMMM    | January, February, ..., December  | 2     |
* |                                 | MMMMM   | J, F, ..., D                      |       |
* | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
* |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | LL      | 01, 02, ..., 12                   |       |
* |                                 | LLL     | Jan, Feb, ..., Dec                |       |
* |                                 | LLLL    | January, February, ..., December  | 2     |
* |                                 | LLLLL   | J, F, ..., D                      |       |
* | Local week of year              | w       | 1, 2, ..., 53                     |       |
* |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | ww      | 01, 02, ..., 53                   |       |
* | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
* |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | II      | 01, 02, ..., 53                   | 7     |
* | Day of month                    | d       | 1, 2, ..., 31                     |       |
* |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
* |                                 | dd      | 01, 02, ..., 31                   |       |
* | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
* |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
* |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
* |                                 | DDD     | 001, 002, ..., 365, 366           |       |
* |                                 | DDDD    | ...                               | 3     |
* | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
* |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
* |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
* |                                 | ii      | 01, 02, ..., 07                   | 7     |
* |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
* |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
* |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
* |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
* | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
* |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | ee      | 02, 03, ..., 01                   |       |
* |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | eeeee   | M, T, W, T, F, S, S               |       |
* |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
* |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | cc      | 02, 03, ..., 01                   |       |
* |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | ccccc   | M, T, W, T, F, S, S               |       |
* |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | AM, PM                          | a..aa   | AM, PM                            |       |
* |                                 | aaa     | am, pm                            |       |
* |                                 | aaaa    | a.m., p.m.                        | 2     |
* |                                 | aaaaa   | a, p                              |       |
* | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
* |                                 | bbb     | am, pm, noon, midnight            |       |
* |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
* |                                 | bbbbb   | a, p, n, mi                       |       |
* | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
* |                                 | BBBB    | at night, in the morning, ...     | 2     |
* |                                 | BBBBB   | at night, in the morning, ...     |       |
* | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
* |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
* |                                 | hh      | 01, 02, ..., 11, 12               |       |
* | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
* |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
* |                                 | HH      | 00, 01, 02, ..., 23               |       |
* | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
* |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
* |                                 | KK      | 01, 02, ..., 11, 00               |       |
* | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
* |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
* |                                 | kk      | 24, 01, 02, ..., 23               |       |
* | Minute                          | m       | 0, 1, ..., 59                     |       |
* |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
* |                                 | mm      | 00, 01, ..., 59                   |       |
* | Second                          | s       | 0, 1, ..., 59                     |       |
* |                                 | so      | 0th, 1st, ..., 59th               | 7     |
* |                                 | ss      | 00, 01, ..., 59                   |       |
* | Fraction of second              | S       | 0, 1, ..., 9                      |       |
* |                                 | SS      | 00, 01, ..., 99                   |       |
* |                                 | SSS     | 000, 001, ..., 999                |       |
* |                                 | SSSS    | ...                               | 3     |
* | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
* |                                 | XX      | -0800, +0530, Z                   |       |
* |                                 | XXX     | -08:00, +05:30, Z                 |       |
* |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
* |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
* | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
* |                                 | xx      | -0800, +0530, +0000               |       |
* |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
* |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
* |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
* | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
* |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
* | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
* |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
* | Seconds timestamp               | t       | 512969520                         | 7     |
* |                                 | tt      | ...                               | 3,7   |
* | Milliseconds timestamp          | T       | 512969520900                      | 7     |
* |                                 | TT      | ...                               | 3,7   |
* | Long localized date             | P       | 04/29/1453                        | 7     |
* |                                 | PP      | Apr 29, 1453                      | 7     |
* |                                 | PPP     | April 29th, 1453                  | 7     |
* |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
* | Long localized time             | p       | 12:00 AM                          | 7     |
* |                                 | pp      | 12:00:00 AM                       | 7     |
* |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
* |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
* | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
* |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
* |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
* |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
* Notes:
* 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
*    are the same as "stand-alone" units, but are different in some languages.
*    "Formatting" units are declined according to the rules of the language
*    in the context of a date. "Stand-alone" units are always nominative singular:
*
*    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
*
*    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
*
* 2. Any sequence of the identical letters is a pattern, unless it is escaped by
*    the single quote characters (see below).
*    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
*    the output will be the same as default pattern for this unit, usually
*    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
*    are marked with "2" in the last column of the table.
*
*    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
*
*    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
*
* 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
*    The output will be padded with zeros to match the length of the pattern.
*
*    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
*
* 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
*    These tokens represent the shortest form of the quarter.
*
* 5. The main difference between `y` and `u` patterns are B.C. years:
*
*    | Year | `y` | `u` |
*    |------|-----|-----|
*    | AC 1 |   1 |   1 |
*    | BC 1 |   1 |   0 |
*    | BC 2 |   2 |  -1 |
*
*    Also `yy` always returns the last two digits of a year,
*    while `uu` pads single digit years to 2 characters and returns other years unchanged:
*
*    | Year | `yy` | `uu` |
*    |------|------|------|
*    | 1    |   01 |   01 |
*    | 14   |   14 |   14 |
*    | 376  |   76 |  376 |
*    | 1453 |   53 | 1453 |
*
*    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
*    except local week-numbering years are dependent on `options.weekStartsOn`
*    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
*    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
*
* 6. Specific non-location timezones are currently unavailable in `date-fns`,
*    so right now these tokens fall back to GMT timezones.
*
* 7. These patterns are not in the Unicode Technical Standard #35:
*    - `i`: ISO day of week
*    - `I`: ISO week of year
*    - `R`: ISO week-numbering year
*    - `t`: seconds timestamp
*    - `T`: milliseconds timestamp
*    - `o`: ordinal number modifier
*    - `P`: long localized date
*    - `p`: long localized time
*
* 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
*    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
*    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* @param date - The original date
* @param format - The string of tokens
* @param options - An object with options
*
* @returns The formatted date string
*
* @throws `date` must not be Invalid Date
* @throws `options.locale` must contain `localize` property
* @throws `options.locale` must contain `formatLong` property
* @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws format string contains an unescaped latin alphabet character
*
* @example
* // Represent 11 February 2014 in middle-endian format:
* const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
* //=> '02/11/2014'
*
* @example
* // Represent 2 July 2014 in Esperanto:
* import { eoLocale } from 'date-fns/locale/eo'
* const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
*   locale: eoLocale
* })
* //=> '2-a de julio 2014'
*
* @example
* // Escape string by single quote characters:
* const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
* //=> "3 o'clock"
*/
function format$1(date, formatStr, options) {
	const defaultOptions = getDefaultOptions$1();
	const locale = options?.locale ?? defaultOptions.locale ?? enUS;
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const originalDate = toDate$1(date, options?.in);
	if (!isValid(originalDate)) throw new RangeError("Invalid time value");
	let parts = formatStr.match(longFormattingTokensRegExp$1).map((substring) => {
		const firstCharacter = substring[0];
		if (firstCharacter === "p" || firstCharacter === "P") {
			const longFormatter = longFormatters[firstCharacter];
			return longFormatter(substring, locale.formatLong);
		}
		return substring;
	}).join("").match(formattingTokensRegExp$1).map((substring) => {
		if (substring === "''") return {
			isToken: false,
			value: "'"
		};
		const firstCharacter = substring[0];
		if (firstCharacter === "'") return {
			isToken: false,
			value: cleanEscapedString$1(substring)
		};
		if (formatters$1[firstCharacter]) return {
			isToken: true,
			value: substring
		};
		if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
		return {
			isToken: false,
			value: substring
		};
	});
	if (locale.localize.preprocessor) parts = locale.localize.preprocessor(originalDate, parts);
	const formatterOptions = {
		firstWeekContainsDate,
		weekStartsOn,
		locale
	};
	return parts.map((part) => {
		if (!part.isToken) return part.value;
		const token = part.value;
		if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) warnOrThrowProtectedError(token, formatStr, String(date));
		const formatter = formatters$1[token[0]];
		return formatter(originalDate, token, locale.localize, formatterOptions);
	}).join("");
}
function cleanEscapedString$1(input) {
	const matched = input.match(escapedStringRegExp$1);
	if (!matched) return input;
	return matched[1].replace(doubleQuoteRegExp$1, "'");
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDate.js
/**
* The {@link getDate} function options.
*/
/**
* @name getDate
* @category Day Helpers
* @summary Get the day of the month of the given date.
*
* @description
* Get the day of the month of the given date.
*
* @param date - The given date
* @param options - An object with options.
*
* @returns The day of month
*
* @example
* // Which day of the month is 29 February 2012?
* const result = getDate(new Date(2012, 1, 29))
* //=> 29
*/
function getDate(date, options) {
	return toDate$1(date, options?.in).getDate();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDay.js
/**
* The {@link getDay} function options.
*/
/**
* @name getDay
* @category Weekday Helpers
* @summary Get the day of the week of the given date.
*
* @description
* Get the day of the week of the given date.
*
* @param date - The given date
* @param options - The options
*
* @returns The day of week, 0 represents Sunday
*
* @example
* // Which day of the week is 29 February 2012?
* const result = getDay(new Date(2012, 1, 29))
* //=> 3
*/
function getDay(date, options) {
	return toDate$1(date, options?.in).getDay();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDaysInMonth.js
/**
* The {@link getDaysInMonth} function options.
*/
/**
* @name getDaysInMonth
* @category Month Helpers
* @summary Get the number of days in a month of the given date.
*
* @description
* Get the number of days in a month of the given date, considering the context if provided.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The number of days in a month
*
* @example
* // How many days are in February 2000?
* const result = getDaysInMonth(new Date(2000, 1))
* //=> 29
*/
function getDaysInMonth(date, options) {
	const _date = toDate$1(date, options?.in);
	const year = _date.getFullYear();
	const monthIndex = _date.getMonth();
	const lastDayOfMonth = constructFrom(_date, 0);
	lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
	lastDayOfMonth.setHours(0, 0, 0, 0);
	return lastDayOfMonth.getDate();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDefaultOptions.js
/**
* @name getDefaultOptions
* @category Common Helpers
* @summary Get default options.
* @pure false
*
* @description
* Returns an object that contains defaults for
* `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
* arguments for all functions.
*
* You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
*
* @returns The default options
*
* @example
* const result = getDefaultOptions()
* //=> {}
*
* @example
* setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
* const result = getDefaultOptions()
* //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
*/
function getDefaultOptions() {
	return Object.assign({}, getDefaultOptions$1());
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getHours.js
/**
* The {@link getHours} function options.
*/
/**
* @name getHours
* @category Hour Helpers
* @summary Get the hours of the given date.
*
* @description
* Get the hours of the given date.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The hours
*
* @example
* // Get the hours of 29 February 2012 11:45:00:
* const result = getHours(new Date(2012, 1, 29, 11, 45))
* //=> 11
*/
function getHours(date, options) {
	return toDate$1(date, options?.in).getHours();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISODay.js
/**
* The {@link getISODay} function options.
*/
/**
* @name getISODay
* @category Weekday Helpers
* @summary Get the day of the ISO week of the given date.
*
* @description
* Get the day of the ISO week of the given date,
* which is 7 for Sunday, 1 for Monday etc.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The given date
* @param options - An object with options
*
* @returns The day of ISO week
*
* @example
* // Which day of the ISO week is 26 February 2012?
* const result = getISODay(new Date(2012, 1, 26))
* //=> 7
*/
function getISODay(date, options) {
	const day = toDate$1(date, options?.in).getDay();
	return day === 0 ? 7 : day;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getMilliseconds.js
/**
* @name getMilliseconds
* @category Millisecond Helpers
* @summary Get the milliseconds of the given date.
*
* @description
* Get the milliseconds of the given date.
*
* @param date - The given date
*
* @returns The milliseconds
*
* @example
* // Get the milliseconds of 29 February 2012 11:45:05.123:
* const result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
* //=> 123
*/
function getMilliseconds(date) {
	return toDate$1(date).getMilliseconds();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getMinutes.js
/**
* The {@link getMinutes} function options.
*/
/**
* @name getMinutes
* @category Minute Helpers
* @summary Get the minutes of the given date.
*
* @description
* Get the minutes of the given date.
*
* @param date - The given date
* @param options - The options
*
* @returns The minutes
*
* @example
* // Get the minutes of 29 February 2012 11:45:05:
* const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
* //=> 45
*/
function getMinutes(date, options) {
	return toDate$1(date, options?.in).getMinutes();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getMonth.js
/**
* The {@link getMonth} function options.
*/
/**
* @name getMonth
* @category Month Helpers
* @summary Get the month of the given date.
*
* @description
* Get the month of the given date.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The month index (0-11)
*
* @example
* // Which month is 29 February 2012?
* const result = getMonth(new Date(2012, 1, 29))
* //=> 1
*/
function getMonth(date, options) {
	return toDate$1(date, options?.in).getMonth();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getSeconds.js
/**
* @name getSeconds
* @category Second Helpers
* @summary Get the seconds of the given date.
*
* @description
* Get the seconds of the given date.
*
* @param date - The given date
*
* @returns The seconds
*
* @example
* // Get the seconds of 29 February 2012 11:45:05.123:
* const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
* //=> 5
*/
function getSeconds(date) {
	return toDate$1(date).getSeconds();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getTime.js
/**
* @name getTime
* @category Timestamp Helpers
* @summary Get the milliseconds timestamp of the given date.
*
* @description
* Get the milliseconds timestamp of the given date.
*
* @param date - The given date
*
* @returns The timestamp
*
* @example
* // Get the timestamp of 29 February 2012 11:45:05.123:
* const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
* //=> 1330515905123
*/
function getTime(date) {
	return +toDate$1(date);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getYear.js
/**
* The {@link getYear} function options.
*/
/**
* @name getYear
* @category Year Helpers
* @summary Get the year of the given date.
*
* @description
* Get the year of the given date.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The year
*
* @example
* // Which year is 2 July 2014?
* const result = getYear(new Date(2014, 6, 2))
* //=> 2014
*/
function getYear(date, options) {
	return toDate$1(date, options?.in).getFullYear();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/transpose.js
/**
* @name transpose
* @category Generic Helpers
* @summary Transpose the date to the given constructor.
*
* @description
* The function transposes the date to the given constructor. It helps you
* to transpose the date in the system time zone to say `UTCDate` or any other
* date extension.
*
* @typeParam InputDate - The input `Date` type derived from the passed argument.
* @typeParam ResultDate - The result `Date` type derived from the passed constructor.
*
* @param date - The date to use values from
* @param constructor - The date constructor to use
*
* @returns Date transposed to the given constructor
*
* @example
* // Create July 10, 2022 00:00 in locale time zone
* const date = new Date(2022, 6, 10)
* //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
*
* @example
* // Transpose the date to July 10, 2022 00:00 in UTC
* transpose(date, UTCDate)
* //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
*/
function transpose(date, constructor) {
	const date_ = isConstructor(constructor) ? new constructor(0) : constructFrom(constructor, 0);
	date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	date_.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
	return date_;
}
function isConstructor(constructor) {
	return typeof constructor === "function" && constructor.prototype?.constructor === constructor;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/Setter.js
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = class {
	subPriority = 0;
	validate(_utcDate, _options) {
		return true;
	}
};
var ValueSetter = class extends Setter {
	constructor(value, validateValue, setValue, priority, subPriority) {
		super();
		this.value = value;
		this.validateValue = validateValue;
		this.setValue = setValue;
		this.priority = priority;
		if (subPriority) this.subPriority = subPriority;
	}
	validate(date, options) {
		return this.validateValue(date, this.value, options);
	}
	set(date, flags, options) {
		return this.setValue(date, flags, this.value, options);
	}
};
var DateTimezoneSetter = class extends Setter {
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/Parser.js
var Parser = class {
	run(dateString, token, match, options) {
		const result = this.parse(dateString, token, match, options);
		if (!result) return null;
		return {
			setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
			rest: result.rest
		};
	}
	validate(_utcDate, _value, _options) {
		return true;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/EraParser.js
var EraParser = class extends Parser {
	priority = 140;
	parse(dateString, token, match) {
		switch (token) {
			case "G":
			case "GG":
			case "GGG": return match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
			case "GGGGG": return match.era(dateString, { width: "narrow" });
			default: return match.era(dateString, { width: "wide" }) || match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
		}
	}
	set(date, flags, value) {
		flags.era = value;
		date.setFullYear(value, 0, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"R",
		"u",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/constants.js
var numericPatterns = {
	month: /^(1[0-2]|0?\d)/,
	date: /^(3[0-1]|[0-2]?\d)/,
	dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
	week: /^(5[0-3]|[0-4]?\d)/,
	hour23h: /^(2[0-3]|[0-1]?\d)/,
	hour24h: /^(2[0-4]|[0-1]?\d)/,
	hour11h: /^(1[0-1]|0?\d)/,
	hour12h: /^(1[0-2]|0?\d)/,
	minute: /^[0-5]?\d/,
	second: /^[0-5]?\d/,
	singleDigit: /^\d/,
	twoDigits: /^\d{1,2}/,
	threeDigits: /^\d{1,3}/,
	fourDigits: /^\d{1,4}/,
	anyDigitsSigned: /^-?\d+/,
	singleDigitSigned: /^-?\d/,
	twoDigitsSigned: /^-?\d{1,2}/,
	threeDigitsSigned: /^-?\d{1,3}/,
	fourDigitsSigned: /^-?\d{1,4}/
};
var timezonePatterns = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/utils.js
function mapValue(parseFnResult, mapFn) {
	if (!parseFnResult) return parseFnResult;
	return {
		value: mapFn(parseFnResult.value),
		rest: parseFnResult.rest
	};
}
function parseNumericPattern(pattern, dateString) {
	const matchResult = dateString.match(pattern);
	if (!matchResult) return null;
	return {
		value: parseInt(matchResult[0], 10),
		rest: dateString.slice(matchResult[0].length)
	};
}
function parseTimezonePattern(pattern, dateString) {
	const matchResult = dateString.match(pattern);
	if (!matchResult) return null;
	if (matchResult[0] === "Z") return {
		value: 0,
		rest: dateString.slice(1)
	};
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
		case 1: return parseNumericPattern(numericPatterns.singleDigit, dateString);
		case 2: return parseNumericPattern(numericPatterns.twoDigits, dateString);
		case 3: return parseNumericPattern(numericPatterns.threeDigits, dateString);
		case 4: return parseNumericPattern(numericPatterns.fourDigits, dateString);
		default: return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
	}
}
function parseNDigitsSigned(n, dateString) {
	switch (n) {
		case 1: return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
		case 2: return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
		case 3: return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
		case 4: return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
		default: return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
	}
}
function dayPeriodEnumToHours(dayPeriod) {
	switch (dayPeriod) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
	const isCommonEra = currentYear > 0;
	const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
	let result;
	if (absCurrentYear <= 50) result = twoDigitYear || 100;
	else {
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
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/YearParser.js
var YearParser = class extends Parser {
	priority = 130;
	incompatibleTokens = [
		"Y",
		"R",
		"u",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	parse(dateString, token, match) {
		const valueCallback = (year) => ({
			year,
			isTwoDigitYear: token === "yy"
		});
		switch (token) {
			case "y": return mapValue(parseNDigits(4, dateString), valueCallback);
			case "yo": return mapValue(match.ordinalNumber(dateString, { unit: "year" }), valueCallback);
			default: return mapValue(parseNDigits(token.length, dateString), valueCallback);
		}
	}
	validate(_date, value) {
		return value.isTwoDigitYear || value.year > 0;
	}
	set(date, flags, value) {
		const currentYear = date.getFullYear();
		if (value.isTwoDigitYear) {
			const normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
			date.setFullYear(normalizedTwoDigitYear, 0, 1);
			date.setHours(0, 0, 0, 0);
			return date;
		}
		const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
		date.setFullYear(year, 0, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js
var LocalWeekYearParser = class extends Parser {
	priority = 130;
	parse(dateString, token, match) {
		const valueCallback = (year) => ({
			year,
			isTwoDigitYear: token === "YY"
		});
		switch (token) {
			case "Y": return mapValue(parseNDigits(4, dateString), valueCallback);
			case "Yo": return mapValue(match.ordinalNumber(dateString, { unit: "year" }), valueCallback);
			default: return mapValue(parseNDigits(token.length, dateString), valueCallback);
		}
	}
	validate(_date, value) {
		return value.isTwoDigitYear || value.year > 0;
	}
	set(date, flags, value, options) {
		const currentYear = getWeekYear(date, options);
		if (value.isTwoDigitYear) {
			const normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
			date.setFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js
var ISOWeekYearParser = class extends Parser {
	priority = 130;
	parse(dateString, token) {
		if (token === "R") return parseNDigitsSigned(4, dateString);
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js
var ExtendedYearParser = class extends Parser {
	priority = 130;
	parse(dateString, token) {
		if (token === "u") return parseNDigitsSigned(4, dateString);
		return parseNDigitsSigned(token.length, dateString);
	}
	set(date, _flags, value) {
		date.setFullYear(value, 0, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"R",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/QuarterParser.js
var QuarterParser = class extends Parser {
	priority = 120;
	parse(dateString, token, match) {
		switch (token) {
			case "Q":
			case "QQ": return parseNDigits(token.length, dateString);
			case "Qo": return match.ordinalNumber(dateString, { unit: "quarter" });
			case "QQQ": return match.quarter(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.quarter(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "QQQQQ": return match.quarter(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.quarter(dateString, {
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js
var StandAloneQuarterParser = class extends Parser {
	priority = 120;
	parse(dateString, token, match) {
		switch (token) {
			case "q":
			case "qq": return parseNDigits(token.length, dateString);
			case "qo": return match.ordinalNumber(dateString, { unit: "quarter" });
			case "qqq": return match.quarter(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.quarter(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "qqqqq": return match.quarter(dateString, {
				width: "narrow",
				context: "standalone"
			});
			default: return match.quarter(dateString, {
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/MonthParser.js
var MonthParser = class extends Parser {
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
			case "M": return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
			case "MM": return mapValue(parseNDigits(2, dateString), valueCallback);
			case "Mo": return mapValue(match.ordinalNumber(dateString, { unit: "month" }), valueCallback);
			case "MMM": return match.month(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.month(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "MMMMM": return match.month(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.month(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.month(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.month(dateString, {
				width: "narrow",
				context: "formatting"
			});
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js
var StandAloneMonthParser = class extends Parser {
	priority = 110;
	parse(dateString, token, match) {
		const valueCallback = (value) => value - 1;
		switch (token) {
			case "L": return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
			case "LL": return mapValue(parseNDigits(2, dateString), valueCallback);
			case "Lo": return mapValue(match.ordinalNumber(dateString, { unit: "month" }), valueCallback);
			case "LLL": return match.month(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.month(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "LLLLL": return match.month(dateString, {
				width: "narrow",
				context: "standalone"
			});
			default: return match.month(dateString, {
				width: "wide",
				context: "standalone"
			}) || match.month(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.month(dateString, {
				width: "narrow",
				context: "standalone"
			});
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setWeek.js
/**
* The {@link setWeek} function options.
*/
/**
* @name setWeek
* @category Week Helpers
* @summary Set the local week to the given date.
*
* @description
* Set the local week to the given date, saving the weekday number.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param week - The week of the new date
* @param options - An object with options
*
* @returns The new date with the local week set
*
* @example
* // Set the 1st week to 2 January 2005 with default options:
* const result = setWeek(new Date(2005, 0, 2), 1)
* //=> Sun Dec 26 2004 00:00:00
*
* @example
* // Set the 1st week to 2 January 2005,
* // if Monday is the first day of the week,
* // and the first week of the year always contains 4 January:
* const result = setWeek(new Date(2005, 0, 2), 1, {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> Sun Jan 4 2004 00:00:00
*/
function setWeek(date, week, options) {
	const date_ = toDate$1(date, options?.in);
	const diff = getWeek(date_, options) - week;
	date_.setDate(date_.getDate() - diff * 7);
	return toDate$1(date_, options?.in);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var LocalWeekParser = class extends Parser {
	priority = 100;
	parse(dateString, token, match) {
		switch (token) {
			case "w": return parseNumericPattern(numericPatterns.week, dateString);
			case "wo": return match.ordinalNumber(dateString, { unit: "week" });
			default: return parseNDigits(token.length, dateString);
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setISOWeek.js
/**
* The {@link setISOWeek} function options.
*/
/**
* @name setISOWeek
* @category ISO Week Helpers
* @summary Set the ISO week to the given date.
*
* @description
* Set the ISO week to the given date, saving the weekday number.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The `Date` type of the context function.
*
* @param date - The date to be changed
* @param week - The ISO week of the new date
* @param options - An object with options
*
* @returns The new date with the ISO week set
*
* @example
* // Set the 53rd ISO week to 7 August 2004:
* const result = setISOWeek(new Date(2004, 7, 7), 53)
* //=> Sat Jan 01 2005 00:00:00
*/
function setISOWeek(date, week, options) {
	const _date = toDate$1(date, options?.in);
	const diff = getISOWeek(_date, options) - week;
	_date.setDate(_date.getDate() - diff * 7);
	return _date;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var ISOWeekParser = class extends Parser {
	priority = 100;
	parse(dateString, token, match) {
		switch (token) {
			case "I": return parseNumericPattern(numericPatterns.week, dateString);
			case "Io": return match.ordinalNumber(dateString, { unit: "week" });
			default: return parseNDigits(token.length, dateString);
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/DateParser.js
var DAYS_IN_MONTH$1 = [
	31,
	28,
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
var DAYS_IN_MONTH_LEAP_YEAR$1 = [
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
var DateParser = class extends Parser {
	priority = 90;
	subPriority = 1;
	parse(dateString, token, match) {
		switch (token) {
			case "d": return parseNumericPattern(numericPatterns.date, dateString);
			case "do": return match.ordinalNumber(dateString, { unit: "date" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(date, value) {
		const isLeapYear = isLeapYearIndex$1(date.getFullYear());
		const month = date.getMonth();
		if (isLeapYear) return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR$1[month];
		else return value >= 1 && value <= DAYS_IN_MONTH$1[month];
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js
var DayOfYearParser = class extends Parser {
	priority = 90;
	subpriority = 1;
	parse(dateString, token, match) {
		switch (token) {
			case "D":
			case "DD": return parseNumericPattern(numericPatterns.dayOfYear, dateString);
			case "Do": return match.ordinalNumber(dateString, { unit: "date" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(date, value) {
		if (isLeapYearIndex$1(date.getFullYear())) return value >= 1 && value <= 366;
		else return value >= 1 && value <= 365;
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setDay.js
/**
* The {@link setDay} function options.
*/
/**
* @name setDay
* @category Weekday Helpers
* @summary Set the day of the week to the given date.
*
* @description
* Set the day of the week to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param day - The day of the week of the new date
* @param options - An object with options.
*
* @returns The new date with the day of the week set
*
* @example
* // Set week day to Sunday, with the default weekStartsOn of Sunday:
* const result = setDay(new Date(2014, 8, 1), 0)
* //=> Sun Aug 31 2014 00:00:00
*
* @example
* // Set week day to Sunday, with a weekStartsOn of Monday:
* const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
* //=> Sun Sep 07 2014 00:00:00
*/
function setDay(date, day, options) {
	const defaultOptions = getDefaultOptions$1();
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const date_ = toDate$1(date, options?.in);
	const currentDay = date_.getDay();
	const dayIndex = (day % 7 + 7) % 7;
	const delta = 7 - weekStartsOn;
	return addDays(date_, day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7, options);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/DayParser.js
var DayParser = class extends Parser {
	priority = 90;
	parse(dateString, token, match) {
		switch (token) {
			case "E":
			case "EE":
			case "EEE": return match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEE": return match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.day(dateString, {
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
			});
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
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js
var LocalDayParser = class extends Parser {
	priority = 90;
	parse(dateString, token, match, options) {
		const valueCallback = (value) => {
			const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
			return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
		};
		switch (token) {
			case "e":
			case "ee": return mapValue(parseNDigits(token.length, dateString), valueCallback);
			case "eo": return mapValue(match.ordinalNumber(dateString, { unit: "day" }), valueCallback);
			case "eee": return match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeee": return match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.day(dateString, {
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
			});
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js
var StandAloneLocalDayParser = class extends Parser {
	priority = 90;
	parse(dateString, token, match, options) {
		const valueCallback = (value) => {
			const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
			return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
		};
		switch (token) {
			case "c":
			case "cc": return mapValue(parseNDigits(token.length, dateString), valueCallback);
			case "co": return mapValue(match.ordinalNumber(dateString, { unit: "day" }), valueCallback);
			case "ccc": return match.day(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.day(dateString, {
				width: "short",
				context: "standalone"
			}) || match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "ccccc": return match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return match.day(dateString, {
				width: "short",
				context: "standalone"
			}) || match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
			default: return match.day(dateString, {
				width: "wide",
				context: "standalone"
			}) || match.day(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.day(dateString, {
				width: "short",
				context: "standalone"
			}) || match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setISODay.js
/**
* The {@link setISODay} function options.
*/
/**
* @name setISODay
* @category Weekday Helpers
* @summary Set the day of the ISO week to the given date.
*
* @description
* Set the day of the ISO week to the given date.
* ISO week starts with Monday.
* 7 is the index of Sunday, 1 is the index of Monday, etc.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param day - The day of the ISO week of the new date
* @param options - An object with options
*
* @returns The new date with the day of the ISO week set
*
* @example
* // Set Sunday to 1 September 2014:
* const result = setISODay(new Date(2014, 8, 1), 7)
* //=> Sun Sep 07 2014 00:00:00
*/
function setISODay(date, day, options) {
	const date_ = toDate$1(date, options?.in);
	return addDays(date_, day - getISODay(date_, options), options);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var ISODayParser = class extends Parser {
	priority = 90;
	parse(dateString, token, match) {
		const valueCallback = (value) => {
			if (value === 0) return 7;
			return value;
		};
		switch (token) {
			case "i":
			case "ii": return parseNDigits(token.length, dateString);
			case "io": return match.ordinalNumber(dateString, { unit: "day" });
			case "iii": return mapValue(match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			}), valueCallback);
			case "iiiii": return mapValue(match.day(dateString, {
				width: "narrow",
				context: "formatting"
			}), valueCallback);
			case "iiiiii": return mapValue(match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			}), valueCallback);
			default: return mapValue(match.day(dateString, {
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
			}), valueCallback);
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/AMPMParser.js
var AMPMParser = class extends Parser {
	priority = 80;
	parse(dateString, token, match) {
		switch (token) {
			case "a":
			case "aa":
			case "aaa": return match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "aaaaa": return match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.dayPeriod(dateString, {
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
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js
var AMPMMidnightParser = class extends Parser {
	priority = 80;
	parse(dateString, token, match) {
		switch (token) {
			case "b":
			case "bb":
			case "bbb": return match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "bbbbb": return match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.dayPeriod(dateString, {
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
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js
var DayPeriodParser = class extends Parser {
	priority = 80;
	parse(dateString, token, match) {
		switch (token) {
			case "B":
			case "BB":
			case "BBB": return match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "BBBBB": return match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.dayPeriod(dateString, {
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
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js
var Hour1to12Parser = class extends Parser {
	priority = 70;
	parse(dateString, token, match) {
		switch (token) {
			case "h": return parseNumericPattern(numericPatterns.hour12h, dateString);
			case "ho": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 12;
	}
	set(date, _flags, value) {
		const isPM = date.getHours() >= 12;
		if (isPM && value < 12) date.setHours(value + 12, 0, 0, 0);
		else if (!isPM && value === 12) date.setHours(0, 0, 0, 0);
		else date.setHours(value, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"H",
		"K",
		"k",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js
var Hour0to23Parser = class extends Parser {
	priority = 70;
	parse(dateString, token, match) {
		switch (token) {
			case "H": return parseNumericPattern(numericPatterns.hour23h, dateString);
			case "Ho": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 23;
	}
	set(date, _flags, value) {
		date.setHours(value, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"K",
		"k",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js
var Hour0To11Parser = class extends Parser {
	priority = 70;
	parse(dateString, token, match) {
		switch (token) {
			case "K": return parseNumericPattern(numericPatterns.hour11h, dateString);
			case "Ko": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 11;
	}
	set(date, _flags, value) {
		if (date.getHours() >= 12 && value < 12) date.setHours(value + 12, 0, 0, 0);
		else date.setHours(value, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"h",
		"H",
		"k",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js
var Hour1To24Parser = class extends Parser {
	priority = 70;
	parse(dateString, token, match) {
		switch (token) {
			case "k": return parseNumericPattern(numericPatterns.hour24h, dateString);
			case "ko": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
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
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"H",
		"K",
		"t",
		"T"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/MinuteParser.js
var MinuteParser = class extends Parser {
	priority = 60;
	parse(dateString, token, match) {
		switch (token) {
			case "m": return parseNumericPattern(numericPatterns.minute, dateString);
			case "mo": return match.ordinalNumber(dateString, { unit: "minute" });
			default: return parseNDigits(token.length, dateString);
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/SecondParser.js
var SecondParser = class extends Parser {
	priority = 50;
	parse(dateString, token, match) {
		switch (token) {
			case "s": return parseNumericPattern(numericPatterns.second, dateString);
			case "so": return match.ordinalNumber(dateString, { unit: "second" });
			default: return parseNDigits(token.length, dateString);
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js
var FractionOfSecondParser = class extends Parser {
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
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js
var ISOTimezoneWithZParser = class extends Parser {
	priority = 10;
	parse(dateString, token) {
		switch (token) {
			case "X": return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
			case "XX": return parseTimezonePattern(timezonePatterns.basic, dateString);
			case "XXXX": return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
			case "XXXXX": return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
			default: return parseTimezonePattern(timezonePatterns.extended, dateString);
		}
	}
	set(date, flags, value) {
		if (flags.timestampIsSet) return date;
		return constructFrom(date, date.getTime() - getTimezoneOffsetInMilliseconds$1(date) - value);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js
var ISOTimezoneParser = class extends Parser {
	priority = 10;
	parse(dateString, token) {
		switch (token) {
			case "x": return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
			case "xx": return parseTimezonePattern(timezonePatterns.basic, dateString);
			case "xxxx": return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
			case "xxxxx": return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
			default: return parseTimezonePattern(timezonePatterns.extended, dateString);
		}
	}
	set(date, flags, value) {
		if (flags.timestampIsSet) return date;
		return constructFrom(date, date.getTime() - getTimezoneOffsetInMilliseconds$1(date) - value);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js
var TimestampSecondsParser = class extends Parser {
	priority = 40;
	parse(dateString) {
		return parseAnyDigitsSigned(dateString);
	}
	set(date, _flags, value) {
		return [constructFrom(date, value * 1e3), { timestampIsSet: true }];
	}
	incompatibleTokens = "*";
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js
var TimestampMillisecondsParser = class extends Parser {
	priority = 20;
	parse(dateString) {
		return parseAnyDigitsSigned(dateString);
	}
	set(date, _flags, value) {
		return [constructFrom(date, value), { timestampIsSet: true }];
	}
	incompatibleTokens = "*";
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse/_lib/parsers.js
var parsers = {
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
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js
/**
* The {@link parse} function options.
*/
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
* @name parse
* @category Common Helpers
* @summary Parse the date.
*
* @description
* Return the date parsed from string using the given format string.
*
* > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
* > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* The characters in the format string wrapped between two single quotes characters (') are escaped.
* Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
*
* Format of the format string is based on Unicode Technical Standard #35:
* https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* with a few additions (see note 5 below the table).
*
* Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
* and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
*
* ```javascript
* parse('23 AM', 'HH a', new Date())
* //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
* ```
*
* See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
*
* Accepted format string patterns:
* | Unit                            |Prior| Pattern | Result examples                   | Notes |
* |---------------------------------|-----|---------|-----------------------------------|-------|
* | Era                             | 140 | G..GGG  | AD, BC                            |       |
* |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
* |                                 |     | GGGGG   | A, B                              |       |
* | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
* |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
* |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
* |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
* |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
* |                                 |     | yyyyy   | ...                               | 2,4   |
* | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
* |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
* |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
* |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
* |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
* |                                 |     | YYYYY   | ...                               | 2,4   |
* | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
* |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
* |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
* |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
* |                                 |     | RRRRR   | ...                               | 2,4,5 |
* | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
* |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
* |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
* |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
* |                                 |     | uuuuu   | ...                               | 2,4   |
* | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
* |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
* |                                 |     | QQ      | 01, 02, 03, 04                    |       |
* |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
* |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
* | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
* |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
* |                                 |     | qq      | 01, 02, 03, 04                    |       |
* |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
* |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
* | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
* |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
* |                                 |     | MM      | 01, 02, ..., 12                   |       |
* |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
* |                                 |     | MMMM    | January, February, ..., December  | 2     |
* |                                 |     | MMMMM   | J, F, ..., D                      |       |
* | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
* |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
* |                                 |     | LL      | 01, 02, ..., 12                   |       |
* |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
* |                                 |     | LLLL    | January, February, ..., December  | 2     |
* |                                 |     | LLLLL   | J, F, ..., D                      |       |
* | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
* |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
* |                                 |     | ww      | 01, 02, ..., 53                   |       |
* | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
* |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
* |                                 |     | II      | 01, 02, ..., 53                   | 5     |
* | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
* |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
* |                                 |     | dd      | 01, 02, ..., 31                   |       |
* | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
* |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
* |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
* |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
* |                                 |     | DDDD    | ...                               | 2     |
* | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
* |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
* |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
* |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
* |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
* |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
* |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
* |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
* | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
* |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
* |                                 |     | ee      | 02, 03, ..., 01                   |       |
* |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
* |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
* |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
* |                                 |     | cc      | 02, 03, ..., 01                   |       |
* |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
* |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
* |                                 |     | aaaa    | a.m., p.m.                        | 2     |
* |                                 |     | aaaaa   | a, p                              |       |
* | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
* |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
* |                                 |     | bbbbb   | a, p, n, mi                       |       |
* | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
* |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
* |                                 |     | BBBBB   | at night, in the morning, ...     |       |
* | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
* |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
* |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
* | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
* |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
* |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
* | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
* |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
* |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
* | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
* |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
* |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
* | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
* |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
* |                                 |     | mm      | 00, 01, ..., 59                   |       |
* | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
* |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
* |                                 |     | ss      | 00, 01, ..., 59                   |       |
* | Seconds timestamp               |  40 | t       | 512969520                         |       |
* |                                 |     | tt      | ...                               | 2     |
* | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
* |                                 |     | SS      | 00, 01, ..., 99                   |       |
* |                                 |     | SSS     | 000, 001, ..., 999                |       |
* |                                 |     | SSSS    | ...                               | 2     |
* | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
* |                                 |     | TT      | ...                               | 2     |
* | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
* |                                 |     | XX      | -0800, +0530, Z                   |       |
* |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
* |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
* |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
* | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
* |                                 |     | xx      | -0800, +0530, +0000               |       |
* |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
* |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
* |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
* | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
* |                                 |     | PP      | May 29, 1453                      |       |
* |                                 |     | PPP     | May 29th, 1453                    |       |
* |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
* | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
* |                                 |     | pp      | 12:00:00 AM                       |       |
* | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
* |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
* |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
* |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
* Notes:
* 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
*    are the same as "stand-alone" units, but are different in some languages.
*    "Formatting" units are declined according to the rules of the language
*    in the context of a date. "Stand-alone" units are always nominative singular.
*    In `format` function, they will produce different result:
*
*    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
*
*    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
*
*    `parse` will try to match both formatting and stand-alone units interchangeably.
*
* 2. Any sequence of the identical letters is a pattern, unless it is escaped by
*    the single quote characters (see below).
*    If the sequence is longer than listed in table:
*    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
*      as wide as the sequence
*    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
*      These variations are marked with "2" in the last column of the table.
*
* 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
*    These tokens represent the shortest form of the quarter.
*
* 4. The main difference between `y` and `u` patterns are B.C. years:
*
*    | Year | `y` | `u` |
*    |------|-----|-----|
*    | AC 1 |   1 |   1 |
*    | BC 1 |   1 |   0 |
*    | BC 2 |   2 |  -1 |
*
*    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
*
*    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
*
*    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
*
*    while `uu` will just assign the year as is:
*
*    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
*
*    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
*
*    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
*    except local week-numbering years are dependent on `options.weekStartsOn`
*    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
*    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
*
* 5. These patterns are not in the Unicode Technical Standard #35:
*    - `i`: ISO day of week
*    - `I`: ISO week of year
*    - `R`: ISO week-numbering year
*    - `o`: ordinal number modifier
*    - `P`: long localized date
*    - `p`: long localized time
*
* 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
*    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 7. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
*    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
*    on the given locale.
*
*    using `en-US` locale: `P` => `MM/dd/yyyy`
*    using `en-US` locale: `p` => `hh:mm a`
*    using `pt-BR` locale: `P` => `dd/MM/yyyy`
*    using `pt-BR` locale: `p` => `HH:mm`
*
* Values will be assigned to the date in the descending order of its unit's priority.
* Units of an equal priority overwrite each other in the order of appearance.
*
* If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
* the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
*
* `referenceDate` must be passed for correct work of the function.
* If you're not sure which `referenceDate` to supply, create a new instance of Date:
* `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
* In this case parsing will be done in the context of the current date.
* If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
* then `Invalid Date` will be returned.
*
* The result may vary by locale.
*
* If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
*
* If parsing failed, `Invalid Date` will be returned.
* Invalid Date is a Date, whose time value is NaN.
* Time value of Date: http://es5.github.io/#x15.9.1.1
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param dateStr - The string to parse
* @param formatStr - The string of tokens
* @param referenceDate - defines values missing from the parsed dateString
* @param options - An object with options.
*   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* @returns The parsed date
*
* @throws `options.locale` must contain `match` property
* @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws format string contains an unescaped latin alphabet character
*
* @example
* // Parse 11 February 2014 from middle-endian format:
* var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
* //=> Tue Feb 11 2014 00:00:00
*
* @example
* // Parse 28th of February in Esperanto locale in the context of 2010 year:
* import eo from 'date-fns/locale/eo'
* var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
*   locale: eo
* })
* //=> Sun Feb 28 2010 00:00:00
*/
function parse(dateStr, formatStr, referenceDate, options) {
	const invalidDate = () => constructFrom(options?.in || referenceDate, NaN);
	const defaultOptions = getDefaultOptions();
	const locale = options?.locale ?? defaultOptions.locale ?? enUS;
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	if (!formatStr) return dateStr ? invalidDate() : toDate$1(referenceDate, options?.in);
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
		if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) warnOrThrowProtectedError(token, formatStr, dateStr);
		if (!options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) warnOrThrowProtectedError(token, formatStr, dateStr);
		const firstCharacter = token[0];
		const parser = parsers[firstCharacter];
		if (parser) {
			const { incompatibleTokens } = parser;
			if (Array.isArray(incompatibleTokens)) {
				const incompatibleToken = usedTokens.find((usedToken) => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter);
				if (incompatibleToken) throw new RangeError(`The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`);
			} else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) throw new RangeError(`The format string mustn't contain \`${token}\` and any other token at the same time`);
			usedTokens.push({
				token: firstCharacter,
				fullToken: token
			});
			const parseResult = parser.run(dateStr, token, locale.match, subFnOptions);
			if (!parseResult) return invalidDate();
			setters.push(parseResult.setter);
			dateStr = parseResult.rest;
		} else {
			if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
			if (token === "''") token = "'";
			else if (firstCharacter === "'") token = cleanEscapedString(token);
			if (dateStr.indexOf(token) === 0) dateStr = dateStr.slice(token.length);
			else return invalidDate();
		}
	}
	if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) return invalidDate();
	const uniquePrioritySetters = setters.map((setter) => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map((priority) => setters.filter((setter) => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)).map((setterArray) => setterArray[0]);
	let date = toDate$1(referenceDate, options?.in);
	if (isNaN(+date)) return invalidDate();
	const flags = {};
	for (const setter of uniquePrioritySetters) {
		if (!setter.validate(date, subFnOptions)) return invalidDate();
		const result = setter.set(date, flags, subFnOptions);
		if (Array.isArray(result)) {
			date = result[0];
			Object.assign(flags, result[1]);
		} else date = result;
	}
	return date;
}
function cleanEscapedString(input) {
	return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfHour.js
/**
* The {@link startOfHour} function options.
*/
/**
* @name startOfHour
* @category Hour Helpers
* @summary Return the start of an hour for the given date.
*
* @description
* Return the start of an hour for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of an hour
*
* @example
* // The start of an hour for 2 September 2014 11:55:00:
* const result = startOfHour(new Date(2014, 8, 2, 11, 55))
* //=> Tue Sep 02 2014 11:00:00
*/
function startOfHour(date, options) {
	const _date = toDate$1(date, options?.in);
	_date.setMinutes(0, 0, 0);
	return _date;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMinute.js
/**
* The {@link startOfMinute} function options.
*/
/**
* @name startOfMinute
* @category Minute Helpers
* @summary Return the start of a minute for the given date.
*
* @description
* Return the start of a minute for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a minute
*
* @example
* // The start of a minute for 1 December 2014 22:15:45.400:
* const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
* //=> Mon Dec 01 2014 22:15:00
*/
function startOfMinute(date, options) {
	const date_ = toDate$1(date, options?.in);
	date_.setSeconds(0, 0);
	return date_;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameMonth.js
/**
* The {@link isSameMonth} function options.
*/
/**
* @name isSameMonth
* @category Month Helpers
* @summary Are the given dates in the same month (and year)?
*
* @description
* Are the given dates in the same month (and year)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same month (and year)
*
* @example
* // Are 2 September 2014 and 25 September 2014 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
* //=> true
*
* @example
* // Are 2 September 2014 and 25 September 2015 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
* //=> false
*/
function isSameMonth(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameQuarter.js
/**
* The {@link isSameQuarter} function options.
*/
/**
* @name isSameQuarter
* @category Quarter Helpers
* @summary Are the given dates in the same quarter (and year)?
*
* @description
* Are the given dates in the same quarter (and year)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same quarter (and year)
*
* @example
* // Are 1 January 2014 and 8 March 2014 in the same quarter?
* const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
* //=> true
*
* @example
* // Are 1 January 2014 and 1 January 2015 in the same quarter?
* const result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
* //=> false
*/
function isSameQuarter(laterDate, earlierDate, options) {
	const [dateLeft_, dateRight_] = normalizeDates(options?.in, laterDate, earlierDate);
	return +startOfQuarter(dateLeft_) === +startOfQuarter(dateRight_);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfSecond.js
/**
* The {@link startOfSecond} function options.
*/
/**
* @name startOfSecond
* @category Second Helpers
* @summary Return the start of a second for the given date.
*
* @description
* Return the start of a second for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a second
*
* @example
* // The start of a second for 1 December 2014 22:15:45.400:
* const result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
* //=> Mon Dec 01 2014 22:15:45.000
*/
function startOfSecond(date, options) {
	const date_ = toDate$1(date, options?.in);
	date_.setMilliseconds(0);
	return date_;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameYear.js
/**
* The {@link isSameYear} function options.
*/
/**
* @name isSameYear
* @category Year Helpers
* @summary Are the given dates in the same year?
*
* @description
* Are the given dates in the same year?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same year
*
* @example
* // Are 2 September 2014 and 25 September 2014 in the same year?
* const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
* //=> true
*/
function isSameYear(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return laterDate_.getFullYear() === earlierDate_.getFullYear();
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setMonth.js
/**
* The {@link setMonth} function options.
*/
/**
* @name setMonth
* @category Month Helpers
* @summary Set the month to the given date.
*
* @description
* Set the month to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param month - The month index to set (0-11)
* @param options - The options
*
* @returns The new date with the month set
*
* @example
* // Set February to 1 September 2014:
* const result = setMonth(new Date(2014, 8, 1), 1)
* //=> Sat Feb 01 2014 00:00:00
*/
function setMonth(date, month, options) {
	const _date = toDate$1(date, options?.in);
	const year = _date.getFullYear();
	const day = _date.getDate();
	const midMonth = constructFrom(options?.in || date, 0);
	midMonth.setFullYear(year, month, 15);
	midMonth.setHours(0, 0, 0, 0);
	const daysInMonth = getDaysInMonth(midMonth);
	_date.setMonth(month, Math.min(day, daysInMonth));
	return _date;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/set.js
/**
* The {@link set} function options.
*/
/**
* @name set
* @category Common Helpers
* @summary Set date values to a given date.
*
* @description
* Set date values to a given date.
*
* Sets time values to date from object `values`.
* A value is not set if it is undefined or null or doesn't exist in `values`.
*
* Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
* to use native `Date#setX` methods. If you use this function, you may not want to include the
* other `setX` functions that date-fns provides if you are concerned about the bundle size.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param values - The date values to be set
* @param options - The options
*
* @returns The new date with options set
*
* @example
* // Transform 1 September 2014 into 20 October 2015 in a single line:
* const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
* //=> Tue Oct 20 2015 00:00:00
*
* @example
* // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
* const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
* //=> Mon Sep 01 2014 12:23:45
*/
function set(date, values, options) {
	let _date = toDate$1(date, options?.in);
	if (isNaN(+_date)) return constructFrom(options?.in || date, NaN);
	if (values.year != null) _date.setFullYear(values.year);
	if (values.month != null) _date = setMonth(_date, values.month);
	if (values.date != null) _date.setDate(values.date);
	if (values.hours != null) _date.setHours(values.hours);
	if (values.minutes != null) _date.setMinutes(values.minutes);
	if (values.seconds != null) _date.setSeconds(values.seconds);
	if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);
	return _date;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setHours.js
/**
* The {@link setHours} function options.
*/
/**
* @name setHours
* @category Hour Helpers
* @summary Set the hours to the given date.
*
* @description
* Set the hours to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param hours - The hours of the new date
* @param options - An object with options
*
* @returns The new date with the hours set
*
* @example
* // Set 4 hours to 1 September 2014 11:30:00:
* const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
* //=> Mon Sep 01 2014 04:30:00
*/
function setHours(date, hours, options) {
	const _date = toDate$1(date, options?.in);
	_date.setHours(hours);
	return _date;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setMinutes.js
/**
* The {@link setMinutes} function options.
*/
/**
* @name setMinutes
* @category Minute Helpers
* @summary Set the minutes to the given date.
*
* @description
* Set the minutes to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, returned from the context function, or inferred from the arguments.
*
* @param date - The date to be changed
* @param minutes - The minutes of the new date
* @param options - An object with options
*
* @returns The new date with the minutes set
*
* @example
* // Set 45 minutes to 1 September 2014 11:30:40:
* const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
* //=> Mon Sep 01 2014 11:45:40
*/
function setMinutes(date, minutes, options) {
	const date_ = toDate$1(date, options?.in);
	date_.setMinutes(minutes);
	return date_;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setSeconds.js
/**
* The {@link setSeconds} function options.
*/
/**
* @name setSeconds
* @category Second Helpers
* @summary Set the seconds to the given date, with context support.
*
* @description
* Set the seconds to the given date, with an optional context for time zone specification.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param seconds - The seconds of the new date
* @param options - An object with options
*
* @returns The new date with the seconds set
*
* @example
* // Set 45 seconds to 1 September 2014 11:30:40:
* const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
* //=> Mon Sep 01 2014 11:30:45
*/
function setSeconds(date, seconds, options) {
	const _date = toDate$1(date, options?.in);
	_date.setSeconds(seconds);
	return _date;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setYear.js
/**
* The {@link setYear} function options.
*/
/**
* @name setYear
* @category Year Helpers
* @summary Set the year to the given date.
*
* @description
* Set the year to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param year - The year of the new date
* @param options - An object with options.
*
* @returns The new date with the year set
*
* @example
* // Set year 2013 to 1 September 2014:
* const result = setYear(new Date(2014, 8, 1), 2013)
* //=> Sun Sep 01 2013 00:00:00
*/
function setYear(date, year, options) {
	const date_ = toDate$1(date, options?.in);
	if (isNaN(+date_)) return constructFrom(options?.in || date, NaN);
	date_.setFullYear(year);
	return date_;
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/date-picker/src/utils.mjs
var matcherMap = {
	date: isSameDay,
	month: isSameMonth,
	year: isSameYear,
	quarter: isSameQuarter
};
function makeWeekMatcher(firstDayOfWeek) {
	return (sourceTime, patternTime) => {
		const weekStartsOn = transformNaiveFirstDayOfWeekToDateFns(firstDayOfWeek);
		return isSameWeek(sourceTime, patternTime, { weekStartsOn });
	};
}
function transformNaiveFirstDayOfWeekToDateFns(firstDayOfWeek) {
	return (firstDayOfWeek + 1) % 7;
}
function matchDate(sourceTime, patternTime, type, firstDayOfWeek = 0) {
	return (type === "week" ? makeWeekMatcher(firstDayOfWeek) : matcherMap[type])(sourceTime, patternTime);
}
function dateOrWeekItem(time, monthTs, valueTs, currentTs, mode, firstDayOfWeek) {
	if (mode === "date") return dateItem(time, monthTs, valueTs, currentTs);
	else return weekItem(time, monthTs, valueTs, currentTs, firstDayOfWeek);
}
function dateItem(time, monthTs, valueTs, currentTs) {
	let inSpan = false;
	let startOfSpan = false;
	let endOfSpan = false;
	if (Array.isArray(valueTs)) {
		if (valueTs[0] < time && time < valueTs[1]) inSpan = true;
		if (matchDate(valueTs[0], time, "date")) startOfSpan = true;
		if (matchDate(valueTs[1], time, "date")) endOfSpan = true;
	}
	const selected = valueTs !== null && (Array.isArray(valueTs) ? matchDate(valueTs[0], time, "date") || matchDate(valueTs[1], time, "date") : matchDate(valueTs, time, "date"));
	return {
		type: "date",
		dateObject: {
			date: getDate(time),
			month: getMonth(time),
			year: getYear(time)
		},
		inCurrentMonth: isSameMonth(time, monthTs),
		isCurrentDate: matchDate(currentTs, time, "date"),
		inSpan,
		inSelectedWeek: false,
		startOfSpan,
		endOfSpan,
		selected,
		ts: getTime(time)
	};
}
function getMonthString(month, monthFormat, locale) {
	return format$1(new Date(2e3, month, 1).getTime(), monthFormat, { locale });
}
function getYearString(year, yearFormat, locale) {
	return format$1(new Date(year, 1, 1).getTime(), yearFormat, { locale });
}
function getQuarterString(quarter, quarterFormat, locale) {
	return format$1(new Date(2e3, quarter * 3 - 2, 1).getTime(), quarterFormat, { locale });
}
function weekItem(time, monthTs, valueTs, currentTs, firstDayOfWeek) {
	let inSpan = false;
	let startOfSpan = false;
	let endOfSpan = false;
	if (Array.isArray(valueTs)) {
		if (valueTs[0] < time && time < valueTs[1]) inSpan = true;
		if (matchDate(valueTs[0], time, "week", firstDayOfWeek)) startOfSpan = true;
		if (matchDate(valueTs[1], time, "week", firstDayOfWeek)) endOfSpan = true;
	}
	const inSelectedWeek = valueTs !== null && (Array.isArray(valueTs) ? matchDate(valueTs[0], time, "week", firstDayOfWeek) || matchDate(valueTs[1], time, "week", firstDayOfWeek) : matchDate(valueTs, time, "week", firstDayOfWeek));
	return {
		type: "date",
		dateObject: {
			date: getDate(time),
			month: getMonth(time),
			year: getYear(time)
		},
		inCurrentMonth: isSameMonth(time, monthTs),
		isCurrentDate: matchDate(currentTs, time, "date"),
		inSpan,
		startOfSpan,
		endOfSpan,
		selected: false,
		inSelectedWeek,
		ts: getTime(time)
	};
}
function monthItem(monthTs, valueTs, currentTs, { monthFormat }) {
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
function yearItem(yearTs, valueTs, currentTs, { yearFormat }) {
	return {
		type: "year",
		yearFormat,
		dateObject: { year: getYear(yearTs) },
		isCurrent: isSameYear(currentTs, yearTs),
		selected: valueTs !== null && matchDate(valueTs, yearTs, "year"),
		ts: getTime(yearTs)
	};
}
function quarterItem(quarterTs, valueTs, currentTs, { quarterFormat }) {
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
/**
* Given time to display calendar, given the selected time, given current time,
* return the date array of display time's month.
*/
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
function monthArray(yearAnchorTs, valueTs, currentTs, format) {
	const calendarMonths = [];
	const yearStart = startOfYear(yearAnchorTs);
	for (let i = 0; i < 12; i++) calendarMonths.push(monthItem(getTime(addMonths(yearStart, i)), valueTs, currentTs, format));
	return calendarMonths;
}
function quarterArray(yearAnchorTs, valueTs, currentTs, format) {
	const calendarQuarters = [];
	const yearStart = startOfYear(yearAnchorTs);
	for (let i = 0; i < 4; i++) calendarQuarters.push(quarterItem(getTime(addQuarters(yearStart, i)), valueTs, currentTs, format));
	return calendarQuarters;
}
function yearArray(valueTs, currentTs, format, rangeRef) {
	const range = rangeRef.value;
	const calendarYears = [];
	const startTime = startOfYear(setYear(/* @__PURE__ */ new Date(), range[0]));
	for (let i = 0; i < range[1] - range[0]; i++) calendarYears.push(yearItem(getTime(addYears(startTime, i)), valueTs, currentTs, format));
	return calendarYears;
}
function strictParse(string, pattern, backup, option) {
	const result = parse(string, pattern, backup, option);
	if (!isValid(result)) return result;
	else if (format$1(result, pattern, option) === string) return result;
	else return /* @__PURE__ */ new Date(NaN);
}
function extractSingleDefaultTime(timestamp, defaultTimeExtractor) {
	return getDefaultTime(defaultTimeExtractor(timestamp));
}
function extractRangeDefaultTime(timestamp, defaultTimeExtractor, position, value) {
	return getDefaultTime(defaultTimeExtractor(timestamp, position, value));
}
function getDefaultTime(timeValue) {
	if (timeValue === void 0) return;
	if (typeof timeValue === "number") return timeValue;
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
//#endregion
//#region ../../node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/_lib/tzIntlTimeZoneName/index.js
/**
* Returns the formatted time zone name of the provided `timeZone` or the current
* system time zone if omitted, accounting for DST according to the UTC value of
* the date.
*/
function tzIntlTimeZoneName(length, date, options) {
	const defaultOptions = getDefaultOptions();
	const dtf = getDTF(length, options.timeZone, options.locale ?? defaultOptions.locale);
	return "formatToParts" in dtf ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date);
}
function partsTimeZone(dtf, date) {
	const formatted = dtf.formatToParts(date);
	for (let i = formatted.length - 1; i >= 0; --i) if (formatted[i].type === "timeZoneName") return formatted[i].value;
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
//#endregion
//#region ../../node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/_lib/tzTokenizeDate/index.js
/**
* Returns the [year, month, day, hour, minute, seconds] tokens of the provided
* `date` as it will be rendered in the `timeZone`.
*/
function tzTokenizeDate(date, timeZone) {
	const dtf = getDateTimeFormat(timeZone);
	return "formatToParts" in dtf ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
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
			if (pos !== void 0) filled[pos] = parseInt(formatted[i].value, 10);
		}
		return filled;
	} catch (error) {
		if (error instanceof RangeError) return [NaN];
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
var dtfCache = {};
var testDateFormatted = new Intl.DateTimeFormat("en-US", {
	hourCycle: "h23",
	timeZone: "America/New_York",
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z"));
var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function getDateTimeFormat(timeZone) {
	if (!dtfCache[timeZone]) dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
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
	return dtfCache[timeZone];
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/_lib/newDateUTC/index.js
/**
* Use instead of `new Date(Date.UTC(...))` to support years below 100 which doesn't work
* otherwise due to the nature of the
* [`Date` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years.
*
* For `Date.UTC(...)`, use `newDateUTC(...).getTime()`.
*/
function newDateUTC(fullYear, month, day, hour, minute, second, millisecond) {
	const utcDate = /* @__PURE__ */ new Date(0);
	utcDate.setUTCFullYear(fullYear, month, day);
	utcDate.setUTCHours(hour, minute, second, millisecond);
	return utcDate;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/_lib/tzParseTimezone/index.js
var MILLISECONDS_IN_HOUR$1 = 36e5;
var MILLISECONDS_IN_MINUTE$2 = 6e4;
var patterns$1 = {
	timezone: /([Z+-].*)$/,
	timezoneZ: /^(Z)$/,
	timezoneHH: /^([+-]\d{2})$/,
	timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function tzParseTimezone(timezoneString, date, isUtcDate) {
	if (!timezoneString) return 0;
	let token = patterns$1.timezoneZ.exec(timezoneString);
	if (token) return 0;
	let hours;
	let absoluteOffset;
	token = patterns$1.timezoneHH.exec(timezoneString);
	if (token) {
		hours = parseInt(token[1], 10);
		if (!validateTimezone(hours)) return NaN;
		return -(hours * MILLISECONDS_IN_HOUR$1);
	}
	token = patterns$1.timezoneHHMM.exec(timezoneString);
	if (token) {
		hours = parseInt(token[2], 10);
		const minutes = parseInt(token[3], 10);
		if (!validateTimezone(hours, minutes)) return NaN;
		absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$2;
		return token[1] === "+" ? -absoluteOffset : absoluteOffset;
	}
	if (isValidTimezoneIANAString(timezoneString)) {
		date = new Date(date || Date.now());
		const offset = calcOffset(isUtcDate ? date : toUtcDate(date), timezoneString);
		return -(isUtcDate ? offset : fixOffset(date, offset, timezoneString));
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
	let utcGuess = date.getTime() - offset;
	const o2 = calcOffset(new Date(utcGuess), timezoneString);
	if (offset === o2) return offset;
	utcGuess -= o2 - offset;
	const o3 = calcOffset(new Date(utcGuess), timezoneString);
	if (o2 === o3) return o2;
	return Math.max(o2, o3);
}
function validateTimezone(hours, minutes) {
	return -23 <= hours && hours <= 23 && (minutes == null || 0 <= minutes && minutes <= 59);
}
var validIANATimezoneCache = {};
function isValidTimezoneIANAString(timeZoneString) {
	if (validIANATimezoneCache[timeZoneString]) return true;
	try {
		new Intl.DateTimeFormat(void 0, { timeZone: timeZoneString });
		validIANATimezoneCache[timeZoneString] = true;
		return true;
	} catch (error) {
		return false;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/format/formatters/index.js
var MILLISECONDS_IN_MINUTE$1 = 6e4;
var formatters = {
	X: function(date, token, options) {
		const timezoneOffset = getTimeZoneOffset(options.timeZone, date);
		if (timezoneOffset === 0) return "Z";
		switch (token) {
			case "X": return formatTimezoneWithOptionalMinutes(timezoneOffset);
			case "XXXX":
			case "XX": return formatTimezone(timezoneOffset);
			default: return formatTimezone(timezoneOffset, ":");
		}
	},
	x: function(date, token, options) {
		const timezoneOffset = getTimeZoneOffset(options.timeZone, date);
		switch (token) {
			case "x": return formatTimezoneWithOptionalMinutes(timezoneOffset);
			case "xxxx":
			case "xx": return formatTimezone(timezoneOffset);
			default: return formatTimezone(timezoneOffset, ":");
		}
	},
	O: function(date, token, options) {
		const timezoneOffset = getTimeZoneOffset(options.timeZone, date);
		switch (token) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + formatTimezoneShort(timezoneOffset, ":");
			default: return "GMT" + formatTimezone(timezoneOffset, ":");
		}
	},
	z: function(date, token, options) {
		switch (token) {
			case "z":
			case "zz":
			case "zzz": return tzIntlTimeZoneName("short", date, options);
			default: return tzIntlTimeZoneName("long", date, options);
		}
	}
};
function getTimeZoneOffset(timeZone, originalDate) {
	const timeZoneOffset = timeZone ? tzParseTimezone(timeZone, originalDate, true) / MILLISECONDS_IN_MINUTE$1 : originalDate?.getTimezoneOffset() ?? 0;
	if (Number.isNaN(timeZoneOffset)) throw new RangeError("Invalid time zone specified: " + timeZone);
	return timeZoneOffset;
}
function addLeadingZeros(number, targetLength) {
	const sign = number < 0 ? "-" : "";
	let output = Math.abs(number).toString();
	while (output.length < targetLength) output = "0" + output;
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
	if (offset % 60 === 0) return (offset > 0 ? "-" : "+") + addLeadingZeros(Math.abs(offset) / 60, 2);
	return formatTimezone(offset, delimiter);
}
function formatTimezoneShort(offset, delimiter = "") {
	const sign = offset > 0 ? "-" : "+";
	const absOffset = Math.abs(offset);
	const hours = Math.floor(absOffset / 60);
	const minutes = absOffset % 60;
	if (minutes === 0) return sign + String(hours);
	return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
/**
* Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
* They usually appear for dates that denote time before the timezones were introduced
* (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
* and GMT+01:00:00 after that date)
*
* Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
* which would lead to incorrect calculations.
*
* This function returns the timezone offset in milliseconds that takes seconds in account.
*/
function getTimezoneOffsetInMilliseconds(date) {
	const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
	utcDate.setUTCFullYear(date.getFullYear());
	return +date - +utcDate;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/_lib/tzPattern/index.js
/** Regex to identify the presence of a time zone specifier in a date string */
var tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
//#endregion
//#region ../../node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/toDate/index.js
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
	dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
	datePattern: /^([0-9W+-]+)(.*)/,
	plainTime: /:/,
	YY: /^(\d{2})$/,
	YYY: [
		/^([+-]\d{2})$/,
		/^([+-]\d{3})$/,
		/^([+-]\d{4})$/
	],
	YYYY: /^(\d{4})/,
	YYYYY: [
		/^([+-]\d{4})/,
		/^([+-]\d{5})/,
		/^([+-]\d{6})/
	],
	MM: /^-(\d{2})$/,
	DDD: /^-?(\d{3})$/,
	MMDD: /^-?(\d{2})-?(\d{2})$/,
	Www: /^-?W(\d{2})$/,
	WwwD: /^-?W(\d{2})-?(\d{1})$/,
	HH: /^(\d{2}([.,]\d*)?)$/,
	HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
	HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
	timeZone: tzPattern
};
/**
* @name toDate
* @category Common Helpers
* @summary Convert the given argument to an instance of Date.
*
* @description
* Convert the given argument to an instance of Date.
*
* If the argument is an instance of Date, the function returns its clone.
*
* If the argument is a number, it is treated as a timestamp.
*
* If an argument is a string, the function tries to parse it.
* Function accepts complete ISO 8601 formats as well as partial implementations.
* ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
* If the function cannot parse the string or the values are invalid, it returns Invalid Date.
*
* If the argument is none of the above, the function returns Invalid Date.
*
* **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
* All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
*
* @param argument the value to convert
* @param options the object with options. See [Options]{@link https://date-fns.org/docs/Options}
* @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
* @param {string} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
*
* @returns the parsed date in the local time zone
* @throws {TypeError} 1 argument required
* @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
*
* @example
* // Convert string '2014-02-11T11:30:30' to date:
* const result = toDate('2014-02-11T11:30:30')
* //=> Tue Feb 11 2014 11:30:30
*
* @example
* // Convert string '+02014101' to date,
* // if the additional number of digits in the extended year format is 1:
* const result = toDate('+02014101', {additionalDigits: 1})
* //=> Fri Apr 11 2014 00:00:00
*/
function toDate(argument, options = {}) {
	if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
	if (argument === null) return /* @__PURE__ */ new Date(NaN);
	const additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
	if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
	if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") return new Date(argument.getTime());
	else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") return new Date(argument);
	else if (!(Object.prototype.toString.call(argument) === "[object String]")) return /* @__PURE__ */ new Date(NaN);
	const dateStrings = splitDateString(argument);
	const { year, restDateString } = parseYear(dateStrings.date, additionalDigits);
	const date = parseDate(restDateString, year);
	if (date === null || isNaN(date.getTime())) return /* @__PURE__ */ new Date(NaN);
	if (date) {
		const timestamp = date.getTime();
		let time = 0;
		let offset;
		if (dateStrings.time) {
			time = parseTime(dateStrings.time);
			if (time === null || isNaN(time)) return /* @__PURE__ */ new Date(NaN);
		}
		if (dateStrings.timeZone || options.timeZone) {
			offset = tzParseTimezone(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));
			if (isNaN(offset)) return /* @__PURE__ */ new Date(NaN);
		} else {
			offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
			offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
		}
		return new Date(timestamp + time + offset);
	} else return /* @__PURE__ */ new Date(NaN);
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
		} else dateStrings.time = timeString;
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
	return { year: null };
}
function parseDate(dateString, year) {
	if (year === null) return null;
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
		if (!validateDate(year, month)) return /* @__PURE__ */ new Date(NaN);
		date.setUTCFullYear(year, month);
		return date;
	}
	token = patterns.DDD.exec(dateString);
	if (token) {
		date = /* @__PURE__ */ new Date(0);
		const dayOfYear = parseInt(token[1], 10);
		if (!validateDayOfYearDate(year, dayOfYear)) return /* @__PURE__ */ new Date(NaN);
		date.setUTCFullYear(year, 0, dayOfYear);
		return date;
	}
	token = patterns.MMDD.exec(dateString);
	if (token) {
		date = /* @__PURE__ */ new Date(0);
		month = parseInt(token[1], 10) - 1;
		const day = parseInt(token[2], 10);
		if (!validateDate(year, month, day)) return /* @__PURE__ */ new Date(NaN);
		date.setUTCFullYear(year, month, day);
		return date;
	}
	token = patterns.Www.exec(dateString);
	if (token) {
		week = parseInt(token[1], 10) - 1;
		if (!validateWeekDate(week)) return /* @__PURE__ */ new Date(NaN);
		return dayOfISOWeekYear(year, week);
	}
	token = patterns.WwwD.exec(dateString);
	if (token) {
		week = parseInt(token[1], 10) - 1;
		const dayOfWeek = parseInt(token[2], 10) - 1;
		if (!validateWeekDate(week, dayOfWeek)) return /* @__PURE__ */ new Date(NaN);
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
		if (!validateTime(hours)) return NaN;
		return hours % 24 * MILLISECONDS_IN_HOUR;
	}
	token = patterns.HHMM.exec(timeString);
	if (token) {
		hours = parseInt(token[1], 10);
		minutes = parseFloat(token[2].replace(",", "."));
		if (!validateTime(hours, minutes)) return NaN;
		return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
	}
	token = patterns.HHMMSS.exec(timeString);
	if (token) {
		hours = parseInt(token[1], 10);
		minutes = parseInt(token[2], 10);
		const seconds = parseFloat(token[3].replace(",", "."));
		if (!validateTime(hours, minutes, seconds)) return NaN;
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
var DAYS_IN_MONTH = [
	31,
	28,
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
var DAYS_IN_MONTH_LEAP_YEAR = [
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
function isLeapYearIndex(year) {
	return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
	if (month < 0 || month > 11) return false;
	if (date != null) {
		if (date < 1) return false;
		const isLeapYear = isLeapYearIndex(year);
		if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) return false;
		if (!isLeapYear && date > DAYS_IN_MONTH[month]) return false;
	}
	return true;
}
function validateDayOfYearDate(year, dayOfYear) {
	if (dayOfYear < 1) return false;
	const isLeapYear = isLeapYearIndex(year);
	if (isLeapYear && dayOfYear > 366) return false;
	if (!isLeapYear && dayOfYear > 365) return false;
	return true;
}
function validateWeekDate(week, day) {
	if (week < 0 || week > 52) return false;
	if (day != null && (day < 0 || day > 6)) return false;
	return true;
}
function validateTime(hours, minutes, seconds) {
	if (hours < 0 || hours >= 25) return false;
	if (minutes != null && (minutes < 0 || minutes >= 60)) return false;
	if (seconds != null && (seconds < 0 || seconds >= 60)) return false;
	return true;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/format/index.js
var tzFormattingTokensRegExp = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
/**
* @name format
* @category Common Helpers
* @summary Format the date.
*
* @description
* Return the formatted date string in the given format. The result may consty by locale.
*
* > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
* > See: https://git.io/fxCyr
*
* The characters wrapped between two single quotes characters (') are escaped.
* Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
* (see the last example)
*
* Format of the string is based on Unicode Technical Standard #35:
* https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* with a few additions (see note 7 below the table).
*
* Accepted patterns:
* | Unit                            | Pattern | Result examples                   | Notes |
* |---------------------------------|---------|-----------------------------------|-------|
* | Era                             | G..GGG  | AD, BC                            |       |
* |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
* |                                 | GGGGG   | A, B                              |       |
* | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
* |                                 | yy      | 44, 01, 00, 17                    | 5     |
* |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
* |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
* |                                 | yyyyy   | ...                               | 3,5   |
* | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
* |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
* |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
* |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
* |                                 | YYYYY   | ...                               | 3,5   |
* | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
* |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
* |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
* |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
* |                                 | RRRRR   | ...                               | 3,5,7 |
* | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
* |                                 | uu      | -43, 01, 1900, 2017               | 5     |
* |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
* |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
* |                                 | uuuuu   | ...                               | 3,5   |
* | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
* |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | QQ      | 01, 02, 03, 04                    |       |
* |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
* |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
* | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
* |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | qq      | 01, 02, 03, 04                    |       |
* |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
* |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
* | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
* |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | MM      | 01, 02, ..., 12                   |       |
* |                                 | MMM     | Jan, Feb, ..., Dec                |       |
* |                                 | MMMM    | January, February, ..., December  | 2     |
* |                                 | MMMMM   | J, F, ..., D                      |       |
* | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
* |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | LL      | 01, 02, ..., 12                   |       |
* |                                 | LLL     | Jan, Feb, ..., Dec                |       |
* |                                 | LLLL    | January, February, ..., December  | 2     |
* |                                 | LLLLL   | J, F, ..., D                      |       |
* | Local week of year              | w       | 1, 2, ..., 53                     |       |
* |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | ww      | 01, 02, ..., 53                   |       |
* | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
* |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | II      | 01, 02, ..., 53                   | 7     |
* | Day of month                    | d       | 1, 2, ..., 31                     |       |
* |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
* |                                 | dd      | 01, 02, ..., 31                   |       |
* | Day of year                     | D       | 1, 2, ..., 365, 366               | 8     |
* |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
* |                                 | DD      | 01, 02, ..., 365, 366             | 8     |
* |                                 | DDD     | 001, 002, ..., 365, 366           |       |
* |                                 | DDDD    | ...                               | 3     |
* | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
* |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
* |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
* | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
* |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
* |                                 | ii      | 01, 02, ..., 07                   | 7     |
* |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
* |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
* |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
* |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
* | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
* |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | ee      | 02, 03, ..., 01                   |       |
* |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
* |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | eeeee   | M, T, W, T, F, S, S               |       |
* |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
* | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
* |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | cc      | 02, 03, ..., 01                   |       |
* |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
* |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | ccccc   | M, T, W, T, F, S, S               |       |
* |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
* | AM, PM                          | a..aaa  | AM, PM                            |       |
* |                                 | aaaa    | a.m., p.m.                        | 2     |
* |                                 | aaaaa   | a, p                              |       |
* | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
* |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
* |                                 | bbbbb   | a, p, n, mi                       |       |
* | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
* |                                 | BBBB    | at night, in the morning, ...     | 2     |
* |                                 | BBBBB   | at night, in the morning, ...     |       |
* | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
* |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
* |                                 | hh      | 01, 02, ..., 11, 12               |       |
* | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
* |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
* |                                 | HH      | 00, 01, 02, ..., 23               |       |
* | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
* |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
* |                                 | KK      | 1, 2, ..., 11, 0                  |       |
* | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
* |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
* |                                 | kk      | 24, 01, 02, ..., 23               |       |
* | Minute                          | m       | 0, 1, ..., 59                     |       |
* |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
* |                                 | mm      | 00, 01, ..., 59                   |       |
* | Second                          | s       | 0, 1, ..., 59                     |       |
* |                                 | so      | 0th, 1st, ..., 59th               | 7     |
* |                                 | ss      | 00, 01, ..., 59                   |       |
* | Fraction of second              | S       | 0, 1, ..., 9                      |       |
* |                                 | SS      | 00, 01, ..., 99                   |       |
* |                                 | SSS     | 000, 0001, ..., 999               |       |
* |                                 | SSSS    | ...                               | 3     |
* | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
* |                                 | XX      | -0800, +0530, Z                   |       |
* |                                 | XXX     | -08:00, +05:30, Z                 |       |
* |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
* |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
* | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
* |                                 | xx      | -0800, +0530, +0000               |       |
* |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
* |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
* |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
* | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
* |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
* | Timezone (specific non-locat.)  | z...zzz | PDT, EST, CEST                    | 6     |
* |                                 | zzzz    | Pacific Daylight Time             | 2,6   |
* | Seconds timestamp               | t       | 512969520                         | 7     |
* |                                 | tt      | ...                               | 3,7   |
* | Milliseconds timestamp          | T       | 512969520900                      | 7     |
* |                                 | TT      | ...                               | 3,7   |
* | Long localized date             | P       | 05/29/1453                        | 7     |
* |                                 | PP      | May 29, 1453                      | 7     |
* |                                 | PPP     | May 29th, 1453                    | 7     |
* |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
* | Long localized time             | p       | 12:00 AM                          | 7     |
* |                                 | pp      | 12:00:00 AM                       | 7     |
* |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
* |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
* | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
* |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
* |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
* |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
* Notes:
* 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
*    are the same as "stand-alone" units, but are different in some languages.
*    "Formatting" units are declined according to the rules of the language
*    in the context of a date. "Stand-alone" units are always nominative singular:
*
*    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
*
*    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
*
* 2. Any sequence of the identical letters is a pattern, unless it is escaped by
*    the single quote characters (see below).
*    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
*    the output will be the same as default pattern for this unit, usually
*    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
*    are marked with "2" in the last column of the table.
*
*    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
*
*    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
*
* 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
*    The output will be padded with zeros to match the length of the pattern.
*
*    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
*
* 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
*    These tokens represent the shortest form of the quarter.
*
* 5. The main difference between `y` and `u` patterns are B.C. years:
*
*    | Year | `y` | `u` |
*    |------|-----|-----|
*    | AC 1 |   1 |   1 |
*    | BC 1 |   1 |   0 |
*    | BC 2 |   2 |  -1 |
*
*    Also `yy` always returns the last two digits of a year,
*    while `uu` pads single digit years to 2 characters and returns other years unchanged:
*
*    | Year | `yy` | `uu` |
*    |------|------|------|
*    | 1    |   01 |   01 |
*    | 14   |   14 |   14 |
*    | 376  |   76 |  376 |
*    | 1453 |   53 | 1453 |
*
*    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
*    except local week-numbering years are dependent on `options.weekStartsOn`
*    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
*    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
*
* 6. Specific non-location timezones are created using the Intl browser API. The output is determined by the
*    preferred standard of the current locale (en-US by default) which may not always give the expected result.
*    For this reason it is recommended to supply a `locale` in the format options when formatting a time zone name.
*
* 7. These patterns are not in the Unicode Technical Standard #35:
*    - `i`: ISO day of week
*    - `I`: ISO week of year
*    - `R`: ISO week-numbering year
*    - `t`: seconds timestamp
*    - `T`: milliseconds timestamp
*    - `o`: ordinal number modifier
*    - `P`: long localized date
*    - `p`: long localized time
*
* 8. These tokens are often confused with others. See: https://git.io/fxCyr
*
*
* ### v2.0.0 breaking changes:
*
* - [Changes that are common for the whole
*   library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
*
* - The second argument is now required for the sake of explicitness.
*
*   ```javascript
*   // Before v2.0.0
*   format(new Date(2016, 0, 1))
*
*   // v2.0.0 onward
*   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
*   ```
*
* - New format string API for `format` function
*   which is based on [Unicode Technical Standard
*   #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). See [this
*   post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
*
* - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
*
* @param date the original date
* @param formatStr the string of tokens
* @param options the object with options. See [Options]{@link https://date-fns.org/docs/Options}
* @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link
*   https://date-fns.org/docs/toDate}
* @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
* @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
* @param {Locale} [options.locale=defaultLocale] - the locale object. See
*   [Locale]{@link https://date-fns.org/docs/Locale}
* @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
*   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
*   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens
*   (`yy`, `yyyy`). See: https://git.io/fxCyr
* @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
* @param {Date|Number} [options.originalDate] - can be used to pass the original unmodified date to `format` to
*   improve correctness of the replaced timezone token close to the DST threshold.
* @throws {TypeError} 2 arguments required
* @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
* @throws {RangeError} `options.locale` must contain `localize` property
* @throws {RangeError} `options.locale` must contain `formatLong` property
* @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
* @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
* @throws {RangeError} `options.awareOfUnicodeTokens` must be set to `true` to use `XX` token; see:
*   https://git.io/fxCyr
*
* @example
* // Represent 11 February 2014 in middle-endian format:
* const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
* //=> '02/11/2014'
*
* @example
* // Represent 2 July 2014 in Esperanto:
* import { eoLocale } from 'date-fns/locale/eo'
* const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
*   locale: eoLocale
* })
* //=> '2-a de julio 2014'
*
* @example
* // Escape string by single quote characters:
* const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
* //=> "3 o'clock"
*/
function format(date, formatStr, options = {}) {
	formatStr = String(formatStr);
	const matches = formatStr.match(tzFormattingTokensRegExp);
	if (matches) {
		const d = toDate(options.originalDate || date, options);
		formatStr = matches.reduce(function(result, token) {
			if (token[0] === "'") return result;
			const pos = result.indexOf(token);
			const precededByQuotedSection = result[pos - 1] === "'";
			const replaced = result.replace(token, "'" + formatters[token[0]](d, token, options) + "'");
			return precededByQuotedSection ? replaced.substring(0, pos - 1) + replaced.substring(pos + 1) : replaced;
		}, formatStr);
	}
	return format$1(date, formatStr, options);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/toZonedTime/index.js
/**
* @name toZonedTime
* @category Time Zone Helpers
* @summary Get a date/time representing local time in a given time zone from the UTC date
*
* @description
* Returns a date instance with values representing the local time in the time zone
* specified of the UTC time from the date provided. In other words, when the new date
* is formatted it will show the equivalent hours in the target time zone regardless
* of the current system time zone.
*
* @param date the date with the relevant UTC time
* @param timeZone the time zone to get local time for, can be an offset or IANA time zone
* @param options the object with options. See [Options]{@link https://date-fns.org/docs/Options}
* @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
*
* @throws {TypeError} 2 arguments required
* @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
*
* @example
* // In June 10am UTC is 6am in New York (-04:00)
* const result = toZonedTime('2014-06-25T10:00:00.000Z', 'America/New_York')
* //=> Jun 25 2014 06:00:00
*/
function toZonedTime(date, timeZone, options) {
	date = toDate(date, options);
	const offsetMilliseconds = tzParseTimezone(timeZone, date, true);
	const d = new Date(date.getTime() - offsetMilliseconds);
	const resultDate = /* @__PURE__ */ new Date(0);
	resultDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
	resultDate.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
	return resultDate;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns-tz@3.2.0_date-fns@4.1.0/node_modules/date-fns-tz/dist/esm/formatInTimeZone/index.js
/**
* @name formatInTimeZone
* @category Time Zone Helpers
* @summary Gets the offset in milliseconds between the time zone and Universal Coordinated Time (UTC)
*
* @param date the date representing the local time / real UTC time
* @param timeZone the time zone this date should be formatted for; can be an offset or IANA time zone
* @param formatStr the string of tokens
* @param options the object with options. See [Options]{@link https://date-fns.org/docs/Options}
* @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link
*   https://date-fns.org/docs/toDate}
* @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
* @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
* @param {Locale} [options.locale=defaultLocale] - the locale object. See
*   [Locale]{@link https://date-fns.org/docs/Locale}
* @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
*   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
*   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens
*   (`yy`, `yyyy`). See: https://git.io/fxCyr
* @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
*/
function formatInTimeZone(date, timeZone, formatStr, options) {
	options = {
		...options,
		timeZone,
		originalDate: date
	};
	return format(toZonedTime(date, timeZone, { timeZone: options.timeZone }), formatStr, options);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/time-picker/src/interface.mjs
var timePickerInjectionKey = createInjectionKey("n-time-picker");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/time-picker/src/PanelCol.mjs
init_runtime_core_esm_bundler();
var PanelCol_default = defineComponent({
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
		onItemClick: Function
	},
	render() {
		const { activeValue, onItemClick, clsPrefix } = this;
		return this.data.map((item) => {
			const { label, disabled, value } = item;
			const active = activeValue === value;
			return h("div", {
				key: label,
				"data-active": active ? "" : null,
				class: [
					`${clsPrefix}-time-picker-col__item`,
					active && `${clsPrefix}-time-picker-col__item--active`,
					disabled && `${clsPrefix}-time-picker-col__item--disabled`
				],
				onClick: onItemClick && !disabled ? () => {
					onItemClick(value);
				} : void 0
			}, label);
		});
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/time-picker/src/utils.mjs
var time = {
	amHours: [
		"00",
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11"
	],
	pmHours: [
		"12",
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11"
	],
	hours: [
		"00",
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23"
	],
	minutes: [
		"00",
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
		"25",
		"26",
		"27",
		"28",
		"29",
		"30",
		"31",
		"32",
		"33",
		"34",
		"35",
		"36",
		"37",
		"38",
		"39",
		"40",
		"41",
		"42",
		"43",
		"44",
		"45",
		"46",
		"47",
		"48",
		"49",
		"50",
		"51",
		"52",
		"53",
		"54",
		"55",
		"56",
		"57",
		"58",
		"59"
	],
	seconds: [
		"00",
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
		"25",
		"26",
		"27",
		"28",
		"29",
		"30",
		"31",
		"32",
		"33",
		"34",
		"35",
		"36",
		"37",
		"38",
		"39",
		"40",
		"41",
		"42",
		"43",
		"44",
		"45",
		"46",
		"47",
		"48",
		"49",
		"50",
		"51",
		"52",
		"53",
		"54",
		"55",
		"56",
		"57",
		"58",
		"59"
	],
	period: ["AM", "PM"]
};
function getFixValue(value) {
	return `00${value}`.slice(-2);
}
function getTimeUnits(defaultValue, stepOrList, isHourWithAmPm) {
	if (Array.isArray(stepOrList)) return (isHourWithAmPm === "am" ? stepOrList.filter((v) => v < 12) : isHourWithAmPm === "pm" ? stepOrList.filter((v) => v >= 12).map((v) => v === 12 ? 12 : v - 12) : stepOrList).map((v) => getFixValue(v));
	else if (typeof stepOrList === "number") {
		if (isHourWithAmPm === "am") return defaultValue.filter((hour) => {
			const hourAsNumber = Number(hour);
			return hourAsNumber < 12 && hourAsNumber % stepOrList === 0;
		});
		else if (isHourWithAmPm === "pm") return defaultValue.filter((hour) => {
			const hourAsNumber = Number(hour);
			return hourAsNumber >= 12 && hourAsNumber % stepOrList === 0;
		}).map((hour) => {
			const hourAsNumber = Number(hour);
			return getFixValue(hourAsNumber === 12 ? 12 : hourAsNumber - 12);
		});
		return defaultValue.filter((hour) => {
			return Number(hour) % stepOrList === 0;
		});
	} else return isHourWithAmPm === "am" ? defaultValue.filter((hour) => Number(hour) < 12) : isHourWithAmPm === "pm" ? defaultValue.map((hour) => Number(hour)).filter((hour) => Number(hour) >= 12).map((v) => getFixValue(v === 12 ? 12 : v - 12)) : defaultValue;
}
function isTimeInStep(value, type, stepOrList) {
	if (!stepOrList) return true;
	else if (typeof stepOrList === "number") return value % stepOrList === 0;
	else return stepOrList.includes(value);
}
function findSimilarTime(value, type, stepOrList) {
	const list = getTimeUnits(time[type], stepOrList).map(Number);
	let lowerBound, upperBound;
	for (let i = 0; i < list.length; ++i) {
		const v = list[i];
		if (v === value) return v;
		else if (v > value) {
			upperBound = v;
			break;
		}
		lowerBound = v;
	}
	if (lowerBound === void 0) {
		if (!upperBound) throwError("time-picker", "Please set 'hours' or 'minutes' or 'seconds' props");
		return upperBound;
	}
	if (upperBound === void 0) return lowerBound;
	return upperBound - value > value - lowerBound ? lowerBound : upperBound;
}
function getAmPm(value) {
	return getHours(value) < 12 ? "am" : "pm";
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/time-picker/src/Panel.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var Panel_default = defineComponent({
	name: "TimePickerPanel",
	props: {
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
	},
	setup(props) {
		const { mergedThemeRef, mergedClsPrefixRef } = inject(timePickerInjectionKey);
		return {
			mergedTheme: mergedThemeRef,
			mergedClsPrefix: mergedClsPrefixRef,
			hours: computed(() => {
				const { isHourDisabled, hours, use12Hours, amPmValue } = props;
				if (!use12Hours) return getTimeUnits(time.hours, hours).map((hour) => {
					return {
						label: hour,
						value: Number(hour),
						disabled: isHourDisabled ? isHourDisabled(Number(hour)) : false
					};
				});
				else {
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
			}),
			minutes: computed(() => {
				const { isMinuteDisabled, minutes } = props;
				return getTimeUnits(time.minutes, minutes).map((minute) => {
					return {
						label: minute,
						value: Number(minute),
						disabled: isMinuteDisabled ? isMinuteDisabled(Number(minute), props.hourValue) : false
					};
				});
			}),
			seconds: computed(() => {
				const { isSecondDisabled, seconds } = props;
				return getTimeUnits(time.seconds, seconds).map((second) => {
					return {
						label: second,
						value: Number(second),
						disabled: isSecondDisabled ? isSecondDisabled(Number(second), props.minuteValue, props.hourValue) : false
					};
				});
			}),
			amPm: computed(() => {
				const { isHourDisabled } = props;
				let amDisabled = true;
				let pmDisabled = true;
				for (let i = 0; i < 12; ++i) if (!(isHourDisabled === null || isHourDisabled === void 0 ? void 0 : isHourDisabled(i))) {
					amDisabled = false;
					break;
				}
				for (let i = 12; i < 24; ++i) if (!(isHourDisabled === null || isHourDisabled === void 0 ? void 0 : isHourDisabled(i))) {
					pmDisabled = false;
					break;
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
			}),
			hourScrollRef: ref(null),
			minuteScrollRef: ref(null),
			secondScrollRef: ref(null),
			amPmScrollRef: ref(null)
		};
	},
	render() {
		var _a, _b, _c, _d;
		const { mergedClsPrefix, mergedTheme } = this;
		return h("div", {
			tabindex: 0,
			class: `${mergedClsPrefix}-time-picker-panel`,
			onFocusin: this.onFocusin,
			onFocusout: this.onFocusout,
			onKeydown: this.onKeydown
		}, h("div", { class: `${mergedClsPrefix}-time-picker-cols` }, this.showHour ? h("div", { class: [
			`${mergedClsPrefix}-time-picker-col`,
			this.isHourInvalid && `${mergedClsPrefix}-time-picker-col--invalid`,
			this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`
		] }, h(Scrollbar, {
			ref: "hourScrollRef",
			theme: mergedTheme.peers.Scrollbar,
			themeOverrides: mergedTheme.peerOverrides.Scrollbar
		}, { default: () => [h(PanelCol_default, {
			clsPrefix: mergedClsPrefix,
			data: this.hours,
			activeValue: this.hourValue,
			onItemClick: this.onHourClick
		}), h("div", { class: `${mergedClsPrefix}-time-picker-col__padding` })] })) : null, this.showMinute ? h("div", { class: [
			`${mergedClsPrefix}-time-picker-col`,
			this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`,
			this.isMinuteInvalid && `${mergedClsPrefix}-time-picker-col--invalid`
		] }, h(Scrollbar, {
			ref: "minuteScrollRef",
			theme: mergedTheme.peers.Scrollbar,
			themeOverrides: mergedTheme.peerOverrides.Scrollbar
		}, { default: () => [h(PanelCol_default, {
			clsPrefix: mergedClsPrefix,
			data: this.minutes,
			activeValue: this.minuteValue,
			onItemClick: this.onMinuteClick
		}), h("div", { class: `${mergedClsPrefix}-time-picker-col__padding` })] })) : null, this.showSecond ? h("div", { class: [
			`${mergedClsPrefix}-time-picker-col`,
			this.isSecondInvalid && `${mergedClsPrefix}-time-picker-col--invalid`,
			this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`
		] }, h(Scrollbar, {
			ref: "secondScrollRef",
			theme: mergedTheme.peers.Scrollbar,
			themeOverrides: mergedTheme.peerOverrides.Scrollbar
		}, { default: () => [h(PanelCol_default, {
			clsPrefix: mergedClsPrefix,
			data: this.seconds,
			activeValue: this.secondValue,
			onItemClick: this.onSecondClick
		}), h("div", { class: `${mergedClsPrefix}-time-picker-col__padding` })] })) : null, this.use12Hours ? h("div", { class: [
			`${mergedClsPrefix}-time-picker-col`,
			this.isAmPmInvalid && `${mergedClsPrefix}-time-picker-col--invalid`,
			this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`
		] }, h(Scrollbar, {
			ref: "amPmScrollRef",
			theme: mergedTheme.peers.Scrollbar,
			themeOverrides: mergedTheme.peerOverrides.Scrollbar
		}, { default: () => [h(PanelCol_default, {
			clsPrefix: mergedClsPrefix,
			data: this.amPm,
			activeValue: this.amPmValue,
			onItemClick: this.onAmPmClick
		}), h("div", { class: `${mergedClsPrefix}-time-picker-col__padding` })] })) : null), ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) ? h("div", { class: `${mergedClsPrefix}-time-picker-actions` }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? h(Button, {
			theme: mergedTheme.peers.Button,
			themeOverrides: mergedTheme.peerOverrides.Button,
			size: "tiny",
			onClick: this.onClearClick
		}, { default: () => this.clearText }) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("now")) ? h(Button, {
			size: "tiny",
			theme: mergedTheme.peers.Button,
			themeOverrides: mergedTheme.peerOverrides.Button,
			onClick: this.onNowClick
		}, { default: () => this.nowText }) : null, ((_d = this.actions) === null || _d === void 0 ? void 0 : _d.includes("confirm")) ? h(Button, {
			size: "tiny",
			type: "primary",
			class: `${mergedClsPrefix}-time-picker-actions__confirm`,
			theme: mergedTheme.peers.Button,
			themeOverrides: mergedTheme.peerOverrides.Button,
			disabled: this.isValueInvalid,
			onClick: this.onConfirmClick
		}, { default: () => this.confirmText }) : null) : null, h(focus_detector_default, { onFocus: this.onFocusDetectorFocus }));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/time-picker/src/styles/index.cssr.mjs
var index_cssr_default = c([cB("time-picker", `
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
 `, [
	fadeInScaleUpTransition(),
	cB("time-picker-actions", `
 padding: var(--n-panel-action-padding);
 align-items: center;
 display: flex;
 justify-content: space-evenly;
 `),
	cB("time-picker-cols", `
 height: calc(var(--n-item-height) * 6);
 display: flex;
 position: relative;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-panel-divider-color);
 `),
	cB("time-picker-col", `
 flex-grow: 1;
 min-width: var(--n-item-width);
 height: calc(var(--n-item-height) * 6);
 flex-direction: column;
 transition: box-shadow .3s var(--n-bezier);
 `, [
		cM("transition-disabled", [cE("item", "transition: none;", [c("&::before", "transition: none;")])]),
		cE("padding", `
 height: calc(var(--n-item-height) * 5);
 `),
		c("&:first-child", "min-width: calc(var(--n-item-width) + 4px);", [cE("item", [c("&::before", "left: 4px;")])]),
		cE("item", `
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
 `, [
			c("&::before", `
 content: "";
 transition: background-color .3s var(--n-bezier);
 z-index: -1;
 position: absolute;
 left: 0;
 right: 4px;
 top: 4px;
 bottom: 0;
 border-radius: var(--n-item-border-radius);
 `),
			cNotM("disabled", [c("&:hover::before", `
 background-color: var(--n-item-color-hover);
 `)]),
			cM("active", `
 color: var(--n-item-text-color-active);
 `, [c("&::before", `
 background-color: var(--n-item-color-hover);
 `)]),
			cM("disabled", `
 opacity: var(--n-item-opacity-disabled);
 cursor: not-allowed;
 `)
		]),
		cM("invalid", [cE("item", [cM("active", `
 text-decoration: line-through;
 text-decoration-color: var(--n-item-text-color-active);
 `)])])
	])
])]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/time-picker/src/TimePicker.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
function validateUnits(value, max) {
	if (value === void 0) return true;
	if (Array.isArray(value)) return value.every((v) => v >= 0 && v <= max);
	else return value >= 0 && value <= max;
}
var timePickerProps = Object.assign(Object.assign({}, useTheme.props), {
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
	stateful: {
		type: Boolean,
		default: true
	},
	onChange: [Function, Array]
});
var TimePicker_default = defineComponent({
	name: "TimePicker",
	props: timePickerProps,
	setup(props) {
		const { mergedBorderedRef, mergedClsPrefixRef, namespaceRef, inlineThemeDisabled, mergedComponentPropsRef } = useConfig(props);
		const { localeRef, dateLocaleRef } = useLocale("TimePicker");
		const formItem = useFormItem(props, { mergedSize: (NFormItem) => {
			var _a, _b;
			const { size } = props;
			if (size) return size;
			const { mergedSize: formItemSize } = NFormItem || {};
			if (formItemSize === null || formItemSize === void 0 ? void 0 : formItemSize.value) return formItemSize.value;
			const configSize = (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.TimePicker) === null || _b === void 0 ? void 0 : _b.size;
			if (configSize) return configSize;
			return "medium";
		} });
		const { mergedSizeRef, mergedDisabledRef, mergedStatusRef } = formItem;
		const themeRef = useTheme("TimePicker", "-time-picker", index_cssr_default, timePickerLight, props, mergedClsPrefixRef);
		const keyboardState = useKeyboard();
		const inputInstRef = ref(null);
		const panelInstRef = ref(null);
		const dateFnsOptionsRef = computed(() => {
			return { locale: dateLocaleRef.value.locale };
		});
		function getTimestampFromFormattedValue(value) {
			if (value === null) return null;
			return strictParse(value, props.valueFormat || props.format, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value).getTime();
		}
		const { defaultValue, defaultFormattedValue } = props;
		const uncontrolledValueRef = ref(defaultFormattedValue !== void 0 ? getTimestampFromFormattedValue(defaultFormattedValue) : defaultValue);
		const mergedValueRef = computed(() => {
			const { formattedValue } = props;
			if (formattedValue !== void 0) return getTimestampFromFormattedValue(formattedValue);
			const { value } = props;
			if (value !== void 0) return value;
			return uncontrolledValueRef.value;
		});
		const mergedFormatRef = computed(() => {
			const { timeZone } = props;
			if (timeZone) return (date, format, options) => {
				return formatInTimeZone(date, timeZone, format, options);
			};
			else return (date, _format, options) => {
				return format$1(date, _format, options);
			};
		});
		const displayTimeStringRef = ref("");
		watch(() => props.timeZone, () => {
			const mergedValue = mergedValueRef.value;
			displayTimeStringRef.value = mergedValue === null ? "" : mergedFormatRef.value(mergedValue, props.format, dateFnsOptionsRef.value);
		}, { immediate: true });
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
			const { value } = mergedValueRef;
			if (value === null) return null;
			return Number(mergedFormatRef.value(value, "HH", dateFnsOptionsRef.value));
		});
		const minuteValueRef = computed(() => {
			const { value } = mergedValueRef;
			if (value === null) return null;
			return Number(mergedFormatRef.value(value, "mm", dateFnsOptionsRef.value));
		});
		const secondValueRef = computed(() => {
			const { value } = mergedValueRef;
			if (value === null) return null;
			return Number(mergedFormatRef.value(value, "ss", dateFnsOptionsRef.value));
		});
		const isHourInvalidRef = computed(() => {
			const { isHourDisabled } = props;
			if (hourValueRef.value === null) return false;
			if (!isTimeInStep(hourValueRef.value, "hours", props.hours)) return true;
			if (!isHourDisabled) return false;
			return isHourDisabled(hourValueRef.value);
		});
		const isMinuteInvalidRef = computed(() => {
			const { value: minuteValue } = minuteValueRef;
			const { value: hourValue } = hourValueRef;
			if (minuteValue === null || hourValue === null) return false;
			if (!isTimeInStep(minuteValue, "minutes", props.minutes)) return true;
			const { isMinuteDisabled } = props;
			if (!isMinuteDisabled) return false;
			return isMinuteDisabled(minuteValue, hourValue);
		});
		const isSecondInvalidRef = computed(() => {
			const { value: minuteValue } = minuteValueRef;
			const { value: hourValue } = hourValueRef;
			const { value: secondValue } = secondValueRef;
			if (secondValue === null || minuteValue === null || hourValue === null) return false;
			if (!isTimeInStep(secondValue, "seconds", props.seconds)) return true;
			const { isSecondDisabled } = props;
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
			const { value } = mergedValueRef;
			if (value === null) return null;
			return getHours(value) < 12 ? "am" : "pm";
		});
		function doUpdateFormattedValue(value, timestampValue) {
			const { onUpdateFormattedValue, "onUpdate:formattedValue": _onUpdateFormattedValue } = props;
			if (onUpdateFormattedValue) call(onUpdateFormattedValue, value, timestampValue);
			if (_onUpdateFormattedValue) call(_onUpdateFormattedValue, value, timestampValue);
		}
		function createFormattedValue(value) {
			return value === null ? null : mergedFormatRef.value(value, props.valueFormat || props.format);
		}
		function doUpdateValue(value) {
			const { onUpdateValue, "onUpdate:value": _onUpdateValue, onChange } = props;
			const { nTriggerFormChange, nTriggerFormInput } = formItem;
			const formattedValue = createFormattedValue(value);
			if (onUpdateValue) call(onUpdateValue, value, formattedValue);
			if (_onUpdateValue) call(_onUpdateValue, value, formattedValue);
			if (onChange) call(onChange, value, formattedValue);
			doUpdateFormattedValue(formattedValue, value);
			uncontrolledValueRef.value = value;
			nTriggerFormChange();
			nTriggerFormInput();
		}
		function doFocus(e) {
			const { onFocus } = props;
			const { nTriggerFormFocus } = formItem;
			if (onFocus) call(onFocus, e);
			nTriggerFormFocus();
		}
		function doBlur(e) {
			const { onBlur } = props;
			const { nTriggerFormBlur } = formItem;
			if (onBlur) call(onBlur, e);
			nTriggerFormBlur();
		}
		function doConfirm() {
			const { onConfirm } = props;
			if (onConfirm) call(onConfirm, mergedValueRef.value, createFormattedValue(mergedValueRef.value));
		}
		function handleTimeInputClear(e) {
			var _a;
			e.stopPropagation();
			doUpdateValue(null);
			deriveInputValue(null);
			(_a = props.onClear) === null || _a === void 0 || _a.call(props);
		}
		function handleFocusDetectorFocus() {
			closePanel({ returnFocus: true });
		}
		function clearSelectedValue() {
			doUpdateValue(null);
			deriveInputValue(null);
			closePanel({ returnFocus: true });
		}
		function handleInputKeydown(e) {
			if (e.key === "Escape" && mergedShowRef.value) markEventEffectPerformed(e);
		}
		function handleMenuKeydown(e) {
			var _a;
			switch (e.key) {
				case "Escape":
					if (mergedShowRef.value) {
						markEventEffectPerformed(e);
						closePanel({ returnFocus: true });
					}
					break;
				case "Tab": if (keyboardState.shift && e.target === ((_a = panelInstRef.value) === null || _a === void 0 ? void 0 : _a.$el)) {
					e.preventDefault();
					closePanel({ returnFocus: true });
				}
			}
		}
		function disableTransitionOneTick() {
			transitionDisabledRef.value = true;
			nextTick(() => {
				transitionDisabledRef.value = false;
			});
		}
		function handleTriggerClick(e) {
			if (mergedDisabledRef.value || happensIn(e, "clear")) return;
			if (!mergedShowRef.value) openPanel();
		}
		function handleHourClick(hour) {
			if (typeof hour === "string") return;
			if (mergedValueRef.value === null) doUpdateValue(getTime(setHours(startOfHour(/* @__PURE__ */ new Date()), hour)));
			else doUpdateValue(getTime(setHours(mergedValueRef.value, hour)));
		}
		function handleMinuteClick(minute) {
			if (typeof minute === "string") return;
			if (mergedValueRef.value === null) doUpdateValue(getTime(setMinutes(startOfMinute(/* @__PURE__ */ new Date()), minute)));
			else doUpdateValue(getTime(setMinutes(mergedValueRef.value, minute)));
		}
		function handleSecondClick(second) {
			if (typeof second === "string") return;
			if (mergedValueRef.value === null) doUpdateValue(getTime(setSeconds(startOfSecond(/* @__PURE__ */ new Date()), second)));
			else doUpdateValue(getTime(setSeconds(mergedValueRef.value, second)));
		}
		function handleAmPmClick(amPm) {
			const { value: mergedValue } = mergedValueRef;
			if (mergedValue === null) {
				const now = /* @__PURE__ */ new Date();
				const hours = getHours(now);
				if (amPm === "pm" && hours < 12) doUpdateValue(getTime(setHours(now, hours + 12)));
				else if (amPm === "am" && hours >= 12) doUpdateValue(getTime(setHours(now, hours - 12)));
				doUpdateValue(getTime(now));
			} else {
				const hours = getHours(mergedValue);
				if (amPm === "pm" && hours < 12) doUpdateValue(getTime(setHours(mergedValue, hours + 12)));
				else if (amPm === "am" && hours >= 12) doUpdateValue(getTime(setHours(mergedValue, hours - 12)));
			}
		}
		function deriveInputValue(time) {
			if (time === void 0) time = mergedValueRef.value;
			if (time === null) displayTimeStringRef.value = "";
			else displayTimeStringRef.value = mergedFormatRef.value(time, props.format, dateFnsOptionsRef.value);
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
					closePanel({ returnFocus: false });
				}
			} else {
				deriveInputValue();
				doBlur(e);
			}
		}
		function handleTimeInputActivate() {
			if (mergedDisabledRef.value) return;
			if (!mergedShowRef.value) openPanel();
		}
		function handleTimeInputDeactivate() {
			if (mergedDisabledRef.value) return;
			deriveInputValue();
			closePanel({ returnFocus: false });
		}
		function scrollTimer() {
			if (!panelInstRef.value) return;
			const { hourScrollRef, minuteScrollRef, secondScrollRef, amPmScrollRef } = panelInstRef.value;
			[
				hourScrollRef,
				minuteScrollRef,
				secondScrollRef,
				amPmScrollRef
			].forEach((itemScrollRef) => {
				var _a;
				if (!itemScrollRef) return;
				const activeItemEl = (_a = itemScrollRef.contentRef) === null || _a === void 0 ? void 0 : _a.querySelector("[data-active]");
				if (activeItemEl) itemScrollRef.scrollTo({ top: activeItemEl.offsetTop });
			});
		}
		function doUpdateShow(value) {
			uncontrolledShowRef.value = value;
			const { onUpdateShow, "onUpdate:show": _onUpdateShow } = props;
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
			nextTick(scrollTimer);
		}
		function handleClickOutside(e) {
			var _a, _b;
			if (mergedShowRef.value && !((_b = (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef) === null || _b === void 0 ? void 0 : _b.contains(getPreciseEventTarget(e)))) closePanel({ returnFocus: false });
		}
		function closePanel({ returnFocus }) {
			var _a;
			if (mergedShowRef.value) {
				doUpdateShow(false);
				if (returnFocus) (_a = inputInstRef.value) === null || _a === void 0 || _a.focus();
			}
		}
		function handleTimeInputUpdateValue(v) {
			if (v === "") {
				doUpdateValue(null);
				return;
			}
			const time = strictParse(v, props.format, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value);
			displayTimeStringRef.value = v;
			if (isValid(time)) {
				const { value: mergedValue } = mergedValueRef;
				if (mergedValue !== null) doUpdateValue(getTime(set(mergedValue, {
					hours: getHours(time),
					minutes: getMinutes(time),
					seconds: getSeconds(time),
					milliseconds: getMilliseconds(time)
				})));
				else doUpdateValue(getTime(time));
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
			const [mergeHours, mergeMinutes, mergeSeconds] = [
				"hours",
				"minutes",
				"seconds"
			].map((i) => !props[i] || isTimeInStep(getNowTime[i](now), i, props[i]) ? getNowTime[i](now) : findSimilarTime(getNowTime[i](now), i, props[i]));
			doUpdateValue(getTime(setSeconds(setMinutes(setHours(mergedValueRef.value ? mergedValueRef.value : getTime(now), mergeHours), mergeMinutes), mergeSeconds)));
		}
		function handleConfirmClick() {
			deriveInputValue();
			doConfirm();
			closePanel({ returnFocus: true });
		}
		function handleMenuFocusOut(e) {
			if (isInternalFocusSwitch(e)) return;
			deriveInputValue();
			doBlur(e);
			closePanel({ returnFocus: false });
		}
		watch(mergedValueRef, (value) => {
			deriveInputValue(value);
			disableTransitionOneTick();
			nextTick(scrollTimer);
		});
		watch(mergedShowRef, () => {
			if (isValueInvalidRef.value) doUpdateValue(memorizedValueRef.value);
		});
		provide(timePickerInjectionKey, {
			mergedThemeRef: themeRef,
			mergedClsPrefixRef
		});
		const exposedMethods = {
			focus: () => {
				var _a;
				(_a = inputInstRef.value) === null || _a === void 0 || _a.focus();
			},
			blur: () => {
				var _a;
				(_a = inputInstRef.value) === null || _a === void 0 || _a.blur();
			}
		};
		const triggerCssVarsRef = computed(() => {
			const { common: { cubicBezierEaseInOut }, self: { iconColor, iconColorDisabled } } = themeRef.value;
			return {
				"--n-icon-color-override": iconColor,
				"--n-icon-color-disabled-override": iconColorDisabled,
				"--n-bezier": cubicBezierEaseInOut
			};
		});
		const triggerThemeClassHandle = inlineThemeDisabled ? useThemeClass("time-picker-trigger", void 0, triggerCssVarsRef, props) : void 0;
		const cssVarsRef = computed(() => {
			const { self: { panelColor, itemTextColor, itemTextColorActive, itemColorHover, panelDividerColor, panelBoxShadow, itemOpacityDisabled, borderRadius, itemFontSize, itemWidth, itemHeight, panelActionPadding, itemBorderRadius }, common: { cubicBezierEaseInOut } } = themeRef.value;
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
		const { mergedClsPrefix, $slots, triggerOnRender } = this;
		triggerOnRender === null || triggerOnRender === void 0 || triggerOnRender();
		return h("div", {
			class: [`${mergedClsPrefix}-time-picker`, this.triggerThemeClass],
			style: this.triggerCssVars
		}, h(Binder, null, { default: () => [h(Target_default, null, { default: () => h(Input_default, {
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
		}, this.showIcon ? { [this.clearable ? "clear-icon-placeholder" : "suffix"]: () => h(Icon_default, {
			clsPrefix: mergedClsPrefix,
			class: `${mergedClsPrefix}-time-picker-icon`
		}, { default: () => $slots.icon ? $slots.icon() : h(Time_default, null) }) } : null) }), h(Follower_default, {
			teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
			show: this.mergedShow,
			to: this.adjustedTo,
			containerClass: this.namespace,
			placement: this.placement
		}, { default: () => h(Transition, {
			name: "fade-in-scale-up-transition",
			appear: this.isMounted
		}, { default: () => {
			var _a;
			if (this.mergedShow) {
				(_a = this.onRender) === null || _a === void 0 || _a.call(this);
				return withDirectives(h(Panel_default, {
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
				}), [[
					clickoutside,
					this.handleClickOutside,
					void 0,
					{ capture: true }
				]]);
			}
			return null;
		} }) })] }));
	}
});
//#endregion
export { isValid as A, getMinutes as C, startOfYear as D, format$1 as E, startOfDay as M, addMonths as N, startOfMonth as O, getMonth as S, getDate as T, startOfSecond as _, getDefaultTime as a, getTime as b, getYearString as c, quarterArray as d, strictParse as f, setMonth as g, set as h, extractSingleDefaultTime as i, addYears as j, startOfQuarter as k, monthArray as l, setYear as m, dateArray as n, getMonthString as o, yearArray as p, extractRangeDefaultTime as r, getQuarterString as s, TimePicker_default as t, pluckValueFromRange as u, isSameMonth as v, getHours as w, getSeconds as x, getYear as y };
