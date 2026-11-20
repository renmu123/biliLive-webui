import { C as computed, L as init_runtime_core_esm_bundler, at as watch, ft as init_reactivity_esm_bundler, vt as readonly, yt as ref } from "./request-CkCeAZAO.js";
import { _ as danmuPreset, b as deepRaw, c as bili, f as task, g as ffmpegPreset, h as videoPreset, s as douyu_default, v as getUserList } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { a as stubArray, i as getSymbols, n as getAllKeys, o as arrayPush, r as baseGetAllKeys, s as keys, t as _getTag_default } from "./_getTag-C1EyIWSB.js";
import { At as cloneArrayBuffer, Ht as nodeUtil, Mt as cloneBuffer, Nt as Stack, Ot as initCloneObject, Pt as getPrototype, Qt as assignValue, Rt as keysIn, Ut as baseUnary, Wt as isBuffer, Zt as copyObject, an as isObject, dn as Symbol, i as storeToRefs, kt as cloneTypedArray, ln as isObjectLike, on as isArray, r as defineStore, tn as copyArray } from "./index-CPQhEiaa.js";
import { a as config, t as common } from "./common-CBeNn3OB.js";
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayEach.js
/**
* A specialized version of `_.forEach` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns `array`.
*/
function arrayEach(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (iteratee(array[index], index, array) === false) break;
	return array;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssign.js
/**
* The base implementation of `_.assign` without support for multiple sources
* or `customizer` functions.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @returns {Object} Returns `object`.
*/
function baseAssign(object, source) {
	return object && copyObject(source, keys(source), object);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssignIn.js
/**
* The base implementation of `_.assignIn` without support for multiple sources
* or `customizer` functions.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @returns {Object} Returns `object`.
*/
function baseAssignIn(object, source) {
	return object && copyObject(source, keysIn(source), object);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copySymbols.js
/**
* Copies own symbols of `source` to `object`.
*
* @private
* @param {Object} source The object to copy symbols from.
* @param {Object} [object={}] The object to copy symbols to.
* @returns {Object} Returns `object`.
*/
function copySymbols(source, object) {
	return copyObject(source, getSymbols(source), object);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getSymbolsIn.js
/**
* Creates an array of the own and inherited enumerable symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of symbols.
*/
var getSymbolsIn = !Object.getOwnPropertySymbols ? stubArray : function(object) {
	var result = [];
	while (object) {
		arrayPush(result, getSymbols(object));
		object = getPrototype(object);
	}
	return result;
};
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copySymbolsIn.js
/**
* Copies own and inherited symbols of `source` to `object`.
*
* @private
* @param {Object} source The object to copy symbols from.
* @param {Object} [object={}] The object to copy symbols to.
* @returns {Object} Returns `object`.
*/
function copySymbolsIn(source, object) {
	return copyObject(source, getSymbolsIn(source), object);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getAllKeysIn.js
/**
* Creates an array of own and inherited enumerable property names and
* symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names and symbols.
*/
function getAllKeysIn(object) {
	return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneArray.js
/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
* Initializes an array clone.
*
* @private
* @param {Array} array The array to clone.
* @returns {Array} Returns the initialized clone.
*/
function initCloneArray(array) {
	var length = array.length, result = new array.constructor(length);
	if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
		result.index = array.index;
		result.input = array.input;
	}
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneDataView.js
/**
* Creates a clone of `dataView`.
*
* @private
* @param {Object} dataView The data view to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the cloned data view.
*/
function cloneDataView(dataView, isDeep) {
	var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneRegExp.js
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
* Creates a clone of `regexp`.
*
* @private
* @param {Object} regexp The regexp to clone.
* @returns {Object} Returns the cloned regexp.
*/
function cloneRegExp(regexp) {
	var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	result.lastIndex = regexp.lastIndex;
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneSymbol.js
/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : void 0;
var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
/**
* Creates a clone of the `symbol` object.
*
* @private
* @param {Object} symbol The symbol object to clone.
* @returns {Object} Returns the cloned symbol object.
*/
function cloneSymbol(symbol) {
	return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneByTag.js
/** `Object#toString` result references. */
var boolTag$1 = "[object Boolean]";
var dateTag$1 = "[object Date]";
var mapTag$2 = "[object Map]";
var numberTag$1 = "[object Number]";
var regexpTag$1 = "[object RegExp]";
var setTag$2 = "[object Set]";
var stringTag$1 = "[object String]";
var symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]";
var dataViewTag$1 = "[object DataView]";
var float32Tag$1 = "[object Float32Array]";
var float64Tag$1 = "[object Float64Array]";
var int8Tag$1 = "[object Int8Array]";
var int16Tag$1 = "[object Int16Array]";
var int32Tag$1 = "[object Int32Array]";
var uint8Tag$1 = "[object Uint8Array]";
var uint8ClampedTag$1 = "[object Uint8ClampedArray]";
var uint16Tag$1 = "[object Uint16Array]";
var uint32Tag$1 = "[object Uint32Array]";
/**
* Initializes an object clone based on its `toStringTag`.
*
* **Note:** This function only supports cloning values with tags of
* `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
*
* @private
* @param {Object} object The object to clone.
* @param {string} tag The `toStringTag` of the object to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the initialized clone.
*/
function initCloneByTag(object, tag, isDeep) {
	var Ctor = object.constructor;
	switch (tag) {
		case arrayBufferTag$1: return cloneArrayBuffer(object);
		case boolTag$1:
		case dateTag$1: return new Ctor(+object);
		case dataViewTag$1: return cloneDataView(object, isDeep);
		case float32Tag$1:
		case float64Tag$1:
		case int8Tag$1:
		case int16Tag$1:
		case int32Tag$1:
		case uint8Tag$1:
		case uint8ClampedTag$1:
		case uint16Tag$1:
		case uint32Tag$1: return cloneTypedArray(object, isDeep);
		case mapTag$2: return new Ctor();
		case numberTag$1:
		case stringTag$1: return new Ctor(object);
		case regexpTag$1: return cloneRegExp(object);
		case setTag$2: return new Ctor();
		case symbolTag$1: return cloneSymbol(object);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsMap.js
/** `Object#toString` result references. */
var mapTag$1 = "[object Map]";
/**
* The base implementation of `_.isMap` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a map, else `false`.
*/
function baseIsMap(value) {
	return isObjectLike(value) && _getTag_default(value) == mapTag$1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isMap.js
var nodeIsMap = nodeUtil && nodeUtil.isMap;
/**
* Checks if `value` is classified as a `Map` object.
*
* @static
* @memberOf _
* @since 4.3.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a map, else `false`.
* @example
*
* _.isMap(new Map);
* // => true
*
* _.isMap(new WeakMap);
* // => false
*/
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsSet.js
/** `Object#toString` result references. */
var setTag$1 = "[object Set]";
/**
* The base implementation of `_.isSet` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a set, else `false`.
*/
function baseIsSet(value) {
	return isObjectLike(value) && _getTag_default(value) == setTag$1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSet.js
var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
* Checks if `value` is classified as a `Set` object.
*
* @static
* @memberOf _
* @since 4.3.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a set, else `false`.
* @example
*
* _.isSet(new Set);
* // => true
*
* _.isSet(new WeakSet);
* // => false
*/
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseClone.js
/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG$1 = 4;
/** `Object#toString` result references. */
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var symbolTag = "[object Symbol]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
* The base implementation of `_.clone` and `_.cloneDeep` which tracks
* traversed objects.
*
* @private
* @param {*} value The value to clone.
* @param {boolean} bitmask The bitmask flags.
*  1 - Deep clone
*  2 - Flatten inherited properties
*  4 - Clone symbols
* @param {Function} [customizer] The function to customize cloning.
* @param {string} [key] The key of `value`.
* @param {Object} [object] The parent object of `value`.
* @param {Object} [stack] Tracks traversed objects and their clone counterparts.
* @returns {*} Returns the cloned value.
*/
function baseClone(value, bitmask, customizer, key, object, stack) {
	var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
	if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
	if (result !== void 0) return result;
	if (!isObject(value)) return value;
	var isArr = isArray(value);
	if (isArr) {
		result = initCloneArray(value);
		if (!isDeep) return copyArray(value, result);
	} else {
		var tag = _getTag_default(value), isFunc = tag == funcTag || tag == genTag;
		if (isBuffer(value)) return cloneBuffer(value, isDeep);
		if (tag == objectTag || tag == argsTag || isFunc && !object) {
			result = isFlat || isFunc ? {} : initCloneObject(value);
			if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
		} else {
			if (!cloneableTags[tag]) return object ? value : {};
			result = initCloneByTag(value, tag, isDeep);
		}
	}
	stack || (stack = new Stack());
	var stacked = stack.get(value);
	if (stacked) return stacked;
	stack.set(value, result);
	if (isSet(value)) value.forEach(function(subValue) {
		result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	});
	else if (isMap(value)) value.forEach(function(subValue, key) {
		result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	});
	var props = isArr ? void 0 : (isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys)(value);
	arrayEach(props || value, function(subValue, key) {
		if (props) {
			key = subValue;
			subValue = value[key];
		}
		assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	});
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js
/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;
var CLONE_SYMBOLS_FLAG = 4;
/**
* This method is like `_.clone` except that it recursively clones `value`.
*
* @static
* @memberOf _
* @since 1.0.0
* @category Lang
* @param {*} value The value to recursively clone.
* @returns {*} Returns the deep cloned value.
* @see _.clone
* @example
*
* var objects = [{ 'a': 1 }, { 'b': 2 }];
*
* var deep = _.cloneDeep(objects);
* console.log(deep[0] === objects[0]);
* // => false
*/
function cloneDeep(value) {
	return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
//#endregion
//#region ../../node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-browser/stringify.js
/**
* Convert array of 16 byte values to UUID string format of the form:
* XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
*/
var byteToHex = [];
for (var i = 0; i < 256; ++i) byteToHex.push((i + 256).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
	return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
//#endregion
//#region ../../node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = /* @__PURE__ */ new Uint8Array(16);
function rng() {
	if (!getRandomValues) {
		getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
		if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	}
	return getRandomValues(rnds8);
}
var native_default = { randomUUID: typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region ../../node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
	if (native_default.randomUUID && !buf && !options) return native_default.randomUUID();
	options = options || {};
	var rnds = options.random || (options.rng || rng)();
	rnds[6] = rnds[6] & 15 | 64;
	rnds[8] = rnds[8] & 63 | 128;
	if (buf) {
		offset = offset || 0;
		for (var i = 0; i < 16; ++i) buf[offset + i] = rnds[i];
		return buf;
	}
	return unsafeStringify(rnds);
}
//#endregion
//#region ../../node_modules/.pnpm/srt-parser-2@1.2.3/node_modules/srt-parser-2/dist/index.js
var Parser = class {
	seperator = ",";
	timestampToSeconds(srtTimestamp) {
		const [rest, millisecondsString] = srtTimestamp.split(",");
		const milliseconds = parseInt(millisecondsString);
		const [hours, minutes, seconds] = rest.split(":").map((x) => parseInt(x));
		const result = milliseconds * .001 + seconds + 60 * minutes + 3600 * hours;
		return Math.round(result * 1e3) / 1e3;
	}
	correctFormat(time) {
		let str = time.replace(".", ",");
		var hour = null;
		var minute = null;
		var second = null;
		var millisecond = null;
		var [front, ms] = str.split(",");
		millisecond = this.fixed_str_digit(3, ms);
		var [a_hour, a_minute, a_second] = front.split(":");
		hour = this.fixed_str_digit(2, a_hour, false);
		minute = this.fixed_str_digit(2, a_minute, false);
		second = this.fixed_str_digit(2, a_second, false);
		return `${hour}:${minute}:${second},${millisecond}`;
	}
	fixed_str_digit(how_many_digit, str, padEnd = true) {
		if (str.length == how_many_digit) return str;
		if (str.length > how_many_digit) return str.slice(0, how_many_digit);
		if (str.length < how_many_digit) {
			if (padEnd) return str.padEnd(how_many_digit, "0");
			else return str.padStart(how_many_digit, "0");
		}
	}
	tryComma(data) {
		data = data.replace(/\r/g, "");
		let data_array = data.split(/(\d+)\n(\d{1,2}:\d{2}:\d{2},\d{1,3}) --> (\d{1,2}:\d{2}:\d{2},\d{1,3})/g);
		data_array.shift();
		return data_array;
	}
	tryDot(data) {
		data = data.replace(/\r/g, "");
		let data_array = data.split(/(\d+)\n(\d{1,2}:\d{2}:\d{2}\.\d{1,3}) --> (\d{1,2}:\d{2}:\d{2}\.\d{1,3})/g);
		data_array.shift();
		this.seperator = ".";
		return data_array;
	}
	fromSrt(data) {
		var originalData = data;
		var data_array = this.tryComma(originalData);
		if (data_array.length == 0) data_array = this.tryDot(originalData);
		var items = [];
		for (var i = 0; i < data_array.length; i += 4) {
			const startTime = this.correctFormat(data_array[i + 1].trim());
			const endTime = this.correctFormat(data_array[i + 2].trim());
			var new_line = {
				id: data_array[i].trim(),
				startTime,
				startSeconds: this.timestampToSeconds(startTime),
				endTime,
				endSeconds: this.timestampToSeconds(endTime),
				text: data_array[i + 3].trim()
			};
			items.push(new_line);
		}
		return items;
	}
	toSrt(data) {
		var res = "";
		const end_of_line = "\r\n";
		for (var i = 0; i < data.length; i++) {
			var s = data[i];
			res += s.id + end_of_line;
			res += s.startTime + " --> " + s.endTime + end_of_line;
			res += s.text.replace("\n", end_of_line) + "\r\n\r\n";
		}
		return res;
	}
};
//#endregion
//#region src/renderer/src/stores/subtitles.ts
init_reactivity_esm_bundler();
var useSubtitles = defineStore("subtitles", () => {
	const items = ref([]);
	/**
	* 获取所有全局字幕
	*/
	const getGlobal = () => {
		return items.value.filter((s) => s.sourceId === null);
	};
	/**
	* 获取指定 segment 的字幕
	*/
	const getBySourceId = (sourceId) => {
		return items.value.filter((s) => s.sourceId === sourceId);
	};
	/**
	* 根据 ID 获取字幕
	*/
	const getById = (id) => {
		return items.value.find((s) => s.id === id);
	};
	/**
	* 添加字幕
	*/
	const add = (subtitle) => {
		const newItem = {
			id: v4(),
			...subtitle
		};
		items.value.push(newItem);
		return newItem;
	};
	/**
	* 更新字幕内容
	*/
	const update = (id, content) => {
		const item = getById(id);
		if (item) item.content = content;
	};
	/**
	* 删除指定字幕
	*/
	const remove = (id) => {
		items.value = items.value.filter((s) => s.id !== id);
	};
	/**
	* 删除指定 segment 的所有字幕
	*/
	const removeBySourceId = (sourceId) => {
		items.value = items.value.filter((s) => s.sourceId !== sourceId);
	};
	/**
	* 清空所有字幕
	*/
	const clear = () => {
		items.value = [];
	};
	/**
	* 为指定 segment 设置字幕（会先删除该 segment 的所有现有字幕）
	*/
	const setForSegment = (segmentId, content) => {
		removeBySourceId(segmentId);
		return add({
			sourceId: segmentId,
			content
		});
	};
	/**
	* 设置全局字幕（会先删除所有现有全局字幕）
	*/
	const setGlobal = (content) => {
		items.value = items.value.filter((s) => s.sourceId !== null);
		return add({
			sourceId: null,
			content
		});
	};
	/**
	* 获取指定 segments 的合并字幕（用于渲染和导出）
	* 首先加载全局字幕，然后用片段特定字幕替换对应时间段
	*
	* @param segments - segment 对象数组，需包含 id, start, end 字段
	* @returns SRT 格式的合并字幕字符串
	*/
	const getCombinedForSegments = (segments) => {
		const parser = new Parser();
		const globalSubtitles = getGlobal();
		const globalSubtitle = globalSubtitles.length > 0 ? globalSubtitles[0] : null;
		let mergedNodes = [];
		if (globalSubtitle) try {
			mergedNodes = parser.fromSrt(globalSubtitle.content);
		} catch (error) {
			console.error("解析全局字幕失败:", error);
		}
		for (const segment of segments) {
			const segmentSubtitles = getBySourceId(segment.id);
			if (segmentSubtitles.length > 0) {
				mergedNodes = mergedNodes.filter((node) => !(node.startSeconds >= segment.start && node.endSeconds <= segment.end));
				try {
					const filteredNodes = parser.fromSrt(segmentSubtitles[0].content).filter((node) => node.startSeconds >= segment.start && node.endSeconds <= segment.end);
					mergedNodes.push(...filteredNodes);
				} catch (error) {
					console.error(`解析 segment ${segment.id} 的字幕失败:`, error);
				}
			}
		}
		mergedNodes.sort((a, b) => a.startSeconds - b.startSeconds);
		const allNodes = mergedNodes;
		if (allNodes.length === 0) return "";
		try {
			return parser.toSrt(allNodes);
		} catch (error) {
			console.error("生成合并字幕失败:", error);
			return "";
		}
	};
	return {
		items,
		getGlobal,
		getBySourceId,
		getById,
		add,
		update,
		remove,
		removeBySourceId,
		clear,
		setForSegment,
		setGlobal,
		getCombinedForSegments
	};
});
//#endregion
//#region src/renderer/src/stores/index.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
var useUserInfoStore = defineStore("userInfo", () => {
	const appConfigStore = useAppConfig();
	const userList = ref([]);
	const calcExpireTime = (expires) => {
		const date = /* @__PURE__ */ new Date();
		if (expires) {
			const expireTime = new Date(expires);
			if (date > expireTime) return "已过期!";
			else {
				const diff = expireTime.getTime() - date.getTime();
				return `${Math.floor(diff / 864e5)}天后过期`;
			}
		}
		return "";
	};
	async function getUsers() {
		userList.value = (await getUserList()).map((item) => {
			return {
				...item,
				expiresText: calcExpireTime(item.expires)
			};
		});
	}
	function changeUser(uid) {
		appConfigStore.set("uid", uid);
	}
	getUsers();
	return {
		userInfo: computed(() => {
			const uid = appConfigStore.appConfig.uid;
			const user = userList.value.find((item) => item.uid === uid);
			return {
				uid,
				profile: {
					face: user?.face,
					name: user?.name
				}
			};
		}),
		getUsers,
		userList,
		changeUser
	};
});
var useDouyuUserStore = defineStore("douyuUser", () => {
	const userList = ref([]);
	async function getUsers() {
		userList.value = await douyu_default.getUsers();
	}
	getUsers();
	return {
		userList,
		getUsers
	};
});
var useDanmuPreset = defineStore("danmuPreset", () => {
	const { appConfig } = storeToRefs(useAppConfig());
	const danmuPresetId = computed({
		get: () => appConfig.value.tool.danmu.danmuPresetId,
		set: (value) => {
			appConfig.value.tool.danmu.danmuPresetId = value;
		}
	});
	const danmuPresets = ref([]);
	const danmuPreset$1 = ref({ config: {} });
	async function getDanmuPresets() {
		danmuPresets.value = await danmuPreset.list();
	}
	async function getDanmuPreset() {
		danmuPreset$1.value = await danmuPreset.get(danmuPresetId.value);
	}
	const danmuPresetsOptions = computed(() => {
		return danmuPresets.value.map((item) => {
			return {
				label: item.name,
				value: item.id
			};
		});
	});
	watch(danmuPresetId, (newVal) => {
		newVal && getDanmuPreset();
	}, { immediate: true });
	getDanmuPresets();
	return {
		danmuPresets,
		getDanmuPresets,
		danmuPresetsOptions,
		danmuPresetId,
		danmuPreset: danmuPreset$1,
		getDanmuPreset
	};
});
var useFfmpegPreset = defineStore("ffmpegPreset", () => {
	const options = ref([]);
	const getPresetOptions = async () => {
		options.value = await ffmpegPreset.options();
	};
	getPresetOptions();
	return {
		ffmpegOptions: options,
		getPresetOptions
	};
});
var useUploadPreset = defineStore("uploadPreset", () => {
	const upladPresetId = ref("default");
	const uploadPresets = ref([]);
	const uploadPresetVersion = ref(0);
	const uploadPreset = ref({ config: {} });
	async function getUploadPresets() {
		uploadPresets.value = await videoPreset.list();
	}
	async function saveUploadPreset(data) {
		await bili.validUploadParams(deepRaw(data.config));
		await videoPreset.save(deepRaw(data));
		await getUploadPresets();
		uploadPresetVersion.value += 1;
	}
	async function removeUploadPreset(id) {
		await videoPreset.remove(id);
		await getUploadPresets();
		uploadPresetVersion.value += 1;
	}
	const uploaPresetsOptions = computed(() => {
		return uploadPresets.value.map((item) => {
			return {
				label: item.name,
				value: item.id,
				options: item.config
			};
		});
	});
	getUploadPresets();
	return {
		uploadPresets,
		uploadPresetVersion,
		getUploadPresets,
		saveUploadPreset,
		removeUploadPreset,
		uploaPresetsOptions,
		upladPresetId,
		uploadPreset
	};
});
var useQueueStore = defineStore("queue", () => {
	const runningTaskNum = ref(0);
	const queue = ref([]);
	const params = ref({ type: "" });
	let eventSource = null;
	let checkTimer = null;
	const getQuenu = async () => {
		const res = await task.list(params.value);
		queue.value = res.list.reverse();
	};
	const setRunningTaskNum = (num) => {
		runningTaskNum.value = num;
	};
	const init = async () => {
		if (eventSource && eventSource.readyState !== 2) return;
		eventSource = await common.getRunningTaskNum();
		eventSource.onmessage = function(event) {
			const data = JSON.parse(event.data || "{}");
			setRunningTaskNum(data.num);
		};
		if (checkTimer) clearInterval(checkTimer);
		checkTimer = window.setInterval(() => {
			if (eventSource && eventSource.readyState === 2) {
				eventSource = null;
				init();
			}
		}, 6e5);
	};
	watch(() => params.value, () => {
		getQuenu();
	});
	return {
		runningTaskNum,
		getQuenu,
		queue,
		params,
		setRunningTaskNum,
		init
	};
});
var useAppConfig = defineStore("appConfig", () => {
	const appConfig = ref({ tool: {
		home: {
			uploadPresetId: "",
			danmuPresetId: "",
			ffmpegPresetId: "",
			removeOrigin: false,
			autoUpload: false,
			hotProgress: false,
			hotProgressSample: 30,
			hotProgressHeight: 60,
			hotProgressColor: "#f9f5f3",
			hotProgressFillColor: "#333333",
			removeOriginAfterUploadCheck: false
		},
		upload: {
			uploadPresetId: "",
			removeOriginAfterUploadCheck: false
		},
		fileSync: {
			removeOrigin: false,
			syncType: void 0,
			aliyunpanDriveType: "backup",
			targetPath: ""
		},
		danmu: {
			danmuPresetId: "",
			saveRadio: 1,
			savePath: "",
			removeOrigin: false,
			override: true
		},
		video2mp4: {
			saveRadio: 1,
			savePath: "",
			saveOriginPath: false,
			override: false,
			removeOrigin: false,
			ffmpegPresetId: "b_copy",
			danmuPresetId: "default",
			hotProgress: false
		},
		videoMerge: {
			saveOriginPath: false,
			removeOrigin: false,
			keepFirstVideoMeta: false,
			mergeXml: false
		},
		flvRepair: {
			type: "bililive",
			saveRadio: 1,
			savePath: ""
		},
		download: {
			savePath: "",
			danmu: "none",
			douyuResolution: "highest",
			override: false,
			onlyAudio: false,
			onlyDanmu: false
		},
		translate: { presetId: void 0 },
		videoCut: {
			/** 保存类型 */
			saveRadio: 1,
			/** 保存路径 */
			savePath: ".\\导出文件夹",
			/** 覆盖已存在的文件 */
			override: false,
			/** ffmpeg预设 */
			ffmpegPresetId: "b_libx264",
			title: "{{filename}}-{{label}}-{{num}}",
			danmuPresetId: "default",
			ignoreDanmu: false,
			ignoreSubtitle: false,
			exportSubtitle: true,
			uploadPresetId: ""
		}
	} });
	async function getAppConfig() {
		appConfig.value = await config.get();
	}
	async function set(key, value) {
		await config.set(key, value);
		appConfig.value[key] = value;
	}
	watch(() => appConfig.value.tool, (newVal) => {
		config.set("tool", cloneDeep(newVal));
	}, { deep: true });
	return {
		appConfig,
		getAppConfig,
		set
	};
});
function useHistoryStore({ limit }) {
	let history = [];
	let current = -1;
	const state = ref();
	const add = (newState) => {
		if (current < history.length - 1) history.splice(current + 1);
		history.push(cloneDeep(newState));
		if (history.length > limit) history.shift();
		else current++;
		state.value = cloneDeep(newState);
	};
	const undo = () => {
		if (current > 0) {
			current--;
			state.value = cloneDeep(history[current]);
		}
	};
	const redo = () => {
		if (current < history.length - 1) {
			current++;
			state.value = cloneDeep(history[current]);
		}
	};
	const clear = () => {
		history = [];
		current = -1;
	};
	return {
		state,
		add,
		undo,
		redo,
		clear,
		history
	};
}
var useSegmentStore = defineStore("segment", () => {
	const duration = ref(0);
	const selectCutId = ref(null);
	const rawCuts = ref([]);
	const cuts = readonly(computed(() => {
		return rawCuts.value.map((item) => {
			return {
				...item,
				end: item.end || duration.value
			};
		});
	}));
	const historyStore = useHistoryStore({ limit: 30 });
	const subtitleStore = useSubtitles();
	const index = ref(0);
	const eventListeners = [];
	const on = (callback) => {
		eventListeners.push(callback);
	};
	const off = (callback) => {
		const idx = eventListeners.indexOf(callback);
		if (idx > -1) eventListeners.splice(idx, 1);
	};
	const emit = (type, data) => {
		eventListeners.forEach((callback) => {
			callback({
				type,
				...data
			});
		});
	};
	const recordHistory = () => {
		historyStore.add(rawCuts.value);
	};
	const clearHistory = () => {
		historyStore.clear();
	};
	const undo = () => {
		historyStore.undo();
		rawCuts.value = historyStore.state.value || [];
		emit("clear");
		rawCuts.value.forEach((segment) => {
			emit("add", { segment });
		});
	};
	const redo = () => {
		historyStore.redo();
		rawCuts.value = historyStore.state.value || [];
		emit("clear");
		rawCuts.value.forEach((segment) => {
			emit("add", { segment });
		});
	};
	const selectedCuts = computed(() => {
		return cuts.value.filter((item) => item.checked);
	});
	const selectedCut = computed(() => {
		return cuts.value.find((item) => item.id === selectCutId.value);
	});
	const selectCut = (id) => {
		selectCutId.value = id;
	};
	const init = (segments) => {
		rawCuts.value = [];
		index.value = 0;
		segments.forEach((segment) => {
			if (!segment.start) segment.start = 0;
			addSegment(segment);
		});
	};
	const addSegment = (cut) => {
		const data = {
			id: v4(),
			...cut,
			index: index.value,
			loading: false
		};
		rawCuts.value.push(data);
		index.value++;
		selectCutId.value = data.id;
		recordHistory();
		emit("add", { segment: data });
	};
	const insertSegmentAfter = (afterId, cut) => {
		const targetIndex = rawCuts.value.findIndex((item) => item.id === afterId);
		if (targetIndex === -1) return null;
		const data = {
			id: v4(),
			...cut,
			index: index.value,
			loading: false
		};
		rawCuts.value.splice(targetIndex + 1, 0, data);
		index.value++;
		selectCutId.value = data.id;
		recordHistory();
		emit("add", { segment: data });
		return data;
	};
	const removeSegment = (id) => {
		const idx = rawCuts.value.findIndex((item) => item.id === id);
		if (idx !== -1) {
			rawCuts.value.splice(idx, 1);
			if (selectCutId.value === id) {
				if (rawCuts.value.length > 0) selectCutId.value = rawCuts.value[rawCuts.value.length - 1].id;
				else selectCutId.value = null;
			}
			subtitleStore.removeBySourceId(id);
			recordHistory();
			emit("remove", { id });
		}
	};
	const updateSegment = (id, options, ignoreHistory = false) => {
		const cut = rawCuts.value.find((item) => item.id === id);
		if (cut) {
			Object.assign(cut, options);
			if (!ignoreHistory) recordHistory();
			emit("update", { segment: cut });
		}
	};
	const toggleSegment = (id) => {
		const cut = rawCuts.value.find((item) => item.id === id);
		if (cut) {
			cut.checked = !cut.checked;
			emit("update", { segment: cut });
			recordHistory();
		}
	};
	const mergeForward = (id) => {
		const currentIndex = rawCuts.value.findIndex((item) => item.id === id);
		if (currentIndex <= 0) return false;
		const currentSegment = rawCuts.value[currentIndex];
		const previousSegment = rawCuts.value[currentIndex - 1];
		const start = Math.min(currentSegment.start, previousSegment.start);
		const end = Math.max(currentSegment.end || 0, previousSegment.end || 0);
		currentSegment.start = start;
		currentSegment.end = end;
		if (!currentSegment.name && previousSegment.name) currentSegment.name = previousSegment.name;
		const previousSegmentLyrics = subtitleStore.getBySourceId(previousSegment.id)?.[0]?.content;
		if (previousSegmentLyrics) {
			const currentSegmentLyrics = subtitleStore.getBySourceId(currentSegment.id)?.[0]?.content;
			subtitleStore.setForSegment(currentSegment.id, previousSegmentLyrics + (currentSegmentLyrics ? `\n${currentSegmentLyrics}` : ""));
		}
		rawCuts.value.splice(currentIndex - 1, 1);
		recordHistory();
		emit("update", { segment: currentSegment });
		emit("remove", { id: previousSegment.id });
		return true;
	};
	const mergeBackward = (id) => {
		const currentIndex = rawCuts.value.findIndex((item) => item.id === id);
		if (currentIndex === -1 || currentIndex >= rawCuts.value.length - 1) return false;
		const currentSegment = rawCuts.value[currentIndex];
		const nextSegment = rawCuts.value[currentIndex + 1];
		const start = Math.min(currentSegment.start, nextSegment.start);
		const end = Math.max(currentSegment.end || 0, nextSegment.end || 0);
		currentSegment.start = start;
		currentSegment.end = end;
		if (!currentSegment.name && nextSegment.name) currentSegment.name = nextSegment.name;
		const nextSegmentLyrics = subtitleStore.getBySourceId(nextSegment.id)?.[0]?.content;
		if (nextSegmentLyrics) {
			const currentSegmentLyrics = subtitleStore.getBySourceId(currentSegment.id)?.[0]?.content;
			subtitleStore.setForSegment(currentSegment.id, currentSegmentLyrics ? `${currentSegmentLyrics}\n${nextSegmentLyrics}` : nextSegmentLyrics);
		}
		rawCuts.value.splice(currentIndex + 1, 1);
		recordHistory();
		emit("update", { segment: currentSegment });
		emit("remove", { id: nextSegment.id });
		return true;
	};
	const clear = () => {
		rawCuts.value = [];
		index.value = 0;
		selectCutId.value = null;
		subtitleStore.clear();
		recordHistory();
		emit("clear");
	};
	const getCombinedLyrics = () => {
		const segments = cuts.value.map((seg) => ({
			id: seg.id,
			start: seg.start,
			end: seg.end
		}));
		return subtitleStore.getCombinedForSegments(segments);
	};
	return {
		cuts,
		selectedCuts,
		selectedCut,
		selectCutId,
		selectCut,
		duration,
		rawCuts,
		addSegment,
		insertSegmentAfter,
		removeSegment,
		updateSegment,
		toggleSegment,
		mergeForward,
		mergeBackward,
		clearHistory,
		undo,
		redo,
		init,
		clear,
		on,
		off,
		index,
		getCombinedLyrics
	};
});
//#endregion
export { useQueueStore as a, useUserInfoStore as c, cloneDeep as d, useFfmpegPreset as i, useSubtitles as l, useDanmuPreset as n, useSegmentStore as o, useDouyuUserStore as r, useUploadPreset as s, useAppConfig as t, Parser as u };
