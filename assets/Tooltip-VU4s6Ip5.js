import { _ as __unplugin_components_2, p as popoverBaseProps } from "./Popover-D4v8saSe.js";
import { d as defineComponent, l as h, v as useConfig, y as useTheme, r as ref, x as computed, d1 as tooltipLight } from "./index-CB8xvhFr.js";
const tooltipProps = Object.assign(Object.assign({}, popoverBaseProps), useTheme.props);
const __unplugin_components_1 = defineComponent({
  name: "Tooltip",
  props: tooltipProps,
  slots: Object,
  __popover__: true,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const themeRef = useTheme("Tooltip", "-tooltip", void 0, tooltipLight, props, mergedClsPrefixRef);
    const popoverRef = ref(null);
    const tooltipExposedMethod = {
      syncPosition() {
        popoverRef.value.syncPosition();
      },
      setShow(show) {
        popoverRef.value.setShow(show);
      }
    };
    return Object.assign(Object.assign({}, tooltipExposedMethod), {
      popoverRef,
      mergedTheme: themeRef,
      popoverThemeOverrides: computed(() => {
        return themeRef.value.self;
      })
    });
  },
  render() {
    const {
      mergedTheme,
      internalExtraClass
    } = this;
    return h(__unplugin_components_2, Object.assign(Object.assign({}, this.$props), {
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: internalExtraClass.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
});
export {
  __unplugin_components_1 as _
};
