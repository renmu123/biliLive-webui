import { A as createTextVNode, C as computed, D as createElementBlock, F as h, H as nextTick, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, St as toRef, T as createBlock, Tt as unref, Z as openBlock, Zt as toDisplayString, at as watch, et as renderSlot, ft as init_reactivity_esm_bundler, j as createVNode, st as withCtx, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { t as Popover_default } from "./Popover-BND3al2G.js";
import { H as useMergedState, I as Input_default, z as useLocale } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { t as HelpCircleOutline_default } from "./HelpCircleOutline-C_D4MbKX.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { t as Add_default } from "./Add-BFTDA0WT.js";
import { Ar as rgba, Bn as resolveWrappedSlot, Jn as call, Nn as useConfig, Rn as resolveSlot, St as useTheme, Tt as useRtl, Xr as c, Zr as cB, jn as useFormItem, q as XButton, wr as on, xr as useMemo, xt as Icon_default, y as inputNumberLight } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/icons/Remove.mjs
init_runtime_core_esm_bundler();
var Remove_default = defineComponent({
	name: "Remove",
	render() {
		return h("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 512 512"
		}, h("line", {
			x1: "400",
			y1: "256",
			x2: "112",
			y2: "256",
			style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "
		}));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/input-number/src/styles/input-number.cssr.mjs
var input_number_cssr_default = c([cB("input-number-suffix", `
 display: inline-block;
 margin-right: 10px;
 `), cB("input-number-prefix", `
 display: inline-block;
 margin-left: 10px;
 `)]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/input-number/src/utils.mjs
function parse(value) {
	if (value === void 0 || value === null || typeof value === "string" && value.trim() === "") return null;
	return Number(value);
}
function isWipValue(value) {
	return value.includes(".") && (/^(-)?\d+.*(\.|0)$/.test(value) || /^-?\d*$/.test(value)) || value === "-" || value === "-0";
}
function validator(value) {
	if (value === void 0 || value === null) return true;
	if (Number.isNaN(value)) return false;
	return true;
}
function format(value, precision) {
	if (typeof value !== "number") return "";
	return precision === void 0 ? String(value) : value.toFixed(precision);
}
function parseNumber(number) {
	if (number === null) return null;
	if (typeof number === "number") return number;
	else {
		const parsedNumber = Number(number);
		if (Number.isNaN(parsedNumber)) return null;
		else return parsedNumber;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/input-number/src/InputNumber.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var HOLDING_CHANGE_THRESHOLD = 800;
var HOLDING_CHANGE_INTERVAL = 100;
var inputNumberProps = Object.assign(Object.assign({}, useTheme.props), {
	autofocus: Boolean,
	loading: {
		type: Boolean,
		default: void 0
	},
	placeholder: String,
	defaultValue: {
		type: Number,
		default: null
	},
	value: Number,
	step: {
		type: [Number, String],
		default: 1
	},
	min: [Number, String],
	max: [Number, String],
	size: String,
	disabled: {
		type: Boolean,
		default: void 0
	},
	validator: Function,
	bordered: {
		type: Boolean,
		default: void 0
	},
	showButton: {
		type: Boolean,
		default: true
	},
	buttonPlacement: {
		type: String,
		default: "right"
	},
	inputProps: Object,
	readonly: Boolean,
	clearable: Boolean,
	keyboard: {
		type: Object,
		default: {}
	},
	updateValueOnInput: {
		type: Boolean,
		default: true
	},
	round: {
		type: Boolean,
		default: void 0
	},
	parse: Function,
	format: Function,
	precision: Number,
	status: String,
	"onUpdate:value": [Function, Array],
	onUpdateValue: [Function, Array],
	onFocus: [Function, Array],
	onBlur: [Function, Array],
	onClear: [Function, Array],
	onChange: [Function, Array]
});
var InputNumber_default = defineComponent({
	name: "InputNumber",
	props: inputNumberProps,
	slots: Object,
	setup(props) {
		const { mergedBorderedRef, mergedClsPrefixRef, mergedRtlRef, mergedComponentPropsRef } = useConfig(props);
		const themeRef = useTheme("InputNumber", "-input-number", input_number_cssr_default, inputNumberLight, props, mergedClsPrefixRef);
		const { localeRef } = useLocale("InputNumber");
		const formItem = useFormItem(props, { mergedSize: (NFormItem) => {
			var _a, _b;
			const { size } = props;
			if (size) return size;
			const { mergedSize: formItemSize } = NFormItem || {};
			if (formItemSize === null || formItemSize === void 0 ? void 0 : formItemSize.value) return formItemSize.value;
			const configSize = (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.InputNumber) === null || _b === void 0 ? void 0 : _b.size;
			if (configSize) return configSize;
			return "medium";
		} });
		const { mergedSizeRef, mergedDisabledRef, mergedStatusRef } = formItem;
		const inputInstRef = ref(null);
		const minusButtonInstRef = ref(null);
		const addButtonInstRef = ref(null);
		const uncontrolledValueRef = ref(props.defaultValue);
		const controlledValueRef = toRef(props, "value");
		const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
		const displayedValueRef = ref("");
		const getPrecision = (value) => {
			const fraction = String(value).split(".")[1];
			return fraction ? fraction.length : 0;
		};
		const getMaxPrecision = (currentValue) => {
			const precisions = [
				props.min,
				props.max,
				props.step,
				currentValue
			].map((value) => {
				if (value === void 0) return 0;
				return getPrecision(value);
			});
			return Math.max(...precisions);
		};
		const mergedPlaceholderRef = useMemo(() => {
			const { placeholder } = props;
			if (placeholder !== void 0) return placeholder;
			return localeRef.value.placeholder;
		});
		const mergedStepRef = useMemo(() => {
			const parsedNumber = parseNumber(props.step);
			if (parsedNumber !== null) return parsedNumber === 0 ? 1 : Math.abs(parsedNumber);
			return 1;
		});
		const mergedMinRef = useMemo(() => {
			const parsedNumber = parseNumber(props.min);
			if (parsedNumber !== null) return parsedNumber;
			else return null;
		});
		const mergedMaxRef = useMemo(() => {
			const parsedNumber = parseNumber(props.max);
			if (parsedNumber !== null) return parsedNumber;
			else return null;
		});
		const deriveDisplayedValueFromValue = () => {
			const { value: mergedValue } = mergedValueRef;
			if (validator(mergedValue)) {
				const { format: formatProp, precision } = props;
				if (formatProp) displayedValueRef.value = formatProp(mergedValue);
				else if (mergedValue === null || precision === void 0 || getPrecision(mergedValue) > precision) displayedValueRef.value = format(mergedValue, void 0);
				else displayedValueRef.value = format(mergedValue, precision);
			} else displayedValueRef.value = String(mergedValue);
		};
		deriveDisplayedValueFromValue();
		const doUpdateValue = (value) => {
			const { value: mergedValue } = mergedValueRef;
			if (value === mergedValue) {
				deriveDisplayedValueFromValue();
				return;
			}
			const { "onUpdate:value": _onUpdateValue, onUpdateValue, onChange } = props;
			const { nTriggerFormInput, nTriggerFormChange } = formItem;
			if (onChange) call(onChange, value);
			if (onUpdateValue) call(onUpdateValue, value);
			if (_onUpdateValue) call(_onUpdateValue, value);
			uncontrolledValueRef.value = value;
			nTriggerFormInput();
			nTriggerFormChange();
		};
		const deriveValueFromDisplayedValue = ({ offset, doUpdateIfValid, fixPrecision, isInputing }) => {
			const { value: displayedValue } = displayedValueRef;
			if (isInputing && isWipValue(displayedValue)) return false;
			const parsedValue = (props.parse || parse)(displayedValue);
			if (parsedValue === null) {
				if (doUpdateIfValid) doUpdateValue(null);
				return null;
			}
			if (validator(parsedValue)) {
				const currentPrecision = getPrecision(parsedValue);
				const { precision } = props;
				if (precision !== void 0 && precision < currentPrecision && !fixPrecision) return false;
				let nextValue = Number.parseFloat((parsedValue + offset).toFixed(precision !== null && precision !== void 0 ? precision : getMaxPrecision(parsedValue)));
				if (validator(nextValue)) {
					const { value: mergedMax } = mergedMaxRef;
					const { value: mergedMin } = mergedMinRef;
					if (mergedMax !== null && nextValue > mergedMax) {
						if (!doUpdateIfValid || isInputing) return false;
						nextValue = mergedMax;
					}
					if (mergedMin !== null && nextValue < mergedMin) {
						if (!doUpdateIfValid || isInputing) return false;
						nextValue = mergedMin;
					}
					if (props.validator && !props.validator(nextValue)) return false;
					if (doUpdateIfValid) doUpdateValue(nextValue);
					return nextValue;
				}
			}
			return false;
		};
		const displayedValueInvalidRef = useMemo(() => {
			return deriveValueFromDisplayedValue({
				offset: 0,
				doUpdateIfValid: false,
				isInputing: false,
				fixPrecision: false
			}) === false;
		});
		const minusableRef = useMemo(() => {
			const { value: mergedValue } = mergedValueRef;
			if (props.validator && mergedValue === null) return false;
			const { value: mergedStep } = mergedStepRef;
			return deriveValueFromDisplayedValue({
				offset: -mergedStep,
				doUpdateIfValid: false,
				isInputing: false,
				fixPrecision: false
			}) !== false;
		});
		const addableRef = useMemo(() => {
			const { value: mergedValue } = mergedValueRef;
			if (props.validator && mergedValue === null) return false;
			const { value: mergedStep } = mergedStepRef;
			return deriveValueFromDisplayedValue({
				offset: +mergedStep,
				doUpdateIfValid: false,
				isInputing: false,
				fixPrecision: false
			}) !== false;
		});
		function doFocus(e) {
			const { onFocus } = props;
			const { nTriggerFormFocus } = formItem;
			if (onFocus) call(onFocus, e);
			nTriggerFormFocus();
		}
		function doBlur(e) {
			var _a, _b;
			if (e.target === ((_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef)) return;
			const value = deriveValueFromDisplayedValue({
				offset: 0,
				doUpdateIfValid: true,
				isInputing: false,
				fixPrecision: true
			});
			if (value !== false) {
				const inputElRef = (_b = inputInstRef.value) === null || _b === void 0 ? void 0 : _b.inputElRef;
				if (inputElRef) inputElRef.value = String(value || "");
				if (mergedValueRef.value === value) deriveDisplayedValueFromValue();
			} else deriveDisplayedValueFromValue();
			const { onBlur } = props;
			const { nTriggerFormBlur } = formItem;
			if (onBlur) call(onBlur, e);
			nTriggerFormBlur();
			nextTick(() => {
				deriveDisplayedValueFromValue();
			});
		}
		function doClear(e) {
			const { onClear } = props;
			if (onClear) call(onClear, e);
		}
		function doAdd() {
			const { value: addable } = addableRef;
			if (!addable) {
				clearAddHoldTimeout();
				return;
			}
			const { value: mergedValue } = mergedValueRef;
			if (mergedValue === null) {
				if (!props.validator) doUpdateValue(createValidValue());
			} else {
				const { value: mergedStep } = mergedStepRef;
				deriveValueFromDisplayedValue({
					offset: mergedStep,
					doUpdateIfValid: true,
					isInputing: false,
					fixPrecision: true
				});
			}
		}
		function doMinus() {
			const { value: minusable } = minusableRef;
			if (!minusable) {
				clearMinusHoldTimeout();
				return;
			}
			const { value: mergedValue } = mergedValueRef;
			if (mergedValue === null) {
				if (!props.validator) doUpdateValue(createValidValue());
			} else {
				const { value: mergedStep } = mergedStepRef;
				deriveValueFromDisplayedValue({
					offset: -mergedStep,
					doUpdateIfValid: true,
					isInputing: false,
					fixPrecision: true
				});
			}
		}
		const handleFocus = doFocus;
		const handleBlur = doBlur;
		function createValidValue() {
			if (props.validator) return null;
			const { value: mergedMin } = mergedMinRef;
			const { value: mergedMax } = mergedMaxRef;
			if (mergedMin !== null) return Math.max(0, mergedMin);
			else if (mergedMax !== null) return Math.min(0, mergedMax);
			else return 0;
		}
		function handleClear(e) {
			doClear(e);
			doUpdateValue(null);
		}
		function handleMouseDown(e) {
			var _a, _b, _c;
			if ((_a = addButtonInstRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.target)) e.preventDefault();
			if ((_b = minusButtonInstRef.value) === null || _b === void 0 ? void 0 : _b.$el.contains(e.target)) e.preventDefault();
			(_c = inputInstRef.value) === null || _c === void 0 || _c.activate();
		}
		let minusHoldStateIntervalId = null;
		let addHoldStateIntervalId = null;
		let firstMinusMousedownId = null;
		function clearMinusHoldTimeout() {
			if (firstMinusMousedownId) {
				window.clearTimeout(firstMinusMousedownId);
				firstMinusMousedownId = null;
			}
			if (minusHoldStateIntervalId) {
				window.clearInterval(minusHoldStateIntervalId);
				minusHoldStateIntervalId = null;
			}
		}
		let firstAddMousedownId = null;
		function clearAddHoldTimeout() {
			if (firstAddMousedownId) {
				window.clearTimeout(firstAddMousedownId);
				firstAddMousedownId = null;
			}
			if (addHoldStateIntervalId) {
				window.clearInterval(addHoldStateIntervalId);
				addHoldStateIntervalId = null;
			}
		}
		function handleMinusMousedown() {
			clearMinusHoldTimeout();
			firstMinusMousedownId = window.setTimeout(() => {
				minusHoldStateIntervalId = window.setInterval(() => {
					doMinus();
				}, HOLDING_CHANGE_INTERVAL);
			}, HOLDING_CHANGE_THRESHOLD);
			on("mouseup", document, clearMinusHoldTimeout, { once: true });
		}
		function handleAddMousedown() {
			clearAddHoldTimeout();
			firstAddMousedownId = window.setTimeout(() => {
				addHoldStateIntervalId = window.setInterval(() => {
					doAdd();
				}, HOLDING_CHANGE_INTERVAL);
			}, HOLDING_CHANGE_THRESHOLD);
			on("mouseup", document, clearAddHoldTimeout, { once: true });
		}
		const handleAddClick = () => {
			if (addHoldStateIntervalId) return;
			doAdd();
		};
		const handleMinusClick = () => {
			if (minusHoldStateIntervalId) return;
			doMinus();
		};
		function handleKeyDown(e) {
			var _a, _b;
			if (e.key === "Enter") {
				if (e.target === ((_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef)) return;
				if (deriveValueFromDisplayedValue({
					offset: 0,
					doUpdateIfValid: true,
					isInputing: false,
					fixPrecision: true
				}) !== false) (_b = inputInstRef.value) === null || _b === void 0 || _b.deactivate();
			} else if (e.key === "ArrowUp") {
				if (!addableRef.value) return;
				if (props.keyboard.ArrowUp === false) return;
				e.preventDefault();
				if (deriveValueFromDisplayedValue({
					offset: 0,
					doUpdateIfValid: true,
					isInputing: false,
					fixPrecision: true
				}) !== false) doAdd();
			} else if (e.key === "ArrowDown") {
				if (!minusableRef.value) return;
				if (props.keyboard.ArrowDown === false) return;
				e.preventDefault();
				if (deriveValueFromDisplayedValue({
					offset: 0,
					doUpdateIfValid: true,
					isInputing: false,
					fixPrecision: true
				}) !== false) doMinus();
			}
		}
		function handleUpdateDisplayedValue(value) {
			displayedValueRef.value = value;
			if (props.updateValueOnInput && !props.format && !props.parse && props.precision === void 0) deriveValueFromDisplayedValue({
				offset: 0,
				doUpdateIfValid: true,
				isInputing: true,
				fixPrecision: false
			});
		}
		watch(mergedValueRef, () => {
			deriveDisplayedValueFromValue();
		});
		const exposedMethods = {
			focus: () => {
				var _a;
				return (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
			},
			blur: () => {
				var _a;
				return (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.blur();
			},
			select: () => {
				var _a;
				return (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.select();
			}
		};
		const rtlEnabledRef = useRtl("InputNumber", mergedRtlRef, mergedClsPrefixRef);
		return Object.assign(Object.assign({}, exposedMethods), {
			rtlEnabled: rtlEnabledRef,
			inputInstRef,
			minusButtonInstRef,
			addButtonInstRef,
			mergedClsPrefix: mergedClsPrefixRef,
			mergedBordered: mergedBorderedRef,
			uncontrolledValue: uncontrolledValueRef,
			mergedValue: mergedValueRef,
			mergedPlaceholder: mergedPlaceholderRef,
			displayedValueInvalid: displayedValueInvalidRef,
			mergedSize: mergedSizeRef,
			mergedDisabled: mergedDisabledRef,
			displayedValue: displayedValueRef,
			addable: addableRef,
			minusable: minusableRef,
			mergedStatus: mergedStatusRef,
			handleFocus,
			handleBlur,
			handleClear,
			handleMouseDown,
			handleAddClick,
			handleMinusClick,
			handleAddMousedown,
			handleMinusMousedown,
			handleKeyDown,
			handleUpdateDisplayedValue,
			mergedTheme: themeRef,
			inputThemeOverrides: {
				paddingSmall: "0 8px 0 10px",
				paddingMedium: "0 8px 0 12px",
				paddingLarge: "0 8px 0 14px"
			},
			buttonThemeOverrides: computed(() => {
				const { self: { iconColorDisabled } } = themeRef.value;
				const [r, g, b, a] = rgba(iconColorDisabled);
				return {
					textColorTextDisabled: `rgb(${r}, ${g}, ${b})`,
					opacityDisabled: `${a}`
				};
			})
		});
	},
	render() {
		const { mergedClsPrefix, $slots } = this;
		const renderMinusButton = () => {
			return h(XButton, {
				text: true,
				disabled: !this.minusable || this.mergedDisabled || this.readonly,
				focusable: false,
				theme: this.mergedTheme.peers.Button,
				themeOverrides: this.mergedTheme.peerOverrides.Button,
				builtinThemeOverrides: this.buttonThemeOverrides,
				onClick: this.handleMinusClick,
				onMousedown: this.handleMinusMousedown,
				ref: "minusButtonInstRef"
			}, { icon: () => resolveSlot($slots["minus-icon"], () => [h(Icon_default, { clsPrefix: mergedClsPrefix }, { default: () => h(Remove_default, null) })]) });
		};
		const renderAddButton = () => {
			return h(XButton, {
				text: true,
				disabled: !this.addable || this.mergedDisabled || this.readonly,
				focusable: false,
				theme: this.mergedTheme.peers.Button,
				themeOverrides: this.mergedTheme.peerOverrides.Button,
				builtinThemeOverrides: this.buttonThemeOverrides,
				onClick: this.handleAddClick,
				onMousedown: this.handleAddMousedown,
				ref: "addButtonInstRef"
			}, { icon: () => resolveSlot($slots["add-icon"], () => [h(Icon_default, { clsPrefix: mergedClsPrefix }, { default: () => h(Add_default, null) })]) });
		};
		return h("div", { class: [`${mergedClsPrefix}-input-number`, this.rtlEnabled && `${mergedClsPrefix}-input-number--rtl`] }, h(Input_default, {
			ref: "inputInstRef",
			autofocus: this.autofocus,
			status: this.mergedStatus,
			bordered: this.mergedBordered,
			loading: this.loading,
			value: this.displayedValue,
			onUpdateValue: this.handleUpdateDisplayedValue,
			theme: this.mergedTheme.peers.Input,
			themeOverrides: this.mergedTheme.peerOverrides.Input,
			builtinThemeOverrides: this.inputThemeOverrides,
			size: this.mergedSize,
			placeholder: this.mergedPlaceholder,
			disabled: this.mergedDisabled,
			readonly: this.readonly,
			round: this.round,
			textDecoration: this.displayedValueInvalid ? "line-through" : void 0,
			onFocus: this.handleFocus,
			onBlur: this.handleBlur,
			onKeydown: this.handleKeyDown,
			onMousedown: this.handleMouseDown,
			onClear: this.handleClear,
			clearable: this.clearable,
			inputProps: this.inputProps,
			internalLoadingBeforeSuffix: true
		}, {
			prefix: () => {
				var _a;
				return this.showButton && this.buttonPlacement === "both" ? [renderMinusButton(), resolveWrappedSlot($slots.prefix, (children) => {
					if (children) return h("span", { class: `${mergedClsPrefix}-input-number-prefix` }, children);
					return null;
				})] : (_a = $slots.prefix) === null || _a === void 0 ? void 0 : _a.call($slots);
			},
			suffix: () => {
				var _a;
				return this.showButton ? [
					resolveWrappedSlot($slots.suffix, (children) => {
						if (children) return h("span", { class: `${mergedClsPrefix}-input-number-suffix` }, children);
						return null;
					}),
					this.buttonPlacement === "right" ? renderMinusButton() : null,
					renderAddButton()
				] : (_a = $slots.suffix) === null || _a === void 0 ? void 0 : _a.call($slots);
			}
		}));
	}
});
//#endregion
//#region src/renderer/src/components/Tip.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = { style: {
	"display": "inline-flex",
	"cursor": "help"
} };
var _hoisted_2 = ["innerHTML"];
//#endregion
//#region src/renderer/src/components/Tip.vue
var Tip_default = /* @__PURE__ */ defineComponent({
	__name: "Tip",
	props: {
		size: { default: 18 },
		tip: { default: "" },
		text: {},
		placement: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			const _component_n_icon = NIcon;
			const _component_n_popover = Popover_default;
			return openBlock(), createBlock(_component_n_popover, {
				trigger: "hover",
				placement: _ctx.placement
			}, {
				trigger: withCtx(() => [createBaseVNode("span", _hoisted_1, [createTextVNode(toDisplayString(props.text), 1), createVNode(_component_n_icon, { size: props.size }, {
					default: withCtx(() => [createVNode(unref(HelpCircleOutline_default))]),
					_: 1
				}, 8, ["size"])])]),
				default: withCtx(() => [props.tip ? (openBlock(), createElementBlock("span", {
					key: 0,
					innerHTML: props.tip
				}, null, 8, _hoisted_2)) : renderSlot(_ctx.$slots, "default", { key: 1 })]),
				_: 3
			}, 8, ["placement"]);
		};
	}
});
//#endregion
export { InputNumber_default as n, Tip_default as t };
