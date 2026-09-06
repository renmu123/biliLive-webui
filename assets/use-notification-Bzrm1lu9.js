import { R as throwError, S as inject, dS as notificationApiInjectionKey } from "./index-CB8xvhFr.js";
function useNotification() {
  const api = inject(notificationApiInjectionKey, null);
  if (api === null) {
    throwError("use-notification", "No outer `n-notification-provider` found.");
  }
  return api;
}
export {
  useNotification as u
};
