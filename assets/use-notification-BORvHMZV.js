import { L as init_runtime_core_esm_bundler, R as inject } from "./request-CkCeAZAO.js";
import { Yn as throwError, w as notificationApiInjectionKey } from "./index-CPQhEiaa.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/notification/src/use-notification.mjs
init_runtime_core_esm_bundler();
function useNotification() {
	const api = inject(notificationApiInjectionKey, null);
	if (api === null) throwError("use-notification", "No outer `n-notification-provider` found.");
	return api;
}
//#endregion
export { useNotification as t };
