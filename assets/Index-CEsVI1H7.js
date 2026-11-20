import { $ as renderList, $t as __commonJSMin, A as createTextVNode, B as mergeModels, C as computed, D as createElementBlock, E as createCommentVNode, F as h$1, H as nextTick, J as onMounted, Jt as normalizeStyle, Kt as normalizeClass, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, Q as provide, R as inject, T as createBlock, Tt as unref, U as onActivated, Y as onUnmounted, Z as openBlock, Zt as toDisplayString, _t as reactive, at as watch, ct as withDirectives, et as renderSlot, ft as init_reactivity_esm_bundler, g as withModifiers, h as withKeys, in as __toESM, j as createVNode, m as vShow, mt as isRef, q as onDeactivated, rt as useModel, st as withCtx, u as init_runtime_dom_esm_bundler, v as Fragment, w as createBaseVNode, xt as toRaw, yt as ref } from "./request-CkCeAZAO.js";
import { a as baseIteratee, c as baseGet, i as baseMap, t as Popover_default } from "./Popover-BND3al2G.js";
import { A as supportedVideoExtensions, E as generateDistinctColor, F as text_default, I as Input_default, O as secondsToTimemark, P as filenamify, b as deepRaw, c as bili, f as task, g as ffmpegPreset, h as videoPreset, j as uuid, m as subtitleStylePreset, r as ai, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { n as FormItem_default, r as Form_default } from "./HelpCircleOutline-C_D4MbKX.js";
import { t as Dropdown_default } from "./Dropdown-BGb63-e4.js";
import { s as Empty_default, t as Select_default } from "./Select-DRoqCGUj.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { t as Space_default } from "./Space-B3s3-R0l.js";
import { o as arrayPush } from "./_getTag-C1EyIWSB.js";
import { c as useUserInfoStore, d as cloneDeep, i as useFfmpegPreset, l as useSubtitles, o as useSegmentStore, s as useUploadPreset, t as useAppConfig, u as Parser } from "./stores-Cc_-mi5a.js";
import { a as InputGroup_default, i as ColorPicker_default, r as Slider_default } from "./BiliSetting-CveEDz0e.js";
import { n as InputNumber_default, t as Tip_default } from "./Tip-DCxAtPKG.js";
import { t as Cascader_default } from "./Cascader-BBry4DRN.js";
import { t as Checkbox_default } from "./Checkbox-C9dpLVBG.js";
import { n as Radio_default, t as RadioGroup_default } from "./RadioGroup-DGqq_izP.js";
import { t as Tooltip_default } from "./Tooltip-DdlyuCn5.js";
import { n as useConfirm } from "./hooks-BIRfeUqh.js";
import { t as useNotification } from "./use-notification-BORvHMZV.js";
import { t as Divider_default } from "./Divider-7i3uOVWn.js";
import { n as Progress_default, t as AddCircleOutline_default } from "./AddCircleOutline-jYg4TbiK.js";
import { t as Spin_default } from "./Spin-COE9UcEU.js";
import { n as SettingsOutline_default, r as VirtualList_default, t as BiliPresetEditDialog_default } from "./BiliPresetEditDialog-30pv_QDx.js";
import { E as Modal_default, Gt as isArguments, K as Button, Ut as baseUnary, W as Card_default, Xt as baseRest, cn as isSymbol, dn as Symbol, i as storeToRefs, in as identity, n as useThemeStore, on as isArray, qt as isIterateeCall, sn as arrayMap, t as Qe } from "./index-CPQhEiaa.js";
import { t as common } from "./common-CBeNn3OB.js";
import { a as useEventListener, b as watchThrottled, c as useStorage, g as toReactive, r as useDraggable, u as useWindowSize } from "./core-DWew9NA7.js";
import { t as useNotice } from "./useNotice-DqXLG4Nf.js";
import { t as hotkeys } from "./hotkeys.esm-DhVljeNg.js";
import { t as ButtonGroup_default } from "./ButtonGroup-BMe2Pz9T.js";
import { t as CheckmarkCircleOutline_default } from "./CheckmarkCircleOutline-BxjQA9Jt.js";
import { t as FolderOpenOutline_default } from "./FolderOpenOutline-BzyVunNB.js";
import { n as FileArea_default, t as useDrive } from "./drive-CU7Wwb9N.js";
import { t as Index_default$1 } from "./Index-DVrPaNfC.js";
import { n as showFileDialog, r as showSaveDialog, t as showDirectoryDialog } from "./fileSystem-DX81WPkK.js";
import { t as DanmuFactorySettingDailog_default } from "./DanmuFactorySettingDailog--GKJjUax.js";
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isFlattenable.js
/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0;
/**
* Checks if `value` is a flattenable `arguments` object or array.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
*/
function isFlattenable(value) {
	return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseFlatten.js
/**
* The base implementation of `_.flatten` with support for restricting flattening.
*
* @private
* @param {Array} array The array to flatten.
* @param {number} depth The maximum recursion depth.
* @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
* @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
* @param {Array} [result=[]] The initial result value.
* @returns {Array} Returns the new flattened array.
*/
function baseFlatten(array, depth, predicate, isStrict, result) {
	var index = -1, length = array.length;
	predicate || (predicate = isFlattenable);
	result || (result = []);
	while (++index < length) {
		var value = array[index];
		if (depth > 0 && predicate(value)) {
			if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result);
			else arrayPush(result, value);
		} else if (!isStrict) result[result.length] = value;
	}
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseSortBy.js
/**
* The base implementation of `_.sortBy` which uses `comparer` to define the
* sort order of `array` and replaces criteria objects with their corresponding
* values.
*
* @private
* @param {Array} array The array to sort.
* @param {Function} comparer The function to define sort order.
* @returns {Array} Returns `array`.
*/
function baseSortBy(array, comparer) {
	var length = array.length;
	array.sort(comparer);
	while (length--) array[length] = array[length].value;
	return array;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_compareAscending.js
/**
* Compares values to sort them in ascending order.
*
* @private
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @returns {number} Returns the sort order indicator for `value`.
*/
function compareAscending(value, other) {
	if (value !== other) {
		var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
		var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
		if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
		if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
	}
	return 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_compareMultiple.js
/**
* Used by `_.orderBy` to compare multiple properties of a value to another
* and stable sort them.
*
* If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
* specify an order of "desc" for descending or "asc" for ascending sort order
* of corresponding values.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {boolean[]|string[]} orders The order to sort by for each property.
* @returns {number} Returns the sort order indicator for `object`.
*/
function compareMultiple(object, other, orders) {
	var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
	while (++index < length) {
		var result = compareAscending(objCriteria[index], othCriteria[index]);
		if (result) {
			if (index >= ordersLength) return result;
			return result * (orders[index] == "desc" ? -1 : 1);
		}
	}
	return object.index - other.index;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseOrderBy.js
/**
* The base implementation of `_.orderBy` without param guards.
*
* @private
* @param {Array|Object} collection The collection to iterate over.
* @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
* @param {string[]} orders The sort orders of `iteratees`.
* @returns {Array} Returns the new sorted array.
*/
function baseOrderBy(collection, iteratees, orders) {
	if (iteratees.length) iteratees = arrayMap(iteratees, function(iteratee) {
		if (isArray(iteratee)) return function(value) {
			return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
		};
		return iteratee;
	});
	else iteratees = [identity];
	var index = -1;
	iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
	return baseSortBy(baseMap(collection, function(value, key, collection) {
		return {
			"criteria": arrayMap(iteratees, function(iteratee) {
				return iteratee(value);
			}),
			"index": ++index,
			"value": value
		};
	}), function(object, other) {
		return compareMultiple(object, other, orders);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sortBy.js
/**
* Creates an array of elements, sorted in ascending order by the results of
* running each element in a collection thru each iteratee. This method
* performs a stable sort, that is, it preserves the original sort order of
* equal elements. The iteratees are invoked with one argument: (value).
*
* @static
* @memberOf _
* @since 0.1.0
* @category Collection
* @param {Array|Object} collection The collection to iterate over.
* @param {...(Function|Function[])} [iteratees=[_.identity]]
*  The iteratees to sort by.
* @returns {Array} Returns the new sorted array.
* @example
*
* var users = [
*   { 'user': 'fred',   'age': 48 },
*   { 'user': 'barney', 'age': 36 },
*   { 'user': 'fred',   'age': 30 },
*   { 'user': 'barney', 'age': 34 }
* ];
*
* _.sortBy(users, [function(o) { return o.user; }]);
* // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
*
* _.sortBy(users, ['user', 'age']);
* // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
*/
var sortBy = baseRest(function(collection, iteratees) {
	if (collection == null) return [];
	var length = iteratees.length;
	if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) iteratees = [];
	else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) iteratees = [iteratees[0]];
	return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/AddOutline.js
init_runtime_core_esm_bundler();
var _hoisted_1$26 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var AddOutline_default = defineComponent({
	name: "AddOutline",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$26, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "32",
			d: "M256 112v288"
		}, null, -1), createBaseVNode("path", {
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "32",
			d: "M400 256H112"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/Cut.js
init_runtime_core_esm_bundler();
var _hoisted_1$25 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var Cut_default = defineComponent({
	name: "Cut",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$25, _cache[0] || (_cache[0] = [
			createBaseVNode("path", {
				d: "M103.48 224a71.64 71.64 0 0 0 44.76-15.66l41.5 16.89l6.82-12.63a39.15 39.15 0 0 1 4.32-6.37l14.22-14.42l-41.17-24.94A72 72 0 1 0 103.48 224zm0-112a40 40 0 1 1-40 40a40 40 0 0 1 40-40z",
				fill: "currentColor"
			}, null, -1),
			createBaseVNode("path", {
				d: "M480 169l-5.52-12.58c-4.48-10.42-14.74-16-32.78-17.85c-10.12-1-26.95-1.24-49.69 3.81c-20 4.45-122.14 28.2-164.95 58.62c-20.25 14.39-24.06 33.67-27.06 49.16c-2.78 14.14-5 25.31-18 35c-15 11.14-27.27 16.38-33.58 18.6a71.74 71.74 0 1 0 24.79 38zm-224.52 87a16 16 0 1 1 16-16a16 16 0 0 1-16 16zm-152 144a40 40 0 1 1 40-40a40 40 0 0 1-40 40z",
				fill: "currentColor"
			}, null, -1),
			createBaseVNode("path", {
				d: "M343.79 259.87l-83.74 48.18l27.63 13.08l3.62 1.74C310 331.92 359.74 356 410.53 359c3.89.23 7.47.34 10.78.34C442 359.31 453 354 459.75 350L480 336z",
				fill: "currentColor"
			}, null, -1)
		]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/DocumentTextOutline.js
init_runtime_core_esm_bundler();
var _hoisted_1$24 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var DocumentTextOutline_default = defineComponent({
	name: "DocumentTextOutline",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$24, _cache[0] || (_cache[0] = [
			createBaseVNode("path", {
				d: "M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z",
				fill: "none",
				stroke: "currentColor",
				"stroke-linejoin": "round",
				"stroke-width": "32"
			}, null, -1),
			createBaseVNode("path", {
				d: "M256 56v120a32 32 0 0 0 32 32h120",
				fill: "none",
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "32"
			}, null, -1),
			createBaseVNode("path", {
				fill: "none",
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "32",
				d: "M176 288h160"
			}, null, -1),
			createBaseVNode("path", {
				fill: "none",
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "32",
				d: "M176 368h160"
			}, null, -1)
		]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/EllipsisVertical.js
init_runtime_core_esm_bundler();
var _hoisted_1$23 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var EllipsisVertical_default = defineComponent({
	name: "EllipsisVertical",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$23, _cache[0] || (_cache[0] = [
			createBaseVNode("circle", {
				cx: "256",
				cy: "256",
				r: "48",
				fill: "currentColor"
			}, null, -1),
			createBaseVNode("circle", {
				cx: "256",
				cy: "416",
				r: "48",
				fill: "currentColor"
			}, null, -1),
			createBaseVNode("circle", {
				cx: "256",
				cy: "96",
				r: "48",
				fill: "currentColor"
			}, null, -1)
		]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/LocationOutline.js
init_runtime_core_esm_bundler();
var _hoisted_1$22 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var LocationOutline_default = defineComponent({
	name: "LocationOutline",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$22, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z",
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "32"
		}, null, -1), createBaseVNode("circle", {
			cx: "256",
			cy: "192",
			r: "48",
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "32"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/Pencil.js
init_runtime_core_esm_bundler();
var _hoisted_1$21 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var Pencil_default = defineComponent({
	name: "Pencil",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$21, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "44",
			d: "M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13l-24.1-24.1z"
		}, null, -1), createBaseVNode("path", {
			d: "M413.07 74.84l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0z",
			fill: "none",
			stroke: "currentColor",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "44"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/PlayCircleOutline.js
init_runtime_core_esm_bundler();
var _hoisted_1$20 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var PlayCircleOutline_default = defineComponent({
	name: "PlayCircleOutline",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$20, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
			fill: "none",
			stroke: "currentColor",
			"stroke-miterlimit": "10",
			"stroke-width": "32"
		}, null, -1), createBaseVNode("path", {
			d: "M216.32 334.44l114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/RadioButtonOffSharp.js
init_runtime_core_esm_bundler();
var _hoisted_1$19 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var RadioButtonOffSharp_default = defineComponent({
	name: "RadioButtonOffSharp",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$19, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
			fill: "none",
			stroke: "currentColor",
			"stroke-miterlimit": "10",
			"stroke-width": "32"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/Search.js
init_runtime_core_esm_bundler();
var _hoisted_1$18 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var Search_default = defineComponent({
	name: "Search",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$18, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+fluent@0.13.0/node_modules/@vicons/fluent/es/Cut20Regular.js
init_runtime_core_esm_bundler();
var _hoisted_1$17 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 20 20"
};
var Cut20Regular_default = defineComponent({
	name: "Cut20Regular",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$17, _cache[0] || (_cache[0] = [createBaseVNode("g", { fill: "none" }, [createBaseVNode("path", {
			d: "M5.92 2.228a.5.5 0 0 0-.84.544L9.405 9.43L7.48 12.39a3 3 0 1 0 .779.636L10 10.348l1.74 2.68a3 3 0 1 0 .779-.636L5.92 2.227zM14 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4zM4 15a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm7.192-6.489l-.596-.918l3.485-5.365a.5.5 0 0 1 .838.544l-3.727 5.74z",
			fill: "currentColor"
		})], -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+fluent@0.13.0/node_modules/@vicons/fluent/es/Delete24Regular.js
init_runtime_core_esm_bundler();
var _hoisted_1$16 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 24 24"
};
var Delete24Regular_default = defineComponent({
	name: "Delete24Regular",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$16, _cache[0] || (_cache[0] = [createBaseVNode("g", { fill: "none" }, [createBaseVNode("path", {
			d: "M12 1.75a3.25 3.25 0 0 1 3.245 3.066L15.25 5h5.25a.75.75 0 0 1 .102 1.493L20.5 6.5h-.796l-1.28 13.02a2.75 2.75 0 0 1-2.561 2.474l-.176.006H8.313a2.75 2.75 0 0 1-2.714-2.307l-.023-.174L4.295 6.5H3.5a.75.75 0 0 1-.743-.648L2.75 5.75a.75.75 0 0 1 .648-.743L3.5 5h5.25A3.25 3.25 0 0 1 12 1.75zm6.197 4.75H5.802l1.267 12.872a1.25 1.25 0 0 0 1.117 1.122l.127.006h7.374c.6 0 1.109-.425 1.225-1.002l.02-.126L18.196 6.5zM13.75 9.25a.75.75 0 0 1 .743.648L14.5 10v7a.75.75 0 0 1-1.493.102L13 17v-7a.75.75 0 0 1 .75-.75zm-3.5 0a.75.75 0 0 1 .743.648L11 10v7a.75.75 0 0 1-1.493.102L9.5 17v-7a.75.75 0 0 1 .75-.75zm1.75-6a1.75 1.75 0 0 0-1.744 1.606L10.25 5h3.5A1.75 1.75 0 0 0 12 3.25z",
			fill: "currentColor"
		})], -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+fluent@0.13.0/node_modules/@vicons/fluent/es/MusicNote220Regular.js
init_runtime_core_esm_bundler();
var _hoisted_1$15 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 20 20"
};
var MusicNote220Regular_default = defineComponent({
	name: "MusicNote220Regular",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$15, _cache[0] || (_cache[0] = [createBaseVNode("g", { fill: "none" }, [createBaseVNode("path", {
			d: "M14.702 2.226A1 1 0 0 1 16 3.18V13.5a2.5 2.5 0 1 1-1-2V6.18L8 8.368V15.5a2.5 2.5 0 1 1-1-2V5.368a1 1 0 0 1 .702-.955l7-2.187zM8 7.32l7-2.187V3.18L8 5.368V7.32zM5.5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zm6.5-.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0z",
			fill: "currentColor"
		})], -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+fluent@0.13.0/node_modules/@vicons/fluent/es/ToggleLeft24Regular.js
init_runtime_core_esm_bundler();
var _hoisted_1$14 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 24 24"
};
var ToggleLeft24Regular_default = defineComponent({
	name: "ToggleLeft24Regular",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$14, _cache[0] || (_cache[0] = [createBaseVNode("g", { fill: "none" }, [createBaseVNode("path", {
			d: "M7.25 14.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5zM22 12a5 5 0 0 0-5-5H7a5 5 0 0 0 0 10h10a5 5 0 0 0 5-5zm-5-3.5a3.5 3.5 0 1 1 0 7H7a3.5 3.5 0 1 1 0-7h10z",
			fill: "currentColor"
		})], -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+material@0.13.0/node_modules/@vicons/material/es/MinusOutlined.js
init_runtime_core_esm_bundler();
var _hoisted_1$13 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 24 24"
};
var MinusOutlined_default = defineComponent({
	name: "MinusOutlined",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$13, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M19 12.998H5v-2h14z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+material@0.13.0/node_modules/@vicons/material/es/PlusOutlined.js
init_runtime_core_esm_bundler();
var _hoisted_1$12 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 24 24"
};
var PlusOutlined_default = defineComponent({
	name: "PlusOutlined",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$12, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+material@0.13.0/node_modules/@vicons/material/es/SubtitlesOutlined.js
init_runtime_core_esm_bundler();
var _hoisted_1$11 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 24 24"
};
var SubtitlesOutlined_default = defineComponent({
	name: "SubtitlesOutlined",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$11, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/SubtitleStyleModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$10 = {
	class: "flex",
	style: {
		"gap": "10px",
		"align-items": "center",
		"margin-bottom": "16px"
	}
};
var _hoisted_2$9 = { style: {
	"display": "flex",
	"gap": "20px"
} };
var _hoisted_3$8 = { style: {
	"flex": "1",
	"overflow-y": "auto",
	"max-height": "calc(85vh - 150px)"
} };
var _hoisted_4$7 = { style: {
	"flex": "1",
	"display": "flex",
	"flex-direction": "column"
} };
var _hoisted_5$7 = { style: {
	"flex": "1",
	"background": "skyblue",
	"border-radius": "8px",
	"position": "relative",
	"min-height": "300px",
	"overflow": "hidden"
} };
var _hoisted_6$4 = { class: "footer" };
var _hoisted_7$3 = { style: { "text-align": "right" } };
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/SubtitleStyleModal.vue
var SubtitleStyleModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SubtitleStyleModal",
	props: /*@__PURE__*/ mergeModels({ id: {} }, {
		"modelValue": {
			type: Boolean,
			required: true,
			default: false
		},
		"modelModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["confirm"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const visible = useModel(__props, "modelValue");
		const props = __props;
		const emit = __emit;
		const notice = useNotification();
		const confirmDialog = useConfirm();
		const presetId = ref("default");
		const currentPreset = ref({
			id: "default",
			name: "默认配置",
			config: {}
		});
		const styleConfig = ref({
			fontName: void 0,
			fontSize: 22,
			primaryColour: "#FFFFFF",
			outlineColour: "#000000",
			backColour: "#000000",
			bold: 0,
			italic: 0,
			underline: 0,
			outline: 1,
			shadow: 0,
			alignment: 2,
			marginL: 20,
			marginR: 20,
			marginV: 0
		});
		const isBold = computed({
			get: () => styleConfig.value.bold === -1,
			set: (val) => styleConfig.value.bold = val ? -1 : 0
		});
		const isItalic = computed({
			get: () => styleConfig.value.italic === -1,
			set: (val) => styleConfig.value.italic = val ? -1 : 0
		});
		const isUnderline = computed({
			get: () => styleConfig.value.underline === -1,
			set: (val) => styleConfig.value.underline = val ? -1 : 0
		});
		const updateBold = (val) => {
			styleConfig.value.bold = val ? -1 : 0;
		};
		const updateItalic = (val) => {
			styleConfig.value.italic = val ? -1 : 0;
		};
		const updateUnderline = (val) => {
			styleConfig.value.underline = val ? -1 : 0;
		};
		const alignmentOptions = [
			{
				label: "左下",
				value: 1
			},
			{
				label: "底部居中",
				value: 2
			},
			{
				label: "右下",
				value: 3
			},
			{
				label: "中间居左",
				value: 9
			},
			{
				label: "中间居中",
				value: 10
			},
			{
				label: "中间居右",
				value: 11
			},
			{
				label: "左上",
				value: 5
			},
			{
				label: "顶部居中",
				value: 6
			},
			{
				label: "右上",
				value: 7
			}
		];
		const presetOptions = ref([]);
		const loadPresets = async () => {
			try {
				const presets = await subtitleStylePreset.list();
				presetOptions.value = presets.map((p) => ({
					label: p.name,
					value: p.id
				}));
			} catch (error) {
				console.error("Failed to load presets:", error);
			}
		};
		const loadPreset = async (id) => {
			try {
				currentPreset.value = await subtitleStylePreset.get(id);
				styleConfig.value = { ...currentPreset.value.config };
			} catch (error) {
				console.error("Failed to load preset:", error);
			}
		};
		const previewContainerStyle = computed(() => {
			const alignment = styleConfig.value.alignment ?? 2;
			let justifyContent = "center";
			let alignItems = "flex-end";
			if ([
				1,
				2,
				3
			].includes(alignment)) justifyContent = "flex-end";
			else if ([
				9,
				10,
				11
			].includes(alignment)) justifyContent = "center";
			else if ([
				5,
				6,
				7
			].includes(alignment)) justifyContent = "flex-start";
			if ([
				1,
				9,
				5
			].includes(alignment)) alignItems = "flex-start";
			else if ([
				2,
				10,
				6
			].includes(alignment)) alignItems = "center";
			else if ([
				3,
				11,
				7
			].includes(alignment)) alignItems = "flex-end";
			return {
				position: "absolute",
				top: "0",
				left: "0",
				right: "0",
				bottom: "0",
				display: "flex",
				flexDirection: "column",
				justifyContent,
				alignItems,
				padding: `${styleConfig.value.marginV ?? 20}px ${styleConfig.value.marginR ?? 20}px ${styleConfig.value.marginV ?? 20}px ${styleConfig.value.marginL ?? 20}px`
			};
		});
		const previewTextStyle = computed(() => {
			const outline = styleConfig.value.outline ?? 2;
			const shadow = styleConfig.value.shadow ?? 1;
			return {
				fontFamily: styleConfig.value.fontName || "Arial",
				fontSize: `${styleConfig.value.fontSize ?? 24}px`,
				color: styleConfig.value.primaryColour ?? "#FFFFFF",
				fontWeight: styleConfig.value.bold === -1 ? "bold" : "normal",
				fontStyle: styleConfig.value.italic === -1 ? "italic" : "normal",
				textDecoration: styleConfig.value.underline === -1 ? "underline" : "none",
				textShadow: `
      ${outline}px ${outline}px 0 ${styleConfig.value.outlineColour ?? "#000000"},
      -${outline}px ${outline}px 0 ${styleConfig.value.outlineColour ?? "#000000"},
      ${outline}px -${outline}px 0 ${styleConfig.value.outlineColour ?? "#000000"},
      -${outline}px -${outline}px 0 ${styleConfig.value.outlineColour ?? "#000000"},
      ${shadow}px ${shadow}px ${shadow * 2}px ${styleConfig.value.backColour ?? "#000000"}
    `,
				lineHeight: "1.5",
				textAlign: "center"
			};
		});
		watch(() => visible.value, async (newVal) => {
			if (newVal) {
				await loadPresets();
				getFonts();
				if (presetId.value === props.id) await loadPreset(props.id);
				else presetId.value = props.id;
			}
		});
		watch(() => presetId.value, async (val) => {
			if (val) await loadPreset(val);
		});
		const handleCancel = () => {
			visible.value = false;
		};
		const saveConfig = async () => {
			await subtitleStylePreset.save({
				...currentPreset.value,
				config: toRaw(styleConfig.value)
			});
			notice.success({
				title: "保存成功",
				duration: 1e3
			});
			await loadPresets();
			confirm();
		};
		const confirm = () => {
			emit("confirm", styleConfig.value, presetId.value);
			visible.value = false;
		};
		const deletePreset = async () => {
			const [status] = await confirmDialog.warning({ content: "是否确认删除该预设？" });
			if (!status) return;
			await subtitleStylePreset.remove(presetId.value);
			presetId.value = "default";
			notice.success({
				title: "删除成功",
				duration: 1e3
			});
			await loadPresets();
		};
		const nameModelVisible = ref(false);
		const tempPresetName = ref("");
		const isRename = ref(false);
		const rename = async () => {
			tempPresetName.value = currentPreset.value.name;
			isRename.value = true;
			nameModelVisible.value = true;
		};
		const saveAs = async () => {
			isRename.value = false;
			tempPresetName.value = "";
			nameModelVisible.value = true;
		};
		const saveConfirm = async () => {
			if (!tempPresetName.value) {
				notice.warning({
					title: "预设名称不得为空",
					duration: 2e3
				});
				return;
			}
			const preset = cloneDeep(currentPreset.value);
			if (!isRename.value) preset.id = uuid();
			preset.name = tempPresetName.value;
			preset.config = toRaw(styleConfig.value);
			await subtitleStylePreset.save(preset);
			nameModelVisible.value = false;
			notice.success({
				title: "保存成功",
				duration: 1e3
			});
			presetId.value = preset.id;
			await loadPresets();
		};
		const actionBtns = ref([{
			label: "另存为",
			key: "saveAnother"
		}, {
			label: "重命名",
			key: "rename"
		}]);
		const handleActionClick = async (key) => {
			switch (key) {
				case "saveAnother":
					saveAs();
					break;
				case "rename":
					rename();
					break;
				case void 0: saveConfig();
			}
		};
		const fontOptions = ref([]);
		const getFonts = async () => {
			if (!window.isWeb) {
				const data = await window.queryLocalFonts();
				fontOptions.value = data.map((item) => {
					return {
						label: item.fullName,
						value: item.fullName
					};
				});
			} else try {
				const data = await common.getFontList();
				fontOptions.value = data.map((item) => {
					return {
						label: item.fullName,
						value: item.fullName
					};
				});
			} catch (error) {
				fontOptions.value = [];
				console.error(error);
			}
		};
		return (_ctx, _cache) => {
			const _component_n_select = Select_default;
			const _component_n_divider = Divider_default;
			const _component_n_form_item = FormItem_default;
			const _component_n_input_number = InputNumber_default;
			const _component_n_checkbox = Checkbox_default;
			const _component_n_color_picker = ColorPicker_default;
			const _component_n_slider = Slider_default;
			const _component_n_form = Form_default;
			const _component_n_button = Button;
			const _component_n_input = Input_default;
			const _component_n_card = Card_default;
			const _component_n_modal = Modal_default;
			return openBlock(), createBlock(_component_n_modal, {
				show: visible.value,
				"onUpdate:show": _cache[18] || (_cache[18] = ($event) => visible.value = $event),
				"show-icon": false,
				closable: false,
				"auto-focus": ""
			}, {
				default: withCtx(() => [createVNode(_component_n_card, {
					style: {
						"width": "1200px",
						"max-height": "85vh"
					},
					bordered: false,
					size: "huge",
					role: "dialog",
					"aria-modal": "true",
					class: "card"
				}, {
					header: withCtx(() => _cache[19] || (_cache[19] = [createBaseVNode("h3", { style: { "margin": "0" } }, "字幕样式配置", -1)])),
					footer: withCtx(() => [createBaseVNode("div", _hoisted_6$4, [
						_cache[33] || (_cache[33] = createBaseVNode("div", { style: { "flex": "1" } }, null, -1)),
						unref(presetId) !== "default" ? (openBlock(), createBlock(_component_n_button, {
							key: 0,
							text: "",
							class: "btn",
							type: "error",
							onClick: deletePreset
						}, {
							default: withCtx(() => _cache[30] || (_cache[30] = [createTextVNode("删除")])),
							_: 1
						})) : createCommentVNode("", true),
						createVNode(_component_n_button, {
							class: "btn",
							onClick: handleCancel
						}, {
							default: withCtx(() => _cache[31] || (_cache[31] = [createTextVNode("取消")])),
							_: 1
						}),
						createVNode(ButtonGroup_default, {
							options: unref(actionBtns),
							onClick: handleActionClick
						}, {
							default: withCtx(() => _cache[32] || (_cache[32] = [createTextVNode("保存")])),
							_: 1
						}, 8, ["options"])
					])]),
					default: withCtx(() => [
						createBaseVNode("div", _hoisted_1$10, [_cache[20] || (_cache[20] = createBaseVNode("span", { style: { "flex": "none" } }, "预设", -1)), createVNode(_component_n_select, {
							value: unref(presetId),
							"onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(presetId) ? presetId.value = $event : null),
							options: unref(presetOptions),
							placeholder: "选择预设"
						}, null, 8, ["value", "options"])]),
						createBaseVNode("div", _hoisted_2$9, [createBaseVNode("div", _hoisted_3$8, [createVNode(_component_n_form, {
							"label-placement": "left",
							"label-width": "100px"
						}, {
							default: withCtx(() => [
								createVNode(_component_n_divider, { style: { "margin": "10px 0" } }, {
									default: withCtx(() => _cache[21] || (_cache[21] = [createTextVNode("字体设置")])),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "字体名称" }, {
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(styleConfig).fontName,
										"onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(styleConfig).fontName = $event),
										options: unref(fontOptions),
										filterable: "",
										"virtual-scroll": "",
										clearable: "",
										placeholder: "不选就是默认字体"
									}, null, 8, ["value", "options"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "字体大小" }, {
									default: withCtx(() => [createVNode(_component_n_input_number, {
										value: unref(styleConfig).fontSize,
										"onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(styleConfig).fontSize = $event),
										min: 8,
										max: 100,
										step: 1,
										style: { "width": "100%" }
									}, null, 8, ["value"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "粗体" }, {
									default: withCtx(() => [createVNode(_component_n_checkbox, {
										checked: unref(isBold),
										"onUpdate:checked": [_cache[3] || (_cache[3] = ($event) => isRef(isBold) ? isBold.value = $event : null), updateBold]
									}, {
										default: withCtx(() => _cache[22] || (_cache[22] = [createTextVNode(" 启用粗体 ")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "斜体" }, {
									default: withCtx(() => [createVNode(_component_n_checkbox, {
										checked: unref(isItalic),
										"onUpdate:checked": [_cache[4] || (_cache[4] = ($event) => isRef(isItalic) ? isItalic.value = $event : null), updateItalic]
									}, {
										default: withCtx(() => _cache[23] || (_cache[23] = [createTextVNode(" 启用斜体 ")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "下划线" }, {
									default: withCtx(() => [createVNode(_component_n_checkbox, {
										checked: unref(isUnderline),
										"onUpdate:checked": [_cache[5] || (_cache[5] = ($event) => isRef(isUnderline) ? isUnderline.value = $event : null), updateUnderline]
									}, {
										default: withCtx(() => _cache[24] || (_cache[24] = [createTextVNode(" 启用下划线 ")])),
										_: 1
									}, 8, ["checked"])]),
									_: 1
								}),
								createVNode(_component_n_divider, { style: { "margin": "10px 0" } }, {
									default: withCtx(() => _cache[25] || (_cache[25] = [createTextVNode("颜色设置")])),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "文字颜色" }, {
									default: withCtx(() => [createVNode(_component_n_color_picker, {
										value: unref(styleConfig).primaryColour,
										"onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(styleConfig).primaryColour = $event),
										modes: ["hex"]
									}, null, 8, ["value"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "边框颜色" }, {
									default: withCtx(() => [createVNode(_component_n_color_picker, {
										value: unref(styleConfig).outlineColour,
										"onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(styleConfig).outlineColour = $event),
										modes: ["hex"]
									}, null, 8, ["value"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "阴影颜色" }, {
									default: withCtx(() => [createVNode(_component_n_color_picker, {
										value: unref(styleConfig).backColour,
										"onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(styleConfig).backColour = $event),
										modes: ["hex"]
									}, null, 8, ["value"])]),
									_: 1
								}),
								createVNode(_component_n_divider, { style: { "margin": "10px 0" } }, {
									default: withCtx(() => _cache[26] || (_cache[26] = [createTextVNode("边框和阴影")])),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "边框宽度" }, {
									default: withCtx(() => [createVNode(_component_n_slider, {
										value: unref(styleConfig).outline,
										"onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(styleConfig).outline = $event),
										min: 0,
										max: 10,
										step: .5,
										marks: {
											0: "0",
											2: "2",
											5: "5",
											10: "10"
										}
									}, null, 8, ["value"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "阴影距离" }, {
									default: withCtx(() => [createVNode(_component_n_slider, {
										value: unref(styleConfig).shadow,
										"onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(styleConfig).shadow = $event),
										min: 0,
										max: 10,
										step: .5,
										marks: {
											0: "0",
											1: "1",
											5: "5",
											10: "10"
										}
									}, null, 8, ["value"])]),
									_: 1
								}),
								createVNode(_component_n_divider, { style: { "margin": "10px 0" } }, {
									default: withCtx(() => _cache[27] || (_cache[27] = [createTextVNode("位置设置")])),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "对齐方式" }, {
									default: withCtx(() => [createVNode(_component_n_select, {
										value: unref(styleConfig).alignment,
										"onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(styleConfig).alignment = $event),
										options: alignmentOptions
									}, null, 8, ["value"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "左边距" }, {
									default: withCtx(() => [createVNode(_component_n_input_number, {
										value: unref(styleConfig).marginL,
										"onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(styleConfig).marginL = $event),
										min: 0,
										max: 500,
										step: 5,
										style: { "width": "100%" }
									}, null, 8, ["value"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "右边距" }, {
									default: withCtx(() => [createVNode(_component_n_input_number, {
										value: unref(styleConfig).marginR,
										"onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(styleConfig).marginR = $event),
										min: 0,
										max: 500,
										step: 5,
										style: { "width": "100%" }
									}, null, 8, ["value"])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "垂直边距" }, {
									default: withCtx(() => [createVNode(_component_n_input_number, {
										value: unref(styleConfig).marginV,
										"onUpdate:value": _cache[14] || (_cache[14] = ($event) => unref(styleConfig).marginV = $event),
										min: 0,
										max: 500,
										step: 5,
										style: { "width": "100%" }
									}, null, 8, ["value"])]),
									_: 1
								})
							]),
							_: 1
						})]), createBaseVNode("div", _hoisted_4$7, [
							_cache[28] || (_cache[28] = createBaseVNode("div", { style: {
								"margin-bottom": "10px",
								"font-weight": "bold"
							} }, "预览效果", -1)),
							createBaseVNode("div", _hoisted_5$7, [createBaseVNode("div", { style: normalizeStyle(unref(previewContainerStyle)) }, [createBaseVNode("div", { style: normalizeStyle(unref(previewTextStyle)) }, "这是字幕预览效果", 4), createBaseVNode("div", { style: normalizeStyle(unref(previewTextStyle)) }, "Subtitle Preview", 4)], 4)]),
							_cache[29] || (_cache[29] = createBaseVNode("div", { style: {
								"margin-top": "10px",
								"font-size": "12px",
								"color": "#999"
							} }, " 提示：预览效果为近似效果，实际渲染以ffmpeg为准 ", -1))
						])]),
						createVNode(_component_n_modal, {
							show: unref(nameModelVisible),
							"onUpdate:show": _cache[17] || (_cache[17] = ($event) => isRef(nameModelVisible) ? nameModelVisible.value = $event : null)
						}, {
							default: withCtx(() => [createVNode(_component_n_card, {
								style: { "width": "600px" },
								bordered: false,
								role: "dialog",
								"aria-modal": "true"
							}, {
								footer: withCtx(() => [createBaseVNode("div", _hoisted_7$3, [createVNode(_component_n_button, { onClick: _cache[16] || (_cache[16] = ($event) => nameModelVisible.value = false) }, {
									default: withCtx(() => _cache[34] || (_cache[34] = [createTextVNode("取消")])),
									_: 1
								}), createVNode(_component_n_button, {
									type: "primary",
									style: { "margin-left": "10px" },
									onClick: saveConfirm
								}, {
									default: withCtx(() => _cache[35] || (_cache[35] = [createTextVNode("确认")])),
									_: 1
								})])]),
								default: withCtx(() => [createVNode(_component_n_input, {
									value: unref(tempPresetName),
									"onUpdate:value": _cache[15] || (_cache[15] = ($event) => isRef(tempPresetName) ? tempPresetName.value = $event : null),
									placeholder: "请输入预设名称",
									maxlength: "15",
									onKeyup: withKeys(saveConfirm, ["enter"])
								}, null, 8, ["value"])]),
								_: 1
							})]),
							_: 1
						}, 8, ["show"])
					]),
					_: 1
				})]),
				_: 1
			}, 8, ["show"]);
		};
	}
}), [["__scopeId", "data-v-b079b6b5"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/ExportModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$9 = { style: {
	"display": "flex",
	"flex-direction": "column",
	"gap": "10px"
} };
var _hoisted_2$8 = { style: { "color": "skyblue" } };
var _hoisted_3$7 = {
	key: 0,
	style: {
		"color": "red",
		"margin-top": "0"
	}
};
var _hoisted_4$6 = {
	class: "flex",
	style: { "align-items": "center" }
};
var _hoisted_5$6 = {
	class: "flex",
	style: { "align-items": "center" }
};
var _hoisted_6$3 = { style: {
	"display": "flex",
	"align-items": "center",
	"gap": "10px",
	"margin-top": "10px"
} };
var _hoisted_7$2 = { style: { "margin-bottom": "5px" } };
var _hoisted_8$2 = { style: { "color": "red" } };
var _hoisted_9$2 = ["title", "onClick"];
var _hoisted_10$2 = { class: "footer" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/ExportModal.vue
var ExportModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ExportModal",
	props: /*@__PURE__*/ mergeModels({ files: { default: () => {
		return {
			danmuPath: null,
			originVideoPath: null
		};
	} } }, {
		"modelValue": {
			type: Boolean,
			required: true,
			default: false
		},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const visible = useModel(__props, "modelValue");
		const showSubtitleStyleModal = ref(false);
		const currentSubtitleStyle = ref();
		const { ffmpegOptions } = storeToRefs(useFfmpegPreset());
		const { appConfig } = storeToRefs(useAppConfig());
		const { cuts, selectedCuts } = storeToRefs(useSegmentStore());
		const { getCombinedLyrics } = useSegmentStore();
		const notice = useNotification();
		const exportOptions = toReactive(computed({
			get: () => appConfig.value.tool.videoCut,
			set: (value) => {
				appConfig.value.tool.videoCut = value;
			}
		}));
		const confirmExport = async () => {
			if (!exportOptions.ffmpegPresetId) {
				notice.error({
					title: "请选择预设",
					duration: 1e3
				});
				return;
			}
			const ffmpegOptiosn = (await ffmpegPreset.get(exportOptions.ffmpegPresetId)).config;
			let index = 1;
			const srtContent = getCombinedLyrics();
			if (ffmpegOptiosn.encoder === "copy") {
				if (props.files.danmuPath && !exportOptions.ignoreDanmu) {
					notice.error({
						title: "存在弹幕时编码器不能为copy",
						duration: 1e3
					});
					return;
				}
				if (srtContent && !exportOptions.ignoreSubtitle) {
					notice.error({
						title: "存在字幕时编码器不能为copy",
						duration: 1e3
					});
					return;
				}
			}
			const segments = [];
			for (const cut of selectedCuts.value) {
				const start = cut.start;
				const end = cut.end;
				const label = cut.name;
				const title = filenamify(exportOptions.title.replace("{{filename}}", window.path.parse(props.files.originVideoPath).name).replace("{{label}}", label).replace("{{num}}", index.toString()).replace("{{from}}", secondsToTimemark(start).replaceAll(":", ".")).replace("{{to}}", secondsToTimemark(end).replaceAll(":", ".")).trim(), { replacement: "" });
				await task.cut({
					videoFilePath: props.files.originVideoPath,
					assFilePath: exportOptions.ignoreDanmu ? "" : props.files.danmuPath,
					srtContent: exportOptions.ignoreSubtitle ? "" : srtContent || ""
				}, `${title}.mp4`, {
					...ffmpegOptiosn,
					ss: start,
					to: end,
					subtitleOptions: exportOptions.ignoreSubtitle ? void 0 : currentSubtitleStyle.value
				}, {
					override: exportOptions.override,
					saveType: exportOptions.saveRadio,
					savePath: exportOptions.savePath
				});
				segments.push({
					start,
					end,
					name: title
				});
				index += 1;
			}
			if (exportOptions.exportSubtitle) task.cutSubtitle({
				srtContent,
				segments,
				videoPath: props.files.originVideoPath,
				saveType: exportOptions.saveRadio,
				savePath: exportOptions.savePath
			});
			notice.info({
				title: "已加入任务队列",
				duration: 1e3
			});
			visible.value = false;
		};
		const noDanmuTips = computed(() => {
			if (props.files.danmuPath) return "";
			else return "如果不需要弹幕，视频预设推荐使用copy，这样就不需要重新编码，但是只会在关键帧切割，导致视频长度不准确";
		});
		async function getDir() {
			const path = await showDirectoryDialog({ defaultPath: exportOptions.savePath });
			if (!path) return;
			exportOptions.savePath = path;
		}
		const initSubtitleStyle = async () => {
			const styleId = exportOptions.subtitleStyleId || "default";
			const data = await subtitleStylePreset.get(styleId);
			currentSubtitleStyle.value = data.config;
		};
		const handleSubtitleStyleConfirm = async (config, id) => {
			currentSubtitleStyle.value = config;
			exportOptions.subtitleStyleId = id;
		};
		watch(visible, (newVal) => {
			if (newVal) initSubtitleStyle();
		});
		const titleList = ref([
			{
				value: "{{filename}}",
				label: "视频文件名"
			},
			{
				value: "{{label}}",
				label: "分段名"
			},
			{
				value: "{{num}}",
				label: "分段序号"
			},
			{
				value: "{{from}}",
				label: "分段开始时间"
			},
			{
				value: "{{to}}",
				label: "分段结束时间"
			}
		]);
		const setTitleVar = (value) => {
			exportOptions.title += value;
		};
		const exportError = computed(() => {
			if (exportOptions.title.includes("{{from}}") || exportOptions.title.includes("{{num}}") || exportOptions.title.includes("{{to}}")) return "";
			else return "输出文件名模板会导致文件名重复（您正在尝试导出多个同名文件）";
		});
		return (_ctx, _cache) => {
			const _component_n_cascader = Cascader_default;
			const _component_Tip = Tip_default;
			const _component_n_radio = Radio_default;
			const _component_n_input = Input_default;
			const _component_n_icon = NIcon;
			const _component_n_space = Space_default;
			const _component_n_radio_group = RadioGroup_default;
			const _component_n_checkbox = Checkbox_default;
			const _component_n_button = Button;
			const _component_n_card = Card_default;
			const _component_n_modal = Modal_default;
			return openBlock(), createElementBlock(Fragment, null, [createVNode(_component_n_modal, {
				show: visible.value,
				"onUpdate:show": _cache[10] || (_cache[10] = ($event) => visible.value = $event),
				"show-icon": false,
				closable: false,
				"auto-focus": ""
			}, {
				default: withCtx(() => [createVNode(_component_n_card, {
					style: { "width": "700px" },
					bordered: false,
					size: "huge",
					role: "dialog",
					"aria-modal": "true",
					class: "card"
				}, {
					footer: withCtx(() => [createBaseVNode("div", _hoisted_10$2, [createVNode(_component_n_button, {
						class: "btn",
						onClick: _cache[9] || (_cache[9] = ($event) => visible.value = false)
					}, {
						default: withCtx(() => _cache[23] || (_cache[23] = [createTextVNode("取消")])),
						_: 1
					}), createVNode(_component_n_button, {
						class: "btn",
						type: "primary",
						onClick: confirmExport
					}, {
						default: withCtx(() => _cache[24] || (_cache[24] = [createTextVNode("确定")])),
						_: 1
					})])]),
					default: withCtx(() => [createBaseVNode("div", _hoisted_1$9, [
						createBaseVNode("h3", null, [
							createTextVNode(" 共有" + toDisplayString(unref(cuts).length) + "个切片，本次将导出 ", 1),
							createBaseVNode("span", _hoisted_2$8, toDisplayString(unref(selectedCuts).length), 1),
							_cache[12] || (_cache[12] = createTextVNode(" 个视频 "))
						]),
						unref(noDanmuTips) ? (openBlock(), createElementBlock("p", _hoisted_3$7, toDisplayString(unref(noDanmuTips)), 1)) : createCommentVNode("", true),
						createBaseVNode("div", _hoisted_4$6, [
							_cache[14] || (_cache[14] = createTextVNode(" 选择视频预设： ")),
							createVNode(_component_n_cascader, {
								value: unref(exportOptions).ffmpegPresetId,
								"onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(exportOptions).ffmpegPresetId = $event),
								placeholder: "请选择预设",
								"expand-trigger": "click",
								options: unref(ffmpegOptions),
								"check-strategy": "child",
								"show-path": false,
								filterable: true,
								style: {
									"width": "200px",
									"text-align": "left"
								}
							}, null, 8, ["value", "options"]),
							createVNode(_component_Tip, null, {
								default: withCtx(() => _cache[13] || (_cache[13] = [createTextVNode(" 推荐采用质量模式，以自适应视频质量，视频编码不能使用copy ")])),
								_: 1
							})
						]),
						createBaseVNode("div", _hoisted_5$6, [createVNode(_component_n_radio_group, {
							value: unref(exportOptions).saveRadio,
							"onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(exportOptions).saveRadio = $event)
						}, {
							default: withCtx(() => [createVNode(_component_n_space, { class: "flex align-center column" }, {
								default: withCtx(() => [
									createVNode(_component_n_radio, { value: 1 }, {
										default: withCtx(() => _cache[15] || (_cache[15] = [createTextVNode(" 保存到视频文件夹 ")])),
										_: 1
									}),
									createVNode(_component_n_radio, { value: 2 }),
									createVNode(_component_n_input, {
										value: unref(exportOptions).savePath,
										"onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(exportOptions).savePath = $event),
										placeholder: "选择文件夹",
										style: { "width": "300px" }
									}, null, 8, ["value"]),
									createVNode(_component_n_icon, {
										size: "30",
										style: { "margin-left": "0px" },
										class: "pointer",
										onClick: getDir
									}, {
										default: withCtx(() => [createVNode(unref(FolderOpenOutline_default))]),
										_: 1
									})
								]),
								_: 1
							})]),
							_: 1
						}, 8, ["value"])]),
						createBaseVNode("div", null, [createVNode(_component_n_radio_group, {
							value: unref(exportOptions).override,
							"onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(exportOptions).override = $event)
						}, {
							default: withCtx(() => [createVNode(_component_n_space, null, {
								default: withCtx(() => [createVNode(_component_n_radio, { value: true }, {
									default: withCtx(() => _cache[16] || (_cache[16] = [createTextVNode(" 覆盖文件 ")])),
									_: 1
								}), createVNode(_component_n_radio, { value: false }, {
									default: withCtx(() => _cache[17] || (_cache[17] = [createTextVNode(" 跳过存在文件 ")])),
									_: 1
								})]),
								_: 1
							})]),
							_: 1
						}, 8, ["value"])]),
						createBaseVNode("div", null, [
							createVNode(_component_n_checkbox, {
								checked: unref(exportOptions).ignoreDanmu,
								"onUpdate:checked": _cache[4] || (_cache[4] = ($event) => unref(exportOptions).ignoreDanmu = $event),
								style: { "margin-top": "10px" }
							}, {
								default: withCtx(() => _cache[18] || (_cache[18] = [createTextVNode(" 忽略弹幕渲染 ")])),
								_: 1
							}, 8, ["checked"]),
							createBaseVNode("div", _hoisted_6$3, [createVNode(_component_n_checkbox, {
								checked: unref(exportOptions).ignoreSubtitle,
								"onUpdate:checked": _cache[5] || (_cache[5] = ($event) => unref(exportOptions).ignoreSubtitle = $event)
							}, {
								default: withCtx(() => _cache[19] || (_cache[19] = [createTextVNode(" 忽略字幕渲染 ")])),
								_: 1
							}, 8, ["checked"]), createVNode(_component_n_button, {
								size: "small",
								onClick: _cache[6] || (_cache[6] = ($event) => showSubtitleStyleModal.value = true)
							}, {
								default: withCtx(() => _cache[20] || (_cache[20] = [createTextVNode(" 配置字幕样式 ")])),
								_: 1
							})]),
							createVNode(_component_n_checkbox, {
								checked: unref(exportOptions).exportSubtitle,
								"onUpdate:checked": _cache[7] || (_cache[7] = ($event) => unref(exportOptions).exportSubtitle = $event),
								style: { "margin-top": "10px" }
							}, {
								default: withCtx(() => _cache[21] || (_cache[21] = [createTextVNode(" 单独导出srt字幕 ")])),
								_: 1
							}, 8, ["checked"])
						]),
						createBaseVNode("div", null, [createBaseVNode("div", _hoisted_7$2, [_cache[22] || (_cache[22] = createTextVNode(" 输出文件名：")), createBaseVNode("span", _hoisted_8$2, toDisplayString(unref(exportError)), 1)]), createBaseVNode("div", null, [createVNode(_component_n_input, {
							value: unref(exportOptions).title,
							"onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(exportOptions).title = $event),
							placeholder: "请输入视频标题",
							clearable: "",
							style: { "margin-right": "10px" }
						}, null, 8, ["value"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(titleList), (item) => {
							return openBlock(), createElementBlock("span", {
								key: item.value,
								title: item.label,
								class: "title-var",
								onClick: ($event) => setTitleVar(item.value)
							}, toDisplayString(item.value), 9, _hoisted_9$2);
						}), 128))])])
					])]),
					_: 1
				})]),
				_: 1
			}, 8, ["show"]), createVNode(SubtitleStyleModal_default, {
				modelValue: unref(showSubtitleStyleModal),
				"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => isRef(showSubtitleStyleModal) ? showSubtitleStyleModal.value = $event : null),
				id: unref(exportOptions).subtitleStyleId || "default",
				onConfirm: handleSubtitleStyleConfirm
			}, null, 8, ["modelValue", "id"])], 64);
		};
	}
}), [["__scopeId", "data-v-38aaf819"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/ExportUploadModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler();
var _hoisted_1$8 = { class: "form-row" };
var _hoisted_2$7 = { class: "form-row" };
var _hoisted_3$6 = { class: "form-column" };
var _hoisted_4$5 = { class: "form-row" };
var _hoisted_5$5 = { class: "footer" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/ExportUploadModal.vue
var ExportUploadModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ExportUploadModal",
	props: /*@__PURE__*/ mergeModels({
		files: { default: () => ({
			danmuPath: null,
			originVideoPath: null
		}) },
		segment: { default: null }
	}, {
		"modelValue": {
			type: Boolean,
			required: true,
			default: false
		},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const visible = useModel(__props, "modelValue");
		const showSubtitleStyleModal = ref(false);
		const showUploadPresetDialog = ref(false);
		const currentSubtitleStyle = ref();
		const submitting = ref(false);
		const notice = useNotification();
		const { ffmpegOptions } = storeToRefs(useFfmpegPreset());
		const { uploaPresetsOptions } = storeToRefs(useUploadPreset());
		const { appConfig } = storeToRefs(useAppConfig());
		const { userInfo } = storeToRefs(useUserInfoStore());
		const currentSegment = computed(() => props.segment);
		const exportOptions = toReactive(computed({
			get: () => appConfig.value.tool.videoCut,
			set: (value) => {
				appConfig.value.tool.videoCut = value;
			}
		}));
		const buildDefaultOutputPath = () => {
			const originVideoPath = props.files.originVideoPath;
			const start = currentSegment.value.start;
			const end = currentSegment.value.end;
			const label = currentSegment.value.name || "segment";
			const defaultName = filenamify(`${window.path.parse(originVideoPath).name}-${label}-${secondsToTimemark(start).replaceAll(":", ".")}-${secondsToTimemark(end).replaceAll(":", ".")}`, { replacement: "" });
			return window.path.join(window.path.dirname(originVideoPath), `${defaultName}.mp4`);
		};
		const confirmExportAndUpload = async () => {
			if (!exportOptions.ffmpegPresetId) {
				notice.error({
					title: "请选择预设",
					duration: 1e3
				});
				return;
			}
			if (exportOptions.uploadPresetId && !userInfo.value.uid) {
				notice.error({
					title: "请点击左侧头像处先进行登录",
					duration: 1e3
				});
				return;
			}
			if (!currentSegment.value) {
				notice.error({
					title: "没有可导出的视频切片",
					duration: 1e3
				});
				return;
			}
			if (currentSegment.value.end === void 0) {
				notice.error({
					title: "当前切片缺少结束时间",
					duration: 1e3
				});
				return;
			}
			submitting.value = true;
			try {
				const ffmpegPresetConfig = (await ffmpegPreset.get(exportOptions.ffmpegPresetId)).config;
				let uploadConfig = null;
				if (exportOptions.uploadPresetId) {
					const uploadPreset = await videoPreset.get(exportOptions.uploadPresetId);
					uploadConfig = deepRaw(uploadPreset.config);
					await bili.validUploadParams(uploadConfig);
				}
				const srtContent = "";
				const outputPath = await showSaveDialog({
					defaultPath: buildDefaultOutputPath(),
					extension: "mp4"
				});
				if (!outputPath) return;
				if (ffmpegPresetConfig.encoder === "copy") {
					if (props.files.danmuPath && !exportOptions.ignoreDanmu) {
						notice.error({
							title: "存在弹幕时编码器不能为copy",
							duration: 1e3
						});
						return;
					}
				}
				const segments = [];
				const start = currentSegment.value.start;
				const end = currentSegment.value.end;
				const title = window.path.parse(outputPath).name;
				await task.cut({
					videoFilePath: props.files.originVideoPath,
					assFilePath: exportOptions.ignoreDanmu ? "" : props.files.danmuPath || "",
					srtContent: exportOptions.ignoreSubtitle ? "" : srtContent
				}, outputPath, {
					...ffmpegPresetConfig,
					ss: start,
					to: end,
					subtitleOptions: exportOptions.ignoreSubtitle ? void 0 : currentSubtitleStyle.value
				}, {
					override: true,
					uploadOptions: {
						upload: !!exportOptions.uploadPresetId,
						config: uploadConfig,
						filePath: outputPath,
						uid: userInfo.value.uid
					}
				});
				segments.push({
					start,
					end,
					name: title
				});
				if (exportOptions.exportSubtitle) {
					const subtitleDir = window.path.dirname(outputPath);
					await task.cutSubtitle({
						srtContent,
						segments,
						videoPath: props.files.originVideoPath,
						saveType: 2,
						savePath: subtitleDir
					});
				}
				notice.info({
					title: "已加入任务队列",
					duration: 1e3
				});
				visible.value = false;
			} finally {
				submitting.value = false;
			}
		};
		const initSubtitleStyle = async () => {
			const styleId = exportOptions.subtitleStyleId || "default";
			const data = await subtitleStylePreset.get(styleId);
			currentSubtitleStyle.value = data.config;
		};
		const handleSubtitleStyleConfirm = async (config, id) => {
			currentSubtitleStyle.value = config;
			exportOptions.subtitleStyleId = id;
		};
		watch(visible, (newVal) => {
			if (newVal) initSubtitleStyle();
		});
		return (_ctx, _cache) => {
			const _component_n_cascader = Cascader_default;
			const _component_Tip = Tip_default;
			const _component_n_form_item = FormItem_default;
			const _component_n_select = Select_default;
			const _component_n_icon = NIcon;
			const _component_n_button = Button;
			const _component_n_checkbox = Checkbox_default;
			const _component_n_form = Form_default;
			const _component_n_card = Card_default;
			const _component_n_modal = Modal_default;
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(_component_n_modal, {
					show: visible.value,
					"onUpdate:show": _cache[8] || (_cache[8] = ($event) => visible.value = $event),
					"show-icon": false,
					closable: false,
					"auto-focus": ""
				}, {
					default: withCtx(() => [createVNode(_component_n_card, {
						style: { "width": "760px" },
						bordered: false,
						size: "huge",
						role: "dialog",
						"aria-modal": "true",
						class: "card"
					}, {
						footer: withCtx(() => [createBaseVNode("div", _hoisted_5$5, [createVNode(_component_n_button, {
							class: "btn",
							onClick: _cache[7] || (_cache[7] = ($event) => visible.value = false)
						}, {
							default: withCtx(() => _cache[16] || (_cache[16] = [createTextVNode("取消")])),
							_: 1
						}), createVNode(_component_n_button, {
							class: "btn",
							type: "primary",
							loading: unref(submitting),
							onClick: confirmExportAndUpload
						}, {
							default: withCtx(() => _cache[17] || (_cache[17] = [createTextVNode(" 确定 ")])),
							_: 1
						}, 8, ["loading"])])]),
						default: withCtx(() => [createVNode(_component_n_form, {
							"label-placement": "left",
							"label-width": "96",
							style: { "margin-top": "4px" }
						}, {
							default: withCtx(() => [
								createVNode(_component_n_form_item, { label: "视频预设" }, {
									default: withCtx(() => [createBaseVNode("div", _hoisted_1$8, [createVNode(_component_n_cascader, {
										value: unref(exportOptions).ffmpegPresetId,
										"onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(exportOptions).ffmpegPresetId = $event),
										placeholder: "请选择预设",
										"expand-trigger": "click",
										options: unref(ffmpegOptions),
										"check-strategy": "child",
										"show-path": false,
										filterable: true,
										style: {
											"width": "220px",
											"text-align": "left"
										}
									}, null, 8, ["value", "options"]), createVNode(_component_Tip, null, {
										default: withCtx(() => _cache[11] || (_cache[11] = [createTextVNode(" 推荐采用质量模式，以自适应视频质量 ")])),
										_: 1
									})])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "上传预设" }, {
									default: withCtx(() => [createBaseVNode("div", _hoisted_2$7, [createVNode(_component_n_select, {
										value: unref(exportOptions).uploadPresetId,
										"onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(exportOptions).uploadPresetId = $event),
										options: unref(uploaPresetsOptions),
										placeholder: "请选择上传预设",
										filterable: "",
										style: { "width": "300px" },
										clearable: ""
									}, null, 8, ["value", "options"]), unref(exportOptions).uploadPresetId ? (openBlock(), createBlock(_component_n_button, {
										key: 0,
										text: "",
										onClick: _cache[2] || (_cache[2] = ($event) => showUploadPresetDialog.value = true)
									}, {
										icon: withCtx(() => [createVNode(_component_n_icon, null, {
											default: withCtx(() => [createVNode(unref(SettingsOutline_default))]),
											_: 1
										})]),
										_: 1
									})) : createCommentVNode("", true)])]),
									_: 1
								}),
								createVNode(_component_n_form_item, { label: "其他" }, {
									default: withCtx(() => [createBaseVNode("div", _hoisted_3$6, [
										createVNode(_component_n_checkbox, {
											checked: unref(exportOptions).ignoreDanmu,
											"onUpdate:checked": _cache[3] || (_cache[3] = ($event) => unref(exportOptions).ignoreDanmu = $event)
										}, {
											default: withCtx(() => _cache[12] || (_cache[12] = [createTextVNode(" 忽略弹幕渲染 ")])),
											_: 1
										}, 8, ["checked"]),
										createBaseVNode("div", _hoisted_4$5, [createVNode(_component_n_checkbox, {
											checked: unref(exportOptions).ignoreSubtitle,
											"onUpdate:checked": _cache[4] || (_cache[4] = ($event) => unref(exportOptions).ignoreSubtitle = $event)
										}, {
											default: withCtx(() => _cache[13] || (_cache[13] = [createTextVNode(" 忽略字幕渲染 ")])),
											_: 1
										}, 8, ["checked"]), createVNode(_component_n_button, {
											size: "small",
											onClick: _cache[5] || (_cache[5] = ($event) => showSubtitleStyleModal.value = true)
										}, {
											default: withCtx(() => _cache[14] || (_cache[14] = [createTextVNode(" 配置字幕样式 ")])),
											_: 1
										})]),
										createVNode(_component_n_checkbox, {
											checked: unref(exportOptions).exportSubtitle,
											"onUpdate:checked": _cache[6] || (_cache[6] = ($event) => unref(exportOptions).exportSubtitle = $event)
										}, {
											default: withCtx(() => _cache[15] || (_cache[15] = [createTextVNode(" 单独导出srt字幕 ")])),
											_: 1
										}, 8, ["checked"])
									])]),
									_: 1
								})
							]),
							_: 1
						})]),
						_: 1
					})]),
					_: 1
				}, 8, ["show"]),
				createVNode(SubtitleStyleModal_default, {
					modelValue: unref(showSubtitleStyleModal),
					"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => isRef(showSubtitleStyleModal) ? showSubtitleStyleModal.value = $event : null),
					id: unref(exportOptions).subtitleStyleId || "default",
					onConfirm: handleSubtitleStyleConfirm
				}, null, 8, ["modelValue", "id"]),
				createVNode(BiliPresetEditDialog_default, {
					show: unref(showUploadPresetDialog),
					"onUpdate:show": _cache[10] || (_cache[10] = ($event) => isRef(showUploadPresetDialog) ? showUploadPresetDialog.value = $event : null),
					"preset-id": unref(exportOptions).uploadPresetId
				}, null, 8, ["show", "preset-id"])
			], 64);
		};
	}
}), [["__scopeId", "data-v-cd5496d3"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/SearchPopover.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$7 = { style: { "width": "600px" } };
var _hoisted_2$6 = { style: { "margin-top": "10px" } };
var _hoisted_3$5 = { style: { "flex": "none" } };
var _hoisted_4$4 = { style: {
	"color": "#2b94ff",
	"flex": "none"
} };
var _hoisted_5$4 = {
	key: 0,
	style: { "color": "#e57272" }
};
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/SearchPopover.vue
var SearchPopover_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SearchPopover",
	props: /*@__PURE__*/ mergeModels({
		file: {},
		danmaList: {},
		danmaSearchMask: { type: Boolean }
	}, {
		"visible": {
			type: Boolean,
			required: true,
			default: false
		},
		"visibleModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["add-segment", "set-location"], ["update:visible"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const visible = useModel(__props, "visible");
		const emits = __emit;
		const notice = useNotification();
		const form = reactive({
			value: "",
			content: "content",
			sc: false
		});
		const list = computed(() => props.danmaList);
		const inputRef = ref(null);
		watch(() => visible.value, (value) => {
			if (value) {
				getDisplayList();
				setTimeout(() => {
					inputRef.value?.focus();
				}, 0);
			}
		});
		const handleOutside = () => {
			if (props.danmaSearchMask) setTimeout(() => {
				visible.value = false;
			}, 0);
		};
		const search = async () => {
			if (!form.value) return;
		};
		const displayList = ref([]);
		watchThrottled(() => form, async () => {
			getDisplayList();
		}, {
			throttle: 500,
			deep: true
		});
		const getDisplayList = () => {
			let data = list.value;
			if (form.sc) data = list.value.filter((item) => item.type === "sc");
			if (!form.value) displayList.value = data;
			else displayList.value = data.filter((item) => {
				if (form.content === "content") {
					if (!item.text) return false;
					console.log(item.text, form.value);
					return item.text.includes(form.value);
				} else {
					if (!item.user) return false;
					return item.user.includes(form.value);
				}
			});
		};
		const addSegment = (item) => {
			emits("add-segment", {
				start: item.ts,
				end: item.ts + 60,
				name: item.text
			});
			notice.success({
				title: "添加成功",
				duration: 1e3
			});
		};
		const setLocation = (item) => {
			emits("set-location", item.ts);
		};
		return (_ctx, _cache) => {
			const _component_n_input = Input_default;
			const _component_n_button = Button;
			const _component_n_input_group = InputGroup_default;
			const _component_n_radio = Radio_default;
			const _component_n_space = Space_default;
			const _component_n_radio_group = RadioGroup_default;
			const _component_n_checkbox = Checkbox_default;
			const _component_n_icon = NIcon;
			const _component_n_virtual_list = VirtualList_default;
			const _component_n_popover = Popover_default;
			return openBlock(), createBlock(_component_n_popover, {
				show: visible.value,
				trigger: "manual",
				"on-clickoutside": handleOutside
			}, {
				trigger: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
				default: withCtx(() => [createBaseVNode("div", _hoisted_1$7, [
					createVNode(_component_n_input_group, null, {
						default: withCtx(() => [createVNode(_component_n_input, {
							ref_key: "inputRef",
							ref: inputRef,
							value: unref(form).value,
							"onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(form).value = $event),
							placeholder: "请输入关键字",
							onKeyup: withKeys(search, ["enter"])
						}, null, 8, ["value"]), createVNode(_component_n_button, {
							type: "primary",
							ghost: "",
							onClick: search
						}, {
							default: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode(" 搜索 ")])),
							_: 1
						})]),
						_: 1
					}),
					createBaseVNode("div", _hoisted_2$6, [createVNode(_component_n_radio_group, {
						value: unref(form).content,
						"onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(form).content = $event),
						name: "radiogroup"
					}, {
						default: withCtx(() => [createVNode(_component_n_space, null, {
							default: withCtx(() => [createVNode(_component_n_radio, { value: "content" }, {
								default: withCtx(() => _cache[4] || (_cache[4] = [createTextVNode(" 内容 ")])),
								_: 1
							}), createVNode(_component_n_radio, { value: "user" }, {
								default: withCtx(() => _cache[5] || (_cache[5] = [createTextVNode(" 用户名 ")])),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					}, 8, ["value"]), createVNode(_component_n_checkbox, {
						checked: unref(form).sc,
						"onUpdate:checked": _cache[2] || (_cache[2] = ($event) => unref(form).sc = $event)
					}, {
						default: withCtx(() => _cache[6] || (_cache[6] = [createTextVNode("sc")])),
						_: 1
					}, 8, ["checked"])]),
					createVNode(_component_n_virtual_list, {
						class: "content",
						"item-size": 28,
						items: unref(displayList)
					}, {
						default: withCtx(({ item }) => [(openBlock(), createElementBlock("div", {
							key: `${item.ts}-${item.text}`,
							class: "item",
							style: { "min-height": "28px" }
						}, [
							createBaseVNode("span", _hoisted_3$5, toDisplayString(unref(secondsToTimemark)(item.ts, false)), 1),
							createBaseVNode("span", _hoisted_4$4, toDisplayString(item.user), 1),
							item.type === "sc" ? (openBlock(), createElementBlock("span", _hoisted_5$4, "sc")) : createCommentVNode("", true),
							createBaseVNode("span", null, toDisplayString(item.text), 1),
							createVNode(_component_n_icon, {
								class: "pointer action",
								size: "20",
								depth: 3,
								title: "添加到切片",
								onClick: ($event) => addSegment(item)
							}, {
								default: withCtx(() => [createVNode(unref(AddCircleOutline_default))]),
								_: 2
							}, 1032, ["onClick"]),
							createVNode(_component_n_icon, {
								class: "pointer action",
								size: "20",
								depth: 3,
								title: "定位",
								onClick: ($event) => setLocation(item)
							}, {
								default: withCtx(() => [createVNode(unref(LocationOutline_default))]),
								_: 2
							}, 1032, ["onClick"])
						]))]),
						_: 1
					}, 8, ["items"])
				])]),
				_: 3
			}, 8, ["show"]);
		};
	}
}), [["__scopeId", "data-v-e86ae3d7"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/SegmentList.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$6 = { class: "cut-list" };
var _hoisted_2$5 = { class: "btns" };
var _hoisted_3$4 = {
	stroke: "currentColor",
	fill: "currentColor",
	"stroke-width": "0",
	viewBox: "0 0 384 512",
	role: "button",
	xmlns: "http://www.w3.org/2000/svg",
	style: { "transform": "matrix(-1, 0, 0, 1, 0, 0)" }
};
var _hoisted_4$3 = { class: "view" };
var _hoisted_5$3 = [
	"onClick",
	"onDblclick",
	"onContextmenu"
];
var _hoisted_6$2 = { class: "time" };
var _hoisted_7$1 = {
	class: "name",
	style: { "color": "skyblue" }
};
var _hoisted_8$1 = {
	key: 0,
	class: "duration"
};
var _hoisted_9$1 = { class: "icon" };
var _hoisted_10$1 = { class: "edit-icon" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/SegmentList.vue
var SegmentList_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SegmentList",
	props: {
		danmaList: { default: () => [] },
		files: {},
		danmaSearchMask: { type: Boolean }
	},
	emits: ["export-upload"],
	setup(__props, { emit: __emit }) {
		onActivated(() => {
			hotkeys("f2", function() {
				rename();
			});
			hotkeys("I", function() {
				setStartTime();
			});
			hotkeys("O", function() {
				setEndTime();
			});
			hotkeys("up", function(event) {
				event.preventDefault();
				prevSegment();
			});
			hotkeys("down", function(event) {
				event.preventDefault();
				nextSegment();
			});
			hotkeys("del", function() {
				deleteCut();
			});
			hotkeys("ctrl+k", function() {
				searchDanmu();
			});
			hotkeys("ctrl+n", function(event) {
				event.preventDefault();
				addCut();
			});
		});
		const props = __props;
		const emits = __emit;
		const el = ref(null);
		const { width, height } = useWindowSize();
		const notice = useNotification();
		const confirm = useConfirm();
		const { x, y, style } = useDraggable(el, { initialValue: {
			x: width.value - 100,
			y: height.value - 40
		} });
		useEventListener(window, "resize", () => {
			x.value = width.value - 100;
			y.value = height.value - 40;
		});
		const videoInstance = inject("videoInstance");
		const { appConfig } = storeToRefs(useAppConfig());
		const { cuts, selectCutId } = storeToRefs(useSegmentStore());
		const subtitleStore = useSubtitles();
		const { addSegment, removeSegment, updateSegment, toggleSegment, selectCut, insertSegmentAfter, mergeForward, mergeBackward, getCombinedLyrics } = useSegmentStore();
		const toggleChecked = (id) => {
			toggleSegment(id);
		};
		const cutEditVisible = ref(false);
		const tempCutName = ref("");
		/**
		* 编辑片段名称
		*/
		const editCut = (id) => {
			const cut = cuts.value.find((c) => c.id === id);
			if (!cut) return;
			cutEditVisible.value = true;
			tempCutName.value = cut.name;
			selectCutId.value = id;
		};
		const rename = () => {
			if (!selectCutId.value) return;
			editCut(selectCutId.value);
		};
		/**
		* 确认编辑片段名称
		*/
		const confirmEditCutName = () => {
			if (!selectCutId.value) return;
			updateSegment(selectCutId.value, { name: tempCutName.value });
			cutEditVisible.value = false;
		};
		/**
		* 导航到视频指定位置
		* @param start 片段开始时间
		*/
		const navVideo = (start) => {
			videoInstance.value.seek = start;
		};
		/**
		* 选择片段
		* @param id 片段ID
		*/
		const handleSelectCut = (id) => {
			selectCut(id);
		};
		/**
		* 添加片段
		*/
		const addCut = (iOptions = {}) => {
			if (!props.files.originVideoPath) {
				notice.error({
					title: "请先加载视频文件",
					duration: 1e3
				});
				return;
			}
			const options = Object.assign({
				start: videoInstance.value.currentTime,
				name: "",
				checked: true
			}, iOptions);
			if (options.end) options.end = Math.min(options.end, videoInstance.value.duration);
			else options.end = Math.min(options.start + 300, videoInstance.value.duration);
			addSegment(options);
			console.log("cuts", cuts.value);
		};
		/**
		* 删除片段
		*/
		const deleteCut = (id) => {
			const segmentId = id || selectCutId.value;
			if (!segmentId) return;
			removeSegment(segmentId);
			resetSubtitle();
		};
		/**
		* 在当前时间开始当前片段
		*/
		const setStartTime = () => {
			if (!selectCutId.value) return;
			if (!videoInstance) return;
			const selectedCut = cuts.value.find((c) => c.id === selectCutId.value);
			if (!selectedCut || videoInstance.value.currentTime > selectedCut.end) return;
			updateSegment(selectCutId.value, { start: videoInstance.value.currentTime });
		};
		/**
		* 在当前时间结束当前片段
		*/
		const setEndTime = () => {
			if (!selectCutId.value) return;
			if (!videoInstance) return;
			const selectedCut = cuts.value.find((c) => c.id === selectCutId.value);
			if (!selectedCut || videoInstance.value.currentTime < selectedCut.start) return;
			updateSegment(selectCutId.value, { end: videoInstance.value.currentTime });
		};
		/**
		* 下一个片段
		*/
		const nextSegment = () => {
			if (!selectCutId.value) {
				if (cuts.value.length > 0) selectCut(cuts.value[0].id);
				return;
			}
			const currentIndex = cuts.value.findIndex((c) => c.id === selectCutId.value);
			if (currentIndex === -1 || currentIndex === cuts.value.length - 1) return;
			selectCut(cuts.value[currentIndex + 1].id);
		};
		/**
		* 上一个片段
		*/
		const prevSegment = () => {
			if (!selectCutId.value) {
				if (cuts.value.length > 0) selectCut(cuts.value[cuts.value.length - 1].id);
				return;
			}
			const currentIndex = cuts.value.findIndex((c) => c.id === selectCutId.value);
			if (currentIndex === -1 || currentIndex === 0) return;
			selectCut(cuts.value[currentIndex - 1].id);
		};
		const searchDanmuVisible = ref(false);
		/**
		* 搜索弹幕
		*/
		const searchDanmu = () => {
			searchDanmuVisible.value = !searchDanmuVisible.value;
		};
		/**
		* 向前合并
		* @param segment 要合并的片段
		*/
		const handleMergeForward = (segment) => {
			if (segment.loading) {
				notice.warning({
					title: "片段正在处理，无法合并",
					duration: 2e3
				});
				return;
			}
			if (cuts.value.findIndex((s) => s.id === segment.id) <= 0) {
				notice.warning({
					title: "第一个片段无法向前合并",
					duration: 2e3
				});
				return;
			}
			const success = mergeForward(segment.id);
			resetSubtitle();
			if (success) notice.success({
				title: "合并成功",
				duration: 1500
			});
		};
		/**
		* 向后合并
		* @param segment 要合并的片段
		*/
		const handleMergeBackward = (segment) => {
			if (segment.loading) {
				notice.warning({
					title: "片段正在处理，无法合并",
					duration: 2e3
				});
				return;
			}
			const currentIndex = cuts.value.findIndex((s) => s.id === segment.id);
			if (currentIndex === -1 || currentIndex >= cuts.value.length - 1) {
				notice.warning({
					title: "最后一个片段无法向后合并",
					duration: 2e3
				});
				return;
			}
			const success = mergeBackward(segment.id);
			resetSubtitle();
			if (success) notice.success({
				title: "合并成功",
				duration: 1500
			});
		};
		/**
		* 切割片段
		* @param segment 要切割的片段
		*/
		const splitSegment = (segment) => {
			if (!videoInstance.value) return;
			if (segment.loading) {
				notice.warning({
					title: "片段正在处理，无法切割",
					duration: 2e3
				});
				return;
			}
			const currentTime = videoInstance.value.currentTime;
			if (currentTime <= segment.start || currentTime >= segment.end) {
				notice.warning({
					title: "当前时间点不在该片段范围内",
					duration: 2e3
				});
				return;
			}
			updateSegment(segment.id, { end: currentTime });
			insertSegmentAfter(segment.id, {
				start: currentTime,
				end: segment.end,
				name: segment.name ? `${segment.name}-2` : "",
				checked: segment.checked
			});
		};
		function renderIcon(icon) {
			return () => h$1(NIcon, { style: {
				fontSize: "17px",
				"font-size": "17px"
			} }, { default: () => h$1(icon) });
		}
		const resetSubtitle = () => {
			const combinedLyrics = getCombinedLyrics();
			videoInstance.value.artplayerPluginSubtitle.setContent(combinedLyrics, "srt");
		};
		const songRecognize = async (segment) => {
			if (!props.files.originVideoPath) {
				notice.error({
					title: "请先加载视频文件",
					duration: 1e3
				});
				return;
			}
			if (segment.end && segment.end - segment.start > 360) {
				const [status] = await confirm.warning({ content: `这么长的片段真的是歌曲吗、是否继续？` });
				if (!status) return;
			}
			const [status] = await confirm.warning({
				content: `此功能使用AI用于针对片段进行歌曲识别，使用前请先去配置如阿里云相关key。\n
    1. 利用asr识别出字幕\n
    2. 利用llm根据字幕内容推断歌曲名称和歌词\n
    3. 利用asr中的时间轴以及歌词生成校对后的字幕（设置可关闭）\n`,
				showCheckbox: true,
				showAgainKey: "videoSongRecognizeWarning"
			});
			if (!status) return;
			try {
				updateSegment(segment.id, { loading: true }, true);
				const data = await ai.songRecognize(props.files.originVideoPath, segment.start, segment.end);
				if (data.name) {
					updateSegment(segment.id, { name: data.name });
					subtitleStore.setForSegment(segment.id, data.lyrics || "");
					resetSubtitle();
					notice.success({
						title: `歌曲识别成功：${data.name}`,
						duration: 3e3
					});
				} else notice.warning({
					title: `未能识别出歌曲`,
					duration: 3e3
				});
			} finally {
				updateSegment(segment.id, { loading: false }, true);
			}
		};
		/**
		* 字幕识别
		* @param segment 要识别的片段
		*/
		const subtitleRecognizeHandler = async (segment) => {
			if (!props.files.originVideoPath) {
				notice.error({
					title: "请先加载视频文件",
					duration: 1e3
				});
				return;
			}
			let modelId = void 0;
			const config = appConfig.value;
			if ((config?.ai?.models || []).length === 0) {
				notice.error({
					title: "请先在设置中配置AI模型",
					duration: 3e3
				});
				return;
			}
			modelId = config?.ai?.subtitleRecognize?.modelId;
			if (!modelId) {
				notice.error({
					title: "请先在设置中配置字幕识别模型",
					duration: 3e3
				});
				return;
			}
			if (modelId === "bcut" && segment.end - segment.start > 1200) {
				notice.error({
					title: "当前模型不适合识别超过20分钟的片段，请先切割片段",
					duration: 3e3
				});
				return;
			}
			const [status] = await confirm.warning({
				content: `此功能使用AI对片段进行字幕识别。\n\n识别范围：${segment.start.toFixed(2)}s - ${segment.end?.toFixed(2)}s`,
				showCheckbox: true,
				showAgainKey: "videoSubtitleRecognizeWarning"
			});
			if (!status) return;
			try {
				updateSegment(segment.id, { loading: true }, true);
				const data = await ai.subtitleRecognize(props.files.originVideoPath, segment.start, segment.end, modelId, { offset: segment.start });
				subtitleStore.setForSegment(segment.id, data.srt || "");
				resetSubtitle();
				if (data.srt) notice.success({
					title: "字幕识别成功",
					duration: 3e3
				});
				else notice.warning({
					title: "未能识别出字幕",
					duration: 3e3
				});
			} catch (error) {
				notice.error({
					title: "字幕识别失败",
					content: error.message || error.error || "未知错误",
					duration: 5e3
				});
			} finally {
				updateSegment(segment.id, { loading: false }, true);
			}
		};
		/**
		* 歌词识别
		* @param segment 要识别的片段
		*/
		const lyricRecognizeHandler = async (segment) => {
			if (!props.files.originVideoPath) {
				notice.error({
					title: "请先加载视频文件",
					duration: 1e3
				});
				return;
			}
			let modelId = void 0;
			const config = appConfig.value;
			if ((config?.ai?.models || []).length === 0) {
				notice.error({
					title: "请先在设置中配置AI模型",
					duration: 3e3
				});
				return;
			}
			modelId = config?.ai?.songRecognizeAsr?.modelId;
			if (!modelId) {
				notice.error({
					title: "请先在设置中配置歌词识别模型",
					duration: 3e3
				});
				return;
			}
			if (modelId === "bcut" && segment.end - segment.start > 1200) {
				notice.error({
					title: "当前模型不适合识别超过20分钟的片段，请先切割片段",
					duration: 3e3
				});
				return;
			}
			const [status] = await confirm.warning({
				content: `正在使用配置的AI模型对片段进行歌词识别。\n\n识别范围：${segment.start.toFixed(2)}s - ${segment.end?.toFixed(2)}s`,
				showCheckbox: true,
				showAgainKey: "videoLyricRecognizeWarning"
			});
			if (!status) return;
			try {
				updateSegment(segment.id, { loading: true }, true);
				const data = await ai.subtitleRecognize(props.files.originVideoPath, segment.start, segment.end, modelId, {
					offset: segment.start,
					song: true
				});
				subtitleStore.setForSegment(segment.id, data.srt || "");
				resetSubtitle();
				if (data.srt) notice.success({
					title: "歌词识别成功",
					duration: 3e3
				});
				else notice.warning({
					title: "未能识别出歌词",
					duration: 3e3
				});
			} catch (error) {
				notice.error({
					title: "歌词识别失败",
					content: error.message || error.error || "未知错误",
					duration: 5e3
				});
			} finally {
				updateSegment(segment.id, { loading: false }, true);
			}
		};
		const themeStore = useThemeStore();
		const showContextMenu = (e, segment) => {
			const osTheme = themeStore.theme === "dark" ? "default dark" : "default";
			Qe.showContextMenu({
				theme: osTheme,
				x: e.x,
				y: e.y,
				items: [
					{
						label: "播放",
						onClick: () => {
							if (videoInstance.value) {
								videoInstance.value.seek = segment.start;
								videoInstance.value.play();
							}
						},
						icon: renderIcon(PlayCircleOutline_default)
					},
					{
						label: "编辑",
						onClick: () => {
							editCut(segment.id);
						},
						icon: renderIcon(Pencil_default)
					},
					{
						label: "删除",
						onClick: () => {
							deleteCut(segment.id);
						},
						icon: renderIcon(Delete24Regular_default)
					},
					{
						label: "切换状态",
						icon: renderIcon(ToggleLeft24Regular_default),
						onClick: () => {
							toggleChecked(segment.id);
						}
					},
					{
						label: "切割",
						icon: renderIcon(Cut20Regular_default),
						onClick: () => {
							splitSegment(segment);
						}
					},
					{
						label: "向前合并",
						onClick: () => {
							handleMergeForward(segment);
						}
					},
					{
						label: "向后合并",
						onClick: () => {
							handleMergeBackward(segment);
						}
					},
					{
						label: "字幕",
						icon: renderIcon(SubtitlesOutlined_default),
						children: [
							{
								label: "歌曲识别",
								icon: renderIcon(MusicNote220Regular_default),
								onClick: async () => {
									songRecognize(segment);
								}
							},
							{
								label: "歌词识别",
								onClick: async () => {
									lyricRecognizeHandler(segment);
								}
							},
							{
								label: "字幕识别",
								icon: renderIcon(SubtitlesOutlined_default),
								onClick: async () => {
									subtitleRecognizeHandler(segment);
								}
							}
						]
					},
					{
						label: "导出",
						onClick: () => {
							emits("export-upload", segment);
						}
					}
				]
			});
		};
		return (_ctx, _cache) => {
			const _component_Tip = Tip_default;
			const _component_n_spin = Spin_default;
			const _component_n_input = Input_default;
			const _component_n_button = Button;
			const _component_n_modal = Modal_default;
			return openBlock(), createElementBlock(Fragment, null, [
				createBaseVNode("div", _hoisted_1$6, [createBaseVNode("div", _hoisted_2$5, [
					createVNode(unref(NIcon), {
						size: "20",
						class: "pointer icon",
						title: "在当前时间开始当前片段(I)",
						style: { "padding": "2px" },
						onClick: setStartTime
					}, {
						default: withCtx(() => _cache[5] || (_cache[5] = [createBaseVNode("svg", {
							stroke: "currentColor",
							fill: "currentColor",
							"stroke-width": "0",
							viewBox: "0 0 384 512",
							role: "button",
							xmlns: "http://www.w3.org/2000/svg"
						}, [createBaseVNode("path", { d: "M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z" })], -1)])),
						_: 1
					}),
					createVNode(unref(NIcon), {
						size: "24",
						class: "pointer icon cut-add-segment",
						title: "添加片段",
						onClick: addCut
					}, {
						default: withCtx(() => [createVNode(unref(PlusOutlined_default))]),
						_: 1
					}),
					createVNode(unref(NIcon), {
						size: "24",
						class: "pointer icon",
						title: "删除片段(del)",
						onClick: _cache[0] || (_cache[0] = ($event) => deleteCut())
					}, {
						default: withCtx(() => [createVNode(unref(MinusOutlined_default))]),
						_: 1
					}),
					createVNode(unref(NIcon), {
						size: "20",
						class: "pointer icon cut-set-end",
						title: "在当前时间结束当前片段(O)",
						style: { "padding": "2px" },
						onClick: setEndTime
					}, {
						default: withCtx(() => [(openBlock(), createElementBlock("svg", _hoisted_3$4, _cache[6] || (_cache[6] = [createBaseVNode("path", { d: "M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z" }, null, -1)])))]),
						_: 1
					}),
					createVNode(_component_Tip, { class: "cut-search-danmu" }, {
						default: withCtx(() => _cache[7] || (_cache[7] = [createBaseVNode("ul", null, [
							createBaseVNode("li", null, "I 在当前时间开始当前片段"),
							createBaseVNode("li", null, "O 在当前时间结束当前片段"),
							createBaseVNode("li", null, "F2 重命名"),
							createBaseVNode("li", null, "up 上一个片段"),
							createBaseVNode("li", null, "down 下一个片段"),
							createBaseVNode("li", null, "del 删除片段"),
							createBaseVNode("li", null, "ctrl+n 新建片段"),
							createBaseVNode("li", null, "space 播放/暂停"),
							createBaseVNode("li", null, "ctrl+left 后退1秒"),
							createBaseVNode("li", null, "ctrl+right 前进1秒"),
							createBaseVNode("li", null, "ctrl+s 保存到项目"),
							createBaseVNode("li", null, "ctrl+shift+s 另存为项目"),
							createBaseVNode("li", null, "ctrl+enter 导出"),
							createBaseVNode("li", null, "ctrl+z 撤销"),
							createBaseVNode("li", null, "ctrl+shift+z 重做"),
							createBaseVNode("li", null, "ctrl+k 切换弹幕搜索"),
							createBaseVNode("li", null, "j 减速"),
							createBaseVNode("li", null, "k 暂停"),
							createBaseVNode("li", null, "l 加速")
						], -1)])),
						_: 1
					})
				]), createBaseVNode("div", _hoisted_4$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(cuts), (cut) => {
					return openBlock(), createElementBlock("div", {
						key: cut.id,
						class: normalizeClass(["cut", {
							checked: cut.checked,
							selected: unref(selectCutId) === cut.id
						}]),
						role: "button",
						style: normalizeStyle({ "--active-border-color": unref(generateDistinctColor)(cut.index, true) }),
						onClick: ($event) => handleSelectCut(cut.id),
						onDblclick: ($event) => navVideo(cut.start),
						onContextmenu: withModifiers(($event) => showContextMenu($event, cut), ["prevent"])
					}, [
						createBaseVNode("div", _hoisted_6$2, [createTextVNode(toDisplayString(unref(secondsToTimemark)(cut.start)) + "-", 1), createBaseVNode("span", null, toDisplayString(unref(secondsToTimemark)(cut.end)), 1)]),
						createBaseVNode("div", _hoisted_7$1, toDisplayString(cut.name), 1),
						cut.end ? (openBlock(), createElementBlock("div", _hoisted_8$1, " 持续时间：" + toDisplayString(unref(secondsToTimemark)(cut.end - cut.start)), 1)) : createCommentVNode("", true),
						createBaseVNode("div", _hoisted_9$1, [cut.checked ? (openBlock(), createBlock(unref(NIcon), {
							key: 0,
							size: "20",
							depth: 3,
							onClick: withModifiers(($event) => toggleChecked(cut.id), ["stop"])
						}, {
							default: withCtx(() => [createVNode(unref(CheckmarkCircleOutline_default))]),
							_: 2
						}, 1032, ["onClick"])) : (openBlock(), createBlock(unref(NIcon), {
							key: 1,
							size: "20",
							depth: 3,
							onClick: withModifiers(($event) => toggleChecked(cut.id), ["stop"])
						}, {
							default: withCtx(() => [createVNode(unref(RadioButtonOffSharp_default))]),
							_: 2
						}, 1032, ["onClick"]))]),
						createBaseVNode("div", _hoisted_10$1, [createVNode(unref(NIcon), {
							size: "20",
							depth: 3,
							onClick: withModifiers(($event) => editCut(cut.id), ["stop"])
						}, {
							default: withCtx(() => [createVNode(unref(Pencil_default))]),
							_: 2
						}, 1032, ["onClick"])]),
						cut.loading ? (openBlock(), createBlock(_component_n_spin, {
							key: 1,
							size: 18,
							class: "loading",
							style: { "--n-size": "18px" }
						})) : createCommentVNode("", true)
					], 46, _hoisted_5$3);
				}), 128))])]),
				createVNode(_component_n_modal, {
					show: unref(cutEditVisible),
					"onUpdate:show": _cache[3] || (_cache[3] = ($event) => isRef(cutEditVisible) ? cutEditVisible.value = $event : null),
					preset: "dialog",
					title: "编辑片段名称",
					"show-icon": false,
					closable: false,
					"auto-focus": ""
				}, {
					action: withCtx(() => [createVNode(_component_n_button, { onClick: _cache[2] || (_cache[2] = ($event) => cutEditVisible.value = false) }, {
						default: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode("取消")])),
						_: 1
					}), createVNode(_component_n_button, {
						type: "primary",
						onClick: confirmEditCutName
					}, {
						default: withCtx(() => _cache[9] || (_cache[9] = [createTextVNode("确定")])),
						_: 1
					})]),
					default: withCtx(() => [createVNode(_component_n_input, {
						value: unref(tempCutName),
						"onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(tempCutName) ? tempCutName.value = $event : null),
						placeholder: "请输入片段名称",
						onKeydown: withKeys(confirmEditCutName, ["enter"])
					}, null, 8, ["value"])]),
					_: 1
				}, 8, ["show"]),
				createVNode(SearchPopover_default, {
					visible: unref(searchDanmuVisible),
					"onUpdate:visible": _cache[4] || (_cache[4] = ($event) => isRef(searchDanmuVisible) ? searchDanmuVisible.value = $event : null),
					file: props.files.originDanmuPath,
					"danma-list": props.danmaList,
					danmaSearchMask: props.danmaSearchMask,
					onAddSegment: addCut,
					onSetLocation: navVideo
				}, {
					default: withCtx(() => [createBaseVNode("span", {
						size: "30",
						class: "pointer icon cut-search-danmu",
						title: "搜索弹幕，可拖动(ctrl+k)",
						style: normalizeStyle([{
							"position": "fixed",
							"display": "inline-block",
							"width": "30px",
							"height": "30px",
							"z-index": "10"
						}, unref(style)]),
						ref_key: "el",
						ref: el,
						onClick: searchDanmu
					}, [createVNode(unref(Search_default))], 4)]),
					_: 1
				}, 8, [
					"visible",
					"file",
					"danma-list",
					"danmaSearchMask"
				])
			], 64);
		};
	}
}), [["__scopeId", "data-v-81bb77a1"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/VideoPlayer.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_runtime_dom_esm_bundler();
init_reactivity_esm_bundler();
var _hoisted_1$5 = { class: "video-section" };
var _hoisted_2$4 = { class: "video cut-video" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/VideoPlayer.vue
var VideoPlayer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "VideoPlayer",
	props: {
		videoPath: {
			type: String,
			default: null
		},
		heatmapOptions: {
			type: Object,
			required: true
		},
		supportedExtensions: {
			type: Array,
			default: () => [
				"llc",
				"flv",
				"mp4",
				"m4s",
				"ts",
				"mkv"
			]
		}
	},
	emits: [
		"ready",
		"durationChange",
		"canPlay",
		"filesDropped"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const videoRef = ref(null);
		const fileList = ref([]);
		const handleReady = (instance) => {
			emit("ready", instance);
		};
		const handleDurationChange = (duration) => {
			emit("durationChange", duration);
		};
		const handleCanPlay = () => {
			emit("canPlay");
		};
		const clearFiles = () => {
			fileList.value = [];
		};
		__expose({
			videoRef,
			switchUrl: (url, type) => videoRef.value?.switchUrl(url, type),
			switchAss: (content) => videoRef.value?.switchAss(content),
			clearFiles
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$5, [withDirectives(createBaseVNode("div", _hoisted_2$4, [withDirectives(createVNode(Index_default$1, {
				ref_key: "videoRef",
				ref: videoRef,
				option: {
					fullscreen: true,
					plugins: {
						heatmap: { option: __props.heatmapOptions },
						timestamp: { timestamp: 0 }
					}
				},
				plugins: [
					"ass",
					"heatmap",
					"timestamp",
					"subtitle",
					"chapter"
				],
				onReady: handleReady,
				"onVideo:durationchange": handleDurationChange,
				"onVideo:canplay": handleCanPlay
			}, null, 8, ["option"]), [[vShow, __props.videoPath]])], 512), [[vShow, __props.videoPath]]), withDirectives(createVNode(FileArea_default, {
				modelValue: fileList.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => fileList.value = $event),
				style: { height: "100%" },
				class: "video empty cut-file-area",
				extensions: __props.supportedExtensions,
				max: 1,
				onChange: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("filesDropped", $event))
			}, {
				desc: withCtx(() => _cache[2] || (_cache[2] = [
					createTextVNode(" 请导入视频或"),
					createBaseVNode("a", {
						href: "https://github.com/mifi/lossless-cut",
						target: "_blank"
					}, "lossless-cut", -1),
					createTextVNode("项目文件，如果你不会使用，请先"),
					createBaseVNode("span", { title: "鸽了" }, "查看教程，如果视频无法播放，请尝试转封装为mp4", -1)
				])),
				_: 1
			}, 8, ["modelValue", "extensions"]), [[vShow, !__props.videoPath]])]);
		};
	}
}), [["__scopeId", "data-v-e0f5b0a2"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/WaveformPanel.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$4 = { class: "config-section" };
var _hoisted_2$3 = { class: "waveform-container" };
var _hoisted_3$3 = {
	key: 0,
	class: "waveform-loading"
};
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/WaveformPanel.vue
var WaveformPanel_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "WaveformPanel",
	props: {
		waveformVisible: {
			type: Boolean,
			required: true
		},
		waveformLoading: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:waveformVisible"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const waveformVisible = computed({
			get: () => props.waveformVisible,
			set: (val) => emit("update:waveformVisible", val)
		});
		return (_ctx, _cache) => {
			const _component_n_spin = Spin_default;
			return openBlock(), createElementBlock("div", _hoisted_1$4, [withDirectives(createBaseVNode("div", _hoisted_2$3, [__props.waveformLoading ? (openBlock(), createElementBlock("div", _hoisted_3$3, [createVNode(_component_n_spin, { size: "small" }), _cache[0] || (_cache[0] = createBaseVNode("span", null, "波形图加载中...，请不要切换到其他页面", -1))])) : createCommentVNode("", true), _cache[1] || (_cache[1] = createBaseVNode("div", { id: "waveform" }, null, -1))], 512), [[vShow, unref(waveformVisible)]])]);
		};
	}
}), [["__scopeId", "data-v-f5211e4b"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/WaveformAnalyzerDialog.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$3 = { style: { "width": "100%" } };
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/WaveformAnalyzerDialog.vue
var WaveformAnalyzerDialog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "WaveformAnalyzerDialog",
	props: /*@__PURE__*/ mergeModels({
		modelValue: {},
		filePath: {}
	}, {
		"visible": {
			type: Boolean,
			default: false
		},
		"visibleModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels([
		"update:modelValue",
		"confirm",
		"cancel"
	], ["update:visible"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const notice = useNotice();
		const visible = useModel(__props, "visible");
		const defaultConfig = {
			energyPercentile: 50,
			minSegmentDuration: 20,
			maxGapDuration: 20,
			smoothWindowSize: 4,
			disableCache: false
		};
		const formValue = ref({ ...props.modelValue });
		watch(() => props.modelValue, (newValue) => {
			formValue.value = { ...newValue };
		}, { deep: true });
		const loading = ref(false);
		const progress = ref({
			percentage: 0,
			message: "准备开始...",
			stage: ""
		});
		let eventSource = null;
		const handleConfirm = async () => {
			if (!props.filePath) {
				notice.error({
					title: "文件路径无效，无法分析",
					duration: 1e4
				});
				return;
			}
			loading.value = true;
			progress.value = {
				percentage: 0,
				message: "准备开始分析...",
				stage: ""
			};
			try {
				eventSource = await task.analyzerWaveform(props.filePath, formValue.value);
				console.log("SSE 连接已建立", eventSource);
				eventSource.onmessage = (event) => {
					try {
						const data = JSON.parse(event.data);
						if (data.type === "progress") progress.value = {
							percentage: data.percentage,
							message: data.message,
							stage: data.stage
						};
						else if (data.type === "complete") {
							loading.value = false;
							eventSource?.close();
							eventSource = null;
							emit("update:modelValue", { ...formValue.value });
							emit("confirm", data.data);
							visible.value = false;
							notice.success({
								title: "分析完成",
								duration: 2e3
							});
						} else if (data.type === "error") {
							loading.value = false;
							eventSource?.close();
							eventSource = null;
							notice.error({
								title: "分析失败",
								content: data.message,
								duration: 3e3
							});
						}
					} catch (e) {
						console.error("解析 SSE 数据失败:", e);
					}
				};
				eventSource.onerror = (error) => {
					console.error("SSE 连接错误:", error);
					loading.value = false;
					eventSource?.close();
					eventSource = null;
					notice.error({
						title: "连接失败",
						content: "服务器连接中断，请重试",
						duration: 3e3
					});
				};
			} catch (e) {
				loading.value = false;
				notice.error({
					title: "启动分析失败",
					content: e instanceof Error ? e.message : "未知错误",
					duration: 3e3
				});
			}
		};
		const handleCancel = () => {
			if (eventSource) {
				eventSource.close();
				eventSource = null;
			}
			loading.value = false;
			formValue.value = { ...props.modelValue };
			emit("cancel");
			visible.value = false;
		};
		const handleReset = () => {
			formValue.value = { ...defaultConfig };
		};
		const handleClose = () => {
			if (eventSource) {
				eventSource.close();
				eventSource = null;
			}
			loading.value = false;
			formValue.value = { ...props.modelValue };
		};
		return (_ctx, _cache) => {
			const _component_n_input_number = InputNumber_default;
			const _component_n_text = text_default;
			const _component_n_form_item = FormItem_default;
			const _component_n_checkbox = Checkbox_default;
			const _component_n_progress = Progress_default;
			const _component_n_form = Form_default;
			const _component_n_button = Button;
			const _component_n_space = Space_default;
			const _component_n_modal = Modal_default;
			return openBlock(), createBlock(_component_n_modal, {
				show: visible.value,
				"onUpdate:show": _cache[5] || (_cache[5] = ($event) => visible.value = $event),
				preset: "dialog",
				"show-icon": false,
				style: { "width": "520px" },
				"on-after-leave": handleClose
			}, {
				action: withCtx(() => [createVNode(_component_n_space, { justify: "end" }, {
					default: withCtx(() => [
						createVNode(_component_n_button, { onClick: handleReset }, {
							default: withCtx(() => _cache[15] || (_cache[15] = [createTextVNode("重置默认值")])),
							_: 1
						}),
						createVNode(_component_n_button, { onClick: handleCancel }, {
							default: withCtx(() => _cache[16] || (_cache[16] = [createTextVNode("取消")])),
							_: 1
						}),
						createVNode(_component_n_button, {
							type: "primary",
							onClick: handleConfirm,
							loading: unref(loading)
						}, {
							default: withCtx(() => _cache[17] || (_cache[17] = [createTextVNode("确定")])),
							_: 1
						}, 8, ["loading"])
					]),
					_: 1
				})]),
				default: withCtx(() => [_cache[18] || (_cache[18] = createBaseVNode("p", { style: {
					"padding-top": "16px",
					"color": "skyblue"
				} }, " 此项功能用来快速对长视频中的翻唱音乐片段进行识别，分段后你也可以在片段中右键识别歌曲名称，调整参数可以更加精准地切割，第一次使用建议先尝试默认值，尝试后再进行调整，确认后会清空当前片段。 ", -1)), createVNode(_component_n_form, {
					ref: "formRef",
					model: unref(formValue),
					"label-placement": "left",
					"label-width": "auto",
					"require-mark-placement": "right-hanging"
				}, {
					default: withCtx(() => [
						createVNode(_component_n_form_item, {
							label: "能量百分位阈值",
							path: "energyPercentile"
						}, {
							default: withCtx(() => [createVNode(_component_n_input_number, {
								value: unref(formValue).energyPercentile,
								"onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(formValue).energyPercentile = $event),
								min: 0,
								max: 100,
								step: 1,
								placeholder: "能量百分位阈值"
							}, {
								suffix: withCtx(() => _cache[6] || (_cache[6] = [createTextVNode("%")])),
								_: 1
							}, 8, ["value"]), createVNode(_component_n_text, {
								depth: "3",
								style: {
									"margin-left": "8px",
									"font-size": "12px"
								}
							}, {
								default: withCtx(() => _cache[7] || (_cache[7] = [createTextVNode(" 值越高要求越严格 ")])),
								_: 1
							})]),
							_: 1
						}),
						createVNode(_component_n_form_item, {
							label: "最小片段时长",
							path: "minSegmentDuration"
						}, {
							default: withCtx(() => [createVNode(_component_n_input_number, {
								value: unref(formValue).minSegmentDuration,
								"onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(formValue).minSegmentDuration = $event),
								min: 1,
								max: 3e3,
								step: 1,
								placeholder: "最小片段时长"
							}, {
								suffix: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode("秒")])),
								_: 1
							}, 8, ["value"]), createVNode(_component_n_text, {
								depth: "3",
								style: {
									"margin-left": "8px",
									"font-size": "12px"
								}
							}, {
								default: withCtx(() => _cache[9] || (_cache[9] = [createTextVNode(" 过滤掉短于此时长的片段 ")])),
								_: 1
							})]),
							_: 1
						}),
						createVNode(_component_n_form_item, {
							label: "最大间隔时长",
							path: "maxGapDuration"
						}, {
							default: withCtx(() => [createVNode(_component_n_input_number, {
								value: unref(formValue).maxGapDuration,
								"onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(formValue).maxGapDuration = $event),
								min: 0,
								max: 1200,
								step: 1,
								placeholder: "最大间隔时长"
							}, {
								suffix: withCtx(() => _cache[10] || (_cache[10] = [createTextVNode("秒")])),
								_: 1
							}, 8, ["value"]), createVNode(_component_n_text, {
								depth: "3",
								style: {
									"margin-left": "8px",
									"font-size": "12px"
								}
							}, {
								default: withCtx(() => _cache[11] || (_cache[11] = [createTextVNode(" 短于此时长的间隔会被合并 ")])),
								_: 1
							})]),
							_: 1
						}),
						createVNode(_component_n_form_item, {
							label: "平滑窗口大小",
							path: "smoothWindowSize"
						}, {
							default: withCtx(() => [createVNode(_component_n_input_number, {
								value: unref(formValue).smoothWindowSize,
								"onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(formValue).smoothWindowSize = $event),
								min: 1,
								max: 20,
								step: 1,
								placeholder: "平滑窗口大小"
							}, {
								suffix: withCtx(() => _cache[12] || (_cache[12] = [createTextVNode("秒")])),
								_: 1
							}, 8, ["value"]), createVNode(_component_n_text, {
								depth: "3",
								style: {
									"margin-left": "8px",
									"font-size": "12px"
								}
							}, {
								default: withCtx(() => _cache[13] || (_cache[13] = [createTextVNode(" 用于平滑能量曲线，减少噪声影响 ")])),
								_: 1
							})]),
							_: 1
						}),
						createVNode(_component_n_form_item, {
							label: "不保留缓存",
							path: "disableCache"
						}, {
							default: withCtx(() => [createVNode(_component_n_checkbox, {
								checked: unref(formValue).disableCache,
								"onUpdate:checked": _cache[4] || (_cache[4] = ($event) => unref(formValue).disableCache = $event)
							}, null, 8, ["checked"]), createVNode(_component_n_text, {
								depth: "3",
								style: {
									"margin-left": "8px",
									"font-size": "12px"
								}
							}, {
								default: withCtx(() => _cache[14] || (_cache[14] = [createTextVNode(" 分析完成后删除缓存文件，下次需要重新提取音频 ")])),
								_: 1
							})]),
							_: 1
						}),
						unref(loading) ? (openBlock(), createBlock(_component_n_form_item, { key: 0 }, {
							default: withCtx(() => [createBaseVNode("div", _hoisted_1$3, [createVNode(_component_n_progress, {
								type: "line",
								percentage: unref(progress).percentage,
								status: unref(progress).percentage === 100 ? "success" : "default",
								"show-indicator": true
							}, null, 8, ["percentage", "status"]), createVNode(_component_n_text, {
								depth: "3",
								style: {
									"margin-top": "8px",
									"font-size": "12px",
									"display": "block"
								}
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(progress).message), 1)]),
								_: 1
							})])]),
							_: 1
						})) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, ["model"])]),
				_: 1
			}, 8, ["show"]);
		};
	}
}), [["__scopeId", "data-v-9d8dd9dd"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/SegmentConfigView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler();
var _hoisted_1$2 = { class: "config-view" };
var _hoisted_2$2 = { class: "config-item" };
var _hoisted_3$2 = { class: "config-item" };
var _hoisted_4$2 = { class: "config-item" };
var _hoisted_5$2 = { class: "config-item" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/SegmentConfigView.vue
var SegmentConfigView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SegmentConfigView",
	props: {
		clientOptions: {
			type: Object,
			required: true
		},
		hotProgressVisible: {
			type: Boolean,
			required: true
		},
		showVideoTime: {
			type: Boolean,
			required: true
		},
		danmaSearchMask: {
			type: Boolean,
			required: true
		},
		waveformVisible: {
			type: Boolean,
			required: true
		}
	},
	emits: [
		"update:hotProgressVisible",
		"update:showVideoTime",
		"update:danmaSearchMask",
		"update:waveformVisible"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const hotProgressVisible = computed({
			get: () => props.hotProgressVisible,
			set: (val) => emit("update:hotProgressVisible", val)
		});
		const showVideoTime = computed({
			get: () => props.showVideoTime,
			set: (val) => emit("update:showVideoTime", val)
		});
		const danmaSearchMask = computed({
			get: () => props.danmaSearchMask,
			set: (val) => emit("update:danmaSearchMask", val)
		});
		const waveformVisible = computed({
			get: () => props.waveformVisible,
			set: (val) => emit("update:waveformVisible", val)
		});
		return (_ctx, _cache) => {
			const _component_n_checkbox = Checkbox_default;
			const _component_n_input_number = InputNumber_default;
			const _component_n_color_picker = ColorPicker_default;
			return openBlock(), createElementBlock("div", _hoisted_1$2, [
				createVNode(_component_n_checkbox, {
					checked: unref(hotProgressVisible),
					"onUpdate:checked": _cache[0] || (_cache[0] = ($event) => isRef(hotProgressVisible) ? hotProgressVisible.value = $event : null)
				}, {
					default: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode("高能进度条")])),
					_: 1
				}, 8, ["checked"]),
				unref(hotProgressVisible) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					createBaseVNode("div", _hoisted_2$2, [_cache[10] || (_cache[10] = createBaseVNode("span", null, "采样间隔：", -1)), createVNode(_component_n_input_number, {
						value: __props.clientOptions.sampling,
						"onUpdate:value": _cache[1] || (_cache[1] = ($event) => __props.clientOptions.sampling = $event),
						placeholder: "单位秒",
						min: "1",
						style: { "width": "120px" }
					}, {
						suffix: withCtx(() => _cache[9] || (_cache[9] = [createTextVNode(" 秒 ")])),
						_: 1
					}, 8, ["value"])]),
					createBaseVNode("div", _hoisted_3$2, [_cache[12] || (_cache[12] = createBaseVNode("span", null, "高度：", -1)), createVNode(_component_n_input_number, {
						value: __props.clientOptions.height,
						"onUpdate:value": _cache[2] || (_cache[2] = ($event) => __props.clientOptions.height = $event),
						placeholder: "单位像素",
						min: "10",
						style: { "width": "120px" }
					}, {
						suffix: withCtx(() => _cache[11] || (_cache[11] = [createTextVNode(" 像素 ")])),
						_: 1
					}, 8, ["value"])]),
					createBaseVNode("div", _hoisted_4$2, [_cache[13] || (_cache[13] = createBaseVNode("span", null, "默认颜色：", -1)), createVNode(_component_n_color_picker, {
						value: __props.clientOptions.color,
						"onUpdate:value": _cache[3] || (_cache[3] = ($event) => __props.clientOptions.color = $event)
					}, null, 8, ["value"])]),
					createBaseVNode("div", _hoisted_5$2, [_cache[14] || (_cache[14] = createBaseVNode("span", null, "覆盖颜色：", -1)), createVNode(_component_n_color_picker, {
						value: __props.clientOptions.fillColor,
						"onUpdate:value": _cache[4] || (_cache[4] = ($event) => __props.clientOptions.fillColor = $event)
					}, null, 8, ["value"])])
				], 64)) : createCommentVNode("", true),
				createVNode(_component_n_checkbox, {
					checked: unref(showVideoTime),
					"onUpdate:checked": _cache[5] || (_cache[5] = ($event) => isRef(showVideoTime) ? showVideoTime.value = $event : null),
					title: "仅供参考，得加载弹幕才成"
				}, {
					default: withCtx(() => _cache[15] || (_cache[15] = [createTextVNode("显示时间戳")])),
					_: 1
				}, 8, ["checked"]),
				createVNode(_component_n_checkbox, {
					checked: unref(danmaSearchMask),
					"onUpdate:checked": _cache[6] || (_cache[6] = ($event) => isRef(danmaSearchMask) ? danmaSearchMask.value = $event : null)
				}, {
					default: withCtx(() => _cache[16] || (_cache[16] = [createTextVNode("弹幕搜索栏遮罩")])),
					_: 1
				}, 8, ["checked"]),
				createVNode(_component_n_checkbox, {
					checked: unref(waveformVisible),
					"onUpdate:checked": _cache[7] || (_cache[7] = ($event) => isRef(waveformVisible) ? waveformVisible.value = $event : null)
				}, {
					default: withCtx(() => _cache[17] || (_cache[17] = [createTextVNode("波形图")])),
					_: 1
				}, 8, ["checked"])
			]);
		};
	}
}), [["__scopeId", "data-v-da1735d5"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/SubtitleView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler();
var _hoisted_1$1 = { class: "subtitle-view" };
var _hoisted_2$1 = { class: "subtitle-header" };
var _hoisted_3$1 = { class: "subtitle-content" };
var _hoisted_4$1 = {
	key: 0,
	class: "empty-state"
};
var _hoisted_5$1 = {
	key: 1,
	class: "empty-state"
};
var _hoisted_6$1 = {
	key: 2,
	class: "node-list"
};
var _hoisted_7 = { class: "node-body" };
var _hoisted_8 = { class: "node-text" };
var _hoisted_9 = { class: "node-right" };
var _hoisted_10 = { class: "node-times" };
var _hoisted_11 = {
	key: 0,
	class: "subtitle-footer"
};
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/components/SubtitleView.vue
var SubtitleView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SubtitleView",
	setup(__props) {
		const videoInstance = inject("videoInstance");
		const segmentStore = useSegmentStore();
		const { cuts } = storeToRefs(segmentStore);
		const subtitleStore = useSubtitles();
		const selectedSegmentId = ref(null);
		const segmentOptions = computed(() => [{
			label: "全局字幕",
			value: "__global__"
		}, ...cuts.value.map((seg) => ({
			label: `${seg.name}（${secondsToTimemark(seg.start)} - ${secondsToTimemark(seg.end ?? 0)}）`,
			value: seg.id
		}))]);
		const parser = new Parser();
		const nodes = ref([]);
		watch(selectedSegmentId, (id) => {
			if (!id) {
				nodes.value = [];
				return;
			}
			loadNodes(id);
		}, { immediate: true });
		let isFlushing = false;
		watch(() => subtitleStore.items.map((i) => i.id + i.content).join("|"), () => {
			if (isFlushing) return;
			if (selectedSegmentId.value) loadNodes(selectedSegmentId.value);
		});
		function loadNodes(segmentId) {
			if (segmentId === "__global__") {
				const globalSubtitles = subtitleStore.getGlobal();
				if (globalSubtitles.length === 0) {
					nodes.value = [];
					return;
				}
				try {
					nodes.value = parser.fromSrt(globalSubtitles[0].content);
				} catch {
					nodes.value = [];
				}
				console.log("Loaded global nodes:", nodes.value);
				return;
			}
			const subtitles = subtitleStore.getBySourceId(segmentId);
			if (subtitles.length === 0) {
				nodes.value = [];
				return;
			}
			try {
				nodes.value = parser.fromSrt(subtitles[0].content);
			} catch {
				nodes.value = [];
			}
			console.log("Loaded nodes:", nodes.value);
		}
		let isDirty = false;
		function updateNodeField(idx, field, value) {
			isDirty = true;
			nodes.value[idx][field] = value;
		}
		function deleteNode(idx) {
			nodes.value.splice(idx, 1);
			flushToStore();
		}
		function getNodeActions(idx) {
			return [
				{
					label: "之前插入行",
					key: "insert-before"
				},
				{
					label: "之后插入行",
					key: "insert-after"
				},
				{
					type: "divider",
					key: "insert-divider"
				},
				{
					label: "与前行合并",
					key: "merge-previous",
					disabled: idx === 0
				},
				{
					label: "与后行合并",
					key: "merge-next",
					disabled: idx === nodes.value.length - 1
				},
				{
					type: "divider",
					key: "delete-divider"
				},
				{
					label: "删除",
					key: "delete",
					props: { style: "color: var(--n-error-color)" }
				}
			];
		}
		function handleNodeAction(key, idx) {
			switch (key) {
				case "insert-before":
					insertNode(idx, "before");
					break;
				case "insert-after":
					insertNode(idx, "after");
					break;
				case "merge-previous":
					mergeNode(idx, "previous");
					break;
				case "merge-next":
					mergeNode(idx, "next");
					break;
				case "delete": deleteNode(idx);
			}
		}
		function insertNode(idx, position) {
			const node = nodes.value[idx];
			const start = parseTimeToSeconds(node.startTime);
			const end = parseTimeToSeconds(node.endTime);
			const middle = (start + end) / 2;
			const newNode = createNode(position === "before" ? start : middle, position === "before" ? middle : end);
			if (position === "before") {
				node.startSeconds = middle;
				node.startTime = formatTime(middle);
				nodes.value.splice(idx, 0, newNode);
			} else {
				node.endSeconds = middle;
				node.endTime = formatTime(middle);
				nodes.value.splice(idx + 1, 0, newNode);
			}
			flushToStore();
		}
		function mergeNode(idx, direction) {
			const targetIdx = direction === "previous" ? idx - 1 : idx + 1;
			const target = nodes.value[targetIdx];
			const node = nodes.value[idx];
			if (!target) return;
			if (direction === "previous") {
				target.endSeconds = parseTimeToSeconds(node.endTime);
				target.endTime = node.endTime;
				target.text = [target.text, node.text].filter(Boolean).join("\n");
				nodes.value.splice(idx, 1);
			} else {
				node.endSeconds = parseTimeToSeconds(target.endTime);
				node.endTime = target.endTime;
				node.text = [node.text, target.text].filter(Boolean).join("\n");
				nodes.value.splice(targetIdx, 1);
			}
			flushToStore();
		}
		function createNode(start, end) {
			return {
				id: String(nodes.value.length + 1),
				startTime: formatTime(start),
				startSeconds: start,
				endTime: formatTime(end),
				endSeconds: end,
				text: ""
			};
		}
		function addNode() {
			const start = videoInstance.value.currentTime ?? 0;
			const newNode = createNode(start, start + 4);
			nodes.value.push(newNode);
			flushToStore();
		}
		const handleBlur = () => {
			if (!isDirty) return;
			isDirty = false;
			flushToStore();
		};
		/** 将当前 nodes 写回 subtitleStore */
		function flushToStore() {
			if (!selectedSegmentId.value) return;
			const validNodes = nodes.value.map((n) => ({
				...n,
				startSeconds: parseTimeToSeconds(n.startTime),
				endSeconds: parseTimeToSeconds(n.endTime)
			})).filter((n) => n.startSeconds < n.endSeconds);
			if (validNodes.length === 0) {
				isFlushing = true;
				if (selectedSegmentId.value === "__global__") subtitleStore.setGlobal("");
				else subtitleStore.setForSegment(selectedSegmentId.value, "");
				nextTick(() => {
					isFlushing = false;
				});
				videoInstance.value.artplayerPluginSubtitle.setContent("", "srt");
				return;
			}
			validNodes.forEach((n, i) => {
				n.id = String(i + 1);
			});
			try {
				const srtContent = parser.toSrt(validNodes);
				isFlushing = true;
				if (selectedSegmentId.value === "__global__") subtitleStore.setGlobal(srtContent);
				else subtitleStore.setForSegment(selectedSegmentId.value, srtContent);
				nextTick(() => {
					isFlushing = false;
				});
				const combinedLyrics = segmentStore.getCombinedLyrics();
				videoInstance.value.artplayerPluginSubtitle.setContent(combinedLyrics, "srt");
			} catch (e) {
				isFlushing = false;
				console.error("生成 SRT 失败:", e);
			}
		}
		const seekVideo = (seconds) => {
			videoInstance.value.seek = seconds + .01;
		};
		/** 秒数 → SRT 时间字符串 HH:MM:SS,mmm */
		function formatTime(seconds) {
			const h = Math.floor(seconds / 3600);
			const m = Math.floor(seconds % 3600 / 60);
			const s = Math.floor(seconds % 60);
			const ms = Math.round((seconds - Math.floor(seconds)) * 1e3);
			return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")},${String(ms).padStart(3, "0")}`;
		}
		/** SRT 时间字符串 → 秒数 */
		function parseTimeToSeconds(timeStr) {
			const match = timeStr.match(/(\d+):(\d+):(\d+)[,.](\d+)/);
			if (!match) return 0;
			return parseInt(match[1]) * 3600 + parseInt(match[2]) * 60 + parseInt(match[3]) + parseInt(match[4]) / 1e3;
		}
		return (_ctx, _cache) => {
			const _component_n_select = Select_default;
			const _component_n_empty = Empty_default;
			const _component_n_input = Input_default;
			const _component_n_icon = NIcon;
			const _component_n_button = Button;
			const _component_n_dropdown = Dropdown_default;
			return openBlock(), createElementBlock("div", _hoisted_1$1, [
				createBaseVNode("div", _hoisted_2$1, [createVNode(_component_n_select, {
					value: unref(selectedSegmentId),
					"onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(selectedSegmentId) ? selectedSegmentId.value = $event : null),
					options: unref(segmentOptions),
					placeholder: "请选择片段",
					size: "small",
					clearable: ""
				}, null, 8, ["value", "options"])]),
				createBaseVNode("div", _hoisted_3$1, [!unref(selectedSegmentId) ? (openBlock(), createElementBlock("div", _hoisted_4$1, [createVNode(_component_n_empty, { description: "请先选择一个片段" })])) : unref(nodes).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5$1, [createVNode(_component_n_empty, { description: "当前片段暂无字幕" })])) : (openBlock(), createElementBlock("div", _hoisted_6$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(nodes), (node, idx) => {
					return openBlock(), createElementBlock("div", {
						key: idx,
						class: "node-item"
					}, [createBaseVNode("div", _hoisted_7, [
						createBaseVNode("div", _hoisted_8, [createVNode(_component_n_input, {
							value: node.text,
							class: "text-input",
							"onUpdate:value": (v) => updateNodeField(idx, "text", v),
							onBlur: handleBlur,
							onDblclick: ($event) => seekVideo(node.startSeconds)
						}, null, 8, [
							"value",
							"onUpdate:value",
							"onDblclick"
						])]),
						createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createVNode(_component_n_input, {
							value: node.startTime,
							size: "tiny",
							class: "time-input",
							"onUpdate:value": (v) => updateNodeField(idx, "startTime", v),
							onBlur: handleBlur
						}, null, 8, ["value", "onUpdate:value"]), createVNode(_component_n_input, {
							value: node.endTime,
							size: "tiny",
							class: "time-input",
							"onUpdate:value": (v) => updateNodeField(idx, "endTime", v),
							onBlur: handleBlur
						}, null, 8, ["value", "onUpdate:value"])])]),
						createVNode(_component_n_dropdown, {
							trigger: "click",
							placement: "bottom-end",
							options: getNodeActions(idx),
							onSelect: (key) => handleNodeAction(key, idx)
						}, {
							default: withCtx(() => [createVNode(_component_n_button, {
								text: "",
								size: "small",
								class: "node-handle",
								"aria-label": "字幕行操作"
							}, {
								default: withCtx(() => [createVNode(_component_n_icon, { size: "16" }, {
									default: withCtx(() => [createVNode(unref(EllipsisVertical_default))]),
									_: 1
								})]),
								_: 1
							})]),
							_: 2
						}, 1032, ["options", "onSelect"])
					])]);
				}), 128))]))]),
				unref(selectedSegmentId) ? (openBlock(), createElementBlock("div", _hoisted_11, [createVNode(_component_n_button, {
					size: "small",
					dashed: "",
					block: "",
					onClick: addNode
				}, {
					default: withCtx(() => [createVNode(_component_n_icon, { size: "14" }, {
						default: withCtx(() => [createVNode(unref(AddOutline_default))]),
						_: 1
					}), _cache[1] || (_cache[1] = createTextVNode(" 添加字幕行 "))]),
					_: 1
				})])) : createCommentVNode("", true)
			]);
		};
	}
}), [["__scopeId", "data-v-1eb672ab"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/hooks/index.ts
var import_dist = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(global, factory) {
		typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.JSON5 = factory();
	})(exports, (function() {
		"use strict";
		function createCommonjsModule(fn, module$1) {
			return module$1 = { exports: {} }, fn(module$1, module$1.exports), module$1.exports;
		}
		var _global = createCommonjsModule(function(module$2) {
			var global = module$2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
			if (typeof __g == "number") __g = global;
		});
		var _core = createCommonjsModule(function(module$3) {
			var core = module$3.exports = { version: "2.6.5" };
			if (typeof __e == "number") __e = core;
		});
		_core.version;
		var _isObject = function(it) {
			return typeof it === "object" ? it !== null : typeof it === "function";
		};
		var _anObject = function(it) {
			if (!_isObject(it)) throw TypeError(it + " is not an object!");
			return it;
		};
		var _fails = function(exec) {
			try {
				return !!exec();
			} catch (e) {
				return true;
			}
		};
		var _descriptors = !_fails(function() {
			return Object.defineProperty({}, "a", { get: function() {
				return 7;
			} }).a != 7;
		});
		var document = _global.document;
		var is = _isObject(document) && _isObject(document.createElement);
		var _domCreate = function(it) {
			return is ? document.createElement(it) : {};
		};
		var _ie8DomDefine = !_descriptors && !_fails(function() {
			return Object.defineProperty(_domCreate("div"), "a", { get: function() {
				return 7;
			} }).a != 7;
		});
		var _toPrimitive = function(it, S) {
			if (!_isObject(it)) return it;
			var fn, val;
			if (S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) return val;
			if (typeof (fn = it.valueOf) == "function" && !_isObject(val = fn.call(it))) return val;
			if (!S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) return val;
			throw TypeError("Can't convert object to primitive value");
		};
		var dP = Object.defineProperty;
		var _objectDp = { f: _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
			_anObject(O);
			P = _toPrimitive(P, true);
			_anObject(Attributes);
			if (_ie8DomDefine) try {
				return dP(O, P, Attributes);
			} catch (e) {}
			if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
			if ("value" in Attributes) O[P] = Attributes.value;
			return O;
		} };
		var _propertyDesc = function(bitmap, value) {
			return {
				enumerable: !(bitmap & 1),
				configurable: !(bitmap & 2),
				writable: !(bitmap & 4),
				value
			};
		};
		var _hide = _descriptors ? function(object, key, value) {
			return _objectDp.f(object, key, _propertyDesc(1, value));
		} : function(object, key, value) {
			object[key] = value;
			return object;
		};
		var hasOwnProperty = {}.hasOwnProperty;
		var _has = function(it, key) {
			return hasOwnProperty.call(it, key);
		};
		var id = 0;
		var px = Math.random();
		var _uid = function(key) {
			return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
		};
		var _library = false;
		var _functionToString = createCommonjsModule(function(module$4) {
			var SHARED = "__core-js_shared__";
			var store = _global[SHARED] || (_global[SHARED] = {});
			(module$4.exports = function(key, value) {
				return store[key] || (store[key] = value !== void 0 ? value : {});
			})("versions", []).push({
				version: _core.version,
				mode: _library ? "pure" : "global",
				copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
			});
		})("native-function-to-string", Function.toString);
		var _redefine = createCommonjsModule(function(module$5) {
			var SRC = _uid("src");
			var TO_STRING = "toString";
			var TPL = ("" + _functionToString).split(TO_STRING);
			_core.inspectSource = function(it) {
				return _functionToString.call(it);
			};
			(module$5.exports = function(O, key, val, safe) {
				var isFunction = typeof val == "function";
				if (isFunction) _has(val, "name") || _hide(val, "name", key);
				if (O[key] === val) return;
				if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
				if (O === _global) O[key] = val;
				else if (!safe) {
					delete O[key];
					_hide(O, key, val);
				} else if (O[key]) O[key] = val;
				else _hide(O, key, val);
			})(Function.prototype, TO_STRING, function toString() {
				return typeof this == "function" && this[SRC] || _functionToString.call(this);
			});
		});
		var _aFunction = function(it) {
			if (typeof it != "function") throw TypeError(it + " is not a function!");
			return it;
		};
		var _ctx = function(fn, that, length) {
			_aFunction(fn);
			if (that === void 0) return fn;
			switch (length) {
				case 1: return function(a) {
					return fn.call(that, a);
				};
				case 2: return function(a, b) {
					return fn.call(that, a, b);
				};
				case 3: return function(a, b, c) {
					return fn.call(that, a, b, c);
				};
			}
			return function() {
				return fn.apply(that, arguments);
			};
		};
		var PROTOTYPE = "prototype";
		var $export = function(type, name, source) {
			var IS_FORCED = type & $export.F;
			var IS_GLOBAL = type & $export.G;
			var IS_STATIC = type & $export.S;
			var IS_PROTO = type & $export.P;
			var IS_BIND = type & $export.B;
			var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
			var exports$1 = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
			var expProto = exports$1[PROTOTYPE] || (exports$1[PROTOTYPE] = {});
			var key, own, out, exp;
			if (IS_GLOBAL) source = name;
			for (key in source) {
				own = !IS_FORCED && target && target[key] !== void 0;
				out = (own ? target : source)[key];
				exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == "function" ? _ctx(Function.call, out) : out;
				if (target) _redefine(target, key, out, type & $export.U);
				if (exports$1[key] != out) _hide(exports$1, key, exp);
				if (IS_PROTO && expProto[key] != out) expProto[key] = out;
			}
		};
		_global.core = _core;
		$export.F = 1;
		$export.G = 2;
		$export.S = 4;
		$export.P = 8;
		$export.B = 16;
		$export.W = 32;
		$export.U = 64;
		$export.R = 128;
		var _export = $export;
		var ceil = Math.ceil;
		var floor = Math.floor;
		var _toInteger = function(it) {
			return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};
		var _defined = function(it) {
			if (it == void 0) throw TypeError("Can't call method on  " + it);
			return it;
		};
		var _stringAt = function(TO_STRING) {
			return function(that, pos) {
				var s = String(_defined(that));
				var i = _toInteger(pos);
				var l = s.length;
				var a, b;
				if (i < 0 || i >= l) return TO_STRING ? "" : void 0;
				a = s.charCodeAt(i);
				return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
			};
		};
		var $at = _stringAt(false);
		_export(_export.P, "String", { codePointAt: function codePointAt(pos) {
			return $at(this, pos);
		} });
		_core.String.codePointAt;
		var max = Math.max;
		var min = Math.min;
		var _toAbsoluteIndex = function(index, length) {
			index = _toInteger(index);
			return index < 0 ? max(index + length, 0) : min(index, length);
		};
		var fromCharCode = String.fromCharCode;
		var $fromCodePoint = String.fromCodePoint;
		_export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), "String", { fromCodePoint: function fromCodePoint(x) {
			var arguments$1 = arguments;
			var res = [];
			var aLen = arguments.length;
			var i = 0;
			var code;
			while (aLen > i) {
				code = +arguments$1[i++];
				if (_toAbsoluteIndex(code, 1114111) !== code) throw RangeError(code + " is not a valid code point");
				res.push(code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320));
			}
			return res.join("");
		} });
		_core.String.fromCodePoint;
		var unicode = {
			Space_Separator: /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
			ID_Start: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
			ID_Continue: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
		};
		var util = {
			isSpaceSeparator: function isSpaceSeparator(c) {
				return typeof c === "string" && unicode.Space_Separator.test(c);
			},
			isIdStartChar: function isIdStartChar(c) {
				return typeof c === "string" && (c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c === "$" || c === "_" || unicode.ID_Start.test(c));
			},
			isIdContinueChar: function isIdContinueChar(c) {
				return typeof c === "string" && (c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c >= "0" && c <= "9" || c === "$" || c === "_" || c === "‌" || c === "‍" || unicode.ID_Continue.test(c));
			},
			isDigit: function isDigit(c) {
				return typeof c === "string" && /[0-9]/.test(c);
			},
			isHexDigit: function isHexDigit(c) {
				return typeof c === "string" && /[0-9A-Fa-f]/.test(c);
			}
		};
		var source;
		var parseState;
		var stack;
		var pos;
		var line;
		var column;
		var token;
		var key;
		var root;
		var parse = function parse(text, reviver) {
			source = String(text);
			parseState = "start";
			stack = [];
			pos = 0;
			line = 1;
			column = 0;
			token = void 0;
			key = void 0;
			root = void 0;
			do {
				token = lex();
				parseStates[parseState]();
			} while (token.type !== "eof");
			if (typeof reviver === "function") return internalize({ "": root }, "", reviver);
			return root;
		};
		function internalize(holder, name, reviver) {
			var value = holder[name];
			if (value != null && typeof value === "object") {
				if (Array.isArray(value)) for (var i = 0; i < value.length; i++) {
					var key = String(i);
					var replacement = internalize(value, key, reviver);
					if (replacement === void 0) delete value[key];
					else Object.defineProperty(value, key, {
						value: replacement,
						writable: true,
						enumerable: true,
						configurable: true
					});
				}
				else for (var key$1 in value) {
					var replacement$1 = internalize(value, key$1, reviver);
					if (replacement$1 === void 0) delete value[key$1];
					else Object.defineProperty(value, key$1, {
						value: replacement$1,
						writable: true,
						enumerable: true,
						configurable: true
					});
				}
			}
			return reviver.call(holder, name, value);
		}
		var lexState;
		var buffer;
		var doubleQuote;
		var sign;
		var c;
		function lex() {
			lexState = "default";
			buffer = "";
			doubleQuote = false;
			sign = 1;
			for (;;) {
				c = peek();
				var token = lexStates[lexState]();
				if (token) return token;
			}
		}
		function peek() {
			if (source[pos]) return String.fromCodePoint(source.codePointAt(pos));
		}
		function read() {
			var c = peek();
			if (c === "\n") {
				line++;
				column = 0;
			} else if (c) column += c.length;
			else column++;
			if (c) pos += c.length;
			return c;
		}
		var lexStates = {
			default: function default$1() {
				switch (c) {
					case "	":
					case "\v":
					case "\f":
					case " ":
					case "\xA0":
					case "﻿":
					case "\n":
					case "\r":
					case "\u2028":
					case "\u2029":
						read();
						return;
					case "/":
						read();
						lexState = "comment";
						return;
					case void 0:
						read();
						return newToken("eof");
				}
				if (util.isSpaceSeparator(c)) {
					read();
					return;
				}
				return lexStates[parseState]();
			},
			comment: function comment() {
				switch (c) {
					case "*":
						read();
						lexState = "multiLineComment";
						return;
					case "/":
						read();
						lexState = "singleLineComment";
						return;
				}
				throw invalidChar(read());
			},
			multiLineComment: function multiLineComment() {
				switch (c) {
					case "*":
						read();
						lexState = "multiLineCommentAsterisk";
						return;
					case void 0: throw invalidChar(read());
				}
				read();
			},
			multiLineCommentAsterisk: function multiLineCommentAsterisk() {
				switch (c) {
					case "*":
						read();
						return;
					case "/":
						read();
						lexState = "default";
						return;
					case void 0: throw invalidChar(read());
				}
				read();
				lexState = "multiLineComment";
			},
			singleLineComment: function singleLineComment() {
				switch (c) {
					case "\n":
					case "\r":
					case "\u2028":
					case "\u2029":
						read();
						lexState = "default";
						return;
					case void 0:
						read();
						return newToken("eof");
				}
				read();
			},
			value: function value() {
				switch (c) {
					case "{":
					case "[": return newToken("punctuator", read());
					case "n":
						read();
						literal("ull");
						return newToken("null", null);
					case "t":
						read();
						literal("rue");
						return newToken("boolean", true);
					case "f":
						read();
						literal("alse");
						return newToken("boolean", false);
					case "-":
					case "+":
						if (read() === "-") sign = -1;
						lexState = "sign";
						return;
					case ".":
						buffer = read();
						lexState = "decimalPointLeading";
						return;
					case "0":
						buffer = read();
						lexState = "zero";
						return;
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						buffer = read();
						lexState = "decimalInteger";
						return;
					case "I":
						read();
						literal("nfinity");
						return newToken("numeric", Infinity);
					case "N":
						read();
						literal("aN");
						return newToken("numeric", NaN);
					case "\"":
					case "'":
						doubleQuote = read() === "\"";
						buffer = "";
						lexState = "string";
						return;
				}
				throw invalidChar(read());
			},
			identifierNameStartEscape: function identifierNameStartEscape() {
				if (c !== "u") throw invalidChar(read());
				read();
				var u = unicodeEscape();
				switch (u) {
					case "$":
					case "_": break;
					default: if (!util.isIdStartChar(u)) throw invalidIdentifier();
				}
				buffer += u;
				lexState = "identifierName";
			},
			identifierName: function identifierName() {
				switch (c) {
					case "$":
					case "_":
					case "‌":
					case "‍":
						buffer += read();
						return;
					case "\\":
						read();
						lexState = "identifierNameEscape";
						return;
				}
				if (util.isIdContinueChar(c)) {
					buffer += read();
					return;
				}
				return newToken("identifier", buffer);
			},
			identifierNameEscape: function identifierNameEscape() {
				if (c !== "u") throw invalidChar(read());
				read();
				var u = unicodeEscape();
				switch (u) {
					case "$":
					case "_":
					case "‌":
					case "‍": break;
					default: if (!util.isIdContinueChar(u)) throw invalidIdentifier();
				}
				buffer += u;
				lexState = "identifierName";
			},
			sign: function sign$1() {
				switch (c) {
					case ".":
						buffer = read();
						lexState = "decimalPointLeading";
						return;
					case "0":
						buffer = read();
						lexState = "zero";
						return;
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						buffer = read();
						lexState = "decimalInteger";
						return;
					case "I":
						read();
						literal("nfinity");
						return newToken("numeric", sign * Infinity);
					case "N":
						read();
						literal("aN");
						return newToken("numeric", NaN);
				}
				throw invalidChar(read());
			},
			zero: function zero() {
				switch (c) {
					case ".":
						buffer += read();
						lexState = "decimalPoint";
						return;
					case "e":
					case "E":
						buffer += read();
						lexState = "decimalExponent";
						return;
					case "x":
					case "X":
						buffer += read();
						lexState = "hexadecimal";
						return;
				}
				return newToken("numeric", sign * 0);
			},
			decimalInteger: function decimalInteger() {
				switch (c) {
					case ".":
						buffer += read();
						lexState = "decimalPoint";
						return;
					case "e":
					case "E":
						buffer += read();
						lexState = "decimalExponent";
						return;
				}
				if (util.isDigit(c)) {
					buffer += read();
					return;
				}
				return newToken("numeric", sign * Number(buffer));
			},
			decimalPointLeading: function decimalPointLeading() {
				if (util.isDigit(c)) {
					buffer += read();
					lexState = "decimalFraction";
					return;
				}
				throw invalidChar(read());
			},
			decimalPoint: function decimalPoint() {
				switch (c) {
					case "e":
					case "E":
						buffer += read();
						lexState = "decimalExponent";
						return;
				}
				if (util.isDigit(c)) {
					buffer += read();
					lexState = "decimalFraction";
					return;
				}
				return newToken("numeric", sign * Number(buffer));
			},
			decimalFraction: function decimalFraction() {
				switch (c) {
					case "e":
					case "E":
						buffer += read();
						lexState = "decimalExponent";
						return;
				}
				if (util.isDigit(c)) {
					buffer += read();
					return;
				}
				return newToken("numeric", sign * Number(buffer));
			},
			decimalExponent: function decimalExponent() {
				switch (c) {
					case "+":
					case "-":
						buffer += read();
						lexState = "decimalExponentSign";
						return;
				}
				if (util.isDigit(c)) {
					buffer += read();
					lexState = "decimalExponentInteger";
					return;
				}
				throw invalidChar(read());
			},
			decimalExponentSign: function decimalExponentSign() {
				if (util.isDigit(c)) {
					buffer += read();
					lexState = "decimalExponentInteger";
					return;
				}
				throw invalidChar(read());
			},
			decimalExponentInteger: function decimalExponentInteger() {
				if (util.isDigit(c)) {
					buffer += read();
					return;
				}
				return newToken("numeric", sign * Number(buffer));
			},
			hexadecimal: function hexadecimal() {
				if (util.isHexDigit(c)) {
					buffer += read();
					lexState = "hexadecimalInteger";
					return;
				}
				throw invalidChar(read());
			},
			hexadecimalInteger: function hexadecimalInteger() {
				if (util.isHexDigit(c)) {
					buffer += read();
					return;
				}
				return newToken("numeric", sign * Number(buffer));
			},
			string: function string() {
				switch (c) {
					case "\\":
						read();
						buffer += escape();
						return;
					case "\"":
						if (doubleQuote) {
							read();
							return newToken("string", buffer);
						}
						buffer += read();
						return;
					case "'":
						if (!doubleQuote) {
							read();
							return newToken("string", buffer);
						}
						buffer += read();
						return;
					case "\n":
					case "\r": throw invalidChar(read());
					case "\u2028":
					case "\u2029":
						separatorChar(c);
						break;
					case void 0: throw invalidChar(read());
				}
				buffer += read();
			},
			start: function start() {
				switch (c) {
					case "{":
					case "[": return newToken("punctuator", read());
				}
				lexState = "value";
			},
			beforePropertyName: function beforePropertyName() {
				switch (c) {
					case "$":
					case "_":
						buffer = read();
						lexState = "identifierName";
						return;
					case "\\":
						read();
						lexState = "identifierNameStartEscape";
						return;
					case "}": return newToken("punctuator", read());
					case "\"":
					case "'":
						doubleQuote = read() === "\"";
						lexState = "string";
						return;
				}
				if (util.isIdStartChar(c)) {
					buffer += read();
					lexState = "identifierName";
					return;
				}
				throw invalidChar(read());
			},
			afterPropertyName: function afterPropertyName() {
				if (c === ":") return newToken("punctuator", read());
				throw invalidChar(read());
			},
			beforePropertyValue: function beforePropertyValue() {
				lexState = "value";
			},
			afterPropertyValue: function afterPropertyValue() {
				switch (c) {
					case ",":
					case "}": return newToken("punctuator", read());
				}
				throw invalidChar(read());
			},
			beforeArrayValue: function beforeArrayValue() {
				if (c === "]") return newToken("punctuator", read());
				lexState = "value";
			},
			afterArrayValue: function afterArrayValue() {
				switch (c) {
					case ",":
					case "]": return newToken("punctuator", read());
				}
				throw invalidChar(read());
			},
			end: function end() {
				throw invalidChar(read());
			}
		};
		function newToken(type, value) {
			return {
				type,
				value,
				line,
				column
			};
		}
		function literal(s) {
			for (var i = 0, list = s; i < list.length; i += 1) {
				var c = list[i];
				if (peek() !== c) throw invalidChar(read());
				read();
			}
		}
		function escape() {
			switch (peek()) {
				case "b":
					read();
					return "\b";
				case "f":
					read();
					return "\f";
				case "n":
					read();
					return "\n";
				case "r":
					read();
					return "\r";
				case "t":
					read();
					return "	";
				case "v":
					read();
					return "\v";
				case "0":
					read();
					if (util.isDigit(peek())) throw invalidChar(read());
					return "\0";
				case "x":
					read();
					return hexEscape();
				case "u":
					read();
					return unicodeEscape();
				case "\n":
				case "\u2028":
				case "\u2029":
					read();
					return "";
				case "\r":
					read();
					if (peek() === "\n") read();
					return "";
				case "1":
				case "2":
				case "3":
				case "4":
				case "5":
				case "6":
				case "7":
				case "8":
				case "9": throw invalidChar(read());
				case void 0: throw invalidChar(read());
			}
			return read();
		}
		function hexEscape() {
			var buffer = "";
			var c = peek();
			if (!util.isHexDigit(c)) throw invalidChar(read());
			buffer += read();
			c = peek();
			if (!util.isHexDigit(c)) throw invalidChar(read());
			buffer += read();
			return String.fromCodePoint(parseInt(buffer, 16));
		}
		function unicodeEscape() {
			var buffer = "";
			var count = 4;
			while (count-- > 0) {
				var c = peek();
				if (!util.isHexDigit(c)) throw invalidChar(read());
				buffer += read();
			}
			return String.fromCodePoint(parseInt(buffer, 16));
		}
		var parseStates = {
			start: function start() {
				if (token.type === "eof") throw invalidEOF();
				push();
			},
			beforePropertyName: function beforePropertyName() {
				switch (token.type) {
					case "identifier":
					case "string":
						key = token.value;
						parseState = "afterPropertyName";
						return;
					case "punctuator":
						pop();
						return;
					case "eof": throw invalidEOF();
				}
			},
			afterPropertyName: function afterPropertyName() {
				if (token.type === "eof") throw invalidEOF();
				parseState = "beforePropertyValue";
			},
			beforePropertyValue: function beforePropertyValue() {
				if (token.type === "eof") throw invalidEOF();
				push();
			},
			beforeArrayValue: function beforeArrayValue() {
				if (token.type === "eof") throw invalidEOF();
				if (token.type === "punctuator" && token.value === "]") {
					pop();
					return;
				}
				push();
			},
			afterPropertyValue: function afterPropertyValue() {
				if (token.type === "eof") throw invalidEOF();
				switch (token.value) {
					case ",":
						parseState = "beforePropertyName";
						return;
					case "}": pop();
				}
			},
			afterArrayValue: function afterArrayValue() {
				if (token.type === "eof") throw invalidEOF();
				switch (token.value) {
					case ",":
						parseState = "beforeArrayValue";
						return;
					case "]": pop();
				}
			},
			end: function end() {}
		};
		function push() {
			var value;
			switch (token.type) {
				case "punctuator":
					switch (token.value) {
						case "{":
							value = {};
							break;
						case "[": value = [];
					}
					break;
				case "null":
				case "boolean":
				case "numeric":
				case "string": value = token.value;
			}
			if (root === void 0) root = value;
			else {
				var parent = stack[stack.length - 1];
				if (Array.isArray(parent)) parent.push(value);
				else Object.defineProperty(parent, key, {
					value,
					writable: true,
					enumerable: true,
					configurable: true
				});
			}
			if (value !== null && typeof value === "object") {
				stack.push(value);
				if (Array.isArray(value)) parseState = "beforeArrayValue";
				else parseState = "beforePropertyName";
			} else {
				var current = stack[stack.length - 1];
				if (current == null) parseState = "end";
				else if (Array.isArray(current)) parseState = "afterArrayValue";
				else parseState = "afterPropertyValue";
			}
		}
		function pop() {
			stack.pop();
			var current = stack[stack.length - 1];
			if (current == null) parseState = "end";
			else if (Array.isArray(current)) parseState = "afterArrayValue";
			else parseState = "afterPropertyValue";
		}
		function invalidChar(c) {
			if (c === void 0) return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
			return syntaxError("JSON5: invalid character '" + formatChar(c) + "' at " + line + ":" + column);
		}
		function invalidEOF() {
			return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
		}
		function invalidIdentifier() {
			column -= 5;
			return syntaxError("JSON5: invalid identifier character at " + line + ":" + column);
		}
		function separatorChar(c) {
			console.warn("JSON5: '" + formatChar(c) + "' in strings is not valid ECMAScript; consider escaping");
		}
		function formatChar(c) {
			var replacements = {
				"'": "\\'",
				"\"": "\\\"",
				"\\": "\\\\",
				"\b": "\\b",
				"\f": "\\f",
				"\n": "\\n",
				"\r": "\\r",
				"	": "\\t",
				"\v": "\\v",
				"\0": "\\0",
				"\u2028": "\\u2028",
				"\u2029": "\\u2029"
			};
			if (replacements[c]) return replacements[c];
			if (c < " ") {
				var hexString = c.charCodeAt(0).toString(16);
				return "\\x" + ("00" + hexString).substring(hexString.length);
			}
			return c;
		}
		function syntaxError(message) {
			var err = new SyntaxError(message);
			err.lineNumber = line;
			err.columnNumber = column;
			return err;
		}
		return {
			parse,
			stringify: function stringify(value, replacer, space) {
				var stack = [];
				var indent = "";
				var propertyList;
				var replacerFunc;
				var gap = "";
				var quote;
				if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
					space = replacer.space;
					quote = replacer.quote;
					replacer = replacer.replacer;
				}
				if (typeof replacer === "function") replacerFunc = replacer;
				else if (Array.isArray(replacer)) {
					propertyList = [];
					for (var i = 0, list = replacer; i < list.length; i += 1) {
						var v = list[i];
						var item = void 0;
						if (typeof v === "string") item = v;
						else if (typeof v === "number" || v instanceof String || v instanceof Number) item = String(v);
						if (item !== void 0 && propertyList.indexOf(item) < 0) propertyList.push(item);
					}
				}
				if (space instanceof Number) space = Number(space);
				else if (space instanceof String) space = String(space);
				if (typeof space === "number") {
					if (space > 0) {
						space = Math.min(10, Math.floor(space));
						gap = "          ".substr(0, space);
					}
				} else if (typeof space === "string") gap = space.substr(0, 10);
				return serializeProperty("", { "": value });
				function serializeProperty(key, holder) {
					var value = holder[key];
					if (value != null) {
						if (typeof value.toJSON5 === "function") value = value.toJSON5(key);
						else if (typeof value.toJSON === "function") value = value.toJSON(key);
					}
					if (replacerFunc) value = replacerFunc.call(holder, key, value);
					if (value instanceof Number) value = Number(value);
					else if (value instanceof String) value = String(value);
					else if (value instanceof Boolean) value = value.valueOf();
					switch (value) {
						case null: return "null";
						case true: return "true";
						case false: return "false";
					}
					if (typeof value === "string") return quoteString(value, false);
					if (typeof value === "number") return String(value);
					if (typeof value === "object") return Array.isArray(value) ? serializeArray(value) : serializeObject(value);
				}
				function quoteString(value) {
					var quotes = {
						"'": .1,
						"\"": .2
					};
					var replacements = {
						"'": "\\'",
						"\"": "\\\"",
						"\\": "\\\\",
						"\b": "\\b",
						"\f": "\\f",
						"\n": "\\n",
						"\r": "\\r",
						"	": "\\t",
						"\v": "\\v",
						"\0": "\\0",
						"\u2028": "\\u2028",
						"\u2029": "\\u2029"
					};
					var product = "";
					for (var i = 0; i < value.length; i++) {
						var c = value[i];
						switch (c) {
							case "'":
							case "\"":
								quotes[c]++;
								product += c;
								continue;
							case "\0": if (util.isDigit(value[i + 1])) {
								product += "\\x00";
								continue;
							}
						}
						if (replacements[c]) {
							product += replacements[c];
							continue;
						}
						if (c < " ") {
							var hexString = c.charCodeAt(0).toString(16);
							product += "\\x" + ("00" + hexString).substring(hexString.length);
							continue;
						}
						product += c;
					}
					var quoteChar = quote || Object.keys(quotes).reduce(function(a, b) {
						return quotes[a] < quotes[b] ? a : b;
					});
					product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
					return quoteChar + product + quoteChar;
				}
				function serializeObject(value) {
					if (stack.indexOf(value) >= 0) throw TypeError("Converting circular structure to JSON5");
					stack.push(value);
					var stepback = indent;
					indent = indent + gap;
					var keys = propertyList || Object.keys(value);
					var partial = [];
					for (var i = 0, list = keys; i < list.length; i += 1) {
						var key = list[i];
						var propertyString = serializeProperty(key, value);
						if (propertyString !== void 0) {
							var member = serializeKey(key) + ":";
							if (gap !== "") member += " ";
							member += propertyString;
							partial.push(member);
						}
					}
					var final;
					if (partial.length === 0) final = "{}";
					else {
						var properties;
						if (gap === "") {
							properties = partial.join(",");
							final = "{" + properties + "}";
						} else {
							var separator = ",\n" + indent;
							properties = partial.join(separator);
							final = "{\n" + indent + properties + ",\n" + stepback + "}";
						}
					}
					stack.pop();
					indent = stepback;
					return final;
				}
				function serializeKey(key) {
					if (key.length === 0) return quoteString(key, true);
					var firstChar = String.fromCodePoint(key.codePointAt(0));
					if (!util.isIdStartChar(firstChar)) return quoteString(key, true);
					for (var i = firstChar.length; i < key.length; i++) if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) return quoteString(key, true);
					return key;
				}
				function serializeArray(value) {
					if (stack.indexOf(value) >= 0) throw TypeError("Converting circular structure to JSON5");
					stack.push(value);
					var stepback = indent;
					indent = indent + gap;
					var partial = [];
					for (var i = 0; i < value.length; i++) {
						var propertyString = serializeProperty(String(i), value);
						partial.push(propertyString !== void 0 ? propertyString : "null");
					}
					var final;
					if (partial.length === 0) final = "[]";
					else if (gap === "") final = "[" + partial.join(",") + "]";
					else {
						var separator = ",\n" + indent;
						var properties$1 = partial.join(separator);
						final = "[\n" + indent + properties$1 + ",\n" + stepback + "]";
					}
					stack.pop();
					indent = stepback;
					return final;
				}
			}
		};
	}));
})))(), 1);
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
/**
* 项目管理 Hook
* 负责 lossless-cut 项目文件的导入、保存、加载等操作
*/
function useProjectManager(files) {
	const notice = useNotification();
	const { appConfig } = storeToRefs(useAppConfig());
	const { rawCuts } = storeToRefs(useSegmentStore());
	const segmentStore = useSegmentStore();
	const subtitleStore = useSubtitles();
	const projectFilePath = ref("");
	/**
	* 清理项目状态
	*/
	const resetProjectState = () => {
		projectFilePath.value = "";
	};
	/**
	* 加载项目文件
	* @param filePath 项目文件路径
	*/
	const loadProjectFile = async (filePath) => {
		try {
			const projectData = await readProjectFile(filePath);
			projectFilePath.value = filePath;
			const segments = projectData.cutSegments.map((item) => ({
				...item,
				checked: true
			}));
			segmentStore.init(segments);
			subtitleStore.clear();
			if (projectData.subtitles && Array.isArray(projectData.subtitles)) projectData.subtitles.forEach((subtitle) => {
				const segment = segmentStore.cuts[subtitle.index];
				if (segment) subtitleStore.add({
					sourceId: segment.id,
					content: subtitle.content
				});
				else subtitleStore.add({
					sourceId: null,
					content: subtitle.content
				});
			});
		} catch (error) {
			notice.error({
				title: "项目文件解析失败，请确认文件有效",
				duration: 2e3
			});
		}
	};
	/**
	* 读取项目文件
	*/
	const readProjectFile = async (filePath) => {
		const content = await common.readLLCProject(filePath);
		return import_dist.default.parse(content);
	};
	/**
	* 重新加载当前项目文件
	*/
	/**
	* 保存项目（如果已有路径则直接保存，否则另存为）
	* @param sourceVideoPath 源视频路径，用于另存为时的默认路径
	*/
	const saveProject = async (ignoreNotice = false) => {
		const mediaFileName = files.value.originVideoPath;
		if (!mediaFileName) {
			if (ignoreNotice) return;
			notice.error({
				title: "请先选择视频文件",
				duration: 2e3
			});
			return;
		}
		if (projectFilePath.value) await saveToFile(projectFilePath.value, mediaFileName, ignoreNotice);
		else {
			const { dir, name } = window.path.parse(mediaFileName);
			projectFilePath.value = window.path.join(dir, `${name}-proj.llc`);
			await saveToFile(projectFilePath.value, mediaFileName, ignoreNotice);
		}
	};
	/**
	* 保存项目到指定文件
	* @param filePath 保存路径
	* @param mediaFileName 媒体文件名
	*/
	const saveToFile = async (filePath, mediaFileName, ignoreNotice = false) => {
		if (rawCuts.value.length === 0) {
			if (ignoreNotice) return;
			notice.error({
				title: "你必须至少添加一个片段才能保存项目",
				duration: 2e3
			});
			return;
		}
		const projectData = {
			version: 1,
			mediaFileName: window.path.basename(mediaFileName),
			subtitles: subtitleStore.items.map(({ sourceId, content }) => {
				const segmentIndex = segmentStore.cuts.findIndex((segment) => segment.id === sourceId);
				return {
					index: segmentIndex >= 0 ? segmentIndex : null,
					content
				};
			}),
			cutSegments: rawCuts.value.map(({ start, end, name, tags }) => ({
				start,
				end,
				name,
				tags
			}))
		};
		await common.writeLLCProject(filePath, import_dist.default.stringify(projectData, null, 2));
	};
	/**
	* 使用 lossless-cut 打开项目文件
	*/
	const openInLosslessCut = async () => {
		if (!projectFilePath.value) return;
		if (appConfig.value.losslessCutPath) window.api.common.execFile(appConfig.value.losslessCutPath, [projectFilePath.value]);
		else {
			notice.info({
				title: "使用默认程序打开llc文件，你也可以尝试在设置中设置lossless-cut的路径",
				duration: 2e3
			});
			await window.api.openPath(projectFilePath.value);
		}
	};
	/**
	* 另存为项目文件
	* @param sourceVideoPath 源视频路径，用于生成默认文件名
	*/
	const saveProjectAs = async () => {
		const mediaFileName = files.value.originVideoPath;
		if (!mediaFileName) {
			notice.error({
				title: "请先选择视频文件",
				duration: 2e3
			});
			return;
		}
		const { dir, name } = window.path.parse(mediaFileName);
		const defaultPath = window.path.join(dir, `${name}-proj.llc`);
		const file = await showSaveDialog({
			extension: "llc",
			defaultPath
		});
		if (!file) return;
		projectFilePath.value = file;
		await saveToFile(file, mediaFileName, true);
	};
	/**
	* 处理项目操作按钮点击
	* @param action 操作类型
	* @param sourceVideoPath 源视频路径
	*/
	const handleProjectAction = (action) => {
		switch (action) {
			case "save":
				saveProject();
				break;
			case "open":
				openInLosslessCut();
				break;
			case "saveAnother":
				saveProjectAs();
				break;
			default: console.error(`不支持的操作: ${action}`);
		}
	};
	/**
	* 项目操作选项
	*/
	const projectMenuOptions = computed(() => {
		const hasProject = !!projectFilePath.value;
		const hasVideo = !!files.value.videoPath;
		const isWeb = window.isWeb;
		const items = [];
		if (!isWeb) items.push({
			label: "使用llc打开",
			key: "open",
			disabled: !hasProject
		});
		items.push({
			label: "保存(ctrl+s)",
			key: "save",
			disabled: !hasProject
		});
		items.push({
			label: "另存为(ctrl+shift+s)",
			key: "saveAnother",
			disabled: !hasVideo
		});
		return items;
	});
	watch(() => rawCuts.value, () => {
		if (appConfig.value.videoCut.autoSave) saveProject(true);
	}, { deep: true });
	watch(() => subtitleStore.items, () => {
		if (appConfig.value.videoCut.autoSave) saveProject(true);
	}, { deep: true });
	return {
		projectFilePath,
		projectMenuOptions,
		handleProjectAction,
		saveProject,
		saveProjectAs,
		loadProjectFile,
		resetProjectState,
		readProjectFile
	};
}
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/composables/useVideoPlayer.ts
init_reactivity_esm_bundler();
function useVideoPlayer(isWeb) {
	const videoInstance = ref(null);
	const videoRef = ref(null);
	/**
	* 加载视频文件
	* @param path 视频文件路径
	*/
	const loadVideo = async (path) => {
		if (isWeb.value) {
			const { videoId, type } = await common.applyVideoId(path);
			const videoUrl = await common.getVideo(videoId);
			await videoRef.value?.switchUrl(videoUrl, type);
			return videoUrl;
		} else {
			await videoRef.value?.switchUrl(path, path.endsWith(".flv") ? "flv" : "");
			return path;
		}
	};
	/**
	* 视频状态切换
	*/
	const togglePlay = () => {
		if (!videoInstance.value?.url) return;
		videoInstance.value.toggle();
	};
	/**
	* 视频播放器就绪回调
	*/
	const handleVideoReady = (instance) => {
		videoInstance.value = instance;
	};
	return {
		videoInstance,
		videoRef,
		loadVideo,
		togglePlay,
		handleVideoReady
	};
}
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/composables/useDanmu.ts
init_reactivity_esm_bundler();
function useDanmu(videoInstance, videoRef, videoDuration, showVideoTime) {
	const danmaList = ref([]);
	const xmlConvertVisible = ref(false);
	const tempXmlFile = ref("");
	const convertDanmuLoading = ref(false);
	/**
	* 加载弹幕文件
	* @param path 弹幕文件路径（.ass 或 .xml）
	*/
	const loadDanmuFile = async (path) => {
		if (path.endsWith(".ass")) {
			const content = await common.readDanma(path);
			videoRef.value?.switchAss(content);
			await generateDanmakuData(path);
			return path;
		} else {
			xmlConvertVisible.value = true;
			tempXmlFile.value = path;
			convertDanmuLoading.value = true;
		}
		return path;
	};
	/**
	* 确认并执行弹幕转换
	* @param config 弹幕配置
	*/
	const confirmAndConvertDanmu = async (config) => {
		if (config.resolutionResponsive) {
			const width = videoInstance.value?.video.videoWidth;
			const height = videoInstance.value?.video.videoHeight;
			config.resolution[0] = width;
			config.resolution[1] = height;
		}
		try {
			const { output } = await task.convertXml2Ass(tempXmlFile.value, "随便填", config, {
				removeOrigin: false,
				saveRadio: 2,
				temp: true,
				savePath: "",
				sync: true
			});
			const content = await common.readDanma(output);
			videoRef.value?.switchAss(content);
			return [output, tempXmlFile.value];
		} finally {
			convertDanmuLoading.value = false;
		}
	};
	/**
	* 生成高能进度条数据和sc等数据
	*/
	const generateDanmakuData = async (file) => {
		if (file.endsWith(".ass")) {
			danmaList.value = [];
			videoInstance.value?.artplayerTimestamp?.setTimestamp(0);
		} else if (file.endsWith(".xml")) {
			const data = await common.parseDanmu(file);
			danmaList.value = sortBy([...data.sc, ...data.danmu], "ts");
			if (data?.metadata?.video_start_time) {
				videoInstance.value?.artplayerTimestamp?.setTimestamp(data.metadata.video_start_time * 1e3);
				if (showVideoTime.value === false) videoInstance.value?.artplayerTimestamp?.hide();
				else videoInstance.value?.artplayerTimestamp?.show();
			}
		} else throw new Error("不支持的文件类型");
		if (!videoDuration.value) return;
		const data = await common.genTimeData(file);
		videoInstance.value?.artplayerPluginHeatmap?.setData(data);
	};
	/**
	* 重新加载弹幕（当视频实例或配置变化时）
	*/
	const reloadDanmu = async (danmuPath) => {
		if (!danmuPath) return;
		const content = await common.readDanma(danmuPath);
		videoRef.value?.switchAss(content);
	};
	/**
	* 关闭弹幕转换弹窗
	*/
	const closeConvertDialog = () => {
		xmlConvertVisible.value = false;
		convertDanmuLoading.value = false;
	};
	return {
		danmaList,
		xmlConvertVisible,
		convertDanmuLoading,
		loadDanmuFile,
		confirmAndConvertDanmu,
		generateDanmakuData,
		reloadDanmu,
		closeConvertDialog
	};
}
//#endregion
//#region ../../node_modules/.pnpm/wavesurfer.js@7.11.1/node_modules/wavesurfer.js/dist/wavesurfer.esm.js
function t$2(t, e, i, n) {
	return new (i || (i = Promise))((function(s, r) {
		function o(t) {
			try {
				h(n.next(t));
			} catch (t) {
				r(t);
			}
		}
		function a(t) {
			try {
				h(n.throw(t));
			} catch (t) {
				r(t);
			}
		}
		function h(t) {
			var e;
			t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
				t(e);
			}))).then(o, a);
		}
		h((n = n.apply(t, e || [])).next());
	}));
}
var e$2 = class {
	constructor() {
		this.listeners = {};
	}
	on(t, e, i) {
		if (this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set()), null == i ? void 0 : i.once) {
			const i = (...n) => {
				this.un(t, i), e(...n);
			};
			return this.listeners[t].add(i), () => this.un(t, i);
		}
		return this.listeners[t].add(e), () => this.un(t, e);
	}
	un(t, e) {
		var i;
		null === (i = this.listeners[t]) || void 0 === i || i.delete(e);
	}
	once(t, e) {
		return this.on(t, e, { once: !0 });
	}
	unAll() {
		this.listeners = {};
	}
	emit(t, ...e) {
		this.listeners[t] && this.listeners[t].forEach(((t) => t(...e)));
	}
};
var i$2 = {
	decode: function(e, i) {
		return t$2(this, void 0, void 0, (function* () {
			const t = new AudioContext({ sampleRate: i });
			try {
				return yield t.decodeAudioData(e);
			} finally {
				t.close();
			}
		}));
	},
	createBuffer: function(t, e) {
		if (!t || 0 === t.length) throw new Error("channelData must be a non-empty array");
		if (e <= 0) throw new Error("duration must be greater than 0");
		if ("number" == typeof t[0] && (t = [t]), !t[0] || 0 === t[0].length) throw new Error("channelData must contain non-empty channel arrays");
		(function(t) {
			const e = t[0];
			if (e.some(((t) => t > 1 || t < -1))) {
				const i = e.length;
				let n = 0;
				for (let t = 0; t < i; t++) {
					const i = Math.abs(e[t]);
					i > n && (n = i);
				}
				for (const e of t) for (let t = 0; t < i; t++) e[t] /= n;
			}
		})(t);
		const i = t.map(((t) => t instanceof Float32Array ? t : Float32Array.from(t)));
		return {
			duration: e,
			length: i[0].length,
			sampleRate: i[0].length / e,
			numberOfChannels: i.length,
			getChannelData: (t) => {
				const e = i[t];
				if (!e) throw new Error(`Channel ${t} not found`);
				return e;
			},
			copyFromChannel: AudioBuffer.prototype.copyFromChannel,
			copyToChannel: AudioBuffer.prototype.copyToChannel
		};
	}
};
function n$1(t, e) {
	const i = e.xmlns ? document.createElementNS(e.xmlns, t) : document.createElement(t);
	for (const [t, s] of Object.entries(e)) if ("children" === t && s) for (const [t, e] of Object.entries(s)) e instanceof Node ? i.appendChild(e) : "string" == typeof e ? i.appendChild(document.createTextNode(e)) : i.appendChild(n$1(t, e));
	else "style" === t ? Object.assign(i.style, s) : "textContent" === t ? i.textContent = s : i.setAttribute(t, s.toString());
	return i;
}
function s$2(t, e, i) {
	const s = n$1(t, e || {});
	return i?.appendChild(s), s;
}
var r$1 = Object.freeze({
	__proto__: null,
	createElement: s$2,
	default: s$2
});
var o$1 = { fetchBlob: function(e, i, n) {
	return t$2(this, void 0, void 0, (function* () {
		const s = yield fetch(e, n);
		if (s.status >= 400) throw new Error(`Failed to fetch ${e}: ${s.status} (${s.statusText})`);
		return function(e, i) {
			t$2(this, void 0, void 0, (function* () {
				if (!e.body || !e.headers) return;
				const t = e.body.getReader(), n = Number(e.headers.get("Content-Length")) || 0;
				let s = 0;
				const r = (t) => {
					s += (null == t ? void 0 : t.length) || 0;
					i(Math.round(s / n * 100));
				};
				try {
					for (;;) {
						const e = yield t.read();
						if (e.done) break;
						r(e.value);
					}
				} catch (t) {
					console.warn("Progress tracking error:", t);
				}
			}));
		}(s.clone(), i), s.blob();
	}));
} };
var a = class extends e$2 {
	constructor(t) {
		super(), this.isExternalMedia = !1, t.media ? (this.media = t.media, this.isExternalMedia = !0) : this.media = document.createElement("audio"), t.mediaControls && (this.media.controls = !0), t.autoplay && (this.media.autoplay = !0), null != t.playbackRate && this.onMediaEvent("canplay", (() => {
			null != t.playbackRate && (this.media.playbackRate = t.playbackRate);
		}), { once: !0 });
	}
	onMediaEvent(t, e, i) {
		return this.media.addEventListener(t, e, i), () => this.media.removeEventListener(t, e, i);
	}
	getSrc() {
		return this.media.currentSrc || this.media.src || "";
	}
	revokeSrc() {
		const t = this.getSrc();
		t.startsWith("blob:") && URL.revokeObjectURL(t);
	}
	canPlayType(t) {
		return "" !== this.media.canPlayType(t);
	}
	setSrc(t, e) {
		const i = this.getSrc();
		if (t && i === t) return;
		this.revokeSrc();
		const n = e instanceof Blob && (this.canPlayType(e.type) || !t) ? URL.createObjectURL(e) : t;
		if (i && this.media.removeAttribute("src"), n || t) try {
			this.media.src = n;
		} catch (e) {
			this.media.src = t;
		}
	}
	destroy() {
		this.isExternalMedia || (this.media.pause(), this.revokeSrc(), this.media.removeAttribute("src"), this.media.load(), this.media.remove());
	}
	setMediaElement(t) {
		this.media = t;
	}
	play() {
		return t$2(this, void 0, void 0, (function* () {
			try {
				return yield this.media.play();
			} catch (t) {
				if (t instanceof DOMException && "AbortError" === t.name) return;
				throw t;
			}
		}));
	}
	pause() {
		this.media.pause();
	}
	isPlaying() {
		return !this.media.paused && !this.media.ended;
	}
	setTime(t) {
		this.media.currentTime = Math.max(0, Math.min(t, this.getDuration()));
	}
	getDuration() {
		return this.media.duration;
	}
	getCurrentTime() {
		return this.media.currentTime;
	}
	getVolume() {
		return this.media.volume;
	}
	setVolume(t) {
		this.media.volume = t;
	}
	getMuted() {
		return this.media.muted;
	}
	setMuted(t) {
		this.media.muted = t;
	}
	getPlaybackRate() {
		return this.media.playbackRate;
	}
	isSeeking() {
		return this.media.seeking;
	}
	setPlaybackRate(t, e) {
		null != e && (this.media.preservesPitch = e), this.media.playbackRate = t;
	}
	getMediaElement() {
		return this.media;
	}
	setSinkId(t) {
		return this.media.setSinkId(t);
	}
};
function h(t) {
	return t < 0 ? 0 : t > 1 ? 1 : t;
}
function l({ maxTop: t, maxBottom: e, halfHeight: i, vScale: n }) {
	const s = Math.round(t * i * n);
	return {
		topHeight: s,
		totalHeight: s + Math.round(e * i * n) || 1
	};
}
function c({ barAlign: t, halfHeight: e, topHeight: i, totalHeight: n, canvasHeight: s }) {
	return "top" === t ? 0 : "bottom" === t ? s - n : e - i;
}
function d(t, e, i) {
	const n = e - t.left, s = i - t.top;
	return [n / t.width, s / t.height];
}
function u(t) {
	return Boolean(t.barWidth || t.barGap || t.barAlign);
}
function p(t, e) {
	if (!u(e)) return t;
	const i = e.barWidth || .5, n = i + (e.barGap || i / 2);
	return 0 === n ? t : Math.floor(t / n) * n;
}
function m({ scrollLeft: t, totalWidth: e, numCanvases: i }) {
	if (0 === e) return [0];
	const n = t / e, s = Math.floor(n * i);
	return [
		s - 1,
		s,
		s + 1
	];
}
function f({ scrollLeft: t, clientWidth: e, scrollWidth: i }) {
	if (0 === i) return {
		startX: 0,
		endX: 0
	};
	return {
		startX: t / i,
		endX: (t + e) / i
	};
}
var g = class extends e$2 {
	constructor(t, e) {
		super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.unsubscribeOnScroll = [], this.dragUnsubscribe = null, this.subscriptions = [], this.options = t;
		const i = this.parentFromOptionsContainer(t.container);
		this.parent = i;
		const [n, s] = this.initHtml();
		i.appendChild(n), this.container = n, this.scrollContainer = s.querySelector(".scroll"), this.wrapper = s.querySelector(".wrapper"), this.canvasWrapper = s.querySelector(".canvases"), this.progressWrapper = s.querySelector(".progress"), this.cursor = s.querySelector(".cursor"), e && s.appendChild(e), this.initEvents();
	}
	parentFromOptionsContainer(t) {
		let e;
		if ("string" == typeof t ? e = document.querySelector(t) : t instanceof HTMLElement && (e = t), !e) throw new Error("Container not found");
		return e;
	}
	initEvents() {
		if (this.wrapper.addEventListener("click", ((t) => {
			const [i, n] = d(this.wrapper.getBoundingClientRect(), t.clientX, t.clientY);
			this.emit("click", i, n);
		})), this.wrapper.addEventListener("dblclick", ((t) => {
			const [i, n] = d(this.wrapper.getBoundingClientRect(), t.clientX, t.clientY);
			this.emit("dblclick", i, n);
		})), !0 !== this.options.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.scrollContainer.addEventListener("scroll", (() => {
			const { scrollLeft: t, scrollWidth: e, clientWidth: i } = this.scrollContainer, { startX: n, endX: s } = f({
				scrollLeft: t,
				scrollWidth: e,
				clientWidth: i
			});
			this.emit("scroll", n, s, t, t + i);
		})), "function" == typeof ResizeObserver) {
			const t = this.createDelay(100);
			this.resizeObserver = new ResizeObserver((() => {
				t().then((() => this.onContainerResize())).catch((() => {}));
			})), this.resizeObserver.observe(this.scrollContainer);
		}
	}
	onContainerResize() {
		const t = this.parent.clientWidth;
		t === this.lastContainerWidth && "auto" !== this.options.height || (this.lastContainerWidth = t, this.reRender(), this.emit("resize"));
	}
	initDrag() {
		this.dragUnsubscribe || (this.dragUnsubscribe = function(t, e, i, n, s = 3, r = 0, o = 100) {
			if (!t) return () => {};
			const a = /* @__PURE__ */ new Map(), h = matchMedia("(pointer: coarse)").matches;
			let l = () => {};
			const c = (c) => {
				if (c.button !== r) return;
				if (a.set(c.pointerId, c), a.size > 1) return;
				let d = c.clientX, u = c.clientY, p = !1;
				const m = Date.now(), f = (n) => {
					if (n.defaultPrevented || a.size > 1) return;
					if (h && Date.now() - m < o) return;
					const r = n.clientX, l = n.clientY, c = r - d, f = l - u;
					if (p || Math.abs(c) > s || Math.abs(f) > s) {
						n.preventDefault(), n.stopPropagation();
						const { left: o, top: a } = t.getBoundingClientRect();
						p || (i?.(d - o, u - a), p = !0), e(c, f, r - o, l - a), d = r, u = l;
					}
				}, g = (e) => {
					if (a.delete(e.pointerId), p) {
						const i = e.clientX, s = e.clientY, { left: o, top: a } = t.getBoundingClientRect();
						n?.(i - o, s - a);
					}
					l();
				}, v = (t) => {
					a.delete(t.pointerId), t.relatedTarget && t.relatedTarget !== document.documentElement || g(t);
				}, b = (t) => {
					p && (t.stopPropagation(), t.preventDefault());
				}, y = (t) => {
					t.defaultPrevented || a.size > 1 || p && t.preventDefault();
				};
				document.addEventListener("pointermove", f), document.addEventListener("pointerup", g), document.addEventListener("pointerout", v), document.addEventListener("pointercancel", v), document.addEventListener("touchmove", y, { passive: !1 }), document.addEventListener("click", b, { capture: !0 }), l = () => {
					document.removeEventListener("pointermove", f), document.removeEventListener("pointerup", g), document.removeEventListener("pointerout", v), document.removeEventListener("pointercancel", v), document.removeEventListener("touchmove", y), setTimeout((() => {
						document.removeEventListener("click", b, { capture: !0 });
					}), 10);
				};
			};
			return t.addEventListener("pointerdown", c), () => {
				l(), t.removeEventListener("pointerdown", c), a.clear();
			};
		}(this.wrapper, ((t, e, i) => {
			const n = this.wrapper.getBoundingClientRect().width;
			this.emit("drag", h(i / n));
		}), ((t) => {
			this.isDragging = !0;
			const e = this.wrapper.getBoundingClientRect().width;
			this.emit("dragstart", h(t / e));
		}), ((t) => {
			this.isDragging = !1;
			const e = this.wrapper.getBoundingClientRect().width;
			this.emit("dragend", h(t / e));
		})), this.subscriptions.push(this.dragUnsubscribe));
	}
	initHtml() {
		const t = document.createElement("div"), e = t.attachShadow({ mode: "open" }), i = this.options.cspNonce && "string" == typeof this.options.cspNonce ? this.options.cspNonce.replace(/"/g, "") : "";
		return e.innerHTML = `\n      <style${i ? ` nonce="${i}"` : ""}>\n        :host {\n          user-select: none;\n          min-width: 1px;\n        }\n        :host audio {\n          display: block;\n          width: 100%;\n        }\n        :host .scroll {\n          overflow-x: auto;\n          overflow-y: hidden;\n          width: 100%;\n          position: relative;\n        }\n        :host .noScrollbar {\n          scrollbar-color: transparent;\n          scrollbar-width: none;\n        }\n        :host .noScrollbar::-webkit-scrollbar {\n          display: none;\n          -webkit-appearance: none;\n        }\n        :host .wrapper {\n          position: relative;\n          overflow: visible;\n          z-index: 2;\n        }\n        :host .canvases {\n          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;\n          pointer-events: none;\n        }\n        :host .canvases > div {\n          position: relative;\n        }\n        :host canvas {\n          display: block;\n          position: absolute;\n          top: 0;\n          image-rendering: pixelated;\n        }\n        :host .progress {\n          pointer-events: none;\n          position: absolute;\n          z-index: 2;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          overflow: hidden;\n        }\n        :host .progress > div {\n          position: relative;\n        }\n        :host .cursor {\n          pointer-events: none;\n          position: absolute;\n          z-index: 5;\n          top: 0;\n          left: 0;\n          height: 100%;\n          border-radius: 2px;\n        }\n      </style>\n\n      <div class="scroll" part="scroll">\n        <div class="wrapper" part="wrapper">\n          <div class="canvases" part="canvases"></div>\n          <div class="progress" part="progress"></div>\n          <div class="cursor" part="cursor"></div>\n        </div>\n      </div>\n    `, [t, e];
	}
	setOptions(t) {
		if (this.options.container !== t.container) {
			const e = this.parentFromOptionsContainer(t.container);
			e.appendChild(this.container), this.parent = e;
		}
		!0 !== t.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.options = t, this.reRender();
	}
	getWrapper() {
		return this.wrapper;
	}
	getWidth() {
		return this.scrollContainer.clientWidth;
	}
	getScroll() {
		return this.scrollContainer.scrollLeft;
	}
	setScroll(t) {
		this.scrollContainer.scrollLeft = t;
	}
	setScrollPercentage(t) {
		const { scrollWidth: e } = this.scrollContainer, i = e * t;
		this.setScroll(i);
	}
	destroy() {
		var t;
		this.subscriptions.forEach(((t) => t())), this.container.remove(), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), null === (t = this.unsubscribeOnScroll) || void 0 === t || t.forEach(((t) => t())), this.unsubscribeOnScroll = [];
	}
	createDelay(t = 10) {
		let e, i;
		const n = () => {
			e && (clearTimeout(e), e = void 0), i && (i(), i = void 0);
		};
		return this.timeouts.push(n), () => new Promise(((s, r) => {
			n(), i = r, e = setTimeout((() => {
				e = void 0, i = void 0, s();
			}), t);
		}));
	}
	getHeight(t, e) {
		var i;
		const n = (null === (i = this.audioData) || void 0 === i ? void 0 : i.numberOfChannels) || 1;
		return function({ optionsHeight: t, optionsSplitChannels: e, parentHeight: i, numberOfChannels: n, defaultHeight: s = 128 }) {
			if (null == t) return s;
			const r = Number(t);
			if (!isNaN(r)) return r;
			if ("auto" === t) {
				const t = i || s;
				return (null == e ? void 0 : e.every(((t) => !t.overlay))) ? t / n : t;
			}
			return s;
		}({
			optionsHeight: t,
			optionsSplitChannels: e,
			parentHeight: this.parent.clientHeight,
			numberOfChannels: n,
			defaultHeight: 128
		});
	}
	convertColorValues(t) {
		return function(t, e) {
			if (!Array.isArray(t)) return t || "";
			if (0 === t.length) return "#999";
			if (t.length < 2) return t[0] || "";
			const i = document.createElement("canvas"), n = i.getContext("2d"), s = i.height * e, r = n.createLinearGradient(0, 0, 0, s || e), o = 1 / (t.length - 1);
			return t.forEach(((t, e) => {
				r.addColorStop(e * o, t);
			})), r;
		}(t, this.getPixelRatio());
	}
	getPixelRatio() {
		return t = window.devicePixelRatio, Math.max(1, t || 1);
		var t;
	}
	renderBarWaveform(t, e, i, n) {
		const { width: s, height: r } = i.canvas, { halfHeight: o, barWidth: a, barRadius: h, barIndexScale: d, barSpacing: u } = function({ width: t, height: e, length: i, options: n, pixelRatio: s }) {
			const r = e / 2, o = n.barWidth ? n.barWidth * s : 1, a = n.barGap ? n.barGap * s : n.barWidth ? o / 2 : 0, h = o + a || 1;
			return {
				halfHeight: r,
				barWidth: o,
				barGap: a,
				barRadius: n.barRadius || 0,
				barIndexScale: i > 0 ? t / h / i : 0,
				barSpacing: h
			};
		}({
			width: s,
			height: r,
			length: (t[0] || []).length,
			options: e,
			pixelRatio: this.getPixelRatio()
		}), p = function({ channelData: t, barIndexScale: e, barSpacing: i, barWidth: n, halfHeight: s, vScale: r, canvasHeight: o, barAlign: a }) {
			const h = t[0] || [], d = t[1] || h, u = h.length, p = [];
			let m = 0, f = 0, g = 0;
			for (let t = 0; t <= u; t++) {
				const u = Math.round(t * e);
				if (u > m) {
					const { topHeight: t, totalHeight: e } = l({
						maxTop: f,
						maxBottom: g,
						halfHeight: s,
						vScale: r
					}), h = c({
						barAlign: a,
						halfHeight: s,
						topHeight: t,
						totalHeight: e,
						canvasHeight: o
					});
					p.push({
						x: m * i,
						y: h,
						width: n,
						height: e
					}), m = u, f = 0, g = 0;
				}
				const v = Math.abs(h[t] || 0), b = Math.abs(d[t] || 0);
				v > f && (f = v), b > g && (g = b);
			}
			return p;
		}({
			channelData: t,
			barIndexScale: d,
			barSpacing: u,
			barWidth: a,
			halfHeight: o,
			vScale: n,
			canvasHeight: r,
			barAlign: e.barAlign
		});
		i.beginPath();
		for (const t of p) h && "roundRect" in i ? i.roundRect(t.x, t.y, t.width, t.height, h) : i.rect(t.x, t.y, t.width, t.height);
		i.fill(), i.closePath();
	}
	renderLineWaveform(t, e, i, n) {
		const { width: s, height: r } = i.canvas, o = function({ channelData: t, width: e, height: i, vScale: n }) {
			const s = i / 2, r = t[0] || [];
			return [r, t[1] || r].map(((t, i) => {
				const r = t.length, o = r ? e / r : 0, a = s, h = 0 === i ? -1 : 1, l = [{
					x: 0,
					y: a
				}];
				let c = 0, d = 0;
				for (let e = 0; e <= r; e++) {
					const i = Math.round(e * o);
					if (i > c) {
						const t = a + (Math.round(d * s * n) || 1) * h;
						l.push({
							x: c,
							y: t
						}), c = i, d = 0;
					}
					const r = Math.abs(t[e] || 0);
					r > d && (d = r);
				}
				return l.push({
					x: c,
					y: a
				}), l;
			}));
		}({
			channelData: t,
			width: s,
			height: r,
			vScale: n
		});
		i.beginPath();
		for (const t of o) if (t.length) {
			i.moveTo(t[0].x, t[0].y);
			for (let e = 1; e < t.length; e++) {
				const n = t[e];
				i.lineTo(n.x, n.y);
			}
		}
		i.fill(), i.closePath();
	}
	renderWaveform(t, e, i) {
		if (i.fillStyle = this.convertColorValues(e.waveColor), e.renderFunction) return void e.renderFunction(t, i);
		const n = function({ channelData: t, barHeight: e, normalize: i }) {
			var n;
			const s = e || 1;
			if (!i) return s;
			const r = t[0];
			if (!r || 0 === r.length) return s;
			let o = 0;
			for (let t = 0; t < r.length; t++) {
				const e = null !== (n = r[t]) && void 0 !== n ? n : 0, i = Math.abs(e);
				i > o && (o = i);
			}
			return o ? s / o : s;
		}({
			channelData: t,
			barHeight: e.barHeight,
			normalize: e.normalize
		});
		u(e) ? this.renderBarWaveform(t, e, i, n) : this.renderLineWaveform(t, e, i, n);
	}
	renderSingleCanvas(t, e, i, n, s, r, o) {
		const a = this.getPixelRatio(), h = document.createElement("canvas");
		h.width = Math.round(i * a), h.height = Math.round(n * a), h.style.width = `${i}px`, h.style.height = `${n}px`, h.style.left = `${Math.round(s)}px`, r.appendChild(h);
		const l = h.getContext("2d");
		if (e.renderFunction ? (l.fillStyle = this.convertColorValues(e.waveColor), e.renderFunction(t, l)) : this.renderWaveform(t, e, l), h.width > 0 && h.height > 0) {
			const t = h.cloneNode(), i = t.getContext("2d");
			i.drawImage(h, 0, 0), i.globalCompositeOperation = "source-in", i.fillStyle = this.convertColorValues(e.progressColor), i.fillRect(0, 0, h.width, h.height), o.appendChild(t);
		}
	}
	renderMultiCanvas(t, e, i, n, s, r) {
		const o = this.getPixelRatio(), { clientWidth: a } = this.scrollContainer, h = i / o, l = function({ clientWidth: t, totalWidth: e, options: i }) {
			return p(Math.min(8e3, t, e), i);
		}({
			clientWidth: a,
			totalWidth: h,
			options: e
		});
		let c = {};
		if (0 === l) return;
		const d = (i) => {
			if (i < 0 || i >= u) return;
			if (c[i]) return;
			c[i] = !0;
			const o = i * l;
			let a = Math.min(h - o, l);
			if (a = p(a, e), a <= 0) return;
			const d = function({ channelData: t, offset: e, clampedWidth: i, totalWidth: n }) {
				return t.map(((t) => {
					const s = Math.floor(e / n * t.length), r = Math.floor((e + i) / n * t.length);
					return t.slice(s, r);
				}));
			}({
				channelData: t,
				offset: o,
				clampedWidth: a,
				totalWidth: h
			});
			this.renderSingleCanvas(d, e, a, n, o, s, r);
		}, u = Math.ceil(h / l);
		if (!this.isScrollable) {
			for (let t = 0; t < u; t++) d(t);
			return;
		}
		if (m({
			scrollLeft: this.scrollContainer.scrollLeft,
			totalWidth: h,
			numCanvases: u
		}).forEach(((t) => d(t))), u > 1) {
			const t = this.on("scroll", (() => {
				const { scrollLeft: t } = this.scrollContainer;
				Object.keys(c).length > 10 && (s.innerHTML = "", r.innerHTML = "", c = {}), m({
					scrollLeft: t,
					totalWidth: h,
					numCanvases: u
				}).forEach(((t) => d(t)));
			}));
			this.unsubscribeOnScroll.push(t);
		}
	}
	renderChannel(t, e, i, n) {
		var { overlay: s } = e, r = function(t, e) {
			var i = {};
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
			if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
				var s = 0;
				for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
			}
			return i;
		}(e, ["overlay"]);
		const o = document.createElement("div"), a = this.getHeight(r.height, r.splitChannels);
		o.style.height = `${a}px`, s && n > 0 && (o.style.marginTop = `-${a}px`), this.canvasWrapper.style.minHeight = `${a}px`, this.canvasWrapper.appendChild(o);
		const h = o.cloneNode();
		this.progressWrapper.appendChild(h), this.renderMultiCanvas(t, r, i, a, o, h);
	}
	render(e) {
		return t$2(this, void 0, void 0, (function* () {
			var t;
			this.timeouts.forEach(((t) => t())), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", null != this.options.width && (this.scrollContainer.style.width = "number" == typeof this.options.width ? `${this.options.width}px` : this.options.width);
			const i = this.getPixelRatio(), n = this.scrollContainer.clientWidth, { scrollWidth: s, isScrollable: r, useParentWidth: o, width: a } = function({ duration: t, minPxPerSec: e = 0, parentWidth: i, fillParent: n, pixelRatio: s }) {
				const r = Math.ceil(t * e), o = r > i, a = Boolean(n && !o);
				return {
					scrollWidth: r,
					isScrollable: o,
					useParentWidth: a,
					width: (a ? i : r) * s
				};
			}({
				duration: e.duration,
				minPxPerSec: this.options.minPxPerSec || 0,
				parentWidth: n,
				fillParent: this.options.fillParent,
				pixelRatio: i
			});
			if (this.isScrollable = r, this.wrapper.style.width = o ? "100%" : `${s}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e, this.emit("render"), this.options.splitChannels) for (let i = 0; i < e.numberOfChannels; i++) {
				const n = Object.assign(Object.assign({}, this.options), null === (t = this.options.splitChannels) || void 0 === t ? void 0 : t[i]);
				this.renderChannel([e.getChannelData(i)], n, a, i);
			}
			else {
				const t = [e.getChannelData(0)];
				e.numberOfChannels > 1 && t.push(e.getChannelData(1)), this.renderChannel(t, this.options, a, 0);
			}
			Promise.resolve().then((() => this.emit("rendered")));
		}));
	}
	reRender() {
		if (this.unsubscribeOnScroll.forEach(((t) => t())), this.unsubscribeOnScroll = [], !this.audioData) return;
		const { scrollWidth: t } = this.scrollContainer, { right: e } = this.progressWrapper.getBoundingClientRect();
		if (this.render(this.audioData), this.isScrollable && t !== this.scrollContainer.scrollWidth) {
			const { right: t } = this.progressWrapper.getBoundingClientRect(), i = function(t) {
				const e = 2 * t;
				return (e < 0 ? Math.floor(e) : Math.ceil(e)) / 2;
			}(t - e);
			this.scrollContainer.scrollLeft += i;
		}
	}
	zoom(t) {
		this.options.minPxPerSec = t, this.reRender();
	}
	scrollIntoView(t, e = !1) {
		const { scrollLeft: i, scrollWidth: n, clientWidth: s } = this.scrollContainer, r = t * n, o = i, a = i + s, h = s / 2;
		if (this.isDragging) {
			const t = 30;
			r + t > a ? this.scrollContainer.scrollLeft += t : r - t < o && (this.scrollContainer.scrollLeft -= t);
		} else {
			(r < o || r > a) && (this.scrollContainer.scrollLeft = r - (this.options.autoCenter ? h : 0));
			const t = r - i - h;
			e && this.options.autoCenter && t > 0 && (this.scrollContainer.scrollLeft += t);
		}
		{
			const t = this.scrollContainer.scrollLeft, { startX: e, endX: i } = f({
				scrollLeft: t,
				scrollWidth: n,
				clientWidth: s
			});
			this.emit("scroll", e, i, t, t + s);
		}
	}
	renderProgress(t, e) {
		if (isNaN(t)) return;
		const i = 100 * t;
		this.canvasWrapper.style.clipPath = `polygon(${i}% 0%, 100% 0%, 100% 100%, ${i}% 100%)`, this.progressWrapper.style.width = `${i}%`, this.cursor.style.left = `${i}%`, this.cursor.style.transform = this.options.cursorWidth ? `translateX(-${t * this.options.cursorWidth}px)` : "", this.isScrollable && this.options.autoScroll && this.scrollIntoView(t, e);
	}
	exportImage(e, i, n) {
		return t$2(this, void 0, void 0, (function* () {
			const t = this.canvasWrapper.querySelectorAll("canvas");
			if (!t.length) throw new Error("No waveform data");
			if ("dataURL" === n) {
				const n = Array.from(t).map(((t) => t.toDataURL(e, i)));
				return Promise.resolve(n);
			}
			return Promise.all(Array.from(t).map(((t) => new Promise(((n, s) => {
				t.toBlob(((t) => {
					t ? n(t) : s(/* @__PURE__ */ new Error("Could not export image"));
				}), e, i);
			})))));
		}));
	}
};
var v = class extends e$2 {
	constructor() {
		super(...arguments), this.animationFrameId = null, this.isRunning = !1;
	}
	start() {
		if (this.isRunning) return;
		this.isRunning = !0;
		const t = () => {
			this.isRunning && (this.emit("tick"), this.animationFrameId = requestAnimationFrame(t));
		};
		t();
	}
	stop() {
		this.isRunning = !1, null !== this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
	}
	destroy() {
		this.stop();
	}
};
var b = class extends e$2 {
	constructor(t = new AudioContext()) {
		super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
	}
	load() {
		return t$2(this, void 0, void 0, (function* () {}));
	}
	get src() {
		return this.currentSrc;
	}
	set src(t) {
		if (this.currentSrc = t, this._duration = void 0, !t) return this.buffer = null, void this.emit("emptied");
		fetch(t).then(((e) => {
			if (e.status >= 400) throw new Error(`Failed to fetch ${t}: ${e.status} (${e.statusText})`);
			return e.arrayBuffer();
		})).then(((e) => this.currentSrc !== t ? null : this.audioContext.decodeAudioData(e))).then(((e) => {
			this.currentSrc === t && (this.buffer = e, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
		})).catch(((t) => {
			console.error("WebAudioPlayer load error:", t);
		}));
	}
	_play() {
		if (!this.paused) return;
		this.paused = !1, this.bufferNode && (this.bufferNode.onended = null, this.bufferNode.disconnect()), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
		let t = this.playedDuration * this._playbackRate;
		(t >= this.duration || t < 0) && (t = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, t), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
			this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
		};
	}
	_pause() {
		var t;
		this.paused = !0, null === (t = this.bufferNode) || void 0 === t || t.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
	}
	play() {
		return t$2(this, void 0, void 0, (function* () {
			this.paused && (this._play(), this.emit("play"));
		}));
	}
	pause() {
		this.paused || (this._pause(), this.emit("pause"));
	}
	stopAt(t) {
		const e = t - this.currentTime, i = this.bufferNode;
		i?.stop(this.audioContext.currentTime + e), i?.addEventListener("ended", (() => {
			i === this.bufferNode && (this.bufferNode = null, this.pause());
		}), { once: !0 });
	}
	setSinkId(e) {
		return t$2(this, void 0, void 0, (function* () {
			return this.audioContext.setSinkId(e);
		}));
	}
	get playbackRate() {
		return this._playbackRate;
	}
	set playbackRate(t) {
		this._playbackRate = t, this.bufferNode && (this.bufferNode.playbackRate.value = t);
	}
	get currentTime() {
		return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
	}
	set currentTime(t) {
		const e = !this.paused;
		e && this._pause(), this.playedDuration = t / this._playbackRate, e && this._play(), this.emit("seeking"), this.emit("timeupdate");
	}
	get duration() {
		var t, e;
		return null !== (t = this._duration) && void 0 !== t ? t : (null === (e = this.buffer) || void 0 === e ? void 0 : e.duration) || 0;
	}
	set duration(t) {
		this._duration = t;
	}
	get volume() {
		return this.gainNode.gain.value;
	}
	set volume(t) {
		this.gainNode.gain.value = t, this.emit("volumechange");
	}
	get muted() {
		return this._muted;
	}
	set muted(t) {
		this._muted !== t && (this._muted = t, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
	}
	canPlayType(t) {
		return /^(audio|video)\//.test(t);
	}
	getGainNode() {
		return this.gainNode;
	}
	getChannelData() {
		const t = [];
		if (!this.buffer) return t;
		const e = this.buffer.numberOfChannels;
		for (let i = 0; i < e; i++) t.push(this.buffer.getChannelData(i));
		return t;
	}
	removeAttribute(t) {
		switch (t) {
			case "src":
				this.src = "";
				break;
			case "playbackRate":
				this.playbackRate = 0;
				break;
			case "currentTime":
				this.currentTime = 0;
				break;
			case "duration":
				this.duration = 0;
				break;
			case "volume":
				this.volume = 0;
				break;
			case "muted": this.muted = !1;
		}
	}
};
var y = {
	waveColor: "#999",
	progressColor: "#555",
	cursorWidth: 1,
	minPxPerSec: 0,
	fillParent: !0,
	interact: !0,
	dragToSeek: !1,
	autoScroll: !0,
	autoCenter: !0,
	sampleRate: 8e3
};
var C = class C extends a {
	static create(t) {
		return new C(t);
	}
	constructor(t) {
		const e = t.media || ("WebAudio" === t.backend ? new b() : void 0);
		super({
			media: e,
			mediaControls: t.mediaControls,
			autoplay: t.autoplay,
			playbackRate: t.audioRate
		}), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, y, t), this.timer = new v();
		const i = e ? void 0 : this.getMediaElement();
		this.renderer = new g(this.options, i), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
		const n = this.options.url || this.getSrc() || "";
		Promise.resolve().then((() => {
			this.emit("init");
			const { peaks: t, duration: e } = this.options;
			(n || t && e) && this.load(n, t, e).catch(((t) => {
				this.emit("error", t instanceof Error ? t : new Error(String(t)));
			}));
		}));
	}
	updateProgress(t = this.getCurrentTime()) {
		return this.renderer.renderProgress(t / this.getDuration(), this.isPlaying()), t;
	}
	initTimerEvents() {
		this.subscriptions.push(this.timer.on("tick", (() => {
			if (!this.isSeeking()) {
				const t = this.updateProgress();
				this.emit("timeupdate", t), this.emit("audioprocess", t), null != this.stopAtPosition && this.isPlaying() && t >= this.stopAtPosition && this.pause();
			}
		})));
	}
	initPlayerEvents() {
		this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", (() => {
			const t = this.updateProgress();
			this.emit("timeupdate", t);
		})), this.onMediaEvent("play", (() => {
			this.emit("play"), this.timer.start();
		})), this.onMediaEvent("pause", (() => {
			this.emit("pause"), this.timer.stop(), this.stopAtPosition = null;
		})), this.onMediaEvent("emptied", (() => {
			this.timer.stop(), this.stopAtPosition = null;
		})), this.onMediaEvent("ended", (() => {
			this.emit("timeupdate", this.getDuration()), this.emit("finish"), this.stopAtPosition = null;
		})), this.onMediaEvent("seeking", (() => {
			this.emit("seeking", this.getCurrentTime());
		})), this.onMediaEvent("error", (() => {
			var t;
			this.emit("error", null !== (t = this.getMediaElement().error) && void 0 !== t ? t : /* @__PURE__ */ new Error("Media error")), this.stopAtPosition = null;
		})));
	}
	initRendererEvents() {
		this.subscriptions.push(this.renderer.on("click", ((t, e) => {
			this.options.interact && (this.seekTo(t), this.emit("interaction", t * this.getDuration()), this.emit("click", t, e));
		})), this.renderer.on("dblclick", ((t, e) => {
			this.emit("dblclick", t, e);
		})), this.renderer.on("scroll", ((t, e, i, n) => {
			const s = this.getDuration();
			this.emit("scroll", t * s, e * s, i, n);
		})), this.renderer.on("render", (() => {
			this.emit("redraw");
		})), this.renderer.on("rendered", (() => {
			this.emit("redrawcomplete");
		})), this.renderer.on("dragstart", ((t) => {
			this.emit("dragstart", t);
		})), this.renderer.on("dragend", ((t) => {
			this.emit("dragend", t);
		})), this.renderer.on("resize", (() => {
			this.emit("resize");
		})));
		{
			let t;
			const e = this.renderer.on("drag", ((e) => {
				var i;
				if (!this.options.interact) return;
				this.renderer.renderProgress(e), clearTimeout(t);
				let n = 0;
				const s = this.options.dragToSeek;
				this.isPlaying() ? n = 0 : !0 === s ? n = 200 : s && "object" == typeof s && (n = null !== (i = s.debounceTime) && void 0 !== i ? i : 200), t = setTimeout((() => {
					this.seekTo(e);
				}), n), this.emit("interaction", e * this.getDuration()), this.emit("drag", e);
			}));
			this.subscriptions.push((() => {
				clearTimeout(t), e();
			}));
		}
	}
	initPlugins() {
		var t;
		null !== (t = this.options.plugins) && void 0 !== t && t.length && this.options.plugins.forEach(((t) => {
			this.registerPlugin(t);
		}));
	}
	unsubscribePlayerEvents() {
		this.mediaSubscriptions.forEach(((t) => t())), this.mediaSubscriptions = [];
	}
	setOptions(t) {
		this.options = Object.assign({}, this.options, t), t.duration && !t.peaks && (this.decodedData = i$2.createBuffer(this.exportPeaks(), t.duration)), t.peaks && t.duration && (this.decodedData = i$2.createBuffer(t.peaks, t.duration)), this.renderer.setOptions(this.options), t.audioRate && this.setPlaybackRate(t.audioRate), null != t.mediaControls && (this.getMediaElement().controls = t.mediaControls);
	}
	registerPlugin(t) {
		if (this.plugins.includes(t)) return t;
		t._init(this), this.plugins.push(t);
		const e = t.once("destroy", (() => {
			this.plugins = this.plugins.filter(((e) => e !== t)), this.subscriptions = this.subscriptions.filter(((t) => t !== e));
		}));
		return this.subscriptions.push(e), t;
	}
	unregisterPlugin(t) {
		this.plugins = this.plugins.filter(((e) => e !== t)), t.destroy();
	}
	getWrapper() {
		return this.renderer.getWrapper();
	}
	getWidth() {
		return this.renderer.getWidth();
	}
	getScroll() {
		return this.renderer.getScroll();
	}
	setScroll(t) {
		return this.renderer.setScroll(t);
	}
	setScrollTime(t) {
		const e = t / this.getDuration();
		this.renderer.setScrollPercentage(e);
	}
	getActivePlugins() {
		return this.plugins;
	}
	loadAudio(e, n, s, r) {
		return t$2(this, void 0, void 0, (function* () {
			var t;
			if (this.emit("load", e), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, null === (t = this.abortController) || void 0 === t || t.abort(), this.abortController = null, !n && !s) {
				const t = this.options.fetchParams || {};
				window.AbortController && !t.signal && (this.abortController = new AbortController(), t.signal = this.abortController.signal);
				const i = (t) => this.emit("loading", t);
				n = yield o$1.fetchBlob(e, i, t);
				const s = this.options.blobMimeType;
				s && (n = new Blob([n], { type: s }));
			}
			this.setSrc(e, n);
			const a = yield new Promise(((t) => {
				const e = r || this.getDuration();
				e ? t(e) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", (() => t(this.getDuration())), { once: !0 }));
			}));
			if (!e && !n) {
				const t = this.getMediaElement();
				t instanceof b && (t.duration = a);
			}
			if (s) this.decodedData = i$2.createBuffer(s, a || 0);
			else if (n) {
				const t = yield n.arrayBuffer();
				this.decodedData = yield i$2.decode(t, this.options.sampleRate);
			}
			this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
		}));
	}
	load(e, i, n) {
		return t$2(this, void 0, void 0, (function* () {
			try {
				return yield this.loadAudio(e, void 0, i, n);
			} catch (t) {
				throw this.emit("error", t), t;
			}
		}));
	}
	loadBlob(e, i, n) {
		return t$2(this, void 0, void 0, (function* () {
			try {
				return yield this.loadAudio("", e, i, n);
			} catch (t) {
				throw this.emit("error", t), t;
			}
		}));
	}
	zoom(t) {
		if (!this.decodedData) throw new Error("No audio loaded");
		this.renderer.zoom(t), this.emit("zoom", t);
	}
	getDecodedData() {
		return this.decodedData;
	}
	exportPeaks({ channels: t = 2, maxLength: e = 8e3, precision: i = 1e4 } = {}) {
		if (!this.decodedData) throw new Error("The audio has not been decoded yet");
		const n = Math.min(t, this.decodedData.numberOfChannels), s = [];
		for (let t = 0; t < n; t++) {
			const n = this.decodedData.getChannelData(t), r = [], o = n.length / e;
			for (let t = 0; t < e; t++) {
				const e = n.slice(Math.floor(t * o), Math.ceil((t + 1) * o));
				let s = 0;
				for (let t = 0; t < e.length; t++) {
					const i = e[t];
					Math.abs(i) > Math.abs(s) && (s = i);
				}
				r.push(Math.round(s * i) / i);
			}
			s.push(r);
		}
		return s;
	}
	getDuration() {
		let t = super.getDuration() || 0;
		return 0 !== t && t !== 1 / 0 || !this.decodedData || (t = this.decodedData.duration), t;
	}
	toggleInteraction(t) {
		this.options.interact = t;
	}
	setTime(t) {
		this.stopAtPosition = null, super.setTime(t), this.updateProgress(t), this.emit("timeupdate", t);
	}
	seekTo(t) {
		const e = this.getDuration() * t;
		this.setTime(e);
	}
	play(e, i) {
		const n = Object.create(null, { play: { get: () => super.play } });
		return t$2(this, void 0, void 0, (function* () {
			null != e && this.setTime(e);
			const t = yield n.play.call(this);
			return null != i && (this.media instanceof b ? this.media.stopAt(i) : this.stopAtPosition = i), t;
		}));
	}
	playPause() {
		return t$2(this, void 0, void 0, (function* () {
			return this.isPlaying() ? this.pause() : this.play();
		}));
	}
	stop() {
		this.pause(), this.setTime(0);
	}
	skip(t) {
		this.setTime(this.getCurrentTime() + t);
	}
	empty() {
		this.load("", [[0]], .001);
	}
	setMediaElement(t) {
		this.unsubscribePlayerEvents(), super.setMediaElement(t), this.initPlayerEvents();
	}
	exportImage() {
		return t$2(this, arguments, void 0, (function* (t = "image/png", e = 1, i = "dataURL") {
			return this.renderer.exportImage(t, e, i);
		}));
	}
	destroy() {
		var t;
		this.emit("destroy"), null === (t = this.abortController) || void 0 === t || t.abort(), this.plugins.forEach(((t) => t.destroy())), this.subscriptions.forEach(((t) => t())), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
	}
};
C.BasePlugin = class extends e$2 {
	constructor(t) {
		super(), this.subscriptions = [], this.isDestroyed = !1, this.options = t;
	}
	onInit() {}
	_init(t) {
		this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = t, this.onInit();
	}
	destroy() {
		this.emit("destroy"), this.subscriptions.forEach(((t) => t())), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
	}
}, C.dom = r$1;
//#endregion
//#region ../../node_modules/.pnpm/wavesurfer.js@7.11.1/node_modules/wavesurfer.js/dist/plugins/zoom.esm.js
var t$1 = class {
	constructor() {
		this.listeners = {};
	}
	on(t, i, e) {
		if (this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set()), null == e ? void 0 : e.once) {
			const e = (...s) => {
				this.un(t, e), i(...s);
			};
			return this.listeners[t].add(e), () => this.un(t, e);
		}
		return this.listeners[t].add(i), () => this.un(t, i);
	}
	un(t, i) {
		var e;
		null === (e = this.listeners[t]) || void 0 === e || e.delete(i);
	}
	once(t, i) {
		return this.on(t, i, { once: !0 });
	}
	unAll() {
		this.listeners = {};
	}
	emit(t, ...i) {
		this.listeners[t] && this.listeners[t].forEach(((t) => t(...i)));
	}
};
var i$1 = class extends t$1 {
	constructor(t) {
		super(), this.subscriptions = [], this.isDestroyed = !1, this.options = t;
	}
	onInit() {}
	_init(t) {
		this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = t, this.onInit();
	}
	destroy() {
		this.emit("destroy"), this.subscriptions.forEach(((t) => t())), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
	}
};
var e$1 = {
	scale: .5,
	deltaThreshold: 5,
	exponentialZooming: !1,
	iterations: 20
};
var s$1 = class s$1 extends i$1 {
	constructor(t) {
		super(t || {}), this.wrapper = void 0, this.container = null, this.accumulatedDelta = 0, this.pointerTime = 0, this.oldX = 0, this.endZoom = 0, this.startZoom = 0, this.isPinching = !1, this.initialPinchDistance = 0, this.initialZoom = 0, this.onWheel = (t) => {
			if (this.wavesurfer && this.container && !(Math.abs(t.deltaX) >= Math.abs(t.deltaY)) && (t.preventDefault(), this.accumulatedDelta += -t.deltaY, 0 === this.startZoom && this.options.exponentialZooming && (this.startZoom = this.wavesurfer.getWrapper().clientWidth / this.wavesurfer.getDuration()), 0 === this.options.deltaThreshold || Math.abs(this.accumulatedDelta) >= this.options.deltaThreshold)) {
				const i = this.wavesurfer.getDuration(), e = 0 === this.wavesurfer.options.minPxPerSec ? this.wavesurfer.getWrapper().scrollWidth / i : this.wavesurfer.options.minPxPerSec, s = t.clientX - this.container.getBoundingClientRect().left, n = this.container.clientWidth, o = this.wavesurfer.getScroll();
				s === this.oldX && 0 !== this.oldX || (this.pointerTime = (o + s) / e), this.oldX = s;
				const h = this.calculateNewZoom(e, this.accumulatedDelta), r = n / h * (s / n);
				h * i < n ? (this.wavesurfer.zoom(n / i), this.container.scrollLeft = 0) : (this.wavesurfer.zoom(h), this.container.scrollLeft = (this.pointerTime - r) * h), this.accumulatedDelta = 0;
			}
		}, this.calculateNewZoom = (t, i) => {
			let e;
			if (this.options.exponentialZooming) {
				const s = i > 0 ? Math.pow(this.endZoom / this.startZoom, 1 / (this.options.iterations - 1)) : Math.pow(this.startZoom / this.endZoom, 1 / (this.options.iterations - 1));
				e = Math.max(0, t * s);
			} else e = Math.max(0, t + i * this.options.scale);
			return Math.min(e, this.options.maxZoom);
		}, this.onTouchStart = (t) => {
			if (this.wavesurfer && this.container && 2 === t.touches.length) {
				t.preventDefault(), this.isPinching = !0, this.initialPinchDistance = this.getTouchDistance(t);
				const i = this.wavesurfer.getDuration();
				this.initialZoom = 0 === this.wavesurfer.options.minPxPerSec ? this.wavesurfer.getWrapper().scrollWidth / i : this.wavesurfer.options.minPxPerSec;
				const e = this.getTouchCenterX(t) - this.container.getBoundingClientRect().left, s = this.wavesurfer.getScroll();
				this.pointerTime = (s + e) / this.initialZoom, this.oldX = e;
			}
		}, this.onTouchMove = (t) => {
			if (!this.isPinching || 2 !== t.touches.length || !this.wavesurfer || !this.container) return;
			t.preventDefault();
			const i = this.getTouchDistance(t) / this.initialPinchDistance;
			let e = this.initialZoom * i;
			e = Math.min(e, this.options.maxZoom);
			const s = this.wavesurfer.getDuration(), n = this.container.clientWidth, o = n / s;
			e < o && (e = o);
			const h = n / e * (this.oldX / n);
			e === o ? (this.wavesurfer.zoom(o), this.container.scrollLeft = 0) : (this.wavesurfer.zoom(e), this.container.scrollLeft = (this.pointerTime - h) * e);
		}, this.onTouchEnd = (t) => {
			this.isPinching && t.touches.length < 2 && (this.isPinching = !1, this.initialPinchDistance = 0, this.initialZoom = 0);
		}, this.options = Object.assign({}, e$1, t);
	}
	static create(t) {
		return new s$1(t);
	}
	onInit() {
		var t;
		this.wrapper = null === (t = this.wavesurfer) || void 0 === t ? void 0 : t.getWrapper(), this.wrapper && (this.container = this.wrapper.parentElement, this.container.addEventListener("wheel", this.onWheel), this.container.addEventListener("touchstart", this.onTouchStart, {
			passive: !1,
			capture: !0
		}), this.container.addEventListener("touchmove", this.onTouchMove, {
			passive: !1,
			capture: !0
		}), this.container.addEventListener("touchend", this.onTouchEnd, {
			passive: !1,
			capture: !0
		}), this.container.addEventListener("touchcancel", this.onTouchEnd, {
			passive: !1,
			capture: !0
		}), void 0 === this.options.maxZoom && (this.options.maxZoom = this.container.clientWidth), this.endZoom = this.options.maxZoom);
	}
	getTouchDistance(t) {
		const i = t.touches[0], e = t.touches[1];
		return Math.sqrt(Math.pow(e.clientX - i.clientX, 2) + Math.pow(e.clientY - i.clientY, 2));
	}
	getTouchCenterX(t) {
		const i = t.touches[0], e = t.touches[1];
		return (i.clientX + e.clientX) / 2;
	}
	destroy() {
		this.container && (this.container.removeEventListener("wheel", this.onWheel), this.container.removeEventListener("touchstart", this.onTouchStart), this.container.removeEventListener("touchmove", this.onTouchMove), this.container.removeEventListener("touchend", this.onTouchEnd), this.container.removeEventListener("touchcancel", this.onTouchEnd)), super.destroy();
	}
};
//#endregion
//#region ../../node_modules/.pnpm/wavesurfer.js@7.11.1/node_modules/wavesurfer.js/dist/plugins/regions.esm.js
var t = class {
	constructor() {
		this.listeners = {};
	}
	on(t, e, i) {
		if (this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set()), null == i ? void 0 : i.once) {
			const i = (...n) => {
				this.un(t, i), e(...n);
			};
			return this.listeners[t].add(i), () => this.un(t, i);
		}
		return this.listeners[t].add(e), () => this.un(t, e);
	}
	un(t, e) {
		var i;
		null === (i = this.listeners[t]) || void 0 === i || i.delete(e);
	}
	once(t, e) {
		return this.on(t, e, { once: !0 });
	}
	unAll() {
		this.listeners = {};
	}
	emit(t, ...e) {
		this.listeners[t] && this.listeners[t].forEach(((t) => t(...e)));
	}
};
var e = class extends t {
	constructor(t) {
		super(), this.subscriptions = [], this.isDestroyed = !1, this.options = t;
	}
	onInit() {}
	_init(t) {
		this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = t, this.onInit();
	}
	destroy() {
		this.emit("destroy"), this.subscriptions.forEach(((t) => t())), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
	}
};
function i(t, e, i, n, s = 3, r = 0, o = 100) {
	if (!t) return () => {};
	const h = /* @__PURE__ */ new Map(), a = matchMedia("(pointer: coarse)").matches;
	let l = () => {};
	const d = (d) => {
		if (d.button !== r) return;
		if (h.set(d.pointerId, d), h.size > 1) return;
		let c = d.clientX, u = d.clientY, v = !1;
		const g = Date.now(), p = (n) => {
			if (n.defaultPrevented || h.size > 1) return;
			if (a && Date.now() - g < o) return;
			const r = n.clientX, l = n.clientY, d = r - c, p = l - u;
			if (v || Math.abs(d) > s || Math.abs(p) > s) {
				n.preventDefault(), n.stopPropagation();
				const { left: o, top: h } = t.getBoundingClientRect();
				v || (i?.(c - o, u - h), v = !0), e(d, p, r - o, l - h), c = r, u = l;
			}
		}, m = (e) => {
			if (h.delete(e.pointerId), v) {
				const i = e.clientX, s = e.clientY, { left: o, top: h } = t.getBoundingClientRect();
				n?.(i - o, s - h);
			}
			l();
		}, f = (t) => {
			h.delete(t.pointerId), t.relatedTarget && t.relatedTarget !== document.documentElement || m(t);
		}, b = (t) => {
			v && (t.stopPropagation(), t.preventDefault());
		}, E = (t) => {
			t.defaultPrevented || h.size > 1 || v && t.preventDefault();
		};
		document.addEventListener("pointermove", p), document.addEventListener("pointerup", m), document.addEventListener("pointerout", f), document.addEventListener("pointercancel", f), document.addEventListener("touchmove", E, { passive: !1 }), document.addEventListener("click", b, { capture: !0 }), l = () => {
			document.removeEventListener("pointermove", p), document.removeEventListener("pointerup", m), document.removeEventListener("pointerout", f), document.removeEventListener("pointercancel", f), document.removeEventListener("touchmove", E), setTimeout((() => {
				document.removeEventListener("click", b, { capture: !0 });
			}), 10);
		};
	};
	return t.addEventListener("pointerdown", d), () => {
		l(), t.removeEventListener("pointerdown", d), h.clear();
	};
}
function n(t, e) {
	const i = e.xmlns ? document.createElementNS(e.xmlns, t) : document.createElement(t);
	for (const [t, s] of Object.entries(e)) if ("children" === t && s) for (const [t, e] of Object.entries(s)) e instanceof Node ? i.appendChild(e) : "string" == typeof e ? i.appendChild(document.createTextNode(e)) : i.appendChild(n(t, e));
	else "style" === t ? Object.assign(i.style, s) : "textContent" === t ? i.textContent = s : i.setAttribute(t, s.toString());
	return i;
}
function s(t, e, i) {
	const s = n(t, e || {});
	return i?.appendChild(s), s;
}
var r = class extends t {
	constructor(t, e, i = 0) {
		var n, s, r, o, h, a, l, d, c, u;
		super(), this.totalDuration = e, this.numberOfChannels = i, this.element = null, this.minLength = 0, this.maxLength = 1 / 0, this.contentEditable = !1, this.subscriptions = [], this.updatingSide = void 0, this.isRemoved = !1, this.subscriptions = [], this.id = t.id || `region-${Math.random().toString(32).slice(2)}`, this.start = this.clampPosition(t.start), this.end = this.clampPosition(null !== (n = t.end) && void 0 !== n ? n : t.start), this.drag = null === (s = t.drag) || void 0 === s || s, this.resize = null === (r = t.resize) || void 0 === r || r, this.resizeStart = null === (o = t.resizeStart) || void 0 === o || o, this.resizeEnd = null === (h = t.resizeEnd) || void 0 === h || h, this.color = null !== (a = t.color) && void 0 !== a ? a : "rgba(0, 0, 0, 0.1)", this.minLength = null !== (l = t.minLength) && void 0 !== l ? l : this.minLength, this.maxLength = null !== (d = t.maxLength) && void 0 !== d ? d : this.maxLength, this.channelIdx = null !== (c = t.channelIdx) && void 0 !== c ? c : -1, this.contentEditable = null !== (u = t.contentEditable) && void 0 !== u ? u : this.contentEditable, this.element = this.initElement(), this.setContent(t.content), this.setPart(), this.renderPosition(), this.initMouseEvents();
	}
	clampPosition(t) {
		return Math.max(0, Math.min(this.totalDuration, t));
	}
	setPart() {
		var t;
		const e = this.start === this.end;
		null === (t = this.element) || void 0 === t || t.setAttribute("part", `${e ? "marker" : "region"} ${this.id}`);
	}
	addResizeHandles(t) {
		const e = {
			position: "absolute",
			zIndex: "2",
			width: "6px",
			height: "100%",
			top: "0",
			cursor: "ew-resize",
			wordBreak: "keep-all"
		}, n = s("div", {
			part: "region-handle region-handle-left",
			style: Object.assign(Object.assign({}, e), {
				left: "0",
				borderLeft: "2px solid rgba(0, 0, 0, 0.5)",
				borderRadius: "2px 0 0 2px"
			})
		}, t), r = s("div", {
			part: "region-handle region-handle-right",
			style: Object.assign(Object.assign({}, e), {
				right: "0",
				borderRight: "2px solid rgba(0, 0, 0, 0.5)",
				borderRadius: "0 2px 2px 0"
			})
		}, t);
		this.subscriptions.push(i(n, ((t) => this.onResize(t, "start")), (() => null), (() => this.onEndResizing("start")), 1), i(r, ((t) => this.onResize(t, "end")), (() => null), (() => this.onEndResizing("end")), 1));
	}
	removeResizeHandles(t) {
		const e = t.querySelector("[part*=\"region-handle-left\"]"), i = t.querySelector("[part*=\"region-handle-right\"]");
		e && t.removeChild(e), i && t.removeChild(i);
	}
	initElement() {
		if (this.isRemoved) return null;
		const t = this.start === this.end;
		let e = 0, i = 100;
		this.channelIdx >= 0 && this.numberOfChannels > 0 && this.channelIdx < this.numberOfChannels && (i = 100 / this.numberOfChannels, e = i * this.channelIdx);
		const n = s("div", { style: {
			position: "absolute",
			top: `${e}%`,
			height: `${i}%`,
			backgroundColor: t ? "none" : this.color,
			borderLeft: t ? "2px solid " + this.color : "none",
			borderRadius: "2px",
			boxSizing: "border-box",
			transition: "background-color 0.2s ease",
			cursor: this.drag ? "grab" : "default",
			pointerEvents: "all"
		} });
		return !t && this.resize && this.addResizeHandles(n), n;
	}
	renderPosition() {
		if (!this.element) return;
		const t = this.start / this.totalDuration, e = (this.totalDuration - this.end) / this.totalDuration;
		this.element.style.left = 100 * t + "%", this.element.style.right = 100 * e + "%";
	}
	toggleCursor(t) {
		var e;
		this.drag && null !== (e = this.element) && void 0 !== e && e.style && (this.element.style.cursor = t ? "grabbing" : "grab");
	}
	initMouseEvents() {
		const { element: t } = this;
		t && (t.addEventListener("click", ((t) => this.emit("click", t))), t.addEventListener("mouseenter", ((t) => this.emit("over", t))), t.addEventListener("mouseleave", ((t) => this.emit("leave", t))), t.addEventListener("dblclick", ((t) => this.emit("dblclick", t))), t.addEventListener("pointerdown", (() => this.toggleCursor(!0))), t.addEventListener("pointerup", (() => this.toggleCursor(!1))), this.subscriptions.push(i(t, ((t) => this.onMove(t)), (() => this.toggleCursor(!0)), (() => {
			this.toggleCursor(!1), this.drag && this.emit("update-end");
		}))), this.contentEditable && this.content && (this.contentClickListener = (t) => this.onContentClick(t), this.contentBlurListener = () => this.onContentBlur(), this.content.addEventListener("click", this.contentClickListener), this.content.addEventListener("blur", this.contentBlurListener)));
	}
	_onUpdate(t, e, i) {
		var n;
		if (!(null === (n = this.element) || void 0 === n ? void 0 : n.parentElement)) return;
		const { width: s } = this.element.parentElement.getBoundingClientRect(), r = t / s * this.totalDuration;
		let o = e && "start" !== e ? this.start : this.start + r, h = e && "end" !== e ? this.end : this.end + r;
		const a = void 0 !== i;
		a && this.updatingSide && this.updatingSide !== e && ("start" === this.updatingSide ? o = i : h = i), o = Math.max(0, o), h = Math.min(this.totalDuration, h);
		const l = h - o;
		this.updatingSide = e;
		const d = l >= this.minLength && l <= this.maxLength;
		o <= h && (d || a) && (this.start = o, this.end = h, this.renderPosition(), this.emit("update", e));
	}
	onMove(t) {
		this.drag && this._onUpdate(t);
	}
	onResize(t, e) {
		this.resize && (this.resizeStart || "start" !== e) && (this.resizeEnd || "end" !== e) && this._onUpdate(t, e);
	}
	onEndResizing(t) {
		this.resize && (this.emit("update-end", t), this.updatingSide = void 0);
	}
	onContentClick(t) {
		t.stopPropagation();
		t.target.focus(), this.emit("click", t);
	}
	onContentBlur() {
		this.emit("update-end");
	}
	_setTotalDuration(t) {
		this.totalDuration = t, this.renderPosition();
	}
	play(t) {
		this.emit("play", t && this.end !== this.start ? this.end : void 0);
	}
	getContent(t = !1) {
		var e;
		return t ? this.content || void 0 : this.element instanceof HTMLElement ? (null === (e = this.content) || void 0 === e ? void 0 : e.innerHTML) || void 0 : "";
	}
	setContent(t) {
		var e;
		if (this.element) if (this.content && this.contentEditable && (this.contentClickListener && this.content.removeEventListener("click", this.contentClickListener), this.contentBlurListener && this.content.removeEventListener("blur", this.contentBlurListener)), null === (e = this.content) || void 0 === e || e.remove(), t) {
			if ("string" == typeof t) {
				const e = this.start === this.end;
				this.content = s("div", {
					style: {
						padding: `0.2em ${e ? .2 : .4}em`,
						display: "inline-block"
					},
					textContent: t
				});
			} else this.content = t;
			this.contentEditable && (this.content.contentEditable = "true", this.contentClickListener = (t) => this.onContentClick(t), this.contentBlurListener = () => this.onContentBlur(), this.content.addEventListener("click", this.contentClickListener), this.content.addEventListener("blur", this.contentBlurListener)), this.content.setAttribute("part", "region-content"), this.element.appendChild(this.content), this.emit("content-changed");
		} else this.content = void 0;
	}
	setOptions(t) {
		var e, i;
		if (this.element) {
			if (t.color && (this.color = t.color, this.element.style.backgroundColor = this.color), void 0 !== t.drag && (this.drag = t.drag, this.element.style.cursor = this.drag ? "grab" : "default"), void 0 !== t.start || void 0 !== t.end) {
				const n = this.start === this.end;
				this.start = this.clampPosition(null !== (e = t.start) && void 0 !== e ? e : this.start), this.end = this.clampPosition(null !== (i = t.end) && void 0 !== i ? i : n ? this.start : this.end), this.renderPosition(), this.setPart();
			}
			if (t.content && this.setContent(t.content), t.id && (this.id = t.id, this.setPart()), void 0 !== t.resize && t.resize !== this.resize) {
				const e = this.start === this.end;
				this.resize = t.resize, this.resize && !e ? this.addResizeHandles(this.element) : this.removeResizeHandles(this.element);
			}
			void 0 !== t.resizeStart && (this.resizeStart = t.resizeStart), void 0 !== t.resizeEnd && (this.resizeEnd = t.resizeEnd);
		}
	}
	remove() {
		this.isRemoved = !0, this.emit("remove"), this.subscriptions.forEach(((t) => t())), this.element && (this.element.remove(), this.element = null);
	}
};
var o = class o extends e {
	constructor(t) {
		super(t), this.regions = [], this.regionsContainer = this.initRegionsContainer();
	}
	static create(t) {
		return new o(t);
	}
	onInit() {
		if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
		this.wavesurfer.getWrapper().appendChild(this.regionsContainer), this.subscriptions.push(this.wavesurfer.on("ready", ((t) => {
			this.regions.forEach(((e) => e._setTotalDuration(t)));
		})));
		let t = [];
		this.subscriptions.push(this.wavesurfer.on("timeupdate", ((e) => {
			const i = this.regions.filter(((t) => t.start <= e && (t.end === t.start ? t.start + .05 : t.end) >= e));
			i.forEach(((e) => {
				t.includes(e) || this.emit("region-in", e);
			})), t.forEach(((t) => {
				i.includes(t) || this.emit("region-out", t);
			})), t = i;
		})));
	}
	initRegionsContainer() {
		return s("div", {
			part: "regions-container",
			style: {
				position: "absolute",
				top: "0",
				left: "0",
				width: "100%",
				height: "100%",
				zIndex: "5",
				pointerEvents: "none"
			}
		});
	}
	getRegions() {
		return this.regions;
	}
	avoidOverlapping(t) {
		t.content && setTimeout((() => {
			const e = t.content, i = e.getBoundingClientRect(), n = this.regions.map(((e) => {
				if (e === t || !e.content) return 0;
				const n = e.content.getBoundingClientRect();
				return i.left < n.left + n.width && n.left < i.left + i.width ? n.height : 0;
			})).reduce(((t, e) => t + e), 0);
			e.style.marginTop = `${n}px`;
		}), 10);
	}
	adjustScroll(t) {
		var e, i;
		if (!t.element) return;
		const n = null === (i = null === (e = this.wavesurfer) || void 0 === e ? void 0 : e.getWrapper()) || void 0 === i ? void 0 : i.parentElement;
		if (!n) return;
		const { clientWidth: s, scrollWidth: r } = n;
		if (r <= s) return;
		const o = n.getBoundingClientRect(), h = t.element.getBoundingClientRect(), a = h.left - o.left, l = h.right - o.left;
		a < 0 ? n.scrollLeft += a : l > s && (n.scrollLeft += l - s);
	}
	virtualAppend(t, e, i) {
		const n = () => {
			if (!this.wavesurfer) return;
			const n = this.wavesurfer.getWidth(), s = this.wavesurfer.getScroll(), r = e.clientWidth, o = this.wavesurfer.getDuration(), h = Math.round(t.start / o * r), a = h + (Math.round((t.end - t.start) / o * r) || 1) > s && h < s + n;
			a && !i.parentElement ? e.appendChild(i) : !a && i.parentElement && i.remove();
		};
		setTimeout((() => {
			if (!this.wavesurfer || !t.element) return;
			n();
			const e = this.wavesurfer.on("scroll", n), i = this.wavesurfer.on("zoom", n), s = this.wavesurfer.on("resize", n);
			this.subscriptions.push(e, i, s), t.once("remove", (() => {
				e(), i(), s();
			}));
		}), 0);
	}
	saveRegion(t) {
		if (!t.element) return;
		this.virtualAppend(t, this.regionsContainer, t.element), this.avoidOverlapping(t), this.regions.push(t);
		const e = [
			t.on("update", ((e) => {
				e || this.adjustScroll(t), this.emit("region-update", t, e);
			})),
			t.on("update-end", ((e) => {
				this.avoidOverlapping(t), this.emit("region-updated", t, e);
			})),
			t.on("play", ((e) => {
				var i;
				null === (i = this.wavesurfer) || void 0 === i || i.play(t.start, e);
			})),
			t.on("click", ((e) => {
				this.emit("region-clicked", t, e);
			})),
			t.on("dblclick", ((e) => {
				this.emit("region-double-clicked", t, e);
			})),
			t.on("content-changed", (() => {
				this.emit("region-content-changed", t);
			})),
			t.once("remove", (() => {
				e.forEach(((t) => t())), this.regions = this.regions.filter(((e) => e !== t)), this.emit("region-removed", t);
			}))
		];
		this.subscriptions.push(...e), this.emit("region-created", t);
	}
	addRegion(t) {
		var e, i;
		if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
		const n = this.wavesurfer.getDuration(), o = new r(t, n, null === (i = null === (e = this.wavesurfer) || void 0 === e ? void 0 : e.getDecodedData()) || void 0 === i ? void 0 : i.numberOfChannels);
		return this.emit("region-initialized", o), n ? this.saveRegion(o) : this.subscriptions.push(this.wavesurfer.once("ready", ((t) => {
			o._setTotalDuration(t), this.saveRegion(o);
		}))), o;
	}
	enableDragSelection(t, e = 3) {
		var n;
		const s = null === (n = this.wavesurfer) || void 0 === n ? void 0 : n.getWrapper();
		if (!(s && s instanceof HTMLElement)) return () => {};
		let o = null, h = 0, a = 0;
		return i(s, ((t, e, i) => {
			o && o._onUpdate(t, i > h ? "end" : "start", a);
		}), ((e) => {
			var i, n;
			if (h = e, !this.wavesurfer) return;
			const s = this.wavesurfer.getDuration(), l = null === (n = null === (i = this.wavesurfer) || void 0 === i ? void 0 : i.getDecodedData()) || void 0 === n ? void 0 : n.numberOfChannels, { width: d } = this.wavesurfer.getWrapper().getBoundingClientRect();
			a = h / d * s;
			const c = e / d * s, u = (e + 5) / d * s;
			o = new r(Object.assign(Object.assign({}, t), {
				start: c,
				end: u
			}), s, l), this.emit("region-initialized", o), o.element && this.regionsContainer.appendChild(o.element);
		}), (() => {
			o && (this.saveRegion(o), o.updatingSide = void 0, o = null);
		}), e);
	}
	clearRegions() {
		this.regions.slice().forEach(((t) => t.remove())), this.regions = [];
	}
	destroy() {
		this.clearRegions(), super.destroy(), this.regionsContainer.remove();
	}
};
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/composables/useWaveform.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
function useWaveform(videoInstance) {
	const notice = useNotification();
	const ws = ref(null);
	const waveformLoading = ref(false);
	const waveformVisible = useStorage("cut-waveform-visible", true);
	let currentVideoFile = null;
	let regionsPlugin = null;
	let isSyncing = false;
	let videoTimeUpdateHandler = null;
	let videoPlayHandler = null;
	let videoPauseHandler = null;
	let waveformInteractionHandler = null;
	let segmentEventHandler = null;
	/**
	* 设置视频与波形图的联动
	*/
	const setupSyncWithVideo = () => {
		if (!ws.value || !videoInstance.value) return;
		videoTimeUpdateHandler = () => {
			if (videoInstance.value && ws.value) ws.value.setTime(videoInstance.value.currentTime);
		};
		videoInstance.value.on("video:timeupdate", videoTimeUpdateHandler);
		waveformInteractionHandler = (time) => {
			if (videoInstance.value) videoInstance.value.currentTime = time;
		};
		ws.value.on("interaction", waveformInteractionHandler);
	};
	/**
	* 清除视频与波形图的联动监听器
	*/
	const cleanupSyncWithVideo = () => {
		if (videoInstance.value && videoTimeUpdateHandler) {
			videoInstance.value.off("video:timeupdate", videoTimeUpdateHandler);
			videoTimeUpdateHandler = null;
		}
		if (videoInstance.value && videoPlayHandler) {
			videoInstance.value.off("video:play", videoPlayHandler);
			videoPlayHandler = null;
		}
		if (videoInstance.value && videoPauseHandler) {
			videoInstance.value.off("video:pause", videoPauseHandler);
			videoPauseHandler = null;
		}
		if (ws.value && waveformInteractionHandler) {
			ws.value.un("interaction", waveformInteractionHandler);
			ws.value.un("seeking", waveformInteractionHandler);
			waveformInteractionHandler = null;
		}
	};
	/**
	* 初始化波形图
	*/
	const initWaveform = async (rawVideoFile) => {
		currentVideoFile = rawVideoFile;
		if (ws.value) return;
		if (!rawVideoFile) return;
		if (!videoInstance.value) return;
		if (waveformLoading.value) return;
		if (!waveformVisible.value) return;
		waveformLoading.value = true;
		let peaks = [];
		try {
			peaks = (await task.extractPeaks(rawVideoFile)).output.data;
		} catch (error) {
			waveformLoading.value = false;
			console.error("Error extracting audio for waveform:", error);
			return { error: "提取音频失败，无法生成波形图。" };
		}
		const regions = o.create();
		regionsPlugin = regions;
		ws.value = C.create({
			container: "#waveform",
			waveColor: "#4F4A85",
			progressColor: "#978fae",
			height: 64,
			normalize: false,
			dragToSeek: true,
			hideScrollbar: false,
			peaks: [peaks],
			plugins: [regions],
			duration: videoInstance.value.duration
		});
		setupSyncWithVideo();
		ws.value.registerPlugin(s$1.create({ exponentialZooming: true }));
		const segmentStore = useSegmentStore();
		const { cuts } = storeToRefs(segmentStore);
		ws.value.once("decode", () => {
			waveformLoading.value = false;
			for (const cut of cuts.value) regions.addRegion({
				drag: false,
				resize: true,
				minLength: 1,
				start: cut.start,
				end: cut.end,
				color: generateDistinctColor(cut.index),
				content: cut.name,
				id: cut.id
			});
			regions.on("region-updated", (region) => {
				if (isSyncing) return;
				isSyncing = true;
				segmentStore.updateSegment(region.id, {
					start: region.start,
					end: region.end
				});
				isSyncing = false;
			});
			regions.on("region-removed", (region) => {
				if (isSyncing) return;
				isSyncing = true;
				segmentStore.removeSegment(region.id);
				isSyncing = false;
			});
			regions.on("region-double-clicked", (region) => {
				if (videoInstance.value) {
					videoInstance.value.currentTime = region.start;
					segmentStore.selectCut(region.id);
				}
			});
			segmentEventHandler = (data) => {
				if (isSyncing || !regionsPlugin) return;
				isSyncing = true;
				try {
					if (data.type === "add" && data.segment) regionsPlugin.addRegion({
						drag: false,
						resize: true,
						minLength: 1,
						start: data.segment.start,
						end: data.segment.end,
						color: generateDistinctColor(data.segment.index),
						content: data.segment.name,
						id: data.segment.id
					});
					else if (data.type === "remove" && data.id) {
						const region = regionsPlugin.getRegions().find((r) => r.id === data.id);
						if (region) region.remove();
					} else if (data.type === "update" && data.segment) {
						const region = regionsPlugin.getRegions().find((r) => r.id === data.segment.id);
						if (region) {
							if (region.start !== data.segment.start || region.end !== data.segment.end) region.setOptions({
								start: data.segment.start,
								end: data.segment.end
							});
							if (region.content?.textContent !== data.segment.name) region.setOptions({ content: data.segment.name });
							if (region.color !== generateDistinctColor(data.segment.index, data.segment.checked)) region.setOptions({ color: generateDistinctColor(data.segment.index, data.segment.checked) });
						}
					} else if (data.type === "clear") regionsPlugin.clearRegions();
				} finally {
					isSyncing = false;
				}
			};
			segmentStore.on(segmentEventHandler);
		});
		return { error: null };
	};
	/**
	* 销毁波形图
	*/
	const destroyWaveform = () => {
		cleanupSyncWithVideo();
		if (segmentEventHandler) {
			useSegmentStore().off(segmentEventHandler);
			segmentEventHandler = null;
		}
		regionsPlugin = null;
		if (ws.value) {
			ws.value.destroy();
			ws.value = null;
			waveformLoading.value = false;
		}
	};
	/**
	* 监听 waveformVisible 状态变化
	*/
	watch(waveformVisible, async (visible) => {
		if (visible && currentVideoFile) {
			const result = await initWaveform(currentVideoFile);
			if (result?.error) {
				notice.info({
					title: result.error,
					duration: 2e3
				});
				waveformVisible.value = false;
			}
		}
	});
	return {
		ws,
		waveformLoading,
		waveformVisible,
		initWaveform,
		destroyWaveform
	};
}
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/composables/useChapter.ts
init_runtime_core_esm_bundler();
function useChapter(videoInstance) {
	let segmentEventHandler = null;
	const segmentToChapter = (segment) => ({
		start: segment.start,
		end: segment.end ?? 0,
		title: segment.name,
		color: generateDistinctColor(segment.index, segment.checked)
	});
	const updateAllChapters = () => {
		if (!videoInstance.value) return;
		const chapterPlugin = videoInstance.value?.artplayerPluginChapter;
		if (!chapterPlugin) return;
		const chapters = useSegmentStore().cuts.map(segmentToChapter);
		console.log("Updating chapters:", chapters);
		chapterPlugin.update({ chapters });
	};
	const setupChapterSync = () => {
		if (!videoInstance.value) return;
		const segmentStore = useSegmentStore();
		updateAllChapters();
		segmentEventHandler = () => {
			updateAllChapters();
		};
		segmentStore.on(segmentEventHandler);
	};
	const cleanupChapterSync = () => {
		if (segmentEventHandler) {
			useSegmentStore().off(segmentEventHandler);
			segmentEventHandler = null;
		}
	};
	watch(videoInstance, (instance) => {
		if (instance) {
			instance.on("video:loadedmetadata", () => {
				setupChapterSync();
			});
			if (instance.duration) setupChapterSync();
		} else cleanupChapterSync();
	}, { immediate: true });
	return {
		updateAllChapters,
		setupChapterSync,
		cleanupChapterSync
	};
}
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/composables/useKeyboardShortcuts.ts
init_runtime_core_esm_bundler();
var PLAYBACK_RATES = [
	.5,
	.75,
	1,
	1.25,
	1.5,
	2
];
var PLAYBACK_RATE_EPSILON = .001;
function useKeyboardShortcuts(handlers, videoInstance) {
	const shouldIgnoreMediaShortcut = (event) => {
		const target = event?.target;
		if (!target) return false;
		if (target.tagName === "BUTTON") return true;
		if (target.className?.includes?.("artplayer")) return true;
		if (target.isContentEditable) return true;
		return [
			"INPUT",
			"TEXTAREA",
			"SELECT"
		].includes(target.tagName);
	};
	const updatePlaybackRate = (step) => {
		if (!videoInstance.value?.url) return;
		const currentRate = videoInstance.value.playbackRate;
		const currentIndex = PLAYBACK_RATES.findIndex((rate) => {
			return Math.abs(rate - currentRate) < PLAYBACK_RATE_EPSILON;
		});
		let nextIndex = currentIndex;
		if (currentIndex === -1) {
			if (step > 0) {
				nextIndex = PLAYBACK_RATES.findIndex((rate) => currentRate < rate);
				if (nextIndex === -1) nextIndex = PLAYBACK_RATES.length - 1;
			} else {
				nextIndex = 0;
				for (let index = PLAYBACK_RATES.length - 1; index >= 0; index -= 1) if (currentRate > PLAYBACK_RATES[index]) {
					nextIndex = index;
					break;
				}
			}
		} else nextIndex = Math.max(0, Math.min(PLAYBACK_RATES.length - 1, currentIndex + step));
		videoInstance.value.playbackRate = PLAYBACK_RATES[nextIndex];
	};
	const registerShortcuts = () => {
		hotkeys("ctrl+z", handlers.onUndo);
		hotkeys("ctrl+shift+z", handlers.onRedo);
		hotkeys("ctrl+s", (event) => {
			event.preventDefault();
			handlers.onSave();
		});
		hotkeys("ctrl+shift+s", (event) => {
			event.preventDefault();
			handlers.onSaveAs();
		});
		hotkeys("ctrl+enter", handlers.onExport);
		hotkeys("space", (event) => {
			if (shouldIgnoreMediaShortcut(event)) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			event.stopPropagation();
			handlers.onTogglePlay();
		});
		hotkeys("j", (event) => {
			if (shouldIgnoreMediaShortcut(event)) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			event.stopPropagation();
			updatePlaybackRate(-1);
		});
		hotkeys("k", (event) => {
			if (shouldIgnoreMediaShortcut(event)) return;
			if (!videoInstance.value?.url) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			event.stopPropagation();
			videoInstance.value.pause();
		});
		hotkeys("l", (event) => {
			if (shouldIgnoreMediaShortcut(event)) return;
			event.preventDefault();
			event.stopImmediatePropagation();
			event.stopPropagation();
			updatePlaybackRate(1);
		});
		hotkeys("ctrl+left", () => {
			if (!videoInstance.value) return;
			videoInstance.value.backward = 1;
			handlers.onBackward?.(1);
		});
		hotkeys("ctrl+right", () => {
			if (!videoInstance.value) return;
			videoInstance.value.forward = 1;
			handlers.onForward?.(1);
		});
	};
	const unregisterShortcuts = () => {
		hotkeys.unbind();
	};
	onActivated(() => {
		registerShortcuts();
	});
	onDeactivated(() => {
		unregisterShortcuts();
	});
	onUnmounted(() => {
		unregisterShortcuts();
	});
	return {
		registerShortcuts,
		unregisterShortcuts
	};
}
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/Index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = {
	id: "cut-tool",
	class: "container"
};
var _hoisted_2 = { class: "upper-section" };
var _hoisted_3 = { class: "view-sidebar" };
var _hoisted_4 = { class: "view-content" };
var _hoisted_5 = { class: "btns page-header" };
var _hoisted_6 = { class: "segment-list-container" };
//#endregion
//#region src/renderer/src/pages/Tools/pages/VideoCut/Index.vue
var Index_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "videoCut",
	__name: "Index",
	setup(__props) {
		const clientOptions = useStorage("cut-hotprogress", {
			showSetting: true,
			sampling: 10,
			height: 50,
			fillColor: "#f9f5f3",
			color: "#333333"
		});
		const hotProgressVisible = useStorage("cut-hotprogress-visible", true);
		const danmaSearchMask = useStorage("cut-danma-search-mask", true);
		const showVideoTime = useStorage("cut-show-video-time", true);
		const activeSegmentView = ref("cuts");
		const waveformAnalyzerConfig = useStorage("cut-waveform-analyzer-config-new", {
			energyPercentile: 50,
			minSegmentDuration: 25,
			maxGapDuration: 15,
			smoothWindowSize: 4
		});
		const waveformAnalyzerDialogVisible = ref(false);
		const notice = useNotification();
		const isWeb = ref(window.isWeb);
		const files = ref({
			videoPath: null,
			danmuPath: null,
			originDanmuPath: null,
			originVideoPath: null
		});
		const openSubWindow = async () => {
			if (isWeb.value) {
				notice.warning({
					title: "网页版不支持打开新窗口~",
					duration: 2e3
				});
				return;
			}
			await window.api.common.createSubWindow({
				routeName: "videoCut",
				hideAside: true,
				maximized: true,
				hideMenuBar: appConfig.value.menuBarVisible ? false : true
			});
		};
		const { handleProjectAction, projectMenuOptions, saveProject, saveProjectAs, loadProjectFile, resetProjectState, readProjectFile } = useProjectManager(files);
		const { appConfig } = storeToRefs(useAppConfig());
		const segmentStore = useSegmentStore();
		const { undo, redo, clear: clearCuts, getCombinedLyrics } = useSegmentStore();
		const { selectedCuts } = storeToRefs(useSegmentStore());
		const subtitleStore = useSubtitles();
		const videoVCutOptions = toReactive(computed({
			get: () => appConfig.value.tool.videoCut,
			set: (value) => {
				appConfig.value.tool.videoCut = value;
			}
		}));
		const projectMenuItems = computed(() => {
			const list = [
				{
					label: "导入项目文件",
					key: "importProject"
				},
				{
					label: "加载弹幕",
					key: "importDanmu"
				},
				{
					label: "加载字幕",
					key: "importGlobalSubtitle"
				},
				...projectMenuOptions.value,
				{
					label: "关闭",
					key: "closeVideo",
					disabled: !files.value.videoPath
				}
			];
			if (!isWeb.value) {
				list.push({
					label: "分割线",
					key: "divider1",
					type: "divider"
				});
				list.push({
					label: "打开独立窗口",
					key: "openSubWindow"
				});
			}
			list.push({
				label: "分割线",
				key: "divider2",
				type: "divider"
			});
			list.push({
				label: "快速歌切",
				key: "openQuickSongCut"
			});
			return list;
		});
		const confirm = useConfirm();
		const { videoInstance, videoRef: videoPlayerRef, loadVideo: loadVideoCore, togglePlay, handleVideoReady } = useVideoPlayer(isWeb);
		const { duration: videoDuration } = storeToRefs(useSegmentStore());
		const { danmaList, xmlConvertVisible, convertDanmuLoading, loadDanmuFile, confirmAndConvertDanmu: confirmConvert, closeConvertDialog, generateDanmakuData } = useDanmu(videoInstance, videoPlayerRef, videoDuration, showVideoTime);
		const { waveformLoading, waveformVisible, initWaveform, destroyWaveform } = useWaveform(videoInstance);
		useChapter(videoInstance);
		provide("videoInstance", videoInstance);
		const videoRef = ref(null);
		watch(videoRef, (newVal) => {
			if (newVal) videoPlayerRef.value = newVal.videoRef;
		}, { immediate: true });
		/**
		* 处理拖拽文件变化
		* @param droppedFiles 文件列表
		*/
		const handleDroppedFiles = (droppedFiles) => {
			if (!droppedFiles.length) return;
			const { path, ext } = droppedFiles[0];
			if (ext === ".llc") loadProject(path);
			else loadProject(path);
		};
		const handleDanmuFile = async (filePath) => {
			if (filePath.endsWith(".xml")) {
				if (!files.value.videoPath) {
					notice.error({
						title: "请先加载视频文件",
						duration: 2e3
					});
					return;
				}
			} else if (filePath.endsWith(".ass")) {
				if (!files.value.videoPath) {
					notice.error({
						title: "请先加载视频文件",
						duration: 2e3
					});
					return;
				}
				files.value.originDanmuPath = filePath;
				files.value.danmuPath = filePath;
			} else throw new Error("不支持的弹幕文件格式");
			await loadDanmuFile(filePath);
		};
		/**
		* 调用文件选择对话框，选择并加载文件
		*/
		const selectLoadFile = async (extensions) => {
			const selectedFiles = await showFileDialog({ extensions });
			if (!selectedFiles || selectedFiles.length === 0) return;
			const filePath = selectedFiles[0];
			if (filePath.endsWith(".xml")) await handleDanmuFile(filePath);
			else if (filePath.endsWith(".ass")) await handleDanmuFile(filePath);
			else if (filePath.endsWith(".llc")) await loadProject(filePath);
			else await loadProject(filePath);
		};
		/**
		* 加载项目
		*/
		const loadProject = async (filePath) => {
			let videoPath;
			let projectFile;
			if (filePath.endsWith(".llc")) {
				projectFile = filePath;
				const mediaFileName = (await readProjectFile(filePath)).mediaFileName;
				const possibleVideoPath = window.path.join(window.path.dirname(filePath), mediaFileName);
				if (await common.fileExists(possibleVideoPath)) videoPath = possibleVideoPath;
				else {
					alert("项目关联的视频文件不存在，无法加载");
					return;
				}
			} else {
				videoPath = filePath;
				const { dir, name } = window.path.parse(filePath);
				const possibleProjectFile = window.path.join(dir, `${name}-proj.llc`);
				if (await common.fileExists(possibleProjectFile)) projectFile = possibleProjectFile;
			}
			loadVideo(videoPath);
			if (projectFile) {
				await loadProjectFile(projectFile);
				updatePlayerSubtitles();
			}
		};
		/**
		* 加载视频文件
		* @param path 视频文件路径
		*/
		const loadVideo = async (path) => {
			if (path && !path?.endsWith(".mp4")) notice.warning({
				title: "此功能仅针对mp4视频支持良好，请前往“转码”页面进行转封装",
				duration: 5e3
			});
			files.value.originVideoPath = path;
			destroyWaveform();
			const videoUrl = await loadVideoCore(path);
			files.value.videoPath = videoUrl;
			autoLoadDanmuFile(path);
		};
		/**
		* 关闭所有资源（视频、弹幕、项目等）
		*/
		const closeAllResources = async () => {
			const [status] = await confirm.warning({ content: "是否确认关闭？相关数据将被清理，且无法恢复" });
			if (!status) return;
			await loadVideo("");
			videoPlayerRef.value?.clearFiles();
			files.value.danmuPath = null;
			files.value.originDanmuPath = null;
			resetProjectState();
			clearCuts();
			if (videoInstance.value?.artplayerTimestamp) videoInstance.value.artplayerTimestamp.setTimestamp(0);
		};
		const handleProjectMenuClick = async (key) => {
			if (!key) {
				selectLoadFile([
					...supportedVideoExtensions,
					"xml",
					"ass"
				]);
				return;
			}
			if (key === "closeVideo") await closeAllResources();
			else if (key === "importDanmu") await selectLoadFile(["ass", "xml"]);
			else if (key === "importGlobalSubtitle") await importGlobalSubtitle();
			else if (key === "openSubWindow") openSubWindow();
			else if (key === "importProject") await selectLoadFile(["llc"]);
			else if (key === "openQuickSongCut") openWaveformAnalyzerDialog();
			else handleProjectAction(key);
		};
		/**
		* 导入全局字幕
		*/
		const importGlobalSubtitle = async () => {
			const selectedFiles = await showFileDialog({ extensions: ["srt"] });
			if (!selectedFiles || selectedFiles.length === 0) return;
			const filePath = selectedFiles[0];
			try {
				const content = await common.readDanma(filePath);
				subtitleStore.setGlobal(content);
				updatePlayerSubtitles();
				notice.success({
					title: "全局字幕导入成功",
					duration: 2e3
				});
			} catch (error) {
				console.error("导入全局字幕失败:", error);
				notice.error({
					title: "全局字幕导入失败",
					content: error.message,
					duration: 3e3
				});
			}
		};
		/**
		* 更新视频播放器的字幕显示
		*/
		const updatePlayerSubtitles = () => {
			if (!videoInstance.value) return;
			const combinedLyrics = getCombinedLyrics();
			videoInstance.value?.artplayerPluginSubtitle?.setContent(combinedLyrics, "srt");
		};
		/**
		* 自动加载与视频同名的弹幕文件
		* @param videoPath 视频文件路径
		*/
		const autoLoadDanmuFile = async (videoPath) => {
			const { dir, name } = window.path.parse(videoPath);
			const assFilepath = window.path.join(dir, `${name}.ass`);
			if (await common.fileExists(assFilepath)) {
				await loadDanmuFile(assFilepath);
				return;
			}
			const xmlFilepath = window.path.join(dir, `${name}.xml`);
			if (await common.fileExists(xmlFilepath)) await loadDanmuFile(xmlFilepath);
		};
		/**
		* 视频时长变化
		*/
		const handleVideoDurationChange = (duration) => {
			videoDuration.value = duration;
			initWaveform(files.value.originVideoPath);
		};
		/**
		* 关闭弹幕转换对话框
		*/
		const handleCancelConvertDanmu = () => {
			closeConvertDialog();
		};
		/**
		* 确认并执行弹幕转换
		*/
		const handleConfirmConvertDanmu = async (config) => {
			const [output, original] = await confirmConvert(config);
			files.value.danmuPath = output;
			files.value.originDanmuPath = original;
			await generateDanmakuData(original);
		};
		const exportVisible = ref(false);
		const exportUploadVisible = ref(false);
		const currentUploadSegment = ref(null);
		const validateExportCuts = () => {
			if (selectedCuts.value.length === 0) {
				notice.error({
					title: "没有需要导出的切片",
					duration: 1e3
				});
				return false;
			}
			if (!files.value.videoPath) {
				notice.error({
					title: "请先选择视频文件",
					duration: 1e3
				});
				return false;
			}
			if (convertDanmuLoading.value) {
				notice.error({
					title: "弹幕转换中，请稍后",
					duration: 1e3
				});
				return false;
			}
			return true;
		};
		/**
		* 导出切片
		*/
		const exportCuts = async () => {
			if (!validateExportCuts()) return;
			exportVisible.value = true;
		};
		const exportCutsAndUpload = async (segment) => {
			if (!files.value.videoPath) {
				notice.error({
					title: "请先选择视频文件",
					duration: 1e3
				});
				return;
			}
			if (convertDanmuLoading.value) {
				notice.error({
					title: "弹幕转换中，请稍后",
					duration: 1e3
				});
				return;
			}
			currentUploadSegment.value = segment;
			exportUploadVisible.value = true;
		};
		useKeyboardShortcuts({
			onUndo: () => undo(),
			onRedo: () => redo(),
			onSave: () => saveProject(),
			onSaveAs: () => saveProjectAs(),
			onExport: () => exportCuts(),
			onTogglePlay: () => togglePlay()
		}, videoInstance);
		const { videoCutDrive } = useDrive();
		onMounted(() => {
			if (!isWeb.value) videoCutDrive();
		});
		watch(clientOptions, () => {
			if (!videoInstance.value) return;
			if (!videoInstance.value.artplayerPluginHeatmap) return;
			videoInstance.value.artplayerPluginHeatmap.setOptions(clientOptions.value);
		}, { deep: true });
		const setHotProgressVisible = (visible) => {
			if (!videoInstance.value) return;
			if (!videoInstance.value.artplayerPluginHeatmap) return;
			if (visible) videoInstance.value.artplayerPluginHeatmap.show();
			else videoInstance.value.artplayerPluginHeatmap.hide();
		};
		watch(hotProgressVisible, () => {
			setHotProgressVisible(hotProgressVisible.value);
		});
		watch(showVideoTime, () => {
			switchShowVideoTime();
		});
		const switchShowVideoTime = () => {
			if (!videoInstance.value) return;
			if (!videoInstance.value.artplayerTimestamp) return;
			if (showVideoTime.value) videoInstance.value.artplayerTimestamp.show();
			else videoInstance.value.artplayerTimestamp.hide();
		};
		const openWaveformAnalyzerDialog = () => {
			waveformAnalyzerDialogVisible.value = true;
		};
		const segmentWidth = useStorage("cut-segment-panel-width", 245);
		const startResize = (e) => {
			e.preventDefault();
			const startX = e.clientX;
			const startWidth = segmentWidth.value;
			const onMouseMove = (e) => {
				const delta = startX - e.clientX;
				const newWidth = Math.min(700, Math.max(190, startWidth + delta));
				segmentWidth.value = newWidth;
			};
			const onMouseUp = () => {
				document.removeEventListener("mousemove", onMouseMove);
				document.removeEventListener("mouseup", onMouseUp);
			};
			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseup", onMouseUp);
		};
		const waveformAnalyzerConfirm = async (data) => {
			segmentStore.clear();
			segmentStore.init(data.map((seg) => ({
				start: seg.startTime,
				end: seg.endTime,
				name: "",
				checked: true
			})));
		};
		return (_ctx, _cache) => {
			const _component_n_icon = NIcon;
			const _component_n_tooltip = Tooltip_default;
			const _component_n_button = Button;
			return openBlock(), createElementBlock(Fragment, null, [
				createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
					createVNode(VideoPlayer_default, {
						ref_key: "videoPlayerRef",
						ref: videoPlayerRef,
						"video-path": unref(files).videoPath,
						"heatmap-options": unref(clientOptions),
						onReady: unref(handleVideoReady),
						onDurationChange: handleVideoDurationChange,
						onFilesDropped: handleDroppedFiles
					}, null, 8, [
						"video-path",
						"heatmap-options",
						"onReady"
					]),
					createBaseVNode("div", {
						class: "resize-handle",
						onMousedown: startResize
					}, null, 32),
					createBaseVNode("div", {
						class: "segment-section",
						style: normalizeStyle({ width: unref(segmentWidth) + "px" })
					}, [createBaseVNode("div", _hoisted_3, [
						createVNode(_component_n_tooltip, { placement: "left" }, {
							trigger: withCtx(() => [createBaseVNode("div", {
								class: normalizeClass(["sidebar-icon", { active: unref(activeSegmentView) === "cuts" }]),
								onClick: _cache[0] || (_cache[0] = ($event) => activeSegmentView.value = "cuts")
							}, [createVNode(_component_n_icon, { size: "18" }, {
								default: withCtx(() => [createVNode(unref(Cut_default))]),
								_: 1
							})], 2)]),
							default: withCtx(() => [_cache[14] || (_cache[14] = createTextVNode(" 切片列表 "))]),
							_: 1
						}),
						createVNode(_component_n_tooltip, { placement: "left" }, {
							trigger: withCtx(() => [createBaseVNode("div", {
								class: normalizeClass(["sidebar-icon", { active: unref(activeSegmentView) === "config" }]),
								onClick: _cache[1] || (_cache[1] = ($event) => activeSegmentView.value = "config")
							}, [createVNode(_component_n_icon, { size: "18" }, {
								default: withCtx(() => [createVNode(unref(SettingsOutline_default))]),
								_: 1
							})], 2)]),
							default: withCtx(() => [_cache[15] || (_cache[15] = createTextVNode(" 配置 "))]),
							_: 1
						}),
						createVNode(_component_n_tooltip, { placement: "left" }, {
							trigger: withCtx(() => [createBaseVNode("div", {
								class: normalizeClass(["sidebar-icon", { active: unref(activeSegmentView) === "subtitle" }]),
								onClick: _cache[2] || (_cache[2] = ($event) => activeSegmentView.value = "subtitle")
							}, [createVNode(_component_n_icon, { size: "18" }, {
								default: withCtx(() => [createVNode(unref(DocumentTextOutline_default))]),
								_: 1
							})], 2)]),
							default: withCtx(() => [_cache[16] || (_cache[16] = createTextVNode(" 字幕编辑 "))]),
							_: 1
						})
					]), createBaseVNode("div", _hoisted_4, [unref(activeSegmentView) === "cuts" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", _hoisted_5, [createVNode(ButtonGroup_default, {
						options: unref(projectMenuItems),
						onClick: handleProjectMenuClick,
						size: "small"
					}, {
						default: withCtx(() => _cache[17] || (_cache[17] = [createTextVNode("添加/替换")])),
						_: 1
					}, 8, ["options"]), createVNode(_component_n_button, {
						class: "cut-export",
						type: "info",
						disabled: !unref(files).videoPath,
						onClick: exportCuts,
						size: "small"
					}, {
						default: withCtx(() => [createVNode(_component_n_icon, { size: "18" }, {
							default: withCtx(() => [createVNode(unref(Cut_default))]),
							_: 1
						}), _cache[18] || (_cache[18] = createTextVNode(" 导出 "))]),
						_: 1
					}, 8, ["disabled"])]), createBaseVNode("div", _hoisted_6, [createVNode(SegmentList_default, {
						"danma-list": unref(danmaList),
						files: unref(files),
						danmaSearchMask: unref(danmaSearchMask),
						onExportUpload: exportCutsAndUpload
					}, null, 8, [
						"danma-list",
						"files",
						"danmaSearchMask"
					])])], 64)) : unref(activeSegmentView) === "config" ? (openBlock(), createBlock(SegmentConfigView_default, {
						key: 1,
						"client-options": unref(clientOptions),
						"hot-progress-visible": unref(hotProgressVisible),
						"onUpdate:hotProgressVisible": _cache[3] || (_cache[3] = ($event) => isRef(hotProgressVisible) ? hotProgressVisible.value = $event : null),
						"show-video-time": unref(showVideoTime),
						"onUpdate:showVideoTime": _cache[4] || (_cache[4] = ($event) => isRef(showVideoTime) ? showVideoTime.value = $event : null),
						"danma-search-mask": unref(danmaSearchMask),
						"onUpdate:danmaSearchMask": _cache[5] || (_cache[5] = ($event) => isRef(danmaSearchMask) ? danmaSearchMask.value = $event : null),
						"waveform-visible": unref(waveformVisible),
						"onUpdate:waveformVisible": _cache[6] || (_cache[6] = ($event) => isRef(waveformVisible) ? waveformVisible.value = $event : null)
					}, null, 8, [
						"client-options",
						"hot-progress-visible",
						"show-video-time",
						"danma-search-mask",
						"waveform-visible"
					])) : createCommentVNode("", true), withDirectives(createVNode(SubtitleView_default, null, null, 512), [[vShow, unref(activeSegmentView) === "subtitle"]])])], 4)
				]), createVNode(WaveformPanel_default, {
					"waveform-visible": unref(waveformVisible),
					"onUpdate:waveformVisible": _cache[7] || (_cache[7] = ($event) => isRef(waveformVisible) ? waveformVisible.value = $event : null),
					"waveform-loading": unref(waveformLoading)
				}, null, 8, ["waveform-visible", "waveform-loading"])]),
				createVNode(DanmuFactorySettingDailog_default, {
					visible: unref(xmlConvertVisible),
					"onUpdate:visible": _cache[8] || (_cache[8] = ($event) => isRef(xmlConvertVisible) ? xmlConvertVisible.value = $event : null),
					modelValue: unref(videoVCutOptions).danmuPresetId,
					"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(videoVCutOptions).danmuPresetId = $event),
					"show-preset": true,
					onConfirm: handleConfirmConvertDanmu,
					onCancel: handleCancelConvertDanmu
				}, null, 8, ["visible", "modelValue"]),
				createVNode(ExportModal_default, {
					modelValue: unref(exportVisible),
					"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => isRef(exportVisible) ? exportVisible.value = $event : null),
					files: unref(files)
				}, null, 8, ["modelValue", "files"]),
				createVNode(ExportUploadModal_default, {
					modelValue: unref(exportUploadVisible),
					"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => isRef(exportUploadVisible) ? exportUploadVisible.value = $event : null),
					files: unref(files),
					segment: unref(currentUploadSegment)
				}, null, 8, [
					"modelValue",
					"files",
					"segment"
				]),
				createVNode(WaveformAnalyzerDialog_default, {
					visible: unref(waveformAnalyzerDialogVisible),
					"onUpdate:visible": _cache[12] || (_cache[12] = ($event) => isRef(waveformAnalyzerDialogVisible) ? waveformAnalyzerDialogVisible.value = $event : null),
					modelValue: unref(waveformAnalyzerConfig),
					"onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => isRef(waveformAnalyzerConfig) ? waveformAnalyzerConfig.value = $event : null),
					"file-path": unref(files).originVideoPath,
					onConfirm: waveformAnalyzerConfirm
				}, null, 8, [
					"visible",
					"modelValue",
					"file-path"
				])
			], 64);
		};
	}
}), [["__scopeId", "data-v-96dddef9"]]);
//#endregion
export { Index_default as default };
