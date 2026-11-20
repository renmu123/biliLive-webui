import { C as computed, F as h, L as init_runtime_core_esm_bundler, M as defineComponent, ft as init_reactivity_esm_bundler, yt as ref } from "./request-CkCeAZAO.js";
import { n as popoverBaseProps, t as Popover_default } from "./Popover-BND3al2G.js";
import { Nn as useConfig, P as tooltipLight, St as useTheme } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tooltip/src/Tooltip.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var tooltipProps = Object.assign(Object.assign({}, popoverBaseProps), useTheme.props);
var Tooltip_default = defineComponent({
	name: "Tooltip",
	props: tooltipProps,
	slots: Object,
	__popover__: true,
	setup(props) {
		const { mergedClsPrefixRef } = useConfig(props);
		const themeRef = useTheme("Tooltip", "-tooltip", void 0, tooltipLight, props, mergedClsPrefixRef);
		const popoverRef = ref(null);
		return Object.assign(Object.assign({}, {
			syncPosition() {
				popoverRef.value.syncPosition();
			},
			setShow(show) {
				popoverRef.value.setShow(show);
			}
		}), {
			popoverRef,
			mergedTheme: themeRef,
			popoverThemeOverrides: computed(() => {
				return themeRef.value.self;
			})
		});
	},
	render() {
		const { mergedTheme, internalExtraClass } = this;
		return h(Popover_default, Object.assign(Object.assign({}, this.$props), {
			theme: mergedTheme.peers.Popover,
			themeOverrides: mergedTheme.peerOverrides.Popover,
			builtinThemeOverrides: this.popoverThemeOverrides,
			internalExtraClass: internalExtraClass.concat("tooltip"),
			ref: "popoverRef"
		}), this.$slots);
	}
});
//#endregion
export { Tooltip_default as t };
