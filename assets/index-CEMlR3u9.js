import { p as computed, et as getNative, aF as root, eu as overArg, ev as isPrototype, eo as isArrayLike, ew as arrayLikeKeys, ex as copyObject, ey as keysIn, ez as getPrototype, de as isArray, eA as toSource, eB as baseGetTag, eC as Map, eD as cloneArrayBuffer, dd as Symbol$1, eE as cloneTypedArray, ek as isObjectLike, eF as nodeUtil, di as baseUnary, aE as isObject, eG as copyArray, eh as isBuffer, eH as cloneBuffer, eI as initCloneObject, ei as Stack, eJ as assignValue, v as h, d as defineComponent, D as useConfig, Q as useFormItem, r as ref, U as provide, G as toRef, N as createInjectionKey, $ as call, x as c, z as cB, A as cM, C as cE, d8 as iconSwitchTransition, eK as insideModal, eL as insidePopover, m as inject, a9 as useMemo, H as useTheme, b6 as useRtl, J as useThemeClass, af as createId, aZ as resolveWrappedSlot, dc as NIconSwitchTransition, aN as on, eM as checkboxLight, aU as createKey, eN as iconLight, a6 as warn, aV as mergeProps, g as api, eO as defineStore, al as storeToRefs, F as watch, co as readonly } from "./index--WEAc-yU.js";
import { a as useMergedState } from "./use-notification-kPOG22iR.js";
import { c as config } from "./_plugin-vue_export-helper-BTOCZhDw.js";
const pureNumberRegex = /^(\d|\.)+$/;
const numberRegex = /(\d|\.)+/;
function formatLength(length, {
  c: c2 = 1,
  offset = 0,
  attachPx = true
} = {}) {
  if (typeof length === "number") {
    const result = (length + offset) * c2;
    if (result === 0) return "0";
    return `${result}px`;
  } else if (typeof length === "string") {
    if (pureNumberRegex.test(length)) {
      const result = (Number(length) + offset) * c2;
      if (attachPx) {
        if (result === 0) return "0";
        return `${result}px`;
      } else {
        return `${result}`;
      }
    } else {
      const result = numberRegex.exec(length);
      if (!result) return length;
      return length.replace(numberRegex, String((Number(result[0]) + offset) * c2));
    }
  }
  return length;
}
function useCompitable(reactive, keys2) {
  return computed(() => {
    for (const key of keys2) {
      if (reactive[key] !== void 0)
        return reactive[key];
    }
    return reactive[keys2[keys2.length - 1]];
  });
}
var WeakMap = getNative(root, "WeakMap");
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var nativeKeys = overArg(Object.keys, Object);
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
var DataView = getNative(root, "DataView");
var Promise$1 = getNative(root, "Promise");
var Set$1 = getNative(root, "Set");
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
var getTag = baseGetTag;
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag(new Map()) != mapTag$3 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$3 || WeakMap && getTag(new WeakMap()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$1;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$1;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
const CheckMark = h("svg", {
  viewBox: "0 0 64 64",
  class: "check-icon"
}, h("path", {
  d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"
}));
const LineMark = h("svg", {
  viewBox: "0 0 100 100",
  class: "line-icon"
}, h("path", {
  d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"
}));
const checkboxGroupInjectionKey = createInjectionKey("n-checkbox-group");
const checkboxGroupProps = {
  min: Number,
  max: Number,
  size: String,
  value: Array,
  defaultValue: {
    type: Array,
    default: null
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  // deprecated
  onChange: [Function, Array]
};
const __unplugin_components_2 = defineComponent({
  name: "CheckboxGroup",
  props: checkboxGroupProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef
    } = formItem;
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = computed(() => props.value);
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const checkedCount = computed(() => {
      var _a;
      return ((_a = mergedValueRef.value) === null || _a === void 0 ? void 0 : _a.length) || 0;
    });
    const valueSetRef = computed(() => {
      if (Array.isArray(mergedValueRef.value)) {
        return new Set(mergedValueRef.value);
      }
      return /* @__PURE__ */ new Set();
    });
    function toggleCheckbox(checked, checkboxValue) {
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      const {
        onChange,
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      if (Array.isArray(mergedValueRef.value)) {
        const groupValue = Array.from(mergedValueRef.value);
        const index = groupValue.findIndex((value) => value === checkboxValue);
        if (checked) {
          if (!~index) {
            groupValue.push(checkboxValue);
            if (onUpdateValue) {
              call(onUpdateValue, groupValue, {
                actionType: "check",
                value: checkboxValue
              });
            }
            if (_onUpdateValue) {
              call(_onUpdateValue, groupValue, {
                actionType: "check",
                value: checkboxValue
              });
            }
            nTriggerFormInput();
            nTriggerFormChange();
            uncontrolledValueRef.value = groupValue;
            if (onChange) call(onChange, groupValue);
          }
        } else {
          if (~index) {
            groupValue.splice(index, 1);
            if (onUpdateValue) {
              call(onUpdateValue, groupValue, {
                actionType: "uncheck",
                value: checkboxValue
              });
            }
            if (_onUpdateValue) {
              call(_onUpdateValue, groupValue, {
                actionType: "uncheck",
                value: checkboxValue
              });
            }
            if (onChange) call(onChange, groupValue);
            uncontrolledValueRef.value = groupValue;
            nTriggerFormInput();
            nTriggerFormChange();
          }
        }
      } else {
        if (checked) {
          if (onUpdateValue) {
            call(onUpdateValue, [checkboxValue], {
              actionType: "check",
              value: checkboxValue
            });
          }
          if (_onUpdateValue) {
            call(_onUpdateValue, [checkboxValue], {
              actionType: "check",
              value: checkboxValue
            });
          }
          if (onChange) call(onChange, [checkboxValue]);
          uncontrolledValueRef.value = [checkboxValue];
          nTriggerFormInput();
          nTriggerFormChange();
        } else {
          if (onUpdateValue) {
            call(onUpdateValue, [], {
              actionType: "uncheck",
              value: checkboxValue
            });
          }
          if (_onUpdateValue) {
            call(_onUpdateValue, [], {
              actionType: "uncheck",
              value: checkboxValue
            });
          }
          if (onChange) call(onChange, []);
          uncontrolledValueRef.value = [];
          nTriggerFormInput();
          nTriggerFormChange();
        }
      }
    }
    provide(checkboxGroupInjectionKey, {
      checkedCountRef: checkedCount,
      maxRef: toRef(props, "max"),
      minRef: toRef(props, "min"),
      valueSetRef,
      disabledRef: mergedDisabledRef,
      mergedSizeRef,
      toggleCheckbox
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef
    };
  },
  render() {
    return h("div", {
      class: `${this.mergedClsPrefix}-checkbox-group`,
      role: "group"
    }, this.$slots);
  }
});
const style$1 = c([
  cB("checkbox", `
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `, [cM("show-label", "line-height: var(--n-label-line-height);"), c("&:hover", [cB("checkbox-box", [cE("border", "border: var(--n-border-checked);")])]), c("&:focus:not(:active)", [cB("checkbox-box", [cE("border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), cM("inside-table", [cB("checkbox-box", `
 background-color: var(--n-merged-color-table);
 `)]), cM("checked", [cB("checkbox-box", `
 background-color: var(--n-color-checked);
 `, [cB("checkbox-icon", [
    // if not set width to 100%, safari & old chrome won't display the icon
    c(".check-icon", `
 opacity: 1;
 transform: scale(1);
 `)
  ])])]), cM("indeterminate", [cB("checkbox-box", [cB("checkbox-icon", [c(".check-icon", `
 opacity: 0;
 transform: scale(.5);
 `), c(".line-icon", `
 opacity: 1;
 transform: scale(1);
 `)])])]), cM("checked, indeterminate", [c("&:focus:not(:active)", [cB("checkbox-box", [cE("border", `
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), cB("checkbox-box", `
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `, [cE("border", {
    border: "var(--n-border-checked)"
  })])]), cM("disabled", {
    cursor: "not-allowed"
  }, [cM("checked", [cB("checkbox-box", `
 background-color: var(--n-color-disabled-checked);
 `, [cE("border", {
    border: "var(--n-border-disabled-checked)"
  }), cB("checkbox-icon", [c(".check-icon, .line-icon", {
    fill: "var(--n-check-mark-color-disabled-checked)"
  })])])]), cB("checkbox-box", `
 background-color: var(--n-color-disabled);
 `, [cE("border", `
 border: var(--n-border-disabled);
 `), cB("checkbox-icon", [c(".check-icon, .line-icon", `
 fill: var(--n-check-mark-color-disabled);
 `)])]), cE("label", `
 color: var(--n-text-color-disabled);
 `)]), cB("checkbox-box-wrapper", `
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `), cB("checkbox-box", `
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `, [cE("border", `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `), cB("checkbox-icon", `
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `, [c(".check-icon, .line-icon", `
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `), iconSwitchTransition({
    left: "1px",
    top: "1px"
  })])]), cE("label", `
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `, [c("&:empty", {
    display: "none"
  })])]),
  // modal table header checkbox
  insideModal(cB("checkbox", `
 --n-merged-color-table: var(--n-color-table-modal);
 `)),
  // popover table header checkbox
  insidePopover(cB("checkbox", `
 --n-merged-color-table: var(--n-color-table-popover);
 `))
]);
const checkboxProps = Object.assign(Object.assign({}, useTheme.props), {
  size: String,
  checked: {
    type: [Boolean, String, Number],
    default: void 0
  },
  defaultChecked: {
    type: [Boolean, String, Number],
    default: false
  },
  value: [String, Number],
  disabled: {
    type: Boolean,
    default: void 0
  },
  indeterminate: Boolean,
  label: String,
  focusable: {
    type: Boolean,
    default: true
  },
  checkedValue: {
    type: [Boolean, String, Number],
    default: true
  },
  uncheckedValue: {
    type: [Boolean, String, Number],
    default: false
  },
  "onUpdate:checked": [Function, Array],
  onUpdateChecked: [Function, Array],
  // private
  privateInsideTable: Boolean,
  // deprecated
  onChange: [Function, Array]
});
const __unplugin_components_1 = defineComponent({
  name: "Checkbox",
  props: checkboxProps,
  setup(props) {
    const NCheckboxGroup = inject(checkboxGroupInjectionKey, null);
    const selfRef = ref(null);
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const uncontrolledCheckedRef = ref(props.defaultChecked);
    const controlledCheckedRef = toRef(props, "checked");
    const mergedCheckedRef = useMergedState(controlledCheckedRef, uncontrolledCheckedRef);
    const renderedCheckedRef = useMemo(() => {
      if (NCheckboxGroup) {
        const groupValueSet = NCheckboxGroup.valueSetRef.value;
        if (groupValueSet && props.value !== void 0) {
          return groupValueSet.has(props.value);
        }
        return false;
      } else {
        return mergedCheckedRef.value === props.checkedValue;
      }
    });
    const formItem = useFormItem(props, {
      mergedSize(NFormItem) {
        const {
          size
        } = props;
        if (size !== void 0) return size;
        if (NCheckboxGroup) {
          const {
            value: mergedSize
          } = NCheckboxGroup.mergedSizeRef;
          if (mergedSize !== void 0) {
            return mergedSize;
          }
        }
        if (NFormItem) {
          const {
            mergedSize
          } = NFormItem;
          if (mergedSize !== void 0) return mergedSize.value;
        }
        return "medium";
      },
      mergedDisabled(NFormItem) {
        const {
          disabled
        } = props;
        if (disabled !== void 0) return disabled;
        if (NCheckboxGroup) {
          if (NCheckboxGroup.disabledRef.value) return true;
          const {
            maxRef: {
              value: max
            },
            checkedCountRef
          } = NCheckboxGroup;
          if (max !== void 0 && checkedCountRef.value >= max && !renderedCheckedRef.value) {
            return true;
          }
          const {
            minRef: {
              value: min
            }
          } = NCheckboxGroup;
          if (min !== void 0 && checkedCountRef.value <= min && renderedCheckedRef.value) {
            return true;
          }
        }
        if (NFormItem) {
          return NFormItem.disabled.value;
        }
        return false;
      }
    });
    const {
      mergedDisabledRef,
      mergedSizeRef
    } = formItem;
    const themeRef = useTheme("Checkbox", "-checkbox", style$1, checkboxLight, props, mergedClsPrefixRef);
    function toggle(e) {
      if (NCheckboxGroup && props.value !== void 0) {
        NCheckboxGroup.toggleCheckbox(!renderedCheckedRef.value, props.value);
      } else {
        const {
          onChange,
          "onUpdate:checked": _onUpdateCheck,
          onUpdateChecked
        } = props;
        const {
          nTriggerFormInput,
          nTriggerFormChange
        } = formItem;
        const nextChecked = renderedCheckedRef.value ? props.uncheckedValue : props.checkedValue;
        if (_onUpdateCheck) {
          call(_onUpdateCheck, nextChecked, e);
        }
        if (onUpdateChecked) {
          call(onUpdateChecked, nextChecked, e);
        }
        if (onChange) call(onChange, nextChecked, e);
        nTriggerFormInput();
        nTriggerFormChange();
        uncontrolledCheckedRef.value = nextChecked;
      }
    }
    function handleClick(e) {
      if (!mergedDisabledRef.value) {
        toggle(e);
      }
    }
    function handleKeyUp(e) {
      if (mergedDisabledRef.value) return;
      switch (e.key) {
        case " ":
        case "Enter":
          toggle(e);
      }
    }
    function handleKeyDown(e) {
      switch (e.key) {
        case " ":
          e.preventDefault();
      }
    }
    const exposedMethods = {
      focus: () => {
        var _a;
        (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
    const rtlEnabledRef = useRtl("Checkbox", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        value: mergedSize
      } = mergedSizeRef;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          borderRadius,
          color,
          colorChecked,
          colorDisabled,
          colorTableHeader,
          colorTableHeaderModal,
          colorTableHeaderPopover,
          checkMarkColor,
          checkMarkColorDisabled,
          border,
          borderFocus,
          borderDisabled,
          borderChecked,
          boxShadowFocus,
          textColor,
          textColorDisabled,
          checkMarkColorDisabledChecked,
          colorDisabledChecked,
          borderDisabledChecked,
          labelPadding,
          labelLineHeight,
          labelFontWeight,
          [createKey("fontSize", mergedSize)]: fontSize,
          [createKey("size", mergedSize)]: size
        }
      } = themeRef.value;
      return {
        "--n-label-line-height": labelLineHeight,
        "--n-label-font-weight": labelFontWeight,
        "--n-size": size,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-border": border,
        "--n-border-checked": borderChecked,
        "--n-border-focus": borderFocus,
        "--n-border-disabled": borderDisabled,
        "--n-border-disabled-checked": borderDisabledChecked,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-color": color,
        "--n-color-checked": colorChecked,
        "--n-color-table": colorTableHeader,
        "--n-color-table-modal": colorTableHeaderModal,
        "--n-color-table-popover": colorTableHeaderPopover,
        "--n-color-disabled": colorDisabled,
        "--n-color-disabled-checked": colorDisabledChecked,
        "--n-text-color": textColor,
        "--n-text-color-disabled": textColorDisabled,
        "--n-check-mark-color": checkMarkColor,
        "--n-check-mark-color-disabled": checkMarkColorDisabled,
        "--n-check-mark-color-disabled-checked": checkMarkColorDisabledChecked,
        "--n-font-size": fontSize,
        "--n-label-padding": labelPadding
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("checkbox", computed(() => mergedSizeRef.value[0]), cssVarsRef, props) : void 0;
    return Object.assign(formItem, exposedMethods, {
      rtlEnabled: rtlEnabledRef,
      selfRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedDisabled: mergedDisabledRef,
      renderedChecked: renderedCheckedRef,
      mergedTheme: themeRef,
      labelId: createId(),
      handleClick,
      handleKeyUp,
      handleKeyDown,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a;
    const {
      $slots,
      renderedChecked,
      mergedDisabled,
      indeterminate,
      privateInsideTable,
      cssVars,
      labelId,
      label,
      mergedClsPrefix,
      focusable,
      handleKeyUp,
      handleKeyDown,
      handleClick
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    const labelNode = resolveWrappedSlot($slots.default, (children) => {
      if (label || children) {
        return h("span", {
          class: `${mergedClsPrefix}-checkbox__label`,
          id: labelId
        }, label || children);
      }
      return null;
    });
    return h("div", {
      ref: "selfRef",
      class: [`${mergedClsPrefix}-checkbox`, this.themeClass, this.rtlEnabled && `${mergedClsPrefix}-checkbox--rtl`, renderedChecked && `${mergedClsPrefix}-checkbox--checked`, mergedDisabled && `${mergedClsPrefix}-checkbox--disabled`, indeterminate && `${mergedClsPrefix}-checkbox--indeterminate`, privateInsideTable && `${mergedClsPrefix}-checkbox--inside-table`, labelNode && `${mergedClsPrefix}-checkbox--show-label`],
      tabindex: mergedDisabled || !focusable ? void 0 : 0,
      role: "checkbox",
      "aria-checked": indeterminate ? "mixed" : renderedChecked,
      "aria-labelledby": labelId,
      style: cssVars,
      onKeyup: handleKeyUp,
      onKeydown: handleKeyDown,
      onClick: handleClick,
      onMousedown: () => {
        on("selectstart", window, (e) => {
          e.preventDefault();
        }, {
          once: true
        });
      }
    }, h("div", {
      class: `${mergedClsPrefix}-checkbox-box-wrapper`
    }, " ", h("div", {
      class: `${mergedClsPrefix}-checkbox-box`
    }, h(NIconSwitchTransition, null, {
      default: () => this.indeterminate ? h("div", {
        key: "indeterminate",
        class: `${mergedClsPrefix}-checkbox-icon`
      }, LineMark) : h("div", {
        key: "check",
        class: `${mergedClsPrefix}-checkbox-icon`
      }, CheckMark)
    }), h("div", {
      class: `${mergedClsPrefix}-checkbox-box__border`
    }))), labelNode);
  }
});
const style = cB("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [cM("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), cM("depth", {
  color: "var(--n-color)"
}, [c("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), c("svg", {
  height: "1em",
  width: "1em"
})]);
const iconProps = Object.assign(Object.assign({}, useTheme.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: Object
});
const NIcon = defineComponent({
  _n_icon__: true,
  name: "Icon",
  inheritAttrs: false,
  props: iconProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Icon", "-icon", style, iconLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        depth
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self
      } = themeRef.value;
      if (depth !== void 0) {
        const {
          color,
          [`opacity${depth}Depth`]: opacity
        } = self;
        return {
          "--n-bezier": cubicBezierEaseInOut,
          "--n-color": color,
          "--n-opacity": opacity
        };
      }
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-color": "",
        "--n-opacity": ""
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("icon", computed(() => `${props.depth || "d"}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedStyle: computed(() => {
        const {
          size,
          color
        } = props;
        return {
          fontSize: formatLength(size),
          color
        };
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      $parent,
      depth,
      mergedClsPrefix,
      component,
      onRender,
      themeClass
    } = this;
    if ((_a = $parent === null || $parent === void 0 ? void 0 : $parent.$options) === null || _a === void 0 ? void 0 : _a._n_icon__) {
      warn("icon", "don't wrap `n-icon` inside `n-icon`");
    }
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("i", mergeProps(this.$attrs, {
      role: "img",
      class: [`${mergedClsPrefix}-icon`, themeClass, {
        [`${mergedClsPrefix}-icon--depth`]: depth,
        [`${mergedClsPrefix}-icon--color-transition`]: depth !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), component ? h(component) : this.$slots);
  }
});
const getUserList = async () => {
  const res = await api.get(`/user/list`);
  return res.data;
};
const refresh = async (uid) => {
  return api.post(`/user/update`, {
    uid
  });
};
const deleteUser = async (uid) => {
  return api.post(`/user/delete`, {
    uid
  });
};
const userApi = {
  getList: getUserList,
  refresh,
  delete: deleteUser
};
const list$3 = async () => {
  const res = await api.get(`/preset/danmu`);
  return res.data;
};
const get$3 = async (id) => {
  const res = await api.get(`/preset/danmu/${id}`);
  return res.data;
};
const add$2 = async (preset) => {
  return api.post(`/preset/danmu`, preset);
};
const remove$3 = async (id) => {
  return api.delete(`/preset/danmu/${id}`);
};
const update$2 = async (id, preset) => {
  return api.put(`/preset/danmu/${id}`, preset);
};
const save$2 = async (preset) => {
  if (preset.id) {
    return update$2(preset.id, preset);
  } else {
    return add$2(preset);
  }
};
const danmuPreset = {
  list: list$3,
  get: get$3,
  add: add$2,
  remove: remove$3,
  update: update$2,
  save: save$2
};
const list$2 = async () => {
  const res = await api.get(`/preset/ffmpeg`);
  return res.data;
};
const options = async () => {
  const res = await api.get(`/preset/ffmpeg/options`);
  return res.data;
};
const get$2 = async (id) => {
  const res = await api.get(`/preset/ffmpeg/${id}`);
  return res.data;
};
const add$1 = async (preset) => {
  return api.post(`/preset/ffmpeg`, preset);
};
const remove$2 = async (id) => {
  return api.delete(`/preset/ffmpeg/${id}`);
};
const update$1 = async (id, preset) => {
  return api.put(`/preset/ffmpeg/${id}`, preset);
};
const save$1 = async (preset) => {
  if (preset.id) {
    return update$1(preset.id, preset);
  } else {
    return add$1(preset);
  }
};
const ffmpegPreset = {
  list: list$2,
  get: get$2,
  add: add$1,
  remove: remove$2,
  update: update$1,
  save: save$1,
  options
};
const list$1 = async () => {
  const res = await api.get(`/preset/video`);
  return res.data;
};
const get$1 = async (id) => {
  const res = await api.get(`/preset/video/${id}`);
  return res.data;
};
const add = async (preset) => {
  return api.post(`/preset/video`, preset);
};
const remove$1 = async (id) => {
  return api.delete(`/preset/video/${id}`);
};
const update = async (id, preset) => {
  return api.put(`/preset/video/${id}`, preset);
};
const save = async (preset) => {
  if (preset.id) {
    return update(preset.id, preset);
  } else {
    return add(preset);
  }
};
const videoPreset = {
  list: list$1,
  get: get$1,
  add,
  remove: remove$1,
  update,
  save
};
const list = async () => {
  const res = await api.get(`/task`);
  return res.data;
};
const get = async (id) => {
  const res = await api.get(`/task/${id}`);
  return res.data;
};
const pause = async (id) => {
  const res = await api.post(`/task/${id}/pause`);
  return res.data;
};
const resume = async (id) => {
  const res = await api.post(`/task/${id}/resume`);
  return res.data;
};
const cancel = async (id) => {
  const res = await api.post(`/task/${id}/kill`);
  return res.data;
};
const interrupt = async (id) => {
  const res = await api.post(`/task/${id}/interrupt`);
  return res.data;
};
const remove = async (id) => {
  const res = await api.post(`/task/${id}/remove`);
  return res.data;
};
const start = async (id) => {
  const res = await api.post(`/task/${id}/start`);
  return res.data;
};
const convertXml2Ass = async (input, output, preset, options2) => {
  const res = await api.post(`/task/convertXml2Ass`, {
    input,
    output,
    options: options2,
    preset
  });
  return res.data;
};
const task = {
  list,
  get,
  pause,
  resume,
  cancel,
  interrupt,
  remove,
  start,
  convertXml2Ass
};
const useUserInfoStore = defineStore("userInfo", () => {
  const appConfigStore = useAppConfig();
  const userInfo = ref({
    uid: 0,
    profile: {
      face: "",
      name: ""
    }
  });
  const userList = ref([]);
  const calcExpireTime = (user) => {
    const date = /* @__PURE__ */ new Date();
    if (user.expires) {
      const expireTime = new Date(user.expires * 1e3);
      if (date > expireTime) {
        return "已过期!";
      } else {
        const diff = expireTime.getTime() - date.getTime();
        const day = Math.floor(diff / (24 * 3600 * 1e3));
        return `${day}天后过期`;
      }
    }
    return "";
  };
  async function getUserInfo() {
    await appConfigStore.getAppConfig();
    const uid = appConfigStore.appConfig.uid;
    userList.value = await getUserList();
    userList.value = userList.value.map((item) => {
      return {
        ...item,
        expiresText: calcExpireTime(item)
      };
    });
    if (userList.value.length === 0) {
      userInfo.value = {
        uid: 0,
        profile: {
          face: "",
          name: ""
        }
      };
    } else {
      if (!uid) {
        userInfo.value = {
          uid: userList.value[0].uid,
          profile: {
            face: userList.value[0].face,
            name: userList.value[0].name
          }
        };
        appConfigStore.set("uid", userList.value[0].uid);
      } else {
        const user = userList.value.find((item) => item.uid === uid);
        if (user) {
          userInfo.value = {
            uid: user.uid,
            profile: {
              face: user.face,
              name: user.name
            }
          };
        }
      }
    }
  }
  function changeUser(uid) {
    const user = userList.value.find((item) => item.uid === uid);
    if (user) {
      userInfo.value = {
        uid: user.uid,
        profile: {
          face: user.face,
          name: user.name
        }
      };
      appConfigStore.set("uid", uid);
    }
  }
  getUserInfo();
  return { userInfo, getUserInfo, userList, changeUser };
});
const useDanmuPreset = defineStore("danmuPreset", () => {
  const { appConfig } = storeToRefs(useAppConfig());
  console.log(appConfig.value);
  const danmuPresetId = computed({
    get: () => appConfig.value.tool.danmu.danmuPresetId,
    set: (value) => {
      appConfig.value.tool.danmu.danmuPresetId = value;
    }
  });
  const danmuPresets = ref([]);
  const danmuPreset$1 = ref({
    config: {}
  });
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
  watch(
    danmuPresetId,
    () => {
      getDanmuPreset();
    },
    { immediate: true }
  );
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
const useFfmpegPreset = defineStore("ffmpegPreset", () => {
  const options2 = ref([]);
  const getPresetOptions = async () => {
    options2.value = await ffmpegPreset.options();
  };
  getPresetOptions();
  return {
    ffmpegOptions: options2,
    getPresetOptions
  };
});
const useUploadPreset = defineStore("uploadPreset", () => {
  const upladPresetId = ref("default");
  const uploadPresets = ref([]);
  const uploadPreset = ref({
    config: {}
  });
  async function getUploadPresets() {
    uploadPresets.value = await videoPreset.list();
  }
  async function getUploadPreset() {
    uploadPreset.value = await videoPreset.get(upladPresetId.value);
  }
  const uploaPresetsOptions = computed(() => {
    return uploadPresets.value.map((item) => {
      return {
        label: item.name,
        value: item.id
      };
    });
  });
  watch(
    upladPresetId,
    () => {
      getUploadPreset();
    },
    { immediate: true }
  );
  getUploadPresets();
  return {
    uploadPresets,
    getUploadPresets,
    uploaPresetsOptions,
    upladPresetId,
    uploadPreset,
    getUploadPreset
  };
});
const useQueueStore = defineStore("queue", () => {
  const runningTaskNum = ref(0);
  const queue = ref([]);
  const getQuenu = async () => {
    queue.value = (await task.list()).toReversed();
    runningTaskNum.value = queue.value.filter((item) => item.status === "running").length;
  };
  return {
    runningTaskNum,
    getQuenu,
    queue
  };
});
const useAppConfig = defineStore("appConfig", () => {
  const appConfig = ref({
    tool: {
      home: {
        uploadPresetId: "default",
        danmuPresetId: "default",
        ffmpegPresetId: "b_libx264",
        removeOrigin: false,
        openFolder: false,
        autoUpload: false,
        hotProgress: false,
        hotProgressSample: 30,
        hotProgressHeight: 60,
        hotProgressColor: "#f9f5f3",
        hotProgressFillColor: "#333333"
      },
      upload: {
        uploadPresetId: "default"
      },
      danmu: {
        danmuPresetId: "default",
        saveRadio: 1,
        savePath: "",
        removeOrigin: false,
        openFolder: false
      },
      video2mp4: {
        saveRadio: 1,
        savePath: "",
        saveOriginPath: false,
        override: false,
        removeOrigin: false,
        ffmpegPresetId: "b_copy"
      },
      videoMerge: {
        saveOriginPath: false,
        removeOrigin: false
      },
      download: {
        savePath: ""
      },
      translate: {
        presetId: void 0
      },
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
        danmuPresetId: "default"
      }
    }
  });
  async function getAppConfig() {
    console.log("getAppConfig");
    appConfig.value = await config.get();
  }
  async function set(key, value) {
    await config.set(key, value);
    appConfig.value[key] = value;
  }
  watch(
    () => appConfig.value.tool,
    (newVal, oldVal) => {
      if (!oldVal) return;
      config.set("tool", cloneDeep(newVal));
    },
    { deep: true }
  );
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
  const add2 = (newState) => {
    if (current < history.length - 1) {
      history.splice(current + 1);
    }
    history.push(cloneDeep(newState));
    if (history.length > limit) {
      history.shift();
    } else {
      current++;
    }
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
  return { state, add: add2, undo, redo, clear, history };
}
const useSegmentStore = defineStore("segment", () => {
  const duration = ref(0);
  const rawCuts = ref([]);
  const cuts = readonly(
    computed(() => {
      return rawCuts.value.map((item) => {
        return {
          ...item,
          end: item.end || duration.value
        };
      });
    })
  );
  const historyStore = useHistoryStore({ limit: 30 });
  const recordHistory = () => {
    historyStore.add(rawCuts.value);
  };
  const clearHistory = () => {
    historyStore.clear();
  };
  const undo = () => {
    historyStore.undo();
    rawCuts.value = historyStore.state.value || [];
  };
  const redo = () => {
    historyStore.redo();
    rawCuts.value = historyStore.state.value || [];
  };
  const selectedCuts = computed(() => {
    return cuts.value.filter((item) => item.checked);
  });
  const init = (segments) => {
    rawCuts.value = segments;
    recordHistory();
  };
  const addSegment = (cut) => {
    rawCuts.value.push(cut);
    recordHistory();
  };
  const removeSegment = (index) => {
    rawCuts.value.splice(index, 1);
    recordHistory();
  };
  const updateSegment = (index, key, value) => {
    const cut = rawCuts.value[index];
    cut[key] = value;
    recordHistory();
  };
  const toggleSegment = (index) => {
    rawCuts.value[index].checked = !rawCuts.value[index].checked;
    recordHistory();
  };
  return {
    cuts,
    selectedCuts,
    duration,
    rawCuts,
    addSegment,
    removeSegment,
    updateSegment,
    toggleSegment,
    clearHistory,
    undo,
    redo,
    init
  };
});
export {
  NIcon as N,
  __unplugin_components_1 as _,
  useDanmuPreset as a,
  useUserInfoStore as b,
  cloneDeep as c,
  __unplugin_components_2 as d,
  useAppConfig as e,
  formatLength as f,
  ffmpegPreset as g,
  useQueueStore as h,
  useFfmpegPreset as i,
  danmuPreset as j,
  useUploadPreset as k,
  arrayPush as l,
  useSegmentStore as m,
  userApi as n,
  getAllKeys as o,
  getTag as p,
  keys as q,
  task as t,
  useCompitable as u,
  videoPreset as v
};
