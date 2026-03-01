import { p as c, m as cB, aI as insideModal, aJ as insidePopover, n as cM, s as cNotM, d as defineComponent, l as h, v as useConfig, y as useTheme, aQ as tableLight, A as useRtl, x as computed, av as createKey, C as useThemeClass, c as createElementBlock, e as createBaseVNode, o as openBlock } from "./index-gjuLIDoI.js";
const style = c([cB("table", `
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `, [c("th", `
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `, [c("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), c("td", `
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `, [c("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), cM("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `, [c("tr", [c("&:last-child", [c("td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]), cM("single-line", [c("th", `
 border-right: 0px solid var(--n-merged-border-color);
 `), c("td", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), cM("single-column", [c("tr", [c("&:not(:last-child)", [c("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]), cM("striped", [c("tr:nth-of-type(even)", [c("td", "background-color: var(--n-td-color-striped)")])]), cNotM("bottom-bordered", [c("tr", [c("&:last-child", [c("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]), insideModal(cB("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [c("th", `
 background-color: var(--n-th-color-modal);
 `), c("td", `
 background-color: var(--n-td-color-modal);
 `)])), insidePopover(cB("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [c("th", `
 background-color: var(--n-th-color-popover);
 `), c("td", `
 background-color: var(--n-td-color-popover);
 `)]))]);
const tableProps = Object.assign(Object.assign({}, useTheme.props), {
  bordered: {
    type: Boolean,
    default: true
  },
  bottomBordered: {
    type: Boolean,
    default: true
  },
  singleLine: {
    type: Boolean,
    default: true
  },
  striped: Boolean,
  singleColumn: Boolean,
  size: {
    type: String,
    default: "medium"
  }
});
const __unplugin_components_2 = defineComponent({
  name: "Table",
  props: tableProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Table", "-table", style, tableLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Table", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        size
      } = props;
      const {
        self: {
          borderColor,
          tdColor,
          tdColorModal,
          tdColorPopover,
          thColor,
          thColorModal,
          thColorPopover,
          thTextColor,
          tdTextColor,
          borderRadius,
          thFontWeight,
          lineHeight,
          borderColorModal,
          borderColorPopover,
          tdColorStriped,
          tdColorStripedModal,
          tdColorStripedPopover,
          [createKey("fontSize", size)]: fontSize,
          [createKey("tdPadding", size)]: tdPadding,
          [createKey("thPadding", size)]: thPadding
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-td-color": tdColor,
        "--n-td-color-modal": tdColorModal,
        "--n-td-color-popover": tdColorPopover,
        "--n-td-text-color": tdTextColor,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover,
        "--n-border-radius": borderRadius,
        "--n-font-size": fontSize,
        "--n-th-color": thColor,
        "--n-th-color-modal": thColorModal,
        "--n-th-color-popover": thColorPopover,
        "--n-th-font-weight": thFontWeight,
        "--n-th-text-color": thTextColor,
        "--n-line-height": lineHeight,
        "--n-td-padding": tdPadding,
        "--n-th-padding": thPadding,
        "--n-td-color-striped": tdColorStriped,
        "--n-td-color-striped-modal": tdColorStripedModal,
        "--n-td-color-striped-popover": tdColorStripedPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("table", computed(() => {
      return props.size[0];
    }), cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("table", {
      class: [`${mergedClsPrefix}-table`, this.themeClass, {
        [`${mergedClsPrefix}-table--rtl`]: this.rtlEnabled,
        [`${mergedClsPrefix}-table--bottom-bordered`]: this.bottomBordered,
        [`${mergedClsPrefix}-table--bordered`]: this.bordered,
        [`${mergedClsPrefix}-table--single-line`]: this.singleLine,
        [`${mergedClsPrefix}-table--single-column`]: this.singleColumn,
        [`${mergedClsPrefix}-table--striped`]: this.striped
      }],
      style: this.cssVars
    }, this.$slots);
  }
});
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const AccessTime24Regular = defineComponent({
  name: "AccessTime24Regular",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "g",
          {
            fill: "none"
          },
          [
            createBaseVNode("path", {
              d: "M7.5 8.744C7.847 8.362 8.415 8 9.25 8c1.152 0 1.894.792 2.155 1.661c.253.847.1 1.895-.62 2.618a8.092 8.092 0 0 1-.793.67l-.04.031c-.28.216-.53.412-.75.63c-.255.256-.464.535-.585.89h2.133a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75c0-1.247.524-2.083 1.144-2.701c.296-.296.618-.545.89-.756l.003-.002c.286-.221.508-.393.685-.57c.272-.274.367-.725.246-1.13c-.115-.381-.37-.591-.718-.591c-.353 0-.535.137-.64.253a.843.843 0 0 0-.148.229v.003a.75.75 0 0 1-1.428-.462l.035-.096a2.343 2.343 0 0 1 .43-.683zM13.25 8a.75.75 0 0 1 .75.75v2.75h1.5V8.75a.75.75 0 0 1 1.5 0v6.47a.75.75 0 0 1-1.5 0V13h-2.25a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75zM22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10zM3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0z",
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
export {
  AccessTime24Regular as A,
  __unplugin_components_2 as _
};
