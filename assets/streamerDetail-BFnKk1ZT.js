import { $ as renderList, A as createTextVNode, C as computed, D as createElementBlock, E as createCommentVNode, F as h, J as onMounted, Jt as normalizeStyle, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, Q as provide, St as toRef, T as createBlock, Tt as unref, U as onActivated, Y as onUnmounted, Z as openBlock, Zt as toDisplayString, _t as reactive, a as useRoute, at as watch, ft as init_reactivity_esm_bundler, g as withModifiers, j as createVNode, mt as isRef, o as useRouter, q as onDeactivated, st as withCtx, u as init_runtime_dom_esm_bundler, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { C as formatRecentRecordTime, H as useMergedState, T as formatTime, a as recordHistory_default, p as recoder, t as _plugin_vue_export_helper_default, x as formatDuration, z as useLocale } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { i as Tag_default, s as Empty_default } from "./Select-DRoqCGUj.js";
import { n as TabPane_default, t as Tabs_default } from "./Tabs-BVy6lVL_.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { t as Pagination_default } from "./Pagination-4O9O9wA1.js";
import { t as ChevronLeft_default } from "./ChevronLeft-BAjVi4nR.js";
import { t as ChevronRight_default } from "./ChevronRight-w9jldfMQ.js";
import { t as DatePicker_default } from "./DatePicker-URHdw_S6.js";
import { E as format, M as startOfDay, N as addMonths, O as startOfMonth, S as getMonth, n as dateArray, y as getYear } from "./TimePicker-DurCNh_G.js";
import { n as Avatar_default, t as addModal_default } from "./addModal-BtzuVU2n.js";
import { t as Spin_default } from "./Spin-COE9UcEU.js";
import { $r as cE, Ct as useStyle, G as calendarLight, J as buttonGroupInjectionKey, Jn as call, K as Button, Mn as useThemeClass, Nn as useConfig, St as useTheme, Tt as useRtl, W as Card_default, Xr as c, Zr as cB, ei as cM, ii as insidePopover, ri as insideModal, ti as cNotM, xt as Icon_default, zn as resolveSlotWithTypedProps } from "./index-CPQhEiaa.js";
import { t as common } from "./common-CBeNn3OB.js";
import { l as useTitle } from "./core-DWew9NA7.js";
import { t as useNotice } from "./useNotice-DqXLG4Nf.js";
import { n as openRecorderFolder, r as toLiveVideoPlayerPage } from "./pages-CMcKcvsE.js";
import { t as Index_default } from "./Index-DVrPaNfC.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/button-group/src/styles/index.cssr.mjs
var zero = "0!important";
var n1 = "-1px!important";
function createLeftBorderStyle(type) {
	return cM(`${type}-type`, [c("& +", [cB("button", {}, [cM(`${type}-type`, [cE("border", { borderLeftWidth: zero }), cE("state-border", { left: n1 })])])])]);
}
function createTopBorderStyle(type) {
	return cM(`${type}-type`, [c("& +", [cB("button", [cM(`${type}-type`, [cE("border", { borderTopWidth: zero }), cE("state-border", { top: n1 })])])])]);
}
var index_cssr_default$1 = cB("button-group", `
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`, [cNotM("vertical", { flexDirection: "row" }, [cNotM("rtl", [cB("button", [
	c("&:first-child:not(:last-child)", `
 margin-right: ${zero};
 border-top-right-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `),
	c("&:last-child:not(:first-child)", `
 margin-left: ${zero};
 border-top-left-radius: ${zero};
 border-bottom-left-radius: ${zero};
 `),
	c("&:not(:first-child):not(:last-child)", `
 margin-left: ${zero};
 margin-right: ${zero};
 border-radius: ${zero};
 `),
	createLeftBorderStyle("default"),
	cM("ghost", [
		createLeftBorderStyle("primary"),
		createLeftBorderStyle("info"),
		createLeftBorderStyle("success"),
		createLeftBorderStyle("warning"),
		createLeftBorderStyle("error")
	])
])])]), cM("vertical", { flexDirection: "column" }, [cB("button", [
	c("&:first-child:not(:last-child)", `
 margin-bottom: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-bottom-left-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `),
	c("&:last-child:not(:first-child)", `
 margin-top: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-top-left-radius: ${zero};
 border-top-right-radius: ${zero};
 `),
	c("&:not(:first-child):not(:last-child)", `
 margin: ${zero};
 border-radius: ${zero};
 `),
	createTopBorderStyle("default"),
	cM("ghost", [
		createTopBorderStyle("primary"),
		createTopBorderStyle("info"),
		createTopBorderStyle("success"),
		createTopBorderStyle("warning"),
		createTopBorderStyle("error")
	])
])])]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/button-group/src/ButtonGroup.mjs
init_runtime_core_esm_bundler();
var ButtonGroup_default = defineComponent({
	name: "ButtonGroup",
	props: {
		size: String,
		vertical: Boolean
	},
	setup(props) {
		const { mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
		useStyle("-button-group", index_cssr_default$1, mergedClsPrefixRef);
		provide(buttonGroupInjectionKey, props);
		return {
			rtlEnabled: useRtl("ButtonGroup", mergedRtlRef, mergedClsPrefixRef),
			mergedClsPrefix: mergedClsPrefixRef
		};
	},
	render() {
		const { mergedClsPrefix } = this;
		return h("div", {
			class: [
				`${mergedClsPrefix}-button-group`,
				this.rtlEnabled && `${mergedClsPrefix}-button-group--rtl`,
				this.vertical && `${mergedClsPrefix}-button-group--vertical`
			],
			role: "group"
		}, this.$slots);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/calendar/src/styles/index.cssr.mjs
var index_cssr_default = c([
	cB("calendar", `
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 height: 720px;
 display: flex;
 flex-direction: column;
 `, [
		cB("calendar-prev-btn", `
 cursor: pointer;
 `),
		cB("calendar-next-btn", `
 cursor: pointer;
 `),
		cB("calendar-header", `
 display: flex;
 align-items: center;
 line-height: 1;
 font-size: var(--n-title-font-size);
 padding: 0 0 18px 0;
 justify-content: space-between;
 `, [cE("title", `
 color: var(--n-title-text-color);
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 `), cE("extra", `
 display: flex;
 align-items: center;
 `)]),
		cB("calendar-dates", `
 display: grid;
 grid-template-columns: repeat(7, minmax(0, 1fr));
 grid-auto-rows: 1fr;
 border-radius: var(--n-border-radius);
 flex: 1;
 border-top: 1px solid;
 border-left: 1px solid;
 border-color: var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 `),
		cB("calendar-cell", `
 box-sizing: border-box;
 padding: 10px;
 border-right: 1px solid;
 border-bottom: 1px solid;
 border-color: var(--n-border-color);
 cursor: pointer;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [
			c("&:nth-child(7)", `
 border-top-right-radius: var(--n-border-radius);
 `),
			c("&:nth-last-child(7)", `
 border-bottom-left-radius: var(--n-border-radius);
 `),
			c("&:last-child", `
 border-bottom-right-radius: var(--n-border-radius);
 `),
			c("&:hover", `
 background-color: var(--n-cell-color-hover);
 `),
			cE("bar", `
 position: absolute;
 left: 0;
 right: 0;
 bottom: -1px;
 height: 3px;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `),
			cM("selected", [cE("bar", `
 background-color: var(--n-bar-color);
 `)]),
			cB("calendar-date", `
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 color: var(--n-text-color);
 `, [cE("date", `
 color: var(--n-text-color);
 `)]),
			cM("disabled, other-month", `
 color: var(--n-day-text-color);
 `, [cB("calendar-date", [cE("date", `
 color: var(--n-day-text-color);
 `)])]),
			cM("disabled", `
 cursor: not-allowed;
 `),
			cM("current", [cB("calendar-date", [cE("date", `
 color: var(--n-date-text-color-current);
 background-color: var(--n-date-color-current);
 `)])]),
			cB("calendar-date", `
 position: relative;
 line-height: 1;
 display: flex;
 align-items: center;
 height: 1em;
 justify-content: space-between;
 padding-bottom: .75em;
 `, [cE("date", `
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-left: -0.4em;
 width: 1.8em;
 height: 1.8em;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cE("day", `
 color: var(--n-day-text-color);
 transition: color .3s var(--n-bezier);
 `)])
		])
	]),
	insideModal(cB("calendar", [cB("calendar-dates", `
 border-color: var(--n-border-color-modal);
 `), cB("calendar-cell", `
 border-color: var(--n-border-color-modal);
 `, [c("&:hover", `
 background-color: var(--n-cell-color-hover-modal);
 `)])])),
	insidePopover(cB("calendar", [cB("calendar-dates", `
 border-color: var(--n-border-color-popover);
 `), cB("calendar-cell", `
 border-color: var(--n-border-color-popover);
 `, [c("&:hover", `
 background-color: var(--n-cell-color-hover-popover);
 `)])]))
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/calendar/src/Calendar.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var calendarProps = Object.assign(Object.assign({}, useTheme.props), {
	isDateDisabled: Function,
	value: Number,
	defaultValue: {
		type: Number,
		default: null
	},
	onPanelChange: Function,
	"onUpdate:value": [Function, Array],
	onUpdateValue: [Function, Array]
});
var Calendar_default = defineComponent({
	name: "Calendar",
	props: calendarProps,
	slots: Object,
	setup(props) {
		var _a;
		const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
		const themeRef = useTheme("Calendar", "-calendar", index_cssr_default, calendarLight, props, mergedClsPrefixRef);
		const { localeRef, dateLocaleRef } = useLocale("DatePicker");
		const now = Date.now();
		const monthTsRef = ref(startOfMonth((_a = props.defaultValue) !== null && _a !== void 0 ? _a : now).valueOf());
		const uncontrolledValueRef = ref(props.defaultValue || null);
		const mergedValueRef = useMergedState(toRef(props, "value"), uncontrolledValueRef);
		function doUpdateValue(value, time) {
			const { onUpdateValue, "onUpdate:value": _onUpdateValue } = props;
			if (onUpdateValue) call(onUpdateValue, value, time);
			if (_onUpdateValue) call(_onUpdateValue, value, time);
			uncontrolledValueRef.value = value;
		}
		function handlePrevClick() {
			var _a;
			const monthTs = addMonths(monthTsRef.value, -1).valueOf();
			monthTsRef.value = monthTs;
			(_a = props.onPanelChange) === null || _a === void 0 || _a.call(props, {
				year: getYear(monthTs),
				month: getMonth(monthTs) + 1
			});
		}
		function handleNextClick() {
			var _a;
			const monthTs = addMonths(monthTsRef.value, 1).valueOf();
			monthTsRef.value = monthTs;
			(_a = props.onPanelChange) === null || _a === void 0 || _a.call(props, {
				year: getYear(monthTs),
				month: getMonth(monthTs) + 1
			});
		}
		function handleTodayClick() {
			var _a;
			const { value: monthTs } = monthTsRef;
			const oldYear = getYear(monthTs);
			const oldMonth = getMonth(monthTs);
			const newMonthTs = startOfMonth(now).valueOf();
			monthTsRef.value = newMonthTs;
			const newYear = getYear(newMonthTs);
			const newMonth = getMonth(newMonthTs);
			if (oldYear !== newYear || oldMonth !== newMonth) (_a = props.onPanelChange) === null || _a === void 0 || _a.call(props, {
				year: newYear,
				month: newMonth + 1
			});
		}
		const cssVarsRef = computed(() => {
			const { common: { cubicBezierEaseInOut }, self: { borderColor, borderColorModal, borderColorPopover, borderRadius, titleFontSize, textColor, titleFontWeight, titleTextColor, dayTextColor, fontSize, lineHeight, dateColorCurrent, dateTextColorCurrent, cellColorHover, cellColor, cellColorModal, barColor, cellColorPopover, cellColorHoverModal, cellColorHoverPopover } } = themeRef.value;
			return {
				"--n-bezier": cubicBezierEaseInOut,
				"--n-border-color": borderColor,
				"--n-border-color-modal": borderColorModal,
				"--n-border-color-popover": borderColorPopover,
				"--n-border-radius": borderRadius,
				"--n-text-color": textColor,
				"--n-title-font-weight": titleFontWeight,
				"--n-title-font-size": titleFontSize,
				"--n-title-text-color": titleTextColor,
				"--n-day-text-color": dayTextColor,
				"--n-font-size": fontSize,
				"--n-line-height": lineHeight,
				"--n-date-color-current": dateColorCurrent,
				"--n-date-text-color-current": dateTextColorCurrent,
				"--n-cell-color": cellColor,
				"--n-cell-color-modal": cellColorModal,
				"--n-cell-color-popover": cellColorPopover,
				"--n-cell-color-hover": cellColorHover,
				"--n-cell-color-hover-modal": cellColorHoverModal,
				"--n-cell-color-hover-popover": cellColorHoverPopover,
				"--n-bar-color": barColor
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("calendar", void 0, cssVarsRef, props) : void 0;
		return {
			mergedClsPrefix: mergedClsPrefixRef,
			locale: localeRef,
			dateLocale: dateLocaleRef,
			now,
			mergedValue: mergedValueRef,
			monthTs: monthTsRef,
			dateItems: computed(() => {
				return dateArray(monthTsRef.value, mergedValueRef.value, now, localeRef.value.firstDayOfWeek, true);
			}),
			doUpdateValue,
			handleTodayClick,
			handlePrevClick,
			handleNextClick,
			mergedTheme: themeRef,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		};
	},
	render() {
		const { isDateDisabled, mergedClsPrefix, monthTs, cssVars, mergedValue, mergedTheme, $slots, locale: { monthBeforeYear, today }, dateLocale: { locale }, handleTodayClick, handlePrevClick, handleNextClick, onRender } = this;
		onRender === null || onRender === void 0 || onRender();
		const normalizedValue = mergedValue && startOfDay(mergedValue).valueOf();
		const year = getYear(monthTs);
		const calendarMonth = getMonth(monthTs) + 1;
		return h("div", {
			class: [`${mergedClsPrefix}-calendar`, this.themeClass],
			style: cssVars
		}, h("div", { class: `${mergedClsPrefix}-calendar-header` }, h("div", { class: `${mergedClsPrefix}-calendar-header__title` }, resolveSlotWithTypedProps($slots.header, {
			year,
			month: calendarMonth
		}, () => {
			const localeMonth = format(monthTs, "MMMM", { locale });
			return [monthBeforeYear ? `${localeMonth} ${year}` : `${year} ${localeMonth}`];
		})), h("div", { class: `${mergedClsPrefix}-calendar-header__extra` }, h(ButtonGroup_default, null, { default: () => h(Fragment, null, h(Button, {
			size: "small",
			onClick: handlePrevClick,
			theme: mergedTheme.peers.Button,
			themeOverrides: mergedTheme.peerOverrides.Button
		}, { icon: () => h(Icon_default, {
			clsPrefix: mergedClsPrefix,
			class: `${mergedClsPrefix}-calendar-prev-btn`
		}, { default: () => h(ChevronLeft_default, null) }) }), h(Button, {
			size: "small",
			onClick: handleTodayClick,
			theme: mergedTheme.peers.Button,
			themeOverrides: mergedTheme.peerOverrides.Button
		}, { default: () => today }), h(Button, {
			size: "small",
			onClick: handleNextClick,
			theme: mergedTheme.peers.Button,
			themeOverrides: mergedTheme.peerOverrides.Button
		}, { icon: () => h(Icon_default, {
			clsPrefix: mergedClsPrefix,
			class: `${mergedClsPrefix}-calendar-next-btn`
		}, { default: () => h(ChevronRight_default, null) }) })) }))), h("div", { class: `${mergedClsPrefix}-calendar-dates` }, this.dateItems.map(({ dateObject, ts, inCurrentMonth, isCurrentDate }, index) => {
			var _a;
			const { year, month, date } = dateObject;
			const fullDate = format(ts, "yyyy-MM-dd");
			const notInCurrentMonth = !inCurrentMonth;
			const disabled = (isDateDisabled === null || isDateDisabled === void 0 ? void 0 : isDateDisabled(ts)) === true;
			const selected = normalizedValue === startOfDay(ts).valueOf();
			return h("div", {
				key: `${calendarMonth}-${index}`,
				class: [
					`${mergedClsPrefix}-calendar-cell`,
					disabled && `${mergedClsPrefix}-calendar-cell--disabled`,
					notInCurrentMonth && `${mergedClsPrefix}-calendar-cell--other-month`,
					disabled && `${mergedClsPrefix}-calendar-cell--not-allowed`,
					isCurrentDate && `${mergedClsPrefix}-calendar-cell--current`,
					selected && `${mergedClsPrefix}-calendar-cell--selected`
				],
				onClick: () => {
					var _a;
					if (disabled) return;
					const monthTs = startOfMonth(ts).valueOf();
					this.monthTs = monthTs;
					if (notInCurrentMonth) (_a = this.onPanelChange) === null || _a === void 0 || _a.call(this, {
						year: getYear(monthTs),
						month: getMonth(monthTs) + 1
					});
					this.doUpdateValue(ts, {
						year,
						month: month + 1,
						date
					});
				}
			}, h("div", { class: `${mergedClsPrefix}-calendar-date` }, h("div", {
				class: `${mergedClsPrefix}-calendar-date__date`,
				title: fullDate
			}, date), index < 7 && h("div", {
				class: `${mergedClsPrefix}-calendar-date__day`,
				title: fullDate
			}, format(ts, "EEE", { locale }))), (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots, {
				year,
				month: month + 1,
				date
			}), h("div", { class: `${mergedClsPrefix}-calendar-cell__bar` }));
		})));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+fluent@0.13.0/node_modules/@vicons/fluent/es/Copy16Regular.js
init_runtime_core_esm_bundler();
var _hoisted_1$4 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 16 16"
};
var Copy16Regular_default = defineComponent({
	name: "Copy16Regular",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [createBaseVNode("g", { fill: "none" }, [createBaseVNode("path", {
			d: "M4 4.085V10.5a2.5 2.5 0 0 0 2.336 2.495L6.5 13h4.414A1.5 1.5 0 0 1 9.5 14H6a3 3 0 0 1-3-3V5.5a1.5 1.5 0 0 1 1-1.415zM11.5 2A1.5 1.5 0 0 1 13 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 5 10.5v-7A1.5 1.5 0 0 1 6.5 2h5zm0 1h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5z",
			fill: "currentColor"
		})], -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+fluent@0.13.0/node_modules/@vicons/fluent/es/LinkSquare20Regular.js
init_runtime_core_esm_bundler();
var _hoisted_1$3 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 20 20"
};
var LinkSquare20Regular_default = defineComponent({
	name: "LinkSquare20Regular",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [createBaseVNode("g", { fill: "none" }, [createBaseVNode("path", {
			d: "M4.5 3A1.5 1.5 0 0 0 3 4.5v6A1.5 1.5 0 0 0 4.5 12H6v1H4.5A2.5 2.5 0 0 1 2 10.5v-6A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5v6a2.5 2.5 0 0 1-2.5 2.5H9v-1h1.5a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 10.5 3h-6zm5 4H11v1H9.5A1.5 1.5 0 0 0 8 9.5v6A1.5 1.5 0 0 0 9.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 8H14V7h1.5A2.5 2.5 0 0 1 18 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-6A2.5 2.5 0 0 1 9.5 7z",
			fill: "currentColor"
		})], -1)]));
	}
});
//#endregion
//#region src/renderer/src/pages/streamerDetail/components/SessionDanmaStats.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1$2 = { class: "session-stats" };
var _hoisted_2$2 = { class: "summary-grid" };
var _hoisted_3$2 = { class: "summary-item" };
var _hoisted_4$2 = { class: "summary-item" };
var _hoisted_5$2 = { class: "summary-item" };
var _hoisted_6$1 = { class: "chart-shell" };
var _hoisted_7$1 = ["viewBox"];
var _hoisted_8$1 = { class: "grid-lines" };
var _hoisted_9$1 = [
	"x2",
	"y1",
	"y2"
];
var _hoisted_10$1 = ["x", "y"];
var _hoisted_11$1 = { class: "bars" };
var _hoisted_12$1 = [
	"x",
	"y",
	"width",
	"height",
	"fill"
];
var _hoisted_13$1 = { class: "clip-track" };
var _hoisted_14$1 = [
	"x",
	"y",
	"width",
	"fill"
];
var _hoisted_15$1 = { class: "x-axis" };
var _hoisted_16$1 = [
	"x1",
	"x2",
	"y1",
	"y2"
];
var _hoisted_17$1 = ["x", "y"];
var _hoisted_18$1 = { class: "clip-legend" };
var VIEW_WIDTH = 1e3;
var VIEW_HEIGHT = 250;
var PLOT_LEFT = 52;
var PLOT_BOTTOM = 174;
//#endregion
//#region src/renderer/src/pages/streamerDetail/components/SessionDanmaStats.vue
var SessionDanmaStats_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SessionDanmaStats",
	props: { session: {} },
	emits: ["toHistory"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const COLORS = [
			"#18a058",
			"#2080f0",
			"#f0a020",
			"#d03050",
			"#8a5cf5",
			"#00a6a6"
		];
		const formatNumber = (value) => Number(value || 0).toLocaleString();
		const formatClock = (timestamp, withSeconds = false) => {
			const date = new Date(timestamp);
			const hours = String(date.getHours()).padStart(2, "0");
			const minutes = String(date.getMinutes()).padStart(2, "0");
			const seconds = String(date.getSeconds()).padStart(2, "0");
			return withSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
		};
		const averagePerMinute = computed(() => {
			if (!props.session.totalDuration) return "0";
			return (props.session.totalDanmaNum / props.session.totalDuration * 60).toFixed(1);
		});
		const chartModel = computed(() => {
			const clips = [...props.session.clips].sort((left, right) => left.record_start_time - right.record_start_time);
			if (!clips.some((clip) => clip.danmaTimeline)) return null;
			const segmentRanges = clips.map((clip, index) => {
				const timeline = clip.danmaTimeline;
				const timelineDuration = timeline ? timeline.data.length * timeline.interval : 0;
				const duration = Math.max(clip.video_duration || 0, timelineDuration, 1);
				return {
					clip,
					index,
					start: clip.record_start_time,
					end: Math.max(clip.record_end_time || 0, clip.record_start_time + duration * 1e3)
				};
			});
			const start = Math.min(...segmentRanges.map((item) => item.start));
			const end = Math.max(...segmentRanges.map((item) => item.end));
			const range = Math.max(end - start, 1);
			const plotWidth = 930;
			const plotHeight = 158;
			const toX = (timestamp) => PLOT_LEFT + (timestamp - start) / range * plotWidth;
			const rawBars = segmentRanges.flatMap(({ clip, index: clipIndex }) => {
				const timeline = clip.danmaTimeline;
				if (!timeline) return [];
				return timeline.data.map((count, index) => ({
					clip,
					clipIndex,
					index,
					count,
					timestamp: clip.record_start_time + index * timeline.interval * 1e3,
					interval: timeline.interval
				}));
			});
			const maxCount = Math.max(...rawBars.map((item) => item.count), 1);
			const bars = rawBars.filter((item) => item.count > 0).map((item) => {
				const naturalWidth = item.interval * 1e3 * plotWidth / range;
				const height = Math.max(item.count / maxCount * plotHeight, 1);
				return {
					clipId: item.clip.id,
					index: item.index,
					x: toX(item.timestamp),
					y: PLOT_BOTTOM - height,
					width: Math.max(naturalWidth, .8),
					height,
					color: COLORS[item.clipIndex % COLORS.length],
					tooltip: `${formatClock(item.timestamp, true)}－${formatClock(item.timestamp + item.interval * 1e3, true)}：${item.count} 条弹幕（片段 ${item.clipIndex + 1}）`
				};
			});
			const segments = segmentRanges.map(({ clip, index, start: clipStart, end: clipEnd }) => ({
				id: clip.id,
				label: `片段 ${index + 1}`,
				x: toX(clipStart),
				width: Math.max(toX(clipEnd) - toX(clipStart), 2),
				color: clip.danmaTimeline ? COLORS[index % COLORS.length] : "#aab2c0",
				timeRange: `${formatClock(clipStart, true)}–${formatClock(clipEnd, true)}`,
				tooltip: clip.danmaTimeline ? `片段 ${index + 1}：${formatClock(clipStart, true)}–${formatClock(clipEnd, true)}，${formatNumber(clip.danma_num)} 条弹幕` : `片段 ${index + 1}：${formatClock(clipStart, true)}–${formatClock(clipEnd, true)}，暂无时间分布数据`
			}));
			const xTicks = Array.from({ length: 6 }, (_, index) => {
				const timestamp = start + range * index / 5;
				return {
					timestamp,
					x: toX(timestamp),
					label: formatClock(timestamp)
				};
			});
			const yTickCount = Math.min(maxCount, 4);
			return {
				bars,
				segments,
				xTicks,
				yTicks: Array.from({ length: yTickCount + 1 }, (_, index) => {
					const value = Math.round(maxCount * index / yTickCount);
					return {
						value,
						y: PLOT_BOTTOM - plotHeight * value / maxCount
					};
				}),
				peak: rawBars.reduce((current, item) => !current || item.count > current.count ? item : current, null)
			};
		});
		const peakLabel = computed(() => {
			const peak = chartModel.value?.peak;
			if (!peak || peak.count <= 0) return "--";
			return `${peak.count} 条/${peak.interval}秒 · ${formatClock(peak.timestamp, true)}`;
		});
		return (_ctx, _cache) => {
			const _component_n_empty = Empty_default;
			return openBlock(), createElementBlock("div", _hoisted_1$2, [createBaseVNode("div", _hoisted_2$2, [
				createBaseVNode("div", _hoisted_3$2, [_cache[1] || (_cache[1] = createBaseVNode("span", null, "总弹幕", -1)), createBaseVNode("strong", null, toDisplayString(formatNumber(_ctx.session.totalDanmaNum)), 1)]),
				createBaseVNode("div", {
					class: "summary-item",
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toHistory", _ctx.session)),
					style: { "cursor": "pointer" }
				}, [_cache[2] || (_cache[2] = createBaseVNode("span", null, "片段数", -1)), createBaseVNode("strong", null, toDisplayString(_ctx.session.clipCount), 1)]),
				createBaseVNode("div", _hoisted_4$2, [_cache[3] || (_cache[3] = createBaseVNode("span", null, "平均弹幕", -1)), createBaseVNode("strong", null, toDisplayString(unref(averagePerMinute)) + " 条/分钟", 1)]),
				createBaseVNode("div", _hoisted_5$2, [_cache[4] || (_cache[4] = createBaseVNode("span", null, "峰值", -1)), createBaseVNode("strong", null, toDisplayString(unref(peakLabel)), 1)])
			]), unref(chartModel) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				_cache[5] || (_cache[5] = createBaseVNode("div", { class: "chart-heading" }, [createBaseVNode("div", null, [createBaseVNode("strong", null, "弹幕时间分布"), createBaseVNode("span", null, "按各录制片段的实际开始时间对齐")]), createBaseVNode("span", { class: "chart-hint" }, "悬停柱形查看详情")], -1)),
				createBaseVNode("div", _hoisted_6$1, [(openBlock(), createElementBlock("svg", {
					class: "danma-chart",
					viewBox: `0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`,
					role: "img",
					"aria-label": "本场直播各录制片段的弹幕时间分布"
				}, [
					createBaseVNode("g", _hoisted_8$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(chartModel).yTicks, (tick) => {
						return openBlock(), createElementBlock("g", { key: tick.y }, [createBaseVNode("line", {
							x1: PLOT_LEFT,
							x2: 982,
							y1: tick.y,
							y2: tick.y
						}, null, 8, _hoisted_9$1), createBaseVNode("text", {
							x: 44,
							y: tick.y + 4,
							"text-anchor": "end"
						}, toDisplayString(tick.value), 9, _hoisted_10$1)]);
					}), 128))]),
					createBaseVNode("g", _hoisted_11$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(chartModel).bars, (bar) => {
						return openBlock(), createElementBlock("rect", {
							key: `${bar.clipId}-${bar.index}`,
							x: bar.x,
							y: bar.y,
							width: bar.width,
							height: bar.height,
							fill: bar.color,
							rx: "0.5"
						}, [createBaseVNode("title", null, toDisplayString(bar.tooltip), 1)], 8, _hoisted_12$1);
					}), 128))]),
					createBaseVNode("g", _hoisted_13$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(chartModel).segments, (segment) => {
						return openBlock(), createElementBlock("rect", {
							key: segment.id,
							x: segment.x,
							y: 184,
							width: segment.width,
							height: "10",
							fill: segment.color,
							rx: "3",
							opacity: "0.7"
						}, [createBaseVNode("title", null, toDisplayString(segment.tooltip), 1)], 8, _hoisted_14$1);
					}), 128))]),
					createBaseVNode("g", _hoisted_15$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(chartModel).xTicks, (tick) => {
						return openBlock(), createElementBlock("g", { key: tick.timestamp }, [createBaseVNode("line", {
							x1: tick.x,
							x2: tick.x,
							y1: 196,
							y2: 201
						}, null, 8, _hoisted_16$1), createBaseVNode("text", {
							x: tick.x,
							y: 216,
							"text-anchor": "middle"
						}, toDisplayString(tick.label), 9, _hoisted_17$1)]);
					}), 128))])
				], 8, _hoisted_7$1))]),
				createBaseVNode("div", _hoisted_18$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(chartModel).segments, (segment) => {
					return openBlock(), createElementBlock("span", { key: segment.id }, [createBaseVNode("i", { style: normalizeStyle({ backgroundColor: segment.color }) }, null, 4), createTextVNode(" " + toDisplayString(segment.label) + " · " + toDisplayString(segment.timeRange), 1)]);
				}), 128))])
			], 64)) : (openBlock(), createBlock(_component_n_empty, {
				key: 1,
				size: "small",
				description: "该场次暂无弹幕时间分布数据"
			}))]);
		};
	}
}), [["__scopeId", "data-v-9c59e41b"]]);
//#endregion
//#region src/renderer/src/pages/streamerDetail/components/RecordCalendar.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$1 = { class: "record-calendar" };
var _hoisted_2$1 = { class: "calendar-toolbar" };
var _hoisted_3$1 = {
	key: 0,
	class: "record-count"
};
var _hoisted_4$1 = {
	key: 0,
	class: "calendar-message error-message"
};
var _hoisted_5$1 = {
	key: 1,
	class: "calendar-message"
};
//#endregion
//#region src/renderer/src/pages/streamerDetail/components/RecordCalendar.vue
var RecordCalendar_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "RecordCalendar",
	props: {
		recorderId: {},
		refreshKey: {}
	},
	emits: ["selectDate"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const currentMonth = () => new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1).getTime();
		const visibleMonth = ref(currentMonth());
		const recordCounts = ref({});
		const calendarLoading = ref(false);
		const calendarError = ref("");
		let requestId = 0;
		const formatLocalDate = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
		const hasRecords = computed(() => Object.keys(recordCounts.value).length > 0);
		const getRecordCount = (year, month, date) => recordCounts.value[formatLocalDate(new Date(year, month - 1, date))] || 0;
		const getRecordCountFromTimestamp = (timestamp) => recordCounts.value[formatLocalDate(new Date(timestamp))] || 0;
		const isDateDisabled = (timestamp) => getRecordCountFromTimestamp(timestamp) === 0;
		const handlePanelChange = ({ year, month }) => {
			visibleMonth.value = new Date(year, month - 1, 1).getTime();
		};
		const handleMonthSelect = (timestamp) => {
			if (timestamp === null) return;
			const date = new Date(timestamp);
			visibleMonth.value = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
		};
		const handleDateSelect = (timestamp) => {
			if (getRecordCountFromTimestamp(timestamp) === 0) return;
			emit("selectDate", formatLocalDate(new Date(timestamp)));
		};
		const loadCalendar = async () => {
			const id = ++requestId;
			recordCounts.value = {};
			calendarError.value = "";
			if (!props.recorderId) return;
			calendarLoading.value = true;
			try {
				const startTime = visibleMonth.value;
				const month = new Date(startTime);
				const endTime = new Date(month.getFullYear(), month.getMonth() + 1, 1).getTime();
				const timestamps = await recoder.queryRecordCalendar({
					recorderId: props.recorderId,
					startTime,
					endTime
				});
				if (id !== requestId) return;
				const counts = {};
				for (const timestamp of timestamps) {
					const key = formatLocalDate(new Date(timestamp));
					counts[key] = (counts[key] || 0) + 1;
				}
				recordCounts.value = counts;
			} catch (error) {
				if (id !== requestId) return;
				calendarError.value = error?.message || "查询录制日历失败";
			} finally {
				if (id === requestId) calendarLoading.value = false;
			}
		};
		watch(() => [
			props.recorderId,
			props.refreshKey,
			visibleMonth.value
		], loadCalendar, { immediate: true });
		onUnmounted(() => {
			requestId++;
		});
		return (_ctx, _cache) => {
			const _component_n_date_picker = DatePicker_default;
			const _component_n_calendar = Calendar_default;
			const _component_n_spin = Spin_default;
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [_cache[0] || (_cache[0] = createBaseVNode("h2", null, "录制日历", -1)), createVNode(_component_n_date_picker, {
				type: "month",
				value: unref(visibleMonth),
				clearable: false,
				"aria-label": "选择月份",
				class: "month-picker",
				"onUpdate:value": handleMonthSelect
			}, null, 8, ["value"])]), createVNode(_component_n_spin, { show: unref(calendarLoading) }, {
				default: withCtx(() => [(openBlock(), createBlock(_component_n_calendar, {
					key: unref(visibleMonth),
					"default-value": unref(visibleMonth),
					"is-date-disabled": isDateDisabled,
					onPanelChange: handlePanelChange,
					"onUpdate:value": handleDateSelect
				}, {
					header: withCtx(() => _cache[1] || (_cache[1] = [])),
					default: withCtx(({ year, month, date }) => [getRecordCount(year, month, date) ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(getRecordCount(year, month, date)) + " 条录制 ", 1)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["default-value"])), unref(calendarError) ? (openBlock(), createElementBlock("p", _hoisted_4$1, toDisplayString(unref(calendarError)), 1)) : !unref(calendarLoading) && !unref(hasRecords) ? (openBlock(), createElementBlock("p", _hoisted_5$1, "本月暂无录制记录")) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["show"])]);
		};
	}
}), [["__scopeId", "data-v-57353177"]]);
//#endregion
//#region src/renderer/src/pages/streamerDetail/index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = { class: "streamer-detail-page" };
var _hoisted_2 = { class: "overview-shell" };
var _hoisted_3 = { class: "hero-main" };
var _hoisted_4 = { class: "profile-block" };
var _hoisted_5 = ["src"];
var _hoisted_6 = { class: "profile-content" };
var _hoisted_7 = { class: "profile-heading" };
var _hoisted_8 = { class: "profile-name" };
var _hoisted_9 = { class: "profile-meta" };
var _hoisted_10 = { class: "room-meta" };
var _hoisted_11 = ["href"];
var _hoisted_12 = { class: "profile-tags" };
var _hoisted_13 = { class: "hero-actions" };
var _hoisted_14 = { class: "recording-card-header" };
var _hoisted_15 = { class: "recording-actions" };
var _hoisted_16 = { class: "recording-info-grid" };
var _hoisted_17 = { class: "recording-info-item" };
var _hoisted_18 = { class: "recording-info-item" };
var _hoisted_19 = { class: "recording-info-item" };
var _hoisted_20 = { class: "recording-info-item" };
var _hoisted_21 = { class: "recording-info-item" };
var _hoisted_22 = { class: "stat-grid" };
var _hoisted_23 = ["title"];
var _hoisted_24 = { class: "stat-label" };
var _hoisted_25 = { class: "stat-value" };
var _hoisted_26 = {
	key: 0,
	class: "timeline-list"
};
var _hoisted_27 = { class: "timeline-track" };
var _hoisted_28 = {
	key: 0,
	class: "timeline-line"
};
var _hoisted_29 = { class: "timeline-content" };
var _hoisted_30 = { class: "timeline-time" };
var _hoisted_31 = { class: "timeline-text" };
var _hoisted_32 = {
	key: 0,
	class: "clip-card-grid"
};
var _hoisted_33 = { class: "clip-info" };
var _hoisted_34 = { class: "clip-title" };
var _hoisted_35 = { class: "clip-meta-row" };
var _hoisted_36 = { class: "session-table-wrap" };
var _hoisted_37 = { class: "session-table" };
var _hoisted_38 = { class: "title-cell" };
var _hoisted_39 = { class: "session-name" };
var _hoisted_40 = ["onClick"];
var _hoisted_41 = { class: "operation-cell" };
var _hoisted_42 = {
	key: 0,
	class: "detail-row"
};
var _hoisted_43 = { colspan: "9" };
var _hoisted_44 = {
	key: 0,
	class: "pagination-row"
};
//#endregion
//#region src/renderer/src/pages/streamerDetail/index.vue
var streamerDetail_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "streamerDetail",
	__name: "index",
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const notice = useNotice();
		const pageTitle = useTitle();
		const streamerInfo = reactive({
			recorderId: route.query.recorderId || route.query.id || "",
			name: route.query.name || ""
		});
		const queryParams = reactive({
			recorderId: streamerInfo.recorderId,
			page: 1,
			pageSize: 10,
			startTime: void 0,
			endTime: void 0
		});
		const loading = ref(false);
		const recordActionLoading = ref(false);
		const recentClipLoading = ref(false);
		const recorderSettingVisible = ref(false);
		const activeTab = ref("timeline");
		const calendarRefreshKey = ref(0);
		const recentClips = ref([]);
		const expandedSessionKey = ref(null);
		const result = reactive({
			recorderInfo: null,
			streamer: null,
			summary: {
				sessionCount: 0,
				clipCount: 0,
				totalDuration: 0,
				totalDanmaNum: 0,
				totalInteractNum: 0,
				lastRecordTime: null
			},
			pagination: {
				total: 0,
				page: 1,
				pageSize: 10
			},
			data: []
		});
		const displayName = computed(() => result.streamer?.name || streamerInfo.name);
		watch(() => displayName.value, (newName) => {
			if (newName) pageTitle.value = `${newName}的录制详情`;
		}, { immediate: true });
		const avatar = computed(() => result.recorderInfo?.liveInfo?.avatar || result.recorderInfo?.extra?.avatar);
		const cover = computed(() => result.recorderInfo?.liveInfo?.cover);
		const platformLabel = computed(() => result.recorderInfo?.providerId || result.streamer?.platform || "-");
		const roomIdValue = computed(() => result.recorderInfo?.channelId || result.streamer?.room_id || "");
		const roomLabel = computed(() => roomIdValue.value || "--");
		const monitorLabel = computed(() => result.recorderInfo?.disableAutoCheck ? "" : "自动监控");
		const monitorTagType = computed(() => result.recorderInfo?.disableAutoCheck ? "warning" : "success");
		const isRecording = computed(() => result.recorderInfo?.state === "recording");
		const channelURL = computed(() => result.recorderInfo?.channelURL || "");
		const recorderTimeline = computed(() => [...result.recorderInfo?.timeline || []].reverse());
		const overviewCards = computed(() => [
			{
				label: "总场次",
				value: formatNumber(result.summary.sessionCount)
			},
			{
				label: "总录制时长",
				value: formatDuration(result.summary.totalDuration, "00:00:00")
			},
			{
				label: "总录制片段",
				value: formatNumber(result.summary.clipCount)
			},
			{
				label: "总弹幕数",
				value: formatNumber(result.summary.totalDanmaNum)
			},
			{
				label: "上次录制时间",
				value: formatRecentRecordTime(result.summary.lastRecordTime),
				title: formatTime(result.summary.lastRecordTime)
			}
		]);
		const applyResult = (payload) => {
			result.recorderInfo = payload.recorderInfo;
			result.streamer = payload.streamer;
			result.summary = payload.summary;
			result.pagination = payload.pagination;
			result.data = payload.data;
		};
		const queryRecentClips = async () => {
			if (!result.recorderInfo?.channelId || !result.recorderInfo?.providerId) {
				recentClips.value = [];
				return;
			}
			recentClipLoading.value = true;
			try {
				const response = await recordHistory_default.queryRecentClips({
					room_id: result.recorderInfo.channelId,
					platform: result.recorderInfo.providerId
				});
				recentClips.value = response.data || [];
			} catch (error) {
				recentClips.value = [];
				notice.error({ title: error?.message || "查询最近录制片段失败" });
			} finally {
				recentClipLoading.value = false;
			}
		};
		const handleQuery = async () => {
			if (!queryParams.recorderId) {
				notice.error({ title: "缺少录制器信息" });
				return;
			}
			loading.value = true;
			try {
				const payload = await recoder.queryStreamerDetail(queryParams);
				applyResult(payload);
				await queryRecentClips();
				calendarRefreshKey.value++;
			} catch (error) {
				notice.error({ title: error?.message || "查询主播详情失败" });
			} finally {
				loading.value = false;
			}
		};
		const handlePageChange = (page) => {
			queryParams.page = page;
			handleQuery();
		};
		const handlePageSizeChange = (pageSize) => {
			queryParams.page = 1;
			queryParams.pageSize = pageSize;
			handleQuery();
		};
		const goBack = () => {
			router.push({ path: "/recorder" });
		};
		const openRecorderSetting = () => {
			if (!streamerInfo.recorderId) {
				notice.warning({ title: "缺少录制器信息，无法打开设置" });
				return;
			}
			recorderSettingVisible.value = true;
		};
		const handleRecorderSettingConfirm = async () => {
			await handleQuery();
		};
		const copyRoomId = async () => {
			if (!roomIdValue.value) {
				notice.warning({ title: "当前没有可复制的房间号" });
				return;
			}
			try {
				await navigator.clipboard.writeText(roomIdValue.value);
				notice.success({
					title: "复制成功",
					content: `已复制房间号 ${roomIdValue.value}`,
					duration: 1e3
				});
			} catch (_error) {
				notice.error({
					title: "复制失败",
					content: "无法访问剪贴板"
				});
			}
		};
		const goToHistory = async (date) => {
			if (!result.recorderInfo?.channelId || !result.recorderInfo?.providerId) {
				notice.warning({ title: "当前缺少房间号或平台信息，无法跳转历史记录" });
				return;
			}
			const query = {
				id: streamerInfo.recorderId,
				channelId: result.recorderInfo.channelId,
				platform: result.recorderInfo.providerId,
				name: result.streamer?.name || streamerInfo.name,
				...date ? { date } : {}
			};
			if (date && !window.isWeb) {
				try {
					await window.api.common.createSubWindow({
						routeName: "liveHistory",
						hideAside: true,
						hideMenuBar: true,
						query: {
							...query,
							calendarWindow: "1"
						}
					});
				} catch (error) {
					notice.error({ title: error?.message || "打开录制历史窗口失败" });
				}
				return;
			}
			router.push({
				path: "/liveHistory",
				query
			});
		};
		const toggleRecording = async () => {
			if (!queryParams.recorderId) return;
			recordActionLoading.value = true;
			try {
				if (isRecording.value) {
					await recoder.stopRecord(queryParams.recorderId);
					notice.success({ title: "已停止录制" });
				} else await recoder.startRecord(queryParams.recorderId);
				setTimeout(() => {
					handleQuery();
				}, 1e3);
			} catch (error) {
				notice.error({ title: error?.message || "操作失败" });
			} finally {
				recordActionLoading.value = false;
			}
		};
		const watchLive = async () => {
			try {
				await toLiveVideoPlayerPage({
					liveId: streamerInfo.recorderId,
					owner: displayName.value
				});
			} catch (error) {
				notice.error({ title: error?.message || "无法观看直播" });
			}
		};
		const cutRecording = async () => {
			try {
				await recoder.cut(streamerInfo.recorderId);
				notice.success({ title: "已切割录制" });
			} catch (error) {
				notice.error({ title: error?.message || "切割失败" });
			}
		};
		const openRecordingFolder = async (newTab = false) => {
			try {
				await openRecorderFolder(streamerInfo.recorderId, result.recorderInfo?.recordHandle?.savePath, newTab);
			} catch (error) {
				notice.error({ title: error?.message || "打开录播文件夹失败" });
			}
		};
		const resolveSessionStatus = (index) => {
			if (isRecording.value && queryParams.page === 1 && index === 0) return {
				label: "录制中",
				type: "error"
			};
			return {
				label: "已完成",
				type: "success"
			};
		};
		const toggleSessionDetail = (session) => {
			expandedSessionKey.value = expandedSessionKey.value === session.sessionKey ? null : session.sessionKey;
		};
		const showSessionDetailPlaceholder = (session) => {
			if (!result.recorderInfo?.channelId || !result.recorderInfo?.providerId) {
				notice.warning({ title: "当前缺少房间号或平台信息，无法跳转历史记录" });
				return;
			}
			router.push({
				path: "/liveHistory",
				query: {
					id: streamerInfo.recorderId,
					channelId: result.recorderInfo.channelId,
					platform: result.recorderInfo.providerId,
					name: result.streamer?.name || streamerInfo.name,
					liveId: session.liveId
				}
			});
		};
		const formatNumber = (value) => {
			return Number(value || 0);
		};
		const formatTimelineRange = (startTime, endTime) => {
			const normalizedStartTime = startTime ?? null;
			const startLabel = formatTime(normalizedStartTime);
			if (!endTime || normalizedStartTime == null || endTime <= normalizedStartTime) return `${startLabel}`;
			return `${startLabel} - ${formatTime(endTime)}`;
		};
		const formatFileSize = (fileSize) => {
			if (!fileSize || fileSize <= 0) return "--";
			const mb = fileSize / 1048576;
			if (mb >= 1024) return `${(mb / 1024).toFixed(1)} GB`;
			return `${mb.toFixed(1)} MB`;
		};
		const formatStartTime = (value) => {
			if (!value) return "--";
			const timestamp = Date.parse(String(value));
			return Number.isFinite(timestamp) && timestamp > 0 ? formatTime(timestamp) : "--";
		};
		let recorderInfoInterval = null;
		let recorderInfoLoading = false;
		const refreshRecorderInfo = async () => {
			if (recorderInfoLoading || document.visibilityState === "hidden") return;
			recorderInfoLoading = true;
			try {
				result.recorderInfo = await recoder.getRecorderInfo(streamerInfo.recorderId);
			} catch {} finally {
				recorderInfoLoading = false;
			}
		};
		const startRecorderInfoInterval = () => {
			if (recorderInfoInterval || !streamerInfo.recorderId) return;
			recorderInfoInterval = setInterval(refreshRecorderInfo, 3e3);
		};
		const stopRecorderInfoInterval = () => {
			if (recorderInfoInterval) clearInterval(recorderInfoInterval);
			recorderInfoInterval = null;
		};
		onMounted(() => {
			handleQuery();
			startRecorderInfoInterval();
		});
		onActivated(startRecorderInfoInterval);
		onDeactivated(stopRecorderInfoInterval);
		onUnmounted(stopRecorderInfoInterval);
		return (_ctx, _cache) => {
			const _component_n_avatar = Avatar_default;
			const _component_n_icon = NIcon;
			const _component_n_button = Button;
			const _component_n_tag = Tag_default;
			const _component_n_card = Card_default;
			const _component_n_empty = Empty_default;
			const _component_n_tab_pane = TabPane_default;
			const _component_n_spin = Spin_default;
			const _component_n_pagination = Pagination_default;
			const _component_n_tabs = Tabs_default;
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_n_spin, { show: unref(loading) }, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_2, [
					createVNode(_component_n_card, {
						class: "hero-card",
						bordered: false
					}, {
						default: withCtx(() => [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [unref(isRecording) && unref(cover) ? (openBlock(), createElementBlock("img", {
							key: 0,
							class: "profile-cover",
							src: unref(cover),
							alt: "直播封面",
							referrerpolicy: "no-referrer"
						}, null, 8, _hoisted_5)) : (openBlock(), createBlock(_component_n_avatar, {
							key: 1,
							round: "",
							size: 80,
							class: "profile-avatar",
							src: unref(avatar),
							referrerpolicy: "no-referrer"
						}, null, 8, ["src"])), createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_8, [unref(isRecording) && unref(avatar) ? (openBlock(), createBlock(_component_n_avatar, {
							key: 0,
							round: "",
							size: 32,
							class: "profile-avatar-small",
							src: unref(avatar),
							referrerpolicy: "no-referrer"
						}, null, 8, ["src"])) : createCommentVNode("", true), createBaseVNode("h1", null, toDisplayString(unref(displayName)), 1)]), createBaseVNode("div", _hoisted_9, [createBaseVNode("span", null, toDisplayString(unref(platformLabel)), 1), createBaseVNode("span", _hoisted_10, [
							createBaseVNode("span", null, "房间号：" + toDisplayString(unref(roomLabel)), 1),
							createVNode(_component_n_button, {
								text: "",
								class: "copy-room-button",
								title: "复制房间号",
								onClick: copyRoomId
							}, {
								icon: withCtx(() => [createVNode(_component_n_icon, null, {
									default: withCtx(() => [createVNode(unref(Copy16Regular_default))]),
									_: 1
								})]),
								_: 1
							}),
							createVNode(_component_n_button, {
								text: "",
								class: "copy-room-button"
							}, {
								icon: withCtx(() => [createBaseVNode("a", {
									href: unref(channelURL),
									target: "_blank",
									rel: "noreferrer",
									class: "channel-link",
									title: "访问直播间"
								}, [createVNode(_component_n_icon, null, {
									default: withCtx(() => [createVNode(unref(LinkSquare20Regular_default))]),
									_: 1
								})], 8, _hoisted_11)]),
								_: 1
							})
						])])]), createBaseVNode("div", _hoisted_12, [unref(monitorLabel) ? (openBlock(), createBlock(_component_n_tag, {
							key: 0,
							type: unref(monitorTagType),
							round: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(monitorLabel)), 1)]),
							_: 1
						}, 8, ["type"])) : createCommentVNode("", true)])])])]), createBaseVNode("div", _hoisted_13, [
							createVNode(_component_n_button, {
								type: "primary",
								loading: unref(recordActionLoading),
								onClick: toggleRecording
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(isRecording) ? "停止录制" : "开始录制"), 1)]),
								_: 1
							}, 8, ["loading"]),
							createVNode(_component_n_button, {
								type: "warning",
								onClick: _cache[0] || (_cache[0] = ($event) => goToHistory())
							}, {
								default: withCtx(() => _cache[7] || (_cache[7] = [createTextVNode("录制历史")])),
								_: 1
							}),
							createVNode(_component_n_button, { onClick: openRecorderSetting }, {
								default: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode("直播间设置")])),
								_: 1
							}),
							createVNode(_component_n_button, {
								loading: unref(loading),
								onClick: handleQuery
							}, {
								default: withCtx(() => _cache[9] || (_cache[9] = [createTextVNode("刷新")])),
								_: 1
							}, 8, ["loading"]),
							createVNode(_component_n_button, { onClick: goBack }, {
								default: withCtx(() => _cache[10] || (_cache[10] = [createTextVNode("返回")])),
								_: 1
							})
						])])]),
						_: 1
					}),
					unref(isRecording) ? (openBlock(), createBlock(_component_n_card, {
						key: 0,
						class: "recording-card",
						bordered: false
					}, {
						default: withCtx(() => [createBaseVNode("div", _hoisted_14, [_cache[14] || (_cache[14] = createBaseVNode("div", { class: "recording-card-title" }, [createBaseVNode("span", { class: "recording-indicator" }), createBaseVNode("h2", null, "当前录制")], -1)), createBaseVNode("div", _hoisted_15, [
							createVNode(_component_n_button, {
								size: "small",
								onClick: watchLive
							}, {
								default: withCtx(() => _cache[11] || (_cache[11] = [createTextVNode("观看直播")])),
								_: 1
							}),
							unref(result).recorderInfo?.recordHandle?.recorderType === "bililive" ? (openBlock(), createBlock(_component_n_button, {
								key: 0,
								size: "small",
								onClick: cutRecording
							}, {
								default: withCtx(() => _cache[12] || (_cache[12] = [createTextVNode(" 切割 ")])),
								_: 1
							})) : createCommentVNode("", true),
							createVNode(_component_n_button, {
								size: "small",
								onClick: _cache[1] || (_cache[1] = ($event) => openRecordingFolder()),
								onMousedown: _cache[2] || (_cache[2] = withModifiers(() => {}, ["middle", "prevent"])),
								onAuxclick: _cache[3] || (_cache[3] = withModifiers(($event) => openRecordingFolder(true), ["middle", "prevent"]))
							}, {
								default: withCtx(() => _cache[13] || (_cache[13] = [createTextVNode(" 打开文件夹 ")])),
								_: 1
							})
						])]), createBaseVNode("div", _hoisted_16, [
							createBaseVNode("div", _hoisted_17, [_cache[15] || (_cache[15] = createBaseVNode("span", null, "录制时间", -1)), createBaseVNode("strong", null, toDisplayString(unref(result).recorderInfo?.recordHandle?.progress?.time || "--"), 1)]),
							createBaseVNode("div", _hoisted_18, [_cache[16] || (_cache[16] = createBaseVNode("span", null, "直播开始时间", -1)), createBaseVNode("strong", null, toDisplayString(formatStartTime(unref(result).recorderInfo?.liveInfo?.liveStartTime)), 1)]),
							createBaseVNode("div", _hoisted_19, [_cache[17] || (_cache[17] = createBaseVNode("span", null, "录制开始时间", -1)), createBaseVNode("strong", null, toDisplayString(formatStartTime(unref(result).recorderInfo?.liveInfo?.recordStartTime)), 1)]),
							createBaseVNode("div", _hoisted_20, [_cache[18] || (_cache[18] = createBaseVNode("span", null, "线路", -1)), createBaseVNode("strong", null, toDisplayString(unref(result).recorderInfo?.usedSource || "--"), 1)]),
							createBaseVNode("div", _hoisted_21, [_cache[19] || (_cache[19] = createBaseVNode("span", null, "画质", -1)), createBaseVNode("strong", null, toDisplayString(unref(result).recorderInfo?.usedStream || "--"), 1)])
						])]),
						_: 1
					})) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_22, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(overviewCards), (item) => {
						return openBlock(), createBlock(_component_n_card, {
							class: "stat-card",
							key: item.label,
							bordered: false
						}, {
							default: withCtx(() => [createBaseVNode("div", {
								class: "stat-card-content",
								title: item.title
							}, [createBaseVNode("span", _hoisted_24, toDisplayString(item.label), 1), createBaseVNode("strong", _hoisted_25, toDisplayString(item.value), 1)], 8, _hoisted_23)]),
							_: 2
						}, 1024);
					}), 128))]),
					createVNode(_component_n_card, {
						class: "tab-panel",
						bordered: false
					}, {
						default: withCtx(() => [createVNode(_component_n_tabs, {
							value: unref(activeTab),
							"onUpdate:value": _cache[5] || (_cache[5] = ($event) => isRef(activeTab) ? activeTab.value = $event : null),
							type: "segment",
							animated: ""
						}, {
							default: withCtx(() => [
								createVNode(_component_n_tab_pane, {
									name: "timeline",
									tab: "时间线"
								}, {
									default: withCtx(() => [unref(recorderTimeline).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_26, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(recorderTimeline), (item, index) => {
										return openBlock(), createElementBlock("div", {
											key: `${item.startTime}-${index}`,
											class: "timeline-item"
										}, [createBaseVNode("div", _hoisted_27, [_cache[20] || (_cache[20] = createBaseVNode("span", { class: "timeline-dot" }, null, -1)), index !== unref(recorderTimeline).length - 1 ? (openBlock(), createElementBlock("span", _hoisted_28)) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_29, [createBaseVNode("span", _hoisted_30, toDisplayString(formatTimelineRange(item.startTime, item.endTime)), 1), createBaseVNode("span", _hoisted_31, toDisplayString(item.text), 1)])]);
									}), 128))])) : (openBlock(), createBlock(_component_n_empty, {
										key: 1,
										description: "暂无数据"
									}))]),
									_: 1
								}),
								createVNode(_component_n_tab_pane, {
									name: "calendar",
									tab: "录制日历"
								}, {
									default: withCtx(() => [unref(activeTab) === "calendar" ? (openBlock(), createBlock(RecordCalendar_default, {
										key: 0,
										"recorder-id": unref(streamerInfo).recorderId,
										"refresh-key": unref(calendarRefreshKey),
										onSelectDate: goToHistory
									}, null, 8, ["recorder-id", "refresh-key"])) : createCommentVNode("", true)]),
									_: 1
								}),
								createVNode(_component_n_tab_pane, {
									name: "clips",
									tab: "最近录制片段"
								}, {
									default: withCtx(() => [createVNode(_component_n_spin, { show: unref(recentClipLoading) }, {
										default: withCtx(() => [unref(recentClips).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_32, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(recentClips), (clip) => {
											return openBlock(), createElementBlock("div", {
												key: clip.id,
												class: "clip-card"
											}, [createVNode(Index_default, {
												style: { "height": "160px" },
												option: {
													url: unref(common).getVideo(clip.videoFileId),
													type: clip.videoFileExt
												},
												isLive: false
											}, null, 8, ["option"]), createBaseVNode("div", _hoisted_33, [createBaseVNode("div", _hoisted_34, toDisplayString(clip.title || "未命名片段"), 1), createBaseVNode("div", _hoisted_35, [createBaseVNode("span", null, toDisplayString(unref(formatRecentRecordTime)(clip.recordStartTime)), 1), createBaseVNode("span", null, toDisplayString(formatFileSize(clip.videoFileSize)), 1)])])]);
										}), 128))])) : (openBlock(), createBlock(_component_n_empty, {
											key: 1,
											description: "暂无可播放的录制片段"
										}))]),
										_: 1
									}, 8, ["show"])]),
									_: 1
								}),
								createVNode(_component_n_tab_pane, {
									name: "sessions",
									tab: "最近场次"
								}, {
									default: withCtx(() => [unref(result).data.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", _hoisted_36, [createBaseVNode("table", _hoisted_37, [_cache[21] || (_cache[21] = createBaseVNode("thead", { class: "table-header" }, [createBaseVNode("tr", null, [
										createBaseVNode("th", null, "直播标题"),
										createBaseVNode("th", null, "直播开始时间"),
										createBaseVNode("th", null, "开始时间"),
										createBaseVNode("th", null, "结束时间"),
										createBaseVNode("th", null, "录制时长"),
										createBaseVNode("th", null, "片段数"),
										createBaseVNode("th", null, "弹幕数"),
										createBaseVNode("th", null, "状态"),
										createBaseVNode("th", null, "操作")
									])], -1)), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(result).data, (session, index) => {
										return openBlock(), createElementBlock(Fragment, { key: session.sessionKey }, [createBaseVNode("tr", null, [
											createBaseVNode("td", _hoisted_38, [createBaseVNode("div", _hoisted_39, toDisplayString(session.title || "-"), 1)]),
											createBaseVNode("td", null, toDisplayString(unref(formatTime)(session.liveStartTime)), 1),
											createBaseVNode("td", null, toDisplayString(unref(formatTime)(session.recordStartTime)), 1),
											createBaseVNode("td", null, toDisplayString(unref(formatTime)(session.lastRecordTime)), 1),
											createBaseVNode("td", null, toDisplayString(unref(formatDuration)(session.totalDuration, "00:00:00")), 1),
											createBaseVNode("td", {
												onClick: ($event) => showSessionDetailPlaceholder(session),
												style: { "cursor": "pointer" }
											}, toDisplayString(session.clipCount), 9, _hoisted_40),
											createBaseVNode("td", null, toDisplayString(formatNumber(session.totalDanmaNum)), 1),
											createBaseVNode("td", null, [createVNode(_component_n_tag, {
												size: "small",
												round: "",
												type: resolveSessionStatus(index).type
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(resolveSessionStatus(index).label), 1)]),
												_: 2
											}, 1032, ["type"])]),
											createBaseVNode("td", _hoisted_41, [createVNode(_component_n_button, {
												text: "",
												type: "primary",
												onClick: ($event) => toggleSessionDetail(session)
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(unref(expandedSessionKey) === session.sessionKey ? "收起" : "详情"), 1)]),
												_: 2
											}, 1032, ["onClick"])])
										]), unref(expandedSessionKey) === session.sessionKey ? (openBlock(), createElementBlock("tr", _hoisted_42, [createBaseVNode("td", _hoisted_43, [createVNode(SessionDanmaStats_default, {
											session,
											onToHistory: showSessionDetailPlaceholder
										}, null, 8, ["session"])])])) : createCommentVNode("", true)], 64);
									}), 128))])])]), unref(result).pagination.total > unref(result).pagination.pageSize ? (openBlock(), createElementBlock("div", _hoisted_44, [createVNode(_component_n_pagination, {
										page: unref(queryParams).page,
										"onUpdate:page": [_cache[4] || (_cache[4] = ($event) => unref(queryParams).page = $event), handlePageChange],
										"page-size": unref(queryParams).pageSize,
										"item-count": unref(result).pagination.total,
										"show-size-picker": "",
										"page-sizes": [
											5,
											10,
											20,
											30
										],
										"onUpdate:pageSize": handlePageSizeChange
									}, null, 8, [
										"page",
										"page-size",
										"item-count"
									])])) : createCommentVNode("", true)], 64)) : (openBlock(), createBlock(_component_n_empty, {
										key: 1,
										description: "暂无场次数据"
									}))]),
									_: 1
								})
							]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					})
				])]),
				_: 1
			}, 8, ["show"]), createVNode(addModal_default, {
				id: unref(streamerInfo).recorderId,
				visible: unref(recorderSettingVisible),
				"onUpdate:visible": _cache[6] || (_cache[6] = ($event) => isRef(recorderSettingVisible) ? recorderSettingVisible.value = $event : null),
				onConfirm: handleRecorderSettingConfirm
			}, null, 8, ["id", "visible"])]);
		};
	}
}), [["__scopeId", "data-v-411924c7"]]);
//#endregion
export { streamerDetail_default as default };
