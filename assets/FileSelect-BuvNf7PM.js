import { A as createTextVNode, B as mergeModels, C as computed, D as createElementBlock, E as createCommentVNode, Kt as normalizeClass, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, Z as openBlock, Zt as toDisplayString, at as watch, ft as init_reactivity_esm_bundler, in as __toESM, j as createVNode, rt as useModel, st as withCtx, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { A as supportedVideoExtensions, F as text_default, P as filenamify, j as uuid, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { i as useDropZone } from "./core-DWew9NA7.js";
import { n as ArchiveOutline_default } from "./hotkeys.esm-DhVljeNg.js";
import { i as Close_default, n as require_vuedraggable_umd, r as Move_default, t as EditableText_default } from "./EditableText-4AWYxBA4.js";
import { t as showDirectoryDialog } from "./showDirectoryDialog-ljqlCXtc.js";
//#region src/renderer/src/pages/Tools/pages/FileUpload/components/PartArea.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var import_vuedraggable_umd = /* @__PURE__ */ __toESM(require_vuedraggable_umd(), 1);
var _hoisted_1$1 = ["title"];
var _hoisted_2$1 = {
	key: 1,
	style: {
		"margin-left": "8px",
		"flex": "none"
	}
};
//#endregion
//#region src/renderer/src/pages/Tools/pages/FileUpload/components/PartArea.vue
var PartArea_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PartArea",
	props: /*@__PURE__*/ mergeModels({
		sort: {
			type: Boolean,
			default: true
		},
		placeholder: { default: "请输入文件名" },
		filenameClean: {
			type: Boolean,
			default: true
		}
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const fileList = useModel(__props, "modelValue");
		const props = __props;
		const options = computed(() => {
			return {
				handle: ".handle",
				animation: 250
			};
		});
		const remove = (index) => {
			fileList.value.splice(index, 1);
		};
		const validate = (value) => {
			return value.trim() !== "";
		};
		const update = (value) => {
			if (!props.filenameClean) return value;
			return filenamify(value.trim(), { replacement: "" });
		};
		return (_ctx, _cache) => {
			const _component_n_icon = NIcon;
			return openBlock(), createElementBlock("div", null, [createVNode(unref(import_vuedraggable_umd.default), {
				modelValue: fileList.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => fileList.value = $event),
				options: unref(options),
				"item-key": "id",
				handle: ".handle"
			}, {
				item: withCtx(({ element, index }) => [(openBlock(), createElementBlock("div", {
					key: element.id,
					class: "draggable",
					title: element.path
				}, [
					props.sort ? (openBlock(), createBlock(_component_n_icon, {
						key: 0,
						size: "20",
						class: "handle"
					}, {
						default: withCtx(() => [createVNode(unref(Move_default))]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(EditableText_default, {
						modelValue: element.title,
						"onUpdate:modelValue": ($event) => element.title = $event,
						class: "editable-text",
						placeholder: _ctx.placeholder,
						validate,
						update
					}, null, 8, [
						"modelValue",
						"onUpdate:modelValue",
						"placeholder"
					]),
					element.ext ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(element.ext), 1)) : createCommentVNode("", true),
					createVNode(_component_n_icon, {
						style: { "margin-left": "auto" },
						size: "20",
						class: "remove",
						onClick: ($event) => remove(index)
					}, {
						default: withCtx(() => [createVNode(unref(Close_default))]),
						_: 2
					}, 1032, ["onClick"])
				], 8, _hoisted_1$1))]),
				_: 1
			}, 8, ["modelValue", "options"])]);
		};
	}
}), [["__scopeId", "data-v-af67a4f5"]]);
//#endregion
//#region src/renderer/src/pages/Tools/pages/FileUpload/components/FileSelect.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { style: { "margin-bottom": "12px" } };
var _hoisted_2 = {
	key: 0,
	style: { "margin": "8px 0 0 0" }
};
//#endregion
//#region src/renderer/src/pages/Tools/pages/FileUpload/components/FileSelect.vue
var FileSelect_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "FileSelect",
	props: /*@__PURE__*/ mergeModels({
		sort: {
			type: Boolean,
			default: true
		},
		inputPlaceholder: { default: "请输入" },
		areaPlaceholder: { default: "请选择视频文件" },
		extensions: { default: () => supportedVideoExtensions },
		filenameClean: {
			type: Boolean,
			default: true
		}
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["change"], ["update:modelValue"]),
	setup(__props, { expose: __expose, emit: __emit }) {
		const fileList = useModel(__props, "modelValue");
		const props = __props;
		const emits = __emit;
		const dropZoneRef = ref(null);
		const select = async () => {
			let files = [];
			if (window.isWeb) files = await showDirectoryDialog({
				type: "file",
				multi: true,
				exts: props.extensions
			});
			else files = await window.api.openFile({
				multi: true,
				filters: [{
					name: "file",
					extensions: props.extensions
				}, {
					name: "所有文件",
					extensions: ["*"]
				}]
			});
			if (!files) return;
			if (files.length === 0) return;
			const newFiles = files.filter((file) => {
				return !fileList.value.some((item) => item.path === file);
			}).map((file) => ({
				id: uuid(),
				title: window.path.parse(file).name,
				path: file,
				visible: false,
				ext: window.path.parse(file).ext
			}));
			fileList.value = fileList.value.concat(newFiles);
		};
		watch(fileList, () => {
			emits("change", fileList.value);
		}, { deep: true });
		function onDrop(files) {
			if (window.isWeb) return;
			if (files) {
				console.log("拖拽文件：", files);
				const newFiles = Array.from(files).map((file) => window.api.common.getPathForFile(file)).filter((file) => {
					if (fileList.value.some((item) => item.path === file)) return false;
					if (props.extensions && Array.isArray(props.extensions) && props.extensions.includes("*")) return true;
					const ext = window.path.extname(file).slice(1).toLowerCase();
					return props.extensions.some((allowedExt) => allowedExt.toLowerCase() === ext);
				}).map((file) => ({
					id: uuid(),
					title: window.path.parse(file).name,
					path: file,
					visible: false,
					ext: window.path.parse(file).ext
				}));
				fileList.value = fileList.value.concat(newFiles);
			}
		}
		function onOver(_files, event) {
			if (window.isWeb) return;
			event.dataTransfer.dropEffect = "copy";
		}
		const { isOverDropZone } = useDropZone(dropZoneRef, {
			onDrop,
			onOver
		});
		__expose({ select });
		return (_ctx, _cache) => {
			const _component_n_icon = NIcon;
			const _component_n_text = text_default;
			return openBlock(), createElementBlock("div", {
				ref_key: "dropZoneRef",
				ref: dropZoneRef,
				class: normalizeClass({ dragging: unref(isOverDropZone) }),
				style: {
					"border": "1px dashed rgb(224, 224, 230)",
					"border-radius": "4px",
					"transition": "border-color 0.2s"
				}
			}, [fileList.value.length !== 0 ? (openBlock(), createBlock(PartArea_default, {
				key: 0,
				modelValue: fileList.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => fileList.value = $event),
				sort: props.sort,
				placeholder: props.inputPlaceholder,
				"filename-clean": props.filenameClean
			}, null, 8, [
				"modelValue",
				"sort",
				"placeholder",
				"filename-clean"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(["empty-area", { dragging: unref(isOverDropZone) }]),
				onClick: select
			}, [
				createBaseVNode("div", _hoisted_1, [createVNode(_component_n_icon, {
					size: "48",
					depth: 3
				}, {
					default: withCtx(() => [createVNode(unref(ArchiveOutline_default))]),
					_: 1
				})]),
				createVNode(_component_n_text, { style: { "font-size": "16px" } }, {
					default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode("点击或拖拽文件到该区域")])),
					_: 1
				}),
				props.areaPlaceholder ? (openBlock(), createElementBlock("p", _hoisted_2, toDisplayString(props.areaPlaceholder), 1)) : createCommentVNode("", true)
			], 2))], 2);
		};
	}
}), [["__scopeId", "data-v-f3379bf0"]]);
//#endregion
export { FileSelect_default as t };
