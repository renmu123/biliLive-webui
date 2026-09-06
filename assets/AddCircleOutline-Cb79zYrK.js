import { d as defineComponent, x as computed, c4 as murmur2, l as h, M as NBaseIcon, aJ as InfoIcon, aI as WarningIcon, aH as ErrorIcon, aK as SuccessIcon, p as c, m as cB, n as cM, v as useConfig, y as useTheme, c5 as progressLight, aO as createKey, C as useThemeClass, c as createElementBlock, e as createBaseVNode, o as openBlock } from "./index-CB8xvhFr.js";
import { f as formatLength } from "./Icon-D1o4HjX4.js";
const iconMap$1 = {
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
    fillColor: [String, Object],
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
    const gradientIdRef = computed(() => {
      const base = "gradient";
      const {
        fillColor
      } = props;
      if (typeof fillColor === "object") {
        return `${base}-${murmur2(JSON.stringify(fillColor))}`;
      }
      return base;
    });
    function getPathStyles(percent, offsetDegree, strokeColor, type) {
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
        stroke: type === "rail" ? strokeColor : typeof props.fillColor === "object" ? `url(#${gradientIdRef.value})` : strokeColor,
        strokeDasharray: `${Math.min(percent, 100) / 100 * (len - gapDegree)}px ${viewBoxWidth * 8}px`,
        strokeDashoffset: `-${gapDegree / 2}px`,
        transformOrigin: offsetDegree ? "center" : void 0,
        transform: offsetDegree ? `rotate(${offsetDegree}deg)` : void 0
      };
      return {
        pathString,
        pathStyle
      };
    }
    const createGradientNode = () => {
      const isGradient = typeof props.fillColor === "object";
      const from = isGradient ? props.fillColor.stops[0] : "";
      const to = isGradient ? props.fillColor.stops[1] : "";
      return isGradient && h("defs", null, h("linearGradient", {
        id: gradientIdRef.value,
        x1: "0%",
        y1: "100%",
        x2: "100%",
        y2: "0%"
      }, h("stop", {
        offset: "0%",
        "stop-color": from
      }), h("stop", {
        offset: "100%",
        "stop-color": to
      })));
    };
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
      } = getPathStyles(100, 0, railColor, "rail");
      const {
        pathString: fillPathString,
        pathStyle: fillPathStyle
      } = getPathStyles(percentage, offsetDegree, fillColor, "fill");
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
      }, createGradientNode(), h("g", null, h("path", {
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
        default: () => iconMap$1[status]
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
const iconMap = {
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
    fillColor: [String, Object],
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
    const styleFillColorRef = computed(() => {
      var _a, _b;
      return typeof props.fillColor === "object" ? `linear-gradient(to right, ${(_a = props.fillColor) === null || _a === void 0 ? void 0 : _a.stops[0]} , ${(_b = props.fillColor) === null || _b === void 0 ? void 0 : _b.stops[1]})` : props.fillColor;
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
          background: styleFillColorRef.value,
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
        default: () => iconMap[status]
      }))) : null);
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
    const createGradientNode = (p, index) => {
      const item = props.fillColor[index];
      const form = typeof item === "object" ? item.stops[0] : "";
      const to = typeof item === "object" ? item.stops[1] : "";
      return typeof props.fillColor[index] === "object" && h("linearGradient", {
        id: `gradient-${index}`,
        x1: "100%",
        y1: "0%",
        x2: "0%",
        y2: "100%"
      }, h("stop", {
        offset: "0%",
        "stop-color": form
      }), h("stop", {
        offset: "100%",
        "stop-color": to
      }));
    };
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
      }, h("defs", null, percentage.map((p, index) => {
        return createGradientNode(p, index);
      })), percentage.map((p, index) => {
        return h("g", {
          key: index
        }, h("path", {
          class: `${clsPrefix}-progress-graph-circle-rail`,
          d: circlePath(viewBoxWidth / 2 - strokeWidth / 2 * (1 + 2 * index) - circleGap * index, strokeWidth, viewBoxWidth),
          "stroke-width": strokeWidth,
          "stroke-linecap": "round",
          fill: "none",
          style: [{
            strokeDashoffset: 0,
            stroke: railColor[index]
          }, railStyle[index]]
        }), h("path", {
          class: [`${clsPrefix}-progress-graph-circle-fill`, p === 0 && `${clsPrefix}-progress-graph-circle-fill--empty`],
          d: circlePath(viewBoxWidth / 2 - strokeWidth / 2 * (1 + 2 * index) - circleGap * index, strokeWidth, viewBoxWidth),
          "stroke-width": strokeWidth,
          "stroke-linecap": "round",
          fill: "none",
          style: {
            strokeDasharray: strokeDasharrayRef.value[index],
            strokeDashoffset: 0,
            stroke: typeof fillColor[index] === "object" ? `url(#gradient-${index})` : fillColor[index]
          }
        }));
      })))), showIndicator && slots.default ? h("div", null, h("div", {
        class: `${clsPrefix}-progress-text`
      }, slots.default())) : null);
    };
  }
});
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
  color: [String, Array, Object],
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
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const AddCircleOutline = defineComponent({
  name: "AddCircleOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
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
        ),
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M256 176v160"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M336 256H176"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
export {
  AddCircleOutline as A,
  __unplugin_components_1 as _
};
