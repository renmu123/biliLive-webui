import { Bt as arrayLikeKeys, Jt as isArrayLike, Kt as isPrototype, Lt as Map, fn as root, nn as getNative, on as isArray, rn as toSource, un as baseGetTag, zt as overArg } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_WeakMap.js
var WeakMap = getNative(root, "WeakMap");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg(Object.keys, Object);
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeys.js
/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeys(object) {
	if (!isPrototype(object)) return nativeKeys(object);
	var result = [];
	for (var key in Object(object)) if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js
/**
* Creates an array of the own enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects. See the
* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* for more details.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keys(new Foo);
* // => ['a', 'b'] (iteration order is not guaranteed)
*
* _.keys('hi');
* // => ['0', '1']
*/
function keys(object) {
	return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayPush.js
/**
* Appends the elements of `values` to `array`.
*
* @private
* @param {Array} array The array to modify.
* @param {Array} values The values to append.
* @returns {Array} Returns `array`.
*/
function arrayPush(array, values) {
	var index = -1, length = values.length, offset = array.length;
	while (++index < length) array[offset + index] = values[index];
	return array;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayFilter.js
/**
* A specialized version of `_.filter` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {Array} Returns the new filtered array.
*/
function arrayFilter(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
	while (++index < length) {
		var value = array[index];
		if (predicate(value, index, array)) result[resIndex++] = value;
	}
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubArray.js
/**
* This method returns a new empty array.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {Array} Returns the new empty array.
* @example
*
* var arrays = _.times(2, _.stubArray);
*
* console.log(arrays);
* // => [[], []]
*
* console.log(arrays[0] === arrays[1]);
* // => false
*/
function stubArray() {
	return [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getSymbols.js
/** Built-in value references. */
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
* Creates an array of the own enumerable symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of symbols.
*/
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	if (object == null) return [];
	object = Object(object);
	return arrayFilter(nativeGetSymbols(object), function(symbol) {
		return propertyIsEnumerable.call(object, symbol);
	});
};
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetAllKeys.js
/**
* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
* `keysFunc` and `symbolsFunc` to get the enumerable property names and
* symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Function} keysFunc The function to get the keys of `object`.
* @param {Function} symbolsFunc The function to get the symbols of `object`.
* @returns {Array} Returns the array of property names and symbols.
*/
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	var result = keysFunc(object);
	return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getAllKeys.js
/**
* Creates an array of own enumerable property names and symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names and symbols.
*/
function getAllKeys(object) {
	return baseGetAllKeys(object, keys, getSymbols);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_DataView.js
var DataView = getNative(root, "DataView");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Promise.js
var Promise$1 = getNative(root, "Promise");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Set.js
var Set = getNative(root, "Set");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getTag.js
/** `Object#toString` result references. */
var mapTag = "[object Map]";
var objectTag = "[object Object]";
var promiseTag = "[object Promise]";
var setTag = "[object Set]";
var weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView);
var mapCtorString = toSource(Map);
var promiseCtorString = toSource(Promise$1);
var setCtorString = toSource(Set);
var weakMapCtorString = toSource(WeakMap);
/**
* Gets the `toStringTag` of `value`.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
var getTag = baseGetTag;
if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) getTag = function(value) {
	var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
	if (ctorString) switch (ctorString) {
		case dataViewCtorString: return dataViewTag;
		case mapCtorString: return mapTag;
		case promiseCtorString: return promiseTag;
		case setCtorString: return setTag;
		case weakMapCtorString: return weakMapTag;
	}
	return result;
};
var _getTag_default = getTag;
//#endregion
export { stubArray as a, getSymbols as i, getAllKeys as n, arrayPush as o, baseGetAllKeys as r, keys as s, _getTag_default as t };
