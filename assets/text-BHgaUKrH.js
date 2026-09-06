import { m as cB, n as cM, d as defineComponent, l as h, v as useConfig, y as useTheme, x as computed, aO as createKey, C as useThemeClass, cV as typographyLight } from "./index-CB8xvhFr.js";
import { u as useCompitable } from "./Icon-D1o4HjX4.js";
const style = cB("text", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [cM("strong", `
 font-weight: var(--n-font-weight-strong);
 `), cM("italic", {
  fontStyle: "italic"
}), cM("underline", {
  textDecoration: "underline"
}), cM("code", `
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]);
const textProps = Object.assign(Object.assign({}, useTheme.props), {
  code: Boolean,
  type: {
    type: String,
    default: "default"
  },
  delete: Boolean,
  strong: Boolean,
  italic: Boolean,
  underline: Boolean,
  depth: [String, Number],
  tag: String,
  // deprecated
  as: {
    type: String,
    validator: () => {
      return true;
    },
    default: void 0
  }
});
const NText = defineComponent({
  name: "Text",
  props: textProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-text", style, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        depth,
        type
      } = props;
      const textColorKey = type === "default" ? depth === void 0 ? "textColor" : `textColor${depth}Depth` : createKey("textColor", type);
      const {
        common: {
          fontWeightStrong,
          fontFamilyMono,
          cubicBezierEaseInOut
        },
        self: {
          codeTextColor,
          codeBorderRadius,
          codeColor,
          codeBorder,
          [textColorKey]: textColor
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-font-weight-strong": fontWeightStrong,
        "--n-font-famliy-mono": fontFamilyMono,
        "--n-code-border-radius": codeBorderRadius,
        "--n-code-text-color": codeTextColor,
        "--n-code-color": codeColor,
        "--n-code-border": codeBorder
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("text", computed(() => `${props.type[0]}${props.depth || ""}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compitableTag: useCompitable(props, ["as", "tag"]),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    const textClass = [`${mergedClsPrefix}-text`, this.themeClass, {
      [`${mergedClsPrefix}-text--code`]: this.code,
      [`${mergedClsPrefix}-text--delete`]: this.delete,
      [`${mergedClsPrefix}-text--strong`]: this.strong,
      [`${mergedClsPrefix}-text--italic`]: this.italic,
      [`${mergedClsPrefix}-text--underline`]: this.underline
    }];
    const children = (_c = (_b = this.$slots).default) === null || _c === void 0 ? void 0 : _c.call(_b);
    return this.code ? h("code", {
      class: textClass,
      style: this.cssVars
    }, this.delete ? h("del", null, children) : children) : this.delete ? h("del", {
      class: textClass,
      style: this.cssVars
    }, children) : h(this.compitableTag || "span", {
      class: textClass,
      style: this.cssVars
    }, children);
  }
});
export {
  NText as N
};
