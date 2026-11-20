import { A as createTextVNode, C as computed, D as createElementBlock, E as createCommentVNode, F as h, L as init_runtime_core_esm_bundler, M as defineComponent, Tt as unref, U as onActivated, Y as onUnmounted, Z as openBlock, ft as init_reactivity_esm_bundler, j as createVNode, mt as isRef, q as onDeactivated, st as withCtx, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { b as deepRaw, c as bili } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { c as useUserInfoStore, t as useAppConfig } from "./stores-Cc_-mi5a.js";
import { t as BiliSetting_default } from "./BiliSetting-CveEDz0e.js";
import { t as Checkbox_default } from "./Checkbox-C9dpLVBG.js";
import { t as useBili } from "./hooks-BIRfeUqh.js";
import { t as useNotification } from "./use-notification-BORvHMZV.js";
import { t as Divider_default } from "./Divider-7i3uOVWn.js";
import { K as Button, i as storeToRefs } from "./index-CPQhEiaa.js";
import { g as toReactive } from "./core-DWew9NA7.js";
import { t as AppendVideoDialog_default } from "./AppendVideoDialog-0e9x9Qs3.js";
import { t as hotkeys } from "./hotkeys.esm-DhVljeNg.js";
import { t as FileSelect_default } from "./FileSelect-BuvNf7PM.js";
//#region src/renderer/src/pages/Tools/pages/FileUpload/index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler();
var _hoisted_1 = {
	class: "flex justify-center align-center",
	style: {
		"margin-bottom": "20px",
		"gap": "10px"
	}
};
var _hoisted_2 = {
	class: "",
	style: { "margin-top": "30px" }
};
//#endregion
//#region src/renderer/src/pages/Tools/pages/FileUpload/index.vue
var FileUpload_default = /* @__PURE__ */ defineComponent({
	name: "Upload",
	__name: "index",
	setup(__props) {
		const { userInfo } = storeToRefs(useUserInfoStore());
		const { handlePresetOptions, presetOptions } = useBili();
		const appConfigStore = useAppConfig();
		const { appConfig } = storeToRefs(appConfigStore);
		const notice = useNotification();
		const options = toReactive(computed({
			get: () => appConfig.value.tool.upload,
			set: (value) => {
				appConfig.value.tool.upload = value;
			}
		}));
		const fileList = ref([]);
		onActivated(() => {
			hotkeys("ctrl+enter", function() {
				upload();
			});
		});
		onDeactivated(() => {
			hotkeys.unbind();
		});
		onUnmounted(() => {
			hotkeys.unbind();
		});
		const upload = async () => {
			if (!!!userInfo.value.uid) {
				notice.error({
					title: `请点击左侧头像处先进行登录`,
					duration: 1e3
				});
				return;
			}
			if (fileList.value.length === 0) {
				notice.error({
					title: `至少选择一个文件`,
					duration: 1e3
				});
				return;
			}
			const uploadConfig = deepRaw(presetOptions.value.config);
			await bili.validUploadParams(uploadConfig);
			const videos = deepRaw(fileList.value);
			await bili.upload({
				uid: userInfo.value.uid,
				videos,
				config: uploadConfig,
				options: { removeOriginAfterUploadCheck: options.removeOriginAfterUploadCheck }
			});
			fileList.value = [];
		};
		const appendVideoVisible = ref(false);
		const aid = ref();
		const appendVideo = async () => {
			if (!aid.value) return;
			if (!!!userInfo.value.uid) {
				notice.error({
					title: `请点击左侧头像处先进行登录`,
					duration: 1e3
				});
				return;
			}
			if (fileList.value.length === 0) {
				notice.error({
					title: `至少选择一个文件`,
					duration: 1e3
				});
				return;
			}
			notice.info({
				title: `开始上传`,
				duration: 1e3
			});
			const uploadConfig = deepRaw(presetOptions.value.config);
			const videos = deepRaw(fileList.value);
			await bili.upload({
				uid: userInfo.value.uid,
				vid: Number(aid.value),
				videos,
				config: { ...uploadConfig },
				options: { removeOriginAfterUploadCheck: options.removeOriginAfterUploadCheck }
			});
			fileList.value = [];
		};
		const fileSelect = ref(null);
		const addVideo = async () => {
			fileSelect.value?.select();
		};
		const clear = () => {
			fileList.value = [];
		};
		const biliSettingRef = ref(null);
		const hasNotice = ref(false);
		const notification = useNotification();
		const fileChange = (files) => {
			if (files.length === 0) {
				hasNotice.value = false;
				return;
			}
			if (hasNotice.value) return;
			const name = files[0].title;
			if (biliSettingRef.value?.getTitle() === name) return;
			if (appConfig.value.biliUploadFileNameType === "never") return;
			if (appConfig.value.biliUploadFileNameType === "always") {
				biliSettingRef.value?.setTitle(name);
				return;
			}
			hasNotice.value = true;
			const n = notification.create({
				title: `是否将文件名改为视频标题？`,
				keepAliveOnHover: true,
				duration: 3e3,
				action: () => h("div", { style: "display: flex; gap: 10px; justify-content: center; align-items: center;" }, { default: () => [h(Button, {
					type: "primary",
					onClick: () => {
						biliSettingRef.value?.setTitle(name);
						n.destroy();
					}
				}, { default: () => "确认" }), h(Button, {
					text: true,
					type: "error",
					onClick: () => {
						appConfigStore.set("biliUploadFileNameType", "never");
						n.destroy();
					}
				}, { default: () => "不再提示" })] })
			});
		};
		return (_ctx, _cache) => {
			const _component_n_checkbox = Checkbox_default;
			const _component_n_divider = Divider_default;
			return openBlock(), createElementBlock("div", null, [
				createBaseVNode("div", _hoisted_1, [
					unref(fileList).length !== 0 ? (openBlock(), createElementBlock("span", {
						key: 0,
						style: {
							"cursor": "pointer",
							"color": "#958e8e"
						},
						onClick: clear
					}, "清空")) : createCommentVNode("", true),
					createVNode(unref(Button), { onClick: addVideo }, {
						default: withCtx(() => _cache[6] || (_cache[6] = [createTextVNode(" 添加 ")])),
						_: 1
					}),
					createVNode(unref(Button), {
						type: "primary",
						onClick: upload,
						title: "立即上传(ctrl+enter)"
					}, {
						default: withCtx(() => _cache[7] || (_cache[7] = [createTextVNode(" 立即上传 ")])),
						_: 1
					}),
					createVNode(unref(Button), {
						type: "primary",
						onClick: _cache[0] || (_cache[0] = ($event) => appendVideoVisible.value = true)
					}, {
						default: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode(" 续传 ")])),
						_: 1
					}),
					createVNode(_component_n_checkbox, {
						checked: unref(options).removeOriginAfterUploadCheck,
						"onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(options).removeOriginAfterUploadCheck = $event)
					}, {
						default: withCtx(() => _cache[9] || (_cache[9] = [createTextVNode(" 审核通过后移除源文件 ")])),
						_: 1
					}, 8, ["checked"])
				]),
				createVNode(FileSelect_default, {
					ref_key: "fileSelect",
					ref: fileSelect,
					modelValue: unref(fileList),
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(fileList) ? fileList.value = $event : null),
					onChange: fileChange,
					inputPlaceholder: "输入内容将会被用为分P标题",
					"filename-clean": false
				}, null, 8, ["modelValue"]),
				createVNode(_component_n_divider),
				createBaseVNode("div", _hoisted_2, [createVNode(BiliSetting_default, {
					ref_key: "biliSettingRef",
					ref: biliSettingRef,
					modelValue: unref(options).uploadPresetId,
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(options).uploadPresetId = $event),
					onChange: unref(handlePresetOptions)
				}, null, 8, ["modelValue", "onChange"])]),
				createVNode(AppendVideoDialog_default, {
					visible: unref(appendVideoVisible),
					"onUpdate:visible": _cache[4] || (_cache[4] = ($event) => isRef(appendVideoVisible) ? appendVideoVisible.value = $event : null),
					modelValue: unref(aid),
					"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(aid) ? aid.value = $event : null),
					onConfirm: appendVideo
				}, null, 8, ["visible", "modelValue"])
			]);
		};
	}
});
//#endregion
export { FileUpload_default as default };
