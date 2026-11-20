import { $ as renderList, A as createTextVNode, C as computed, D as createElementBlock, E as createCommentVNode, F as h, J as onMounted, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, Q as provide, R as inject, St as toRef, T as createBlock, Tt as unref, U as onActivated, Y as onUnmounted, Z as openBlock, Zt as toDisplayString, a as useRoute, at as watch, ft as init_reactivity_esm_bundler, j as createVNode, st as withCtx, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { F as text_default, d as fileBrowser_default, t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { i as Tag_default } from "./Select-DRoqCGUj.js";
import { t as DataTable_default } from "./DataTable-BkpCVJkz.js";
import { t as Space_default } from "./Space-B3s3-R0l.js";
import { n as useConfirm } from "./hooks-BIRfeUqh.js";
import { t as Spin_default } from "./Spin-COE9UcEU.js";
import { $r as cE, K as Button, Mn as useThemeClass, Nn as useConfig, Rn as resolveSlot, St as useTheme, W as Card_default, Xr as c, Y as breadcrumbLight, Zr as cB, _r as createInjectionKey, ei as cM, fr as isBrowser } from "./index-CPQhEiaa.js";
import { t as useNotice } from "./useNotice-DqXLG4Nf.js";
import { i as toVideoPlayerPage } from "./pages-CMcKcvsE.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/breadcrumb/src/styles/index.cssr.mjs
var index_cssr_default = cB("breadcrumb", `
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`, [
	c("ul", `
 list-style: none;
 padding: 0;
 margin: 0;
 `),
	c("a", `
 color: inherit;
 text-decoration: inherit;
 `),
	cB("breadcrumb-item", `
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `, [
		cB("icon", `
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),
		c("&:not(:last-child)", [cM("clickable", [cE("link", `
 cursor: pointer;
 `, [c("&:hover", `
 background-color: var(--n-item-color-hover);
 `), c("&:active", `
 background-color: var(--n-item-color-pressed); 
 `)])])]),
		cE("link", `
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `, [c("&:hover", `
 color: var(--n-item-text-color-hover);
 `, [cB("icon", `
 color: var(--n-item-text-color-hover);
 `)]), c("&:active", `
 color: var(--n-item-text-color-pressed);
 `, [cB("icon", `
 color: var(--n-item-text-color-pressed);
 `)])]),
		cE("separator", `
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),
		c("&:last-child", [cE("link", `
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `, [cB("icon", `
 color: var(--n-item-text-color-active);
 `)]), cE("separator", `
 display: none;
 `)])
	])
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/breadcrumb/src/Breadcrumb.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var breadcrumbInjectionKey = createInjectionKey("n-breadcrumb");
var breadcrumbProps = Object.assign(Object.assign({}, useTheme.props), { separator: {
	type: String,
	default: "/"
} });
var Breadcrumb_default = defineComponent({
	name: "Breadcrumb",
	props: breadcrumbProps,
	setup(props) {
		const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
		const themeRef = useTheme("Breadcrumb", "-breadcrumb", index_cssr_default, breadcrumbLight, props, mergedClsPrefixRef);
		provide(breadcrumbInjectionKey, {
			separatorRef: toRef(props, "separator"),
			mergedClsPrefixRef
		});
		const cssVarsRef = computed(() => {
			const { common: { cubicBezierEaseInOut }, self: { separatorColor, itemTextColor, itemTextColorHover, itemTextColorPressed, itemTextColorActive, fontSize, fontWeightActive, itemBorderRadius, itemColorHover, itemColorPressed, itemLineHeight } } = themeRef.value;
			return {
				"--n-font-size": fontSize,
				"--n-bezier": cubicBezierEaseInOut,
				"--n-item-text-color": itemTextColor,
				"--n-item-text-color-hover": itemTextColorHover,
				"--n-item-text-color-pressed": itemTextColorPressed,
				"--n-item-text-color-active": itemTextColorActive,
				"--n-separator-color": separatorColor,
				"--n-item-color-hover": itemColorHover,
				"--n-item-color-pressed": itemColorPressed,
				"--n-item-border-radius": itemBorderRadius,
				"--n-font-weight-active": fontWeightActive,
				"--n-item-line-height": itemLineHeight
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("breadcrumb", void 0, cssVarsRef, props) : void 0;
		return {
			mergedClsPrefix: mergedClsPrefixRef,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		};
	},
	render() {
		var _a;
		(_a = this.onRender) === null || _a === void 0 || _a.call(this);
		return h("nav", {
			class: [`${this.mergedClsPrefix}-breadcrumb`, this.themeClass],
			style: this.cssVars,
			"aria-label": "Breadcrumb"
		}, h("ul", null, this.$slots));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/composable/use-browser-location.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useBrowserLocation(customWindow = isBrowser ? window : null) {
	const getWindowLocation = () => {
		const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (customWindow === null || customWindow === void 0 ? void 0 : customWindow.location) || {};
		return {
			hash,
			host,
			hostname,
			href,
			origin,
			pathname,
			port,
			protocol,
			search
		};
	};
	const locationState = ref(getWindowLocation());
	const updateLocation = () => {
		locationState.value = getWindowLocation();
	};
	onMounted(() => {
		if (customWindow) {
			customWindow.addEventListener("popstate", updateLocation);
			customWindow.addEventListener("hashchange", updateLocation);
		}
	});
	onUnmounted(() => {
		if (customWindow) {
			customWindow.removeEventListener("popstate", updateLocation);
			customWindow.removeEventListener("hashchange", updateLocation);
		}
	});
	return locationState;
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/breadcrumb/src/BreadcrumbItem.mjs
init_runtime_core_esm_bundler();
var BreadcrumbItem_default = defineComponent({
	name: "BreadcrumbItem",
	props: {
		separator: String,
		href: String,
		clickable: {
			type: Boolean,
			default: true
		},
		showSeparator: {
			type: Boolean,
			default: true
		},
		onClick: Function
	},
	slots: Object,
	setup(props, { slots }) {
		const NBreadcrumb = inject(breadcrumbInjectionKey, null);
		if (!NBreadcrumb) return () => null;
		const { separatorRef, mergedClsPrefixRef } = NBreadcrumb;
		const browserLocationRef = useBrowserLocation();
		const htmlTagRef = computed(() => props.href ? "a" : "span");
		const ariaCurrentRef = computed(() => browserLocationRef.value.href === props.href ? "location" : null);
		return () => {
			const { value: mergedClsPrefix } = mergedClsPrefixRef;
			return h("li", { class: [`${mergedClsPrefix}-breadcrumb-item`, props.clickable && `${mergedClsPrefix}-breadcrumb-item--clickable`] }, h(htmlTagRef.value, {
				class: `${mergedClsPrefix}-breadcrumb-item__link`,
				"aria-current": ariaCurrentRef.value,
				href: props.href,
				onClick: props.onClick
			}, slots), props.showSeparator && h("span", {
				class: `${mergedClsPrefix}-breadcrumb-item__separator`,
				"aria-hidden": "true"
			}, resolveSlot(slots.separator, () => {
				var _a;
				return [(_a = props.separator) !== null && _a !== void 0 ? _a : separatorRef.value];
			})));
		};
	}
});
//#endregion
//#region src/renderer/src/pages/FileBrowser/index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "file-browser-page" };
var _hoisted_2 = { class: "toolbar" };
var _hoisted_3 = { class: "breadcrumb-link" };
//#endregion
//#region src/renderer/src/pages/FileBrowser/index.vue
var FileBrowser_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "FileBrowser",
	__name: "index",
	setup(__props) {
		const loading = ref(false);
		const route = useRoute();
		const deleting = ref(false);
		const items = ref([]);
		const checkedRowKeys = ref([]);
		const rootPath = ref("");
		const currentPath = ref("");
		const parentPath = ref(null);
		const deleteEnabled = ref(false);
		const confirm = useConfirm();
		const notice = useNotice();
		const rowKey = (row) => row.path;
		const hasDeletableItems = computed(() => deleteEnabled.value && items.value.some((item) => item.canDelete));
		const selectedFiles = computed(() => {
			const selectedPaths = new Set(checkedRowKeys.value);
			return items.value.filter((item) => item.canDelete && selectedPaths.has(item.path));
		});
		const onCheckedRowKeysChange = (keys) => {
			checkedRowKeys.value = keys;
		};
		const pathSeparator = computed(() => rootPath.value.includes("\\") ? "\\" : "/");
		const breadcrumbs = computed(() => {
			if (!rootPath.value) return [];
			const segments = (currentPath.value.startsWith(rootPath.value) ? currentPath.value.slice(rootPath.value.length) : "").split(/[\\/]+/).filter(Boolean);
			const result = [{
				label: "录制目录",
				path: rootPath.value
			}];
			let cursor = rootPath.value;
			for (const segment of segments) {
				cursor = `${cursor}${cursor.endsWith(pathSeparator.value) ? "" : pathSeparator.value}${segment}`;
				result.push({
					label: segment,
					path: cursor
				});
			}
			return result;
		});
		const formatFileSize = (size) => {
			if (typeof size !== "number" || Number.isNaN(size) || size < 0) return "--";
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
		const formatTime = (timestamp) => {
			if (!timestamp) return "--";
			return new Date(timestamp).toLocaleString("zh-CN", {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false
			}).replace(/\//g, "-");
		};
		const triggerBrowserDownload = (url) => {
			const anchor = document.createElement("a");
			anchor.href = url;
			anchor.download = "";
			document.body.appendChild(anchor);
			anchor.click();
			document.body.removeChild(anchor);
		};
		const fetchList = async (path) => {
			loading.value = true;
			try {
				const data = await fileBrowser_default.list(path);
				items.value = data.list;
				rootPath.value = data.rootPath;
				currentPath.value = data.currentPath;
				parentPath.value = data.parentPath;
				deleteEnabled.value = data.deleteEnabled;
				checkedRowKeys.value = [];
			} catch (error) {
				notice.error({ title: error?.message || error || "获取文件列表失败" });
			} finally {
				loading.value = false;
			}
		};
		const goToPath = async (path) => {
			if (deleting.value) return;
			await fetchList(path);
		};
		const goParent = async () => {
			if (!parentPath.value || deleting.value) return;
			await fetchList(parentPath.value);
		};
		const refreshCurrent = async () => {
			if (deleting.value) return;
			await fetchList(currentPath.value || void 0);
		};
		const downloadFile = async (row) => {
			const url = await fileBrowser_default.createDownloadUrl(row.path);
			triggerBrowserDownload(url);
		};
		const isTsFile = (row) => row.name.toLowerCase().endsWith(".ts");
		const isPlayableVideo = (row) => row.type === "file" && row.fileKind === "video" && !isTsFile(row);
		const openPlayer = async (row) => {
			if (!isPlayableVideo(row)) return;
			toVideoPlayerPage({ videoFilePath: row.path });
		};
		const removeFile = async (row) => {
			if (deleting.value || loading.value) return;
			deleting.value = true;
			try {
				const [confirmed] = await confirm.warning({ content: `确定删除文件 ${row.name} 吗？此操作不可撤销。` });
				if (!confirmed) return;
				await fileBrowser_default.removeFile(row.path);
				notice.success("删除成功");
				await fetchList(currentPath.value);
			} catch (error) {
				notice.error({ title: error?.message || error || "删除失败" });
			} finally {
				deleting.value = false;
			}
		};
		const removeSelectedFiles = async () => {
			if (deleting.value || loading.value || selectedFiles.value.length === 0) return;
			const files = [...selectedFiles.value];
			deleting.value = true;
			try {
				const [confirmed] = await confirm.warning({ content: `确定删除选中的 ${files.length} 个文件吗？此操作不可撤销。` });
				if (!confirmed) return;
				const failed = [];
				let succeeded = 0;
				const batchSize = 5;
				for (let index = 0; index < files.length; index += batchSize) {
					const batch = files.slice(index, index + batchSize);
					(await Promise.allSettled(batch.map((file) => fileBrowser_default.removeFile(file.path)))).forEach((result, resultIndex) => {
						if (result.status === "fulfilled") succeeded++;
						else failed.push({
							name: batch[resultIndex].name,
							reason: result.reason
						});
					});
				}
				await fetchList(currentPath.value);
				if (succeeded > 0) notice.success(`成功删除 ${succeeded} 个文件`);
				if (failed.length > 0) notice.error({
					title: `${failed.length} 个文件删除失败`,
					content: failed.slice(0, 3).map(({ name, reason }) => `${name}：${reason instanceof Error ? reason.message : String(reason)}`).join("；") + (failed.length > 3 ? "；其余文件也未删除" : ""),
					duration: 5e3
				});
			} catch (error) {
				notice.error({ title: error?.message || error || "批量删除失败" });
			} finally {
				deleting.value = false;
			}
		};
		const columns = computed(() => [
			...hasDeletableItems.value ? [{
				type: "selection",
				disabled: (row) => !row.canDelete || deleting.value
			}] : [],
			{
				title: "名称",
				key: "name",
				render: (row) => {
					if (row.type === "directory") return h("span", {
						onClick: () => goToPath(row.path),
						style: {
							cursor: "pointer",
							display: "inline-block",
							width: "100%"
						}
					}, { default: () => `📁 ${row.name}` });
					return h("span", { style: {
						cursor: "pointer",
						display: "inline-block",
						width: "100%"
					} }, { default: () => `📄 ${row.name}` });
				}
			},
			{
				title: "类型",
				key: "fileKind",
				render: (row) => {
					if (row.type === "directory") return h(Tag_default, { size: "small" }, { default: () => "目录" });
					return h(Tag_default, {
						size: "small",
						type: row.fileKind === "video" ? "success" : "info"
					}, { default: () => row.fileKind === "video" ? "视频" : "文件" });
				}
			},
			{
				title: "大小",
				key: "size",
				render: (row) => row.type === "directory" ? "--" : formatFileSize(row.size)
			},
			{
				title: "修改时间",
				key: "mtimeMs",
				render: (row) => formatTime(row.mtimeMs)
			},
			{
				title: "操作",
				key: "actions",
				render: (row) => {
					if (row.type === "directory") return h(Button, {
						text: true,
						type: "primary",
						onClick: () => goToPath(row.path)
					}, { default: () => "进入" });
					const actions = [h(Button, {
						text: true,
						type: "primary",
						onClick: () => downloadFile(row)
					}, { default: () => "下载" })];
					if (row.fileKind === "video") actions.unshift(h(Button, {
						text: true,
						type: "primary",
						disabled: isTsFile(row),
						onClick: () => openPlayer(row)
					}, { default: () => isTsFile(row) ? "TS 不支持播放" : "播放" }));
					if (row.canDelete) actions.push(h(Button, {
						text: true,
						type: "error",
						disabled: deleting.value || loading.value,
						onClick: () => removeFile(row)
					}, { default: () => "删除" }));
					return h("div", { style: {
						display: "flex",
						gap: "12px"
					} }, actions);
				}
			}
		]);
		const routePath = () => typeof route.query.path === "string" ? route.query.path : void 0;
		onMounted(() => {
			fetchList(routePath());
		});
		let hasActivated = false;
		onActivated(() => {
			if (hasActivated) fetchList(routePath());
			hasActivated = true;
		});
		watch(() => route.query.path, () => {
			if (route.name === "FileBrowser") fetchList(routePath());
		});
		return (_ctx, _cache) => {
			const _component_n_breadcrumb_item = BreadcrumbItem_default;
			const _component_n_breadcrumb = Breadcrumb_default;
			const _component_n_space = Space_default;
			const _component_n_card = Card_default;
			const _component_n_data_table = DataTable_default;
			const _component_n_spin = Spin_default;
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_n_space, {
				vertical: "",
				size: 16
			}, {
				default: withCtx(() => [
					createBaseVNode("div", _hoisted_2, [createVNode(_component_n_breadcrumb, null, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(breadcrumbs), (item) => {
							return openBlock(), createBlock(_component_n_breadcrumb_item, {
								key: item.path,
								onClick: ($event) => goToPath(item.path)
							}, {
								default: withCtx(() => [createBaseVNode("span", _hoisted_3, toDisplayString(item.label), 1)]),
								_: 2
							}, 1032, ["onClick"]);
						}), 128))]),
						_: 1
					}), createVNode(_component_n_space, null, {
						default: withCtx(() => [
							createVNode(unref(Button), {
								disabled: !unref(parentPath) || unref(deleting),
								onClick: goParent
							}, {
								default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode("返回上级")])),
								_: 1
							}, 8, ["disabled"]),
							createVNode(unref(Button), {
								disabled: unref(deleting),
								onClick: refreshCurrent
							}, {
								default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode("刷新")])),
								_: 1
							}, 8, ["disabled"]),
							unref(hasDeletableItems) ? (openBlock(), createBlock(unref(Button), {
								key: 0,
								type: "error",
								disabled: unref(selectedFiles).length === 0 || unref(loading) || unref(deleting),
								loading: unref(deleting),
								onClick: removeSelectedFiles
							}, {
								default: withCtx(() => [createTextVNode(" 批量删除（" + toDisplayString(unref(selectedFiles).length) + "） ", 1)]),
								_: 1
							}, 8, ["disabled", "loading"])) : createCommentVNode("", true)
						]),
						_: 1
					})]),
					createVNode(_component_n_card, { size: "small" }, {
						default: withCtx(() => [createVNode(_component_n_space, {
							justify: "space-between",
							align: "center",
							wrap: ""
						}, {
							default: withCtx(() => [createVNode(unref(text_default), { depth: "3" }, {
								default: withCtx(() => [createTextVNode("当前路径：" + toDisplayString(unref(currentPath) || "--"), 1)]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(_component_n_spin, { show: unref(loading) }, {
						default: withCtx(() => [createVNode(_component_n_data_table, {
							columns: unref(columns),
							data: unref(items),
							"row-key": rowKey,
							"checked-row-keys": unref(checkedRowKeys),
							pagination: false,
							"onUpdate:checkedRowKeys": onCheckedRowKeysChange
						}, null, 8, [
							"columns",
							"data",
							"checked-row-keys"
						])]),
						_: 1
					}, 8, ["show"])
				]),
				_: 1
			})]);
		};
	}
}), [["__scopeId", "data-v-74e51e9d"]]);
//#endregion
export { FileBrowser_default as default };
