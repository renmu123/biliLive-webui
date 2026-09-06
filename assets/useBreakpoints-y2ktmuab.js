import { e as useWindowSize } from "./index-CMOU2boc.js";
import { x as computed } from "./index-CB8xvhFr.js";
function useBreakpoints() {
  const { width } = useWindowSize();
  const breakpoint = computed(() => width.value <= 628 ? "mobile" : "desktop");
  return {
    breakpoint,
    isMobile: computed(() => breakpoint.value === "mobile"),
    isDesktop: computed(() => breakpoint.value === "desktop")
  };
}
export {
  useBreakpoints as u
};
