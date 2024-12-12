import { D as watch, l as computed, j as inject, L as throwError, eI as notificationApiInjectionKey } from "./index-B3txP6HV.js";
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
