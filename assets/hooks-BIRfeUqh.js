import { C as computed, F as h, L as init_runtime_core_esm_bundler, R as inject, ft as init_reactivity_esm_bundler, yt as ref } from "./request-CkCeAZAO.js";
import { t as Checkbox_default } from "./Checkbox-C9dpLVBG.js";
import { D as dialogApiInjectionKey, K as Button, Yn as throwError } from "./index-CPQhEiaa.js";
import { u as useWindowSize } from "./core-DWew9NA7.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dialog/src/composables.mjs
init_runtime_core_esm_bundler();
function useDialog() {
	const dialog = inject(dialogApiInjectionKey, null);
	if (dialog === null) throwError("use-dialog", "No outer <n-dialog-provider /> founded.");
	return dialog;
}
//#endregion
//#region src/renderer/src/hooks/useBreakpoints.ts
init_runtime_core_esm_bundler();
function useBreakpoints() {
	const { width } = useWindowSize();
	const breakpoint = computed(() => width.value <= 628 ? "mobile" : "desktop");
	return {
		breakpoint,
		isMobile: computed(() => breakpoint.value === "mobile"),
		isDesktop: computed(() => breakpoint.value === "desktop")
	};
}
//#endregion
//#region src/renderer/src/hooks/index.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
var useConfirm = () => {
	const dialog = useDialog();
	return { warning: ({ title, content, positiveText, negativeText, showCheckbox, showAgainKey, checkboxText, checkboxTip, defaultChecked = false }) => new Promise((reslove) => {
		const data = JSON.parse(localStorage.getItem("notShowAgain") || "{}");
		if (showAgainKey && data[showAgainKey] === true) return reslove([true, true]);
		const hasChecked = ref(defaultChecked);
		const d = dialog.warning({
			title: title || "警告",
			content,
			action: () => {
				let checkbox = h("div");
				if (showCheckbox) checkbox = h(Checkbox_default, {
					checked: hasChecked,
					"onUpdate:checked": (value) => {
						hasChecked.value = value;
					},
					title: checkboxTip
				}, () => h("span", checkboxText || "不再提示"));
				const btns = h("div", { style: {
					display: "inline-flex",
					gap: "10px"
				} }, [h(Button, { onClick: () => {
					d.destroy();
					if (showCheckbox) reslove([false, hasChecked.value]);
					else reslove([false, false]);
				} }, () => h("span", negativeText || "取消")), h(Button, {
					type: "primary",
					onClick: () => {
						if (showCheckbox) {
							if (showAgainKey) {
								data[showAgainKey] = hasChecked.value;
								localStorage.setItem("notShowAgain", JSON.stringify(data));
							}
							reslove([true, hasChecked.value]);
						} else reslove([true, true]);
						d.destroy();
					}
				}, () => h("span", positiveText || "继续"))]);
				return h("div", { style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%"
				} }, [checkbox, btns]);
			},
			positiveText: positiveText || "继续",
			negativeText: negativeText || "取消",
			onPositiveClick: () => {
				reslove([true, true]);
			},
			onNegativeClick: () => {
				reslove([false, false]);
			},
			onClose: () => {
				reslove([false, false]);
			},
			onMaskClick: () => {
				reslove([false, false]);
			}
		});
	}) };
};
var useBili = () => {
	const presetOptions = ref({});
	const handlePresetOptions = (preset) => {
		presetOptions.value = preset;
	};
	return {
		handlePresetOptions,
		presetOptions
	};
};
//#endregion
export { useConfirm as n, useBreakpoints as r, useBili as t };
