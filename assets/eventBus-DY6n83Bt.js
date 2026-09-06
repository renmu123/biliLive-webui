import { p as c, a5 as commonVariables } from "./index-CB8xvhFr.js";
const {
  cubicBezierEaseInOut,
  cubicBezierEaseOut,
  cubicBezierEaseIn
} = commonVariables;
function fadeInHeightExpandTransition({
  overflow = "hidden",
  duration = ".3s",
  originalTransition = "",
  leavingDelay = "0s",
  foldPadding = false,
  enterToProps = void 0,
  leaveToProps = void 0,
  reverse = false
} = {}) {
  const enterClass = reverse ? "leave" : "enter";
  const leaveClass = reverse ? "enter" : "leave";
  return [c(`&.fade-in-height-expand-transition-${leaveClass}-from,
 &.fade-in-height-expand-transition-${enterClass}-to`, Object.assign(Object.assign({}, enterToProps), {
    opacity: 1
  })), c(`&.fade-in-height-expand-transition-${leaveClass}-to,
 &.fade-in-height-expand-transition-${enterClass}-from`, Object.assign(Object.assign({}, leaveToProps), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: foldPadding ? "0 !important" : void 0,
    paddingBottom: foldPadding ? "0 !important" : void 0
  })), c(`&.fade-in-height-expand-transition-${leaveClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 opacity ${duration} ${cubicBezierEaseOut} ${leavingDelay},
 margin-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 margin-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay}
 ${originalTransition ? `,${originalTransition}` : ""}
 `), c(`&.fade-in-height-expand-transition-${enterClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut},
 opacity ${duration} ${cubicBezierEaseIn},
 margin-top ${duration} ${cubicBezierEaseInOut},
 margin-bottom ${duration} ${cubicBezierEaseInOut},
 padding-top ${duration} ${cubicBezierEaseInOut},
 padding-bottom ${duration} ${cubicBezierEaseInOut}
 ${originalTransition ? `,${originalTransition}` : ""}
 `)];
}
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
const eventBus = mitt();
export {
  eventBus as e,
  fadeInHeightExpandTransition as f
};
