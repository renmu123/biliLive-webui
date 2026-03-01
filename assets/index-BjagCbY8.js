import { d as defineComponent, l as h, y as useTheme, D as createInjectionKey, ay as depx, S as inject, m as cB, s as cNotM, n as cM, cp as useMergedClsPrefix, cq as ellipsisLight, r as ref, x as computed, al as onDeactivated, a1 as mergeProps, a$ as useStyle, bx as NIconSwitchTransition, bo as NBaseLoading, M as NBaseIcon, T as Scrollbar, B as Button, v as useConfig, A as useRtl, bn as onBeforeUnmount, b8 as off, b7 as on, bz as pxfy, F as Fragment, Z as VResizeObserver, Q as useMemo, p as c, a0 as watchEffect, cr as cssrAnchorMetaName, am as onUnmounted, cs as repeat, aC as resolveSlot, bd as warn, ct as configProviderInjectionKey, aI as insideModal, aJ as insidePopover, q as cE, be as fadeInScaleUpTransition, bv as iconSwitchTransition, G as call, J as toRef, a5 as watch, bf as Transition, cu as dataTableLight, E as provide, P as createId, av as createKey, C as useThemeClass, k as api, c as createElementBlock, e as createBaseVNode, o as openBlock, aO as reactive, ac as useRoute, ae as onMounted, g as createBlock, h as createCommentVNode, a as createVNode, f as unref, i as isRef, w as withCtx, _ as __unplugin_components_4, j as createTextVNode, t as toDisplayString, u as useRouter } from "./index-gjuLIDoI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-B1lyReKF.js";
import { c as common } from "./common-Da25N27f.js";
import { u as useConfirm } from "./index-BZWV_urK.js";
import { u as useVisibleColumns, _ as _sfc_main$1 } from "./ColumnSelector.vue_vue_type_script_setup_true_lang-CZnLEBFx.js";
import { _ as _sfc_main$2 } from "./previewModal.vue_vue_type_script_setup_true_lang-V5CeVPk_.js";
import { u as useNotice } from "./useNotice-BnaW_JYm.js";
import { F as FileOpenOutlined, D as DownloadOutline } from "./FileOpenOutlined-DDa_qN6F.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-K-p0ASPr.js";
import { f as formatLength, N as NIcon } from "./Icon-D2Zo6Coc.js";
import { _ as __unplugin_components_1, a as __unplugin_components_2 } from "./Checkbox-pQXdXXSK.js";
import { a as __unplugin_components_3, _ as __unplugin_components_5$1 } from "./RadioGroup-Bd7Skk-n.js";
import { N as NTooltip } from "./Tooltip-aQpp0WSp.js";
import { g as get, _ as __unplugin_components_2$1, h as beforeNextFrameOnce } from "./Popover-T5GorXob.js";
import { C as ChevronRightIcon } from "./ChevronRight-CONDXL5I.js";
import { _ as __unplugin_components_1$1 } from "./Dropdown-DBKZZG83.js";
import { C as ChevronDownIcon, u as useLocale } from "./Input--Gp3P9gj.js";
import { c as VVirtualList, b as __unplugin_components_8, a as __unplugin_components_2$2 } from "./Select-xWcqChuz.js";
import { h as happensIn, c as createTreeMate } from "./create-DfXrl36C.js";
import { a as useMergedState } from "./use-notification-LRtjAvoZ.js";
import { g as getDefaultPageSize, _ as __unplugin_components_6 } from "./Pagination-kMhNeoDI.js";
import { _ as __unplugin_components_0 } from "./DatePicker-BJdnwtM2.js";
import { _ as __unplugin_components_7 } from "./Spin-CLVf7OzA.js";
import { _ as __unplugin_components_3$1 } from "./Space-BBiSHRV-.js";
import "./Index.vue_vue_type_style_index_0_lang-CuMJDjM4.js";
import "./danma-C4jBzCCd.js";
import "./_getTag-NYFG1GAg.js";
import "./create-ref-setter-DXkZaMbS.js";
import "./TimePicker-6LkPrZvv.js";
function download(url, name) {
  if (!url) return;
  const a = document.createElement("a");
  a.href = url;
  if (name !== void 0) {
    a.download = name;
  }
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
const ArrowDownIcon = defineComponent({
  name: "ArrowDown",
  render() {
    return h("svg", {
      viewBox: "0 0 28 28",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("g", {
      stroke: "none",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, h("g", {
      "fill-rule": "nonzero"
    }, h("path", {
      d: "M23.7916,15.2664 C24.0788,14.9679 24.0696,14.4931 23.7711,14.206 C23.4726,13.9188 22.9978,13.928 22.7106,14.2265 L14.7511,22.5007 L14.7511,3.74792 C14.7511,3.33371 14.4153,2.99792 14.0011,2.99792 C13.5869,2.99792 13.2511,3.33371 13.2511,3.74793 L13.2511,22.4998 L5.29259,14.2265 C5.00543,13.928 4.53064,13.9188 4.23213,14.206 C3.93361,14.4931 3.9244,14.9679 4.21157,15.2664 L13.2809,24.6944 C13.6743,25.1034 14.3289,25.1034 14.7223,24.6944 L23.7916,15.2664 Z"
    }))));
  }
});
const FilterIcon = defineComponent({
  name: "Filter",
  render() {
    return h("svg", {
      viewBox: "0 0 28 28",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("g", {
      stroke: "none",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, h("g", {
      "fill-rule": "nonzero"
    }, h("path", {
      d: "M17,19 C17.5522847,19 18,19.4477153 18,20 C18,20.5522847 17.5522847,21 17,21 L11,21 C10.4477153,21 10,20.5522847 10,20 C10,19.4477153 10.4477153,19 11,19 L17,19 Z M21,13 C21.5522847,13 22,13.4477153 22,14 C22,14.5522847 21.5522847,15 21,15 L7,15 C6.44771525,15 6,14.5522847 6,14 C6,13.4477153 6.44771525,13 7,13 L21,13 Z M24,7 C24.5522847,7 25,7.44771525 25,8 C25,8.55228475 24.5522847,9 24,9 L4,9 C3.44771525,9 3,8.55228475 3,8 C3,7.44771525 3.44771525,7 4,7 L24,7 Z"
    }))));
  }
});
const dataTableProps = Object.assign(Object.assign({}, useTheme.props), {
  onUnstableColumnResize: Function,
  pagination: {
    type: [Object, Boolean],
    default: false
  },
  paginateSinglePage: {
    type: Boolean,
    default: true
  },
  minHeight: [Number, String],
  maxHeight: [Number, String],
  // Use any type as row data to make prop data acceptable
  columns: {
    type: Array,
    default: () => []
  },
  rowClassName: [String, Function],
  rowProps: Function,
  rowKey: Function,
  summary: [Function],
  data: {
    type: Array,
    default: () => []
  },
  loading: Boolean,
  bordered: {
    type: Boolean,
    default: void 0
  },
  bottomBordered: {
    type: Boolean,
    default: void 0
  },
  striped: Boolean,
  scrollX: [Number, String],
  defaultCheckedRowKeys: {
    type: Array,
    default: () => []
  },
  checkedRowKeys: Array,
  singleLine: {
    type: Boolean,
    default: true
  },
  singleColumn: Boolean,
  size: {
    type: String,
    default: "medium"
  },
  remote: Boolean,
  defaultExpandedRowKeys: {
    type: Array,
    default: []
  },
  defaultExpandAll: Boolean,
  expandedRowKeys: Array,
  stickyExpandedRows: Boolean,
  virtualScroll: Boolean,
  virtualScrollX: Boolean,
  virtualScrollHeader: Boolean,
  headerHeight: {
    type: Number,
    default: 28
  },
  heightForRow: Function,
  minRowHeight: {
    type: Number,
    default: 28
  },
  tableLayout: {
    type: String,
    default: "auto"
  },
  allowCheckingNotLoaded: Boolean,
  cascade: {
    type: Boolean,
    default: true
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  indent: {
    type: Number,
    default: 16
  },
  flexHeight: Boolean,
  summaryPlacement: {
    type: String,
    default: "bottom"
  },
  paginationBehaviorOnFilter: {
    type: String,
    default: "current"
  },
  filterIconPopoverProps: Object,
  scrollbarProps: Object,
  renderCell: Function,
  renderExpandIcon: Function,
  spinProps: {
    type: Object,
    default: {}
  },
  getCsvCell: Function,
  getCsvHeader: Function,
  onLoad: Function,
  "onUpdate:page": [Function, Array],
  onUpdatePage: [Function, Array],
  "onUpdate:pageSize": [Function, Array],
  onUpdatePageSize: [Function, Array],
  "onUpdate:sorter": [Function, Array],
  onUpdateSorter: [Function, Array],
  "onUpdate:filters": [Function, Array],
  onUpdateFilters: [Function, Array],
  "onUpdate:checkedRowKeys": [Function, Array],
  onUpdateCheckedRowKeys: [Function, Array],
  "onUpdate:expandedRowKeys": [Function, Array],
  onUpdateExpandedRowKeys: [Function, Array],
  onScroll: Function,
  // deprecated
  onPageChange: [Function, Array],
  onPageSizeChange: [Function, Array],
  onSorterChange: [Function, Array],
  onFiltersChange: [Function, Array],
  onCheckedRowKeysChange: [Function, Array]
});
const dataTableInjectionKey = createInjectionKey("n-data-table");
const SELECTION_COL_WIDTH = 40;
const EXPAND_COL_WIDTH = 40;
function getNumberColWidth(col) {
  if (col.type === "selection") {
    return col.width === void 0 ? SELECTION_COL_WIDTH : depx(col.width);
  }
  if (col.type === "expand") {
    return col.width === void 0 ? EXPAND_COL_WIDTH : depx(col.width);
  }
  if ("children" in col) return void 0;
  if (typeof col.width === "string") {
    return depx(col.width);
  }
  return col.width;
}
function getStringColWidth(col) {
  var _a, _b;
  if (col.type === "selection") {
    return formatLength((_a = col.width) !== null && _a !== void 0 ? _a : SELECTION_COL_WIDTH);
  }
  if (col.type === "expand") {
    return formatLength((_b = col.width) !== null && _b !== void 0 ? _b : EXPAND_COL_WIDTH);
  }
  if ("children" in col) {
    return void 0;
  }
  return formatLength(col.width);
}
function getColKey(col) {
  if (col.type === "selection") return "__n_selection__";
  if (col.type === "expand") return "__n_expand__";
  return col.key;
}
function createShallowClonedObject(object) {
  if (!object) return object;
  if (typeof object === "object") {
    return Object.assign({}, object);
  }
  return object;
}
function getFlagOfOrder(order) {
  if (order === "ascend") return 1;
  else if (order === "descend") return -1;
  return 0;
}
function clampValueFollowCSSRules(value, min, max) {
  if (max !== void 0) {
    value = Math.min(value, typeof max === "number" ? max : Number.parseFloat(max));
  }
  if (min !== void 0) {
    value = Math.max(value, typeof min === "number" ? min : Number.parseFloat(min));
  }
  return value;
}
function createCustomWidthStyle(column, resizedWidth) {
  if (resizedWidth !== void 0) {
    return {
      width: resizedWidth,
      minWidth: resizedWidth,
      maxWidth: resizedWidth
    };
  }
  const width = getStringColWidth(column);
  const {
    minWidth,
    maxWidth
  } = column;
  return {
    width,
    minWidth: formatLength(minWidth) || width,
    maxWidth: formatLength(maxWidth)
  };
}
function createRowClassName(row, index2, rowClassName) {
  if (typeof rowClassName === "function") return rowClassName(row, index2);
  return rowClassName || "";
}
function shouldUseArrayInSingleMode(column) {
  return column.filterOptionValues !== void 0 || column.filterOptionValue === void 0 && column.defaultFilterOptionValues !== void 0;
}
function isColumnSortable(column) {
  if ("children" in column) return false;
  return !!column.sorter;
}
function isColumnResizable(column) {
  if ("children" in column && !!column.children.length) return false;
  return !!column.resizable;
}
function isColumnFilterable(column) {
  if ("children" in column) return false;
  return !!column.filter && (!!column.filterOptions || !!column.renderFilterMenu);
}
function getNextOrderOf(order) {
  if (!order) return "descend";
  else if (order === "descend") return "ascend";
  return false;
}
function createNextSorter(column, currentSortState) {
  if (column.sorter === void 0) return null;
  if (currentSortState === null || currentSortState.columnKey !== column.key) {
    return {
      columnKey: column.key,
      sorter: column.sorter,
      order: getNextOrderOf(false)
    };
  } else {
    return Object.assign(Object.assign({}, currentSortState), {
      order: getNextOrderOf(currentSortState.order)
    });
  }
}
function isColumnSorting(column, mergedSortState) {
  return mergedSortState.find((state) => state.columnKey === column.key && state.order) !== void 0;
}
function formatCsvCell(value) {
  if (typeof value === "string") {
    return value.replace(/,/g, "\\,");
  } else if (value === null || value === void 0) {
    return "";
  } else {
    return `${value}`.replace(/,/g, "\\,");
  }
}
function generateCsv(columns, data, getCsvCell, getCsvHeader) {
  const exportableColumns = columns.filter((column) => column.type !== "expand" && column.type !== "selection" && column.allowExport !== false);
  const header = exportableColumns.map((col) => {
    return getCsvHeader ? getCsvHeader(col) : col.title;
  }).join(",");
  const rows = data.map((row) => {
    return exportableColumns.map((col) => {
      return getCsvCell ? getCsvCell(row[col.key], row, col) : formatCsvCell(row[col.key]);
    }).join(",");
  });
  return [header, ...rows].join("\n");
}
const RenderSafeCheckbox = defineComponent({
  name: "DataTableBodyCheckbox",
  props: {
    rowKey: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
    onUpdateChecked: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const {
      mergedCheckedRowKeySetRef,
      mergedInderminateRowKeySetRef
    } = inject(dataTableInjectionKey);
    return () => {
      const {
        rowKey
      } = props;
      return h(__unplugin_components_1, {
        privateInsideTable: true,
        disabled: props.disabled,
        indeterminate: mergedInderminateRowKeySetRef.value.has(rowKey),
        checked: mergedCheckedRowKeySetRef.value.has(rowKey),
        onUpdateChecked: props.onUpdateChecked
      });
    };
  }
});
const RenderSafeRadio = defineComponent({
  name: "DataTableBodyRadio",
  props: {
    rowKey: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
    onUpdateChecked: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const {
      mergedCheckedRowKeySetRef,
      componentId
    } = inject(dataTableInjectionKey);
    return () => {
      const {
        rowKey
      } = props;
      return h(__unplugin_components_3, {
        name: componentId,
        disabled: props.disabled,
        checked: mergedCheckedRowKeySetRef.value.has(rowKey),
        onUpdateChecked: props.onUpdateChecked
      });
    };
  }
});
const style$1 = cB("ellipsis", {
  overflow: "hidden"
}, [cNotM("line-clamp", `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `), cM("line-clamp", `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `), cM("cursor-pointer", `
 cursor: pointer;
 `)]);
function createLineClampClass(clsPrefix) {
  return `${clsPrefix}-ellipsis--line-clamp`;
}
function createCursorClass(clsPrefix, cursor) {
  return `${clsPrefix}-ellipsis--cursor-${cursor}`;
}
const ellipsisProps = Object.assign(Object.assign({}, useTheme.props), {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Boolean, Object],
    default: true
  }
});
const NEllipsis = defineComponent({
  name: "Ellipsis",
  inheritAttrs: false,
  props: ellipsisProps,
  setup(props, {
    slots,
    attrs
  }) {
    const mergedClsPrefixRef = useMergedClsPrefix();
    const mergedTheme = useTheme("Ellipsis", "-ellipsis", style$1, ellipsisLight, props, mergedClsPrefixRef);
    const triggerRef = ref(null);
    const triggerInnerRef = ref(null);
    const tooltipRef = ref(null);
    const expandedRef = ref(false);
    const ellipsisStyleRef = computed(() => {
      const {
        lineClamp
      } = props;
      const {
        value: expanded
      } = expandedRef;
      if (lineClamp !== void 0) {
        return {
          textOverflow: "",
          "-webkit-line-clamp": expanded ? "" : lineClamp
        };
      } else {
        return {
          textOverflow: expanded ? "" : "ellipsis",
          "-webkit-line-clamp": ""
        };
      }
    });
    function getTooltipDisabled() {
      let tooltipDisabled = false;
      const {
        value: expanded
      } = expandedRef;
      if (expanded) return true;
      const {
        value: trigger
      } = triggerRef;
      if (trigger) {
        const {
          lineClamp
        } = props;
        syncEllipsisStyle(trigger);
        if (lineClamp !== void 0) {
          tooltipDisabled = trigger.scrollHeight <= trigger.offsetHeight;
        } else {
          const {
            value: triggerInner
          } = triggerInnerRef;
          if (triggerInner) {
            tooltipDisabled = triggerInner.getBoundingClientRect().width <= trigger.getBoundingClientRect().width;
          }
        }
        syncCursorStyle(trigger, tooltipDisabled);
      }
      return tooltipDisabled;
    }
    const handleClickRef = computed(() => {
      return props.expandTrigger === "click" ? () => {
        var _a;
        const {
          value: expanded
        } = expandedRef;
        if (expanded) {
          (_a = tooltipRef.value) === null || _a === void 0 ? void 0 : _a.setShow(false);
        }
        expandedRef.value = !expanded;
      } : void 0;
    });
    onDeactivated(() => {
      var _a;
      if (props.tooltip) {
        (_a = tooltipRef.value) === null || _a === void 0 ? void 0 : _a.setShow(false);
      }
    });
    const renderTrigger = () => h("span", Object.assign({}, mergeProps(attrs, {
      class: [`${mergedClsPrefixRef.value}-ellipsis`, props.lineClamp !== void 0 ? createLineClampClass(mergedClsPrefixRef.value) : void 0, props.expandTrigger === "click" ? createCursorClass(mergedClsPrefixRef.value, "pointer") : void 0],
      style: ellipsisStyleRef.value
    }), {
      ref: "triggerRef",
      onClick: handleClickRef.value,
      onMouseenter: (
        // get tooltip disabled will derive cursor style
        props.expandTrigger === "click" ? getTooltipDisabled : void 0
      )
    }), props.lineClamp ? slots : h("span", {
      ref: "triggerInnerRef"
    }, slots));
    function syncEllipsisStyle(trigger) {
      if (!trigger) return;
      const latestStyle = ellipsisStyleRef.value;
      const lineClampClass = createLineClampClass(mergedClsPrefixRef.value);
      if (props.lineClamp !== void 0) {
        syncTriggerClass(trigger, lineClampClass, "add");
      } else {
        syncTriggerClass(trigger, lineClampClass, "remove");
      }
      for (const key in latestStyle) {
        if (trigger.style[key] !== latestStyle[key]) {
          trigger.style[key] = latestStyle[key];
        }
      }
    }
    function syncCursorStyle(trigger, tooltipDisabled) {
      const cursorClass = createCursorClass(mergedClsPrefixRef.value, "pointer");
      if (props.expandTrigger === "click" && !tooltipDisabled) {
        syncTriggerClass(trigger, cursorClass, "add");
      } else {
        syncTriggerClass(trigger, cursorClass, "remove");
      }
    }
    function syncTriggerClass(trigger, styleClass, action) {
      if (action === "add") {
        if (!trigger.classList.contains(styleClass)) {
          trigger.classList.add(styleClass);
        }
      } else {
        if (trigger.classList.contains(styleClass)) {
          trigger.classList.remove(styleClass);
        }
      }
    }
    return {
      mergedTheme,
      triggerRef,
      triggerInnerRef,
      tooltipRef,
      handleClick: handleClickRef,
      renderTrigger,
      getTooltipDisabled
    };
  },
  render() {
    var _a;
    const {
      tooltip,
      renderTrigger,
      $slots
    } = this;
    if (tooltip) {
      const {
        mergedTheme
      } = this;
      return h(NTooltip, Object.assign({
        ref: "tooltipRef",
        placement: "top"
      }, tooltip, {
        getDisabled: this.getTooltipDisabled,
        theme: mergedTheme.peers.Tooltip,
        themeOverrides: mergedTheme.peerOverrides.Tooltip
      }), {
        trigger: renderTrigger,
        default: (_a = $slots.tooltip) !== null && _a !== void 0 ? _a : $slots.default
      });
    } else {
      return renderTrigger();
    }
  }
});
const NPerformantEllipsis = defineComponent({
  name: "PerformantEllipsis",
  props: ellipsisProps,
  inheritAttrs: false,
  setup(props, {
    attrs,
    slots
  }) {
    const mouseEnteredRef = ref(false);
    const mergedClsPrefixRef = useMergedClsPrefix();
    useStyle("-ellipsis", style$1, mergedClsPrefixRef);
    const renderTrigger = () => {
      const {
        lineClamp
      } = props;
      const mergedClsPrefix = mergedClsPrefixRef.value;
      return h("span", Object.assign({}, mergeProps(attrs, {
        class: [`${mergedClsPrefix}-ellipsis`, lineClamp !== void 0 ? createLineClampClass(mergedClsPrefix) : void 0, props.expandTrigger === "click" ? createCursorClass(mergedClsPrefix, "pointer") : void 0],
        style: lineClamp === void 0 ? {
          textOverflow: "ellipsis"
        } : {
          "-webkit-line-clamp": lineClamp
        }
      }), {
        onMouseenter: () => {
          mouseEnteredRef.value = true;
        }
      }), lineClamp ? slots : h("span", null, slots));
    };
    return {
      mouseEntered: mouseEnteredRef,
      renderTrigger
    };
  },
  render() {
    if (this.mouseEntered) {
      return h(NEllipsis, mergeProps({}, this.$attrs, this.$props), this.$slots);
    } else {
      return this.renderTrigger();
    }
  }
});
const Cell = defineComponent({
  name: "DataTableCell",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    row: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    column: {
      type: Object,
      required: true
    },
    isSummary: Boolean,
    mergedTheme: {
      type: Object,
      required: true
    },
    renderCell: Function
  },
  render() {
    var _a;
    const {
      isSummary,
      column,
      row,
      renderCell
    } = this;
    let cell;
    const {
      render: render3,
      key,
      ellipsis
    } = column;
    if (render3 && !isSummary) {
      cell = render3(row, this.index);
    } else {
      if (isSummary) {
        cell = (_a = row[key]) === null || _a === void 0 ? void 0 : _a.value;
      } else {
        cell = renderCell ? renderCell(get(row, key), row, column) : get(row, key);
      }
    }
    if (ellipsis) {
      if (typeof ellipsis === "object") {
        const {
          mergedTheme
        } = this;
        if (column.ellipsisComponent === "performant-ellipsis") {
          return h(NPerformantEllipsis, Object.assign({}, ellipsis, {
            theme: mergedTheme.peers.Ellipsis,
            themeOverrides: mergedTheme.peerOverrides.Ellipsis
          }), {
            default: () => cell
          });
        }
        return h(NEllipsis, Object.assign({}, ellipsis, {
          theme: mergedTheme.peers.Ellipsis,
          themeOverrides: mergedTheme.peerOverrides.Ellipsis
        }), {
          default: () => cell
        });
      } else {
        return h("span", {
          class: `${this.clsPrefix}-data-table-td__ellipsis`
        }, cell);
      }
    }
    return cell;
  }
});
const ExpandTrigger = defineComponent({
  name: "DataTableExpandTrigger",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    expanded: Boolean,
    loading: Boolean,
    onClick: {
      type: Function,
      required: true
    },
    renderExpandIcon: {
      type: Function
    },
    rowData: {
      type: Object,
      required: true
    }
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: [`${clsPrefix}-data-table-expand-trigger`, this.expanded && `${clsPrefix}-data-table-expand-trigger--expanded`],
      onClick: this.onClick,
      onMousedown: (e) => {
        e.preventDefault();
      }
    }, h(NIconSwitchTransition, null, {
      default: () => {
        return this.loading ? h(NBaseLoading, {
          key: "loading",
          clsPrefix: this.clsPrefix,
          radius: 85,
          strokeWidth: 15,
          scale: 0.88
        }) : this.renderExpandIcon ? this.renderExpandIcon({
          expanded: this.expanded,
          rowData: this.rowData
        }) : h(NBaseIcon, {
          clsPrefix,
          key: "base-icon"
        }, {
          default: () => h(ChevronRightIcon, null)
        });
      }
    }));
  }
});
const NDataTableFilterMenu = defineComponent({
  name: "DataTableFilterMenu",
  props: {
    column: {
      type: Object,
      required: true
    },
    radioGroupName: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      required: true
    },
    value: {
      type: [Array, String, Number],
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    onConfirm: {
      type: Function,
      required: true
    },
    onClear: {
      type: Function,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const {
      mergedClsPrefixRef: mergedClsPrefixRefRtl,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl("DataTable", mergedRtlRef, mergedClsPrefixRefRtl);
    const {
      mergedClsPrefixRef,
      mergedThemeRef,
      localeRef
    } = inject(dataTableInjectionKey);
    const temporalValueRef = ref(props.value);
    const checkboxGroupValueRef = computed(() => {
      const {
        value: temporalValue
      } = temporalValueRef;
      if (!Array.isArray(temporalValue)) return null;
      return temporalValue;
    });
    const radioGroupValueRef = computed(() => {
      const {
        value: temporalValue
      } = temporalValueRef;
      if (shouldUseArrayInSingleMode(props.column)) {
        return Array.isArray(temporalValue) && temporalValue.length && temporalValue[0] || null;
      }
      if (!Array.isArray(temporalValue)) return temporalValue;
      return null;
    });
    function doChange(value) {
      props.onChange(value);
    }
    function handleChange(value) {
      if (props.multiple && Array.isArray(value)) {
        temporalValueRef.value = value;
      } else if (shouldUseArrayInSingleMode(props.column) && !Array.isArray(value)) {
        temporalValueRef.value = [value];
      } else {
        temporalValueRef.value = value;
      }
    }
    function handleConfirmClick() {
      doChange(temporalValueRef.value);
      props.onConfirm();
    }
    function handleClearClick() {
      if (props.multiple || shouldUseArrayInSingleMode(props.column)) {
        doChange([]);
      } else {
        doChange(null);
      }
      props.onClear();
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      mergedTheme: mergedThemeRef,
      locale: localeRef,
      checkboxGroupValue: checkboxGroupValueRef,
      radioGroupValue: radioGroupValueRef,
      handleChange,
      handleConfirmClick,
      handleClearClick
    };
  },
  render() {
    const {
      mergedTheme,
      locale,
      mergedClsPrefix
    } = this;
    return h("div", {
      class: [`${mergedClsPrefix}-data-table-filter-menu`, this.rtlEnabled && `${mergedClsPrefix}-data-table-filter-menu--rtl`]
    }, h(Scrollbar, null, {
      default: () => {
        const {
          checkboxGroupValue,
          handleChange
        } = this;
        return this.multiple ? h(__unplugin_components_2, {
          value: checkboxGroupValue,
          class: `${mergedClsPrefix}-data-table-filter-menu__group`,
          onUpdateValue: handleChange
        }, {
          default: () => this.options.map((option) => {
            return h(__unplugin_components_1, {
              key: option.value,
              theme: mergedTheme.peers.Checkbox,
              themeOverrides: mergedTheme.peerOverrides.Checkbox,
              value: option.value
            }, {
              default: () => option.label
            });
          })
        }) : h(__unplugin_components_5$1, {
          name: this.radioGroupName,
          class: `${mergedClsPrefix}-data-table-filter-menu__group`,
          value: this.radioGroupValue,
          onUpdateValue: this.handleChange
        }, {
          default: () => this.options.map((option) => h(__unplugin_components_3, {
            key: option.value,
            value: option.value,
            theme: mergedTheme.peers.Radio,
            themeOverrides: mergedTheme.peerOverrides.Radio
          }, {
            default: () => option.label
          }))
        });
      }
    }), h("div", {
      class: `${mergedClsPrefix}-data-table-filter-menu__action`
    }, h(Button, {
      size: "tiny",
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      onClick: this.handleClearClick
    }, {
      default: () => locale.clear
    }), h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      type: "primary",
      size: "tiny",
      onClick: this.handleConfirmClick
    }, {
      default: () => locale.confirm
    })));
  }
});
const RenderFilter = defineComponent({
  name: "DataTableRenderFilter",
  props: {
    render: {
      type: Function,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const {
      render: render3,
      active,
      show
    } = this;
    return render3({
      active,
      show
    });
  }
});
function createFilterState(currentFilterState, columnKey, mergedFilterValue) {
  const nextFilterState = Object.assign({}, currentFilterState);
  nextFilterState[columnKey] = mergedFilterValue;
  return nextFilterState;
}
const FilterButton = defineComponent({
  name: "DataTableFilterButton",
  props: {
    column: {
      type: Object,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const {
      mergedComponentPropsRef
    } = useConfig();
    const {
      mergedThemeRef,
      mergedClsPrefixRef,
      mergedFilterStateRef,
      filterMenuCssVarsRef,
      paginationBehaviorOnFilterRef,
      doUpdatePage,
      doUpdateFilters,
      filterIconPopoverPropsRef
    } = inject(dataTableInjectionKey);
    const showPopoverRef = ref(false);
    const filterStateRef = mergedFilterStateRef;
    const filterMultipleRef = computed(() => {
      return props.column.filterMultiple !== false;
    });
    const mergedFilterValueRef = computed(() => {
      const filterValue = filterStateRef.value[props.column.key];
      if (filterValue === void 0) {
        const {
          value: multiple
        } = filterMultipleRef;
        if (multiple) return [];
        else return null;
      }
      return filterValue;
    });
    const activeRef = computed(() => {
      const {
        value: filterValue
      } = mergedFilterValueRef;
      if (Array.isArray(filterValue)) {
        return filterValue.length > 0;
      }
      return filterValue !== null;
    });
    const mergedRenderFilterRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.DataTable) === null || _b === void 0 ? void 0 : _b.renderFilter) || props.column.renderFilter;
    });
    function handleFilterChange(mergedFilterValue) {
      const nextFilterState = createFilterState(filterStateRef.value, props.column.key, mergedFilterValue);
      doUpdateFilters(nextFilterState, props.column);
      if (paginationBehaviorOnFilterRef.value === "first") {
        doUpdatePage(1);
      }
    }
    function handleFilterMenuCancel() {
      showPopoverRef.value = false;
    }
    function handleFilterMenuConfirm() {
      showPopoverRef.value = false;
    }
    return {
      mergedTheme: mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      showPopover: showPopoverRef,
      mergedRenderFilter: mergedRenderFilterRef,
      filterIconPopoverProps: filterIconPopoverPropsRef,
      filterMultiple: filterMultipleRef,
      mergedFilterValue: mergedFilterValueRef,
      filterMenuCssVars: filterMenuCssVarsRef,
      handleFilterChange,
      handleFilterMenuConfirm,
      handleFilterMenuCancel
    };
  },
  render() {
    const {
      mergedTheme,
      mergedClsPrefix,
      handleFilterMenuCancel,
      filterIconPopoverProps
    } = this;
    return h(__unplugin_components_2$1, Object.assign({
      show: this.showPopover,
      onUpdateShow: (v) => this.showPopover = v,
      trigger: "click",
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      placement: "bottom"
    }, filterIconPopoverProps, {
      style: {
        padding: 0
      }
    }), {
      trigger: () => {
        const {
          mergedRenderFilter
        } = this;
        if (mergedRenderFilter) {
          return h(RenderFilter, {
            "data-data-table-filter": true,
            render: mergedRenderFilter,
            active: this.active,
            show: this.showPopover
          });
        }
        const {
          renderFilterIcon
        } = this.column;
        return h("div", {
          "data-data-table-filter": true,
          class: [`${mergedClsPrefix}-data-table-filter`, {
            [`${mergedClsPrefix}-data-table-filter--active`]: this.active,
            [`${mergedClsPrefix}-data-table-filter--show`]: this.showPopover
          }]
        }, renderFilterIcon ? renderFilterIcon({
          active: this.active,
          show: this.showPopover
        }) : h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(FilterIcon, null)
        }));
      },
      default: () => {
        const {
          renderFilterMenu
        } = this.column;
        return renderFilterMenu ? renderFilterMenu({
          hide: handleFilterMenuCancel
        }) : h(NDataTableFilterMenu, {
          style: this.filterMenuCssVars,
          radioGroupName: String(this.column.key),
          multiple: this.filterMultiple,
          value: this.mergedFilterValue,
          options: this.options,
          column: this.column,
          onChange: this.handleFilterChange,
          onClear: this.handleFilterMenuCancel,
          onConfirm: this.handleFilterMenuConfirm
        });
      }
    });
  }
});
const ResizeButton = defineComponent({
  name: "ColumnResizeButton",
  props: {
    onResizeStart: Function,
    onResize: Function,
    onResizeEnd: Function
  },
  setup(props) {
    const {
      mergedClsPrefixRef
    } = inject(dataTableInjectionKey);
    const activeRef = ref(false);
    let startX = 0;
    function getMouseX(e) {
      return e.clientX;
    }
    function handleMousedown(e) {
      var _a;
      e.preventDefault();
      const alreadyStarted = activeRef.value;
      startX = getMouseX(e);
      activeRef.value = true;
      if (!alreadyStarted) {
        on("mousemove", window, handleMousemove);
        on("mouseup", window, handleMouseup);
        (_a = props.onResizeStart) === null || _a === void 0 ? void 0 : _a.call(props);
      }
    }
    function handleMousemove(e) {
      var _a;
      (_a = props.onResize) === null || _a === void 0 ? void 0 : _a.call(props, getMouseX(e) - startX);
    }
    function handleMouseup() {
      var _a;
      activeRef.value = false;
      (_a = props.onResizeEnd) === null || _a === void 0 ? void 0 : _a.call(props);
      off("mousemove", window, handleMousemove);
      off("mouseup", window, handleMouseup);
    }
    onBeforeUnmount(() => {
      off("mousemove", window, handleMousemove);
      off("mouseup", window, handleMouseup);
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      handleMousedown
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("span", {
      "data-data-table-resizable": true,
      class: [`${mergedClsPrefix}-data-table-resize-button`, this.active && `${mergedClsPrefix}-data-table-resize-button--active`],
      onMousedown: this.handleMousedown
    });
  }
});
const RenderSorter = defineComponent({
  name: "DataTableRenderSorter",
  props: {
    render: {
      type: Function,
      required: true
    },
    order: {
      // asc, desc
      type: [String, Boolean],
      default: false
    }
  },
  render() {
    const {
      render: render3,
      order
    } = this;
    return render3({
      order
    });
  }
});
const SortButton = defineComponent({
  name: "SortIcon",
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {
      mergedComponentPropsRef
    } = useConfig();
    const {
      mergedSortStateRef,
      mergedClsPrefixRef
    } = inject(dataTableInjectionKey);
    const sortStateRef = computed(() => mergedSortStateRef.value.find((state) => state.columnKey === props.column.key));
    const activeRef = computed(() => {
      return sortStateRef.value !== void 0;
    });
    const mergedSortOrderRef = computed(() => {
      const {
        value: sortState
      } = sortStateRef;
      if (sortState && activeRef.value) {
        return sortState.order;
      }
      return false;
    });
    const mergedRenderSorterRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.DataTable) === null || _b === void 0 ? void 0 : _b.renderSorter) || props.column.renderSorter;
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      mergedSortOrder: mergedSortOrderRef,
      mergedRenderSorter: mergedRenderSorterRef
    };
  },
  render() {
    const {
      mergedRenderSorter,
      mergedSortOrder,
      mergedClsPrefix
    } = this;
    const {
      renderSorterIcon
    } = this.column;
    return mergedRenderSorter ? h(RenderSorter, {
      render: mergedRenderSorter,
      order: mergedSortOrder
    }) : h("span", {
      class: [`${mergedClsPrefix}-data-table-sorter`, mergedSortOrder === "ascend" && `${mergedClsPrefix}-data-table-sorter--asc`, mergedSortOrder === "descend" && `${mergedClsPrefix}-data-table-sorter--desc`]
    }, renderSorterIcon ? renderSorterIcon({
      order: mergedSortOrder
    }) : h(NBaseIcon, {
      clsPrefix: mergedClsPrefix
    }, {
      default: () => h(ArrowDownIcon, null)
    }));
  }
});
const allKey = "_n_all__";
const noneKey = "_n_none__";
function createSelectHandler(options, rawPaginatedDataRef, doCheckAll, doUncheckAll) {
  if (!options) return () => {
  };
  return (key) => {
    for (const option of options) {
      switch (key) {
        case allKey:
          doCheckAll(true);
          return;
        case noneKey:
          doUncheckAll(true);
          return;
        default:
          if (typeof option === "object" && option.key === key) {
            option.onSelect(rawPaginatedDataRef.value);
            return;
          }
      }
    }
  };
}
function createDropdownOptions(options, localeRef) {
  if (!options) return [];
  return options.map((option) => {
    switch (option) {
      case "all":
        return {
          label: localeRef.checkTableAll,
          key: allKey
        };
      case "none":
        return {
          label: localeRef.uncheckTableAll,
          key: noneKey
        };
      default:
        return option;
    }
  });
}
const SelectionMenu = defineComponent({
  name: "DataTableSelectionMenu",
  props: {
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const {
      props: dataTableProps2,
      localeRef,
      checkOptionsRef,
      rawPaginatedDataRef,
      doCheckAll,
      doUncheckAll
    } = inject(dataTableInjectionKey);
    const handleSelectRef = computed(() => createSelectHandler(checkOptionsRef.value, rawPaginatedDataRef, doCheckAll, doUncheckAll));
    const optionsRef = computed(() => createDropdownOptions(checkOptionsRef.value, localeRef.value));
    return () => {
      var _a, _b, _c, _d;
      const {
        clsPrefix
      } = props;
      return h(__unplugin_components_1$1, {
        theme: (_b = (_a = dataTableProps2.theme) === null || _a === void 0 ? void 0 : _a.peers) === null || _b === void 0 ? void 0 : _b.Dropdown,
        themeOverrides: (_d = (_c = dataTableProps2.themeOverrides) === null || _c === void 0 ? void 0 : _c.peers) === null || _d === void 0 ? void 0 : _d.Dropdown,
        options: optionsRef.value,
        onSelect: handleSelectRef.value
      }, {
        default: () => h(NBaseIcon, {
          clsPrefix,
          class: `${clsPrefix}-data-table-check-extra`
        }, {
          default: () => h(ChevronDownIcon, null)
        })
      });
    };
  }
});
function renderTitle(column) {
  return typeof column.title === "function" ? column.title(column) : column.title;
}
const VirtualListItemWrapper$1 = defineComponent({
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    cols: {
      type: Array,
      required: true
    },
    width: String
  },
  render() {
    const {
      clsPrefix,
      id,
      cols,
      width
    } = this;
    return h("table", {
      style: {
        tableLayout: "fixed",
        width
      },
      class: `${clsPrefix}-data-table-table`
    }, h("colgroup", null, cols.map((col) => h("col", {
      key: col.key,
      style: col.style
    }))), h("thead", {
      "data-n-id": id,
      class: `${clsPrefix}-data-table-thead`
    }, this.$slots));
  }
});
const TableHeader = defineComponent({
  name: "DataTableHeader",
  props: {
    discrete: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const {
      mergedClsPrefixRef,
      scrollXRef,
      fixedColumnLeftMapRef,
      fixedColumnRightMapRef,
      mergedCurrentPageRef,
      allRowsCheckedRef,
      someRowsCheckedRef,
      rowsRef,
      colsRef,
      mergedThemeRef,
      checkOptionsRef,
      mergedSortStateRef,
      componentId,
      mergedTableLayoutRef,
      headerCheckboxDisabledRef,
      virtualScrollHeaderRef,
      headerHeightRef,
      onUnstableColumnResize,
      doUpdateResizableWidth,
      handleTableHeaderScroll,
      deriveNextSorter,
      doUncheckAll,
      doCheckAll
    } = inject(dataTableInjectionKey);
    const virtualListRef = ref();
    const cellElsRef = ref({});
    function getCellActualWidth(key) {
      const element = cellElsRef.value[key];
      return element === null || element === void 0 ? void 0 : element.getBoundingClientRect().width;
    }
    function handleCheckboxUpdateChecked() {
      if (allRowsCheckedRef.value) {
        doUncheckAll();
      } else {
        doCheckAll();
      }
    }
    function handleColHeaderClick(e, column) {
      if (happensIn(e, "dataTableFilter") || happensIn(e, "dataTableResizable")) {
        return;
      }
      if (!isColumnSortable(column)) return;
      const activeSorter = mergedSortStateRef.value.find((state) => state.columnKey === column.key) || null;
      const nextSorter = createNextSorter(column, activeSorter);
      deriveNextSorter(nextSorter);
    }
    const resizeStartWidthMap = /* @__PURE__ */ new Map();
    function handleColumnResizeStart(column) {
      resizeStartWidthMap.set(column.key, getCellActualWidth(column.key));
    }
    function handleColumnResize(column, displacementX) {
      const startWidth = resizeStartWidthMap.get(column.key);
      if (startWidth === void 0) {
        return;
      }
      const widthAfterResize = startWidth + displacementX;
      const limitWidth = clampValueFollowCSSRules(widthAfterResize, column.minWidth, column.maxWidth);
      onUnstableColumnResize(widthAfterResize, limitWidth, column, getCellActualWidth);
      doUpdateResizableWidth(column, limitWidth);
    }
    return {
      cellElsRef,
      componentId,
      mergedSortState: mergedSortStateRef,
      mergedClsPrefix: mergedClsPrefixRef,
      scrollX: scrollXRef,
      fixedColumnLeftMap: fixedColumnLeftMapRef,
      fixedColumnRightMap: fixedColumnRightMapRef,
      currentPage: mergedCurrentPageRef,
      allRowsChecked: allRowsCheckedRef,
      someRowsChecked: someRowsCheckedRef,
      rows: rowsRef,
      cols: colsRef,
      mergedTheme: mergedThemeRef,
      checkOptions: checkOptionsRef,
      mergedTableLayout: mergedTableLayoutRef,
      headerCheckboxDisabled: headerCheckboxDisabledRef,
      headerHeight: headerHeightRef,
      virtualScrollHeader: virtualScrollHeaderRef,
      virtualListRef,
      handleCheckboxUpdateChecked,
      handleColHeaderClick,
      handleTableHeaderScroll,
      handleColumnResizeStart,
      handleColumnResize
    };
  },
  render() {
    const {
      cellElsRef,
      mergedClsPrefix,
      fixedColumnLeftMap,
      fixedColumnRightMap,
      currentPage,
      allRowsChecked,
      someRowsChecked,
      rows,
      cols,
      mergedTheme,
      checkOptions,
      componentId,
      discrete,
      mergedTableLayout,
      headerCheckboxDisabled,
      mergedSortState,
      virtualScrollHeader,
      handleColHeaderClick,
      handleCheckboxUpdateChecked,
      handleColumnResizeStart,
      handleColumnResize
    } = this;
    const renderRow = (row, getLeft, headerHeightPx) => row.map(({
      column,
      colIndex,
      colSpan,
      rowSpan,
      isLast
    }) => {
      var _a, _b;
      const key = getColKey(column);
      const {
        ellipsis
      } = column;
      const createColumnVNode = () => {
        if (column.type === "selection") {
          return column.multiple !== false ? h(Fragment, null, h(__unplugin_components_1, {
            key: currentPage,
            privateInsideTable: true,
            checked: allRowsChecked,
            indeterminate: someRowsChecked,
            disabled: headerCheckboxDisabled,
            onUpdateChecked: handleCheckboxUpdateChecked
          }), checkOptions ? h(SelectionMenu, {
            clsPrefix: mergedClsPrefix
          }) : null) : null;
        }
        return h(Fragment, null, h("div", {
          class: `${mergedClsPrefix}-data-table-th__title-wrapper`
        }, h("div", {
          class: `${mergedClsPrefix}-data-table-th__title`
        }, ellipsis === true || ellipsis && !ellipsis.tooltip ? h("div", {
          class: `${mergedClsPrefix}-data-table-th__ellipsis`
        }, renderTitle(column)) : ellipsis && typeof ellipsis === "object" ? h(NEllipsis, Object.assign({}, ellipsis, {
          theme: mergedTheme.peers.Ellipsis,
          themeOverrides: mergedTheme.peerOverrides.Ellipsis
        }), {
          default: () => renderTitle(column)
        }) : renderTitle(column)), isColumnSortable(column) ? h(SortButton, {
          column
        }) : null), isColumnFilterable(column) ? h(FilterButton, {
          column,
          options: column.filterOptions
        }) : null, isColumnResizable(column) ? h(ResizeButton, {
          onResizeStart: () => {
            handleColumnResizeStart(column);
          },
          onResize: (displacementX) => {
            handleColumnResize(column, displacementX);
          }
        }) : null);
      };
      const leftFixed = key in fixedColumnLeftMap;
      const rightFixed = key in fixedColumnRightMap;
      const CellComponent = getLeft && !column.fixed ? "div" : "th";
      return h(CellComponent, {
        ref: (el) => cellElsRef[key] = el,
        key,
        style: [getLeft && !column.fixed ? {
          position: "absolute",
          left: pxfy(getLeft(colIndex)),
          top: 0,
          bottom: 0
        } : {
          left: pxfy((_a = fixedColumnLeftMap[key]) === null || _a === void 0 ? void 0 : _a.start),
          right: pxfy((_b = fixedColumnRightMap[key]) === null || _b === void 0 ? void 0 : _b.start)
        }, {
          width: pxfy(column.width),
          textAlign: column.titleAlign || column.align,
          height: headerHeightPx
        }],
        colspan: colSpan,
        rowspan: rowSpan,
        "data-col-key": key,
        class: [`${mergedClsPrefix}-data-table-th`, (leftFixed || rightFixed) && `${mergedClsPrefix}-data-table-th--fixed-${leftFixed ? "left" : "right"}`, {
          [`${mergedClsPrefix}-data-table-th--sorting`]: isColumnSorting(column, mergedSortState),
          [`${mergedClsPrefix}-data-table-th--filterable`]: isColumnFilterable(column),
          [`${mergedClsPrefix}-data-table-th--sortable`]: isColumnSortable(column),
          [`${mergedClsPrefix}-data-table-th--selection`]: column.type === "selection",
          [`${mergedClsPrefix}-data-table-th--last`]: isLast
        }, column.className],
        onClick: column.type !== "selection" && column.type !== "expand" && !("children" in column) ? (e) => {
          handleColHeaderClick(e, column);
        } : void 0
      }, createColumnVNode());
    });
    if (virtualScrollHeader) {
      const {
        headerHeight
      } = this;
      let leftFixedColsCount = 0;
      let rightFixedColsCount = 0;
      cols.forEach((col) => {
        if (col.column.fixed === "left") {
          leftFixedColsCount++;
        } else if (col.column.fixed === "right") {
          rightFixedColsCount++;
        }
      });
      return h(VVirtualList, {
        ref: "virtualListRef",
        class: `${mergedClsPrefix}-data-table-base-table-header`,
        style: {
          height: pxfy(headerHeight)
        },
        onScroll: this.handleTableHeaderScroll,
        columns: cols,
        itemSize: headerHeight,
        showScrollbar: false,
        items: [{}],
        itemResizable: false,
        visibleItemsTag: VirtualListItemWrapper$1,
        visibleItemsProps: {
          clsPrefix: mergedClsPrefix,
          id: componentId,
          cols,
          width: formatLength(this.scrollX)
        },
        renderItemWithCols: ({
          startColIndex,
          endColIndex,
          getLeft
        }) => {
          const row = cols.map((col, index2) => {
            return {
              column: col.column,
              isLast: index2 === cols.length - 1,
              colIndex: col.index,
              colSpan: 1,
              rowSpan: 1
            };
          }).filter(({
            column
          }, index2) => {
            if (startColIndex <= index2 && index2 <= endColIndex) {
              return true;
            }
            if (column.fixed) {
              return true;
            }
            return false;
          });
          const cells = renderRow(row, getLeft, pxfy(headerHeight));
          cells.splice(leftFixedColsCount, 0, h("th", {
            colspan: cols.length - leftFixedColsCount - rightFixedColsCount,
            style: {
              pointerEvents: "none",
              visibility: "hidden",
              height: 0
            }
          }));
          return h("tr", {
            style: {
              position: "relative"
            }
          }, cells);
        }
      }, {
        default: ({
          renderedItemWithCols
        }) => renderedItemWithCols
      });
    }
    const theadVNode = h("thead", {
      class: `${mergedClsPrefix}-data-table-thead`,
      "data-n-id": componentId
    }, rows.map((row) => {
      return h("tr", {
        class: `${mergedClsPrefix}-data-table-tr`
      }, renderRow(row, null, void 0));
    }));
    if (!discrete) {
      return theadVNode;
    }
    const {
      handleTableHeaderScroll,
      scrollX
    } = this;
    return h("div", {
      class: `${mergedClsPrefix}-data-table-base-table-header`,
      onScroll: handleTableHeaderScroll
    }, h("table", {
      class: `${mergedClsPrefix}-data-table-table`,
      style: {
        minWidth: formatLength(scrollX),
        tableLayout: mergedTableLayout
      }
    }, h("colgroup", null, cols.map((col) => h("col", {
      key: col.key,
      style: col.style
    }))), theadVNode));
  }
});
function flatten(rowInfos, expandedRowKeys) {
  const fRows = [];
  function traverse(rs, rootIndex) {
    rs.forEach((r) => {
      if (r.children && expandedRowKeys.has(r.key)) {
        fRows.push({
          tmNode: r,
          striped: false,
          key: r.key,
          index: rootIndex
        });
        traverse(r.children, rootIndex);
      } else {
        fRows.push({
          key: r.key,
          tmNode: r,
          striped: false,
          index: rootIndex
        });
      }
    });
  }
  rowInfos.forEach((rowInfo) => {
    fRows.push(rowInfo);
    const {
      children
    } = rowInfo.tmNode;
    if (children && expandedRowKeys.has(rowInfo.key)) {
      traverse(children, rowInfo.index);
    }
  });
  return fRows;
}
const VirtualListItemWrapper = defineComponent({
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    cols: {
      type: Array,
      required: true
    },
    onMouseenter: Function,
    onMouseleave: Function
  },
  render() {
    const {
      clsPrefix,
      id,
      cols,
      onMouseenter,
      onMouseleave
    } = this;
    return h("table", {
      style: {
        tableLayout: "fixed"
      },
      class: `${clsPrefix}-data-table-table`,
      onMouseenter,
      onMouseleave
    }, h("colgroup", null, cols.map((col) => h("col", {
      key: col.key,
      style: col.style
    }))), h("tbody", {
      "data-n-id": id,
      class: `${clsPrefix}-data-table-tbody`
    }, this.$slots));
  }
});
const TableBody = defineComponent({
  name: "DataTableBody",
  props: {
    onResize: Function,
    showHeader: Boolean,
    flexHeight: Boolean,
    bodyStyle: Object
  },
  setup(props) {
    const {
      slots: dataTableSlots,
      bodyWidthRef,
      mergedExpandedRowKeysRef,
      mergedClsPrefixRef,
      mergedThemeRef,
      scrollXRef,
      colsRef,
      paginatedDataRef,
      rawPaginatedDataRef,
      fixedColumnLeftMapRef,
      fixedColumnRightMapRef,
      mergedCurrentPageRef,
      rowClassNameRef,
      leftActiveFixedColKeyRef,
      leftActiveFixedChildrenColKeysRef,
      rightActiveFixedColKeyRef,
      rightActiveFixedChildrenColKeysRef,
      renderExpandRef,
      hoverKeyRef,
      summaryRef,
      mergedSortStateRef,
      virtualScrollRef,
      virtualScrollXRef,
      heightForRowRef,
      minRowHeightRef,
      componentId,
      mergedTableLayoutRef,
      childTriggerColIndexRef,
      indentRef,
      rowPropsRef,
      maxHeightRef,
      stripedRef,
      loadingRef,
      onLoadRef,
      loadingKeySetRef,
      expandableRef,
      stickyExpandedRowsRef,
      renderExpandIconRef,
      summaryPlacementRef,
      treeMateRef,
      scrollbarPropsRef,
      setHeaderScrollLeft,
      doUpdateExpandedRowKeys,
      handleTableBodyScroll,
      doCheck,
      doUncheck,
      renderCell
    } = inject(dataTableInjectionKey);
    const NConfigProvider = inject(configProviderInjectionKey);
    const scrollbarInstRef = ref(null);
    const virtualListRef = ref(null);
    const emptyElRef = ref(null);
    const emptyRef = useMemo(() => paginatedDataRef.value.length === 0);
    const shouldDisplaySomeTablePartRef = useMemo(() => props.showHeader || !emptyRef.value);
    const bodyShowHeaderOnlyRef = useMemo(() => {
      return props.showHeader || emptyRef.value;
    });
    let lastSelectedKey = "";
    const mergedExpandedRowKeySetRef = computed(() => {
      return new Set(mergedExpandedRowKeysRef.value);
    });
    function getRowInfo(key) {
      var _a;
      return (_a = treeMateRef.value.getNode(key)) === null || _a === void 0 ? void 0 : _a.rawNode;
    }
    function handleCheckboxUpdateChecked(tmNode, checked, shiftKey) {
      const rowInfo = getRowInfo(tmNode.key);
      if (!rowInfo) {
        warn("data-table", `fail to get row data with key ${tmNode.key}`);
        return;
      }
      if (shiftKey) {
        const lastIndex = paginatedDataRef.value.findIndex((item) => item.key === lastSelectedKey);
        if (lastIndex !== -1) {
          const currentIndex = paginatedDataRef.value.findIndex((item) => item.key === tmNode.key);
          const start = Math.min(lastIndex, currentIndex);
          const end = Math.max(lastIndex, currentIndex);
          const rowKeysToCheck = [];
          paginatedDataRef.value.slice(start, end + 1).forEach((r) => {
            if (!r.disabled) {
              rowKeysToCheck.push(r.key);
            }
          });
          if (checked) {
            doCheck(rowKeysToCheck, false, rowInfo);
          } else {
            doUncheck(rowKeysToCheck, rowInfo);
          }
          lastSelectedKey = tmNode.key;
          return;
        }
      }
      if (checked) {
        doCheck(tmNode.key, false, rowInfo);
      } else {
        doUncheck(tmNode.key, rowInfo);
      }
      lastSelectedKey = tmNode.key;
    }
    function handleRadioUpdateChecked(tmNode) {
      const rowInfo = getRowInfo(tmNode.key);
      if (!rowInfo) {
        warn("data-table", `fail to get row data with key ${tmNode.key}`);
        return;
      }
      doCheck(tmNode.key, true, rowInfo);
    }
    function getScrollContainer() {
      if (!shouldDisplaySomeTablePartRef.value) {
        const {
          value: emptyEl
        } = emptyElRef;
        if (emptyEl) {
          return emptyEl;
        } else {
          return null;
        }
      }
      if (virtualScrollRef.value) {
        return virtualListContainer();
      }
      const {
        value
      } = scrollbarInstRef;
      if (value) return value.containerRef;
      return null;
    }
    function handleUpdateExpanded(key, tmNode) {
      var _a;
      if (loadingKeySetRef.value.has(key)) return;
      const {
        value: mergedExpandedRowKeys
      } = mergedExpandedRowKeysRef;
      const index2 = mergedExpandedRowKeys.indexOf(key);
      const nextExpandedKeys = Array.from(mergedExpandedRowKeys);
      if (~index2) {
        nextExpandedKeys.splice(index2, 1);
        doUpdateExpandedRowKeys(nextExpandedKeys);
      } else {
        if (tmNode && !tmNode.isLeaf && !tmNode.shallowLoaded) {
          loadingKeySetRef.value.add(key);
          void ((_a = onLoadRef.value) === null || _a === void 0 ? void 0 : _a.call(onLoadRef, tmNode.rawNode).then(() => {
            const {
              value: futureMergedExpandedRowKeys
            } = mergedExpandedRowKeysRef;
            const futureNextExpandedKeys = Array.from(futureMergedExpandedRowKeys);
            const index3 = futureNextExpandedKeys.indexOf(key);
            if (!~index3) {
              futureNextExpandedKeys.push(key);
            }
            doUpdateExpandedRowKeys(futureNextExpandedKeys);
          }).finally(() => {
            loadingKeySetRef.value.delete(key);
          }));
        } else {
          nextExpandedKeys.push(key);
          doUpdateExpandedRowKeys(nextExpandedKeys);
        }
      }
    }
    function handleMouseleaveTable() {
      hoverKeyRef.value = null;
    }
    function virtualListContainer() {
      const {
        value
      } = virtualListRef;
      return (value === null || value === void 0 ? void 0 : value.listElRef) || null;
    }
    function virtualListContent() {
      const {
        value
      } = virtualListRef;
      return (value === null || value === void 0 ? void 0 : value.itemsElRef) || null;
    }
    function handleVirtualListScroll(e) {
      var _a;
      handleTableBodyScroll(e);
      (_a = scrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.sync();
    }
    function handleVirtualListResize(e) {
      var _a;
      const {
        onResize
      } = props;
      if (onResize) onResize(e);
      (_a = scrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.sync();
    }
    const exposedMethods = {
      getScrollContainer,
      scrollTo(arg0, arg1) {
        var _a, _b;
        if (virtualScrollRef.value) {
          (_a = virtualListRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg0, arg1);
        } else {
          (_b = scrollbarInstRef.value) === null || _b === void 0 ? void 0 : _b.scrollTo(arg0, arg1);
        }
      }
    };
    const style2 = c([({
      props: cProps
    }) => {
      const createActiveLeftFixedStyle = (leftActiveFixedColKey) => {
        if (leftActiveFixedColKey === null) return null;
        return c(`[data-n-id="${cProps.componentId}"] [data-col-key="${leftActiveFixedColKey}"]::after`, {
          boxShadow: "var(--n-box-shadow-after)"
        });
      };
      const createActiveRightFixedStyle = (rightActiveFixedColKey) => {
        if (rightActiveFixedColKey === null) return null;
        return c(`[data-n-id="${cProps.componentId}"] [data-col-key="${rightActiveFixedColKey}"]::before`, {
          boxShadow: "var(--n-box-shadow-before)"
        });
      };
      return c([createActiveLeftFixedStyle(cProps.leftActiveFixedColKey), createActiveRightFixedStyle(cProps.rightActiveFixedColKey), cProps.leftActiveFixedChildrenColKeys.map((leftActiveFixedColKey) => createActiveLeftFixedStyle(leftActiveFixedColKey)), cProps.rightActiveFixedChildrenColKeys.map((rightActiveFixedColKey) => createActiveRightFixedStyle(rightActiveFixedColKey))]);
    }]);
    let fixedStyleMounted = false;
    watchEffect(() => {
      const {
        value: leftActiveFixedColKey
      } = leftActiveFixedColKeyRef;
      const {
        value: leftActiveFixedChildrenColKeys
      } = leftActiveFixedChildrenColKeysRef;
      const {
        value: rightActiveFixedColKey
      } = rightActiveFixedColKeyRef;
      const {
        value: rightActiveFixedChildrenColKeys
      } = rightActiveFixedChildrenColKeysRef;
      if (!fixedStyleMounted && leftActiveFixedColKey === null && rightActiveFixedColKey === null) {
        return;
      }
      const cProps = {
        leftActiveFixedColKey,
        leftActiveFixedChildrenColKeys,
        rightActiveFixedColKey,
        rightActiveFixedChildrenColKeys,
        componentId
      };
      style2.mount({
        id: `n-${componentId}`,
        force: true,
        props: cProps,
        anchorMetaName: cssrAnchorMetaName,
        parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
      });
      fixedStyleMounted = true;
    });
    onUnmounted(() => {
      style2.unmount({
        id: `n-${componentId}`,
        parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
      });
    });
    return Object.assign({
      bodyWidth: bodyWidthRef,
      summaryPlacement: summaryPlacementRef,
      dataTableSlots,
      componentId,
      scrollbarInstRef,
      virtualListRef,
      emptyElRef,
      summary: summaryRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: mergedThemeRef,
      scrollX: scrollXRef,
      cols: colsRef,
      loading: loadingRef,
      bodyShowHeaderOnly: bodyShowHeaderOnlyRef,
      shouldDisplaySomeTablePart: shouldDisplaySomeTablePartRef,
      empty: emptyRef,
      paginatedDataAndInfo: computed(() => {
        const {
          value: striped
        } = stripedRef;
        let hasChildren = false;
        const data = paginatedDataRef.value.map(striped ? (tmNode, index2) => {
          if (!tmNode.isLeaf) hasChildren = true;
          return {
            tmNode,
            key: tmNode.key,
            striped: index2 % 2 === 1,
            index: index2
          };
        } : (tmNode, index2) => {
          if (!tmNode.isLeaf) hasChildren = true;
          return {
            tmNode,
            key: tmNode.key,
            striped: false,
            index: index2
          };
        });
        return {
          data,
          hasChildren
        };
      }),
      rawPaginatedData: rawPaginatedDataRef,
      fixedColumnLeftMap: fixedColumnLeftMapRef,
      fixedColumnRightMap: fixedColumnRightMapRef,
      currentPage: mergedCurrentPageRef,
      rowClassName: rowClassNameRef,
      renderExpand: renderExpandRef,
      mergedExpandedRowKeySet: mergedExpandedRowKeySetRef,
      hoverKey: hoverKeyRef,
      mergedSortState: mergedSortStateRef,
      virtualScroll: virtualScrollRef,
      virtualScrollX: virtualScrollXRef,
      heightForRow: heightForRowRef,
      minRowHeight: minRowHeightRef,
      mergedTableLayout: mergedTableLayoutRef,
      childTriggerColIndex: childTriggerColIndexRef,
      indent: indentRef,
      rowProps: rowPropsRef,
      maxHeight: maxHeightRef,
      loadingKeySet: loadingKeySetRef,
      expandable: expandableRef,
      stickyExpandedRows: stickyExpandedRowsRef,
      renderExpandIcon: renderExpandIconRef,
      scrollbarProps: scrollbarPropsRef,
      setHeaderScrollLeft,
      handleVirtualListScroll,
      handleVirtualListResize,
      handleMouseleaveTable,
      virtualListContainer,
      virtualListContent,
      handleTableBodyScroll,
      handleCheckboxUpdateChecked,
      handleRadioUpdateChecked,
      handleUpdateExpanded,
      renderCell
    }, exposedMethods);
  },
  render() {
    const {
      mergedTheme,
      scrollX,
      mergedClsPrefix,
      virtualScroll,
      maxHeight,
      mergedTableLayout,
      flexHeight,
      loadingKeySet,
      onResize,
      setHeaderScrollLeft
    } = this;
    const scrollable = scrollX !== void 0 || maxHeight !== void 0 || flexHeight;
    const isBasicAutoLayout = !scrollable && mergedTableLayout === "auto";
    const xScrollable = scrollX !== void 0 || isBasicAutoLayout;
    const contentStyle = {
      minWidth: formatLength(scrollX) || "100%"
    };
    if (scrollX) contentStyle.width = "100%";
    const tableNode = h(Scrollbar, Object.assign({}, this.scrollbarProps, {
      ref: "scrollbarInstRef",
      scrollable: scrollable || isBasicAutoLayout,
      class: `${mergedClsPrefix}-data-table-base-table-body`,
      style: !this.empty ? this.bodyStyle : void 0,
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      contentStyle,
      container: virtualScroll ? this.virtualListContainer : void 0,
      content: virtualScroll ? this.virtualListContent : void 0,
      horizontalRailStyle: {
        zIndex: 3
      },
      verticalRailStyle: {
        zIndex: 3
      },
      xScrollable,
      onScroll: virtualScroll ? void 0 : this.handleTableBodyScroll,
      internalOnUpdateScrollLeft: setHeaderScrollLeft,
      onResize
    }), {
      default: () => {
        const cordToPass = {};
        const cordKey = {};
        const {
          cols,
          paginatedDataAndInfo,
          mergedTheme: mergedTheme2,
          fixedColumnLeftMap,
          fixedColumnRightMap,
          currentPage,
          rowClassName,
          mergedSortState,
          mergedExpandedRowKeySet,
          stickyExpandedRows,
          componentId,
          childTriggerColIndex,
          expandable,
          rowProps,
          handleMouseleaveTable,
          renderExpand,
          summary,
          handleCheckboxUpdateChecked,
          handleRadioUpdateChecked,
          handleUpdateExpanded,
          heightForRow,
          minRowHeight,
          virtualScrollX
        } = this;
        const {
          length: colCount
        } = cols;
        let mergedData;
        const {
          data: paginatedData,
          hasChildren
        } = paginatedDataAndInfo;
        const mergedPaginationData = hasChildren ? flatten(paginatedData, mergedExpandedRowKeySet) : paginatedData;
        if (summary) {
          const summaryRows = summary(this.rawPaginatedData);
          if (Array.isArray(summaryRows)) {
            const summaryRowData = summaryRows.map((row, i) => ({
              isSummaryRow: true,
              key: `__n_summary__${i}`,
              tmNode: {
                rawNode: row,
                disabled: true
              },
              index: -1
            }));
            mergedData = this.summaryPlacement === "top" ? [...summaryRowData, ...mergedPaginationData] : [...mergedPaginationData, ...summaryRowData];
          } else {
            const summaryRowData = {
              isSummaryRow: true,
              key: "__n_summary__",
              tmNode: {
                rawNode: summaryRows,
                disabled: true
              },
              index: -1
            };
            mergedData = this.summaryPlacement === "top" ? [summaryRowData, ...mergedPaginationData] : [...mergedPaginationData, summaryRowData];
          }
        } else {
          mergedData = mergedPaginationData;
        }
        const indentStyle = hasChildren ? {
          width: pxfy(this.indent)
        } : void 0;
        const displayedData = [];
        mergedData.forEach((rowInfo) => {
          if (renderExpand && mergedExpandedRowKeySet.has(rowInfo.key) && (!expandable || expandable(rowInfo.tmNode.rawNode))) {
            displayedData.push(rowInfo, {
              isExpandedRow: true,
              key: `${rowInfo.key}-expand`,
              // solve key repeat of the expanded row
              tmNode: rowInfo.tmNode,
              index: rowInfo.index
            });
          } else {
            displayedData.push(rowInfo);
          }
        });
        const {
          length: rowCount
        } = displayedData;
        const rowIndexToKey = {};
        paginatedData.forEach(({
          tmNode
        }, rowIndex) => {
          rowIndexToKey[rowIndex] = tmNode.key;
        });
        const bodyWidth = stickyExpandedRows ? this.bodyWidth : null;
        const bodyWidthPx = bodyWidth === null ? void 0 : `${bodyWidth}px`;
        const CellComponent = this.virtualScrollX ? "div" : "td";
        let leftFixedColsCount = 0;
        let rightFixedColsCount = 0;
        if (virtualScrollX) {
          cols.forEach((col) => {
            if (col.column.fixed === "left") {
              leftFixedColsCount++;
            } else if (col.column.fixed === "right") {
              rightFixedColsCount++;
            }
          });
        }
        const renderRow = ({
          // Normal
          rowInfo,
          displayedRowIndex,
          isVirtual,
          // Virtual X
          isVirtualX,
          startColIndex,
          endColIndex,
          getLeft
        }) => {
          const {
            index: actualRowIndex
          } = rowInfo;
          if ("isExpandedRow" in rowInfo) {
            const {
              tmNode: {
                key,
                rawNode
              }
            } = rowInfo;
            return h("tr", {
              class: `${mergedClsPrefix}-data-table-tr ${mergedClsPrefix}-data-table-tr--expanded`,
              key: `${key}__expand`
            }, h("td", {
              class: [`${mergedClsPrefix}-data-table-td`, `${mergedClsPrefix}-data-table-td--last-col`, displayedRowIndex + 1 === rowCount && `${mergedClsPrefix}-data-table-td--last-row`],
              colspan: colCount
            }, stickyExpandedRows ? h("div", {
              class: `${mergedClsPrefix}-data-table-expand`,
              style: {
                width: bodyWidthPx
              }
            }, renderExpand(rawNode, actualRowIndex)) : renderExpand(rawNode, actualRowIndex)));
          }
          const isSummary = "isSummaryRow" in rowInfo;
          const striped = !isSummary && rowInfo.striped;
          const {
            tmNode,
            key: rowKey
          } = rowInfo;
          const {
            rawNode: rowData
          } = tmNode;
          const expanded = mergedExpandedRowKeySet.has(rowKey);
          const props = rowProps ? rowProps(rowData, actualRowIndex) : void 0;
          const mergedRowClassName = typeof rowClassName === "string" ? rowClassName : createRowClassName(rowData, actualRowIndex, rowClassName);
          const iteratedCols = isVirtualX ? cols.filter((col, index2) => {
            if (startColIndex <= index2 && index2 <= endColIndex) return true;
            if (col.column.fixed) {
              return true;
            }
            return false;
          }) : cols;
          const virtualXRowHeight = isVirtualX ? pxfy((heightForRow === null || heightForRow === void 0 ? void 0 : heightForRow(rowData, actualRowIndex)) || minRowHeight) : void 0;
          const cells = iteratedCols.map((col) => {
            var _a, _b, _c, _d, _e;
            const colIndex = col.index;
            if (displayedRowIndex in cordToPass) {
              const cordOfRowToPass = cordToPass[displayedRowIndex];
              const indexInCordOfRowToPass = cordOfRowToPass.indexOf(colIndex);
              if (~indexInCordOfRowToPass) {
                cordOfRowToPass.splice(indexInCordOfRowToPass, 1);
                return null;
              }
            }
            const {
              column
            } = col;
            const colKey = getColKey(col);
            const {
              rowSpan,
              colSpan
            } = column;
            const mergedColSpan = isSummary ? ((_a = rowInfo.tmNode.rawNode[colKey]) === null || _a === void 0 ? void 0 : _a.colSpan) || 1 : colSpan ? colSpan(rowData, actualRowIndex) : 1;
            const mergedRowSpan = isSummary ? ((_b = rowInfo.tmNode.rawNode[colKey]) === null || _b === void 0 ? void 0 : _b.rowSpan) || 1 : rowSpan ? rowSpan(rowData, actualRowIndex) : 1;
            const isLastCol = colIndex + mergedColSpan === colCount;
            const isLastRow = displayedRowIndex + mergedRowSpan === rowCount;
            const isCrossRowTd = mergedRowSpan > 1;
            if (isCrossRowTd) {
              cordKey[displayedRowIndex] = {
                [colIndex]: []
              };
            }
            if (mergedColSpan > 1 || isCrossRowTd) {
              for (let i = displayedRowIndex; i < displayedRowIndex + mergedRowSpan; ++i) {
                if (isCrossRowTd) {
                  cordKey[displayedRowIndex][colIndex].push(rowIndexToKey[i]);
                }
                for (let j = colIndex; j < colIndex + mergedColSpan; ++j) {
                  if (i === displayedRowIndex && j === colIndex) {
                    continue;
                  }
                  if (!(i in cordToPass)) {
                    cordToPass[i] = [j];
                  } else {
                    cordToPass[i].push(j);
                  }
                }
              }
            }
            const hoverKey = isCrossRowTd ? this.hoverKey : null;
            const {
              cellProps
            } = column;
            const resolvedCellProps = cellProps === null || cellProps === void 0 ? void 0 : cellProps(rowData, actualRowIndex);
            const indentOffsetStyle = {
              "--indent-offset": ""
            };
            const FinalCellComponent = column.fixed ? "td" : CellComponent;
            return h(FinalCellComponent, Object.assign({}, resolvedCellProps, {
              key: colKey,
              style: [{
                textAlign: column.align || void 0,
                width: pxfy(column.width)
              }, isVirtualX && {
                height: virtualXRowHeight
              }, isVirtualX && !column.fixed ? {
                position: "absolute",
                left: pxfy(getLeft(colIndex)),
                top: 0,
                bottom: 0
              } : {
                left: pxfy((_c = fixedColumnLeftMap[colKey]) === null || _c === void 0 ? void 0 : _c.start),
                right: pxfy((_d = fixedColumnRightMap[colKey]) === null || _d === void 0 ? void 0 : _d.start)
              }, indentOffsetStyle, (resolvedCellProps === null || resolvedCellProps === void 0 ? void 0 : resolvedCellProps.style) || ""],
              colspan: mergedColSpan,
              rowspan: isVirtual ? void 0 : mergedRowSpan,
              "data-col-key": colKey,
              class: [`${mergedClsPrefix}-data-table-td`, column.className, resolvedCellProps === null || resolvedCellProps === void 0 ? void 0 : resolvedCellProps.class, isSummary && `${mergedClsPrefix}-data-table-td--summary`, hoverKey !== null && cordKey[displayedRowIndex][colIndex].includes(hoverKey) && `${mergedClsPrefix}-data-table-td--hover`, isColumnSorting(column, mergedSortState) && `${mergedClsPrefix}-data-table-td--sorting`, column.fixed && `${mergedClsPrefix}-data-table-td--fixed-${column.fixed}`, column.align && `${mergedClsPrefix}-data-table-td--${column.align}-align`, column.type === "selection" && `${mergedClsPrefix}-data-table-td--selection`, column.type === "expand" && `${mergedClsPrefix}-data-table-td--expand`, isLastCol && `${mergedClsPrefix}-data-table-td--last-col`, isLastRow && `${mergedClsPrefix}-data-table-td--last-row`]
            }), hasChildren && colIndex === childTriggerColIndex ? [repeat(indentOffsetStyle["--indent-offset"] = isSummary ? 0 : rowInfo.tmNode.level, h("div", {
              class: `${mergedClsPrefix}-data-table-indent`,
              style: indentStyle
            })), isSummary || rowInfo.tmNode.isLeaf ? h("div", {
              class: `${mergedClsPrefix}-data-table-expand-placeholder`
            }) : h(ExpandTrigger, {
              class: `${mergedClsPrefix}-data-table-expand-trigger`,
              clsPrefix: mergedClsPrefix,
              expanded,
              rowData,
              renderExpandIcon: this.renderExpandIcon,
              loading: loadingKeySet.has(rowInfo.key),
              onClick: () => {
                handleUpdateExpanded(rowKey, rowInfo.tmNode);
              }
            })] : null, column.type === "selection" ? !isSummary ? column.multiple === false ? h(RenderSafeRadio, {
              key: currentPage,
              rowKey,
              disabled: rowInfo.tmNode.disabled,
              onUpdateChecked: () => {
                handleRadioUpdateChecked(rowInfo.tmNode);
              }
            }) : h(RenderSafeCheckbox, {
              key: currentPage,
              rowKey,
              disabled: rowInfo.tmNode.disabled,
              onUpdateChecked: (checked, e) => {
                handleCheckboxUpdateChecked(rowInfo.tmNode, checked, e.shiftKey);
              }
            }) : null : column.type === "expand" ? !isSummary ? !column.expandable || ((_e = column.expandable) === null || _e === void 0 ? void 0 : _e.call(column, rowData)) ? h(ExpandTrigger, {
              clsPrefix: mergedClsPrefix,
              rowData,
              expanded,
              renderExpandIcon: this.renderExpandIcon,
              onClick: () => {
                handleUpdateExpanded(rowKey, null);
              }
            }) : null : null : h(Cell, {
              clsPrefix: mergedClsPrefix,
              index: actualRowIndex,
              row: rowData,
              column,
              isSummary,
              mergedTheme: mergedTheme2,
              renderCell: this.renderCell
            }));
          });
          if (isVirtualX) {
            if (leftFixedColsCount && rightFixedColsCount) {
              cells.splice(leftFixedColsCount, 0, h("td", {
                colspan: cols.length - leftFixedColsCount - rightFixedColsCount,
                style: {
                  pointerEvents: "none",
                  visibility: "hidden",
                  height: 0
                }
              }));
            }
          }
          const row = h("tr", Object.assign({}, props, {
            onMouseenter: (e) => {
              var _a;
              this.hoverKey = rowKey;
              (_a = props === null || props === void 0 ? void 0 : props.onMouseenter) === null || _a === void 0 ? void 0 : _a.call(props, e);
            },
            key: rowKey,
            class: [`${mergedClsPrefix}-data-table-tr`, isSummary && `${mergedClsPrefix}-data-table-tr--summary`, striped && `${mergedClsPrefix}-data-table-tr--striped`, expanded && `${mergedClsPrefix}-data-table-tr--expanded`, mergedRowClassName, props === null || props === void 0 ? void 0 : props.class],
            style: [props === null || props === void 0 ? void 0 : props.style, isVirtualX && {
              height: virtualXRowHeight
            }]
          }), cells);
          return row;
        };
        if (!virtualScroll) {
          return h("table", {
            class: `${mergedClsPrefix}-data-table-table`,
            onMouseleave: handleMouseleaveTable,
            style: {
              tableLayout: this.mergedTableLayout
            }
          }, h("colgroup", null, cols.map((col) => h("col", {
            key: col.key,
            style: col.style
          }))), this.showHeader ? h(TableHeader, {
            discrete: false
          }) : null, !this.empty ? h("tbody", {
            "data-n-id": componentId,
            class: `${mergedClsPrefix}-data-table-tbody`
          }, displayedData.map((rowInfo, displayedRowIndex) => {
            return renderRow({
              rowInfo,
              displayedRowIndex,
              isVirtual: false,
              isVirtualX: false,
              startColIndex: -1,
              endColIndex: -1,
              getLeft(_index) {
                return -1;
              }
            });
          })) : null);
        } else {
          return h(VVirtualList, {
            ref: "virtualListRef",
            items: displayedData,
            itemSize: this.minRowHeight,
            visibleItemsTag: VirtualListItemWrapper,
            visibleItemsProps: {
              clsPrefix: mergedClsPrefix,
              id: componentId,
              cols,
              onMouseleave: handleMouseleaveTable
            },
            showScrollbar: false,
            onResize: this.handleVirtualListResize,
            onScroll: this.handleVirtualListScroll,
            itemsStyle: contentStyle,
            itemResizable: !virtualScrollX,
            columns: cols,
            renderItemWithCols: virtualScrollX ? ({
              itemIndex,
              item,
              startColIndex,
              endColIndex,
              getLeft
            }) => {
              return renderRow({
                displayedRowIndex: itemIndex,
                isVirtual: true,
                isVirtualX: true,
                rowInfo: item,
                startColIndex,
                endColIndex,
                getLeft
              });
            } : void 0
          }, {
            default: ({
              item,
              index: index2,
              renderedItemWithCols
            }) => {
              if (renderedItemWithCols) return renderedItemWithCols;
              return renderRow({
                rowInfo: item,
                displayedRowIndex: index2,
                isVirtual: true,
                isVirtualX: false,
                startColIndex: 0,
                endColIndex: 0,
                getLeft(_index) {
                  return 0;
                }
              });
            }
          });
        }
      }
    });
    if (this.empty) {
      const createEmptyNode = () => h("div", {
        class: [`${mergedClsPrefix}-data-table-empty`, this.loading && `${mergedClsPrefix}-data-table-empty--hide`],
        style: this.bodyStyle,
        ref: "emptyElRef"
      }, resolveSlot(this.dataTableSlots.empty, () => [h(__unplugin_components_8, {
        theme: this.mergedTheme.peers.Empty,
        themeOverrides: this.mergedTheme.peerOverrides.Empty
      })]));
      if (this.shouldDisplaySomeTablePart) {
        return h(Fragment, null, tableNode, createEmptyNode());
      } else {
        return h(VResizeObserver, {
          onResize: this.onResize
        }, {
          default: createEmptyNode
        });
      }
    }
    return tableNode;
  }
});
const MainTable = defineComponent({
  name: "MainTable",
  setup() {
    const {
      mergedClsPrefixRef,
      rightFixedColumnsRef,
      leftFixedColumnsRef,
      bodyWidthRef,
      maxHeightRef,
      minHeightRef,
      flexHeightRef,
      virtualScrollHeaderRef,
      syncScrollState
    } = inject(dataTableInjectionKey);
    const headerInstRef = ref(null);
    const bodyInstRef = ref(null);
    const selfElRef = ref(null);
    const fixedStateInitializedRef = ref(!(leftFixedColumnsRef.value.length || rightFixedColumnsRef.value.length));
    const bodyStyleRef = computed(() => {
      return {
        maxHeight: formatLength(maxHeightRef.value),
        minHeight: formatLength(minHeightRef.value)
      };
    });
    function handleBodyResize(entry) {
      bodyWidthRef.value = entry.contentRect.width;
      syncScrollState();
      if (!fixedStateInitializedRef.value) {
        fixedStateInitializedRef.value = true;
      }
    }
    function getHeaderElement() {
      var _a;
      const {
        value
      } = headerInstRef;
      if (value) {
        if (virtualScrollHeaderRef.value) {
          return ((_a = value.virtualListRef) === null || _a === void 0 ? void 0 : _a.listElRef) || null;
        } else {
          return value.$el;
        }
      }
      return null;
    }
    function getBodyElement() {
      const {
        value
      } = bodyInstRef;
      if (value) {
        return value.getScrollContainer();
      }
      return null;
    }
    const exposedMethods = {
      getBodyElement,
      getHeaderElement,
      scrollTo(arg0, arg1) {
        var _a;
        (_a = bodyInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg0, arg1);
      }
    };
    watchEffect(() => {
      const {
        value: selfEl
      } = selfElRef;
      if (!selfEl) return;
      const transitionDisabledClass = `${mergedClsPrefixRef.value}-data-table-base-table--transition-disabled`;
      if (fixedStateInitializedRef.value) {
        setTimeout(() => {
          selfEl.classList.remove(transitionDisabledClass);
        }, 0);
      } else {
        selfEl.classList.add(transitionDisabledClass);
      }
    });
    return Object.assign({
      maxHeight: maxHeightRef,
      mergedClsPrefix: mergedClsPrefixRef,
      selfElRef,
      headerInstRef,
      bodyInstRef,
      bodyStyle: bodyStyleRef,
      flexHeight: flexHeightRef,
      handleBodyResize
    }, exposedMethods);
  },
  render() {
    const {
      mergedClsPrefix,
      maxHeight,
      flexHeight
    } = this;
    const headerInBody = maxHeight === void 0 && !flexHeight;
    return h("div", {
      class: `${mergedClsPrefix}-data-table-base-table`,
      ref: "selfElRef"
    }, headerInBody ? null : h(TableHeader, {
      ref: "headerInstRef"
    }), h(TableBody, {
      ref: "bodyInstRef",
      bodyStyle: this.bodyStyle,
      showHeader: headerInBody,
      flexHeight,
      onResize: this.handleBodyResize
    }));
  }
});
const fixedColumnStyle = createFixedColumnStyle();
const style = c([cB("data-table", `
 width: 100%;
 font-size: var(--n-font-size);
 display: flex;
 flex-direction: column;
 position: relative;
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 --n-merged-th-color-sorting: var(--n-th-color-sorting);
 --n-merged-td-color-hover: var(--n-td-color-hover);
 --n-merged-td-color-sorting: var(--n-td-color-sorting);
 --n-merged-td-color-striped: var(--n-td-color-striped);
 `, [cB("data-table-wrapper", `
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 `), cM("flex-height", [c(">", [cB("data-table-wrapper", [c(">", [cB("data-table-base-table", `
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 `, [c(">", [cB("data-table-base-table-body", "flex-basis: 0;", [
  // last-child means there is no empty icon
  // body is a scrollbar, we need to override height 100%
  c("&:last-child", "flex-grow: 1;")
])])])])])])]), c(">", [cB("data-table-loading-wrapper", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [fadeInScaleUpTransition({
  originalTransform: "translateX(-50%) translateY(-50%)"
})])]), cB("data-table-expand-placeholder", `
 margin-right: 8px;
 display: inline-block;
 width: 16px;
 height: 1px;
 `), cB("data-table-indent", `
 display: inline-block;
 height: 1px;
 `), cB("data-table-expand-trigger", `
 display: inline-flex;
 margin-right: 8px;
 cursor: pointer;
 font-size: 16px;
 vertical-align: -0.2em;
 position: relative;
 width: 16px;
 height: 16px;
 color: var(--n-td-text-color);
 transition: color .3s var(--n-bezier);
 `, [cM("expanded", [cB("icon", "transform: rotate(90deg);", [iconSwitchTransition({
  originalTransform: "rotate(90deg)"
})]), cB("base-icon", "transform: rotate(90deg);", [iconSwitchTransition({
  originalTransform: "rotate(90deg)"
})])]), cB("base-loading", `
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [iconSwitchTransition()]), cB("icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [iconSwitchTransition()]), cB("base-icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [iconSwitchTransition()])]), cB("data-table-thead", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-merged-th-color);
 `), cB("data-table-tr", `
 position: relative;
 box-sizing: border-box;
 background-clip: padding-box;
 transition: background-color .3s var(--n-bezier);
 `, [cB("data-table-expand", `
 position: sticky;
 left: 0;
 overflow: hidden;
 margin: calc(var(--n-th-padding) * -1);
 padding: var(--n-th-padding);
 box-sizing: border-box;
 `), cM("striped", "background-color: var(--n-merged-td-color-striped);", [cB("data-table-td", "background-color: var(--n-merged-td-color-striped);")]), cNotM("summary", [c("&:hover", "background-color: var(--n-merged-td-color-hover);", [c(">", [cB("data-table-td", "background-color: var(--n-merged-td-color-hover);")])])])]), cB("data-table-th", `
 padding: var(--n-th-padding);
 position: relative;
 text-align: start;
 box-sizing: border-box;
 background-color: var(--n-merged-th-color);
 border-color: var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 color: var(--n-th-text-color);
 transition:
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 font-weight: var(--n-th-font-weight);
 `, [cM("filterable", `
 padding-right: 36px;
 `, [cM("sortable", `
 padding-right: calc(var(--n-th-padding) + 36px);
 `)]), fixedColumnStyle, cM("selection", `
 padding: 0;
 text-align: center;
 line-height: 0;
 z-index: 3;
 `), cE("title-wrapper", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 max-width: 100%;
 `, [cE("title", `
 flex: 1;
 min-width: 0;
 `)]), cE("ellipsis", `
 display: inline-block;
 vertical-align: bottom;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 `), cM("hover", `
 background-color: var(--n-merged-th-color-hover);
 `), cM("sorting", `
 background-color: var(--n-merged-th-color-sorting);
 `), cM("sortable", `
 cursor: pointer;
 `, [cE("ellipsis", `
 max-width: calc(100% - 18px);
 `), c("&:hover", `
 background-color: var(--n-merged-th-color-hover);
 `)]), cB("data-table-sorter", `
 height: var(--n-sorter-size);
 width: var(--n-sorter-size);
 margin-left: 4px;
 position: relative;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 vertical-align: -0.2em;
 color: var(--n-th-icon-color);
 transition: color .3s var(--n-bezier);
 `, [cB("base-icon", "transition: transform .3s var(--n-bezier)"), cM("desc", [cB("base-icon", `
 transform: rotate(0deg);
 `)]), cM("asc", [cB("base-icon", `
 transform: rotate(-180deg);
 `)]), cM("asc, desc", `
 color: var(--n-th-icon-color-active);
 `)]), cB("data-table-resize-button", `
 width: var(--n-resizable-container-size);
 position: absolute;
 top: 0;
 right: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 cursor: col-resize;
 user-select: none;
 `, [c("&::after", `
 width: var(--n-resizable-size);
 height: 50%;
 position: absolute;
 top: 50%;
 left: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 background-color: var(--n-merged-border-color);
 transform: translateY(-50%);
 transition: background-color .3s var(--n-bezier);
 z-index: 1;
 content: '';
 `), cM("active", [c("&::after", ` 
 background-color: var(--n-th-icon-color-active);
 `)]), c("&:hover::after", `
 background-color: var(--n-th-icon-color-active);
 `)]), cB("data-table-filter", `
 position: absolute;
 z-index: auto;
 right: 0;
 width: 36px;
 top: 0;
 bottom: 0;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: var(--n-filter-size);
 color: var(--n-th-icon-color);
 `, [c("&:hover", `
 background-color: var(--n-th-button-color-hover);
 `), cM("show", `
 background-color: var(--n-th-button-color-hover);
 `), cM("active", `
 background-color: var(--n-th-button-color-hover);
 color: var(--n-th-icon-color-active);
 `)])]), cB("data-table-td", `
 padding: var(--n-td-padding);
 text-align: start;
 box-sizing: border-box;
 border: none;
 background-color: var(--n-merged-td-color);
 color: var(--n-td-text-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [cM("expand", [cB("data-table-expand-trigger", `
 margin-right: 0;
 `)]), cM("last-row", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `, [
  // make sure there is no overlap between bottom border and
  // fixed column box shadow
  c("&::after", `
 bottom: 0 !important;
 `),
  c("&::before", `
 bottom: 0 !important;
 `)
]), cM("summary", `
 background-color: var(--n-merged-th-color);
 `), cM("hover", `
 background-color: var(--n-merged-td-color-hover);
 `), cM("sorting", `
 background-color: var(--n-merged-td-color-sorting);
 `), cE("ellipsis", `
 display: inline-block;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 vertical-align: bottom;
 max-width: calc(100% - var(--indent-offset, -1.5) * 16px - 24px);
 `), cM("selection, expand", `
 text-align: center;
 padding: 0;
 line-height: 0;
 `), fixedColumnStyle]), cB("data-table-empty", `
 box-sizing: border-box;
 padding: var(--n-empty-padding);
 flex-grow: 1;
 flex-shrink: 0;
 opacity: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: opacity .3s var(--n-bezier);
 `, [cM("hide", `
 opacity: 0;
 `)]), cE("pagination", `
 margin: var(--n-pagination-margin);
 display: flex;
 justify-content: flex-end;
 `), cB("data-table-wrapper", `
 position: relative;
 opacity: 1;
 transition: opacity .3s var(--n-bezier), border-color .3s var(--n-bezier);
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 line-height: var(--n-line-height);
 `), cM("loading", [cB("data-table-wrapper", `
 opacity: var(--n-opacity-loading);
 pointer-events: none;
 `)]), cM("single-column", [cB("data-table-td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `, [c("&::after, &::before", `
 bottom: 0 !important;
 `)])]), cNotM("single-line", [cB("data-table-th", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [cM("last", `
 border-right: 0 solid var(--n-merged-border-color);
 `)]), cB("data-table-td", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [cM("last-col", `
 border-right: 0 solid var(--n-merged-border-color);
 `)])]), cM("bordered", [cB("data-table-wrapper", `
 border: 1px solid var(--n-merged-border-color);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 overflow: hidden;
 `)]), cB("data-table-base-table", [cM("transition-disabled", [cB("data-table-th", [c("&::after, &::before", "transition: none;")]), cB("data-table-td", [c("&::after, &::before", "transition: none;")])])]), cM("bottom-bordered", [cB("data-table-td", [cM("last-row", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]), cB("data-table-table", `
 font-variant-numeric: tabular-nums;
 width: 100%;
 word-break: break-word;
 transition: background-color .3s var(--n-bezier);
 border-collapse: separate;
 border-spacing: 0;
 background-color: var(--n-merged-td-color);
 `), cB("data-table-base-table-header", `
 border-top-left-radius: calc(var(--n-border-radius) - 1px);
 border-top-right-radius: calc(var(--n-border-radius) - 1px);
 z-index: 3;
 overflow: scroll;
 flex-shrink: 0;
 transition: border-color .3s var(--n-bezier);
 scrollbar-width: none;
 `, [c("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 display: none;
 width: 0;
 height: 0;
 `)]), cB("data-table-check-extra", `
 transition: color .3s var(--n-bezier);
 color: var(--n-th-icon-color);
 position: absolute;
 font-size: 14px;
 right: -4px;
 top: 50%;
 transform: translateY(-50%);
 z-index: 1;
 `)]), cB("data-table-filter-menu", [cB("scrollbar", `
 max-height: 240px;
 `), cE("group", `
 display: flex;
 flex-direction: column;
 padding: 12px 12px 0 12px;
 `, [cB("checkbox", `
 margin-bottom: 12px;
 margin-right: 0;
 `), cB("radio", `
 margin-bottom: 12px;
 margin-right: 0;
 `)]), cE("action", `
 padding: var(--n-action-padding);
 display: flex;
 flex-wrap: nowrap;
 justify-content: space-evenly;
 border-top: 1px solid var(--n-action-divider-color);
 `, [cB("button", [c("&:not(:last-child)", `
 margin: var(--n-action-button-margin);
 `), c("&:last-child", `
 margin-right: 0;
 `)])]), cB("divider", `
 margin: 0 !important;
 `)]), insideModal(cB("data-table", `
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 --n-merged-th-color-hover: var(--n-th-color-hover-modal);
 --n-merged-td-color-hover: var(--n-td-color-hover-modal);
 --n-merged-th-color-sorting: var(--n-th-color-hover-modal);
 --n-merged-td-color-sorting: var(--n-td-color-hover-modal);
 --n-merged-td-color-striped: var(--n-td-color-striped-modal);
 `)), insidePopover(cB("data-table", `
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 --n-merged-th-color-hover: var(--n-th-color-hover-popover);
 --n-merged-td-color-hover: var(--n-td-color-hover-popover);
 --n-merged-th-color-sorting: var(--n-th-color-hover-popover);
 --n-merged-td-color-sorting: var(--n-td-color-hover-popover);
 --n-merged-td-color-striped: var(--n-td-color-striped-popover);
 `))]);
function createFixedColumnStyle() {
  return [cM("fixed-left", `
 left: 0;
 position: sticky;
 z-index: 2;
 `, [c("&::after", `
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 right: -36px;
 `)]), cM("fixed-right", `
 right: 0;
 position: sticky;
 z-index: 1;
 `, [c("&::before", `
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 left: -36px;
 `)])];
}
function useCheck(props, data) {
  const {
    paginatedDataRef,
    treeMateRef,
    selectionColumnRef
  } = data;
  const uncontrolledCheckedRowKeysRef = ref(props.defaultCheckedRowKeys);
  const mergedCheckState = computed(() => {
    var _a;
    const {
      checkedRowKeys
    } = props;
    const sourceKeys = checkedRowKeys === void 0 ? uncontrolledCheckedRowKeysRef.value : checkedRowKeys;
    if (((_a = selectionColumnRef.value) === null || _a === void 0 ? void 0 : _a.multiple) === false) {
      return {
        checkedKeys: sourceKeys.slice(0, 1),
        indeterminateKeys: []
      };
    }
    return treeMateRef.value.getCheckedKeys(sourceKeys, {
      cascade: props.cascade,
      allowNotLoaded: props.allowCheckingNotLoaded
    });
  });
  const mergedCheckedRowKeysRef = computed(() => mergedCheckState.value.checkedKeys);
  const mergedInderminateRowKeysRef = computed(() => mergedCheckState.value.indeterminateKeys);
  const mergedCheckedRowKeySetRef = computed(() => {
    return new Set(mergedCheckedRowKeysRef.value);
  });
  const mergedInderminateRowKeySetRef = computed(() => {
    return new Set(mergedInderminateRowKeysRef.value);
  });
  const countOfCurrentPageCheckedRowsRef = computed(() => {
    const {
      value: mergedCheckedRowKeySet
    } = mergedCheckedRowKeySetRef;
    return paginatedDataRef.value.reduce((total, tmNode) => {
      const {
        key,
        disabled
      } = tmNode;
      return total + (!disabled && mergedCheckedRowKeySet.has(key) ? 1 : 0);
    }, 0);
  });
  const countOfCurrentPageDisabledRowsRef = computed(() => {
    return paginatedDataRef.value.filter((item) => item.disabled).length;
  });
  const someRowsCheckedRef = computed(() => {
    const {
      length
    } = paginatedDataRef.value;
    const {
      value: mergedInderminateRowKeySet
    } = mergedInderminateRowKeySetRef;
    return countOfCurrentPageCheckedRowsRef.value > 0 && countOfCurrentPageCheckedRowsRef.value < length - countOfCurrentPageDisabledRowsRef.value || paginatedDataRef.value.some((rowData) => mergedInderminateRowKeySet.has(rowData.key));
  });
  const allRowsCheckedRef = computed(() => {
    const {
      length
    } = paginatedDataRef.value;
    return countOfCurrentPageCheckedRowsRef.value !== 0 && countOfCurrentPageCheckedRowsRef.value === length - countOfCurrentPageDisabledRowsRef.value;
  });
  const headerCheckboxDisabledRef = computed(() => {
    return paginatedDataRef.value.length === 0;
  });
  function doUpdateCheckedRowKeys(keys, row, action) {
    const {
      "onUpdate:checkedRowKeys": _onUpdateCheckedRowKeys,
      onUpdateCheckedRowKeys,
      onCheckedRowKeysChange
    } = props;
    const rows = [];
    const {
      value: {
        getNode
      }
    } = treeMateRef;
    keys.forEach((key) => {
      var _a;
      const row2 = (_a = getNode(key)) === null || _a === void 0 ? void 0 : _a.rawNode;
      rows.push(row2);
    });
    if (_onUpdateCheckedRowKeys) {
      call(_onUpdateCheckedRowKeys, keys, rows, {
        row,
        action
      });
    }
    if (onUpdateCheckedRowKeys) {
      call(onUpdateCheckedRowKeys, keys, rows, {
        row,
        action
      });
    }
    if (onCheckedRowKeysChange) {
      call(onCheckedRowKeysChange, keys, rows, {
        row,
        action
      });
    }
    uncontrolledCheckedRowKeysRef.value = keys;
  }
  function doCheck(rowKey, single = false, rowInfo) {
    if (props.loading) return;
    if (single) {
      doUpdateCheckedRowKeys(Array.isArray(rowKey) ? rowKey.slice(0, 1) : [rowKey], rowInfo, "check");
      return;
    }
    doUpdateCheckedRowKeys(treeMateRef.value.check(rowKey, mergedCheckedRowKeysRef.value, {
      cascade: props.cascade,
      allowNotLoaded: props.allowCheckingNotLoaded
    }).checkedKeys, rowInfo, "check");
  }
  function doUncheck(rowKey, rowInfo) {
    if (props.loading) return;
    doUpdateCheckedRowKeys(treeMateRef.value.uncheck(rowKey, mergedCheckedRowKeysRef.value, {
      cascade: props.cascade,
      allowNotLoaded: props.allowCheckingNotLoaded
    }).checkedKeys, rowInfo, "uncheck");
  }
  function doCheckAll(checkWholeTable = false) {
    const {
      value: column
    } = selectionColumnRef;
    if (!column || props.loading) return;
    const rowKeysToCheck = [];
    (checkWholeTable ? treeMateRef.value.treeNodes : paginatedDataRef.value).forEach((tmNode) => {
      if (!tmNode.disabled) {
        rowKeysToCheck.push(tmNode.key);
      }
    });
    doUpdateCheckedRowKeys(treeMateRef.value.check(rowKeysToCheck, mergedCheckedRowKeysRef.value, {
      cascade: true,
      allowNotLoaded: props.allowCheckingNotLoaded
    }).checkedKeys, void 0, "checkAll");
  }
  function doUncheckAll(checkWholeTable = false) {
    const {
      value: column
    } = selectionColumnRef;
    if (!column || props.loading) return;
    const rowKeysToUncheck = [];
    (checkWholeTable ? treeMateRef.value.treeNodes : paginatedDataRef.value).forEach((tmNode) => {
      if (!tmNode.disabled) {
        rowKeysToUncheck.push(tmNode.key);
      }
    });
    doUpdateCheckedRowKeys(treeMateRef.value.uncheck(rowKeysToUncheck, mergedCheckedRowKeysRef.value, {
      cascade: true,
      allowNotLoaded: props.allowCheckingNotLoaded
    }).checkedKeys, void 0, "uncheckAll");
  }
  return {
    mergedCheckedRowKeySetRef,
    mergedCheckedRowKeysRef,
    mergedInderminateRowKeySetRef,
    someRowsCheckedRef,
    allRowsCheckedRef,
    headerCheckboxDisabledRef,
    doUpdateCheckedRowKeys,
    doCheckAll,
    doUncheckAll,
    doCheck,
    doUncheck
  };
}
function useExpand(props, treeMateRef) {
  const renderExpandRef = useMemo(() => {
    for (const col of props.columns) {
      if (col.type === "expand") {
        return col.renderExpand;
      }
    }
  });
  const expandableRef = useMemo(() => {
    let expandable;
    for (const col of props.columns) {
      if (col.type === "expand") {
        expandable = col.expandable;
        break;
      }
    }
    return expandable;
  });
  const uncontrolledExpandedRowKeysRef = ref(props.defaultExpandAll ? (renderExpandRef === null || renderExpandRef === void 0 ? void 0 : renderExpandRef.value) ? (() => {
    const expandedKeys = [];
    treeMateRef.value.treeNodes.forEach((tmNode) => {
      var _a;
      if ((_a = expandableRef.value) === null || _a === void 0 ? void 0 : _a.call(expandableRef, tmNode.rawNode)) {
        expandedKeys.push(tmNode.key);
      }
    });
    return expandedKeys;
  })() : treeMateRef.value.getNonLeafKeys() : props.defaultExpandedRowKeys);
  const controlledExpandedRowKeysRef = toRef(props, "expandedRowKeys");
  const stickyExpandedRowsRef = toRef(props, "stickyExpandedRows");
  const mergedExpandedRowKeysRef = useMergedState(controlledExpandedRowKeysRef, uncontrolledExpandedRowKeysRef);
  function doUpdateExpandedRowKeys(expandedKeys) {
    const {
      onUpdateExpandedRowKeys,
      "onUpdate:expandedRowKeys": _onUpdateExpandedRowKeys
    } = props;
    if (onUpdateExpandedRowKeys) {
      call(onUpdateExpandedRowKeys, expandedKeys);
    }
    if (_onUpdateExpandedRowKeys) {
      call(_onUpdateExpandedRowKeys, expandedKeys);
    }
    uncontrolledExpandedRowKeysRef.value = expandedKeys;
  }
  return {
    stickyExpandedRowsRef,
    mergedExpandedRowKeysRef,
    renderExpandRef,
    expandableRef,
    doUpdateExpandedRowKeys
  };
}
function getRowsAndCols(columns, getResizableWidth) {
  const rows = [];
  const cols = [];
  const dataRelatedCols = [];
  const rowItemMap = /* @__PURE__ */ new WeakMap();
  let maxDepth = -1;
  let totalRowSpan = 0;
  let hasEllipsis = false;
  function ensureMaxDepth(columns2, currentDepth) {
    if (currentDepth > maxDepth) {
      rows[currentDepth] = [];
      maxDepth = currentDepth;
    }
    columns2.forEach((column, index2) => {
      if ("children" in column) {
        ensureMaxDepth(column.children, currentDepth + 1);
      } else {
        const key = "key" in column ? column.key : void 0;
        cols.push({
          key: getColKey(column),
          style: createCustomWidthStyle(column, key !== void 0 ? formatLength(getResizableWidth(key)) : void 0),
          column,
          index: index2,
          // The width property is only applied to horizontally virtual scroll table
          width: column.width === void 0 ? 128 : Number(column.width)
        });
        totalRowSpan += 1;
        if (!hasEllipsis) {
          hasEllipsis = !!column.ellipsis;
        }
        dataRelatedCols.push(column);
      }
    });
  }
  ensureMaxDepth(columns, 0);
  let currentLeafIndex = 0;
  function ensureColLayout(columns2, currentDepth) {
    let hideUntilIndex = 0;
    columns2.forEach((column) => {
      var _a;
      if ("children" in column) {
        const cachedCurrentLeafIndex = currentLeafIndex;
        const rowItem = {
          column,
          colIndex: currentLeafIndex,
          colSpan: 0,
          rowSpan: 1,
          isLast: false
        };
        ensureColLayout(column.children, currentDepth + 1);
        column.children.forEach((childColumn) => {
          var _a2, _b;
          rowItem.colSpan += (_b = (_a2 = rowItemMap.get(childColumn)) === null || _a2 === void 0 ? void 0 : _a2.colSpan) !== null && _b !== void 0 ? _b : 0;
        });
        if (cachedCurrentLeafIndex + rowItem.colSpan === totalRowSpan) {
          rowItem.isLast = true;
        }
        rowItemMap.set(column, rowItem);
        rows[currentDepth].push(rowItem);
      } else {
        if (currentLeafIndex < hideUntilIndex) {
          currentLeafIndex += 1;
          return;
        }
        let colSpan = 1;
        if ("titleColSpan" in column) {
          colSpan = (_a = column.titleColSpan) !== null && _a !== void 0 ? _a : 1;
        }
        if (colSpan > 1) {
          hideUntilIndex = currentLeafIndex + colSpan;
        }
        const isLast = currentLeafIndex + colSpan === totalRowSpan;
        const rowItem = {
          column,
          colSpan,
          colIndex: currentLeafIndex,
          rowSpan: maxDepth - currentDepth + 1,
          isLast
        };
        rowItemMap.set(column, rowItem);
        rows[currentDepth].push(rowItem);
        currentLeafIndex += 1;
      }
    });
  }
  ensureColLayout(columns, 0);
  return {
    hasEllipsis,
    rows,
    cols,
    dataRelatedCols
  };
}
function useGroupHeader(props, getResizableWidth) {
  const rowsAndCols = computed(() => getRowsAndCols(props.columns, getResizableWidth));
  return {
    rowsRef: computed(() => rowsAndCols.value.rows),
    colsRef: computed(() => rowsAndCols.value.cols),
    hasEllipsisRef: computed(() => rowsAndCols.value.hasEllipsis),
    dataRelatedColsRef: computed(() => rowsAndCols.value.dataRelatedCols)
  };
}
function useResizable() {
  const resizableWidthsRef = ref({});
  function getResizableWidth(key) {
    return resizableWidthsRef.value[key];
  }
  function doUpdateResizableWidth(column, width) {
    if (isColumnResizable(column) && "key" in column) {
      resizableWidthsRef.value[column.key] = width;
    }
  }
  function clearResizableWidth() {
    resizableWidthsRef.value = {};
  }
  return {
    getResizableWidth,
    doUpdateResizableWidth,
    clearResizableWidth
  };
}
function useScroll(props, {
  mainTableInstRef,
  mergedCurrentPageRef,
  bodyWidthRef
}) {
  let lastScrollLeft = 0;
  const scrollPartRef = ref();
  const leftActiveFixedColKeyRef = ref(null);
  const leftActiveFixedChildrenColKeysRef = ref([]);
  const rightActiveFixedColKeyRef = ref(null);
  const rightActiveFixedChildrenColKeysRef = ref([]);
  const styleScrollXRef = computed(() => {
    return formatLength(props.scrollX);
  });
  const leftFixedColumnsRef = computed(() => {
    return props.columns.filter((column) => column.fixed === "left");
  });
  const rightFixedColumnsRef = computed(() => {
    return props.columns.filter((column) => column.fixed === "right");
  });
  const fixedColumnLeftMapRef = computed(() => {
    const columns = {};
    let left = 0;
    function traverse(cols) {
      cols.forEach((col) => {
        const positionInfo = {
          start: left,
          end: 0
        };
        columns[getColKey(col)] = positionInfo;
        if ("children" in col) {
          traverse(col.children);
          positionInfo.end = left;
        } else {
          left += getNumberColWidth(col) || 0;
          positionInfo.end = left;
        }
      });
    }
    traverse(leftFixedColumnsRef.value);
    return columns;
  });
  const fixedColumnRightMapRef = computed(() => {
    const columns = {};
    let right = 0;
    function traverse(cols) {
      for (let i = cols.length - 1; i >= 0; --i) {
        const col = cols[i];
        const positionInfo = {
          start: right,
          end: 0
        };
        columns[getColKey(col)] = positionInfo;
        if ("children" in col) {
          traverse(col.children);
          positionInfo.end = right;
        } else {
          right += getNumberColWidth(col) || 0;
          positionInfo.end = right;
        }
      }
    }
    traverse(rightFixedColumnsRef.value);
    return columns;
  });
  function deriveActiveLeftFixedColumn() {
    var _a, _b;
    const {
      value: leftFixedColumns
    } = leftFixedColumnsRef;
    let leftWidth = 0;
    const {
      value: fixedColumnLeftMap
    } = fixedColumnLeftMapRef;
    let leftActiveFixedColKey = null;
    for (let i = 0; i < leftFixedColumns.length; ++i) {
      const key = getColKey(leftFixedColumns[i]);
      if (lastScrollLeft > (((_a = fixedColumnLeftMap[key]) === null || _a === void 0 ? void 0 : _a.start) || 0) - leftWidth) {
        leftActiveFixedColKey = key;
        leftWidth = ((_b = fixedColumnLeftMap[key]) === null || _b === void 0 ? void 0 : _b.end) || 0;
      } else {
        break;
      }
    }
    leftActiveFixedColKeyRef.value = leftActiveFixedColKey;
  }
  function deriveActiveLeftFixedChildrenColumns() {
    leftActiveFixedChildrenColKeysRef.value = [];
    let activeLeftFixedColumn = props.columns.find((col) => getColKey(col) === leftActiveFixedColKeyRef.value);
    while (activeLeftFixedColumn && "children" in activeLeftFixedColumn) {
      const length = activeLeftFixedColumn.children.length;
      if (length === 0) break;
      const nextActiveLeftFixedColumn = activeLeftFixedColumn.children[length - 1];
      leftActiveFixedChildrenColKeysRef.value.push(getColKey(nextActiveLeftFixedColumn));
      activeLeftFixedColumn = nextActiveLeftFixedColumn;
    }
  }
  function deriveActiveRightFixedColumn() {
    var _a, _b;
    const {
      value: rightFixedColumns
    } = rightFixedColumnsRef;
    const scrollWidth = Number(props.scrollX);
    const {
      value: tableWidth
    } = bodyWidthRef;
    if (tableWidth === null) return;
    let rightWidth = 0;
    let rightActiveFixedColKey = null;
    const {
      value: fixedColumnRightMap
    } = fixedColumnRightMapRef;
    for (let i = rightFixedColumns.length - 1; i >= 0; --i) {
      const key = getColKey(rightFixedColumns[i]);
      if (Math.round(lastScrollLeft + (((_a = fixedColumnRightMap[key]) === null || _a === void 0 ? void 0 : _a.start) || 0) + tableWidth - rightWidth) < scrollWidth) {
        rightActiveFixedColKey = key;
        rightWidth = ((_b = fixedColumnRightMap[key]) === null || _b === void 0 ? void 0 : _b.end) || 0;
      } else {
        break;
      }
    }
    rightActiveFixedColKeyRef.value = rightActiveFixedColKey;
  }
  function deriveActiveRightFixedChildrenColumns() {
    rightActiveFixedChildrenColKeysRef.value = [];
    let activeRightFixedColumn = props.columns.find((col) => getColKey(col) === rightActiveFixedColKeyRef.value);
    while (activeRightFixedColumn && "children" in activeRightFixedColumn && activeRightFixedColumn.children.length) {
      const nextActiveRightFixedColumn = activeRightFixedColumn.children[0];
      rightActiveFixedChildrenColKeysRef.value.push(getColKey(nextActiveRightFixedColumn));
      activeRightFixedColumn = nextActiveRightFixedColumn;
    }
  }
  function getScrollElements() {
    const header = mainTableInstRef.value ? mainTableInstRef.value.getHeaderElement() : null;
    const body = mainTableInstRef.value ? mainTableInstRef.value.getBodyElement() : null;
    return {
      header,
      body
    };
  }
  function scrollMainTableBodyToTop() {
    const {
      body
    } = getScrollElements();
    if (body) {
      body.scrollTop = 0;
    }
  }
  function handleTableHeaderScroll() {
    if (scrollPartRef.value !== "body") {
      beforeNextFrameOnce(syncScrollState);
    } else {
      scrollPartRef.value = void 0;
    }
  }
  function handleTableBodyScroll(e) {
    var _a;
    (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
    if (scrollPartRef.value !== "head") {
      beforeNextFrameOnce(syncScrollState);
    } else {
      scrollPartRef.value = void 0;
    }
  }
  function syncScrollState() {
    const {
      header,
      body
    } = getScrollElements();
    if (!body) return;
    const {
      value: tableWidth
    } = bodyWidthRef;
    if (tableWidth === null) return;
    if (props.maxHeight || props.flexHeight) {
      if (!header) return;
      const directionHead = lastScrollLeft - header.scrollLeft;
      scrollPartRef.value = directionHead !== 0 ? "head" : "body";
      if (scrollPartRef.value === "head") {
        lastScrollLeft = header.scrollLeft;
        body.scrollLeft = lastScrollLeft;
      } else {
        lastScrollLeft = body.scrollLeft;
        header.scrollLeft = lastScrollLeft;
      }
    } else {
      lastScrollLeft = body.scrollLeft;
    }
    deriveActiveLeftFixedColumn();
    deriveActiveLeftFixedChildrenColumns();
    deriveActiveRightFixedColumn();
    deriveActiveRightFixedChildrenColumns();
  }
  function setHeaderScrollLeft(left) {
    const {
      header
    } = getScrollElements();
    if (!header) return;
    header.scrollLeft = left;
    syncScrollState();
  }
  watch(mergedCurrentPageRef, () => {
    scrollMainTableBodyToTop();
  });
  return {
    styleScrollXRef,
    fixedColumnLeftMapRef,
    fixedColumnRightMapRef,
    leftFixedColumnsRef,
    rightFixedColumnsRef,
    leftActiveFixedColKeyRef,
    leftActiveFixedChildrenColKeysRef,
    rightActiveFixedColKeyRef,
    rightActiveFixedChildrenColKeysRef,
    syncScrollState,
    handleTableBodyScroll,
    handleTableHeaderScroll,
    setHeaderScrollLeft
  };
}
function getMultiplePriority(sorter) {
  if (typeof sorter === "object" && typeof sorter.multiple === "number") {
    return sorter.multiple;
  }
  return false;
}
function getSortFunction(sorter, columnKey) {
  if (columnKey && (sorter === void 0 || sorter === "default" || typeof sorter === "object" && sorter.compare === "default")) {
    return getDefaultSorterFn(columnKey);
  }
  if (typeof sorter === "function") {
    return sorter;
  }
  if (sorter && typeof sorter === "object" && sorter.compare && sorter.compare !== "default") {
    return sorter.compare;
  }
  return false;
}
function getDefaultSorterFn(columnKey) {
  return (row1, row2) => {
    const value1 = row1[columnKey];
    const value2 = row2[columnKey];
    if (value1 === null || value1 === void 0) {
      if (value2 === null || value2 === void 0) return 0;
      return -1;
    } else if (value2 === null || value2 === void 0) {
      return 1;
    } else if (typeof value1 === "number" && typeof value2 === "number") {
      return value1 - value2;
    } else if (typeof value1 === "string" && typeof value2 === "string") {
      return value1.localeCompare(value2);
    }
    return 0;
  };
}
function useSorter(props, {
  dataRelatedColsRef,
  filteredDataRef
}) {
  const defaultSortState = [];
  dataRelatedColsRef.value.forEach((column) => {
    var _a;
    if (column.sorter !== void 0) {
      updateSortStatesByNewSortState(defaultSortState, {
        columnKey: column.key,
        sorter: column.sorter,
        order: (_a = column.defaultSortOrder) !== null && _a !== void 0 ? _a : false
      });
    }
  });
  const uncontrolledSortStateRef = ref(defaultSortState);
  const mergedSortStateRef = computed(() => {
    const columnsWithControlledSortOrder = dataRelatedColsRef.value.filter((column) => column.type !== "selection" && column.sorter !== void 0 && (column.sortOrder === "ascend" || column.sortOrder === "descend" || column.sortOrder === false));
    const columnToSort = columnsWithControlledSortOrder.filter((col) => col.sortOrder !== false);
    if (columnToSort.length) {
      return columnToSort.map((column) => {
        return {
          columnKey: column.key,
          // column to sort has controlled sorter
          // sorter && sort order won't be undefined
          order: column.sortOrder,
          sorter: column.sorter
        };
      });
    }
    if (columnsWithControlledSortOrder.length) return [];
    const {
      value: uncontrolledSortState
    } = uncontrolledSortStateRef;
    if (Array.isArray(uncontrolledSortState)) {
      return uncontrolledSortState;
    } else if (uncontrolledSortState) {
      return [uncontrolledSortState];
    } else {
      return [];
    }
  });
  const sortedDataRef = computed(() => {
    const activeSorters = mergedSortStateRef.value.slice().sort((a, b) => {
      const item1Priority = getMultiplePriority(a.sorter) || 0;
      const item2Priority = getMultiplePriority(b.sorter) || 0;
      return item2Priority - item1Priority;
    });
    if (activeSorters.length) {
      const filteredData = filteredDataRef.value.slice();
      return filteredData.sort((tmNode1, tmNode2) => {
        let compareResult = 0;
        activeSorters.some((sorterState) => {
          const {
            columnKey,
            sorter,
            order
          } = sorterState;
          const compareFn = getSortFunction(sorter, columnKey);
          if (compareFn && order) {
            compareResult = compareFn(tmNode1.rawNode, tmNode2.rawNode);
            if (compareResult !== 0) {
              compareResult = compareResult * getFlagOfOrder(order);
              return true;
            }
          }
          return false;
        });
        return compareResult;
      });
    }
    return filteredDataRef.value;
  });
  function getUpdatedSorterState(sortState) {
    let currentSortState = mergedSortStateRef.value.slice();
    if (sortState && getMultiplePriority(sortState.sorter) !== false) {
      currentSortState = currentSortState.filter((sortState2) => getMultiplePriority(sortState2.sorter) !== false);
      updateSortStatesByNewSortState(currentSortState, sortState);
      return currentSortState;
    } else if (sortState) {
      return sortState;
    }
    return null;
  }
  function deriveNextSorter(sortState) {
    const nextSorterState = getUpdatedSorterState(sortState);
    doUpdateSorter(nextSorterState);
  }
  function doUpdateSorter(sortState) {
    const {
      "onUpdate:sorter": _onUpdateSorter,
      onUpdateSorter,
      onSorterChange
    } = props;
    if (_onUpdateSorter) {
      call(_onUpdateSorter, sortState);
    }
    if (onUpdateSorter) {
      call(onUpdateSorter, sortState);
    }
    if (onSorterChange) {
      call(onSorterChange, sortState);
    }
    uncontrolledSortStateRef.value = sortState;
  }
  function sort(columnKey, order = "ascend") {
    if (!columnKey) {
      clearSorter();
    } else {
      const columnToSort = dataRelatedColsRef.value.find((column) => column.type !== "selection" && column.type !== "expand" && column.key === columnKey);
      if (!(columnToSort === null || columnToSort === void 0 ? void 0 : columnToSort.sorter)) return;
      const sorter = columnToSort.sorter;
      deriveNextSorter({
        columnKey,
        sorter,
        order
      });
    }
  }
  function clearSorter() {
    doUpdateSorter(null);
  }
  function updateSortStatesByNewSortState(sortStates, sortState) {
    const index2 = sortStates.findIndex((state) => (sortState === null || sortState === void 0 ? void 0 : sortState.columnKey) && state.columnKey === sortState.columnKey);
    if (index2 !== void 0 && index2 >= 0) {
      sortStates[index2] = sortState;
    } else {
      sortStates.push(sortState);
    }
  }
  return {
    clearSorter,
    sort,
    sortedDataRef,
    mergedSortStateRef,
    deriveNextSorter
  };
}
function useTableData(props, {
  dataRelatedColsRef
}) {
  const selectionColumnRef = computed(() => {
    const getSelectionColumn = (cols) => {
      for (let i = 0; i < cols.length; ++i) {
        const col = cols[i];
        if ("children" in col) {
          return getSelectionColumn(col.children);
        } else if (col.type === "selection") {
          return col;
        }
      }
      return null;
    };
    return getSelectionColumn(props.columns);
  });
  const treeMateRef = computed(() => {
    const {
      childrenKey
    } = props;
    return createTreeMate(props.data, {
      ignoreEmptyChildren: true,
      getKey: props.rowKey,
      getChildren: (rowData) => rowData[childrenKey],
      getDisabled: (rowData) => {
        var _a, _b;
        if ((_b = (_a = selectionColumnRef.value) === null || _a === void 0 ? void 0 : _a.disabled) === null || _b === void 0 ? void 0 : _b.call(_a, rowData)) {
          return true;
        }
        return false;
      }
    });
  });
  const childTriggerColIndexRef = useMemo(() => {
    const {
      columns
    } = props;
    const {
      length
    } = columns;
    let firstContentfulColIndex = null;
    for (let i = 0; i < length; ++i) {
      const col = columns[i];
      if (!col.type && firstContentfulColIndex === null) {
        firstContentfulColIndex = i;
      }
      if ("tree" in col && col.tree) {
        return i;
      }
    }
    return firstContentfulColIndex || 0;
  });
  const uncontrolledFilterStateRef = ref({});
  const {
    pagination
  } = props;
  const uncontrolledCurrentPageRef = ref(pagination ? pagination.defaultPage || 1 : 1);
  const uncontrolledPageSizeRef = ref(getDefaultPageSize(pagination));
  const mergedFilterStateRef = computed(() => {
    const columnsWithControlledFilter = dataRelatedColsRef.value.filter((column) => {
      return column.filterOptionValues !== void 0 || column.filterOptionValue !== void 0;
    });
    const controlledFilterState = {};
    columnsWithControlledFilter.forEach((column) => {
      var _a;
      if (column.type === "selection" || column.type === "expand") return;
      if (column.filterOptionValues === void 0) {
        controlledFilterState[column.key] = (_a = column.filterOptionValue) !== null && _a !== void 0 ? _a : null;
      } else {
        controlledFilterState[column.key] = column.filterOptionValues;
      }
    });
    const activeFilters = Object.assign(createShallowClonedObject(uncontrolledFilterStateRef.value), controlledFilterState);
    return activeFilters;
  });
  const filteredDataRef = computed(() => {
    const mergedFilterState = mergedFilterStateRef.value;
    const {
      columns
    } = props;
    function createDefaultFilter(columnKey) {
      return (filterOptionValue, row) => !!~String(row[columnKey]).indexOf(String(filterOptionValue));
    }
    const {
      value: {
        treeNodes: data
      }
    } = treeMateRef;
    const columnEntries = [];
    columns.forEach((column) => {
      if (column.type === "selection" || column.type === "expand" || "children" in column) {
        return;
      }
      columnEntries.push([column.key, column]);
    });
    return data ? data.filter((tmNode) => {
      const {
        rawNode: row
      } = tmNode;
      for (const [columnKey, column] of columnEntries) {
        let activeFilterOptionValues = mergedFilterState[columnKey];
        if (activeFilterOptionValues == null) continue;
        if (!Array.isArray(activeFilterOptionValues)) {
          activeFilterOptionValues = [activeFilterOptionValues];
        }
        if (!activeFilterOptionValues.length) continue;
        const filter2 = column.filter === "default" ? createDefaultFilter(columnKey) : column.filter;
        if (column && typeof filter2 === "function") {
          if (column.filterMode === "and") {
            if (activeFilterOptionValues.some((filterOptionValue) => !filter2(filterOptionValue, row))) {
              return false;
            }
          } else {
            if (activeFilterOptionValues.some((filterOptionValue) => filter2(filterOptionValue, row))) {
              continue;
            } else {
              return false;
            }
          }
        }
      }
      return true;
    }) : [];
  });
  const {
    sortedDataRef,
    deriveNextSorter,
    mergedSortStateRef,
    sort,
    clearSorter
  } = useSorter(props, {
    dataRelatedColsRef,
    filteredDataRef
  });
  dataRelatedColsRef.value.forEach((column) => {
    var _a;
    if (column.filter) {
      const defaultFilterOptionValues = column.defaultFilterOptionValues;
      if (column.filterMultiple) {
        uncontrolledFilterStateRef.value[column.key] = defaultFilterOptionValues || [];
      } else if (defaultFilterOptionValues !== void 0) {
        uncontrolledFilterStateRef.value[column.key] = defaultFilterOptionValues === null ? [] : defaultFilterOptionValues;
      } else {
        uncontrolledFilterStateRef.value[column.key] = (_a = column.defaultFilterOptionValue) !== null && _a !== void 0 ? _a : null;
      }
    }
  });
  const controlledCurrentPageRef = computed(() => {
    const {
      pagination: pagination2
    } = props;
    if (pagination2 === false) return void 0;
    return pagination2.page;
  });
  const controlledPageSizeRef = computed(() => {
    const {
      pagination: pagination2
    } = props;
    if (pagination2 === false) return void 0;
    return pagination2.pageSize;
  });
  const _mergedCurrentPageRef = useMergedState(controlledCurrentPageRef, uncontrolledCurrentPageRef);
  const mergedPageSizeRef = useMergedState(controlledPageSizeRef, uncontrolledPageSizeRef);
  const boundedMergedCurrentPageRef = useMemo(() => {
    const page2 = _mergedCurrentPageRef.value;
    return props.remote ? page2 : Math.max(1, Math.min(Math.ceil(filteredDataRef.value.length / mergedPageSizeRef.value), page2));
  });
  const mergedPageCountRef = computed(() => {
    const {
      pagination: pagination2
    } = props;
    if (pagination2) {
      const {
        pageCount
      } = pagination2;
      if (pageCount !== void 0) return pageCount;
    }
    return void 0;
  });
  const paginatedDataRef = computed(() => {
    if (props.remote) return treeMateRef.value.treeNodes;
    if (!props.pagination) return sortedDataRef.value;
    const pageSize = mergedPageSizeRef.value;
    const startIndex = (boundedMergedCurrentPageRef.value - 1) * pageSize;
    return sortedDataRef.value.slice(startIndex, startIndex + pageSize);
  });
  const rawPaginatedDataRef = computed(() => {
    return paginatedDataRef.value.map((tmNode) => tmNode.rawNode);
  });
  function mergedOnUpdatePage(page2) {
    const {
      pagination: pagination2
    } = props;
    if (pagination2) {
      const {
        onChange,
        "onUpdate:page": _onUpdatePage,
        onUpdatePage
      } = pagination2;
      if (onChange) call(onChange, page2);
      if (onUpdatePage) call(onUpdatePage, page2);
      if (_onUpdatePage) call(_onUpdatePage, page2);
      doUpdatePage(page2);
    }
  }
  function mergedOnUpdatePageSize(pageSize) {
    const {
      pagination: pagination2
    } = props;
    if (pagination2) {
      const {
        onPageSizeChange,
        "onUpdate:pageSize": _onUpdatePageSize,
        onUpdatePageSize
      } = pagination2;
      if (onPageSizeChange) call(onPageSizeChange, pageSize);
      if (onUpdatePageSize) call(onUpdatePageSize, pageSize);
      if (_onUpdatePageSize) call(_onUpdatePageSize, pageSize);
      doUpdatePageSize(pageSize);
    }
  }
  const mergedItemCountRef = computed(() => {
    if (props.remote) {
      const {
        pagination: pagination2
      } = props;
      if (pagination2) {
        const {
          itemCount
        } = pagination2;
        if (itemCount !== void 0) return itemCount;
      }
      return void 0;
    }
    return filteredDataRef.value.length;
  });
  const mergedPaginationRef = computed(() => {
    return Object.assign(Object.assign({}, props.pagination), {
      // reset deprecated methods
      onChange: void 0,
      onUpdatePage: void 0,
      onUpdatePageSize: void 0,
      onPageSizeChange: void 0,
      "onUpdate:page": mergedOnUpdatePage,
      "onUpdate:pageSize": mergedOnUpdatePageSize,
      // writing merged props after pagination to avoid
      // pagination[key] === undefined
      // key still exists but value is undefined
      page: boundedMergedCurrentPageRef.value,
      pageSize: mergedPageSizeRef.value,
      pageCount: mergedItemCountRef.value === void 0 ? mergedPageCountRef.value : void 0,
      itemCount: mergedItemCountRef.value
    });
  });
  function doUpdatePage(page2) {
    const {
      "onUpdate:page": _onUpdatePage,
      onPageChange,
      onUpdatePage
    } = props;
    if (onUpdatePage) call(onUpdatePage, page2);
    if (_onUpdatePage) call(_onUpdatePage, page2);
    if (onPageChange) call(onPageChange, page2);
    uncontrolledCurrentPageRef.value = page2;
  }
  function doUpdatePageSize(pageSize) {
    const {
      "onUpdate:pageSize": _onUpdatePageSize,
      onPageSizeChange,
      onUpdatePageSize
    } = props;
    if (onPageSizeChange) call(onPageSizeChange, pageSize);
    if (onUpdatePageSize) call(onUpdatePageSize, pageSize);
    if (_onUpdatePageSize) call(_onUpdatePageSize, pageSize);
    uncontrolledPageSizeRef.value = pageSize;
  }
  function doUpdateFilters(filters2, sourceColumn) {
    const {
      onUpdateFilters,
      "onUpdate:filters": _onUpdateFilters,
      onFiltersChange
    } = props;
    if (onUpdateFilters) call(onUpdateFilters, filters2, sourceColumn);
    if (_onUpdateFilters) call(_onUpdateFilters, filters2, sourceColumn);
    if (onFiltersChange) call(onFiltersChange, filters2, sourceColumn);
    uncontrolledFilterStateRef.value = filters2;
  }
  function onUnstableColumnResize(resizedWidth, limitedWidth, column, getColumnWidth) {
    var _a;
    (_a = props.onUnstableColumnResize) === null || _a === void 0 ? void 0 : _a.call(props, resizedWidth, limitedWidth, column, getColumnWidth);
  }
  function page(page2) {
    doUpdatePage(page2);
  }
  function clearFilter() {
    clearFilters();
  }
  function clearFilters() {
    filters({});
  }
  function filters(filters2) {
    filter(filters2);
  }
  function filter(filters2) {
    if (!filters2) {
      uncontrolledFilterStateRef.value = {};
    } else if (filters2) {
      uncontrolledFilterStateRef.value = createShallowClonedObject(filters2);
    } else ;
  }
  return {
    treeMateRef,
    mergedCurrentPageRef: boundedMergedCurrentPageRef,
    mergedPaginationRef,
    paginatedDataRef,
    rawPaginatedDataRef,
    mergedFilterStateRef,
    mergedSortStateRef,
    hoverKeyRef: ref(null),
    selectionColumnRef,
    childTriggerColIndexRef,
    doUpdateFilters,
    deriveNextSorter,
    doUpdatePageSize,
    doUpdatePage,
    onUnstableColumnResize,
    // exported methods
    filter,
    filters,
    clearFilter,
    clearFilters,
    clearSorter,
    page,
    sort
  };
}
const __unplugin_components_5 = defineComponent({
  name: "DataTable",
  alias: ["AdvancedTable"],
  props: dataTableProps,
  setup(props, {
    slots
  }) {
    const {
      mergedBorderedRef,
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl("DataTable", mergedRtlRef, mergedClsPrefixRef);
    const mergedBottomBorderedRef = computed(() => {
      const {
        bottomBordered
      } = props;
      if (mergedBorderedRef.value) return false;
      if (bottomBordered !== void 0) return bottomBordered;
      return true;
    });
    const themeRef = useTheme("DataTable", "-data-table", style, dataTableLight, props, mergedClsPrefixRef);
    const bodyWidthRef = ref(null);
    const mainTableInstRef = ref(null);
    const {
      getResizableWidth,
      clearResizableWidth,
      doUpdateResizableWidth
    } = useResizable();
    const {
      rowsRef,
      colsRef,
      dataRelatedColsRef,
      hasEllipsisRef
    } = useGroupHeader(props, getResizableWidth);
    const {
      treeMateRef,
      mergedCurrentPageRef,
      paginatedDataRef,
      rawPaginatedDataRef,
      selectionColumnRef,
      hoverKeyRef,
      mergedPaginationRef,
      mergedFilterStateRef,
      mergedSortStateRef,
      childTriggerColIndexRef,
      doUpdatePage,
      doUpdateFilters,
      onUnstableColumnResize,
      deriveNextSorter,
      filter,
      filters,
      clearFilter,
      clearFilters,
      clearSorter,
      page,
      sort
    } = useTableData(props, {
      dataRelatedColsRef
    });
    const downloadCsv = (options) => {
      const {
        fileName = "data.csv",
        keepOriginalData = false
      } = options || {};
      const data = keepOriginalData ? props.data : rawPaginatedDataRef.value;
      const csvData = generateCsv(props.columns, data, props.getCsvCell, props.getCsvHeader);
      const blob = new Blob([csvData], {
        type: "text/csv;charset=utf-8"
      });
      const downloadUrl = URL.createObjectURL(blob);
      download(downloadUrl, fileName.endsWith(".csv") ? fileName : `${fileName}.csv`);
      URL.revokeObjectURL(downloadUrl);
    };
    const {
      doCheckAll,
      doUncheckAll,
      doCheck,
      doUncheck,
      headerCheckboxDisabledRef,
      someRowsCheckedRef,
      allRowsCheckedRef,
      mergedCheckedRowKeySetRef,
      mergedInderminateRowKeySetRef
    } = useCheck(props, {
      selectionColumnRef,
      treeMateRef,
      paginatedDataRef
    });
    const {
      stickyExpandedRowsRef,
      mergedExpandedRowKeysRef,
      renderExpandRef,
      expandableRef,
      doUpdateExpandedRowKeys
    } = useExpand(props, treeMateRef);
    const {
      handleTableBodyScroll,
      handleTableHeaderScroll,
      syncScrollState,
      setHeaderScrollLeft,
      leftActiveFixedColKeyRef,
      leftActiveFixedChildrenColKeysRef,
      rightActiveFixedColKeyRef,
      rightActiveFixedChildrenColKeysRef,
      leftFixedColumnsRef,
      rightFixedColumnsRef,
      fixedColumnLeftMapRef,
      fixedColumnRightMapRef
    } = useScroll(props, {
      bodyWidthRef,
      mainTableInstRef,
      mergedCurrentPageRef
    });
    const {
      localeRef
    } = useLocale("DataTable");
    const mergedTableLayoutRef = computed(() => {
      if (props.virtualScroll || props.flexHeight || props.maxHeight !== void 0 || hasEllipsisRef.value) {
        return "fixed";
      }
      return props.tableLayout;
    });
    provide(dataTableInjectionKey, {
      props,
      treeMateRef,
      renderExpandIconRef: toRef(props, "renderExpandIcon"),
      loadingKeySetRef: ref(/* @__PURE__ */ new Set()),
      slots,
      indentRef: toRef(props, "indent"),
      childTriggerColIndexRef,
      bodyWidthRef,
      componentId: createId(),
      hoverKeyRef,
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      scrollXRef: computed(() => props.scrollX),
      rowsRef,
      colsRef,
      paginatedDataRef,
      leftActiveFixedColKeyRef,
      leftActiveFixedChildrenColKeysRef,
      rightActiveFixedColKeyRef,
      rightActiveFixedChildrenColKeysRef,
      leftFixedColumnsRef,
      rightFixedColumnsRef,
      fixedColumnLeftMapRef,
      fixedColumnRightMapRef,
      mergedCurrentPageRef,
      someRowsCheckedRef,
      allRowsCheckedRef,
      mergedSortStateRef,
      mergedFilterStateRef,
      loadingRef: toRef(props, "loading"),
      rowClassNameRef: toRef(props, "rowClassName"),
      mergedCheckedRowKeySetRef,
      mergedExpandedRowKeysRef,
      mergedInderminateRowKeySetRef,
      localeRef,
      expandableRef,
      stickyExpandedRowsRef,
      rowKeyRef: toRef(props, "rowKey"),
      renderExpandRef,
      summaryRef: toRef(props, "summary"),
      virtualScrollRef: toRef(props, "virtualScroll"),
      virtualScrollXRef: toRef(props, "virtualScrollX"),
      heightForRowRef: toRef(props, "heightForRow"),
      minRowHeightRef: toRef(props, "minRowHeight"),
      virtualScrollHeaderRef: toRef(props, "virtualScrollHeader"),
      headerHeightRef: toRef(props, "headerHeight"),
      rowPropsRef: toRef(props, "rowProps"),
      stripedRef: toRef(props, "striped"),
      checkOptionsRef: computed(() => {
        const {
          value: selectionColumn
        } = selectionColumnRef;
        return selectionColumn === null || selectionColumn === void 0 ? void 0 : selectionColumn.options;
      }),
      rawPaginatedDataRef,
      filterMenuCssVarsRef: computed(() => {
        const {
          self: {
            actionDividerColor,
            actionPadding,
            actionButtonMargin
          }
        } = themeRef.value;
        return {
          "--n-action-padding": actionPadding,
          "--n-action-button-margin": actionButtonMargin,
          "--n-action-divider-color": actionDividerColor
        };
      }),
      onLoadRef: toRef(props, "onLoad"),
      mergedTableLayoutRef,
      maxHeightRef: toRef(props, "maxHeight"),
      minHeightRef: toRef(props, "minHeight"),
      flexHeightRef: toRef(props, "flexHeight"),
      headerCheckboxDisabledRef,
      paginationBehaviorOnFilterRef: toRef(props, "paginationBehaviorOnFilter"),
      summaryPlacementRef: toRef(props, "summaryPlacement"),
      filterIconPopoverPropsRef: toRef(props, "filterIconPopoverProps"),
      scrollbarPropsRef: toRef(props, "scrollbarProps"),
      syncScrollState,
      doUpdatePage,
      doUpdateFilters,
      getResizableWidth,
      onUnstableColumnResize,
      clearResizableWidth,
      doUpdateResizableWidth,
      deriveNextSorter,
      doCheck,
      doUncheck,
      doCheckAll,
      doUncheckAll,
      doUpdateExpandedRowKeys,
      handleTableHeaderScroll,
      handleTableBodyScroll,
      setHeaderScrollLeft,
      renderCell: toRef(props, "renderCell")
    });
    const exposedMethods = {
      filter,
      filters,
      clearFilters,
      clearSorter,
      page,
      sort,
      clearFilter,
      downloadCsv,
      scrollTo: (arg0, arg1) => {
        var _a;
        (_a = mainTableInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg0, arg1);
      }
    };
    const cssVarsRef = computed(() => {
      const {
        size
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          borderColor,
          tdColorHover,
          tdColorSorting,
          tdColorSortingModal,
          tdColorSortingPopover,
          thColorSorting,
          thColorSortingModal,
          thColorSortingPopover,
          thColor,
          thColorHover,
          tdColor,
          tdTextColor,
          thTextColor,
          thFontWeight,
          thButtonColorHover,
          thIconColor,
          thIconColorActive,
          filterSize,
          borderRadius,
          lineHeight,
          tdColorModal,
          thColorModal,
          borderColorModal,
          thColorHoverModal,
          tdColorHoverModal,
          borderColorPopover,
          thColorPopover,
          tdColorPopover,
          tdColorHoverPopover,
          thColorHoverPopover,
          paginationMargin,
          emptyPadding,
          boxShadowAfter,
          boxShadowBefore,
          sorterSize,
          resizableContainerSize,
          resizableSize,
          loadingColor,
          loadingSize,
          opacityLoading,
          tdColorStriped,
          tdColorStripedModal,
          tdColorStripedPopover,
          [createKey("fontSize", size)]: fontSize,
          [createKey("thPadding", size)]: thPadding,
          [createKey("tdPadding", size)]: tdPadding
        }
      } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-th-padding": thPadding,
        "--n-td-padding": tdPadding,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-line-height": lineHeight,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover,
        "--n-th-color": thColor,
        "--n-th-color-hover": thColorHover,
        "--n-th-color-modal": thColorModal,
        "--n-th-color-hover-modal": thColorHoverModal,
        "--n-th-color-popover": thColorPopover,
        "--n-th-color-hover-popover": thColorHoverPopover,
        "--n-td-color": tdColor,
        "--n-td-color-hover": tdColorHover,
        "--n-td-color-modal": tdColorModal,
        "--n-td-color-hover-modal": tdColorHoverModal,
        "--n-td-color-popover": tdColorPopover,
        "--n-td-color-hover-popover": tdColorHoverPopover,
        "--n-th-text-color": thTextColor,
        "--n-td-text-color": tdTextColor,
        "--n-th-font-weight": thFontWeight,
        "--n-th-button-color-hover": thButtonColorHover,
        "--n-th-icon-color": thIconColor,
        "--n-th-icon-color-active": thIconColorActive,
        "--n-filter-size": filterSize,
        "--n-pagination-margin": paginationMargin,
        "--n-empty-padding": emptyPadding,
        "--n-box-shadow-before": boxShadowBefore,
        "--n-box-shadow-after": boxShadowAfter,
        "--n-sorter-size": sorterSize,
        "--n-resizable-container-size": resizableContainerSize,
        "--n-resizable-size": resizableSize,
        "--n-loading-size": loadingSize,
        "--n-loading-color": loadingColor,
        "--n-opacity-loading": opacityLoading,
        "--n-td-color-striped": tdColorStriped,
        "--n-td-color-striped-modal": tdColorStripedModal,
        "--n-td-color-striped-popover": tdColorStripedPopover,
        "n-td-color-sorting": tdColorSorting,
        "n-td-color-sorting-modal": tdColorSortingModal,
        "n-td-color-sorting-popover": tdColorSortingPopover,
        "n-th-color-sorting": thColorSorting,
        "n-th-color-sorting-modal": thColorSortingModal,
        "n-th-color-sorting-popover": thColorSortingPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("data-table", computed(() => props.size[0]), cssVarsRef, props) : void 0;
    const mergedShowPaginationRef = computed(() => {
      if (!props.pagination) return false;
      if (props.paginateSinglePage) return true;
      const mergedPagination = mergedPaginationRef.value;
      const {
        pageCount
      } = mergedPagination;
      if (pageCount !== void 0) return pageCount > 1;
      return mergedPagination.itemCount && mergedPagination.pageSize && mergedPagination.itemCount > mergedPagination.pageSize;
    });
    return Object.assign({
      mainTableInstRef,
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      mergedTheme: themeRef,
      paginatedData: paginatedDataRef,
      mergedBordered: mergedBorderedRef,
      mergedBottomBordered: mergedBottomBorderedRef,
      mergedPagination: mergedPaginationRef,
      mergedShowPagination: mergedShowPaginationRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    const {
      mergedClsPrefix,
      themeClass,
      onRender,
      $slots,
      spinProps
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [`${mergedClsPrefix}-data-table`, this.rtlEnabled && `${mergedClsPrefix}-data-table--rtl`, themeClass, {
        [`${mergedClsPrefix}-data-table--bordered`]: this.mergedBordered,
        [`${mergedClsPrefix}-data-table--bottom-bordered`]: this.mergedBottomBordered,
        [`${mergedClsPrefix}-data-table--single-line`]: this.singleLine,
        [`${mergedClsPrefix}-data-table--single-column`]: this.singleColumn,
        [`${mergedClsPrefix}-data-table--loading`]: this.loading,
        [`${mergedClsPrefix}-data-table--flex-height`]: this.flexHeight
      }],
      style: this.cssVars
    }, h("div", {
      class: `${mergedClsPrefix}-data-table-wrapper`
    }, h(MainTable, {
      ref: "mainTableInstRef"
    })), this.mergedShowPagination ? h("div", {
      class: `${mergedClsPrefix}-data-table__pagination`
    }, h(__unplugin_components_6, Object.assign({
      theme: this.mergedTheme.peers.Pagination,
      themeOverrides: this.mergedTheme.peerOverrides.Pagination,
      disabled: this.loading
    }, this.mergedPagination))) : null, h(Transition, {
      name: "fade-in-scale-up-transition"
    }, {
      default: () => {
        return this.loading ? h("div", {
          class: `${mergedClsPrefix}-data-table-loading-wrapper`
        }, resolveSlot($slots.loading, () => [h(NBaseLoading, Object.assign({
          clsPrefix: mergedClsPrefix,
          strokeWidth: 20
        }, spinProps))])) : null;
      }
    }));
  }
});
async function queryRecords(params) {
  const res = await api.get("/record-history/list", {
    params
  });
  return res.data;
}
async function removeRecord(id) {
  const res = await api.delete(`/record-history/${id}`);
  return res.data;
}
async function getFileInfo(id) {
  const res = await api.get(`/record-history/file/${id}`);
  return res.data;
}
async function downloadFile(id) {
  const { videoFileId } = await getFileInfo(id);
  const fileUrl = `${api.defaults.baseURL}/assets/download/${videoFileId}`;
  return fileUrl;
}
const recordHistoryApi = {
  queryRecords,
  removeRecord,
  downloadFile,
  getFileInfo
};
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 20 20"
};
const Delete20Regular = defineComponent({
  name: "Delete20Regular",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$2,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "g",
          {
            fill: "none"
          },
          [
            createBaseVNode("path", {
              d: "M11.5 4a1.5 1.5 0 0 0-3 0h-1a2.5 2.5 0 0 1 5 0H17a.5.5 0 0 1 0 1h-.554L15.15 16.23A2 2 0 0 1 13.163 18H6.837a2 2 0 0 1-1.987-1.77L3.553 5H3a.5.5 0 0 1-.492-.41L2.5 4.5A.5.5 0 0 1 3 4h8.5zm3.938 1H4.561l1.282 11.115a1 1 0 0 0 .994.885h6.326a1 1 0 0 0 .993-.885L15.438 5zM8.5 7.5c.245 0 .45.155.492.359L9 7.938v6.125c0 .241-.224.437-.5.437c-.245 0-.45-.155-.492-.359L8 14.062V7.939c0-.242.224-.438.5-.438zm3 0c.245 0 .45.155.492.359l.008.079v6.125c0 .241-.224.437-.5.437c-.245 0-.45-.155-.492-.359L11 14.062V7.939c0-.242.224-.438.5-.438z",
              fill: "currentColor"
            })
          ],
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const PlayCircle24Regular = defineComponent({
  name: "PlayCircle24Regular",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "g",
          {
            fill: "none"
          },
          [
            createBaseVNode("path", {
              d: "M10.856 8.155A1.25 1.25 0 0 0 9 9.248v5.504a1.25 1.25 0 0 0 1.856 1.093l5.757-3.189a.75.75 0 0 0 0-1.312l-5.757-3.189zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zM3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0z",
              fill: "currentColor"
            })
          ],
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1 = { class: "live-history" };
const _hoisted_2 = { style: { "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "20px" } };
const _hoisted_3 = {
  key: 1,
  class: "result-container"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LiveHistory"
  },
  __name: "index",
  setup(__props) {
    const route = useRoute();
    const streamerInfo = reactive({
      platform: route.query.platform || "",
      room_id: route.query.channelId || "",
      name: route.query.name || ""
    });
    const queryParams = reactive({
      room_id: streamerInfo.room_id,
      platform: streamerInfo.platform,
      page: 1,
      pageSize: 10,
      startTime: null,
      endTime: null
    });
    const recordList = ref([]);
    const pagination = reactive({
      page: 1,
      pageSize: 10,
      total: 0
    });
    const loading = ref(false);
    const hasQueried = ref(false);
    const columnConfig = [
      { value: "title", label: "标题" },
      { value: "live_start_time", label: "开播时间" },
      { value: "record_start_time", label: "视频录制开始" },
      { value: "record_end_time", label: "视频录制结束" },
      { value: "duration", label: "持续时长" },
      { value: "video_duration", label: "视频时长" },
      { value: "danma_num", label: "弹幕数量" },
      { value: "interact_num", label: "弹幕互动人数" },
      { value: "danma_density", label: "弹幕密度" },
      { value: "actions", label: "操作" }
    ];
    const { visibleColumns } = useVisibleColumns({
      columns: columnConfig,
      storageKey: "live-history-visible-columns"
    });
    const allColumns = [
      {
        title: "标题",
        key: "title"
      },
      {
        title: "开播时间",
        key: "live_start_time",
        render: (row) => formatTime(row.live_start_time)
      },
      {
        title: "录制开始时间",
        key: "record_start_time",
        render: (row) => formatTime(row.record_start_time)
      },
      {
        title: "录制结束时间",
        key: "record_end_time",
        render: (row) => row.record_end_time ? formatTime(row.record_end_time) : "未结束"
      },
      {
        title: "持续时长",
        key: "duration",
        render: (row) => formatDuration(row.record_start_time, row.record_end_time)
      },
      {
        title: "视频时长",
        key: "video_duration",
        render: (row) => _formatDuration(row.video_duration)
      },
      {
        title: "弹幕数量",
        key: "danma_num"
      },
      {
        title: "弹幕互动人数",
        key: "interact_num"
      },
      {
        title: "弹幕密度",
        key: "danma_density",
        render: (row) => row.danma_density !== null && row.danma_density !== void 0 ? `${row.danma_density}/秒` : ""
      },
      {
        title: "操作",
        key: "actions",
        render: (row) => {
          const subNodes = [];
          subNodes.push(
            h(
              NIcon,
              {
                size: "20",
                style: {
                  cursor: "pointer"
                },
                title: "视频预览",
                onClick: () => previewVideo(row.id)
              },
              { default: () => h(PlayCircle24Regular) }
            )
          );
          if (!window.isWeb) {
            subNodes.push(
              h(
                NIcon,
                {
                  size: "20",
                  style: {
                    cursor: "pointer"
                  },
                  title: "打开文件",
                  onClick: () => openFile(row.id)
                },
                { default: () => h(FileOpenOutlined) }
              )
            );
            subNodes.push(
              h(
                NIcon,
                {
                  size: "20",
                  style: {
                    cursor: "pointer"
                  },
                  title: "打开文件夹",
                  onClick: () => openFolder(row.id)
                },
                { default: () => h(FolderOpenOutline) }
              )
            );
          }
          if (window.isWeb) {
            subNodes.push(
              h(
                NIcon,
                {
                  size: "20",
                  style: {
                    cursor: "pointer"
                  },
                  title: "下载",
                  onClick: () => downloadFile2(row.id)
                },
                { default: () => h(DownloadOutline) }
              )
            );
          }
          return h(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }
            },
            [
              ...subNodes,
              h(
                NIcon,
                {
                  size: "20",
                  style: {
                    cursor: "pointer"
                  },
                  title: "删除记录",
                  onClick: () => removeRecord2(row.id)
                },
                { default: () => h(Delete20Regular) }
              )
            ]
          );
        }
      }
    ];
    const visibleTableColumns = computed(() => {
      return allColumns.filter((column) => visibleColumns.value.includes(column.key));
    });
    onMounted(() => {
      if (streamerInfo.room_id && streamerInfo.platform) {
        handleQuery();
      }
    });
    const handleQuery = async () => {
      queryParams.room_id = streamerInfo.room_id;
      queryParams.platform = streamerInfo.platform;
      if (!queryParams.room_id || !queryParams.platform) {
        console.error("缺少必要的房间号或平台参数");
        return;
      }
      const apiParams = { ...queryParams };
      loading.value = true;
      hasQueried.value = true;
      try {
        const result = await recordHistoryApi.queryRecords(apiParams);
        recordList.value = result.data || [];
        pagination.total = result.pagination.total;
        pagination.page = result.pagination.page;
        pagination.pageSize = result.pagination.pageSize;
        if (result.data && result.data.length > 0 && result.data[0].streamer_name) {
          streamerInfo.name = result.data[0].streamer_name;
        }
      } catch (error) {
        console.error("查询直播记录失败", error);
      } finally {
        loading.value = false;
      }
    };
    const handlePageChange = (page) => {
      queryParams.page = page;
      handleQuery();
    };
    const handlePageSizeChange = (pageSize) => {
      queryParams.pageSize = pageSize;
      handleQuery();
    };
    const formatTime = (timestamp) => {
      if (!timestamp) return "--";
      const date = new Date(timestamp);
      return date.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).replace(/\//g, "-");
    };
    const formatDuration = (startTime, endTime) => {
      if (!startTime || !endTime) return "--";
      const duration = (endTime - startTime) / 1e3;
      return _formatDuration(duration);
    };
    const _formatDuration = (duration) => {
      if (!duration) return "--";
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor(duration % 3600 / 60);
      const seconds = Math.floor(duration % 60);
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };
    const openFile = async (id) => {
      try {
        const { videoFilePath } = await recordHistoryApi.getFileInfo(id);
        if (!videoFilePath) return;
        window.api.openPath(videoFilePath);
      } catch (error) {
        notice.error({
          title: error.message || error
        });
      }
    };
    const downloadFile2 = async (id) => {
      try {
        const fileUrl = await recordHistoryApi.downloadFile(id);
        const a = document.createElement("a");
        a.href = fileUrl;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (error) {
        notice.error({
          title: error.message || error
        });
      }
    };
    const openFolder = async (id) => {
      try {
        const { videoFilePath } = await recordHistoryApi.getFileInfo(id);
        if (!videoFilePath) return;
        window.api.common.showItemInFolder(videoFilePath);
      } catch (error) {
        notice.error({
          title: error.message || error
        });
      }
    };
    const confirm = useConfirm();
    const notice = useNotice();
    const removeRecord2 = async (id) => {
      const [status] = await confirm.warning({
        content: "确定要删除这条直播记录吗？此操作不可撤销。"
      });
      if (!status) return;
      await recordHistoryApi.removeRecord(id);
      notice.success({
        title: `删除成功`,
        duration: 1e3
      });
      await handleQuery();
    };
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    const previewModalVisible = ref(false);
    const previewFiles = ref({
      video: "",
      danmu: "",
      type: ""
    });
    const previewVideo = async (id) => {
      try {
        const { videoFileId, videoFileExt, danmaFilePath } = await recordHistoryApi.getFileInfo(id);
        if (videoFileExt === "ts") {
          notice.warning({
            title: `暂不支持预览ts格式的视频`,
            duration: 2e3
          });
          return;
        }
        const videoUrl = await common.getVideo(videoFileId);
        previewFiles.value.video = videoUrl;
        previewFiles.value.type = videoFileExt;
        previewFiles.value.danmu = danmaFilePath || "";
        previewModalVisible.value = true;
      } catch (error) {
        notice.error({
          title: error.message || error
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_n_date_picker = __unplugin_components_0;
      const _component_n_button = Button;
      const _component_n_tag = __unplugin_components_2$2;
      const _component_n_space = __unplugin_components_3$1;
      const _component_n_card = __unplugin_components_4;
      const _component_n_data_table = __unplugin_components_5;
      const _component_n_pagination = __unplugin_components_6;
      const _component_n_spin = __unplugin_components_7;
      const _component_n_empty = __unplugin_components_8;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_n_date_picker, {
            value: unref(queryParams).startTime,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(queryParams).startTime = $event),
            type: "date",
            clearable: "",
            actions: ["clear", "confirm"],
            placeholder: "开始时间",
            style: { "width": "150px" }
          }, null, 8, ["value"]),
          createVNode(_component_n_date_picker, {
            value: unref(queryParams).endTime,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(queryParams).endTime = $event),
            type: "date",
            clearable: "",
            actions: ["clear", "confirm"],
            placeholder: "结束时间",
            style: { "width": "150px" }
          }, null, 8, ["value"]),
          createVNode(_sfc_main$1, {
            modelValue: unref(visibleColumns),
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(visibleColumns) ? visibleColumns.value = $event : null),
            columns: columnConfig
          }, null, 8, ["modelValue"]),
          createVNode(_component_n_button, {
            type: "primary",
            onClick: handleQuery
          }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode(" 查询 ")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, { onClick: goBack }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("返回")
            ])),
            _: 1
          })
        ]),
        unref(streamerInfo).room_id ? (openBlock(), createBlock(_component_n_card, {
          key: 0,
          class: "room-info",
          size: "small"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_space, null, {
              default: withCtx(() => [
                createVNode(_component_n_tag, null, {
                  default: withCtx(() => [
                    createTextVNode("平台：" + toDisplayString(unref(streamerInfo).platform), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tag, null, {
                  default: withCtx(() => [
                    createTextVNode("房间号：" + toDisplayString(unref(streamerInfo).room_id), 1)
                  ]),
                  _: 1
                }),
                unref(streamerInfo).name ? (openBlock(), createBlock(_component_n_tag, { key: 0 }, {
                  default: withCtx(() => [
                    createTextVNode("主播：" + toDisplayString(unref(streamerInfo).name), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        unref(recordList).length > 0 || unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createVNode(_component_n_spin, { show: unref(loading) }, {
            default: withCtx(() => [
              createVNode(_component_n_data_table, {
                columns: unref(visibleTableColumns),
                data: unref(recordList),
                pagination: false
              }, null, 8, ["columns", "data"]),
              unref(pagination).total > 0 ? (openBlock(), createBlock(_component_n_pagination, {
                key: 0,
                style: { "margin-top": "20px" },
                page: unref(pagination).page,
                "onUpdate:page": [
                  _cache[3] || (_cache[3] = ($event) => unref(pagination).page = $event),
                  handlePageChange
                ],
                "page-size": unref(pagination).pageSize,
                "item-count": unref(pagination).total,
                "show-size-picker": "",
                "onUpdate:pageSize": handlePageSizeChange,
                "page-sizes": [10, 20, 30, 40]
              }, null, 8, ["page", "page-size", "item-count"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["show"])
        ])) : !unref(loading) && unref(hasQueried) ? (openBlock(), createBlock(_component_n_empty, {
          key: 2,
          description: "没有查询到相关记录"
        })) : createCommentVNode("", true),
        createVNode(_sfc_main$2, {
          visible: unref(previewModalVisible),
          "onUpdate:visible": _cache[4] || (_cache[4] = ($event) => isRef(previewModalVisible) ? previewModalVisible.value = $event : null),
          files: unref(previewFiles),
          hotProgress: {
            visible: false,
            sampling: 60,
            height: 10,
            color: "white",
            fillColor: "white"
          }
        }, null, 8, ["visible", "files"])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f3286e99"]]);
export {
  index as default
};
