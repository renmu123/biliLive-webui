import { a5 as watch, x as computed, R as throwError, S as inject, dy as notificationApiInjectionKey } from "./index-gjuLIDoI.js";
function useMergedState(controlledStateRef, uncontrolledStateRef) {
  watch(controlledStateRef, (value) => {
    if (value !== void 0) {
      uncontrolledStateRef.value = value;
    }
  });
  return computed(() => {
    if (controlledStateRef.value === void 0) {
      return uncontrolledStateRef.value;
    }
    return controlledStateRef.value;
  });
}
function useNotification() {
  const api = inject(notificationApiInjectionKey, null);
  if (api === null) {
    throwError("use-notification", "No outer `n-notification-provider` found.");
  }
  return api;
}
export {
  useMergedState as a,
  useNotification as u
};
