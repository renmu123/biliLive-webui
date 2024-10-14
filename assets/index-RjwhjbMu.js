import { ao as c, a4 as cB, ap as cM, d as defineComponent, e as computed, dv as formatLength, a2 as h, ay as NBaseIcon, dw as SuccessIcon, dx as ErrorIcon, dy as WarningIcon, dz as InfoIcon, a6 as useConfig, a7 as useTheme, dA as progressLight, aw as createKey, ac as useThemeClass, f as openBlock, n as createElementBlock, k as createBaseVNode, bf as createStaticVNode, a as useConfirm, dB as useQueueStore, j as unref, aI as toDisplayString, aJ as normalizeStyle, g as createBlock, h as withCtx, i as createVNode, p as createCommentVNode, dC as TaskType, dD as formatSeconds, N as NIcon, P as _export_sfc, u as useNotification, r as ref, q as isRef, F as Fragment, aG as renderList, B as __unplugin_components_0, cU as __unplugin_components_2, I as Button, l as createTextVNode, E as __unplugin_components_1$1, Y as deepRaw } from "./index--gUAYtmw.js";
import { C as CloseOutline } from "./CloseOutline-2NJFdTs4.js";
const style = c([cB("progress", {
  display: "inline-block"
}, [cB("progress-icon", `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `), cM("line", `
 width: 100%;
 display: block;
 `, [cB("progress-content", `
 display: flex;
 align-items: center;
 `, [cB("progress-graph", {
  flex: 1
})]), cB("progress-custom-content", {
  marginLeft: "14px"
}), cB("progress-icon", `
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `, [cM("as-text", `
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]), cM("circle, dashboard", {
  width: "120px"
}, [cB("progress-custom-content", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `), cB("progress-text", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `), cB("progress-icon", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]), cM("multiple-circle", `
 width: 200px;
 color: inherit;
 `, [cB("progress-text", `
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]), cB("progress-content", {
  position: "relative"
}), cB("progress-graph", {
  position: "relative"
}, [cB("progress-graph-circle", [c("svg", {
  verticalAlign: "bottom"
}), cB("progress-graph-circle-fill", `
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `, [cM("empty", {
  opacity: 0
})]), cB("progress-graph-circle-rail", `
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]), cB("progress-graph-line", [cM("indicator-inside", [cB("progress-graph-line-rail", `
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `, [cB("progress-graph-line-fill", `
 height: inherit;
 border-radius: 10px;
 `), cB("progress-graph-line-indicator", `
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]), cM("indicator-inside-label", `
 height: 16px;
 display: flex;
 align-items: center;
 `, [cB("progress-graph-line-rail", `
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `), cB("progress-graph-line-indicator", `
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]), cB("progress-graph-line-rail", `
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `, [cB("progress-graph-line-fill", `
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `, [cM("processing", [c("&::after", `
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]), c("@keyframes progress-processing-animation", `
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]);
const iconMap$1 = {
  success: h(SuccessIcon, null),
  error: h(ErrorIcon, null),
  warning: h(WarningIcon, null),
  info: h(InfoIcon, null)
};
const Line = defineComponent({
  name: "ProgressLine",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      default: 0
    },
    railColor: String,
    railStyle: [String, Object],
    fillColor: String,
    status: {
      type: String,
      required: true
    },
    indicatorPlacement: {
      type: String,
      required: true
    },
    indicatorTextColor: String,
    unit: {
      type: String,
      default: "%"
    },
    processing: {
      type: Boolean,
      required: true
    },
    showIndicator: {
      type: Boolean,
      required: true
    },
    height: [String, Number],
    railBorderRadius: [String, Number],
    fillBorderRadius: [String, Number]
  },
  setup(props, {
    slots
  }) {
    const styleHeightRef = computed(() => {
      return formatLength(props.height);
    });
    const styleRailBorderRadiusRef = computed(() => {
      if (props.railBorderRadius !== void 0) {
        return formatLength(props.railBorderRadius);
      }
      if (props.height !== void 0) {
        return formatLength(props.height, {
          c: 0.5
        });
      }
      return "";
    });
    const styleFillBorderRadiusRef = computed(() => {
      if (props.fillBorderRadius !== void 0) {
        return formatLength(props.fillBorderRadius);
      }
      if (props.railBorderRadius !== void 0) {
        return formatLength(props.railBorderRadius);
      }
      if (props.height !== void 0) {
        return formatLength(props.height, {
          c: 0.5
        });
      }
      return "";
    });
    return () => {
      const {
        indicatorPlacement,
        railColor,
        railStyle,
        percentage,
        unit,
        indicatorTextColor,
        status,
        showIndicator,
        fillColor,
        processing,
        clsPrefix
      } = props;
      return h("div", {
        class: `${clsPrefix}-progress-content`,
        role: "none"
      }, h("div", {
        class: `${clsPrefix}-progress-graph`,
        "aria-hidden": true
      }, h("div", {
        class: [`${clsPrefix}-progress-graph-line`, {
          [`${clsPrefix}-progress-graph-line--indicator-${indicatorPlacement}`]: true
        }]
      }, h("div", {
        class: `${clsPrefix}-progress-graph-line-rail`,
        style: [{
          backgroundColor: railColor,
          height: styleHeightRef.value,
          borderRadius: styleRailBorderRadiusRef.value
        }, railStyle]
      }, h("div", {
        class: [`${clsPrefix}-progress-graph-line-fill`, processing && `${clsPrefix}-progress-graph-line-fill--processing`],
        style: {
          maxWidth: `${props.percentage}%`,
          backgroundColor: fillColor,
          height: styleHeightRef.value,
          lineHeight: styleHeightRef.value,
          borderRadius: styleFillBorderRadiusRef.value
        }
      }, indicatorPlacement === "inside" ? h("div", {
        class: `${clsPrefix}-progress-graph-line-indicator`,
        style: {
          color: indicatorTextColor
        }
      }, slots.default ? slots.default() : `${percentage}${unit}`) : null)))), showIndicator && indicatorPlacement === "outside" ? h("div", null, slots.default ? h("div", {
        class: `${clsPrefix}-progress-custom-content`,
        style: {
          color: indicatorTextColor
        },
        role: "none"
      }, slots.default()) : status === "default" ? h("div", {
        role: "none",
        class: `${clsPrefix}-progress-icon ${clsPrefix}-progress-icon--as-text`,
        style: {
          color: indicatorTextColor
        }
      }, percentage, unit) : h("div", {
        class: `${clsPrefix}-progress-icon`,
        "aria-hidden": true
      }, h(NBaseIcon, {
        clsPrefix
      }, {
        default: () => iconMap$1[status]
      }))) : null);
    };
  }
});
const iconMap = {
  success: h(SuccessIcon, null),
  error: h(ErrorIcon, null),
  warning: h(WarningIcon, null),
  info: h(InfoIcon, null)
};
const Circle = defineComponent({
  name: "ProgressCircle",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    strokeWidth: {
      type: Number,
      required: true
    },
    fillColor: String,
    railColor: String,
    railStyle: [String, Object],
    percentage: {
      type: Number,
      default: 0
    },
    offsetDegree: {
      type: Number,
      default: 0
    },
    showIndicator: {
      type: Boolean,
      required: true
    },
    indicatorTextColor: String,
    unit: String,
    viewBoxWidth: {
      type: Number,
      required: true
    },
    gapDegree: {
      type: Number,
      required: true
    },
    gapOffsetDegree: {
      type: Number,
      default: 0
    }
  },
  setup(props, {
    slots
  }) {
    function getPathStyles(percent, offsetDegree, strokeColor) {
      const {
        gapDegree,
        viewBoxWidth,
        strokeWidth
      } = props;
      const radius = 50;
      const beginPositionX = 0;
      const beginPositionY = radius;
      const endPositionX = 0;
      const endPositionY = 2 * radius;
      const centerX = 50 + strokeWidth / 2;
      const pathString = `M ${centerX},${centerX} m ${beginPositionX},${beginPositionY}
      a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
      a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
      const len = Math.PI * 2 * radius;
      const pathStyle = {
        stroke: strokeColor,
        strokeDasharray: `${percent / 100 * (len - gapDegree)}px ${viewBoxWidth * 8}px`,
        strokeDashoffset: `-${gapDegree / 2}px`,
        transformOrigin: offsetDegree ? "center" : void 0,
        transform: offsetDegree ? `rotate(${offsetDegree}deg)` : void 0
      };
      return {
        pathString,
        pathStyle
      };
    }
    return () => {
      const {
        fillColor,
        railColor,
        strokeWidth,
        offsetDegree,
        status,
        percentage,
        showIndicator,
        indicatorTextColor,
        unit,
        gapOffsetDegree,
        clsPrefix
      } = props;
      const {
        pathString: railPathString,
        pathStyle: railPathStyle
      } = getPathStyles(100, 0, railColor);
      const {
        pathString: fillPathString,
        pathStyle: fillPathStyle
      } = getPathStyles(percentage, offsetDegree, fillColor);
      const viewBoxSize = 100 + strokeWidth;
      return h("div", {
        class: `${clsPrefix}-progress-content`,
        role: "none"
      }, h("div", {
        class: `${clsPrefix}-progress-graph`,
        "aria-hidden": true
      }, h("div", {
        class: `${clsPrefix}-progress-graph-circle`,
        style: {
          transform: gapOffsetDegree ? `rotate(${gapOffsetDegree}deg)` : void 0
        }
      }, h("svg", {
        viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`
      }, h("g", null, h("path", {
        class: `${clsPrefix}-progress-graph-circle-rail`,
        d: railPathString,
        "stroke-width": strokeWidth,
        "stroke-linecap": "round",
        fill: "none",
        style: railPathStyle
      })), h("g", null, h("path", {
        class: [`${clsPrefix}-progress-graph-circle-fill`, percentage === 0 && `${clsPrefix}-progress-graph-circle-fill--empty`],
        d: fillPathString,
        "stroke-width": strokeWidth,
        "stroke-linecap": "round",
        fill: "none",
        style: fillPathStyle
      }))))), showIndicator ? h("div", null, slots.default ? h("div", {
        class: `${clsPrefix}-progress-custom-content`,
        role: "none"
      }, slots.default()) : status !== "default" ? h("div", {
        class: `${clsPrefix}-progress-icon`,
        "aria-hidden": true
      }, h(NBaseIcon, {
        clsPrefix
      }, {
        default: () => iconMap[status]
      })) : h("div", {
        class: `${clsPrefix}-progress-text`,
        style: {
          color: indicatorTextColor
        },
        role: "none"
      }, h("span", {
        class: `${clsPrefix}-progress-text__percentage`
      }, percentage), h("span", {
        class: `${clsPrefix}-progress-text__unit`
      }, unit))) : null);
    };
  }
});
function circlePath(r, sw, vw = 100) {
  return `m ${vw / 2} ${vw / 2 - r} a ${r} ${r} 0 1 1 0 ${2 * r} a ${r} ${r} 0 1 1 0 -${2 * r}`;
}
const MultipleCircle = defineComponent({
  name: "ProgressMultipleCircle",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    viewBoxWidth: {
      type: Number,
      required: true
    },
    percentage: {
      type: Array,
      default: [0]
    },
    strokeWidth: {
      type: Number,
      required: true
    },
    circleGap: {
      type: Number,
      required: true
    },
    showIndicator: {
      type: Boolean,
      required: true
    },
    fillColor: {
      type: Array,
      default: () => []
    },
    railColor: {
      type: Array,
      default: () => []
    },
    railStyle: {
      type: Array,
      default: () => []
    }
  },
  setup(props, {
    slots
  }) {
    const strokeDasharrayRef = computed(() => {
      const strokeDasharrays = props.percentage.map((v, i) => `${Math.PI * v / 100 * (props.viewBoxWidth / 2 - props.strokeWidth / 2 * (1 + 2 * i) - props.circleGap * i) * 2}, ${props.viewBoxWidth * 8}`);
      return strokeDasharrays;
    });
    return () => {
      const {
        viewBoxWidth,
        strokeWidth,
        circleGap,
        showIndicator,
        fillColor,
        railColor,
        railStyle,
        percentage,
        clsPrefix
      } = props;
      return h("div", {
        class: `${clsPrefix}-progress-content`,
        role: "none"
      }, h("div", {
        class: `${clsPrefix}-progress-graph`,
        "aria-hidden": true
      }, h("div", {
        class: `${clsPrefix}-progress-graph-circle`
      }, h("svg", {
        viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`
      }, percentage.map((p, index2) => {
        return h("g", {
          key: index2
        }, h("path", {
          class: `${clsPrefix}-progress-graph-circle-rail`,
          d: circlePath(viewBoxWidth / 2 - strokeWidth / 2 * (1 + 2 * index2) - circleGap * index2, strokeWidth, viewBoxWidth),
          "stroke-width": strokeWidth,
          "stroke-linecap": "round",
          fill: "none",
          style: [{
            strokeDashoffset: 0,
            stroke: railColor[index2]
          }, railStyle[index2]]
        }), h("path", {
          class: [`${clsPrefix}-progress-graph-circle-fill`, p === 0 && `${clsPrefix}-progress-graph-circle-fill--empty`],
          d: circlePath(viewBoxWidth / 2 - strokeWidth / 2 * (1 + 2 * index2) - circleGap * index2, strokeWidth, viewBoxWidth),
          "stroke-width": strokeWidth,
          "stroke-linecap": "round",
          fill: "none",
          style: {
            strokeDasharray: strokeDasharrayRef.value[index2],
            strokeDashoffset: 0,
            stroke: fillColor[index2]
          }
        }));
      })))), showIndicator && slots.default ? h("div", null, h("div", {
        class: `${clsPrefix}-progress-text`
      }, slots.default())) : null);
    };
  }
});
const progressProps = Object.assign(Object.assign({}, useTheme.props), {
  processing: Boolean,
  type: {
    type: String,
    default: "line"
  },
  gapDegree: Number,
  gapOffsetDegree: Number,
  status: {
    type: String,
    default: "default"
  },
  railColor: [String, Array],
  railStyle: [String, Array],
  color: [String, Array],
  viewBoxWidth: {
    type: Number,
    default: 100
  },
  strokeWidth: {
    type: Number,
    default: 7
  },
  percentage: [Number, Array],
  unit: {
    type: String,
    default: "%"
  },
  showIndicator: {
    type: Boolean,
    default: true
  },
  indicatorPosition: {
    type: String,
    default: "outside"
  },
  indicatorPlacement: {
    type: String,
    default: "outside"
  },
  indicatorTextColor: String,
  circleGap: {
    type: Number,
    default: 1
  },
  height: Number,
  borderRadius: [String, Number],
  fillBorderRadius: [String, Number],
  offsetDegree: Number
});
const __unplugin_components_1 = defineComponent({
  name: "Progress",
  props: progressProps,
  setup(props) {
    const mergedIndicatorPlacementRef = computed(() => {
      return props.indicatorPlacement || props.indicatorPosition;
    });
    const gapDeg = computed(() => {
      if (props.gapDegree || props.gapDegree === 0) {
        return props.gapDegree;
      }
      if (props.type === "dashboard") {
        return 75;
      }
      return void 0;
    });
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Progress", "-progress", style, progressLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        status
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          fontSize,
          fontSizeCircle,
          railColor,
          railHeight,
          iconSizeCircle,
          iconSizeLine,
          textColorCircle,
          textColorLineInner,
          textColorLineOuter,
          lineBgProcessing,
          fontWeightCircle,
          [createKey("iconColor", status)]: iconColor,
          [createKey("fillColor", status)]: fillColor
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-fill-color": fillColor,
        "--n-font-size": fontSize,
        "--n-font-size-circle": fontSizeCircle,
        "--n-font-weight-circle": fontWeightCircle,
        "--n-icon-color": iconColor,
        "--n-icon-size-circle": iconSizeCircle,
        "--n-icon-size-line": iconSizeLine,
        "--n-line-bg-processing": lineBgProcessing,
        "--n-rail-color": railColor,
        "--n-rail-height": railHeight,
        "--n-text-color-circle": textColorCircle,
        "--n-text-color-line-inner": textColorLineInner,
        "--n-text-color-line-outer": textColorLineOuter
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("progress", computed(() => props.status[0]), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedIndicatorPlacement: mergedIndicatorPlacementRef,
      gapDeg,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      type,
      cssVars,
      indicatorTextColor,
      showIndicator,
      status,
      railColor,
      railStyle,
      color,
      percentage,
      viewBoxWidth,
      strokeWidth,
      mergedIndicatorPlacement,
      unit,
      borderRadius,
      fillBorderRadius,
      height,
      processing,
      circleGap,
      mergedClsPrefix,
      gapDeg,
      gapOffsetDegree,
      themeClass,
      $slots,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [themeClass, `${mergedClsPrefix}-progress`, `${mergedClsPrefix}-progress--${type}`, `${mergedClsPrefix}-progress--${status}`],
      style: cssVars,
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": percentage,
      role: type === "circle" || type === "line" || type === "dashboard" ? "progressbar" : "none"
    }, type === "circle" || type === "dashboard" ? h(Circle, {
      clsPrefix: mergedClsPrefix,
      status,
      showIndicator,
      indicatorTextColor,
      railColor,
      fillColor: color,
      railStyle,
      offsetDegree: this.offsetDegree,
      percentage,
      viewBoxWidth,
      strokeWidth,
      gapDegree: gapDeg === void 0 ? type === "dashboard" ? 75 : 0 : gapDeg,
      gapOffsetDegree,
      unit
    }, $slots) : type === "line" ? h(Line, {
      clsPrefix: mergedClsPrefix,
      status,
      showIndicator,
      indicatorTextColor,
      railColor,
      fillColor: color,
      railStyle,
      percentage,
      processing,
      indicatorPlacement: mergedIndicatorPlacement,
      unit,
      fillBorderRadius,
      railBorderRadius: borderRadius,
      height
    }, $slots) : type === "multiple-circle" ? h(MultipleCircle, {
      clsPrefix: mergedClsPrefix,
      strokeWidth,
      railColor,
      fillColor: color,
      railStyle,
      viewBoxWidth,
      percentage,
      showIndicator,
      circleGap
    }, $slots) : null);
  }
});
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M256 367.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$1 = [_hoisted_2$8, _hoisted_3$7, _hoisted_4$2];
const AlertCircleOutline = defineComponent({
  name: "AlertCircleOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_5$1);
  }
});
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M224 432h-80V80h80z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M368 432h-80V80h80z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$1 = [_hoisted_2$7, _hoisted_3$6];
const PauseSharp = defineComponent({
  name: "PauseSharp",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_4$1);
  }
});
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M96 448l320-192L96 64v384z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$5 = [_hoisted_2$6];
const PlaySharp = defineComponent({
  name: "PlaySharp",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$5);
  }
});
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" fill="currentColor"></path><path d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M184 176l8 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M328 176l-8 224"></path>', 6);
const _hoisted_8$1 = [_hoisted_2$5];
const TrashOutline = defineComponent({
  name: "TrashOutline",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_8$1);
  }
});
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M15 22H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8l6 6v6h-2V9h-5V4H6v16h9v2zm4-.34v-2.24l2.95 2.95l1.41-1.41L20.41 18h2.24v-2H17v5.66h2z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$4 = [_hoisted_2$4];
const FileOpenOutlined = defineComponent({
  name: "FileOpenOutlined",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
  }
});
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$3 = [_hoisted_2$3];
const FolderOpenOutlined = defineComponent({
  name: "FolderOpenOutlined",
  render: function render6(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
  }
});
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4l-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$2 = [_hoisted_2$2];
const LiveTvOutlined = defineComponent({
  name: "LiveTvOutlined",
  render: function render7(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
  }
});
const _hoisted_1$1 = { class: "container" };
const _hoisted_2$1 = { class: "content-container" };
const _hoisted_3$1 = { class: "name-container" };
const _hoisted_4 = ["title"];
const _hoisted_5 = { class: "btns" };
const _hoisted_6 = {
  key: 1,
  class: "detail-info"
};
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { key: 1 };
const _hoisted_9 = { key: 2 };
const _hoisted_10 = { key: 3 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "item",
  props: {
    now: {},
    item: {},
    showProgress: { type: Boolean, default: true },
    showInfo: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const item = computed(() => props.item);
    const confirm = useConfirm();
    const store = useQueueStore();
    const statusMap = {
      pending: {
        text: "等待中",
        color: "#999",
        progressStatus: "default"
      },
      running: {
        text: "运行中",
        color: "#1890ff",
        progressStatus: "default"
      },
      paused: {
        text: "已暂停",
        color: "#faad14",
        progressStatus: "warning"
      },
      completed: {
        text: "已完成",
        color: "#52c41a",
        progressStatus: "success"
      },
      error: {
        text: "错误",
        color: "#f5222d",
        progressStatus: "error"
      },
      canceled: {
        text: "已取消",
        color: "#f5222d",
        progressStatus: "error"
      }
    };
    const handleStart = (taskId, task) => {
      console.log("handleStart", taskId);
      if (task.status === "paused") {
        window.api.task.resume(taskId);
      } else if (task.status === "pending") {
        window.api.task.start(taskId);
      }
      store.getQuenu();
    };
    const handlePause = (taskId) => {
      console.log("handlePause", taskId);
      window.api.task.pause(taskId);
      store.getQuenu();
    };
    const handleKill = async (task) => {
      if (task.type === TaskType.ffmpeg) {
        const [status, savePorcess] = await confirm.warning({
          content: "确定要中止任务吗？",
          showCheckbox: true,
          checkboxText: "保存进度"
        });
        if (!status) return;
        if (savePorcess) {
          window.api.task.interrupt(task.taskId);
        } else {
          window.api.task.kill(task.taskId);
        }
      } else {
        const [status] = await confirm.warning({
          content: "确定要中止任务吗？"
        });
        if (!status) return;
        window.api.task.kill(task.taskId);
      }
      store.getQuenu();
    };
    const handleOpenDir = (item2) => {
      window.api.common.showItemInFolder(item2.output);
    };
    const handleOpenFile = (item2) => {
      window.api.openPath(item2.output);
    };
    const openExternal = (item2) => {
      window.api.openExternal(
        `https://member.bilibili.com/platform/upload/video/frame?type=edit&version=new&aid=${item2?.output}`
      );
    };
    const handleRemoveRecord = (taskId) => {
      window.api.task.remove(taskId);
      store.getQuenu();
    };
    return (_ctx, _cache) => {
      const _component_n_icon = NIcon;
      const _component_n_progress = __unplugin_components_1;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("span", {
              class: "name",
              title: unref(item).output
            }, toDisplayString(unref(item).name), 9, _hoisted_4),
            createBaseVNode("span", {
              class: "status",
              style: normalizeStyle({
                color: statusMap[unref(item).status].color,
                marginRight: "5px"
              })
            }, toDisplayString(statusMap[unref(item).status].text), 5),
            unref(item).error ? (openBlock(), createBlock(_component_n_icon, {
              key: 0,
              size: 18,
              title: unref(item).error
            }, {
              default: withCtx(() => [
                createVNode(unref(AlertCircleOutline), {
                  style: normalizeStyle({
                    color: statusMap[unref(item).status].color
                  })
                }, null, 8, ["style"])
              ]),
              _: 1
            }, 8, ["title"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_5, [
            unref(item).status === "pending" || unref(item).status === "paused" ? (openBlock(), createBlock(_component_n_icon, {
              key: 0,
              size: 20,
              class: "btn pointer",
              title: "开始",
              onClick: _cache[0] || (_cache[0] = ($event) => handleStart(unref(item).taskId, unref(item)))
            }, {
              default: withCtx(() => [
                createVNode(unref(PlaySharp))
              ]),
              _: 1
            })) : createCommentVNode("", true),
            unref(item).action.includes("pause") && unref(item).status === "running" ? (openBlock(), createBlock(_component_n_icon, {
              key: 1,
              size: 20,
              class: "btn pointer",
              title: "暂停",
              onClick: _cache[1] || (_cache[1] = ($event) => handlePause(unref(item).taskId))
            }, {
              default: withCtx(() => [
                createVNode(unref(PauseSharp))
              ]),
              _: 1
            })) : createCommentVNode("", true),
            unref(item).action.includes("kill") && unref(item).status === "running" || unref(item).status === "paused" ? (openBlock(), createBlock(_component_n_icon, {
              key: 2,
              size: 20,
              class: "btn pointer",
              title: "中止",
              onClick: _cache[2] || (_cache[2] = ($event) => handleKill(unref(item)))
            }, {
              default: withCtx(() => [
                createVNode(unref(CloseOutline))
              ]),
              _: 1
            })) : createCommentVNode("", true),
            unref(item).status === "completed" && unref(item).type !== unref(TaskType).biliUpload && unref(item).output ? (openBlock(), createBlock(_component_n_icon, {
              key: 3,
              size: 20,
              class: "btn pointer",
              title: "打开文件夹",
              onClick: _cache[3] || (_cache[3] = ($event) => handleOpenDir(unref(item)))
            }, {
              default: withCtx(() => [
                createVNode(unref(FolderOpenOutlined))
              ]),
              _: 1
            })) : createCommentVNode("", true),
            unref(item).status === "completed" && unref(item).type !== unref(TaskType).biliUpload && unref(item).output ? (openBlock(), createBlock(_component_n_icon, {
              key: 4,
              size: 20,
              class: "btn pointer",
              title: "打开文件",
              onClick: _cache[4] || (_cache[4] = ($event) => handleOpenFile(unref(item)))
            }, {
              default: withCtx(() => [
                createVNode(unref(FileOpenOutlined))
              ]),
              _: 1
            })) : createCommentVNode("", true),
            unref(item).status === "completed" && unref(item).type === unref(TaskType).bili && unref(item).output ? (openBlock(), createBlock(_component_n_icon, {
              key: 5,
              size: 20,
              class: "btn pointer",
              title: "打开稿件",
              onClick: _cache[5] || (_cache[5] = ($event) => openExternal(unref(item)))
            }, {
              default: withCtx(() => [
                createVNode(unref(LiveTvOutlined))
              ]),
              _: 1
            })) : createCommentVNode("", true),
            unref(item).status === "completed" || unref(item).status === "error" || unref(item).status === "pending" || unref(item).status === "canceled" ? (openBlock(), createBlock(_component_n_icon, {
              key: 6,
              size: 20,
              class: "btn pointer",
              title: "删除记录",
              onClick: _cache[6] || (_cache[6] = ($event) => handleRemoveRecord(unref(item).taskId))
            }, {
              default: withCtx(() => [
                createVNode(unref(TrashOutline))
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])
        ]),
        _ctx.showProgress ? (openBlock(), createBlock(_component_n_progress, {
          key: 0,
          class: "progress",
          status: statusMap[unref(item).status].progressStatus,
          type: "line",
          percentage: unref(item).progress,
          "indicator-placement": "outside",
          "show-indicator": false,
          style: { "--n-rail-height": "6px" },
          title: `${unref(item).progress.toFixed(2)}%`
        }, null, 8, ["status", "percentage", "title"])) : createCommentVNode("", true),
        _ctx.showInfo ? (openBlock(), createElementBlock("div", _hoisted_6, [
          unref(item).startTime ? (openBlock(), createElementBlock("span", _hoisted_7, "开始时间：" + toDisplayString(new Date(unref(item).startTime).toLocaleString()), 1)) : createCommentVNode("", true),
          unref(item).status !== "pending" && unref(item).status !== "completed" && unref(item).status !== "error" ? (openBlock(), createElementBlock("span", _hoisted_8, "持续时间：" + toDisplayString(unref(formatSeconds)((_ctx.now - (unref(item).startTime || 0)) / 1e3)), 1)) : createCommentVNode("", true),
          unref(item).status === "completed" ? (openBlock(), createElementBlock("span", _hoisted_9, "持续时间：" + toDisplayString(unref(formatSeconds)((unref(item).endTime - unref(item).startTime) / 1e3)), 1)) : createCommentVNode("", true),
          unref(item).status === "running" ? (openBlock(), createElementBlock("span", _hoisted_10, " 预计还需时间：" + toDisplayString(unref(formatSeconds)(
            Number(
              ((_ctx.now - (unref(item).startTime || 0)) / 1e3 / unref(item).progress * (100 - unref(item).progress)).toFixed(0)
            )
          )), 1)) : createCommentVNode("", true),
          createBaseVNode("span", null, toDisplayString(unref(item).custsomProgressMsg), 1)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const Item = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4b2f210f"]]);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_3 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const notice = useNotification();
    const store = useQueueStore();
    const queue = computed(() => store.queue);
    const groupByPid = (data) => {
      const list = deepRaw(data);
      for (const item of list) {
        if (item.pid) {
          const result = list.find((i) => i.taskId === item.pid);
          if (result) {
            if (result.children) {
              result.children.push(item);
            } else {
              result.children = [item];
            }
          }
        }
      }
      return list.filter((item) => !item.pid);
    };
    const displayQueue = computed(() => {
      const filterData = queue.value.filter((item) => selectedStatus.value.includes(item.status));
      if (filterType.value) {
        return filterData.filter((item) => item.type === filterType.value);
      }
      const data = groupByPid(filterData);
      return data;
    });
    const filterType = ref("");
    const typeOptions = ref([
      {
        value: "",
        label: "全部"
      },
      {
        value: TaskType.ffmpeg,
        label: "FFmpeg处理"
      },
      {
        value: TaskType.bili,
        label: "B站上传"
      },
      {
        value: TaskType.biliUpload,
        label: "B站分P上传"
      },
      {
        value: TaskType.danmu,
        label: "弹幕转换"
      },
      {
        value: TaskType.biliDownload,
        label: "B站视频下载"
      },
      {
        value: TaskType.douyuDownload,
        label: "斗鱼视频下载"
      }
    ]);
    const selectedStatus = ref([
      "pending",
      "running",
      "paused",
      "completed",
      "error",
      "canceled"
    ]);
    const handleRemoveEndTasks = async () => {
      for (const item of queue.value) {
        if (item.status === "completed" || item.status === "canceled") {
          if (item.pid) {
            const pTask = queue.value.find((i) => i.taskId === item.pid);
            if (pTask && !["completed", "canceled"].includes(pTask.status)) {
              continue;
            }
          }
          await window.api.task.remove(item.taskId);
        }
      }
      notice.success({
        title: "移除成功",
        duration: 1e3
      });
      store.getQuenu();
    };
    const now = ref(Date.now());
    setInterval(() => {
      now.value = Date.now();
    }, 1e3);
    return (_ctx, _cache) => {
      const _component_n_select = __unplugin_components_0;
      const _component_n_checkbox = __unplugin_components_1$1;
      const _component_n_checkbox_group = __unplugin_components_2;
      const _component_n_button = Button;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_n_select, {
            value: unref(filterType),
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(filterType) ? filterType.value = $event : null),
            options: unref(typeOptions),
            style: { "width": "140px", "margin-right": "10px" },
            size: "small"
          }, null, 8, ["value", "options"]),
          createVNode(_component_n_checkbox_group, {
            value: unref(selectedStatus),
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null)
          }, {
            default: withCtx(() => [
              createVNode(_component_n_checkbox, { value: "pending" }, {
                default: withCtx(() => [
                  createTextVNode("未开始")
                ]),
                _: 1
              }),
              createVNode(_component_n_checkbox, { value: "running" }, {
                default: withCtx(() => [
                  createTextVNode("运行中")
                ]),
                _: 1
              }),
              createVNode(_component_n_checkbox, { value: "paused" }, {
                default: withCtx(() => [
                  createTextVNode("已暂停")
                ]),
                _: 1
              }),
              createVNode(_component_n_checkbox, { value: "completed" }, {
                default: withCtx(() => [
                  createTextVNode("已完成")
                ]),
                _: 1
              }),
              createVNode(_component_n_checkbox, { value: "error" }, {
                default: withCtx(() => [
                  createTextVNode("错误")
                ]),
                _: 1
              }),
              createVNode(_component_n_checkbox, { value: "canceled" }, {
                default: withCtx(() => [
                  createTextVNode("已取消")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["value"]),
          unref(queue).length !== 0 ? (openBlock(), createBlock(_component_n_button, {
            key: 0,
            size: "small",
            type: "error",
            style: { "margin-left": "auto" },
            onClick: handleRemoveEndTasks
          }, {
            default: withCtx(() => [
              createTextVNode("清除记录")
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        unref(displayQueue).length !== 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(displayQueue), (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.taskId,
            class: "item"
          }, [
            createVNode(Item, {
              item,
              now: unref(now),
              "show-progress": item.children ? false : true,
              "show-info": item.children ? false : true
            }, null, 8, ["item", "now", "show-progress", "show-info"]),
            item.children ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(item.children, (child) => {
              return openBlock(), createElementBlock("div", {
                key: child.taskId,
                class: "sub-item"
              }, [
                createVNode(Item, {
                  item: child,
                  now: unref(now)
                }, null, 8, ["item", "now"])
              ]);
            }), 128)) : createCommentVNode("", true)
          ]);
        }), 128)) : (openBlock(), createElementBlock("h2", _hoisted_3, "暂无任务，快去添加一个试试吧"))
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1fb59a37"]]);
export {
  index as default
};
