import { x as cB, y as cM, G as useTheme, d as defineComponent, A as useConfig, l as computed, I as useThemeClass, m as h, dr as typographyLight, aJ as createKey, o as openBlock, c as createElementBlock, f as createBaseVNode, af as mergeModels, ag as useModel, r as ref, F as Fragment, ak as renderList, a as createVNode, w as withCtx, am as toDisplayString, c8 as renderSlot, al as normalizeClass, e as unref, as as normalizeStyle, cN as withModifiers, g as createTextVNode } from "./index-B3txP6HV.js";
import { m as useDropZone } from "./index-CNQhkSN1.js";
import { s as showDirectoryDialog } from "./showDirectoryDialog-CW96unRZ.js";
import { f as formatFile } from "./index-Cfb3FODH.js";
import { b as useCompitable, N as NIcon } from "./index-Be9rHucp.js";
import { C as CloseOutline } from "./CloseOutline-C8_XpVPS.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-BI19-qja.js";
const style = cB("text", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [cM("strong", `
 font-weight: var(--n-font-weight-strong);
 `), cM("italic", {
  fontStyle: "italic"
}), cM("underline", {
  textDecoration: "underline"
}), cM("code", `
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]);
const textProps = Object.assign(Object.assign({}, useTheme.props), {
  code: Boolean,
  type: {
    type: String,
    default: "default"
  },
  delete: Boolean,
  strong: Boolean,
  italic: Boolean,
  underline: Boolean,
  depth: [String, Number],
  tag: String,
  // deprecated
  as: {
    type: String,
    validator: () => {
      return true;
    },
    default: void 0
  }
});
const __unplugin_components_1 = defineComponent({
  name: "Text",
  props: textProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-text", style, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        depth,
        type
      } = props;
      const textColorKey = type === "default" ? depth === void 0 ? "textColor" : `textColor${depth}Depth` : createKey("textColor", type);
      const {
        common: {
          fontWeightStrong,
          fontFamilyMono,
          cubicBezierEaseInOut
        },
        self: {
          codeTextColor,
          codeBorderRadius,
          codeColor,
          codeBorder,
          [textColorKey]: textColor
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-font-weight-strong": fontWeightStrong,
        "--n-font-famliy-mono": fontFamilyMono,
        "--n-code-border-radius": codeBorderRadius,
        "--n-code-text-color": codeTextColor,
        "--n-code-color": codeColor,
        "--n-code-border": codeBorder
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("text", computed(() => `${props.type[0]}${props.depth || ""}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compitableTag: useCompitable(props, ["as", "tag"]),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    const textClass = [`${mergedClsPrefix}-text`, this.themeClass, {
      [`${mergedClsPrefix}-text--code`]: this.code,
      [`${mergedClsPrefix}-text--delete`]: this.delete,
      [`${mergedClsPrefix}-text--strong`]: this.strong,
      [`${mergedClsPrefix}-text--italic`]: this.italic,
      [`${mergedClsPrefix}-text--underline`]: this.underline
    }];
    const children = (_c = (_b = this.$slots).default) === null || _c === void 0 ? void 0 : _c.call(_b);
    return this.code ? h("code", {
      class: textClass,
      style: this.cssVars
    }, this.delete ? h("del", null, children) : children) : this.delete ? h("del", {
      class: textClass,
      style: this.cssVars
    }, children) : h(this.compitableTag || "span", {
      class: textClass,
      style: this.cssVars
    }, children);
  }
});
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152",
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
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode(
  "rect",
  {
    x: "48",
    y: "64",
    width: "416",
    height: "80",
    rx: "28",
    ry: "28",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M320 304l-64 64l-64-64"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M256 345.89V224"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$1 = [_hoisted_2$1, _hoisted_3$1, _hoisted_4$1, _hoisted_5$1];
const ArchiveIcon = defineComponent({
  name: "ArchiveOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_6$1);
  }
});
const _hoisted_1 = {
  key: 0,
  class: "files"
};
const _hoisted_2 = { class: "file-content" };
const _hoisted_3 = { class: "name" };
const _hoisted_4 = {
  key: 1,
  class: "empty"
};
const _hoisted_5 = { style: { "margin-bottom": "12px" } };
const _hoisted_6 = {
  key: 0,
  style: { "margin": "8px 0 0 0" }
};
const _hoisted_7 = {
  key: 1,
  style: { "margin": "8px 0 0 0" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FileArea",
  props: /* @__PURE__ */ mergeModels({
    extensions: { default: () => ["*"] },
    desc: {},
    height: { default: "200px" },
    disabled: { type: Boolean, default: false },
    max: {}
  }, {
    "modelValue": { default: () => [] },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const fileList = useModel(__props, "modelValue");
    const fileSelectArea = ref(null);
    const isWeb = computed(() => window.isWeb);
    const handleFileSelect = async () => {
      if (props.disabled) return;
      let files = [];
      if (isWeb.value) {
        files = await showDirectoryDialog({
          type: "file",
          multi: true,
          exts: props.extensions
        });
      } else {
        files = await window.api.openFile({
          multi: props.max === 1 ? false : true,
          filters: [
            {
              name: "file",
              extensions: props.extensions
            },
            {
              name: "所有文件",
              extensions: ["*"]
            }
          ]
        });
      }
      if (!files) return;
      if (files.length === 0) return;
      let items = files.map(formatFile).filter((file) => !fileList.value.map((item) => item.path).includes(file.path));
      if (props.max) {
        items = items.slice(0, props.max - fileList.value.length);
      }
      fileList.value.push(...items);
      emits("change", fileList.value);
    };
    const removeItem = (index) => {
      if (props.disabled) return;
      fileList.value.splice(index, 1);
      emits("change", fileList.value);
    };
    function onDrop(files) {
      if (window.isWeb) return;
      if (files) {
        let items = Array.from(files).map((file) => formatFile(window.api.common.getPathForFile(file))).filter((file) => !fileList.value.map((item) => item.path).includes(file.path)).filter((file) => {
          if (props.extensions.includes("*")) return true;
          if (props.extensions && props.extensions.length) {
            return props.extensions.includes(file.ext.slice(1));
          }
          return true;
        });
        if (props.max) {
          items = items.slice(0, props.max - fileList.value.length);
        }
        fileList.value.push(...items);
        emits("change", fileList.value);
      }
    }
    const onOver = (_files, event) => {
      if (window.isWeb) return;
      if (props.disabled) {
        event.dataTransfer.dropEffect = "none";
      } else {
        event.dataTransfer.dropEffect = "copy";
      }
      if (fileList.value.length >= props.max) {
        event.dataTransfer.dropEffect = "none";
      } else {
        event.dataTransfer.dropEffect = "copy";
      }
    };
    const { isOverDropZone } = useDropZone(fileSelectArea, {
      onDrop,
      onOver
    });
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_text = __unplugin_components_1;
      return openBlock(), createElementBlock("div", {
        ref_key: "fileSelectArea",
        ref: fileSelectArea,
        class: normalizeClass(["file-selet", {
          dragging: unref(isOverDropZone)
        }]),
        style: normalizeStyle({
          height: props.height,
          cursor: props.disabled ? "not-allowed" : "pointer"
        }),
        onClick: handleFileSelect
      }, [
        fileList.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(fileList.value, (file, index) => {
            return openBlock(), createElementBlock("div", {
              key: file.path,
              class: "file"
            }, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("span", _hoisted_3, toDisplayString(file.filename), 1),
                createVNode(_component_n_icon, {
                  size: "20",
                  depth: 3,
                  class: normalizeClass(["remove-icon", {
                    "in-progress": props.disabled
                  }]),
                  onClick: withModifiers(($event) => removeItem(index), ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(unref(CloseOutline))
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"])
              ])
            ]);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_n_icon, {
              size: "48",
              depth: 3
            }, {
              default: withCtx(() => [
                createVNode(unref(ArchiveIcon))
              ]),
              _: 1
            })
          ]),
          createVNode(_component_n_text, { style: { "font-size": "16px" } }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode(" 点击或拖拽文件到该区域 ")
            ])),
            _: 1
          }),
          _ctx.desc ? (openBlock(), createElementBlock("p", _hoisted_6, toDisplayString(props.desc), 1)) : (openBlock(), createElementBlock("p", _hoisted_7, [
            renderSlot(_ctx.$slots, "desc", {}, void 0, true)
          ]))
        ]))
      ], 6);
    };
  }
});
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-afd9751e"]]);
const isff = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function addEvent(object, event, method, useCapture) {
  if (object.addEventListener) {
    object.addEventListener(event, method, useCapture);
  } else if (object.attachEvent) {
    object.attachEvent("on".concat(event), method);
  }
}
function removeEvent(object, event, method, useCapture) {
  if (object.removeEventListener) {
    object.removeEventListener(event, method, useCapture);
  } else if (object.detachEvent) {
    object.detachEvent("on".concat(event), method);
  }
}
function getMods(modifier, key) {
  const mods = key.slice(0, key.length - 1);
  for (let i = 0; i < mods.length; i++) mods[i] = modifier[mods[i].toLowerCase()];
  return mods;
}
function getKeys(key) {
  if (typeof key !== "string") key = "";
  key = key.replace(/\s/g, "");
  const keys = key.split(",");
  let index = keys.lastIndexOf("");
  for (; index >= 0; ) {
    keys[index - 1] += ",";
    keys.splice(index, 1);
    index = keys.lastIndexOf("");
  }
  return keys;
}
function compareArray(a1, a2) {
  const arr1 = a1.length >= a2.length ? a1 : a2;
  const arr2 = a1.length >= a2.length ? a2 : a1;
  let isIndex = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) isIndex = false;
  }
  return isIndex;
}
const _keyMap = {
  backspace: 8,
  "⌫": 8,
  tab: 9,
  clear: 12,
  enter: 13,
  "↩": 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  "⇪": 20,
  ",": 188,
  ".": 190,
  "/": 191,
  "`": 192,
  "-": isff ? 173 : 189,
  "=": isff ? 61 : 187,
  ";": isff ? 59 : 186,
  "'": 222,
  "[": 219,
  "]": 221,
  "\\": 220
};
const _modifier = {
  // shiftKey
  "⇧": 16,
  shift: 16,
  // altKey
  "⌥": 18,
  alt: 18,
  option: 18,
  // ctrlKey
  "⌃": 17,
  ctrl: 17,
  control: 17,
  // metaKey
  "⌘": 91,
  cmd: 91,
  command: 91
};
const modifierMap = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
};
const _mods = {
  16: false,
  18: false,
  17: false,
  91: false
};
const _handlers = {};
for (let k = 1; k < 20; k++) {
  _keyMap["f".concat(k)] = 111 + k;
}
let _downKeys = [];
let winListendFocus = null;
let _scope = "all";
const elementEventMap = /* @__PURE__ */ new Map();
const code = (x) => _keyMap[x.toLowerCase()] || _modifier[x.toLowerCase()] || x.toUpperCase().charCodeAt(0);
const getKey = (x) => Object.keys(_keyMap).find((k) => _keyMap[k] === x);
const getModifier = (x) => Object.keys(_modifier).find((k) => _modifier[k] === x);
function setScope(scope) {
  _scope = scope || "all";
}
function getScope() {
  return _scope || "all";
}
function getPressedKeyCodes() {
  return _downKeys.slice(0);
}
function getPressedKeyString() {
  return _downKeys.map((c) => getKey(c) || getModifier(c) || String.fromCharCode(c));
}
function getAllKeyCodes() {
  const result = [];
  Object.keys(_handlers).forEach((k) => {
    _handlers[k].forEach((_ref) => {
      let {
        key,
        scope,
        mods,
        shortcut
      } = _ref;
      result.push({
        scope,
        shortcut,
        mods,
        keys: key.split("+").map((v) => code(v))
      });
    });
  });
  return result;
}
function filter(event) {
  const target = event.target || event.srcElement;
  const {
    tagName
  } = target;
  let flag = true;
  const isInput = tagName === "INPUT" && !["checkbox", "radio", "range", "button", "file", "reset", "submit", "color"].includes(target.type);
  if (target.isContentEditable || (isInput || tagName === "TEXTAREA" || tagName === "SELECT") && !target.readOnly) {
    flag = false;
  }
  return flag;
}
function isPressed(keyCode) {
  if (typeof keyCode === "string") {
    keyCode = code(keyCode);
  }
  return _downKeys.indexOf(keyCode) !== -1;
}
function deleteScope(scope, newScope) {
  let handlers;
  let i;
  if (!scope) scope = getScope();
  for (const key in _handlers) {
    if (Object.prototype.hasOwnProperty.call(_handlers, key)) {
      handlers = _handlers[key];
      for (i = 0; i < handlers.length; ) {
        if (handlers[i].scope === scope) {
          const deleteItems = handlers.splice(i, 1);
          deleteItems.forEach((_ref2) => {
            let {
              element
            } = _ref2;
            return removeKeyEvent(element);
          });
        } else {
          i++;
        }
      }
    }
  }
  if (getScope() === scope) setScope(newScope || "all");
}
function clearModifier(event) {
  let key = event.keyCode || event.which || event.charCode;
  const i = _downKeys.indexOf(key);
  if (i >= 0) {
    _downKeys.splice(i, 1);
  }
  if (event.key && event.key.toLowerCase() === "meta") {
    _downKeys.splice(0, _downKeys.length);
  }
  if (key === 93 || key === 224) key = 91;
  if (key in _mods) {
    _mods[key] = false;
    for (const k in _modifier) if (_modifier[k] === key) hotkeys[k] = false;
  }
}
function unbind(keysInfo) {
  if (typeof keysInfo === "undefined") {
    Object.keys(_handlers).forEach((key) => {
      Array.isArray(_handlers[key]) && _handlers[key].forEach((info) => eachUnbind(info));
      delete _handlers[key];
    });
    removeKeyEvent(null);
  } else if (Array.isArray(keysInfo)) {
    keysInfo.forEach((info) => {
      if (info.key) eachUnbind(info);
    });
  } else if (typeof keysInfo === "object") {
    if (keysInfo.key) eachUnbind(keysInfo);
  } else if (typeof keysInfo === "string") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    let [scope, method] = args;
    if (typeof scope === "function") {
      method = scope;
      scope = "";
    }
    eachUnbind({
      key: keysInfo,
      scope,
      method,
      splitKey: "+"
    });
  }
}
const eachUnbind = (_ref3) => {
  let {
    key,
    scope,
    method,
    splitKey = "+"
  } = _ref3;
  const multipleKeys = getKeys(key);
  multipleKeys.forEach((originKey) => {
    const unbindKeys = originKey.split(splitKey);
    const len = unbindKeys.length;
    const lastKey = unbindKeys[len - 1];
    const keyCode = lastKey === "*" ? "*" : code(lastKey);
    if (!_handlers[keyCode]) return;
    if (!scope) scope = getScope();
    const mods = len > 1 ? getMods(_modifier, unbindKeys) : [];
    const unbindElements = [];
    _handlers[keyCode] = _handlers[keyCode].filter((record) => {
      const isMatchingMethod = method ? record.method === method : true;
      const isUnbind = isMatchingMethod && record.scope === scope && compareArray(record.mods, mods);
      if (isUnbind) unbindElements.push(record.element);
      return !isUnbind;
    });
    unbindElements.forEach((element) => removeKeyEvent(element));
  });
};
function eventHandler(event, handler, scope, element) {
  if (handler.element !== element) {
    return;
  }
  let modifiersMatch;
  if (handler.scope === scope || handler.scope === "all") {
    modifiersMatch = handler.mods.length > 0;
    for (const y in _mods) {
      if (Object.prototype.hasOwnProperty.call(_mods, y)) {
        if (!_mods[y] && handler.mods.indexOf(+y) > -1 || _mods[y] && handler.mods.indexOf(+y) === -1) {
          modifiersMatch = false;
        }
      }
    }
    if (handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch || handler.shortcut === "*") {
      handler.keys = [];
      handler.keys = handler.keys.concat(_downKeys);
      if (handler.method(event, handler) === false) {
        if (event.preventDefault) event.preventDefault();
        else event.returnValue = false;
        if (event.stopPropagation) event.stopPropagation();
        if (event.cancelBubble) event.cancelBubble = true;
      }
    }
  }
}
function dispatch(event, element) {
  const asterisk = _handlers["*"];
  let key = event.keyCode || event.which || event.charCode;
  if (!hotkeys.filter.call(this, event)) return;
  if (key === 93 || key === 224) key = 91;
  if (_downKeys.indexOf(key) === -1 && key !== 229) _downKeys.push(key);
  ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach((keyName) => {
    const keyNum = modifierMap[keyName];
    if (event[keyName] && _downKeys.indexOf(keyNum) === -1) {
      _downKeys.push(keyNum);
    } else if (!event[keyName] && _downKeys.indexOf(keyNum) > -1) {
      _downKeys.splice(_downKeys.indexOf(keyNum), 1);
    } else if (keyName === "metaKey" && event[keyName] && _downKeys.length === 3) {
      if (!(event.ctrlKey || event.shiftKey || event.altKey)) {
        _downKeys = _downKeys.slice(_downKeys.indexOf(keyNum));
      }
    }
  });
  if (key in _mods) {
    _mods[key] = true;
    for (const k in _modifier) {
      if (_modifier[k] === key) hotkeys[k] = true;
    }
    if (!asterisk) return;
  }
  for (const e in _mods) {
    if (Object.prototype.hasOwnProperty.call(_mods, e)) {
      _mods[e] = event[modifierMap[e]];
    }
  }
  if (event.getModifierState && !(event.altKey && !event.ctrlKey) && event.getModifierState("AltGraph")) {
    if (_downKeys.indexOf(17) === -1) {
      _downKeys.push(17);
    }
    if (_downKeys.indexOf(18) === -1) {
      _downKeys.push(18);
    }
    _mods[17] = true;
    _mods[18] = true;
  }
  const scope = getScope();
  if (asterisk) {
    for (let i = 0; i < asterisk.length; i++) {
      if (asterisk[i].scope === scope && (event.type === "keydown" && asterisk[i].keydown || event.type === "keyup" && asterisk[i].keyup)) {
        eventHandler(event, asterisk[i], scope, element);
      }
    }
  }
  if (!(key in _handlers)) return;
  const handlerKey = _handlers[key];
  const keyLen = handlerKey.length;
  for (let i = 0; i < keyLen; i++) {
    if (event.type === "keydown" && handlerKey[i].keydown || event.type === "keyup" && handlerKey[i].keyup) {
      if (handlerKey[i].key) {
        const record = handlerKey[i];
        const {
          splitKey
        } = record;
        const keyShortcut = record.key.split(splitKey);
        const _downKeysCurrent = [];
        for (let a = 0; a < keyShortcut.length; a++) {
          _downKeysCurrent.push(code(keyShortcut[a]));
        }
        if (_downKeysCurrent.sort().join("") === _downKeys.sort().join("")) {
          eventHandler(event, record, scope, element);
        }
      }
    }
  }
}
function hotkeys(key, option, method) {
  _downKeys = [];
  const keys = getKeys(key);
  let mods = [];
  let scope = "all";
  let element = document;
  let i = 0;
  let keyup = false;
  let keydown = true;
  let splitKey = "+";
  let capture = false;
  let single = false;
  if (method === void 0 && typeof option === "function") {
    method = option;
  }
  if (Object.prototype.toString.call(option) === "[object Object]") {
    if (option.scope) scope = option.scope;
    if (option.element) element = option.element;
    if (option.keyup) keyup = option.keyup;
    if (option.keydown !== void 0) keydown = option.keydown;
    if (option.capture !== void 0) capture = option.capture;
    if (typeof option.splitKey === "string") splitKey = option.splitKey;
    if (option.single === true) single = true;
  }
  if (typeof option === "string") scope = option;
  if (single) unbind(key, scope);
  for (; i < keys.length; i++) {
    key = keys[i].split(splitKey);
    mods = [];
    if (key.length > 1) mods = getMods(_modifier, key);
    key = key[key.length - 1];
    key = key === "*" ? "*" : code(key);
    if (!(key in _handlers)) _handlers[key] = [];
    _handlers[key].push({
      keyup,
      keydown,
      scope,
      mods,
      shortcut: keys[i],
      method,
      key: keys[i],
      splitKey,
      element
    });
  }
  if (typeof element !== "undefined" && window) {
    if (!elementEventMap.has(element)) {
      const keydownListener = function() {
        let event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        return dispatch(event, element);
      };
      const keyupListenr = function() {
        let event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        dispatch(event, element);
        clearModifier(event);
      };
      elementEventMap.set(element, {
        keydownListener,
        keyupListenr,
        capture
      });
      addEvent(element, "keydown", keydownListener, capture);
      addEvent(element, "keyup", keyupListenr, capture);
    }
    if (!winListendFocus) {
      const listener = () => {
        _downKeys = [];
      };
      winListendFocus = {
        listener,
        capture
      };
      addEvent(window, "focus", listener, capture);
    }
  }
}
function trigger(shortcut) {
  let scope = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(_handlers).forEach((key) => {
    const dataList = _handlers[key].filter((item) => item.scope === scope && item.shortcut === shortcut);
    dataList.forEach((data) => {
      if (data && data.method) {
        data.method();
      }
    });
  });
}
function removeKeyEvent(element) {
  const values = Object.values(_handlers).flat();
  const findindex = values.findIndex((_ref4) => {
    let {
      element: el
    } = _ref4;
    return el === element;
  });
  if (findindex < 0) {
    const {
      keydownListener,
      keyupListenr,
      capture
    } = elementEventMap.get(element) || {};
    if (keydownListener && keyupListenr) {
      removeEvent(element, "keyup", keyupListenr, capture);
      removeEvent(element, "keydown", keydownListener, capture);
      elementEventMap.delete(element);
    }
  }
  if (values.length <= 0 || elementEventMap.size <= 0) {
    const eventKeys = Object.keys(elementEventMap);
    eventKeys.forEach((el) => {
      const {
        keydownListener,
        keyupListenr,
        capture
      } = elementEventMap.get(el) || {};
      if (keydownListener && keyupListenr) {
        removeEvent(el, "keyup", keyupListenr, capture);
        removeEvent(el, "keydown", keydownListener, capture);
        elementEventMap.delete(el);
      }
    });
    elementEventMap.clear();
    Object.keys(_handlers).forEach((key) => delete _handlers[key]);
    if (winListendFocus) {
      const {
        listener,
        capture
      } = winListendFocus;
      removeEvent(window, "focus", listener, capture);
      winListendFocus = null;
    }
  }
}
const _api = {
  getPressedKeyString,
  setScope,
  getScope,
  deleteScope,
  getPressedKeyCodes,
  getAllKeyCodes,
  isPressed,
  filter,
  trigger,
  unbind,
  keyMap: _keyMap,
  modifier: _modifier,
  modifierMap
};
for (const a in _api) {
  if (Object.prototype.hasOwnProperty.call(_api, a)) {
    hotkeys[a] = _api[a];
  }
}
if (typeof window !== "undefined") {
  const _hotkeys = window.hotkeys;
  hotkeys.noConflict = (deep) => {
    if (deep && window.hotkeys === hotkeys) {
      window.hotkeys = _hotkeys;
    }
    return hotkeys;
  };
  window.hotkeys = hotkeys;
}
export {
  __unplugin_components_4 as _,
  hotkeys as h
};
