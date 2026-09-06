import { m as cB, p as c, q as cE, d as defineComponent, l as h, v as useConfig, b6 as useStyle, b7 as hsva, b8 as toHslaString, b9 as hsv2hsl, ba as toRgbaString, bb as hsv2rgb, bc as toHexaString, bd as hsla, be as toHsvaString, bf as hsl2hsv, bg as hsl2rgb, bh as rgba, bi as rgb2hsv, bj as rgb2hsl, r as ref, x as computed, bk as on, bl as off, D as createInjectionKey, S as inject, X as watchEffect, bm as toHexString, bn as toHslString, bo as toRgbString, bp as toHsvString, bq as warn, br as fadeInScaleUpTransition, n as cM, O as resolveWrappedSlotWithProps, U as Transition, H as withDirectives, $ as clickoutside, bs as useFormItem, y as useTheme, E as provide, J as toRef, Y as watch, aO as createKey, C as useThemeClass, a9 as isMounted, bt as getPreciseEventTarget, bu as colorPickerLight, G as call, B as Button, aq as nextTick, ah as keysOf, aG as resolveSlot, aL as resolveWrappedSlot, M as NBaseIcon, aI as WarningIcon, bv as omit, ai as keep, bw as popconfirmLight, aP as insideModal, aQ as insidePopover, bx as onBeforeUpdate, by as sliderLight, Z as onBeforeUnmount, al as mergeModels, am as useModel, g as createBlock, w as withCtx, a as createVNode, _ as __unplugin_components_3$1, e as createBaseVNode, h as createCommentVNode, j as createTextVNode, f as unref, i as isRef, at as normalizeStyle, ay as resolveComponent, c as createElementBlock, F as Fragment, ao as renderList, t as toDisplayString, ap as normalizeClass, aU as withModifiers, ar as __unplugin_components_3$2, o as openBlock, k as api, aB as withKeys, an as storeToRefs, ax as onMounted } from "./index-CB8xvhFr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { c as common } from "./common-1CgNZfMf.js";
import { a as useStorage, g as useResizeObserver, t as templateRef } from "./index-CMOU2boc.js";
import { u as uuid } from "./index-guw4y6OO.js";
import { s as showInput } from "./showInput-DT3gy469.js";
import { a as __unplugin_components_1, b as __unplugin_components_5$1, _ as __unplugin_components_2$4 } from "./Switch-n0tH4Ke1.js";
import { _ as __unplugin_components_0, a as __unplugin_components_5 } from "./Select-CYnthXY-.js";
import { d as baseIsEqual, B as Binder, V as VTarget, e as VFollower, u as useAdjustedTo, _ as __unplugin_components_2$3, p as popoverBaseProps } from "./Popover-D4v8saSe.js";
import { _ as __unplugin_components_2$2, a as useLocale, u as useMergedState } from "./Input-C3jgSm1V.js";
import { _ as __unplugin_components_1$1 } from "./InputNumber-DuVe1x-P.js";
import { _ as __unplugin_components_1$2 } from "./Checkbox-Buw5q29r.js";
import { _ as __unplugin_components_1$3 } from "./Divider-CA3TQbOA.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
import { N as NIcon } from "./Icon-D1o4HjX4.js";
import { _ as _sfc_main$4 } from "./Tip.vue_vue_type_script_setup_true_lang-BVeN5TP1.js";
import { l as useUploadPreset, d as useAppConfig, a as useUserInfoStore, j as bili, c as cloneDeep, v as videoPreset } from "./index-FWk7a7hG.js";
import { u as useConfirm } from "./index--O4HUYks.js";
import { u as useBreakpoints } from "./useBreakpoints-y2ktmuab.js";
import { _ as __unplugin_components_5$2, a as __unplugin_components_3$3 } from "./RadioGroup-CJq397k5.js";
import { _ as __unplugin_components_0$1 } from "./DatePicker-bHyidnXI.js";
import { _ as __unplugin_components_2$5 } from "./Space-Dcg2rQj1.js";
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
const style$3 = cB("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [c(">", [cB("input", [c("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), c("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), cB("button", [c("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [cE("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), c("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [cE("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), c("*", [c("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [c(">", [cB("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cB("base-selection", [cB("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cB("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cE("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), c("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [c(">", [cB("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cB("base-selection", [cB("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cB("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cE("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);
const inputGroupProps = {};
const __unplugin_components_2$1 = defineComponent({
  name: "InputGroup",
  props: inputGroupProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    useStyle("-input-group", style$3, mergedClsPrefixRef);
    return {
      mergedClsPrefix: mergedClsPrefixRef
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      class: `${mergedClsPrefix}-input-group`
    }, this.$slots);
  }
});
function deriveDefaultValue(modes, showAlpha) {
  const mode = modes[0];
  switch (mode) {
    case "hex":
      return showAlpha ? "#000000FF" : "#000000";
    case "rgb":
      return showAlpha ? "rgba(0, 0, 0, 1)" : "rgb(0, 0, 0)";
    case "hsl":
      return showAlpha ? "hsla(0, 0%, 0%, 1)" : "hsl(0, 0%, 0%)";
    case "hsv":
      return showAlpha ? "hsva(0, 0%, 0%, 1)" : "hsv(0, 0%, 0%)";
  }
  return "#000000";
}
function getModeFromValue(color) {
  if (color === null) return null;
  if (/^ *#/.test(color)) return "hex";
  if (color.includes("rgb")) return "rgb";
  if (color.includes("hsl")) return "hsl";
  if (color.includes("hsv")) return "hsv";
  return null;
}
function getWCAGContrast(hsla2, contrastColor = [255, 255, 255], level = "AA") {
  const [r, g, b, a] = rgba(toHslaString(hsla2));
  if (a === 1) {
    const luminance1 = rgb2luminance([r, g, b]);
    const luminance2 = rgb2luminance(contrastColor);
    const contrast = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
    return contrast >= (level === "AA" ? 4.5 : 7);
  }
  const blendedR = Math.round(r * a + contrastColor[0] * (1 - a));
  const blendedG = Math.round(g * a + contrastColor[1] * (1 - a));
  const blendedB = Math.round(b * a + contrastColor[2] * (1 - a));
  const luminanceBlended = rgb2luminance([blendedR, blendedG, blendedB]);
  const luminanceWhite = rgb2luminance(contrastColor);
  const contrastBlended = (Math.max(luminanceBlended, luminanceWhite) + 0.05) / (Math.min(luminanceBlended, luminanceWhite) + 0.05);
  return contrastBlended >= (level === "AA" ? 4.5 : 7);
}
function rgb2luminance(rgb) {
  const [cr, cg, cb] = rgb.map((c2) => {
    c2 /= 255;
    return c2 <= 0.03928 ? c2 / 12.92 : Math.pow((c2 + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * cr + 0.7152 * cg + 0.0722 * cb;
}
function normalizeHue(hue) {
  hue = Math.round(hue);
  return hue >= 360 ? 359 : hue < 0 ? 0 : hue;
}
function normalizeAlpha(alpha) {
  alpha = Math.round(alpha * 100) / 100;
  return alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
}
const convert = {
  rgb: {
    hex(value) {
      return toHexaString(rgba(value));
    },
    hsl(value) {
      const [r, g, b, a] = rgba(value);
      return toHslaString([...rgb2hsl(r, g, b), a]);
    },
    hsv(value) {
      const [r, g, b, a] = rgba(value);
      return toHsvaString([...rgb2hsv(r, g, b), a]);
    }
  },
  hex: {
    rgb(value) {
      return toRgbaString(rgba(value));
    },
    hsl(value) {
      const [r, g, b, a] = rgba(value);
      return toHslaString([...rgb2hsl(r, g, b), a]);
    },
    hsv(value) {
      const [r, g, b, a] = rgba(value);
      return toHsvaString([...rgb2hsv(r, g, b), a]);
    }
  },
  hsl: {
    hex(value) {
      const [h2, s, l, a] = hsla(value);
      return toHexaString([...hsl2rgb(h2, s, l), a]);
    },
    rgb(value) {
      const [h2, s, l, a] = hsla(value);
      return toRgbaString([...hsl2rgb(h2, s, l), a]);
    },
    hsv(value) {
      const [h2, s, l, a] = hsla(value);
      return toHsvaString([...hsl2hsv(h2, s, l), a]);
    }
  },
  hsv: {
    hex(value) {
      const [h2, s, v, a] = hsva(value);
      return toHexaString([...hsv2rgb(h2, s, v), a]);
    },
    rgb(value) {
      const [h2, s, v, a] = hsva(value);
      return toRgbaString([...hsv2rgb(h2, s, v), a]);
    },
    hsl(value) {
      const [h2, s, v, a] = hsva(value);
      return toHslaString([...hsv2hsl(h2, s, v), a]);
    }
  }
};
function convertColor(value, mode, originalMode) {
  originalMode = originalMode || getModeFromValue(value);
  if (!originalMode) return null;
  if (originalMode === mode) return value;
  const conversions = convert[originalMode];
  return conversions[mode](value);
}
const HANDLE_SIZE$2 = "12px";
const HANDLE_SIZE_NUM$1 = 12;
const RADIUS$2 = "6px";
const AlphaSlider = defineComponent({
  name: "AlphaSlider",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    rgba: {
      type: Array,
      default: null
    },
    alpha: {
      type: Number,
      default: 0
    },
    onUpdateAlpha: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const railRef = ref(null);
    function handleMouseDown(e) {
      if (!railRef.value || !props.rgba) return;
      on("mousemove", document, handleMouseMove);
      on("mouseup", document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: railEl
      } = railRef;
      if (!railEl) return;
      const {
        width,
        left
      } = railEl.getBoundingClientRect();
      const newAlpha = (e.clientX - left) / (width - HANDLE_SIZE_NUM$1);
      props.onUpdateAlpha(normalizeAlpha(newAlpha));
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", document, handleMouseMove);
      off("mouseup", document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      railRef,
      railBackgroundImage: computed(() => {
        const {
          rgba: rgba2
        } = props;
        if (!rgba2) return "";
        return `linear-gradient(to right, rgba(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]}, 0) 0%, rgba(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]}, 1) 100%)`;
      }),
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-slider`,
      ref: "railRef",
      style: {
        height: HANDLE_SIZE$2,
        borderRadius: RADIUS$2
      },
      onMousedown: this.handleMouseDown
    }, h("div", {
      style: {
        borderRadius: RADIUS$2,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: "hidden"
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-checkboard`
    }), h("div", {
      class: `${clsPrefix}-color-picker-slider__image`,
      style: {
        backgroundImage: this.railBackgroundImage
      }
    })), this.rgba && h("div", {
      style: {
        position: "absolute",
        left: RADIUS$2,
        right: RADIUS$2,
        top: 0,
        bottom: 0
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        left: `calc(${this.alpha * 100}% - ${RADIUS$2})`,
        borderRadius: RADIUS$2,
        width: HANDLE_SIZE$2,
        height: HANDLE_SIZE$2
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: toRgbaString(this.rgba),
        borderRadius: RADIUS$2,
        width: HANDLE_SIZE$2,
        height: HANDLE_SIZE$2
      }
    }))));
  }
});
const colorPickerInjectionKey = createInjectionKey("n-color-picker");
function normalizeRgbUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 255));
  }
  return false;
}
function normalizeHueUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 360));
  }
  return false;
}
function normalizeSlvUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 100));
  }
  return false;
}
function normalizeHexaUnit(value) {
  const trimmedValue = value.trim();
  if (/^#[0-9a-fA-F]+$/.test(trimmedValue)) {
    return [4, 5, 7, 9].includes(trimmedValue.length);
  }
  return false;
}
function normalizeAlphaUnit(value) {
  if (/^\d{1,3}\.?\d*%$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value) / 100, 100));
  }
  return false;
}
const inputThemeOverrides = {
  paddingSmall: "0 4px"
};
const ColorInputUnit = defineComponent({
  name: "ColorInputUnit",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      default: null
    },
    showAlpha: Boolean,
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const inputValueRef = ref("");
    const {
      themeRef
    } = inject(colorPickerInjectionKey, null);
    watchEffect(() => {
      inputValueRef.value = getInputString();
    });
    function getInputString() {
      const {
        value
      } = props;
      if (value === null) return "";
      const {
        label
      } = props;
      if (label === "HEX") {
        return value;
      }
      if (label === "A") {
        return `${Math.floor(value * 100)}%`;
      }
      return String(Math.floor(value));
    }
    function handleInputUpdateValue(value) {
      inputValueRef.value = value;
    }
    function handleInputChange(value) {
      let unit;
      let valid;
      switch (props.label) {
        case "HEX":
          valid = normalizeHexaUnit(value);
          if (valid) {
            props.onUpdateValue(value);
          }
          inputValueRef.value = getInputString();
          break;
        case "H":
          unit = normalizeHueUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "S":
        case "L":
        case "V":
          unit = normalizeSlvUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "A":
          unit = normalizeAlphaUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "R":
        case "G":
        case "B":
          unit = normalizeRgbUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
      }
    }
    return {
      mergedTheme: themeRef,
      inputValue: inputValueRef,
      handleInputChange,
      handleInputUpdateValue
    };
  },
  render() {
    const {
      mergedTheme
    } = this;
    return h(__unplugin_components_2$2, {
      size: "small",
      placeholder: this.label,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      builtinThemeOverrides: inputThemeOverrides,
      value: this.inputValue,
      onUpdateValue: this.handleInputUpdateValue,
      onChange: this.handleInputChange,
      // add more space for xxx% input
      style: this.label === "A" ? "flex-grow: 1.25;" : ""
    });
  }
});
const ColorInput = defineComponent({
  name: "ColorInput",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    modes: {
      type: Array,
      required: true
    },
    showAlpha: {
      type: Boolean,
      required: true
    },
    value: {
      // for hex to get percise value
      type: String,
      default: null
    },
    valueArr: {
      type: Array,
      default: null
    },
    onUpdateValue: {
      type: Function,
      required: true
    },
    onUpdateMode: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    return {
      handleUnitUpdateValue(index, value) {
        const {
          showAlpha
        } = props;
        if (props.mode === "hex") {
          props.onUpdateValue((showAlpha ? toHexaString : toHexString)(value));
          return;
        }
        let nextValueArr;
        if (props.valueArr === null) {
          nextValueArr = [0, 0, 0, 0];
        } else {
          nextValueArr = Array.from(props.valueArr);
        }
        switch (props.mode) {
          case "hsv":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toHsvaString : toHsvString)(nextValueArr));
            break;
          case "rgb":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toRgbaString : toRgbString)(nextValueArr));
            break;
          case "hsl":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toHslaString : toHslString)(nextValueArr));
            break;
        }
      }
    };
  },
  render() {
    const {
      clsPrefix,
      modes
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-input`
    }, h("div", {
      class: `${clsPrefix}-color-picker-input__mode`,
      onClick: this.onUpdateMode,
      style: {
        cursor: modes.length === 1 ? "" : "pointer"
      }
    }, this.mode.toUpperCase() + (this.showAlpha ? "A" : "")), h(__unplugin_components_2$1, null, {
      default: () => {
        const {
          mode,
          valueArr,
          showAlpha
        } = this;
        if (mode === "hex") {
          let hexValue = null;
          try {
            hexValue = valueArr === null ? null : (showAlpha ? toHexaString : toHexString)(valueArr);
          } catch (_a) {
          }
          return h(ColorInputUnit, {
            label: "HEX",
            showAlpha,
            value: hexValue,
            onUpdateValue: (unitValue) => {
              this.handleUnitUpdateValue(0, unitValue);
            }
          });
        }
        return (mode + (showAlpha ? "a" : "")).split("").map((v, i) => h(ColorInputUnit, {
          label: v.toUpperCase(),
          value: valueArr === null ? null : valueArr[i],
          onUpdateValue: (unitValue) => {
            this.handleUnitUpdateValue(i, unitValue);
          }
        }));
      }
    }));
  }
});
function normalizeColor(color, mode) {
  if (mode === "hsv") {
    const [h2, s, v, a] = hsva(color);
    return toRgbaString([...hsv2rgb(h2, s, v), a]);
  }
  return color;
}
function getHexFromName(color) {
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) {
    return "#000000";
  }
  ctx.fillStyle = color;
  return ctx.fillStyle;
}
const ColorPickerSwatches = defineComponent({
  name: "ColorPickerSwatches",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    swatches: {
      type: Array,
      required: true
    },
    onUpdateColor: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const parsedSwatchesRef = computed(() => props.swatches.map((value) => {
      const mode = getModeFromValue(value);
      return {
        value,
        mode,
        legalValue: normalizeColor(value, mode)
      };
    }));
    function normalizeOutput(parsed) {
      const {
        mode: modeProp
      } = props;
      let {
        value,
        mode: swatchColorMode
      } = parsed;
      if (!swatchColorMode) {
        swatchColorMode = "hex";
        if (/^[a-zA-Z]+$/.test(value)) {
          value = getHexFromName(value);
        } else {
          warn("color-picker", `color ${value} in swatches is invalid.`);
          value = "#000000";
        }
      }
      if (swatchColorMode === modeProp) return value;
      return convertColor(value, modeProp, swatchColorMode);
    }
    function handleSwatchSelect(parsed) {
      props.onUpdateColor(normalizeOutput(parsed));
    }
    function handleSwatchKeyDown(e, parsed) {
      if (e.key === "Enter") handleSwatchSelect(parsed);
    }
    return {
      parsedSwatchesRef,
      handleSwatchSelect,
      handleSwatchKeyDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-swatches`
    }, this.parsedSwatchesRef.map((swatch) => h("div", {
      class: `${clsPrefix}-color-picker-swatch`,
      tabindex: 0,
      onClick: () => {
        this.handleSwatchSelect(swatch);
      },
      onKeydown: (e) => {
        this.handleSwatchKeyDown(e, swatch);
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-swatch__fill`,
      style: {
        background: swatch.legalValue
      }
    }))));
  }
});
const ColorPickerTrigger = defineComponent({
  name: "ColorPickerTrigger",
  slots: Object,
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null
    },
    hsla: {
      type: Array,
      default: null
    },
    disabled: Boolean,
    onClick: Function
  },
  setup(props) {
    const {
      colorPickerSlots,
      renderLabelRef
    } = inject(colorPickerInjectionKey, null);
    return () => {
      const {
        hsla: hsla2,
        value,
        clsPrefix,
        onClick,
        disabled
      } = props;
      const renderLabel = colorPickerSlots.label || renderLabelRef.value;
      return h("div", {
        class: [`${clsPrefix}-color-picker`, disabled && `${clsPrefix}-color-picker--disabled`],
        onClick: disabled ? void 0 : onClick
      }, h("div", {
        class: `${clsPrefix}-color-picker__fill`
      }, h("div", {
        class: `${clsPrefix}-color-picker-checkboard`
      }), h("div", {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: hsla2 ? toHslaString(hsla2) : ""
        }
      }), value && hsla2 ? h("div", {
        class: `${clsPrefix}-color-picker__value`,
        style: {
          color: getWCAGContrast(hsla2) ? "white" : "black"
        }
      }, renderLabel ? renderLabel(value) : value) : null));
    };
  }
});
const ColorPreview = defineComponent({
  name: "ColorPreview",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: null,
      validator: (value) => {
        const mode = getModeFromValue(value);
        return Boolean(!value || mode && mode !== "hsv");
      }
    },
    onUpdateColor: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    function handleChange(e) {
      var _a;
      const value = e.target.value;
      (_a = props.onUpdateColor) === null || _a === void 0 ? void 0 : _a.call(props, convertColor(value.toUpperCase(), props.mode, "hex"));
      e.stopPropagation();
    }
    return {
      handleChange
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-preview__preview`
    }, h("span", {
      class: `${clsPrefix}-color-picker-preview__fill`,
      style: {
        background: this.color || "#000000"
      }
    }), h("input", {
      class: `${clsPrefix}-color-picker-preview__input`,
      type: "color",
      value: this.color,
      onChange: this.handleChange
    }));
  }
});
const HANDLE_SIZE$1 = "12px";
const HANDLE_SIZE_NUM = 12;
const RADIUS$1 = "6px";
const RADIUS_NUM = 6;
const GRADIENT = "linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";
const HueSlider = defineComponent({
  name: "HueSlider",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    hue: {
      type: Number,
      required: true
    },
    onUpdateHue: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const railRef = ref(null);
    function handleMouseDown(e) {
      if (!railRef.value) return;
      on("mousemove", document, handleMouseMove);
      on("mouseup", document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: railEl
      } = railRef;
      if (!railEl) return;
      const {
        width,
        left
      } = railEl.getBoundingClientRect();
      const newHue = normalizeHue((e.clientX - left - RADIUS_NUM) / (width - HANDLE_SIZE_NUM) * 360);
      props.onUpdateHue(newHue);
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", document, handleMouseMove);
      off("mouseup", document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      railRef,
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-slider`,
      style: {
        height: HANDLE_SIZE$1,
        borderRadius: RADIUS$1
      }
    }, h("div", {
      ref: "railRef",
      style: {
        boxShadow: "inset 0 0 2px 0 rgba(0, 0, 0, .24)",
        boxSizing: "border-box",
        backgroundImage: GRADIENT,
        height: HANDLE_SIZE$1,
        borderRadius: RADIUS$1,
        position: "relative"
      },
      onMousedown: this.handleMouseDown
    }, h("div", {
      style: {
        position: "absolute",
        left: RADIUS$1,
        right: RADIUS$1,
        top: 0,
        bottom: 0
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        left: `calc((${this.hue}%) / 359 * 100 - ${RADIUS$1})`,
        borderRadius: RADIUS$1,
        width: HANDLE_SIZE$1,
        height: HANDLE_SIZE$1
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: `hsl(${this.hue}, 100%, 50%)`,
        borderRadius: RADIUS$1,
        width: HANDLE_SIZE$1,
        height: HANDLE_SIZE$1
      }
    })))));
  }
});
const HANDLE_SIZE = "12px";
const RADIUS = "6px";
const Pallete = defineComponent({
  name: "Pallete",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    rgba: {
      type: Array,
      default: null
    },
    // 0 - 360
    displayedHue: {
      type: Number,
      required: true
    },
    displayedSv: {
      type: Array,
      required: true
    },
    onUpdateSV: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const palleteRef = ref(null);
    function handleMouseDown(e) {
      if (!palleteRef.value) return;
      on("mousemove", document, handleMouseMove);
      on("mouseup", document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: palleteEl
      } = palleteRef;
      if (!palleteEl) return;
      const {
        width,
        height,
        left,
        bottom
      } = palleteEl.getBoundingClientRect();
      const newV = (bottom - e.clientY) / height;
      const newS = (e.clientX - left) / width;
      const normalizedNewS = 100 * (newS > 1 ? 1 : newS < 0 ? 0 : newS);
      const normalizedNewV = 100 * (newV > 1 ? 1 : newV < 0 ? 0 : newV);
      props.onUpdateSV(normalizedNewS, normalizedNewV);
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", document, handleMouseMove);
      off("mouseup", document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      palleteRef,
      handleColor: computed(() => {
        const {
          rgba: rgba2
        } = props;
        if (!rgba2) return "";
        return `rgb(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]})`;
      }),
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-pallete`,
      onMousedown: this.handleMouseDown,
      ref: "palleteRef"
    }, h("div", {
      class: `${clsPrefix}-color-picker-pallete__layer`,
      style: {
        backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`
      }
    }), h("div", {
      class: `${clsPrefix}-color-picker-pallete__layer ${clsPrefix}-color-picker-pallete__layer--shadowed`,
      style: {
        backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"
      }
    }), this.rgba && h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        width: HANDLE_SIZE,
        height: HANDLE_SIZE,
        borderRadius: RADIUS,
        left: `calc(${this.displayedSv[0]}% - ${RADIUS})`,
        bottom: `calc(${this.displayedSv[1]}% - ${RADIUS})`
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: this.handleColor,
        borderRadius: RADIUS,
        width: HANDLE_SIZE,
        height: HANDLE_SIZE
      }
    })));
  }
});
const style$2 = c([cB("color-picker-panel", `
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `, [fadeInScaleUpTransition(), cB("input", `
 text-align: center;
 `)]), cB("color-picker-checkboard", `
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [c("&::after", `
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cB("color-picker-slider", `
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `, [cE("image", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `), c("&::after", `
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]), cB("color-picker-handle", `
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `, [cE("fill", `
 box-sizing: border-box;
 border: 2px solid white;
 `)]), cB("color-picker-pallete", `
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `, [cE("layer", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [cM("shadowed", `
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]), cB("color-picker-preview", `
 display: flex;
 `, [cE("sliders", `
 flex: 1 0 auto;
 `), cE("preview", `
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `), cE("fill", `
 display: block;
 width: 30px;
 height: 30px;
 `), cE("input", `
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]), cB("color-picker-input", `
 display: flex;
 align-items: center;
 `, [cB("input", `
 flex-grow: 1;
 flex-basis: 0;
 `), cE("mode", `
 width: 72px;
 text-align: center;
 `)]), cB("color-picker-control", `
 padding: 12px;
 `), cB("color-picker-action", `
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `, [cB("button", "margin-left: 8px;")]), cB("color-picker", `
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 cursor: pointer;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `, [cM("disabled", "cursor: not-allowed"), cE("value", `
 white-space: nowrap;
 position: relative;
 `), cE("fill", `
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `), cB("color-picker-checkboard", `
 border-radius: var(--n-border-radius);
 `, [c("&::after", `
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]), cB("color-picker-swatches", `
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `, [cB("color-picker-swatch", `
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `, [cE("fill", `
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `), c("&:focus", `
 outline: none;
 `, [cE("fill", [c("&::after", `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);
const colorPickerProps = Object.assign(Object.assign({}, useTheme.props), {
  value: String,
  show: {
    type: Boolean,
    default: void 0
  },
  defaultShow: Boolean,
  defaultValue: String,
  modes: {
    type: Array,
    // no hsva by default since browser doesn't support it
    default: () => ["rgb", "hex", "hsl"]
  },
  placement: {
    type: String,
    default: "bottom-start"
  },
  to: useAdjustedTo.propTo,
  showAlpha: {
    type: Boolean,
    default: true
  },
  showPreview: Boolean,
  swatches: Array,
  disabled: {
    type: Boolean,
    default: void 0
  },
  actions: {
    type: Array,
    default: null
  },
  internalActions: Array,
  size: String,
  renderLabel: Function,
  onComplete: Function,
  onConfirm: Function,
  onClear: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array]
});
const __unplugin_components_2 = defineComponent({
  name: "ColorPicker",
  props: colorPickerProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    let triggerRef = null;
    function setTriggerRef(el) {
      triggerRef = el;
    }
    let upcomingValue = null;
    const {
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled,
      mergedComponentPropsRef
    } = useConfig(props);
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
        const configSize = (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.ColorPicker) === null || _b === void 0 ? void 0 : _b.size;
        if (configSize) return configSize;
        return "medium";
      }
    });
    const {
      mergedSizeRef,
      mergedDisabledRef
    } = formItem;
    const {
      localeRef
    } = useLocale("global");
    const themeRef = useTheme("ColorPicker", "-color-picker", style$2, colorPickerLight, props, mergedClsPrefixRef);
    provide(colorPickerInjectionKey, {
      themeRef,
      renderLabelRef: toRef(props, "renderLabel"),
      colorPickerSlots: slots
    });
    const uncontrolledShowRef = ref(props.defaultShow);
    const mergedShowRef = useMergedState(toRef(props, "show"), uncontrolledShowRef);
    function doUpdateShow(value) {
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow) call(onUpdateShow, value);
      if (_onUpdateShow) call(_onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    const {
      defaultValue
    } = props;
    const uncontrolledValueRef = ref(defaultValue === void 0 ? deriveDefaultValue(props.modes, props.showAlpha) : defaultValue);
    const mergedValueRef = useMergedState(toRef(props, "value"), uncontrolledValueRef);
    const undoStackRef = ref([mergedValueRef.value]);
    const valueIndexRef = ref(0);
    const valueModeRef = computed(() => getModeFromValue(mergedValueRef.value));
    const {
      modes
    } = props;
    const displayedModeRef = ref(getModeFromValue(mergedValueRef.value) || modes[0] || "rgb");
    function handleUpdateDisplayedMode() {
      const {
        modes: modes2
      } = props;
      const {
        value: displayedMode
      } = displayedModeRef;
      const currentModeIndex = modes2.findIndex((mode) => mode === displayedMode);
      if (~currentModeIndex) {
        displayedModeRef.value = modes2[(currentModeIndex + 1) % modes2.length];
      } else {
        displayedModeRef.value = "rgb";
      }
    }
    let _h, s, l, v, r, g, b, a;
    const hsvaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case "hsv":
          return hsva(mergedValue);
        case "hsl":
          [_h, s, l, a] = hsla(mergedValue);
          return [...hsl2hsv(_h, s, l), a];
        case "rgb":
        case "hex":
          [r, g, b, a] = rgba(mergedValue);
          return [...rgb2hsv(r, g, b), a];
      }
    });
    const rgbaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case "rgb":
        case "hex":
          return rgba(mergedValue);
        case "hsv":
          [_h, s, v, a] = hsva(mergedValue);
          return [...hsv2rgb(_h, s, v), a];
        case "hsl":
          [_h, s, l, a] = hsla(mergedValue);
          return [...hsl2rgb(_h, s, l), a];
      }
    });
    const hslaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case "hsl":
          return hsla(mergedValue);
        case "hsv":
          [_h, s, v, a] = hsva(mergedValue);
          return [...hsv2hsl(_h, s, v), a];
        case "rgb":
        case "hex":
          [r, g, b, a] = rgba(mergedValue);
          return [...rgb2hsl(r, g, b), a];
      }
    });
    const mergedValueArrRef = computed(() => {
      switch (displayedModeRef.value) {
        case "rgb":
        case "hex":
          return rgbaRef.value;
        case "hsv":
          return hsvaRef.value;
        case "hsl":
          return hslaRef.value;
      }
    });
    const displayedHueRef = ref(0);
    const displayedAlphaRef = ref(1);
    const displayedSvRef = ref([0, 0]);
    function handleUpdateSv(s2, v2) {
      const {
        value: hsvaArr
      } = hsvaRef;
      const hue = displayedHueRef.value;
      const alpha = hsvaArr ? hsvaArr[3] : 1;
      displayedSvRef.value = [s2, v2];
      const {
        showAlpha
      } = props;
      switch (displayedModeRef.value) {
        case "hsv":
          doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s2, v2, alpha]), "cursor");
          break;
        case "hsl":
          doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s2, v2), alpha]), "cursor");
          break;
        case "rgb":
          doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s2, v2), alpha]), "cursor");
          break;
        case "hex":
          doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s2, v2), alpha]), "cursor");
          break;
      }
    }
    function handleUpdateHue(hue) {
      displayedHueRef.value = hue;
      const {
        value: hsvaArr
      } = hsvaRef;
      if (!hsvaArr) {
        return;
      }
      const [, s2, v2, a2] = hsvaArr;
      const {
        showAlpha
      } = props;
      switch (displayedModeRef.value) {
        case "hsv":
          doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s2, v2, a2]), "cursor");
          break;
        case "rgb":
          doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s2, v2), a2]), "cursor");
          break;
        case "hex":
          doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s2, v2), a2]), "cursor");
          break;
        case "hsl":
          doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s2, v2), a2]), "cursor");
          break;
      }
    }
    function handleUpdateAlpha(alpha) {
      switch (displayedModeRef.value) {
        case "hsv":
          [_h, s, v] = hsvaRef.value;
          doUpdateValue(toHsvaString([_h, s, v, alpha]), "cursor");
          break;
        case "rgb":
          [r, g, b] = rgbaRef.value;
          doUpdateValue(toRgbaString([r, g, b, alpha]), "cursor");
          break;
        case "hex":
          [r, g, b] = rgbaRef.value;
          doUpdateValue(toHexaString([r, g, b, alpha]), "cursor");
          break;
        case "hsl":
          [_h, s, l] = hslaRef.value;
          doUpdateValue(toHslaString([_h, s, l, alpha]), "cursor");
          break;
      }
      displayedAlphaRef.value = alpha;
    }
    function doUpdateValue(value, updateSource) {
      if (updateSource === "cursor") {
        upcomingValue = value;
      } else {
        upcomingValue = null;
      }
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue
      } = props;
      if (onUpdateValue) call(onUpdateValue, value);
      if (_onUpdateValue) call(_onUpdateValue, value);
      nTriggerFormChange();
      nTriggerFormInput();
      uncontrolledValueRef.value = value;
    }
    function handleInputUpdateValue(value) {
      doUpdateValue(value, "input");
      void nextTick(handleComplete);
    }
    function handleComplete(pushStack = true) {
      const {
        value
      } = mergedValueRef;
      if (value) {
        const {
          nTriggerFormChange,
          nTriggerFormInput
        } = formItem;
        const {
          onComplete
        } = props;
        if (onComplete) {
          onComplete(value);
        }
        const {
          value: undoStack
        } = undoStackRef;
        const {
          value: valueIndex
        } = valueIndexRef;
        if (pushStack) {
          undoStack.splice(valueIndex + 1, undoStack.length, value);
          valueIndexRef.value = valueIndex + 1;
        }
        nTriggerFormChange();
        nTriggerFormInput();
      }
    }
    function undo() {
      const {
        value: valueIndex
      } = valueIndexRef;
      if (valueIndex - 1 < 0) return;
      doUpdateValue(undoStackRef.value[valueIndex - 1], "input");
      handleComplete(false);
      valueIndexRef.value = valueIndex - 1;
    }
    function redo() {
      const {
        value: valueIndex
      } = valueIndexRef;
      if (valueIndex < 0 || valueIndex + 1 >= undoStackRef.value.length) return;
      doUpdateValue(undoStackRef.value[valueIndex + 1], "input");
      handleComplete(false);
      valueIndexRef.value = valueIndex + 1;
    }
    function handleClear() {
      doUpdateValue(null, "input");
      const {
        onClear
      } = props;
      if (onClear) {
        onClear();
      }
      doUpdateShow(false);
    }
    function handleConfirm() {
      const {
        value
      } = mergedValueRef;
      const {
        onConfirm
      } = props;
      if (onConfirm) {
        onConfirm(value);
      }
      doUpdateShow(false);
    }
    const undoableRef = computed(() => valueIndexRef.value >= 1);
    const redoableRef = computed(() => {
      const {
        value: undoStack
      } = undoStackRef;
      return undoStack.length > 1 && valueIndexRef.value < undoStack.length - 1;
    });
    watch(mergedShowRef, (value) => {
      if (!value) {
        undoStackRef.value = [mergedValueRef.value];
        valueIndexRef.value = 0;
      }
    });
    watchEffect(() => {
      if (upcomingValue && upcomingValue === mergedValueRef.value) ;
      else {
        const {
          value
        } = hsvaRef;
        if (value) {
          displayedHueRef.value = value[0];
          displayedAlphaRef.value = value[3];
          displayedSvRef.value = [value[1], value[2]];
        }
      }
      upcomingValue = null;
    });
    const cssVarsRef = computed(() => {
      const {
        value: mergedSize
      } = mergedSizeRef;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          textColor,
          color,
          panelFontSize,
          boxShadow,
          border,
          borderRadius,
          dividerColor,
          [createKey("height", mergedSize)]: height,
          [createKey("fontSize", mergedSize)]: fontSize
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-color": color,
        "--n-panel-font-size": panelFontSize,
        "--n-font-size": fontSize,
        "--n-box-shadow": boxShadow,
        "--n-border": border,
        "--n-border-radius": borderRadius,
        "--n-height": height,
        "--n-divider-color": dividerColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("color-picker", computed(() => {
      return mergedSizeRef.value[0];
    }), cssVarsRef, props) : void 0;
    function renderPanel() {
      var _a;
      const {
        value: rgba2
      } = rgbaRef;
      const {
        value: displayedHue
      } = displayedHueRef;
      const {
        internalActions,
        modes: modes2,
        actions
      } = props;
      const {
        value: mergedTheme
      } = themeRef;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      return h("div", {
        class: [`${mergedClsPrefix}-color-picker-panel`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value],
        onDragstart: (e) => {
          e.preventDefault();
        },
        style: inlineThemeDisabled ? void 0 : cssVarsRef.value
      }, h("div", {
        class: `${mergedClsPrefix}-color-picker-control`
      }, h(Pallete, {
        clsPrefix: mergedClsPrefix,
        rgba: rgba2,
        displayedHue,
        displayedSv: displayedSvRef.value,
        onUpdateSV: handleUpdateSv,
        onComplete: handleComplete
      }), h("div", {
        class: `${mergedClsPrefix}-color-picker-preview`
      }, h("div", {
        class: `${mergedClsPrefix}-color-picker-preview__sliders`
      }, h(HueSlider, {
        clsPrefix: mergedClsPrefix,
        hue: displayedHue,
        onUpdateHue: handleUpdateHue,
        onComplete: handleComplete
      }), props.showAlpha ? h(AlphaSlider, {
        clsPrefix: mergedClsPrefix,
        rgba: rgba2,
        alpha: displayedAlphaRef.value,
        onUpdateAlpha: handleUpdateAlpha,
        onComplete: handleComplete
      }) : null), props.showPreview ? h(ColorPreview, {
        clsPrefix: mergedClsPrefix,
        mode: displayedModeRef.value,
        color: rgbaRef.value && toHexString(rgbaRef.value),
        onUpdateColor: (color) => {
          doUpdateValue(color, "input");
        }
      }) : null), h(ColorInput, {
        clsPrefix: mergedClsPrefix,
        showAlpha: props.showAlpha,
        mode: displayedModeRef.value,
        modes: modes2,
        onUpdateMode: handleUpdateDisplayedMode,
        value: mergedValueRef.value,
        valueArr: mergedValueArrRef.value,
        onUpdateValue: handleInputUpdateValue
      }), ((_a = props.swatches) === null || _a === void 0 ? void 0 : _a.length) && h(ColorPickerSwatches, {
        clsPrefix: mergedClsPrefix,
        mode: displayedModeRef.value,
        swatches: props.swatches,
        onUpdateColor: (color) => {
          doUpdateValue(color, "input");
        }
      })), (actions === null || actions === void 0 ? void 0 : actions.length) ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, actions.includes("confirm") && h(Button, {
        size: "small",
        onClick: handleConfirm,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.confirm
      }), actions.includes("clear") && h(Button, {
        size: "small",
        onClick: handleClear,
        disabled: !mergedValueRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.clear
      })) : null, slots.action ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, {
        default: slots.action
      }) : internalActions ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, internalActions.includes("undo") && h(Button, {
        size: "small",
        onClick: undo,
        disabled: !undoableRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.undo
      }), internalActions.includes("redo") && h(Button, {
        size: "small",
        onClick: redo,
        disabled: !redoableRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.redo
      })) : null);
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      hsla: hslaRef,
      rgba: rgbaRef,
      mergedShow: mergedShowRef,
      mergedDisabled: mergedDisabledRef,
      isMounted: isMounted(),
      adjustedTo: useAdjustedTo(props),
      mergedValue: mergedValueRef,
      handleTriggerClick() {
        if (mergedDisabledRef.value) {
          return;
        }
        doUpdateShow(true);
      },
      setTriggerRef,
      handleClickOutside(e) {
        if (triggerRef instanceof Element) {
          if (triggerRef.contains(getPreciseEventTarget(e))) {
            return;
          }
        } else if (triggerRef) {
          if (triggerRef.$el.contains(getPreciseEventTarget(e))) {
            return;
          }
        }
        doUpdateShow(false);
      },
      renderPanel,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => resolveWrappedSlotWithProps(this.$slots.trigger, {
          value: this.mergedValue,
          onClick: this.handleTriggerClick,
          ref: this.setTriggerRef
        }, (children) => {
          const triggerNode = children || h(ColorPickerTrigger, {
            clsPrefix: mergedClsPrefix,
            value: this.mergedValue,
            hsla: this.hsla,
            style: this.cssVars,
            ref: this.setTriggerRef,
            disabled: this.mergedDisabled,
            class: this.themeClass,
            onClick: this.mergedDisabled ? void 0 : this.handleTriggerClick
          });
          return triggerNode;
        })
      }), h(VFollower, {
        placement: this.placement,
        show: this.mergedShow,
        containerClass: this.namespace,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        to: this.adjustedTo
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => this.mergedShow ? withDirectives(this.renderPanel(), [[clickoutside, this.handleClickOutside, void 0, {
            capture: true
          }]]) : null
        })
      })]
    });
  }
});
const popconfirmInjectionKey = createInjectionKey("n-popconfirm");
const panelProps = {
  positiveText: String,
  negativeText: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  onPositiveClick: {
    type: Function,
    required: true
  },
  onNegativeClick: {
    type: Function,
    required: true
  }
};
const panelPropKeys = keysOf(panelProps);
const PopconfirmPanel = defineComponent({
  name: "NPopconfirmPanel",
  props: panelProps,
  setup(props) {
    const {
      localeRef
    } = useLocale("Popconfirm");
    const {
      inlineThemeDisabled
    } = useConfig();
    const {
      mergedClsPrefixRef,
      mergedThemeRef,
      props: popconfirmProps2
    } = inject(popconfirmInjectionKey);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          fontSize,
          iconSize,
          iconColor
        }
      } = mergedThemeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-icon-size": iconSize,
        "--n-icon-color": iconColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("popconfirm-panel", void 0, cssVarsRef, popconfirmProps2) : void 0;
    return Object.assign(Object.assign({}, useLocale("Popconfirm")), {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      localizedPositiveText: computed(() => {
        return props.positiveText || localeRef.value.positiveText;
      }),
      localizedNegativeText: computed(() => {
        return props.negativeText || localeRef.value.negativeText;
      }),
      positiveButtonProps: toRef(popconfirmProps2, "positiveButtonProps"),
      negativeButtonProps: toRef(popconfirmProps2, "negativeButtonProps"),
      handlePositiveClick(e) {
        props.onPositiveClick(e);
      },
      handleNegativeClick(e) {
        props.onNegativeClick(e);
      },
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      showIcon,
      $slots
    } = this;
    const actionContentNode = resolveSlot($slots.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && h(Button, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && h(Button, Object.assign({
      size: "small",
      type: "primary",
      onClick: this.handlePositiveClick
    }, this.positiveButtonProps), {
      default: () => this.localizedPositiveText
    })]);
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-popconfirm__panel`, this.themeClass],
      style: this.cssVars
    }, resolveWrappedSlot($slots.default, (children) => showIcon || children ? h("div", {
      class: `${mergedClsPrefix}-popconfirm__body`
    }, showIcon ? h("div", {
      class: `${mergedClsPrefix}-popconfirm__icon`
    }, resolveSlot($slots.icon, () => [h(NBaseIcon, {
      clsPrefix: mergedClsPrefix
    }, {
      default: () => h(WarningIcon, null)
    })])) : null, children) : null), actionContentNode ? h("div", {
      class: [`${mergedClsPrefix}-popconfirm__action`]
    }, actionContentNode) : null);
  }
});
const style$1 = cB("popconfirm", [cE("body", `
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `, [cE("icon", `
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]), cE("action", `
 display: flex;
 justify-content: flex-end;
 `, [c("&:not(:first-child)", "margin-top: 8px"), cB("button", [c("&:not(:last-child)", "margin-right: 8px;")])])]);
const popconfirmProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), popoverBaseProps), {
  positiveText: String,
  negativeText: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  trigger: {
    type: String,
    default: "click"
  },
  positiveButtonProps: Object,
  negativeButtonProps: Object,
  onPositiveClick: Function,
  onNegativeClick: Function
});
const __unplugin_components_3 = defineComponent({
  name: "Popconfirm",
  props: popconfirmProps,
  slots: Object,
  __popover__: true,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig();
    const themeRef = useTheme("Popconfirm", "-popconfirm", style$1, popconfirmLight, props, mergedClsPrefixRef);
    const popoverInstRef = ref(null);
    function handlePositiveClick(e) {
      var _a;
      if (!((_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.getMergedShow())) return;
      const {
        onPositiveClick,
        "onUpdate:show": onUpdateShow
      } = props;
      void Promise.resolve(onPositiveClick ? onPositiveClick(e) : true).then((value) => {
        var _a2;
        if (value === false) return;
        (_a2 = popoverInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.setShow(false);
        if (onUpdateShow) call(onUpdateShow, false);
      });
    }
    function handleNegativeClick(e) {
      var _a;
      if (!((_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.getMergedShow())) return;
      const {
        onNegativeClick,
        "onUpdate:show": onUpdateShow
      } = props;
      void Promise.resolve(onNegativeClick ? onNegativeClick(e) : true).then((value) => {
        var _a2;
        if (value === false) return;
        (_a2 = popoverInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.setShow(false);
        if (onUpdateShow) call(onUpdateShow, false);
      });
    }
    provide(popconfirmInjectionKey, {
      mergedThemeRef: themeRef,
      mergedClsPrefixRef,
      props
    });
    const returned = {
      setShow(value) {
        var _a;
        (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.setShow(value);
      },
      syncPosition() {
        var _a;
        (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
      },
      mergedTheme: themeRef,
      popoverInstRef,
      handlePositiveClick,
      handleNegativeClick
    };
    return returned;
  },
  render() {
    const {
      $slots: slots,
      $props: props,
      mergedTheme
    } = this;
    return h(__unplugin_components_2$3, Object.assign({}, omit(props, panelPropKeys), {
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: slots.trigger,
      default: () => {
        const panelProps2 = keep(props, panelPropKeys);
        return h(PopconfirmPanel, Object.assign({}, panelProps2, {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), slots);
      }
    });
  }
});
const style = c([cB("slider", `
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `, [cM("reverse", [cB("slider-handles", [cB("slider-handle-wrapper", `
 transform: translate(50%, -50%);
 `)]), cB("slider-dots", [cB("slider-dot", `
 transform: translateX(50%, -50%);
 `)]), cM("vertical", [cB("slider-handles", [cB("slider-handle-wrapper", `
 transform: translate(-50%, -50%);
 `)]), cB("slider-marks", [cB("slider-mark", `
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]), cB("slider-dots", [cB("slider-dot", `
 transform: translateX(-50%) translateY(0);
 `)])])]), cM("vertical", `
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `, [cB("slider-handles", `
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `, [cB("slider-handle-wrapper", `
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]), cB("slider-rail", `
 height: 100%;
 `, [cE("fill", `
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]), cM("with-mark", `
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `), cB("slider-marks", `
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `, [cB("slider-mark", `
 transform: translateY(50%);
 white-space: nowrap;
 `)]), cB("slider-dots", `
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `, [cB("slider-dot", `
 transform: translateX(-50%) translateY(50%);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `, [cB("slider-handle", `
 cursor: not-allowed;
 `)]), cM("with-mark", `
 width: 100%;
 margin: 8px 0 32px 0;
 `), c("&:hover", [cB("slider-rail", {
  backgroundColor: "var(--n-rail-color-hover)"
}, [cE("fill", {
  backgroundColor: "var(--n-fill-color-hover)"
})]), cB("slider-handle", {
  boxShadow: "var(--n-handle-box-shadow-hover)"
})]), cM("active", [cB("slider-rail", {
  backgroundColor: "var(--n-rail-color-hover)"
}, [cE("fill", {
  backgroundColor: "var(--n-fill-color-hover)"
})]), cB("slider-handle", {
  boxShadow: "var(--n-handle-box-shadow-hover)"
})]), cB("slider-marks", `
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `, [cB("slider-mark", `
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]), cB("slider-rail", `
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `, [cE("fill", `
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]), cB("slider-handles", `
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `, [cB("slider-handle-wrapper", `
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `, [cB("slider-handle", `
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `, [c("&:hover", `
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]), c("&:focus", [cB("slider-handle", `
 box-shadow: var(--n-handle-box-shadow-focus);
 `, [c("&:hover", `
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]), cB("slider-dots", `
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `, [cM("transition-disabled", [cB("slider-dot", "transition: none;")]), cB("slider-dot", `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `, [cM("active", "border: var(--n-dot-border-active);")])])]), cB("slider-handle-indicator", `
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `, [fadeInScaleUpTransition()]), cB("slider-handle-indicator", `
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `, [cM("top", `
 margin-bottom: 12px;
 `), cM("right", `
 margin-left: 12px;
 `), cM("bottom", `
 margin-top: 12px;
 `), cM("left", `
 margin-right: 12px;
 `), fadeInScaleUpTransition()]), insideModal(cB("slider", [cB("slider-dot", "background-color: var(--n-dot-color-modal);")])), insidePopover(cB("slider", [cB("slider-dot", "background-color: var(--n-dot-color-popover);")]))]);
function isTouchEvent(e) {
  return window.TouchEvent && e instanceof window.TouchEvent;
}
function useRefs() {
  const refs = /* @__PURE__ */ new Map();
  const setRefs = (index) => (el) => {
    refs.set(index, el);
  };
  onBeforeUpdate(() => {
    refs.clear();
  });
  return [refs, setRefs];
}
const eventButtonLeft = 0;
const sliderProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  defaultValue: {
    type: [Number, Array],
    default: 0
  },
  marks: Object,
  disabled: {
    type: Boolean,
    default: void 0
  },
  formatTooltip: Function,
  keyboard: {
    type: Boolean,
    default: true
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: Boolean,
  value: [Number, Array],
  placement: String,
  showTooltip: {
    type: Boolean,
    default: void 0
  },
  tooltip: {
    type: Boolean,
    default: true
  },
  vertical: Boolean,
  reverse: Boolean,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onDragstart: [Function],
  onDragend: [Function]
});
const __unplugin_components_6 = defineComponent({
  name: "Slider",
  props: sliderProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Slider", "-slider", style, sliderLight, props, mergedClsPrefixRef);
    const handleRailRef = ref(null);
    const [handleRefs, setHandleRefs] = useRefs();
    const [followerRefs, setFollowerRefs] = useRefs();
    const followerEnabledIndexSetRef = ref(/* @__PURE__ */ new Set());
    const formItem = useFormItem(props);
    const {
      mergedDisabledRef
    } = formItem;
    const precisionRef = computed(() => {
      const {
        step
      } = props;
      if (Number(step) <= 0 || step === "mark") return 0;
      const stepString = step.toString();
      let precision = 0;
      if (stepString.includes(".")) {
        precision = stepString.length - stepString.indexOf(".") - 1;
      }
      return precision;
    });
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const arrifiedValueRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      return (props.range ? mergedValue : [mergedValue]).map(clampValue);
    });
    const handleCountExceeds2Ref = computed(() => arrifiedValueRef.value.length > 2);
    const mergedPlacementRef = computed(() => {
      return props.placement === void 0 ? props.vertical ? "right" : "top" : props.placement;
    });
    const markValuesRef = computed(() => {
      const {
        marks
      } = props;
      return marks ? Object.keys(marks).map(Number.parseFloat) : null;
    });
    const activeIndexRef = ref(-1);
    const previousIndexRef = ref(-1);
    const hoverIndexRef = ref(-1);
    const draggingRef = ref(false);
    const dotTransitionDisabledRef = ref(false);
    const styleDirectionRef = computed(() => {
      const {
        vertical,
        reverse
      } = props;
      const left = reverse ? "right" : "left";
      const bottom = reverse ? "top" : "bottom";
      return vertical ? bottom : left;
    });
    const fillStyleRef = computed(() => {
      if (handleCountExceeds2Ref.value) return;
      const values = arrifiedValueRef.value;
      const start = valueToPercentage(props.range ? Math.min(...values) : props.min);
      const end = valueToPercentage(props.range ? Math.max(...values) : values[0]);
      const {
        value: styleDirection
      } = styleDirectionRef;
      return props.vertical ? {
        [styleDirection]: `${start}%`,
        height: `${end - start}%`
      } : {
        [styleDirection]: `${start}%`,
        width: `${end - start}%`
      };
    });
    const markInfosRef = computed(() => {
      const mergedMarks = [];
      const {
        marks
      } = props;
      if (marks) {
        const orderValues = arrifiedValueRef.value.slice();
        orderValues.sort((a, b) => a - b);
        const {
          value: styleDirection
        } = styleDirectionRef;
        const {
          value: handleCountExceeds2
        } = handleCountExceeds2Ref;
        const {
          range
        } = props;
        const isActive = handleCountExceeds2 ? () => false : (num) => range ? num >= orderValues[0] && num <= orderValues[orderValues.length - 1] : num <= orderValues[0];
        for (const key of Object.keys(marks)) {
          const num = Number(key);
          mergedMarks.push({
            active: isActive(num),
            key: num,
            label: marks[key],
            style: {
              [styleDirection]: `${valueToPercentage(num)}%`
            }
          });
        }
      }
      return mergedMarks;
    });
    function getHandleStyle(value, index) {
      const percentage = valueToPercentage(value);
      const {
        value: styleDirection
      } = styleDirectionRef;
      return {
        [styleDirection]: `${percentage}%`,
        zIndex: index === activeIndexRef.value ? 1 : 0
      };
    }
    function isShowTooltip(index) {
      return props.showTooltip || hoverIndexRef.value === index || activeIndexRef.value === index && draggingRef.value;
    }
    function shouldKeepTooltipTransition(index) {
      if (!draggingRef.value) return true;
      return !(activeIndexRef.value === index && previousIndexRef.value === index);
    }
    function focusActiveHandle(index) {
      var _a;
      if (~index) {
        activeIndexRef.value = index;
        (_a = handleRefs.get(index)) === null || _a === void 0 ? void 0 : _a.focus();
      }
    }
    function syncPosition() {
      followerRefs.forEach((inst, index) => {
        if (isShowTooltip(index)) inst.syncPosition();
      });
    }
    function doUpdateValue(value) {
      const {
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (onUpdateValue) call(onUpdateValue, value);
      if (_onUpdateValue) call(_onUpdateValue, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function dispatchValueUpdate(value) {
      const {
        range
      } = props;
      if (range) {
        if (Array.isArray(value)) {
          const {
            value: oldValues
          } = arrifiedValueRef;
          if (value.join() !== oldValues.join()) {
            doUpdateValue(value);
          }
        }
      } else if (!Array.isArray(value)) {
        const oldValue = arrifiedValueRef.value[0];
        if (oldValue !== value) {
          doUpdateValue(value);
        }
      }
    }
    function doDispatchValue(value, index) {
      if (props.range) {
        const values = arrifiedValueRef.value.slice();
        values.splice(index, 1, value);
        dispatchValueUpdate(values);
      } else {
        dispatchValueUpdate(value);
      }
    }
    function sanitizeValue(value, currentValue, stepBuffer) {
      const stepping = stepBuffer !== void 0;
      if (!stepBuffer) {
        stepBuffer = value - currentValue > 0 ? 1 : -1;
      }
      const markValues = markValuesRef.value || [];
      const {
        step
      } = props;
      if (step === "mark") {
        const closestMark2 = getClosestMark(value, markValues.concat(currentValue), stepping ? stepBuffer : void 0);
        return closestMark2 ? closestMark2.value : currentValue;
      }
      if (step <= 0) return currentValue;
      const {
        value: precision
      } = precisionRef;
      let closestMark;
      if (stepping) {
        const currentStep = Number((currentValue / step).toFixed(precision));
        const actualStep = Math.floor(currentStep);
        const leftStep = currentStep > actualStep ? actualStep : actualStep - 1;
        const rightStep = currentStep < actualStep ? actualStep : actualStep + 1;
        closestMark = getClosestMark(currentValue, [Number((leftStep * step).toFixed(precision)), Number((rightStep * step).toFixed(precision)), ...markValues], stepBuffer);
      } else {
        const roundValue = getRoundValue(value);
        closestMark = getClosestMark(value, [...markValues, roundValue]);
      }
      return closestMark ? clampValue(closestMark.value) : currentValue;
    }
    function clampValue(value) {
      return Math.min(props.max, Math.max(props.min, value));
    }
    function valueToPercentage(value) {
      const {
        max,
        min
      } = props;
      return (value - min) / (max - min) * 100;
    }
    function percentageToValue(percentage) {
      const {
        max,
        min
      } = props;
      return min + (max - min) * percentage;
    }
    function getRoundValue(value) {
      const {
        step,
        min
      } = props;
      if (Number(step) <= 0 || step === "mark") return value;
      const newValue = Math.round((value - min) / step) * step + min;
      return Number(newValue.toFixed(precisionRef.value));
    }
    function getClosestMark(currentValue, markValues = markValuesRef.value, buffer) {
      if (!(markValues === null || markValues === void 0 ? void 0 : markValues.length)) return null;
      let closestMark = null;
      let index = -1;
      while (++index < markValues.length) {
        const diff = markValues[index] - currentValue;
        const distance = Math.abs(diff);
        if (
          // find marks in the same direction
          (buffer === void 0 || diff * buffer > 0) && (closestMark === null || distance < closestMark.distance)
        ) {
          closestMark = {
            index,
            distance,
            value: markValues[index]
          };
        }
      }
      return closestMark;
    }
    function getPointValue(event) {
      const railEl = handleRailRef.value;
      if (!railEl) return;
      const touchEvent = isTouchEvent(event) ? event.touches[0] : event;
      const railRect = railEl.getBoundingClientRect();
      let percentage;
      if (props.vertical) {
        percentage = (railRect.bottom - touchEvent.clientY) / railRect.height;
      } else {
        percentage = (touchEvent.clientX - railRect.left) / railRect.width;
      }
      if (props.reverse) {
        percentage = 1 - percentage;
      }
      return percentageToValue(percentage);
    }
    function handleRailKeyDown(e) {
      if (mergedDisabledRef.value || !props.keyboard) return;
      const {
        vertical,
        reverse
      } = props;
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          handleStepValue(vertical && reverse ? -1 : 1);
          break;
        case "ArrowRight":
          e.preventDefault();
          handleStepValue(!vertical && reverse ? -1 : 1);
          break;
        case "ArrowDown":
          e.preventDefault();
          handleStepValue(vertical && reverse ? 1 : -1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          handleStepValue(!vertical && reverse ? 1 : -1);
          break;
      }
    }
    function handleStepValue(ratio) {
      const activeIndex = activeIndexRef.value;
      if (activeIndex === -1) return;
      const {
        step
      } = props;
      const currentValue = arrifiedValueRef.value[activeIndex];
      const nextValue = Number(step) <= 0 || step === "mark" ? currentValue : currentValue + step * ratio;
      doDispatchValue(
        // Avoid the number of value does not change when `step` is null
        sanitizeValue(nextValue, currentValue, ratio > 0 ? 1 : -1),
        activeIndex
      );
    }
    function handleRailMouseDown(event) {
      var _a, _b;
      if (mergedDisabledRef.value) return;
      if (!isTouchEvent(event) && event.button !== eventButtonLeft) {
        return;
      }
      const pointValue = getPointValue(event);
      if (pointValue === void 0) return;
      const values = arrifiedValueRef.value.slice();
      const activeIndex = props.range ? (_b = (_a = getClosestMark(pointValue, values)) === null || _a === void 0 ? void 0 : _a.index) !== null && _b !== void 0 ? _b : -1 : 0;
      if (activeIndex !== -1) {
        event.preventDefault();
        focusActiveHandle(activeIndex);
        startDragging();
        doDispatchValue(sanitizeValue(pointValue, arrifiedValueRef.value[activeIndex]), activeIndex);
      }
    }
    function startDragging() {
      if (!draggingRef.value) {
        draggingRef.value = true;
        if (props.onDragstart) call(props.onDragstart);
        on("touchend", document, handleMouseUp);
        on("mouseup", document, handleMouseUp);
        on("touchmove", document, handleMouseMove);
        on("mousemove", document, handleMouseMove);
      }
    }
    function stopDragging() {
      if (draggingRef.value) {
        draggingRef.value = false;
        if (props.onDragend) call(props.onDragend);
        off("touchend", document, handleMouseUp);
        off("mouseup", document, handleMouseUp);
        off("touchmove", document, handleMouseMove);
        off("mousemove", document, handleMouseMove);
      }
    }
    function handleMouseMove(event) {
      const {
        value: activeIndex
      } = activeIndexRef;
      if (!draggingRef.value || activeIndex === -1) {
        stopDragging();
        return;
      }
      const pointValue = getPointValue(event);
      if (pointValue === void 0) return;
      doDispatchValue(sanitizeValue(pointValue, arrifiedValueRef.value[activeIndex]), activeIndex);
    }
    function handleMouseUp() {
      stopDragging();
    }
    function handleHandleFocus(index) {
      activeIndexRef.value = index;
      if (!mergedDisabledRef.value) {
        hoverIndexRef.value = index;
      }
    }
    function handleHandleBlur(index) {
      if (activeIndexRef.value === index) {
        activeIndexRef.value = -1;
        stopDragging();
      }
      if (hoverIndexRef.value === index) {
        hoverIndexRef.value = -1;
      }
    }
    function handleHandleMouseEnter(index) {
      hoverIndexRef.value = index;
    }
    function handleHandleMouseLeave(index) {
      if (hoverIndexRef.value === index) {
        hoverIndexRef.value = -1;
      }
    }
    watch(activeIndexRef, (_, previous) => void nextTick(() => previousIndexRef.value = previous));
    watch(mergedValueRef, () => {
      if (props.marks) {
        if (dotTransitionDisabledRef.value) return;
        dotTransitionDisabledRef.value = true;
        void nextTick(() => {
          dotTransitionDisabledRef.value = false;
        });
      }
      void nextTick(syncPosition);
    });
    onBeforeUnmount(() => {
      stopDragging();
    });
    const cssVarsRef = computed(() => {
      const {
        self: {
          markFontSize,
          railColor,
          railColorHover,
          fillColor,
          fillColorHover,
          handleColor,
          opacityDisabled,
          dotColor,
          dotColorModal,
          handleBoxShadow,
          handleBoxShadowHover,
          handleBoxShadowActive,
          handleBoxShadowFocus,
          dotBorder,
          dotBoxShadow,
          railHeight,
          railWidthVertical,
          handleSize,
          dotHeight,
          dotWidth,
          dotBorderRadius,
          fontSize,
          dotBorderActive,
          dotColorPopover
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-dot-border": dotBorder,
        "--n-dot-border-active": dotBorderActive,
        "--n-dot-border-radius": dotBorderRadius,
        "--n-dot-box-shadow": dotBoxShadow,
        "--n-dot-color": dotColor,
        "--n-dot-color-modal": dotColorModal,
        "--n-dot-color-popover": dotColorPopover,
        "--n-dot-height": dotHeight,
        "--n-dot-width": dotWidth,
        "--n-fill-color": fillColor,
        "--n-fill-color-hover": fillColorHover,
        "--n-font-size": fontSize,
        "--n-handle-box-shadow": handleBoxShadow,
        "--n-handle-box-shadow-active": handleBoxShadowActive,
        "--n-handle-box-shadow-focus": handleBoxShadowFocus,
        "--n-handle-box-shadow-hover": handleBoxShadowHover,
        "--n-handle-color": handleColor,
        "--n-handle-size": handleSize,
        "--n-opacity-disabled": opacityDisabled,
        "--n-rail-color": railColor,
        "--n-rail-color-hover": railColorHover,
        "--n-rail-height": railHeight,
        "--n-rail-width-vertical": railWidthVertical,
        "--n-mark-font-size": markFontSize
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("slider", void 0, cssVarsRef, props) : void 0;
    const indicatorCssVarsRef = computed(() => {
      const {
        self: {
          fontSize,
          indicatorColor,
          indicatorBoxShadow,
          indicatorTextColor,
          indicatorBorderRadius
        }
      } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-indicator-border-radius": indicatorBorderRadius,
        "--n-indicator-box-shadow": indicatorBoxShadow,
        "--n-indicator-color": indicatorColor,
        "--n-indicator-text-color": indicatorTextColor
      };
    });
    const indicatorThemeClassHandle = inlineThemeDisabled ? useThemeClass("slider-indicator", void 0, indicatorCssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      mergedDisabled: mergedDisabledRef,
      mergedPlacement: mergedPlacementRef,
      isMounted: isMounted(),
      adjustedTo: useAdjustedTo(props),
      dotTransitionDisabled: dotTransitionDisabledRef,
      markInfos: markInfosRef,
      isShowTooltip,
      shouldKeepTooltipTransition,
      handleRailRef,
      setHandleRefs,
      setFollowerRefs,
      fillStyle: fillStyleRef,
      getHandleStyle,
      activeIndex: activeIndexRef,
      arrifiedValues: arrifiedValueRef,
      followerEnabledIndexSet: followerEnabledIndexSetRef,
      handleRailMouseDown,
      handleHandleFocus,
      handleHandleBlur,
      handleHandleMouseEnter,
      handleHandleMouseLeave,
      handleRailKeyDown,
      indicatorCssVars: inlineThemeDisabled ? void 0 : indicatorCssVarsRef,
      indicatorThemeClass: indicatorThemeClassHandle === null || indicatorThemeClassHandle === void 0 ? void 0 : indicatorThemeClassHandle.themeClass,
      indicatorOnRender: indicatorThemeClassHandle === null || indicatorThemeClassHandle === void 0 ? void 0 : indicatorThemeClassHandle.onRender,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      themeClass,
      formatTooltip
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-slider`, themeClass, {
        [`${mergedClsPrefix}-slider--disabled`]: this.mergedDisabled,
        [`${mergedClsPrefix}-slider--active`]: this.activeIndex !== -1,
        [`${mergedClsPrefix}-slider--with-mark`]: this.marks,
        [`${mergedClsPrefix}-slider--vertical`]: this.vertical,
        [`${mergedClsPrefix}-slider--reverse`]: this.reverse
      }],
      style: this.cssVars,
      onKeydown: this.handleRailKeyDown,
      onMousedown: this.handleRailMouseDown,
      onTouchstart: this.handleRailMouseDown
    }, h("div", {
      class: `${mergedClsPrefix}-slider-rail`
    }, h("div", {
      class: `${mergedClsPrefix}-slider-rail__fill`,
      style: this.fillStyle
    }), this.marks ? h("div", {
      class: [`${mergedClsPrefix}-slider-dots`, this.dotTransitionDisabled && `${mergedClsPrefix}-slider-dots--transition-disabled`]
    }, this.markInfos.map((mark) => h("div", {
      key: mark.key,
      class: [`${mergedClsPrefix}-slider-dot`, {
        [`${mergedClsPrefix}-slider-dot--active`]: mark.active
      }],
      style: mark.style
    }))) : null, h("div", {
      ref: "handleRailRef",
      class: `${mergedClsPrefix}-slider-handles`
    }, this.arrifiedValues.map((value, index) => {
      const showTooltip = this.isShowTooltip(index);
      return h(Binder, null, {
        default: () => [h(VTarget, null, {
          default: () => h("div", {
            ref: this.setHandleRefs(index),
            class: `${mergedClsPrefix}-slider-handle-wrapper`,
            tabindex: this.mergedDisabled ? -1 : 0,
            role: "slider",
            "aria-valuenow": value,
            "aria-valuemin": this.min,
            "aria-valuemax": this.max,
            "aria-orientation": this.vertical ? "vertical" : "horizontal",
            "aria-disabled": this.disabled,
            style: this.getHandleStyle(value, index),
            onFocus: () => {
              this.handleHandleFocus(index);
            },
            onBlur: () => {
              this.handleHandleBlur(index);
            },
            onMouseenter: () => {
              this.handleHandleMouseEnter(index);
            },
            onMouseleave: () => {
              this.handleHandleMouseLeave(index);
            }
          }, resolveSlot(this.$slots.thumb, () => [h("div", {
            class: `${mergedClsPrefix}-slider-handle`
          })]))
        }), this.tooltip && h(VFollower, {
          ref: this.setFollowerRefs(index),
          show: showTooltip,
          to: this.adjustedTo,
          enabled: this.showTooltip && !this.range || this.followerEnabledIndexSet.has(index),
          teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
          placement: this.mergedPlacement,
          containerClass: this.namespace
        }, {
          default: () => h(Transition, {
            name: "fade-in-scale-up-transition",
            appear: this.isMounted,
            css: this.shouldKeepTooltipTransition(index),
            onEnter: () => {
              this.followerEnabledIndexSet.add(index);
            },
            onAfterLeave: () => {
              this.followerEnabledIndexSet.delete(index);
            }
          }, {
            default: () => {
              var _a2;
              if (showTooltip) {
                (_a2 = this.indicatorOnRender) === null || _a2 === void 0 ? void 0 : _a2.call(this);
                return h("div", {
                  class: [`${mergedClsPrefix}-slider-handle-indicator`, this.indicatorThemeClass, `${mergedClsPrefix}-slider-handle-indicator--${this.mergedPlacement}`],
                  style: this.indicatorCssVars
                }, typeof formatTooltip === "function" ? formatTooltip(value) : value);
              }
              return null;
            }
          })
        })]
      });
    })), this.marks ? h("div", {
      class: `${mergedClsPrefix}-slider-marks`
    }, this.markInfos.map((mark) => h("div", {
      key: mark.key,
      class: `${mergedClsPrefix}-slider-mark`,
      style: mark.style
    }, typeof mark.label === "function" ? mark.label() : mark.label))) : null));
  }
});
const _hoisted_1$3 = { class: "toolbar" };
const _hoisted_2$2 = { class: "designer-body" };
const _hoisted_3$1 = { class: "text-template-actions" };
const _hoisted_4$1 = { class: "field field-wide" };
const _hoisted_5$1 = { class: "field" };
const _hoisted_6$1 = {
  class: "field-grid",
  style: { "margin-bottom": "10px" }
};
const _hoisted_7$1 = { class: "field" };
const _hoisted_8$1 = { class: "field" };
const _hoisted_9$1 = { class: "field" };
const _hoisted_10$1 = { class: "field-grid" };
const _hoisted_11$1 = { class: "field" };
const _hoisted_12$1 = { class: "field" };
const _hoisted_13$1 = { class: "field-grid" };
const _hoisted_14$1 = { class: "field" };
const _hoisted_15$1 = { class: "field" };
const _hoisted_16$1 = { class: "field" };
const _hoisted_17$1 = { class: "field" };
const _hoisted_18$1 = {
  key: 1,
  class: "image-actions"
};
const _hoisted_19$1 = { class: "field field-wide" };
const _hoisted_20$1 = { class: "field field-wide" };
const _hoisted_21 = { class: "layer-list" };
const _hoisted_22 = ["onClick"];
const _hoisted_23 = { class: "layer-name" };
const _hoisted_24 = { class: "footer-actions" };
const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 675;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CoverDesigner",
  props: /* @__PURE__ */ mergeModels({
    initialSrc: { default: "" },
    saving: { type: Boolean, default: false }
  }, {
    "show": { type: Boolean, ...{ default: false } },
    "showModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["complete"], ["update:show"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const visible = useModel(__props, "show");
    const emit = __emit;
    const notice = useNotification();
    const layers = ref([]);
    const selectedId = ref(null);
    const safeAreaVisible = ref(false);
    const exporting = ref(false);
    const stageRef = ref(null);
    const transformerRef = ref(null);
    const imageInputRef = ref(null);
    const canvasHostRef = ref(null);
    const stageScale = ref(0.6);
    const objectUrls = /* @__PURE__ */ new Set();
    const textTemplates = useStorage("cover-designer-text-templates", []);
    const selectedTextTemplateId = ref(null);
    const stageWidth = computed(() => CANVAS_WIDTH * stageScale.value);
    const stageHeight = computed(() => CANVAS_HEIGHT * stageScale.value);
    const stageConfig = computed(() => ({
      width: stageWidth.value,
      height: stageHeight.value,
      scaleX: stageScale.value,
      scaleY: stageScale.value
    }));
    const backgroundConfig = {
      x: 0,
      y: 0,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      fill: "#ffffff",
      listening: false
    };
    const safeAreaConfig = {
      x: 0,
      y: (CANVAS_HEIGHT - CANVAS_WIDTH * 9 / 16) / 2,
      width: CANVAS_WIDTH,
      height: CANVAS_WIDTH * 9 / 16,
      stroke: "#18a058",
      strokeWidth: 4,
      dash: [16, 10],
      listening: false
    };
    const transformerConfig = {
      rotateEnabled: true,
      keepRatio: true,
      flipEnabled: false,
      borderStroke: "#18a058",
      anchorStroke: "#18a058",
      anchorFill: "#ffffff",
      anchorSize: 14,
      boundBoxFunc: (oldBox, newBox) => {
        if (Math.abs(newBox.width) < 20 || Math.abs(newBox.height) < 20) return oldBox;
        return newBox;
      }
    };
    const fallbackFontFamilies = [
      "Microsoft YaHei",
      "SimHei",
      "SimSun",
      "KaiTi",
      "Arial",
      "sans-serif",
      "serif",
      "monospace"
    ];
    const fontOptions = ref(fallbackFontFamilies.map((font) => ({ label: font, value: font })));
    let localFontsRequested = false;
    const loadLocalFonts = async () => {
      if (localFontsRequested) return;
      localFontsRequested = true;
      const queryLocalFonts = globalThis.queryLocalFonts;
      if (!queryLocalFonts) return;
      try {
        const localFonts = await queryLocalFonts.call(globalThis);
        const families = /* @__PURE__ */ new Map();
        for (const { family } of localFonts) {
          const normalizedFamily = family.trim();
          if (normalizedFamily) families.set(normalizedFamily.toLocaleLowerCase(), normalizedFamily);
        }
        if (!families.size) return;
        for (const family of ["sans-serif", "serif", "monospace"]) {
          families.set(family, family);
        }
        fontOptions.value = [...families.values()].sort((left, right) => left.localeCompare(right, "zh-CN", { sensitivity: "base" })).map((font) => ({ label: font, value: font }));
      } catch {
      }
    };
    const alignOptions = [
      { label: "左对齐", value: "left" },
      { label: "居中", value: "center" },
      { label: "右对齐", value: "right" }
    ];
    const selectedLayer = computed(() => layers.value.find((layer) => layer.id === selectedId.value));
    const reversedLayers = computed(() => [...layers.value].reverse());
    const textTemplateOptions = computed(
      () => textTemplates.value.map((template) => ({ label: template.name, value: template.id }))
    );
    useResizeObserver(canvasHostRef, (entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      if (!width) return;
      stageScale.value = Math.min(1, Math.max(0.2, (width - 24) / CANVAS_WIDTH));
    });
    watch(selectedId, async () => {
      selectedTextTemplateId.value = null;
      await nextTick();
      updateTransformer();
    });
    watch(
      () => visible.value,
      async (show, previous) => {
        if (show && !previous) {
          void loadLocalFonts();
          await resetCanvas();
        }
      }
    );
    const textConfig = (layer) => ({
      ...layer,
      name: `cover-layer-${layer.id}`,
      draggable: true,
      fontStyle: layer.bold ? "bold" : "normal",
      lineHeight: 1.15,
      wrap: "char",
      fillAfterStrokeEnabled: true,
      shadowEnabled: layer.shadowBlur > 0 || layer.shadowOffsetX !== 0 || layer.shadowOffsetY !== 0
    });
    const imageConfig = (layer) => ({
      ...layer,
      name: `cover-layer-${layer.id}`,
      draggable: true
    });
    const layerName = (layer) => {
      if (layer.type === "image") return layer.name;
      return layer.text.trim().slice(0, 14) || "文字";
    };
    const updateTransformer = () => {
      const transformer = transformerRef.value?.getNode?.();
      const stage = stageRef.value?.getNode?.();
      if (!transformer || !stage) return;
      const node = selectedId.value ? stage.findOne(`.cover-layer-${selectedId.value}`) : null;
      transformer.nodes(node?.visible() ? [node] : []);
      transformer.getLayer()?.batchDraw();
    };
    const handleStagePointer = (event) => {
      const stage = event.target.getStage();
      if (event.target === stage) selectedId.value = null;
    };
    const selectLayer = (id, event) => {
      event.cancelBubble = true;
      selectedId.value = id;
    };
    const getCoverMinScale = (layer, rotation = layer.rotation) => {
      const radians = rotation * Math.PI / 180;
      const cos = Math.abs(Math.cos(radians));
      const sin = Math.abs(Math.sin(radians));
      const requiredWidth = CANVAS_WIDTH * cos + CANVAS_HEIGHT * sin;
      const requiredHeight = CANVAS_WIDTH * sin + CANVAS_HEIGHT * cos;
      return Math.max(requiredWidth / layer.width, requiredHeight / layer.height);
    };
    const constrainCoverPosition = (layer, position, scale = layer.scaleX, rotation = layer.rotation) => {
      const radians = rotation * Math.PI / 180;
      const cos = Math.cos(radians);
      const sin = Math.sin(radians);
      const canvasCorners = [
        { x: 0, y: 0 },
        { x: CANVAS_WIDTH, y: 0 },
        { x: 0, y: CANVAS_HEIGHT },
        { x: CANVAS_WIDTH, y: CANVAS_HEIGHT }
      ];
      const horizontalProjections = canvasCorners.map(({ x, y }) => x * cos + y * sin);
      const verticalProjections = canvasCorners.map(({ x, y }) => -x * sin + y * cos);
      const projectedX = position.x * cos + position.y * sin;
      const projectedY = -position.x * sin + position.y * cos;
      const minX = Math.max(...horizontalProjections) - layer.width * scale;
      const maxX = Math.min(...horizontalProjections);
      const minY = Math.max(...verticalProjections) - layer.height * scale;
      const maxY = Math.min(...verticalProjections);
      const boundedX = Math.min(maxX, Math.max(minX, projectedX));
      const boundedY = Math.min(maxY, Math.max(minY, projectedY));
      return {
        x: boundedX * cos - boundedY * sin,
        y: boundedX * sin + boundedY * cos
      };
    };
    const applyCoverBounds = (layer, node) => {
      const scale = Math.max(node.scaleX(), node.scaleY(), getCoverMinScale(layer, node.rotation()));
      node.scale({ x: scale, y: scale });
      node.position(constrainCoverPosition(layer, node.position(), scale, node.rotation()));
    };
    const constrainImageDrag = (layer, event) => {
      if (layer.constrainToCanvas) applyCoverBounds(layer, event.target);
    };
    const handleImageWheel = (layer, event) => {
      if (!layer.constrainToCanvas || event.evt.deltaY === 0) return;
      event.evt.preventDefault();
      event.cancelBubble = true;
      const node = event.target;
      const stage = node.getStage();
      const pointer = stage?.getRelativePointerPosition?.();
      if (!pointer) return;
      const oldScale = node.scaleX();
      const minScale = getCoverMinScale(layer, node.rotation());
      const scaleFactor = 1.08;
      const requestedScale = event.evt.deltaY < 0 ? oldScale * scaleFactor : oldScale / scaleFactor;
      const newScale = Math.min(minScale * 10, Math.max(minScale, requestedScale));
      const ratio = newScale / oldScale;
      node.scale({ x: newScale, y: newScale });
      node.position({
        x: pointer.x - (pointer.x - node.x()) * ratio,
        y: pointer.y - (pointer.y - node.y()) * ratio
      });
      applyCoverBounds(layer, node);
      layer.x = node.x();
      layer.y = node.y();
      layer.scaleX = node.scaleX();
      layer.scaleY = node.scaleY();
      node.getLayer()?.batchDraw();
      transformerRef.value?.getNode?.()?.forceUpdate();
    };
    const updatePosition = (layer, event) => {
      if (layer.type === "image" && layer.constrainToCanvas) {
        applyCoverBounds(layer, event.target);
        layer.scaleX = event.target.scaleX();
        layer.scaleY = event.target.scaleY();
        layer.rotation = event.target.rotation();
      }
      layer.x = event.target.x();
      layer.y = event.target.y();
    };
    const updateTransform = (layer, event) => {
      const node = event.target;
      if (layer.type === "image" && layer.constrainToCanvas) applyCoverBounds(layer, node);
      layer.x = node.x();
      layer.y = node.y();
      layer.scaleX = node.scaleX();
      layer.scaleY = node.scaleY();
      layer.rotation = node.rotation();
    };
    const addText = () => {
      const layer = {
        id: uuid(),
        type: "text",
        text: "双击右侧文字框编辑",
        x: 300,
        y: 350,
        width: 600,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        opacity: 1,
        visible: true,
        fontFamily: "Microsoft YaHei",
        fontSize: 60,
        bold: true,
        fill: "#ffffff",
        align: "center",
        stroke: "#000000",
        strokeWidth: 4,
        shadowColor: "rgba(0, 0, 0, 0.65)",
        shadowBlur: 8,
        shadowOffsetX: 4,
        shadowOffsetY: 4
      };
      layers.value.push(layer);
      selectedId.value = layer.id;
    };
    const getTextTemplateConfig = (layer) => ({
      fontFamily: layer.fontFamily,
      fontSize: layer.fontSize,
      bold: layer.bold,
      fill: layer.fill,
      align: layer.align,
      stroke: layer.stroke,
      strokeWidth: layer.strokeWidth,
      shadowColor: layer.shadowColor,
      shadowBlur: layer.shadowBlur,
      shadowOffsetX: layer.shadowOffsetX,
      shadowOffsetY: layer.shadowOffsetY,
      opacity: layer.opacity
    });
    const applyTextTemplate = (id) => {
      selectedTextTemplateId.value = id;
      if (!id || selectedLayer.value?.type !== "text") return;
      const template = textTemplates.value.find((item) => item.id === id);
      if (!template) return;
      Object.assign(selectedLayer.value, template.config);
      nextTick(updateTransformer);
    };
    const saveTextTemplate = async () => {
      if (selectedLayer.value?.type !== "text") return;
      const selectedTemplate = textTemplates.value.find(
        (template2) => template2.id === selectedTextTemplateId.value
      );
      if (selectedTemplate) {
        selectedTemplate.config = getTextTemplateConfig(selectedLayer.value);
        notice.success({ title: "文字模板已更新" });
        return;
      }
      const name = (await showInput({
        title: "保存文字模板",
        placeholder: "请输入模板名称",
        defaultValue: `文字模板 ${textTemplates.value.length + 1}`,
        required: true
      }))?.trim();
      if (!name) return;
      const existingTemplate = textTemplates.value.find((template2) => template2.name === name);
      if (existingTemplate) {
        existingTemplate.config = getTextTemplateConfig(selectedLayer.value);
        selectedTextTemplateId.value = existingTemplate.id;
        notice.success({ title: "文字模板已更新", duration: 3e3 });
        return;
      }
      const template = {
        id: uuid(),
        name,
        config: getTextTemplateConfig(selectedLayer.value)
      };
      textTemplates.value.push(template);
      selectedTextTemplateId.value = template.id;
      notice.success({ title: "文字模板已保存", duration: 3e3 });
    };
    const removeTextTemplate = () => {
      const index = textTemplates.value.findIndex(
        (template) => template.id === selectedTextTemplateId.value
      );
      if (index < 0) return;
      textTemplates.value.splice(index, 1);
      selectedTextTemplateId.value = null;
      notice.success({ title: "文字模板已删除", duration: 3e3 });
    };
    const selectImages = () => {
      if (!imageInputRef.value) return;
      imageInputRef.value.value = "";
      imageInputRef.value.click();
    };
    const handleImageFiles = async (event) => {
      const files = Array.from(event.target.files ?? []);
      for (const file of files) {
        try {
          const source = URL.createObjectURL(file);
          objectUrls.add(source);
          const layer = await createImageLayer(source, file.name);
          layers.value.push(layer);
          fitImage(layer, "contain", 0.65);
          selectedId.value = layer.id;
        } catch (error) {
          notice.error({ title: `图片加载失败：${file.name}`, content: String(error), duration: 3e3 });
        }
      }
    };
    const loadHtmlImage = (source) => new Promise((resolve, reject) => {
      const image = new Image();
      if (/^https?:/i.test(source)) image.crossOrigin = "anonymous";
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("无法读取图片"));
      image.src = source;
    });
    const createImageLayer = async (source, name, constrainToCanvas = false) => {
      const image = await loadHtmlImage(source);
      return {
        id: uuid(),
        type: "image",
        name,
        source,
        constrainToCanvas,
        image,
        x: 0,
        y: 0,
        width: image.naturalWidth,
        height: image.naturalHeight,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        opacity: 1,
        visible: true
      };
    };
    const fitImage = (layer, fit, maxRatio = 1) => {
      const scale = fit === "cover" ? Math.max(CANVAS_WIDTH / layer.width, CANVAS_HEIGHT / layer.height) : Math.min(CANVAS_WIDTH / layer.width, CANVAS_HEIGHT / layer.height) * maxRatio;
      layer.scaleX = scale;
      layer.scaleY = scale;
      layer.rotation = 0;
      layer.x = (CANVAS_WIDTH - layer.width * scale) / 2;
      layer.y = (CANVAS_HEIGHT - layer.height * scale) / 2;
    };
    const fitSelectedImage = (fit) => {
      if (selectedLayer.value?.type !== "image") return;
      fitImage(selectedLayer.value, fit);
      nextTick(updateTransformer);
    };
    const moveLayer = (id, direction) => {
      const index = layers.value.findIndex((layer2) => layer2.id === id);
      const target = index + direction;
      if (index < 0 || target < 0 || target >= layers.value.length) return;
      const [layer] = layers.value.splice(index, 1);
      layers.value.splice(target, 0, layer);
      nextTick(updateTransformer);
    };
    const removeLayer = (id) => {
      const index = layers.value.findIndex((layer2) => layer2.id === id);
      if (index < 0) return;
      const [layer] = layers.value.splice(index, 1);
      if (layer.type === "image" && objectUrls.has(layer.source)) {
        URL.revokeObjectURL(layer.source);
        objectUrls.delete(layer.source);
      }
      if (selectedId.value === id) selectedId.value = null;
    };
    const removeSelected = () => {
      if (selectedId.value) removeLayer(selectedId.value);
    };
    const clearObjectUrls = () => {
      objectUrls.forEach((source) => URL.revokeObjectURL(source));
      objectUrls.clear();
    };
    const resetCanvas = async () => {
      clearObjectUrls();
      layers.value = [];
      selectedId.value = null;
      safeAreaVisible.value = false;
      if (!props.initialSrc) return;
      try {
        const layer = await createImageLayer(props.initialSrc, "当前封面", true);
        layers.value.push(layer);
        fitImage(layer, "cover");
      } catch (error) {
        notice.warning({ title: "当前封面加载失败，将使用空白画布", content: String(error) });
      }
    };
    const canvasToBlob = (canvas) => new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => blob ? resolve(blob) : reject(new Error("封面导出失败")),
        "image/jpeg",
        0.92
      );
    });
    const complete = async () => {
      const stage = stageRef.value?.getNode?.();
      if (!stage || exporting.value || props.saving) return;
      const transformer = transformerRef.value?.getNode?.();
      exporting.value = true;
      const previousSelection = selectedId.value;
      const previousSafeArea = safeAreaVisible.value;
      const previousTransformerVisible = transformer?.visible();
      selectedId.value = null;
      safeAreaVisible.value = false;
      transformer?.visible(false);
      try {
        await nextTick();
        const canvas = stage.toCanvas({ pixelRatio: 1 / stageScale.value });
        const blob = await canvasToBlob(canvas);
        emit("complete", new File([blob], "cover-design.jpg", { type: "image/jpeg" }));
      } catch (error) {
        notice.error({ title: "封面导出失败", content: String(error) });
      } finally {
        selectedId.value = previousSelection;
        safeAreaVisible.value = previousSafeArea;
        if (previousTransformerVisible !== void 0) {
          transformer?.visible(previousTransformerVisible);
        }
        exporting.value = false;
      }
    };
    const close = () => {
      if (props.saving) return;
      visible.value = false;
      clearObjectUrls();
    };
    onBeforeUnmount(clearObjectUrls);
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_switch = __unplugin_components_1;
      const _component_v_rect = resolveComponent("v-rect");
      const _component_v_text = resolveComponent("v-text");
      const _component_v_image = resolveComponent("v-image");
      const _component_v_transformer = resolveComponent("v-transformer");
      const _component_v_layer = resolveComponent("v-layer");
      const _component_v_stage = resolveComponent("v-stage");
      const _component_n_select = __unplugin_components_0;
      const _component_n_popconfirm = __unplugin_components_3;
      const _component_n_input = __unplugin_components_2$2;
      const _component_n_input_number = __unplugin_components_1$1;
      const _component_n_color_picker = __unplugin_components_2;
      const _component_n_checkbox = __unplugin_components_1$2;
      const _component_n_divider = __unplugin_components_1$3;
      const _component_n_slider = __unplugin_components_6;
      const _component_n_empty = __unplugin_components_5;
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createBlock(_component_n_modal, {
        show: visible.value,
        "onUpdate:show": _cache[19] || (_cache[19] = ($event) => visible.value = $event),
        "mask-closable": false,
        "close-on-esc": !_ctx.saving
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            class: "designer-card",
            title: "封面设计",
            bordered: false,
            role: "dialog",
            "aria-modal": "true",
            closable: "",
            onClose: close
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_24, [
                _cache[53] || (_cache[53] = createBaseVNode("span", { class: "canvas-size" }, "输出尺寸：1200 × 675", -1)),
                createVNode(_component_n_button, {
                  disabled: _ctx.saving,
                  onClick: close
                }, {
                  default: withCtx(() => _cache[51] || (_cache[51] = [
                    createTextVNode("取消")
                  ])),
                  _: 1
                }, 8, ["disabled"]),
                createVNode(_component_n_button, {
                  type: "primary",
                  loading: _ctx.saving || unref(exporting),
                  onClick: complete
                }, {
                  default: withCtx(() => _cache[52] || (_cache[52] = [
                    createTextVNode(" 完成 ")
                  ])),
                  _: 1
                }, 8, ["loading"])
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$3, [
                createVNode(_component_n_button, {
                  type: "primary",
                  onClick: addText
                }, {
                  default: withCtx(() => _cache[20] || (_cache[20] = [
                    createTextVNode("添加文字")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, { onClick: selectImages }, {
                  default: withCtx(() => _cache[21] || (_cache[21] = [
                    createTextVNode("添加图片")
                  ])),
                  _: 1
                }),
                unref(selectedLayer) ? (openBlock(), createBlock(_component_n_button, {
                  key: 0,
                  onClick: removeSelected
                }, {
                  default: withCtx(() => _cache[22] || (_cache[22] = [
                    createTextVNode("删除图层")
                  ])),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_n_switch, {
                  value: unref(safeAreaVisible),
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(safeAreaVisible) ? safeAreaVisible.value = $event : null),
                  class: "safe-area-switch"
                }, {
                  checked: withCtx(() => _cache[23] || (_cache[23] = [
                    createTextVNode("显示 16:9 安全区")
                  ])),
                  unchecked: withCtx(() => _cache[24] || (_cache[24] = [
                    createTextVNode("隐藏 16:9 安全区")
                  ])),
                  _: 1
                }, 8, ["value"]),
                createBaseVNode("input", {
                  ref_key: "imageInputRef",
                  ref: imageInputRef,
                  type: "file",
                  accept: ".png,.jpg,.jpeg",
                  multiple: "",
                  class: "hidden-input",
                  onChange: handleImageFiles
                }, null, 544)
              ]),
              createBaseVNode("div", _hoisted_2$2, [
                createBaseVNode("div", {
                  ref_key: "canvasHostRef",
                  ref: canvasHostRef,
                  class: "canvas-host"
                }, [
                  createBaseVNode("div", {
                    class: "stage-shell",
                    style: normalizeStyle({
                      width: `${unref(stageWidth)}px`,
                      height: `${unref(stageHeight)}px`
                    })
                  }, [
                    createVNode(_component_v_stage, {
                      ref_key: "stageRef",
                      ref: stageRef,
                      config: unref(stageConfig),
                      onMousedown: handleStagePointer,
                      onTouchstart: handleStagePointer
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_layer, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_rect, { config: backgroundConfig }),
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(layers), (layer) => {
                              return openBlock(), createElementBlock(Fragment, {
                                key: layer.id
                              }, [
                                layer.type === "text" ? (openBlock(), createBlock(_component_v_text, {
                                  key: 0,
                                  config: textConfig(layer),
                                  onClick: ($event) => selectLayer(layer.id, $event),
                                  onTap: ($event) => selectLayer(layer.id, $event),
                                  onDragend: ($event) => updatePosition(layer, $event),
                                  onTransformend: ($event) => updateTransform(layer, $event)
                                }, null, 8, ["config", "onClick", "onTap", "onDragend", "onTransformend"])) : (openBlock(), createBlock(_component_v_image, {
                                  key: 1,
                                  config: imageConfig(layer),
                                  onClick: ($event) => selectLayer(layer.id, $event),
                                  onTap: ($event) => selectLayer(layer.id, $event),
                                  onWheel: ($event) => handleImageWheel(layer, $event),
                                  onDragmove: ($event) => constrainImageDrag(layer, $event),
                                  onDragend: ($event) => updatePosition(layer, $event),
                                  onTransformend: ($event) => updateTransform(layer, $event)
                                }, null, 8, ["config", "onClick", "onTap", "onWheel", "onDragmove", "onDragend", "onTransformend"]))
                              ], 64);
                            }), 128)),
                            unref(safeAreaVisible) ? (openBlock(), createBlock(_component_v_rect, {
                              key: 0,
                              config: safeAreaConfig
                            })) : createCommentVNode("", true),
                            createVNode(_component_v_transformer, {
                              ref_key: "transformerRef",
                              ref: transformerRef,
                              config: transformerConfig
                            }, null, 512)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["config"])
                  ], 4)
                ], 512),
                createBaseVNode("aside", {
                  class: "sidebar",
                  style: normalizeStyle({
                    maxHeight: `${unref(stageHeight)}px`
                  })
                }, [
                  unref(selectedLayer) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    _cache[46] || (_cache[46] = createBaseVNode("h3", null, "图层设置", -1)),
                    unref(selectedLayer).type === "text" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createBaseVNode("div", _hoisted_3$1, [
                        createVNode(_component_n_select, {
                          value: unref(selectedTextTemplateId),
                          "onUpdate:value": [
                            _cache[1] || (_cache[1] = ($event) => isRef(selectedTextTemplateId) ? selectedTextTemplateId.value = $event : null),
                            applyTextTemplate
                          ],
                          options: unref(textTemplateOptions),
                          placeholder: "选择文字模板",
                          clearable: ""
                        }, null, 8, ["value", "options"]),
                        createVNode(_component_n_button, {
                          size: "small",
                          onClick: saveTextTemplate
                        }, {
                          default: withCtx(() => _cache[25] || (_cache[25] = [
                            createTextVNode("保存模板")
                          ])),
                          _: 1
                        }),
                        createVNode(_component_n_popconfirm, {
                          disabled: !unref(selectedTextTemplateId),
                          onPositiveClick: removeTextTemplate
                        }, {
                          trigger: withCtx(() => [
                            createVNode(_component_n_button, {
                              size: "small",
                              disabled: !unref(selectedTextTemplateId)
                            }, {
                              default: withCtx(() => _cache[26] || (_cache[26] = [
                                createTextVNode("删除")
                              ])),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          default: withCtx(() => [
                            _cache[27] || (_cache[27] = createTextVNode(" 确定删除这个文字模板吗？ "))
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      createBaseVNode("label", _hoisted_4$1, [
                        _cache[28] || (_cache[28] = createBaseVNode("span", null, "文字", -1)),
                        createVNode(_component_n_input, {
                          value: unref(selectedLayer).text,
                          "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(selectedLayer).text = $event),
                          type: "textarea",
                          autosize: { minRows: 2, maxRows: 5 }
                        }, null, 8, ["value"])
                      ]),
                      createBaseVNode("label", _hoisted_5$1, [
                        _cache[29] || (_cache[29] = createBaseVNode("span", null, "字体", -1)),
                        createVNode(_component_n_select, {
                          value: unref(selectedLayer).fontFamily,
                          "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(selectedLayer).fontFamily = $event),
                          options: unref(fontOptions),
                          filterable: ""
                        }, null, 8, ["value", "options"])
                      ]),
                      createBaseVNode("div", _hoisted_6$1, [
                        createBaseVNode("label", _hoisted_7$1, [
                          _cache[30] || (_cache[30] = createBaseVNode("span", null, "字号", -1)),
                          createVNode(_component_n_input_number, {
                            value: unref(selectedLayer).fontSize,
                            "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(selectedLayer).fontSize = $event),
                            min: 12,
                            max: 300
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("label", _hoisted_8$1, [
                          _cache[31] || (_cache[31] = createBaseVNode("span", null, "颜色", -1)),
                          createVNode(_component_n_color_picker, {
                            value: unref(selectedLayer).fill,
                            "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(selectedLayer).fill = $event),
                            "show-alpha": false
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("label", _hoisted_9$1, [
                          _cache[32] || (_cache[32] = createBaseVNode("span", null, "对齐", -1)),
                          createVNode(_component_n_select, {
                            value: unref(selectedLayer).align,
                            "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(selectedLayer).align = $event),
                            options: alignOptions
                          }, null, 8, ["value"])
                        ])
                      ]),
                      createVNode(_component_n_checkbox, {
                        checked: unref(selectedLayer).bold,
                        "onUpdate:checked": _cache[7] || (_cache[7] = ($event) => unref(selectedLayer).bold = $event)
                      }, {
                        default: withCtx(() => _cache[33] || (_cache[33] = [
                          createTextVNode("粗体")
                        ])),
                        _: 1
                      }, 8, ["checked"]),
                      createVNode(_component_n_divider, null, {
                        default: withCtx(() => _cache[34] || (_cache[34] = [
                          createTextVNode("描边")
                        ])),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_10$1, [
                        createBaseVNode("label", _hoisted_11$1, [
                          _cache[35] || (_cache[35] = createBaseVNode("span", null, "描边颜色", -1)),
                          createVNode(_component_n_color_picker, {
                            value: unref(selectedLayer).stroke,
                            "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(selectedLayer).stroke = $event),
                            "show-alpha": false
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("label", _hoisted_12$1, [
                          _cache[36] || (_cache[36] = createBaseVNode("span", null, "描边宽度", -1)),
                          createVNode(_component_n_input_number, {
                            value: unref(selectedLayer).strokeWidth,
                            "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(selectedLayer).strokeWidth = $event),
                            min: 0,
                            max: 30
                          }, null, 8, ["value"])
                        ])
                      ]),
                      createVNode(_component_n_divider, null, {
                        default: withCtx(() => _cache[37] || (_cache[37] = [
                          createTextVNode("阴影")
                        ])),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_13$1, [
                        createBaseVNode("label", _hoisted_14$1, [
                          _cache[38] || (_cache[38] = createBaseVNode("span", null, "阴影颜色", -1)),
                          createVNode(_component_n_color_picker, {
                            value: unref(selectedLayer).shadowColor,
                            "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(selectedLayer).shadowColor = $event)
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("label", _hoisted_15$1, [
                          _cache[39] || (_cache[39] = createBaseVNode("span", null, "模糊", -1)),
                          createVNode(_component_n_input_number, {
                            value: unref(selectedLayer).shadowBlur,
                            "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(selectedLayer).shadowBlur = $event),
                            min: 0,
                            max: 60
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("label", _hoisted_16$1, [
                          _cache[40] || (_cache[40] = createBaseVNode("span", null, "横向偏移", -1)),
                          createVNode(_component_n_input_number, {
                            value: unref(selectedLayer).shadowOffsetX,
                            "onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(selectedLayer).shadowOffsetX = $event),
                            min: -100,
                            max: 100
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("label", _hoisted_17$1, [
                          _cache[41] || (_cache[41] = createBaseVNode("span", null, "纵向偏移", -1)),
                          createVNode(_component_n_input_number, {
                            value: unref(selectedLayer).shadowOffsetY,
                            "onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(selectedLayer).shadowOffsetY = $event),
                            min: -100,
                            max: 100
                          }, null, 8, ["value"])
                        ])
                      ])
                    ], 64)) : (openBlock(), createElementBlock("div", _hoisted_18$1, [
                      createVNode(_component_n_button, {
                        size: "small",
                        onClick: _cache[14] || (_cache[14] = ($event) => fitSelectedImage("cover"))
                      }, {
                        default: withCtx(() => _cache[42] || (_cache[42] = [
                          createTextVNode("铺满画布")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_button, {
                        size: "small",
                        onClick: _cache[15] || (_cache[15] = ($event) => fitSelectedImage("contain"))
                      }, {
                        default: withCtx(() => _cache[43] || (_cache[43] = [
                          createTextVNode("完整显示")
                        ])),
                        _: 1
                      })
                    ])),
                    createVNode(_component_n_divider, null, {
                      default: withCtx(() => _cache[44] || (_cache[44] = [
                        createTextVNode("通用")
                      ])),
                      _: 1
                    }),
                    createBaseVNode("label", _hoisted_19$1, [
                      createBaseVNode("span", null, "透明度 " + toDisplayString(Math.round(unref(selectedLayer).opacity * 100)) + "%", 1),
                      createVNode(_component_n_slider, {
                        value: unref(selectedLayer).opacity,
                        "onUpdate:value": _cache[16] || (_cache[16] = ($event) => unref(selectedLayer).opacity = $event),
                        min: 0,
                        max: 1,
                        step: 0.01
                      }, null, 8, ["value"])
                    ]),
                    createBaseVNode("label", _hoisted_20$1, [
                      _cache[45] || (_cache[45] = createBaseVNode("span", null, "旋转角度", -1)),
                      createVNode(_component_n_input_number, {
                        value: unref(selectedLayer).rotation,
                        "onUpdate:value": _cache[17] || (_cache[17] = ($event) => unref(selectedLayer).rotation = $event),
                        min: -180,
                        max: 180
                      }, null, 8, ["value"])
                    ])
                  ], 64)) : (openBlock(), createBlock(_component_n_empty, {
                    key: 1,
                    description: "选择一个图层以编辑",
                    size: "small"
                  })),
                  createVNode(_component_n_divider, null, {
                    default: withCtx(() => _cache[47] || (_cache[47] = [
                      createTextVNode("图层")
                    ])),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_21, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(reversedLayers), (layer) => {
                      return openBlock(), createElementBlock("div", {
                        key: layer.id,
                        class: normalizeClass(["layer-item", { active: layer.id === unref(selectedId) }]),
                        onClick: ($event) => selectedId.value = layer.id
                      }, [
                        createVNode(_component_n_checkbox, {
                          checked: layer.visible,
                          title: "显示图层",
                          onClick: _cache[18] || (_cache[18] = withModifiers(() => {
                          }, ["stop"])),
                          "onUpdate:checked": ($event) => layer.visible = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createBaseVNode("span", _hoisted_23, toDisplayString(layerName(layer)), 1),
                        createVNode(_component_n_button, {
                          text: "",
                          size: "tiny",
                          title: "上移",
                          onClick: withModifiers(($event) => moveLayer(layer.id, 1), ["stop"])
                        }, {
                          default: withCtx(() => _cache[48] || (_cache[48] = [
                            createTextVNode("↑")
                          ])),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_n_button, {
                          text: "",
                          size: "tiny",
                          title: "下移",
                          onClick: withModifiers(($event) => moveLayer(layer.id, -1), ["stop"])
                        }, {
                          default: withCtx(() => _cache[49] || (_cache[49] = [
                            createTextVNode("↓")
                          ])),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_n_button, {
                          text: "",
                          size: "tiny",
                          title: "删除",
                          onClick: withModifiers(($event) => removeLayer(layer.id), ["stop"])
                        }, {
                          default: withCtx(() => _cache[50] || (_cache[50] = [
                            createTextVNode("×")
                          ])),
                          _: 2
                        }, 1032, ["onClick"])
                      ], 10, _hoisted_22);
                    }), 128))
                  ])
                ], 4)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "close-on-esc"]);
    };
  }
});
const CoverDesigner = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-73dda490"]]);
const _hoisted_1$2 = ["src"];
const _hoisted_2$1 = { class: "cover-actions" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ImageCrop",
  props: /* @__PURE__ */ mergeModels({
    height: { default: "90px" },
    width: { default: "160px" }
  }, {
    "modelValue": { required: true, default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const filename = useModel(__props, "modelValue");
    const src = computed(() => {
      if (filename.value) {
        if (window.path.isAbsolute(filename.value)) {
          return filename.value;
        } else {
          return `${api.defaults.baseURL}/assets/cover/${filename.value}`;
        }
      }
      return "";
    });
    const props = __props;
    const notice = useNotification();
    const uploadCover = async (file) => {
      if (file.size > 1024 * 1024 * 2) {
        notice.warning({
          title: "图片大小超过2M可能导致无法上传成功~",
          duration: 2e3
        });
      }
      const res = await common.uploadCover(file);
      filename.value = res.name;
    };
    const handleCoverChange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      await uploadCover(file);
    };
    const designerVisible = ref(false);
    const designerSaving = ref(false);
    const handleDesignComplete = async (file) => {
      designerSaving.value = true;
      try {
        await uploadCover(file);
        designerVisible.value = false;
        notice.success({
          title: "封面已生成",
          duration: 1200
        });
      } catch (error) {
        notice.error({
          title: "封面上传失败",
          content: String(error)
        });
      } finally {
        designerSaving.value = false;
      }
    };
    const fileInputRef = ref(null);
    const selectImage = () => {
      if (fileInputRef.value) {
        fileInputRef.value.value = "";
      }
      fileInputRef.value?.click();
    };
    const remove = () => {
      filename.value = "";
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_button = Button;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("input", {
          ref_key: "fileInputRef",
          ref: fileInputRef,
          type: "file",
          accept: ".png,.jpg,.jpeg",
          style: { "display": "none" },
          onChange: handleCoverChange
        }, null, 544),
        createBaseVNode("div", {
          style: normalizeStyle({
            height: props.height,
            width: props.width
          }),
          class: "image-container"
        }, [
          unref(src) ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "image",
            src: unref(src),
            onClick: selectImage
          }, null, 8, _hoisted_1$2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: "empty-image",
            onClick: selectImage
          }, "选择图片")),
          unref(src) ? (openBlock(), createBlock(_component_n_icon, {
            key: 2,
            size: "14",
            class: "remove",
            onClick: remove
          }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createBaseVNode("svg", {
                viewBox: "0 0 12 12",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true"
              }, [
                createBaseVNode("g", {
                  stroke: "none",
                  "stroke-width": "1",
                  fill: "none",
                  "fill-rule": "evenodd"
                }, [
                  createBaseVNode("g", {
                    fill: "currentColor",
                    "fill-rule": "nonzero"
                  }, [
                    createBaseVNode("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" })
                  ])
                ])
              ], -1)
            ])),
            _: 1
          })) : createCommentVNode("", true)
        ], 4),
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(_component_n_button, {
            size: "small",
            onClick: selectImage
          }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("选择图片")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            size: "small",
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => designerVisible.value = true)
          }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("设计封面")
            ])),
            _: 1
          })
        ]),
        createVNode(CoverDesigner, {
          show: unref(designerVisible),
          "onUpdate:show": _cache[1] || (_cache[1] = ($event) => isRef(designerVisible) ? designerVisible.value = $event : null),
          "initial-src": unref(src),
          saving: unref(designerSaving),
          onComplete: handleDesignComplete
        }, null, 8, ["show", "initial-src", "saving"])
      ]);
    };
  }
});
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e0c08c0b"]]);
const uploadTitleTemplate = [
  {
    value: "{{title}}",
    label: "直播标题"
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
    value: "{{filename}}",
    label: "视频文件名"
  },
  {
    value: "{{now}}",
    label: "视频录制时间（示例：2024.01.24）"
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
];
const _hoisted_1$1 = { class: "dynamic-tags" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DynamicTags",
  props: /* @__PURE__ */ mergeModels({
    max: { default: -1 },
    beforeCreate: {},
    placeholder: { default: "回车输入内容" },
    loading: { type: Boolean }
  }, {
    "modelValue": { required: true, default: [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const tags = useModel(__props, "modelValue");
    const newTag = ref("");
    const canAddTag = computed(() => props.max === -1 || tags.value.length < props.max);
    const addTag = async () => {
      if (!newTag.value) return;
      try {
        const canCreate = props.beforeCreate ? await props.beforeCreate(newTag.value) : true;
        if (canCreate && canAddTag.value) {
          tags.value.push(newTag.value);
          newTag.value = "";
        }
      } catch (e) {
        console.error(e);
      }
    };
    const removeTag = (index) => {
      tags.value.splice(index, 1);
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_input = __unplugin_components_2$2;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "tag"
          }, [
            createTextVNode(toDisplayString(tag) + " ", 1),
            createVNode(_component_n_icon, {
              size: "14",
              class: "remove-icon",
              onClick: ($event) => removeTag(index)
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createBaseVNode("svg", {
                  viewBox: "0 0 12 12",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "aria-hidden": "true"
                }, [
                  createBaseVNode("g", {
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd"
                  }, [
                    createBaseVNode("g", {
                      fill: "currentColor",
                      "fill-rule": "nonzero"
                    }, [
                      createBaseVNode("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" })
                    ])
                  ])
                ], -1)
              ])),
              _: 2
            }, 1032, ["onClick"])
          ]);
        }), 128)),
        canAddTag.value ? (openBlock(), createBlock(_component_n_input, {
          key: 0,
          value: newTag.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => newTag.value = $event),
          placeholder: _ctx.placeholder,
          class: "tag-input",
          loading: _ctx.loading,
          onKeyup: withKeys(addTag, ["enter"])
        }, null, 8, ["value", "placeholder", "loading"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const DynamicTags = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f099f975"]]);
const _hoisted_1 = ["title", "onClick"];
const _hoisted_2 = ["title", "onClick"];
const _hoisted_3 = ["title", "onClick"];
const _hoisted_4 = {
  key: 0,
  style: { "display": "flex", "flex-direction": "column", "gap": "8px" }
};
const _hoisted_5 = {
  key: 1,
  style: { "color": "#999", "font-size": "12px" }
};
const _hoisted_6 = { class: "inline-items" };
const _hoisted_7 = { class: "inline-items" };
const _hoisted_8 = { class: "inline-item" };
const _hoisted_9 = { class: "inline-item" };
const _hoisted_10 = { class: "inline-items" };
const _hoisted_11 = { class: "inline-item" };
const _hoisted_12 = { class: "inline-item" };
const _hoisted_13 = { class: "inline-item" };
const _hoisted_14 = { class: "inline-item" };
const _hoisted_15 = { class: "inline-item" };
const _hoisted_16 = { class: "inline-items" };
const _hoisted_17 = { class: "inline-flex" };
const _hoisted_18 = {
  class: "inline-items",
  style: { "align-items": "center", "flex-wrap": "wrap", "width": "100%" }
};
const _hoisted_19 = {
  key: 0,
  style: { "text-align": "right" }
};
const _hoisted_20 = { style: { "text-align": "right" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BiliSetting",
  props: /* @__PURE__ */ mergeModels({
    mode: { default: "full" },
    presetId: {},
    showActionButtons: { type: Boolean, default: true }
  }, {
    "modelValue": { required: false },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const confirm = useConfirm();
    const uploadPresetStore = useUploadPreset();
    const { saveUploadPreset, removeUploadPreset } = uploadPresetStore;
    const { appConfig } = storeToRefs(useAppConfig());
    const { uploaPresetsOptions, uploadPresetVersion } = storeToRefs(uploadPresetStore);
    const props = __props;
    const emits = __emit;
    const { isMobile } = useBreakpoints();
    const labelWidth = computed(() => {
      return isMobile.value ? "90px" : "120px";
    });
    const presetId = useModel(__props, "modelValue");
    const isEditOnlyMode = computed(() => props.mode === "edit-only");
    const activePresetId = computed(() => {
      return isEditOnlyMode.value ? props.presetId : presetId.value;
    });
    const options = ref({
      config: {
        uid: void 0,
        seasonId: void 0
      }
    });
    const handlePresetChange = async (id) => {
      const preset = await videoPreset.get(id);
      if (preset) {
        options.value = preset;
      } else {
        options.value = {
          // @ts-ignore
          config: {}
        };
      }
    };
    const noSideSpace = (value) => !value.startsWith(" ") && !value.endsWith(" ");
    watch(
      () => activePresetId.value,
      (id) => {
        id && handlePresetChange(id);
      },
      {
        immediate: true
      }
    );
    watch(uploadPresetVersion, () => {
      if (activePresetId.value) {
        const currentOptions = uploaPresetsOptions.value.find(
          (preset) => preset.value === activePresetId.value
        )?.options;
        if (currentOptions) {
          if (!isEqual(options.value.config, currentOptions)) {
            console.log("options已过时，更新options");
            handlePresetChange(activePresetId.value);
          }
        } else {
          presetId.value = "default";
        }
      }
    });
    const notice = useNotification();
    const tagCreateLoading = ref(false);
    const beforeTagCreate = async (tag) => {
      if (!appConfig.value.uid) {
        notice.warning({
          title: "请先登录",
          duration: 1e3
        });
        return false;
      }
      if ((options.value?.config?.tag ?? []).includes(tag)) {
        notice.warning({
          title: "Σ( ° △ °|||) 该输入标签已经存在",
          duration: 1e3
        });
        return false;
      }
      tagCreateLoading.value = true;
      try {
        const res = await bili.checkTag(tag, appConfig.value.uid);
        if (res.code !== 0) {
          notice.error({
            title: res.message,
            duration: 1e3
          });
          return false;
        }
        return true;
      } catch (e) {
        notice.error({
          title: String(e),
          duration: 1e3
        });
        return false;
      } finally {
        tagCreateLoading.value = false;
      }
    };
    const nameModelVisible = ref(false);
    const tempPresetName = ref("");
    const saveAnotherPreset = () => {
      isRename.value = false;
      tempPresetName.value = "";
      nameModelVisible.value = true;
    };
    const isRename = ref(false);
    const rename = () => {
      tempPresetName.value = options.value.name;
      isRename.value = true;
      nameModelVisible.value = true;
    };
    const scheduledDatetimeRule = {
      trigger: ["blur", "change"],
      validator() {
        if (!options.value.config.dtime) {
          return true;
        }
        const now = Date.now() / 1e3;
        const dtime = options.value.config.dtime;
        if (dtime < now + 2 * 60 * 60) {
          return new Error("定时发布时间必须≥当前时间+2小时");
        }
        if (dtime > now + 15 * 24 * 60 * 60) {
          return new Error("定时发布时间必须≤当前时间+15天");
        }
        return true;
      }
    };
    const scheduledTimestampMillis = computed({
      get() {
        return options.value.config.dtime ? options.value.config.dtime * 1e3 : void 0;
      },
      set(value) {
        options.value.config.dtime = value ? Math.floor(value / 1e3) : void 0;
      }
    });
    const reserveOptions = ref([]);
    const reserveSid = computed(() => options.value.config.act_reserve?.sid);
    const handleReserveChange = (checked, sid) => {
      if (checked) {
        options.value.config.act_reserve = { sid };
      } else {
        options.value.config.act_reserve = void 0;
      }
    };
    const loadReserveList = async () => {
      try {
        if (!userInfoStore.userInfo?.uid) {
          reserveOptions.value = [];
          return;
        }
        const data = await bili.getReserveList(userInfoStore.userInfo.uid);
        const list = data?.data?.act_reserve?.act_reserve_list || [];
        reserveOptions.value = list.map((item) => ({
          label: item.title,
          value: item.sid
        }));
      } catch (e) {
        console.error("获取预约列表失败", e);
      }
    };
    onMounted(() => {
      loadReserveList();
    });
    const saveAnotherPresetConfirm = async () => {
      if (!tempPresetName.value) {
        notice.warning({
          title: "预设名称不得为空",
          duration: 500
        });
        return;
      }
      const preset = cloneDeep(options.value);
      if (!isRename.value) preset.id = uuid();
      preset.name = tempPresetName.value;
      await saveUploadPreset(preset);
      nameModelVisible.value = false;
      notice.success({
        title: "保存成功",
        duration: 1e3
      });
      presetId.value = preset.id;
      handlePresetChange(preset.id);
    };
    const deletePreset = async () => {
      let ids = Object.entries(appConfig.value.webhook.rooms || {}).map(([, value]) => {
        return value?.uploadPresetId;
      });
      ids.push(appConfig.value.webhook?.uploadPresetId);
      ids = ids.filter((id2) => id2 !== void 0 && id2 !== "");
      const msg = ids.includes(options.value.id) ? "该预设正在被使用中，删除后使用该预设的功能将失效，是否确认删除？" : "是否确认删除该预设？";
      const [status] = await confirm.warning({
        content: msg
      });
      if (!status) return;
      const id = options.value.id;
      await removeUploadPreset(id);
      presetId.value = "default";
      handlePresetChange("default");
    };
    const savePreset = async () => {
      if (isEditOnlyMode.value && !options.value.id) {
        notice.error({
          title: "未找到可编辑的上传预设",
          duration: 1e3
        });
        return false;
      }
      const data = options.value;
      if (userInfoStore.userInfo?.uid) {
        data.config.uid = userInfoStore.userInfo.uid;
      }
      await saveUploadPreset(options.value);
      if (options.value.config.dtime) {
        notice.warning({
          title: "保存成功，但定时发布不会保存到配置文件中",
          duration: 1e3
        });
        return true;
      }
      notice.success({
        title: "保存成功",
        duration: 1e3
      });
      return true;
    };
    watch(
      () => options.value,
      (value) => {
        emits("change", value);
      },
      {
        deep: true
      }
    );
    watchEffect(() => {
      if (options.value?.config?.closeReply) {
        options.value.config.selectiionReply = 0;
      }
    });
    watchEffect(() => {
      if (options.value?.config?.selectiionReply) {
        options.value.config.closeReply = 0;
      }
    });
    const userInfoStore = useUserInfoStore();
    const seasonList = ref([]);
    const currentSections = computed(() => {
      return seasonList.value.find((item) => item.value === options.value.config.seasonId)?.sections;
    });
    const getSeasonList = async (force) => {
      if (!userInfoStore?.userInfo?.uid) {
        seasonList.value = [];
        return;
      }
      const rawLocalData = window.localStorage.getItem("seasonListWithUID");
      if (!force && rawLocalData) {
        try {
          const data2 = JSON.parse(rawLocalData);
          if (userInfoStore?.userInfo?.uid && data2?.[userInfoStore.userInfo.uid]) {
            seasonList.value = data2[userInfoStore.userInfo.uid];
            return;
          }
        } catch (e) {
          console.error(e);
        }
      }
      const data = await bili.getSeasonList(userInfoStore.userInfo.uid);
      seasonList.value = (data.seasons || []).map((item) => {
        return {
          label: item.season.title,
          value: item.season.id,
          sections: item?.sections?.sections || []
        };
      });
      try {
        if (rawLocalData) {
          const data2 = JSON.parse(rawLocalData);
          data2[userInfoStore.userInfo.uid] = seasonList.value;
          window.localStorage.setItem("seasonListWithUID", JSON.stringify(data2));
        } else {
          window.localStorage.setItem(
            "seasonListWithUID",
            JSON.stringify({ [userInfoStore.userInfo.uid]: seasonList.value })
          );
        }
        if (force) {
          notice.success({
            title: "刷新成功",
            duration: 1e3
          });
        }
      } catch (e) {
        console.error(e);
      }
    };
    const descMaxLength = ref(2e3);
    watch(
      () => options.value.config.seasonId,
      () => {
        options.value.config.uid = userInfoStore.userInfo?.uid;
      }
    );
    watchEffect(() => {
      if (!userInfoStore.userInfo) return;
      getSeasonList();
    });
    const topicLoading = ref(false);
    const topicOptions = ref([]);
    const handleSearch = async (query) => {
      if (!appConfig.value.uid) {
        topicOptions.value = [];
        return;
      }
      if (!query.length) {
        topicOptions.value = [];
        return;
      }
      topicLoading.value = true;
      const data = await bili.searchTopic(query, appConfig.value.uid);
      topicOptions.value = data.result.topics.map((item) => {
        return {
          ...item,
          label: item.name,
          value: item.name
        };
      });
      topicLoading.value = false;
    };
    const handleTopicChange = (topicName) => {
      options.value.config.topic_name = topicName;
      if (options.value.config.topic_name) {
        options.value.config.topic_id = topicOptions.value.find(
          (item) => item.value === options.value.config.topic_name
        )?.id;
        options.value.config.mission_id = topicOptions.value.find(
          (item) => item.value === options.value.config.topic_name
        )?.mission_id;
      } else {
        options.value.config.topic_id = void 0;
        options.value.config.mission_id = void 0;
      }
    };
    const titleList = ref(uploadTitleTemplate);
    const titleTip = computed(() => {
      const base = `上限80字，多余的会被截断。<br/>
  占位符用于支持webhook中的相关功能，如【{{user}}】{{title}}-{{now}}<br/>
  不要在直播开始后修改字段，本场直播不会生效，更多模板引擎等高级用法见文档<br/>`;
      return titleList.value.map((item) => {
        return `${item.label}：${item.value}<br/>`;
      }).reduce((prev, cur) => prev + cur, base);
    });
    const partTitleList = ref([
      {
        label: "标题",
        value: "{{title}}"
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
        label: "文件名",
        value: "{{filename}}"
      },
      {
        label: "序号",
        value: "{{index}}"
      },
      {
        label: "弹幕版or纯享版",
        value: "{{hasDanmaStr}}"
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
    const partTitleTip = computed(() => {
      const base = `留空则使用当前分P标题。<br/>更多模板引擎等高级用法见文档<br/>`;
      return partTitleList.value.map((item) => {
        return `${item.label}：${item.value}<br/>`;
      }).reduce((prev, cur) => prev + cur, base);
    });
    const partTitleInput = templateRef("partTitleInput");
    const setPartTitleVar = async (value) => {
      if (!options.value.config.partTitleTemplate) {
        options.value.config.partTitleTemplate = "";
      }
      const input = partTitleInput.value?.inputElRef;
      if (input) {
        const currentValue = options.value.config.partTitleTemplate || "";
        const start = input.selectionStart ?? currentValue.length;
        const end = input.selectionEnd ?? currentValue.length;
        options.value.config.partTitleTemplate = currentValue.slice(0, start) + value + currentValue.slice(end);
        input.focus();
        await nextTick();
        input.setSelectionRange(start + value.length, start + value.length);
      } else {
        options.value.config.partTitleTemplate = (options.value.config.partTitleTemplate || "") + value;
      }
    };
    const previewPartTitle = async (template) => {
      if (!template) {
        notice.warning({
          title: "请输入分P标题模板",
          duration: 2e3
        });
        return;
      }
      const data = await bili.formatWebhookPartTitle(template);
      notice.info({
        title: data,
        duration: 3e3
      });
    };
    const previewTitle = async (template) => {
      const data = await bili.formatWebhookTitle(template);
      notice.warning({
        title: data,
        duration: 3e3
      });
    };
    const titleInput = templateRef("titleInput");
    const setTitleVar = async (value) => {
      const input = titleInput.value?.inputElRef;
      if (input) {
        const start = input.selectionStart ?? options.value.config.title.length;
        const end = input.selectionEnd ?? options.value.config.title.length;
        const oldValue = options.value.config.title;
        options.value.config.title = oldValue.slice(0, start) + value + oldValue.slice(end);
        input.focus();
        await nextTick();
        input.setSelectionRange(start + value.length, start + value.length);
      } else {
        options.value.config.title += value;
      }
    };
    const descInput = templateRef("descInput");
    const setDescVar = async (value) => {
      if (!options.value.config.desc) {
        options.value.config.desc = "";
      }
      const input = descInput.value?.textareaElRef;
      if (input) {
        const currentValue = options.value.config.desc || "";
        const start = input.selectionStart ?? currentValue.length;
        const end = input.selectionEnd ?? currentValue.length;
        options.value.config.desc = currentValue.slice(0, start) + value + currentValue.slice(end);
        input.focus();
        await nextTick();
        input.setSelectionRange(start + value.length, start + value.length);
      } else {
        options.value.config.desc = (options.value.config.desc || "") + value;
      }
    };
    const previewDesc = async (template) => {
      if (!template) {
        notice.warning({
          title: "请输入简介内容",
          duration: 2e3
        });
        return;
      }
      const data = await bili.formatWebhookDesc(template);
      notice.info({
        title: data,
        duration: 3e3
      });
    };
    const descTip = computed(() => {
      const base = `上限2000字，多余的会被截断。<br/>
  可以输入[暮色312]&lt;10995238&gt;来进行艾特用户，前面的值为用户名，后面的值为用户id，请务必保持用户名与uid对应。<br/>
  更多模板引擎等高级用法见文档<br/>`;
      return titleList.value.map((item) => {
        return `${item.label}：${item.value}<br/>`;
      }).reduce((prev, cur) => prev + cur, base);
    });
    const setTitle = (name) => {
      options.value.config.title = name;
    };
    const getTitle = () => {
      return options.value?.config?.title;
    };
    __expose({
      setTitle,
      getTitle,
      savePreset
    });
    const humanTypeList = ref([
      {
        id: 1001,
        name: "影视"
      },
      {
        id: 1002,
        name: "娱乐"
      },
      {
        id: 1003,
        name: "音乐"
      },
      {
        id: 1004,
        name: "舞蹈"
      },
      {
        id: 1005,
        name: "动画"
      },
      {
        id: 1006,
        name: "绘画"
      },
      {
        id: 1007,
        name: "鬼畜"
      },
      {
        id: 1008,
        name: "游戏"
      },
      {
        id: 1009,
        name: "资讯"
      },
      {
        id: 1010,
        name: "知识"
      },
      {
        id: 1011,
        name: "人工智能"
      },
      {
        id: 1012,
        name: "科技数码"
      },
      {
        id: 1013,
        name: "汽车"
      },
      {
        id: 1014,
        name: "时尚美妆"
      },
      {
        id: 1015,
        name: "家装房产"
      },
      {
        id: 1016,
        name: "户外潮流"
      },
      {
        id: 1017,
        name: "健身"
      },
      {
        id: 1018,
        name: "体育运动"
      },
      {
        id: 1019,
        name: "手工"
      },
      {
        id: 1020,
        name: "美食"
      },
      {
        id: 1021,
        name: "小剧场"
      },
      {
        id: 1022,
        name: "旅游出行"
      },
      {
        id: 1023,
        name: "三农"
      },
      {
        id: 1024,
        name: "动物"
      },
      {
        id: 1025,
        name: "亲子"
      },
      {
        id: 1026,
        name: "健康"
      },
      {
        id: 1027,
        name: "情感"
      },
      {
        id: 1029,
        name: "vlog"
      },
      {
        id: 1030,
        name: "生活兴趣"
      },
      {
        id: 1031,
        name: "生活经验"
      }
    ]);
    const creationStatementList = ref([
      {
        id: -1,
        name: "内容无需标注"
      },
      {
        id: 1,
        name: "含AI生成内容"
      },
      {
        id: 2,
        name: "含虚构演绎内容"
      },
      {
        id: 3,
        name: "内容含营销信息"
      },
      {
        id: 4,
        name: "个人观点，仅供参考"
      }
    ]);
    return (_ctx, _cache) => {
      const _component_n_select = __unplugin_components_0;
      const _component_n_form_item = __unplugin_components_2$4;
      const _component_n_divider = __unplugin_components_1$3;
      const _component_Tip = _sfc_main$4;
      const _component_image_crop = __unplugin_components_4;
      const _component_n_input = __unplugin_components_2$2;
      const _component_n_button = Button;
      const _component_n_radio = __unplugin_components_3$3;
      const _component_n_space = __unplugin_components_2$5;
      const _component_n_radio_group = __unplugin_components_5$2;
      const _component_n_date_picker = __unplugin_components_0$1;
      const _component_n_checkbox = __unplugin_components_1$2;
      const _component_n_form = __unplugin_components_5$1;
      const _component_n_card = __unplugin_components_3$1;
      const _component_n_modal = __unplugin_components_3$2;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_n_form, {
          ref: "formRef",
          "label-width": labelWidth.value,
          "label-placement": "left",
          "label-align": "right"
        }, {
          default: withCtx(() => [
            !isEditOnlyMode.value ? (openBlock(), createBlock(_component_n_form_item, {
              key: 0,
              label: "预设"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: presetId.value,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => presetId.value = $event),
                  options: unref(uploaPresetsOptions)
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            !isEditOnlyMode.value ? (openBlock(), createBlock(_component_n_divider, { key: 1 })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "非必选，不设置B站会自动进行选择",
                  text: "封面"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_image_crop, {
                  modelValue: unref(options).config.cover,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(options).config.cover = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, {
              label: "视频标题",
              style: { "margin-bottom": "10px" }
            }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: titleTip.value,
                  text: "视频标题"
                }, null, 8, ["tip"])
              ]),
              feedback: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(titleList), (item) => {
                  return openBlock(), createElementBlock("span", {
                    key: item.value,
                    title: item.label,
                    class: "title-var",
                    onClick: ($event) => setTitleVar(item.value)
                  }, toDisplayString(item.value), 9, _hoisted_1);
                }), 128))
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  ref_key: "titleInput",
                  ref: titleInput,
                  value: unref(options).config.title,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).config.title = $event),
                  placeholder: "请输入视频标题",
                  clearable: ""
                }, null, 8, ["value"]),
                createVNode(_component_n_button, {
                  style: { "margin-right": "10px" },
                  onClick: _cache[3] || (_cache[3] = ($event) => previewTitle(unref(options).config.title))
                }, {
                  default: withCtx(() => _cache[34] || (_cache[34] = [
                    createTextVNode("预览")
                  ])),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, {
              label: "分P标题",
              style: { "margin-bottom": "10px" }
            }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: partTitleTip.value,
                  text: "分P标题"
                }, null, 8, ["tip"])
              ]),
              feedback: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(partTitleList), (item) => {
                  return openBlock(), createElementBlock("span", {
                    key: item.value,
                    title: item.label,
                    class: "title-var",
                    onClick: ($event) => setPartTitleVar(item.value)
                  }, toDisplayString(item.value), 9, _hoisted_2);
                }), 128))
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  ref_key: "partTitleInput",
                  ref: partTitleInput,
                  value: unref(options).config.partTitleTemplate,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(options).config.partTitleTemplate = $event),
                  placeholder: "留空则使用当前分P标题",
                  clearable: "",
                  style: { "margin-right": "10px" },
                  spellcheck: "false"
                }, null, 8, ["value"]),
                createVNode(_component_n_button, {
                  style: { "margin-right": "10px" },
                  onClick: _cache[5] || (_cache[5] = ($event) => previewPartTitle(unref(options).config.partTitleTemplate || ""))
                }, {
                  default: withCtx(() => _cache[35] || (_cache[35] = [
                    createTextVNode("预览")
                  ])),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "稿件类型" }, {
              default: withCtx(() => [
                createVNode(_component_n_radio_group, {
                  value: unref(options).config.copyright,
                  "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(options).config.copyright = $event),
                  name: "radiogroup"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_space, null, {
                      default: withCtx(() => [
                        createVNode(_component_n_radio, { value: 1 }, {
                          default: withCtx(() => _cache[36] || (_cache[36] = [
                            createTextVNode(" 自制 ")
                          ])),
                          _: 1
                        }),
                        createVNode(_component_n_radio, { value: 2 }, {
                          default: withCtx(() => _cache[37] || (_cache[37] = [
                            createTextVNode(" 转载 ")
                          ])),
                          _: 1
                        }),
                        createVNode(_component_n_radio, { value: 3 }, {
                          default: withCtx(() => _cache[38] || (_cache[38] = [
                            createTextVNode(" 其他 ")
                          ])),
                          _: 1
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
            unref(options).config.copyright === 2 ? (openBlock(), createBlock(_component_n_form_item, { key: 2 }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "如果为空，在webhook使用时，会尝试会替换为直播间链接，如果无法匹配到，会被替换为直播间号",
                  text: "转载来源"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(options).config.source,
                  "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(options).config.source = $event),
                  placeholder: "注明视频来源网址",
                  "allow-input": noSideSpace,
                  clearable: "",
                  maxlength: "200",
                  "show-count": ""
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            unref(options).config.copyright === 1 || unref(options).config.copyright === 3 ? (openBlock(), createBlock(_component_n_form_item, {
              key: 3,
              label: "创作声明"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: unref(options).config.creationStatement,
                  "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(options).config.creationStatement = $event),
                  options: unref(creationStatementList),
                  "key-field": "id",
                  "label-field": "name",
                  "value-field": "id",
                  clearable: ""
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, { label: "分区" }, {
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: unref(options).config.human_type2,
                  "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(options).config.human_type2 = $event),
                  options: unref(humanTypeList),
                  "key-field": "id",
                  "label-field": "name",
                  "value-field": "id"
                }, null, 8, ["value", "options"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "留着默认的tag，秋梨膏(๑>◡<๑)",
                  text: "标签"
                })
              ]),
              default: withCtx(() => [
                createVNode(DynamicTags, {
                  modelValue: unref(options).config.tag,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(options).config.tag = $event),
                  max: 10,
                  "before-create": beforeTagCreate,
                  placeholder: "回车输入标签，最多十个",
                  loading: unref(tagCreateLoading)
                }, null, 8, ["modelValue", "loading"])
              ]),
              _: 1
            }),
            unref(options).config.copyright === 1 || unref(options).config.copyright === 3 ? (openBlock(), createBlock(_component_n_form_item, { key: 4 }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "话题也会占据一个tag栏~",
                  text: "话题"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_select, {
                  value: unref(options).config.topic_name,
                  "onUpdate:value": handleTopicChange,
                  filterable: "",
                  placeholder: "搜索话题",
                  options: unref(topicOptions),
                  loading: unref(topicLoading),
                  clearable: "",
                  remote: "",
                  "clear-filter-after-select": false,
                  onSearch: handleSearch
                }, null, 8, ["value", "options", "loading"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, { style: { "margin-bottom": "10px" } }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: descTip.value,
                  text: "视频简介"
                }, null, 8, ["tip"])
              ]),
              feedback: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(titleList), (item) => {
                  return openBlock(), createElementBlock("span", {
                    key: item.value,
                    title: item.label,
                    class: "title-var",
                    onClick: ($event) => setDescVar(item.value)
                  }, toDisplayString(item.value), 9, _hoisted_3);
                }), 128))
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  ref_key: "descInput",
                  ref: descInput,
                  value: unref(options).config.desc,
                  "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(options).config.desc = $event),
                  placeholder: "请输入视频简介,支持{{title}},{{user}},{{now}}等占位符。可以输入[暮色312]<10995238>来进行艾特用户",
                  clearable: "",
                  maxlength: unref(descMaxLength),
                  "show-count": "",
                  type: "textarea",
                  autosize: {
                    minRows: 4
                  }
                }, null, 8, ["value", "maxlength"]),
                createVNode(_component_n_button, {
                  style: { "margin-right": "10px" },
                  onClick: _cache[12] || (_cache[12] = ($event) => previewDesc(unref(options).config.desc || ""))
                }, {
                  default: withCtx(() => _cache[39] || (_cache[39] = [
                    createTextVNode("预览")
                  ])),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, {
              path: "dtime",
              rule: scheduledDatetimeRule
            }, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  text: "定时发布",
                  tip: "可选择距离当前最早≥2小时/最晚≤15天的时间，花火稿件或距发布不足5分钟时不可修改/取消，不会保存到配置中"
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_n_date_picker, {
                  type: "datetime",
                  clearable: "",
                  placeholder: "请选择定时发布时间",
                  value: scheduledTimestampMillis.value,
                  "on-update:value": (value) => {
                    scheduledTimestampMillis.value = value;
                  }
                }, null, 8, ["value", "on-update:value"])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "关联预约" }, {
              default: withCtx(() => [
                unref(reserveOptions).length ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(reserveOptions), (item) => {
                    return openBlock(), createBlock(_component_n_checkbox, {
                      key: item.value,
                      checked: reserveSid.value === item.value,
                      "onUpdate:checked": (checked) => handleReserveChange(checked, item.value)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["checked", "onUpdate:checked"]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
                  _cache[40] || (_cache[40] = createTextVNode(" 暂无可用预约，")),
                  createBaseVNode("span", {
                    onClick: loadReserveList,
                    style: { "cursor": "pointer", "color": "#2080f0" }
                  }, "点击刷新")
                ]))
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "粉丝动态" }, {
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(options).config.dynamic,
                  "onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(options).config.dynamic = $event),
                  placeholder: "请输入粉丝动态",
                  clearable: "",
                  maxlength: "233",
                  "show-count": "",
                  type: "textarea",
                  autosize: {
                    minRows: 2
                  }
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            unref(options).config.copyright === 1 || unref(options).config.copyright === 3 ? (openBlock(), createBlock(_component_n_form_item, {
              key: 5,
              label: "添加水印"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_checkbox, {
                  checked: unref(options).config.watermark,
                  "onUpdate:checked": _cache[14] || (_cache[14] = ($event) => unref(options).config.watermark = $event),
                  "checked-value": 1,
                  "unchecked-value": 0,
                  title: "开启"
                }, {
                  default: withCtx(() => _cache[41] || (_cache[41] = [
                    createTextVNode("开启")
                  ])),
                  _: 1
                }, 8, ["checked"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, { label: "自制声明" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.noReprint,
                    "onUpdate:checked": _cache[15] || (_cache[15] = ($event) => unref(options).config.noReprint = $event),
                    "checked-value": 1,
                    "unchecked-value": 0
                  }, {
                    default: withCtx(() => _cache[42] || (_cache[42] = [
                      createTextVNode("未经作者授权 禁止转载")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.recreate,
                    "onUpdate:checked": _cache[16] || (_cache[16] = ($event) => unref(options).config.recreate = $event),
                    "checked-value": 1,
                    "unchecked-value": -1,
                    title: "勾选即允许创作者基于您的投稿视频内容进行二创"
                  }, {
                    default: withCtx(() => _cache[43] || (_cache[43] = [
                      createTextVNode("二创声明")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "高级设置" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.dolby,
                      "onUpdate:checked": _cache[17] || (_cache[17] = ($event) => unref(options).config.dolby = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[44] || (_cache[44] = [
                        createTextVNode("杜比音效")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.hires,
                      "onUpdate:checked": _cache[18] || (_cache[18] = ($event) => unref(options).config.hires = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[45] || (_cache[45] = [
                        createTextVNode("Hi-Res无损音质 ")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, { label: "互动管理" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.closeDanmu,
                      "onUpdate:checked": _cache[19] || (_cache[19] = ($event) => unref(options).config.closeDanmu = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[46] || (_cache[46] = [
                        createTextVNode("关闭弹幕")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.closeReply,
                      "onUpdate:checked": _cache[20] || (_cache[20] = ($event) => unref(options).config.closeReply = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[47] || (_cache[47] = [
                        createTextVNode("关闭评论 ")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.selectiionReply,
                      "onUpdate:checked": _cache[21] || (_cache[21] = ($event) => unref(options).config.selectiionReply = $event),
                      "checked-value": 1,
                      "unchecked-value": 0
                    }, {
                      default: withCtx(() => _cache[48] || (_cache[48] = [
                        createTextVNode("开启精选评论 ")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(_component_n_radio_group, {
                      value: unref(options).config.is_only_self,
                      "onUpdate:value": _cache[22] || (_cache[22] = ($event) => unref(options).config.is_only_self = $event),
                      name: "radiogroup"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_space, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_radio, { value: 0 }, {
                              default: withCtx(() => _cache[49] || (_cache[49] = [
                                createTextVNode(" 公开可见 ")
                              ])),
                              _: 1
                            }),
                            createVNode(_component_n_radio, { value: 1 }, {
                              default: withCtx(() => _cache[50] || (_cache[50] = [
                                createTextVNode(" 仅自己可见 ")
                              ])),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createVNode(_component_n_checkbox, {
                      checked: unref(options).config.space_hidden,
                      "onUpdate:checked": _cache[23] || (_cache[23] = ($event) => unref(options).config.space_hidden = $event),
                      "checked-value": 1,
                      "unchecked-value": 2
                    }, {
                      default: withCtx(() => _cache[51] || (_cache[51] = [
                        createTextVNode("在个人空间-投稿中隐藏 ")
                      ])),
                      _: 1
                    }, 8, ["checked"])
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createVNode(_component_Tip, {
                  tip: "谨慎使用，可能会导致评论被阿瓦隆风控，以及可能的风控等级上升",
                  text: "自动评论"
                })
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_16, [
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.autoComment,
                    "onUpdate:checked": _cache[24] || (_cache[24] = ($event) => unref(options).config.autoComment = $event),
                    title: "审核后自动进行评论，续传不会被处理"
                  }, {
                    default: withCtx(() => _cache[52] || (_cache[52] = [
                      createTextVNode("自动评论")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.commentTop,
                    "onUpdate:checked": _cache[25] || (_cache[25] = ($event) => unref(options).config.commentTop = $event)
                  }, {
                    default: withCtx(() => _cache[53] || (_cache[53] = [
                      createTextVNode("置顶")
                    ])),
                    _: 1
                  }, 8, ["checked"])
                ])
              ]),
              _: 1
            }),
            unref(options).config.autoComment ? (openBlock(), createBlock(_component_n_form_item, { key: 6 }, {
              label: withCtx(() => _cache[54] || (_cache[54] = [
                createBaseVNode("span", { class: "inline-flex" }, [
                  createBaseVNode("span", null, "自动评论")
                ], -1)
              ])),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(options).config.comment,
                  "onUpdate:value": _cache[26] || (_cache[26] = ($event) => unref(options).config.comment = $event),
                  placeholder: "请输入评论内容",
                  clearable: "",
                  maxlength: 1e3,
                  "show-count": "",
                  type: "textarea",
                  autosize: {
                    minRows: 4
                  }
                }, null, 8, ["value"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_form_item, null, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_17, [
                  _cache[55] || (_cache[55] = createBaseVNode("span", null, "合集", -1)),
                  createVNode(_component_Tip, {
                    tip: `此处的合集为投稿中的合集功能，仅适用于设置合集的账户(${unref(options).config.uid})`
                  }, null, 8, ["tip"])
                ])
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_18, [
                  createVNode(_component_n_select, {
                    value: unref(options).config.seasonId,
                    "onUpdate:value": _cache[27] || (_cache[27] = ($event) => unref(options).config.seasonId = $event),
                    options: unref(seasonList),
                    placeholder: "请选择合集",
                    style: { "flex": "1", "min-width": "100px", "max-width": "250px" },
                    clearable: ""
                  }, null, 8, ["value", "options"]),
                  unref(options).config.seasonId ? (openBlock(), createBlock(_component_n_select, {
                    key: 0,
                    value: unref(options).config.sectionId,
                    "onUpdate:value": _cache[28] || (_cache[28] = ($event) => unref(options).config.sectionId = $event),
                    options: currentSections.value,
                    "label-field": "title",
                    "value-field": "id",
                    placeholder: "请选择小节",
                    style: { "flex": "1", "min-width": "100px", "max-width": "250px" },
                    clearable: ""
                  }, null, 8, ["value", "options"])) : createCommentVNode("", true),
                  createVNode(_component_n_checkbox, {
                    checked: unref(options).config.no_disturbance,
                    "onUpdate:checked": _cache[29] || (_cache[29] = ($event) => unref(options).config.no_disturbance = $event),
                    "checked-value": 1,
                    "unchecked-value": 0,
                    style: { "flex": "none" }
                  }, {
                    default: withCtx(() => _cache[56] || (_cache[56] = [
                      createTextVNode("此稿件不生成更新推送")
                    ])),
                    _: 1
                  }, 8, ["checked"]),
                  createVNode(_component_n_button, {
                    onClick: _cache[30] || (_cache[30] = ($event) => getSeasonList(true)),
                    type: "primary"
                  }, {
                    default: withCtx(() => _cache[57] || (_cache[57] = [
                      createTextVNode("强制刷新")
                    ])),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["label-width"]),
        props.showActionButtons ? (openBlock(), createElementBlock("div", _hoisted_19, [
          !isEditOnlyMode.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            unref(options).id !== "default" ? (openBlock(), createBlock(_component_n_button, {
              key: 0,
              text: "",
              type: "error",
              onClick: deletePreset
            }, {
              default: withCtx(() => _cache[58] || (_cache[58] = [
                createTextVNode("删除")
              ])),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_n_button, {
              type: "primary",
              style: { "margin-left": "10px" },
              onClick: rename
            }, {
              default: withCtx(() => _cache[59] || (_cache[59] = [
                createTextVNode("重命名")
              ])),
              _: 1
            }),
            createVNode(_component_n_button, {
              type: "primary",
              style: { "margin-left": "10px" },
              onClick: saveAnotherPreset
            }, {
              default: withCtx(() => _cache[60] || (_cache[60] = [
                createTextVNode("另存为")
              ])),
              _: 1
            })
          ], 64)) : createCommentVNode("", true),
          createVNode(_component_n_button, {
            type: "primary",
            style: { "margin-left": "10px" },
            onClick: savePreset
          }, {
            default: withCtx(() => _cache[61] || (_cache[61] = [
              createTextVNode("保存")
            ])),
            _: 1
          })
        ])) : createCommentVNode("", true),
        createVNode(_component_n_modal, {
          show: unref(nameModelVisible),
          "onUpdate:show": _cache[33] || (_cache[33] = ($event) => isRef(nameModelVisible) ? nameModelVisible.value = $event : null)
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px" },
              bordered: false,
              role: "dialog",
              "aria-modal": "true"
            }, {
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_20, [
                  createVNode(_component_n_button, {
                    onClick: _cache[32] || (_cache[32] = ($event) => nameModelVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[62] || (_cache[62] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    style: { "margin-left": "10px" },
                    onClick: saveAnotherPresetConfirm
                  }, {
                    default: withCtx(() => _cache[63] || (_cache[63] = [
                      createTextVNode("确认")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(tempPresetName),
                  "onUpdate:value": _cache[31] || (_cache[31] = ($event) => isRef(tempPresetName) ? tempPresetName.value = $event : null),
                  placeholder: "请输入预设名称",
                  maxlength: "15",
                  onKeyup: withKeys(saveAnotherPresetConfirm, ["enter"])
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const BiliSetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c916694"]]);
export {
  BiliSetting as B,
  __unplugin_components_2 as _,
  __unplugin_components_6 as a,
  __unplugin_components_2$1 as b,
  uploadTitleTemplate as u
};
