import { $ as renderList, A as createTextVNode, B as mergeModels, C as computed, D as createElementBlock, E as createCommentVNode, J as onMounted, Kt as normalizeClass, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, Z as openBlock, Zt as toDisplayString, ft as init_reactivity_esm_bundler, h as withKeys, j as createVNode, l as createApp, mt as isRef, rt as useModel, st as withCtx, u as init_runtime_dom_esm_bundler, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { I as Input_default, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { E as Modal_default, K as Button, W as Card_default, kn as zhCN, n as useThemeStore, pn as dateZhCN, z as ConfigProvider_default } from "./index-CPQhEiaa.js";
import { t as common } from "./common-CBeNn3OB.js";
import { c as useStorage } from "./core-DWew9NA7.js";
//#region src/renderer/src/components/FileBrowserDialog.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "file-browser-content" };
var _hoisted_2 = { class: "file-list" };
var _hoisted_3 = ["onClick"];
var _hoisted_4 = { class: "file-name" };
var _hoisted_5 = {
	key: 0,
	class: "file-size"
};
var _hoisted_6 = { style: {
	"display": "flex",
	"justify-content": "space-between"
} };
var _hoisted_7 = { style: { "flex": "1" } };
var _hoisted_8 = { style: { "flex": "none" } };
//#endregion
//#region src/renderer/src/components/FileBrowserDialog.vue
var FileBrowserDialog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "FileBrowserDialog",
	props: /*@__PURE__*/ mergeModels({
		type: { default: "file" },
		multi: {
			type: Boolean,
			default: false
		},
		exts: { default: () => [] },
		extension: { default: "" },
		defaultPath: { default: "" },
		close: {
			type: Function,
			default: () => {}
		},
		confirm: {
			type: Function,
			default: () => {}
		}
	}, {
		"visible": {
			type: Boolean,
			required: true,
			default: false
		},
		"visibleModifiers": {}
	}),
	emits: ["update:visible"],
	setup(__props) {
		const showModal = useModel(__props, "visible");
		const props = __props;
		const files = ref([]);
		const currentPath = useStorage("file-store", "/");
		const filename = ref("");
		const selectedFiles = ref([]);
		const parentPath = ref();
		let runCount = 0;
		const fetchFiles = async () => {
			selectedFiles.value = [];
			const res = await common.getFiles({
				path: currentPath.value,
				exts: props.exts,
				type: {
					file: "file",
					directory: "directory",
					save: "directory"
				}[props.type]
			}).catch((err) => {
				runCount++;
				currentPath.value = "/";
				if (runCount > 4) throw err;
				fetchFiles();
				throw err;
			});
			runCount = 0;
			files.value = res.list;
			parentPath.value = res.parent;
		};
		const confirmText = computed(() => {
			if (props.type === "directory") return "选择文件夹";
			else if (props.type === "save") return "保存";
			else if (props.type === "file") return "打开";
			else return "确定";
		});
		const showFileSize = computed(() => props.type === "file");
		const formatFileSize = (size) => {
			if (typeof size !== "number" || Number.isNaN(size) || size < 0) return "";
			if (size < 1024) return `${size} B`;
			const units = [
				"KB",
				"MB",
				"GB",
				"TB"
			];
			let value = size / 1024;
			let unitIndex = 0;
			while (value >= 1024 && unitIndex < units.length - 1) {
				value /= 1024;
				unitIndex++;
			}
			return `${value.toFixed(value < 10 ? 1 : 0)} ${units[unitIndex]}`;
		};
		const openDirectory = (file) => {
			currentPath.value = file.path;
			fetchFiles();
		};
		const goUpDirectory = () => {
			currentPath.value = parentPath.value || "/";
			fetchFiles();
		};
		const selectFile = (file) => {
			if (props.type === "file" && file.type === "directory") {
				openDirectory(file);
				return;
			}
			if (props.type !== file.type) return;
			if (props.multi) {
				if (selectedFiles.value.includes(file.path)) selectedFiles.value = selectedFiles.value.filter((path) => path !== file.path);
				else selectedFiles.value = [...selectedFiles.value, file.path];
			} else selectedFiles.value = [file.path];
		};
		const closeDialog = () => {
			showModal.value = false;
			props.close();
		};
		const confirm = async () => {
			let result = selectedFiles.value;
			if (props.type === "directory" && !result.length) result = [currentPath.value];
			else if (props.type === "save") {
				if (!filename.value) return;
				result = [await common.fileJoin(currentPath.value, filename.value) + `.${props.extension}`];
			}
			showModal.value = false;
			props.confirm(result);
		};
		onMounted(() => {
			if (props.defaultPath) {
				if (window.path.isAbsolute(props.defaultPath)) currentPath.value = window.path.dirname(props.defaultPath);
				filename.value = window.path.basename(props.defaultPath, window.path.extname(props.defaultPath));
			}
			fetchFiles();
		});
		const themeStore = useThemeStore();
		return (_ctx, _cache) => {
			const _component_n_input = Input_default;
			const _component_n_button = Button;
			const _component_n_card = Card_default;
			const _component_n_modal = Modal_default;
			const _component_n_config_provider = ConfigProvider_default;
			return openBlock(), createBlock(_component_n_config_provider, {
				theme: unref(themeStore).themeUI,
				locale: unref(zhCN),
				"date-locale": unref(dateZhCN)
			}, {
				default: withCtx(() => [createVNode(_component_n_modal, {
					show: showModal.value,
					"onUpdate:show": _cache[3] || (_cache[3] = ($event) => showModal.value = $event),
					"transform-origin": "center",
					"auto-focus": false
				}, {
					default: withCtx(() => [createVNode(_component_n_card, {
						style: { "width": "800px" },
						title: "文件浏览器",
						bordered: false
					}, {
						footer: withCtx(() => [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [props.type === "save" ? (openBlock(), createBlock(_component_n_input, {
							key: 0,
							value: unref(filename),
							"onUpdate:value": _cache[2] || (_cache[2] = ($event) => isRef(filename) ? filename.value = $event : null),
							placeholder: "请输入文件名",
							onKeyup: withKeys(confirm, ["enter"])
						}, {
							suffix: withCtx(() => [createTextVNode(toDisplayString(props.extension ? `.${props.extension}` : ""), 1)]),
							_: 1
						}, 8, ["value"])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_8, [createVNode(_component_n_button, { onClick: closeDialog }, {
							default: withCtx(() => _cache[4] || (_cache[4] = [createTextVNode("取消")])),
							_: 1
						}), createVNode(_component_n_button, {
							disabled: !unref(selectedFiles),
							type: "primary",
							style: { "margin-left": "10px" },
							onClick: confirm
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(confirmText)), 1)]),
							_: 1
						}, 8, ["disabled"])])])]),
						default: withCtx(() => [createBaseVNode("div", _hoisted_1, [createBaseVNode("div", null, [createVNode(_component_n_input, {
							value: unref(currentPath),
							"onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(currentPath) ? currentPath.value = $event : null),
							placeholder: "请输入文件夹路径",
							onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => openDirectory({ path: unref(currentPath) }), ["enter"]))
						}, null, 8, ["value"])]), createBaseVNode("ul", _hoisted_2, [unref(currentPath) && unref(currentPath) !== "/" ? (openBlock(), createElementBlock("li", {
							key: 0,
							onClick: goUpDirectory
						}, "上一层")) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(files), (file, index) => {
							return openBlock(), createElementBlock("li", {
								key: index,
								class: normalizeClass(["file", { selected: unref(selectedFiles).includes(file.path) }]),
								onClick: ($event) => selectFile(file)
							}, [createBaseVNode("span", _hoisted_4, toDisplayString(file.type === "directory" ? "📁" : "📄") + " " + toDisplayString(file.name), 1), unref(showFileSize) && file.type === "file" ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(formatFileSize(file.size)), 1)) : createCommentVNode("", true)], 10, _hoisted_3);
						}), 128))])])]),
						_: 1
					})]),
					_: 1
				}, 8, ["show"])]),
				_: 1
			}, 8, [
				"theme",
				"locale",
				"date-locale"
			]);
		};
	}
}), [["__scopeId", "data-v-f8f08746"]]);
//#endregion
//#region src/renderer/src/components/showDirectoryDialog.ts
init_runtime_dom_esm_bundler();
async function showDirectoryDialog(options = {}) {
	return new Promise((resolve) => {
		const mountNode = document.createElement("div");
		let dialogApp = createApp(FileBrowserDialog_default, {
			visible: true,
			...options,
			close: () => {
				if (dialogApp) {
					dialogApp.unmount();
					document.body.removeChild(mountNode);
					dialogApp = void 0;
					resolve(void 0);
				}
			},
			confirm: (path) => {
				resolve(path);
				dialogApp?.unmount();
				document.body.removeChild(mountNode);
				dialogApp = void 0;
			}
		});
		document.body.appendChild(mountNode);
		dialogApp.mount(mountNode);
	});
}
//#endregion
export { showDirectoryDialog as t };
