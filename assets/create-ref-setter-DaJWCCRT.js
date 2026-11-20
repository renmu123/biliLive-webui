import { G as onBeforeUnmount, L as init_runtime_core_esm_bundler, W as onBeforeMount, _t as reactive, at as watch, ft as init_reactivity_esm_bundler, vt as readonly } from "./request-CkCeAZAO.js";
import { Cr as off, wr as on, yr as hasInstance } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/vooks@0.2.12_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vooks/es/use-keyboard.js
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useKeyboard(options = {}, enabledRef) {
	const state = reactive({
		ctrl: false,
		command: false,
		win: false,
		shift: false,
		tab: false
	});
	const { keydown, keyup } = options;
	const keydownHandler = (e) => {
		switch (e.key) {
			case "Control":
				state.ctrl = true;
				break;
			case "Meta":
				state.command = true;
				state.win = true;
				break;
			case "Shift":
				state.shift = true;
				break;
			case "Tab": state.tab = true;
		}
		if (keydown !== void 0) Object.keys(keydown).forEach((key) => {
			if (key !== e.key) return;
			const handler = keydown[key];
			if (typeof handler === "function") handler(e);
			else {
				const { stop = false, prevent = false } = handler;
				if (stop) e.stopPropagation();
				if (prevent) e.preventDefault();
				handler.handler(e);
			}
		});
	};
	const keyupHandler = (e) => {
		switch (e.key) {
			case "Control":
				state.ctrl = false;
				break;
			case "Meta":
				state.command = false;
				state.win = false;
				break;
			case "Shift":
				state.shift = false;
				break;
			case "Tab": state.tab = false;
		}
		if (keyup !== void 0) Object.keys(keyup).forEach((key) => {
			if (key !== e.key) return;
			const handler = keyup[key];
			if (typeof handler === "function") handler(e);
			else {
				const { stop = false, prevent = false } = handler;
				if (stop) e.stopPropagation();
				if (prevent) e.preventDefault();
				handler.handler(e);
			}
		});
	};
	const setup = () => {
		if (enabledRef === void 0 || enabledRef.value) {
			on("keydown", document, keydownHandler);
			on("keyup", document, keyupHandler);
		}
		if (enabledRef !== void 0) watch(enabledRef, (value) => {
			if (value) {
				on("keydown", document, keydownHandler);
				on("keyup", document, keyupHandler);
			} else {
				off("keydown", document, keydownHandler);
				off("keyup", document, keyupHandler);
			}
		});
	};
	if (hasInstance()) {
		onBeforeMount(setup);
		onBeforeUnmount(() => {
			if (enabledRef === void 0 || enabledRef.value) {
				off("keydown", document, keydownHandler);
				off("keyup", document, keyupHandler);
			}
		});
	} else setup();
	return readonly(state);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/create-ref-setter.mjs
function createRefSetter(ref) {
	return (inst) => {
		if (inst) ref.value = inst.$el;
		else ref.value = null;
	};
}
//#endregion
export { useKeyboard as n, createRefSetter as t };
