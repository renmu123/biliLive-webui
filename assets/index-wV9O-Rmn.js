import { m as cB, p as c, q as cE, n as cM, d as defineComponent, l as h, v as useConfig, y as useTheme, cU as breadcrumbLight, E as provide, J as toRef, x as computed, C as useThemeClass, D as createInjectionKey, r as ref, ax as onMounted, aE as onUnmounted, cn as isBrowser, S as inject, aG as resolveSlot, k as api, B as Button, c as createElementBlock, a as createVNode, w as withCtx, e as createBaseVNode, F as Fragment, ao as renderList, g as createBlock, t as toDisplayString, f as unref, j as createTextVNode, _ as __unplugin_components_3, o as openBlock } from "./index-CB8xvhFr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { u as useConfirm } from "./index--O4HUYks.js";
import { u as useNotice } from "./useNotice-D8AmCNaE.js";
import { a as toVideoPlayerPage } from "./pages-BFwPG4zS.js";
import { N as NTag } from "./Select-CYnthXY-.js";
import { _ as __unplugin_components_2 } from "./Space-Dcg2rQj1.js";
import { N as NText } from "./text-BHgaUKrH.js";
import { _ as __unplugin_components_5 } from "./Spin-BBY6Rzmi.js";
import { _ as __unplugin_components_4 } from "./DataTable-DBhKNBf2.js";
import "./common-1CgNZfMf.js";
import "./Checkbox-Buw5q29r.js";
import "./Input-C3jgSm1V.js";
import "./use-notification-Bzrm1lu9.js";
import "./recordHistory-CX6UkL3E.js";
import "./Popover-D4v8saSe.js";
import "./_getTag-22mR82vJ.js";
import "./Icon-D1o4HjX4.js";
import "./create-DfXrl36C.js";
import "./RadioGroup-CJq397k5.js";
import "./Tooltip-VU4s6Ip5.js";
import "./ChevronRight-BrIDHZkd.js";
import "./Dropdown-CwFZzQPI.js";
import "./create-ref-setter-slkfdNqs.js";
import "./Pagination-DTxcX5iK.js";
import "./Forward-C2N4dC5_.js";
const style = cB("breadcrumb", `
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`, [c("ul", `
 list-style: none;
 padding: 0;
 margin: 0;
 `), c("a", `
 color: inherit;
 text-decoration: inherit;
 `), cB("breadcrumb-item", `
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `, [cB("icon", `
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `), c("&:not(:last-child)", [cM("clickable", [cE("link", `
 cursor: pointer;
 `, [c("&:hover", `
 background-color: var(--n-item-color-hover);
 `), c("&:active", `
 background-color: var(--n-item-color-pressed); 
 `)])])]), cE("link", `
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
 `)])]), cE("separator", `
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `), c("&:last-child", [cE("link", `
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `, [cB("icon", `
 color: var(--n-item-text-color-active);
 `)]), cE("separator", `
 display: none;
 `)])])]);
