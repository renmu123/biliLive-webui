import { C as computed, F as h, L as init_runtime_core_esm_bundler, M as defineComponent, Q as provide, R as inject, St as toRef, ft as init_reactivity_esm_bundler, yt as ref } from "./request-CkCeAZAO.js";
import { H as useMergedState } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { n as getSlot } from "./Space-B3s3-R0l.js";
import { $r as cE, Bn as resolveWrappedSlot, Jn as call, M as radioLight, Mn as useThemeClass, Nn as useConfig, St as useTheme, Tt as useRtl, Xr as c, Zr as cB, _r as createInjectionKey, ei as cM, jn as useFormItem, ni as createKey, qn as flatten, ti as cNotM, xr as useMemo } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/radio/src/styles/radio.cssr.mjs
var radio_cssr_default = cB("radio", `
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`, [
	cM("checked", [cE("dot", `
 background-color: var(--n-color-active);
 `)]),
	cE("dot-wrapper", `
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),
	cB("radio-input", `
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),
	cE("dot", `
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `, [c("&::before", `
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `), cM("checked", { boxShadow: "var(--n-box-shadow-active)" }, [c("&::before", `
 opacity: 1;
 transform: scale(1);
 `)])]),
	cE("label", `
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),
	cNotM("disabled", `
 cursor: pointer;
 `, [c("&:hover", [cE("dot", { boxShadow: "var(--n-box-shadow-hover)" })]), cM("focus", [c("&:not(:active)", [cE("dot", { boxShadow: "var(--n-box-shadow-focus)" })])])]),
	cM("disabled", `
 cursor: not-allowed;
 `, [
		cE("dot", {
			boxShadow: "var(--n-box-shadow-disabled)",
			backgroundColor: "var(--n-color-disabled)"
		}, [c("&::before", { backgroundColor: "var(--n-dot-color-disabled)" }), cM("checked", `
 opacity: 1;
 `)]),
		cE("label", { color: "var(--n-text-color-disabled)" }),
		cB("radio-input", `
 cursor: not-allowed;
 `)
	])
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/radio/src/use-radio.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var radioBaseProps = {
	name: String,
	value: {
		type: [
			String,
			Number,
			Boolean
		],
		default: "on"
	},
	checked: {
		type: Boolean,
		default: void 0
	},
	defaultChecked: Boolean,
	disabled: {
		type: Boolean,
		default: void 0
	},
	label: String,
	size: String,
	onUpdateChecked: [Function, Array],
	"onUpdate:checked": [Function, Array],
	checkedValue: {
		type: Boolean,
		default: void 0
	}
};
var radioGroupInjectionKey = createInjectionKey("n-radio-group");
function setup(props) {
	const NRadioGroup = inject(radioGroupInjectionKey, null);
	const { mergedClsPrefixRef, mergedComponentPropsRef } = useConfig(props);
	const formItem = useFormItem(props, {
		mergedSize(NFormItem) {
			var _a, _b;
			const { size } = props;
			if (size !== void 0) return size;
			if (NRadioGroup) {
				const { mergedSizeRef: { value: mergedSize } } = NRadioGroup;
				if (mergedSize !== void 0) return mergedSize;
			}
			if (NFormItem) return NFormItem.mergedSize.value;
			const configSize = (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Radio) === null || _b === void 0 ? void 0 : _b.size;
			if (configSize) return configSize;
			return "medium";
		},
		mergedDisabled(NFormItem) {
			if (props.disabled) return true;
			if (NRadioGroup === null || NRadioGroup === void 0 ? void 0 : NRadioGroup.disabledRef.value) return true;
			if (NFormItem === null || NFormItem === void 0 ? void 0 : NFormItem.disabled.value) return true;
			return false;
		}
	});
	const { mergedSizeRef, mergedDisabledRef } = formItem;
	const inputRef = ref(null);
	const labelRef = ref(null);
	const uncontrolledCheckedRef = ref(props.defaultChecked);
	const controlledCheckedRef = toRef(props, "checked");
	const mergedCheckedRef = useMergedState(controlledCheckedRef, uncontrolledCheckedRef);
	const renderSafeCheckedRef = useMemo(() => {
		if (NRadioGroup) return NRadioGroup.valueRef.value === props.value;
		return mergedCheckedRef.value;
	});
	const mergedNameRef = useMemo(() => {
		const { name } = props;
		if (name !== void 0) return name;
		if (NRadioGroup) return NRadioGroup.nameRef.value;
	});
	const focusRef = ref(false);
	function doUpdateChecked() {
		if (NRadioGroup) {
			const { doUpdateValue } = NRadioGroup;
			const { value } = props;
			call(doUpdateValue, value);
		} else {
			const { onUpdateChecked, "onUpdate:checked": _onUpdateChecked } = props;
			const { nTriggerFormInput, nTriggerFormChange } = formItem;
			if (onUpdateChecked) call(onUpdateChecked, true);
			if (_onUpdateChecked) call(_onUpdateChecked, true);
			nTriggerFormInput();
			nTriggerFormChange();
			uncontrolledCheckedRef.value = true;
		}
	}
	function toggle() {
		if (mergedDisabledRef.value) return;
		if (!renderSafeCheckedRef.value) doUpdateChecked();
	}
	function handleRadioInputChange() {
		toggle();
		if (inputRef.value) inputRef.value.checked = renderSafeCheckedRef.value;
	}
	function handleRadioInputBlur() {
		focusRef.value = false;
	}
	function handleRadioInputFocus() {
		focusRef.value = true;
	}
	return {
		mergedClsPrefix: NRadioGroup ? NRadioGroup.mergedClsPrefixRef : mergedClsPrefixRef,
		inputRef,
		labelRef,
		mergedName: mergedNameRef,
		mergedDisabled: mergedDisabledRef,
		renderSafeChecked: renderSafeCheckedRef,
		focus: focusRef,
		mergedSize: mergedSizeRef,
		handleRadioInputChange,
		handleRadioInputBlur,
		handleRadioInputFocus
	};
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/radio/src/Radio.mjs
init_runtime_core_esm_bundler();
var radioProps = Object.assign(Object.assign({}, useTheme.props), radioBaseProps);
var Radio_default = defineComponent({
	name: "Radio",
	props: radioProps,
	setup(props) {
		const radio = setup(props);
		const themeRef = useTheme("Radio", "-radio", radio_cssr_default, radioLight, props, radio.mergedClsPrefix);
		const cssVarsRef = computed(() => {
			const { mergedSize: { value: size } } = radio;
			const { common: { cubicBezierEaseInOut }, self: { boxShadow, boxShadowActive, boxShadowDisabled, boxShadowFocus, boxShadowHover, color, colorDisabled, colorActive, textColor, textColorDisabled, dotColorActive, dotColorDisabled, labelPadding, labelLineHeight, labelFontWeight, [createKey("fontSize", size)]: fontSize, [createKey("radioSize", size)]: radioSize } } = themeRef.value;
			return {
				"--n-bezier": cubicBezierEaseInOut,
				"--n-label-line-height": labelLineHeight,
				"--n-label-font-weight": labelFontWeight,
				"--n-box-shadow": boxShadow,
				"--n-box-shadow-active": boxShadowActive,
				"--n-box-shadow-disabled": boxShadowDisabled,
				"--n-box-shadow-focus": boxShadowFocus,
				"--n-box-shadow-hover": boxShadowHover,
				"--n-color": color,
				"--n-color-active": colorActive,
				"--n-color-disabled": colorDisabled,
				"--n-dot-color-active": dotColorActive,
				"--n-dot-color-disabled": dotColorDisabled,
				"--n-font-size": fontSize,
				"--n-radio-size": radioSize,
				"--n-text-color": textColor,
				"--n-text-color-disabled": textColorDisabled,
				"--n-label-padding": labelPadding
			};
		});
		const { inlineThemeDisabled, mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
		const rtlEnabledRef = useRtl("Radio", mergedRtlRef, mergedClsPrefixRef);
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("radio", computed(() => radio.mergedSize.value[0]), cssVarsRef, props) : void 0;
		return Object.assign(radio, {
			rtlEnabled: rtlEnabledRef,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		});
	},
	render() {
		const { $slots, mergedClsPrefix, onRender, label } = this;
		onRender === null || onRender === void 0 || onRender();
		return h("label", {
			class: [
				`${mergedClsPrefix}-radio`,
				this.themeClass,
				this.rtlEnabled && `${mergedClsPrefix}-radio--rtl`,
				this.mergedDisabled && `${mergedClsPrefix}-radio--disabled`,
				this.renderSafeChecked && `${mergedClsPrefix}-radio--checked`,
				this.focus && `${mergedClsPrefix}-radio--focus`
			],
			style: this.cssVars
		}, h("div", { class: `${mergedClsPrefix}-radio__dot-wrapper` }, "\xA0", h("div", { class: [`${mergedClsPrefix}-radio__dot`, this.renderSafeChecked && `${mergedClsPrefix}-radio__dot--checked`] }), h("input", {
			ref: "inputRef",
			type: "radio",
			class: `${mergedClsPrefix}-radio-input`,
			value: this.value,
			name: this.mergedName,
			checked: this.renderSafeChecked,
			disabled: this.mergedDisabled,
			onChange: this.handleRadioInputChange,
			onFocus: this.handleRadioInputFocus,
			onBlur: this.handleRadioInputBlur
		})), resolveWrappedSlot($slots.default, (children) => {
			if (!children && !label) return null;
			return h("div", {
				ref: "labelRef",
				class: `${mergedClsPrefix}-radio__label`
			}, children || label);
		}));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/radio/src/styles/radio-group.cssr.mjs
var radio_group_cssr_default = cB("radio-group", `
 display: inline-block;
 font-size: var(--n-font-size);
`, [
	cE("splitor", `
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `, [cM("checked", { backgroundColor: "var(--n-button-border-color-active)" }), cM("disabled", { opacity: "var(--n-opacity-disabled)" })]),
	cM("button-group", `
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [cB("radio-button", {
		height: "var(--n-height)",
		lineHeight: "var(--n-height)"
	}), cE("splitor", { height: "var(--n-height)" })]),
	cB("radio-button", `
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `, [
		cB("radio-input", `
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),
		cE("state-border", `
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),
		c("&:first-child", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `, [cE("state-border", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),
		c("&:last-child", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `, [cE("state-border", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),
		cNotM("disabled", `
 cursor: pointer;
 `, [c("&:hover", [cE("state-border", `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `), cNotM("checked", { color: "var(--n-button-text-color-hover)" })]), cM("focus", [c("&:not(:active)", [cE("state-border", { boxShadow: "var(--n-button-box-shadow-focus)" })])])]),
		cM("checked", `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),
		cM("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)
	])
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/radio/src/RadioGroup.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function mapSlot(defaultSlot, value, clsPrefix) {
	var _a;
	const children = [];
	let isButtonGroup = false;
	for (let i = 0; i < defaultSlot.length; ++i) {
		const wrappedInstance = defaultSlot[i];
		const name = (_a = wrappedInstance.type) === null || _a === void 0 ? void 0 : _a.name;
		if (name === "RadioButton") isButtonGroup = true;
		const instanceProps = wrappedInstance.props;
		if (name !== "RadioButton") {
			children.push(wrappedInstance);
			continue;
		}
		if (i === 0) children.push(wrappedInstance);
		else {
			const lastInstanceProps = children[children.length - 1].props;
			const lastInstanceChecked = value === lastInstanceProps.value;
			const lastInstanceDisabled = lastInstanceProps.disabled;
			const currentInstanceChecked = value === instanceProps.value;
			const currentInstanceDisabled = instanceProps.disabled;
			/**
			* Priority of button splitor:
			* !disabled  checked >
			*  disabled  checked >
			* !disabled !checked >
			*  disabled !checked
			*/
			const lastInstancePriority = (lastInstanceChecked ? 2 : 0) + (!lastInstanceDisabled ? 1 : 0);
			const currentInstancePriority = (currentInstanceChecked ? 2 : 0) + (!currentInstanceDisabled ? 1 : 0);
			const lastInstanceClass = {
				[`${clsPrefix}-radio-group__splitor--disabled`]: lastInstanceDisabled,
				[`${clsPrefix}-radio-group__splitor--checked`]: lastInstanceChecked
			};
			const currentInstanceClass = {
				[`${clsPrefix}-radio-group__splitor--disabled`]: currentInstanceDisabled,
				[`${clsPrefix}-radio-group__splitor--checked`]: currentInstanceChecked
			};
			const splitorClass = lastInstancePriority < currentInstancePriority ? currentInstanceClass : lastInstanceClass;
			children.push(h("div", { class: [`${clsPrefix}-radio-group__splitor`, splitorClass] }), wrappedInstance);
		}
	}
	return {
		children,
		isButtonGroup
	};
}
var radioGroupProps = Object.assign(Object.assign({}, useTheme.props), {
	name: String,
	value: [
		String,
		Number,
		Boolean
	],
	defaultValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: null
	},
	size: String,
	disabled: {
		type: Boolean,
		default: void 0
	},
	"onUpdate:value": [Function, Array],
	onUpdateValue: [Function, Array]
});
var RadioGroup_default = defineComponent({
	name: "RadioGroup",
	props: radioGroupProps,
	setup(props) {
		const selfElRef = ref(null);
		const { mergedSizeRef, mergedDisabledRef, nTriggerFormChange, nTriggerFormInput, nTriggerFormBlur, nTriggerFormFocus } = useFormItem(props);
		const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
		const themeRef = useTheme("Radio", "-radio-group", radio_group_cssr_default, radioLight, props, mergedClsPrefixRef);
		const uncontrolledValueRef = ref(props.defaultValue);
		const controlledValueRef = toRef(props, "value");
		const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
		function doUpdateValue(value) {
			const { onUpdateValue, "onUpdate:value": _onUpdateValue } = props;
			if (onUpdateValue) call(onUpdateValue, value);
			if (_onUpdateValue) call(_onUpdateValue, value);
			uncontrolledValueRef.value = value;
			nTriggerFormChange();
			nTriggerFormInput();
		}
		function handleFocusin(e) {
			const { value: selfEl } = selfElRef;
			if (!selfEl) return;
			if (selfEl.contains(e.relatedTarget)) return;
			nTriggerFormFocus();
		}
		function handleFocusout(e) {
			const { value: selfEl } = selfElRef;
			if (!selfEl) return;
			if (selfEl.contains(e.relatedTarget)) return;
			nTriggerFormBlur();
		}
		provide(radioGroupInjectionKey, {
			mergedClsPrefixRef,
			nameRef: toRef(props, "name"),
			valueRef: mergedValueRef,
			disabledRef: mergedDisabledRef,
			mergedSizeRef,
			doUpdateValue
		});
		const rtlEnabledRef = useRtl("Radio", mergedRtlRef, mergedClsPrefixRef);
		const cssVarsRef = computed(() => {
			const { value: size } = mergedSizeRef;
			const { common: { cubicBezierEaseInOut }, self: { buttonBorderColor, buttonBorderColorActive, buttonBorderRadius, buttonBoxShadow, buttonBoxShadowFocus, buttonBoxShadowHover, buttonColor, buttonColorActive, buttonTextColor, buttonTextColorActive, buttonTextColorHover, opacityDisabled, [createKey("buttonHeight", size)]: height, [createKey("fontSize", size)]: fontSize } } = themeRef.value;
			return {
				"--n-font-size": fontSize,
				"--n-bezier": cubicBezierEaseInOut,
				"--n-button-border-color": buttonBorderColor,
				"--n-button-border-color-active": buttonBorderColorActive,
				"--n-button-border-radius": buttonBorderRadius,
				"--n-button-box-shadow": buttonBoxShadow,
				"--n-button-box-shadow-focus": buttonBoxShadowFocus,
				"--n-button-box-shadow-hover": buttonBoxShadowHover,
				"--n-button-color": buttonColor,
				"--n-button-color-active": buttonColorActive,
				"--n-button-text-color": buttonTextColor,
				"--n-button-text-color-hover": buttonTextColorHover,
				"--n-button-text-color-active": buttonTextColorActive,
				"--n-height": height,
				"--n-opacity-disabled": opacityDisabled
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("radio-group", computed(() => mergedSizeRef.value[0]), cssVarsRef, props) : void 0;
		return {
			selfElRef,
			rtlEnabled: rtlEnabledRef,
			mergedClsPrefix: mergedClsPrefixRef,
			mergedValue: mergedValueRef,
			handleFocusout,
			handleFocusin,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		};
	},
	render() {
		var _a;
		const { mergedValue, mergedClsPrefix, handleFocusin, handleFocusout } = this;
		const { children, isButtonGroup } = mapSlot(flatten(getSlot(this)), mergedValue, mergedClsPrefix);
		(_a = this.onRender) === null || _a === void 0 || _a.call(this);
		return h("div", {
			onFocusin: handleFocusin,
			onFocusout: handleFocusout,
			ref: "selfElRef",
			class: [
				`${mergedClsPrefix}-radio-group`,
				this.rtlEnabled && `${mergedClsPrefix}-radio-group--rtl`,
				this.themeClass,
				isButtonGroup && `${mergedClsPrefix}-radio-group--button-group`
			],
			style: this.cssVars
		}, children);
	}
});
//#endregion
export { Radio_default as n, RadioGroup_default as t };