const breadcrumbInjectionKey = createInjectionKey("n-breadcrumb");
const breadcrumbProps = Object.assign(Object.assign({}, useTheme.props), {
  separator: {
    type: String,
    default: "/"
  }
});
const __unplugin_components_1 = defineComponent({
  name: "Breadcrumb",
  props: breadcrumbProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Breadcrumb", "-breadcrumb", style, breadcrumbLight, props, mergedClsPrefixRef);
    provide(breadcrumbInjectionKey, {
      separatorRef: toRef(props, "separator"),
      mergedClsPrefixRef
    });
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          separatorColor,
          itemTextColor,
          itemTextColorHover,
          itemTextColorPressed,
          itemTextColorActive,
          fontSize,
          fontWeightActive,
          itemBorderRadius,
          itemColorHover,
          itemColorPressed,
          itemLineHeight
        }
      } = themeRef.value;
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
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("nav", {
      class: [`${this.mergedClsPrefix}-breadcrumb`, this.themeClass],
      style: this.cssVars,
      "aria-label": "Breadcrumb"
    }, h("ul", null, this.$slots));
  }
});
function useBrowserLocation(customWindow = isBrowser ? window : null) {
  const getWindowLocation = () => {
    const {
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    } = (customWindow === null || customWindow === void 0 ? void 0 : customWindow.location) || {};
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
const breadcrumbItemProps = {
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
};
const __unplugin_components_0 = defineComponent({
  name: "BreadcrumbItem",
  props: breadcrumbItemProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    const NBreadcrumb = inject(breadcrumbInjectionKey, null);
    if (!NBreadcrumb) {
      return () => null;
    }
    const {
      separatorRef,
      mergedClsPrefixRef
    } = NBreadcrumb;
    const browserLocationRef = useBrowserLocation();
    const htmlTagRef = computed(() => props.href ? "a" : "span");
    const ariaCurrentRef = computed(() => browserLocationRef.value.href === props.href ? "location" : null);
    return () => {
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      return h("li", {
        class: [`${mergedClsPrefix}-breadcrumb-item`, props.clickable && `${mergedClsPrefix}-breadcrumb-item--clickable`]
      }, h(htmlTagRef.value, {
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
async function list(path) {
  const res = await api.get("/files/list", {
    params: path ? { path } : void 0
  });
  return res.data;
}
async function createDownloadUrl(filePath) {
  const res = await api.post("/files/download", {
    path: filePath
  });
  return `${api.defaults.baseURL}/assets/download/${res.data.fileId}`;
}
async function removeFile(filePath) {
  const res = await api.post("/files/delete", {
    path: filePath
  });
  return res.data;
}
const fileBrowserApi = {
  list,
  createDownloadUrl,
  removeFile
};
const _hoisted_1 = { class: "file-browser-page" };
const _hoisted_2 = { class: "toolbar" };
const _hoisted_3 = { class: "breadcrumb-link" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "FileBrowser"
  },
  __name: "index",
  setup(__props) {
    const loading = ref(false);
    const items = ref([]);
    const rootPath = ref("");
    const currentPath = ref("");
    const parentPath = ref(null);
    const deleteEnabled = ref(false);
    const confirm = useConfirm();
    const notice = useNotice();
    const pathSeparator = computed(() => rootPath.value.includes("\\") ? "\\" : "/");
    const breadcrumbs = computed(() => {
      if (!rootPath.value) {
        return [];
      }
      const relativePath = currentPath.value.startsWith(rootPath.value) ? currentPath.value.slice(rootPath.value.length) : "";
      const segments = relativePath.split(/[\\/]+/).filter(Boolean);
      const result = [
        {
          label: "录制目录",
          path: rootPath.value
        }
      ];
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
      if (typeof size !== "number" || Number.isNaN(size) || size < 0) {
        return "--";
      }
      if (size < 1024) {
        return `${size} B`;
      }
      const units = ["KB", "MB", "GB", "TB"];
      let value = size / 1024;
      let unitIndex = 0;
      while (value >= 1024 && unitIndex < units.length - 1) {
        value /= 1024;
        unitIndex++;
      }
      return `${value.toFixed(value < 10 ? 1 : 0)} ${units[unitIndex]}`;
    };
    const formatTime = (timestamp) => {
      if (!timestamp) {
        return "--";
      }
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
        const data = await fileBrowserApi.list(path);
        items.value = data.list;
        rootPath.value = data.rootPath;
        currentPath.value = data.currentPath;
        parentPath.value = data.parentPath;
        deleteEnabled.value = data.deleteEnabled;
      } catch (error) {
        notice.error({
          title: error?.message || error || "获取文件列表失败"
        });
      } finally {
        loading.value = false;
      }
    };
    const goToPath = async (path) => {
      await fetchList(path);
    };
    const goParent = async () => {
      if (!parentPath.value) {
        return;
      }
      await fetchList(parentPath.value);
    };
    const refreshCurrent = async () => {
      await fetchList(currentPath.value || void 0);
    };
    const downloadFile = async (row) => {
      const url = await fileBrowserApi.createDownloadUrl(row.path);
      triggerBrowserDownload(url);
    };
    const isTsFile = (row) => row.name.toLowerCase().endsWith(".ts");
    const isPlayableVideo = (row) => row.type === "file" && row.fileKind === "video" && !isTsFile(row);
    const openPlayer = async (row) => {
      if (!isPlayableVideo(row)) {
        return;
      }
      toVideoPlayerPage({
        videoFilePath: row.path
      });
    };
    const removeFile2 = async (row) => {
      const [confirmed] = await confirm.warning({
        content: `确定删除文件 ${row.name} 吗？此操作不可撤销。`
      });
      if (!confirmed) {
        return;
      }
      try {
        await fileBrowserApi.removeFile(row.path);
        notice.success("删除成功");
        await refreshCurrent();
      } catch (error) {
        notice.error({
          title: error?.message || error || "删除失败"
        });
      }
    };
    const columns = computed(() => [
      {
        title: "名称",
        key: "name",
        render: (row) => {
          if (row.type === "directory") {
            return h(
              "span",
              {
                onClick: () => goToPath(row.path),
                style: {
                  cursor: "pointer",
                  display: "inline-block",
                  width: "100%"
                }
              },
              { default: () => `📁 ${row.name}` }
            );
          }
          return h(
            "span",
            {
              style: {
                cursor: "pointer",
                display: "inline-block",
                width: "100%"
              }
            },
            { default: () => `📄 ${row.name}` }
          );
        }
      },
      {
        title: "类型",
        key: "fileKind",
        render: (row) => {
          if (row.type === "directory") {
            return h(NTag, { size: "small" }, { default: () => "目录" });
          }
          return h(
            NTag,
            {
              size: "small",
              type: row.fileKind === "video" ? "success" : "info"
            },
            { default: () => row.fileKind === "video" ? "视频" : "文件" }
          );
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
          if (row.type === "directory") {
            return h(
              Button,
              {
                text: true,
                type: "primary",
                onClick: () => goToPath(row.path)
              },
              { default: () => "进入" }
            );
          }
          const actions = [
            h(
              Button,
              {
                text: true,
                type: "primary",
                onClick: () => downloadFile(row)
              },
              { default: () => "下载" }
            )
          ];
          if (row.fileKind === "video") {
            actions.unshift(
              h(
                Button,
                {
                  text: true,
                  type: "primary",
                  disabled: isTsFile(row),
                  onClick: () => openPlayer(row)
                },
                { default: () => isTsFile(row) ? "TS 不支持播放" : "播放" }
              )
            );
          }
          if (row.canDelete) {
            actions.push(
              h(
                Button,
                {
                  text: true,
                  type: "error",
                  onClick: () => removeFile2(row)
                },
                { default: () => "删除" }
              )
            );
          }
          return h(
            "div",
            {
              style: {
                display: "flex",
                gap: "12px"
              }
            },
            actions
          );
        }
      }
    ]);
    onMounted(() => {
      fetchList();
    });
    return (_ctx, _cache) => {
      const _component_n_breadcrumb_item = __unplugin_components_0;
      const _component_n_breadcrumb = __unplugin_components_1;
      const _component_n_space = __unplugin_components_2;
      const _component_n_card = __unplugin_components_3;
      const _component_n_data_table = __unplugin_components_4;
      const _component_n_spin = __unplugin_components_5;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n_space, {
          vertical: "",
          size: 16
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_n_breadcrumb, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(breadcrumbs), (item) => {
                    return openBlock(), createBlock(_component_n_breadcrumb_item, {
                      key: item.path,
                      onClick: ($event) => goToPath(item.path)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", _hoisted_3, toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_n_space, null, {
                default: withCtx(() => [
                  createVNode(unref(Button), {
                    disabled: !unref(parentPath),
                    onClick: goParent
                  }, {
                    default: withCtx(() => _cache[0] || (_cache[0] = [
                      createTextVNode("返回上级")
                    ])),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(unref(Button), { onClick: refreshCurrent }, {
                    default: withCtx(() => _cache[1] || (_cache[1] = [
                      createTextVNode("刷新")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createVNode(_component_n_card, { size: "small" }, {
              default: withCtx(() => [
                createVNode(_component_n_space, {
                  justify: "space-between",
                  align: "center",
                  wrap: ""
                }, {
                  default: withCtx(() => [
                    createVNode(unref(NText), { depth: "3" }, {
                      default: withCtx(() => [
                        createTextVNode("当前路径：" + toDisplayString(unref(currentPath) || "--"), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_n_spin, { show: unref(loading) }, {
              default: withCtx(() => [
                createVNode(_component_n_data_table, {
                  columns: unref(columns),
                  data: unref(items),
                  pagination: false
                }, null, 8, ["columns", "data"])
              ]),
              _: 1
            }, 8, ["show"])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-08ae84a1"]]);
export {
  index as default
};
