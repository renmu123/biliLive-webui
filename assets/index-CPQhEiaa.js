import { $ as renderList, A as createTextVNode, C as computed, Ct as toRefs, D as createElementBlock, E as createCommentVNode, F as h, G as onBeforeUnmount, H as nextTick, I as hasInjectionContext, J as onMounted, Jt as normalizeStyle, Kt as normalizeClass, L as init_runtime_core_esm_bundler, M as defineComponent, N as getCurrentInstance, Nt as init_shared_esm_bundler, O as createSlots, P as guardReactiveProps, Q as provide, R as inject, S as cloneVNode, St as toRef, T as createBlock, Tt as unref, U as onActivated, V as mergeProps, W as onBeforeMount, X as onUpdated, Y as onUnmounted, Z as openBlock, Zt as toDisplayString, _ as Comment, _t as reactive, at as watch, b as Teleport, bt as shallowRef, c as TransitionGroup, ct as withDirectives, d as render$2, dt as getCurrentScope, et as renderSlot, ft as init_reactivity_esm_bundler, gt as onScopeDispose, ht as markRaw, it as useSlots, j as createVNode, l as createApp, m as vShow, mt as isRef, n as init$2, o as useRouter, ot as watchEffect, pt as isReactive, q as onDeactivated, qt as normalizeProps, r as router, s as Transition, st as withCtx, tt as resolveComponent, u as init_runtime_dom_esm_bundler, ut as effectScope, v as Fragment, vt as readonly, w as createBaseVNode, xt as toRaw, yt as ref, z as isVNode } from "./request-CkCeAZAO.js";
//#region ../../node_modules/.pnpm/@css-render+plugin-bem@0.15.14_css-render@0.15.14/node_modules/@css-render/plugin-bem/esm/index.js
function plugin$1(options) {
	let _bPrefix = ".";
	let _ePrefix = "__";
	let _mPrefix = "--";
	let c;
	if (options) {
		let t = options.blockPrefix;
		if (t) _bPrefix = t;
		t = options.elementPrefix;
		if (t) _ePrefix = t;
		t = options.modifierPrefix;
		if (t) _mPrefix = t;
	}
	const _plugin = { install(instance) {
		c = instance.c;
		const ctx = instance.context;
		ctx.bem = {};
		ctx.bem.b = null;
		ctx.bem.els = null;
	} };
	function b(arg) {
		let memorizedB;
		let memorizedE;
		return {
			before(ctx) {
				memorizedB = ctx.bem.b;
				memorizedE = ctx.bem.els;
				ctx.bem.els = null;
			},
			after(ctx) {
				ctx.bem.b = memorizedB;
				ctx.bem.els = memorizedE;
			},
			$({ context, props }) {
				arg = typeof arg === "string" ? arg : arg({
					context,
					props
				});
				context.bem.b = arg;
				return `${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}`;
			}
		};
	}
	function e(arg) {
		let memorizedE;
		return {
			before(ctx) {
				memorizedE = ctx.bem.els;
			},
			after(ctx) {
				ctx.bem.els = memorizedE;
			},
			$({ context, props }) {
				arg = typeof arg === "string" ? arg : arg({
					context,
					props
				});
				context.bem.els = arg.split(",").map((v) => v.trim());
				return context.bem.els.map((el) => `${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}${_ePrefix}${el}`).join(", ");
			}
		};
	}
	function m(arg) {
		return { $({ context, props }) {
			arg = typeof arg === "string" ? arg : arg({
				context,
				props
			});
			const modifiers = arg.split(",").map((v) => v.trim());
			function elementToSelector(el) {
				return modifiers.map((modifier) => `&${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}${el !== void 0 ? `${_ePrefix}${el}` : ""}${_mPrefix}${modifier}`).join(", ");
			}
			const els = context.bem.els;
			if (els !== null) return elementToSelector(els[0]);
			else return elementToSelector();
		} };
	}
	function notM(arg) {
		return { $({ context, props }) {
			arg = typeof arg === "string" ? arg : arg({
				context,
				props
			});
			const els = context.bem.els;
			return `&:not(${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}${els !== null && els.length > 0 ? `${_ePrefix}${els[0]}` : ""}${_mPrefix}${arg})`;
		} };
	}
	const cB = ((...args) => c(b(args[0]), args[1], args[2]));
	const cE = ((...args) => c(e(args[0]), args[1], args[2]));
	const cM = ((...args) => c(m(args[0]), args[1], args[2]));
	const cNotM = ((...args) => c(notM(args[0]), args[1], args[2]));
	Object.assign(_plugin, {
		cB,
		cE,
		cM,
		cNotM
	});
	return _plugin;
}
//#endregion
//#region ../../node_modules/.pnpm/css-render@0.15.14/node_modules/css-render/esm/parse.js
function ampCount(selector) {
	let cnt = 0;
	for (let i = 0; i < selector.length; ++i) if (selector[i] === "&") ++cnt;
	return cnt;
}
/**
* Don't just use ',' to separate css selector. For example:
* x:(a, b) {} will be split into 'x:(a' and 'b)', which is not expected.
* Make sure comma doesn't exist inside parentheses.
*/
var separatorRegex = /\s*,(?![^(]*\))\s*/g;
var extraSpaceRegex = /\s+/g;
/**
* selector must includes '&'
* selector is trimmed
* every part of amp is trimmed
*/
function resolveSelectorWithAmp(amp, selector) {
	const nextAmp = [];
	selector.split(separatorRegex).forEach((partialSelector) => {
		let round = ampCount(partialSelector);
		if (!round) {
			amp.forEach((partialAmp) => {
				nextAmp.push((partialAmp && partialAmp + " ") + partialSelector);
			});
			return;
		} else if (round === 1) {
			amp.forEach((partialAmp) => {
				nextAmp.push(partialSelector.replace("&", partialAmp));
			});
			return;
		}
		let partialNextAmp = [partialSelector];
		while (round--) {
			const nextPartialNextAmp = [];
			partialNextAmp.forEach((selectorItr) => {
				amp.forEach((partialAmp) => {
					nextPartialNextAmp.push(selectorItr.replace("&", partialAmp));
				});
			});
			partialNextAmp = nextPartialNextAmp;
		}
		partialNextAmp.forEach((part) => nextAmp.push(part));
	});
	return nextAmp;
}
/**
* selector mustn't includes '&'
* selector is trimmed
*/
function resolveSelector(amp, selector) {
	const nextAmp = [];
	selector.split(separatorRegex).forEach((partialSelector) => {
		amp.forEach((partialAmp) => {
			nextAmp.push((partialAmp && partialAmp + " ") + partialSelector);
		});
	});
	return nextAmp;
}
function parseSelectorPath(selectorPaths) {
	let amp = [""];
	selectorPaths.forEach((selector) => {
		selector = selector && selector.trim();
		if (!selector)
 /**
		* if it's a empty selector, do nothing
		*/
		return;
		if (selector.includes("&")) amp = resolveSelectorWithAmp(amp, selector);
		else amp = resolveSelector(amp, selector);
	});
	return amp.join(", ").replace(extraSpaceRegex, " ");
}
//#endregion
//#region ../../node_modules/.pnpm/css-render@0.15.14/node_modules/css-render/esm/utils.js
function removeElement(el) {
	/* istanbul ignore if */
	if (!el) return;
	const parentElement = el.parentElement;
	/* istanbul ignore else */
	if (parentElement) parentElement.removeChild(el);
}
function queryElement(id, parent) {
	return (parent !== null && parent !== void 0 ? parent : document.head).querySelector(`style[cssr-id="${id}"]`);
}
function createElement(id) {
	const el = document.createElement("style");
	el.setAttribute("cssr-id", id);
	return el;
}
function isMediaOrSupports(selector) {
	if (!selector) return false;
	return /^\s*@(s|m)/.test(selector);
}
//#endregion
//#region ../../node_modules/.pnpm/css-render@0.15.14/node_modules/css-render/esm/render.js
var kebabRegex = /[A-Z]/g;
function kebabCase(pattern) {
	return pattern.replace(kebabRegex, (match) => "-" + match.toLowerCase());
}
/** TODO: refine it to solve nested object */
function unwrapProperty(prop, indent = "  ") {
	if (typeof prop === "object" && prop !== null) return " {\n" + Object.entries(prop).map((v) => {
		return indent + `  ${kebabCase(v[0])}: ${v[1]};`;
	}).join("\n") + "\n" + indent + "}";
	return `: ${prop};`;
}
/** unwrap properties */
function unwrapProperties(props, instance, params) {
	if (typeof props === "function") return props({
		context: instance.context,
		props: params
	});
	return props;
}
function createStyle(selector, props, instance, params) {
	if (!props) return "";
	const unwrappedProps = unwrapProperties(props, instance, params);
	if (!unwrappedProps) return "";
	if (typeof unwrappedProps === "string") return `${selector} {\n${unwrappedProps}\n}`;
	const propertyNames = Object.keys(unwrappedProps);
	if (propertyNames.length === 0) {
		if (instance.config.keepEmptyBlock) return selector + " {\n}";
		return "";
	}
	const statements = selector ? [selector + " {"] : [];
	propertyNames.forEach((propertyName) => {
		const property = unwrappedProps[propertyName];
		if (propertyName === "raw") {
			statements.push("\n" + property + "\n");
			return;
		}
		propertyName = kebabCase(propertyName);
		if (property !== null && property !== void 0) statements.push(`  ${propertyName}${unwrapProperty(property)}`);
	});
	if (selector) statements.push("}");
	return statements.join("\n");
}
function loopCNodeListWithCallback(children, options, callback) {
	/* istanbul ignore if */
	if (!children) return;
	children.forEach((child) => {
		if (Array.isArray(child)) loopCNodeListWithCallback(child, options, callback);
		else if (typeof child === "function") {
			const grandChildren = child(options);
			if (Array.isArray(grandChildren)) loopCNodeListWithCallback(grandChildren, options, callback);
			else if (grandChildren) callback(grandChildren);
		} else if (child) callback(child);
	});
}
function traverseCNode(node, selectorPaths, styles, instance, params) {
	const $ = node.$;
	let blockSelector = "";
	if (!$ || typeof $ === "string") {
		if (isMediaOrSupports($)) blockSelector = $;
		else selectorPaths.push($);
	} else if (typeof $ === "function") {
		const selector = $({
			context: instance.context,
			props: params
		});
		if (isMediaOrSupports(selector)) blockSelector = selector;
		else selectorPaths.push(selector);
	} else {
		if ($.before) $.before(instance.context);
		if (!$.$ || typeof $.$ === "string") {
			if (isMediaOrSupports($.$)) blockSelector = $.$;
			else selectorPaths.push($.$);
		} else if ($.$) {
			const selector = $.$({
				context: instance.context,
				props: params
			});
			if (isMediaOrSupports(selector)) blockSelector = selector;
			else selectorPaths.push(selector);
		}
	}
	const selector = parseSelectorPath(selectorPaths);
	const style = createStyle(selector, node.props, instance, params);
	if (blockSelector) styles.push(`${blockSelector} {`);
	else if (style.length) styles.push(style);
	if (node.children) loopCNodeListWithCallback(node.children, {
		context: instance.context,
		props: params
	}, (childNode) => {
		if (typeof childNode === "string") {
			const style = createStyle(selector, { raw: childNode }, instance, params);
			styles.push(style);
		} else traverseCNode(childNode, selectorPaths, styles, instance, params);
	});
	selectorPaths.pop();
	if (blockSelector) styles.push("}");
	if ($ && $.after) $.after(instance.context);
}
function render$1(node, instance, props) {
	const styles = [];
	traverseCNode(node, [], styles, instance, props);
	return styles.join("\n\n");
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+hash@0.8.0/node_modules/@emotion/hash/dist/hash.browser.esm.js
function murmur2(str) {
	var h = 0;
	var k, i = 0, len = str.length;
	for (; len >= 4; ++i, len -= 4) {
		k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
		k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
		k ^= k >>> 24;
		h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	}
	switch (len) {
		case 3: h ^= (str.charCodeAt(i + 2) & 255) << 16;
		case 2: h ^= (str.charCodeAt(i + 1) & 255) << 8;
		case 1:
			h ^= str.charCodeAt(i) & 255;
			h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	}
	h ^= h >>> 13;
	h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	return ((h ^ h >>> 15) >>> 0).toString(36);
}
//#endregion
//#region ../../node_modules/.pnpm/css-render@0.15.14/node_modules/css-render/esm/mount.js
if (typeof window !== "undefined") window.__cssrContext = {};
function unmount(instance, node, id, parent) {
	const { els } = node;
	if (id === void 0) {
		els.forEach(removeElement);
		node.els = [];
	} else {
		const target = queryElement(id, parent);
		if (target && els.includes(target)) {
			removeElement(target);
			node.els = els.filter((el) => el !== target);
		}
	}
}
function addElementToList(els, target) {
	els.push(target);
}
function mount(instance, node, id, props, head, force, anchorMetaName, parent, ssrAdapter) {
	let style;
	if (id === void 0) {
		style = node.render(props);
		id = murmur2(style);
	}
	if (ssrAdapter) {
		ssrAdapter.adapter(id, style !== null && style !== void 0 ? style : node.render(props));
		return;
	}
	if (parent === void 0) parent = document.head;
	const queriedTarget = queryElement(id, parent);
	if (queriedTarget !== null && !force) return queriedTarget;
	const target = queriedTarget !== null && queriedTarget !== void 0 ? queriedTarget : createElement(id);
	if (style === void 0) style = node.render(props);
	target.textContent = style;
	if (queriedTarget !== null) return queriedTarget;
	if (anchorMetaName) {
		const anchorMetaEl = parent.querySelector(`meta[name="${anchorMetaName}"]`);
		if (anchorMetaEl) {
			parent.insertBefore(target, anchorMetaEl);
			addElementToList(node.els, target);
			return target;
		}
	}
	if (head) parent.insertBefore(target, parent.querySelector("style, link"));
	else parent.appendChild(target);
	addElementToList(node.els, target);
	return target;
}
//#endregion
//#region ../../node_modules/.pnpm/css-render@0.15.14/node_modules/css-render/esm/c.js
function wrappedRender(props) {
	return render$1(this, this.instance, props);
}
function wrappedMount(options = {}) {
	const { id, ssr, props, head = false, force = false, anchorMetaName, parent } = options;
	return mount(this.instance, this, id, props, head, force, anchorMetaName, parent, ssr);
}
function wrappedUnmount(options = {}) {
	/* istanbul ignore next */
	const { id, parent } = options;
	unmount(this.instance, this, id, parent);
}
var createCNode = function(instance, $, props, children) {
	return {
		instance,
		$,
		props,
		children,
		els: [],
		render: wrappedRender,
		mount: wrappedMount,
		unmount: wrappedUnmount
	};
};
var c$1 = function(instance, $, props, children) {
	if (Array.isArray($)) return createCNode(instance, { $: null }, null, $);
	else if (Array.isArray(props)) return createCNode(instance, $, null, props);
	else if (Array.isArray(children)) return createCNode(instance, $, props, children);
	else return createCNode(instance, $, props, null);
};
//#endregion
//#region ../../node_modules/.pnpm/css-render@0.15.14/node_modules/css-render/esm/CssRender.js
function CssRender(config = {}) {
	const cssr = {
		c: ((...args) => c$1(cssr, ...args)),
		use: (plugin, ...args) => plugin.install(cssr, ...args),
		find: queryElement,
		context: {},
		config
	};
	return cssr;
}
//#endregion
//#region ../../node_modules/.pnpm/css-render@0.15.14/node_modules/css-render/esm/exists.js
function exists(id, ssr) {
	if (id === void 0) return false;
	if (ssr) {
		const { context: { ids } } = ssr;
		return ids.has(id);
	}
	return queryElement(id) !== null;
}
var prefix$1 = `.n-`;
var elementPrefix = "__";
var modifierPrefix = "--";
var cssr = CssRender();
var plugin = plugin$1({
	blockPrefix: prefix$1,
	elementPrefix,
	modifierPrefix
});
cssr.use(plugin);
var { c, find } = cssr;
var { cB, cE, cM, cNotM } = plugin;
function insideModal(style) {
	return c(({ props: { bPrefix } }) => `${bPrefix || prefix$1}modal, ${bPrefix || prefix$1}drawer`, [style]);
}
function insidePopover(style) {
	return c(({ props: { bPrefix } }) => `${bPrefix || prefix$1}popover`, [style]);
}
function asModal(style) {
	return c(({ props: { bPrefix } }) => `&${bPrefix || prefix$1}modal`, style);
}
var cCB = (...args) => {
	return c(">", [cB(...args)]);
};
function createKey(prefix, suffix) {
	return prefix + (suffix === "default" ? "" : suffix.replace(/^[a-z]/, (startChar) => startChar.toUpperCase()));
}
//#endregion
//#region ../../node_modules/.pnpm/seemly@0.3.10/node_modules/seemly/es/dom/get-precise-event-target.js
function getPreciseEventTarget(event) {
	return event.composedPath()[0] || null;
}
//#endregion
//#region ../../node_modules/.pnpm/seemly@0.3.10/node_modules/seemly/es/css/index.js
function depx(value) {
	if (typeof value === "string") {
		if (value.endsWith("px")) return Number(value.slice(0, value.length - 2));
		return Number(value);
	}
	return value;
}
function pxfy(value) {
	if (value === void 0 || value === null) return void 0;
	if (typeof value === "number") return `${value}px`;
	if (value.endsWith("px")) return value;
	return `${value}px`;
}
function getMargin(value, position) {
	const parts = value.trim().split(/\s+/g);
	const margin = { top: parts[0] };
	switch (parts.length) {
		case 1:
			margin.right = parts[0];
			margin.bottom = parts[0];
			margin.left = parts[0];
			break;
		case 2:
			margin.right = parts[1];
			margin.left = parts[1];
			margin.bottom = parts[0];
			break;
		case 3:
			margin.right = parts[1];
			margin.bottom = parts[2];
			margin.left = parts[1];
			break;
		case 4:
			margin.right = parts[1];
			margin.bottom = parts[2];
			margin.left = parts[3];
			break;
		default: throw new Error("[seemly/getMargin]:" + value + " is not a valid value.");
	}
	if (position === void 0) return margin;
	return margin[position];
}
function getGap(value, orient) {
	const [rowGap, colGap] = value.split(" ");
	if (!orient) return {
		row: rowGap,
		col: colGap || rowGap
	};
	return orient === "row" ? rowGap : colGap;
}
//#endregion
//#region ../../node_modules/.pnpm/seemly@0.3.10/node_modules/seemly/es/color/colors.js
var colors_default = {
	aliceblue: "#F0F8FF",
	antiquewhite: "#FAEBD7",
	aqua: "#0FF",
	aquamarine: "#7FFFD4",
	azure: "#F0FFFF",
	beige: "#F5F5DC",
	bisque: "#FFE4C4",
	black: "#000",
	blanchedalmond: "#FFEBCD",
	blue: "#00F",
	blueviolet: "#8A2BE2",
	brown: "#A52A2A",
	burlywood: "#DEB887",
	cadetblue: "#5F9EA0",
	chartreuse: "#7FFF00",
	chocolate: "#D2691E",
	coral: "#FF7F50",
	cornflowerblue: "#6495ED",
	cornsilk: "#FFF8DC",
	crimson: "#DC143C",
	cyan: "#0FF",
	darkblue: "#00008B",
	darkcyan: "#008B8B",
	darkgoldenrod: "#B8860B",
	darkgray: "#A9A9A9",
	darkgrey: "#A9A9A9",
	darkgreen: "#006400",
	darkkhaki: "#BDB76B",
	darkmagenta: "#8B008B",
	darkolivegreen: "#556B2F",
	darkorange: "#FF8C00",
	darkorchid: "#9932CC",
	darkred: "#8B0000",
	darksalmon: "#E9967A",
	darkseagreen: "#8FBC8F",
	darkslateblue: "#483D8B",
	darkslategray: "#2F4F4F",
	darkslategrey: "#2F4F4F",
	darkturquoise: "#00CED1",
	darkviolet: "#9400D3",
	deeppink: "#FF1493",
	deepskyblue: "#00BFFF",
	dimgray: "#696969",
	dimgrey: "#696969",
	dodgerblue: "#1E90FF",
	firebrick: "#B22222",
	floralwhite: "#FFFAF0",
	forestgreen: "#228B22",
	fuchsia: "#F0F",
	gainsboro: "#DCDCDC",
	ghostwhite: "#F8F8FF",
	gold: "#FFD700",
	goldenrod: "#DAA520",
	gray: "#808080",
	grey: "#808080",
	green: "#008000",
	greenyellow: "#ADFF2F",
	honeydew: "#F0FFF0",
	hotpink: "#FF69B4",
	indianred: "#CD5C5C",
	indigo: "#4B0082",
	ivory: "#FFFFF0",
	khaki: "#F0E68C",
	lavender: "#E6E6FA",
	lavenderblush: "#FFF0F5",
	lawngreen: "#7CFC00",
	lemonchiffon: "#FFFACD",
	lightblue: "#ADD8E6",
	lightcoral: "#F08080",
	lightcyan: "#E0FFFF",
	lightgoldenrodyellow: "#FAFAD2",
	lightgray: "#D3D3D3",
	lightgrey: "#D3D3D3",
	lightgreen: "#90EE90",
	lightpink: "#FFB6C1",
	lightsalmon: "#FFA07A",
	lightseagreen: "#20B2AA",
	lightskyblue: "#87CEFA",
	lightslategray: "#778899",
	lightslategrey: "#778899",
	lightsteelblue: "#B0C4DE",
	lightyellow: "#FFFFE0",
	lime: "#0F0",
	limegreen: "#32CD32",
	linen: "#FAF0E6",
	magenta: "#F0F",
	maroon: "#800000",
	mediumaquamarine: "#66CDAA",
	mediumblue: "#0000CD",
	mediumorchid: "#BA55D3",
	mediumpurple: "#9370DB",
	mediumseagreen: "#3CB371",
	mediumslateblue: "#7B68EE",
	mediumspringgreen: "#00FA9A",
	mediumturquoise: "#48D1CC",
	mediumvioletred: "#C71585",
	midnightblue: "#191970",
	mintcream: "#F5FFFA",
	mistyrose: "#FFE4E1",
	moccasin: "#FFE4B5",
	navajowhite: "#FFDEAD",
	navy: "#000080",
	oldlace: "#FDF5E6",
	olive: "#808000",
	olivedrab: "#6B8E23",
	orange: "#FFA500",
	orangered: "#FF4500",
	orchid: "#DA70D6",
	palegoldenrod: "#EEE8AA",
	palegreen: "#98FB98",
	paleturquoise: "#AFEEEE",
	palevioletred: "#DB7093",
	papayawhip: "#FFEFD5",
	peachpuff: "#FFDAB9",
	peru: "#CD853F",
	pink: "#FFC0CB",
	plum: "#DDA0DD",
	powderblue: "#B0E0E6",
	purple: "#800080",
	rebeccapurple: "#663399",
	red: "#F00",
	rosybrown: "#BC8F8F",
	royalblue: "#4169E1",
	saddlebrown: "#8B4513",
	salmon: "#FA8072",
	sandybrown: "#F4A460",
	seagreen: "#2E8B57",
	seashell: "#FFF5EE",
	sienna: "#A0522D",
	silver: "#C0C0C0",
	skyblue: "#87CEEB",
	slateblue: "#6A5ACD",
	slategray: "#708090",
	slategrey: "#708090",
	snow: "#FFFAFA",
	springgreen: "#00FF7F",
	steelblue: "#4682B4",
	tan: "#D2B48C",
	teal: "#008080",
	thistle: "#D8BFD8",
	tomato: "#FF6347",
	turquoise: "#40E0D0",
	violet: "#EE82EE",
	wheat: "#F5DEB3",
	white: "#FFF",
	whitesmoke: "#F5F5F5",
	yellow: "#FF0",
	yellowgreen: "#9ACD32",
	transparent: "#0000"
};
//#endregion
//#region ../../node_modules/.pnpm/seemly@0.3.10/node_modules/seemly/es/color/convert.js
/**
* @param h 360
* @param s 100
* @param l 100
* @returns [h, s, v] 360, 100, 100
*/
function hsl2hsv(h, s, l) {
	s /= 100;
	l /= 100;
	const v = s * Math.min(l, 1 - l) + l;
	return [
		h,
		v ? (2 - 2 * l / v) * 100 : 0,
		v * 100
	];
}
/**
* @param h 360
* @param s 100
* @param v 100
* @returns [h, s, l] 360, 100, 100
*/
function hsv2hsl(h, s, v) {
	s /= 100;
	v /= 100;
	const l = v - v * s / 2;
	const m = Math.min(l, 1 - l);
	return [
		h,
		m ? (v - l) / m * 100 : 0,
		l * 100
	];
}
/**
* @param h 360
* @param s 100
* @param v 100
* @returns [r, g, b] 255, 255, 255
*/
function hsv2rgb(h, s, v) {
	s /= 100;
	v /= 100;
	let f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
	return [
		f(5) * 255,
		f(3) * 255,
		f(1) * 255
	];
}
/**
* @param r 255
* @param g 255
* @param b 255
* @returns [360, 100, 100]
*/
function rgb2hsv(r, g, b) {
	r /= 255;
	g /= 255;
	b /= 255;
	let v = Math.max(r, g, b), c = v - Math.min(r, g, b);
	let h = c && (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);
	return [
		60 * (h < 0 ? h + 6 : h),
		v && c / v * 100,
		v * 100
	];
}
/**
* @param r 255
* @param g 255
* @param b 255
* @returns [360, 100, 100]
*/
function rgb2hsl(r, g, b) {
	r /= 255;
	g /= 255;
	b /= 255;
	let v = Math.max(r, g, b), c = v - Math.min(r, g, b), f = 1 - Math.abs(v + v - c - 1);
	let h = c && (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);
	return [
		60 * (h < 0 ? h + 6 : h),
		f ? c / f * 100 : 0,
		(v + v - c) * 50
	];
}
/**
* @param h 360
* @param s 100
* @param l 100
* @returns [255, 255, 255]
*/
function hsl2rgb(h, s, l) {
	s /= 100;
	l /= 100;
	let a = s * Math.min(l, 1 - l);
	let f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	return [
		f(0) * 255,
		f(8) * 255,
		f(4) * 255
	];
}
//#endregion
//#region ../../node_modules/.pnpm/seemly@0.3.10/node_modules/seemly/es/color/index.js
var prefix = "^\\s*";
var suffix = "\\s*$";
var percent = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*";
var float = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*";
var hex = "([0-9A-Fa-f])";
var dhex = "([0-9A-Fa-f]{2})";
var hslRegex = new RegExp(`${prefix}hsl\\s*\\(${float},${percent},${percent}\\)${suffix}`);
var hsvRegex = new RegExp(`${prefix}hsv\\s*\\(${float},${percent},${percent}\\)${suffix}`);
var hslaRegex = new RegExp(`${prefix}hsla\\s*\\(${float},${percent},${percent},${float}\\)${suffix}`);
var hsvaRegex = new RegExp(`${prefix}hsva\\s*\\(${float},${percent},${percent},${float}\\)${suffix}`);
var rgbRegex = new RegExp(`${prefix}rgb\\s*\\(${float},${float},${float}\\)${suffix}`);
var rgbaRegex = new RegExp(`${prefix}rgba\\s*\\(${float},${float},${float},${float}\\)${suffix}`);
var sHexRegex = new RegExp(`${prefix}#${hex}${hex}${hex}${suffix}`);
var hexRegex = new RegExp(`${prefix}#${dhex}${dhex}${dhex}${suffix}`);
var sHexaRegex = new RegExp(`${prefix}#${hex}${hex}${hex}${hex}${suffix}`);
var hexaRegex = new RegExp(`${prefix}#${dhex}${dhex}${dhex}${dhex}${suffix}`);
function parseHex(value) {
	return parseInt(value, 16);
}
/**
* Convert color string to hsla array
* @param color format like hsl(180, 100%, 100%), hsla(180, 100%, 100%, 1)
* @returns
*/
function hsla(color) {
	try {
		let i;
		if (i = hslaRegex.exec(color)) return [
			roundDeg(i[1]),
			roundPercent(i[5]),
			roundPercent(i[9]),
			roundAlpha(i[13])
		];
		else if (i = hslRegex.exec(color)) return [
			roundDeg(i[1]),
			roundPercent(i[5]),
			roundPercent(i[9]),
			1
		];
		throw new Error(`[seemly/hsla]: Invalid color value ${color}.`);
	} catch (e) {
		throw e;
	}
}
/**
* Convert color string to hsva array
* @param color format like hsv(180, 100%, 100%), hsva(180, 100%, 100%, 1)
* @returns
*/
function hsva(color) {
	try {
		let i;
		if (i = hsvaRegex.exec(color)) return [
			roundDeg(i[1]),
			roundPercent(i[5]),
			roundPercent(i[9]),
			roundAlpha(i[13])
		];
		else if (i = hsvRegex.exec(color)) return [
			roundDeg(i[1]),
			roundPercent(i[5]),
			roundPercent(i[9]),
			1
		];
		throw new Error(`[seemly/hsva]: Invalid color value ${color}.`);
	} catch (e) {
		throw e;
	}
}
/**
* Convert color string to rgba array.
* @param color format like #000[0], #000000[00], rgb(0, 0, 0),
* rgba(0, 0, 0, 0), hsl(a) color, hsv(a) color and color keywords and
* transparent
* @returns
*/
function rgba(color) {
	try {
		let i;
		if (i = hexRegex.exec(color)) return [
			parseHex(i[1]),
			parseHex(i[2]),
			parseHex(i[3]),
			1
		];
		else if (i = rgbRegex.exec(color)) return [
			roundChannel(i[1]),
			roundChannel(i[5]),
			roundChannel(i[9]),
			1
		];
		else if (i = rgbaRegex.exec(color)) return [
			roundChannel(i[1]),
			roundChannel(i[5]),
			roundChannel(i[9]),
			roundAlpha(i[13])
		];
		else if (i = sHexRegex.exec(color)) return [
			parseHex(i[1] + i[1]),
			parseHex(i[2] + i[2]),
			parseHex(i[3] + i[3]),
			1
		];
		else if (i = hexaRegex.exec(color)) return [
			parseHex(i[1]),
			parseHex(i[2]),
			parseHex(i[3]),
			roundAlpha(parseHex(i[4]) / 255)
		];
		else if (i = sHexaRegex.exec(color)) return [
			parseHex(i[1] + i[1]),
			parseHex(i[2] + i[2]),
			parseHex(i[3] + i[3]),
			roundAlpha(parseHex(i[4] + i[4]) / 255)
		];
		else if (color in colors_default) return rgba(colors_default[color]);
		else if (hslRegex.test(color) || hslaRegex.test(color)) {
			const [h, s, l, a] = hsla(color);
			return [...hsl2rgb(h, s, l), a];
		} else if (hsvRegex.test(color) || hsvaRegex.test(color)) {
			const [h, s, v, a] = hsva(color);
			return [...hsv2rgb(h, s, v), a];
		}
		throw new Error(`[seemly/rgba]: Invalid color value ${color}.`);
	} catch (e) {
		throw e;
	}
}
function normalizeAlpha(alphaValue) {
	return alphaValue > 1 ? 1 : alphaValue < 0 ? 0 : alphaValue;
}
function stringifyRgb(r, g, b) {
	return `rgb(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)})`;
}
function stringifyRgba(r, g, b, a) {
	return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, ${normalizeAlpha(a)})`;
}
function compositeChannel(v1, a1, v2, a2, a) {
	return roundChannel((v1 * a1 * (1 - a2) + v2 * a2) / a);
}
function composite(background, overlay) {
	if (!Array.isArray(background)) background = rgba(background);
	if (!Array.isArray(overlay)) overlay = rgba(overlay);
	const a1 = background[3];
	const a2 = overlay[3];
	const alpha = roundAlpha(a1 + a2 - a1 * a2);
	return stringifyRgba(compositeChannel(background[0], a1, overlay[0], a2, alpha), compositeChannel(background[1], a1, overlay[1], a2, alpha), compositeChannel(background[2], a1, overlay[2], a2, alpha), alpha);
}
function changeColor(base, options) {
	const [r, g, b, a = 1] = Array.isArray(base) ? base : rgba(base);
	if (typeof options.alpha === "number") return stringifyRgba(r, g, b, options.alpha);
	return stringifyRgba(r, g, b, a);
}
function scaleColor(base, options) {
	const [r, g, b, a = 1] = Array.isArray(base) ? base : rgba(base);
	const { lightness = 1, alpha = 1 } = options;
	return toRgbaString([
		r * lightness,
		g * lightness,
		b * lightness,
		a * alpha
	]);
}
function roundAlpha(value) {
	const v = Math.round(Number(value) * 100) / 100;
	if (v > 1) return 1;
	if (v < 0) return 0;
	return v;
}
function roundDeg(value) {
	const v = Math.round(Number(value));
	if (v >= 360) return 0;
	if (v < 0) return 0;
	return v;
}
function roundChannel(value) {
	const v = Math.round(Number(value));
	if (v > 255) return 255;
	if (v < 0) return 0;
	return v;
}
function roundPercent(value) {
	const v = Math.round(Number(value));
	if (v > 100) return 100;
	if (v < 0) return 0;
	return v;
}
function toRgbString(base) {
	const [r, g, b] = Array.isArray(base) ? base : rgba(base);
	return stringifyRgb(r, g, b);
}
function toRgbaString(base) {
	const [r, g, b] = base;
	if (3 in base) return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, ${roundAlpha(base[3])})`;
	return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, 1)`;
}
function toHsvString(base) {
	return `hsv(${roundDeg(base[0])}, ${roundPercent(base[1])}%, ${roundPercent(base[2])}%)`;
}
function toHsvaString(base) {
	const [h, s, v] = base;
	if (3 in base) return `hsva(${roundDeg(h)}, ${roundPercent(s)}%, ${roundPercent(v)}%, ${roundAlpha(base[3])})`;
	return `hsva(${roundDeg(h)}, ${roundPercent(s)}%, ${roundPercent(v)}%, 1)`;
}
function toHslString(base) {
	return `hsl(${roundDeg(base[0])}, ${roundPercent(base[1])}%, ${roundPercent(base[2])}%)`;
}
function toHslaString(base) {
	const [h, s, l] = base;
	if (3 in base) return `hsla(${roundDeg(h)}, ${roundPercent(s)}%, ${roundPercent(l)}%, ${roundAlpha(base[3])})`;
	return `hsla(${roundDeg(h)}, ${roundPercent(s)}%, ${roundPercent(l)}%, 1)`;
}
/**
*
* @param base [255, 255, 255, 255], [255, 255, 255], any hex string
* @returns
*/
function toHexaString(base) {
	if (typeof base === "string") {
		let i;
		if (i = hexRegex.exec(base)) return `${i[0]}FF`;
		else if (i = hexaRegex.exec(base)) return i[0];
		else if (i = sHexRegex.exec(base)) return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}FF`;
		else if (i = sHexaRegex.exec(base)) return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}${i[4]}${i[4]}`;
		throw new Error(`[seemly/toHexString]: Invalid hex value ${base}.`);
	}
	return `#${base.slice(0, 3).map((unit) => roundChannel(unit).toString(16).toUpperCase().padStart(2, "0")).join("")}` + (base.length === 3 ? "FF" : roundChannel(base[3] * 255).toString(16).padStart(2, "0").toUpperCase());
}
/**
*
* @param base [255, 255, 255, 255], [255, 255, 255], any hex string
* @returns
*/
function toHexString(base) {
	if (typeof base === "string") {
		let i;
		if (i = hexRegex.exec(base)) return i[0];
		else if (i = hexaRegex.exec(base)) return i[0].slice(0, 7);
		else if (i = sHexRegex.exec(base) || sHexaRegex.exec(base)) return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`;
		throw new Error(`[seemly/toHexString]: Invalid hex value ${base}.`);
	}
	return `#${base.slice(0, 3).map((unit) => roundChannel(unit).toString(16).toUpperCase().padStart(2, "0")).join("")}`;
}
//#endregion
//#region ../../node_modules/.pnpm/seemly@0.3.10/node_modules/seemly/es/misc/index.js
function createId(length = 8) {
	return Math.random().toString(16).slice(2, 2 + length);
}
function repeat(count, v) {
	const ret = [];
	for (let i = 0; i < count; ++i) ret.push(v);
	return ret;
}
//#endregion
//#region ../../node_modules/.pnpm/evtd@0.2.4/node_modules/evtd/es/utils.js
function getEventTarget(e) {
	return e.composedPath()[0];
}
//#endregion
//#region ../../node_modules/.pnpm/evtd@0.2.4/node_modules/evtd/es/traps.js
var traps = {
	mousemoveoutside: /* @__PURE__ */ new WeakMap(),
	clickoutside: /* @__PURE__ */ new WeakMap()
};
function createTrapHandler(name, el, originalHandler) {
	if (name === "mousemoveoutside") {
		const moveHandler = (e) => {
			if (el.contains(getEventTarget(e))) return;
			originalHandler(e);
		};
		return {
			mousemove: moveHandler,
			touchstart: moveHandler
		};
	} else if (name === "clickoutside") {
		let mouseDownOutside = false;
		const downHandler = (e) => {
			mouseDownOutside = !el.contains(getEventTarget(e));
		};
		const upHanlder = (e) => {
			if (!mouseDownOutside) return;
			if (el.contains(getEventTarget(e))) return;
			originalHandler(e);
		};
		return {
			mousedown: downHandler,
			mouseup: upHanlder,
			touchstart: downHandler,
			touchend: upHanlder
		};
	}
	console.error(`[evtd/create-trap-handler]: name \`${name}\` is invalid. This could be a bug of evtd.`);
	return {};
}
function ensureTrapHandlers(name, el, handler) {
	const handlers = traps[name];
	let elHandlers = handlers.get(el);
	if (elHandlers === void 0) handlers.set(el, elHandlers = /* @__PURE__ */ new WeakMap());
	let trapHandler = elHandlers.get(handler);
	if (trapHandler === void 0) elHandlers.set(handler, trapHandler = createTrapHandler(name, el, handler));
	return trapHandler;
}
function trapOn(name, el, handler, options) {
	if (name === "mousemoveoutside" || name === "clickoutside") {
		const trapHandlers = ensureTrapHandlers(name, el, handler);
		Object.keys(trapHandlers).forEach((key) => {
			on(key, document, trapHandlers[key], options);
		});
		return true;
	}
	return false;
}
function trapOff(name, el, handler, options) {
	if (name === "mousemoveoutside" || name === "clickoutside") {
		const trapHandlers = ensureTrapHandlers(name, el, handler);
		Object.keys(trapHandlers).forEach((key) => {
			off(key, document, trapHandlers[key], options);
		});
		return true;
	}
	return false;
}
//#endregion
//#region ../../node_modules/.pnpm/evtd@0.2.4/node_modules/evtd/es/delegate.js
function createDelegate() {
	if (typeof window === "undefined") return {
		on: () => {},
		off: () => {}
	};
	const propagationStopped = /* @__PURE__ */ new WeakMap();
	const immediatePropagationStopped = /* @__PURE__ */ new WeakMap();
	function trackPropagation() {
		propagationStopped.set(this, true);
	}
	function trackImmediate() {
		propagationStopped.set(this, true);
		immediatePropagationStopped.set(this, true);
	}
	function spy(event, propName, fn) {
		const source = event[propName];
		event[propName] = function() {
			fn.apply(event, arguments);
			return source.apply(event, arguments);
		};
		return event;
	}
	function unspy(event, propName) {
		event[propName] = Event.prototype[propName];
	}
	const currentTargets = /* @__PURE__ */ new WeakMap();
	const currentTargetDescriptor = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
	function getCurrentTarget() {
		var _a;
		return (_a = currentTargets.get(this)) !== null && _a !== void 0 ? _a : null;
	}
	function defineCurrentTarget(event, getter) {
		if (currentTargetDescriptor === void 0) return;
		Object.defineProperty(event, "currentTarget", {
			configurable: true,
			enumerable: true,
			get: getter !== null && getter !== void 0 ? getter : currentTargetDescriptor.get
		});
	}
	const phaseToTypeToElToHandlers = {
		bubble: {},
		capture: {}
	};
	const typeToWindowEventHandlers = {};
	function createUnifiedHandler() {
		const delegeteHandler = function(e) {
			const { type, eventPhase, bubbles } = e;
			const target = getEventTarget(e);
			if (eventPhase === 2) return;
			const phase = eventPhase === 1 ? "capture" : "bubble";
			let cursor = target;
			const path = [];
			while (true) {
				if (cursor === null) cursor = window;
				path.push(cursor);
				if (cursor === window) break;
				cursor = cursor.parentNode || null;
			}
			const captureElToHandlers = phaseToTypeToElToHandlers.capture[type];
			const bubbleElToHandlers = phaseToTypeToElToHandlers.bubble[type];
			spy(e, "stopPropagation", trackPropagation);
			spy(e, "stopImmediatePropagation", trackImmediate);
			defineCurrentTarget(e, getCurrentTarget);
			if (phase === "capture") {
				if (captureElToHandlers === void 0) return;
				for (let i = path.length - 1; i >= 0; --i) {
					if (propagationStopped.has(e)) break;
					const target = path[i];
					const handlers = captureElToHandlers.get(target);
					if (handlers !== void 0) {
						currentTargets.set(e, target);
						for (const handler of handlers) {
							if (immediatePropagationStopped.has(e)) break;
							handler(e);
						}
					}
					if (i === 0 && !bubbles && bubbleElToHandlers !== void 0) {
						const bubbleHandlers = bubbleElToHandlers.get(target);
						if (bubbleHandlers !== void 0) for (const handler of bubbleHandlers) {
							if (immediatePropagationStopped.has(e)) break;
							handler(e);
						}
					}
				}
			} else if (phase === "bubble") {
				if (bubbleElToHandlers === void 0) return;
				for (let i = 0; i < path.length; ++i) {
					if (propagationStopped.has(e)) break;
					const target = path[i];
					const handlers = bubbleElToHandlers.get(target);
					if (handlers !== void 0) {
						currentTargets.set(e, target);
						for (const handler of handlers) {
							if (immediatePropagationStopped.has(e)) break;
							handler(e);
						}
					}
				}
			}
			unspy(e, "stopPropagation");
			unspy(e, "stopImmediatePropagation");
			defineCurrentTarget(e);
		};
		delegeteHandler.displayName = "evtdUnifiedHandler";
		return delegeteHandler;
	}
	function createUnifiedWindowEventHandler() {
		const delegateHandler = function(e) {
			const { type, eventPhase } = e;
			if (eventPhase !== 2) return;
			const handlers = typeToWindowEventHandlers[type];
			if (handlers === void 0) return;
			handlers.forEach((handler) => handler(e));
		};
		delegateHandler.displayName = "evtdUnifiedWindowEventHandler";
		return delegateHandler;
	}
	const unifiedHandler = createUnifiedHandler();
	const unfiendWindowEventHandler = createUnifiedWindowEventHandler();
	function ensureElToHandlers(phase, type) {
		const phaseHandlers = phaseToTypeToElToHandlers[phase];
		if (phaseHandlers[type] === void 0) {
			phaseHandlers[type] = /* @__PURE__ */ new Map();
			window.addEventListener(type, unifiedHandler, phase === "capture");
		}
		return phaseHandlers[type];
	}
	function ensureWindowEventHandlers(type) {
		if (typeToWindowEventHandlers[type] === void 0) {
			typeToWindowEventHandlers[type] = /* @__PURE__ */ new Set();
			window.addEventListener(type, unfiendWindowEventHandler);
		}
		return typeToWindowEventHandlers[type];
	}
	function ensureHandlers(elToHandlers, el) {
		let elHandlers = elToHandlers.get(el);
		if (elHandlers === void 0) elToHandlers.set(el, elHandlers = /* @__PURE__ */ new Set());
		return elHandlers;
	}
	function handlerExist(el, phase, type, handler) {
		const elToHandlers = phaseToTypeToElToHandlers[phase][type];
		if (elToHandlers !== void 0) {
			const handlers = elToHandlers.get(el);
			if (handlers !== void 0) {
				if (handlers.has(handler)) return true;
			}
		}
		return false;
	}
	function windowEventHandlerExist(type, handler) {
		const handlers = typeToWindowEventHandlers[type];
		if (handlers !== void 0) {
			if (handlers.has(handler)) return true;
		}
		return false;
	}
	function on(type, el, handler, options) {
		let mergedHandler;
		if (typeof options === "object" && options.once === true) mergedHandler = (e) => {
			off(type, el, mergedHandler, options);
			handler(e);
		};
		else mergedHandler = handler;
		if (trapOn(type, el, mergedHandler, options)) return;
		const handlers = ensureHandlers(ensureElToHandlers(options === true || typeof options === "object" && options.capture === true ? "capture" : "bubble", type), el);
		if (!handlers.has(mergedHandler)) handlers.add(mergedHandler);
		if (el === window) {
			const windowEventHandlers = ensureWindowEventHandlers(type);
			if (!windowEventHandlers.has(mergedHandler)) windowEventHandlers.add(mergedHandler);
		}
	}
	function off(type, el, handler, options) {
		if (trapOff(type, el, handler, options)) return;
		const capture = options === true || typeof options === "object" && options.capture === true;
		const phase = capture ? "capture" : "bubble";
		const elToHandlers = ensureElToHandlers(phase, type);
		const handlers = ensureHandlers(elToHandlers, el);
		if (el === window) {
			if (!handlerExist(el, capture ? "bubble" : "capture", type, handler) && windowEventHandlerExist(type, handler)) {
				const windowEventHandlers = typeToWindowEventHandlers[type];
				windowEventHandlers.delete(handler);
				if (windowEventHandlers.size === 0) {
					window.removeEventListener(type, unfiendWindowEventHandler);
					typeToWindowEventHandlers[type] = void 0;
				}
			}
		}
		if (handlers.has(handler)) handlers.delete(handler);
		if (handlers.size === 0) elToHandlers.delete(el);
		if (elToHandlers.size === 0) {
			window.removeEventListener(type, unifiedHandler, phase === "capture");
			phaseToTypeToElToHandlers[phase][type] = void 0;
		}
	}
	return {
		on,
		off
	};
}
var { on, off } = createDelegate();
//#endregion
//#region ../../node_modules/.pnpm/vooks@0.2.12_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vooks/es/use-false-until-truthy.js
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
function useFalseUntilTruthy(originalRef) {
	const currentRef = ref(!!originalRef.value);
	if (currentRef.value) return readonly(currentRef);
	const stop = watch(originalRef, (value) => {
		if (value) {
			currentRef.value = true;
			stop();
		}
	});
	return readonly(currentRef);
}
//#endregion
//#region ../../node_modules/.pnpm/vooks@0.2.12_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vooks/es/use-memo.js
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useMemo(getterOrOptions) {
	const computedValueRef = computed(getterOrOptions);
	const valueRef = ref(computedValueRef.value);
	watch(computedValueRef, (value) => {
		valueRef.value = value;
	});
	if (typeof getterOrOptions === "function") return valueRef;
	else return {
		__v_isRef: true,
		get value() {
			return valueRef.value;
		},
		set value(v) {
			getterOrOptions.set(v);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/vooks@0.2.12_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vooks/es/utils.js
init_runtime_core_esm_bundler();
function hasInstance() {
	return getCurrentInstance() !== null;
}
var isBrowser$2 = typeof window !== "undefined";
//#endregion
//#region ../../node_modules/.pnpm/vooks@0.2.12_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vooks/es/use-click-position.js
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
var mousePositionRef = ref(null);
function clickHandler(e) {
	if (e.clientX > 0 || e.clientY > 0) mousePositionRef.value = {
		x: e.clientX,
		y: e.clientY
	};
	else {
		const { target } = e;
		if (target instanceof Element) {
			const { left, top, width, height } = target.getBoundingClientRect();
			if (left > 0 || top > 0) mousePositionRef.value = {
				x: left + width / 2,
				y: top + height / 2
			};
			else mousePositionRef.value = {
				x: 0,
				y: 0
			};
		} else mousePositionRef.value = null;
	}
}
var usedCount$2 = 0;
var managable$2 = true;
function useClickPosition() {
	if (!isBrowser$2) return readonly(ref(null));
	if (usedCount$2 === 0) on("click", document, clickHandler, true);
	const setup = () => {
		usedCount$2 += 1;
	};
	if (managable$2 && (managable$2 = hasInstance())) {
		onBeforeMount(setup);
		onBeforeUnmount(() => {
			usedCount$2 -= 1;
			if (usedCount$2 === 0) off("click", document, clickHandler, true);
		});
	} else setup();
	return readonly(mousePositionRef);
}
//#endregion
//#region ../../node_modules/.pnpm/vooks@0.2.12_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vooks/es/use-clicked.js
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var clickedTimeRef = ref(void 0);
var usedCount$1 = 0;
function handleClick() {
	clickedTimeRef.value = Date.now();
}
var managable$1 = true;
function useClicked(timeout) {
	if (!isBrowser$2) return readonly(ref(false));
	const clickedRef = ref(false);
	let timerId = null;
	function clearTimer() {
		if (timerId !== null) window.clearTimeout(timerId);
	}
	function clickedHandler() {
		clearTimer();
		clickedRef.value = true;
		timerId = window.setTimeout(() => {
			clickedRef.value = false;
		}, timeout);
	}
	if (usedCount$1 === 0) on("click", window, handleClick, true);
	const setup = () => {
		usedCount$1 += 1;
		on("click", window, clickedHandler, true);
	};
	if (managable$1 && (managable$1 = hasInstance())) {
		onBeforeMount(setup);
		onBeforeUnmount(() => {
			usedCount$1 -= 1;
			if (usedCount$1 === 0) off("click", window, handleClick, true);
			off("click", window, clickedHandler, true);
			clearTimer();
		});
	} else setup();
	return readonly(clickedRef);
}
//#endregion
//#region ../../node_modules/.pnpm/vooks@0.2.12_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vooks/es/use-os-theme.js
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
var usedCount = 0;
var supportMatchMedia = typeof window !== "undefined" && window.matchMedia !== void 0;
var osTheme = ref(null);
var darkMql;
var lightMql;
function handleDarkMqlChange(e) {
	if (e.matches) osTheme.value = "dark";
}
function handleLightMqlChange(e) {
	if (e.matches) osTheme.value = "light";
}
function init$1() {
	darkMql = window.matchMedia("(prefers-color-scheme: dark)");
	lightMql = window.matchMedia("(prefers-color-scheme: light)");
	if (darkMql.matches) osTheme.value = "dark";
	else if (lightMql.matches) osTheme.value = "light";
	else osTheme.value = null;
	if (darkMql.addEventListener) {
		darkMql.addEventListener("change", handleDarkMqlChange);
		lightMql.addEventListener("change", handleLightMqlChange);
	} else if (darkMql.addListener) {
		darkMql.addListener(handleDarkMqlChange);
		lightMql.addListener(handleLightMqlChange);
	}
}
function clean() {
	if ("removeEventListener" in darkMql) {
		darkMql.removeEventListener("change", handleDarkMqlChange);
		lightMql.removeEventListener("change", handleLightMqlChange);
	} else if ("removeListener" in darkMql) {
		darkMql.removeListener(handleDarkMqlChange);
		lightMql.removeListener(handleLightMqlChange);
	}
	darkMql = void 0;
	lightMql = void 0;
}
var managable = true;
function useOsTheme() {
	/* istanbul ignore next */
	if (!supportMatchMedia) return readonly(osTheme);
	if (usedCount === 0) init$1();
	if (managable && (managable = hasInstance())) {
		onBeforeMount(() => {
			usedCount += 1;
		});
		onBeforeUnmount(() => {
			usedCount -= 1;
			if (usedCount === 0) clean();
		});
	}
	return readonly(osTheme);
}
//#endregion
//#region ../../node_modules/.pnpm/vooks@0.2.12_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vooks/es/life-cycle/use-is-mounted.js
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
function isMounted() {
	const isMounted = ref(false);
	onMounted(() => {
		isMounted.value = true;
	});
	return readonly(isMounted);
}
//#endregion
//#region ../../node_modules/.pnpm/vooks@0.2.12_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vooks/es/use-is-ios.js
var isIos = (typeof window === "undefined" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
function useIsIos() {
	return isIos;
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/create-injection-key.mjs
function createInjectionKey(key) {
	return key;
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/drawer/src/interface.mjs
var drawerBodyInjectionKey = createInjectionKey("n-drawer-body");
var drawerInjectionKey = createInjectionKey("n-drawer");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/modal/src/interface.mjs
var modalBodyInjectionKey = createInjectionKey("n-modal-body");
var modalProviderInjectionKey = createInjectionKey("n-modal-provider");
var modalInjectionKey = createInjectionKey("n-modal");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popover/src/interface.mjs
var popoverBodyInjectionKey = createInjectionKey("n-popover-body");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/env/is-browser.mjs
var isBrowser$1 = typeof document !== "undefined" && typeof window !== "undefined";
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/composable/use-is-composing.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var isComposingRef = ref(false);
function compositionStartHandler() {
	isComposingRef.value = true;
}
function compositionEndHandler() {
	isComposingRef.value = false;
}
var mountedCount = 0;
function useIsComposing() {
	if (isBrowser$1) {
		onBeforeMount(() => {
			if (!mountedCount) {
				window.addEventListener("compositionstart", compositionStartHandler);
				window.addEventListener("compositionend", compositionEndHandler);
			}
			mountedCount++;
		});
		onBeforeUnmount(() => {
			if (mountedCount <= 1) {
				window.removeEventListener("compositionstart", compositionStartHandler);
				window.removeEventListener("compositionend", compositionEndHandler);
				mountedCount = 0;
			} else mountedCount--;
		});
	}
	return isComposingRef;
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/composable/use-lock-html-scroll.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var lockCount = 0;
var originalMarginRight = "";
var originalOverflow = "";
var originalOverflowX = "";
var originalOverflowY = "";
var lockHtmlScrollRightCompensationRef = ref("0px");
function useLockHtmlScroll(lockRef) {
	if (typeof document === "undefined") return;
	const el = document.documentElement;
	let watchStopHandle;
	let activated = false;
	const unlock = () => {
		el.style.marginRight = originalMarginRight;
		el.style.overflow = originalOverflow;
		el.style.overflowX = originalOverflowX;
		el.style.overflowY = originalOverflowY;
		lockHtmlScrollRightCompensationRef.value = "0px";
	};
	onMounted(() => {
		watchStopHandle = watch(lockRef, (value) => {
			if (value) {
				if (!lockCount) {
					const scrollbarWidth = window.innerWidth - el.offsetWidth;
					if (scrollbarWidth > 0) {
						originalMarginRight = el.style.marginRight;
						el.style.marginRight = `${scrollbarWidth}px`;
						lockHtmlScrollRightCompensationRef.value = `${scrollbarWidth}px`;
					}
					originalOverflow = el.style.overflow;
					originalOverflowX = el.style.overflowX;
					originalOverflowY = el.style.overflowY;
					el.style.overflow = "hidden";
					el.style.overflowX = "hidden";
					el.style.overflowY = "hidden";
				}
				activated = true;
				lockCount++;
			} else {
				lockCount--;
				if (!lockCount) unlock();
				activated = false;
			}
		}, { immediate: true });
	});
	onBeforeUnmount(() => {
		watchStopHandle === null || watchStopHandle === void 0 || watchStopHandle();
		if (activated) {
			lockCount--;
			if (!lockCount) unlock();
			activated = false;
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/composable/use-reactivated.mjs
init_runtime_core_esm_bundler();
function useReactivated(callback) {
	const isDeactivatedRef = { isDeactivated: false };
	let activateStateInitialized = false;
	onActivated(() => {
		isDeactivatedRef.isDeactivated = false;
		if (!activateStateInitialized) {
			activateStateInitialized = true;
			return;
		}
		callback();
	});
	onDeactivated(() => {
		isDeactivatedRef.isDeactivated = true;
		if (!activateStateInitialized) activateStateInitialized = true;
	});
	return isDeactivatedRef;
}
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/shared/v-node.js
init_runtime_core_esm_bundler();
function getSlot(scope, slots, slotName = "default") {
	const slot = slots[slotName];
	if (slot === void 0) throw new Error(`[vueuc/${scope}]: slot[${slotName}] is empty.`);
	return slot();
}
function flatten$1(vNodes, filterCommentNode = true, result = []) {
	vNodes.forEach((vNode) => {
		if (vNode === null) return;
		if (typeof vNode !== "object") {
			if (typeof vNode === "string" || typeof vNode === "number") result.push(createTextVNode(String(vNode)));
			return;
		}
		if (Array.isArray(vNode)) {
			flatten$1(vNode, filterCommentNode, result);
			return;
		}
		if (vNode.type === Fragment) {
			if (vNode.children === null) return;
			if (Array.isArray(vNode.children)) flatten$1(vNode.children, filterCommentNode, result);
		} else if (vNode.type !== Comment) result.push(vNode);
	});
	return result;
}
function getFirstVNode(scope, slots, slotName = "default") {
	const slot = slots[slotName];
	if (slot === void 0) throw new Error(`[vueuc/${scope}]: slot[${slotName}] is empty.`);
	const content = flatten$1(slot());
	if (content.length === 1) return content[0];
	else throw new Error(`[vueuc/${scope}]: slot[${slotName}] should have exactly one child.`);
}
//#endregion
//#region ../../node_modules/.pnpm/vdirs@0.1.8_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vdirs/es/clickoutside.js
var ctxKey = "@@coContext";
var clickoutside = {
	mounted(el, { value, modifiers }) {
		el[ctxKey] = { handler: void 0 };
		if (typeof value === "function") {
			el[ctxKey].handler = value;
			on("clickoutside", el, value, { capture: modifiers.capture });
		}
	},
	updated(el, { value, modifiers }) {
		const ctx = el[ctxKey];
		if (typeof value === "function") {
			if (ctx.handler) {
				if (ctx.handler !== value) {
					off("clickoutside", el, ctx.handler, { capture: modifiers.capture });
					ctx.handler = value;
					on("clickoutside", el, value, { capture: modifiers.capture });
				}
			} else {
				el[ctxKey].handler = value;
				on("clickoutside", el, value, { capture: modifiers.capture });
			}
		} else if (ctx.handler) {
			off("clickoutside", el, ctx.handler, { capture: modifiers.capture });
			ctx.handler = void 0;
		}
	},
	unmounted(el, { modifiers }) {
		const { handler } = el[ctxKey];
		if (handler) off("clickoutside", el, handler, { capture: modifiers.capture });
		el[ctxKey].handler = void 0;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/vdirs@0.1.8_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vdirs/es/utils.js
function warn$2(location, message) {
	console.error(`[vdirs/${location}]: ${message}`);
}
//#endregion
//#region ../../node_modules/.pnpm/vdirs@0.1.8_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vdirs/es/zindexable/z-index-manager.js
var ZIndexManager = class {
	constructor() {
		this.elementZIndex = /* @__PURE__ */ new Map();
		this.nextZIndex = 2e3;
	}
	get elementCount() {
		return this.elementZIndex.size;
	}
	ensureZIndex(el, zIndex) {
		const { elementZIndex } = this;
		if (zIndex !== void 0) {
			el.style.zIndex = `${zIndex}`;
			elementZIndex.delete(el);
			return;
		}
		const { nextZIndex } = this;
		if (elementZIndex.has(el)) {
			if (elementZIndex.get(el) + 1 === this.nextZIndex) return;
		}
		el.style.zIndex = `${nextZIndex}`;
		elementZIndex.set(el, nextZIndex);
		this.nextZIndex = nextZIndex + 1;
		this.squashState();
	}
	unregister(el, zIndex) {
		const { elementZIndex } = this;
		if (elementZIndex.has(el)) elementZIndex.delete(el);
		else if (zIndex === void 0) warn$2("z-index-manager/unregister-element", "Element not found when unregistering.");
		this.squashState();
	}
	squashState() {
		const { elementCount } = this;
		if (!elementCount) this.nextZIndex = 2e3;
		if (this.nextZIndex - elementCount > 2500) this.rearrange();
	}
	rearrange() {
		const elementZIndexPair = Array.from(this.elementZIndex.entries());
		elementZIndexPair.sort((pair1, pair2) => {
			return pair1[1] - pair2[1];
		});
		this.nextZIndex = 2e3;
		elementZIndexPair.forEach((pair) => {
			const el = pair[0];
			const zIndex = this.nextZIndex++;
			if (`${zIndex}` !== el.style.zIndex) el.style.zIndex = `${zIndex}`;
		});
	}
};
var z_index_manager_default = new ZIndexManager();
//#endregion
//#region ../../node_modules/.pnpm/vdirs@0.1.8_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vdirs/es/zindexable/index.js
var ctx = "@@ziContext";
var zindexable = {
	mounted(el, bindings) {
		const { value = {} } = bindings;
		const { zIndex, enabled } = value;
		el[ctx] = {
			enabled: !!enabled,
			initialized: false
		};
		if (enabled) {
			z_index_manager_default.ensureZIndex(el, zIndex);
			el[ctx].initialized = true;
		}
	},
	updated(el, bindings) {
		const { value = {} } = bindings;
		const { zIndex, enabled } = value;
		const cachedEnabled = el[ctx].enabled;
		if (enabled && !cachedEnabled) {
			z_index_manager_default.ensureZIndex(el, zIndex);
			el[ctx].initialized = true;
		}
		el[ctx].enabled = !!enabled;
	},
	unmounted(el, bindings) {
		if (!el[ctx].initialized) return;
		const { value = {} } = bindings;
		const { zIndex } = value;
		z_index_manager_default.unregister(el, zIndex);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@css-render+vue3-ssr@0.15.14_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/@css-render/vue3-ssr/esm/index.js
init_runtime_core_esm_bundler();
var ssrContextKey = "@css-render/vue3-ssr";
function createStyleString(id, style) {
	return `<style cssr-id="${id}">\n${style}\n</style>`;
}
function ssrAdapter(id, style, ssrContext) {
	const { styles, ids } = ssrContext;
	if (ids.has(id)) return;
	if (styles !== null) {
		ids.add(id);
		styles.push(createStyleString(id, style));
	}
}
var isBrowser = typeof document !== "undefined";
function useSsrAdapter() {
	if (isBrowser) return void 0;
	const context = inject(ssrContextKey, null);
	if (context === null) return void 0;
	return {
		adapter: (id, style) => ssrAdapter(id, style, context),
		context
	};
}
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/shared/warn.js
function warn$1(location, message) {
	console.error(`[vueuc/${location}]: ${message}`);
}
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/shared/resolve-to.js
function resolveTo(selector) {
	if (typeof selector === "string") return document.querySelector(selector);
	return selector() || null;
}
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/lazy-teleport/src/index.js
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var src_default$1 = defineComponent({
	name: "LazyTeleport",
	props: {
		to: {
			type: [String, Object],
			default: void 0
		},
		disabled: Boolean,
		show: {
			type: Boolean,
			required: true
		}
	},
	setup(props) {
		return {
			showTeleport: useFalseUntilTruthy(toRef(props, "show")),
			mergedTo: computed(() => {
				const { to } = props;
				return to !== null && to !== void 0 ? to : "body";
			})
		};
	},
	render() {
		return this.showTeleport ? this.disabled ? getSlot("lazy-teleport", this.$slots) : h(Teleport, {
			disabled: this.disabled,
			to: this.mergedTo
		}, getSlot("lazy-teleport", this.$slots)) : null;
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js
var resizeObservers = [];
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js
var hasActiveObservations = function() {
	return resizeObservers.some(function(ro) {
		return ro.activeTargets.length > 0;
	});
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js
var hasSkippedObservations = function() {
	return resizeObservers.some(function(ro) {
		return ro.skippedTargets.length > 0;
	});
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js
var msg = "ResizeObserver loop completed with undelivered notifications.";
var deliverResizeLoopError = function() {
	var event;
	if (typeof ErrorEvent === "function") event = new ErrorEvent("error", { message: msg });
	else {
		event = document.createEvent("Event");
		event.initEvent("error", false, false);
		event.message = msg;
	}
	window.dispatchEvent(event);
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions) {
	ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
	ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
	ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/freeze.js
var freeze = function(obj) {
	return Object.freeze(obj);
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js
var ResizeObserverSize = function() {
	function ResizeObserverSize(inlineSize, blockSize) {
		this.inlineSize = inlineSize;
		this.blockSize = blockSize;
		freeze(this);
	}
	return ResizeObserverSize;
}();
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js
var DOMRectReadOnly = function() {
	function DOMRectReadOnly(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.top = this.y;
		this.left = this.x;
		this.bottom = this.top + this.height;
		this.right = this.left + this.width;
		return freeze(this);
	}
	DOMRectReadOnly.prototype.toJSON = function() {
		var _a = this;
		return {
			x: _a.x,
			y: _a.y,
			top: _a.top,
			right: _a.right,
			bottom: _a.bottom,
			left: _a.left,
			width: _a.width,
			height: _a.height
		};
	};
	DOMRectReadOnly.fromRect = function(rectangle) {
		return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
	};
	return DOMRectReadOnly;
}();
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/element.js
var isSVG = function(target) {
	return target instanceof SVGElement && "getBBox" in target;
};
var isHidden = function(target) {
	if (isSVG(target)) {
		var _a = target.getBBox(), width = _a.width, height = _a.height;
		return !width && !height;
	}
	var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
	return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function(obj) {
	var _a;
	if (obj instanceof Element) return true;
	var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
	return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
	switch (target.tagName) {
		case "INPUT": if (target.type !== "image") break;
		case "VIDEO":
		case "AUDIO":
		case "EMBED":
		case "OBJECT":
		case "CANVAS":
		case "IFRAME":
		case "IMG": return true;
	}
	return false;
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/global.js
var global$1 = typeof window !== "undefined" ? window : {};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js
var cache = /* @__PURE__ */ new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(global$1.navigator && global$1.navigator.userAgent);
var parseDimension = function(pixel) {
	return parseFloat(pixel || "0");
};
var size = function(inlineSize, blockSize, switchSizes) {
	if (inlineSize === void 0) inlineSize = 0;
	if (blockSize === void 0) blockSize = 0;
	if (switchSizes === void 0) switchSizes = false;
	return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
	devicePixelContentBoxSize: size(),
	borderBoxSize: size(),
	contentBoxSize: size(),
	contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
	if (forceRecalculation === void 0) forceRecalculation = false;
	if (cache.has(target) && !forceRecalculation) return cache.get(target);
	if (isHidden(target)) {
		cache.set(target, zeroBoxes);
		return zeroBoxes;
	}
	var cs = getComputedStyle(target);
	var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
	var removePadding = !IE && cs.boxSizing === "border-box";
	var switchSizes = verticalRegexp.test(cs.writingMode || "");
	var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
	var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
	var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
	var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
	var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
	var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
	var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
	var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
	var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
	var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
	var horizontalPadding = paddingLeft + paddingRight;
	var verticalPadding = paddingTop + paddingBottom;
	var horizontalBorderArea = borderLeft + borderRight;
	var verticalBorderArea = borderTop + borderBottom;
	var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
	var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
	var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
	var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
	var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
	var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
	var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
	var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
	var boxes = freeze({
		devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
		borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
		contentBoxSize: size(contentWidth, contentHeight, switchSizes),
		contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
	});
	cache.set(target, boxes);
	return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
	var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
	switch (observedBox) {
		case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX: return devicePixelContentBoxSize;
		case ResizeObserverBoxOptions.BORDER_BOX: return borderBoxSize;
		default: return contentBoxSize;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js
var ResizeObserverEntry = function() {
	function ResizeObserverEntry(target) {
		var boxes = calculateBoxSizes(target);
		this.target = target;
		this.contentRect = boxes.contentRect;
		this.borderBoxSize = freeze([boxes.borderBoxSize]);
		this.contentBoxSize = freeze([boxes.contentBoxSize]);
		this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
	}
	return ResizeObserverEntry;
}();
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js
var calculateDepthForNode = function(node) {
	if (isHidden(node)) return Infinity;
	var depth = 0;
	var parent = node.parentNode;
	while (parent) {
		depth += 1;
		parent = parent.parentNode;
	}
	return depth;
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js
var broadcastActiveObservations = function() {
	var shallowestDepth = Infinity;
	var callbacks = [];
	resizeObservers.forEach(function processObserver(ro) {
		if (ro.activeTargets.length === 0) return;
		var entries = [];
		ro.activeTargets.forEach(function processTarget(ot) {
			var entry = new ResizeObserverEntry(ot.target);
			var targetDepth = calculateDepthForNode(ot.target);
			entries.push(entry);
			ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
			if (targetDepth < shallowestDepth) shallowestDepth = targetDepth;
		});
		callbacks.push(function resizeObserverCallback() {
			ro.callback.call(ro.observer, entries, ro.observer);
		});
		ro.activeTargets.splice(0, ro.activeTargets.length);
	});
	for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
		var callback = callbacks_1[_i];
		callback();
	}
	return shallowestDepth;
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js
var gatherActiveObservationsAtDepth = function(depth) {
	resizeObservers.forEach(function processObserver(ro) {
		ro.activeTargets.splice(0, ro.activeTargets.length);
		ro.skippedTargets.splice(0, ro.skippedTargets.length);
		ro.observationTargets.forEach(function processTarget(ot) {
			if (ot.isActive()) {
				if (calculateDepthForNode(ot.target) > depth) ro.activeTargets.push(ot);
				else ro.skippedTargets.push(ot);
			}
		});
	});
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/process.js
var process$1 = function() {
	var depth = 0;
	gatherActiveObservationsAtDepth(depth);
	while (hasActiveObservations()) {
		depth = broadcastActiveObservations();
		gatherActiveObservationsAtDepth(depth);
	}
	if (hasSkippedObservations()) deliverResizeLoopError();
	return depth > 0;
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js
var trigger;
var callbacks = [];
var notify = function() {
	return callbacks.splice(0).forEach(function(cb) {
		return cb();
	});
};
var queueMicroTask = function(callback) {
	if (!trigger) {
		var toggle_1 = 0;
		var el_1 = document.createTextNode("");
		new MutationObserver(function() {
			return notify();
		}).observe(el_1, { characterData: true });
		trigger = function() {
			el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
		};
	}
	callbacks.push(callback);
	trigger();
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js
var queueResizeObserver = function(cb) {
	queueMicroTask(function ResizeObserver() {
		requestAnimationFrame(cb);
	});
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/scheduler.js
var watching = 0;
var isWatching = function() {
	return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = {
	attributes: true,
	characterData: true,
	childList: true,
	subtree: true
};
var events = [
	"resize",
	"load",
	"transitionend",
	"animationend",
	"animationstart",
	"animationiteration",
	"keyup",
	"keydown",
	"mouseup",
	"mousedown",
	"mouseover",
	"mouseout",
	"blur",
	"focus"
];
var time = function(timeout) {
	if (timeout === void 0) timeout = 0;
	return Date.now() + timeout;
};
var scheduled = false;
var scheduler = new (function() {
	function Scheduler() {
		var _this = this;
		this.stopped = true;
		this.listener = function() {
			return _this.schedule();
		};
	}
	Scheduler.prototype.run = function(timeout) {
		var _this = this;
		if (timeout === void 0) timeout = CATCH_PERIOD;
		if (scheduled) return;
		scheduled = true;
		var until = time(timeout);
		queueResizeObserver(function() {
			var elementsHaveResized = false;
			try {
				elementsHaveResized = process$1();
			} finally {
				scheduled = false;
				timeout = until - time();
				if (!isWatching()) return;
				if (elementsHaveResized) _this.run(1e3);
				else if (timeout > 0) _this.run(timeout);
				else _this.start();
			}
		});
	};
	Scheduler.prototype.schedule = function() {
		this.stop();
		this.run();
	};
	Scheduler.prototype.observe = function() {
		var _this = this;
		var cb = function() {
			return _this.observer && _this.observer.observe(document.body, observerConfig);
		};
		document.body ? cb() : global$1.addEventListener("DOMContentLoaded", cb);
	};
	Scheduler.prototype.start = function() {
		var _this = this;
		if (this.stopped) {
			this.stopped = false;
			this.observer = new MutationObserver(this.listener);
			this.observe();
			events.forEach(function(name) {
				return global$1.addEventListener(name, _this.listener, true);
			});
		}
	};
	Scheduler.prototype.stop = function() {
		var _this = this;
		if (!this.stopped) {
			this.observer && this.observer.disconnect();
			events.forEach(function(name) {
				return global$1.removeEventListener(name, _this.listener, true);
			});
			this.stopped = true;
		}
	};
	return Scheduler;
}())();
var updateCount = function(n) {
	!watching && n > 0 && scheduler.start();
	watching += n;
	!watching && scheduler.stop();
};
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObservation.js
var skipNotifyOnElement = function(target) {
	return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
};
var ResizeObservation = function() {
	function ResizeObservation(target, observedBox) {
		this.target = target;
		this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
		this.lastReportedSize = {
			inlineSize: 0,
			blockSize: 0
		};
	}
	ResizeObservation.prototype.isActive = function() {
		var size = calculateBoxSize(this.target, this.observedBox, true);
		if (skipNotifyOnElement(this.target)) this.lastReportedSize = size;
		if (this.lastReportedSize.inlineSize !== size.inlineSize || this.lastReportedSize.blockSize !== size.blockSize) return true;
		return false;
	};
	return ResizeObservation;
}();
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js
var ResizeObserverDetail = function() {
	function ResizeObserverDetail(resizeObserver, callback) {
		this.activeTargets = [];
		this.skippedTargets = [];
		this.observationTargets = [];
		this.observer = resizeObserver;
		this.callback = callback;
	}
	return ResizeObserverDetail;
}();
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverController.js
var observerMap = /* @__PURE__ */ new WeakMap();
var getObservationIndex = function(observationTargets, target) {
	for (var i = 0; i < observationTargets.length; i += 1) if (observationTargets[i].target === target) return i;
	return -1;
};
var ResizeObserverController = function() {
	function ResizeObserverController() {}
	ResizeObserverController.connect = function(resizeObserver, callback) {
		var detail = new ResizeObserverDetail(resizeObserver, callback);
		observerMap.set(resizeObserver, detail);
	};
	ResizeObserverController.observe = function(resizeObserver, target, options) {
		var detail = observerMap.get(resizeObserver);
		var firstObservation = detail.observationTargets.length === 0;
		if (getObservationIndex(detail.observationTargets, target) < 0) {
			firstObservation && resizeObservers.push(detail);
			detail.observationTargets.push(new ResizeObservation(target, options && options.box));
			updateCount(1);
			scheduler.schedule();
		}
	};
	ResizeObserverController.unobserve = function(resizeObserver, target) {
		var detail = observerMap.get(resizeObserver);
		var index = getObservationIndex(detail.observationTargets, target);
		var lastObservation = detail.observationTargets.length === 1;
		if (index >= 0) {
			lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
			detail.observationTargets.splice(index, 1);
			updateCount(-1);
		}
	};
	ResizeObserverController.disconnect = function(resizeObserver) {
		var _this = this;
		var detail = observerMap.get(resizeObserver);
		detail.observationTargets.slice().forEach(function(ot) {
			return _this.unobserve(resizeObserver, ot.target);
		});
		detail.activeTargets.splice(0, detail.activeTargets.length);
	};
	return ResizeObserverController;
}();
//#endregion
//#region ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserver.js
var ResizeObserver = function() {
	function ResizeObserver(callback) {
		if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
		if (typeof callback !== "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
		ResizeObserverController.connect(this, callback);
	}
	ResizeObserver.prototype.observe = function(target, options) {
		if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
		if (!isElement(target)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
		ResizeObserverController.observe(this, target, options);
	};
	ResizeObserver.prototype.unobserve = function(target) {
		if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
		if (!isElement(target)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
		ResizeObserverController.unobserve(this, target);
	};
	ResizeObserver.prototype.disconnect = function() {
		ResizeObserverController.disconnect(this);
	};
	ResizeObserver.toString = function() {
		return "function ResizeObserver () { [polyfill code] }";
	};
	return ResizeObserver;
}();
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/resize-observer/src/delegate.js
var ResizeObserverDelegate = class {
	constructor() {
		this.handleResize = this.handleResize.bind(this);
		this.observer = new (typeof window !== "undefined" && window.ResizeObserver || ResizeObserver)(this.handleResize);
		this.elHandlersMap = /* @__PURE__ */ new Map();
	}
	handleResize(entries) {
		for (const entry of entries) {
			const handler = this.elHandlersMap.get(entry.target);
			if (handler !== void 0) handler(entry);
		}
	}
	registerHandler(el, handler) {
		this.elHandlersMap.set(el, handler);
		this.observer.observe(el);
	}
	unregisterHandler(el) {
		if (!this.elHandlersMap.has(el)) return;
		this.elHandlersMap.delete(el);
		this.observer.unobserve(el);
	}
};
var delegate_default = new ResizeObserverDelegate();
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/resize-observer/src/VResizeObserver.js
init_runtime_core_esm_bundler();
var VResizeObserver_default = defineComponent({
	name: "ResizeObserver",
	props: { onResize: Function },
	setup(props) {
		let registered = false;
		const proxy = getCurrentInstance().proxy;
		function handleResize(entry) {
			const { onResize } = props;
			if (onResize !== void 0) onResize(entry);
		}
		onMounted(() => {
			const el = proxy.$el;
			if (el === void 0) {
				warn$1("resize-observer", "$el does not exist.");
				return;
			}
			if (el.nextElementSibling !== el.nextSibling) {
				if (el.nodeType === 3 && el.nodeValue !== "") {
					warn$1("resize-observer", "$el can not be observed (it may be a text node).");
					return;
				}
			}
			if (el.nextElementSibling !== null) {
				delegate_default.registerHandler(el.nextElementSibling, handleResize);
				registered = true;
			}
		});
		onBeforeUnmount(() => {
			if (registered) delegate_default.unregisterHandler(proxy.$el.nextElementSibling);
		});
	},
	render() {
		return renderSlot(this.$slots, "default");
	}
});
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/focus-trap/src/utils.js
function isHTMLElement(node) {
	return node instanceof HTMLElement;
}
function focusFirstDescendant(node) {
	for (let i = 0; i < node.childNodes.length; i++) {
		const child = node.childNodes[i];
		if (isHTMLElement(child)) {
			if (attemptFocus(child) || focusFirstDescendant(child)) return true;
		}
	}
	return false;
}
function focusLastDescendant(element) {
	for (let i = element.childNodes.length - 1; i >= 0; i--) {
		const child = element.childNodes[i];
		if (isHTMLElement(child)) {
			if (attemptFocus(child) || focusLastDescendant(child)) return true;
		}
	}
	return false;
}
function attemptFocus(element) {
	if (!isFocusable(element)) return false;
	try {
		element.focus({ preventScroll: true });
	} catch (e) {}
	return document.activeElement === element;
}
function isFocusable(element) {
	if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) return true;
	if (element.getAttribute("disabled")) return false;
	switch (element.nodeName) {
		case "A": return !!element.href && element.rel !== "ignore";
		case "INPUT": return element.type !== "hidden" && element.type !== "file";
		case "SELECT":
		case "TEXTAREA": return true;
		default: return false;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/vueuc@0.4.65_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vueuc/es/focus-trap/src/index.js
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var stack = [];
var FocusTrap = defineComponent({
	name: "FocusTrap",
	props: {
		disabled: Boolean,
		active: Boolean,
		autoFocus: {
			type: Boolean,
			default: true
		},
		onEsc: Function,
		initialFocusTo: [String, Function],
		finalFocusTo: [String, Function],
		returnFocusOnDeactivated: {
			type: Boolean,
			default: true
		}
	},
	setup(props) {
		const id = createId();
		const focusableStartRef = ref(null);
		const focusableEndRef = ref(null);
		let activated = false;
		let ignoreInternalFocusChange = false;
		const lastFocusedElement = typeof document === "undefined" ? null : document.activeElement;
		function isCurrentActive() {
			return stack[stack.length - 1] === id;
		}
		function handleDocumentKeydown(e) {
			var _a;
			if (e.code === "Escape") {
				if (isCurrentActive()) (_a = props.onEsc) === null || _a === void 0 || _a.call(props, e);
			}
		}
		onMounted(() => {
			watch(() => props.active, (value) => {
				if (value) {
					activate();
					on("keydown", document, handleDocumentKeydown);
				} else {
					off("keydown", document, handleDocumentKeydown);
					if (activated) deactivate();
				}
			}, { immediate: true });
		});
		onBeforeUnmount(() => {
			off("keydown", document, handleDocumentKeydown);
			if (activated) deactivate();
		});
		function handleDocumentFocus(e) {
			if (ignoreInternalFocusChange) return;
			if (isCurrentActive()) {
				const mainEl = getMainEl();
				if (mainEl === null) return;
				if (mainEl.contains(getPreciseEventTarget(e))) return;
				resetFocusTo("first");
			}
		}
		function getMainEl() {
			const focusableStartEl = focusableStartRef.value;
			if (focusableStartEl === null) return null;
			let mainEl = focusableStartEl;
			while (true) {
				mainEl = mainEl.nextSibling;
				if (mainEl === null) break;
				if (mainEl instanceof Element && mainEl.tagName === "DIV") break;
			}
			return mainEl;
		}
		function activate() {
			var _a;
			if (props.disabled) return;
			stack.push(id);
			if (props.autoFocus) {
				const { initialFocusTo } = props;
				if (initialFocusTo === void 0) resetFocusTo("first");
				else (_a = resolveTo(initialFocusTo)) === null || _a === void 0 || _a.focus({ preventScroll: true });
			}
			activated = true;
			document.addEventListener("focus", handleDocumentFocus, true);
		}
		function deactivate() {
			var _a;
			if (props.disabled) return;
			document.removeEventListener("focus", handleDocumentFocus, true);
			stack = stack.filter((idInStack) => idInStack !== id);
			if (isCurrentActive()) return;
			const { finalFocusTo } = props;
			if (finalFocusTo !== void 0) (_a = resolveTo(finalFocusTo)) === null || _a === void 0 || _a.focus({ preventScroll: true });
			else if (props.returnFocusOnDeactivated) {
				if (lastFocusedElement instanceof HTMLElement) {
					ignoreInternalFocusChange = true;
					lastFocusedElement.focus({ preventScroll: true });
					ignoreInternalFocusChange = false;
				}
			}
		}
		function resetFocusTo(target) {
			if (!isCurrentActive()) return;
			if (props.active) {
				const focusableStartEl = focusableStartRef.value;
				const focusableEndEl = focusableEndRef.value;
				if (focusableStartEl !== null && focusableEndEl !== null) {
					const mainEl = getMainEl();
					if (mainEl == null || mainEl === focusableEndEl) {
						ignoreInternalFocusChange = true;
						focusableStartEl.focus({ preventScroll: true });
						ignoreInternalFocusChange = false;
						return;
					}
					ignoreInternalFocusChange = true;
					const focused = target === "first" ? focusFirstDescendant(mainEl) : focusLastDescendant(mainEl);
					ignoreInternalFocusChange = false;
					if (!focused) {
						ignoreInternalFocusChange = true;
						focusableStartEl.focus({ preventScroll: true });
						ignoreInternalFocusChange = false;
					}
				}
			}
		}
		function handleStartFocus(e) {
			if (ignoreInternalFocusChange) return;
			const mainEl = getMainEl();
			if (mainEl === null) return;
			if (e.relatedTarget !== null && mainEl.contains(e.relatedTarget)) resetFocusTo("last");
			else resetFocusTo("first");
		}
		function handleEndFocus(e) {
			if (ignoreInternalFocusChange) return;
			if (e.relatedTarget !== null && e.relatedTarget === focusableStartRef.value) resetFocusTo("last");
			else resetFocusTo("first");
		}
		return {
			focusableStartRef,
			focusableEndRef,
			focusableStyle: "position: absolute; height: 0; width: 0;",
			handleStartFocus,
			handleEndFocus
		};
	},
	render() {
		const { default: defaultSlot } = this.$slots;
		if (defaultSlot === void 0) return null;
		if (this.disabled) return defaultSlot();
		const { active, focusableStyle } = this;
		return h(Fragment, null, [
			h("div", {
				"aria-hidden": "true",
				tabindex: active ? "0" : "-1",
				ref: "focusableStartRef",
				style: focusableStyle,
				onFocus: this.handleStartFocus
			}),
			defaultSlot(),
			h("div", {
				"aria-hidden": "true",
				style: focusableStyle,
				ref: "focusableEndRef",
				tabindex: active ? "0" : "-1",
				onFocus: this.handleEndFocus
			})
		]);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/css/color-to-class.mjs
function color2Class(color) {
	return color.replace(/#|\(|\)|,|\s|\./g, "_");
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/css/rtl-inset.mjs
function rtlInset(inset) {
	const { left, right, top, bottom } = getMargin(inset);
	return `${top} ${left} ${bottom} ${right}`;
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/event/index.mjs
var eventSet = /* @__PURE__ */ new WeakSet();
function markEventEffectPerformed(event) {
	eventSet.add(event);
}
function eventEffectNotPerformed(event) {
	return !eventSet.has(event);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/naive/warn.mjs
function warn(location, message) {
	console.error(`[naive/${location}]: ${message}`);
}
function throwError(location, message) {
	throw new Error(`[naive/${location}]: ${message}`);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/call.mjs
function call(funcs, ...args) {
	if (Array.isArray(funcs)) funcs.forEach((func) => call(func, ...args));
	else return funcs(...args);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/flatten.mjs
init_runtime_core_esm_bundler();
function flatten(vNodes, filterCommentNode = true, result = []) {
	vNodes.forEach((vNode) => {
		if (vNode === null) return;
		if (typeof vNode !== "object") {
			if (typeof vNode === "string" || typeof vNode === "number") result.push(createTextVNode(String(vNode)));
			return;
		}
		if (Array.isArray(vNode)) {
			flatten(vNode, filterCommentNode, result);
			return;
		}
		if (vNode.type === Fragment) {
			if (vNode.children === null) return;
			if (Array.isArray(vNode.children)) flatten(vNode.children, filterCommentNode, result);
		} else {
			if (vNode.type === Comment && filterCommentNode) return;
			result.push(vNode);
		}
	});
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/get-first-slot-vnode.mjs
function getFirstSlotVNode(slots, slotName = "default", props = void 0) {
	const slot = slots[slotName];
	if (!slot) {
		warn("getFirstSlotVNode", `slot[${slotName}] is empty`);
		return null;
	}
	const slotContent = flatten(slot(props));
	if (slotContent.length === 1) return slotContent[0];
	else {
		warn("getFirstSlotVNode", `slot[${slotName}] should have exactly one child`);
		return null;
	}
}
function getFirstSlotVNodeWithTypedProps(slotName, slot, props) {
	if (!slot) return null;
	const slotContent = flatten(slot(props));
	if (slotContent.length === 1) return slotContent[0];
	else {
		warn("getFirstSlotVNode", `slot[${slotName}] should have exactly one child`);
		return null;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/keep.mjs
function keep(object, keys = [], rest) {
	const keepedObject = {};
	keys.forEach((key) => {
		keepedObject[key] = object[key];
	});
	return Object.assign(keepedObject, rest);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/keysOf.mjs
function keysOf(obj) {
	return Object.keys(obj);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/omit.mjs
function omit(object, keys = [], rest) {
	const omitedObject = {};
	Object.getOwnPropertyNames(object).forEach((originalKey) => {
		if (!keys.includes(originalKey)) omitedObject[originalKey] = object[originalKey];
	});
	return Object.assign(omitedObject, rest);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/render.mjs
init_runtime_core_esm_bundler();
function render(r, ...args) {
	if (typeof r === "function") return r(...args);
	else if (typeof r === "string") return createTextVNode(r);
	else if (typeof r === "number") return createTextVNode(String(r));
	else return null;
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/resolve-slot.mjs
init_runtime_core_esm_bundler();
function ensureValidVNode(vnodes) {
	return vnodes.some((child) => {
		if (!isVNode(child)) return true;
		if (child.type === Comment) return false;
		if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
		return true;
	}) ? vnodes : null;
}
/**
* We shouldn't use the following functions with slot flags `_: 1, 2, 3`
*/
function resolveSlot(slot, fallback) {
	return slot && ensureValidVNode(slot()) || fallback();
}
function resolveSlotWithTypedProps(slot, props, fallback) {
	return slot && ensureValidVNode(slot(props)) || fallback(props);
}
/**
* Resolve slot with wrapper if content exists, no fallback
*/
function resolveWrappedSlot(slot, wrapper) {
	return wrapper(slot && ensureValidVNode(slot()) || null);
}
function resolveWrappedSlotWithProps(slot, props, wrapper) {
	return wrapper(slot && ensureValidVNode(slot(props)) || null);
}
function isSlotEmpty(slot) {
	return !(slot && ensureValidVNode(slot()));
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/vue/wrapper.mjs
init_runtime_core_esm_bundler();
var Wrapper = defineComponent({ render() {
	var _a, _b;
	return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
} });
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/config-provider/src/context.mjs
var configProviderInjectionKey = createInjectionKey("n-config-provider");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_mixins/use-config.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useConfig(props = {}, options = { defaultBordered: true }) {
	const NConfigProvider = inject(configProviderInjectionKey, null);
	return {
		inlineThemeDisabled: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.inlineThemeDisabled,
		mergedRtlRef: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedRtlRef,
		mergedComponentPropsRef: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef,
		mergedBreakpointsRef: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBreakpointsRef,
		mergedBorderedRef: computed(() => {
			var _a, _b;
			const { bordered } = props;
			if (bordered !== void 0) return bordered;
			return (_b = (_a = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBorderedRef.value) !== null && _a !== void 0 ? _a : options.defaultBordered) !== null && _b !== void 0 ? _b : true;
		}),
		mergedClsPrefixRef: NConfigProvider ? NConfigProvider.mergedClsPrefixRef : shallowRef("n"),
		namespaceRef: computed(() => NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedNamespaceRef.value)
	};
}
function useMergedClsPrefix() {
	const NConfigProvider = inject(configProviderInjectionKey, null);
	return NConfigProvider ? NConfigProvider.mergedClsPrefixRef : shallowRef("n");
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_mixins/use-css-vars-class.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useThemeClass(componentName, hashRef, cssVarsRef, props) {
	if (!cssVarsRef) throwError("useThemeClass", "cssVarsRef is not passed");
	const NConfigProvider = inject(configProviderInjectionKey, null);
	const mergedThemeHashRef = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeHashRef;
	const styleMountTarget = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget;
	const themeClassRef = ref("");
	const ssrAdapter = useSsrAdapter();
	let renderCallback;
	const hashClassPrefix = `__${componentName}`;
	const mountStyle = () => {
		let finalThemeHash = hashClassPrefix;
		const hashValue = hashRef ? hashRef.value : void 0;
		const themeHash = mergedThemeHashRef === null || mergedThemeHashRef === void 0 ? void 0 : mergedThemeHashRef.value;
		if (themeHash) finalThemeHash += `-${themeHash}`;
		if (hashValue) finalThemeHash += `-${hashValue}`;
		const { themeOverrides, builtinThemeOverrides } = props;
		if (themeOverrides) finalThemeHash += `-${murmur2(JSON.stringify(themeOverrides))}`;
		if (builtinThemeOverrides) finalThemeHash += `-${murmur2(JSON.stringify(builtinThemeOverrides))}`;
		themeClassRef.value = finalThemeHash;
		renderCallback = () => {
			const cssVars = cssVarsRef.value;
			let style = "";
			for (const key in cssVars) style += `${key}: ${cssVars[key]};`;
			c(`.${finalThemeHash}`, style).mount({
				id: finalThemeHash,
				ssr: ssrAdapter,
				parent: styleMountTarget
			});
			renderCallback = void 0;
		};
	};
	watchEffect(() => {
		mountStyle();
	});
	return {
		themeClass: themeClassRef,
		onRender: () => {
			renderCallback === null || renderCallback === void 0 || renderCallback();
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_mixins/use-form-item.mjs
init_runtime_core_esm_bundler();
var formItemInjectionKey = createInjectionKey("n-form-item");
function useFormItem(props, { defaultSize = "medium", mergedSize, mergedDisabled } = {}) {
	const NFormItem = inject(formItemInjectionKey, null);
	provide(formItemInjectionKey, null);
	const mergedSizeRef = computed(mergedSize ? () => mergedSize(NFormItem) : () => {
		const { size } = props;
		if (size) return size;
		if (NFormItem) {
			const { mergedSize } = NFormItem;
			if (mergedSize.value !== void 0) return mergedSize.value;
		}
		return defaultSize;
	});
	const mergedDisabledRef = computed(mergedDisabled ? () => mergedDisabled(NFormItem) : () => {
		const { disabled } = props;
		if (disabled !== void 0) return disabled;
		if (NFormItem) return NFormItem.disabled.value;
		return false;
	});
	const mergedStatusRef = computed(() => {
		const { status } = props;
		if (status) return status;
		return NFormItem === null || NFormItem === void 0 ? void 0 : NFormItem.mergedValidationStatus.value;
	});
	onBeforeUnmount(() => {
		if (NFormItem) NFormItem.restoreValidation();
	});
	return {
		mergedSizeRef,
		mergedDisabledRef,
		mergedStatusRef,
		nTriggerFormBlur() {
			if (NFormItem) NFormItem.handleContentBlur();
		},
		nTriggerFormChange() {
			if (NFormItem) NFormItem.handleContentChange();
		},
		nTriggerFormFocus() {
			if (NFormItem) NFormItem.handleContentFocus();
		},
		nTriggerFormInput() {
			if (NFormItem) NFormItem.handleContentInput();
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/locales/common/zhCN.mjs
var zhCN$1 = {
	name: "zh-CN",
	global: {
		undo: "撤销",
		redo: "重做",
		confirm: "确认",
		clear: "清除"
	},
	Popconfirm: {
		positiveText: "确认",
		negativeText: "取消"
	},
	Cascader: {
		placeholder: "请选择",
		loading: "加载中",
		loadingRequiredMessage: (label) => `加载全部 ${label} 的子节点后才可选中`
	},
	Time: {
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
	},
	DatePicker: {
		yearFormat: "yyyy年",
		monthFormat: "MMM",
		dayFormat: "eeeeee",
		yearTypeFormat: "yyyy",
		monthTypeFormat: "yyyy-MM",
		dateFormat: "yyyy-MM-dd",
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
		quarterFormat: "yyyy-qqq",
		weekFormat: "YYYY-w周",
		clear: "清除",
		now: "此刻",
		confirm: "确认",
		selectTime: "选择时间",
		selectDate: "选择日期",
		datePlaceholder: "选择日期",
		datetimePlaceholder: "选择日期时间",
		monthPlaceholder: "选择月份",
		yearPlaceholder: "选择年份",
		quarterPlaceholder: "选择季度",
		weekPlaceholder: "选择周",
		startDatePlaceholder: "开始日期",
		endDatePlaceholder: "结束日期",
		startDatetimePlaceholder: "开始日期时间",
		endDatetimePlaceholder: "结束日期时间",
		startMonthPlaceholder: "开始月份",
		endMonthPlaceholder: "结束月份",
		monthBeforeYear: false,
		firstDayOfWeek: 0,
		today: "今天"
	},
	DataTable: {
		checkTableAll: "选择全部表格数据",
		uncheckTableAll: "取消选择全部表格数据",
		confirm: "确认",
		clear: "重置"
	},
	LegacyTransfer: {
		sourceTitle: "源项",
		targetTitle: "目标项"
	},
	Transfer: {
		selectAll: "全选",
		clearAll: "清除",
		unselectAll: "取消全选",
		total: (num) => `共 ${num} 项`,
		selected: (num) => `已选 ${num} 项`
	},
	Empty: { description: "无数据" },
	Select: { placeholder: "请选择" },
	TimePicker: {
		placeholder: "请选择时间",
		positiveText: "确认",
		negativeText: "取消",
		now: "此刻",
		clear: "清除"
	},
	Pagination: {
		goto: "跳至",
		selectionSuffix: "页"
	},
	DynamicTags: { add: "添加" },
	Log: { loading: "加载中" },
	Input: { placeholder: "请输入" },
	InputNumber: { placeholder: "请输入" },
	DynamicInput: { create: "添加" },
	ThemeEditor: {
		title: "主题编辑器",
		clearAllVars: "清除全部变量",
		clearSearch: "清除搜索",
		filterCompName: "过滤组件名",
		filterVarName: "过滤变量名",
		import: "导入",
		export: "导出",
		restore: "恢复默认"
	},
	Image: {
		tipPrevious: "上一张（←）",
		tipNext: "下一张（→）",
		tipCounterclockwise: "向左旋转",
		tipClockwise: "向右旋转",
		tipZoomOut: "缩小",
		tipZoomIn: "放大",
		tipDownload: "下载",
		tipClose: "关闭（Esc）",
		tipOriginalSize: "缩放到原始尺寸"
	},
	Heatmap: {
		less: "少",
		more: "多",
		monthFormat: "MMM",
		weekdayFormat: "eeeeee"
	}
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
	return (options = {}) => {
		const width = options.width ? String(options.width) : args.defaultWidth;
		return args.formats[width] || args.formats[args.defaultWidth];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
/**
* The localize function argument callback which allows to convert raw value to
* the actual type.
*
* @param value - The value to convert
*
* @returns The converted value
*/
/**
* The map of localized values for each width.
*/
/**
* The index type of the locale unit value. It types conversion of units of
* values that don't start at 0 (i.e. quarters).
*/
/**
* Converts the unit value to the tuple of values.
*/
/**
* The tuple of localized era values. The first element represents BC,
* the second element represents AD.
*/
/**
* The tuple of localized quarter values. The first element represents Q1.
*/
/**
* The tuple of localized day values. The first element represents Sunday.
*/
/**
* The tuple of localized month values. The first element represents January.
*/
function buildLocalizeFn(args) {
	return (value, options) => {
		const context = options?.context ? String(options.context) : "standalone";
		let valuesArray;
		if (context === "formatting" && args.formattingValues) {
			const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
			const width = options?.width ? String(options.width) : defaultWidth;
			valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
		} else {
			const defaultWidth = args.defaultWidth;
			const width = options?.width ? String(options.width) : args.defaultWidth;
			valuesArray = args.values[width] || args.values[defaultWidth];
		}
		const index = args.argumentCallback ? args.argumentCallback(value) : value;
		return valuesArray[index];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
	return (string, options = {}) => {
		const width = options.width;
		const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
		const matchResult = string.match(matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
		const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : findKey(parsePatterns, (pattern) => pattern.test(matchedString));
		let value;
		value = args.valueCallback ? args.valueCallback(key) : key;
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
function findKey(object, predicate) {
	for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) return key;
}
function findIndex(array, predicate) {
	for (let key = 0; key < array.length; key++) if (predicate(array[key])) return key;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
	return (string, options = {}) => {
		const matchResult = string.match(args.matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parseResult = string.match(args.parsePattern);
		if (!parseResult) return null;
		let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constants.js
/**
* @constant
* @name daysInYear
* @summary Days in 1 year.
*
* @description
* How many days in a year.
*
* One years equals 365.2425 days according to the formula:
*
* > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
* > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
*/
var daysInYear = 365.2425;
-(Math.pow(10, 8) * 24 * 60 * 60 * 1e3);
/**
* @constant
* @name millisecondsInWeek
* @summary Milliseconds in 1 week.
*/
var millisecondsInWeek = 6048e5;
/**
* @constant
* @name millisecondsInDay
* @summary Milliseconds in 1 day.
*/
var millisecondsInDay = 864e5;
/**
* @constant
* @name millisecondsInMinute
* @summary Milliseconds in 1 minute
*/
var millisecondsInMinute = 6e4;
/**
* @constant
* @name millisecondsInHour
* @summary Milliseconds in 1 hour
*/
var millisecondsInHour = 36e5;
/**
* @constant
* @name millisecondsInSecond
* @summary Milliseconds in 1 second
*/
var millisecondsInSecond = 1e3;
/**
* @constant
* @name secondsInDay
* @summary Seconds in 1 day.
*/
var secondsInDay = 86400;
secondsInDay * 7;
secondsInDay * daysInYear / 12 * 3;
/**
* @constant
* @name constructFromSymbol
* @summary Symbol enabling Date extensions to inherit properties from the reference date.
*
* The symbol is used to enable the `constructFrom` function to construct a date
* using a reference date and a value. It allows to transfer extra properties
* from the reference date to the new date. It's useful for extensions like
* [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
* a constructor argument.
*/
var constructFromSymbol = Symbol.for("constructDateFrom");
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constructFrom.js
/**
* @name constructFrom
* @category Generic Helpers
* @summary Constructs a date using the reference date and the value
*
* @description
* The function constructs a new date using the constructor from the reference
* date and the given value. It helps to build generic functions that accept
* date extensions.
*
* It defaults to `Date` if the passed reference date is a number or a string.
*
* Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The reference date to take constructor from
* @param value - The value to create the date
*
* @returns Date initialized using the given date and value
*
* @example
* import { constructFrom } from "./constructFrom/date-fns";
*
* // A function that clones a date preserving the original type
* function cloneDate<DateType extends Date>(date: DateType): DateType {
*   return constructFrom(
*     date, // Use constructor from the given date
*     date.getTime() // Use the date value to create a new date
*   );
* }
*/
function constructFrom(date, value) {
	if (typeof date === "function") return date(value);
	if (date && typeof date === "object" && constructFromSymbol in date) return date[constructFromSymbol](value);
	if (date instanceof Date) return new date.constructor(value);
	return new Date(value);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
	const normalize = constructFrom.bind(null, context || dates.find((date) => typeof date === "object"));
	return dates.map(normalize);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
	return defaultOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
/**
* @name toDate
* @category Common Helpers
* @summary Convert the given argument to an instance of Date.
*
* @description
* Convert the given argument to an instance of Date.
*
* If the argument is an instance of Date, the function returns its clone.
*
* If the argument is a number, it is treated as a timestamp.
*
* If the argument is none of the above, the function returns Invalid Date.
*
* Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param argument - The value to convert
*
* @returns The parsed date in the local time zone
*
* @example
* // Clone the date:
* const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
* //=> Tue Feb 11 2014 11:30:30
*
* @example
* // Convert the timestamp to date:
* const result = toDate(1392098430000)
* //=> Tue Feb 11 2014 11:30:30
*/
function toDate(argument, context) {
	return constructFrom(context || argument, argument);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeek.js
/**
* The {@link startOfWeek} function options.
*/
/**
* @name startOfWeek
* @category Week Helpers
* @summary Return the start of a week for the given date.
*
* @description
* Return the start of a week for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a week
*
* @example
* // The start of a week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Sun Aug 31 2014 00:00:00
*
* @example
* // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfWeek(date, options) {
	const defaultOptions = getDefaultOptions();
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const _date = toDate(date, options?.in);
	const day = _date.getDay();
	const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
	_date.setDate(_date.getDate() - diff);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameWeek.js
/**
* The {@link isSameWeek} function options.
*/
/**
* @name isSameWeek
* @category Week Helpers
* @summary Are the given dates in the same week (and month and year)?
*
* @description
* Are the given dates in the same week (and month and year)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same week (and month and year)
*
* @example
* // Are 31 August 2014 and 4 September 2014 in the same week?
* const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
* //=> true
*
* @example
* // If week starts with Monday,
* // are 31 August 2014 and 4 September 2014 in the same week?
* const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
*   weekStartsOn: 1
* })
* //=> false
*
* @example
* // Are 1 January 2014 and 1 January 2015 in the same week?
* const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
* //=> false
*/
function isSameWeek(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return +startOfWeek(laterDate_, options) === +startOfWeek(earlierDate_, options);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-CN/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "不到 1 秒",
		other: "不到 {{count}} 秒"
	},
	xSeconds: {
		one: "1 秒",
		other: "{{count}} 秒"
	},
	halfAMinute: "半分钟",
	lessThanXMinutes: {
		one: "不到 1 分钟",
		other: "不到 {{count}} 分钟"
	},
	xMinutes: {
		one: "1 分钟",
		other: "{{count}} 分钟"
	},
	xHours: {
		one: "1 小时",
		other: "{{count}} 小时"
	},
	aboutXHours: {
		one: "大约 1 小时",
		other: "大约 {{count}} 小时"
	},
	xDays: {
		one: "1 天",
		other: "{{count}} 天"
	},
	aboutXWeeks: {
		one: "大约 1 个星期",
		other: "大约 {{count}} 个星期"
	},
	xWeeks: {
		one: "1 个星期",
		other: "{{count}} 个星期"
	},
	aboutXMonths: {
		one: "大约 1 个月",
		other: "大约 {{count}} 个月"
	},
	xMonths: {
		one: "1 个月",
		other: "{{count}} 个月"
	},
	aboutXYears: {
		one: "大约 1 年",
		other: "大约 {{count}} 年"
	},
	xYears: {
		one: "1 年",
		other: "{{count}} 年"
	},
	overXYears: {
		one: "超过 1 年",
		other: "超过 {{count}} 年"
	},
	almostXYears: {
		one: "将近 1 年",
		other: "将近 {{count}} 年"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) {
		if (options.comparison && options.comparison > 0) return result + "内";
		else return result + "前";
	}
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "y'年'M'月'd'日' EEEE",
			long: "y'年'M'月'd'日'",
			medium: "yyyy-MM-dd",
			short: "yy-MM-dd"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "zzzz a h:mm:ss",
			long: "z a h:mm:ss",
			medium: "a h:mm:ss",
			short: "a h:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-CN/_lib/formatRelative.js
function checkWeek(date, baseDate, options) {
	const baseFormat = "eeee p";
	if (isSameWeek(date, baseDate, options)) return baseFormat;
	else if (date.getTime() > baseDate.getTime()) return "'下个'eeee p";
	return "'上个'eeee p";
}
var formatRelativeLocale = {
	lastWeek: checkWeek,
	yesterday: "'昨天' p",
	today: "'今天' p",
	tomorrow: "'明天' p",
	nextWeek: checkWeek,
	other: "PP p"
};
var formatRelative = (token, date, baseDate, options) => {
	const format = formatRelativeLocale[token];
	if (typeof format === "function") return format(date, baseDate, options);
	return format;
};
//#endregion
//#region ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-CN/_lib/localize.js
var eraValues = {
	narrow: ["前", "公元"],
	abbreviated: ["前", "公元"],
	wide: ["公元前", "公元"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"第一季",
		"第二季",
		"第三季",
		"第四季"
	],
	wide: [
		"第一季度",
		"第二季度",
		"第三季度",
		"第四季度"
	]
};
var monthValues = {
	narrow: [
		"一",
		"二",
		"三",
		"四",
		"五",
		"六",
		"七",
		"八",
		"九",
		"十",
		"十一",
		"十二"
	],
	abbreviated: [
		"1月",
		"2月",
		"3月",
		"4月",
		"5月",
		"6月",
		"7月",
		"8月",
		"9月",
		"10月",
		"11月",
		"12月"
	],
	wide: [
		"一月",
		"二月",
		"三月",
		"四月",
		"五月",
		"六月",
		"七月",
		"八月",
		"九月",
		"十月",
		"十一月",
		"十二月"
	]
};
var dayValues = {
	narrow: [
		"日",
		"一",
		"二",
		"三",
		"四",
		"五",
		"六"
	],
	short: [
		"日",
		"一",
		"二",
		"三",
		"四",
		"五",
		"六"
	],
	abbreviated: [
		"周日",
		"周一",
		"周二",
		"周三",
		"周四",
		"周五",
		"周六"
	],
	wide: [
		"星期日",
		"星期一",
		"星期二",
		"星期三",
		"星期四",
		"星期五",
		"星期六"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "上",
		pm: "下",
		midnight: "凌晨",
		noon: "午",
		morning: "早",
		afternoon: "下午",
		evening: "晚",
		night: "夜"
	},
	abbreviated: {
		am: "上午",
		pm: "下午",
		midnight: "凌晨",
		noon: "中午",
		morning: "早晨",
		afternoon: "中午",
		evening: "晚上",
		night: "夜间"
	},
	wide: {
		am: "上午",
		pm: "下午",
		midnight: "凌晨",
		noon: "中午",
		morning: "早晨",
		afternoon: "中午",
		evening: "晚上",
		night: "夜间"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "上",
		pm: "下",
		midnight: "凌晨",
		noon: "午",
		morning: "早",
		afternoon: "下午",
		evening: "晚",
		night: "夜"
	},
	abbreviated: {
		am: "上午",
		pm: "下午",
		midnight: "凌晨",
		noon: "中午",
		morning: "早晨",
		afternoon: "中午",
		evening: "晚上",
		night: "夜间"
	},
	wide: {
		am: "上午",
		pm: "下午",
		midnight: "凌晨",
		noon: "中午",
		morning: "早晨",
		afternoon: "中午",
		evening: "晚上",
		night: "夜间"
	}
};
var ordinalNumber = (dirtyNumber, options) => {
	const number = Number(dirtyNumber);
	switch (options?.unit) {
		case "date": return number.toString() + "日";
		case "hour": return number.toString() + "时";
		case "minute": return number.toString() + "分";
		case "second": return number.toString() + "秒";
		default: return "第 " + number.toString();
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/locales/date/zhCN.mjs
var dateZhCN = {
	name: "zh-CN",
	locale: {
		code: "zh-CN",
		formatDistance,
		formatLong,
		formatRelative,
		localize: {
			ordinalNumber,
			era: buildLocalizeFn({
				values: eraValues,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues,
				defaultFormattingWidth: "wide"
			})
		},
		match: {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: /^(第\s*)?\d+(日|时|分|秒)?/i,
				parsePattern: /\d+/i,
				valueCallback: (value) => parseInt(value, 10)
			}),
			era: buildMatchFn({
				matchPatterns: {
					narrow: /^(前)/i,
					abbreviated: /^(前)/i,
					wide: /^(公元前|公元)/i
				},
				defaultMatchWidth: "wide",
				parsePatterns: { any: [/^(前)/i, /^(公元)/i] },
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: {
					narrow: /^[1234]/i,
					abbreviated: /^第[一二三四]刻/i,
					wide: /^第[一二三四]刻钟/i
				},
				defaultMatchWidth: "wide",
				parsePatterns: { any: [
					/(1|一)/i,
					/(2|二)/i,
					/(3|三)/i,
					/(4|四)/i
				] },
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: {
					narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
					abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
					wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
				},
				defaultMatchWidth: "wide",
				parsePatterns: {
					narrow: [
						/^一/i,
						/^二/i,
						/^三/i,
						/^四/i,
						/^五/i,
						/^六/i,
						/^七/i,
						/^八/i,
						/^九/i,
						/^十(?!(一|二))/i,
						/^十一/i,
						/^十二/i
					],
					any: [
						/^一|1/i,
						/^二|2/i,
						/^三|3/i,
						/^四|4/i,
						/^五|5/i,
						/^六|6/i,
						/^七|7/i,
						/^八|8/i,
						/^九|9/i,
						/^十(?!(一|二))|10/i,
						/^十一|11/i,
						/^十二|12/i
					]
				},
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: {
					narrow: /^[一二三四五六日]/i,
					short: /^[一二三四五六日]/i,
					abbreviated: /^周[一二三四五六日]/i,
					wide: /^星期[一二三四五六日]/i
				},
				defaultMatchWidth: "wide",
				parsePatterns: { any: [
					/日/i,
					/一/i,
					/二/i,
					/三/i,
					/四/i,
					/五/i,
					/六/i
				] },
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i },
				defaultMatchWidth: "any",
				parsePatterns: { any: {
					am: /^上午?/i,
					pm: /^下午?/i,
					midnight: /^午夜/i,
					noon: /^[中正]午/i,
					morning: /^早上/i,
					afternoon: /^下午/i,
					evening: /^晚上?/i,
					night: /^凌晨/i
				} },
				defaultParseWidth: "any"
			})
		},
		options: {
			weekStartsOn: 1,
			firstWeekContainsDate: 4
		}
	}
};
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
/** Detect free variable `self`. */
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function("return this")();
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
/** Built-in value references. */
var Symbol$1 = root.Symbol;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js
/** Used for built-in method references. */
var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$4.hasOwnProperty;
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString$1 = objectProto$4.toString;
/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
/**
* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the raw `toStringTag`.
*/
function getRawTag(value) {
	var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
	try {
		value[symToStringTag$1] = void 0;
		var unmasked = true;
	} catch (e) {}
	var result = nativeObjectToString$1.call(value);
	if (unmasked) {
		if (isOwn) value[symToStringTag$1] = tag;
		else delete value[symToStringTag$1];
	}
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString = Object.prototype.toString;
/**
* Converts `value` to a string using `Object.prototype.toString`.
*
* @private
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
*/
function objectToString(value) {
	return nativeObjectToString.call(value);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
/** `Object#toString` result references. */
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
/**
* The base implementation of `getTag` without fallbacks for buggy environments.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
function baseGetTag(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
/**
* Checks if `value` is object-like. A value is object-like if it's not `null`
* and has a `typeof` result of "object".
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
* @example
*
* _.isObjectLike({});
* // => true
*
* _.isObjectLike([1, 2, 3]);
* // => true
*
* _.isObjectLike(_.noop);
* // => false
*
* _.isObjectLike(null);
* // => false
*/
function isObjectLike(value) {
	return value != null && typeof value == "object";
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
/** `Object#toString` result references. */
var symbolTag = "[object Symbol]";
/**
* Checks if `value` is classified as a `Symbol` primitive or object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
* @example
*
* _.isSymbol(Symbol.iterator);
* // => true
*
* _.isSymbol('abc');
* // => false
*/
function isSymbol(value) {
	return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayMap.js
/**
* A specialized version of `_.map` for arrays without support for iteratee
* shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the new mapped array.
*/
function arrayMap(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length, result = Array(length);
	while (++index < length) result[index] = iteratee(array[index], index, array);
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
/**
* Checks if `value` is classified as an `Array` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an array, else `false`.
* @example
*
* _.isArray([1, 2, 3]);
* // => true
*
* _.isArray(document.body.children);
* // => false
*
* _.isArray('abc');
* // => false
*
* _.isArray(_.noop);
* // => false
*/
var isArray = Array.isArray;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseToString.js
/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
/**
* The base implementation of `_.toString` which doesn't convert nullish
* values to empty strings.
*
* @private
* @param {*} value The value to process.
* @returns {string} Returns the string.
*/
function baseToString(value) {
	if (typeof value == "string") return value;
	if (isArray(value)) return arrayMap(value, baseToString) + "";
	if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
/**
* Checks if `value` is the
* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an object, else `false`.
* @example
*
* _.isObject({});
* // => true
*
* _.isObject([1, 2, 3]);
* // => true
*
* _.isObject(_.noop);
* // => true
*
* _.isObject(null);
* // => false
*/
function isObject(value) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
/**
* This method returns the first argument it receives.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Util
* @param {*} value Any value.
* @returns {*} Returns `value`.
* @example
*
* var object = { 'a': 1 };
*
* console.log(_.identity(object) === object);
* // => true
*/
function identity(value) {
	return value;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
/** `Object#toString` result references. */
var asyncTag = "[object AsyncFunction]";
var funcTag$1 = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
/**
* Checks if `value` is classified as a `Function` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a function, else `false`.
* @example
*
* _.isFunction(_);
* // => true
*
* _.isFunction(/abc/);
* // => false
*/
function isFunction(value) {
	if (!isObject(value)) return false;
	var tag = baseGetTag(value);
	return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_coreJsData.js
/** Used to detect overreaching core-js shims. */
var coreJsData = root["__core-js_shared__"];
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isMasked.js
/** Used to detect methods masquerading as native. */
var maskSrcKey = function() {
	var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
	return uid ? "Symbol(src)_1." + uid : "";
}();
/**
* Checks if `func` has its source masked.
*
* @private
* @param {Function} func The function to check.
* @returns {boolean} Returns `true` if `func` is masked, else `false`.
*/
function isMasked(func) {
	return !!maskSrcKey && maskSrcKey in func;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toSource.js
/** Used to resolve the decompiled source of functions. */
var funcToString$2 = Function.prototype.toString;
/**
* Converts `func` to its source code.
*
* @private
* @param {Function} func The function to convert.
* @returns {string} Returns the source code.
*/
function toSource(func) {
	if (func != null) {
		try {
			return funcToString$2.call(func);
		} catch (e) {}
		try {
			return func + "";
		} catch (e) {}
	}
	return "";
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNative.js
/**
* Used to match `RegExp`
* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
*/
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */
var funcProto$1 = Function.prototype;
var objectProto$3 = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$3.hasOwnProperty;
/** Used to detect if a method is native. */
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
* The base implementation of `_.isNative` without bad shim checks.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a native function,
*  else `false`.
*/
function baseIsNative(value) {
	if (!isObject(value) || isMasked(value)) return false;
	return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getValue.js
/**
* Gets the value at `key` of `object`.
*
* @private
* @param {Object} [object] The object to query.
* @param {string} key The key of the property to get.
* @returns {*} Returns the property value.
*/
function getValue(object, key) {
	return object == null ? void 0 : object[key];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js
/**
* Gets the native function at `key` of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the method to get.
* @returns {*} Returns the function if it's native, else `undefined`.
*/
function getNative(object, key) {
	var value = getValue(object, key);
	return baseIsNative(value) ? value : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseCreate.js
/** Built-in value references. */
var objectCreate = Object.create;
/**
* The base implementation of `_.create` without support for assigning
* properties to the created object.
*
* @private
* @param {Object} proto The object to inherit from.
* @returns {Object} Returns the new object.
*/
var baseCreate = function() {
	function object() {}
	return function(proto) {
		if (!isObject(proto)) return {};
		if (objectCreate) return objectCreate(proto);
		object.prototype = proto;
		var result = new object();
		object.prototype = void 0;
		return result;
	};
}();
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_apply.js
/**
* A faster alternative to `Function#apply`, this function invokes `func`
* with the `this` binding of `thisArg` and the arguments of `args`.
*
* @private
* @param {Function} func The function to invoke.
* @param {*} thisArg The `this` binding of `func`.
* @param {Array} args The arguments to invoke `func` with.
* @returns {*} Returns the result of `func`.
*/
function apply(func, thisArg, args) {
	switch (args.length) {
		case 0: return func.call(thisArg);
		case 1: return func.call(thisArg, args[0]);
		case 2: return func.call(thisArg, args[0], args[1]);
		case 3: return func.call(thisArg, args[0], args[1], args[2]);
	}
	return func.apply(thisArg, args);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyArray.js
/**
* Copies the values of `source` to `array`.
*
* @private
* @param {Array} source The array to copy values from.
* @param {Array} [array=[]] The array to copy values to.
* @returns {Array} Returns `array`.
*/
function copyArray(source, array) {
	var index = -1, length = source.length;
	array || (array = Array(length));
	while (++index < length) array[index] = source[index];
	return array;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
/**
* Creates a function that'll short out and invoke `identity` instead
* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
* milliseconds.
*
* @private
* @param {Function} func The function to restrict.
* @returns {Function} Returns the new shortable function.
*/
function shortOut(func) {
	var count = 0, lastCalled = 0;
	return function() {
		var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
		lastCalled = stamp;
		if (remaining > 0) {
			if (++count >= HOT_COUNT) return arguments[0];
		} else count = 0;
		return func.apply(void 0, arguments);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/constant.js
/**
* Creates a function that returns `value`.
*
* @static
* @memberOf _
* @since 2.4.0
* @category Util
* @param {*} value The value to return from the new function.
* @returns {Function} Returns the new constant function.
* @example
*
* var objects = _.times(2, _.constant({ 'a': 1 }));
*
* console.log(objects);
* // => [{ 'a': 1 }, { 'a': 1 }]
*
* console.log(objects[0] === objects[1]);
* // => true
*/
function constant(value) {
	return function() {
		return value;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
	try {
		var func = getNative(Object, "defineProperty");
		func({}, "", {});
		return func;
	} catch (e) {}
}();
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToString.js
/**
* Sets the `toString` method of `func` to return `string`.
*
* @private
* @param {Function} func The function to modify.
* @param {Function} string The `toString` result.
* @returns {Function} Returns `func`.
*/
var setToString = shortOut(!defineProperty ? identity : function(func, string) {
	return defineProperty(func, "toString", {
		"configurable": true,
		"enumerable": false,
		"value": constant(string),
		"writable": true
	});
});
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;
/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
* Checks if `value` is a valid array-like index.
*
* @private
* @param {*} value The value to check.
* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
*/
function isIndex(value, length) {
	var type = typeof value;
	length = length == null ? MAX_SAFE_INTEGER$1 : length;
	return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssignValue.js
/**
* The base implementation of `assignValue` and `assignMergeValue` without
* value checks.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function baseAssignValue(object, key, value) {
	if (key == "__proto__" && defineProperty) defineProperty(object, key, {
		"configurable": true,
		"enumerable": true,
		"value": value,
		"writable": true
	});
	else object[key] = value;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/eq.js
/**
* Performs a
* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* comparison between two values to determine if they are equivalent.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
* @example
*
* var object = { 'a': 1 };
* var other = { 'a': 1 };
*
* _.eq(object, object);
* // => true
*
* _.eq(object, other);
* // => false
*
* _.eq('a', 'a');
* // => true
*
* _.eq('a', Object('a'));
* // => false
*
* _.eq(NaN, NaN);
* // => true
*/
function eq(value, other) {
	return value === other || value !== value && other !== other;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assignValue.js
/** Used to check objects for own properties. */
var hasOwnProperty$6 = Object.prototype.hasOwnProperty;
/**
* Assigns `value` to `key` of `object` if the existing value is not equivalent
* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* for equality comparisons.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function assignValue(object, key, value) {
	var objValue = object[key];
	if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyObject.js
/**
* Copies properties of `source` to `object`.
*
* @private
* @param {Object} source The object to copy properties from.
* @param {Array} props The property identifiers to copy.
* @param {Object} [object={}] The object to copy properties to.
* @param {Function} [customizer] The function to customize copied values.
* @returns {Object} Returns `object`.
*/
function copyObject(source, props, object, customizer) {
	var isNew = !object;
	object || (object = {});
	var index = -1, length = props.length;
	while (++index < length) {
		var key = props[index];
		var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
		if (newValue === void 0) newValue = source[key];
		if (isNew) baseAssignValue(object, key, newValue);
		else assignValue(object, key, newValue);
	}
	return object;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
/**
* A specialized version of `baseRest` which transforms the rest array.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @param {number} [start=func.length-1] The start position of the rest parameter.
* @param {Function} transform The rest array transform.
* @returns {Function} Returns the new function.
*/
function overRest(func, start, transform) {
	start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
	return function() {
		var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
		while (++index < length) array[index] = args[start + index];
		index = -1;
		var otherArgs = Array(start + 1);
		while (++index < start) otherArgs[index] = args[index];
		otherArgs[start] = transform(array);
		return apply(func, this, otherArgs);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRest.js
/**
* The base implementation of `_.rest` which doesn't validate or coerce arguments.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @param {number} [start=func.length-1] The start position of the rest parameter.
* @returns {Function} Returns the new function.
*/
function baseRest(func, start) {
	return setToString(overRest(func, start, identity), func + "");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
* Checks if `value` is a valid array-like length.
*
* **Note:** This method is loosely based on
* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
* @example
*
* _.isLength(3);
* // => true
*
* _.isLength(Number.MIN_VALUE);
* // => false
*
* _.isLength(Infinity);
* // => false
*
* _.isLength('3');
* // => false
*/
function isLength(value) {
	return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
/**
* Checks if `value` is array-like. A value is considered array-like if it's
* not a function and has a `value.length` that's an integer greater than or
* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
* @example
*
* _.isArrayLike([1, 2, 3]);
* // => true
*
* _.isArrayLike(document.body.children);
* // => true
*
* _.isArrayLike('abc');
* // => true
*
* _.isArrayLike(_.noop);
* // => false
*/
function isArrayLike(value) {
	return value != null && isLength(value.length) && !isFunction(value);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIterateeCall.js
/**
* Checks if the given arguments are from an iteratee call.
*
* @private
* @param {*} value The potential iteratee value argument.
* @param {*} index The potential iteratee index or key argument.
* @param {*} object The potential iteratee object argument.
* @returns {boolean} Returns `true` if the arguments are from an iteratee call,
*  else `false`.
*/
function isIterateeCall(value, index, object) {
	if (!isObject(object)) return false;
	var type = typeof index;
	if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
	return false;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createAssigner.js
/**
* Creates a function like `_.assign`.
*
* @private
* @param {Function} assigner The function to assign values.
* @returns {Function} Returns the new assigner function.
*/
function createAssigner(assigner) {
	return baseRest(function(object, sources) {
		var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
		customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
		if (guard && isIterateeCall(sources[0], sources[1], guard)) {
			customizer = length < 3 ? void 0 : customizer;
			length = 1;
		}
		object = Object(object);
		while (++index < length) {
			var source = sources[index];
			if (source) assigner(object, source, index, customizer);
		}
		return object;
	});
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var objectProto$2 = Object.prototype;
/**
* Checks if `value` is likely a prototype object.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
*/
function isPrototype(value) {
	var Ctor = value && value.constructor;
	return value === (typeof Ctor == "function" && Ctor.prototype || objectProto$2);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js
/**
* The base implementation of `_.times` without support for iteratee shorthands
* or max array length checks.
*
* @private
* @param {number} n The number of times to invoke `iteratee`.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the array of results.
*/
function baseTimes(n, iteratee) {
	var index = -1, result = Array(n);
	while (++index < n) result[index] = iteratee(index);
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js
/** `Object#toString` result references. */
var argsTag$1 = "[object Arguments]";
/**
* The base implementation of `_.isArguments`.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*/
function baseIsArguments(value) {
	return isObjectLike(value) && baseGetTag(value) == argsTag$1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js
/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$1.hasOwnProperty;
/** Built-in value references. */
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
/**
* Checks if `value` is likely an `arguments` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*  else `false`.
* @example
*
* _.isArguments(function() { return arguments; }());
* // => true
*
* _.isArguments([1, 2, 3]);
* // => false
*/
var isArguments = baseIsArguments(function() {
	return arguments;
}()) ? baseIsArguments : function(value) {
	return isObjectLike(value) && hasOwnProperty$5.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
/**
* This method returns `false`.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {boolean} Returns `false`.
* @example
*
* _.times(2, _.stubFalse);
* // => [false, false]
*/
function stubFalse() {
	return false;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js
/** Detect free variable `exports`. */
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
/** Built-in value references. */
var Buffer$1 = freeModule$2 && freeModule$2.exports === freeExports$2 ? root.Buffer : void 0;
/**
* Checks if `value` is a buffer.
*
* @static
* @memberOf _
* @since 4.3.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
* @example
*
* _.isBuffer(new Buffer(2));
* // => true
*
* _.isBuffer(new Uint8Array(2));
* // => false
*/
var isBuffer = (Buffer$1 ? Buffer$1.isBuffer : void 0) || stubFalse;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js
/** `Object#toString` result references. */
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag$1 = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
* The base implementation of `_.isTypedArray` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
*/
function baseIsTypedArray(value) {
	return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
/**
* The base implementation of `_.unary` without support for storing metadata.
*
* @private
* @param {Function} func The function to cap arguments for.
* @returns {Function} Returns the new capped function.
*/
function baseUnary(func) {
	return function(value) {
		return func(value);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js
/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
/** Detect free variable `process` from Node.js. */
var freeProcess = freeModule$1 && freeModule$1.exports === freeExports$1 && freeGlobal.process;
/** Used to access faster Node.js helpers. */
var nodeUtil = function() {
	try {
		var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
		if (types) return types;
		return freeProcess && freeProcess.binding && freeProcess.binding("util");
	} catch (e) {}
}();
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
* Checks if `value` is classified as a typed array.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
* @example
*
* _.isTypedArray(new Uint8Array);
* // => true
*
* _.isTypedArray([]);
* // => false
*/
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayLikeKeys.js
/** Used to check objects for own properties. */
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
/**
* Creates an array of the enumerable property names of the array-like `value`.
*
* @private
* @param {*} value The value to query.
* @param {boolean} inherited Specify returning inherited property names.
* @returns {Array} Returns the array of property names.
*/
function arrayLikeKeys(value, inherited) {
	var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
	for (var key in value) if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
/**
* Creates a unary function that invokes `func` with its argument transformed.
*
* @private
* @param {Function} func The function to wrap.
* @param {Function} transform The argument transform.
* @returns {Function} Returns the new function.
*/
function overArg(func, transform) {
	return function(arg) {
		return func(transform(arg));
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeysIn.js
/**
* This function is like
* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* except that it includes inherited enumerable properties.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function nativeKeysIn(object) {
	var result = [];
	if (object != null) for (var key in Object(object)) result.push(key);
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeysIn.js
/** Used to check objects for own properties. */
var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
/**
* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeysIn(object) {
	if (!isObject(object)) return nativeKeysIn(object);
	var isProto = isPrototype(object), result = [];
	for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object, key)))) result.push(key);
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keysIn.js
/**
* Creates an array of the own and inherited enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keysIn(new Foo);
* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
*/
function keysIn(object) {
	return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative(Object, "create");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashClear.js
/**
* Removes all key-value entries from the hash.
*
* @private
* @name clear
* @memberOf Hash
*/
function hashClear() {
	this.__data__ = nativeCreate ? nativeCreate(null) : {};
	this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashDelete.js
/**
* Removes `key` and its value from the hash.
*
* @private
* @name delete
* @memberOf Hash
* @param {Object} hash The hash to modify.
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function hashDelete(key) {
	var result = this.has(key) && delete this.__data__[key];
	this.size -= result ? 1 : 0;
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashGet.js
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
/** Used to check objects for own properties. */
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
/**
* Gets the hash value for `key`.
*
* @private
* @name get
* @memberOf Hash
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function hashGet(key) {
	var data = this.__data__;
	if (nativeCreate) {
		var result = data[key];
		return result === HASH_UNDEFINED$1 ? void 0 : result;
	}
	return hasOwnProperty$2.call(data, key) ? data[key] : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashHas.js
/** Used to check objects for own properties. */
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
/**
* Checks if a hash value for `key` exists.
*
* @private
* @name has
* @memberOf Hash
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function hashHas(key) {
	var data = this.__data__;
	return nativeCreate ? data[key] !== void 0 : hasOwnProperty$1.call(data, key);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashSet.js
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
* Sets the hash `key` to `value`.
*
* @private
* @name set
* @memberOf Hash
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the hash instance.
*/
function hashSet(key, value) {
	var data = this.__data__;
	this.size += this.has(key) ? 0 : 1;
	data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Hash.js
/**
* Creates a hash object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Hash(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheClear.js
/**
* Removes all key-value entries from the list cache.
*
* @private
* @name clear
* @memberOf ListCache
*/
function listCacheClear() {
	this.__data__ = [];
	this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assocIndexOf.js
/**
* Gets the index at which the `key` is found in `array` of key-value pairs.
*
* @private
* @param {Array} array The array to inspect.
* @param {*} key The key to search for.
* @returns {number} Returns the index of the matched value, else `-1`.
*/
function assocIndexOf(array, key) {
	var length = array.length;
	while (length--) if (eq(array[length][0], key)) return length;
	return -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheDelete.js
/** Built-in value references. */
var splice = Array.prototype.splice;
/**
* Removes `key` and its value from the list cache.
*
* @private
* @name delete
* @memberOf ListCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function listCacheDelete(key) {
	var data = this.__data__, index = assocIndexOf(data, key);
	if (index < 0) return false;
	if (index == data.length - 1) data.pop();
	else splice.call(data, index, 1);
	--this.size;
	return true;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheGet.js
/**
* Gets the list cache value for `key`.
*
* @private
* @name get
* @memberOf ListCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function listCacheGet(key) {
	var data = this.__data__, index = assocIndexOf(data, key);
	return index < 0 ? void 0 : data[index][1];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheHas.js
/**
* Checks if a list cache value for `key` exists.
*
* @private
* @name has
* @memberOf ListCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function listCacheHas(key) {
	return assocIndexOf(this.__data__, key) > -1;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheSet.js
/**
* Sets the list cache `key` to `value`.
*
* @private
* @name set
* @memberOf ListCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the list cache instance.
*/
function listCacheSet(key, value) {
	var data = this.__data__, index = assocIndexOf(data, key);
	if (index < 0) {
		++this.size;
		data.push([key, value]);
	} else data[index][1] = value;
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_ListCache.js
/**
* Creates an list cache object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function ListCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Map.js
var Map$1 = getNative(root, "Map");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheClear.js
/**
* Removes all key-value entries from the map.
*
* @private
* @name clear
* @memberOf MapCache
*/
function mapCacheClear() {
	this.size = 0;
	this.__data__ = {
		"hash": new Hash(),
		"map": new (Map$1 || ListCache)(),
		"string": new Hash()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isKeyable.js
/**
* Checks if `value` is suitable for use as unique object key.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
*/
function isKeyable(value) {
	var type = typeof value;
	return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getMapData.js
/**
* Gets the data for `map`.
*
* @private
* @param {Object} map The map to query.
* @param {string} key The reference key.
* @returns {*} Returns the map data.
*/
function getMapData(map, key) {
	var data = map.__data__;
	return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheDelete.js
/**
* Removes `key` and its value from the map.
*
* @private
* @name delete
* @memberOf MapCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function mapCacheDelete(key) {
	var result = getMapData(this, key)["delete"](key);
	this.size -= result ? 1 : 0;
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheGet.js
/**
* Gets the map value for `key`.
*
* @private
* @name get
* @memberOf MapCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function mapCacheGet(key) {
	return getMapData(this, key).get(key);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheHas.js
/**
* Checks if a map value for `key` exists.
*
* @private
* @name has
* @memberOf MapCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function mapCacheHas(key) {
	return getMapData(this, key).has(key);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheSet.js
/**
* Sets the map `key` to `value`.
*
* @private
* @name set
* @memberOf MapCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the map cache instance.
*/
function mapCacheSet(key, value) {
	var data = getMapData(this, key), size = data.size;
	data.set(key, value);
	this.size += data.size == size ? 0 : 1;
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_MapCache.js
/**
* Creates a map cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function MapCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toString.js
/**
* Converts `value` to a string. An empty string is returned for `null`
* and `undefined` values. The sign of `-0` is preserved.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
* @example
*
* _.toString(null);
* // => ''
*
* _.toString(-0);
* // => '-0'
*
* _.toString([1, 2, 3]);
* // => '1,2,3'
*/
function toString(value) {
	return value == null ? "" : baseToString(value);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getPrototype.js
/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isPlainObject.js
/** `Object#toString` result references. */
var objectTag = "[object Object]";
/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);
/**
* Checks if `value` is a plain object, that is, an object created by the
* `Object` constructor or one with a `[[Prototype]]` of `null`.
*
* @static
* @memberOf _
* @since 0.8.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
* @example
*
* function Foo() {
*   this.a = 1;
* }
*
* _.isPlainObject(new Foo);
* // => false
*
* _.isPlainObject([1, 2, 3]);
* // => false
*
* _.isPlainObject({ 'x': 0, 'y': 0 });
* // => true
*
* _.isPlainObject(Object.create(null));
* // => true
*/
function isPlainObject$1(value) {
	if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
	var proto = getPrototype(value);
	if (proto === null) return true;
	var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
	return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseSlice.js
/**
* The base implementation of `_.slice` without an iteratee call guard.
*
* @private
* @param {Array} array The array to slice.
* @param {number} [start=0] The start position.
* @param {number} [end=array.length] The end position.
* @returns {Array} Returns the slice of `array`.
*/
function baseSlice(array, start, end) {
	var index = -1, length = array.length;
	if (start < 0) start = -start > length ? 0 : length + start;
	end = end > length ? length : end;
	if (end < 0) end += length;
	length = start > end ? 0 : end - start >>> 0;
	start >>>= 0;
	var result = Array(length);
	while (++index < length) result[index] = array[index + start];
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_castSlice.js
/**
* Casts `array` to a slice if it's needed.
*
* @private
* @param {Array} array The array to inspect.
* @param {number} start The start position.
* @param {number} [end=array.length] The end position.
* @returns {Array} Returns the cast slice.
*/
function castSlice(array, start, end) {
	var length = array.length;
	end = end === void 0 ? length : end;
	return !start && end >= length ? array : baseSlice(array, start, end);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hasUnicode.js
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
/**
* Checks if `string` contains Unicode symbols.
*
* @private
* @param {string} string The string to inspect.
* @returns {boolean} Returns `true` if a symbol is found, else `false`.
*/
function hasUnicode(string) {
	return reHasUnicode.test(string);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_asciiToArray.js
/**
* Converts an ASCII `string` to an array.
*
* @private
* @param {string} string The string to convert.
* @returns {Array} Returns the converted array.
*/
function asciiToArray(string) {
	return string.split("");
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_unicodeToArray.js
/** Used to compose unicode character classes. */
var rsAstralRange = "\\ud800-\\udfff";
var rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff";
var rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */
var rsAstral = "[" + rsAstralRange + "]";
var rsCombo = "[" + rsComboRange + "]";
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
var rsNonAstral = "[^" + rsAstralRange + "]";
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */
var reOptMod = rsModifier + "?";
var rsOptVar = "[" + rsVarRange + "]?";
var rsOptJoin = "(?:" + rsZWJ + "(?:" + [
	rsNonAstral,
	rsRegional,
	rsSurrPair
].join("|") + ")" + rsOptVar + reOptMod + ")*";
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:" + [
	rsNonAstral + rsCombo + "?",
	rsCombo,
	rsRegional,
	rsSurrPair,
	rsAstral
].join("|") + ")";
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
/**
* Converts a Unicode `string` to an array.
*
* @private
* @param {string} string The string to convert.
* @returns {Array} Returns the converted array.
*/
function unicodeToArray(string) {
	return string.match(reUnicode) || [];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stringToArray.js
/**
* Converts `string` to an array.
*
* @private
* @param {string} string The string to convert.
* @returns {Array} Returns the converted array.
*/
function stringToArray$1(string) {
	return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createCaseFirst.js
/**
* Creates a function like `_.lowerFirst`.
*
* @private
* @param {string} methodName The name of the `String` case method to use.
* @returns {Function} Returns the new case function.
*/
function createCaseFirst(methodName) {
	return function(string) {
		string = toString(string);
		var strSymbols = hasUnicode(string) ? stringToArray$1(string) : void 0;
		var chr = strSymbols ? strSymbols[0] : string.charAt(0);
		var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
		return chr[methodName]() + trailing;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/upperFirst.js
/**
* Converts the first character of `string` to upper case.
*
* @static
* @memberOf _
* @since 4.0.0
* @category String
* @param {string} [string=''] The string to convert.
* @returns {string} Returns the converted string.
* @example
*
* _.upperFirst('fred');
* // => 'Fred'
*
* _.upperFirst('FRED');
* // => 'FRED'
*/
var upperFirst = createCaseFirst("toUpperCase");
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackClear.js
/**
* Removes all key-value entries from the stack.
*
* @private
* @name clear
* @memberOf Stack
*/
function stackClear() {
	this.__data__ = new ListCache();
	this.size = 0;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackDelete.js
/**
* Removes `key` and its value from the stack.
*
* @private
* @name delete
* @memberOf Stack
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function stackDelete(key) {
	var data = this.__data__, result = data["delete"](key);
	this.size = data.size;
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackGet.js
/**
* Gets the stack value for `key`.
*
* @private
* @name get
* @memberOf Stack
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function stackGet(key) {
	return this.__data__.get(key);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackHas.js
/**
* Checks if a stack value for `key` exists.
*
* @private
* @name has
* @memberOf Stack
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function stackHas(key) {
	return this.__data__.has(key);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackSet.js
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/**
* Sets the stack `key` to `value`.
*
* @private
* @name set
* @memberOf Stack
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the stack cache instance.
*/
function stackSet(key, value) {
	var data = this.__data__;
	if (data instanceof ListCache) {
		var pairs = data.__data__;
		if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
			pairs.push([key, value]);
			this.size = ++data.size;
			return this;
		}
		data = this.__data__ = new MapCache(pairs);
	}
	data.set(key, value);
	this.size = data.size;
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Stack.js
/**
* Creates a stack cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Stack(entries) {
	var data = this.__data__ = new ListCache(entries);
	this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneBuffer.js
/** Detect free variable `exports`. */
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
/** Built-in value references. */
var Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
/**
* Creates a clone of  `buffer`.
*
* @private
* @param {Buffer} buffer The buffer to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Buffer} Returns the cloned buffer.
*/
function cloneBuffer(buffer, isDeep) {
	if (isDeep) return buffer.slice();
	var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	buffer.copy(result);
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Uint8Array.js
/** Built-in value references. */
var Uint8Array = root.Uint8Array;
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneArrayBuffer.js
/**
* Creates a clone of `arrayBuffer`.
*
* @private
* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
* @returns {ArrayBuffer} Returns the cloned array buffer.
*/
function cloneArrayBuffer(arrayBuffer) {
	var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	return result;
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneTypedArray.js
/**
* Creates a clone of `typedArray`.
*
* @private
* @param {Object} typedArray The typed array to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the cloned typed array.
*/
function cloneTypedArray(typedArray, isDeep) {
	var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneObject.js
/**
* Initializes an object clone.
*
* @private
* @param {Object} object The object to clone.
* @returns {Object} Returns the initialized clone.
*/
function initCloneObject(object) {
	return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createBaseFor.js
/**
* Creates a base function for methods like `_.forIn` and `_.forOwn`.
*
* @private
* @param {boolean} [fromRight] Specify iterating from right to left.
* @returns {Function} Returns the new base function.
*/
function createBaseFor(fromRight) {
	return function(object, iteratee, keysFunc) {
		var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
		while (length--) {
			var key = props[fromRight ? length : ++index];
			if (iteratee(iterable[key], key, iterable) === false) break;
		}
		return object;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseFor.js
/**
* The base implementation of `baseForOwn` which iterates over `object`
* properties returned by `keysFunc` and invokes `iteratee` for each property.
* Iteratee functions may exit iteration early by explicitly returning `false`.
*
* @private
* @param {Object} object The object to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @param {Function} keysFunc The function to get the keys of `object`.
* @returns {Object} Returns `object`.
*/
var baseFor = createBaseFor();
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assignMergeValue.js
/**
* This function is like `assignValue` except that it doesn't assign
* `undefined` values.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function assignMergeValue(object, key, value) {
	if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLikeObject.js
/**
* This method is like `_.isArrayLike` except that it also checks if `value`
* is an object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an array-like object,
*  else `false`.
* @example
*
* _.isArrayLikeObject([1, 2, 3]);
* // => true
*
* _.isArrayLikeObject(document.body.children);
* // => true
*
* _.isArrayLikeObject('abc');
* // => false
*
* _.isArrayLikeObject(_.noop);
* // => false
*/
function isArrayLikeObject(value) {
	return isObjectLike(value) && isArrayLike(value);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_safeGet.js
/**
* Gets the value at `key`, unless `key` is "__proto__" or "constructor".
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the property to get.
* @returns {*} Returns the property value.
*/
function safeGet(object, key) {
	if (key === "constructor" && typeof object[key] === "function") return;
	if (key == "__proto__") return;
	return object[key];
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toPlainObject.js
/**
* Converts `value` to a plain object flattening inherited enumerable string
* keyed properties of `value` to own properties of the plain object.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Lang
* @param {*} value The value to convert.
* @returns {Object} Returns the converted plain object.
* @example
*
* function Foo() {
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.assign({ 'a': 1 }, new Foo);
* // => { 'a': 1, 'b': 2 }
*
* _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
* // => { 'a': 1, 'b': 2, 'c': 3 }
*/
function toPlainObject(value) {
	return copyObject(value, keysIn(value));
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseMergeDeep.js
/**
* A specialized version of `baseMerge` for arrays and objects which performs
* deep merges and tracks traversed objects enabling objects with circular
* references to be merged.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @param {string} key The key of the value to merge.
* @param {number} srcIndex The index of `source`.
* @param {Function} mergeFunc The function to merge values.
* @param {Function} [customizer] The function to customize assigned values.
* @param {Object} [stack] Tracks traversed source values and their merged
*  counterparts.
*/
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
	if (stacked) {
		assignMergeValue(object, key, stacked);
		return;
	}
	var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
	var isCommon = newValue === void 0;
	if (isCommon) {
		var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
		newValue = srcValue;
		if (isArr || isBuff || isTyped) {
			if (isArray(objValue)) newValue = objValue;
			else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
			else if (isBuff) {
				isCommon = false;
				newValue = cloneBuffer(srcValue, true);
			} else if (isTyped) {
				isCommon = false;
				newValue = cloneTypedArray(srcValue, true);
			} else newValue = [];
		} else if (isPlainObject$1(srcValue) || isArguments(srcValue)) {
			newValue = objValue;
			if (isArguments(objValue)) newValue = toPlainObject(objValue);
			else if (!isObject(objValue) || isFunction(objValue)) newValue = initCloneObject(srcValue);
		} else isCommon = false;
	}
	if (isCommon) {
		stack.set(srcValue, newValue);
		mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
		stack["delete"](srcValue);
	}
	assignMergeValue(object, key, newValue);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseMerge.js
/**
* The base implementation of `_.merge` without support for multiple sources.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @param {number} srcIndex The index of `source`.
* @param {Function} [customizer] The function to customize merged values.
* @param {Object} [stack] Tracks traversed source values and their merged
*  counterparts.
*/
function baseMerge(object, source, srcIndex, customizer, stack) {
	if (object === source) return;
	baseFor(source, function(srcValue, key) {
		stack || (stack = new Stack());
		if (isObject(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
		else {
			var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
			if (newValue === void 0) newValue = srcValue;
			assignMergeValue(object, key, newValue);
		}
	}, keysIn);
}
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js
/**
* This method is like `_.assign` except that it recursively merges own and
* inherited enumerable string keyed properties of source objects into the
* destination object. Source properties that resolve to `undefined` are
* skipped if a destination value exists. Array and plain object properties
* are merged recursively. Other objects and value types are overridden by
* assignment. Source objects are applied from left to right. Subsequent
* sources overwrite property assignments of previous sources.
*
* **Note:** This method mutates `object`.
*
* @static
* @memberOf _
* @since 0.5.0
* @category Object
* @param {Object} object The destination object.
* @param {...Object} [sources] The source objects.
* @returns {Object} Returns `object`.
* @example
*
* var object = {
*   'a': [{ 'b': 2 }, { 'd': 4 }]
* };
*
* var other = {
*   'a': [{ 'c': 3 }, { 'e': 5 }]
* };
*
* _.merge(object, other);
* // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
*/
var merge = createAssigner(function(object, source, srcIndex) {
	baseMerge(object, source, srcIndex);
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_mixins/common.mjs
var cssrAnchorMetaName = "naive-ui-style";
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_mixins/use-rtl.mjs
init_runtime_core_esm_bundler();
function useRtl(mountId, rtlStateRef, clsPrefixRef) {
	if (!rtlStateRef) return void 0;
	const ssrAdapter = useSsrAdapter();
	const componentRtlStateRef = computed(() => {
		const { value: rtlState } = rtlStateRef;
		if (!rtlState) return;
		const componentRtlState = rtlState[mountId];
		if (!componentRtlState) return;
		return componentRtlState;
	});
	const NConfigProvider = inject(configProviderInjectionKey, null);
	const mountStyle = () => {
		watchEffect(() => {
			const { value: clsPrefix } = clsPrefixRef;
			const id = `${clsPrefix}${mountId}Rtl`;
			if (exists(id, ssrAdapter)) return;
			const { value: componentRtlState } = componentRtlStateRef;
			if (!componentRtlState) return;
			componentRtlState.style.mount({
				id,
				head: true,
				anchorMetaName: cssrAnchorMetaName,
				props: { bPrefix: clsPrefix ? `.${clsPrefix}-` : void 0 },
				ssr: ssrAdapter,
				parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
			});
		});
	};
	if (ssrAdapter) mountStyle();
	else onBeforeMount(mountStyle);
	return componentRtlStateRef;
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/common/_common.mjs
var _common_default$41 = {
	fontFamily: "v-sans, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
	fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
	fontWeight: "400",
	fontWeightStrong: "500",
	cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)",
	cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)",
	cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)",
	borderRadius: "3px",
	borderRadiusSmall: "2px",
	fontSize: "14px",
	fontSizeMini: "12px",
	fontSizeTiny: "12px",
	fontSizeSmall: "14px",
	fontSizeMedium: "14px",
	fontSizeLarge: "15px",
	fontSizeHuge: "16px",
	lineHeight: "1.6",
	heightMini: "16px",
	heightTiny: "22px",
	heightSmall: "28px",
	heightMedium: "34px",
	heightLarge: "40px",
	heightHuge: "46px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/global/index.cssr.mjs
var { fontSize, fontFamily, lineHeight } = _common_default$41;
var index_cssr_default$11 = c("body", `
 margin: 0;
 font-size: ${fontSize};
 font-family: ${fontFamily};
 line-height: ${lineHeight};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [c("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_mixins/use-style.mjs
init_runtime_core_esm_bundler();
function useStyle(mountId, style, clsPrefixRef) {
	if (!style) return;
	const ssrAdapter = useSsrAdapter();
	const NConfigProvider = inject(configProviderInjectionKey, null);
	const mountStyle = () => {
		const clsPrefix = clsPrefixRef.value;
		style.mount({
			id: clsPrefix === void 0 ? mountId : clsPrefix + mountId,
			head: true,
			anchorMetaName: cssrAnchorMetaName,
			props: { bPrefix: clsPrefix ? `.${clsPrefix}-` : void 0 },
			ssr: ssrAdapter,
			parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
		});
		if (!(NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.preflightStyleDisabled)) index_cssr_default$11.mount({
			id: "n-global",
			head: true,
			anchorMetaName: cssrAnchorMetaName,
			ssr: ssrAdapter,
			parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
		});
	};
	if (ssrAdapter) mountStyle();
	else onBeforeMount(mountStyle);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_mixins/use-theme.mjs
init_runtime_core_esm_bundler();
function createTheme(theme) {
	return theme;
}
function useTheme(resolveId, mountId, style, defaultTheme, props, clsPrefixRef) {
	const ssrAdapter = useSsrAdapter();
	const NConfigProvider = inject(configProviderInjectionKey, null);
	if (style) {
		const mountStyle = () => {
			const clsPrefix = clsPrefixRef === null || clsPrefixRef === void 0 ? void 0 : clsPrefixRef.value;
			style.mount({
				id: clsPrefix === void 0 ? mountId : clsPrefix + mountId,
				head: true,
				props: { bPrefix: clsPrefix ? `.${clsPrefix}-` : void 0 },
				anchorMetaName: cssrAnchorMetaName,
				ssr: ssrAdapter,
				parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
			});
			if (!(NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.preflightStyleDisabled)) index_cssr_default$11.mount({
				id: "n-global",
				head: true,
				anchorMetaName: cssrAnchorMetaName,
				ssr: ssrAdapter,
				parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
			});
		};
		if (ssrAdapter) mountStyle();
		else onBeforeMount(mountStyle);
	}
	return computed(() => {
		var _a;
		const { theme: { common: selfCommon, self, peers = {} } = {}, themeOverrides: selfOverrides = {}, builtinThemeOverrides: builtinOverrides = {} } = props;
		const { common: selfCommonOverrides, peers: peersOverrides } = selfOverrides;
		const { common: globalCommon = void 0, [resolveId]: { common: globalSelfCommon = void 0, self: globalSelf = void 0, peers: globalPeers = {} } = {} } = (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeRef.value) || {};
		const { common: globalCommonOverrides = void 0, [resolveId]: globalSelfOverrides = {} } = (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeOverridesRef.value) || {};
		const { common: globalSelfCommonOverrides, peers: globalPeersOverrides = {} } = globalSelfOverrides;
		const mergedCommon = merge({}, selfCommon || globalSelfCommon || globalCommon || defaultTheme.common, globalCommonOverrides, globalSelfCommonOverrides, selfCommonOverrides);
		return {
			common: mergedCommon,
			self: merge((_a = self || globalSelf || defaultTheme.self) === null || _a === void 0 ? void 0 : _a(mergedCommon), builtinOverrides, globalSelfOverrides, selfOverrides),
			peers: merge({}, defaultTheme.peers, globalPeers, peers),
			peerOverrides: merge({}, builtinOverrides.peers, globalPeersOverrides, peersOverrides)
		};
	});
}
useTheme.props = {
	theme: Object,
	themeOverrides: Object,
	builtinThemeOverrides: Object
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/icon/src/styles/index.cssr.mjs
var index_cssr_default$10 = cB("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [c("svg", `
 height: 1em;
 width: 1em;
 `)]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/icon/src/Icon.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var Icon_default = defineComponent({
	name: "BaseIcon",
	props: {
		role: String,
		ariaLabel: String,
		ariaDisabled: {
			type: Boolean,
			default: void 0
		},
		ariaHidden: {
			type: Boolean,
			default: void 0
		},
		clsPrefix: {
			type: String,
			required: true
		},
		onClick: Function,
		onMousedown: Function,
		onMouseup: Function
	},
	setup(props) {
		useStyle("-base-icon", index_cssr_default$10, toRef(props, "clsPrefix"));
	},
	render() {
		return h("i", {
			class: `${this.clsPrefix}-base-icon`,
			onClick: this.onClick,
			onMousedown: this.onMousedown,
			onMouseup: this.onMouseup,
			role: this.role,
			"aria-label": this.ariaLabel,
			"aria-hidden": this.ariaHidden,
			"aria-disabled": this.ariaDisabled
		}, this.$slots);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/icon-switch-transition/src/IconSwitchTransition.mjs
init_runtime_core_esm_bundler(), init_runtime_dom_esm_bundler();
var IconSwitchTransition_default = defineComponent({
	name: "BaseIconSwitchTransition",
	setup(_, { slots }) {
		const isMountedRef = isMounted();
		return () => h(Transition, {
			name: "icon-switch-transition",
			appear: isMountedRef.value
		}, slots);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/icons/replaceable.mjs
init_runtime_core_esm_bundler();
function replaceable(name, icon) {
	const IconComponent = defineComponent({ render() {
		return icon();
	} });
	return defineComponent({
		name: upperFirst(name),
		setup() {
			var _a;
			const mergedIconsRef = (_a = inject(configProviderInjectionKey, null)) === null || _a === void 0 ? void 0 : _a.mergedIconsRef;
			return () => {
				var _a;
				const iconOverride = (_a = mergedIconsRef === null || mergedIconsRef === void 0 ? void 0 : mergedIconsRef.value) === null || _a === void 0 ? void 0 : _a[name];
				return iconOverride ? iconOverride() : h(IconComponent, null);
			};
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/icons/Close.mjs
init_runtime_core_esm_bundler();
var Close_default$1 = replaceable("close", () => h("svg", {
	viewBox: "0 0 12 12",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": true
}, h("g", {
	stroke: "none",
	"stroke-width": "1",
	fill: "none",
	"fill-rule": "evenodd"
}, h("g", {
	fill: "currentColor",
	"fill-rule": "nonzero"
}, h("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" })))));
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/icons/Error.mjs
init_runtime_core_esm_bundler();
var Error_default = replaceable("error", () => h("svg", {
	viewBox: "0 0 48 48",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
	stroke: "none",
	"stroke-width": "1",
	"fill-rule": "evenodd"
}, h("g", { "fill-rule": "nonzero" }, h("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z" })))));
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/icons/Info.mjs
init_runtime_core_esm_bundler();
var Info_default = replaceable("info", () => h("svg", {
	viewBox: "0 0 28 28",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
	stroke: "none",
	"stroke-width": "1",
	"fill-rule": "evenodd"
}, h("g", { "fill-rule": "nonzero" }, h("path", { d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z" })))));
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/icons/Success.mjs
init_runtime_core_esm_bundler();
var Success_default = replaceable("success", () => h("svg", {
	viewBox: "0 0 48 48",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
	stroke: "none",
	"stroke-width": "1",
	"fill-rule": "evenodd"
}, h("g", { "fill-rule": "nonzero" }, h("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z" })))));
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/icons/Warning.mjs
init_runtime_core_esm_bundler();
var Warning_default = replaceable("warning", () => h("svg", {
	viewBox: "0 0 24 24",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
	stroke: "none",
	"stroke-width": "1",
	"fill-rule": "evenodd"
}, h("g", { "fill-rule": "nonzero" }, h("path", { d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z" })))));
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/transitions/icon-switch.cssr.mjs
var { cubicBezierEaseInOut: cubicBezierEaseInOut$3 } = _common_default$41;
function iconSwitchTransition({ originalTransform = "", left = 0, top = 0, transition = `all .3s ${cubicBezierEaseInOut$3} !important` } = {}) {
	return [
		c("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
			transform: `${originalTransform} scale(0.75)`,
			left,
			top,
			opacity: 0
		}),
		c("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
			transform: `scale(1) ${originalTransform}`,
			left,
			top,
			opacity: 1
		}),
		c("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
			transformOrigin: "center",
			position: "absolute",
			left,
			top,
			transition
		})
	];
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/close/src/styles/index.cssr.mjs
var index_cssr_default$9 = cB("base-close", `
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`, [
	cM("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),
	c("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),
	cNotM("disabled", [
		c("&:hover", `
 color: var(--n-close-icon-color-hover);
 `),
		c("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `),
		c("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `),
		c("&:active", `
 color: var(--n-close-icon-color-pressed);
 `),
		c("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)
	]),
	cM("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),
	cM("round", [c("&::before", `
 border-radius: 50%;
 `)])
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/close/src/Close.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var Close_default = defineComponent({
	name: "BaseClose",
	props: {
		isButtonTag: {
			type: Boolean,
			default: true
		},
		clsPrefix: {
			type: String,
			required: true
		},
		disabled: {
			type: Boolean,
			default: void 0
		},
		focusable: {
			type: Boolean,
			default: true
		},
		round: Boolean,
		onClick: Function,
		absolute: Boolean
	},
	setup(props) {
		useStyle("-base-close", index_cssr_default$9, toRef(props, "clsPrefix"));
		return () => {
			const { clsPrefix, disabled, absolute, round, isButtonTag } = props;
			return h(isButtonTag ? "button" : "div", {
				type: isButtonTag ? "button" : void 0,
				tabindex: disabled || !props.focusable ? -1 : 0,
				"aria-disabled": disabled,
				"aria-label": "close",
				role: isButtonTag ? void 0 : "button",
				disabled,
				class: [
					`${clsPrefix}-base-close`,
					absolute && `${clsPrefix}-base-close--absolute`,
					disabled && `${clsPrefix}-base-close--disabled`,
					round && `${clsPrefix}-base-close--round`
				],
				onMousedown: (e) => {
					if (!props.focusable) e.preventDefault();
				},
				onClick: props.onClick
			}, h(Icon_default, { clsPrefix }, { default: () => h(Close_default$1, null) }));
		};
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/fade-in-expand-transition/src/FadeInExpandTransition.mjs
init_runtime_core_esm_bundler(), init_runtime_dom_esm_bundler();
var FadeInExpandTransition_default = defineComponent({
	name: "FadeInExpandTransition",
	props: {
		appear: Boolean,
		group: Boolean,
		mode: String,
		onLeave: Function,
		onAfterLeave: Function,
		onAfterEnter: Function,
		width: Boolean,
		reverse: Boolean
	},
	setup(props, { slots }) {
		function handleBeforeLeave(el) {
			if (props.width) el.style.maxWidth = `${el.offsetWidth}px`;
			else el.style.maxHeight = `${el.offsetHeight}px`;
			el.offsetWidth;
		}
		function handleLeave(el) {
			if (props.width) el.style.maxWidth = "0";
			else el.style.maxHeight = "0";
			el.offsetWidth;
			const { onLeave } = props;
			if (onLeave) onLeave();
		}
		function handleAfterLeave(el) {
			if (props.width) el.style.maxWidth = "";
			else el.style.maxHeight = "";
			const { onAfterLeave } = props;
			if (onAfterLeave) onAfterLeave();
		}
		function handleEnter(el) {
			el.style.transition = "none";
			if (props.width) {
				const memorizedWidth = el.offsetWidth;
				el.style.maxWidth = "0";
				el.offsetWidth;
				el.style.transition = "";
				el.style.maxWidth = `${memorizedWidth}px`;
			} else if (props.reverse) {
				el.style.maxHeight = `${el.offsetHeight}px`;
				el.offsetHeight;
				el.style.transition = "";
				el.style.maxHeight = "0";
			} else {
				const memorizedHeight = el.offsetHeight;
				el.style.maxHeight = "0";
				el.offsetWidth;
				el.style.transition = "";
				el.style.maxHeight = `${memorizedHeight}px`;
			}
			el.offsetWidth;
		}
		function handleAfterEnter(el) {
			var _a;
			if (props.width) el.style.maxWidth = "";
			else if (!props.reverse) el.style.maxHeight = "";
			(_a = props.onAfterEnter) === null || _a === void 0 || _a.call(props);
		}
		return () => {
			const { group, width, appear, mode } = props;
			const type = group ? TransitionGroup : Transition;
			const resolvedProps = {
				name: width ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
				appear,
				onEnter: handleEnter,
				onAfterEnter: handleAfterEnter,
				onBeforeLeave: handleBeforeLeave,
				onLeave: handleLeave,
				onAfterLeave: handleAfterLeave
			};
			if (!group) resolvedProps.mode = mode;
			return h(type, resolvedProps, slots);
		};
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/loading/src/styles/index.cssr.mjs
var index_cssr_default$8 = c([c("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), cB("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [
	cE("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [iconSwitchTransition()]),
	cE("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [iconSwitchTransition({
		left: "50%",
		top: "50%",
		originalTransform: "translateX(-50%) translateY(-50%)"
	})]),
	cE("container", `
 animation: rotator 3s linear infinite both;
 `, [cE("icon", `
 height: 1em;
 width: 1em;
 `)])
])]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/loading/src/Loading.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var duration = "1.6s";
var exposedLoadingProps = {
	strokeWidth: {
		type: Number,
		default: 28
	},
	stroke: {
		type: String,
		default: void 0
	},
	scale: {
		type: Number,
		default: 1
	},
	radius: {
		type: Number,
		default: 100
	}
};
var Loading_default = defineComponent({
	name: "BaseLoading",
	props: Object.assign({
		clsPrefix: {
			type: String,
			required: true
		},
		show: {
			type: Boolean,
			default: true
		}
	}, exposedLoadingProps),
	setup(props) {
		useStyle("-base-loading", index_cssr_default$8, toRef(props, "clsPrefix"));
	},
	render() {
		const { clsPrefix, radius, strokeWidth, stroke, scale } = this;
		const scaledRadius = radius / scale;
		return h("div", {
			class: `${clsPrefix}-base-loading`,
			role: "img",
			"aria-label": "loading"
		}, h(IconSwitchTransition_default, null, { default: () => this.show ? h("div", {
			key: "icon",
			class: `${clsPrefix}-base-loading__transition-wrapper`
		}, h("div", { class: `${clsPrefix}-base-loading__container` }, h("svg", {
			class: `${clsPrefix}-base-loading__icon`,
			viewBox: `0 0 ${2 * scaledRadius} ${2 * scaledRadius}`,
			xmlns: "http://www.w3.org/2000/svg",
			style: { color: stroke }
		}, h("g", null, h("animateTransform", {
			attributeName: "transform",
			type: "rotate",
			values: `0 ${scaledRadius} ${scaledRadius};270 ${scaledRadius} ${scaledRadius}`,
			begin: "0s",
			dur: duration,
			fill: "freeze",
			repeatCount: "indefinite"
		}), h("circle", {
			class: `${clsPrefix}-base-loading__icon`,
			fill: "none",
			stroke: "currentColor",
			"stroke-width": strokeWidth,
			"stroke-linecap": "round",
			cx: scaledRadius,
			cy: scaledRadius,
			r: radius - strokeWidth / 2,
			"stroke-dasharray": 5.67 * radius,
			"stroke-dashoffset": 18.48 * radius
		}, h("animateTransform", {
			attributeName: "transform",
			type: "rotate",
			values: `0 ${scaledRadius} ${scaledRadius};135 ${scaledRadius} ${scaledRadius};450 ${scaledRadius} ${scaledRadius}`,
			begin: "0s",
			dur: duration,
			fill: "freeze",
			repeatCount: "indefinite"
		}), h("animate", {
			attributeName: "stroke-dashoffset",
			values: `${5.67 * radius};${1.42 * radius};${5.67 * radius}`,
			begin: "0s",
			dur: duration,
			fill: "freeze",
			repeatCount: "indefinite"
		})))))) : h("div", {
			key: "placeholder",
			class: `${clsPrefix}-base-loading__placeholder`
		}, this.$slots) }));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/transitions/fade-in.cssr.mjs
var { cubicBezierEaseInOut: cubicBezierEaseInOut$2 } = _common_default$41;
function fadeInTransition({ name = "fade-in", enterDuration = "0.2s", leaveDuration = "0.2s", enterCubicBezier = cubicBezierEaseInOut$2, leaveCubicBezier = cubicBezierEaseInOut$2 } = {}) {
	return [
		c(`&.${name}-transition-enter-active`, { transition: `all ${enterDuration} ${enterCubicBezier}!important` }),
		c(`&.${name}-transition-leave-active`, { transition: `all ${leaveDuration} ${leaveCubicBezier}!important` }),
		c(`&.${name}-transition-enter-from, &.${name}-transition-leave-to`, { opacity: 0 }),
		c(`&.${name}-transition-leave-from, &.${name}-transition-enter-to`, { opacity: 1 })
	];
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/common/dark.mjs
var base$1 = {
	neutralBase: "#000",
	neutralInvertBase: "#fff",
	neutralTextBase: "#fff",
	neutralPopover: "rgb(72, 72, 78)",
	neutralCard: "rgb(24, 24, 28)",
	neutralModal: "rgb(44, 44, 50)",
	neutralBody: "rgb(16, 16, 20)",
	alpha1: "0.9",
	alpha2: "0.82",
	alpha3: "0.52",
	alpha4: "0.38",
	alpha5: "0.28",
	alphaClose: "0.52",
	alphaDisabled: "0.38",
	alphaDisabledInput: "0.06",
	alphaPending: "0.09",
	alphaTablePending: "0.06",
	alphaTableStriped: "0.05",
	alphaPressed: "0.05",
	alphaAvatar: "0.18",
	alphaRail: "0.2",
	alphaProgressRail: "0.12",
	alphaBorder: "0.24",
	alphaDivider: "0.09",
	alphaInput: "0.1",
	alphaAction: "0.06",
	alphaTab: "0.04",
	alphaScrollbar: "0.2",
	alphaScrollbarHover: "0.3",
	alphaCode: "0.12",
	alphaTag: "0.2",
	primaryHover: "#7fe7c4",
	primaryDefault: "#63e2b7",
	primaryActive: "#5acea7",
	primarySuppl: "rgb(42, 148, 125)",
	infoHover: "#8acbec",
	infoDefault: "#70c0e8",
	infoActive: "#66afd3",
	infoSuppl: "rgb(56, 137, 197)",
	errorHover: "#e98b8b",
	errorDefault: "#e88080",
	errorActive: "#e57272",
	errorSuppl: "rgb(208, 58, 82)",
	warningHover: "#f5d599",
	warningDefault: "#f2c97d",
	warningActive: "#e6c260",
	warningSuppl: "rgb(240, 138, 0)",
	successHover: "#7fe7c4",
	successDefault: "#63e2b7",
	successActive: "#5acea7",
	successSuppl: "rgb(42, 148, 125)"
};
var baseBackgroundRgb$1 = rgba(base$1.neutralBase);
var baseInvertBackgroundRgb$1 = rgba(base$1.neutralInvertBase);
var overlayPrefix$1 = `rgba(${baseInvertBackgroundRgb$1.slice(0, 3).join(", ")}, `;
function overlay$1(alpha) {
	return `${overlayPrefix$1 + String(alpha)})`;
}
function neutral$1(alpha) {
	const overlayRgba = Array.from(baseInvertBackgroundRgb$1);
	overlayRgba[3] = Number(alpha);
	return composite(baseBackgroundRgb$1, overlayRgba);
}
var derived$1 = Object.assign(Object.assign({ name: "common" }, _common_default$41), {
	baseColor: base$1.neutralBase,
	primaryColor: base$1.primaryDefault,
	primaryColorHover: base$1.primaryHover,
	primaryColorPressed: base$1.primaryActive,
	primaryColorSuppl: base$1.primarySuppl,
	infoColor: base$1.infoDefault,
	infoColorHover: base$1.infoHover,
	infoColorPressed: base$1.infoActive,
	infoColorSuppl: base$1.infoSuppl,
	successColor: base$1.successDefault,
	successColorHover: base$1.successHover,
	successColorPressed: base$1.successActive,
	successColorSuppl: base$1.successSuppl,
	warningColor: base$1.warningDefault,
	warningColorHover: base$1.warningHover,
	warningColorPressed: base$1.warningActive,
	warningColorSuppl: base$1.warningSuppl,
	errorColor: base$1.errorDefault,
	errorColorHover: base$1.errorHover,
	errorColorPressed: base$1.errorActive,
	errorColorSuppl: base$1.errorSuppl,
	textColorBase: base$1.neutralTextBase,
	textColor1: overlay$1(base$1.alpha1),
	textColor2: overlay$1(base$1.alpha2),
	textColor3: overlay$1(base$1.alpha3),
	textColorDisabled: overlay$1(base$1.alpha4),
	placeholderColor: overlay$1(base$1.alpha4),
	placeholderColorDisabled: overlay$1(base$1.alpha5),
	iconColor: overlay$1(base$1.alpha4),
	iconColorDisabled: overlay$1(base$1.alpha5),
	iconColorHover: overlay$1(Number(base$1.alpha4) * 1.25),
	iconColorPressed: overlay$1(Number(base$1.alpha4) * .8),
	opacity1: base$1.alpha1,
	opacity2: base$1.alpha2,
	opacity3: base$1.alpha3,
	opacity4: base$1.alpha4,
	opacity5: base$1.alpha5,
	dividerColor: overlay$1(base$1.alphaDivider),
	borderColor: overlay$1(base$1.alphaBorder),
	closeIconColorHover: overlay$1(Number(base$1.alphaClose)),
	closeIconColor: overlay$1(Number(base$1.alphaClose)),
	closeIconColorPressed: overlay$1(Number(base$1.alphaClose)),
	closeColorHover: "rgba(255, 255, 255, .12)",
	closeColorPressed: "rgba(255, 255, 255, .08)",
	clearColor: overlay$1(base$1.alpha4),
	clearColorHover: scaleColor(overlay$1(base$1.alpha4), { alpha: 1.25 }),
	clearColorPressed: scaleColor(overlay$1(base$1.alpha4), { alpha: .8 }),
	scrollbarColor: overlay$1(base$1.alphaScrollbar),
	scrollbarColorHover: overlay$1(base$1.alphaScrollbarHover),
	scrollbarWidth: "5px",
	scrollbarHeight: "5px",
	scrollbarBorderRadius: "5px",
	progressRailColor: overlay$1(base$1.alphaProgressRail),
	railColor: overlay$1(base$1.alphaRail),
	popoverColor: base$1.neutralPopover,
	tableColor: base$1.neutralCard,
	cardColor: base$1.neutralCard,
	modalColor: base$1.neutralModal,
	bodyColor: base$1.neutralBody,
	tagColor: neutral$1(base$1.alphaTag),
	avatarColor: overlay$1(base$1.alphaAvatar),
	invertedColor: base$1.neutralBase,
	inputColor: overlay$1(base$1.alphaInput),
	codeColor: overlay$1(base$1.alphaCode),
	tabColor: overlay$1(base$1.alphaTab),
	actionColor: overlay$1(base$1.alphaAction),
	tableHeaderColor: overlay$1(base$1.alphaAction),
	hoverColor: overlay$1(base$1.alphaPending),
	tableColorHover: overlay$1(base$1.alphaTablePending),
	tableColorStriped: overlay$1(base$1.alphaTableStriped),
	pressedColor: overlay$1(base$1.alphaPressed),
	opacityDisabled: base$1.alphaDisabled,
	inputColorDisabled: overlay$1(base$1.alphaDisabledInput),
	buttonColor2: "rgba(255, 255, 255, .08)",
	buttonColor2Hover: "rgba(255, 255, 255, .12)",
	buttonColor2Pressed: "rgba(255, 255, 255, .08)",
	boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",
	boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",
	boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/common/light.mjs
var base = {
	neutralBase: "#FFF",
	neutralInvertBase: "#000",
	neutralTextBase: "#000",
	neutralPopover: "#fff",
	neutralCard: "#fff",
	neutralModal: "#fff",
	neutralBody: "#fff",
	alpha1: "0.82",
	alpha2: "0.72",
	alpha3: "0.38",
	alpha4: "0.24",
	alpha5: "0.18",
	alphaClose: "0.6",
	alphaDisabled: "0.5",
	alphaDisabledInput: "0.02",
	alphaPending: "0.05",
	alphaTablePending: "0.02",
	alphaPressed: "0.07",
	alphaAvatar: "0.2",
	alphaRail: "0.14",
	alphaProgressRail: ".08",
	alphaBorder: "0.12",
	alphaDivider: "0.06",
	alphaInput: "0",
	alphaAction: "0.02",
	alphaTab: "0.04",
	alphaScrollbar: "0.25",
	alphaScrollbarHover: "0.4",
	alphaCode: "0.05",
	alphaTag: "0.02",
	primaryHover: "#36ad6a",
	primaryDefault: "#18a058",
	primaryActive: "#0c7a43",
	primarySuppl: "#36ad6a",
	infoHover: "#4098fc",
	infoDefault: "#2080f0",
	infoActive: "#1060c9",
	infoSuppl: "#4098fc",
	errorHover: "#de576d",
	errorDefault: "#d03050",
	errorActive: "#ab1f3f",
	errorSuppl: "#de576d",
	warningHover: "#fcb040",
	warningDefault: "#f0a020",
	warningActive: "#c97c10",
	warningSuppl: "#fcb040",
	successHover: "#36ad6a",
	successDefault: "#18a058",
	successActive: "#0c7a43",
	successSuppl: "#36ad6a"
};
var baseBackgroundRgb = rgba(base.neutralBase);
var baseInvertBackgroundRgb = rgba(base.neutralInvertBase);
var overlayPrefix = `rgba(${baseInvertBackgroundRgb.slice(0, 3).join(", ")}, `;
function overlay(alpha) {
	return `${overlayPrefix + String(alpha)})`;
}
function neutral(alpha) {
	const overlayRgba = Array.from(baseInvertBackgroundRgb);
	overlayRgba[3] = Number(alpha);
	return composite(baseBackgroundRgb, overlayRgba);
}
var derived = Object.assign(Object.assign({ name: "common" }, _common_default$41), {
	baseColor: base.neutralBase,
	primaryColor: base.primaryDefault,
	primaryColorHover: base.primaryHover,
	primaryColorPressed: base.primaryActive,
	primaryColorSuppl: base.primarySuppl,
	infoColor: base.infoDefault,
	infoColorHover: base.infoHover,
	infoColorPressed: base.infoActive,
	infoColorSuppl: base.infoSuppl,
	successColor: base.successDefault,
	successColorHover: base.successHover,
	successColorPressed: base.successActive,
	successColorSuppl: base.successSuppl,
	warningColor: base.warningDefault,
	warningColorHover: base.warningHover,
	warningColorPressed: base.warningActive,
	warningColorSuppl: base.warningSuppl,
	errorColor: base.errorDefault,
	errorColorHover: base.errorHover,
	errorColorPressed: base.errorActive,
	errorColorSuppl: base.errorSuppl,
	textColorBase: base.neutralTextBase,
	textColor1: "rgb(31, 34, 37)",
	textColor2: "rgb(51, 54, 57)",
	textColor3: "rgb(118, 124, 130)",
	textColorDisabled: neutral(base.alpha4),
	placeholderColor: neutral(base.alpha4),
	placeholderColorDisabled: neutral(base.alpha5),
	iconColor: neutral(base.alpha4),
	iconColorHover: scaleColor(neutral(base.alpha4), { lightness: .75 }),
	iconColorPressed: scaleColor(neutral(base.alpha4), { lightness: .9 }),
	iconColorDisabled: neutral(base.alpha5),
	opacity1: base.alpha1,
	opacity2: base.alpha2,
	opacity3: base.alpha3,
	opacity4: base.alpha4,
	opacity5: base.alpha5,
	dividerColor: "rgb(239, 239, 245)",
	borderColor: "rgb(224, 224, 230)",
	closeIconColor: neutral(Number(base.alphaClose)),
	closeIconColorHover: neutral(Number(base.alphaClose)),
	closeIconColorPressed: neutral(Number(base.alphaClose)),
	closeColorHover: "rgba(0, 0, 0, .09)",
	closeColorPressed: "rgba(0, 0, 0, .13)",
	clearColor: neutral(base.alpha4),
	clearColorHover: scaleColor(neutral(base.alpha4), { lightness: .75 }),
	clearColorPressed: scaleColor(neutral(base.alpha4), { lightness: .9 }),
	scrollbarColor: overlay(base.alphaScrollbar),
	scrollbarColorHover: overlay(base.alphaScrollbarHover),
	scrollbarWidth: "5px",
	scrollbarHeight: "5px",
	scrollbarBorderRadius: "5px",
	progressRailColor: neutral(base.alphaProgressRail),
	railColor: "rgb(219, 219, 223)",
	popoverColor: base.neutralPopover,
	tableColor: base.neutralCard,
	cardColor: base.neutralCard,
	modalColor: base.neutralModal,
	bodyColor: base.neutralBody,
	tagColor: "#eee",
	avatarColor: neutral(base.alphaAvatar),
	invertedColor: "rgb(0, 20, 40)",
	inputColor: neutral(base.alphaInput),
	codeColor: "rgb(244, 244, 248)",
	tabColor: "rgb(247, 247, 250)",
	actionColor: "rgb(250, 250, 252)",
	tableHeaderColor: "rgb(250, 250, 252)",
	hoverColor: "rgb(243, 243, 245)",
	tableColorHover: "rgba(0, 0, 100, 0.03)",
	tableColorStriped: "rgba(0, 0, 100, 0.02)",
	pressedColor: "rgb(237, 237, 239)",
	opacityDisabled: base.alphaDisabled,
	inputColorDisabled: "rgb(250, 250, 252)",
	buttonColor2: "rgba(46, 51, 56, .05)",
	buttonColor2Hover: "rgba(46, 51, 56, .09)",
	buttonColor2Pressed: "rgba(46, 51, 56, .13)",
	boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
	boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
	boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/scrollbar/styles/common.mjs
var commonVars = {
	railInsetHorizontalBottom: "auto 2px 4px 2px",
	railInsetHorizontalTop: "4px 2px auto 2px",
	railInsetVerticalRight: "2px 4px 2px auto",
	railInsetVerticalLeft: "2px auto 2px 4px",
	railColor: "transparent"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/scrollbar/styles/light.mjs
function self$86(vars) {
	const { scrollbarColor, scrollbarColorHover, scrollbarHeight, scrollbarWidth, scrollbarBorderRadius } = vars;
	return Object.assign(Object.assign({}, commonVars), {
		height: scrollbarHeight,
		width: scrollbarWidth,
		borderRadius: scrollbarBorderRadius,
		color: scrollbarColor,
		colorHover: scrollbarColorHover
	});
}
var scrollbarLight = {
	name: "Scrollbar",
	common: derived,
	self: self$86
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/scrollbar/styles/dark.mjs
var scrollbarDark = {
	name: "Scrollbar",
	common: derived$1,
	self: self$86
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/scrollbar/src/styles/index.cssr.mjs
var index_cssr_default$7 = cB("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [c(">", [cB("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [c("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), c(">", [cB("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), c(">, +", [cB("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [
	cM("horizontal", `
 height: var(--n-scrollbar-height);
 `, [c(">", [cE("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),
	cM("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `),
	cM("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `),
	cM("vertical", `
 width: var(--n-scrollbar-width);
 `, [c(">", [cE("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),
	cM("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `),
	cM("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `),
	cM("disabled", [c(">", [cE("scrollbar", "pointer-events: none;")])]),
	c(">", [cE("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [fadeInTransition(), c("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])
])])]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/scrollbar/src/Scrollbar.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var scrollbarProps = Object.assign(Object.assign({}, useTheme.props), {
	duration: {
		type: Number,
		default: 0
	},
	scrollable: {
		type: Boolean,
		default: true
	},
	xScrollable: Boolean,
	trigger: {
		type: String,
		default: "hover"
	},
	useUnifiedContainer: Boolean,
	triggerDisplayManually: Boolean,
	container: Function,
	content: Function,
	containerClass: String,
	containerStyle: [String, Object],
	contentClass: [String, Array],
	contentStyle: [String, Object],
	horizontalRailStyle: [String, Object],
	verticalRailStyle: [String, Object],
	onScroll: Function,
	onWheel: Function,
	onResize: Function,
	internalOnUpdateScrollLeft: Function,
	internalHoistYRail: Boolean,
	internalExposeWidthCssVar: Boolean,
	yPlacement: {
		type: String,
		default: "right"
	},
	xPlacement: {
		type: String,
		default: "bottom"
	}
});
var Scrollbar = defineComponent({
	name: "Scrollbar",
	props: scrollbarProps,
	inheritAttrs: false,
	setup(props) {
		const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
		const rtlEnabledRef = useRtl("Scrollbar", mergedRtlRef, mergedClsPrefixRef);
		const wrapperRef = ref(null);
		const containerRef = ref(null);
		const contentRef = ref(null);
		const yRailRef = ref(null);
		const xRailRef = ref(null);
		const contentHeightRef = ref(null);
		const contentWidthRef = ref(null);
		const containerHeightRef = ref(null);
		const containerWidthRef = ref(null);
		const yRailSizeRef = ref(null);
		const xRailSizeRef = ref(null);
		const containerScrollTopRef = ref(0);
		const containerScrollLeftRef = ref(0);
		const isShowXBarRef = ref(false);
		const isShowYBarRef = ref(false);
		let yBarPressed = false;
		let xBarPressed = false;
		let xBarVanishTimerId;
		let yBarVanishTimerId;
		let memoYTop = 0;
		let memoXLeft = 0;
		let memoMouseX = 0;
		let memoMouseY = 0;
		const isIos = useIsIos();
		const themeRef = useTheme("Scrollbar", "-scrollbar", index_cssr_default$7, scrollbarLight, props, mergedClsPrefixRef);
		const yBarSizeRef = computed(() => {
			const { value: containerHeight } = containerHeightRef;
			const { value: contentHeight } = contentHeightRef;
			const { value: yRailSize } = yRailSizeRef;
			if (containerHeight === null || contentHeight === null || yRailSize === null) return 0;
			else return Math.min(containerHeight, yRailSize * containerHeight / contentHeight + depx(themeRef.value.self.width) * 1.5);
		});
		const yBarSizePxRef = computed(() => {
			return `${yBarSizeRef.value}px`;
		});
		const xBarSizeRef = computed(() => {
			const { value: containerWidth } = containerWidthRef;
			const { value: contentWidth } = contentWidthRef;
			const { value: xRailSize } = xRailSizeRef;
			if (containerWidth === null || contentWidth === null || xRailSize === null) return 0;
			else return xRailSize * containerWidth / contentWidth + depx(themeRef.value.self.height) * 1.5;
		});
		const xBarSizePxRef = computed(() => {
			return `${xBarSizeRef.value}px`;
		});
		const yBarTopRef = computed(() => {
			const { value: containerHeight } = containerHeightRef;
			const { value: containerScrollTop } = containerScrollTopRef;
			const { value: contentHeight } = contentHeightRef;
			const { value: yRailSize } = yRailSizeRef;
			if (containerHeight === null || contentHeight === null || yRailSize === null) return 0;
			else {
				const heightDiff = contentHeight - containerHeight;
				if (!heightDiff) return 0;
				return containerScrollTop / heightDiff * (yRailSize - yBarSizeRef.value);
			}
		});
		const yBarTopPxRef = computed(() => {
			return `${yBarTopRef.value}px`;
		});
		const xBarLeftRef = computed(() => {
			const { value: containerWidth } = containerWidthRef;
			const { value: containerScrollLeft } = containerScrollLeftRef;
			const { value: contentWidth } = contentWidthRef;
			const { value: xRailSize } = xRailSizeRef;
			if (containerWidth === null || contentWidth === null || xRailSize === null) return 0;
			else {
				const widthDiff = contentWidth - containerWidth;
				if (!widthDiff) return 0;
				return containerScrollLeft / widthDiff * (xRailSize - xBarSizeRef.value);
			}
		});
		const xBarLeftPxRef = computed(() => {
			return `${xBarLeftRef.value}px`;
		});
		const needYBarRef = computed(() => {
			const { value: containerHeight } = containerHeightRef;
			const { value: contentHeight } = contentHeightRef;
			return containerHeight !== null && contentHeight !== null && contentHeight > containerHeight;
		});
		const needXBarRef = computed(() => {
			const { value: containerWidth } = containerWidthRef;
			const { value: contentWidth } = contentWidthRef;
			return containerWidth !== null && contentWidth !== null && contentWidth > containerWidth;
		});
		const mergedShowXBarRef = computed(() => {
			const { trigger } = props;
			return trigger === "none" || isShowXBarRef.value;
		});
		const mergedShowYBarRef = computed(() => {
			const { trigger } = props;
			return trigger === "none" || isShowYBarRef.value;
		});
		const mergedContainerRef = computed(() => {
			const { container } = props;
			if (container) return container();
			return containerRef.value;
		});
		const mergedContentRef = computed(() => {
			const { content } = props;
			if (content) return content();
			return contentRef.value;
		});
		const scrollTo = (options, y) => {
			if (!props.scrollable) return;
			if (typeof options === "number") {
				scrollToPosition(options, y !== null && y !== void 0 ? y : 0, 0, false, "auto");
				return;
			}
			const { left, top, index, elSize, position, behavior, el, debounce = true } = options;
			if (left !== void 0 || top !== void 0) scrollToPosition(left !== null && left !== void 0 ? left : 0, top !== null && top !== void 0 ? top : 0, 0, false, behavior);
			if (el !== void 0) scrollToPosition(0, el.offsetTop, el.offsetHeight, debounce, behavior);
			else if (index !== void 0 && elSize !== void 0) scrollToPosition(0, index * elSize, elSize, debounce, behavior);
			else if (position === "bottom") scrollToPosition(0, Number.MAX_SAFE_INTEGER, 0, false, behavior);
			else if (position === "top") scrollToPosition(0, 0, 0, false, behavior);
		};
		const activateState = useReactivated(() => {
			if (!props.container) scrollTo({
				top: containerScrollTopRef.value,
				left: containerScrollLeftRef.value
			});
		});
		const handleContentResize = () => {
			if (activateState.isDeactivated) return;
			sync();
		};
		const handleContainerResize = (e) => {
			if (activateState.isDeactivated) return;
			const { onResize } = props;
			if (onResize) onResize(e);
			sync();
		};
		const scrollBy = (options, y) => {
			if (!props.scrollable) return;
			const { value: container } = mergedContainerRef;
			if (!container) return;
			if (typeof options === "object") container.scrollBy(options);
			else container.scrollBy(options, y || 0);
		};
		function scrollToPosition(left, top, elSize, debounce, behavior) {
			const { value: container } = mergedContainerRef;
			if (!container) return;
			if (debounce) {
				const { scrollTop, offsetHeight } = container;
				if (top > scrollTop) {
					if (top + elSize <= scrollTop + offsetHeight) {} else container.scrollTo({
						left,
						top: top + elSize - offsetHeight,
						behavior
					});
					return;
				}
			}
			container.scrollTo({
				left,
				top,
				behavior
			});
		}
		function handleMouseEnterWrapper() {
			showXBar();
			showYBar();
			sync();
		}
		function handleMouseLeaveWrapper() {
			hideBar();
		}
		function hideBar() {
			hideYBar();
			hideXBar();
		}
		function hideYBar() {
			if (yBarVanishTimerId !== void 0) window.clearTimeout(yBarVanishTimerId);
			yBarVanishTimerId = window.setTimeout(() => {
				isShowYBarRef.value = false;
			}, props.duration);
		}
		function hideXBar() {
			if (xBarVanishTimerId !== void 0) window.clearTimeout(xBarVanishTimerId);
			xBarVanishTimerId = window.setTimeout(() => {
				isShowXBarRef.value = false;
			}, props.duration);
		}
		function showXBar() {
			if (xBarVanishTimerId !== void 0) window.clearTimeout(xBarVanishTimerId);
			isShowXBarRef.value = true;
		}
		function showYBar() {
			if (yBarVanishTimerId !== void 0) window.clearTimeout(yBarVanishTimerId);
			isShowYBarRef.value = true;
		}
		function handleScroll(e) {
			const { onScroll } = props;
			if (onScroll) onScroll(e);
			syncScrollState();
		}
		function syncScrollState() {
			const { value: container } = mergedContainerRef;
			if (container) {
				containerScrollTopRef.value = container.scrollTop;
				containerScrollLeftRef.value = container.scrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
			}
		}
		function syncPositionState() {
			const { value: content } = mergedContentRef;
			if (content) {
				contentHeightRef.value = content.offsetHeight;
				contentWidthRef.value = content.offsetWidth;
			}
			const { value: container } = mergedContainerRef;
			if (container) {
				containerHeightRef.value = container.offsetHeight;
				containerWidthRef.value = container.offsetWidth;
			}
			const { value: xRailEl } = xRailRef;
			const { value: yRailEl } = yRailRef;
			if (xRailEl) xRailSizeRef.value = xRailEl.offsetWidth;
			if (yRailEl) yRailSizeRef.value = yRailEl.offsetHeight;
		}
		/**
		* Sometimes there's only one element that we can scroll,
		* For example for textarea, there won't be a content element.
		*/
		function syncUnifiedContainer() {
			const { value: container } = mergedContainerRef;
			if (container) {
				containerScrollTopRef.value = container.scrollTop;
				containerScrollLeftRef.value = container.scrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
				containerHeightRef.value = container.offsetHeight;
				containerWidthRef.value = container.offsetWidth;
				contentHeightRef.value = container.scrollHeight;
				contentWidthRef.value = container.scrollWidth;
			}
			const { value: xRailEl } = xRailRef;
			const { value: yRailEl } = yRailRef;
			if (xRailEl) xRailSizeRef.value = xRailEl.offsetWidth;
			if (yRailEl) yRailSizeRef.value = yRailEl.offsetHeight;
		}
		function sync() {
			if (!props.scrollable) return;
			if (props.useUnifiedContainer) syncUnifiedContainer();
			else {
				syncPositionState();
				syncScrollState();
			}
		}
		function isMouseUpAway(e) {
			var _a;
			return !((_a = wrapperRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e)));
		}
		function handleXScrollMouseDown(e) {
			e.preventDefault();
			e.stopPropagation();
			xBarPressed = true;
			on("mousemove", window, handleXScrollMouseMove, true);
			on("mouseup", window, handleXScrollMouseUp, true);
			memoXLeft = containerScrollLeftRef.value;
			memoMouseX = (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? window.innerWidth - e.clientX : e.clientX;
		}
		function handleXScrollMouseMove(e) {
			if (!xBarPressed) return;
			if (xBarVanishTimerId !== void 0) window.clearTimeout(xBarVanishTimerId);
			if (yBarVanishTimerId !== void 0) window.clearTimeout(yBarVanishTimerId);
			const { value: containerWidth } = containerWidthRef;
			const { value: contentWidth } = contentWidthRef;
			const { value: xBarSize } = xBarSizeRef;
			if (containerWidth === null || contentWidth === null) return;
			const dScrollLeft = ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? window.innerWidth - e.clientX - memoMouseX : e.clientX - memoMouseX) * (contentWidth - containerWidth) / (containerWidth - xBarSize);
			const toScrollLeftUpperBound = contentWidth - containerWidth;
			let toScrollLeft = memoXLeft + dScrollLeft;
			toScrollLeft = Math.min(toScrollLeftUpperBound, toScrollLeft);
			toScrollLeft = Math.max(toScrollLeft, 0);
			const { value: container } = mergedContainerRef;
			if (container) {
				container.scrollLeft = toScrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
				const { internalOnUpdateScrollLeft } = props;
				if (internalOnUpdateScrollLeft) internalOnUpdateScrollLeft(toScrollLeft);
			}
		}
		function handleXScrollMouseUp(e) {
			e.preventDefault();
			e.stopPropagation();
			off("mousemove", window, handleXScrollMouseMove, true);
			off("mouseup", window, handleXScrollMouseUp, true);
			xBarPressed = false;
			sync();
			if (isMouseUpAway(e)) hideBar();
		}
		function handleYScrollMouseDown(e) {
			e.preventDefault();
			e.stopPropagation();
			yBarPressed = true;
			on("mousemove", window, handleYScrollMouseMove, true);
			on("mouseup", window, handleYScrollMouseUp, true);
			memoYTop = containerScrollTopRef.value;
			memoMouseY = e.clientY;
		}
		function handleYScrollMouseMove(e) {
			if (!yBarPressed) return;
			if (xBarVanishTimerId !== void 0) window.clearTimeout(xBarVanishTimerId);
			if (yBarVanishTimerId !== void 0) window.clearTimeout(yBarVanishTimerId);
			const { value: containerHeight } = containerHeightRef;
			const { value: contentHeight } = contentHeightRef;
			const { value: yBarSize } = yBarSizeRef;
			if (containerHeight === null || contentHeight === null) return;
			const dScrollTop = (e.clientY - memoMouseY) * (contentHeight - containerHeight) / (containerHeight - yBarSize);
			const toScrollTopUpperBound = contentHeight - containerHeight;
			let toScrollTop = memoYTop + dScrollTop;
			toScrollTop = Math.min(toScrollTopUpperBound, toScrollTop);
			toScrollTop = Math.max(toScrollTop, 0);
			const { value: container } = mergedContainerRef;
			if (container) container.scrollTop = toScrollTop;
		}
		function handleYScrollMouseUp(e) {
			e.preventDefault();
			e.stopPropagation();
			off("mousemove", window, handleYScrollMouseMove, true);
			off("mouseup", window, handleYScrollMouseUp, true);
			yBarPressed = false;
			sync();
			if (isMouseUpAway(e)) hideBar();
		}
		watchEffect(() => {
			const { value: needXBar } = needXBarRef;
			const { value: needYBar } = needYBarRef;
			const { value: mergedClsPrefix } = mergedClsPrefixRef;
			const { value: xRailEl } = xRailRef;
			const { value: yRailEl } = yRailRef;
			if (xRailEl) {
				if (!needXBar) xRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
				else xRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
			}
			if (yRailEl) {
				if (!needYBar) yRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
				else yRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
			}
		});
		onMounted(() => {
			if (props.container) return;
			sync();
		});
		onBeforeUnmount(() => {
			if (xBarVanishTimerId !== void 0) window.clearTimeout(xBarVanishTimerId);
			if (yBarVanishTimerId !== void 0) window.clearTimeout(yBarVanishTimerId);
			off("mousemove", window, handleYScrollMouseMove, true);
			off("mouseup", window, handleYScrollMouseUp, true);
		});
		const cssVarsRef = computed(() => {
			const { common: { cubicBezierEaseInOut }, self: { color, colorHover, height, width, borderRadius, railInsetHorizontalTop, railInsetHorizontalBottom, railInsetVerticalRight, railInsetVerticalLeft, railColor } } = themeRef.value;
			const { top: railTopHorizontalTop, right: railRightHorizontalTop, bottom: railBottomHorizontalTop, left: railLeftHorizontalTop } = getMargin(railInsetHorizontalTop);
			const { top: railTopHorizontalBottom, right: railRightHorizontalBottom, bottom: railBottomHorizontalBottom, left: railLeftHorizontalBottom } = getMargin(railInsetHorizontalBottom);
			const { top: railTopVerticalRight, right: railRightVerticalRight, bottom: railBottomVerticalRight, left: railLeftVerticalRight } = getMargin((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? rtlInset(railInsetVerticalRight) : railInsetVerticalRight);
			const { top: railTopVerticalLeft, right: railRightVerticalLeft, bottom: railBottomVerticalLeft, left: railLeftVerticalLeft } = getMargin((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? rtlInset(railInsetVerticalLeft) : railInsetVerticalLeft);
			return {
				"--n-scrollbar-bezier": cubicBezierEaseInOut,
				"--n-scrollbar-color": color,
				"--n-scrollbar-color-hover": colorHover,
				"--n-scrollbar-border-radius": borderRadius,
				"--n-scrollbar-width": width,
				"--n-scrollbar-height": height,
				"--n-scrollbar-rail-top-horizontal-top": railTopHorizontalTop,
				"--n-scrollbar-rail-right-horizontal-top": railRightHorizontalTop,
				"--n-scrollbar-rail-bottom-horizontal-top": railBottomHorizontalTop,
				"--n-scrollbar-rail-left-horizontal-top": railLeftHorizontalTop,
				"--n-scrollbar-rail-top-horizontal-bottom": railTopHorizontalBottom,
				"--n-scrollbar-rail-right-horizontal-bottom": railRightHorizontalBottom,
				"--n-scrollbar-rail-bottom-horizontal-bottom": railBottomHorizontalBottom,
				"--n-scrollbar-rail-left-horizontal-bottom": railLeftHorizontalBottom,
				"--n-scrollbar-rail-top-vertical-right": railTopVerticalRight,
				"--n-scrollbar-rail-right-vertical-right": railRightVerticalRight,
				"--n-scrollbar-rail-bottom-vertical-right": railBottomVerticalRight,
				"--n-scrollbar-rail-left-vertical-right": railLeftVerticalRight,
				"--n-scrollbar-rail-top-vertical-left": railTopVerticalLeft,
				"--n-scrollbar-rail-right-vertical-left": railRightVerticalLeft,
				"--n-scrollbar-rail-bottom-vertical-left": railBottomVerticalLeft,
				"--n-scrollbar-rail-left-vertical-left": railLeftVerticalLeft,
				"--n-scrollbar-rail-color": railColor
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("scrollbar", void 0, cssVarsRef, props) : void 0;
		return Object.assign(Object.assign({}, {
			scrollTo,
			scrollBy,
			sync,
			syncUnifiedContainer,
			handleMouseEnterWrapper,
			handleMouseLeaveWrapper
		}), {
			mergedClsPrefix: mergedClsPrefixRef,
			rtlEnabled: rtlEnabledRef,
			containerScrollTop: containerScrollTopRef,
			wrapperRef,
			containerRef,
			contentRef,
			yRailRef,
			xRailRef,
			needYBar: needYBarRef,
			needXBar: needXBarRef,
			yBarSizePx: yBarSizePxRef,
			xBarSizePx: xBarSizePxRef,
			yBarTopPx: yBarTopPxRef,
			xBarLeftPx: xBarLeftPxRef,
			isShowXBar: mergedShowXBarRef,
			isShowYBar: mergedShowYBarRef,
			isIos,
			handleScroll,
			handleContentResize,
			handleContainerResize,
			handleYScrollMouseDown,
			handleXScrollMouseDown,
			containerWidth: containerWidthRef,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		});
	},
	render() {
		var _a;
		const { $slots, mergedClsPrefix, triggerDisplayManually, rtlEnabled, internalHoistYRail, yPlacement, xPlacement, xScrollable } = this;
		if (!this.scrollable) return (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots);
		const triggerIsNone = this.trigger === "none";
		const createYRail = (className, style) => {
			return h("div", {
				ref: "yRailRef",
				class: [
					`${mergedClsPrefix}-scrollbar-rail`,
					`${mergedClsPrefix}-scrollbar-rail--vertical`,
					`${mergedClsPrefix}-scrollbar-rail--vertical--${yPlacement}`,
					className
				],
				"data-scrollbar-rail": true,
				style: [style || "", this.verticalRailStyle],
				"aria-hidden": true
			}, h(triggerIsNone ? Wrapper : Transition, triggerIsNone ? null : { name: "fade-in-transition" }, { default: () => this.needYBar && this.isShowYBar && !this.isIos ? h("div", {
				class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`,
				style: {
					height: this.yBarSizePx,
					top: this.yBarTopPx
				},
				onMousedown: this.handleYScrollMouseDown
			}) : null }));
		};
		const createChildren = () => {
			var _a, _b;
			(_a = this.onRender) === null || _a === void 0 || _a.call(this);
			return h("div", mergeProps(this.$attrs, {
				role: "none",
				ref: "wrapperRef",
				class: [
					`${mergedClsPrefix}-scrollbar`,
					this.themeClass,
					rtlEnabled && `${mergedClsPrefix}-scrollbar--rtl`
				],
				style: this.cssVars,
				onMouseenter: triggerDisplayManually ? void 0 : this.handleMouseEnterWrapper,
				onMouseleave: triggerDisplayManually ? void 0 : this.handleMouseLeaveWrapper
			}), [
				this.container ? (_b = $slots.default) === null || _b === void 0 ? void 0 : _b.call($slots) : h("div", {
					role: "none",
					ref: "containerRef",
					class: [`${mergedClsPrefix}-scrollbar-container`, this.containerClass],
					style: [this.containerStyle, this.internalExposeWidthCssVar ? { "--n-scrollbar-current-width": pxfy(this.containerWidth) } : void 0],
					onScroll: this.handleScroll,
					onWheel: this.onWheel
				}, h(VResizeObserver_default, { onResize: this.handleContentResize }, { default: () => h("div", {
					ref: "contentRef",
					role: "none",
					style: [{ width: this.xScrollable ? "fit-content" : null }, this.contentStyle],
					class: [`${mergedClsPrefix}-scrollbar-content`, this.contentClass]
				}, $slots) })),
				internalHoistYRail ? null : createYRail(void 0, void 0),
				xScrollable && h("div", {
					ref: "xRailRef",
					class: [
						`${mergedClsPrefix}-scrollbar-rail`,
						`${mergedClsPrefix}-scrollbar-rail--horizontal`,
						`${mergedClsPrefix}-scrollbar-rail--horizontal--${xPlacement}`
					],
					style: this.horizontalRailStyle,
					"data-scrollbar-rail": true,
					"aria-hidden": true
				}, h(triggerIsNone ? Wrapper : Transition, triggerIsNone ? null : { name: "fade-in-transition" }, { default: () => this.needXBar && this.isShowXBar && !this.isIos ? h("div", {
					class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`,
					style: {
						width: this.xBarSizePx,
						right: rtlEnabled ? this.xBarLeftPx : void 0,
						left: rtlEnabled ? void 0 : this.xBarLeftPx
					},
					onMousedown: this.handleXScrollMouseDown
				}) : null }))
			]);
		};
		const scrollbarNode = this.container ? createChildren() : h(VResizeObserver_default, { onResize: this.handleContainerResize }, { default: createChildren });
		if (internalHoistYRail) return h(Fragment, null, scrollbarNode, createYRail(this.themeClass, this.cssVars));
		else return scrollbarNode;
	}
});
var XScrollbar = Scrollbar;
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/empty/styles/_common.mjs
var _common_default$40 = {
	iconSizeTiny: "28px",
	iconSizeSmall: "34px",
	iconSizeMedium: "40px",
	iconSizeLarge: "46px",
	iconSizeHuge: "52px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/empty/styles/light.mjs
function self$85(vars) {
	const { textColorDisabled, iconColor, textColor2, fontSizeTiny, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeHuge } = vars;
	return Object.assign(Object.assign({}, _common_default$40), {
		fontSizeTiny,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		fontSizeHuge,
		textColor: textColorDisabled,
		iconColor,
		extraTextColor: textColor2
	});
}
var emptyLight = {
	name: "Empty",
	common: derived,
	self: self$85
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/empty/styles/dark.mjs
var emptyDark = {
	name: "Empty",
	common: derived$1,
	self: self$85
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/select-menu/styles/_common.mjs
var _common_default$39 = {
	height: "calc(var(--n-option-height) * 7.6)",
	paddingTiny: "4px 0",
	paddingSmall: "4px 0",
	paddingMedium: "4px 0",
	paddingLarge: "4px 0",
	paddingHuge: "4px 0",
	optionPaddingTiny: "0 12px",
	optionPaddingSmall: "0 12px",
	optionPaddingMedium: "0 12px",
	optionPaddingLarge: "0 12px",
	optionPaddingHuge: "0 12px",
	loadingSize: "18px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/select-menu/styles/light.mjs
function self$84(vars) {
	const { borderRadius, popoverColor, textColor3, dividerColor, textColor2, primaryColorPressed, textColorDisabled, primaryColor, opacityDisabled, hoverColor, fontSizeTiny, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeHuge, heightTiny, heightSmall, heightMedium, heightLarge, heightHuge } = vars;
	return Object.assign(Object.assign({}, _common_default$39), {
		optionFontSizeTiny: fontSizeTiny,
		optionFontSizeSmall: fontSizeSmall,
		optionFontSizeMedium: fontSizeMedium,
		optionFontSizeLarge: fontSizeLarge,
		optionFontSizeHuge: fontSizeHuge,
		optionHeightTiny: heightTiny,
		optionHeightSmall: heightSmall,
		optionHeightMedium: heightMedium,
		optionHeightLarge: heightLarge,
		optionHeightHuge: heightHuge,
		borderRadius,
		color: popoverColor,
		groupHeaderTextColor: textColor3,
		actionDividerColor: dividerColor,
		optionTextColor: textColor2,
		optionTextColorPressed: primaryColorPressed,
		optionTextColorDisabled: textColorDisabled,
		optionTextColorActive: primaryColor,
		optionOpacityDisabled: opacityDisabled,
		optionCheckColor: primaryColor,
		optionColorPending: hoverColor,
		optionColorActive: "rgba(0, 0, 0, 0)",
		optionColorActivePending: hoverColor,
		actionTextColor: textColor2,
		loadingColor: primaryColor
	});
}
var internalSelectMenuLight = createTheme({
	name: "InternalSelectMenu",
	common: derived,
	peers: {
		Scrollbar: scrollbarLight,
		Empty: emptyLight
	},
	self: self$84
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/select-menu/styles/dark.mjs
var internalSelectMenuDark = {
	name: "InternalSelectMenu",
	common: derived$1,
	peers: {
		Scrollbar: scrollbarDark,
		Empty: emptyDark
	},
	self: self$84
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/transitions/fade-in-scale-up.cssr.mjs
var { cubicBezierEaseIn: cubicBezierEaseIn$1, cubicBezierEaseOut: cubicBezierEaseOut$1 } = _common_default$41;
function fadeInScaleUpTransition({ transformOrigin = "inherit", duration = ".2s", enterScale = ".9", originalTransform = "", originalTransition = "" } = {}) {
	return [
		c("&.fade-in-scale-up-transition-leave-active", {
			transformOrigin,
			transition: `opacity ${duration} ${cubicBezierEaseIn$1}, transform ${duration} ${cubicBezierEaseIn$1} ${originalTransition && `,${originalTransition}`}`
		}),
		c("&.fade-in-scale-up-transition-enter-active", {
			transformOrigin,
			transition: `opacity ${duration} ${cubicBezierEaseOut$1}, transform ${duration} ${cubicBezierEaseOut$1} ${originalTransition && `,${originalTransition}`}`
		}),
		c("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
			opacity: 0,
			transform: `${originalTransform} scale(${enterScale})`
		}),
		c("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
			opacity: 1,
			transform: `${originalTransform} scale(1)`
		})
	];
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popover/styles/_common.mjs
var _common_default$38 = {
	space: "6px",
	spaceArrow: "10px",
	arrowOffset: "10px",
	arrowOffsetVertical: "10px",
	arrowHeight: "6px",
	padding: "8px 14px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popover/styles/light.mjs
function self$83(vars) {
	const { boxShadow2, popoverColor, textColor2, borderRadius, fontSize, dividerColor } = vars;
	return Object.assign(Object.assign({}, _common_default$38), {
		fontSize,
		borderRadius,
		color: popoverColor,
		dividerColor,
		textColor: textColor2,
		boxShadow: boxShadow2
	});
}
var popoverLight = createTheme({
	name: "Popover",
	common: derived,
	peers: { Scrollbar: scrollbarLight },
	self: self$83
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popover/styles/dark.mjs
var popoverDark = {
	name: "Popover",
	common: derived$1,
	peers: { Scrollbar: scrollbarDark },
	self: self$83
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tag/styles/_common.mjs
var _common_default$37 = {
	closeIconSizeTiny: "12px",
	closeIconSizeSmall: "12px",
	closeIconSizeMedium: "14px",
	closeIconSizeLarge: "14px",
	closeSizeTiny: "16px",
	closeSizeSmall: "16px",
	closeSizeMedium: "18px",
	closeSizeLarge: "18px",
	padding: "0 7px",
	closeMargin: "0 0 0 4px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tag/styles/dark.mjs
var tagDark = {
	name: "Tag",
	common: derived$1,
	self(vars) {
		const { textColor2, primaryColorHover, primaryColorPressed, primaryColor, infoColor, successColor, warningColor, errorColor, baseColor, borderColor, tagColor, opacityDisabled, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, borderRadiusSmall: borderRadius, fontSizeMini, fontSizeTiny, fontSizeSmall, fontSizeMedium, heightMini, heightTiny, heightSmall, heightMedium, buttonColor2Hover, buttonColor2Pressed, fontWeightStrong } = vars;
		return Object.assign(Object.assign({}, _common_default$37), {
			closeBorderRadius: borderRadius,
			heightTiny: heightMini,
			heightSmall: heightTiny,
			heightMedium: heightSmall,
			heightLarge: heightMedium,
			borderRadius,
			opacityDisabled,
			fontSizeTiny: fontSizeMini,
			fontSizeSmall: fontSizeTiny,
			fontSizeMedium: fontSizeSmall,
			fontSizeLarge: fontSizeMedium,
			fontWeightStrong,
			textColorCheckable: textColor2,
			textColorHoverCheckable: textColor2,
			textColorPressedCheckable: textColor2,
			textColorChecked: baseColor,
			colorCheckable: "#0000",
			colorHoverCheckable: buttonColor2Hover,
			colorPressedCheckable: buttonColor2Pressed,
			colorChecked: primaryColor,
			colorCheckedHover: primaryColorHover,
			colorCheckedPressed: primaryColorPressed,
			border: `1px solid ${borderColor}`,
			textColor: textColor2,
			color: tagColor,
			colorBordered: "#0000",
			closeIconColor,
			closeIconColorHover,
			closeIconColorPressed,
			closeColorHover,
			closeColorPressed,
			borderPrimary: `1px solid ${changeColor(primaryColor, { alpha: .3 })}`,
			textColorPrimary: primaryColor,
			colorPrimary: changeColor(primaryColor, { alpha: .16 }),
			colorBorderedPrimary: "#0000",
			closeIconColorPrimary: scaleColor(primaryColor, { lightness: .7 }),
			closeIconColorHoverPrimary: scaleColor(primaryColor, { lightness: .7 }),
			closeIconColorPressedPrimary: scaleColor(primaryColor, { lightness: .7 }),
			closeColorHoverPrimary: changeColor(primaryColor, { alpha: .16 }),
			closeColorPressedPrimary: changeColor(primaryColor, { alpha: .12 }),
			borderInfo: `1px solid ${changeColor(infoColor, { alpha: .3 })}`,
			textColorInfo: infoColor,
			colorInfo: changeColor(infoColor, { alpha: .16 }),
			colorBorderedInfo: "#0000",
			closeIconColorInfo: scaleColor(infoColor, { alpha: .7 }),
			closeIconColorHoverInfo: scaleColor(infoColor, { alpha: .7 }),
			closeIconColorPressedInfo: scaleColor(infoColor, { alpha: .7 }),
			closeColorHoverInfo: changeColor(infoColor, { alpha: .16 }),
			closeColorPressedInfo: changeColor(infoColor, { alpha: .12 }),
			borderSuccess: `1px solid ${changeColor(successColor, { alpha: .3 })}`,
			textColorSuccess: successColor,
			colorSuccess: changeColor(successColor, { alpha: .16 }),
			colorBorderedSuccess: "#0000",
			closeIconColorSuccess: scaleColor(successColor, { alpha: .7 }),
			closeIconColorHoverSuccess: scaleColor(successColor, { alpha: .7 }),
			closeIconColorPressedSuccess: scaleColor(successColor, { alpha: .7 }),
			closeColorHoverSuccess: changeColor(successColor, { alpha: .16 }),
			closeColorPressedSuccess: changeColor(successColor, { alpha: .12 }),
			borderWarning: `1px solid ${changeColor(warningColor, { alpha: .3 })}`,
			textColorWarning: warningColor,
			colorWarning: changeColor(warningColor, { alpha: .16 }),
			colorBorderedWarning: "#0000",
			closeIconColorWarning: scaleColor(warningColor, { alpha: .7 }),
			closeIconColorHoverWarning: scaleColor(warningColor, { alpha: .7 }),
			closeIconColorPressedWarning: scaleColor(warningColor, { alpha: .7 }),
			closeColorHoverWarning: changeColor(warningColor, { alpha: .16 }),
			closeColorPressedWarning: changeColor(warningColor, { alpha: .11 }),
			borderError: `1px solid ${changeColor(errorColor, { alpha: .3 })}`,
			textColorError: errorColor,
			colorError: changeColor(errorColor, { alpha: .16 }),
			colorBorderedError: "#0000",
			closeIconColorError: scaleColor(errorColor, { alpha: .7 }),
			closeIconColorHoverError: scaleColor(errorColor, { alpha: .7 }),
			closeIconColorPressedError: scaleColor(errorColor, { alpha: .7 }),
			closeColorHoverError: changeColor(errorColor, { alpha: .16 }),
			closeColorPressedError: changeColor(errorColor, { alpha: .12 })
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tag/styles/light.mjs
function self$82(vars) {
	const { textColor2, primaryColorHover, primaryColorPressed, primaryColor, infoColor, successColor, warningColor, errorColor, baseColor, borderColor, opacityDisabled, tagColor, closeIconColor, closeIconColorHover, closeIconColorPressed, borderRadiusSmall: borderRadius, fontSizeMini, fontSizeTiny, fontSizeSmall, fontSizeMedium, heightMini, heightTiny, heightSmall, heightMedium, closeColorHover, closeColorPressed, buttonColor2Hover, buttonColor2Pressed, fontWeightStrong } = vars;
	return Object.assign(Object.assign({}, _common_default$37), {
		closeBorderRadius: borderRadius,
		heightTiny: heightMini,
		heightSmall: heightTiny,
		heightMedium: heightSmall,
		heightLarge: heightMedium,
		borderRadius,
		opacityDisabled,
		fontSizeTiny: fontSizeMini,
		fontSizeSmall: fontSizeTiny,
		fontSizeMedium: fontSizeSmall,
		fontSizeLarge: fontSizeMedium,
		fontWeightStrong,
		textColorCheckable: textColor2,
		textColorHoverCheckable: textColor2,
		textColorPressedCheckable: textColor2,
		textColorChecked: baseColor,
		colorCheckable: "#0000",
		colorHoverCheckable: buttonColor2Hover,
		colorPressedCheckable: buttonColor2Pressed,
		colorChecked: primaryColor,
		colorCheckedHover: primaryColorHover,
		colorCheckedPressed: primaryColorPressed,
		border: `1px solid ${borderColor}`,
		textColor: textColor2,
		color: tagColor,
		colorBordered: "rgb(250, 250, 252)",
		closeIconColor,
		closeIconColorHover,
		closeIconColorPressed,
		closeColorHover,
		closeColorPressed,
		borderPrimary: `1px solid ${changeColor(primaryColor, { alpha: .3 })}`,
		textColorPrimary: primaryColor,
		colorPrimary: changeColor(primaryColor, { alpha: .12 }),
		colorBorderedPrimary: changeColor(primaryColor, { alpha: .1 }),
		closeIconColorPrimary: primaryColor,
		closeIconColorHoverPrimary: primaryColor,
		closeIconColorPressedPrimary: primaryColor,
		closeColorHoverPrimary: changeColor(primaryColor, { alpha: .12 }),
		closeColorPressedPrimary: changeColor(primaryColor, { alpha: .18 }),
		borderInfo: `1px solid ${changeColor(infoColor, { alpha: .3 })}`,
		textColorInfo: infoColor,
		colorInfo: changeColor(infoColor, { alpha: .12 }),
		colorBorderedInfo: changeColor(infoColor, { alpha: .1 }),
		closeIconColorInfo: infoColor,
		closeIconColorHoverInfo: infoColor,
		closeIconColorPressedInfo: infoColor,
		closeColorHoverInfo: changeColor(infoColor, { alpha: .12 }),
		closeColorPressedInfo: changeColor(infoColor, { alpha: .18 }),
		borderSuccess: `1px solid ${changeColor(successColor, { alpha: .3 })}`,
		textColorSuccess: successColor,
		colorSuccess: changeColor(successColor, { alpha: .12 }),
		colorBorderedSuccess: changeColor(successColor, { alpha: .1 }),
		closeIconColorSuccess: successColor,
		closeIconColorHoverSuccess: successColor,
		closeIconColorPressedSuccess: successColor,
		closeColorHoverSuccess: changeColor(successColor, { alpha: .12 }),
		closeColorPressedSuccess: changeColor(successColor, { alpha: .18 }),
		borderWarning: `1px solid ${changeColor(warningColor, { alpha: .35 })}`,
		textColorWarning: warningColor,
		colorWarning: changeColor(warningColor, { alpha: .15 }),
		colorBorderedWarning: changeColor(warningColor, { alpha: .12 }),
		closeIconColorWarning: warningColor,
		closeIconColorHoverWarning: warningColor,
		closeIconColorPressedWarning: warningColor,
		closeColorHoverWarning: changeColor(warningColor, { alpha: .12 }),
		closeColorPressedWarning: changeColor(warningColor, { alpha: .18 }),
		borderError: `1px solid ${changeColor(errorColor, { alpha: .23 })}`,
		textColorError: errorColor,
		colorError: changeColor(errorColor, { alpha: .1 }),
		colorBorderedError: changeColor(errorColor, { alpha: .08 }),
		closeIconColorError: errorColor,
		closeIconColorHoverError: errorColor,
		closeIconColorPressedError: errorColor,
		closeColorHoverError: changeColor(errorColor, { alpha: .12 }),
		closeColorPressedError: changeColor(errorColor, { alpha: .18 })
	});
}
var tagLight = {
	name: "Tag",
	common: derived,
	self: self$82
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/selection/styles/_common.mjs
var _common_default$36 = {
	paddingSingle: "0 26px 0 12px",
	paddingMultiple: "3px 26px 0 12px",
	clearSize: "16px",
	arrowSize: "16px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/selection/styles/dark.mjs
var internalSelectionDark = {
	name: "InternalSelection",
	common: derived$1,
	peers: { Popover: popoverDark },
	self(vars) {
		const { borderRadius, textColor2, textColorDisabled, inputColor, inputColorDisabled, primaryColor, primaryColorHover, warningColor, warningColorHover, errorColor, errorColorHover, iconColor, iconColorDisabled, clearColor, clearColorHover, clearColorPressed, placeholderColor, placeholderColorDisabled, fontSizeTiny, fontSizeSmall, fontSizeMedium, fontSizeLarge, heightTiny, heightSmall, heightMedium, heightLarge, fontWeight } = vars;
		return Object.assign(Object.assign({}, _common_default$36), {
			fontWeight,
			fontSizeTiny,
			fontSizeSmall,
			fontSizeMedium,
			fontSizeLarge,
			heightTiny,
			heightSmall,
			heightMedium,
			heightLarge,
			borderRadius,
			textColor: textColor2,
			textColorDisabled,
			placeholderColor,
			placeholderColorDisabled,
			color: inputColor,
			colorDisabled: inputColorDisabled,
			colorActive: changeColor(primaryColor, { alpha: .1 }),
			border: "1px solid #0000",
			borderHover: `1px solid ${primaryColorHover}`,
			borderActive: `1px solid ${primaryColor}`,
			borderFocus: `1px solid ${primaryColorHover}`,
			boxShadowHover: "none",
			boxShadowActive: `0 0 8px 0 ${changeColor(primaryColor, { alpha: .4 })}`,
			boxShadowFocus: `0 0 8px 0 ${changeColor(primaryColor, { alpha: .4 })}`,
			caretColor: primaryColor,
			arrowColor: iconColor,
			arrowColorDisabled: iconColorDisabled,
			loadingColor: primaryColor,
			borderWarning: `1px solid ${warningColor}`,
			borderHoverWarning: `1px solid ${warningColorHover}`,
			borderActiveWarning: `1px solid ${warningColor}`,
			borderFocusWarning: `1px solid ${warningColorHover}`,
			boxShadowHoverWarning: "none",
			boxShadowActiveWarning: `0 0 8px 0 ${changeColor(warningColor, { alpha: .4 })}`,
			boxShadowFocusWarning: `0 0 8px 0 ${changeColor(warningColor, { alpha: .4 })}`,
			colorActiveWarning: changeColor(warningColor, { alpha: .1 }),
			caretColorWarning: warningColor,
			borderError: `1px solid ${errorColor}`,
			borderHoverError: `1px solid ${errorColorHover}`,
			borderActiveError: `1px solid ${errorColor}`,
			borderFocusError: `1px solid ${errorColorHover}`,
			boxShadowHoverError: "none",
			boxShadowActiveError: `0 0 8px 0 ${changeColor(errorColor, { alpha: .4 })}`,
			boxShadowFocusError: `0 0 8px 0 ${changeColor(errorColor, { alpha: .4 })}`,
			colorActiveError: changeColor(errorColor, { alpha: .1 }),
			caretColorError: errorColor,
			clearColor,
			clearColorHover,
			clearColorPressed
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/selection/styles/light.mjs
function self$81(vars) {
	const { borderRadius, textColor2, textColorDisabled, inputColor, inputColorDisabled, primaryColor, primaryColorHover, warningColor, warningColorHover, errorColor, errorColorHover, borderColor, iconColor, iconColorDisabled, clearColor, clearColorHover, clearColorPressed, placeholderColor, placeholderColorDisabled, fontSizeTiny, fontSizeSmall, fontSizeMedium, fontSizeLarge, heightTiny, heightSmall, heightMedium, heightLarge, fontWeight } = vars;
	return Object.assign(Object.assign({}, _common_default$36), {
		fontSizeTiny,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		heightTiny,
		heightSmall,
		heightMedium,
		heightLarge,
		borderRadius,
		fontWeight,
		textColor: textColor2,
		textColorDisabled,
		placeholderColor,
		placeholderColorDisabled,
		color: inputColor,
		colorDisabled: inputColorDisabled,
		colorActive: inputColor,
		border: `1px solid ${borderColor}`,
		borderHover: `1px solid ${primaryColorHover}`,
		borderActive: `1px solid ${primaryColor}`,
		borderFocus: `1px solid ${primaryColorHover}`,
		boxShadowHover: "none",
		boxShadowActive: `0 0 0 2px ${changeColor(primaryColor, { alpha: .2 })}`,
		boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, { alpha: .2 })}`,
		caretColor: primaryColor,
		arrowColor: iconColor,
		arrowColorDisabled: iconColorDisabled,
		loadingColor: primaryColor,
		borderWarning: `1px solid ${warningColor}`,
		borderHoverWarning: `1px solid ${warningColorHover}`,
		borderActiveWarning: `1px solid ${warningColor}`,
		borderFocusWarning: `1px solid ${warningColorHover}`,
		boxShadowHoverWarning: "none",
		boxShadowActiveWarning: `0 0 0 2px ${changeColor(warningColor, { alpha: .2 })}`,
		boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, { alpha: .2 })}`,
		colorActiveWarning: inputColor,
		caretColorWarning: warningColor,
		borderError: `1px solid ${errorColor}`,
		borderHoverError: `1px solid ${errorColorHover}`,
		borderActiveError: `1px solid ${errorColor}`,
		borderFocusError: `1px solid ${errorColorHover}`,
		boxShadowHoverError: "none",
		boxShadowActiveError: `0 0 0 2px ${changeColor(errorColor, { alpha: .2 })}`,
		boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, { alpha: .2 })}`,
		colorActiveError: inputColor,
		caretColorError: errorColor,
		clearColor,
		clearColorHover,
		clearColorPressed
	});
}
var internalSelectionLight = createTheme({
	name: "InternalSelection",
	common: derived,
	peers: { Popover: popoverLight },
	self: self$81
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/transitions/fade-in-width-expand.cssr.mjs
var { cubicBezierEaseInOut: cubicBezierEaseInOut$1 } = _common_default$41;
function fadeInWidthExpandTransition({ duration = ".2s", delay = ".1s" } = {}) {
	return [
		c("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", { opacity: 1 }),
		c("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),
		c("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${duration} ${cubicBezierEaseInOut$1},
 max-width ${duration} ${cubicBezierEaseInOut$1} ${delay},
 margin-left ${duration} ${cubicBezierEaseInOut$1} ${delay},
 margin-right ${duration} ${cubicBezierEaseInOut$1} ${delay};
 `),
		c("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${duration} ${cubicBezierEaseInOut$1} ${delay},
 max-width ${duration} ${cubicBezierEaseInOut$1},
 margin-left ${duration} ${cubicBezierEaseInOut$1},
 margin-right ${duration} ${cubicBezierEaseInOut$1};
 `)
	];
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/wave/src/styles/index.cssr.mjs
var index_cssr_default$6 = cB("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_internal/wave/src/Wave.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var Wave_default = defineComponent({
	name: "BaseWave",
	props: { clsPrefix: {
		type: String,
		required: true
	} },
	setup(props) {
		useStyle("-base-wave", index_cssr_default$6, toRef(props, "clsPrefix"));
		const selfRef = ref(null);
		const activeRef = ref(false);
		let animationTimerId = null;
		onBeforeUnmount(() => {
			if (animationTimerId !== null) window.clearTimeout(animationTimerId);
		});
		return {
			active: activeRef,
			selfRef,
			play() {
				if (animationTimerId !== null) {
					window.clearTimeout(animationTimerId);
					activeRef.value = false;
					animationTimerId = null;
				}
				nextTick(() => {
					var _a;
					(_a = selfRef.value) === null || _a === void 0 || _a.offsetHeight;
					activeRef.value = true;
					animationTimerId = window.setTimeout(() => {
						activeRef.value = false;
						animationTimerId = null;
					}, 1e3);
				});
			}
		};
	},
	render() {
		const { clsPrefix } = this;
		return h("div", {
			ref: "selfRef",
			"aria-hidden": true,
			class: [`${clsPrefix}-base-wave`, this.active && `${clsPrefix}-base-wave--active`]
		});
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/alert/styles/_common.mjs
var _common_default$35 = {
	iconMargin: "11px 8px 0 12px",
	iconMarginRtl: "11px 12px 0 8px",
	iconSize: "24px",
	closeIconSize: "16px",
	closeSize: "20px",
	closeMargin: "13px 14px 0 0",
	closeMarginRtl: "13px 0 0 14px",
	padding: "13px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/alert/styles/dark.mjs
var alertDark = {
	name: "Alert",
	common: derived$1,
	self(vars) {
		const { lineHeight, borderRadius, fontWeightStrong, dividerColor, inputColor, textColor1, textColor2, closeColorHover, closeColorPressed, closeIconColor, closeIconColorHover, closeIconColorPressed, infoColorSuppl, successColorSuppl, warningColorSuppl, errorColorSuppl, fontSize } = vars;
		return Object.assign(Object.assign({}, _common_default$35), {
			fontSize,
			lineHeight,
			titleFontWeight: fontWeightStrong,
			borderRadius,
			border: `1px solid ${dividerColor}`,
			color: inputColor,
			titleTextColor: textColor1,
			iconColor: textColor2,
			contentTextColor: textColor2,
			closeBorderRadius: borderRadius,
			closeColorHover,
			closeColorPressed,
			closeIconColor,
			closeIconColorHover,
			closeIconColorPressed,
			borderInfo: `1px solid ${changeColor(infoColorSuppl, { alpha: .35 })}`,
			colorInfo: changeColor(infoColorSuppl, { alpha: .25 }),
			titleTextColorInfo: textColor1,
			iconColorInfo: infoColorSuppl,
			contentTextColorInfo: textColor2,
			closeColorHoverInfo: closeColorHover,
			closeColorPressedInfo: closeColorPressed,
			closeIconColorInfo: closeIconColor,
			closeIconColorHoverInfo: closeIconColorHover,
			closeIconColorPressedInfo: closeIconColorPressed,
			borderSuccess: `1px solid ${changeColor(successColorSuppl, { alpha: .35 })}`,
			colorSuccess: changeColor(successColorSuppl, { alpha: .25 }),
			titleTextColorSuccess: textColor1,
			iconColorSuccess: successColorSuppl,
			contentTextColorSuccess: textColor2,
			closeColorHoverSuccess: closeColorHover,
			closeColorPressedSuccess: closeColorPressed,
			closeIconColorSuccess: closeIconColor,
			closeIconColorHoverSuccess: closeIconColorHover,
			closeIconColorPressedSuccess: closeIconColorPressed,
			borderWarning: `1px solid ${changeColor(warningColorSuppl, { alpha: .35 })}`,
			colorWarning: changeColor(warningColorSuppl, { alpha: .25 }),
			titleTextColorWarning: textColor1,
			iconColorWarning: warningColorSuppl,
			contentTextColorWarning: textColor2,
			closeColorHoverWarning: closeColorHover,
			closeColorPressedWarning: closeColorPressed,
			closeIconColorWarning: closeIconColor,
			closeIconColorHoverWarning: closeIconColorHover,
			closeIconColorPressedWarning: closeIconColorPressed,
			borderError: `1px solid ${changeColor(errorColorSuppl, { alpha: .35 })}`,
			colorError: changeColor(errorColorSuppl, { alpha: .25 }),
			titleTextColorError: textColor1,
			iconColorError: errorColorSuppl,
			contentTextColorError: textColor2,
			closeColorHoverError: closeColorHover,
			closeColorPressedError: closeColorPressed,
			closeIconColorError: closeIconColor,
			closeIconColorHoverError: closeIconColorHover,
			closeIconColorPressedError: closeIconColorPressed
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/alert/styles/light.mjs
function self$80(vars) {
	const { lineHeight, borderRadius, fontWeightStrong, baseColor, dividerColor, actionColor, textColor1, textColor2, closeColorHover, closeColorPressed, closeIconColor, closeIconColorHover, closeIconColorPressed, infoColor, successColor, warningColor, errorColor, fontSize } = vars;
	return Object.assign(Object.assign({}, _common_default$35), {
		fontSize,
		lineHeight,
		titleFontWeight: fontWeightStrong,
		borderRadius,
		border: `1px solid ${dividerColor}`,
		color: actionColor,
		titleTextColor: textColor1,
		iconColor: textColor2,
		contentTextColor: textColor2,
		closeBorderRadius: borderRadius,
		closeColorHover,
		closeColorPressed,
		closeIconColor,
		closeIconColorHover,
		closeIconColorPressed,
		borderInfo: `1px solid ${composite(baseColor, changeColor(infoColor, { alpha: .25 }))}`,
		colorInfo: composite(baseColor, changeColor(infoColor, { alpha: .08 })),
		titleTextColorInfo: textColor1,
		iconColorInfo: infoColor,
		contentTextColorInfo: textColor2,
		closeColorHoverInfo: closeColorHover,
		closeColorPressedInfo: closeColorPressed,
		closeIconColorInfo: closeIconColor,
		closeIconColorHoverInfo: closeIconColorHover,
		closeIconColorPressedInfo: closeIconColorPressed,
		borderSuccess: `1px solid ${composite(baseColor, changeColor(successColor, { alpha: .25 }))}`,
		colorSuccess: composite(baseColor, changeColor(successColor, { alpha: .08 })),
		titleTextColorSuccess: textColor1,
		iconColorSuccess: successColor,
		contentTextColorSuccess: textColor2,
		closeColorHoverSuccess: closeColorHover,
		closeColorPressedSuccess: closeColorPressed,
		closeIconColorSuccess: closeIconColor,
		closeIconColorHoverSuccess: closeIconColorHover,
		closeIconColorPressedSuccess: closeIconColorPressed,
		borderWarning: `1px solid ${composite(baseColor, changeColor(warningColor, { alpha: .33 }))}`,
		colorWarning: composite(baseColor, changeColor(warningColor, { alpha: .08 })),
		titleTextColorWarning: textColor1,
		iconColorWarning: warningColor,
		contentTextColorWarning: textColor2,
		closeColorHoverWarning: closeColorHover,
		closeColorPressedWarning: closeColorPressed,
		closeIconColorWarning: closeIconColor,
		closeIconColorHoverWarning: closeIconColorHover,
		closeIconColorPressedWarning: closeIconColorPressed,
		borderError: `1px solid ${composite(baseColor, changeColor(errorColor, { alpha: .25 }))}`,
		colorError: composite(baseColor, changeColor(errorColor, { alpha: .08 })),
		titleTextColorError: textColor1,
		iconColorError: errorColor,
		contentTextColorError: textColor2,
		closeColorHoverError: closeColorHover,
		closeColorPressedError: closeColorPressed,
		closeIconColorError: closeIconColor,
		closeIconColorHoverError: closeIconColorHover,
		closeIconColorPressedError: closeIconColorPressed
	});
}
var alertLight = {
	name: "Alert",
	common: derived,
	self: self$80
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_styles/transitions/fade-in-height-expand.cssr.mjs
var { cubicBezierEaseInOut, cubicBezierEaseOut, cubicBezierEaseIn } = _common_default$41;
function fadeInHeightExpandTransition({ overflow = "hidden", duration = ".3s", originalTransition = "", leavingDelay = "0s", foldPadding = false, enterToProps = void 0, leaveToProps = void 0, reverse = false } = {}) {
	const enterClass = reverse ? "leave" : "enter";
	const leaveClass = reverse ? "enter" : "leave";
	return [
		c(`&.fade-in-height-expand-transition-${leaveClass}-from,
 &.fade-in-height-expand-transition-${enterClass}-to`, Object.assign(Object.assign({}, enterToProps), { opacity: 1 })),
		c(`&.fade-in-height-expand-transition-${leaveClass}-to,
 &.fade-in-height-expand-transition-${enterClass}-from`, Object.assign(Object.assign({}, leaveToProps), {
			opacity: 0,
			marginTop: "0 !important",
			marginBottom: "0 !important",
			paddingTop: foldPadding ? "0 !important" : void 0,
			paddingBottom: foldPadding ? "0 !important" : void 0
		})),
		c(`&.fade-in-height-expand-transition-${leaveClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 opacity ${duration} ${cubicBezierEaseOut} ${leavingDelay},
 margin-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 margin-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay}
 ${originalTransition ? `,${originalTransition}` : ""}
 `),
		c(`&.fade-in-height-expand-transition-${enterClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut},
 opacity ${duration} ${cubicBezierEaseIn},
 margin-top ${duration} ${cubicBezierEaseInOut},
 margin-bottom ${duration} ${cubicBezierEaseInOut},
 padding-top ${duration} ${cubicBezierEaseInOut},
 padding-bottom ${duration} ${cubicBezierEaseInOut}
 ${originalTransition ? `,${originalTransition}` : ""}
 `)
	];
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/anchor/styles/_common.mjs
var _common_default$34 = {
	linkFontSize: "13px",
	linkPadding: "0 0 0 16px",
	railWidth: "4px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/anchor/styles/light.mjs
function self$79(vars) {
	const { borderRadius, railColor, primaryColor, primaryColorHover, primaryColorPressed, textColor2 } = vars;
	return Object.assign(Object.assign({}, _common_default$34), {
		borderRadius,
		railColor,
		railColorActive: primaryColor,
		linkColor: changeColor(primaryColor, { alpha: .15 }),
		linkTextColor: textColor2,
		linkTextColorHover: primaryColorHover,
		linkTextColorPressed: primaryColorPressed,
		linkTextColorActive: primaryColor
	});
}
var anchorLight = {
	name: "Anchor",
	common: derived,
	self: self$79
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/anchor/styles/dark.mjs
var anchorDark = {
	name: "Anchor",
	common: derived$1,
	self: self$79
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/env/browser.mjs
var isChrome = isBrowser$1 && "chrome" in window;
isBrowser$1 && navigator.userAgent.includes("Firefox");
var isSafari = isBrowser$1 && navigator.userAgent.includes("Safari") && !isChrome;
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/input/styles/_common.mjs
var _common_default$33 = {
	paddingTiny: "0 8px",
	paddingSmall: "0 10px",
	paddingMedium: "0 12px",
	paddingLarge: "0 14px",
	clearSize: "16px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/input/styles/dark.mjs
function self$78(vars) {
	const { textColor2, textColor3, textColorDisabled, primaryColor, primaryColorHover, inputColor, inputColorDisabled, warningColor, warningColorHover, errorColor, errorColorHover, borderRadius, lineHeight, fontSizeTiny, fontSizeSmall, fontSizeMedium, fontSizeLarge, heightTiny, heightSmall, heightMedium, heightLarge, clearColor, clearColorHover, clearColorPressed, placeholderColor, placeholderColorDisabled, iconColor, iconColorDisabled, iconColorHover, iconColorPressed, fontWeight } = vars;
	return Object.assign(Object.assign({}, _common_default$33), {
		fontWeight,
		countTextColorDisabled: textColorDisabled,
		countTextColor: textColor3,
		heightTiny,
		heightSmall,
		heightMedium,
		heightLarge,
		fontSizeTiny,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		lineHeight,
		lineHeightTextarea: lineHeight,
		borderRadius,
		iconSize: "16px",
		groupLabelColor: inputColor,
		textColor: textColor2,
		textColorDisabled,
		textDecorationColor: textColor2,
		groupLabelTextColor: textColor2,
		caretColor: primaryColor,
		placeholderColor,
		placeholderColorDisabled,
		color: inputColor,
		colorDisabled: inputColorDisabled,
		colorFocus: changeColor(primaryColor, { alpha: .1 }),
		groupLabelBorder: "1px solid #0000",
		border: "1px solid #0000",
		borderHover: `1px solid ${primaryColorHover}`,
		borderDisabled: "1px solid #0000",
		borderFocus: `1px solid ${primaryColorHover}`,
		boxShadowFocus: `0 0 8px 0 ${changeColor(primaryColor, { alpha: .3 })}`,
		loadingColor: primaryColor,
		loadingColorWarning: warningColor,
		borderWarning: `1px solid ${warningColor}`,
		borderHoverWarning: `1px solid ${warningColorHover}`,
		colorFocusWarning: changeColor(warningColor, { alpha: .1 }),
		borderFocusWarning: `1px solid ${warningColorHover}`,
		boxShadowFocusWarning: `0 0 8px 0 ${changeColor(warningColor, { alpha: .3 })}`,
		caretColorWarning: warningColor,
		loadingColorError: errorColor,
		borderError: `1px solid ${errorColor}`,
		borderHoverError: `1px solid ${errorColorHover}`,
		colorFocusError: changeColor(errorColor, { alpha: .1 }),
		borderFocusError: `1px solid ${errorColorHover}`,
		boxShadowFocusError: `0 0 8px 0 ${changeColor(errorColor, { alpha: .3 })}`,
		caretColorError: errorColor,
		clearColor,
		clearColorHover,
		clearColorPressed,
		iconColor,
		iconColorDisabled,
		iconColorHover,
		iconColorPressed,
		suffixTextColor: textColor2
	});
}
var inputDark = createTheme({
	name: "Input",
	common: derived$1,
	peers: { Scrollbar: scrollbarDark },
	self: self$78
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/input/styles/light.mjs
function self$77(vars) {
	const { textColor2, textColor3, textColorDisabled, primaryColor, primaryColorHover, inputColor, inputColorDisabled, borderColor, warningColor, warningColorHover, errorColor, errorColorHover, borderRadius, lineHeight, fontSizeTiny, fontSizeSmall, fontSizeMedium, fontSizeLarge, heightTiny, heightSmall, heightMedium, heightLarge, actionColor, clearColor, clearColorHover, clearColorPressed, placeholderColor, placeholderColorDisabled, iconColor, iconColorDisabled, iconColorHover, iconColorPressed, fontWeight } = vars;
	return Object.assign(Object.assign({}, _common_default$33), {
		fontWeight,
		countTextColorDisabled: textColorDisabled,
		countTextColor: textColor3,
		heightTiny,
		heightSmall,
		heightMedium,
		heightLarge,
		fontSizeTiny,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		lineHeight,
		lineHeightTextarea: lineHeight,
		borderRadius,
		iconSize: "16px",
		groupLabelColor: actionColor,
		groupLabelTextColor: textColor2,
		textColor: textColor2,
		textColorDisabled,
		textDecorationColor: textColor2,
		caretColor: primaryColor,
		placeholderColor,
		placeholderColorDisabled,
		color: inputColor,
		colorDisabled: inputColorDisabled,
		colorFocus: inputColor,
		groupLabelBorder: `1px solid ${borderColor}`,
		border: `1px solid ${borderColor}`,
		borderHover: `1px solid ${primaryColorHover}`,
		borderDisabled: `1px solid ${borderColor}`,
		borderFocus: `1px solid ${primaryColorHover}`,
		boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, { alpha: .2 })}`,
		loadingColor: primaryColor,
		loadingColorWarning: warningColor,
		borderWarning: `1px solid ${warningColor}`,
		borderHoverWarning: `1px solid ${warningColorHover}`,
		colorFocusWarning: inputColor,
		borderFocusWarning: `1px solid ${warningColorHover}`,
		boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, { alpha: .2 })}`,
		caretColorWarning: warningColor,
		loadingColorError: errorColor,
		borderError: `1px solid ${errorColor}`,
		borderHoverError: `1px solid ${errorColorHover}`,
		colorFocusError: inputColor,
		borderFocusError: `1px solid ${errorColorHover}`,
		boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, { alpha: .2 })}`,
		caretColorError: errorColor,
		clearColor,
		clearColorHover,
		clearColorPressed,
		iconColor,
		iconColorDisabled,
		iconColorHover,
		iconColorPressed,
		suffixTextColor: textColor2
	});
}
var inputLight = createTheme({
	name: "Input",
	common: derived,
	peers: { Scrollbar: scrollbarLight },
	self: self$77
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/auto-complete/styles/light.mjs
function self$76(vars) {
	const { boxShadow2 } = vars;
	return { menuBoxShadow: boxShadow2 };
}
var autoCompleteLight = createTheme({
	name: "AutoComplete",
	common: derived,
	peers: {
		InternalSelectMenu: internalSelectMenuLight,
		Input: inputLight
	},
	self: self$76
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/auto-complete/styles/dark.mjs
var autoCompleteDark = {
	name: "AutoComplete",
	common: derived$1,
	peers: {
		InternalSelectMenu: internalSelectMenuDark,
		Input: inputDark
	},
	self: self$76
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/avatar/styles/light.mjs
function self$75(vars) {
	const { borderRadius, avatarColor, cardColor, fontSize, heightTiny, heightSmall, heightMedium, heightLarge, heightHuge, modalColor, popoverColor } = vars;
	return {
		borderRadius,
		fontSize,
		border: `2px solid ${cardColor}`,
		heightTiny,
		heightSmall,
		heightMedium,
		heightLarge,
		heightHuge,
		color: composite(cardColor, avatarColor),
		colorModal: composite(modalColor, avatarColor),
		colorPopover: composite(popoverColor, avatarColor)
	};
}
var avatarLight = {
	name: "Avatar",
	common: derived,
	self: self$75
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/avatar/styles/dark.mjs
var avatarDark = {
	name: "Avatar",
	common: derived$1,
	self: self$75
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/avatar-group/styles/light.mjs
function self$74() {
	return { gap: "-12px" };
}
var avatarGroupLight = createTheme({
	name: "AvatarGroup",
	common: derived,
	peers: { Avatar: avatarLight },
	self: self$74
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/avatar-group/styles/dark.mjs
var avatarGroupDark = {
	name: "AvatarGroup",
	common: derived$1,
	peers: { Avatar: avatarDark },
	self: self$74
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/back-top/styles/_common.mjs
var _common_default$32 = {
	width: "44px",
	height: "44px",
	borderRadius: "22px",
	iconSize: "26px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/back-top/styles/dark.mjs
var backTopDark = {
	name: "BackTop",
	common: derived$1,
	self(vars) {
		const { popoverColor, textColor2, primaryColorHover, primaryColorPressed } = vars;
		return Object.assign(Object.assign({}, _common_default$32), {
			color: popoverColor,
			textColor: textColor2,
			iconColor: textColor2,
			iconColorHover: primaryColorHover,
			iconColorPressed: primaryColorPressed,
			boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
			boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
			boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)"
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/back-top/styles/light.mjs
function self$73(vars) {
	const { popoverColor, textColor2, primaryColorHover, primaryColorPressed } = vars;
	return Object.assign(Object.assign({}, _common_default$32), {
		color: popoverColor,
		textColor: textColor2,
		iconColor: textColor2,
		iconColorHover: primaryColorHover,
		iconColorPressed: primaryColorPressed,
		boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
		boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
		boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)"
	});
}
var backTopLight = {
	name: "BackTop",
	common: derived,
	self: self$73
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/badge/styles/dark.mjs
var badgeDark = {
	name: "Badge",
	common: derived$1,
	self(vars) {
		const { errorColorSuppl, infoColorSuppl, successColorSuppl, warningColorSuppl, fontFamily } = vars;
		return {
			color: errorColorSuppl,
			colorInfo: infoColorSuppl,
			colorSuccess: successColorSuppl,
			colorError: errorColorSuppl,
			colorWarning: warningColorSuppl,
			fontSize: "12px",
			fontFamily
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/badge/styles/light.mjs
function self$72(vars) {
	const { errorColor, infoColor, successColor, warningColor, fontFamily } = vars;
	return {
		color: errorColor,
		colorInfo: infoColor,
		colorSuccess: successColor,
		colorError: errorColor,
		colorWarning: warningColor,
		fontSize: "12px",
		fontFamily
	};
}
var badgeLight = {
	name: "Badge",
	common: derived,
	self: self$72
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/breadcrumb/styles/_common.mjs
var _common_default$31 = { fontWeightActive: "400" };
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/breadcrumb/styles/light.mjs
function self$71(vars) {
	const { fontSize, textColor3, textColor2, borderRadius, buttonColor2Hover, buttonColor2Pressed } = vars;
	return Object.assign(Object.assign({}, _common_default$31), {
		fontSize,
		itemLineHeight: "1.25",
		itemTextColor: textColor3,
		itemTextColorHover: textColor2,
		itemTextColorPressed: textColor2,
		itemTextColorActive: textColor2,
		itemBorderRadius: borderRadius,
		itemColorHover: buttonColor2Hover,
		itemColorPressed: buttonColor2Pressed,
		separatorColor: textColor3
	});
}
var breadcrumbLight = {
	name: "Breadcrumb",
	common: derived,
	self: self$71
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/breadcrumb/styles/dark.mjs
var breadcrumbDark = {
	name: "Breadcrumb",
	common: derived$1,
	self: self$71
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/_utils/color/index.mjs
function createHoverColor(rgb) {
	return composite(rgb, [
		255,
		255,
		255,
		.16
	]);
}
function createPressedColor(rgb) {
	return composite(rgb, [
		0,
		0,
		0,
		.12
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/button-group/src/context.mjs
var buttonGroupInjectionKey = createInjectionKey("n-button-group");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/button/styles/_common.mjs
var _common_default$30 = {
	paddingTiny: "0 6px",
	paddingSmall: "0 10px",
	paddingMedium: "0 14px",
	paddingLarge: "0 18px",
	paddingRoundTiny: "0 10px",
	paddingRoundSmall: "0 14px",
	paddingRoundMedium: "0 18px",
	paddingRoundLarge: "0 22px",
	iconMarginTiny: "6px",
	iconMarginSmall: "6px",
	iconMarginMedium: "6px",
	iconMarginLarge: "6px",
	iconSizeTiny: "14px",
	iconSizeSmall: "18px",
	iconSizeMedium: "18px",
	iconSizeLarge: "20px",
	rippleDuration: ".6s"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/button/styles/light.mjs
function self$70(vars) {
	const { heightTiny, heightSmall, heightMedium, heightLarge, borderRadius, fontSizeTiny, fontSizeSmall, fontSizeMedium, fontSizeLarge, opacityDisabled, textColor2, textColor3, primaryColorHover, primaryColorPressed, borderColor, primaryColor, baseColor, infoColor, infoColorHover, infoColorPressed, successColor, successColorHover, successColorPressed, warningColor, warningColorHover, warningColorPressed, errorColor, errorColorHover, errorColorPressed, fontWeight, buttonColor2, buttonColor2Hover, buttonColor2Pressed, fontWeightStrong } = vars;
	return Object.assign(Object.assign({}, _common_default$30), {
		heightTiny,
		heightSmall,
		heightMedium,
		heightLarge,
		borderRadiusTiny: borderRadius,
		borderRadiusSmall: borderRadius,
		borderRadiusMedium: borderRadius,
		borderRadiusLarge: borderRadius,
		fontSizeTiny,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		opacityDisabled,
		colorOpacitySecondary: "0.16",
		colorOpacitySecondaryHover: "0.22",
		colorOpacitySecondaryPressed: "0.28",
		colorSecondary: buttonColor2,
		colorSecondaryHover: buttonColor2Hover,
		colorSecondaryPressed: buttonColor2Pressed,
		colorTertiary: buttonColor2,
		colorTertiaryHover: buttonColor2Hover,
		colorTertiaryPressed: buttonColor2Pressed,
		colorQuaternary: "#0000",
		colorQuaternaryHover: buttonColor2Hover,
		colorQuaternaryPressed: buttonColor2Pressed,
		color: "#0000",
		colorHover: "#0000",
		colorPressed: "#0000",
		colorFocus: "#0000",
		colorDisabled: "#0000",
		textColor: textColor2,
		textColorTertiary: textColor3,
		textColorHover: primaryColorHover,
		textColorPressed: primaryColorPressed,
		textColorFocus: primaryColorHover,
		textColorDisabled: textColor2,
		textColorText: textColor2,
		textColorTextHover: primaryColorHover,
		textColorTextPressed: primaryColorPressed,
		textColorTextFocus: primaryColorHover,
		textColorTextDisabled: textColor2,
		textColorGhost: textColor2,
		textColorGhostHover: primaryColorHover,
		textColorGhostPressed: primaryColorPressed,
		textColorGhostFocus: primaryColorHover,
		textColorGhostDisabled: textColor2,
		border: `1px solid ${borderColor}`,
		borderHover: `1px solid ${primaryColorHover}`,
		borderPressed: `1px solid ${primaryColorPressed}`,
		borderFocus: `1px solid ${primaryColorHover}`,
		borderDisabled: `1px solid ${borderColor}`,
		rippleColor: primaryColor,
		colorPrimary: primaryColor,
		colorHoverPrimary: primaryColorHover,
		colorPressedPrimary: primaryColorPressed,
		colorFocusPrimary: primaryColorHover,
		colorDisabledPrimary: primaryColor,
		textColorPrimary: baseColor,
		textColorHoverPrimary: baseColor,
		textColorPressedPrimary: baseColor,
		textColorFocusPrimary: baseColor,
		textColorDisabledPrimary: baseColor,
		textColorTextPrimary: primaryColor,
		textColorTextHoverPrimary: primaryColorHover,
		textColorTextPressedPrimary: primaryColorPressed,
		textColorTextFocusPrimary: primaryColorHover,
		textColorTextDisabledPrimary: textColor2,
		textColorGhostPrimary: primaryColor,
		textColorGhostHoverPrimary: primaryColorHover,
		textColorGhostPressedPrimary: primaryColorPressed,
		textColorGhostFocusPrimary: primaryColorHover,
		textColorGhostDisabledPrimary: primaryColor,
		borderPrimary: `1px solid ${primaryColor}`,
		borderHoverPrimary: `1px solid ${primaryColorHover}`,
		borderPressedPrimary: `1px solid ${primaryColorPressed}`,
		borderFocusPrimary: `1px solid ${primaryColorHover}`,
		borderDisabledPrimary: `1px solid ${primaryColor}`,
		rippleColorPrimary: primaryColor,
		colorInfo: infoColor,
		colorHoverInfo: infoColorHover,
		colorPressedInfo: infoColorPressed,
		colorFocusInfo: infoColorHover,
		colorDisabledInfo: infoColor,
		textColorInfo: baseColor,
		textColorHoverInfo: baseColor,
		textColorPressedInfo: baseColor,
		textColorFocusInfo: baseColor,
		textColorDisabledInfo: baseColor,
		textColorTextInfo: infoColor,
		textColorTextHoverInfo: infoColorHover,
		textColorTextPressedInfo: infoColorPressed,
		textColorTextFocusInfo: infoColorHover,
		textColorTextDisabledInfo: textColor2,
		textColorGhostInfo: infoColor,
		textColorGhostHoverInfo: infoColorHover,
		textColorGhostPressedInfo: infoColorPressed,
		textColorGhostFocusInfo: infoColorHover,
		textColorGhostDisabledInfo: infoColor,
		borderInfo: `1px solid ${infoColor}`,
		borderHoverInfo: `1px solid ${infoColorHover}`,
		borderPressedInfo: `1px solid ${infoColorPressed}`,
		borderFocusInfo: `1px solid ${infoColorHover}`,
		borderDisabledInfo: `1px solid ${infoColor}`,
		rippleColorInfo: infoColor,
		colorSuccess: successColor,
		colorHoverSuccess: successColorHover,
		colorPressedSuccess: successColorPressed,
		colorFocusSuccess: successColorHover,
		colorDisabledSuccess: successColor,
		textColorSuccess: baseColor,
		textColorHoverSuccess: baseColor,
		textColorPressedSuccess: baseColor,
		textColorFocusSuccess: baseColor,
		textColorDisabledSuccess: baseColor,
		textColorTextSuccess: successColor,
		textColorTextHoverSuccess: successColorHover,
		textColorTextPressedSuccess: successColorPressed,
		textColorTextFocusSuccess: successColorHover,
		textColorTextDisabledSuccess: textColor2,
		textColorGhostSuccess: successColor,
		textColorGhostHoverSuccess: successColorHover,
		textColorGhostPressedSuccess: successColorPressed,
		textColorGhostFocusSuccess: successColorHover,
		textColorGhostDisabledSuccess: successColor,
		borderSuccess: `1px solid ${successColor}`,
		borderHoverSuccess: `1px solid ${successColorHover}`,
		borderPressedSuccess: `1px solid ${successColorPressed}`,
		borderFocusSuccess: `1px solid ${successColorHover}`,
		borderDisabledSuccess: `1px solid ${successColor}`,
		rippleColorSuccess: successColor,
		colorWarning: warningColor,
		colorHoverWarning: warningColorHover,
		colorPressedWarning: warningColorPressed,
		colorFocusWarning: warningColorHover,
		colorDisabledWarning: warningColor,
		textColorWarning: baseColor,
		textColorHoverWarning: baseColor,
		textColorPressedWarning: baseColor,
		textColorFocusWarning: baseColor,
		textColorDisabledWarning: baseColor,
		textColorTextWarning: warningColor,
		textColorTextHoverWarning: warningColorHover,
		textColorTextPressedWarning: warningColorPressed,
		textColorTextFocusWarning: warningColorHover,
		textColorTextDisabledWarning: textColor2,
		textColorGhostWarning: warningColor,
		textColorGhostHoverWarning: warningColorHover,
		textColorGhostPressedWarning: warningColorPressed,
		textColorGhostFocusWarning: warningColorHover,
		textColorGhostDisabledWarning: warningColor,
		borderWarning: `1px solid ${warningColor}`,
		borderHoverWarning: `1px solid ${warningColorHover}`,
		borderPressedWarning: `1px solid ${warningColorPressed}`,
		borderFocusWarning: `1px solid ${warningColorHover}`,
		borderDisabledWarning: `1px solid ${warningColor}`,
		rippleColorWarning: warningColor,
		colorError: errorColor,
		colorHoverError: errorColorHover,
		colorPressedError: errorColorPressed,
		colorFocusError: errorColorHover,
		colorDisabledError: errorColor,
		textColorError: baseColor,
		textColorHoverError: baseColor,
		textColorPressedError: baseColor,
		textColorFocusError: baseColor,
		textColorDisabledError: baseColor,
		textColorTextError: errorColor,
		textColorTextHoverError: errorColorHover,
		textColorTextPressedError: errorColorPressed,
		textColorTextFocusError: errorColorHover,
		textColorTextDisabledError: textColor2,
		textColorGhostError: errorColor,
		textColorGhostHoverError: errorColorHover,
		textColorGhostPressedError: errorColorPressed,
		textColorGhostFocusError: errorColorHover,
		textColorGhostDisabledError: errorColor,
		borderError: `1px solid ${errorColor}`,
		borderHoverError: `1px solid ${errorColorHover}`,
		borderPressedError: `1px solid ${errorColorPressed}`,
		borderFocusError: `1px solid ${errorColorHover}`,
		borderDisabledError: `1px solid ${errorColor}`,
		rippleColorError: errorColor,
		waveOpacity: "0.6",
		fontWeight,
		fontWeightStrong
	});
}
var buttonLight = {
	name: "Button",
	common: derived,
	self: self$70
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/button/styles/dark.mjs
var buttonDark = {
	name: "Button",
	common: derived$1,
	self(vars) {
		const commonSelf = self$70(vars);
		commonSelf.waveOpacity = "0.8";
		commonSelf.colorOpacitySecondary = "0.16";
		commonSelf.colorOpacitySecondaryHover = "0.2";
		commonSelf.colorOpacitySecondaryPressed = "0.12";
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/button/src/styles/index.cssr.mjs
var index_cssr_default$5 = c([
	cB("button", `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [
		cM("color", [
			cE("border", { borderColor: "var(--n-border-color)" }),
			cM("disabled", [cE("border", { borderColor: "var(--n-border-color-disabled)" })]),
			cNotM("disabled", [
				c("&:focus", [cE("state-border", { borderColor: "var(--n-border-color-focus)" })]),
				c("&:hover", [cE("state-border", { borderColor: "var(--n-border-color-hover)" })]),
				c("&:active", [cE("state-border", { borderColor: "var(--n-border-color-pressed)" })]),
				cM("pressed", [cE("state-border", { borderColor: "var(--n-border-color-pressed)" })])
			])
		]),
		cM("disabled", {
			backgroundColor: "var(--n-color-disabled)",
			color: "var(--n-text-color-disabled)"
		}, [cE("border", { border: "var(--n-border-disabled)" })]),
		cNotM("disabled", [
			c("&:focus", {
				backgroundColor: "var(--n-color-focus)",
				color: "var(--n-text-color-focus)"
			}, [cE("state-border", { border: "var(--n-border-focus)" })]),
			c("&:hover", {
				backgroundColor: "var(--n-color-hover)",
				color: "var(--n-text-color-hover)"
			}, [cE("state-border", { border: "var(--n-border-hover)" })]),
			c("&:active", {
				backgroundColor: "var(--n-color-pressed)",
				color: "var(--n-text-color-pressed)"
			}, [cE("state-border", { border: "var(--n-border-pressed)" })]),
			cM("pressed", {
				backgroundColor: "var(--n-color-pressed)",
				color: "var(--n-text-color-pressed)"
			}, [cE("state-border", { border: "var(--n-border-pressed)" })])
		]),
		cM("loading", "cursor: wait;"),
		cB("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [cM("active", {
			zIndex: 1,
			animationName: "button-wave-spread, button-wave-opacity"
		})]),
		isBrowser$1 && "MozBoxSizing" in document.createElement("div").style ? c("&::moz-focus-inner", { border: 0 }) : null,
		cE("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),
		cE("border", `
 border: var(--n-border);
 `),
		cE("state-border", `
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `),
		cE("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [cB("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [iconSwitchTransition({
			top: "50%",
			originalTransform: "translateY(-50%)"
		})]), fadeInWidthExpandTransition()]),
		cE("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [c("~", [cE("icon", {
			margin: "var(--n-icon-margin)",
			marginRight: 0
		})])]),
		cM("block", `
 display: flex;
 width: 100%;
 `),
		cM("dashed", [cE("border, state-border", { borderStyle: "dashed !important" })]),
		cM("disabled", {
			cursor: "not-allowed",
			opacity: "var(--n-opacity-disabled)"
		})
	]),
	c("@keyframes button-wave-spread", {
		from: { boxShadow: "0 0 0.5px 0 var(--n-ripple-color)" },
		to: { boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)" }
	}),
	c("@keyframes button-wave-opacity", {
		from: { opacity: "var(--n-wave-opacity)" },
		to: { opacity: 0 }
	})
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/button/src/Button.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var buttonProps = Object.assign(Object.assign({}, useTheme.props), {
	color: String,
	textColor: String,
	text: Boolean,
	block: Boolean,
	loading: Boolean,
	disabled: Boolean,
	circle: Boolean,
	size: String,
	ghost: Boolean,
	round: Boolean,
	secondary: Boolean,
	tertiary: Boolean,
	quaternary: Boolean,
	strong: Boolean,
	focusable: {
		type: Boolean,
		default: true
	},
	keyboard: {
		type: Boolean,
		default: true
	},
	tag: {
		type: String,
		default: "button"
	},
	type: {
		type: String,
		default: "default"
	},
	dashed: Boolean,
	renderIcon: Function,
	iconPlacement: {
		type: String,
		default: "left"
	},
	attrType: {
		type: String,
		default: "button"
	},
	bordered: {
		type: Boolean,
		default: true
	},
	onClick: [Function, Array],
	nativeFocusBehavior: {
		type: Boolean,
		default: !isSafari
	},
	spinProps: Object
});
var Button = defineComponent({
	name: "Button",
	props: buttonProps,
	slots: Object,
	setup(props) {
		const selfElRef = ref(null);
		const waveElRef = ref(null);
		const enterPressedRef = ref(false);
		const showBorderRef = useMemo(() => {
			return !props.quaternary && !props.tertiary && !props.secondary && !props.text && (!props.color || props.ghost || props.dashed) && props.bordered;
		});
		const NButtonGroup = inject(buttonGroupInjectionKey, {});
		const { inlineThemeDisabled, mergedClsPrefixRef, mergedRtlRef, mergedComponentPropsRef } = useConfig(props);
		const { mergedSizeRef } = useFormItem({}, {
			defaultSize: "medium",
			mergedSize: (NFormItem) => {
				var _a, _b;
				const { size } = props;
				if (size) return size;
				const { size: buttonGroupSize } = NButtonGroup;
				if (buttonGroupSize) return buttonGroupSize;
				const { mergedSize: formItemSize } = NFormItem || {};
				if (formItemSize) return formItemSize.value;
				const configSize = (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Button) === null || _b === void 0 ? void 0 : _b.size;
				if (configSize) return configSize;
				return "medium";
			}
		});
		const mergedFocusableRef = computed(() => {
			return props.focusable && !props.disabled;
		});
		const handleMousedown = (e) => {
			var _a;
			if (!mergedFocusableRef.value) e.preventDefault();
			if (props.nativeFocusBehavior) return;
			e.preventDefault();
			if (props.disabled) return;
			if (mergedFocusableRef.value) (_a = selfElRef.value) === null || _a === void 0 || _a.focus({ preventScroll: true });
		};
		const handleClick = (e) => {
			var _a;
			if (!props.disabled && !props.loading) {
				const { onClick } = props;
				if (onClick) call(onClick, e);
				if (!props.text) (_a = waveElRef.value) === null || _a === void 0 || _a.play();
			}
		};
		const handleKeyup = (e) => {
			switch (e.key) {
				case "Enter":
					if (!props.keyboard) return;
					enterPressedRef.value = false;
			}
		};
		const handleKeydown = (e) => {
			switch (e.key) {
				case "Enter":
					if (!props.keyboard || props.loading) {
						e.preventDefault();
						return;
					}
					enterPressedRef.value = true;
			}
		};
		const handleBlur = () => {
			enterPressedRef.value = false;
		};
		const themeRef = useTheme("Button", "-button", index_cssr_default$5, buttonLight, props, mergedClsPrefixRef);
		const rtlEnabledRef = useRtl("Button", mergedRtlRef, mergedClsPrefixRef);
		const cssVarsRef = computed(() => {
			const { common: { cubicBezierEaseInOut, cubicBezierEaseOut }, self } = themeRef.value;
			const { rippleDuration, opacityDisabled, fontWeight, fontWeightStrong } = self;
			const size = mergedSizeRef.value;
			const { dashed, type, ghost, text, color, round, circle, textColor, secondary, tertiary, quaternary, strong } = props;
			const fontProps = { "--n-font-weight": strong ? fontWeightStrong : fontWeight };
			let colorProps = {
				"--n-color": "initial",
				"--n-color-hover": "initial",
				"--n-color-pressed": "initial",
				"--n-color-focus": "initial",
				"--n-color-disabled": "initial",
				"--n-ripple-color": "initial",
				"--n-text-color": "initial",
				"--n-text-color-hover": "initial",
				"--n-text-color-pressed": "initial",
				"--n-text-color-focus": "initial",
				"--n-text-color-disabled": "initial"
			};
			const typeIsTertiary = type === "tertiary";
			const typeIsDefault = type === "default";
			const mergedType = typeIsTertiary ? "default" : type;
			if (text) {
				const propTextColor = textColor || color;
				colorProps = {
					"--n-color": "#0000",
					"--n-color-hover": "#0000",
					"--n-color-pressed": "#0000",
					"--n-color-focus": "#0000",
					"--n-color-disabled": "#0000",
					"--n-ripple-color": "#0000",
					"--n-text-color": propTextColor || self[createKey("textColorText", mergedType)],
					"--n-text-color-hover": propTextColor ? createHoverColor(propTextColor) : self[createKey("textColorTextHover", mergedType)],
					"--n-text-color-pressed": propTextColor ? createPressedColor(propTextColor) : self[createKey("textColorTextPressed", mergedType)],
					"--n-text-color-focus": propTextColor ? createHoverColor(propTextColor) : self[createKey("textColorTextHover", mergedType)],
					"--n-text-color-disabled": propTextColor || self[createKey("textColorTextDisabled", mergedType)]
				};
			} else if (ghost || dashed) {
				const mergedTextColor = textColor || color;
				colorProps = {
					"--n-color": "#0000",
					"--n-color-hover": "#0000",
					"--n-color-pressed": "#0000",
					"--n-color-focus": "#0000",
					"--n-color-disabled": "#0000",
					"--n-ripple-color": color || self[createKey("rippleColor", mergedType)],
					"--n-text-color": mergedTextColor || self[createKey("textColorGhost", mergedType)],
					"--n-text-color-hover": mergedTextColor ? createHoverColor(mergedTextColor) : self[createKey("textColorGhostHover", mergedType)],
					"--n-text-color-pressed": mergedTextColor ? createPressedColor(mergedTextColor) : self[createKey("textColorGhostPressed", mergedType)],
					"--n-text-color-focus": mergedTextColor ? createHoverColor(mergedTextColor) : self[createKey("textColorGhostHover", mergedType)],
					"--n-text-color-disabled": mergedTextColor || self[createKey("textColorGhostDisabled", mergedType)]
				};
			} else if (secondary) {
				const typeTextColor = typeIsDefault ? self.textColor : typeIsTertiary ? self.textColorTertiary : self[createKey("color", mergedType)];
				const mergedTextColor = color || typeTextColor;
				const isColoredType = type !== "default" && type !== "tertiary";
				colorProps = {
					"--n-color": isColoredType ? changeColor(mergedTextColor, { alpha: Number(self.colorOpacitySecondary) }) : self.colorSecondary,
					"--n-color-hover": isColoredType ? changeColor(mergedTextColor, { alpha: Number(self.colorOpacitySecondaryHover) }) : self.colorSecondaryHover,
					"--n-color-pressed": isColoredType ? changeColor(mergedTextColor, { alpha: Number(self.colorOpacitySecondaryPressed) }) : self.colorSecondaryPressed,
					"--n-color-focus": isColoredType ? changeColor(mergedTextColor, { alpha: Number(self.colorOpacitySecondaryHover) }) : self.colorSecondaryHover,
					"--n-color-disabled": self.colorSecondary,
					"--n-ripple-color": "#0000",
					"--n-text-color": mergedTextColor,
					"--n-text-color-hover": mergedTextColor,
					"--n-text-color-pressed": mergedTextColor,
					"--n-text-color-focus": mergedTextColor,
					"--n-text-color-disabled": mergedTextColor
				};
			} else if (tertiary || quaternary) {
				const typeColor = typeIsDefault ? self.textColor : typeIsTertiary ? self.textColorTertiary : self[createKey("color", mergedType)];
				const mergedColor = color || typeColor;
				if (tertiary) {
					colorProps["--n-color"] = self.colorTertiary;
					colorProps["--n-color-hover"] = self.colorTertiaryHover;
					colorProps["--n-color-pressed"] = self.colorTertiaryPressed;
					colorProps["--n-color-focus"] = self.colorSecondaryHover;
					colorProps["--n-color-disabled"] = self.colorTertiary;
				} else {
					colorProps["--n-color"] = self.colorQuaternary;
					colorProps["--n-color-hover"] = self.colorQuaternaryHover;
					colorProps["--n-color-pressed"] = self.colorQuaternaryPressed;
					colorProps["--n-color-focus"] = self.colorQuaternaryHover;
					colorProps["--n-color-disabled"] = self.colorQuaternary;
				}
				colorProps["--n-ripple-color"] = "#0000";
				colorProps["--n-text-color"] = mergedColor;
				colorProps["--n-text-color-hover"] = mergedColor;
				colorProps["--n-text-color-pressed"] = mergedColor;
				colorProps["--n-text-color-focus"] = mergedColor;
				colorProps["--n-text-color-disabled"] = mergedColor;
			} else colorProps = {
				"--n-color": color || self[createKey("color", mergedType)],
				"--n-color-hover": color ? createHoverColor(color) : self[createKey("colorHover", mergedType)],
				"--n-color-pressed": color ? createPressedColor(color) : self[createKey("colorPressed", mergedType)],
				"--n-color-focus": color ? createHoverColor(color) : self[createKey("colorFocus", mergedType)],
				"--n-color-disabled": color || self[createKey("colorDisabled", mergedType)],
				"--n-ripple-color": color || self[createKey("rippleColor", mergedType)],
				"--n-text-color": textColor || (color ? self.textColorPrimary : typeIsTertiary ? self.textColorTertiary : self[createKey("textColor", mergedType)]),
				"--n-text-color-hover": textColor || (color ? self.textColorHoverPrimary : self[createKey("textColorHover", mergedType)]),
				"--n-text-color-pressed": textColor || (color ? self.textColorPressedPrimary : self[createKey("textColorPressed", mergedType)]),
				"--n-text-color-focus": textColor || (color ? self.textColorFocusPrimary : self[createKey("textColorFocus", mergedType)]),
				"--n-text-color-disabled": textColor || (color ? self.textColorDisabledPrimary : self[createKey("textColorDisabled", mergedType)])
			};
			let borderProps = {
				"--n-border": "initial",
				"--n-border-hover": "initial",
				"--n-border-pressed": "initial",
				"--n-border-focus": "initial",
				"--n-border-disabled": "initial"
			};
			if (text) borderProps = {
				"--n-border": "none",
				"--n-border-hover": "none",
				"--n-border-pressed": "none",
				"--n-border-focus": "none",
				"--n-border-disabled": "none"
			};
			else borderProps = {
				"--n-border": self[createKey("border", mergedType)],
				"--n-border-hover": self[createKey("borderHover", mergedType)],
				"--n-border-pressed": self[createKey("borderPressed", mergedType)],
				"--n-border-focus": self[createKey("borderFocus", mergedType)],
				"--n-border-disabled": self[createKey("borderDisabled", mergedType)]
			};
			const { [createKey("height", size)]: height, [createKey("fontSize", size)]: fontSize, [createKey("padding", size)]: padding, [createKey("paddingRound", size)]: paddingRound, [createKey("iconSize", size)]: iconSize, [createKey("borderRadius", size)]: borderRadius, [createKey("iconMargin", size)]: iconMargin, waveOpacity } = self;
			const sizeProps = {
				"--n-width": circle && !text ? height : "initial",
				"--n-height": text ? "initial" : height,
				"--n-font-size": fontSize,
				"--n-padding": circle ? "initial" : text ? "initial" : round ? paddingRound : padding,
				"--n-icon-size": iconSize,
				"--n-icon-margin": iconMargin,
				"--n-border-radius": text ? "initial" : circle || round ? height : borderRadius
			};
			return Object.assign(Object.assign(Object.assign(Object.assign({
				"--n-bezier": cubicBezierEaseInOut,
				"--n-bezier-ease-out": cubicBezierEaseOut,
				"--n-ripple-duration": rippleDuration,
				"--n-opacity-disabled": opacityDisabled,
				"--n-wave-opacity": waveOpacity
			}, fontProps), colorProps), borderProps), sizeProps);
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("button", computed(() => {
			let hash = "";
			const { dashed, type, ghost, text, color, round, circle, textColor, secondary, tertiary, quaternary, strong } = props;
			if (dashed) hash += "a";
			if (ghost) hash += "b";
			if (text) hash += "c";
			if (round) hash += "d";
			if (circle) hash += "e";
			if (secondary) hash += "f";
			if (tertiary) hash += "g";
			if (quaternary) hash += "h";
			if (strong) hash += "i";
			if (color) hash += `j${color2Class(color)}`;
			if (textColor) hash += `k${color2Class(textColor)}`;
			const { value: size } = mergedSizeRef;
			hash += `l${size[0]}`;
			hash += `m${type[0]}`;
			return hash;
		}), cssVarsRef, props) : void 0;
		return {
			selfElRef,
			waveElRef,
			mergedClsPrefix: mergedClsPrefixRef,
			mergedFocusable: mergedFocusableRef,
			mergedSize: mergedSizeRef,
			showBorder: showBorderRef,
			enterPressed: enterPressedRef,
			rtlEnabled: rtlEnabledRef,
			handleMousedown,
			handleKeydown,
			handleBlur,
			handleKeyup,
			handleClick,
			customColorCssVars: computed(() => {
				const { color } = props;
				if (!color) return null;
				const hoverColor = createHoverColor(color);
				return {
					"--n-border-color": color,
					"--n-border-color-hover": hoverColor,
					"--n-border-color-pressed": createPressedColor(color),
					"--n-border-color-focus": hoverColor,
					"--n-border-color-disabled": color
				};
			}),
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		};
	},
	render() {
		const { mergedClsPrefix, tag: Component, onRender } = this;
		onRender === null || onRender === void 0 || onRender();
		const children = resolveWrappedSlot(this.$slots.default, (children) => children && h("span", { class: `${mergedClsPrefix}-button__content` }, children));
		return h(Component, {
			ref: "selfElRef",
			class: [
				this.themeClass,
				`${mergedClsPrefix}-button`,
				`${mergedClsPrefix}-button--${this.type}-type`,
				`${mergedClsPrefix}-button--${this.mergedSize}-type`,
				this.rtlEnabled && `${mergedClsPrefix}-button--rtl`,
				this.disabled && `${mergedClsPrefix}-button--disabled`,
				this.block && `${mergedClsPrefix}-button--block`,
				this.enterPressed && `${mergedClsPrefix}-button--pressed`,
				!this.text && this.dashed && `${mergedClsPrefix}-button--dashed`,
				this.color && `${mergedClsPrefix}-button--color`,
				this.secondary && `${mergedClsPrefix}-button--secondary`,
				this.loading && `${mergedClsPrefix}-button--loading`,
				this.ghost && `${mergedClsPrefix}-button--ghost`
			],
			tabindex: this.mergedFocusable ? 0 : -1,
			type: this.attrType,
			style: this.cssVars,
			disabled: this.disabled,
			onClick: this.handleClick,
			onBlur: this.handleBlur,
			onMousedown: this.handleMousedown,
			onKeyup: this.handleKeyup,
			onKeydown: this.handleKeydown
		}, this.iconPlacement === "right" && children, h(FadeInExpandTransition_default, { width: true }, { default: () => resolveWrappedSlot(this.$slots.icon, (children) => (this.loading || this.renderIcon || children) && h("span", {
			class: `${mergedClsPrefix}-button__icon`,
			style: { margin: isSlotEmpty(this.$slots.default) ? "0" : "" }
		}, h(IconSwitchTransition_default, null, { default: () => this.loading ? h(Loading_default, Object.assign({
			clsPrefix: mergedClsPrefix,
			key: "loading",
			class: `${mergedClsPrefix}-icon-slot`,
			strokeWidth: 20
		}, this.spinProps)) : h("div", {
			key: "icon",
			class: `${mergedClsPrefix}-icon-slot`,
			role: "none"
		}, this.renderIcon ? this.renderIcon() : children) }))) }), this.iconPlacement === "left" && children, !this.text ? h(Wave_default, {
			ref: "waveElRef",
			clsPrefix: mergedClsPrefix
		}) : null, this.showBorder ? h("div", {
			"aria-hidden": true,
			class: `${mergedClsPrefix}-button__border`,
			style: this.customColorCssVars
		}) : null, this.showBorder ? h("div", {
			"aria-hidden": true,
			class: `${mergedClsPrefix}-button__state-border`,
			style: this.customColorCssVars
		}) : null);
	}
});
var XButton = Button;
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/calendar/styles/_common.mjs
var _common_default$29 = { titleFontSize: "22px" };
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/calendar/styles/light.mjs
function self$69(vars) {
	const { borderRadius, fontSize, lineHeight, textColor2, textColor1, textColorDisabled, dividerColor, fontWeightStrong, primaryColor, baseColor, hoverColor, cardColor, modalColor, popoverColor } = vars;
	return Object.assign(Object.assign({}, _common_default$29), {
		borderRadius,
		borderColor: composite(cardColor, dividerColor),
		borderColorModal: composite(modalColor, dividerColor),
		borderColorPopover: composite(popoverColor, dividerColor),
		textColor: textColor2,
		titleFontWeight: fontWeightStrong,
		titleTextColor: textColor1,
		dayTextColor: textColorDisabled,
		fontSize,
		lineHeight,
		dateColorCurrent: primaryColor,
		dateTextColorCurrent: baseColor,
		cellColorHover: composite(cardColor, hoverColor),
		cellColorHoverModal: composite(modalColor, hoverColor),
		cellColorHoverPopover: composite(popoverColor, hoverColor),
		cellColor: cardColor,
		cellColorModal: modalColor,
		cellColorPopover: popoverColor,
		barColor: primaryColor
	});
}
var calendarLight = createTheme({
	name: "Calendar",
	common: derived,
	peers: { Button: buttonLight },
	self: self$69
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/calendar/styles/dark.mjs
var calendarDark = {
	name: "Calendar",
	common: derived$1,
	peers: { Button: buttonDark },
	self: self$69
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/card/styles/_common.mjs
var _common_default$28 = {
	paddingSmall: "12px 16px 12px",
	paddingMedium: "19px 24px 20px",
	paddingLarge: "23px 32px 24px",
	paddingHuge: "27px 40px 28px",
	titleFontSizeSmall: "16px",
	titleFontSizeMedium: "18px",
	titleFontSizeLarge: "18px",
	titleFontSizeHuge: "18px",
	closeIconSize: "18px",
	closeSize: "22px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/card/styles/light.mjs
function self$68(vars) {
	const { primaryColor, borderRadius, lineHeight, fontSize, cardColor, textColor2, textColor1, dividerColor, fontWeightStrong, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, modalColor, boxShadow1, popoverColor, actionColor } = vars;
	return Object.assign(Object.assign({}, _common_default$28), {
		lineHeight,
		color: cardColor,
		colorModal: modalColor,
		colorPopover: popoverColor,
		colorTarget: primaryColor,
		colorEmbedded: actionColor,
		colorEmbeddedModal: actionColor,
		colorEmbeddedPopover: actionColor,
		textColor: textColor2,
		titleTextColor: textColor1,
		borderColor: dividerColor,
		actionColor,
		titleFontWeight: fontWeightStrong,
		closeColorHover,
		closeColorPressed,
		closeBorderRadius: borderRadius,
		closeIconColor,
		closeIconColorHover,
		closeIconColorPressed,
		fontSizeSmall: fontSize,
		fontSizeMedium: fontSize,
		fontSizeLarge: fontSize,
		fontSizeHuge: fontSize,
		boxShadow: boxShadow1,
		borderRadius
	});
}
var cardLight = {
	name: "Card",
	common: derived,
	self: self$68
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/card/styles/dark.mjs
var cardDark = {
	name: "Card",
	common: derived$1,
	self(vars) {
		const commonSelf = self$68(vars);
		const { cardColor, modalColor, popoverColor } = vars;
		commonSelf.colorEmbedded = cardColor;
		commonSelf.colorEmbeddedModal = modalColor;
		commonSelf.colorEmbeddedPopover = popoverColor;
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/card/src/styles/index.cssr.mjs
var contentBaseStyle = cB("card-content", `
 flex: 1;
 min-width: 0;
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
`);
var index_cssr_default$4 = c([
	cB("card", `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [
		asModal({ background: "var(--n-color-modal)" }),
		cM("hoverable", [c("&:hover", "box-shadow: var(--n-box-shadow);")]),
		cM("content-segmented", [c(">", [cB("card-content", `
 padding-top: var(--n-padding-bottom);
 `), cE("content-scrollbar", [c(">", [cB("scrollbar-container", [c(">", [cB("card-content", `
 padding-top: var(--n-padding-bottom);
 `)])])])])])]),
		cM("content-soft-segmented", [c(">", [cB("card-content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `), cE("content-scrollbar", [c(">", [cB("scrollbar-container", [c(">", [cB("card-content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])])])])])]),
		cM("footer-segmented", [c(">", [cE("footer", `
 padding-top: var(--n-padding-bottom);
 `)])]),
		cM("footer-soft-segmented", [c(">", [cE("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),
		c(">", [
			cB("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [
				cE("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),
				cE("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),
				cE("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)
			]),
			cE("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),
			contentBaseStyle,
			cB("card-content", [c("&:first-child", `
 padding-top: var(--n-padding-bottom);
 `)]),
			cE("content-scrollbar", `
 display: flex;
 flex-direction: column;
 `, [c(">", [cB("scrollbar-container", [c(">", [contentBaseStyle])])]), c("&:first-child >", [cB("scrollbar-container", [c(">", [cB("card-content", `
 padding-top: var(--n-padding-bottom);
 `)])])])]),
			cE("footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [c("&:first-child", `
 padding-top: var(--n-padding-bottom);
 `)]),
			cE("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)
		]),
		cB("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [c("img", `
 display: block;
 width: 100%;
 `)]),
		cM("bordered", `
 border: 1px solid var(--n-border-color);
 `, [c("&:target", "border-color: var(--n-color-target);")]),
		cM("action-segmented", [c(">", [cE("action", [c("&:not(:first-child)", `
 border-top: 1px solid var(--n-border-color);
 `)])])]),
		cM("content-segmented, content-soft-segmented", [c(">", [cB("card-content", `
 transition: border-color 0.3s var(--n-bezier);
 `, [c("&:not(:first-child)", `
 border-top: 1px solid var(--n-border-color);
 `)]), cE("content-scrollbar", `
 transition: border-color 0.3s var(--n-bezier);
 `, [c("&:not(:first-child)", `
 border-top: 1px solid var(--n-border-color);
 `)])])]),
		cM("footer-segmented, footer-soft-segmented", [c(">", [cE("footer", `
 transition: border-color 0.3s var(--n-bezier);
 `, [c("&:not(:first-child)", `
 border-top: 1px solid var(--n-border-color);
 `)])])]),
		cM("embedded", `
 background-color: var(--n-color-embedded);
 `)
	]),
	insideModal(cB("card", `
 background: var(--n-color-modal);
 `, [cM("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])),
	insidePopover(cB("card", `
 background: var(--n-color-popover);
 `, [cM("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/card/src/Card.mjs
init_runtime_core_esm_bundler();
var cardBaseProps = {
	title: [String, Function],
	contentClass: String,
	contentStyle: [Object, String],
	contentScrollable: Boolean,
	headerClass: String,
	headerStyle: [Object, String],
	headerExtraClass: String,
	headerExtraStyle: [Object, String],
	footerClass: String,
	footerStyle: [Object, String],
	embedded: Boolean,
	segmented: {
		type: [Boolean, Object],
		default: false
	},
	size: String,
	bordered: {
		type: Boolean,
		default: true
	},
	closable: Boolean,
	hoverable: Boolean,
	role: String,
	onClose: [Function, Array],
	tag: {
		type: String,
		default: "div"
	},
	cover: Function,
	content: [String, Function],
	footer: Function,
	action: Function,
	headerExtra: Function,
	closeFocusable: Boolean
};
var cardBasePropKeys = keysOf(cardBaseProps);
var cardProps = Object.assign(Object.assign({}, useTheme.props), cardBaseProps);
var Card_default = defineComponent({
	name: "Card",
	props: cardProps,
	slots: Object,
	setup(props) {
		const handleCloseClick = () => {
			const { onClose } = props;
			if (onClose) call(onClose);
		};
		const { inlineThemeDisabled, mergedClsPrefixRef, mergedRtlRef, mergedComponentPropsRef } = useConfig(props);
		const themeRef = useTheme("Card", "-card", index_cssr_default$4, cardLight, props, mergedClsPrefixRef);
		const rtlEnabledRef = useRtl("Card", mergedRtlRef, mergedClsPrefixRef);
		const mergedSizeRef = computed(() => {
			var _a, _b;
			return props.size || ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Card) === null || _b === void 0 ? void 0 : _b.size) || "medium";
		});
		const cssVarsRef = computed(() => {
			const mergedSize = mergedSizeRef.value;
			const { self: { color, colorModal, colorTarget, textColor, titleTextColor, titleFontWeight, borderColor, actionColor, borderRadius, lineHeight, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, closeBorderRadius, closeIconSize, closeSize, boxShadow, colorPopover, colorEmbedded, colorEmbeddedModal, colorEmbeddedPopover, [createKey("padding", mergedSize)]: padding, [createKey("fontSize", mergedSize)]: fontSize, [createKey("titleFontSize", mergedSize)]: titleFontSize }, common: { cubicBezierEaseInOut } } = themeRef.value;
			const { top: paddingTop, left: paddingLeft, bottom: paddingBottom } = getMargin(padding);
			return {
				"--n-bezier": cubicBezierEaseInOut,
				"--n-border-radius": borderRadius,
				"--n-color": color,
				"--n-color-modal": colorModal,
				"--n-color-popover": colorPopover,
				"--n-color-embedded": colorEmbedded,
				"--n-color-embedded-modal": colorEmbeddedModal,
				"--n-color-embedded-popover": colorEmbeddedPopover,
				"--n-color-target": colorTarget,
				"--n-text-color": textColor,
				"--n-line-height": lineHeight,
				"--n-action-color": actionColor,
				"--n-title-text-color": titleTextColor,
				"--n-title-font-weight": titleFontWeight,
				"--n-close-icon-color": closeIconColor,
				"--n-close-icon-color-hover": closeIconColorHover,
				"--n-close-icon-color-pressed": closeIconColorPressed,
				"--n-close-color-hover": closeColorHover,
				"--n-close-color-pressed": closeColorPressed,
				"--n-border-color": borderColor,
				"--n-box-shadow": boxShadow,
				"--n-padding-top": paddingTop,
				"--n-padding-bottom": paddingBottom,
				"--n-padding-left": paddingLeft,
				"--n-font-size": fontSize,
				"--n-title-font-size": titleFontSize,
				"--n-close-size": closeSize,
				"--n-close-icon-size": closeIconSize,
				"--n-close-border-radius": closeBorderRadius
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("card", computed(() => {
			return mergedSizeRef.value[0];
		}), cssVarsRef, props) : void 0;
		return {
			rtlEnabled: rtlEnabledRef,
			mergedClsPrefix: mergedClsPrefixRef,
			mergedTheme: themeRef,
			handleCloseClick,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		};
	},
	render() {
		const { segmented, bordered, hoverable, mergedClsPrefix, rtlEnabled, onRender, embedded, tag: Component, $slots } = this;
		onRender === null || onRender === void 0 || onRender();
		return h(Component, {
			class: [
				`${mergedClsPrefix}-card`,
				this.themeClass,
				embedded && `${mergedClsPrefix}-card--embedded`,
				{
					[`${mergedClsPrefix}-card--rtl`]: rtlEnabled,
					[`${mergedClsPrefix}-card--content-scrollable`]: this.contentScrollable,
					[`${mergedClsPrefix}-card--content${typeof segmented !== "boolean" && segmented.content === "soft" ? "-soft" : ""}-segmented`]: segmented === true || segmented !== false && segmented.content,
					[`${mergedClsPrefix}-card--footer${typeof segmented !== "boolean" && segmented.footer === "soft" ? "-soft" : ""}-segmented`]: segmented === true || segmented !== false && segmented.footer,
					[`${mergedClsPrefix}-card--action-segmented`]: segmented === true || segmented !== false && segmented.action,
					[`${mergedClsPrefix}-card--bordered`]: bordered,
					[`${mergedClsPrefix}-card--hoverable`]: hoverable
				}
			],
			style: this.cssVars,
			role: this.role
		}, resolveWrappedSlot($slots.cover, (children) => {
			const mergedChildren = this.cover ? ensureValidVNode([this.cover()]) : children;
			return mergedChildren && h("div", {
				class: `${mergedClsPrefix}-card-cover`,
				role: "none"
			}, mergedChildren);
		}), resolveWrappedSlot($slots.header, (children) => {
			const { title } = this;
			const mergedChildren = title ? ensureValidVNode(typeof title === "function" ? [title()] : [title]) : children;
			return mergedChildren || this.closable ? h("div", {
				class: [`${mergedClsPrefix}-card-header`, this.headerClass],
				style: this.headerStyle,
				role: "heading"
			}, h("div", {
				class: `${mergedClsPrefix}-card-header__main`,
				role: "heading"
			}, mergedChildren), resolveWrappedSlot($slots["header-extra"], (children) => {
				const mergedChildren = this.headerExtra ? ensureValidVNode([this.headerExtra()]) : children;
				return mergedChildren && h("div", {
					class: [`${mergedClsPrefix}-card-header__extra`, this.headerExtraClass],
					style: this.headerExtraStyle
				}, mergedChildren);
			}), this.closable && h(Close_default, {
				clsPrefix: mergedClsPrefix,
				class: `${mergedClsPrefix}-card-header__close`,
				onClick: this.handleCloseClick,
				focusable: this.closeFocusable,
				absolute: true
			})) : null;
		}), resolveWrappedSlot($slots.default, (children) => {
			const { content } = this;
			const mergedChildren = content ? ensureValidVNode(typeof content === "function" ? [content()] : [content]) : children;
			return mergedChildren ? this.contentScrollable ? h(Scrollbar, {
				class: `${mergedClsPrefix}-card__content-scrollbar`,
				contentClass: [`${mergedClsPrefix}-card-content`, this.contentClass],
				contentStyle: this.contentStyle
			}, mergedChildren) : h("div", {
				class: [`${mergedClsPrefix}-card-content`, this.contentClass],
				style: this.contentStyle,
				role: "none"
			}, mergedChildren) : null;
		}), resolveWrappedSlot($slots.footer, (children) => {
			const mergedChildren = this.footer ? ensureValidVNode([this.footer()]) : children;
			return mergedChildren && h("div", {
				class: [`${mergedClsPrefix}-card__footer`, this.footerClass],
				style: this.footerStyle,
				role: "none"
			}, mergedChildren);
		}), resolveWrappedSlot($slots.action, (children) => {
			const mergedChildren = this.action ? ensureValidVNode([this.action()]) : children;
			return mergedChildren && h("div", {
				class: `${mergedClsPrefix}-card__action`,
				role: "none"
			}, mergedChildren);
		}));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/carousel/styles/light.mjs
function self$67() {
	return {
		dotSize: "8px",
		dotColor: "rgba(255, 255, 255, .3)",
		dotColorActive: "rgba(255, 255, 255, 1)",
		dotColorFocus: "rgba(255, 255, 255, .5)",
		dotLineWidth: "16px",
		dotLineWidthActive: "24px",
		arrowColor: "#eee"
	};
}
var carouselLight = {
	name: "Carousel",
	common: derived,
	self: self$67
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/carousel/styles/dark.mjs
var carouselDark = {
	name: "Carousel",
	common: derived$1,
	self: self$67
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/checkbox/styles/_common.mjs
var _common_default$27 = {
	sizeSmall: "14px",
	sizeMedium: "16px",
	sizeLarge: "18px",
	labelPadding: "0 8px",
	labelFontWeight: "400"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/checkbox/styles/light.mjs
function self$66(vars) {
	const { baseColor, inputColorDisabled, cardColor, modalColor, popoverColor, textColorDisabled, borderColor, primaryColor, textColor2, fontSizeSmall, fontSizeMedium, fontSizeLarge, borderRadiusSmall, lineHeight } = vars;
	return Object.assign(Object.assign({}, _common_default$27), {
		labelLineHeight: lineHeight,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		borderRadius: borderRadiusSmall,
		color: baseColor,
		colorChecked: primaryColor,
		colorDisabled: inputColorDisabled,
		colorDisabledChecked: inputColorDisabled,
		colorTableHeader: cardColor,
		colorTableHeaderModal: modalColor,
		colorTableHeaderPopover: popoverColor,
		checkMarkColor: baseColor,
		checkMarkColorDisabled: textColorDisabled,
		checkMarkColorDisabledChecked: textColorDisabled,
		border: `1px solid ${borderColor}`,
		borderDisabled: `1px solid ${borderColor}`,
		borderDisabledChecked: `1px solid ${borderColor}`,
		borderChecked: `1px solid ${primaryColor}`,
		borderFocus: `1px solid ${primaryColor}`,
		boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, { alpha: .3 })}`,
		textColor: textColor2,
		textColorDisabled
	});
}
var checkboxLight = {
	name: "Checkbox",
	common: derived,
	self: self$66
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/checkbox/styles/dark.mjs
var checkboxDark = {
	name: "Checkbox",
	common: derived$1,
	self(vars) {
		const { cardColor } = vars;
		const commonSelf = self$66(vars);
		commonSelf.color = "#0000";
		commonSelf.checkMarkColor = cardColor;
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/cascader/styles/light.mjs
function self$65(vars) {
	const { borderRadius, boxShadow2, popoverColor, textColor2, textColor3, primaryColor, textColorDisabled, dividerColor, hoverColor, fontSizeMedium, heightMedium } = vars;
	return {
		menuBorderRadius: borderRadius,
		menuColor: popoverColor,
		menuBoxShadow: boxShadow2,
		menuDividerColor: dividerColor,
		menuHeight: "calc(var(--n-option-height) * 6.6)",
		optionArrowColor: textColor3,
		optionHeight: heightMedium,
		optionFontSize: fontSizeMedium,
		optionColorHover: hoverColor,
		optionTextColor: textColor2,
		optionTextColorActive: primaryColor,
		optionTextColorDisabled: textColorDisabled,
		optionCheckMarkColor: primaryColor,
		loadingColor: primaryColor,
		columnWidth: "180px"
	};
}
var cascaderLight = createTheme({
	name: "Cascader",
	common: derived,
	peers: {
		InternalSelectMenu: internalSelectMenuLight,
		InternalSelection: internalSelectionLight,
		Scrollbar: scrollbarLight,
		Checkbox: checkboxLight,
		Empty: emptyLight
	},
	self: self$65
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/cascader/styles/dark.mjs
var cascaderDark = {
	name: "Cascader",
	common: derived$1,
	peers: {
		InternalSelectMenu: internalSelectMenuDark,
		InternalSelection: internalSelectionDark,
		Scrollbar: scrollbarDark,
		Checkbox: checkboxDark,
		Empty: emptyLight
	},
	self: self$65
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/code/styles/dark.mjs
var codeDark = {
	name: "Code",
	common: derived$1,
	self(vars) {
		const { textColor2, fontSize, fontWeightStrong, textColor3 } = vars;
		return {
			textColor: textColor2,
			fontSize,
			fontWeightStrong,
			"mono-3": "#5c6370",
			"hue-1": "#56b6c2",
			"hue-2": "#61aeee",
			"hue-3": "#c678dd",
			"hue-4": "#98c379",
			"hue-5": "#e06c75",
			"hue-5-2": "#be5046",
			"hue-6": "#d19a66",
			"hue-6-2": "#e6c07b",
			lineNumberTextColor: textColor3
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/code/styles/light.mjs
function self$64(vars) {
	const { textColor2, fontSize, fontWeightStrong, textColor3 } = vars;
	return {
		textColor: textColor2,
		fontSize,
		fontWeightStrong,
		"mono-3": "#a0a1a7",
		"hue-1": "#0184bb",
		"hue-2": "#4078f2",
		"hue-3": "#a626a4",
		"hue-4": "#50a14f",
		"hue-5": "#e45649",
		"hue-5-2": "#c91243",
		"hue-6": "#986801",
		"hue-6-2": "#c18401",
		lineNumberTextColor: textColor3
	};
}
var codeLight = {
	name: "Code",
	common: derived,
	self: self$64
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/collapse/styles/light.mjs
function self$63(vars) {
	const { fontWeight, textColor1, textColor2, textColorDisabled, dividerColor, fontSize } = vars;
	return {
		titleFontSize: fontSize,
		titleFontWeight: fontWeight,
		dividerColor,
		titleTextColor: textColor1,
		titleTextColorDisabled: textColorDisabled,
		fontSize,
		textColor: textColor2,
		arrowColor: textColor2,
		arrowColorDisabled: textColorDisabled,
		itemMargin: "16px 0 0 0",
		titlePadding: "16px 0 0 0"
	};
}
var collapseLight = {
	name: "Collapse",
	common: derived,
	self: self$63
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/collapse/styles/dark.mjs
var collapseDark = {
	name: "Collapse",
	common: derived$1,
	self: self$63
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/collapse-transition/styles/light.mjs
function self$62(vars) {
	const { cubicBezierEaseInOut } = vars;
	return { bezier: cubicBezierEaseInOut };
}
var collapseTransitionLight = {
	name: "CollapseTransition",
	common: derived,
	self: self$62
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/collapse-transition/styles/dark.mjs
var collapseTransitionDark = {
	name: "CollapseTransition",
	common: derived$1,
	self: self$62
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/color-picker/styles/light.mjs
function self$61(vars) {
	const { fontSize, boxShadow2, popoverColor, textColor2, borderRadius, borderColor, heightSmall, heightMedium, heightLarge, fontSizeSmall, fontSizeMedium, fontSizeLarge, dividerColor } = vars;
	return {
		panelFontSize: fontSize,
		boxShadow: boxShadow2,
		color: popoverColor,
		textColor: textColor2,
		borderRadius,
		border: `1px solid ${borderColor}`,
		heightSmall,
		heightMedium,
		heightLarge,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		dividerColor
	};
}
var colorPickerLight = createTheme({
	name: "ColorPicker",
	common: derived,
	peers: {
		Input: inputLight,
		Button: buttonLight
	},
	self: self$61
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/color-picker/styles/dark.mjs
var colorPickerDark = {
	name: "ColorPicker",
	common: derived$1,
	peers: {
		Input: inputDark,
		Button: buttonDark
	},
	self: self$61
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/config-provider/src/ConfigProvider.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var ConfigProvider_default = defineComponent({
	name: "ConfigProvider",
	alias: ["App"],
	props: {
		abstract: Boolean,
		bordered: {
			type: Boolean,
			default: void 0
		},
		clsPrefix: String,
		locale: Object,
		dateLocale: Object,
		namespace: String,
		rtl: Array,
		tag: {
			type: String,
			default: "div"
		},
		hljs: Object,
		katex: Object,
		theme: Object,
		themeOverrides: Object,
		componentOptions: Object,
		icons: Object,
		breakpoints: Object,
		preflightStyleDisabled: Boolean,
		styleMountTarget: Object,
		inlineThemeDisabled: {
			type: Boolean,
			default: void 0
		},
		as: {
			type: String,
			validator: () => {
				warn("config-provider", "`as` is deprecated, please use `tag` instead.");
				return true;
			},
			default: void 0
		}
	},
	setup(props) {
		const NConfigProvider = inject(configProviderInjectionKey, null);
		const mergedThemeRef = computed(() => {
			const { theme } = props;
			if (theme === null) return void 0;
			const inheritedTheme = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeRef.value;
			return theme === void 0 ? inheritedTheme : inheritedTheme === void 0 ? theme : Object.assign({}, inheritedTheme, theme);
		});
		const mergedThemeOverridesRef = computed(() => {
			const { themeOverrides } = props;
			if (themeOverrides === null) return void 0;
			if (themeOverrides === void 0) return NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeOverridesRef.value;
			else {
				const inheritedThemeOverrides = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeOverridesRef.value;
				if (inheritedThemeOverrides === void 0) return themeOverrides;
				else return merge({}, inheritedThemeOverrides, themeOverrides);
			}
		});
		const mergedNamespaceRef = useMemo(() => {
			const { namespace } = props;
			return namespace === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedNamespaceRef.value : namespace;
		});
		const mergedBorderedRef = useMemo(() => {
			const { bordered } = props;
			return bordered === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBorderedRef.value : bordered;
		});
		const mergedIconsRef = computed(() => {
			const { icons } = props;
			return icons === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedIconsRef.value : icons;
		});
		const mergedComponentPropsRef = computed(() => {
			const { componentOptions } = props;
			if (componentOptions !== void 0) return componentOptions;
			return NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef.value;
		});
		const mergedClsPrefixRef = computed(() => {
			const { clsPrefix } = props;
			if (clsPrefix !== void 0) return clsPrefix;
			if (NConfigProvider) return NConfigProvider.mergedClsPrefixRef.value;
			return "n";
		});
		const mergedRtlRef = computed(() => {
			var _a;
			const { rtl } = props;
			if (rtl === void 0) return NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedRtlRef.value;
			const rtlEnabledState = {};
			for (const rtlInfo of rtl) {
				rtlEnabledState[rtlInfo.name] = markRaw(rtlInfo);
				(_a = rtlInfo.peers) === null || _a === void 0 || _a.forEach((peerRtlInfo) => {
					if (!(peerRtlInfo.name in rtlEnabledState)) rtlEnabledState[peerRtlInfo.name] = markRaw(peerRtlInfo);
				});
			}
			return rtlEnabledState;
		});
		const mergedBreakpointsRef = computed(() => {
			return props.breakpoints || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBreakpointsRef.value);
		});
		const inlineThemeDisabled = props.inlineThemeDisabled || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.inlineThemeDisabled);
		const preflightStyleDisabled = props.preflightStyleDisabled || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.preflightStyleDisabled);
		const styleMountTarget = props.styleMountTarget || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget);
		const mergedThemeHashRef = computed(() => {
			const { value: theme } = mergedThemeRef;
			const { value: mergedThemeOverrides } = mergedThemeOverridesRef;
			const hasThemeOverrides = mergedThemeOverrides && Object.keys(mergedThemeOverrides).length !== 0;
			const themeName = theme === null || theme === void 0 ? void 0 : theme.name;
			if (themeName) {
				if (hasThemeOverrides) return `${themeName}-${murmur2(JSON.stringify(mergedThemeOverridesRef.value))}`;
				return themeName;
			} else {
				if (hasThemeOverrides) return murmur2(JSON.stringify(mergedThemeOverridesRef.value));
				return "";
			}
		});
		provide(configProviderInjectionKey, {
			mergedThemeHashRef,
			mergedBreakpointsRef,
			mergedRtlRef,
			mergedIconsRef,
			mergedComponentPropsRef,
			mergedBorderedRef,
			mergedNamespaceRef,
			mergedClsPrefixRef,
			mergedLocaleRef: computed(() => {
				const { locale } = props;
				if (locale === null) return void 0;
				return locale === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedLocaleRef.value : locale;
			}),
			mergedDateLocaleRef: computed(() => {
				const { dateLocale } = props;
				if (dateLocale === null) return void 0;
				return dateLocale === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedDateLocaleRef.value : dateLocale;
			}),
			mergedHljsRef: computed(() => {
				const { hljs } = props;
				return hljs === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedHljsRef.value : hljs;
			}),
			mergedKatexRef: computed(() => {
				const { katex } = props;
				return katex === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedKatexRef.value : katex;
			}),
			mergedThemeRef,
			mergedThemeOverridesRef,
			inlineThemeDisabled: inlineThemeDisabled || false,
			preflightStyleDisabled: preflightStyleDisabled || false,
			styleMountTarget
		});
		return {
			mergedClsPrefix: mergedClsPrefixRef,
			mergedBordered: mergedBorderedRef,
			mergedNamespace: mergedNamespaceRef,
			mergedTheme: mergedThemeRef,
			mergedThemeOverrides: mergedThemeOverridesRef
		};
	},
	render() {
		var _a, _b, _c, _d;
		return !this.abstract ? h(this.as || this.tag, { class: `${this.mergedClsPrefix || "n"}-config-provider` }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)) : (_d = (_c = this.$slots).default) === null || _d === void 0 ? void 0 : _d.call(_c);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popselect/styles/dark.mjs
var popselect = {
	name: "Popselect",
	common: derived$1,
	peers: {
		Popover: popoverDark,
		InternalSelectMenu: internalSelectMenuDark
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popselect/styles/light.mjs
function self$60(vars) {
	const { boxShadow2 } = vars;
	return { menuBoxShadow: boxShadow2 };
}
var popselectLight = createTheme({
	name: "Popselect",
	common: derived,
	peers: {
		Popover: popoverLight,
		InternalSelectMenu: internalSelectMenuLight
	},
	self: self$60
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/select/styles/light.mjs
function self$59(vars) {
	const { boxShadow2 } = vars;
	return { menuBoxShadow: boxShadow2 };
}
var selectLight = createTheme({
	name: "Select",
	common: derived,
	peers: {
		InternalSelection: internalSelectionLight,
		InternalSelectMenu: internalSelectMenuLight
	},
	self: self$59
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/select/styles/dark.mjs
var selectDark = {
	name: "Select",
	common: derived$1,
	peers: {
		InternalSelection: internalSelectionDark,
		InternalSelectMenu: internalSelectMenuDark
	},
	self: self$59
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/pagination/styles/_common.mjs
var _common_default$26 = {
	itemPaddingSmall: "0 4px",
	itemMarginSmall: "0 0 0 8px",
	itemMarginSmallRtl: "0 8px 0 0",
	itemPaddingMedium: "0 4px",
	itemMarginMedium: "0 0 0 8px",
	itemMarginMediumRtl: "0 8px 0 0",
	itemPaddingLarge: "0 4px",
	itemMarginLarge: "0 0 0 8px",
	itemMarginLargeRtl: "0 8px 0 0",
	buttonIconSizeSmall: "14px",
	buttonIconSizeMedium: "16px",
	buttonIconSizeLarge: "18px",
	inputWidthSmall: "60px",
	selectWidthSmall: "unset",
	inputMarginSmall: "0 0 0 8px",
	inputMarginSmallRtl: "0 8px 0 0",
	selectMarginSmall: "0 0 0 8px",
	prefixMarginSmall: "0 8px 0 0",
	suffixMarginSmall: "0 0 0 8px",
	inputWidthMedium: "60px",
	selectWidthMedium: "unset",
	inputMarginMedium: "0 0 0 8px",
	inputMarginMediumRtl: "0 8px 0 0",
	selectMarginMedium: "0 0 0 8px",
	prefixMarginMedium: "0 8px 0 0",
	suffixMarginMedium: "0 0 0 8px",
	inputWidthLarge: "60px",
	selectWidthLarge: "unset",
	inputMarginLarge: "0 0 0 8px",
	inputMarginLargeRtl: "0 8px 0 0",
	selectMarginLarge: "0 0 0 8px",
	prefixMarginLarge: "0 8px 0 0",
	suffixMarginLarge: "0 0 0 8px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/pagination/styles/light.mjs
function self$58(vars) {
	const { textColor2, primaryColor, primaryColorHover, primaryColorPressed, inputColorDisabled, textColorDisabled, borderColor, borderRadius, fontSizeTiny, fontSizeSmall, fontSizeMedium, heightTiny, heightSmall, heightMedium } = vars;
	return Object.assign(Object.assign({}, _common_default$26), {
		buttonColor: "#0000",
		buttonColorHover: "#0000",
		buttonColorPressed: "#0000",
		buttonBorder: `1px solid ${borderColor}`,
		buttonBorderHover: `1px solid ${borderColor}`,
		buttonBorderPressed: `1px solid ${borderColor}`,
		buttonIconColor: textColor2,
		buttonIconColorHover: textColor2,
		buttonIconColorPressed: textColor2,
		itemTextColor: textColor2,
		itemTextColorHover: primaryColorHover,
		itemTextColorPressed: primaryColorPressed,
		itemTextColorActive: primaryColor,
		itemTextColorDisabled: textColorDisabled,
		itemColor: "#0000",
		itemColorHover: "#0000",
		itemColorPressed: "#0000",
		itemColorActive: "#0000",
		itemColorActiveHover: "#0000",
		itemColorDisabled: inputColorDisabled,
		itemBorder: "1px solid #0000",
		itemBorderHover: "1px solid #0000",
		itemBorderPressed: "1px solid #0000",
		itemBorderActive: `1px solid ${primaryColor}`,
		itemBorderDisabled: `1px solid ${borderColor}`,
		itemBorderRadius: borderRadius,
		itemSizeSmall: heightTiny,
		itemSizeMedium: heightSmall,
		itemSizeLarge: heightMedium,
		itemFontSizeSmall: fontSizeTiny,
		itemFontSizeMedium: fontSizeSmall,
		itemFontSizeLarge: fontSizeMedium,
		jumperFontSizeSmall: fontSizeTiny,
		jumperFontSizeMedium: fontSizeSmall,
		jumperFontSizeLarge: fontSizeMedium,
		jumperTextColor: textColor2,
		jumperTextColorDisabled: textColorDisabled
	});
}
var paginationLight = createTheme({
	name: "Pagination",
	common: derived,
	peers: {
		Select: selectLight,
		Input: inputLight,
		Popselect: popselectLight
	},
	self: self$58
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/pagination/styles/dark.mjs
var paginationDark = {
	name: "Pagination",
	common: derived$1,
	peers: {
		Select: selectDark,
		Input: inputDark,
		Popselect: popselect
	},
	self(vars) {
		const { primaryColor, opacity3 } = vars;
		const borderColorActive = changeColor(primaryColor, { alpha: Number(opacity3) });
		const commonSelf = self$58(vars);
		commonSelf.itemBorderActive = `1px solid ${borderColorActive}`;
		commonSelf.itemBorderDisabled = "1px solid #0000";
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dropdown/styles/_common.mjs
var _common_default$25 = {
	padding: "4px 0",
	optionIconSizeSmall: "14px",
	optionIconSizeMedium: "16px",
	optionIconSizeLarge: "16px",
	optionIconSizeHuge: "18px",
	optionSuffixWidthSmall: "14px",
	optionSuffixWidthMedium: "14px",
	optionSuffixWidthLarge: "16px",
	optionSuffixWidthHuge: "16px",
	optionIconSuffixWidthSmall: "32px",
	optionIconSuffixWidthMedium: "32px",
	optionIconSuffixWidthLarge: "36px",
	optionIconSuffixWidthHuge: "36px",
	optionPrefixWidthSmall: "14px",
	optionPrefixWidthMedium: "14px",
	optionPrefixWidthLarge: "16px",
	optionPrefixWidthHuge: "16px",
	optionIconPrefixWidthSmall: "36px",
	optionIconPrefixWidthMedium: "36px",
	optionIconPrefixWidthLarge: "40px",
	optionIconPrefixWidthHuge: "40px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dropdown/styles/light.mjs
function self$57(vars) {
	const { primaryColor, textColor2, dividerColor, hoverColor, popoverColor, invertedColor, borderRadius, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeHuge, heightSmall, heightMedium, heightLarge, heightHuge, textColor3, opacityDisabled } = vars;
	return Object.assign(Object.assign({}, _common_default$25), {
		optionHeightSmall: heightSmall,
		optionHeightMedium: heightMedium,
		optionHeightLarge: heightLarge,
		optionHeightHuge: heightHuge,
		borderRadius,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		fontSizeHuge,
		optionTextColor: textColor2,
		optionTextColorHover: textColor2,
		optionTextColorActive: primaryColor,
		optionTextColorChildActive: primaryColor,
		color: popoverColor,
		dividerColor,
		suffixColor: textColor2,
		prefixColor: textColor2,
		optionColorHover: hoverColor,
		optionColorActive: changeColor(primaryColor, { alpha: .1 }),
		groupHeaderTextColor: textColor3,
		optionTextColorInverted: "#BBB",
		optionTextColorHoverInverted: "#FFF",
		optionTextColorActiveInverted: "#FFF",
		optionTextColorChildActiveInverted: "#FFF",
		colorInverted: invertedColor,
		dividerColorInverted: "#BBB",
		suffixColorInverted: "#BBB",
		prefixColorInverted: "#BBB",
		optionColorHoverInverted: primaryColor,
		optionColorActiveInverted: primaryColor,
		groupHeaderTextColorInverted: "#AAA",
		optionOpacityDisabled: opacityDisabled
	});
}
var dropdownLight = createTheme({
	name: "Dropdown",
	common: derived,
	peers: { Popover: popoverLight },
	self: self$57
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dropdown/styles/dark.mjs
var dropdownDark = {
	name: "Dropdown",
	common: derived$1,
	peers: { Popover: popoverDark },
	self(vars) {
		const { primaryColorSuppl, primaryColor, popoverColor } = vars;
		const commonSelf = self$57(vars);
		commonSelf.colorInverted = popoverColor;
		commonSelf.optionColorActive = changeColor(primaryColor, { alpha: .15 });
		commonSelf.optionColorActiveInverted = primaryColorSuppl;
		commonSelf.optionColorHoverInverted = primaryColorSuppl;
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tooltip/styles/_common.mjs
var _common_default$24 = { padding: "8px 14px" };
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tooltip/styles/dark.mjs
var tooltipDark = {
	name: "Tooltip",
	common: derived$1,
	peers: { Popover: popoverDark },
	self(vars) {
		const { borderRadius, boxShadow2, popoverColor, textColor2 } = vars;
		return Object.assign(Object.assign({}, _common_default$24), {
			borderRadius,
			boxShadow: boxShadow2,
			color: popoverColor,
			textColor: textColor2
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tooltip/styles/light.mjs
function self$56(vars) {
	const { borderRadius, boxShadow2, baseColor } = vars;
	return Object.assign(Object.assign({}, _common_default$24), {
		borderRadius,
		boxShadow: boxShadow2,
		color: composite(baseColor, "rgba(0, 0, 0, .85)"),
		textColor: baseColor
	});
}
var tooltipLight = createTheme({
	name: "Tooltip",
	common: derived,
	peers: { Popover: popoverLight },
	self: self$56
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/ellipsis/styles/dark.mjs
var ellipsisDark = {
	name: "Ellipsis",
	common: derived$1,
	peers: { Tooltip: tooltipDark }
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/ellipsis/styles/light.mjs
var ellipsisLight = createTheme({
	name: "Ellipsis",
	common: derived,
	peers: { Tooltip: tooltipLight }
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/radio/styles/_common.mjs
var _common_default$23 = {
	radioSizeSmall: "14px",
	radioSizeMedium: "16px",
	radioSizeLarge: "18px",
	labelPadding: "0 8px",
	labelFontWeight: "400"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/radio/styles/dark.mjs
var radioDark = {
	name: "Radio",
	common: derived$1,
	self(vars) {
		const { borderColor, primaryColor, baseColor, textColorDisabled, inputColorDisabled, textColor2, opacityDisabled, borderRadius, fontSizeSmall, fontSizeMedium, fontSizeLarge, heightSmall, heightMedium, heightLarge, lineHeight } = vars;
		return Object.assign(Object.assign({}, _common_default$23), {
			labelLineHeight: lineHeight,
			buttonHeightSmall: heightSmall,
			buttonHeightMedium: heightMedium,
			buttonHeightLarge: heightLarge,
			fontSizeSmall,
			fontSizeMedium,
			fontSizeLarge,
			boxShadow: `inset 0 0 0 1px ${borderColor}`,
			boxShadowActive: `inset 0 0 0 1px ${primaryColor}`,
			boxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, { alpha: .3 })}`,
			boxShadowHover: `inset 0 0 0 1px ${primaryColor}`,
			boxShadowDisabled: `inset 0 0 0 1px ${borderColor}`,
			color: "#0000",
			colorDisabled: inputColorDisabled,
			colorActive: "#0000",
			textColor: textColor2,
			textColorDisabled,
			dotColorActive: primaryColor,
			dotColorDisabled: borderColor,
			buttonBorderColor: borderColor,
			buttonBorderColorActive: primaryColor,
			buttonBorderColorHover: primaryColor,
			buttonColor: "#0000",
			buttonColorActive: primaryColor,
			buttonTextColor: textColor2,
			buttonTextColorActive: baseColor,
			buttonTextColorHover: primaryColor,
			opacityDisabled,
			buttonBoxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, { alpha: .3 })}`,
			buttonBoxShadowHover: `inset 0 0 0 1px ${primaryColor}`,
			buttonBoxShadow: "inset 0 0 0 1px #0000",
			buttonBorderRadius: borderRadius
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/radio/styles/light.mjs
function self$55(vars) {
	const { borderColor, primaryColor, baseColor, textColorDisabled, inputColorDisabled, textColor2, opacityDisabled, borderRadius, fontSizeSmall, fontSizeMedium, fontSizeLarge, heightSmall, heightMedium, heightLarge, lineHeight } = vars;
	return Object.assign(Object.assign({}, _common_default$23), {
		labelLineHeight: lineHeight,
		buttonHeightSmall: heightSmall,
		buttonHeightMedium: heightMedium,
		buttonHeightLarge: heightLarge,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		boxShadow: `inset 0 0 0 1px ${borderColor}`,
		boxShadowActive: `inset 0 0 0 1px ${primaryColor}`,
		boxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, { alpha: .2 })}`,
		boxShadowHover: `inset 0 0 0 1px ${primaryColor}`,
		boxShadowDisabled: `inset 0 0 0 1px ${borderColor}`,
		color: baseColor,
		colorDisabled: inputColorDisabled,
		colorActive: "#0000",
		textColor: textColor2,
		textColorDisabled,
		dotColorActive: primaryColor,
		dotColorDisabled: borderColor,
		buttonBorderColor: borderColor,
		buttonBorderColorActive: primaryColor,
		buttonBorderColorHover: borderColor,
		buttonColor: baseColor,
		buttonColorActive: baseColor,
		buttonTextColor: textColor2,
		buttonTextColorActive: primaryColor,
		buttonTextColorHover: primaryColor,
		opacityDisabled,
		buttonBoxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, { alpha: .3 })}`,
		buttonBoxShadowHover: "inset 0 0 0 1px #0000",
		buttonBoxShadow: "inset 0 0 0 1px #0000",
		buttonBorderRadius: borderRadius
	});
}
var radioLight = {
	name: "Radio",
	common: derived,
	self: self$55
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/data-table/styles/_common.mjs
var _common_default$22 = {
	thPaddingSmall: "8px",
	thPaddingMedium: "12px",
	thPaddingLarge: "12px",
	tdPaddingSmall: "8px",
	tdPaddingMedium: "12px",
	tdPaddingLarge: "12px",
	sorterSize: "15px",
	resizableContainerSize: "8px",
	resizableSize: "2px",
	filterSize: "15px",
	paginationMargin: "12px 0 0 0",
	emptyPadding: "48px 0",
	actionPadding: "8px 12px",
	actionButtonMargin: "0 8px 0 0"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/data-table/styles/light.mjs
function self$54(vars) {
	const { cardColor, modalColor, popoverColor, textColor2, textColor1, tableHeaderColor, tableColorHover, iconColor, primaryColor, fontWeightStrong, borderRadius, lineHeight, fontSizeSmall, fontSizeMedium, fontSizeLarge, dividerColor, heightSmall, opacityDisabled, tableColorStriped } = vars;
	return Object.assign(Object.assign({}, _common_default$22), {
		actionDividerColor: dividerColor,
		lineHeight,
		borderRadius,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		borderColor: composite(cardColor, dividerColor),
		tdColorHover: composite(cardColor, tableColorHover),
		tdColorSorting: composite(cardColor, tableColorHover),
		tdColorStriped: composite(cardColor, tableColorStriped),
		thColor: composite(cardColor, tableHeaderColor),
		thColorHover: composite(composite(cardColor, tableHeaderColor), tableColorHover),
		thColorSorting: composite(composite(cardColor, tableHeaderColor), tableColorHover),
		tdColor: cardColor,
		tdTextColor: textColor2,
		thTextColor: textColor1,
		thFontWeight: fontWeightStrong,
		thButtonColorHover: tableColorHover,
		thIconColor: iconColor,
		thIconColorActive: primaryColor,
		borderColorModal: composite(modalColor, dividerColor),
		tdColorHoverModal: composite(modalColor, tableColorHover),
		tdColorSortingModal: composite(modalColor, tableColorHover),
		tdColorStripedModal: composite(modalColor, tableColorStriped),
		thColorModal: composite(modalColor, tableHeaderColor),
		thColorHoverModal: composite(composite(modalColor, tableHeaderColor), tableColorHover),
		thColorSortingModal: composite(composite(modalColor, tableHeaderColor), tableColorHover),
		tdColorModal: modalColor,
		borderColorPopover: composite(popoverColor, dividerColor),
		tdColorHoverPopover: composite(popoverColor, tableColorHover),
		tdColorSortingPopover: composite(popoverColor, tableColorHover),
		tdColorStripedPopover: composite(popoverColor, tableColorStriped),
		thColorPopover: composite(popoverColor, tableHeaderColor),
		thColorHoverPopover: composite(composite(popoverColor, tableHeaderColor), tableColorHover),
		thColorSortingPopover: composite(composite(popoverColor, tableHeaderColor), tableColorHover),
		tdColorPopover: popoverColor,
		boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
		boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
		loadingColor: primaryColor,
		loadingSize: heightSmall,
		opacityLoading: opacityDisabled
	});
}
var dataTableLight = createTheme({
	name: "DataTable",
	common: derived,
	peers: {
		Button: buttonLight,
		Checkbox: checkboxLight,
		Radio: radioLight,
		Pagination: paginationLight,
		Scrollbar: scrollbarLight,
		Empty: emptyLight,
		Popover: popoverLight,
		Ellipsis: ellipsisLight,
		Dropdown: dropdownLight
	},
	self: self$54
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/data-table/styles/dark.mjs
var dataTableDark = {
	name: "DataTable",
	common: derived$1,
	peers: {
		Button: buttonDark,
		Checkbox: checkboxDark,
		Radio: radioDark,
		Pagination: paginationDark,
		Scrollbar: scrollbarDark,
		Empty: emptyDark,
		Popover: popoverDark,
		Ellipsis: ellipsisDark,
		Dropdown: dropdownDark
	},
	self(vars) {
		const commonSelf = self$54(vars);
		commonSelf.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)";
		commonSelf.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)";
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/icon/styles/light.mjs
function self$53(vars) {
	const { textColorBase, opacity1, opacity2, opacity3, opacity4, opacity5 } = vars;
	return {
		color: textColorBase,
		opacity1Depth: opacity1,
		opacity2Depth: opacity2,
		opacity3Depth: opacity3,
		opacity4Depth: opacity4,
		opacity5Depth: opacity5
	};
}
var iconLight = {
	name: "Icon",
	common: derived,
	self: self$53
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/icon/styles/dark.mjs
var iconDark$1 = {
	name: "Icon",
	common: derived$1,
	self: self$53
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/time-picker/styles/_common.mjs
var _common_default$21 = {
	itemFontSize: "12px",
	itemHeight: "36px",
	itemWidth: "52px",
	panelActionPadding: "8px 0"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/time-picker/styles/light.mjs
function self$52(vars) {
	const { popoverColor, textColor2, primaryColor, hoverColor, dividerColor, opacityDisabled, boxShadow2, borderRadius, iconColor, iconColorDisabled } = vars;
	return Object.assign(Object.assign({}, _common_default$21), {
		panelColor: popoverColor,
		panelBoxShadow: boxShadow2,
		panelDividerColor: dividerColor,
		itemTextColor: textColor2,
		itemTextColorActive: primaryColor,
		itemColorHover: hoverColor,
		itemOpacityDisabled: opacityDisabled,
		itemBorderRadius: borderRadius,
		borderRadius,
		iconColor,
		iconColorDisabled
	});
}
var timePickerLight = createTheme({
	name: "TimePicker",
	common: derived,
	peers: {
		Scrollbar: scrollbarLight,
		Button: buttonLight,
		Input: inputLight
	},
	self: self$52
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/time-picker/styles/dark.mjs
var timePickerDark = {
	name: "TimePicker",
	common: derived$1,
	peers: {
		Scrollbar: scrollbarDark,
		Button: buttonDark,
		Input: inputDark
	},
	self: self$52
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/date-picker/styles/_common.mjs
var _common_default$20 = {
	itemSize: "24px",
	itemCellWidth: "38px",
	itemCellHeight: "32px",
	scrollItemWidth: "80px",
	scrollItemHeight: "40px",
	panelExtraFooterPadding: "8px 12px",
	panelActionPadding: "8px 12px",
	calendarTitlePadding: "0",
	calendarTitleHeight: "28px",
	arrowSize: "14px",
	panelHeaderPadding: "8px 12px",
	calendarDaysHeight: "32px",
	calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px",
	calendarLeftPaddingDate: "6px 12px 4px 12px",
	calendarLeftPaddingDatetime: "4px 12px",
	calendarLeftPaddingDaterange: "6px 12px 4px 12px",
	calendarLeftPaddingDatetimerange: "4px 12px",
	calendarLeftPaddingMonth: "0",
	calendarLeftPaddingYear: "0",
	calendarLeftPaddingQuarter: "0",
	calendarLeftPaddingMonthrange: "0",
	calendarLeftPaddingQuarterrange: "0",
	calendarLeftPaddingYearrange: "0",
	calendarLeftPaddingWeek: "6px 12px 4px 12px",
	calendarRightPaddingDate: "6px 12px 4px 12px",
	calendarRightPaddingDatetime: "4px 12px",
	calendarRightPaddingDaterange: "6px 12px 4px 12px",
	calendarRightPaddingDatetimerange: "4px 12px",
	calendarRightPaddingMonth: "0",
	calendarRightPaddingYear: "0",
	calendarRightPaddingQuarter: "0",
	calendarRightPaddingMonthrange: "0",
	calendarRightPaddingQuarterrange: "0",
	calendarRightPaddingYearrange: "0",
	calendarRightPaddingWeek: "0"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/date-picker/styles/light.mjs
function self$51(vars) {
	const { hoverColor, fontSize, textColor2, textColorDisabled, popoverColor, primaryColor, borderRadiusSmall, iconColor, iconColorDisabled, textColor1, dividerColor, boxShadow2, borderRadius, fontWeightStrong } = vars;
	return Object.assign(Object.assign({}, _common_default$20), {
		itemFontSize: fontSize,
		calendarDaysFontSize: fontSize,
		calendarTitleFontSize: fontSize,
		itemTextColor: textColor2,
		itemTextColorDisabled: textColorDisabled,
		itemTextColorActive: popoverColor,
		itemTextColorCurrent: primaryColor,
		itemColorIncluded: changeColor(primaryColor, { alpha: .1 }),
		itemColorHover: hoverColor,
		itemColorDisabled: hoverColor,
		itemColorActive: primaryColor,
		itemBorderRadius: borderRadiusSmall,
		panelColor: popoverColor,
		panelTextColor: textColor2,
		arrowColor: iconColor,
		calendarTitleTextColor: textColor1,
		calendarTitleColorHover: hoverColor,
		calendarDaysTextColor: textColor2,
		panelHeaderDividerColor: dividerColor,
		calendarDaysDividerColor: dividerColor,
		calendarDividerColor: dividerColor,
		panelActionDividerColor: dividerColor,
		panelBoxShadow: boxShadow2,
		panelBorderRadius: borderRadius,
		calendarTitleFontWeight: fontWeightStrong,
		scrollItemBorderRadius: borderRadius,
		iconColor,
		iconColorDisabled
	});
}
var datePickerLight = createTheme({
	name: "DatePicker",
	common: derived,
	peers: {
		Input: inputLight,
		Button: buttonLight,
		TimePicker: timePickerLight,
		Scrollbar: scrollbarLight
	},
	self: self$51
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/date-picker/styles/dark.mjs
var datePickerDark = {
	name: "DatePicker",
	common: derived$1,
	peers: {
		Input: inputDark,
		Button: buttonDark,
		TimePicker: timePickerDark,
		Scrollbar: scrollbarDark
	},
	self(vars) {
		const { popoverColor, hoverColor, primaryColor } = vars;
		const commonSelf = self$51(vars);
		commonSelf.itemColorDisabled = composite(popoverColor, hoverColor);
		commonSelf.itemColorIncluded = changeColor(primaryColor, { alpha: .15 });
		commonSelf.itemColorHover = composite(popoverColor, hoverColor);
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/descriptions/styles/_common.mjs
var _common_default$19 = {
	thPaddingBorderedSmall: "8px 12px",
	thPaddingBorderedMedium: "12px 16px",
	thPaddingBorderedLarge: "16px 24px",
	thPaddingSmall: "0",
	thPaddingMedium: "0",
	thPaddingLarge: "0",
	tdPaddingBorderedSmall: "8px 12px",
	tdPaddingBorderedMedium: "12px 16px",
	tdPaddingBorderedLarge: "16px 24px",
	tdPaddingSmall: "0 0 8px 0",
	tdPaddingMedium: "0 0 12px 0",
	tdPaddingLarge: "0 0 16px 0"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/descriptions/styles/light.mjs
function self$50(vars) {
	const { tableHeaderColor, textColor2, textColor1, cardColor, modalColor, popoverColor, dividerColor, borderRadius, fontWeightStrong, lineHeight, fontSizeSmall, fontSizeMedium, fontSizeLarge } = vars;
	return Object.assign(Object.assign({}, _common_default$19), {
		lineHeight,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		titleTextColor: textColor1,
		thColor: composite(cardColor, tableHeaderColor),
		thColorModal: composite(modalColor, tableHeaderColor),
		thColorPopover: composite(popoverColor, tableHeaderColor),
		thTextColor: textColor1,
		thFontWeight: fontWeightStrong,
		tdTextColor: textColor2,
		tdColor: cardColor,
		tdColorModal: modalColor,
		tdColorPopover: popoverColor,
		borderColor: composite(cardColor, dividerColor),
		borderColorModal: composite(modalColor, dividerColor),
		borderColorPopover: composite(popoverColor, dividerColor),
		borderRadius
	});
}
var descriptionsLight = {
	name: "Descriptions",
	common: derived,
	self: self$50
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/descriptions/styles/dark.mjs
var descriptionsDark = {
	name: "Descriptions",
	common: derived$1,
	self: self$50
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dialog/src/context.mjs
var dialogProviderInjectionKey = createInjectionKey("n-dialog-provider");
var dialogApiInjectionKey = createInjectionKey("n-dialog-api");
var dialogReactiveListInjectionKey = createInjectionKey("n-dialog-reactive-list");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dialog/styles/_common.mjs
var _common_default$18 = {
	titleFontSize: "18px",
	padding: "16px 28px 20px 28px",
	iconSize: "28px",
	actionSpace: "12px",
	contentMargin: "8px 0 16px 0",
	iconMargin: "0 4px 0 0",
	iconMarginIconTop: "4px 0 8px 0",
	closeSize: "22px",
	closeIconSize: "18px",
	closeMargin: "20px 26px 0 0",
	closeMarginIconTop: "10px 16px 0 0"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dialog/styles/light.mjs
function self$49(vars) {
	const { textColor1, textColor2, modalColor, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, infoColor, successColor, warningColor, errorColor, primaryColor, dividerColor, borderRadius, fontWeightStrong, lineHeight, fontSize } = vars;
	return Object.assign(Object.assign({}, _common_default$18), {
		fontSize,
		lineHeight,
		border: `1px solid ${dividerColor}`,
		titleTextColor: textColor1,
		textColor: textColor2,
		color: modalColor,
		closeColorHover,
		closeColorPressed,
		closeIconColor,
		closeIconColorHover,
		closeIconColorPressed,
		closeBorderRadius: borderRadius,
		iconColor: primaryColor,
		iconColorInfo: infoColor,
		iconColorSuccess: successColor,
		iconColorWarning: warningColor,
		iconColorError: errorColor,
		borderRadius,
		titleFontWeight: fontWeightStrong
	});
}
var dialogLight = createTheme({
	name: "Dialog",
	common: derived,
	peers: { Button: buttonLight },
	self: self$49
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dialog/styles/dark.mjs
var dialogDark = {
	name: "Dialog",
	common: derived$1,
	peers: { Button: buttonDark },
	self: self$49
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dialog/src/dialogProps.mjs
var dialogProps = {
	icon: Function,
	type: {
		type: String,
		default: "default"
	},
	title: [String, Function],
	closable: {
		type: Boolean,
		default: true
	},
	negativeText: String,
	positiveText: String,
	positiveButtonProps: Object,
	negativeButtonProps: Object,
	content: [String, Function],
	action: Function,
	showIcon: {
		type: Boolean,
		default: true
	},
	loading: Boolean,
	bordered: Boolean,
	iconPlacement: String,
	titleClass: [String, Array],
	titleStyle: [String, Object],
	contentClass: [String, Array],
	contentStyle: [String, Object],
	actionClass: [String, Array],
	actionStyle: [String, Object],
	onPositiveClick: Function,
	onNegativeClick: Function,
	onClose: Function,
	closeFocusable: Boolean
};
var dialogPropKeys = keysOf(dialogProps);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dialog/src/styles/index.cssr.mjs
var index_cssr_default$3 = c([
	cB("dialog", `
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [
		cE("icon", `
 color: var(--n-icon-color);
 `),
		cM("bordered", `
 border: var(--n-border);
 `),
		cM("icon-top", [
			cE("close", `
 margin: var(--n-close-margin);
 `),
			cE("icon", `
 margin: var(--n-icon-margin);
 `),
			cE("content", `
 text-align: center;
 `),
			cE("title", `
 justify-content: center;
 `),
			cE("action", `
 justify-content: center;
 `)
		]),
		cM("icon-left", [cE("icon", `
 margin: var(--n-icon-margin);
 `), cM("closable", [cE("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),
		cE("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),
		cE("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [cM("last", "margin-bottom: 0;")]),
		cE("action", `
 display: flex;
 justify-content: flex-end;
 `, [c("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]),
		cE("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),
		cE("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),
		cB("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)
	]),
	insideModal(cB("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),
	cB("dialog", [asModal(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dialog/src/Dialog.mjs
init_runtime_core_esm_bundler();
var iconRenderMap$2 = {
	default: () => h(Info_default, null),
	info: () => h(Info_default, null),
	success: () => h(Success_default, null),
	warning: () => h(Warning_default, null),
	error: () => h(Error_default, null)
};
var NDialog = defineComponent({
	name: "Dialog",
	alias: ["NimbusConfirmCard", "Confirm"],
	props: Object.assign(Object.assign({}, useTheme.props), dialogProps),
	slots: Object,
	setup(props) {
		const { mergedComponentPropsRef, mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
		const rtlEnabledRef = useRtl("Dialog", mergedRtlRef, mergedClsPrefixRef);
		const mergedIconPlacementRef = computed(() => {
			var _a, _b;
			const { iconPlacement } = props;
			return iconPlacement || ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Dialog) === null || _b === void 0 ? void 0 : _b.iconPlacement) || "left";
		});
		function handlePositiveClick(e) {
			const { onPositiveClick } = props;
			if (onPositiveClick) onPositiveClick(e);
		}
		function handleNegativeClick(e) {
			const { onNegativeClick } = props;
			if (onNegativeClick) onNegativeClick(e);
		}
		function handleCloseClick() {
			const { onClose } = props;
			if (onClose) onClose();
		}
		const themeRef = useTheme("Dialog", "-dialog", index_cssr_default$3, dialogLight, props, mergedClsPrefixRef);
		const cssVarsRef = computed(() => {
			const { type } = props;
			const iconPlacement = mergedIconPlacementRef.value;
			const { common: { cubicBezierEaseInOut }, self: { fontSize, lineHeight, border, titleTextColor, textColor, color, closeBorderRadius, closeColorHover, closeColorPressed, closeIconColor, closeIconColorHover, closeIconColorPressed, closeIconSize, borderRadius, titleFontWeight, titleFontSize, padding, iconSize, actionSpace, contentMargin, closeSize, [iconPlacement === "top" ? "iconMarginIconTop" : "iconMargin"]: iconMargin, [iconPlacement === "top" ? "closeMarginIconTop" : "closeMargin"]: closeMargin, [createKey("iconColor", type)]: iconColor } } = themeRef.value;
			const iconMarginDiscrete = getMargin(iconMargin);
			return {
				"--n-font-size": fontSize,
				"--n-icon-color": iconColor,
				"--n-bezier": cubicBezierEaseInOut,
				"--n-close-margin": closeMargin,
				"--n-icon-margin-top": iconMarginDiscrete.top,
				"--n-icon-margin-right": iconMarginDiscrete.right,
				"--n-icon-margin-bottom": iconMarginDiscrete.bottom,
				"--n-icon-margin-left": iconMarginDiscrete.left,
				"--n-icon-size": iconSize,
				"--n-close-size": closeSize,
				"--n-close-icon-size": closeIconSize,
				"--n-close-border-radius": closeBorderRadius,
				"--n-close-color-hover": closeColorHover,
				"--n-close-color-pressed": closeColorPressed,
				"--n-close-icon-color": closeIconColor,
				"--n-close-icon-color-hover": closeIconColorHover,
				"--n-close-icon-color-pressed": closeIconColorPressed,
				"--n-color": color,
				"--n-text-color": textColor,
				"--n-border-radius": borderRadius,
				"--n-padding": padding,
				"--n-line-height": lineHeight,
				"--n-border": border,
				"--n-content-margin": contentMargin,
				"--n-title-font-size": titleFontSize,
				"--n-title-font-weight": titleFontWeight,
				"--n-title-text-color": titleTextColor,
				"--n-action-space": actionSpace
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("dialog", computed(() => `${props.type[0]}${mergedIconPlacementRef.value[0]}`), cssVarsRef, props) : void 0;
		return {
			mergedClsPrefix: mergedClsPrefixRef,
			rtlEnabled: rtlEnabledRef,
			mergedIconPlacement: mergedIconPlacementRef,
			mergedTheme: themeRef,
			handlePositiveClick,
			handleNegativeClick,
			handleCloseClick,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		};
	},
	render() {
		var _a;
		const { bordered, mergedIconPlacement, cssVars, closable, showIcon, title, content, action, negativeText, positiveText, positiveButtonProps, negativeButtonProps, handlePositiveClick, handleNegativeClick, mergedTheme, loading, type, mergedClsPrefix } = this;
		(_a = this.onRender) === null || _a === void 0 || _a.call(this);
		const icon = showIcon ? h(Icon_default, {
			clsPrefix: mergedClsPrefix,
			class: `${mergedClsPrefix}-dialog__icon`
		}, { default: () => resolveWrappedSlot(this.$slots.icon, (children) => children || (this.icon ? render(this.icon) : iconRenderMap$2[this.type]())) }) : null;
		const actionNode = resolveWrappedSlot(this.$slots.action, (children) => children || positiveText || negativeText || action ? h("div", {
			class: [`${mergedClsPrefix}-dialog__action`, this.actionClass],
			style: this.actionStyle
		}, children || (action ? [render(action)] : [this.negativeText && h(Button, Object.assign({
			theme: mergedTheme.peers.Button,
			themeOverrides: mergedTheme.peerOverrides.Button,
			ghost: true,
			size: "small",
			onClick: handleNegativeClick
		}, negativeButtonProps), { default: () => render(this.negativeText) }), this.positiveText && h(Button, Object.assign({
			theme: mergedTheme.peers.Button,
			themeOverrides: mergedTheme.peerOverrides.Button,
			size: "small",
			type: type === "default" ? "primary" : type,
			disabled: loading,
			loading,
			onClick: handlePositiveClick
		}, positiveButtonProps), { default: () => render(this.positiveText) })])) : null);
		return h("div", {
			class: [
				`${mergedClsPrefix}-dialog`,
				this.themeClass,
				this.closable && `${mergedClsPrefix}-dialog--closable`,
				`${mergedClsPrefix}-dialog--icon-${mergedIconPlacement}`,
				bordered && `${mergedClsPrefix}-dialog--bordered`,
				this.rtlEnabled && `${mergedClsPrefix}-dialog--rtl`
			],
			style: cssVars,
			role: "dialog"
		}, closable ? resolveWrappedSlot(this.$slots.close, (node) => {
			const classNames = [`${mergedClsPrefix}-dialog__close`, this.rtlEnabled && `${mergedClsPrefix}-dialog--rtl`];
			return node ? h("div", { class: classNames }, node) : h(Close_default, {
				focusable: this.closeFocusable,
				clsPrefix: mergedClsPrefix,
				class: classNames,
				onClick: this.handleCloseClick
			});
		}) : null, showIcon && mergedIconPlacement === "top" ? h("div", { class: `${mergedClsPrefix}-dialog-icon-container` }, icon) : null, h("div", {
			class: [`${mergedClsPrefix}-dialog__title`, this.titleClass],
			style: this.titleStyle
		}, showIcon && mergedIconPlacement === "left" ? icon : null, resolveSlot(this.$slots.header, () => [render(title)])), h("div", {
			class: [
				`${mergedClsPrefix}-dialog__content`,
				actionNode ? "" : `${mergedClsPrefix}-dialog__content--last`,
				this.contentClass
			],
			style: this.contentStyle
		}, resolveSlot(this.$slots.default, () => [render(content)])), actionNode);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/modal/styles/light.mjs
function self$48(vars) {
	const { modalColor, textColor2, boxShadow3 } = vars;
	return {
		color: modalColor,
		textColor: textColor2,
		boxShadow: boxShadow3
	};
}
var modalLight = createTheme({
	name: "Modal",
	common: derived,
	peers: {
		Scrollbar: scrollbarLight,
		Dialog: dialogLight,
		Card: cardLight
	},
	self: self$48
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/modal/styles/dark.mjs
var modalDark = {
	name: "Modal",
	common: derived$1,
	peers: {
		Scrollbar: scrollbarDark,
		Dialog: dialogDark,
		Card: cardDark
	},
	self: self$48
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/modal/src/composables.mjs
init_runtime_core_esm_bundler();
var DRAGGABLE_CLASS = "n-draggable";
function useDragModal(draggablePropsRef, options) {
	let cleanup;
	const draggableRef = computed(() => {
		return draggablePropsRef.value !== false;
	});
	const draggableClassRef = computed(() => {
		return draggableRef.value ? DRAGGABLE_CLASS : "";
	});
	const boundsToWindowRef = computed(() => {
		const draggableProps = draggablePropsRef.value;
		if (draggableProps === true || draggableProps === false) return true;
		else if (draggableProps) return draggableProps.bounds !== "none";
		else return true;
	});
	function startDrag(modal) {
		const header = modal.querySelector(`.${DRAGGABLE_CLASS}`);
		if (!header || !draggableClassRef.value) return;
		let maxMoveX = 0;
		let minMoveX = 0;
		let maxMoveY = 0;
		let minMoveY = 0;
		let prevMoveY = 0;
		let prevMoveX = 0;
		let mousedownEvent;
		let rafId = null;
		let pendingPosition = null;
		function handleMouseDown(event) {
			event.preventDefault();
			mousedownEvent = event;
			const { x, y, right, bottom } = modal.getBoundingClientRect();
			minMoveX = x;
			minMoveY = y;
			maxMoveX = window.innerWidth - right;
			maxMoveY = window.innerHeight - bottom;
			const { left, top } = modal.style;
			prevMoveY = +top.slice(0, -2);
			prevMoveX = +left.slice(0, -2);
		}
		function updatePosition() {
			if (pendingPosition) {
				modal.style.top = `${pendingPosition.y}px`;
				modal.style.left = `${pendingPosition.x}px`;
				pendingPosition = null;
			}
			rafId = null;
		}
		function handleMouseMove(event) {
			if (!mousedownEvent) return;
			const { clientX: downX, clientY: downY } = mousedownEvent;
			let moveX = event.clientX - downX;
			let moveY = event.clientY - downY;
			if (boundsToWindowRef.value) {
				if (moveX > maxMoveX) moveX = maxMoveX;
				else if (-moveX > minMoveX) moveX = -minMoveX;
				if (moveY > maxMoveY) moveY = maxMoveY;
				else if (-moveY > minMoveY) moveY = -minMoveY;
			}
			pendingPosition = {
				x: moveX + prevMoveX,
				y: moveY + prevMoveY
			};
			if (!rafId) rafId = requestAnimationFrame(updatePosition);
		}
		function handleMouseUp() {
			mousedownEvent = void 0;
			if (rafId) {
				cancelAnimationFrame(rafId);
				rafId = null;
			}
			if (pendingPosition) {
				modal.style.top = `${pendingPosition.y}px`;
				modal.style.left = `${pendingPosition.x}px`;
				pendingPosition = null;
			}
			options.onEnd(modal);
		}
		on("mousedown", header, handleMouseDown);
		on("mousemove", window, handleMouseMove);
		on("mouseup", window, handleMouseUp);
		cleanup = () => {
			if (rafId) cancelAnimationFrame(rafId);
			off("mousedown", header, handleMouseDown);
			off("mousemove", window, handleMouseMove);
			off("mouseup", window, handleMouseUp);
		};
	}
	function stopDrag() {
		if (cleanup) {
			cleanup();
			cleanup = void 0;
		}
	}
	onUnmounted(stopDrag);
	return {
		stopDrag,
		startDrag,
		draggableRef,
		draggableClassRef
	};
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/modal/src/presetProps.mjs
var presetProps = Object.assign(Object.assign({}, cardBaseProps), dialogProps);
var presetPropsKeys = keysOf(presetProps);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/modal/src/BodyWrapper.mjs
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var BodyWrapper_default = defineComponent({
	name: "ModalBody",
	inheritAttrs: false,
	slots: Object,
	props: Object.assign(Object.assign({
		show: {
			type: Boolean,
			required: true
		},
		preset: String,
		displayDirective: {
			type: String,
			required: true
		},
		trapFocus: {
			type: Boolean,
			default: true
		},
		autoFocus: {
			type: Boolean,
			default: true
		},
		blockScroll: Boolean,
		draggable: {
			type: [Boolean, Object],
			default: false
		},
		maskHidden: Boolean
	}, presetProps), {
		renderMask: Function,
		onClickoutside: Function,
		onBeforeLeave: {
			type: Function,
			required: true
		},
		onAfterLeave: {
			type: Function,
			required: true
		},
		onPositiveClick: {
			type: Function,
			required: true
		},
		onNegativeClick: {
			type: Function,
			required: true
		},
		onClose: {
			type: Function,
			required: true
		},
		onAfterEnter: Function,
		onEsc: Function
	}),
	setup(props) {
		const bodyRef = ref(null);
		const scrollbarRef = ref(null);
		const displayedRef = ref(props.show);
		const transformOriginXRef = ref(null);
		const transformOriginYRef = ref(null);
		const NModal = inject(modalInjectionKey);
		let mousePosition = null;
		watch(toRef(props, "show"), (value) => {
			if (value) mousePosition = NModal.getMousePosition();
		}, { immediate: true });
		const { stopDrag, startDrag, draggableRef, draggableClassRef } = useDragModal(toRef(props, "draggable"), { onEnd: (el) => {
			syncTransformOrigin(el);
		} });
		const dialogTitleClassRef = computed(() => {
			return normalizeClass([props.titleClass, draggableClassRef.value]);
		});
		const cardHeaderClassRef = computed(() => {
			return normalizeClass([props.headerClass, draggableClassRef.value]);
		});
		watch(toRef(props, "show"), (value) => {
			if (value) displayedRef.value = true;
		});
		useLockHtmlScroll(computed(() => props.blockScroll && displayedRef.value));
		function styleTransformOrigin() {
			if (NModal.transformOriginRef.value === "center") return "";
			const { value: transformOriginX } = transformOriginXRef;
			const { value: transformOriginY } = transformOriginYRef;
			if (transformOriginX === null || transformOriginY === null) return "";
			else if (scrollbarRef.value) return `${transformOriginX}px ${transformOriginY + scrollbarRef.value.containerScrollTop}px`;
			return "";
		}
		function syncTransformOrigin(el) {
			if (NModal.transformOriginRef.value === "center") return;
			if (!mousePosition) return;
			if (!scrollbarRef.value) return;
			const scrollTop = scrollbarRef.value.containerScrollTop;
			const { offsetLeft, offsetTop } = el;
			const top = mousePosition.y;
			const left = mousePosition.x;
			transformOriginXRef.value = -(offsetLeft - left);
			transformOriginYRef.value = -(offsetTop - top - scrollTop);
			el.style.transformOrigin = styleTransformOrigin();
		}
		function handleEnter(el) {
			nextTick(() => {
				syncTransformOrigin(el);
			});
		}
		function handleBeforeLeave(el) {
			el.style.transformOrigin = styleTransformOrigin();
			props.onBeforeLeave();
		}
		function handleAfterEnter(el) {
			const element = el;
			draggableRef.value && startDrag(element);
			props.onAfterEnter && props.onAfterEnter(element);
		}
		function handleAfterLeave() {
			displayedRef.value = false;
			transformOriginXRef.value = null;
			transformOriginYRef.value = null;
			stopDrag();
			props.onAfterLeave();
		}
		function handleCloseClick() {
			const { onClose } = props;
			if (onClose) onClose();
		}
		function handleNegativeClick() {
			props.onNegativeClick();
		}
		function handlePositiveClick() {
			props.onPositiveClick();
		}
		const childNodeRef = ref(null);
		watch(childNodeRef, (node) => {
			if (node) nextTick(() => {
				const el = node.el;
				if (el && bodyRef.value !== el) bodyRef.value = el;
			});
		});
		provide(modalBodyInjectionKey, bodyRef);
		provide(drawerBodyInjectionKey, null);
		provide(popoverBodyInjectionKey, null);
		return {
			mergedTheme: NModal.mergedThemeRef,
			appear: NModal.appearRef,
			isMounted: NModal.isMountedRef,
			mergedClsPrefix: NModal.mergedClsPrefixRef,
			bodyRef,
			scrollbarRef,
			draggableClass: draggableClassRef,
			displayed: displayedRef,
			childNodeRef,
			cardHeaderClass: cardHeaderClassRef,
			dialogTitleClass: dialogTitleClassRef,
			handlePositiveClick,
			handleNegativeClick,
			handleCloseClick,
			handleAfterEnter,
			handleAfterLeave,
			handleBeforeLeave,
			handleEnter
		};
	},
	render() {
		const { $slots, $attrs, handleEnter, handleAfterEnter, handleAfterLeave, handleBeforeLeave, preset, mergedClsPrefix } = this;
		let childNode = null;
		if (!preset) {
			childNode = getFirstSlotVNodeWithTypedProps("default", $slots.default, { draggableClass: this.draggableClass });
			if (!childNode) {
				warn("modal", "default slot is empty");
				return;
			}
			childNode = cloneVNode(childNode);
			childNode.props = mergeProps({ class: `${mergedClsPrefix}-modal` }, $attrs, childNode.props || {});
		}
		return this.displayDirective === "show" || this.displayed || this.show ? withDirectives(h("div", {
			role: "none",
			class: [`${mergedClsPrefix}-modal-body-wrapper`, this.maskHidden && `${mergedClsPrefix}-modal-body-wrapper--mask-hidden`]
		}, h(Scrollbar, {
			ref: "scrollbarRef",
			theme: this.mergedTheme.peers.Scrollbar,
			themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
			contentClass: `${mergedClsPrefix}-modal-scroll-content`
		}, { default: () => {
			var _a;
			return [(_a = this.renderMask) === null || _a === void 0 ? void 0 : _a.call(this), h(FocusTrap, {
				disabled: !this.trapFocus || this.maskHidden,
				active: this.show,
				onEsc: this.onEsc,
				autoFocus: this.autoFocus
			}, { default: () => {
				var _a;
				return h(Transition, {
					name: "fade-in-scale-up-transition",
					appear: (_a = this.appear) !== null && _a !== void 0 ? _a : this.isMounted,
					onEnter: handleEnter,
					onAfterEnter: handleAfterEnter,
					onAfterLeave: handleAfterLeave,
					onBeforeLeave: handleBeforeLeave
				}, { default: () => {
					const dirs = [[vShow, this.show]];
					const { onClickoutside } = this;
					if (onClickoutside) dirs.push([
						clickoutside,
						this.onClickoutside,
						void 0,
						{ capture: true }
					]);
					return withDirectives(this.preset === "confirm" || this.preset === "dialog" ? h(NDialog, Object.assign({}, this.$attrs, {
						class: [`${mergedClsPrefix}-modal`, this.$attrs.class],
						ref: "bodyRef",
						theme: this.mergedTheme.peers.Dialog,
						themeOverrides: this.mergedTheme.peerOverrides.Dialog
					}, keep(this.$props, dialogPropKeys), {
						titleClass: this.dialogTitleClass,
						"aria-modal": "true"
					}), $slots) : this.preset === "card" ? h(Card_default, Object.assign({}, this.$attrs, {
						ref: "bodyRef",
						class: [`${mergedClsPrefix}-modal`, this.$attrs.class],
						theme: this.mergedTheme.peers.Card,
						themeOverrides: this.mergedTheme.peerOverrides.Card
					}, keep(this.$props, cardBasePropKeys), {
						headerClass: this.cardHeaderClass,
						"aria-modal": "true",
						role: "dialog"
					}), $slots) : this.childNodeRef = childNode, dirs);
				} });
			} })];
		} })), [[vShow, this.displayDirective === "if" || this.displayed || this.show]]) : null;
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/modal/src/styles/index.cssr.mjs
var index_cssr_default$2 = c([
	cB("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),
	cB("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [fadeInTransition({
		enterDuration: ".25s",
		leaveDuration: ".25s",
		enterCubicBezier: "var(--n-bezier-ease-out)",
		leaveCubicBezier: "var(--n-bezier-ease-out)"
	})]),
	cB("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [cB("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `), cM("mask-hidden", `pointer-events: none;`, [cB("modal-scroll-content", [c("> *", `
 pointer-events: all;
 `)])])]),
	cB("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [fadeInScaleUpTransition({
		duration: ".25s",
		enterScale: ".5"
	}), c(`.${DRAGGABLE_CLASS}`, `
 cursor: move;
 user-select: none;
 `)])
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/modal/src/Modal.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var modalProps = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), {
	show: Boolean,
	showMask: {
		type: Boolean,
		default: true
	},
	maskClosable: {
		type: Boolean,
		default: true
	},
	preset: String,
	to: [String, Object],
	displayDirective: {
		type: String,
		default: "if"
	},
	transformOrigin: {
		type: String,
		default: "mouse"
	},
	zIndex: Number,
	autoFocus: {
		type: Boolean,
		default: true
	},
	trapFocus: {
		type: Boolean,
		default: true
	},
	closeOnEsc: {
		type: Boolean,
		default: true
	},
	blockScroll: {
		type: Boolean,
		default: true
	}
}), presetProps), {
	draggable: [Boolean, Object],
	onEsc: Function,
	"onUpdate:show": [Function, Array],
	onUpdateShow: [Function, Array],
	onAfterEnter: Function,
	onBeforeLeave: Function,
	onAfterLeave: Function,
	onClose: Function,
	onPositiveClick: Function,
	onNegativeClick: Function,
	onMaskClick: Function,
	internalDialog: Boolean,
	internalModal: Boolean,
	internalAppear: {
		type: Boolean,
		default: void 0
	},
	overlayStyle: [String, Object],
	onBeforeHide: Function,
	onAfterHide: Function,
	onHide: Function,
	unstableShowMask: {
		type: Boolean,
		default: void 0
	}
});
var Modal_default = defineComponent({
	name: "Modal",
	inheritAttrs: false,
	props: modalProps,
	slots: Object,
	setup(props) {
		const containerRef = ref(null);
		const { mergedClsPrefixRef, namespaceRef, inlineThemeDisabled } = useConfig(props);
		const themeRef = useTheme("Modal", "-modal", index_cssr_default$2, modalLight, props, mergedClsPrefixRef);
		const clickedRef = useClicked(64);
		const clickedPositionRef = useClickPosition();
		const isMountedRef = isMounted();
		const NDialogProvider = props.internalDialog ? inject(dialogProviderInjectionKey, null) : null;
		const NModalProvider = props.internalModal ? inject(modalProviderInjectionKey, null) : null;
		const isComposingRef = useIsComposing();
		function doUpdateShow(show) {
			const { onUpdateShow, "onUpdate:show": _onUpdateShow, onHide } = props;
			if (onUpdateShow) call(onUpdateShow, show);
			if (_onUpdateShow) call(_onUpdateShow, show);
			if (onHide && !show) onHide(show);
		}
		function handleCloseClick() {
			const { onClose } = props;
			if (onClose) Promise.resolve(onClose()).then((value) => {
				if (value === false) return;
				doUpdateShow(false);
			});
			else doUpdateShow(false);
		}
		function handlePositiveClick() {
			const { onPositiveClick } = props;
			if (onPositiveClick) Promise.resolve(onPositiveClick()).then((value) => {
				if (value === false) return;
				doUpdateShow(false);
			});
			else doUpdateShow(false);
		}
		function handleNegativeClick() {
			const { onNegativeClick } = props;
			if (onNegativeClick) Promise.resolve(onNegativeClick()).then((value) => {
				if (value === false) return;
				doUpdateShow(false);
			});
			else doUpdateShow(false);
		}
		function handleBeforeLeave() {
			const { onBeforeLeave, onBeforeHide } = props;
			if (onBeforeLeave) call(onBeforeLeave);
			if (onBeforeHide) onBeforeHide();
		}
		function handleAfterLeave() {
			const { onAfterLeave, onAfterHide } = props;
			if (onAfterLeave) call(onAfterLeave);
			if (onAfterHide) onAfterHide();
		}
		function handleClickoutside(e) {
			var _a;
			const { onMaskClick } = props;
			if (onMaskClick) onMaskClick(e);
			if (props.maskClosable) {
				if ((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e))) doUpdateShow(false);
			}
		}
		function handleEsc(e) {
			var _a;
			(_a = props.onEsc) === null || _a === void 0 || _a.call(props);
			if (props.show && props.closeOnEsc && eventEffectNotPerformed(e)) {
				if (!isComposingRef.value) doUpdateShow(false);
			}
		}
		provide(modalInjectionKey, {
			getMousePosition: () => {
				const mergedProvider = NDialogProvider || NModalProvider;
				if (mergedProvider) {
					const { clickedRef, clickedPositionRef } = mergedProvider;
					if (clickedRef.value && clickedPositionRef.value) return clickedPositionRef.value;
				}
				if (clickedRef.value) return clickedPositionRef.value;
				return null;
			},
			mergedClsPrefixRef,
			mergedThemeRef: themeRef,
			isMountedRef,
			appearRef: toRef(props, "internalAppear"),
			transformOriginRef: toRef(props, "transformOrigin")
		});
		const cssVarsRef = computed(() => {
			const { common: { cubicBezierEaseOut }, self: { boxShadow, color, textColor } } = themeRef.value;
			return {
				"--n-bezier-ease-out": cubicBezierEaseOut,
				"--n-box-shadow": boxShadow,
				"--n-color": color,
				"--n-text-color": textColor
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("theme-class", void 0, cssVarsRef, props) : void 0;
		return {
			mergedClsPrefix: mergedClsPrefixRef,
			namespace: namespaceRef,
			isMounted: isMountedRef,
			containerRef,
			presetProps: computed(() => {
				return keep(props, presetPropsKeys);
			}),
			handleEsc,
			handleAfterLeave,
			handleClickoutside,
			handleBeforeLeave,
			doUpdateShow,
			handleNegativeClick,
			handlePositiveClick,
			handleCloseClick,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		};
	},
	render() {
		const { mergedClsPrefix } = this;
		return h(src_default$1, {
			to: this.to,
			show: this.show
		}, { default: () => {
			var _a;
			(_a = this.onRender) === null || _a === void 0 || _a.call(this);
			const { showMask } = this;
			return withDirectives(h("div", {
				role: "none",
				ref: "containerRef",
				class: [
					`${mergedClsPrefix}-modal-container`,
					this.themeClass,
					this.namespace
				],
				style: this.cssVars
			}, h(BodyWrapper_default, Object.assign({ style: this.overlayStyle }, this.$attrs, {
				ref: "bodyWrapper",
				displayDirective: this.displayDirective,
				show: this.show,
				preset: this.preset,
				autoFocus: this.autoFocus,
				trapFocus: this.trapFocus,
				draggable: this.draggable,
				blockScroll: this.blockScroll,
				maskHidden: !showMask
			}, this.presetProps, {
				onEsc: this.handleEsc,
				onClose: this.handleCloseClick,
				onNegativeClick: this.handleNegativeClick,
				onPositiveClick: this.handlePositiveClick,
				onBeforeLeave: this.handleBeforeLeave,
				onAfterEnter: this.onAfterEnter,
				onAfterLeave: this.handleAfterLeave,
				onClickoutside: showMask ? void 0 : this.handleClickoutside,
				renderMask: showMask ? () => {
					var _a;
					return h(Transition, {
						name: "fade-in-transition",
						key: "mask",
						appear: (_a = this.internalAppear) !== null && _a !== void 0 ? _a : this.isMounted
					}, { default: () => {
						return this.show ? h("div", {
							"aria-hidden": true,
							ref: "containerRef",
							class: `${mergedClsPrefix}-modal-mask`,
							onClick: this.handleClickoutside
						}) : null;
					} });
				} : void 0
			}), this.$slots)), [[zindexable, {
				zIndex: this.zIndex,
				enabled: this.show
			}]]);
		} });
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dialog/src/DialogEnvironment.mjs
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var exposedDialogEnvProps = Object.assign(Object.assign({}, dialogProps), {
	onAfterEnter: Function,
	onAfterLeave: Function,
	transformOrigin: String,
	blockScroll: {
		type: Boolean,
		default: true
	},
	closeOnEsc: {
		type: Boolean,
		default: true
	},
	onEsc: Function,
	autoFocus: {
		type: Boolean,
		default: true
	},
	internalStyle: [String, Object],
	maskClosable: {
		type: Boolean,
		default: true
	},
	zIndex: Number,
	onPositiveClick: Function,
	onNegativeClick: Function,
	onClose: Function,
	onMaskClick: Function,
	draggable: [Boolean, Object]
});
var NDialogEnvironment = defineComponent({
	name: "DialogEnvironment",
	props: Object.assign(Object.assign({}, exposedDialogEnvProps), {
		internalKey: {
			type: String,
			required: true
		},
		to: [String, Object],
		onInternalAfterLeave: {
			type: Function,
			required: true
		}
	}),
	setup(props) {
		const showRef = ref(true);
		function handleAfterLeave() {
			const { onInternalAfterLeave, internalKey, onAfterLeave } = props;
			if (onInternalAfterLeave) onInternalAfterLeave(internalKey);
			if (onAfterLeave) onAfterLeave();
		}
		function handlePositiveClick(e) {
			const { onPositiveClick } = props;
			if (onPositiveClick) Promise.resolve(onPositiveClick(e)).then((result) => {
				if (result === false) return;
				hide();
			});
			else hide();
		}
		function handleNegativeClick(e) {
			const { onNegativeClick } = props;
			if (onNegativeClick) Promise.resolve(onNegativeClick(e)).then((result) => {
				if (result === false) return;
				hide();
			});
			else hide();
		}
		function handleCloseClick() {
			const { onClose } = props;
			if (onClose) Promise.resolve(onClose()).then((result) => {
				if (result === false) return;
				hide();
			});
			else hide();
		}
		function handleMaskClick(e) {
			const { onMaskClick, maskClosable } = props;
			if (onMaskClick) {
				onMaskClick(e);
				if (maskClosable) hide();
			}
		}
		function handleEsc() {
			const { onEsc } = props;
			if (onEsc) onEsc();
		}
		function hide() {
			showRef.value = false;
		}
		function handleUpdateShow(value) {
			showRef.value = value;
		}
		return {
			show: showRef,
			hide,
			handleUpdateShow,
			handleAfterLeave,
			handleCloseClick,
			handleNegativeClick,
			handlePositiveClick,
			handleMaskClick,
			handleEsc
		};
	},
	render() {
		const { handlePositiveClick, handleUpdateShow, handleNegativeClick, handleCloseClick, handleAfterLeave, handleMaskClick, handleEsc, to, zIndex, maskClosable, show } = this;
		return h(Modal_default, {
			show,
			onUpdateShow: handleUpdateShow,
			onMaskClick: handleMaskClick,
			onEsc: handleEsc,
			to,
			zIndex,
			maskClosable,
			onAfterEnter: this.onAfterEnter,
			onAfterLeave: handleAfterLeave,
			closeOnEsc: this.closeOnEsc,
			blockScroll: this.blockScroll,
			autoFocus: this.autoFocus,
			transformOrigin: this.transformOrigin,
			draggable: this.draggable,
			internalAppear: true,
			internalDialog: true
		}, { default: ({ draggableClass }) => h(NDialog, Object.assign({}, keep(this.$props, dialogPropKeys), {
			titleClass: normalizeClass([this.titleClass, draggableClass]),
			style: this.internalStyle,
			onClose: handleCloseClick,
			onNegativeClick: handleNegativeClick,
			onPositiveClick: handlePositiveClick
		})) });
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dialog/src/DialogProvider.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var NDialogProvider = defineComponent({
	name: "DialogProvider",
	props: {
		injectionKey: String,
		to: [String, Object]
	},
	setup() {
		const dialogListRef = ref([]);
		const dialogInstRefs = {};
		function create(options = {}) {
			const key = createId();
			const dialogReactive = reactive(Object.assign(Object.assign({}, options), {
				key,
				destroy: () => {
					var _a;
					(_a = dialogInstRefs[`n-dialog-${key}`]) === null || _a === void 0 || _a.hide();
				}
			}));
			dialogListRef.value.push(dialogReactive);
			return dialogReactive;
		}
		const typedApi = [
			"info",
			"success",
			"warning",
			"error"
		].map((type) => (options) => {
			return create(Object.assign(Object.assign({}, options), { type }));
		});
		function handleAfterLeave(key) {
			const { value: dialogList } = dialogListRef;
			dialogList.splice(dialogList.findIndex((dialog) => dialog.key === key), 1);
		}
		function destroyAll() {
			Object.values(dialogInstRefs).forEach((dialogInstRef) => {
				dialogInstRef === null || dialogInstRef === void 0 || dialogInstRef.hide();
			});
		}
		const api = {
			create,
			destroyAll,
			info: typedApi[0],
			success: typedApi[1],
			warning: typedApi[2],
			error: typedApi[3]
		};
		provide(dialogApiInjectionKey, api);
		provide(dialogProviderInjectionKey, {
			clickedRef: useClicked(64),
			clickedPositionRef: useClickPosition()
		});
		provide(dialogReactiveListInjectionKey, dialogListRef);
		return Object.assign(Object.assign({}, api), {
			dialogList: dialogListRef,
			dialogInstRefs,
			handleAfterLeave
		});
	},
	render() {
		var _a, _b;
		return h(Fragment, null, [this.dialogList.map((dialog) => h(NDialogEnvironment, omit(dialog, ["destroy", "style"], {
			internalStyle: dialog.style,
			to: this.to,
			ref: (inst) => {
				if (inst === null) delete this.dialogInstRefs[`n-dialog-${dialog.key}`];
				else this.dialogInstRefs[`n-dialog-${dialog.key}`] = inst;
			},
			internalKey: dialog.key,
			onInternalAfterLeave: this.handleAfterLeave
		}))), (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)]);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/loading-bar/styles/dark.mjs
var loadingBarDark = {
	name: "LoadingBar",
	common: derived$1,
	self(vars) {
		const { primaryColor } = vars;
		return {
			colorError: "red",
			colorLoading: primaryColor,
			height: "2px"
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/loading-bar/styles/light.mjs
function self$47(vars) {
	const { primaryColor, errorColor } = vars;
	return {
		colorError: errorColor,
		colorLoading: primaryColor,
		height: "2px"
	};
}
var loadingBarLight = {
	name: "LoadingBar",
	common: derived,
	self: self$47
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/message/src/context.mjs
var messageApiInjectionKey = createInjectionKey("n-message-api");
var messageProviderInjectionKey = createInjectionKey("n-message-provider");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/message/styles/_common.mjs
var _common_default$17 = {
	margin: "0 0 8px 0",
	padding: "10px 20px",
	maxWidth: "720px",
	minWidth: "420px",
	iconMargin: "0 10px 0 0",
	closeMargin: "0 0 0 10px",
	closeSize: "20px",
	closeIconSize: "16px",
	iconSize: "20px",
	fontSize: "14px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/message/styles/light.mjs
function self$46(vars) {
	const { textColor2, closeIconColor, closeIconColorHover, closeIconColorPressed, infoColor, successColor, errorColor, warningColor, popoverColor, boxShadow2, primaryColor, lineHeight, borderRadius, closeColorHover, closeColorPressed } = vars;
	return Object.assign(Object.assign({}, _common_default$17), {
		closeBorderRadius: borderRadius,
		textColor: textColor2,
		textColorInfo: textColor2,
		textColorSuccess: textColor2,
		textColorError: textColor2,
		textColorWarning: textColor2,
		textColorLoading: textColor2,
		color: popoverColor,
		colorInfo: popoverColor,
		colorSuccess: popoverColor,
		colorError: popoverColor,
		colorWarning: popoverColor,
		colorLoading: popoverColor,
		boxShadow: boxShadow2,
		boxShadowInfo: boxShadow2,
		boxShadowSuccess: boxShadow2,
		boxShadowError: boxShadow2,
		boxShadowWarning: boxShadow2,
		boxShadowLoading: boxShadow2,
		iconColor: textColor2,
		iconColorInfo: infoColor,
		iconColorSuccess: successColor,
		iconColorWarning: warningColor,
		iconColorError: errorColor,
		iconColorLoading: primaryColor,
		closeColorHover,
		closeColorPressed,
		closeIconColor,
		closeIconColorHover,
		closeIconColorPressed,
		closeColorHoverInfo: closeColorHover,
		closeColorPressedInfo: closeColorPressed,
		closeIconColorInfo: closeIconColor,
		closeIconColorHoverInfo: closeIconColorHover,
		closeIconColorPressedInfo: closeIconColorPressed,
		closeColorHoverSuccess: closeColorHover,
		closeColorPressedSuccess: closeColorPressed,
		closeIconColorSuccess: closeIconColor,
		closeIconColorHoverSuccess: closeIconColorHover,
		closeIconColorPressedSuccess: closeIconColorPressed,
		closeColorHoverError: closeColorHover,
		closeColorPressedError: closeColorPressed,
		closeIconColorError: closeIconColor,
		closeIconColorHoverError: closeIconColorHover,
		closeIconColorPressedError: closeIconColorPressed,
		closeColorHoverWarning: closeColorHover,
		closeColorPressedWarning: closeColorPressed,
		closeIconColorWarning: closeIconColor,
		closeIconColorHoverWarning: closeIconColorHover,
		closeIconColorPressedWarning: closeIconColorPressed,
		closeColorHoverLoading: closeColorHover,
		closeColorPressedLoading: closeColorPressed,
		closeIconColorLoading: closeIconColor,
		closeIconColorHoverLoading: closeIconColorHover,
		closeIconColorPressedLoading: closeIconColorPressed,
		loadingColor: primaryColor,
		lineHeight,
		borderRadius,
		border: "0"
	});
}
var messageLight = {
	name: "Message",
	common: derived,
	self: self$46
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/message/styles/dark.mjs
var messageDark = {
	name: "Message",
	common: derived$1,
	self: self$46
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/message/src/message-props.mjs
var messageProps = {
	icon: Function,
	type: {
		type: String,
		default: "info"
	},
	content: [
		String,
		Number,
		Function
	],
	showIcon: {
		type: Boolean,
		default: true
	},
	closable: Boolean,
	keepAliveOnHover: Boolean,
	spinProps: Object,
	onClose: Function,
	onMouseenter: Function,
	onMouseleave: Function
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/message/src/styles/index.cssr.mjs
var index_cssr_default$1 = c([
	cB("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [fadeInHeightExpandTransition({
		overflow: "visible",
		originalTransition: "transform .3s var(--n-bezier)",
		enterToProps: { transform: "scale(1)" },
		leaveToProps: { transform: "scale(0.85)" }
	})]),
	cB("message", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 border: var(--n-border);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `, [
		cE("content", `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),
		cE("icon", `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `, [[
			"default",
			"info",
			"success",
			"warning",
			"error",
			"loading"
		].map((type) => cM(`${type}-type`, [c("> *", `
 color: var(--n-icon-color-${type});
 transition: color .3s var(--n-bezier);
 `)])), c("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [iconSwitchTransition()])]),
		cE("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [c("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), c("&:active", `
 color: var(--n-close-icon-color-pressed);
 `)])
	]),
	cB("message-container", `
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `, [
		cM("top", `
 top: 12px;
 left: 0;
 right: 0;
 `),
		cM("top-left", `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),
		cM("top-right", `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),
		cM("bottom", `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),
		cM("bottom-left", `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),
		cM("bottom-right", `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)
	])
]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/message/src/Message.mjs
init_runtime_core_esm_bundler();
var iconRenderMap$1 = {
	info: () => h(Info_default, null),
	success: () => h(Success_default, null),
	warning: () => h(Warning_default, null),
	error: () => h(Error_default, null),
	default: () => null
};
var Message_default = defineComponent({
	name: "Message",
	props: Object.assign(Object.assign({}, messageProps), { render: Function }),
	setup(props) {
		const { inlineThemeDisabled, mergedRtlRef } = useConfig(props);
		const { props: messageProviderProps, mergedClsPrefixRef } = inject(messageProviderInjectionKey);
		const rtlEnabledRef = useRtl("Message", mergedRtlRef, mergedClsPrefixRef);
		const themeRef = useTheme("Message", "-message", index_cssr_default$1, messageLight, messageProviderProps, mergedClsPrefixRef);
		const cssVarsRef = computed(() => {
			const { type } = props;
			const { common: { cubicBezierEaseInOut }, self: { padding, margin, maxWidth, iconMargin, closeMargin, closeSize, iconSize, fontSize, lineHeight, borderRadius, border, iconColorInfo, iconColorSuccess, iconColorWarning, iconColorError, iconColorLoading, closeIconSize, closeBorderRadius, [createKey("textColor", type)]: textColor, [createKey("boxShadow", type)]: boxShadow, [createKey("color", type)]: color, [createKey("closeColorHover", type)]: closeColorHover, [createKey("closeColorPressed", type)]: closeColorPressed, [createKey("closeIconColor", type)]: closeIconColor, [createKey("closeIconColorPressed", type)]: closeIconColorPressed, [createKey("closeIconColorHover", type)]: closeIconColorHover } } = themeRef.value;
			return {
				"--n-bezier": cubicBezierEaseInOut,
				"--n-margin": margin,
				"--n-padding": padding,
				"--n-max-width": maxWidth,
				"--n-font-size": fontSize,
				"--n-icon-margin": iconMargin,
				"--n-icon-size": iconSize,
				"--n-close-icon-size": closeIconSize,
				"--n-close-border-radius": closeBorderRadius,
				"--n-close-size": closeSize,
				"--n-close-margin": closeMargin,
				"--n-text-color": textColor,
				"--n-color": color,
				"--n-box-shadow": boxShadow,
				"--n-icon-color-info": iconColorInfo,
				"--n-icon-color-success": iconColorSuccess,
				"--n-icon-color-warning": iconColorWarning,
				"--n-icon-color-error": iconColorError,
				"--n-icon-color-loading": iconColorLoading,
				"--n-close-color-hover": closeColorHover,
				"--n-close-color-pressed": closeColorPressed,
				"--n-close-icon-color": closeIconColor,
				"--n-close-icon-color-pressed": closeIconColorPressed,
				"--n-close-icon-color-hover": closeIconColorHover,
				"--n-line-height": lineHeight,
				"--n-border-radius": borderRadius,
				"--n-border": border
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("message", computed(() => props.type[0]), cssVarsRef, {}) : void 0;
		return {
			mergedClsPrefix: mergedClsPrefixRef,
			rtlEnabled: rtlEnabledRef,
			messageProviderProps,
			handleClose() {
				var _a;
				(_a = props.onClose) === null || _a === void 0 || _a.call(props);
			},
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
			placement: messageProviderProps.placement
		};
	},
	render() {
		const { render: renderMessage, type, closable, content, mergedClsPrefix, cssVars, themeClass, onRender, icon, handleClose, showIcon } = this;
		onRender === null || onRender === void 0 || onRender();
		let iconNode;
		return h("div", {
			class: [`${mergedClsPrefix}-message-wrapper`, themeClass],
			onMouseenter: this.onMouseenter,
			onMouseleave: this.onMouseleave,
			style: [{ alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end" }, cssVars]
		}, renderMessage ? renderMessage(this.$props) : h("div", { class: [`${mergedClsPrefix}-message ${mergedClsPrefix}-message--${type}-type`, this.rtlEnabled && `${mergedClsPrefix}-message--rtl`] }, (iconNode = createIconVNode(icon, type, mergedClsPrefix, this.spinProps)) && showIcon ? h("div", { class: `${mergedClsPrefix}-message__icon ${mergedClsPrefix}-message__icon--${type}-type` }, h(IconSwitchTransition_default, null, { default: () => iconNode })) : null, h("div", { class: `${mergedClsPrefix}-message__content` }, render(content)), closable ? h(Close_default, {
			clsPrefix: mergedClsPrefix,
			class: `${mergedClsPrefix}-message__close`,
			onClick: handleClose,
			absolute: true
		}) : null));
	}
});
function createIconVNode(icon, type, clsPrefix, spinProps) {
	if (typeof icon === "function") return icon();
	else {
		const innerIcon = type === "loading" ? h(Loading_default, Object.assign({
			clsPrefix,
			strokeWidth: 24,
			scale: .85
		}, spinProps)) : iconRenderMap$1[type]();
		if (!innerIcon) return null;
		return h(Icon_default, {
			clsPrefix,
			key: type
		}, { default: () => innerIcon });
	}
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/message/src/MessageEnvironment.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var MessageEnvironment_default = defineComponent({
	name: "MessageEnvironment",
	props: Object.assign(Object.assign({}, messageProps), {
		duration: {
			type: Number,
			default: 3e3
		},
		onAfterLeave: Function,
		onLeave: Function,
		internalKey: {
			type: String,
			required: true
		},
		onInternalAfterLeave: Function,
		onHide: Function,
		onAfterHide: Function
	}),
	setup(props) {
		let timerId = null;
		const showRef = ref(true);
		onMounted(() => {
			setHideTimeout();
		});
		function setHideTimeout() {
			const { duration } = props;
			if (duration) timerId = window.setTimeout(hide, duration);
		}
		function handleMouseenter(e) {
			if (e.currentTarget !== e.target) return;
			if (timerId !== null) {
				window.clearTimeout(timerId);
				timerId = null;
			}
		}
		function handleMouseleave(e) {
			if (e.currentTarget !== e.target) return;
			setHideTimeout();
		}
		function hide() {
			const { onHide } = props;
			showRef.value = false;
			if (timerId) {
				window.clearTimeout(timerId);
				timerId = null;
			}
			if (onHide) onHide();
		}
		function handleClose() {
			const { onClose } = props;
			if (onClose) onClose();
			hide();
		}
		function handleAfterLeave() {
			const { onAfterLeave, onInternalAfterLeave, onAfterHide, internalKey } = props;
			if (onAfterLeave) onAfterLeave();
			if (onInternalAfterLeave) onInternalAfterLeave(internalKey);
			if (onAfterHide) onAfterHide();
		}
		function deactivate() {
			hide();
		}
		return {
			show: showRef,
			hide,
			handleClose,
			handleAfterLeave,
			handleMouseleave,
			handleMouseenter,
			deactivate
		};
	},
	render() {
		return h(FadeInExpandTransition_default, {
			appear: true,
			onAfterLeave: this.handleAfterLeave,
			onLeave: this.onLeave
		}, { default: () => [this.show ? h(Message_default, {
			content: this.content,
			type: this.type,
			icon: this.icon,
			showIcon: this.showIcon,
			closable: this.closable,
			spinProps: this.spinProps,
			onClose: this.handleClose,
			onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0,
			onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0
		}) : null] });
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/message/src/MessageProvider.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var messageProviderProps = Object.assign(Object.assign({}, useTheme.props), {
	to: [String, Object],
	duration: {
		type: Number,
		default: 3e3
	},
	keepAliveOnHover: Boolean,
	max: Number,
	placement: {
		type: String,
		default: "top"
	},
	closable: Boolean,
	containerClass: String,
	containerStyle: [String, Object]
});
var MessageProvider_default = defineComponent({
	name: "MessageProvider",
	props: messageProviderProps,
	setup(props) {
		const { mergedClsPrefixRef } = useConfig(props);
		const messageListRef = ref([]);
		const messageRefs = ref({});
		const api = {
			create(content, options) {
				return create(content, Object.assign({ type: "default" }, options));
			},
			info(content, options) {
				return create(content, Object.assign(Object.assign({}, options), { type: "info" }));
			},
			success(content, options) {
				return create(content, Object.assign(Object.assign({}, options), { type: "success" }));
			},
			warning(content, options) {
				return create(content, Object.assign(Object.assign({}, options), { type: "warning" }));
			},
			error(content, options) {
				return create(content, Object.assign(Object.assign({}, options), { type: "error" }));
			},
			loading(content, options) {
				return create(content, Object.assign(Object.assign({}, options), { type: "loading" }));
			},
			destroyAll
		};
		provide(messageProviderInjectionKey, {
			props,
			mergedClsPrefixRef
		});
		provide(messageApiInjectionKey, api);
		function create(content, options) {
			const key = createId();
			const messageReactive = reactive(Object.assign(Object.assign({}, options), {
				content,
				key,
				destroy: () => {
					var _a;
					(_a = messageRefs.value[key]) === null || _a === void 0 || _a.hide();
				}
			}));
			const { max } = props;
			if (max && messageListRef.value.length >= max) messageListRef.value.shift();
			messageListRef.value.push(messageReactive);
			return messageReactive;
		}
		function handleAfterLeave(key) {
			messageListRef.value.splice(messageListRef.value.findIndex((message) => message.key === key), 1);
			delete messageRefs.value[key];
		}
		function destroyAll() {
			Object.values(messageRefs.value).forEach((messageInstRef) => {
				messageInstRef.hide();
			});
		}
		return Object.assign({
			mergedClsPrefix: mergedClsPrefixRef,
			messageRefs,
			messageList: messageListRef,
			handleAfterLeave
		}, api);
	},
	render() {
		var _a, _b, _c;
		return h(Fragment, null, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a), this.messageList.length ? h(Teleport, { to: (_c = this.to) !== null && _c !== void 0 ? _c : "body" }, h("div", {
			class: [
				`${this.mergedClsPrefix}-message-container`,
				`${this.mergedClsPrefix}-message-container--${this.placement}`,
				this.containerClass
			],
			key: "message-container",
			style: this.containerStyle
		}, this.messageList.map((message) => {
			return h(MessageEnvironment_default, Object.assign({
				ref: (inst) => {
					if (inst) this.messageRefs[message.key] = inst;
				},
				internalKey: message.key,
				onInternalAfterLeave: this.handleAfterLeave
			}, omit(message, ["destroy"], void 0), {
				duration: message.duration === void 0 ? this.duration : message.duration,
				keepAliveOnHover: message.keepAliveOnHover === void 0 ? this.keepAliveOnHover : message.keepAliveOnHover,
				closable: message.closable === void 0 ? this.closable : message.closable
			}));
		}))) : null);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/notification/styles/_common.mjs
var _common_default$16 = {
	closeMargin: "16px 12px",
	closeSize: "20px",
	closeIconSize: "16px",
	width: "365px",
	padding: "16px",
	titleFontSize: "16px",
	metaFontSize: "12px",
	descriptionFontSize: "12px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/notification/styles/light.mjs
function self$45(vars) {
	const { textColor2, successColor, infoColor, warningColor, errorColor, popoverColor, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, textColor1, textColor3, borderRadius, fontWeightStrong, boxShadow2, lineHeight, fontSize } = vars;
	return Object.assign(Object.assign({}, _common_default$16), {
		borderRadius,
		lineHeight,
		fontSize,
		headerFontWeight: fontWeightStrong,
		iconColor: textColor2,
		iconColorSuccess: successColor,
		iconColorInfo: infoColor,
		iconColorWarning: warningColor,
		iconColorError: errorColor,
		color: popoverColor,
		textColor: textColor2,
		closeIconColor,
		closeIconColorHover,
		closeIconColorPressed,
		closeBorderRadius: borderRadius,
		closeColorHover,
		closeColorPressed,
		headerTextColor: textColor1,
		descriptionTextColor: textColor3,
		actionTextColor: textColor2,
		boxShadow: boxShadow2
	});
}
var notificationLight = createTheme({
	name: "Notification",
	common: derived,
	peers: { Scrollbar: scrollbarLight },
	self: self$45
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/notification/styles/dark.mjs
var notificationDark = {
	name: "Notification",
	common: derived$1,
	peers: { Scrollbar: scrollbarDark },
	self: self$45
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/notification/src/context.mjs
var notificationProviderInjectionKey = createInjectionKey("n-notification-provider");
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/notification/src/NotificationContainer.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var NotificationContainer = defineComponent({
	name: "NotificationContainer",
	props: {
		scrollable: {
			type: Boolean,
			required: true
		},
		placement: {
			type: String,
			required: true
		}
	},
	setup() {
		const { mergedThemeRef, mergedClsPrefixRef, wipTransitionCountRef } = inject(notificationProviderInjectionKey);
		const selfRef = ref(null);
		watchEffect(() => {
			var _a, _b;
			if (wipTransitionCountRef.value > 0) (_a = selfRef === null || selfRef === void 0 ? void 0 : selfRef.value) === null || _a === void 0 || _a.classList.add("transitioning");
			else (_b = selfRef === null || selfRef === void 0 ? void 0 : selfRef.value) === null || _b === void 0 || _b.classList.remove("transitioning");
		});
		return {
			selfRef,
			mergedTheme: mergedThemeRef,
			mergedClsPrefix: mergedClsPrefixRef,
			transitioning: wipTransitionCountRef
		};
	},
	render() {
		const { $slots, scrollable, mergedClsPrefix, mergedTheme, placement } = this;
		return h("div", {
			ref: "selfRef",
			class: [
				`${mergedClsPrefix}-notification-container`,
				scrollable && `${mergedClsPrefix}-notification-container--scrollable`,
				`${mergedClsPrefix}-notification-container--${placement}`
			]
		}, scrollable ? h(Scrollbar, {
			theme: mergedTheme.peers.Scrollbar,
			themeOverrides: mergedTheme.peerOverrides.Scrollbar,
			contentStyle: { overflow: "hidden" }
		}, $slots) : $slots);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/notification/src/Notification.mjs
init_runtime_core_esm_bundler();
var iconRenderMap = {
	info: () => h(Info_default, null),
	success: () => h(Success_default, null),
	warning: () => h(Warning_default, null),
	error: () => h(Error_default, null),
	default: () => null
};
var notificationProps = {
	closable: {
		type: Boolean,
		default: true
	},
	type: {
		type: String,
		default: "default"
	},
	avatar: Function,
	title: [String, Function],
	description: [String, Function],
	content: [String, Function],
	meta: [String, Function],
	action: [String, Function],
	onClose: {
		type: Function,
		required: true
	},
	keepAliveOnHover: Boolean,
	onMouseenter: Function,
	onMouseleave: Function
};
var notificationPropKeys = keysOf(notificationProps);
var Notification = defineComponent({
	name: "Notification",
	props: notificationProps,
	setup(props) {
		const { mergedClsPrefixRef, mergedThemeRef, props: providerProps } = inject(notificationProviderInjectionKey);
		const { inlineThemeDisabled, mergedRtlRef } = useConfig();
		const rtlEnabledRef = useRtl("Notification", mergedRtlRef, mergedClsPrefixRef);
		const cssVarsRef = computed(() => {
			const { type } = props;
			const { self: { color, textColor, closeIconColor, closeIconColorHover, closeIconColorPressed, headerTextColor, descriptionTextColor, actionTextColor, borderRadius, headerFontWeight, boxShadow, lineHeight, fontSize, closeMargin, closeSize, width, padding, closeIconSize, closeBorderRadius, closeColorHover, closeColorPressed, titleFontSize, metaFontSize, descriptionFontSize, [createKey("iconColor", type)]: iconColor }, common: { cubicBezierEaseOut, cubicBezierEaseIn, cubicBezierEaseInOut } } = mergedThemeRef.value;
			const { left, right, top, bottom } = getMargin(padding);
			return {
				"--n-color": color,
				"--n-font-size": fontSize,
				"--n-text-color": textColor,
				"--n-description-text-color": descriptionTextColor,
				"--n-action-text-color": actionTextColor,
				"--n-title-text-color": headerTextColor,
				"--n-title-font-weight": headerFontWeight,
				"--n-bezier": cubicBezierEaseInOut,
				"--n-bezier-ease-out": cubicBezierEaseOut,
				"--n-bezier-ease-in": cubicBezierEaseIn,
				"--n-border-radius": borderRadius,
				"--n-box-shadow": boxShadow,
				"--n-close-border-radius": closeBorderRadius,
				"--n-close-color-hover": closeColorHover,
				"--n-close-color-pressed": closeColorPressed,
				"--n-close-icon-color": closeIconColor,
				"--n-close-icon-color-hover": closeIconColorHover,
				"--n-close-icon-color-pressed": closeIconColorPressed,
				"--n-line-height": lineHeight,
				"--n-icon-color": iconColor,
				"--n-close-margin": closeMargin,
				"--n-close-size": closeSize,
				"--n-close-icon-size": closeIconSize,
				"--n-width": width,
				"--n-padding-left": left,
				"--n-padding-right": right,
				"--n-padding-top": top,
				"--n-padding-bottom": bottom,
				"--n-title-font-size": titleFontSize,
				"--n-meta-font-size": metaFontSize,
				"--n-description-font-size": descriptionFontSize
			};
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("notification", computed(() => props.type[0]), cssVarsRef, providerProps) : void 0;
		return {
			mergedClsPrefix: mergedClsPrefixRef,
			showAvatar: computed(() => {
				return props.avatar || props.type !== "default";
			}),
			handleCloseClick() {
				props.onClose();
			},
			rtlEnabled: rtlEnabledRef,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
		};
	},
	render() {
		var _a;
		const { mergedClsPrefix } = this;
		(_a = this.onRender) === null || _a === void 0 || _a.call(this);
		return h("div", {
			class: [`${mergedClsPrefix}-notification-wrapper`, this.themeClass],
			onMouseenter: this.onMouseenter,
			onMouseleave: this.onMouseleave,
			style: this.cssVars
		}, h("div", {
			class: [
				`${mergedClsPrefix}-notification`,
				this.rtlEnabled && `${mergedClsPrefix}-notification--rtl`,
				this.themeClass,
				{
					[`${mergedClsPrefix}-notification--closable`]: this.closable,
					[`${mergedClsPrefix}-notification--show-avatar`]: this.showAvatar
				}
			],
			style: this.cssVars
		}, this.showAvatar ? h("div", { class: `${mergedClsPrefix}-notification__avatar` }, this.avatar ? render(this.avatar) : this.type !== "default" ? h(Icon_default, { clsPrefix: mergedClsPrefix }, { default: () => iconRenderMap[this.type]() }) : null) : null, this.closable ? h(Close_default, {
			clsPrefix: mergedClsPrefix,
			class: `${mergedClsPrefix}-notification__close`,
			onClick: this.handleCloseClick
		}) : null, h("div", {
			ref: "bodyRef",
			class: `${mergedClsPrefix}-notification-main`
		}, this.title ? h("div", { class: `${mergedClsPrefix}-notification-main__header` }, render(this.title)) : null, this.description ? h("div", { class: `${mergedClsPrefix}-notification-main__description` }, render(this.description)) : null, this.content ? h("pre", { class: `${mergedClsPrefix}-notification-main__content` }, render(this.content)) : null, this.meta || this.action ? h("div", { class: `${mergedClsPrefix}-notification-main-footer` }, this.meta ? h("div", { class: `${mergedClsPrefix}-notification-main-footer__meta` }, render(this.meta)) : null, this.action ? h("div", { class: `${mergedClsPrefix}-notification-main-footer__action` }, render(this.action)) : null) : null)));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/notification/src/NotificationEnvironment.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var notificationEnvOptions = Object.assign(Object.assign({}, notificationProps), {
	duration: Number,
	onClose: Function,
	onLeave: Function,
	onAfterEnter: Function,
	onAfterLeave: Function,
	/** @deprecated */
	onHide: Function,
	/** @deprecated */
	onAfterShow: Function,
	/** @deprecated */
	onAfterHide: Function
});
var NotificationEnvironment = defineComponent({
	name: "NotificationEnvironment",
	props: Object.assign(Object.assign({}, notificationEnvOptions), {
		internalKey: {
			type: String,
			required: true
		},
		onInternalAfterLeave: {
			type: Function,
			required: true
		}
	}),
	setup(props) {
		const { wipTransitionCountRef } = inject(notificationProviderInjectionKey);
		const showRef = ref(true);
		let timerId = null;
		function hide() {
			showRef.value = false;
			if (timerId) window.clearTimeout(timerId);
		}
		function handleBeforeEnter(el) {
			wipTransitionCountRef.value++;
			nextTick(() => {
				el.style.height = `${el.offsetHeight}px`;
				el.style.maxHeight = "0";
				el.style.transition = "none";
				el.offsetHeight;
				el.style.transition = "";
				el.style.maxHeight = el.style.height;
			});
		}
		function handleAfterEnter(el) {
			wipTransitionCountRef.value--;
			el.style.height = "";
			el.style.maxHeight = "";
			const { onAfterEnter, onAfterShow } = props;
			if (onAfterEnter) onAfterEnter();
			if (onAfterShow) onAfterShow();
		}
		function handleBeforeLeave(el) {
			wipTransitionCountRef.value++;
			el.style.maxHeight = `${el.offsetHeight}px`;
			el.style.height = `${el.offsetHeight}px`;
			el.offsetHeight;
		}
		function handleLeave(el) {
			const { onHide } = props;
			if (onHide) onHide();
			el.style.maxHeight = "0";
			el.offsetHeight;
		}
		function handleAfterLeave() {
			wipTransitionCountRef.value--;
			const { onAfterLeave, onInternalAfterLeave, onAfterHide, internalKey } = props;
			if (onAfterLeave) onAfterLeave();
			onInternalAfterLeave(internalKey);
			if (onAfterHide) onAfterHide();
		}
		function setHideTimeout() {
			const { duration } = props;
			if (duration) timerId = window.setTimeout(hide, duration);
		}
		function handleMouseenter(e) {
			if (e.currentTarget !== e.target) return;
			if (timerId !== null) {
				window.clearTimeout(timerId);
				timerId = null;
			}
		}
		function handleMouseleave(e) {
			if (e.currentTarget !== e.target) return;
			setHideTimeout();
		}
		function handleClose() {
			const { onClose } = props;
			if (onClose) Promise.resolve(onClose()).then((feedback) => {
				if (feedback === false) return;
				hide();
			});
			else hide();
		}
		onMounted(() => {
			if (props.duration) timerId = window.setTimeout(hide, props.duration);
		});
		return {
			show: showRef,
			hide,
			handleClose,
			handleAfterLeave,
			handleLeave,
			handleBeforeLeave,
			handleAfterEnter,
			handleBeforeEnter,
			handleMouseenter,
			handleMouseleave
		};
	},
	render() {
		return h(Transition, {
			name: "notification-transition",
			appear: true,
			onBeforeEnter: this.handleBeforeEnter,
			onAfterEnter: this.handleAfterEnter,
			onBeforeLeave: this.handleBeforeLeave,
			onLeave: this.handleLeave,
			onAfterLeave: this.handleAfterLeave
		}, { default: () => {
			return this.show ? h(Notification, Object.assign({}, keep(this.$props, notificationPropKeys), {
				onClose: this.handleClose,
				onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0,
				onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0
			})) : null;
		} });
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/notification/src/styles/index.cssr.mjs
var index_cssr_default = c([cB("notification-container", `
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `, [
	c(">", [cB("scrollbar", `
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [c(">", [cB("scrollbar-container", `
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [cB("scrollbar-content", `
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),
	cM("top, top-right, top-left", `
 top: 12px;
 `, [c("&.transitioning >", [cB("scrollbar", [c(">", [cB("scrollbar-container", `
 min-height: 100vh !important;
 `)])])])]),
	cM("bottom, bottom-right, bottom-left", `
 bottom: 12px;
 `, [c(">", [cB("scrollbar", [c(">", [cB("scrollbar-container", [cB("scrollbar-content", `
 padding-bottom: 12px;
 `)])])])]), cB("notification-wrapper", `
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),
	cM("top, bottom", `
 left: 50%;
 transform: translateX(-50%);
 `, [cB("notification-wrapper", [c("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: scale(0.85);
 `), c("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: scale(1);
 `)])]),
	cM("top", [cB("notification-wrapper", `
 transform-origin: top center;
 `)]),
	cM("bottom", [cB("notification-wrapper", `
 transform-origin: bottom center;
 `)]),
	cM("top-right, bottom-right", [cB("notification", `
 margin-left: 28px;
 margin-right: 16px;
 `)]),
	cM("top-left, bottom-left", [cB("notification", `
 margin-left: 16px;
 margin-right: 28px;
 `)]),
	cM("top-right", `
 right: 0;
 `, [placementTransformStyle("top-right")]),
	cM("top-left", `
 left: 0;
 `, [placementTransformStyle("top-left")]),
	cM("bottom-right", `
 right: 0;
 `, [placementTransformStyle("bottom-right")]),
	cM("bottom-left", `
 left: 0;
 `, [placementTransformStyle("bottom-left")]),
	cM("scrollable", [
		cM("top-right", `
 top: 0;
 `),
		cM("top-left", `
 top: 0;
 `),
		cM("bottom-right", `
 bottom: 0;
 `),
		cM("bottom-left", `
 bottom: 0;
 `)
	]),
	cB("notification-wrapper", `
 margin-bottom: 12px;
 `, [
		c("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),
		c("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 opacity: 1;
 `),
		c("&.notification-transition-leave-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),
		c("&.notification-transition-enter-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)
	]),
	cB("notification", `
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 max-width: calc(100vw - 16px - 16px);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `, [
		cE("avatar", [cB("icon", `
 color: var(--n-icon-color);
 `), cB("base-icon", `
 color: var(--n-icon-color);
 `)]),
		cM("show-avatar", [cB("notification-main", `
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),
		cM("closable", [cB("notification-main", [c("> *:first-child", `
 padding-right: 20px;
 `)]), cE("close", `
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),
		cE("avatar", `
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [cB("icon", "transition: color .3s var(--n-bezier);")]),
		cB("notification-main", `
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `, [
			cB("notification-main-footer", `
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `, [cE("meta", `
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), cE("action", `
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),
			cE("header", `
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),
			cE("description", `
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),
			cE("content", `
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `, [c("&:first-child", "margin: 0;")])
		])
	])
])]);
function placementTransformStyle(placement) {
	return cB("notification-wrapper", [c("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: translate(${placement.split("-")[1] === "left" ? "calc(-100%)" : "calc(100%)"}, 0);
 `), c("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: translate(0, 0);
 `)]);
}
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/notification/src/NotificationProvider.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var notificationApiInjectionKey = createInjectionKey("n-notification-api");
var notificationProviderProps = Object.assign(Object.assign({}, useTheme.props), {
	containerClass: String,
	containerStyle: [String, Object],
	to: [String, Object],
	scrollable: {
		type: Boolean,
		default: true
	},
	max: Number,
	placement: {
		type: String,
		default: "top-right"
	},
	keepAliveOnHover: Boolean
});
var NotificationProvider_default = defineComponent({
	name: "NotificationProvider",
	props: notificationProviderProps,
	setup(props) {
		const { mergedClsPrefixRef } = useConfig(props);
		const notificationListRef = ref([]);
		const notificationRefs = {};
		const leavingKeySet = /* @__PURE__ */ new Set();
		function create(options) {
			const key = createId();
			const destroy = () => {
				leavingKeySet.add(key);
				if (notificationRefs[key]) notificationRefs[key].hide();
			};
			const notificationReactive = reactive(Object.assign(Object.assign({}, options), {
				key,
				destroy,
				hide: destroy,
				deactivate: destroy
			}));
			const { max } = props;
			if (max && notificationListRef.value.length - leavingKeySet.size >= max) {
				let someoneMountedRemoved = false;
				let index = 0;
				for (const notification of notificationListRef.value) {
					if (!leavingKeySet.has(notification.key)) {
						if (notificationRefs[notification.key]) {
							notification.destroy();
							someoneMountedRemoved = true;
						}
						break;
					}
					index++;
				}
				if (!someoneMountedRemoved) notificationListRef.value.splice(index, 1);
			}
			notificationListRef.value.push(notificationReactive);
			return notificationReactive;
		}
		const apis = [
			"info",
			"success",
			"warning",
			"error"
		].map((type) => {
			return (options) => create(Object.assign(Object.assign({}, options), { type }));
		});
		function handleAfterLeave(key) {
			leavingKeySet.delete(key);
			notificationListRef.value.splice(notificationListRef.value.findIndex((notification) => notification.key === key), 1);
		}
		const themeRef = useTheme("Notification", "-notification", index_cssr_default, notificationLight, props, mergedClsPrefixRef);
		const api = {
			create,
			info: apis[0],
			success: apis[1],
			warning: apis[2],
			error: apis[3],
			open,
			destroyAll
		};
		const wipTransitionCountRef = ref(0);
		provide(notificationApiInjectionKey, api);
		provide(notificationProviderInjectionKey, {
			props,
			mergedClsPrefixRef,
			mergedThemeRef: themeRef,
			wipTransitionCountRef
		});
		function open(options) {
			return create(options);
		}
		function destroyAll() {
			Object.values(notificationListRef.value).forEach((notification) => {
				notification.hide();
			});
		}
		return Object.assign({
			mergedClsPrefix: mergedClsPrefixRef,
			notificationList: notificationListRef,
			notificationRefs,
			handleAfterLeave
		}, api);
	},
	render() {
		var _a, _b, _c;
		const { placement } = this;
		return h(Fragment, null, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a), this.notificationList.length ? h(Teleport, { to: (_c = this.to) !== null && _c !== void 0 ? _c : "body" }, h(NotificationContainer, {
			class: this.containerClass,
			style: this.containerStyle,
			scrollable: this.scrollable && placement !== "top" && placement !== "bottom",
			placement
		}, { default: () => {
			return this.notificationList.map((notification) => {
				return h(NotificationEnvironment, Object.assign({ ref: (inst) => {
					const refKey = notification.key;
					if (inst === null) delete this.notificationRefs[refKey];
					else this.notificationRefs[refKey] = inst;
				} }, omit(notification, [
					"destroy",
					"hide",
					"deactivate"
				]), {
					internalKey: notification.key,
					onInternalAfterLeave: this.handleAfterLeave,
					keepAliveOnHover: notification.keepAliveOnHover === void 0 ? this.keepAliveOnHover : notification.keepAliveOnHover
				}));
			});
		} })) : null);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/divider/styles/light.mjs
function self$44(vars) {
	const { textColor1, dividerColor, fontWeightStrong } = vars;
	return {
		textColor: textColor1,
		color: dividerColor,
		fontWeight: fontWeightStrong
	};
}
var dividerLight = {
	name: "Divider",
	common: derived,
	self: self$44
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/divider/styles/dark.mjs
var dividerDark = {
	name: "Divider",
	common: derived$1,
	self: self$44
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/drawer/styles/light.mjs
function self$43(vars) {
	const { modalColor, textColor1, textColor2, boxShadow3, lineHeight, fontWeightStrong, dividerColor, closeColorHover, closeColorPressed, closeIconColor, closeIconColorHover, closeIconColorPressed, borderRadius, primaryColorHover } = vars;
	return {
		bodyPadding: "16px 24px",
		borderRadius,
		headerPadding: "16px 24px",
		footerPadding: "16px 24px",
		color: modalColor,
		textColor: textColor2,
		titleTextColor: textColor1,
		titleFontSize: "18px",
		titleFontWeight: fontWeightStrong,
		boxShadow: boxShadow3,
		lineHeight,
		headerBorderBottom: `1px solid ${dividerColor}`,
		footerBorderTop: `1px solid ${dividerColor}`,
		closeIconColor,
		closeIconColorHover,
		closeIconColorPressed,
		closeSize: "22px",
		closeIconSize: "18px",
		closeColorHover,
		closeColorPressed,
		closeBorderRadius: borderRadius,
		resizableTriggerColorHover: primaryColorHover
	};
}
var drawerLight = createTheme({
	name: "Drawer",
	common: derived,
	peers: { Scrollbar: scrollbarLight },
	self: self$43
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/drawer/styles/dark.mjs
var drawerDark = {
	name: "Drawer",
	common: derived$1,
	peers: { Scrollbar: scrollbarDark },
	self: self$43
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dynamic-input/styles/_common.mjs
var _common_default$15 = {
	actionMargin: "0 0 0 20px",
	actionMarginRtl: "0 20px 0 0"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dynamic-input/styles/dark.mjs
var dynamicInputDark = {
	name: "DynamicInput",
	common: derived$1,
	peers: {
		Input: inputDark,
		Button: buttonDark
	},
	self() {
		return _common_default$15;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dynamic-input/styles/light.mjs
function self$42() {
	return _common_default$15;
}
var dynamicInputLight = createTheme({
	name: "DynamicInput",
	common: derived,
	peers: {
		Input: inputLight,
		Button: buttonLight
	},
	self: self$42
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/space/styles/_common.mjs
var _common_default$14 = {
	gapSmall: "4px 8px",
	gapMedium: "8px 12px",
	gapLarge: "12px 16px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/space/styles/dark.mjs
var spaceDark = {
	name: "Space",
	self() {
		return _common_default$14;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/space/styles/light.mjs
function self$41() {
	return _common_default$14;
}
var spaceLight = {
	name: "Space",
	self: self$41
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dynamic-tags/styles/dark.mjs
var dynamicTagsDark = {
	name: "DynamicTags",
	common: derived$1,
	peers: {
		Input: inputDark,
		Button: buttonDark,
		Tag: tagDark,
		Space: spaceDark
	},
	self() {
		return { inputWidth: "64px" };
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/dynamic-tags/styles/light.mjs
var dynamicTagsLight = createTheme({
	name: "DynamicTags",
	common: derived,
	peers: {
		Input: inputLight,
		Button: buttonLight,
		Tag: tagLight,
		Space: spaceLight
	},
	self() {
		return { inputWidth: "64px" };
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/element/styles/dark.mjs
var elementDark = {
	name: "Element",
	common: derived$1
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/element/styles/light.mjs
var elementLight = {
	name: "Element",
	common: derived
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/flex/styles/_common.mjs
var _common_default$13 = {
	gapSmall: "4px 8px",
	gapMedium: "8px 12px",
	gapLarge: "12px 16px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/flex/styles/dark.mjs
var flexDark = {
	name: "Flex",
	self() {
		return _common_default$13;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/flex/styles/light.mjs
function self$40() {
	return _common_default$13;
}
var flexLight = {
	name: "Flex",
	self: self$40
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/button-group/styles/dark.mjs
var buttonGroupDark = {
	name: "ButtonGroup",
	common: derived$1
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/button-group/styles/light.mjs
var buttonGroupLight = {
	name: "ButtonGroup",
	common: derived
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/form/styles/_common.mjs
var _common_default$12 = {
	feedbackPadding: "4px 0 0 2px",
	feedbackHeightSmall: "24px",
	feedbackHeightMedium: "24px",
	feedbackHeightLarge: "26px",
	feedbackFontSizeSmall: "13px",
	feedbackFontSizeMedium: "14px",
	feedbackFontSizeLarge: "14px",
	labelFontSizeLeftSmall: "14px",
	labelFontSizeLeftMedium: "14px",
	labelFontSizeLeftLarge: "15px",
	labelFontSizeTopSmall: "13px",
	labelFontSizeTopMedium: "14px",
	labelFontSizeTopLarge: "14px",
	labelHeightSmall: "24px",
	labelHeightMedium: "26px",
	labelHeightLarge: "28px",
	labelPaddingVertical: "0 0 6px 2px",
	labelPaddingHorizontal: "0 12px 0 0",
	labelTextAlignVertical: "left",
	labelTextAlignHorizontal: "right",
	labelFontWeight: "400"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/form/styles/light.mjs
function self$39(vars) {
	const { heightSmall, heightMedium, heightLarge, textColor1, errorColor, warningColor, lineHeight, textColor3 } = vars;
	return Object.assign(Object.assign({}, _common_default$12), {
		blankHeightSmall: heightSmall,
		blankHeightMedium: heightMedium,
		blankHeightLarge: heightLarge,
		lineHeight,
		labelTextColor: textColor1,
		asteriskColor: errorColor,
		feedbackTextColorError: errorColor,
		feedbackTextColorWarning: warningColor,
		feedbackTextColor: textColor3
	});
}
var formLight = {
	name: "Form",
	common: derived,
	self: self$39
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/form/styles/dark.mjs
var formItemDark = {
	name: "Form",
	common: derived$1,
	self: self$39
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/gradient-text/styles/dark.mjs
var gradientTextDark = {
	name: "GradientText",
	common: derived$1,
	self(vars) {
		const { primaryColor, successColor, warningColor, errorColor, infoColor, primaryColorSuppl, successColorSuppl, warningColorSuppl, errorColorSuppl, infoColorSuppl, fontWeightStrong } = vars;
		return {
			fontWeight: fontWeightStrong,
			rotate: "252deg",
			colorStartPrimary: primaryColor,
			colorEndPrimary: primaryColorSuppl,
			colorStartInfo: infoColor,
			colorEndInfo: infoColorSuppl,
			colorStartWarning: warningColor,
			colorEndWarning: warningColorSuppl,
			colorStartError: errorColor,
			colorEndError: errorColorSuppl,
			colorStartSuccess: successColor,
			colorEndSuccess: successColorSuppl
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/gradient-text/styles/light.mjs
function self$38(vars) {
	const { primaryColor, successColor, warningColor, errorColor, infoColor, fontWeightStrong } = vars;
	return {
		fontWeight: fontWeightStrong,
		rotate: "252deg",
		colorStartPrimary: changeColor(primaryColor, { alpha: .6 }),
		colorEndPrimary: primaryColor,
		colorStartInfo: changeColor(infoColor, { alpha: .6 }),
		colorEndInfo: infoColor,
		colorStartWarning: changeColor(warningColor, { alpha: .6 }),
		colorEndWarning: warningColor,
		colorStartError: changeColor(errorColor, { alpha: .6 }),
		colorEndError: errorColor,
		colorStartSuccess: changeColor(successColor, { alpha: .6 }),
		colorEndSuccess: successColor
	};
}
var gradientTextLight = {
	name: "GradientText",
	common: derived,
	self: self$38
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/input-number/styles/dark.mjs
var inputNumberDark = {
	name: "InputNumber",
	common: derived$1,
	peers: {
		Button: buttonDark,
		Input: inputDark
	},
	self(vars) {
		const { textColorDisabled } = vars;
		return { iconColorDisabled: textColorDisabled };
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/input-number/styles/light.mjs
function self$37(vars) {
	const { textColorDisabled } = vars;
	return { iconColorDisabled: textColorDisabled };
}
var inputNumberLight = createTheme({
	name: "InputNumber",
	common: derived,
	peers: {
		Button: buttonLight,
		Input: inputLight
	},
	self: self$37
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/input-otp/styles/light.mjs
function self$36() {
	return {
		inputWidthSmall: "24px",
		inputWidthMedium: "30px",
		inputWidthLarge: "36px",
		gapSmall: "8px",
		gapMedium: "8px",
		gapLarge: "8px"
	};
}
var inputOtpLight = createTheme({
	name: "InputOtp",
	common: derived,
	peers: { Input: inputLight },
	self: self$36
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/input-otp/styles/dark.mjs
var inputOtpDark = {
	name: "InputOtp",
	common: derived$1,
	peers: { Input: inputDark },
	self: self$36
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/layout/styles/dark.mjs
var layoutDark = {
	name: "Layout",
	common: derived$1,
	peers: { Scrollbar: scrollbarDark },
	self(vars) {
		const { textColor2, bodyColor, popoverColor, cardColor, dividerColor, scrollbarColor, scrollbarColorHover } = vars;
		return {
			textColor: textColor2,
			textColorInverted: textColor2,
			color: bodyColor,
			colorEmbedded: bodyColor,
			headerColor: cardColor,
			headerColorInverted: cardColor,
			footerColor: cardColor,
			footerColorInverted: cardColor,
			headerBorderColor: dividerColor,
			headerBorderColorInverted: dividerColor,
			footerBorderColor: dividerColor,
			footerBorderColorInverted: dividerColor,
			siderBorderColor: dividerColor,
			siderBorderColorInverted: dividerColor,
			siderColor: cardColor,
			siderColorInverted: cardColor,
			siderToggleButtonBorder: "1px solid transparent",
			siderToggleButtonColor: popoverColor,
			siderToggleButtonIconColor: textColor2,
			siderToggleButtonIconColorInverted: textColor2,
			siderToggleBarColor: composite(bodyColor, scrollbarColor),
			siderToggleBarColorHover: composite(bodyColor, scrollbarColorHover),
			__invertScrollbar: "false"
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/layout/styles/light.mjs
function self$35(vars) {
	const { baseColor, textColor2, bodyColor, cardColor, dividerColor, actionColor, scrollbarColor, scrollbarColorHover, invertedColor } = vars;
	return {
		textColor: textColor2,
		textColorInverted: "#FFF",
		color: bodyColor,
		colorEmbedded: actionColor,
		headerColor: cardColor,
		headerColorInverted: invertedColor,
		footerColor: actionColor,
		footerColorInverted: invertedColor,
		headerBorderColor: dividerColor,
		headerBorderColorInverted: invertedColor,
		footerBorderColor: dividerColor,
		footerBorderColorInverted: invertedColor,
		siderBorderColor: dividerColor,
		siderBorderColorInverted: invertedColor,
		siderColor: cardColor,
		siderColorInverted: invertedColor,
		siderToggleButtonBorder: `1px solid ${dividerColor}`,
		siderToggleButtonColor: baseColor,
		siderToggleButtonIconColor: textColor2,
		siderToggleButtonIconColorInverted: textColor2,
		siderToggleBarColor: composite(bodyColor, scrollbarColor),
		siderToggleBarColorHover: composite(bodyColor, scrollbarColorHover),
		__invertScrollbar: "true"
	};
}
var layoutLight = createTheme({
	name: "Layout",
	common: derived,
	peers: { Scrollbar: scrollbarLight },
	self: self$35
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/legacy-grid/styles/dark.mjs
var rowDark = {
	name: "Row",
	common: derived$1
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/legacy-grid/styles/light.mjs
var rowLight = {
	name: "Row",
	common: derived
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/list/styles/light.mjs
function self$34(vars) {
	const { textColor2, cardColor, modalColor, popoverColor, dividerColor, borderRadius, fontSize, hoverColor } = vars;
	return {
		textColor: textColor2,
		color: cardColor,
		colorHover: hoverColor,
		colorModal: modalColor,
		colorHoverModal: composite(modalColor, hoverColor),
		colorPopover: popoverColor,
		colorHoverPopover: composite(popoverColor, hoverColor),
		borderColor: dividerColor,
		borderColorModal: composite(modalColor, dividerColor),
		borderColorPopover: composite(popoverColor, dividerColor),
		borderRadius,
		fontSize
	};
}
var listLight = {
	name: "List",
	common: derived,
	self: self$34
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/list/styles/dark.mjs
var listDark$1 = {
	name: "List",
	common: derived$1,
	self: self$34
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/log/styles/dark.mjs
var logDark = {
	name: "Log",
	common: derived$1,
	peers: {
		Scrollbar: scrollbarDark,
		Code: codeDark
	},
	self(vars) {
		const { textColor2, inputColor, fontSize, primaryColor } = vars;
		return {
			loaderFontSize: fontSize,
			loaderTextColor: textColor2,
			loaderColor: inputColor,
			loaderBorder: "1px solid #0000",
			loadingColor: primaryColor
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/log/styles/light.mjs
function self$33(vars) {
	const { textColor2, modalColor, borderColor, fontSize, primaryColor } = vars;
	return {
		loaderFontSize: fontSize,
		loaderTextColor: textColor2,
		loaderColor: modalColor,
		loaderBorder: `1px solid ${borderColor}`,
		loadingColor: primaryColor
	};
}
var logLight = createTheme({
	name: "Log",
	common: derived,
	peers: {
		Scrollbar: scrollbarLight,
		Code: codeLight
	},
	self: self$33
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/mention/styles/dark.mjs
var listDark = {
	name: "Mention",
	common: derived$1,
	peers: {
		InternalSelectMenu: internalSelectMenuDark,
		Input: inputDark
	},
	self(vars) {
		const { boxShadow2 } = vars;
		return { menuBoxShadow: boxShadow2 };
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/mention/styles/light.mjs
function self$32(vars) {
	const { boxShadow2 } = vars;
	return { menuBoxShadow: boxShadow2 };
}
var mentionLight = createTheme({
	name: "Mention",
	common: derived,
	peers: {
		InternalSelectMenu: internalSelectMenuLight,
		Input: inputLight
	},
	self: self$32
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/menu/styles/light.mjs
function createPartialInvertedVars(color, activeItemColor, activeTextColor, groupTextColor) {
	return {
		itemColorHoverInverted: "#0000",
		itemColorActiveInverted: activeItemColor,
		itemColorActiveHoverInverted: activeItemColor,
		itemColorActiveCollapsedInverted: activeItemColor,
		itemTextColorInverted: color,
		itemTextColorHoverInverted: activeTextColor,
		itemTextColorChildActiveInverted: activeTextColor,
		itemTextColorChildActiveHoverInverted: activeTextColor,
		itemTextColorActiveInverted: activeTextColor,
		itemTextColorActiveHoverInverted: activeTextColor,
		itemTextColorHorizontalInverted: color,
		itemTextColorHoverHorizontalInverted: activeTextColor,
		itemTextColorChildActiveHorizontalInverted: activeTextColor,
		itemTextColorChildActiveHoverHorizontalInverted: activeTextColor,
		itemTextColorActiveHorizontalInverted: activeTextColor,
		itemTextColorActiveHoverHorizontalInverted: activeTextColor,
		itemIconColorInverted: color,
		itemIconColorHoverInverted: activeTextColor,
		itemIconColorActiveInverted: activeTextColor,
		itemIconColorActiveHoverInverted: activeTextColor,
		itemIconColorChildActiveInverted: activeTextColor,
		itemIconColorChildActiveHoverInverted: activeTextColor,
		itemIconColorCollapsedInverted: color,
		itemIconColorHorizontalInverted: color,
		itemIconColorHoverHorizontalInverted: activeTextColor,
		itemIconColorActiveHorizontalInverted: activeTextColor,
		itemIconColorActiveHoverHorizontalInverted: activeTextColor,
		itemIconColorChildActiveHorizontalInverted: activeTextColor,
		itemIconColorChildActiveHoverHorizontalInverted: activeTextColor,
		arrowColorInverted: color,
		arrowColorHoverInverted: activeTextColor,
		arrowColorActiveInverted: activeTextColor,
		arrowColorActiveHoverInverted: activeTextColor,
		arrowColorChildActiveInverted: activeTextColor,
		arrowColorChildActiveHoverInverted: activeTextColor,
		groupTextColorInverted: groupTextColor
	};
}
function self$31(vars) {
	const { borderRadius, textColor3, primaryColor, textColor2, textColor1, fontSize, dividerColor, hoverColor, primaryColorHover } = vars;
	return Object.assign({
		borderRadius,
		color: "#0000",
		groupTextColor: textColor3,
		itemColorHover: hoverColor,
		itemColorActive: changeColor(primaryColor, { alpha: .1 }),
		itemColorActiveHover: changeColor(primaryColor, { alpha: .1 }),
		itemColorActiveCollapsed: changeColor(primaryColor, { alpha: .1 }),
		itemTextColor: textColor2,
		itemTextColorHover: textColor2,
		itemTextColorActive: primaryColor,
		itemTextColorActiveHover: primaryColor,
		itemTextColorChildActive: primaryColor,
		itemTextColorChildActiveHover: primaryColor,
		itemTextColorHorizontal: textColor2,
		itemTextColorHoverHorizontal: primaryColorHover,
		itemTextColorActiveHorizontal: primaryColor,
		itemTextColorActiveHoverHorizontal: primaryColor,
		itemTextColorChildActiveHorizontal: primaryColor,
		itemTextColorChildActiveHoverHorizontal: primaryColor,
		itemIconColor: textColor1,
		itemIconColorHover: textColor1,
		itemIconColorActive: primaryColor,
		itemIconColorActiveHover: primaryColor,
		itemIconColorChildActive: primaryColor,
		itemIconColorChildActiveHover: primaryColor,
		itemIconColorCollapsed: textColor1,
		itemIconColorHorizontal: textColor1,
		itemIconColorHoverHorizontal: primaryColorHover,
		itemIconColorActiveHorizontal: primaryColor,
		itemIconColorActiveHoverHorizontal: primaryColor,
		itemIconColorChildActiveHorizontal: primaryColor,
		itemIconColorChildActiveHoverHorizontal: primaryColor,
		itemHeight: "42px",
		arrowColor: textColor2,
		arrowColorHover: textColor2,
		arrowColorActive: primaryColor,
		arrowColorActiveHover: primaryColor,
		arrowColorChildActive: primaryColor,
		arrowColorChildActiveHover: primaryColor,
		colorInverted: "#0000",
		borderColorHorizontal: "#0000",
		fontSize,
		dividerColor
	}, createPartialInvertedVars("#BBB", primaryColor, "#FFF", "#AAA"));
}
var menuLight = createTheme({
	name: "Menu",
	common: derived,
	peers: {
		Tooltip: tooltipLight,
		Dropdown: dropdownLight
	},
	self: self$31
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/menu/styles/dark.mjs
var menuDark = {
	name: "Menu",
	common: derived$1,
	peers: {
		Tooltip: tooltipDark,
		Dropdown: dropdownDark
	},
	self(vars) {
		const { primaryColor, primaryColorSuppl } = vars;
		const commonSelf = self$31(vars);
		commonSelf.itemColorActive = changeColor(primaryColor, { alpha: .15 });
		commonSelf.itemColorActiveHover = changeColor(primaryColor, { alpha: .15 });
		commonSelf.itemColorActiveCollapsed = changeColor(primaryColor, { alpha: .15 });
		commonSelf.itemColorActiveInverted = primaryColorSuppl;
		commonSelf.itemColorActiveHoverInverted = primaryColorSuppl;
		commonSelf.itemColorActiveCollapsedInverted = primaryColorSuppl;
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/page-header/styles/_common.mjs
var _common_default$11 = {
	titleFontSize: "18px",
	backSize: "22px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/page-header/styles/light.mjs
function self$30(vars) {
	const { textColor1, textColor2, textColor3, fontSize, fontWeightStrong, primaryColorHover, primaryColorPressed } = vars;
	return Object.assign(Object.assign({}, _common_default$11), {
		titleFontWeight: fontWeightStrong,
		fontSize,
		titleTextColor: textColor1,
		backColor: textColor2,
		backColorHover: primaryColorHover,
		backColorPressed: primaryColorPressed,
		subtitleTextColor: textColor3
	});
}
var pageHeaderLight = createTheme({
	name: "PageHeader",
	common: derived,
	self: self$30
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/page-header/styles/dark.mjs
var pageHeaderDark = {
	name: "PageHeader",
	common: derived$1,
	self: self$30
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popconfirm/styles/_common.mjs
var _common_default$10 = { iconSize: "22px" };
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popconfirm/styles/light.mjs
function self$29(vars) {
	const { fontSize, warningColor } = vars;
	return Object.assign(Object.assign({}, _common_default$10), {
		fontSize,
		iconColor: warningColor
	});
}
var popconfirmLight = createTheme({
	name: "Popconfirm",
	common: derived,
	peers: {
		Button: buttonLight,
		Popover: popoverLight
	},
	self: self$29
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/popconfirm/styles/dark.mjs
var popconfirmDark = {
	name: "Popconfirm",
	common: derived$1,
	peers: {
		Button: buttonDark,
		Popover: popoverDark
	},
	self: self$29
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/progress/styles/light.mjs
function self$28(vars) {
	const { infoColor, successColor, warningColor, errorColor, textColor2, progressRailColor, fontSize, fontWeight } = vars;
	return {
		fontSize,
		fontSizeCircle: "28px",
		fontWeightCircle: fontWeight,
		railColor: progressRailColor,
		railHeight: "8px",
		iconSizeCircle: "36px",
		iconSizeLine: "18px",
		iconColor: infoColor,
		iconColorInfo: infoColor,
		iconColorSuccess: successColor,
		iconColorWarning: warningColor,
		iconColorError: errorColor,
		textColorCircle: textColor2,
		textColorLineInner: "rgb(255, 255, 255)",
		textColorLineOuter: textColor2,
		fillColor: infoColor,
		fillColorInfo: infoColor,
		fillColorSuccess: successColor,
		fillColorWarning: warningColor,
		fillColorError: errorColor,
		lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"
	};
}
var progressLight = {
	name: "Progress",
	common: derived,
	self: self$28
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/progress/styles/dark.mjs
var progressDark = {
	name: "Progress",
	common: derived$1,
	self(vars) {
		const commonSelf = self$28(vars);
		commonSelf.textColorLineInner = "rgb(0, 0, 0)";
		commonSelf.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)";
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/rate/styles/dark.mjs
var rateDark = {
	name: "Rate",
	common: derived$1,
	self(vars) {
		const { railColor } = vars;
		return {
			itemColor: railColor,
			itemColorActive: "#CCAA33",
			itemSize: "20px",
			sizeSmall: "16px",
			sizeMedium: "20px",
			sizeLarge: "24px"
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/rate/styles/light.mjs
function self$27(vars) {
	const { railColor } = vars;
	return {
		itemColor: railColor,
		itemColorActive: "#FFCC33",
		sizeSmall: "16px",
		sizeMedium: "20px",
		sizeLarge: "24px"
	};
}
var themeLight$4 = {
	name: "Rate",
	common: derived,
	self: self$27
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/result/styles/_common.mjs
var _common_default$9 = {
	titleFontSizeSmall: "26px",
	titleFontSizeMedium: "32px",
	titleFontSizeLarge: "40px",
	titleFontSizeHuge: "48px",
	fontSizeSmall: "14px",
	fontSizeMedium: "14px",
	fontSizeLarge: "15px",
	fontSizeHuge: "16px",
	iconSizeSmall: "64px",
	iconSizeMedium: "80px",
	iconSizeLarge: "100px",
	iconSizeHuge: "125px",
	iconColor418: void 0,
	iconColor404: void 0,
	iconColor403: void 0,
	iconColor500: void 0
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/result/styles/light.mjs
function self$26(vars) {
	const { textColor2, textColor1, errorColor, successColor, infoColor, warningColor, lineHeight, fontWeightStrong } = vars;
	return Object.assign(Object.assign({}, _common_default$9), {
		lineHeight,
		titleFontWeight: fontWeightStrong,
		titleTextColor: textColor1,
		textColor: textColor2,
		iconColorError: errorColor,
		iconColorSuccess: successColor,
		iconColorInfo: infoColor,
		iconColorWarning: warningColor
	});
}
var resultLight = {
	name: "Result",
	common: derived,
	self: self$26
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/result/styles/dark.mjs
var resultDark = {
	name: "Result",
	common: derived$1,
	self: self$26
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/slider/styles/_common.mjs
var _common_default$8 = {
	railHeight: "4px",
	railWidthVertical: "4px",
	handleSize: "18px",
	dotHeight: "8px",
	dotWidth: "8px",
	dotBorderRadius: "4px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/slider/styles/dark.mjs
var sliderDark = {
	name: "Slider",
	common: derived$1,
	self(vars) {
		const boxShadow = "0 2px 8px 0 rgba(0, 0, 0, 0.12)";
		const { railColor, modalColor, primaryColorSuppl, popoverColor, textColor2, cardColor, borderRadius, fontSize, opacityDisabled } = vars;
		return Object.assign(Object.assign({}, _common_default$8), {
			fontSize,
			markFontSize: fontSize,
			railColor,
			railColorHover: railColor,
			fillColor: primaryColorSuppl,
			fillColorHover: primaryColorSuppl,
			opacityDisabled,
			handleColor: "#FFF",
			dotColor: cardColor,
			dotColorModal: modalColor,
			dotColorPopover: popoverColor,
			handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
			handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
			handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
			handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
			indicatorColor: popoverColor,
			indicatorBoxShadow: boxShadow,
			indicatorTextColor: textColor2,
			indicatorBorderRadius: borderRadius,
			dotBorder: `2px solid ${railColor}`,
			dotBorderActive: `2px solid ${primaryColorSuppl}`,
			dotBoxShadow: ""
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/slider/styles/light.mjs
function self$25(vars) {
	const indicatorColor = "rgba(0, 0, 0, .85)";
	const boxShadow = "0 2px 8px 0 rgba(0, 0, 0, 0.12)";
	const { railColor, primaryColor, baseColor, cardColor, modalColor, popoverColor, borderRadius, fontSize, opacityDisabled } = vars;
	return Object.assign(Object.assign({}, _common_default$8), {
		fontSize,
		markFontSize: fontSize,
		railColor,
		railColorHover: railColor,
		fillColor: primaryColor,
		fillColorHover: primaryColor,
		opacityDisabled,
		handleColor: "#FFF",
		dotColor: cardColor,
		dotColorModal: modalColor,
		dotColorPopover: popoverColor,
		handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
		handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
		handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
		handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
		indicatorColor,
		indicatorBoxShadow: boxShadow,
		indicatorTextColor: baseColor,
		indicatorBorderRadius: borderRadius,
		dotBorder: `2px solid ${railColor}`,
		dotBorderActive: `2px solid ${primaryColor}`,
		dotBoxShadow: ""
	});
}
var sliderLight = {
	name: "Slider",
	common: derived,
	self: self$25
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/spin/styles/light.mjs
function self$24(vars) {
	const { opacityDisabled, heightTiny, heightSmall, heightMedium, heightLarge, heightHuge, primaryColor, fontSize } = vars;
	return {
		fontSize,
		textColor: primaryColor,
		sizeTiny: heightTiny,
		sizeSmall: heightSmall,
		sizeMedium: heightMedium,
		sizeLarge: heightLarge,
		sizeHuge: heightHuge,
		color: primaryColor,
		opacitySpinning: opacityDisabled
	};
}
var spinLight = {
	name: "Spin",
	common: derived,
	self: self$24
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/spin/styles/dark.mjs
var spinDark = {
	name: "Spin",
	common: derived$1,
	self: self$24
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/statistic/styles/light.mjs
function self$23(vars) {
	const { textColor2, textColor3, fontSize, fontWeight } = vars;
	return {
		labelFontSize: fontSize,
		labelFontWeight: fontWeight,
		valueFontWeight: fontWeight,
		valueFontSize: "24px",
		labelTextColor: textColor3,
		valuePrefixTextColor: textColor2,
		valueSuffixTextColor: textColor2,
		valueTextColor: textColor2
	};
}
var statisticLight = {
	name: "Statistic",
	common: derived,
	self: self$23
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/statistic/styles/dark.mjs
var statisticDark = {
	name: "Statistic",
	common: derived$1,
	self: self$23
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/steps/styles/_common.mjs
var _common_default$7 = {
	stepHeaderFontSizeSmall: "14px",
	stepHeaderFontSizeMedium: "16px",
	indicatorIndexFontSizeSmall: "14px",
	indicatorIndexFontSizeMedium: "16px",
	indicatorSizeSmall: "22px",
	indicatorSizeMedium: "28px",
	indicatorIconSizeSmall: "14px",
	indicatorIconSizeMedium: "18px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/steps/styles/light.mjs
function self$22(vars) {
	const { fontWeightStrong, baseColor, textColorDisabled, primaryColor, errorColor, textColor1, textColor2 } = vars;
	return Object.assign(Object.assign({}, _common_default$7), {
		stepHeaderFontWeight: fontWeightStrong,
		indicatorTextColorProcess: baseColor,
		indicatorTextColorWait: textColorDisabled,
		indicatorTextColorFinish: primaryColor,
		indicatorTextColorError: errorColor,
		indicatorBorderColorProcess: primaryColor,
		indicatorBorderColorWait: textColorDisabled,
		indicatorBorderColorFinish: primaryColor,
		indicatorBorderColorError: errorColor,
		indicatorColorProcess: primaryColor,
		indicatorColorWait: "#0000",
		indicatorColorFinish: "#0000",
		indicatorColorError: "#0000",
		splitorColorProcess: textColorDisabled,
		splitorColorWait: textColorDisabled,
		splitorColorFinish: primaryColor,
		splitorColorError: textColorDisabled,
		headerTextColorProcess: textColor1,
		headerTextColorWait: textColorDisabled,
		headerTextColorFinish: textColorDisabled,
		headerTextColorError: errorColor,
		descriptionTextColorProcess: textColor2,
		descriptionTextColorWait: textColorDisabled,
		descriptionTextColorFinish: textColorDisabled,
		descriptionTextColorError: errorColor
	});
}
var stepsLight = {
	name: "Steps",
	common: derived,
	self: self$22
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/steps/styles/dark.mjs
var stepsDark = {
	name: "Steps",
	common: derived$1,
	self: self$22
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/switch/styles/_common.mjs
var _common_default$6 = {
	buttonHeightSmall: "14px",
	buttonHeightMedium: "18px",
	buttonHeightLarge: "22px",
	buttonWidthSmall: "14px",
	buttonWidthMedium: "18px",
	buttonWidthLarge: "22px",
	buttonWidthPressedSmall: "20px",
	buttonWidthPressedMedium: "24px",
	buttonWidthPressedLarge: "28px",
	railHeightSmall: "18px",
	railHeightMedium: "22px",
	railHeightLarge: "26px",
	railWidthSmall: "32px",
	railWidthMedium: "40px",
	railWidthLarge: "48px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/switch/styles/dark.mjs
var switchDark = {
	name: "Switch",
	common: derived$1,
	self(vars) {
		const { primaryColorSuppl, opacityDisabled, borderRadius, primaryColor, textColor2, baseColor } = vars;
		return Object.assign(Object.assign({}, _common_default$6), {
			iconColor: baseColor,
			textColor: textColor2,
			loadingColor: primaryColorSuppl,
			opacityDisabled,
			railColor: "rgba(255, 255, 255, .20)",
			railColorActive: primaryColorSuppl,
			buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
			buttonColor: "#FFF",
			railBorderRadiusSmall: borderRadius,
			railBorderRadiusMedium: borderRadius,
			railBorderRadiusLarge: borderRadius,
			buttonBorderRadiusSmall: borderRadius,
			buttonBorderRadiusMedium: borderRadius,
			buttonBorderRadiusLarge: borderRadius,
			boxShadowFocus: `0 0 8px 0 ${changeColor(primaryColor, { alpha: .3 })}`
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/switch/styles/light.mjs
function self$21(vars) {
	const { primaryColor, opacityDisabled, borderRadius, textColor3 } = vars;
	return Object.assign(Object.assign({}, _common_default$6), {
		iconColor: textColor3,
		textColor: "white",
		loadingColor: primaryColor,
		opacityDisabled,
		railColor: "rgba(0, 0, 0, .14)",
		railColorActive: primaryColor,
		buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
		buttonColor: "#FFF",
		railBorderRadiusSmall: borderRadius,
		railBorderRadiusMedium: borderRadius,
		railBorderRadiusLarge: borderRadius,
		buttonBorderRadiusSmall: borderRadius,
		buttonBorderRadiusMedium: borderRadius,
		buttonBorderRadiusLarge: borderRadius,
		boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, { alpha: .2 })}`
	});
}
var switchLight = {
	name: "Switch",
	common: derived,
	self: self$21
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/table/styles/_common.mjs
var _common_default$5 = {
	thPaddingSmall: "6px",
	thPaddingMedium: "12px",
	thPaddingLarge: "12px",
	tdPaddingSmall: "6px",
	tdPaddingMedium: "12px",
	tdPaddingLarge: "12px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/table/styles/light.mjs
function self$20(vars) {
	const { dividerColor, cardColor, modalColor, popoverColor, tableHeaderColor, tableColorStriped, textColor1, textColor2, borderRadius, fontWeightStrong, lineHeight, fontSizeSmall, fontSizeMedium, fontSizeLarge } = vars;
	return Object.assign(Object.assign({}, _common_default$5), {
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		lineHeight,
		borderRadius,
		borderColor: composite(cardColor, dividerColor),
		borderColorModal: composite(modalColor, dividerColor),
		borderColorPopover: composite(popoverColor, dividerColor),
		tdColor: cardColor,
		tdColorModal: modalColor,
		tdColorPopover: popoverColor,
		tdColorStriped: composite(cardColor, tableColorStriped),
		tdColorStripedModal: composite(modalColor, tableColorStriped),
		tdColorStripedPopover: composite(popoverColor, tableColorStriped),
		thColor: composite(cardColor, tableHeaderColor),
		thColorModal: composite(modalColor, tableHeaderColor),
		thColorPopover: composite(popoverColor, tableHeaderColor),
		thTextColor: textColor1,
		tdTextColor: textColor2,
		thFontWeight: fontWeightStrong
	});
}
var tableLight = {
	name: "Table",
	common: derived,
	self: self$20
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/table/styles/dark.mjs
var tableDark = {
	name: "Table",
	common: derived$1,
	self: self$20
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tabs/styles/_common.mjs
var _common_default$4 = {
	tabFontSizeSmall: "14px",
	tabFontSizeMedium: "14px",
	tabFontSizeLarge: "16px",
	tabGapSmallLine: "36px",
	tabGapMediumLine: "36px",
	tabGapLargeLine: "36px",
	tabGapSmallLineVertical: "8px",
	tabGapMediumLineVertical: "8px",
	tabGapLargeLineVertical: "8px",
	tabPaddingSmallLine: "6px 0",
	tabPaddingMediumLine: "10px 0",
	tabPaddingLargeLine: "14px 0",
	tabPaddingVerticalSmallLine: "6px 12px",
	tabPaddingVerticalMediumLine: "8px 16px",
	tabPaddingVerticalLargeLine: "10px 20px",
	tabGapSmallBar: "36px",
	tabGapMediumBar: "36px",
	tabGapLargeBar: "36px",
	tabGapSmallBarVertical: "8px",
	tabGapMediumBarVertical: "8px",
	tabGapLargeBarVertical: "8px",
	tabPaddingSmallBar: "4px 0",
	tabPaddingMediumBar: "6px 0",
	tabPaddingLargeBar: "10px 0",
	tabPaddingVerticalSmallBar: "6px 12px",
	tabPaddingVerticalMediumBar: "8px 16px",
	tabPaddingVerticalLargeBar: "10px 20px",
	tabGapSmallCard: "4px",
	tabGapMediumCard: "4px",
	tabGapLargeCard: "4px",
	tabGapSmallCardVertical: "4px",
	tabGapMediumCardVertical: "4px",
	tabGapLargeCardVertical: "4px",
	tabPaddingSmallCard: "8px 16px",
	tabPaddingMediumCard: "10px 20px",
	tabPaddingLargeCard: "12px 24px",
	tabPaddingSmallSegment: "4px 0",
	tabPaddingMediumSegment: "6px 0",
	tabPaddingLargeSegment: "8px 0",
	tabPaddingVerticalLargeSegment: "0 8px",
	tabPaddingVerticalSmallCard: "8px 12px",
	tabPaddingVerticalMediumCard: "10px 16px",
	tabPaddingVerticalLargeCard: "12px 20px",
	tabPaddingVerticalSmallSegment: "0 4px",
	tabPaddingVerticalMediumSegment: "0 6px",
	tabGapSmallSegment: "0",
	tabGapMediumSegment: "0",
	tabGapLargeSegment: "0",
	tabGapSmallSegmentVertical: "0",
	tabGapMediumSegmentVertical: "0",
	tabGapLargeSegmentVertical: "0",
	panePaddingSmall: "8px 0 0 0",
	panePaddingMedium: "12px 0 0 0",
	panePaddingLarge: "16px 0 0 0",
	closeSize: "18px",
	closeIconSize: "14px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tabs/styles/light.mjs
function self$19(vars) {
	const { textColor2, primaryColor, textColorDisabled, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, tabColor, baseColor, dividerColor, fontWeight, textColor1, borderRadius, fontSize, fontWeightStrong } = vars;
	return Object.assign(Object.assign({}, _common_default$4), {
		colorSegment: tabColor,
		tabFontSizeCard: fontSize,
		tabTextColorLine: textColor1,
		tabTextColorActiveLine: primaryColor,
		tabTextColorHoverLine: primaryColor,
		tabTextColorDisabledLine: textColorDisabled,
		tabTextColorSegment: textColor1,
		tabTextColorActiveSegment: textColor2,
		tabTextColorHoverSegment: textColor2,
		tabTextColorDisabledSegment: textColorDisabled,
		tabTextColorBar: textColor1,
		tabTextColorActiveBar: primaryColor,
		tabTextColorHoverBar: primaryColor,
		tabTextColorDisabledBar: textColorDisabled,
		tabTextColorCard: textColor1,
		tabTextColorHoverCard: textColor1,
		tabTextColorActiveCard: primaryColor,
		tabTextColorDisabledCard: textColorDisabled,
		barColor: primaryColor,
		closeIconColor,
		closeIconColorHover,
		closeIconColorPressed,
		closeColorHover,
		closeColorPressed,
		closeBorderRadius: borderRadius,
		tabColor,
		tabColorSegment: baseColor,
		tabBorderColor: dividerColor,
		tabFontWeightActive: fontWeight,
		tabFontWeight: fontWeight,
		tabBorderRadius: borderRadius,
		paneTextColor: textColor2,
		fontWeightStrong
	});
}
var tabsLight = {
	name: "Tabs",
	common: derived,
	self: self$19
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tabs/styles/dark.mjs
var tabsDark = {
	name: "Tabs",
	common: derived$1,
	self(vars) {
		const commonSelf = self$19(vars);
		const { inputColor } = vars;
		commonSelf.colorSegment = inputColor;
		commonSelf.tabColorSegment = inputColor;
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/thing/styles/light.mjs
function self$18(vars) {
	const { textColor1, textColor2, fontWeightStrong, fontSize } = vars;
	return {
		fontSize,
		titleTextColor: textColor1,
		textColor: textColor2,
		titleFontWeight: fontWeightStrong
	};
}
var thingLight = {
	name: "Thing",
	common: derived,
	self: self$18
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/thing/styles/dark.mjs
var thingDark = {
	name: "Thing",
	common: derived$1,
	self: self$18
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/timeline/styles/_common.mjs
var _common_default$3 = {
	titleMarginMedium: "0 0 6px 0",
	titleMarginLarge: "-2px 0 6px 0",
	titleFontSizeMedium: "14px",
	titleFontSizeLarge: "16px",
	iconSizeMedium: "14px",
	iconSizeLarge: "14px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/timeline/styles/dark.mjs
var timelineDark = {
	name: "Timeline",
	common: derived$1,
	self(vars) {
		const { textColor3, infoColorSuppl, errorColorSuppl, successColorSuppl, warningColorSuppl, textColor1, textColor2, railColor, fontWeightStrong, fontSize } = vars;
		return Object.assign(Object.assign({}, _common_default$3), {
			contentFontSize: fontSize,
			titleFontWeight: fontWeightStrong,
			circleBorder: `2px solid ${textColor3}`,
			circleBorderInfo: `2px solid ${infoColorSuppl}`,
			circleBorderError: `2px solid ${errorColorSuppl}`,
			circleBorderSuccess: `2px solid ${successColorSuppl}`,
			circleBorderWarning: `2px solid ${warningColorSuppl}`,
			iconColor: textColor3,
			iconColorInfo: infoColorSuppl,
			iconColorError: errorColorSuppl,
			iconColorSuccess: successColorSuppl,
			iconColorWarning: warningColorSuppl,
			titleTextColor: textColor1,
			contentTextColor: textColor2,
			metaTextColor: textColor3,
			lineColor: railColor
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/timeline/styles/light.mjs
function self$17(vars) {
	const { textColor3, infoColor, errorColor, successColor, warningColor, textColor1, textColor2, railColor, fontWeightStrong, fontSize } = vars;
	return Object.assign(Object.assign({}, _common_default$3), {
		contentFontSize: fontSize,
		titleFontWeight: fontWeightStrong,
		circleBorder: `2px solid ${textColor3}`,
		circleBorderInfo: `2px solid ${infoColor}`,
		circleBorderError: `2px solid ${errorColor}`,
		circleBorderSuccess: `2px solid ${successColor}`,
		circleBorderWarning: `2px solid ${warningColor}`,
		iconColor: textColor3,
		iconColorInfo: infoColor,
		iconColorError: errorColor,
		iconColorSuccess: successColor,
		iconColorWarning: warningColor,
		titleTextColor: textColor1,
		contentTextColor: textColor2,
		metaTextColor: textColor3,
		lineColor: railColor
	});
}
var timelineLight = {
	name: "Timeline",
	common: derived,
	self: self$17
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/transfer/styles/_common.mjs
var _common_default$2 = {
	extraFontSizeSmall: "12px",
	extraFontSizeMedium: "12px",
	extraFontSizeLarge: "14px",
	titleFontSizeSmall: "14px",
	titleFontSizeMedium: "16px",
	titleFontSizeLarge: "16px",
	closeSize: "20px",
	closeIconSize: "16px",
	headerHeightSmall: "44px",
	headerHeightMedium: "44px",
	headerHeightLarge: "50px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/transfer/styles/dark.mjs
var transferDark$1 = {
	name: "Transfer",
	common: derived$1,
	peers: {
		Checkbox: checkboxDark,
		Scrollbar: scrollbarDark,
		Input: inputDark,
		Empty: emptyDark,
		Button: buttonDark
	},
	self(vars) {
		const { fontWeight, fontSizeLarge, fontSizeMedium, fontSizeSmall, heightLarge, heightMedium, borderRadius, inputColor, tableHeaderColor, textColor1, textColorDisabled, textColor2, textColor3, hoverColor, closeColorHover, closeColorPressed, closeIconColor, closeIconColorHover, closeIconColorPressed, dividerColor } = vars;
		return Object.assign(Object.assign({}, _common_default$2), {
			itemHeightSmall: heightMedium,
			itemHeightMedium: heightMedium,
			itemHeightLarge: heightLarge,
			fontSizeSmall,
			fontSizeMedium,
			fontSizeLarge,
			borderRadius,
			dividerColor,
			borderColor: "#0000",
			listColor: inputColor,
			headerColor: tableHeaderColor,
			titleTextColor: textColor1,
			titleTextColorDisabled: textColorDisabled,
			extraTextColor: textColor3,
			extraTextColorDisabled: textColorDisabled,
			itemTextColor: textColor2,
			itemTextColorDisabled: textColorDisabled,
			itemColorPending: hoverColor,
			titleFontWeight: fontWeight,
			closeColorHover,
			closeColorPressed,
			closeIconColor,
			closeIconColorHover,
			closeIconColorPressed
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/transfer/styles/light.mjs
function self$16(vars) {
	const { fontWeight, fontSizeLarge, fontSizeMedium, fontSizeSmall, heightLarge, heightMedium, borderRadius, cardColor, tableHeaderColor, textColor1, textColorDisabled, textColor2, textColor3, borderColor, hoverColor, closeColorHover, closeColorPressed, closeIconColor, closeIconColorHover, closeIconColorPressed } = vars;
	return Object.assign(Object.assign({}, _common_default$2), {
		itemHeightSmall: heightMedium,
		itemHeightMedium: heightMedium,
		itemHeightLarge: heightLarge,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		borderRadius,
		dividerColor: borderColor,
		borderColor,
		listColor: cardColor,
		headerColor: composite(cardColor, tableHeaderColor),
		titleTextColor: textColor1,
		titleTextColorDisabled: textColorDisabled,
		extraTextColor: textColor3,
		extraTextColorDisabled: textColorDisabled,
		itemTextColor: textColor2,
		itemTextColorDisabled: textColorDisabled,
		itemColorPending: hoverColor,
		titleFontWeight: fontWeight,
		closeColorHover,
		closeColorPressed,
		closeIconColor,
		closeIconColorHover,
		closeIconColorPressed
	});
}
var transferLight$1 = createTheme({
	name: "Transfer",
	common: derived,
	peers: {
		Checkbox: checkboxLight,
		Scrollbar: scrollbarLight,
		Input: inputLight,
		Empty: emptyLight,
		Button: buttonLight
	},
	self: self$16
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tree/styles/light.mjs
function self$15(vars) {
	const { borderRadiusSmall, dividerColor, hoverColor, pressedColor, primaryColor, textColor3, textColor2, textColorDisabled, fontSize } = vars;
	return {
		fontSize,
		lineHeight: "1.5",
		nodeHeight: "30px",
		nodeWrapperPadding: "3px 0",
		nodeBorderRadius: borderRadiusSmall,
		nodeColorHover: hoverColor,
		nodeColorPressed: pressedColor,
		nodeColorActive: changeColor(primaryColor, { alpha: .1 }),
		arrowColor: textColor3,
		nodeTextColor: textColor2,
		nodeTextColorDisabled: textColorDisabled,
		loadingColor: primaryColor,
		dropMarkColor: primaryColor,
		lineColor: dividerColor
	};
}
var treeLight = createTheme({
	name: "Tree",
	common: derived,
	peers: {
		Checkbox: checkboxLight,
		Scrollbar: scrollbarLight,
		Empty: emptyLight
	},
	self: self$15
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tree/styles/dark.mjs
var treeDark = {
	name: "Tree",
	common: derived$1,
	peers: {
		Checkbox: checkboxDark,
		Scrollbar: scrollbarDark,
		Empty: emptyDark
	},
	self(vars) {
		const { primaryColor } = vars;
		const commonSelf = self$15(vars);
		commonSelf.nodeColorActive = changeColor(primaryColor, { alpha: .15 });
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tree-select/styles/dark.mjs
var treeSelectDark = {
	name: "TreeSelect",
	common: derived$1,
	peers: {
		Tree: treeDark,
		Empty: emptyDark,
		InternalSelection: internalSelectionDark
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/tree-select/styles/light.mjs
function self$14(vars) {
	const { popoverColor, boxShadow2, borderRadius, heightMedium, dividerColor, textColor2 } = vars;
	return {
		menuPadding: "4px",
		menuColor: popoverColor,
		menuBoxShadow: boxShadow2,
		menuBorderRadius: borderRadius,
		menuHeight: `calc(${heightMedium} * 7.6)`,
		actionDividerColor: dividerColor,
		actionTextColor: textColor2,
		actionPadding: "8px 12px",
		headerDividerColor: dividerColor,
		headerTextColor: textColor2,
		headerPadding: "8px 12px"
	};
}
var treeSelectLight = createTheme({
	name: "TreeSelect",
	common: derived,
	peers: {
		Tree: treeLight,
		Empty: emptyLight,
		InternalSelection: internalSelectionLight
	},
	self: self$14
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/typography/styles/_common.mjs
var _common_default$1 = {
	headerFontSize1: "30px",
	headerFontSize2: "22px",
	headerFontSize3: "18px",
	headerFontSize4: "16px",
	headerFontSize5: "16px",
	headerFontSize6: "16px",
	headerMargin1: "28px 0 20px 0",
	headerMargin2: "28px 0 20px 0",
	headerMargin3: "28px 0 20px 0",
	headerMargin4: "28px 0 18px 0",
	headerMargin5: "28px 0 18px 0",
	headerMargin6: "28px 0 18px 0",
	headerPrefixWidth1: "16px",
	headerPrefixWidth2: "16px",
	headerPrefixWidth3: "12px",
	headerPrefixWidth4: "12px",
	headerPrefixWidth5: "12px",
	headerPrefixWidth6: "12px",
	headerBarWidth1: "4px",
	headerBarWidth2: "4px",
	headerBarWidth3: "3px",
	headerBarWidth4: "3px",
	headerBarWidth5: "3px",
	headerBarWidth6: "3px",
	pMargin: "16px 0 16px 0",
	liMargin: ".25em 0 0 0",
	olPadding: "0 0 0 2em",
	ulPadding: "0 0 0 2em"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/typography/styles/light.mjs
function self$13(vars) {
	const { primaryColor, textColor2, borderColor, lineHeight, fontSize, borderRadiusSmall, dividerColor, fontWeightStrong, textColor1, textColor3, infoColor, warningColor, errorColor, successColor, codeColor } = vars;
	return Object.assign(Object.assign({}, _common_default$1), {
		aTextColor: primaryColor,
		blockquoteTextColor: textColor2,
		blockquotePrefixColor: borderColor,
		blockquoteLineHeight: lineHeight,
		blockquoteFontSize: fontSize,
		codeBorderRadius: borderRadiusSmall,
		liTextColor: textColor2,
		liLineHeight: lineHeight,
		liFontSize: fontSize,
		hrColor: dividerColor,
		headerFontWeight: fontWeightStrong,
		headerTextColor: textColor1,
		pTextColor: textColor2,
		pTextColor1Depth: textColor1,
		pTextColor2Depth: textColor2,
		pTextColor3Depth: textColor3,
		pLineHeight: lineHeight,
		pFontSize: fontSize,
		headerBarColor: primaryColor,
		headerBarColorPrimary: primaryColor,
		headerBarColorInfo: infoColor,
		headerBarColorError: errorColor,
		headerBarColorWarning: warningColor,
		headerBarColorSuccess: successColor,
		textColor: textColor2,
		textColor1Depth: textColor1,
		textColor2Depth: textColor2,
		textColor3Depth: textColor3,
		textColorPrimary: primaryColor,
		textColorInfo: infoColor,
		textColorSuccess: successColor,
		textColorWarning: warningColor,
		textColorError: errorColor,
		codeTextColor: textColor2,
		codeColor,
		codeBorder: "1px solid #0000"
	});
}
var typographyLight = {
	name: "Typography",
	common: derived,
	self: self$13
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/typography/styles/dark.mjs
var typographyDark = {
	name: "Typography",
	common: derived$1,
	self: self$13
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/upload/styles/light.mjs
function self$12(vars) {
	const { iconColor, primaryColor, errorColor, textColor2, successColor, opacityDisabled, actionColor, borderColor, hoverColor, lineHeight, borderRadius, fontSize } = vars;
	return {
		fontSize,
		lineHeight,
		borderRadius,
		draggerColor: actionColor,
		draggerBorder: `1px dashed ${borderColor}`,
		draggerBorderHover: `1px dashed ${primaryColor}`,
		itemColorHover: hoverColor,
		itemColorHoverError: changeColor(errorColor, { alpha: .06 }),
		itemTextColor: textColor2,
		itemTextColorError: errorColor,
		itemTextColorSuccess: successColor,
		itemIconColor: iconColor,
		itemDisabledOpacity: opacityDisabled,
		itemBorderImageCardError: `1px solid ${errorColor}`,
		itemBorderImageCard: `1px solid ${borderColor}`
	};
}
var uploadLight = createTheme({
	name: "Upload",
	common: derived,
	peers: {
		Button: buttonLight,
		Progress: progressLight
	},
	self: self$12
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/upload/styles/dark.mjs
var uploadDark = {
	name: "Upload",
	common: derived$1,
	peers: {
		Button: buttonDark,
		Progress: progressDark
	},
	self(vars) {
		const { errorColor } = vars;
		const commonSelf = self$12(vars);
		commonSelf.itemColorHoverError = changeColor(errorColor, { alpha: .09 });
		return commonSelf;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/watermark/styles/dark.mjs
var watermarkDark = {
	name: "Watermark",
	common: derived$1,
	self(vars) {
		const { fontFamily } = vars;
		return { fontFamily };
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/watermark/styles/light.mjs
var watermarkLight = createTheme({
	name: "Watermark",
	common: derived,
	self(vars) {
		const { fontFamily } = vars;
		return { fontFamily };
	}
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/float-button-group/styles/light.mjs
function self$11(vars) {
	const { popoverColor, dividerColor, borderRadius } = vars;
	return {
		color: popoverColor,
		buttonBorderColor: dividerColor,
		borderRadiusSquare: borderRadius,
		boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)"
	};
}
var themeLight$3 = {
	name: "FloatButtonGroup",
	common: derived,
	self: self$11
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/float-button/styles/dark.mjs
var floatButtonDark = {
	name: "FloatButton",
	common: derived$1,
	self(vars) {
		const { popoverColor, textColor2, buttonColor2Hover, buttonColor2Pressed, primaryColor, primaryColorHover, primaryColorPressed, baseColor, borderRadius } = vars;
		return {
			color: popoverColor,
			textColor: textColor2,
			boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
			boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
			boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)",
			colorHover: buttonColor2Hover,
			colorPressed: buttonColor2Pressed,
			colorPrimary: primaryColor,
			colorPrimaryHover: primaryColorHover,
			colorPrimaryPressed: primaryColorPressed,
			textColorPrimary: baseColor,
			borderRadiusSquare: borderRadius
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/float-button/styles/light.mjs
function self$10(vars) {
	const { popoverColor, textColor2, buttonColor2Hover, buttonColor2Pressed, primaryColor, primaryColorHover, primaryColorPressed, borderRadius } = vars;
	return {
		color: popoverColor,
		colorHover: buttonColor2Hover,
		colorPressed: buttonColor2Pressed,
		colorPrimary: primaryColor,
		colorPrimaryHover: primaryColorHover,
		colorPrimaryPressed: primaryColorPressed,
		textColor: textColor2,
		boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .16)",
		boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .24)",
		boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .24)",
		textColorPrimary: "#fff",
		borderRadiusSquare: borderRadius
	};
}
var themeLight$2 = {
	name: "FloatButton",
	common: derived,
	self: self$10
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/heatmap/styles/light.mjs
function self$9(vars) {
	const { borderRadius, fontSizeMini, fontSizeTiny, fontSizeSmall, fontWeight, textColor2, cardColor, buttonColor2Hover } = vars;
	return {
		activeColors: [
			"#9be9a8",
			"#40c463",
			"#30a14e",
			"#216e39"
		],
		borderRadius,
		borderColor: cardColor,
		textColor: textColor2,
		mininumColor: buttonColor2Hover,
		fontWeight,
		loadingColorStart: "rgba(0, 0, 0, 0.06)",
		loadingColorEnd: "rgba(0, 0, 0, 0.12)",
		rectSizeSmall: "10px",
		rectSizeMedium: "11px",
		rectSizeLarge: "12px",
		borderRadiusSmall: "2px",
		borderRadiusMedium: "2px",
		borderRadiusLarge: "2px",
		xGapSmall: "2px",
		xGapMedium: "3px",
		xGapLarge: "3px",
		yGapSmall: "2px",
		yGapMedium: "3px",
		yGapLarge: "3px",
		fontSizeSmall: fontSizeTiny,
		fontSizeMedium: fontSizeMini,
		fontSizeLarge: fontSizeSmall
	};
}
var heatmapLight = createTheme({
	name: "Heatmap",
	common: derived,
	self: self$9
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/heatmap/styles/dark.mjs
var HeatmapDark = {
	name: "Heatmap",
	common: derived$1,
	self(vars) {
		const lightSelf = self$9(vars);
		return Object.assign(Object.assign({}, lightSelf), {
			activeColors: [
				"#0d4429",
				"#006d32",
				"#26a641",
				"#39d353"
			],
			mininumColor: "rgba(255, 255, 255, 0.1)",
			loadingColorStart: "rgba(255, 255, 255, 0.12)",
			loadingColorEnd: "rgba(255, 255, 255, 0.18)"
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/icon-wrapper/styles/light.mjs
function self$8(vars) {
	const { primaryColor, baseColor } = vars;
	return {
		color: primaryColor,
		iconColor: baseColor
	};
}
var iconWrapperLight = {
	name: "IconWrapper",
	common: derived,
	self: self$8
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/icon-wrapper/styles/dark.mjs
var iconDark = {
	name: "IconWrapper",
	common: derived$1,
	self: self$8
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/image/styles/dark.mjs
var imageDark = {
	name: "Image",
	common: derived$1,
	peers: { Tooltip: tooltipDark },
	self: (vars) => {
		const { textColor2 } = vars;
		return {
			toolbarIconColor: textColor2,
			toolbarColor: "rgba(0, 0, 0, .35)",
			toolbarBoxShadow: "none",
			toolbarBorderRadius: "24px"
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/image/styles/light.mjs
function self$7() {
	return {
		toolbarIconColor: "rgba(255, 255, 255, .9)",
		toolbarColor: "rgba(0, 0, 0, .35)",
		toolbarBoxShadow: "none",
		toolbarBorderRadius: "24px"
	};
}
var imageLight = createTheme({
	name: "Image",
	common: derived,
	peers: { Tooltip: tooltipLight },
	self: self$7
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/legacy-transfer/styles/_common.mjs
var _common_default = {
	extraFontSize: "12px",
	width: "440px"
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/legacy-transfer/styles/dark.mjs
var transferDark = {
	name: "Transfer",
	common: derived$1,
	peers: {
		Checkbox: checkboxDark,
		Scrollbar: scrollbarDark,
		Input: inputDark,
		Empty: emptyDark,
		Button: buttonDark
	},
	self(vars) {
		const { iconColorDisabled, iconColor, fontWeight, fontSizeLarge, fontSizeMedium, fontSizeSmall, heightLarge, heightMedium, heightSmall, borderRadius, inputColor, tableHeaderColor, textColor1, textColorDisabled, textColor2, hoverColor } = vars;
		return Object.assign(Object.assign({}, _common_default), {
			itemHeightSmall: heightSmall,
			itemHeightMedium: heightMedium,
			itemHeightLarge: heightLarge,
			fontSizeSmall,
			fontSizeMedium,
			fontSizeLarge,
			borderRadius,
			borderColor: "#0000",
			listColor: inputColor,
			headerColor: tableHeaderColor,
			titleTextColor: textColor1,
			titleTextColorDisabled: textColorDisabled,
			extraTextColor: textColor2,
			filterDividerColor: "#0000",
			itemTextColor: textColor2,
			itemTextColorDisabled: textColorDisabled,
			itemColorPending: hoverColor,
			titleFontWeight: fontWeight,
			iconColor,
			iconColorDisabled
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/legacy-transfer/styles/light.mjs
function self$6(vars) {
	const { fontWeight, iconColorDisabled, iconColor, fontSizeLarge, fontSizeMedium, fontSizeSmall, heightLarge, heightMedium, heightSmall, borderRadius, cardColor, tableHeaderColor, textColor1, textColorDisabled, textColor2, borderColor, hoverColor } = vars;
	return Object.assign(Object.assign({}, _common_default), {
		itemHeightSmall: heightSmall,
		itemHeightMedium: heightMedium,
		itemHeightLarge: heightLarge,
		fontSizeSmall,
		fontSizeMedium,
		fontSizeLarge,
		borderRadius,
		borderColor,
		listColor: cardColor,
		headerColor: composite(cardColor, tableHeaderColor),
		titleTextColor: textColor1,
		titleTextColorDisabled: textColorDisabled,
		extraTextColor: textColor2,
		filterDividerColor: borderColor,
		itemTextColor: textColor2,
		itemTextColorDisabled: textColorDisabled,
		itemColorPending: hoverColor,
		titleFontWeight: fontWeight,
		iconColor,
		iconColorDisabled
	});
}
var transferLight = createTheme({
	name: "Transfer",
	common: derived,
	peers: {
		Checkbox: checkboxLight,
		Scrollbar: scrollbarLight,
		Input: inputLight,
		Empty: emptyLight,
		Button: buttonLight
	},
	self: self$6
});
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/marquee/styles/light.mjs
function self$5() {
	return {};
}
var marqueeLight = {
	name: "Marquee",
	common: derived,
	self: self$5
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/marquee/styles/dark.mjs
var marqueeDark = {
	name: "Marquee",
	common: derived$1,
	self: self$5
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/qr-code/styles/dark.mjs
var qrcodeDark = {
	name: "QrCode",
	common: derived$1,
	self: (vars) => {
		return { borderRadius: vars.borderRadius };
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/qr-code/styles/light.mjs
function self$4(vars) {
	return { borderRadius: vars.borderRadius };
}
var themeLight$1 = {
	name: "QrCode",
	common: derived,
	self: self$4
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/skeleton/styles/dark.mjs
var skeletonDark = {
	name: "Skeleton",
	common: derived$1,
	self(vars) {
		const { heightSmall, heightMedium, heightLarge, borderRadius } = vars;
		return {
			color: "rgba(255, 255, 255, 0.12)",
			colorEnd: "rgba(255, 255, 255, 0.18)",
			borderRadius,
			heightSmall,
			heightMedium,
			heightLarge
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/skeleton/styles/light.mjs
function self$3(vars) {
	const { heightSmall, heightMedium, heightLarge, borderRadius } = vars;
	return {
		color: "#eee",
		colorEnd: "#ddd",
		borderRadius,
		heightSmall,
		heightMedium,
		heightLarge
	};
}
var skeletonLight = {
	name: "Skeleton",
	common: derived,
	self: self$3
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/split/styles/dark.mjs
var splitDark = {
	name: "Split",
	common: derived$1
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/split/styles/light.mjs
function self$2(vars) {
	const { primaryColorHover, borderColor } = vars;
	return {
		resizableTriggerColorHover: primaryColorHover,
		resizableTriggerColor: borderColor
	};
}
var themeLight = {
	name: "Split",
	common: derived,
	self: self$2
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/equation/styles/light.mjs
var self$1 = () => ({});
var equationLight = {
	name: "Equation",
	common: derived,
	self: self$1
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/equation/styles/dark.mjs
var equationDark = {
	name: "Equation",
	common: derived$1,
	self: self$1
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/float-button-group/styles/dark.mjs
var floatButtonGroupDark = {
	name: "FloatButtonGroup",
	common: derived$1,
	self(vars) {
		const { popoverColor, dividerColor, borderRadius } = vars;
		return {
			color: popoverColor,
			buttonBorderColor: dividerColor,
			borderRadiusSquare: borderRadius,
			boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)"
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/themes/light.mjs
var lightTheme = {
	name: "light",
	common: derived,
	Alert: alertLight,
	Anchor: anchorLight,
	AutoComplete: autoCompleteLight,
	Avatar: avatarLight,
	AvatarGroup: avatarGroupLight,
	BackTop: backTopLight,
	Badge: badgeLight,
	Breadcrumb: breadcrumbLight,
	Button: buttonLight,
	ButtonGroup: buttonGroupLight,
	Calendar: calendarLight,
	Card: cardLight,
	Carousel: carouselLight,
	Cascader: cascaderLight,
	Checkbox: checkboxLight,
	Code: codeLight,
	Collapse: collapseLight,
	CollapseTransition: collapseTransitionLight,
	ColorPicker: colorPickerLight,
	DataTable: dataTableLight,
	DatePicker: datePickerLight,
	Descriptions: descriptionsLight,
	Dialog: dialogLight,
	Divider: dividerLight,
	Drawer: drawerLight,
	Dropdown: dropdownLight,
	DynamicInput: dynamicInputLight,
	DynamicTags: dynamicTagsLight,
	Element: elementLight,
	Empty: emptyLight,
	Equation: equationLight,
	Ellipsis: ellipsisLight,
	Flex: flexLight,
	Form: formLight,
	GradientText: gradientTextLight,
	Heatmap: heatmapLight,
	Icon: iconLight,
	IconWrapper: iconWrapperLight,
	Image: imageLight,
	Input: inputLight,
	InputNumber: inputNumberLight,
	InputOtp: inputOtpLight,
	Layout: layoutLight,
	LegacyTransfer: transferLight,
	List: listLight,
	LoadingBar: loadingBarLight,
	Log: logLight,
	Menu: menuLight,
	Mention: mentionLight,
	Message: messageLight,
	Modal: modalLight,
	Notification: notificationLight,
	PageHeader: pageHeaderLight,
	Pagination: paginationLight,
	Popconfirm: popconfirmLight,
	Popover: popoverLight,
	Popselect: popselectLight,
	Progress: progressLight,
	QrCode: themeLight$1,
	Radio: radioLight,
	Rate: themeLight$4,
	Row: rowLight,
	Result: resultLight,
	Scrollbar: scrollbarLight,
	Skeleton: skeletonLight,
	Select: selectLight,
	Slider: sliderLight,
	Space: spaceLight,
	Spin: spinLight,
	Statistic: statisticLight,
	Steps: stepsLight,
	Switch: switchLight,
	Table: tableLight,
	Tabs: tabsLight,
	Tag: tagLight,
	Thing: thingLight,
	TimePicker: timePickerLight,
	Timeline: timelineLight,
	Tooltip: tooltipLight,
	Transfer: transferLight$1,
	Tree: treeLight,
	TreeSelect: treeSelectLight,
	Typography: typographyLight,
	Upload: uploadLight,
	Watermark: watermarkLight,
	Split: themeLight,
	FloatButton: themeLight$2,
	FloatButtonGroup: themeLight$3,
	Marquee: marqueeLight
};
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/themes/dark.mjs
var darkTheme = {
	name: "dark",
	common: derived$1,
	Alert: alertDark,
	Anchor: anchorDark,
	AutoComplete: autoCompleteDark,
	Avatar: avatarDark,
	AvatarGroup: avatarGroupDark,
	BackTop: backTopDark,
	Badge: badgeDark,
	Breadcrumb: breadcrumbDark,
	Button: buttonDark,
	ButtonGroup: buttonGroupDark,
	Calendar: calendarDark,
	Card: cardDark,
	Carousel: carouselDark,
	Cascader: cascaderDark,
	Checkbox: checkboxDark,
	Code: codeDark,
	Collapse: collapseDark,
	CollapseTransition: collapseTransitionDark,
	ColorPicker: colorPickerDark,
	DataTable: dataTableDark,
	DatePicker: datePickerDark,
	Descriptions: descriptionsDark,
	Dialog: dialogDark,
	Divider: dividerDark,
	Drawer: drawerDark,
	Dropdown: dropdownDark,
	DynamicInput: dynamicInputDark,
	DynamicTags: dynamicTagsDark,
	Element: elementDark,
	Empty: emptyDark,
	Ellipsis: ellipsisDark,
	Equation: equationDark,
	Flex: flexDark,
	Form: formItemDark,
	GradientText: gradientTextDark,
	Heatmap: HeatmapDark,
	Icon: iconDark$1,
	IconWrapper: iconDark,
	Image: imageDark,
	Input: inputDark,
	InputNumber: inputNumberDark,
	InputOtp: inputOtpDark,
	LegacyTransfer: transferDark,
	Layout: layoutDark,
	List: listDark$1,
	LoadingBar: loadingBarDark,
	Log: logDark,
	Menu: menuDark,
	Mention: listDark,
	Message: messageDark,
	Modal: modalDark,
	Notification: notificationDark,
	PageHeader: pageHeaderDark,
	Pagination: paginationDark,
	Popconfirm: popconfirmDark,
	Popover: popoverDark,
	Popselect: popselect,
	Progress: progressDark,
	QrCode: qrcodeDark,
	Radio: radioDark,
	Rate: rateDark,
	Result: resultDark,
	Row: rowDark,
	Scrollbar: scrollbarDark,
	Select: selectDark,
	Skeleton: skeletonDark,
	Slider: sliderDark,
	Space: spaceDark,
	Spin: spinDark,
	Statistic: statisticDark,
	Steps: stepsDark,
	Switch: switchDark,
	Table: tableDark,
	Tabs: tabsDark,
	Tag: tagDark,
	Thing: thingDark,
	TimePicker: timePickerDark,
	Timeline: timelineDark,
	Tooltip: tooltipDark,
	Transfer: transferDark$1,
	Tree: treeDark,
	TreeSelect: treeSelectDark,
	Typography: typographyDark,
	Upload: uploadDark,
	Watermark: watermarkDark,
	Split: splitDark,
	FloatButton: floatButtonDark,
	FloatButtonGroup: floatButtonGroupDark,
	Marquee: marqueeDark
};
//#endregion
//#region ../../node_modules/.pnpm/pinia@3.0.4_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_vue@3.5.13_typescript-n_c7bbe2a52a4696b04487aaa226a7a5dd/node_modules/pinia/dist/pinia.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/*!
* pinia v3.0.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
var IS_CLIENT = typeof window !== "undefined";
/**
* setActivePinia must be called to handle SSR at the top of functions like
* `fetch`, `setup`, `serverPrefetch` and others
*/
var activePinia;
/**
* Sets or unsets the active pinia. Used in SSR and internally when calling
* actions and getters
*
* @param pinia - Pinia instance
*/
var setActivePinia = (pinia) => activePinia = pinia;
var piniaSymbol = Symbol();
function isPlainObject(o) {
	return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
/**
* Possible types for SubscriptionCallback
*/
var MutationType;
(function(MutationType) {
	/**
	* Direct mutation of the state:
	*
	* - `store.name = 'new name'`
	* - `store.$state.name = 'new name'`
	* - `store.list.push('new item')`
	*/
	MutationType["direct"] = "direct";
	/**
	* Mutated the state with `$patch` and an object
	*
	* - `store.$patch({ name: 'newName' })`
	*/
	MutationType["patchObject"] = "patch object";
	/**
	* Mutated the state with `$patch` and a function
	*
	* - `store.$patch(state => state.name = 'newName')`
	*/
	MutationType["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
var _global = /*#__PURE__*/ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
function bom(blob, { autoBom = false } = {}) {
	if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
	return blob;
}
function download(url, name, opts) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.responseType = "blob";
	xhr.onload = function() {
		saveAs(xhr.response, name, opts);
	};
	xhr.onerror = function() {
		console.error("could not download file");
	};
	xhr.send();
}
function corsEnabled(url) {
	const xhr = new XMLHttpRequest();
	xhr.open("HEAD", url, false);
	try {
		xhr.send();
	} catch (e) {}
	return xhr.status >= 200 && xhr.status <= 299;
}
function click(node) {
	try {
		node.dispatchEvent(new MouseEvent("click"));
	} catch (e) {
		const evt = new MouseEvent("click", {
			bubbles: true,
			cancelable: true,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: false,
			altKey: false,
			shiftKey: false,
			metaKey: false,
			button: 0,
			relatedTarget: null
		});
		node.dispatchEvent(evt);
	}
}
var _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
var isMacOSWebView = /*#__PURE__*/ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
var saveAs = !IS_CLIENT ? () => {} : typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : "msSaveOrOpenBlob" in _navigator ? msSaveAs : fileSaverSaveAs;
function downloadSaveAs(blob, name = "download", opts) {
	const a = document.createElement("a");
	a.download = name;
	a.rel = "noopener";
	if (typeof blob === "string") {
		a.href = blob;
		if (a.origin !== location.origin) {
			if (corsEnabled(a.href)) download(blob, name, opts);
			else {
				a.target = "_blank";
				click(a);
			}
		} else click(a);
	} else {
		a.href = URL.createObjectURL(blob);
		setTimeout(function() {
			URL.revokeObjectURL(a.href);
		}, 4e4);
		setTimeout(function() {
			click(a);
		}, 0);
	}
}
function msSaveAs(blob, name = "download", opts) {
	if (typeof blob === "string") {
		if (corsEnabled(blob)) download(blob, name, opts);
		else {
			const a = document.createElement("a");
			a.href = blob;
			a.target = "_blank";
			setTimeout(function() {
				click(a);
			});
		}
	} else navigator.msSaveOrOpenBlob(bom(blob, opts), name);
}
function fileSaverSaveAs(blob, name, opts, popup) {
	popup = popup || open("", "_blank");
	if (popup) popup.document.title = popup.document.body.innerText = "downloading...";
	if (typeof blob === "string") return download(blob, name, opts);
	const force = blob.type === "application/octet-stream";
	const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
	const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
		const reader = new FileReader();
		reader.onloadend = function() {
			let url = reader.result;
			if (typeof url !== "string") {
				popup = null;
				throw new Error("Wrong reader.result type");
			}
			url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
			if (popup) popup.location.href = url;
			else location.assign(url);
			popup = null;
		};
		reader.readAsDataURL(blob);
	} else {
		const url = URL.createObjectURL(blob);
		if (popup) popup.location.assign(url);
		else location.href = url;
		popup = null;
		setTimeout(function() {
			URL.revokeObjectURL(url);
		}, 4e4);
	}
}
var { assign: assign$1 } = Object;
/**
* Creates a Pinia instance to be used by the application
*/
function createPinia() {
	const scope = effectScope(true);
	const state = scope.run(() => ref({}));
	let _p = [];
	let toBeInstalled = [];
	const pinia = markRaw({
		install(app) {
			setActivePinia(pinia);
			pinia._a = app;
			app.provide(piniaSymbol, pinia);
			app.config.globalProperties.$pinia = pinia;
			toBeInstalled.forEach((plugin) => _p.push(plugin));
			toBeInstalled = [];
		},
		use(plugin) {
			if (!this._a) toBeInstalled.push(plugin);
			else _p.push(plugin);
			return this;
		},
		_p,
		_a: null,
		_e: scope,
		_s: /* @__PURE__ */ new Map(),
		state
	});
	return pinia;
}
var noop = () => {};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
	subscriptions.add(callback);
	const removeSubscription = () => {
		subscriptions.delete(callback) && onCleanup();
	};
	if (!detached && getCurrentScope()) onScopeDispose(removeSubscription);
	return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
	subscriptions.forEach((callback) => {
		callback(...args);
	});
}
var fallbackRunWithContext = (fn) => fn();
/**
* Marks a function as an action for `$onAction`
* @internal
*/
var ACTION_MARKER = Symbol();
/**
* Action name symbol. Allows to add a name to an action after defining it
* @internal
*/
var ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
	if (target instanceof Map && patchToApply instanceof Map) patchToApply.forEach((value, key) => target.set(key, value));
	else if (target instanceof Set && patchToApply instanceof Set) patchToApply.forEach(target.add, target);
	for (const key in patchToApply) {
		if (!patchToApply.hasOwnProperty(key)) continue;
		const subPatch = patchToApply[key];
		const targetValue = target[key];
		if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) target[key] = mergeReactiveObjects(targetValue, subPatch);
		else target[key] = subPatch;
	}
	return target;
}
var skipHydrateSymbol = Symbol();
/**
* Returns whether a value should be hydrated
*
* @param obj - target variable
* @returns true if `obj` should be hydrated
*/
function shouldHydrate(obj) {
	return !isPlainObject(obj) || !Object.prototype.hasOwnProperty.call(obj, skipHydrateSymbol);
}
var { assign } = Object;
function isComputed(o) {
	return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
	const { state, actions, getters } = options;
	const initialState = pinia.state.value[id];
	let store;
	function setup() {
		if (!initialState && true)
 /* istanbul ignore if */
		pinia.state.value[id] = state ? state() : {};
		return assign(toRefs(pinia.state.value[id]), actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
			computedGetters[name] = markRaw(computed(() => {
				setActivePinia(pinia);
				const store = pinia._s.get(id);
				return getters[name].call(store, store);
			}));
			return computedGetters;
		}, {}));
	}
	store = createSetupStore(id, setup, options, pinia, hot, true);
	return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
	let scope;
	const optionsForPlugin = assign({ actions: {} }, options);
	const $subscribeOptions = { deep: true };
	let isListening;
	let isSyncListening;
	let subscriptions = /* @__PURE__ */ new Set();
	let actionSubscriptions = /* @__PURE__ */ new Set();
	let debuggerEvents;
	const initialState = pinia.state.value[$id];
	if (!isOptionsStore && !initialState && true)
 /* istanbul ignore if */
	pinia.state.value[$id] = {};
	ref({});
	let activeListener;
	function $patch(partialStateOrMutator) {
		let subscriptionMutation;
		isListening = isSyncListening = false;
		if (typeof partialStateOrMutator === "function") {
			partialStateOrMutator(pinia.state.value[$id]);
			subscriptionMutation = {
				type: MutationType.patchFunction,
				storeId: $id,
				events: debuggerEvents
			};
		} else {
			mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
			subscriptionMutation = {
				type: MutationType.patchObject,
				payload: partialStateOrMutator,
				storeId: $id,
				events: debuggerEvents
			};
		}
		const myListenerId = activeListener = Symbol();
		nextTick().then(() => {
			if (activeListener === myListenerId) isListening = true;
		});
		isSyncListening = true;
		triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
	}
	const $reset = isOptionsStore ? function $reset() {
		const { state } = options;
		const newState = state ? state() : {};
		this.$patch(($state) => {
			assign($state, newState);
		});
	} : noop;
	function $dispose() {
		scope.stop();
		subscriptions.clear();
		actionSubscriptions.clear();
		pinia._s.delete($id);
	}
	/**
	* Helper that wraps function so it can be tracked with $onAction
	* @param fn - action to wrap
	* @param name - name of the action
	*/
	const action = (fn, name = "") => {
		if (ACTION_MARKER in fn) {
			fn[ACTION_NAME] = name;
			return fn;
		}
		const wrappedAction = function() {
			setActivePinia(pinia);
			const args = Array.from(arguments);
			const afterCallbackSet = /* @__PURE__ */ new Set();
			const onErrorCallbackSet = /* @__PURE__ */ new Set();
			function after(callback) {
				afterCallbackSet.add(callback);
			}
			function onError(callback) {
				onErrorCallbackSet.add(callback);
			}
			triggerSubscriptions(actionSubscriptions, {
				args,
				name: wrappedAction[ACTION_NAME],
				store,
				after,
				onError
			});
			let ret;
			try {
				ret = fn.apply(this && this.$id === $id ? this : store, args);
			} catch (error) {
				triggerSubscriptions(onErrorCallbackSet, error);
				throw error;
			}
			if (ret instanceof Promise) return ret.then((value) => {
				triggerSubscriptions(afterCallbackSet, value);
				return value;
			}).catch((error) => {
				triggerSubscriptions(onErrorCallbackSet, error);
				return Promise.reject(error);
			});
			triggerSubscriptions(afterCallbackSet, ret);
			return ret;
		};
		wrappedAction[ACTION_MARKER] = true;
		wrappedAction[ACTION_NAME] = name;
		return wrappedAction;
	};
	const partialStore = {
		_p: pinia,
		$id,
		$onAction: addSubscription.bind(null, actionSubscriptions),
		$patch,
		$reset,
		$subscribe(callback, options = {}) {
			const removeSubscription = addSubscription(subscriptions, callback, options.detached, () => stopWatcher());
			const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
				if (options.flush === "sync" ? isSyncListening : isListening) callback({
					storeId: $id,
					type: MutationType.direct,
					events: debuggerEvents
				}, state);
			}, assign({}, $subscribeOptions, options)));
			return removeSubscription;
		},
		$dispose
	};
	const store = reactive(partialStore);
	pinia._s.set($id, store);
	const setupStore = (pinia._a && pinia._a.runWithContext || fallbackRunWithContext)(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
	for (const key in setupStore) {
		const prop = setupStore[key];
		if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
			if (!isOptionsStore) {
				if (initialState && shouldHydrate(prop)) {
					if (isRef(prop)) prop.value = initialState[key];
					else mergeReactiveObjects(prop, initialState[key]);
				}
				pinia.state.value[$id][key] = prop;
			}
		} else if (typeof prop === "function") {
			setupStore[key] = action(prop, key);
			optionsForPlugin.actions[key] = prop;
		}
	}
	/* istanbul ignore if */
	assign(store, setupStore);
	assign(toRaw(store), setupStore);
	Object.defineProperty(store, "$state", {
		get: () => pinia.state.value[$id],
		set: (state) => {
			$patch(($state) => {
				assign($state, state);
			});
		}
	});
	pinia._p.forEach((extender) => {
		assign(store, scope.run(() => extender({
			store,
			app: pinia._a,
			pinia,
			options: optionsForPlugin
		})));
	});
	if (initialState && isOptionsStore && options.hydrate) options.hydrate(store.$state, initialState);
	isListening = true;
	isSyncListening = true;
	return store;
}
/*! #__NO_SIDE_EFFECTS__ */
function defineStore(id, setup, setupOptions) {
	let options;
	const isSetupStore = typeof setup === "function";
	options = isSetupStore ? setupOptions : setup;
	function useStore(pinia, hot) {
		const hasContext = hasInjectionContext();
		pinia = pinia || (hasContext ? inject(piniaSymbol, null) : null);
		if (pinia) setActivePinia(pinia);
		pinia = activePinia;
		if (!pinia._s.has(id)) {
			if (isSetupStore) createSetupStore(id, setup, options, pinia);
			else createOptionsStore(id, options, pinia);
		}
		return pinia._s.get(id);
	}
	useStore.$id = id;
	return useStore;
}
/**
* Creates an object of references with all the state, getters, and plugin-added
* state properties of the store. Similar to `toRefs()` but specifically
* designed for Pinia stores so methods and non reactive properties are
* completely ignored.
*
* @param store - store to extract the refs from
*/
function storeToRefs(store) {
	const rawStore = toRaw(store);
	const refs = {};
	for (const key in rawStore) {
		const value = rawStore[key];
		if (value.effect) refs[key] = computed({
			get: () => store[key],
			set(value) {
				store[key] = value;
			}
		});
		else if (isRef(value) || isReactive(value)) refs[key] = toRef(store, key);
	}
	return refs;
}
//#endregion
//#region src/renderer/src/stores/theme.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
var useThemeStore = defineStore("theme", () => {
	const THEME_KEY = "theme";
	const manualTheme = ref(localStorage.getItem(THEME_KEY) || "system");
	const osThemeRef = useOsTheme();
	const themeUI = computed(() => {
		if (manualTheme.value === "dark") return darkTheme;
		else if (manualTheme.value === "light") return lightTheme;
		if (osThemeRef.value === "dark") return darkTheme;
		else return lightTheme;
	});
	const theme = computed(() => {
		if (manualTheme.value === "dark") return "dark";
		else if (manualTheme.value === "light") return "light";
		return osThemeRef.value || "light";
	});
	const applyDataTheme = (currentTheme) => {
		document.documentElement.setAttribute("data-theme", currentTheme);
	};
	const setTheme = (newTheme) => {
		window?.api?.common?.setTheme(newTheme);
		if (newTheme === "system") {
			localStorage.removeItem(THEME_KEY);
			manualTheme.value = "system";
		} else {
			localStorage.setItem(THEME_KEY, newTheme);
			manualTheme.value = newTheme;
		}
	};
	watch(theme, (currentTheme) => {
		applyDataTheme(currentTheme);
	}, { immediate: true });
	return {
		themeUI,
		theme,
		setTheme
	};
});
//#endregion
//#region src/renderer/src/App.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler();
//#endregion
//#region src/renderer/src/App.vue
var App_default = /* @__PURE__ */ defineComponent({
	__name: "App",
	setup(__props) {
		const router = useRouter();
		if (computed(() => window.isWeb).value) {
			const apiStorage = window.localStorage.getItem("api");
			const keyStorage = window.localStorage.getItem("key");
			if (apiStorage && keyStorage) {} else router.push({ name: "Login" });
		}
		const instance = getCurrentInstance();
		if (instance) {
			console.log(instance.appContext.app);
			provide("currentApp", instance.appContext.app);
		}
		const themeStore = useThemeStore();
		return (_ctx, _cache) => {
			const _component_router_view = resolveComponent("router-view");
			const _component_n_dialog_provider = NDialogProvider;
			const _component_n_message_provider = MessageProvider_default;
			const _component_n_notification_provider = NotificationProvider_default;
			const _component_n_config_provider = ConfigProvider_default;
			return openBlock(), createBlock(_component_n_config_provider, {
				theme: unref(themeStore).themeUI,
				locale: unref(zhCN$1),
				"date-locale": unref(dateZhCN)
			}, {
				default: withCtx(() => [createVNode(_component_n_notification_provider, null, {
					default: withCtx(() => [createVNode(_component_n_message_provider, null, {
						default: withCtx(() => [createVNode(_component_n_dialog_provider, null, {
							default: withCtx(() => [createVNode(_component_router_view)]),
							_: 1
						})]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"theme",
				"locale",
				"date-locale"
			]);
		};
	}
});
//#endregion
//#region ../../node_modules/.pnpm/path-unified@0.2.0/node_modules/path-unified/src/isWindows.js
/**
* @returns {boolean}
*/
var isWindows = () => {
	if (typeof window === "object") return window.navigator.userAgentData?.platform === "Windows" || window.navigator.userAgent.includes("Windows");
	return process?.platform === "win32";
};
isWindows();
//#endregion
//#region ../../node_modules/.pnpm/path-unified@0.2.0/node_modules/path-unified/src/validators.js
/**
* Create a list string in the form like 'A and B' or 'A, B, ..., and Z'.
* We cannot use Intl.ListFormat because it's not available in
* --without-intl builds.
* @param {string[]} array An array of strings.
* @param {string} [type] The list type to be inserted before the last element.
* @returns {string}
*/
function formatList(array, type = "and") {
	switch (array.length) {
		case 0: return "";
		case 1: return `${array[0]}`;
		case 2: return `${array[0]} ${type} ${array[1]}`;
		case 3: return `${array[0]}, ${array[1]}, ${type} ${array[2]}`;
		default: return `${array.slice(0, -1).join(", ")}, ${type} ${array[array.length - 1]}`;
	}
}
var kTypes = [
	"string",
	"function",
	"number",
	"object",
	"Function",
	"Object",
	"boolean",
	"bigint",
	"symbol"
];
var classRegExp = /^[A-Z][a-zA-Z0-9]*$/;
/**
* @param {string} name
* @param {string|string[]} expected
* @param {*} actual
*/
function getMessage(name, expected, actual) {
	if (!Array.isArray(expected)) expected = [expected];
	let msg = "The ";
	if (name.endsWith(" argument")) msg += `${name} `;
	else {
		const type = name.includes(".") ? "property" : "argument";
		msg += `"${name}" ${type} `;
	}
	msg += "must be ";
	const types = [];
	const instances = [];
	const other = [];
	for (const value of expected) if (kTypes.includes(value)) types.push(value.toLowerCase());
	else if (classRegExp.exec(value) !== null) instances.push(value);
	else other.push(value);
	if (instances.length > 0) {
		const pos = types.indexOf("object");
		if (pos !== -1) {
			types.splice(pos, 1);
			instances.push("Object");
		}
	}
	if (types.length > 0) {
		msg += `${types.length > 1 ? "one of type" : "of type"} ${formatList(types, "or")}`;
		if (instances.length > 0 || other.length > 0) msg += " or ";
	}
	if (instances.length > 0) {
		msg += `an instance of ${formatList(instances, "or")}`;
		if (other.length > 0) msg += " or ";
	}
	if (other.length > 0) {
		if (other.length > 1) msg += `one of ${formatList(other, "or")}`;
		else {
			if (other[0].toLowerCase() !== other[0]) msg += "an ";
			msg += `${other[0]}`;
		}
	}
	msg += `. Received ${typeof actual}`;
	return msg;
}
/**
* In order not to have to fork too much,
* we're simplifying this node error type
*/
var ERR_INVALID_ARG_TYPE = class extends Error {
	/**
	* @param {string} name
	* @param {string|string[]} expected
	* @param {*} actual
	*/
	constructor(name, expected, actual) {
		const msg = getMessage(name, expected, actual);
		super(msg);
		this.name = "ERR_INVALID_ARG_TYPE";
	}
};
var kValidateObjectNone = 0;
var kValidateObjectAllowNullable = 1;
var kValidateObjectAllowArray = 2;
var kValidateObjectAllowFunction = 4;
/**
* @callback validateObject
* @param {*} value
* @param {string} name
* @param {number} [options]
*/
/** @type {validateObject} */
var validateObject = (value, name, options = kValidateObjectNone) => {
	if (options === kValidateObjectNone) {
		if (value === null || Array.isArray(value)) throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
		if (typeof value !== "object") throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
	} else {
		if ((kValidateObjectAllowNullable & options) === 0 && value === null) throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
		if ((kValidateObjectAllowArray & options) === 0 && Array.isArray(value)) throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
		const throwOnFunction = (kValidateObjectAllowFunction & options) === 0;
		const typeofValue = typeof value;
		if (typeofValue !== "object" && (throwOnFunction || typeofValue !== "function")) throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
	}
};
/**
* @callback validateString
* @param {*} value
* @param {string} name
* @returns {asserts value is string}
*/
/** @type {validateString} */
var validateString = (value, name) => {
	if (typeof value !== "string") throw new ERR_INVALID_ARG_TYPE(name, "string", value);
};
//#endregion
//#region ../../node_modules/.pnpm/path-unified@0.2.0/node_modules/path-unified/src/path.js
/**
* Essentially an ESM copy of https://github.com/nodejs/node/blob/v21.5.0/lib/path.js
* Changes:
* - Convert to ESM -> make sure everything is importable as old, and tree-shakeable
* - Hardcopy Node internal/constants, since node does not expose them
* - Refactor primordials usage into just regular methods on String/Function prototype,
*   since node does not expose primordials
*   https://github.com/nodejs/node/pull/40733 was unfortunately closed: "not a common ask"
* - Hardcopy 2 validators from internal/validators, since node does not expose them
* - Use a browser-compatible isWindows check
* - Shim process.cwd() for browser (should return '/')
*/
if (typeof window === "object") {
	if (!window.process) window.process = {};
	window.process.cwd = () => "/";
}
var platformIsWin32$1 = isWindows();
/**
* @param {number} code
* @returns
*/
function isPathSeparator(code) {
	return code === 47 || code === 92;
}
/**
* @param {number} code
* @returns
*/
function isPosixPathSeparator(code) {
	return code === 47;
}
/**
* @param {number} code
* @returns
*/
function isWindowsDeviceRoot(code) {
	return code >= 65 && code <= 90 || code >= 97 && code <= 122;
}
/**
* Resolves . and .. elements in a path with directory names
* @param {string} path
* @param {boolean} allowAboveRoot
* @param {string} separator
* @param {(num: number) => boolean} isPathSeparator
* @returns
*/
function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
	let res = "";
	let lastSegmentLength = 0;
	let lastSlash = -1;
	let dots = 0;
	let code = 0;
	for (let i = 0; i <= path.length; ++i) {
		if (i < path.length) code = path.charCodeAt(i);
		else if (isPathSeparator(code)) break;
		else code = 47;
		if (isPathSeparator(code)) {
			if (lastSlash === i - 1 || dots === 1) {} else if (dots === 2) {
				if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
					if (res.length > 2) {
						const lastSlashIndex = res.lastIndexOf(separator);
						if (lastSlashIndex === -1) {
							res = "";
							lastSegmentLength = 0;
						} else {
							res = res.slice(0, lastSlashIndex);
							lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
						}
						lastSlash = i;
						dots = 0;
						continue;
					} else if (res.length !== 0) {
						res = "";
						lastSegmentLength = 0;
						lastSlash = i;
						dots = 0;
						continue;
					}
				}
				if (allowAboveRoot) {
					res += res.length > 0 ? `${separator}..` : "..";
					lastSegmentLength = 2;
				}
			} else {
				if (res.length > 0) res += `${separator}${path.slice(lastSlash + 1, i)}`;
				else res = path.slice(lastSlash + 1, i);
				lastSegmentLength = i - lastSlash - 1;
			}
			lastSlash = i;
			dots = 0;
		} else if (code === 46 && dots !== -1) ++dots;
		else dots = -1;
	}
	return res;
}
/**
* @param {string} [ext]
* @returns
*/
function formatExt(ext) {
	return ext ? `${ext[0] === "." ? "" : "."}${ext}` : "";
}
/**
* @param {string} sep
* @param {{
*  dir?: string;
*  root?: string;
*  base?: string;
*  name?: string;
*  ext?: string;
*  }} pathObject
* @returns {string}
*/
function _format(sep, pathObject) {
	validateObject(pathObject, "pathObject");
	const dir = pathObject.dir || pathObject.root;
	const base = pathObject.base || `${pathObject.name || ""}${formatExt(pathObject.ext)}`;
	if (!dir) return base;
	return dir === pathObject.root ? `${dir}${base}` : `${dir}${sep}${base}`;
}
/**
* path.resolve([from ...], to)
* @param {...string} args
* @returns {string}
*/
function winResolve(...args) {
	let resolvedDevice = "";
	let resolvedTail = "";
	let resolvedAbsolute = false;
	for (let i = args.length - 1; i >= -1; i--) {
		let path;
		if (i >= 0) {
			path = args[i];
			validateString(path, `paths[${i}]`);
			if (path.length === 0) continue;
		} else if (resolvedDevice.length === 0) path = process.cwd();
		else {
			path = {}[`=${resolvedDevice}`] || process.cwd();
			if (path === void 0 || path.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() && path.charCodeAt(2) === 92) path = `${resolvedDevice}\\`;
		}
		const len = path.length;
		let rootEnd = 0;
		let device = "";
		let isAbsolute = false;
		const code = path.charCodeAt(0);
		if (len === 1) {
			if (isPathSeparator(code)) {
				rootEnd = 1;
				isAbsolute = true;
			}
		} else if (isPathSeparator(code)) {
			isAbsolute = true;
			if (isPathSeparator(path.charCodeAt(1))) {
				let j = 2;
				let last = j;
				while (j < len && !isPathSeparator(path.charCodeAt(j))) j++;
				if (j < len && j !== last) {
					const firstPart = path.slice(last, j);
					last = j;
					while (j < len && isPathSeparator(path.charCodeAt(j))) j++;
					if (j < len && j !== last) {
						last = j;
						while (j < len && !isPathSeparator(path.charCodeAt(j))) j++;
						if (j === len || j !== last) {
							device = `\\\\${firstPart}\\${path.slice(last, j)}`;
							rootEnd = j;
						}
					}
				}
			} else rootEnd = 1;
		} else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === 58) {
			device = path.slice(0, 2);
			rootEnd = 2;
			if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
				isAbsolute = true;
				rootEnd = 3;
			}
		}
		if (device.length > 0) {
			if (resolvedDevice.length > 0) {
				if (device.toLowerCase() !== resolvedDevice.toLowerCase()) continue;
			} else resolvedDevice = device;
		}
		if (resolvedAbsolute) {
			if (resolvedDevice.length > 0) break;
		} else {
			resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
			resolvedAbsolute = isAbsolute;
			if (isAbsolute && resolvedDevice.length > 0) break;
		}
	}
	resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
	return resolvedAbsolute ? `${resolvedDevice}\\${resolvedTail}` : `${resolvedDevice}${resolvedTail}` || ".";
}
/**
* @param {string} path
* @returns {string}
*/
function winNormalize(path) {
	validateString(path, "path");
	const len = path.length;
	if (len === 0) return ".";
	let rootEnd = 0;
	let device;
	let isAbsolute = false;
	const code = path.charCodeAt(0);
	if (len === 1) return isPosixPathSeparator(code) ? "\\" : path;
	if (isPathSeparator(code)) {
		isAbsolute = true;
		if (isPathSeparator(path.charCodeAt(1))) {
			let j = 2;
			let last = j;
			while (j < len && !isPathSeparator(path.charCodeAt(j))) j++;
			if (j < len && j !== last) {
				const firstPart = path.slice(last, j);
				last = j;
				while (j < len && isPathSeparator(path.charCodeAt(j))) j++;
				if (j < len && j !== last) {
					last = j;
					while (j < len && !isPathSeparator(path.charCodeAt(j))) j++;
					if (j === len) return `\\\\${firstPart}\\${path.slice(last)}\\`;
					if (j !== last) {
						device = `\\\\${firstPart}\\${path.slice(last, j)}`;
						rootEnd = j;
					}
				}
			}
		} else rootEnd = 1;
	} else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === 58) {
		device = path.slice(0, 2);
		rootEnd = 2;
		if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
			isAbsolute = true;
			rootEnd = 3;
		}
	}
	let tail = rootEnd < len ? normalizeString(path.slice(rootEnd), !isAbsolute, "\\", isPathSeparator) : "";
	if (tail.length === 0 && !isAbsolute) tail = ".";
	if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) tail += "\\";
	if (device === void 0) return isAbsolute ? `\\${tail}` : tail;
	return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`;
}
/**
* @param {string} path
* @returns {boolean}
*/
function winIsAbsolute(path) {
	validateString(path, "path");
	const len = path.length;
	if (len === 0) return false;
	const code = path.charCodeAt(0);
	return isPathSeparator(code) || len > 2 && isWindowsDeviceRoot(code) && path.charCodeAt(1) === 58 && isPathSeparator(path.charCodeAt(2));
}
/**
* @param {...string} args
* @returns {string}
*/
function winJoin(...args) {
	if (args.length === 0) return ".";
	let joined;
	let firstPart;
	for (let i = 0; i < args.length; ++i) {
		const arg = args[i];
		validateString(arg, "path");
		if (arg.length > 0) {
			if (joined === void 0) joined = firstPart = arg;
			else joined += `\\${arg}`;
		}
	}
	if (joined === void 0) return ".";
	let needsReplace = true;
	let slashCount = 0;
	if (firstPart !== void 0 && isPathSeparator(firstPart.charCodeAt(0))) {
		++slashCount;
		const firstLen = firstPart.length;
		if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
			++slashCount;
			if (firstLen > 2) {
				if (isPathSeparator(firstPart.charCodeAt(2))) ++slashCount;
				else needsReplace = false;
			}
		}
	}
	if (needsReplace) {
		while (slashCount < joined.length && isPathSeparator(joined.charCodeAt(slashCount))) slashCount++;
		if (slashCount >= 2) joined = `\\${joined.slice(slashCount)}`;
	}
	return winNormalize(joined);
}
/**
* It will solve the relative path from `from` to `to`, for instance
* from = 'C:\\orandea\\test\\aaa'
* to = 'C:\\orandea\\impl\\bbb'
* The output of the function should be: '..\\..\\impl\\bbb'
* @param {string} from
* @param {string} to
* @returns {string}
*/
function winRelative(from, to) {
	validateString(from, "from");
	validateString(to, "to");
	if (from === to) return "";
	const fromOrig = winResolve(from);
	const toOrig = winResolve(to);
	if (fromOrig === toOrig) return "";
	from = fromOrig.toLowerCase();
	to = toOrig.toLowerCase();
	if (from === to) return "";
	let fromStart = 0;
	while (fromStart < from.length && from.charCodeAt(fromStart) === 92) fromStart++;
	let fromEnd = from.length;
	while (fromEnd - 1 > fromStart && from.charCodeAt(fromEnd - 1) === 92) fromEnd--;
	const fromLen = fromEnd - fromStart;
	let toStart = 0;
	while (toStart < to.length && to.charCodeAt(toStart) === 92) toStart++;
	let toEnd = to.length;
	while (toEnd - 1 > toStart && to.charCodeAt(toEnd - 1) === 92) toEnd--;
	const toLen = toEnd - toStart;
	const length = fromLen < toLen ? fromLen : toLen;
	let lastCommonSep = -1;
	let i = 0;
	for (; i < length; i++) {
		const fromCode = from.charCodeAt(fromStart + i);
		if (fromCode !== to.charCodeAt(toStart + i)) break;
		else if (fromCode === 92) lastCommonSep = i;
	}
	if (i !== length) {
		if (lastCommonSep === -1) return toOrig;
	} else {
		if (toLen > length) {
			if (to.charCodeAt(toStart + i) === 92) return toOrig.slice(toStart + i + 1);
			if (i === 2) return toOrig.slice(toStart + i);
		}
		if (fromLen > length) {
			if (from.charCodeAt(fromStart + i) === 92) lastCommonSep = i;
			else if (i === 2) lastCommonSep = 3;
		}
		if (lastCommonSep === -1) lastCommonSep = 0;
	}
	let out = "";
	for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) if (i === fromEnd || from.charCodeAt(i) === 92) out += out.length === 0 ? ".." : "\\..";
	toStart += lastCommonSep;
	if (out.length > 0) return `${out}${toOrig.slice(toStart, toEnd)}`;
	if (toOrig.charCodeAt(toStart) === 92) ++toStart;
	return toOrig.slice(toStart, toEnd);
}
/**
* @param {string} path
* @returns {string}
*/
function winToNamespacedPath(path) {
	if (typeof path !== "string" || path.length === 0) return path;
	const resolvedPath = winResolve(path);
	if (resolvedPath.length <= 2) return path;
	if (resolvedPath.charCodeAt(0) === 92) {
		if (resolvedPath.charCodeAt(1) === 92) {
			const code = resolvedPath.charCodeAt(2);
			if (code !== 63 && code !== 46) return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
		}
	} else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) && resolvedPath.charCodeAt(1) === 58 && resolvedPath.charCodeAt(2) === 92) return `\\\\?\\${resolvedPath}`;
	return path;
}
/**
* @param {string} path
* @returns {string}
*/
function winDirname(path) {
	validateString(path, "path");
	const len = path.length;
	if (len === 0) return ".";
	let rootEnd = -1;
	let offset = 0;
	const code = path.charCodeAt(0);
	if (len === 1) return isPathSeparator(code) ? path : ".";
	if (isPathSeparator(code)) {
		rootEnd = offset = 1;
		if (isPathSeparator(path.charCodeAt(1))) {
			let j = 2;
			let last = j;
			while (j < len && !isPathSeparator(path.charCodeAt(j))) j++;
			if (j < len && j !== last) {
				last = j;
				while (j < len && isPathSeparator(path.charCodeAt(j))) j++;
				if (j < len && j !== last) {
					last = j;
					while (j < len && !isPathSeparator(path.charCodeAt(j))) j++;
					if (j === len) return path;
					if (j !== last) rootEnd = offset = j + 1;
				}
			}
		}
	} else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === 58) {
		rootEnd = len > 2 && isPathSeparator(path.charCodeAt(2)) ? 3 : 2;
		offset = rootEnd;
	}
	let end = -1;
	let matchedSlash = true;
	for (let i = len - 1; i >= offset; --i) if (isPathSeparator(path.charCodeAt(i))) {
		if (!matchedSlash) {
			end = i;
			break;
		}
	} else matchedSlash = false;
	if (end === -1) {
		if (rootEnd === -1) return ".";
		end = rootEnd;
	}
	return path.slice(0, end);
}
/**
* @param {string} path
* @param {string} [suffix]
* @returns {string}
*/
function winBasename(path, suffix) {
	if (suffix !== void 0) validateString(suffix, "ext");
	validateString(path, "path");
	let start = 0;
	let end = -1;
	let matchedSlash = true;
	if (path.length >= 2 && isWindowsDeviceRoot(path.charCodeAt(0)) && path.charCodeAt(1) === 58) start = 2;
	if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path.length) {
		if (suffix === path) return "";
		let extIdx = suffix.length - 1;
		let firstNonSlashEnd = -1;
		for (let i = path.length - 1; i >= start; --i) {
			const code = path.charCodeAt(i);
			if (isPathSeparator(code)) {
				if (!matchedSlash) {
					start = i + 1;
					break;
				}
			} else {
				if (firstNonSlashEnd === -1) {
					matchedSlash = false;
					firstNonSlashEnd = i + 1;
				}
				if (extIdx >= 0) {
					if (code === suffix.charCodeAt(extIdx)) {
						if (--extIdx === -1) end = i;
					} else {
						extIdx = -1;
						end = firstNonSlashEnd;
					}
				}
			}
		}
		if (start === end) end = firstNonSlashEnd;
		else if (end === -1) end = path.length;
		return path.slice(start, end);
	}
	for (let i = path.length - 1; i >= start; --i) if (isPathSeparator(path.charCodeAt(i))) {
		if (!matchedSlash) {
			start = i + 1;
			break;
		}
	} else if (end === -1) {
		matchedSlash = false;
		end = i + 1;
	}
	if (end === -1) return "";
	return path.slice(start, end);
}
/**
* @param {string} path
* @returns {string}
*/
function winExtname(path) {
	validateString(path, "path");
	let start = 0;
	let startDot = -1;
	let startPart = 0;
	let end = -1;
	let matchedSlash = true;
	let preDotState = 0;
	if (path.length >= 2 && path.charCodeAt(1) === 58 && isWindowsDeviceRoot(path.charCodeAt(0))) start = startPart = 2;
	for (let i = path.length - 1; i >= start; --i) {
		const code = path.charCodeAt(i);
		if (isPathSeparator(code)) {
			if (!matchedSlash) {
				startPart = i + 1;
				break;
			}
			continue;
		}
		if (end === -1) {
			matchedSlash = false;
			end = i + 1;
		}
		if (code === 46) {
			if (startDot === -1) startDot = i;
			else if (preDotState !== 1) preDotState = 1;
		} else if (startDot !== -1) preDotState = -1;
	}
	if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
	return path.slice(startDot, end);
}
/**
* @param {string} sep
* @param {{
*  dir?: string;
*  root?: string;
*  base?: string;
*  name?: string;
*  ext?: string;
*  }} pathObject
* @returns {string}
*/
var winFormat = _format.bind(null, "\\");
/**
* @param {string} path
* @returns {{
*  dir: string;
*  root: string;
*  base: string;
*  name: string;
*  ext: string;
*  }}
*/
function winParse(path) {
	validateString(path, "path");
	const ret = {
		root: "",
		dir: "",
		base: "",
		ext: "",
		name: ""
	};
	if (path.length === 0) return ret;
	const len = path.length;
	let rootEnd = 0;
	let code = path.charCodeAt(0);
	if (len === 1) {
		if (isPathSeparator(code)) {
			ret.root = ret.dir = path;
			return ret;
		}
		ret.base = ret.name = path;
		return ret;
	}
	if (isPathSeparator(code)) {
		rootEnd = 1;
		if (isPathSeparator(path.charCodeAt(1))) {
			let j = 2;
			let last = j;
			while (j < len && !isPathSeparator(path.charCodeAt(j))) j++;
			if (j < len && j !== last) {
				last = j;
				while (j < len && isPathSeparator(path.charCodeAt(j))) j++;
				if (j < len && j !== last) {
					last = j;
					while (j < len && !isPathSeparator(path.charCodeAt(j))) j++;
					if (j === len) rootEnd = j;
					else if (j !== last) rootEnd = j + 1;
				}
			}
		}
	} else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === 58) {
		if (len <= 2) {
			ret.root = ret.dir = path;
			return ret;
		}
		rootEnd = 2;
		if (isPathSeparator(path.charCodeAt(2))) {
			if (len === 3) {
				ret.root = ret.dir = path;
				return ret;
			}
			rootEnd = 3;
		}
	}
	if (rootEnd > 0) ret.root = path.slice(0, rootEnd);
	let startDot = -1;
	let startPart = rootEnd;
	let end = -1;
	let matchedSlash = true;
	let i = path.length - 1;
	let preDotState = 0;
	for (; i >= rootEnd; --i) {
		code = path.charCodeAt(i);
		if (isPathSeparator(code)) {
			if (!matchedSlash) {
				startPart = i + 1;
				break;
			}
			continue;
		}
		if (end === -1) {
			matchedSlash = false;
			end = i + 1;
		}
		if (code === 46) {
			if (startDot === -1) startDot = i;
			else if (preDotState !== 1) preDotState = 1;
		} else if (startDot !== -1) preDotState = -1;
	}
	if (end !== -1) {
		if (startDot === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) ret.base = ret.name = path.slice(startPart, end);
		else {
			ret.name = path.slice(startPart, startDot);
			ret.base = path.slice(startPart, end);
			ret.ext = path.slice(startDot, end);
		}
	}
	if (startPart > 0 && startPart !== rootEnd) ret.dir = path.slice(0, startPart - 1);
	else ret.dir = ret.root;
	return ret;
}
var posixCwd = (() => {
	if (platformIsWin32$1) {
		const regexp = /\\/g;
		return () => {
			const cwd = process.cwd().replace(regexp, "/");
			return cwd.slice(cwd.indexOf("/"));
		};
	}
	return () => process.cwd();
})();
/**
* path.resolve([from ...], to)
* @param {...string} args
* @returns {string}
*/
function posResolve(...args) {
	let resolvedPath = "";
	let resolvedAbsolute = false;
	for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
		const path = i >= 0 ? args[i] : posixCwd();
		validateString(path, `paths[${i}]`);
		if (path.length === 0) continue;
		resolvedPath = `${path}/${resolvedPath}`;
		resolvedAbsolute = path.charCodeAt(0) === 47;
	}
	resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
	if (resolvedAbsolute) return `/${resolvedPath}`;
	return resolvedPath.length > 0 ? resolvedPath : ".";
}
/**
* @param {string} path
* @returns {string}
*/
function posNormalize(path) {
	validateString(path, "path");
	if (path.length === 0) return ".";
	const isAbsolute = path.charCodeAt(0) === 47;
	const trailingSeparator = path.charCodeAt(path.length - 1) === 47;
	path = normalizeString(path, !isAbsolute, "/", isPosixPathSeparator);
	if (path.length === 0) {
		if (isAbsolute) return "/";
		return trailingSeparator ? "./" : ".";
	}
	if (trailingSeparator) path += "/";
	return isAbsolute ? `/${path}` : path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function posIsAbsolute(path) {
	validateString(path, "path");
	return path.length > 0 && path.charCodeAt(0) === 47;
}
/**
* @param {...string} args
* @returns {string}
*/
function posJoin(...args) {
	if (args.length === 0) return ".";
	let joined;
	for (let i = 0; i < args.length; ++i) {
		const arg = args[i];
		validateString(arg, "path");
		if (arg.length > 0) {
			if (joined === void 0) joined = arg;
			else joined += `/${arg}`;
		}
	}
	if (joined === void 0) return ".";
	return posNormalize(joined);
}
/**
* @param {string} from
* @param {string} to
* @returns {string}
*/
function posRelative(from, to) {
	validateString(from, "from");
	validateString(to, "to");
	if (from === to) return "";
	from = posResolve(from);
	to = posResolve(to);
	if (from === to) return "";
	const fromStart = 1;
	const fromEnd = from.length;
	const fromLen = fromEnd - fromStart;
	const toStart = 1;
	const toLen = to.length - toStart;
	const length = fromLen < toLen ? fromLen : toLen;
	let lastCommonSep = -1;
	let i = 0;
	for (; i < length; i++) {
		const fromCode = from.charCodeAt(fromStart + i);
		if (fromCode !== to.charCodeAt(toStart + i)) break;
		else if (fromCode === 47) lastCommonSep = i;
	}
	if (i === length) {
		if (toLen > length) {
			if (to.charCodeAt(toStart + i) === 47) return to.slice(toStart + i + 1);
			if (i === 0) return to.slice(toStart + i);
		} else if (fromLen > length) {
			if (from.charCodeAt(fromStart + i) === 47) lastCommonSep = i;
			else if (i === 0) lastCommonSep = 0;
		}
	}
	let out = "";
	for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) if (i === fromEnd || from.charCodeAt(i) === 47) out += out.length === 0 ? ".." : "/..";
	return `${out}${to.slice(toStart + lastCommonSep)}`;
}
/**
* @param {string} path
* @returns {string}
*/
function posToNamespacedPath(path) {
	return path;
}
/**
* @param {string} path
* @returns {string}
*/
function posDirname(path) {
	validateString(path, "path");
	if (path.length === 0) return ".";
	const hasRoot = path.charCodeAt(0) === 47;
	let end = -1;
	let matchedSlash = true;
	for (let i = path.length - 1; i >= 1; --i) if (path.charCodeAt(i) === 47) {
		if (!matchedSlash) {
			end = i;
			break;
		}
	} else matchedSlash = false;
	if (end === -1) return hasRoot ? "/" : ".";
	if (hasRoot && end === 1) return "//";
	return path.slice(0, end);
}
/**
* @param {string} path
* @param {string} [suffix]
* @returns {string}
*/
function posBasename(path, suffix) {
	if (suffix !== void 0) validateString(suffix, "ext");
	validateString(path, "path");
	let start = 0;
	let end = -1;
	let matchedSlash = true;
	if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path.length) {
		if (suffix === path) return "";
		let extIdx = suffix.length - 1;
		let firstNonSlashEnd = -1;
		for (let i = path.length - 1; i >= 0; --i) {
			const code = path.charCodeAt(i);
			if (code === 47) {
				if (!matchedSlash) {
					start = i + 1;
					break;
				}
			} else {
				if (firstNonSlashEnd === -1) {
					matchedSlash = false;
					firstNonSlashEnd = i + 1;
				}
				if (extIdx >= 0) {
					if (code === suffix.charCodeAt(extIdx)) {
						if (--extIdx === -1) end = i;
					} else {
						extIdx = -1;
						end = firstNonSlashEnd;
					}
				}
			}
		}
		if (start === end) end = firstNonSlashEnd;
		else if (end === -1) end = path.length;
		return path.slice(start, end);
	}
	for (let i = path.length - 1; i >= 0; --i) if (path.charCodeAt(i) === 47) {
		if (!matchedSlash) {
			start = i + 1;
			break;
		}
	} else if (end === -1) {
		matchedSlash = false;
		end = i + 1;
	}
	if (end === -1) return "";
	return path.slice(start, end);
}
/**
* @param {string} path
* @returns {string}
*/
function posExtname(path) {
	validateString(path, "path");
	let startDot = -1;
	let startPart = 0;
	let end = -1;
	let matchedSlash = true;
	let preDotState = 0;
	for (let i = path.length - 1; i >= 0; --i) {
		const code = path.charCodeAt(i);
		if (code === 47) {
			if (!matchedSlash) {
				startPart = i + 1;
				break;
			}
			continue;
		}
		if (end === -1) {
			matchedSlash = false;
			end = i + 1;
		}
		if (code === 46) {
			if (startDot === -1) startDot = i;
			else if (preDotState !== 1) preDotState = 1;
		} else if (startDot !== -1) preDotState = -1;
	}
	if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
	return path.slice(startDot, end);
}
/**
* @param {string} sep
* @param {{
*  dir?: string;
*  root?: string;
*  base?: string;
*  name?: string;
*  ext?: string;
*  }} pathObject
* @returns {string}
*/
var posFormat = _format.bind(null, "/");
/**
* @param {string} path
* @returns {{
*   dir: string;
*   root: string;
*   base: string;
*   name: string;
*   ext: string;
*   }}
*/
function posParse(path) {
	validateString(path, "path");
	const ret = {
		root: "",
		dir: "",
		base: "",
		ext: "",
		name: ""
	};
	if (path.length === 0) return ret;
	const isAbsolute = path.charCodeAt(0) === 47;
	let start;
	if (isAbsolute) {
		ret.root = "/";
		start = 1;
	} else start = 0;
	let startDot = -1;
	let startPart = 0;
	let end = -1;
	let matchedSlash = true;
	let i = path.length - 1;
	let preDotState = 0;
	for (; i >= start; --i) {
		const code = path.charCodeAt(i);
		if (code === 47) {
			if (!matchedSlash) {
				startPart = i + 1;
				break;
			}
			continue;
		}
		if (end === -1) {
			matchedSlash = false;
			end = i + 1;
		}
		if (code === 46) {
			if (startDot === -1) startDot = i;
			else if (preDotState !== 1) preDotState = 1;
		} else if (startDot !== -1) preDotState = -1;
	}
	if (end !== -1) {
		const start = startPart === 0 && isAbsolute ? 1 : startPart;
		if (startDot === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) ret.base = ret.name = path.slice(start, end);
		else {
			ret.name = path.slice(start, startDot);
			ret.base = path.slice(start, end);
			ret.ext = path.slice(startDot, end);
		}
	}
	if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
	else if (isAbsolute) ret.dir = "/";
	return ret;
}
var __win32$1 = {
	resolve: winResolve,
	normalize: winNormalize,
	isAbsolute: winIsAbsolute,
	join: winJoin,
	relative: winRelative,
	toNamespacedPath: winToNamespacedPath,
	dirname: winDirname,
	basename: winBasename,
	extname: winExtname,
	format: winFormat,
	parse: winParse,
	sep: "\\",
	delimiter: ";"
};
var __posix$1 = {
	resolve: posResolve,
	normalize: posNormalize,
	isAbsolute: posIsAbsolute,
	join: posJoin,
	relative: posRelative,
	toNamespacedPath: posToNamespacedPath,
	dirname: posDirname,
	basename: posBasename,
	extname: posExtname,
	format: posFormat,
	parse: posParse,
	sep: "/",
	delimiter: ":"
};
({ ...__win32$1 });
({ ...__posix$1 });
//#endregion
//#region ../../node_modules/.pnpm/path-unified@0.2.0/node_modules/path-unified/src/index.js
var platformIsWin32 = isWindows();
var __win32 = {
	resolve: winResolve,
	normalize: winNormalize,
	isAbsolute: winIsAbsolute,
	join: winJoin,
	relative: winRelative,
	toNamespacedPath: winToNamespacedPath,
	dirname: winDirname,
	basename: winBasename,
	extname: winExtname,
	format: winFormat,
	parse: winParse,
	sep: "\\",
	delimiter: ";"
};
var __posix = {
	resolve: posResolve,
	normalize: posNormalize,
	isAbsolute: posIsAbsolute,
	join: posJoin,
	relative: posRelative,
	toNamespacedPath: posToNamespacedPath,
	dirname: posDirname,
	basename: posBasename,
	extname: posExtname,
	format: posFormat,
	parse: posParse,
	sep: "/",
	delimiter: ":"
};
var win32 = {
	...__win32,
	posix: __posix,
	win32: __win32
};
var posix = {
	...__posix,
	posix: __posix,
	win32: __win32
};
var src_default = platformIsWin32 ? win32 : posix;
//#endregion
//#region ../../node_modules/.pnpm/@imengyu+vue3-context-menu@1.5.2/node_modules/@imengyu/vue3-context-menu/lib/vue3-context-menu.es.js
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var le$1 = null;
function ht() {
	return le$1 !== null;
}
function mt(e) {
	le$1 && ot(), le$1 = e;
}
function Ke(e) {
	e === le$1 && (le$1 = null);
}
function ot() {
	le$1 && (le$1.closeMenu(), le$1 = null);
}
var ee$1 = {
	defaultDirection: "br",
	defaultMinWidth: 100,
	defaultMaxWidth: 600,
	defaultZindex: 100,
	defaultZoom: 1,
	defaultAdjustPadding: {
		x: 0,
		y: 10
	}
};
function se$1(e, o) {
	let s = e.offsetTop;
	return e.offsetParent != null && e.offsetParent != o && (s -= e.offsetParent.scrollTop, s += se$1(e.offsetParent, o)), s;
}
function ue$1(e, o) {
	let s = e.offsetLeft;
	return e.offsetParent != null && e.offsetParent != o && (s -= e.offsetParent.scrollLeft, s += ue$1(e.offsetParent, o)), s;
}
function pt(e, o, s, u) {
	return {
		x: ue$1(e, u) + o,
		y: se$1(e, u) + s
	};
}
var We = "mx-menu-default-container";
var gt = "mx-menu-container-";
var bt = 0;
function lt(e) {
	const { getContainer: o, zIndex: s } = e;
	if (o) {
		const v = typeof o == "function" ? o() : o;
		if (v) {
			let n = v.getAttribute("id");
			return n || (n = gt + bt++, v.setAttribute("id", n)), {
				eleId: n,
				container: v,
				isNew: !1
			};
		}
	}
	let u = document.getElementById(We);
	return u || (u = document.createElement("div"), u.setAttribute("id", We), u.setAttribute("class", "mx-menu-ghost-host fullscreen"), document.body.appendChild(u)), u.style.zIndex = (s == null ? void 0 : s.toString()) || ee$1.defaultZindex.toString(), {
		eleId: We,
		container: u,
		isNew: !0
	};
}
function Ct(e) {
	let o = 0;
	for (let s = 0; s < e.length; s++) {
		const u = e.charCodeAt(s);
		o = (o << 5) - o + u, o |= 0;
	}
	return o;
}
function Ye(e) {
	return typeof e == "number" ? `${e}px` : e;
}
var q$1 = defineComponent({
	props: {
		/**
		* Can be VNode or (data: unknown) => VNode
		*/
		vnode: { type: null },
		/**
		* If vnode is a callback, this data will be passed to the callback first parameter.
		* @default null
		*/
		data: {
			type: null,
			default: null
		}
	},
	setup(e) {
		const { vnode: o, data: s } = toRefs(e);
		return () => typeof o.value == "function" ? o.value(s.value) : o.value;
	}
});
function yt(e, o) {
	const s = { ...e };
	return delete s[o], s;
}
var xt = Object.defineProperty;
var Mt = (e, o, s) => o in e ? xt(e, o, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: s
}) : e[o] = s;
var Ve = (e, o, s) => Mt(e, typeof o != "symbol" ? o + "" : o, s);
var Ue = class {
	constructor(o, s) {
		Ve(this, "x", 0), Ve(this, "y", 0), this.x = o || 0, this.y = s || 0;
	}
	set(o, s) {
		this.x = o, this.y = s;
	}
	substract(o) {
		this.x -= o.x, this.y -= o.y;
	}
};
function Xe(e) {
	const { onDown: o, onMove: s, onUp: u } = e, v = new Ue(), n = new Ue();
	let _;
	function d(h) {
		h.stopPropagation(), n.set(h.x, h.y), n.substract(v), s(v, n, h, _);
	}
	function p(h) {
		u(h, _), v.set(0, 0), document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", p);
	}
	return (h, x) => o(h, x) ? (_ = x, v.set(h.x, h.y), document.addEventListener("mousemove", d), document.addEventListener("mouseup", p), h.stopPropagation(), !0) : !1;
}
function kt(e, o) {
	let s = 0;
	return {
		start() {
			s > 0 && clearInterval(s), s = setInterval(() => {
				s = 0, o();
			}, e);
		},
		stop() {
			s > 0 && (clearInterval(s), s = 0);
		}
	};
}
var me$1 = [];
var Ze = kt(100, () => {
	for (const e of me$1) e();
});
function St(e, o, s, u) {
	let v = 0, n = 0;
	function _() {
		e.value && (o && v !== e.value.offsetWidth && o(e.value.offsetWidth), s && n !== e.value.offsetHeight && s(e.value.offsetHeight), u && (v !== e.value.offsetWidth || n !== e.value.offsetHeight) && u(e.value.offsetWidth, e.value.offsetHeight), v = e.value.offsetWidth, n = e.value.offsetHeight);
	}
	return {
		startResizeChecker() {
			Ze.start(), me$1.push(_);
		},
		stopResizeChecker() {
			const d = me$1.indexOf(_);
			d >= 0 && me$1.splice(d, 1), me$1.length === 0 && Ze.stop();
		}
	};
}
var Ge = 140;
var wt = 70;
var It = /* @__PURE__ */ defineComponent({
	__name: "ScrollRect",
	props: {
		/**
		* Scroll direction
		* 
		* * both : Scroll in both directions
		* * vertical : Scroll only in vertical direction
		* * horizontal : Scroll only in horizontal direction
		* * none : Disable scroll
		* 
		* @default both
		*/
		scroll: {
			type: String,
			default: "both"
		},
		/**
		* Show scroll bar always, otherwise show scroll bar when mouse over
		* @default false
		*/
		scrollBarAlwaysShow: {
			type: Boolean,
			default: !1
		},
		/**
		* Is able to click scroll bar background to set scroll position? (When `scrollBarAlwaysShow` is true)
		* @default true
		*/
		scrollBarBackgroundClickable: {
			type: Boolean,
			default: !1
		},
		height: {
			type: Number,
			default: void 0
		},
		width: {
			type: Number,
			default: void 0
		},
		/**
		* 
		*/
		maxHeight: {
			type: Number,
			default: void 0
		},
		maxWidth: {
			type: Number,
			default: void 0
		},
		/**
		* CSS class of inner container
		*/
		containerClass: {
			type: String,
			default: ""
		},
		/**
		* Container style
		*/
		containerStyle: { type: null }
	},
	emits: ["scroll", "resized"],
	setup(e, { expose: o, emit: s }) {
		const u = e, v = s, n = ref(), _ = ref(), d = ref(), p = ref(), h = ref(), x = ref(), B = ref(!1), L = computed(() => u.scroll === "horizontal" || u.scroll === "both"), S = computed(() => u.scroll === "vertical" || u.scroll === "both"), M = reactive({
			show: !1,
			size: 0,
			sizeRaw: 0,
			pos: 0
		}), k = reactive({
			show: !1,
			size: 0,
			sizeRaw: 0,
			pos: 0
		});
		let H = 0, r = 0, f = 0, C = 0, y = null;
		const I = {
			attributes: !0,
			childList: !0
		};
		function i() {
			if (n.value) {
				if (M.show) {
					const t = n.value.offsetWidth / n.value.scrollWidth;
					M.sizeRaw = t * n.value.offsetWidth, M.size = t * 100, M.pos = n.value.scrollLeft / (n.value.scrollWidth - n.value.offsetWidth) * (100 - M.size), t >= 1 && (M.show = !1);
				}
				if (k.show) {
					const t = n.value.offsetHeight / n.value.scrollHeight;
					k.sizeRaw = t * n.value.offsetHeight, k.size = t * 100, k.pos = n.value.scrollTop / (n.value.scrollHeight - n.value.offsetHeight) * (100 - k.size), t >= 1 && (k.show = !1);
				}
				v("scroll", n.value.scrollLeft, n.value.scrollTop);
			}
		}
		function g(t = !1) {
			if (!n.value) return;
			let c = L.value, m = S.value;
			const a = c && (H !== n.value.scrollWidth || f !== n.value.offsetWidth), de = S && (r !== n.value.scrollHeight || C !== n.value.offsetHeight);
			if (!t && !a && !de) return;
			const j = window.getComputedStyle(n.value);
			(j.overflow === "hidden" || j.overflowX === "hidden") && (c = !1), (j.overflow === "hidden" || j.overflowY === "hidden") && (m = !1), M.show = c, k.show = m, i(), f = n.value.offsetWidth, C = n.value.offsetHeight, H = n.value.scrollWidth, r = n.value.scrollHeight, v("resized", H, r);
		}
		function K(t) {
			var c;
			u.scroll == "horizontal" && (t.deltaMode == 0 && ((c = n.value) == null || c.scrollTo({
				left: n.value.scrollLeft + (t.deltaY > 0 ? Ge : -140),
				behavior: "smooth"
			})), t.preventDefault(), t.stopPropagation());
		}
		function R(t) {
			var c;
			t.deltaMode == 0 && ((c = n.value) == null || c.scrollTo({
				left: n.value.scrollLeft + (t.deltaY > 0 ? Ge : -140),
				behavior: "smooth"
			}), t.preventDefault(), t.stopPropagation());
		}
		function N(t) {
			var c;
			t.deltaMode == 0 && ((c = n.value) == null || c.scrollTo({
				top: n.value.scrollTop + (t.deltaY > 0 ? wt : -70),
				behavior: "smooth"
			}), t.preventDefault(), t.stopPropagation());
		}
		let V = 0, U = 0, A = 0, w = 0;
		const $ = Xe({
			onDown(t) {
				return !d.value || !h.value ? !1 : (V = t.offsetX, U = t.x - t.offsetX - h.value.offsetLeft, t.preventDefault(), B.value = !0, !0);
			},
			onMove(t, c, m) {
				n.value && d.value && (Q(m.x - V - U), m.preventDefault(), m.stopPropagation());
			},
			onUp() {
				B.value = !1;
			}
		}), Z = Xe({
			onDown(t) {
				return !p.value || !x.value ? !1 : (A = t.offsetY, w = t.y - t.offsetY - x.value.offsetTop, t.preventDefault(), B.value = !0, !0);
			},
			onMove(t, c, m) {
				n.value && p.value && (ne(m.y - A - w), m.preventDefault(), m.stopPropagation());
			},
			onUp() {
				B.value = !1;
			}
		});
		function Y(t) {
			n.value && (n.value.scrollLeft = t / 100 * (n.value.scrollWidth - n.value.offsetWidth));
		}
		function G(t) {
			n.value && (n.value.scrollLeft = t / 100 * (n.value.scrollHeight - n.value.offsetHeight));
		}
		function Q(t) {
			n.value && (n.value.scrollLeft = t / (n.value.offsetWidth - M.sizeRaw) * (n.value.scrollWidth - n.value.offsetWidth));
		}
		function ne(t) {
			n.value && (n.value.scrollTop = t / (n.value.offsetHeight - k.sizeRaw) * (n.value.scrollHeight - n.value.offsetHeight));
		}
		function O(t) {
			u.scrollBarBackgroundClickable && Q(t.offsetX - M.sizeRaw / 2);
		}
		function ce(t) {
			u.scrollBarBackgroundClickable && ne(t.offsetY - k.sizeRaw / 2);
		}
		const { startResizeChecker: Fe, stopResizeChecker: Ce } = St(n, () => g(), () => g());
		return onMounted(() => {
			nextTick(() => {
				setTimeout(() => g(!0), 200), g(!0), Fe(), y = new MutationObserver(() => g()), y.observe(n.value, I);
			});
		}), onBeforeUnmount(() => {
			Ce(), y && (y.disconnect(), y = null);
		}), o({
			refreshScrollState() {
				g(!0);
			},
			getScrollContainer() {
				return n.value;
			},
			scrollTo(t, c) {
				var m;
				(m = n.value) == null || m.scrollTo(t, c);
			},
			scrollToTop() {
				var t;
				(t = n.value) == null || t.scrollTo(0, 0);
			},
			scrollToBottom() {
				var t;
				(t = n.value) == null || t.scrollTo(n.value.scrollWidth, n.value.scrollHeight);
			}
		}), (t, c) => (openBlock(), createElementBlock("div", {
			ref_key: "scrollrect",
			ref: _,
			class: normalizeClass([
				"vue-scroll-rect",
				e.scrollBarAlwaysShow ? "always-show-scrollbar" : "",
				e.scrollBarBackgroundClickable ? "background-clickable" : "",
				B.value ? "dragging" : ""
			]),
			style: normalizeStyle({
				width: e.width ? `${e.width}px` : void 0,
				height: e.height ? `${e.height}px` : void 0
			}),
			onWheel: K
		}, [
			createBaseVNode("div", {
				ref_key: "container",
				ref: n,
				class: normalizeClass([
					"scroll-content",
					e.scroll,
					e.containerClass
				]),
				style: normalizeStyle({
					maxWidth: e.maxWidth ? `${e.maxWidth}px` : void 0,
					maxHeight: e.maxHeight ? `${e.maxHeight}px` : void 0,
					...e.containerStyle
				}),
				onScroll: i
			}, [renderSlot(t.$slots, "default")], 38),
			M.show ? renderSlot(t.$slots, "scrollBarX", {
				key: 0,
				scrollBarValue: M,
				onScroll: Y
			}, () => [createBaseVNode("div", {
				ref_key: "scrollBarRefX",
				ref: d,
				class: "scrollbar horizontal",
				onClick: O,
				onWheel: R
			}, [createBaseVNode("div", {
				class: "thumb",
				ref_key: "scrollBarThumbRefX",
				ref: h,
				style: normalizeStyle({
					left: `${M.pos}%`,
					width: `${M.size}%`
				}),
				onMousedown: c[0] || (c[0] = (...m) => unref($) && unref($)(...m)),
				onWheel: R
			}, null, 36)], 544)]) : createCommentVNode("", !0),
			k.show ? renderSlot(t.$slots, "scrollBarY", {
				key: 1,
				scrollBarValue: k,
				onScroll: G
			}, () => [k.show ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "scrollBarRefY",
				ref: p,
				class: "scrollbar vertical",
				onClick: ce,
				onWheel: N
			}, [createBaseVNode("div", {
				class: "thumb",
				ref_key: "scrollBarThumbRefY",
				ref: x,
				style: normalizeStyle({
					top: `${k.pos}%`,
					height: `${k.size}%`
				}),
				onMousedown: c[1] || (c[1] = (...m) => unref(Z) && unref(Z)(...m)),
				onWheel: N
			}, null, 36)], 544)) : createCommentVNode("", !0)]) : createCommentVNode("", !0)
		], 38));
	}
});
var ke = (e, o) => {
	const s = e.__vccOpts || e;
	for (const [u, v] of o) s[u] = v;
	return s;
};
var Wt = {};
var _t = {
	class: "mx-checked-mark",
	"aria-hidden": "true",
	viewBox: "0 0 1024 1024"
};
var Rt = [/* @__PURE__ */ createBaseVNode("path", { d: "M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z" }, null, -1)];
function Ot(e, o) {
	return openBlock(), createElementBlock("svg", _t, Rt);
}
var Bt = /* @__PURE__ */ ke(Wt, [["render", Ot]]);
var Pt = {};
var $t = {
	class: "mx-right-arrow",
	"aria-hidden": "true",
	viewBox: "0 0 1024 1024"
};
var Ft = [/* @__PURE__ */ createBaseVNode("path", { d: "M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z" }, null, -1)];
function Lt(e, o) {
	return openBlock(), createElementBlock("svg", $t, Ft);
}
var Tt = /* @__PURE__ */ ke(Pt, [["render", Lt]]);
var Et = { class: "mx-item-row" };
var zt = ["xlink:href"];
var jt = {
	key: 1,
	class: "label"
};
var Dt = { class: "mx-item-row" };
var Nt = { class: "mx-shortcut" };
var $e = /* @__PURE__ */ defineComponent({
	__name: "ContextMenuItem",
	props: {
		/**
		* Is this menu disabled? 
		*/
		disabled: {
			type: Boolean,
			default: !1
		},
		/**
		* Is this menu hidden? 
		*/
		hidden: {
			type: Boolean,
			default: !1
		},
		customRender: {
			type: Function,
			default: null
		},
		/**
		* Custom css class for submenu
		*/
		customClass: {
			type: String,
			default: ""
		},
		clickHandler: {
			type: Function,
			default: null
		},
		/**
		* Menu label
		*/
		label: {
			type: [
				String,
				Object,
				Function
			],
			default: ""
		},
		/**
		* Menu icon (for icon class)
		*/
		icon: {
			type: [
				String,
				Object,
				Function
			],
			default: ""
		},
		/**
		* Custom icon library font class name.
		* 
		* Only for css font icon, If you use the svg icon, you do not need to use this.
		*/
		iconFontClass: {
			type: String,
			default: "iconfont"
		},
		/**
		* Is this menu item checked?
		* 
		* The check mark are displayed on the left side of the icon, so it is not recommended to display the icon at the same time.
		*/
		checked: {
			type: Boolean,
			default: !1
		},
		/**
		* Shortcut key text display on the right.
		* 
		* The shortcut keys here are only for display. You need to handle the key events by yourself.
		*/
		shortcut: {
			type: String,
			default: ""
		},
		/**
		* Display icons use svg symbol (`<use xlink:href="#icon-symbol-name">`) ， only valid when icon attribute is empty.
		*/
		svgIcon: {
			type: String,
			default: ""
		},
		/**
		* The user-defined attribute of the svg tag, which is valid when using `svgIcon`.
		*/
		svgProps: {
			type: Object,
			default: null
		},
		/**
		* Should a fixed-width icon area be reserved for menu items without icon. (this item)
		* 
		* Default is true .
		* 
		* The width of icon area can be override with css var `--mx-menu-placeholder-width`.
		*/
		preserveIconWidth: {
			type: Boolean,
			default: !0
		},
		/**
		* Show right arrow on this menu?
		*/
		showRightArrow: {
			type: Boolean,
			default: !1
		},
		hasChildren: {
			type: Boolean,
			default: !1
		},
		/**
		* Should close menu when Click this menu item ?
		*/
		clickClose: {
			type: Boolean,
			default: !0
		},
		/**
		* When there are subitems in this item, is it allowed to trigger its own click event? Default is false
		*/
		clickableWhenHasChildren: {
			type: Boolean,
			default: !1
		},
		rawMenuItem: {
			type: Object,
			default: void 0
		}
	},
	emits: [
		"click",
		"subMenuOpen",
		"subMenuClose"
	],
	setup(e, { expose: o, emit: s }) {
		const u = e, v = s, { clickHandler: n, clickClose: _, clickableWhenHasChildren: d, disabled: p, hidden: h, label: x, icon: B, iconFontClass: L, showRightArrow: S, shortcut: M, hasChildren: k } = toRefs(u), H = ref(!1), r = ref(!1), f = ref(), C = inject("globalOptions"), y = inject("globalHasSlot"), I = inject("globalRenderSlot"), i = inject("globalCloseMenu"), g = inject("menuContext"), K = computed(() => typeof x.value == "string" ? x.value : typeof x.value == "function" ? Ct(x.value.toString()) : "MenuItem[unknow]");
		provide("MenuItemName", K);
		const R = {
			getSubMenuInstance: () => {},
			showSubMenu: () => H.value ? (g.markActiveMenuItem(R, !0), !0) : k.value ? (V(), !0) : !1,
			hideSubMenu: () => {
				g.closeOtherSubMenu();
			},
			isDisabledOrHidden: () => p.value || h.value,
			getElement: () => f.value,
			focus: () => r.value = !0,
			blur: () => r.value = !1,
			click: N
		};
		provide("menuItemInstance", R), onMounted(() => {
			g.isMenuItemDataCollectedFlag() ? nextTick(() => {
				let w = 0;
				const $ = g.getElement();
				if ($) {
					let Z = 0;
					for (let Y = 0; Y < $.children.length; Y++) {
						const G = $.children[Y];
						if (G.getAttribute("data-type") === "ContextMenuItem") {
							if (G === f.value) {
								w = Z;
								break;
							}
							Z++;
						}
					}
				}
				g.addChildMenuItem(R, w);
			}) : g.addChildMenuItem(R);
		}), onBeforeUnmount(() => {
			g.removeChildMenuItem(R);
		});
		function N(w) {
			if (!p.value) {
				if (w) {
					const $ = w.target;
					if ($.classList.contains("mx-context-no-clickable") || C.value.ignoreClickClassName && $.classList.contains(C.value.ignoreClickClassName)) return;
					if (C.value.clickCloseClassName && $.classList.contains(C.value.clickCloseClassName)) {
						w.stopPropagation(), i(u.rawMenuItem);
						return;
					}
				}
				k.value ? d.value ? (typeof n.value == "function" && n.value(w), v("click", w)) : H.value || V() : (typeof n.value == "function" && n.value(w), v("click", w), _.value && i(u.rawMenuItem));
			}
		}
		function V(w) {
			r.value = !1, g.checkCloseOtherSubMenuTimeOut() || g.closeOtherSubMenu(), p.value || (g.markActiveMenuItem(R), k.value && (w || g.markThisOpenedByKeyBoard(), g.addOpenedSubMenu(U), H.value = !0, nextTick(() => v("subMenuOpen", R))));
		}
		function U() {
			r.value = !1, H.value = !1, v("subMenuClose", R);
		}
		function A() {
			return {
				disabled: p.value,
				label: x.value,
				icon: B.value,
				iconFontClass: L.value,
				showRightArrow: S.value,
				clickClose: _.value,
				clickableWhenHasChildren: d.value,
				shortcut: M.value,
				theme: C.value.theme,
				isOpen: H,
				hasChildren: k,
				onClick: N,
				onMouseEnter: V,
				closeMenu: i
			};
		}
		return o(R), (w, $) => unref(h) ? createCommentVNode("", !0) : (openBlock(), createElementBlock("div", {
			key: 0,
			class: "mx-context-menu-item-wrapper",
			ref_key: "menuItemRef",
			ref: f,
			"data-type": "ContextMenuItem"
		}, [unref(y)("itemRender") ? (openBlock(), createBlock(unref(q$1), {
			key: 0,
			vnode: () => unref(I)("itemRender", A())
		}, null, 8, ["vnode"])) : e.customRender ? (openBlock(), createBlock(unref(q$1), {
			key: 1,
			vnode: e.customRender,
			data: A()
		}, null, 8, ["vnode", "data"])) : (openBlock(), createElementBlock("div", {
			key: 2,
			class: normalizeClass([
				"mx-context-menu-item",
				unref(p) ? "disabled" : "",
				r.value ? "keyboard-focus" : "",
				e.customClass ? " " + e.customClass : "",
				H.value ? "open" : ""
			]),
			onClick: N,
			onMouseenter: V
		}, [renderSlot(w.$slots, "default", {}, () => [createBaseVNode("div", Et, [createBaseVNode("div", { class: normalizeClass(["mx-icon-placeholder", e.preserveIconWidth ? "preserve-width" : ""]) }, [renderSlot(w.$slots, "icon", {}, () => [unref(y)("itemIconRender") ? (openBlock(), createBlock(unref(q$1), {
			key: 0,
			vnode: () => unref(I)("itemIconRender", A())
		}, null, 8, ["vnode"])) : typeof e.svgIcon == "string" && e.svgIcon ? (openBlock(), createElementBlock("svg", mergeProps({
			key: 1,
			class: "icon svg"
		}, e.svgProps), [createBaseVNode("use", { "xlink:href": e.svgIcon }, null, 8, zt)], 16)) : typeof unref(B) != "string" ? (openBlock(), createBlock(unref(q$1), {
			key: 2,
			vnode: unref(B),
			data: unref(B)
		}, null, 8, ["vnode", "data"])) : typeof unref(B) == "string" && unref(B) !== "" ? (openBlock(), createElementBlock("i", {
			key: 3,
			class: normalizeClass(unref(B) + " icon " + unref(L) + " " + unref(C).iconFontClass)
		}, null, 2)) : createCommentVNode("", !0)]), e.checked ? renderSlot(w.$slots, "check", { key: 0 }, () => [unref(y)("itemCheckRender") ? (openBlock(), createBlock(unref(q$1), {
			key: 0,
			vnode: () => unref(I)("itemCheckRender", A())
		}, null, 8, ["vnode"])) : createCommentVNode("", !0), createVNode(Bt)]) : createCommentVNode("", !0)], 2), renderSlot(w.$slots, "label", {}, () => [unref(y)("itemLabelRender") ? (openBlock(), createBlock(unref(q$1), {
			key: 0,
			vnode: () => unref(I)("itemLabelRender", A())
		}, null, 8, ["vnode"])) : typeof unref(x) == "string" ? (openBlock(), createElementBlock("span", jt, toDisplayString(unref(x)), 1)) : (openBlock(), createBlock(unref(q$1), {
			key: 2,
			vnode: unref(x),
			data: unref(x)
		}, null, 8, ["vnode", "data"]))])]), createBaseVNode("div", Dt, [unref(M) || w.$slots.shortcut ? renderSlot(w.$slots, "shortcut", { key: 0 }, () => [unref(y)("itemShortcutRender") ? (openBlock(), createBlock(unref(q$1), {
			key: 0,
			vnode: () => unref(I)("itemShortcutRender", A())
		}, null, 8, ["vnode"])) : createCommentVNode("", !0), createBaseVNode("span", Nt, toDisplayString(unref(M)), 1)]) : createCommentVNode("", !0), unref(S) ? renderSlot(w.$slots, "rightArrow", { key: 1 }, () => [unref(y)("itemRightArrowRender") ? (openBlock(), createBlock(unref(q$1), {
			key: 0,
			vnode: () => unref(I)("itemRightArrowRender", A())
		}, null, 8, ["vnode"])) : createCommentVNode("", !0), createVNode(Tt)]) : createCommentVNode("", !0)])])], 34)), renderSlot(w.$slots, "submenu", {
			context: R,
			show: H.value
		})], 512));
	}
});
var Kt = defineComponent({
	name: "ContextMenuSperator",
	components: { VNodeRender: q$1 },
	setup() {
		return {
			globalHasSlot: inject("globalHasSlot"),
			globalRenderSlot: inject("globalRenderSlot")
		};
	}
});
var Yt = {
	key: 1,
	class: "mx-context-menu-item-sperator mx-context-no-clickable"
};
function Vt(e, o, s, u, v, n) {
	const _ = resolveComponent("VNodeRender");
	return e.globalHasSlot("separatorRender") ? (openBlock(), createBlock(_, {
		key: 0,
		vnode: () => e.globalRenderSlot("separatorRender", {})
	}, null, 8, ["vnode"])) : (openBlock(), createElementBlock("div", Yt));
}
var ge$1 = /* @__PURE__ */ ke(Kt, [["render", Vt]]);
var Ae = /* @__PURE__ */ defineComponent({
	__name: "ContextSubMenu",
	props: {
		/**
		* Items from options
		*/
		items: {
			type: Object,
			default: null
		},
		/**
		* Show
		*/
		show: {
			type: Boolean,
			default: !1
		},
		/**
		* Max height for this submenu
		*/
		maxHeight: {
			type: Number,
			default: 0
		},
		/**
		* Max width for this submenu
		*/
		maxWidth: {
			type: [String, Number],
			default: 0
		},
		/**
		* Min width for this submenu
		*/
		minWidth: {
			type: [String, Number],
			default: 0
		},
		/**
		* Specifies should submenu adjust it position
		* when the menu exceeds the screen. The default is true
		*/
		adjustPosition: {
			type: Boolean,
			default: !0
		},
		/**
		* Menu direction
		*/
		direction: {
			type: String,
			default: "br"
		},
		parentMenuItemContext: {
			type: Object,
			default: null
		}
	},
	emits: ["closeAnimFinished"],
	setup(e, { expose: o, emit: s }) {
		const u = e, v = s, n = ref(!1), _ = inject("globalGetMenuHostId", ""), d = inject("menuContext"), p = inject("globalOptions");
		inject("globalHasSlot"), inject("globalRenderSlot");
		const h = ref("UnknowOrRoot"), x = inject("MenuItemName", h), { zIndex: B, getParentWidth: L, getParentHeight: S, getZoom: M } = d, { adjustPosition: k } = toRefs(u), H = ref(), r = ref(), f = ref(), C = [], y = inject("globalSetCurrentSubMenu"), I = [];
		let i = null, g = 0;
		function K() {
			i && i.blur();
		}
		function R(t, c) {
			if (t) {
				for (let m = c !== void 0 ? c : 0; m < I.length; m++) if (!I[m].isDisabledOrHidden()) {
					N(m);
					break;
				}
			} else for (let m = c !== void 0 ? c : I.length - 1; m >= 0; m--) if (!I[m].isDisabledOrHidden()) {
				N(m);
				break;
			}
		}
		function N(t) {
			if (i && K(), t !== void 0 && (i = I[Math.max(0, Math.min(t, I.length - 1))]), !i) return;
			i.focus();
			const c = i.getElement();
			c && c.scrollIntoView({
				behavior: "auto",
				block: "nearest",
				inline: "nearest"
			});
		}
		function V() {
			y(U);
		}
		const U = {
			el: f,
			name: x,
			isTopLevel: () => d.getParentContext() === null,
			closeSelfAndActiveParent: () => {
				const t = $.getParentContext();
				if (t) {
					t.closeOtherSubMenu();
					const c = t.getSubMenuInstanceContext();
					if (c) return c.focusCurrentItem(), !0;
				}
				return !1;
			},
			closeCurrentSubMenu: () => {
				var t;
				return (t = $.getParentContext()) == null ? void 0 : t.closeOtherSubMenu();
			},
			moveCurrentItemFirst: () => R(!0),
			moveCurrentItemLast: () => R(!1),
			moveCurrentItemDown: () => R(!0, i ? I.indexOf(i) + 1 : 0),
			moveCurrentItemUp: () => R(!1, i ? I.indexOf(i) - 1 : 0),
			focusCurrentItem: () => N(),
			openCurrentItemSubMenu: () => i ? i == null ? void 0 : i.showSubMenu() : !1,
			triggerCurrentItemClick: (t) => i == null ? void 0 : i.click(t)
		};
		let A = !1, w = !1;
		const $ = {
			zIndex: B + 1,
			container: d.container,
			adjustPadding: p.value.adjustPadding || ee$1.defaultAdjustPadding,
			getParentWidth: () => {
				var t;
				return ((t = f.value) == null ? void 0 : t.offsetWidth) || 0;
			},
			getParentHeight: () => {
				var t;
				return ((t = f.value) == null ? void 0 : t.offsetHeight) || 0;
			},
			getPositon: () => [O.value.x, O.value.y],
			getZoom: () => p.value.zoom || ee$1.defaultZoom,
			addOpenedSubMenu(t) {
				C.push(t);
			},
			closeOtherSubMenu() {
				C.forEach((t) => t()), C.splice(0, C.length), y(U);
			},
			checkCloseOtherSubMenuTimeOut() {
				return g ? (clearTimeout(g), g = 0, !0) : !1;
			},
			closeOtherSubMenuWithTimeOut() {
				g = setTimeout(() => {
					g = 0, this.closeOtherSubMenu();
				}, 200);
			},
			addChildMenuItem: (t, c) => {
				c === void 0 ? I.push(t) : I.splice(c, 0, t);
			},
			removeChildMenuItem: (t) => {
				I.splice(I.indexOf(t), 1), t.getSubMenuInstance = () => {};
			},
			markActiveMenuItem: (t, c = !1) => {
				K(), i = t, c && N();
			},
			markThisOpenedByKeyBoard: () => {
				A = !0;
			},
			isOpenedByKeyBoardFlag: () => A ? (A = !1, !0) : !1,
			isMenuItemDataCollectedFlag: () => w,
			getElement: () => f.value || null,
			getParentContext: () => d,
			getSubMenuInstanceContext: () => U
		};
		provide("menuContext", $);
		const Z = {
			getChildItem: (t) => I[t],
			getMenuDimensions: () => r.value ? {
				width: r.value.offsetWidth,
				height: r.value.offsetHeight
			} : {
				width: 0,
				height: 0
			},
			getSubmenuRoot: () => r.value,
			getMenu: () => f.value,
			getScrollValue: () => {
				var t, c;
				return ((c = (t = H.value) == null ? void 0 : t.getScrollContainer()) == null ? void 0 : c.scrollTop) || 0;
			},
			setScrollValue: (t) => {
				var c;
				return (c = H.value) == null ? void 0 : c.scrollTo(0, t);
			},
			getScrollHeight: () => G.value,
			adjustPosition: () => {
				ce();
			},
			getMaxHeight: () => Q.value,
			getPosition: () => O.value,
			setPosition: (t, c) => {
				O.value.x = t, O.value.y = c;
			}
		}, Y = inject("menuItemInstance", void 0);
		Y && (Y.getSubMenuInstance = () => Z);
		const G = ref(0), Q = ref(0), ne = ref(!1), O = ref({
			x: 0,
			y: 0
		});
		function ce() {
			nextTick(() => {
				const t = f.value, c = r.value;
				if (t && c && H.value) {
					const { container: m } = d, a = (L == null ? void 0 : L()) ?? 0, de = (S == null ? void 0 : S()) ?? 0, j = getComputedStyle(c), X = parseFloat(j.paddingLeft), fe = parseFloat(j.paddingTop), Se = de > 0 ? fe : 0, ut = document.documentElement.scrollHeight / M(), at = document.documentElement.scrollWidth / M(), it = Math.min(at, m.offsetWidth), Le = Math.min(ut, m.offsetHeight);
					let we = ue$1(t, m), Ie = se$1(t, m);
					u.direction.includes("l") ? O.value.x -= t.offsetWidth + X : u.direction.includes("r") ? O.value.x += a + X : (O.value.x += a / 2, O.value.x -= (t.offsetWidth + X) / 2), u.direction.includes("t") ? O.value.y -= (t.offsetHeight + fe * 2) / M() : u.direction.includes("b") ? O.value.y -= fe / M() : O.value.y -= (t.offsetHeight + fe) / 2 / M(), nextTick(() => {
						var ze, je;
						we = ue$1(t, m), Ie = se$1(t, m);
						const Te = ((je = (ze = H.value) == null ? void 0 : ze.getScrollContainer()) == null ? void 0 : je.scrollHeight) || 0, rt = u.maxHeight;
						G.value = u.maxHeight ? Math.min(Te, u.maxHeight) : Te;
						const ct = we + t.offsetWidth - it, Ee = Ie + G.value + Se * 2 - Le;
						if (ne.value = Ee > 0, k.value && ct > 0) {
							const ve = a + t.offsetWidth - X, he = we;
							ve > he ? O.value.x -= he : O.value.x -= ve;
						}
						if (ne.value) {
							if (k.value) {
								const ve = Ee, he = Ie;
								ve > he ? O.value.y -= he - Se : O.value.y -= ve - Se;
							}
							Q.value = Le - (O.value.y + fe);
						} else Q.value = rt || 0;
					});
				}
			});
		}
		function Ce() {
			var c;
			const t = (c = u.parentMenuItemContext) == null ? void 0 : c.getElement();
			if (t) {
				const m = ue$1(t, d.container), a = se$1(t, d.container);
				O.value.x = m, O.value.y = a;
			} else {
				const [m, a] = d.getPositon();
				O.value.x = m, O.value.y = a;
			}
			nextTick(() => {
				var m;
				y(U), (m = f.value) == null || m.focus({ preventScroll: !0 }), d.isOpenedByKeyBoardFlag() && nextTick(() => R(!0)), w = !0;
			}), ce();
		}
		return watch(() => u.show, (t) => {
			t && Ce();
		}), onMounted(() => {
			n.value = !0, u.show ? Ce() : ce();
		}), onBeforeUnmount(() => {
			n.value = !1, Y && (Y.getSubMenuInstance = () => {});
		}), o(Z), (t, c) => {
			const m = resolveComponent("ContextSubMenu", !0);
			return n.value ? (openBlock(), createBlock(Teleport, {
				key: 0,
				to: `#${unref(_)}`
			}, [createVNode(Transition, mergeProps({ appear: "" }, unref(p).menuTransitionProps || { duration: 10 }, { onAfterLeave: c[0] || (c[0] = (a) => v("closeAnimFinished")) }), {
				default: withCtx(() => [e.show ? (openBlock(), createElementBlock("div", mergeProps({
					key: 0,
					ref_key: "submenuRoot",
					ref: r
				}, t.$attrs, {
					class: [
						"mx-context-menu",
						unref(p).customClass ? unref(p).customClass : "",
						unref(p).theme ?? ""
					],
					style: {
						maxWidth: e.maxWidth ? unref(Ye)(e.maxWidth) : `${unref(ee$1).defaultMaxWidth}px`,
						minWidth: e.minWidth ? unref(Ye)(e.minWidth) : `${unref(ee$1).defaultMinWidth}px`,
						zIndex: unref(B),
						left: `${O.value.x}px`,
						top: `${O.value.y}px`
					},
					"data-type": "ContextSubMenu",
					onClick: V
				}), [createVNode(unref(It), {
					ref_key: "scrollRectRef",
					ref: H,
					scroll: "vertical",
					maxHeight: Q.value,
					containerClass: "mx-context-menu-scroll"
				}, {
					default: withCtx(() => [createBaseVNode("div", {
						class: normalizeClass(["mx-context-menu-items"]),
						ref_key: "menu",
						ref: f
					}, [renderSlot(t.$slots, "default", {}, () => [(openBlock(!0), createElementBlock(Fragment, null, renderList(e.items, (a, de) => (openBlock(), createElementBlock(Fragment, { key: de }, [
						a.hidden !== !0 && a.divided === "up" ? (openBlock(), createBlock(ge$1, { key: 0 })) : createCommentVNode("", !0),
						a.hidden !== !0 && a.divided === "self" ? (openBlock(), createBlock(ge$1, { key: 1 })) : (openBlock(), createBlock($e, {
							key: 2,
							clickHandler: a.onClick ? (j) => a.onClick(j) : void 0,
							disabled: typeof a.disabled == "object" ? a.disabled.value : a.disabled,
							hidden: typeof a.hidden == "object" ? a.hidden.value : a.hidden,
							icon: a.icon,
							iconFontClass: a.iconFontClass,
							svgIcon: a.svgIcon,
							svgProps: a.svgProps,
							label: a.label,
							customRender: a.customRender,
							customClass: a.customClass,
							checked: typeof a.checked == "object" ? a.checked.value : a.checked,
							shortcut: a.shortcut,
							clickClose: a.clickClose,
							clickableWhenHasChildren: a.clickableWhenHasChildren,
							preserveIconWidth: a.preserveIconWidth !== void 0 ? a.preserveIconWidth : unref(p).preserveIconWidth,
							showRightArrow: a.children && a.children.length > 0,
							hasChildren: a.children && a.children.length > 0,
							rawMenuItem: a,
							onSubMenuOpen: (j) => {
								var X;
								return (X = a.onSubMenuOpen) == null ? void 0 : X.call(a, j);
							},
							onSubMenuClose: (j) => {
								var X;
								return (X = a.onSubMenuClose) == null ? void 0 : X.call(a, j);
							}
						}, createSlots({ _: 2 }, [a.children && a.children.length > 0 ? {
							name: "submenu",
							fn: withCtx(({ context: j, show: X }) => [createVNode(m, {
								show: X,
								parentMenuItemContext: j,
								items: a.children,
								maxWidth: a.maxWidth,
								minWidth: a.minWidth,
								maxHeight: a.maxHeight,
								adjustPosition: a.adjustSubMenuPosition !== void 0 ? a.adjustSubMenuPosition : unref(p).adjustPosition,
								direction: a.direction !== void 0 ? a.direction : unref(p).direction
							}, null, 8, [
								"show",
								"parentMenuItemContext",
								"items",
								"maxWidth",
								"minWidth",
								"maxHeight",
								"adjustPosition",
								"direction"
							])]),
							key: "0"
						} : void 0]), 1032, [
							"clickHandler",
							"disabled",
							"hidden",
							"icon",
							"iconFontClass",
							"svgIcon",
							"svgProps",
							"label",
							"customRender",
							"customClass",
							"checked",
							"shortcut",
							"clickClose",
							"clickableWhenHasChildren",
							"preserveIconWidth",
							"showRightArrow",
							"hasChildren",
							"rawMenuItem",
							"onSubMenuOpen",
							"onSubMenuClose"
						])),
						a.hidden !== !0 && (a.divided === "down" || a.divided === !0) ? (openBlock(), createBlock(ge$1, { key: 3 })) : createCommentVNode("", !0)
					], 64))), 128))])], 512)]),
					_: 3
				}, 8, ["maxHeight"])], 16)) : createCommentVNode("", !0)]),
				_: 3
			}, 16)], 8, ["to"])) : createCommentVNode("", !0);
		};
	}
});
var st = /* @__PURE__ */ defineComponent({
	__name: "ContextSubMenuWrapper",
	props: {
		/**
		* Menu options
		*/
		options: {
			type: Object,
			default: null
		},
		/**
		* Show menu?
		*/
		show: {
			type: null,
			default: null
		},
		/**
		* Current container, For calculation only
		*/
		container: {
			type: Object,
			default: null
		},
		/**
		* Make sure is user set the custom container.
		*/
		isFullScreenContainer: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["close", "closeAnimFinished"],
	setup(e, { expose: o, emit: s }) {
		const u = e, v = s, n = useSlots(), _ = ref(), { options: d, show: p, container: h$1 } = toRefs(u);
		onMounted(() => {
			p.value && L();
		}), onBeforeUnmount(() => {
			H();
		}), watch(p, (i) => {
			i ? L() : (Ke(x), H());
		});
		const x = {
			closeMenu: S,
			isClosed: M,
			getMenuRef: () => _.value,
			getMenuDimensions: () => {
				var i;
				return ((i = _.value) == null ? void 0 : i.getMenuDimensions()) ?? {
					width: 0,
					height: 0
				};
			}
		};
		let B = !1;
		function L() {
			k(), mt(x);
		}
		function S(i) {
			B = !0, v("close", i), d.value.menuTransitionProps || v("closeAnimFinished"), Ke(x);
		}
		function M() {
			return B;
		}
		function k() {
			setTimeout(() => {
				document.addEventListener("click", y, !0), document.addEventListener("contextmenu", y, !0), document.addEventListener("scroll", C, !0), !u.isFullScreenContainer && h$1.value && h$1.value.addEventListener("scroll", C, !0), d.value.keyboardControl !== !1 && document.addEventListener("keydown", f, !0);
			}, 50);
		}
		function H() {
			document.removeEventListener("contextmenu", y, !0), document.removeEventListener("click", y, !0), document.removeEventListener("scroll", C, !0), !u.isFullScreenContainer && h$1.value && h$1.value.removeEventListener("scroll", C, !0), d.value.keyboardControl !== !1 && document.removeEventListener("keydown", f, !0);
		}
		const r = ref();
		provide("globalSetCurrentSubMenu", (i) => r.value = i), provide("globalGetMenuHostId", h$1.value.id);
		function f(i) {
			var K, R, N, V, U, A, w, $, Z, Y, G, Q, ne;
			let g = !0;
			switch (i.key) {
				case "Escape":
					((K = r.value) == null ? void 0 : K.isTopLevel()) === !1 ? (R = r.value) == null || R.closeCurrentSubMenu() : S();
					break;
				case "ArrowDown":
					(N = r.value) == null || N.moveCurrentItemDown();
					break;
				case "ArrowUp":
					(V = r.value) == null || V.moveCurrentItemUp();
					break;
				case "Home":
					(U = r.value) == null || U.moveCurrentItemFirst();
					break;
				case "End":
					(A = r.value) == null || A.moveCurrentItemLast();
					break;
				case "ArrowLeft":
					(w = r.value) != null && w.closeSelfAndActiveParent() || (Z = ($ = d.value).onKeyFocusMoveLeft) == null || Z.call($);
					break;
				case "ArrowRight":
					(Y = r.value) != null && Y.openCurrentItemSubMenu() || (Q = (G = d.value).onKeyFocusMoveRight) == null || Q.call(G);
					break;
				case "Enter":
					(ne = r.value) == null || ne.triggerCurrentItemClick(i);
					break;
				default: g = !1;
			}
			g && r.value && (i.stopPropagation(), i.preventDefault());
		}
		function C(i) {
			d.value.closeWhenScroll !== !1 && I(i.target, null);
		}
		function y(i) {
			I(i.target, i);
		}
		function I(i, g) {
			var K, R;
			for (; i;) {
				if (i.classList && i.classList.contains("mx-context-menu")) return;
				i = i.parentNode;
			}
			g ? d.value.clickCloseOnOutside !== !1 ? (H(), S()) : (R = (K = d.value).onClickOnOutside) == null || R.call(K, g) : (H(), S());
		}
		return provide("globalOptions", d), provide("globalCloseMenu", S), provide("globalIsFullScreenContainer", u.isFullScreenContainer), provide("globalHasSlot", (i) => n[i] !== void 0), provide("globalRenderSlot", (i, g) => renderSlot(n, i, { ...g }, () => [h("span", "Render slot failed")], !1)), provide("menuContext", {
			zIndex: d.value.zIndex || ee$1.defaultZindex,
			container: h$1.value,
			adjustPadding: {
				x: 0,
				y: 0
			},
			getZoom: () => d.value.zoom || ee$1.defaultZoom,
			getParentWidth: () => 0,
			getParentHeight: () => 0,
			getPositon: () => [d.value.x, d.value.y],
			closeOtherSubMenuWithTimeOut: () => {},
			checkCloseOtherSubMenuTimeOut: () => !1,
			addOpenedSubMenu: () => {},
			closeOtherSubMenu: () => {},
			getParentContext: () => null,
			getSubMenuInstanceContext: () => null,
			getElement: () => null,
			addChildMenuItem: () => {},
			removeChildMenuItem: () => {},
			markActiveMenuItem: () => {},
			markThisOpenedByKeyBoard: () => {},
			isOpenedByKeyBoardFlag: () => !1,
			isMenuItemDataCollectedFlag: () => !1
		}), o(x), (i, g) => (openBlock(), createBlock(Ae, {
			ref_key: "submenuInstance",
			ref: _,
			show: unref(p),
			items: unref(d).items,
			adjustPosition: unref(d).adjustPosition,
			maxWidth: unref(d).maxWidth || unref(ee$1).defaultMaxWidth,
			minWidth: unref(d).minWidth || unref(ee$1).defaultMinWidth,
			maxHeight: unref(d).maxHeight,
			direction: unref(d).direction || unref(ee$1).defaultDirection,
			onCloseAnimFinished: g[0] || (g[0] = (K) => v("closeAnimFinished"))
		}, {
			default: withCtx(() => [renderSlot(i.$slots, "default")]),
			_: 3
		}, 8, [
			"show",
			"items",
			"adjustPosition",
			"maxWidth",
			"minWidth",
			"maxHeight",
			"direction"
		]));
	}
});
var Ut = /* @__PURE__ */ defineComponent({
	__name: "ContextMenu",
	props: {
		/**
		* Menu options
		*/
		options: {
			type: Object,
			default: null
		},
		/**
		* Show menu?
		*/
		show: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:show", "close"],
	setup(e, { expose: o, emit: s }) {
		const u = s, { options: n, show: _ } = toRefs(e), { isNew: d, container: p, eleId: h } = lt(n.value), x = ref(null), B = useSlots();
		function L(S) {
			var M, k;
			u("update:show", !1), u("close"), (k = (M = n.value).onClose) == null || k.call(M, S);
		}
		return o({
			closeMenu: () => u("update:show", !1),
			isClosed: () => !_.value,
			getMenuRef: () => {
				var S;
				return (S = x.value) == null ? void 0 : S.getMenuRef();
			},
			getMenuDimensions: () => {
				var S;
				return ((S = x.value) == null ? void 0 : S.getMenuDimensions()) ?? {
					width: 0,
					height: 0
				};
			}
		}), (S, M) => (openBlock(), createBlock(Teleport, { to: `#${unref(h)}` }, [createVNode(st, {
			ref_key: "menuRef",
			ref: x,
			options: unref(n),
			show: unref(_),
			container: unref(p),
			isFullScreenContainer: !unref(d),
			onClose: L
		}, createSlots({ _: 2 }, [renderList(unref(B), (k, H) => ({
			name: H,
			fn: withCtx((r) => [renderSlot(S.$slots, H, normalizeProps(guardReactiveProps(r)))])
		}))]), 1032, [
			"options",
			"show",
			"container",
			"isFullScreenContainer"
		])], 8, ["to"]));
	}
});
var Xt = defineComponent({
	name: "ContextMenuGroup",
	props: {
		/**
		* Is this menu disabled? 
		*/
		disabled: {
			type: Boolean,
			default: !1
		},
		/**
		* Is this menu hidden? 
		*/
		hidden: {
			type: Boolean,
			default: !1
		},
		/**
		* Is this menu disabled? 
		*/
		clickHandler: {
			type: Function,
			default: null
		},
		/**
		* Menu label
		*/
		label: {
			type: String,
			default: ""
		},
		/**
		* Menu icon (for icon class)
		*/
		icon: {
			type: String,
			default: ""
		},
		/**
		* Custom icon library font class name.
		* 
		* Only for css font icon, If you use the svg icon, you do not need to use this.
		*/
		iconFontClass: {
			type: String,
			default: "iconfont"
		},
		/**
		* Is this menu item checked?
		* 
		* The check mark are displayed on the left side of the icon, so it is not recommended to display the icon at the same time.
		*/
		checked: {
			type: Boolean,
			default: !1
		},
		/**
		* Shortcut key text display on the right.
		* 
		* The shortcut keys here are only for display. You need to handle the key events by yourself.
		*/
		shortcut: {
			type: String,
			default: ""
		},
		/**
		* Display icons use svg symbol (`<use xlink:href="#icon-symbol-name">`) ， only valid when icon attribute is empty.
		*/
		svgIcon: {
			type: String,
			default: ""
		},
		/**
		* The user-defined attribute of the svg tag, which is valid when using `svgIcon`.
		*/
		svgProps: {
			type: Object,
			default: null
		},
		/**
		* Should a fixed-width icon area be reserved for menu items without icon. (this item)
		* 
		* Default is true .
		* 
		* The width of icon area can be override with css var `--mx-menu-placeholder-width`.
		*/
		preserveIconWidth: {
			type: Boolean,
			default: !0
		},
		/**
		* Show right arrow on this menu?
		*/
		showRightArrow: {
			type: Boolean,
			default: !1
		},
		/**
		* Should close menu when Click this menu item ?
		*/
		clickClose: {
			type: Boolean,
			default: !0
		},
		/**
		* By default, the submenu will automatically adjust its position to prevent it overflow the container.
		* 
		* If you allow menu overflow containers, you can set this to false.
		* 
		* Default is inherit from `MenuOptions.adjustPosition`  .
		*/
		adjustSubMenuPosition: {
			type: Boolean,
			default: void 0
		},
		/**
		* Max height of submenu
		*/
		maxHeight: {
			type: [String, Number],
			default: 0
		},
		/**
		* Max width of submenu
		*/
		maxWidth: {
			type: [String, Number],
			default: 0
		},
		/**
		* Min width of submenu
		*/
		minWidth: {
			type: [String, Number],
			default: 0
		}
	},
	setup(e, o) {
		const s = inject("globalOptions"), { adjustSubMenuPosition: u, maxWidth: v, minWidth: n, maxHeight: _ } = toRefs(e), d = typeof u.value < "u" ? u.value : s.value.adjustPosition, p = ref(), h$2 = ref();
		return o.expose({
			getSubMenuRef: () => p.value,
			getMenuItemRef: () => h$2.value
		}), () => h($e, {
			...e,
			ref: h$2,
			showRightArrow: !0,
			maxWidth: void 0,
			minWidth: void 0,
			maxHeight: void 0,
			adjustSubMenuPosition: void 0,
			hasChildren: typeof o.slots.default !== void 0
		}, o.slots.default ? {
			submenu: (x) => h(Ae, {
				ref: p,
				show: x.show,
				maxWidth: v.value,
				minWidth: n.value,
				maxHeight: _.value,
				adjustPosition: d,
				parentMenuItemContext: x.context
			}, { default: o.slots.default }),
			...yt(o.slots, "default")
		} : o.slots);
	}
});
function Zt(e, o, s, u) {
	const v = ref(!0), n = h(st, {
		options: e,
		show: v,
		container: o,
		isFullScreenContainer: !s,
		onCloseAnimFinished: () => {
			render$2(null, o);
		},
		onClose: (_) => {
			var d;
			(d = e.onClose) == null || d.call(e, _), v.value = !1;
		}
	}, u);
	return render$2(n, o), n.component;
}
function Je(e, o) {
	const s = lt(e);
	return Zt(e, s.container, s.isNew, o).exposed;
}
var Qe = {
	/**
	* For Vue install
	* @param app 
	*/
	install(e) {
		e.config.globalProperties.$contextmenu = Je, e.component("ContextMenu", Ut), e.component("ContextMenuItem", $e), e.component("ContextMenuGroup", Xt), e.component("ContextMenuSperator", ge$1), e.component("ContextMenuSeparator", ge$1), e.component("ContextSubMenu", Ae);
	},
	/**
	* Show a ContextMenu in page, same as `this.$contextmenu`
	* 
	* For example:
	* 
	* ```ts
	* onContextMenu(e : MouseEvent) {
	*   //prevent the browser's default menu
	*   e.preventDefault();
	*   //show your menu
	*   ContextMenu.showContextMenu({
	*     x: e.x,
	*     y: e.y,
	*     items: [
	*       { 
	*         label: "A menu item", 
	*         onClick: () => {
	*           alert("You click a menu item");
	*         }
	*       },
	*       { 
	*         label: "A submenu", 
	*         children: [
	*           { label: "Item1" },
	*           { label: "Item2" },
	*           { label: "Item3" },
	*         ]
	*       },
	*     ]
	*   }); 
	* }
	* ```
	* 
	* You can pass customSlots to custom rendering this menu.
	* 
	* For example, custom rendering #itemRender and #separatorRender:
	* ```ts
	*   ContextMenu.showContextMenu({
	*     ...
	*   } as MenuOptions, {
	*     //Use slot in function mode
	*     itemRender: ({ disabled, label, icon, showRightArrow, onClick, onMouseEnter }) => [  h('div', { 
	*       class: 'my-menu-item'+(disabled?' disabled':''),
	*       onMouseenter: onMouseEnter,
	*       onClick: onClick,
	*     }, [
	*       icon ? h('img', { src: icon }) : h('div', { class: 'icon-place-holder' }),
	*       h('span', label),
	*       showRightArrow ? h('span', { class: 'right-arraw' }, '>>') : h('div'),
	*     ]) ],
	*     separatorRender: () => [ h('div', { class: 'my-menu-sperator' }) ]
	*   })
	* ```
	* 
	* @param options The options of ContextMenu
	* @param customSlots You can provide some custom slots to customize the rendering style of the menu. These slots are the same as the slots of component ContextMenu.
	* @returns Menu instance 
	*/
	showContextMenu(e, o) {
		return Je(e, o);
	},
	/**
	* Get if there is a menu open now.
	*/
	isAnyContextMenuOpen() {
		return ht();
	},
	/**
	* Close the currently open menu
	*/
	closeContextMenu: ot,
	transformMenuPosition: pt
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Global.js
var PI_OVER_180 = Math.PI / 180;
function detectBrowser() {
	return typeof window !== "undefined" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
}
var glob = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" ? self : {};
var Konva$2 = {
	_global: glob,
	version: "10.3.1",
	isBrowser: detectBrowser(),
	isUnminified: /param/.test(function(param) {}.toString()),
	dblClickWindow: 400,
	getAngle(angle) {
		return Konva$2.angleDeg ? angle * PI_OVER_180 : angle;
	},
	enableTrace: false,
	pointerEventsEnabled: true,
	autoDrawEnabled: true,
	hitOnDragEnabled: false,
	capturePointerEventsEnabled: false,
	_mouseListenClick: false,
	_touchListenClick: false,
	_pointerListenClick: false,
	_mouseInDblClickWindow: false,
	_touchInDblClickWindow: false,
	_pointerInDblClickWindow: false,
	_mouseDblClickPointerId: null,
	_touchDblClickPointerId: null,
	_pointerDblClickPointerId: null,
	_renderBackend: "web",
	legacyTextRendering: false,
	pixelRatio: typeof window !== "undefined" && window.devicePixelRatio || 1,
	dragDistance: 3,
	angleDeg: true,
	showWarnings: true,
	dragButtons: [0, 1],
	isDragging() {
		return Konva$2["DD"].isDragging;
	},
	isTransforming() {
		var _a, _b;
		return (_b = (_a = Konva$2["Transformer"]) === null || _a === void 0 ? void 0 : _a.isTransforming()) !== null && _b !== void 0 ? _b : false;
	},
	isDragReady() {
		return !!Konva$2["DD"].node;
	},
	releaseCanvasOnDestroy: true,
	document: glob.document,
	_injectGlobal(Konva) {
		if (typeof glob.Konva !== "undefined") console.error("Several Konva instances detected. It is not recommended to use multiple Konva instances in the same environment.");
		glob.Konva = Konva;
	}
};
var _registerNode = (NodeClass) => {
	Konva$2[NodeClass.prototype.getClassName()] = NodeClass;
};
Konva$2._injectGlobal(Konva$2);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Util.js
var NODE_ERROR = `Konva.js unsupported environment.

Looks like you are trying to use Konva.js in Node.js environment. because "document" object is undefined.

To use Konva.js in Node.js environment, you need to use the "canvas-backend" or "skia-backend" module.

bash: npm install canvas
js: import "konva/canvas-backend";

or

bash: npm install skia-canvas
js: import "konva/skia-backend";
`;
var ensureBrowser = () => {
	if (typeof document === "undefined") throw new Error(NODE_ERROR);
};
var Transform = class Transform {
	constructor(m = [
		1,
		0,
		0,
		1,
		0,
		0
	]) {
		this.dirty = false;
		this.m = m && m.slice() || [
			1,
			0,
			0,
			1,
			0,
			0
		];
	}
	reset() {
		this.m[0] = 1;
		this.m[1] = 0;
		this.m[2] = 0;
		this.m[3] = 1;
		this.m[4] = 0;
		this.m[5] = 0;
	}
	copy() {
		return new Transform(this.m);
	}
	copyInto(tr) {
		tr.m[0] = this.m[0];
		tr.m[1] = this.m[1];
		tr.m[2] = this.m[2];
		tr.m[3] = this.m[3];
		tr.m[4] = this.m[4];
		tr.m[5] = this.m[5];
	}
	point(point) {
		const m = this.m;
		return {
			x: m[0] * point.x + m[2] * point.y + m[4],
			y: m[1] * point.x + m[3] * point.y + m[5]
		};
	}
	translate(x, y) {
		this.m[4] += this.m[0] * x + this.m[2] * y;
		this.m[5] += this.m[1] * x + this.m[3] * y;
		return this;
	}
	scale(sx, sy) {
		this.m[0] *= sx;
		this.m[1] *= sx;
		this.m[2] *= sy;
		this.m[3] *= sy;
		return this;
	}
	rotate(rad) {
		const c = Math.cos(rad);
		const s = Math.sin(rad);
		const m11 = this.m[0] * c + this.m[2] * s;
		const m12 = this.m[1] * c + this.m[3] * s;
		const m21 = this.m[0] * -s + this.m[2] * c;
		const m22 = this.m[1] * -s + this.m[3] * c;
		this.m[0] = m11;
		this.m[1] = m12;
		this.m[2] = m21;
		this.m[3] = m22;
		return this;
	}
	getTranslation() {
		return {
			x: this.m[4],
			y: this.m[5]
		};
	}
	skew(sx, sy) {
		const m11 = this.m[0] + this.m[2] * sy;
		const m12 = this.m[1] + this.m[3] * sy;
		const m21 = this.m[2] + this.m[0] * sx;
		const m22 = this.m[3] + this.m[1] * sx;
		this.m[0] = m11;
		this.m[1] = m12;
		this.m[2] = m21;
		this.m[3] = m22;
		return this;
	}
	multiply(matrix) {
		const m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
		const m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
		const m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
		const m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
		const dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
		const dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
		this.m[0] = m11;
		this.m[1] = m12;
		this.m[2] = m21;
		this.m[3] = m22;
		this.m[4] = dx;
		this.m[5] = dy;
		return this;
	}
	invert() {
		const d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
		const m0 = this.m[3] * d;
		const m1 = -this.m[1] * d;
		const m2 = -this.m[2] * d;
		const m3 = this.m[0] * d;
		const m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
		const m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
		this.m[0] = m0;
		this.m[1] = m1;
		this.m[2] = m2;
		this.m[3] = m3;
		this.m[4] = m4;
		this.m[5] = m5;
		return this;
	}
	getMatrix() {
		return this.m;
	}
	decompose() {
		const a = this.m[0];
		const b = this.m[1];
		const c = this.m[2];
		const d = this.m[3];
		const e = this.m[4];
		const f = this.m[5];
		const delta = a * d - b * c;
		const result = {
			x: e,
			y: f,
			rotation: 0,
			scaleX: 0,
			scaleY: 0,
			skewX: 0,
			skewY: 0
		};
		if (a != 0 || b != 0) {
			const r = Math.sqrt(a * a + b * b);
			result.rotation = b > 0 ? Math.acos(a / r) : -Math.acos(a / r);
			result.scaleX = r;
			result.scaleY = delta / r;
			result.skewX = (a * c + b * d) / delta;
			result.skewY = 0;
		} else if (c != 0 || d != 0) {
			const s = Math.sqrt(c * c + d * d);
			result.rotation = Math.PI / 2 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
			result.scaleX = delta / s;
			result.scaleY = s;
			result.skewX = 0;
			result.skewY = (a * c + b * d) / delta;
		}
		result.rotation = Util._getRotation(result.rotation);
		return result;
	}
};
var OBJECT_ARRAY = "[object Array]";
var OBJECT_NUMBER = "[object Number]";
var OBJECT_STRING = "[object String]";
var OBJECT_BOOLEAN = "[object Boolean]";
var PI_OVER_DEG180 = Math.PI / 180;
var DEG180_OVER_PI = 180 / Math.PI;
var HASH = "#";
var EMPTY_STRING$1 = "";
var ZERO = "0";
var KONVA_WARNING = "Konva warning: ";
var KONVA_ERROR = "Konva error: ";
var COLORS = {
	aliceblue: [
		240,
		248,
		255
	],
	antiquewhite: [
		250,
		235,
		215
	],
	aqua: [
		0,
		255,
		255
	],
	aquamarine: [
		127,
		255,
		212
	],
	azure: [
		240,
		255,
		255
	],
	beige: [
		245,
		245,
		220
	],
	bisque: [
		255,
		228,
		196
	],
	black: [
		0,
		0,
		0
	],
	blanchedalmond: [
		255,
		235,
		205
	],
	blue: [
		0,
		0,
		255
	],
	blueviolet: [
		138,
		43,
		226
	],
	brown: [
		165,
		42,
		42
	],
	burlywood: [
		222,
		184,
		135
	],
	cadetblue: [
		95,
		158,
		160
	],
	chartreuse: [
		127,
		255,
		0
	],
	chocolate: [
		210,
		105,
		30
	],
	coral: [
		255,
		127,
		80
	],
	cornflowerblue: [
		100,
		149,
		237
	],
	cornsilk: [
		255,
		248,
		220
	],
	crimson: [
		220,
		20,
		60
	],
	cyan: [
		0,
		255,
		255
	],
	darkblue: [
		0,
		0,
		139
	],
	darkcyan: [
		0,
		139,
		139
	],
	darkgoldenrod: [
		184,
		134,
		11
	],
	darkgray: [
		169,
		169,
		169
	],
	darkgreen: [
		0,
		100,
		0
	],
	darkgrey: [
		169,
		169,
		169
	],
	darkkhaki: [
		189,
		183,
		107
	],
	darkmagenta: [
		139,
		0,
		139
	],
	darkolivegreen: [
		85,
		107,
		47
	],
	darkorange: [
		255,
		140,
		0
	],
	darkorchid: [
		153,
		50,
		204
	],
	darkred: [
		139,
		0,
		0
	],
	darksalmon: [
		233,
		150,
		122
	],
	darkseagreen: [
		143,
		188,
		143
	],
	darkslateblue: [
		72,
		61,
		139
	],
	darkslategray: [
		47,
		79,
		79
	],
	darkslategrey: [
		47,
		79,
		79
	],
	darkturquoise: [
		0,
		206,
		209
	],
	darkviolet: [
		148,
		0,
		211
	],
	deeppink: [
		255,
		20,
		147
	],
	deepskyblue: [
		0,
		191,
		255
	],
	dimgray: [
		105,
		105,
		105
	],
	dimgrey: [
		105,
		105,
		105
	],
	dodgerblue: [
		30,
		144,
		255
	],
	firebrick: [
		178,
		34,
		34
	],
	floralwhite: [
		255,
		250,
		240
	],
	forestgreen: [
		34,
		139,
		34
	],
	fuchsia: [
		255,
		0,
		255
	],
	gainsboro: [
		220,
		220,
		220
	],
	ghostwhite: [
		248,
		248,
		255
	],
	gold: [
		255,
		215,
		0
	],
	goldenrod: [
		218,
		165,
		32
	],
	gray: [
		128,
		128,
		128
	],
	green: [
		0,
		128,
		0
	],
	greenyellow: [
		173,
		255,
		47
	],
	grey: [
		128,
		128,
		128
	],
	honeydew: [
		240,
		255,
		240
	],
	hotpink: [
		255,
		105,
		180
	],
	indianred: [
		205,
		92,
		92
	],
	indigo: [
		75,
		0,
		130
	],
	ivory: [
		255,
		255,
		240
	],
	khaki: [
		240,
		230,
		140
	],
	lavender: [
		230,
		230,
		250
	],
	lavenderblush: [
		255,
		240,
		245
	],
	lawngreen: [
		124,
		252,
		0
	],
	lemonchiffon: [
		255,
		250,
		205
	],
	lightblue: [
		173,
		216,
		230
	],
	lightcoral: [
		240,
		128,
		128
	],
	lightcyan: [
		224,
		255,
		255
	],
	lightgoldenrodyellow: [
		250,
		250,
		210
	],
	lightgray: [
		211,
		211,
		211
	],
	lightgreen: [
		144,
		238,
		144
	],
	lightgrey: [
		211,
		211,
		211
	],
	lightpink: [
		255,
		182,
		193
	],
	lightsalmon: [
		255,
		160,
		122
	],
	lightseagreen: [
		32,
		178,
		170
	],
	lightskyblue: [
		135,
		206,
		250
	],
	lightslategray: [
		119,
		136,
		153
	],
	lightslategrey: [
		119,
		136,
		153
	],
	lightsteelblue: [
		176,
		196,
		222
	],
	lightyellow: [
		255,
		255,
		224
	],
	lime: [
		0,
		255,
		0
	],
	limegreen: [
		50,
		205,
		50
	],
	linen: [
		250,
		240,
		230
	],
	magenta: [
		255,
		0,
		255
	],
	maroon: [
		128,
		0,
		0
	],
	mediumaquamarine: [
		102,
		205,
		170
	],
	mediumblue: [
		0,
		0,
		205
	],
	mediumorchid: [
		186,
		85,
		211
	],
	mediumpurple: [
		147,
		112,
		219
	],
	mediumseagreen: [
		60,
		179,
		113
	],
	mediumslateblue: [
		123,
		104,
		238
	],
	mediumspringgreen: [
		0,
		250,
		154
	],
	mediumturquoise: [
		72,
		209,
		204
	],
	mediumvioletred: [
		199,
		21,
		133
	],
	midnightblue: [
		25,
		25,
		112
	],
	mintcream: [
		245,
		255,
		250
	],
	mistyrose: [
		255,
		228,
		225
	],
	moccasin: [
		255,
		228,
		181
	],
	navajowhite: [
		255,
		222,
		173
	],
	navy: [
		0,
		0,
		128
	],
	oldlace: [
		253,
		245,
		230
	],
	olive: [
		128,
		128,
		0
	],
	olivedrab: [
		107,
		142,
		35
	],
	orange: [
		255,
		165,
		0
	],
	orangered: [
		255,
		69,
		0
	],
	orchid: [
		218,
		112,
		214
	],
	palegoldenrod: [
		238,
		232,
		170
	],
	palegreen: [
		152,
		251,
		152
	],
	paleturquoise: [
		175,
		238,
		238
	],
	palevioletred: [
		219,
		112,
		147
	],
	papayawhip: [
		255,
		239,
		213
	],
	peachpuff: [
		255,
		218,
		185
	],
	peru: [
		205,
		133,
		63
	],
	pink: [
		255,
		192,
		203
	],
	plum: [
		221,
		160,
		221
	],
	powderblue: [
		176,
		224,
		230
	],
	purple: [
		128,
		0,
		128
	],
	rebeccapurple: [
		102,
		51,
		153
	],
	red: [
		255,
		0,
		0
	],
	rosybrown: [
		188,
		143,
		143
	],
	royalblue: [
		65,
		105,
		225
	],
	saddlebrown: [
		139,
		69,
		19
	],
	salmon: [
		250,
		128,
		114
	],
	sandybrown: [
		244,
		164,
		96
	],
	seagreen: [
		46,
		139,
		87
	],
	seashell: [
		255,
		245,
		238
	],
	sienna: [
		160,
		82,
		45
	],
	silver: [
		192,
		192,
		192
	],
	skyblue: [
		135,
		206,
		235
	],
	slateblue: [
		106,
		90,
		205
	],
	slategray: [
		112,
		128,
		144
	],
	slategrey: [
		112,
		128,
		144
	],
	snow: [
		255,
		250,
		250
	],
	springgreen: [
		0,
		255,
		127
	],
	steelblue: [
		70,
		130,
		180
	],
	tan: [
		210,
		180,
		140
	],
	teal: [
		0,
		128,
		128
	],
	thistle: [
		216,
		191,
		216
	],
	transparent: [
		255,
		255,
		255,
		0
	],
	tomato: [
		255,
		99,
		71
	],
	turquoise: [
		64,
		224,
		208
	],
	violet: [
		238,
		130,
		238
	],
	wheat: [
		245,
		222,
		179
	],
	white: [
		255,
		255,
		255
	],
	whitesmoke: [
		245,
		245,
		245
	],
	yellow: [
		255,
		255,
		0
	],
	yellowgreen: [
		154,
		205,
		50
	]
};
var animQueue = [];
var _isCanvasFarblingActive = null;
var req = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame || function(f) {
	setTimeout(f, 16);
};
var capitalizeCache = /* @__PURE__ */ new Map();
var splitColorComponents = (str) => {
	const components = str.trim();
	return components.indexOf(",") === -1 ? components.split(/\s*\/\s*|\s+/) : components.split(/\s*,\s*/);
};
var NUMBER_SOURCE = "[+-]?(?:\\d+\\.?\\d*|\\.\\d+)(?:e[+-]?\\d+)?";
var COLOR_COMPONENT_REGEX = new RegExp(`^(${NUMBER_SOURCE})(%?)$`, "i");
var parseColorComponent = (value, max) => {
	const match = COLOR_COMPONENT_REGEX.exec(value);
	if (!match) return NaN;
	return match[2] ? Number(match[1]) / 100 * max : Number(match[1]);
};
var HEX_COLOR_REGEX = /^#[0-9a-f]+$/i;
var clamp01 = (value) => Math.min(Math.max(value, 0), 1);
var HUE_REGEX = new RegExp(`^(${NUMBER_SOURCE})(deg|grad|rad|turn)?$`, "i");
var HUE_UNITS = {
	deg: 1,
	grad: .9,
	rad: DEG180_OVER_PI,
	turn: 360
};
var Util = {
	_isElement(obj) {
		return !!(obj && obj.nodeType == 1);
	},
	_isFunction(obj) {
		return !!(obj && obj.constructor && obj.call && obj.apply);
	},
	_isPlainObject(obj) {
		return !!obj && obj.constructor === Object;
	},
	_isArray(obj) {
		return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
	},
	_isNumber(obj) {
		return Object.prototype.toString.call(obj) === OBJECT_NUMBER && !isNaN(obj) && isFinite(obj);
	},
	_isString(obj) {
		return Object.prototype.toString.call(obj) === OBJECT_STRING;
	},
	_isBoolean(obj) {
		return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN;
	},
	isObject(val) {
		return val instanceof Object;
	},
	isValidSelector(selector) {
		if (typeof selector !== "string") return false;
		const firstChar = selector[0];
		return firstChar === "#" || firstChar === "." || firstChar === firstChar.toUpperCase();
	},
	_sign(number) {
		if (number === 0) return 1;
		if (number > 0) return 1;
		else return -1;
	},
	requestAnimFrame(callback) {
		animQueue.push(callback);
		if (animQueue.length === 1) req(function() {
			const queue = animQueue;
			animQueue = [];
			queue.forEach(function(cb) {
				cb();
			});
		});
	},
	createCanvasElement() {
		ensureBrowser();
		const canvas = document.createElement("canvas");
		try {
			canvas.style = canvas.style || {};
		} catch (e) {}
		return canvas;
	},
	createImageElement() {
		ensureBrowser();
		return document.createElement("img");
	},
	_isInDocument(el) {
		while (el = el.parentNode) if (el == document) return true;
		return false;
	},
	_urlToImage(url, callback) {
		const imageObj = Util.createImageElement();
		imageObj.onload = function() {
			callback(imageObj);
		};
		imageObj.src = url;
	},
	_rgbToHex(r, g, b) {
		return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	},
	_hexToRgb(hex) {
		hex = hex.replace(HASH, EMPTY_STRING$1);
		const bigint = parseInt(hex, 16);
		return {
			r: bigint >> 16 & 255,
			g: bigint >> 8 & 255,
			b: bigint & 255
		};
	},
	getRandomColor() {
		let randColor = (Math.random() * 16777215 << 0).toString(16);
		while (randColor.length < 6) randColor = ZERO + randColor;
		return HASH + randColor;
	},
	isCanvasFarblingActive() {
		if (_isCanvasFarblingActive !== null) return _isCanvasFarblingActive;
		if (typeof document === "undefined") {
			_isCanvasFarblingActive = false;
			return false;
		}
		const c = this.createCanvasElement();
		c.width = 10;
		c.height = 10;
		const ctx = c.getContext("2d", { willReadFrequently: true });
		ctx.clearRect(0, 0, 10, 10);
		ctx.fillStyle = "#282828";
		ctx.fillRect(0, 0, 10, 10);
		const d = ctx.getImageData(0, 0, 10, 10).data;
		let isFarbling = false;
		for (let i = 0; i < 100; i++) if (d[i * 4] !== 40 || d[i * 4 + 1] !== 40 || d[i * 4 + 2] !== 40 || d[i * 4 + 3] !== 255) {
			isFarbling = true;
			break;
		}
		_isCanvasFarblingActive = isFarbling;
		this.releaseCanvas(c);
		return _isCanvasFarblingActive;
	},
	getHitColor() {
		const color = this.getRandomColor();
		return this.isCanvasFarblingActive() ? this.getSnappedHexColor(color) : color;
	},
	getHitColorKey(r, g, b) {
		if (this.isCanvasFarblingActive()) {
			r = Math.round(r / 5) * 5;
			g = Math.round(g / 5) * 5;
			b = Math.round(b / 5) * 5;
		}
		return HASH + this._rgbToHex(r, g, b);
	},
	getSnappedHexColor(hex) {
		const rgb = this._hexToRgb(hex);
		return HASH + this._rgbToHex(Math.round(rgb.r / 5) * 5, Math.round(rgb.g / 5) * 5, Math.round(rgb.b / 5) * 5);
	},
	getRGB(color) {
		var _a;
		const { r = 0, g = 0, b = 0 } = (_a = Util.colorToRGBA(color)) !== null && _a !== void 0 ? _a : {};
		return {
			r,
			g,
			b
		};
	},
	colorToRGBA(str) {
		str = (str || "").trim() || "black";
		const color = Util._namedColorToRBA(str) || Util._hex3ColorToRGBA(str) || Util._hex4ColorToRGBA(str) || Util._hex6ColorToRGBA(str) || Util._hex8ColorToRGBA(str) || Util._rgbColorToRGBA(str) || Util._hslColorToRGBA(str);
		if (color && [
			color.r,
			color.g,
			color.b,
			color.a
		].every(Util._isNumber)) return color;
	},
	_namedColorToRBA(str) {
		const c = COLORS[str.toLowerCase()];
		if (!c) return null;
		return {
			r: c[0],
			g: c[1],
			b: c[2],
			a: c.length > 3 ? c[3] : 1
		};
	},
	_rgbColorToRGBA(str) {
		const match = /^rgba?\(([^)]*)\)$/i.exec(str);
		if (!match) return;
		const parts = splitColorComponents(match[1]);
		if (parts.length < 3 || parts.length > 4) return;
		return {
			r: parseColorComponent(parts[0], 255),
			g: parseColorComponent(parts[1], 255),
			b: parseColorComponent(parts[2], 255),
			a: parts.length > 3 ? parseColorComponent(parts[3], 1) : 1
		};
	},
	_hex8ColorToRGBA(str) {
		if (str.length === 9 && HEX_COLOR_REGEX.test(str)) return {
			r: parseInt(str.slice(1, 3), 16),
			g: parseInt(str.slice(3, 5), 16),
			b: parseInt(str.slice(5, 7), 16),
			a: parseInt(str.slice(7, 9), 16) / 255
		};
	},
	_hex6ColorToRGBA(str) {
		if (str.length === 7 && HEX_COLOR_REGEX.test(str)) return {
			r: parseInt(str.slice(1, 3), 16),
			g: parseInt(str.slice(3, 5), 16),
			b: parseInt(str.slice(5, 7), 16),
			a: 1
		};
	},
	_hex4ColorToRGBA(str) {
		if (str.length === 5 && HEX_COLOR_REGEX.test(str)) return {
			r: parseInt(str[1] + str[1], 16),
			g: parseInt(str[2] + str[2], 16),
			b: parseInt(str[3] + str[3], 16),
			a: parseInt(str[4] + str[4], 16) / 255
		};
	},
	_hex3ColorToRGBA(str) {
		if (str.length === 4 && HEX_COLOR_REGEX.test(str)) return {
			r: parseInt(str[1] + str[1], 16),
			g: parseInt(str[2] + str[2], 16),
			b: parseInt(str[3] + str[3], 16),
			a: 1
		};
	},
	_hslColorToRGBA(str) {
		const match = /^hsla?\(([^)]*)\)$/i.exec(str);
		if (!match) return;
		const parts = splitColorComponents(match[1]);
		if (parts.length < 3 || parts.length > 4) return;
		const hue = HUE_REGEX.exec(parts[0]);
		if (!hue) return;
		const unit = hue[2];
		const degrees = Number(hue[1]) * (unit ? HUE_UNITS[unit.toLowerCase()] : 1);
		if (!isFinite(degrees)) return;
		const h = (degrees % 360 + 360) % 360 / 360;
		const s = clamp01(parseColorComponent(parts[1], 100) / 100);
		const l = clamp01(parseColorComponent(parts[2], 100) / 100);
		const a = parts.length > 3 ? parseColorComponent(parts[3], 1) : 1;
		const t2 = l < .5 ? l * (1 + s) : l + s - l * s;
		const t1 = 2 * l - t2;
		const rgb = [
			0,
			0,
			0
		];
		for (let i = 0; i < 3; i++) {
			let t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) t3++;
			if (t3 > 1) t3--;
			let val;
			if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;
			else if (2 * t3 < 1) val = t2;
			else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			else val = t1;
			rgb[i] = val * 255;
		}
		return {
			r: Math.round(rgb[0]),
			g: Math.round(rgb[1]),
			b: Math.round(rgb[2]),
			a
		};
	},
	haveIntersection(r1, r2) {
		return !(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y);
	},
	cloneObject(obj) {
		const retObj = {};
		for (const key in obj) if (this._isPlainObject(obj[key])) retObj[key] = this.cloneObject(obj[key]);
		else if (this._isArray(obj[key])) retObj[key] = this.cloneArray(obj[key]);
		else retObj[key] = obj[key];
		return retObj;
	},
	cloneArray(arr) {
		return arr.slice(0);
	},
	degToRad(deg) {
		return deg * PI_OVER_DEG180;
	},
	radToDeg(rad) {
		return rad * DEG180_OVER_PI;
	},
	_degToRad(deg) {
		Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead.");
		return Util.degToRad(deg);
	},
	_radToDeg(rad) {
		Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead.");
		return Util.radToDeg(rad);
	},
	_getRotation(radians) {
		return Konva$2.angleDeg ? Util.radToDeg(radians) : radians;
	},
	_capitalize(str) {
		const cached = capitalizeCache.get(str);
		if (cached !== void 0) return cached;
		const out = str.charAt(0).toUpperCase() + str.slice(1);
		capitalizeCache.set(str, out);
		return out;
	},
	throw(str) {
		throw new Error(KONVA_ERROR + str);
	},
	error(str) {
		console.error(KONVA_ERROR + str);
	},
	warn(str) {
		if (!Konva$2.showWarnings) return;
		console.warn(KONVA_WARNING + str);
	},
	each(obj, func) {
		for (const key in obj) func(key, obj[key]);
	},
	_inRange(val, left, right) {
		return left <= val && val < right;
	},
	_getProjectionToSegment(x1, y1, x2, y2, x3, y3) {
		let x, y, dist;
		const pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
		if (pd2 == 0) {
			x = x1;
			y = y1;
			dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
		} else {
			const u = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
			if (u < 0) {
				x = x1;
				y = y1;
				dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
			} else if (u > 1) {
				x = x2;
				y = y2;
				dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
			} else {
				x = x1 + u * (x2 - x1);
				y = y1 + u * (y2 - y1);
				dist = (x - x3) * (x - x3) + (y - y3) * (y - y3);
			}
		}
		return [
			x,
			y,
			dist
		];
	},
	_getProjectionToLine(pt, line, isClosed) {
		const pc = Util.cloneObject(pt);
		let dist = Number.MAX_VALUE;
		line.forEach(function(p1, i) {
			if (!isClosed && i === line.length - 1) return;
			const p2 = line[(i + 1) % line.length];
			const proj = Util._getProjectionToSegment(p1.x, p1.y, p2.x, p2.y, pt.x, pt.y);
			const px = proj[0], py = proj[1], pdist = proj[2];
			if (pdist < dist) {
				pc.x = px;
				pc.y = py;
				dist = pdist;
			}
		});
		return pc;
	},
	_prepareArrayForTween(startArray, endArray, isClosed) {
		const start = [], end = [];
		if (startArray.length > endArray.length) {
			const temp = endArray;
			endArray = startArray;
			startArray = temp;
		}
		for (let n = 0; n < startArray.length; n += 2) start.push({
			x: startArray[n],
			y: startArray[n + 1]
		});
		for (let n = 0; n < endArray.length; n += 2) end.push({
			x: endArray[n],
			y: endArray[n + 1]
		});
		const newStart = [];
		end.forEach(function(point) {
			const pr = Util._getProjectionToLine(point, start, isClosed);
			newStart.push(pr.x);
			newStart.push(pr.y);
		});
		return newStart;
	},
	_prepareToStringify(obj) {
		let desc;
		obj.visitedByCircularReferenceRemoval = true;
		for (const key in obj) {
			if (!(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == "object")) continue;
			desc = Object.getOwnPropertyDescriptor(obj, key);
			if (obj[key].visitedByCircularReferenceRemoval || Util._isElement(obj[key])) {
				if (desc.configurable) delete obj[key];
				else return null;
			} else if (Util._prepareToStringify(obj[key]) === null) {
				if (desc.configurable) delete obj[key];
				else return null;
			}
		}
		delete obj.visitedByCircularReferenceRemoval;
		return obj;
	},
	_assign(target, source) {
		for (const key in source) target[key] = source[key];
		return target;
	},
	_getFirstPointerId(evt) {
		if (!evt.touches) return evt.pointerId || 999;
		else return evt.changedTouches[0].identifier;
	},
	releaseCanvas(...canvases) {
		if (!Konva$2.releaseCanvasOnDestroy) return;
		canvases.forEach((c) => {
			c.width = 0;
			c.height = 0;
		});
	},
	drawRoundedRectPath(context, width, height, cornerRadius) {
		let xOrigin = width < 0 ? width : 0;
		let yOrigin = height < 0 ? height : 0;
		width = Math.abs(width);
		height = Math.abs(height);
		let topLeft = 0;
		let topRight = 0;
		let bottomLeft = 0;
		let bottomRight = 0;
		if (typeof cornerRadius === "number") topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
		else {
			topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
			topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
			bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
			bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
		}
		context.moveTo(xOrigin + topLeft, yOrigin);
		context.lineTo(xOrigin + width - topRight, yOrigin);
		context.arc(xOrigin + width - topRight, yOrigin + topRight, topRight, Math.PI * 3 / 2, 0, false);
		context.lineTo(xOrigin + width, yOrigin + height - bottomRight);
		context.arc(xOrigin + width - bottomRight, yOrigin + height - bottomRight, bottomRight, 0, Math.PI / 2, false);
		context.lineTo(xOrigin + bottomLeft, yOrigin + height);
		context.arc(xOrigin + bottomLeft, yOrigin + height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
		context.lineTo(xOrigin, yOrigin + topLeft);
		context.arc(xOrigin + topLeft, yOrigin + topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
	},
	drawRoundedPolygonPath(context, points, sides, radius, cornerRadius) {
		radius = Math.abs(radius);
		for (let i = 0; i < sides; i++) {
			const prev = points[(i - 1 + sides) % sides];
			const curr = points[i];
			const next = points[(i + 1) % sides];
			const vec1 = {
				x: curr.x - prev.x,
				y: curr.y - prev.y
			};
			const vec2 = {
				x: next.x - curr.x,
				y: next.y - curr.y
			};
			const len1 = Math.hypot(vec1.x, vec1.y);
			const len2 = Math.hypot(vec2.x, vec2.y);
			let currCornerRadius;
			if (typeof cornerRadius === "number") currCornerRadius = cornerRadius;
			else currCornerRadius = i < cornerRadius.length ? cornerRadius[i] : 0;
			currCornerRadius = radius * Math.cos(Math.PI / sides) * Math.min(1, currCornerRadius / radius * 2);
			const normalVec1 = {
				x: vec1.x / len1,
				y: vec1.y / len1
			};
			const normalVec2 = {
				x: vec2.x / len2,
				y: vec2.y / len2
			};
			const p1 = {
				x: curr.x - normalVec1.x * currCornerRadius,
				y: curr.y - normalVec1.y * currCornerRadius
			};
			const p2 = {
				x: curr.x + normalVec2.x * currCornerRadius,
				y: curr.y + normalVec2.y * currCornerRadius
			};
			if (i === 0) context.moveTo(p1.x, p1.y);
			else context.lineTo(p1.x, p1.y);
			context.arcTo(curr.x, curr.y, p2.x, p2.y, currCornerRadius);
		}
	}
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Context.js
function simplifyArray(arr) {
	const retArr = [], len = arr.length, util = Util;
	for (let n = 0; n < len; n++) {
		let val = arr[n];
		if (util._isNumber(val)) val = Math.round(val * 1e3) / 1e3;
		else if (!util._isString(val)) val = val + "";
		retArr.push(val);
	}
	return retArr;
}
var COMMA = ",";
var OPEN_PAREN = "(";
var CLOSE_PAREN = ")";
var OPEN_PAREN_BRACKET = "([";
var CLOSE_BRACKET_PAREN = "])";
var SEMICOLON = ";";
var DOUBLE_PAREN = "()";
var EQUALS = "=";
var CONTEXT_METHODS = [
	"arc",
	"arcTo",
	"beginPath",
	"bezierCurveTo",
	"clearRect",
	"clip",
	"closePath",
	"createLinearGradient",
	"createPattern",
	"createRadialGradient",
	"drawImage",
	"ellipse",
	"fill",
	"fillText",
	"getImageData",
	"createImageData",
	"lineTo",
	"moveTo",
	"putImageData",
	"quadraticCurveTo",
	"rect",
	"roundRect",
	"restore",
	"rotate",
	"save",
	"scale",
	"setLineDash",
	"setTransform",
	"stroke",
	"strokeText",
	"transform",
	"translate"
];
var CONTEXT_PROPERTIES = [
	"fillStyle",
	"strokeStyle",
	"shadowColor",
	"shadowBlur",
	"shadowOffsetX",
	"shadowOffsetY",
	"letterSpacing",
	"lineCap",
	"lineDashOffset",
	"lineJoin",
	"lineWidth",
	"miterLimit",
	"direction",
	"font",
	"textAlign",
	"textBaseline",
	"globalAlpha",
	"globalCompositeOperation",
	"imageSmoothingEnabled",
	"filter"
];
var traceArrMax = 100;
var _cssFiltersSupported = null;
function isCSSFiltersSupported() {
	if (_cssFiltersSupported !== null) return _cssFiltersSupported;
	try {
		const ctx = Util.createCanvasElement().getContext("2d");
		if (!ctx) {
			_cssFiltersSupported = false;
			return false;
		}
		return !!ctx && "filter" in ctx;
	} catch (e) {
		_cssFiltersSupported = false;
		return false;
	}
}
var Context = class {
	constructor(canvas) {
		this.canvas = canvas;
		if (Konva$2.enableTrace) {
			this.traceArr = [];
			this._enableTrace();
		}
	}
	fillShape(shape) {
		if (shape.fillEnabled()) this._fill(shape);
	}
	_fill(shape) {}
	strokeShape(shape) {
		if (shape.hasStroke()) this._stroke(shape);
	}
	_stroke(shape) {}
	fillStrokeShape(shape) {
		if (shape.attrs.fillAfterStrokeEnabled) {
			this.strokeShape(shape);
			this.fillShape(shape);
		} else {
			this.fillShape(shape);
			this.strokeShape(shape);
		}
	}
	getTrace(relaxed, rounded) {
		let traceArr = this.traceArr, len = traceArr.length, str = "", n, trace, method, args;
		for (n = 0; n < len; n++) {
			trace = traceArr[n];
			method = trace.method;
			if (method) {
				args = trace.args;
				str += method;
				if (relaxed) str += DOUBLE_PAREN;
				else if (Util._isArray(args[0])) str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
				else {
					if (rounded) args = args.map((a) => typeof a === "number" ? Math.floor(a) : a);
					str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
				}
			} else {
				str += trace.property;
				if (!relaxed) str += EQUALS + trace.val;
			}
			str += SEMICOLON;
		}
		return str;
	}
	clearTrace() {
		this.traceArr = [];
	}
	_trace(str) {
		let traceArr = this.traceArr, len;
		traceArr.push(str);
		len = traceArr.length;
		if (len >= traceArrMax) traceArr.shift();
	}
	reset() {
		const pixelRatio = this.getCanvas().getPixelRatio();
		this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
	}
	getCanvas() {
		return this.canvas;
	}
	clear(bounds) {
		const canvas = this.getCanvas();
		if (bounds) this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
		else this.clearRect(0, 0, canvas.getWidth() / canvas.pixelRatio, canvas.getHeight() / canvas.pixelRatio);
	}
	_applyLineCap(shape) {
		const lineCap = shape.attrs.lineCap;
		if (lineCap) this.setAttr("lineCap", lineCap);
	}
	_applyOpacity(shape) {
		const absOpacity = shape.getAbsoluteOpacity();
		if (absOpacity !== 1) this.setAttr("globalAlpha", absOpacity);
	}
	_applyLineJoin(shape) {
		const lineJoin = shape.attrs.lineJoin;
		if (lineJoin) this.setAttr("lineJoin", lineJoin);
	}
	_applyMiterLimit(shape) {
		const miterLimit = shape.attrs.miterLimit;
		if (miterLimit != null) this.setAttr("miterLimit", miterLimit);
	}
	setAttr(attr, val) {
		this._context[attr] = val;
	}
	arc(x, y, radius, startAngle, endAngle, counterClockwise) {
		this._context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
	}
	arcTo(x1, y1, x2, y2, radius) {
		this._context.arcTo(x1, y1, x2, y2, radius);
	}
	beginPath() {
		this._context.beginPath();
	}
	bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
		this._context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	}
	clearRect(x, y, width, height) {
		this._context.clearRect(x, y, width, height);
	}
	clip(...args) {
		this._context.clip.apply(this._context, args);
	}
	closePath() {
		this._context.closePath();
	}
	createImageData(width, height) {
		const a = arguments;
		if (a.length === 2) return this._context.createImageData(width, height);
		else if (a.length === 1) return this._context.createImageData(width);
	}
	createLinearGradient(x0, y0, x1, y1) {
		return this._context.createLinearGradient(x0, y0, x1, y1);
	}
	createPattern(image, repetition) {
		return this._context.createPattern(image, repetition);
	}
	createRadialGradient(x0, y0, r0, x1, y1, r1) {
		return this._context.createRadialGradient(x0, y0, r0, x1, y1, r1);
	}
	drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
		const a = arguments, _context = this._context;
		if (a.length === 3) _context.drawImage(image, sx, sy);
		else if (a.length === 5) _context.drawImage(image, sx, sy, sWidth, sHeight);
		else if (a.length === 9) _context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
	}
	ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise) {
		this._context.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise);
	}
	isPointInPath(x, y, path, fillRule) {
		if (path) return this._context.isPointInPath(path, x, y, fillRule);
		return this._context.isPointInPath(x, y, fillRule);
	}
	fill(...args) {
		this._context.fill.apply(this._context, args);
	}
	fillRect(x, y, width, height) {
		this._context.fillRect(x, y, width, height);
	}
	strokeRect(x, y, width, height) {
		this._context.strokeRect(x, y, width, height);
	}
	fillText(text, x, y, maxWidth) {
		if (maxWidth) this._context.fillText(text, x, y, maxWidth);
		else this._context.fillText(text, x, y);
	}
	measureText(text) {
		return this._context.measureText(text);
	}
	getImageData(sx, sy, sw, sh) {
		return this._context.getImageData(sx, sy, sw, sh);
	}
	lineTo(x, y) {
		this._context.lineTo(x, y);
	}
	moveTo(x, y) {
		this._context.moveTo(x, y);
	}
	rect(x, y, width, height) {
		this._context.rect(x, y, width, height);
	}
	roundRect(x, y, width, height, radii) {
		this._context.roundRect(x, y, width, height, radii);
	}
	putImageData(imageData, dx, dy) {
		this._context.putImageData(imageData, dx, dy);
	}
	quadraticCurveTo(cpx, cpy, x, y) {
		this._context.quadraticCurveTo(cpx, cpy, x, y);
	}
	restore() {
		this._context.restore();
	}
	rotate(angle) {
		this._context.rotate(angle);
	}
	save() {
		this._context.save();
	}
	scale(x, y) {
		this._context.scale(x, y);
	}
	setLineDash(segments) {
		if (this._context.setLineDash) this._context.setLineDash(segments);
		else if ("mozDash" in this._context) this._context["mozDash"] = segments;
		else if ("webkitLineDash" in this._context) this._context["webkitLineDash"] = segments;
	}
	getLineDash() {
		return this._context.getLineDash();
	}
	setTransform(a, b, c, d, e, f) {
		this._context.setTransform(a, b, c, d, e, f);
	}
	stroke(path2d) {
		if (path2d) this._context.stroke(path2d);
		else this._context.stroke();
	}
	strokeText(text, x, y, maxWidth) {
		this._context.strokeText(text, x, y, maxWidth);
	}
	transform(a, b, c, d, e, f) {
		this._context.transform(a, b, c, d, e, f);
	}
	translate(x, y) {
		this._context.translate(x, y);
	}
	_enableTrace() {
		let that = this, len = CONTEXT_METHODS.length, origSetter = this.setAttr, n, args;
		const func = function(methodName) {
			let origMethod = that[methodName], ret;
			that[methodName] = function() {
				args = simplifyArray(Array.prototype.slice.call(arguments, 0));
				ret = origMethod.apply(that, arguments);
				that._trace({
					method: methodName,
					args
				});
				return ret;
			};
		};
		for (n = 0; n < len; n++) func(CONTEXT_METHODS[n]);
		that.setAttr = function() {
			origSetter.apply(that, arguments);
			const prop = arguments[0];
			let val = arguments[1];
			if (prop === "shadowOffsetX" || prop === "shadowOffsetY" || prop === "shadowBlur") val = val / this.canvas.getPixelRatio();
			that._trace({
				property: prop,
				val
			});
		};
	}
	_applyGlobalCompositeOperation(node) {
		const op = node.attrs.globalCompositeOperation;
		if (!(!op || op === "source-over")) this.setAttr("globalCompositeOperation", op);
	}
};
CONTEXT_PROPERTIES.forEach(function(prop) {
	Object.defineProperty(Context.prototype, prop, {
		get() {
			return this._context[prop];
		},
		set(val) {
			this._context[prop] = val;
		}
	});
});
var SceneContext = class extends Context {
	constructor(canvas, { willReadFrequently = false } = {}) {
		super(canvas);
		this._context = canvas._canvas.getContext("2d", { willReadFrequently });
	}
	_fillColor(shape) {
		const fill = shape.fill();
		this.setAttr("fillStyle", fill);
		shape._fillFunc(this);
	}
	_fillPattern(shape) {
		const context = this._context;
		if ("patternQuality" in context) context.patternQuality = context.imageSmoothingEnabled ? "good" : "nearest";
		this.setAttr("fillStyle", shape._getFillPattern());
		shape._fillFunc(this);
	}
	_fillLinearGradient(shape) {
		const grd = shape._getLinearGradient();
		if (grd) {
			this.setAttr("fillStyle", grd);
			shape._fillFunc(this);
		}
	}
	_fillRadialGradient(shape) {
		const grd = shape._getRadialGradient();
		if (grd) {
			this.setAttr("fillStyle", grd);
			shape._fillFunc(this);
		}
	}
	_fill(shape) {
		const hasColor = shape.fill(), fillPriority = shape.getFillPriority();
		if (hasColor && fillPriority === "color") {
			this._fillColor(shape);
			return;
		}
		const hasPattern = shape.getFillPatternImage();
		if (hasPattern && fillPriority === "pattern") {
			this._fillPattern(shape);
			return;
		}
		const hasLinearGradient = shape.getFillLinearGradientColorStops();
		if (hasLinearGradient && fillPriority === "linear-gradient") {
			this._fillLinearGradient(shape);
			return;
		}
		const hasRadialGradient = shape.getFillRadialGradientColorStops();
		if (hasRadialGradient && fillPriority === "radial-gradient") {
			this._fillRadialGradient(shape);
			return;
		}
		if (hasColor) this._fillColor(shape);
		else if (hasPattern) this._fillPattern(shape);
		else if (hasLinearGradient) this._fillLinearGradient(shape);
		else if (hasRadialGradient) this._fillRadialGradient(shape);
	}
	_strokeLinearGradient(shape) {
		const start = shape.getStrokeLinearGradientStartPoint(), end = shape.getStrokeLinearGradientEndPoint(), colorStops = shape.getStrokeLinearGradientColorStops(), grd = this.createLinearGradient(start.x, start.y, end.x, end.y);
		if (colorStops) {
			for (let n = 0; n < colorStops.length; n += 2) grd.addColorStop(colorStops[n], colorStops[n + 1]);
			this.setAttr("strokeStyle", grd);
		}
	}
	_stroke(shape) {
		const dash = shape.dash(), strokeScaleEnabled = shape.getStrokeScaleEnabled();
		if (shape.hasStroke()) {
			if (!strokeScaleEnabled) {
				this.save();
				const pixelRatio = this.getCanvas().getPixelRatio();
				this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
			}
			this._applyLineCap(shape);
			if (dash && shape.dashEnabled()) {
				this.setLineDash(dash);
				this.setAttr("lineDashOffset", shape.dashOffset());
			}
			this.setAttr("lineWidth", shape.strokeWidth());
			if (!shape.getShadowForStrokeEnabled()) this.setAttr("shadowColor", "rgba(0,0,0,0)");
			if (shape.getStrokeLinearGradientColorStops()) this._strokeLinearGradient(shape);
			else this.setAttr("strokeStyle", shape.stroke());
			shape._strokeFunc(this);
			if (!strokeScaleEnabled) this.restore();
		}
	}
	_applyShadow(shape) {
		var _a, _b, _c;
		const color = (_a = shape.getShadowRGBA()) !== null && _a !== void 0 ? _a : "black", blur = (_b = shape.getShadowBlur()) !== null && _b !== void 0 ? _b : 5, offset = (_c = shape.getShadowOffset()) !== null && _c !== void 0 ? _c : {
			x: 0,
			y: 0
		}, scale = shape.getAbsoluteScale(), ratio = this.canvas.getPixelRatio(), scaleX = scale.x * ratio, scaleY = scale.y * ratio;
		this.setAttr("shadowColor", color);
		this.setAttr("shadowBlur", blur * Math.min(Math.abs(scaleX), Math.abs(scaleY)));
		this.setAttr("shadowOffsetX", offset.x * scaleX);
		this.setAttr("shadowOffsetY", offset.y * scaleY);
	}
};
var HitContext = class extends Context {
	constructor(canvas) {
		super(canvas);
		this._context = canvas._canvas.getContext("2d", { willReadFrequently: true });
	}
	_fill(shape) {
		this.save();
		this.setAttr("fillStyle", shape.colorKey);
		shape._fillFuncHit(this);
		this.restore();
	}
	strokeShape(shape) {
		if (shape.hasHitStroke()) this._stroke(shape);
	}
	_stroke(shape) {
		if (shape.hasHitStroke()) {
			const strokeScaleEnabled = shape.getStrokeScaleEnabled();
			if (!strokeScaleEnabled) {
				this.save();
				const pixelRatio = this.getCanvas().getPixelRatio();
				this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
			}
			this._applyLineCap(shape);
			const hitStrokeWidth = shape.hitStrokeWidth();
			const strokeWidth = hitStrokeWidth === "auto" ? shape.strokeWidth() : hitStrokeWidth;
			this.setAttr("lineWidth", strokeWidth);
			this.setAttr("strokeStyle", shape.colorKey);
			shape._strokeFuncHit(this);
			if (!strokeScaleEnabled) this.restore();
		}
	}
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Canvas.js
var _pixelRatio;
function getDevicePixelRatio() {
	if (_pixelRatio) return _pixelRatio;
	const canvas = Util.createCanvasElement();
	const context = canvas.getContext("2d");
	_pixelRatio = (function() {
		return (Konva$2._global.devicePixelRatio || 1) / (context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1);
	})();
	Util.releaseCanvas(canvas);
	return _pixelRatio;
}
var Canvas = class {
	constructor(config) {
		this.pixelRatio = 1;
		this.width = 0;
		this.height = 0;
		this.isCache = false;
		const pixelRatio = (config || {}).pixelRatio || Konva$2.pixelRatio || getDevicePixelRatio();
		this.pixelRatio = pixelRatio;
		this._canvas = Util.createCanvasElement();
		this._canvas.style.padding = "0";
		this._canvas.style.margin = "0";
		this._canvas.style.border = "0";
		this._canvas.style.background = "transparent";
		this._canvas.style.position = "absolute";
		this._canvas.style.top = "0";
		this._canvas.style.left = "0";
	}
	getContext() {
		return this.context;
	}
	getPixelRatio() {
		return this.pixelRatio;
	}
	setPixelRatio(pixelRatio) {
		const previousRatio = this.pixelRatio;
		this.pixelRatio = pixelRatio;
		this.setSize(this.getWidth() / previousRatio, this.getHeight() / previousRatio);
	}
	setWidth(width) {
		this.width = this._canvas.width = width * this.pixelRatio;
		this._canvas.style.width = width + "px";
		const pixelRatio = this.pixelRatio;
		this.getContext()._context.scale(pixelRatio, pixelRatio);
	}
	setHeight(height) {
		this.height = this._canvas.height = height * this.pixelRatio;
		this._canvas.style.height = height + "px";
		const pixelRatio = this.pixelRatio;
		this.getContext()._context.scale(pixelRatio, pixelRatio);
	}
	getWidth() {
		return this.width;
	}
	getHeight() {
		return this.height;
	}
	setSize(width, height) {
		this.setWidth(width || 0);
		this.setHeight(height || 0);
	}
	toDataURL(mimeType, quality) {
		try {
			return this._canvas.toDataURL(mimeType, quality);
		} catch (e) {
			try {
				return this._canvas.toDataURL();
			} catch (err) {
				Util.error("Unable to get data URL. " + err.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.");
				return "";
			}
		}
	}
};
var SceneCanvas = class extends Canvas {
	constructor(config = {
		width: 0,
		height: 0,
		willReadFrequently: false
	}) {
		super(config);
		this.context = new SceneContext(this, { willReadFrequently: config.willReadFrequently });
		this.setSize(config.width, config.height);
	}
};
var HitCanvas = class extends Canvas {
	constructor(config = {
		width: 0,
		height: 0
	}) {
		super(config);
		this.hitCanvas = true;
		this.context = new HitContext(this);
		this.setSize(config.width, config.height);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/DragAndDrop.js
var DD = {
	get isDragging() {
		let flag = false;
		DD._dragElements.forEach((elem) => {
			if (elem.dragStatus === "dragging") flag = true;
		});
		return flag;
	},
	justDragged: false,
	get node() {
		let node;
		DD._dragElements.forEach((elem) => {
			node = elem.node;
		});
		return node;
	},
	_dragElements: /* @__PURE__ */ new Map(),
	_drag(evt) {
		const nodesToFireEvents = [];
		DD._dragElements.forEach((elem, key) => {
			const { node } = elem;
			const stage = node.getStage();
			stage.setPointersPositions(evt);
			if (elem.pointerId === void 0) elem.pointerId = Util._getFirstPointerId(evt);
			const pos = stage._changedPointerPositions.find((pos) => pos.id === elem.pointerId);
			if (!pos) return;
			if (elem.dragStatus !== "dragging") {
				const dragDistance = node.dragDistance();
				if (Math.max(Math.abs(pos.x - elem.startPointerPos.x), Math.abs(pos.y - elem.startPointerPos.y)) < dragDistance) return;
				node.startDrag({ evt });
				if (!node.isDragging()) return;
			}
			node._setDragPosition(evt, elem);
			nodesToFireEvents.push(node);
		});
		nodesToFireEvents.forEach((node) => {
			if (!node.getStage()) return;
			node.fire("dragmove", {
				type: "dragmove",
				target: node,
				evt
			}, true);
		});
	},
	_endDragBefore(evt) {
		const drawNodes = [];
		DD._dragElements.forEach((elem) => {
			const { node } = elem;
			const stage = node.getStage();
			if (evt) stage.setPointersPositions(evt);
			if (!stage._changedPointerPositions.find((pos) => pos.id === elem.pointerId)) return;
			if (elem.dragStatus === "dragging" || elem.dragStatus === "stopped") {
				DD.justDragged = true;
				Konva$2._mouseListenClick = false;
				Konva$2._touchListenClick = false;
				Konva$2._pointerListenClick = false;
				elem.dragStatus = "stopped";
			}
			const drawNode = elem.node.getLayer() || elem.node instanceof Konva$2["Stage"] && elem.node;
			if (drawNode && drawNodes.indexOf(drawNode) === -1) drawNodes.push(drawNode);
		});
		drawNodes.forEach((drawNode) => {
			drawNode.draw();
		});
	},
	_endDragAfter(evt) {
		DD._dragElements.forEach((elem, key) => {
			if (elem.dragStatus === "stopped") elem.node.fire("dragend", {
				type: "dragend",
				target: elem.node,
				evt
			}, true);
			if (elem.dragStatus !== "dragging") DD._dragElements.delete(key);
		});
	}
};
if (Konva$2.isBrowser) {
	window.addEventListener("mouseup", DD._endDragBefore, true);
	window.addEventListener("touchend", DD._endDragBefore, true);
	window.addEventListener("touchcancel", DD._endDragBefore, true);
	window.addEventListener("mousemove", DD._drag);
	window.addEventListener("touchmove", DD._drag);
	window.addEventListener("mouseup", DD._endDragAfter, false);
	window.addEventListener("touchend", DD._endDragAfter, false);
	window.addEventListener("touchcancel", DD._endDragAfter, false);
}
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Validators.js
function _formatValue(val) {
	if (Util._isString(val)) return "\"" + val + "\"";
	if (Object.prototype.toString.call(val) === "[object Number]") return val;
	if (Util._isBoolean(val)) return val;
	return Object.prototype.toString.call(val);
}
function RGBComponent(val) {
	if (val > 255) return 255;
	else if (val < 0) return 0;
	return Math.round(val);
}
function getNumberValidator() {
	if (Konva$2.isUnminified) return function(val, attr) {
		if (!Util._isNumber(val)) Util.warn(_formatValue(val) + " is a not valid value for \"" + attr + "\" attribute. The value should be a number.");
		return val;
	};
}
function getNumberOrArrayOfNumbersValidator(noOfElements) {
	if (Konva$2.isUnminified) return function(val, attr) {
		let isNumber = Util._isNumber(val);
		let isValidArray = Util._isArray(val) && val.length == noOfElements;
		if (!isNumber && !isValidArray) Util.warn(_formatValue(val) + " is a not valid value for \"" + attr + "\" attribute. The value should be a number or Array<number>(" + noOfElements + ")");
		return val;
	};
}
function getNumberOrAutoValidator() {
	if (Konva$2.isUnminified) return function(val, attr) {
		if (!(Util._isNumber(val) || val === "auto")) Util.warn(_formatValue(val) + " is a not valid value for \"" + attr + "\" attribute. The value should be a number or \"auto\".");
		return val;
	};
}
function getStringValidator() {
	if (Konva$2.isUnminified) return function(val, attr) {
		if (!Util._isString(val)) Util.warn(_formatValue(val) + " is a not valid value for \"" + attr + "\" attribute. The value should be a string.");
		return val;
	};
}
function getStringOrGradientValidator() {
	if (Konva$2.isUnminified) return function(val, attr) {
		const isString = Util._isString(val);
		const isGradient = Object.prototype.toString.call(val) === "[object CanvasGradient]" || val && val["addColorStop"];
		if (!(isString || isGradient)) Util.warn(_formatValue(val) + " is a not valid value for \"" + attr + "\" attribute. The value should be a string or a native gradient.");
		return val;
	};
}
function getNumberArrayValidator() {
	if (Konva$2.isUnminified) return function(val, attr) {
		const TypedArray = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
		if (TypedArray && val instanceof TypedArray) return val;
		if (!Util._isArray(val)) Util.warn(_formatValue(val) + " is a not valid value for \"" + attr + "\" attribute. The value should be a array of numbers.");
		else val.forEach(function(item) {
			if (!Util._isNumber(item)) Util.warn("\"" + attr + "\" attribute has non numeric element " + item + ". Make sure that all elements are numbers.");
		});
		return val;
	};
}
function getBooleanValidator() {
	if (Konva$2.isUnminified) return function(val, attr) {
		if (!(val === true || val === false)) Util.warn(_formatValue(val) + " is a not valid value for \"" + attr + "\" attribute. The value should be a boolean.");
		return val;
	};
}
function getComponentValidator(components) {
	if (Konva$2.isUnminified) return function(val, attr) {
		if (val === void 0 || val === null) return val;
		if (!Util.isObject(val)) Util.warn(_formatValue(val) + " is a not valid value for \"" + attr + "\" attribute. The value should be an object with properties " + components);
		return val;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Factory.js
var GET = "get";
var SET$1 = "set";
var Factory = {
	addGetterSetter(constructor, attr, def, validator, after) {
		Factory.addGetter(constructor, attr, def);
		Factory.addSetter(constructor, attr, validator, after);
		Factory.addOverloadedGetterSetter(constructor, attr);
	},
	addGetter(constructor, attr, def) {
		const method = GET + Util._capitalize(attr);
		constructor.prototype[method] = constructor.prototype[method] || function() {
			const val = this.attrs[attr];
			return val === void 0 ? def : val;
		};
	},
	addSetter(constructor, attr, validator, after) {
		const method = SET$1 + Util._capitalize(attr);
		if (!constructor.prototype[method]) Factory.overWriteSetter(constructor, attr, validator, after);
	},
	overWriteSetter(constructor, attr, validator, after) {
		const method = SET$1 + Util._capitalize(attr);
		constructor.prototype[method] = function(val) {
			if (validator && val !== void 0 && val !== null) val = validator.call(this, val, attr);
			this._setAttr(attr, val);
			if (after) after.call(this);
			return this;
		};
	},
	addComponentsGetterSetter(constructor, attr, components, validator, after) {
		const len = components.length, capitalize = Util._capitalize, getter = GET + capitalize(attr), setter = SET$1 + capitalize(attr);
		constructor.prototype[getter] = function() {
			const ret = {};
			for (let n = 0; n < len; n++) {
				const component = components[n];
				ret[component] = this.getAttr(attr + capitalize(component));
			}
			return ret;
		};
		const basicValidator = getComponentValidator(components);
		constructor.prototype[setter] = function(val) {
			const oldVal = this.attrs[attr];
			if (validator) val = validator.call(this, val, attr);
			if (basicValidator) basicValidator.call(this, val, attr);
			for (const key in val) {
				if (!val.hasOwnProperty(key)) continue;
				this._setAttr(attr + capitalize(key), val[key]);
			}
			if (!val) components.forEach((component) => {
				this._setAttr(attr + capitalize(component), void 0);
			});
			this._fireChangeEvent(attr, oldVal, val);
			if (after) after.call(this);
			return this;
		};
		Factory.addOverloadedGetterSetter(constructor, attr);
	},
	addOverloadedGetterSetter(constructor, attr) {
		const capitalizedAttr = Util._capitalize(attr), setter = SET$1 + capitalizedAttr, getter = GET + capitalizedAttr;
		constructor.prototype[attr] = function() {
			if (arguments.length) {
				this[setter](arguments[0]);
				return this;
			}
			return this[getter]();
		};
	},
	addDeprecatedGetterSetter(constructor, attr, def, validator) {
		Util.error("Adding deprecated " + attr);
		const method = GET + Util._capitalize(attr);
		const message = attr + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
		constructor.prototype[method] = function() {
			Util.error(message);
			const val = this.attrs[attr];
			return val === void 0 ? def : val;
		};
		Factory.addSetter(constructor, attr, validator, function() {
			Util.error(message);
		});
		Factory.addOverloadedGetterSetter(constructor, attr);
	},
	backCompat(constructor, methods) {
		Util.each(methods, function(oldMethodName, newMethodName) {
			const method = constructor.prototype[newMethodName];
			const oldGetter = GET + Util._capitalize(oldMethodName);
			const oldSetter = SET$1 + Util._capitalize(oldMethodName);
			function deprecated() {
				method.apply(this, arguments);
				Util.error("\"" + oldMethodName + "\" method is deprecated and will be removed soon. Use \"\"" + newMethodName + "\" instead.");
			}
			constructor.prototype[oldMethodName] = deprecated;
			constructor.prototype[oldGetter] = deprecated;
			constructor.prototype[oldSetter] = deprecated;
		});
	},
	afterSetFilter() {
		this._filterUpToDate = false;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Node.js
function parseCSSFilters(cssFilter) {
	const filterRegex = /(\w+)\(([^)]+)\)/g;
	let match;
	while ((match = filterRegex.exec(cssFilter)) !== null) {
		const [, filterName, filterValue] = match;
		switch (filterName) {
			case "blur": {
				const blurRadius = parseFloat(filterValue.replace("px", ""));
				return function(imageData) {
					this.blurRadius(blurRadius * .5);
					const KonvaFilters = Konva$2.Filters;
					if (KonvaFilters && KonvaFilters.Blur) KonvaFilters.Blur.call(this, imageData);
				};
			}
			case "brightness": {
				const brightness = filterValue.includes("%") ? parseFloat(filterValue) / 100 : parseFloat(filterValue);
				return function(imageData) {
					this.brightness(brightness);
					const KonvaFilters = Konva$2.Filters;
					if (KonvaFilters && KonvaFilters.Brightness) KonvaFilters.Brightness.call(this, imageData);
				};
			}
			case "contrast": {
				const contrast = parseFloat(filterValue);
				return function(imageData) {
					const konvaContrast = 100 * (Math.sqrt(contrast) - 1);
					this.contrast(konvaContrast);
					const KonvaFilters = Konva$2.Filters;
					if (KonvaFilters && KonvaFilters.Contrast) KonvaFilters.Contrast.call(this, imageData);
				};
			}
			case "grayscale": return function(imageData) {
				const KonvaFilters = Konva$2.Filters;
				if (KonvaFilters && KonvaFilters.Grayscale) KonvaFilters.Grayscale.call(this, imageData);
			};
			case "sepia": return function(imageData) {
				const KonvaFilters = Konva$2.Filters;
				if (KonvaFilters && KonvaFilters.Sepia) KonvaFilters.Sepia.call(this, imageData);
			};
			case "invert": return function(imageData) {
				const KonvaFilters = Konva$2.Filters;
				if (KonvaFilters && KonvaFilters.Invert) KonvaFilters.Invert.call(this, imageData);
			};
			default: Util.warn(`CSS filter "${filterName}" is not supported in fallback mode. Consider using function filters for better compatibility.`);
		}
	}
	return () => {};
}
var ABSOLUTE_OPACITY = "absoluteOpacity";
var ALL_LISTENERS = "allEventListeners";
var ABSOLUTE_TRANSFORM = "absoluteTransform";
var ABSOLUTE_SCALE = "absoluteScale";
var CANVAS = "canvas";
var CHANGE = "Change";
var CHILDREN = "children";
var KONVA = "konva";
var LISTENING = "listening";
var MOUSEENTER$1 = "mouseenter";
var MOUSELEAVE$1 = "mouseleave";
var POINTERENTER$1 = "pointerenter";
var POINTERLEAVE$1 = "pointerleave";
var TOUCHENTER = "touchenter";
var TOUCHLEAVE = "touchleave";
var SET = "set";
var SHAPE = "Shape";
var SPACE$1 = " ";
var STAGE$1 = "stage";
var TRANSFORM = "transform";
var UPPER_STAGE = "Stage";
var VISIBLE = "visible";
var TRANSFORM_CHANGE_STR$1 = [
	"xChange.konva",
	"yChange.konva",
	"scaleXChange.konva",
	"scaleYChange.konva",
	"skewXChange.konva",
	"skewYChange.konva",
	"rotationChange.konva",
	"offsetXChange.konva",
	"offsetYChange.konva",
	"transformsEnabledChange.konva"
].join(SPACE$1);
var idCounter$1 = 1;
var Node = class Node {
	constructor(config) {
		this._id = idCounter$1++;
		this.eventListeners = {};
		this.attrs = {};
		this.index = 0;
		this._allEventListeners = null;
		this.parent = null;
		this._cache = /* @__PURE__ */ new Map();
		this._attachedDepsListeners = /* @__PURE__ */ new Map();
		this._lastPos = null;
		this._batchingTransformChange = false;
		this._needClearTransformCache = false;
		this._filterUpToDate = false;
		this._isUnderCache = false;
		this._dragEventId = null;
		this._shouldFireChangeEvents = false;
		this.setAttrs(config);
		this._shouldFireChangeEvents = true;
	}
	hasChildren() {
		return false;
	}
	_clearCache(attr) {
		if ((attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM) && this._cache.get(attr)) this._cache.get(attr).dirty = true;
		else if (attr) this._cache.delete(attr);
		else this._cache.clear();
	}
	_getCache(attr, privateGetter) {
		let cache = this._cache.get(attr);
		if (cache === void 0 || (attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM) && cache.dirty === true) {
			cache = privateGetter.call(this);
			this._cache.set(attr, cache);
		}
		return cache;
	}
	_calculate(name, deps, getter) {
		if (!this._attachedDepsListeners.get(name)) {
			const depsString = deps.map((dep) => dep + "Change.konva").join(SPACE$1);
			this.on(depsString, () => {
				this._clearCache(name);
			});
			this._attachedDepsListeners.set(name, true);
		}
		return this._getCache(name, getter);
	}
	_getCanvasCache() {
		return this._cache.get(CANVAS);
	}
	_clearSelfAndDescendantCache(attr) {
		this._clearCache(attr);
		if (attr === ABSOLUTE_TRANSFORM) this.fire("absoluteTransformChange");
	}
	static _runAfterAbsTransformCascade(cb) {
		if (Node._absTransformCascadeDepth > 0) Node._pendingAfterCascade.push(cb);
		else cb();
	}
	clearCache() {
		if (this._cache.has(CANVAS)) {
			const { scene, filter, hit } = this._cache.get(CANVAS);
			Util.releaseCanvas(scene._canvas, filter._canvas, hit._canvas);
			this._cache.delete(CANVAS);
		}
		this._clearSelfAndDescendantCache();
		this._requestDraw();
		return this;
	}
	cache(config) {
		const conf = config || {};
		let rect = {};
		if (conf.x === void 0 || conf.y === void 0 || conf.width === void 0 || conf.height === void 0) rect = this.getClientRect({
			skipTransform: true,
			relativeTo: this.getParent() || void 0
		});
		let width = Math.ceil(conf.width || rect.width), height = Math.ceil(conf.height || rect.height), pixelRatio = conf.pixelRatio, x = conf.x === void 0 ? Math.floor(rect.x) : conf.x, y = conf.y === void 0 ? Math.floor(rect.y) : conf.y, offset = conf.offset || 0, drawBorder = conf.drawBorder || false, hitCanvasPixelRatio = conf.hitCanvasPixelRatio || 1;
		if (!width || !height) {
			Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
			return;
		}
		const extraPaddingX = Math.abs(Math.round(rect.x) - x) > .5 ? 1 : 0;
		const extraPaddingY = Math.abs(Math.round(rect.y) - y) > .5 ? 1 : 0;
		width += offset * 2 + extraPaddingX;
		height += offset * 2 + extraPaddingY;
		x -= offset;
		y -= offset;
		const cachedSceneCanvas = new SceneCanvas({
			pixelRatio,
			width,
			height
		}), cachedFilterCanvas = new SceneCanvas({
			pixelRatio,
			width: 0,
			height: 0,
			willReadFrequently: true
		}), cachedHitCanvas = new HitCanvas({
			pixelRatio: hitCanvasPixelRatio,
			width,
			height
		}), sceneContext = cachedSceneCanvas.getContext(), hitContext = cachedHitCanvas.getContext();
		const bufferCanvas = new SceneCanvas({
			width: cachedSceneCanvas.width / cachedSceneCanvas.pixelRatio + Math.abs(x),
			height: cachedSceneCanvas.height / cachedSceneCanvas.pixelRatio + Math.abs(y),
			pixelRatio: cachedSceneCanvas.pixelRatio
		}), bufferContext = bufferCanvas.getContext();
		cachedHitCanvas.isCache = true;
		cachedSceneCanvas.isCache = true;
		this._cache.delete(CANVAS);
		this._filterUpToDate = false;
		if (conf.imageSmoothingEnabled === false) {
			cachedSceneCanvas.getContext()._context.imageSmoothingEnabled = false;
			cachedFilterCanvas.getContext()._context.imageSmoothingEnabled = false;
		}
		sceneContext.save();
		hitContext.save();
		bufferContext.save();
		sceneContext.translate(-x, -y);
		hitContext.translate(-x, -y);
		bufferContext.translate(-x, -y);
		bufferCanvas.x = x;
		bufferCanvas.y = y;
		this._isUnderCache = true;
		this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
		this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
		this.drawScene(cachedSceneCanvas, this, bufferCanvas);
		this.drawHit(cachedHitCanvas, this);
		this._isUnderCache = false;
		sceneContext.restore();
		hitContext.restore();
		if (drawBorder) {
			sceneContext.save();
			sceneContext.beginPath();
			sceneContext.rect(0, 0, width, height);
			sceneContext.closePath();
			sceneContext.setAttr("strokeStyle", "red");
			sceneContext.setAttr("lineWidth", 5);
			sceneContext.stroke();
			sceneContext.restore();
		}
		Util.releaseCanvas(bufferCanvas._canvas);
		this._cache.set(CANVAS, {
			scene: cachedSceneCanvas,
			filter: cachedFilterCanvas,
			hit: cachedHitCanvas,
			x,
			y
		});
		this._requestDraw();
		return this;
	}
	isCached() {
		return this._cache.has(CANVAS);
	}
	getClientRect(config) {
		throw new Error("abstract \"getClientRect\" method call");
	}
	_transformedRect(rect, top) {
		const points = [
			{
				x: rect.x,
				y: rect.y
			},
			{
				x: rect.x + rect.width,
				y: rect.y
			},
			{
				x: rect.x + rect.width,
				y: rect.y + rect.height
			},
			{
				x: rect.x,
				y: rect.y + rect.height
			}
		];
		let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
		const trans = this.getAbsoluteTransform(top);
		points.forEach(function(point) {
			const transformed = trans.point(point);
			if (minX === void 0) {
				minX = maxX = transformed.x;
				minY = maxY = transformed.y;
			}
			minX = Math.min(minX, transformed.x);
			minY = Math.min(minY, transformed.y);
			maxX = Math.max(maxX, transformed.x);
			maxY = Math.max(maxY, transformed.y);
		});
		return {
			x: minX,
			y: minY,
			width: maxX - minX,
			height: maxY - minY
		};
	}
	_drawCachedSceneCanvas(context) {
		context.save();
		context._applyOpacity(this);
		context._applyGlobalCompositeOperation(this);
		const canvasCache = this._getCanvasCache();
		context.translate(canvasCache.x, canvasCache.y);
		const cacheCanvas = this._getCachedSceneCanvas();
		const ratio = cacheCanvas.pixelRatio;
		context.drawImage(cacheCanvas._canvas, 0, 0, cacheCanvas.width / ratio, cacheCanvas.height / ratio);
		context.restore();
	}
	_drawCachedHitCanvas(context) {
		const canvasCache = this._getCanvasCache(), hitCanvas = canvasCache.hit;
		context.save();
		context.translate(canvasCache.x, canvasCache.y);
		context.drawImage(hitCanvas._canvas, 0, 0, hitCanvas.width / hitCanvas.pixelRatio, hitCanvas.height / hitCanvas.pixelRatio);
		context.restore();
	}
	_getCachedSceneCanvas() {
		let filters = this.filters(), cachedCanvas = this._getCanvasCache(), sceneCanvas = cachedCanvas.scene, filterCanvas = cachedCanvas.filter, filterContext = filterCanvas.getContext(), len, imageData, n, filter;
		if (!filters || filters.length === 0) return sceneCanvas;
		if (this._filterUpToDate) return filterCanvas;
		let useNativeOnly = true;
		for (let i = 0; i < filters.length; i++) {
			if (typeof filters[i] === "string" && !isCSSFiltersSupported()) {}
			if (typeof filters[i] !== "string" || !isCSSFiltersSupported()) {
				useNativeOnly = false;
				break;
			}
		}
		const ratio = sceneCanvas.pixelRatio;
		filterCanvas.setSize(sceneCanvas.width / sceneCanvas.pixelRatio, sceneCanvas.height / sceneCanvas.pixelRatio);
		if (useNativeOnly) {
			const finalFilter = filters.join(" ");
			filterContext.save();
			filterContext.setAttr("filter", finalFilter);
			filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
			filterContext.restore();
			this._filterUpToDate = true;
			return filterCanvas;
		}
		try {
			len = filters.length;
			filterContext.clear();
			filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
			imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());
			for (n = 0; n < len; n++) {
				filter = filters[n];
				if (typeof filter === "string") filter = parseCSSFilters(filter);
				filter.call(this, imageData);
				filterContext.putImageData(imageData, 0, 0);
			}
		} catch (e) {
			Util.error("Unable to apply filter. " + e.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
		}
		this._filterUpToDate = true;
		return filterCanvas;
	}
	on(...args) {
		const evtStr = args[0];
		const selectorOrHandler = args[1];
		args[2];
		if (this._cache) this._cache.delete(ALL_LISTENERS);
		if (args.length === 3) return this._delegate.apply(this, args);
		const events = evtStr.split(SPACE$1);
		for (let n = 0; n < events.length; n++) {
			const parts = events[n].split(".");
			const baseEvent = parts[0];
			const name = parts[1] || "";
			if (!this.eventListeners[baseEvent]) this.eventListeners[baseEvent] = [];
			this.eventListeners[baseEvent].push({
				name,
				handler: selectorOrHandler
			});
		}
		return this;
	}
	off(evtStr, callback) {
		let events = (evtStr || "").split(SPACE$1), len = events.length, n, t, event, parts, baseEvent, name;
		this._cache && this._cache.delete(ALL_LISTENERS);
		if (!evtStr) for (t in this.eventListeners) this._off(t);
		for (n = 0; n < len; n++) {
			event = events[n];
			parts = event.split(".");
			baseEvent = parts[0];
			name = parts[1];
			if (baseEvent) {
				if (this.eventListeners[baseEvent]) this._off(baseEvent, name, callback);
			} else for (t in this.eventListeners) this._off(t, name, callback);
		}
		return this;
	}
	dispatchEvent(evt) {
		const e = {
			target: this,
			type: evt.type,
			evt
		};
		this.fire(evt.type, e);
		return this;
	}
	addEventListener(type, handler) {
		this.on(type, function(evt) {
			handler.call(this, evt.evt);
		});
		return this;
	}
	removeEventListener(type) {
		this.off(type);
		return this;
	}
	_delegate(event, selector, handler) {
		const stopNode = this;
		this.on(event, function(evt) {
			const targets = evt.target.findAncestors(selector, true, stopNode);
			for (let i = 0; i < targets.length; i++) {
				evt = Util.cloneObject(evt);
				evt.currentTarget = targets[i];
				handler.call(targets[i], evt);
			}
		});
		return this;
	}
	remove() {
		if (this.isDragging()) this.stopDrag();
		DD._dragElements.delete(this._id);
		DD._dragElements.forEach((elem, key) => {
			if (this.isAncestorOf(elem.node)) DD._dragElements.delete(key);
		});
		this._remove();
		return this;
	}
	_clearCaches() {
		this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
		this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
		this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
		this._clearSelfAndDescendantCache(STAGE$1);
		this._clearSelfAndDescendantCache(VISIBLE);
		this._clearSelfAndDescendantCache(LISTENING);
	}
	_remove() {
		this._clearCaches();
		const parent = this.getParent();
		if (parent && parent.children) {
			parent.children.splice(this.index, 1);
			parent._setChildrenIndices();
			this.parent = null;
		}
	}
	destroy() {
		this.remove();
		this.clearCache();
		return this;
	}
	getAttr(attr) {
		const method = "get" + Util._capitalize(attr);
		if (Util._isFunction(this[method])) return this[method]();
		return this.attrs[attr];
	}
	getAncestors() {
		let parent = this.getParent(), ancestors = [];
		while (parent) {
			ancestors.push(parent);
			parent = parent.getParent();
		}
		return ancestors;
	}
	getAttrs() {
		return this.attrs || {};
	}
	setAttrs(config) {
		this._batchTransformChanges(() => {
			let key, method;
			if (!config) return this;
			for (key in config) {
				if (key === CHILDREN) continue;
				method = SET + Util._capitalize(key);
				if (Util._isFunction(this[method])) this[method](config[key]);
				else this._setAttr(key, config[key]);
			}
		});
		return this;
	}
	isListening() {
		return this._getCache(LISTENING, this._isListening);
	}
	_isListening(relativeTo) {
		if (!this.listening()) return false;
		const parent = this.getParent();
		if (parent && parent !== relativeTo && this !== relativeTo) return parent._isListening(relativeTo);
		else return true;
	}
	isVisible() {
		return this._getCache(VISIBLE, this._isVisible);
	}
	_isVisible(relativeTo) {
		if (!this.visible()) return false;
		const parent = this.getParent();
		if (parent && parent !== relativeTo && this !== relativeTo) return parent._isVisible(relativeTo);
		else return true;
	}
	shouldDrawHit(top, skipDragCheck = false) {
		if (top) return this._isVisible(top) && this._isListening(top);
		const layer = this.getLayer();
		let layerUnderDrag = false;
		DD._dragElements.forEach((elem) => {
			if (elem.dragStatus !== "dragging") return;
			else if (elem.node.nodeType === "Stage") layerUnderDrag = true;
			else if (elem.node.getLayer() === layer) layerUnderDrag = true;
		});
		const dragSkip = !skipDragCheck && !Konva$2.hitOnDragEnabled && (layerUnderDrag || Konva$2.isTransforming());
		return this.isListening() && this.isVisible() && !dragSkip;
	}
	show() {
		this.visible(true);
		return this;
	}
	hide() {
		this.visible(false);
		return this;
	}
	getZIndex() {
		return this.index || 0;
	}
	getAbsoluteZIndex() {
		let depth = this.getDepth(), that = this, index = 0, nodes, len, n, child;
		function addChildren(children) {
			nodes = [];
			len = children.length;
			for (n = 0; n < len; n++) {
				child = children[n];
				index++;
				if (child.nodeType !== SHAPE) nodes = nodes.concat(child.getChildren().slice());
				if (child._id === that._id) n = len;
			}
			if (nodes.length > 0 && nodes[0].getDepth() <= depth) addChildren(nodes);
		}
		const stage = this.getStage();
		if (that.nodeType !== UPPER_STAGE && stage) addChildren(stage.getChildren());
		return index;
	}
	getDepth() {
		let depth = 0, parent = this.parent;
		while (parent) {
			depth++;
			parent = parent.parent;
		}
		return depth;
	}
	_batchTransformChanges(func) {
		this._batchingTransformChange = true;
		func();
		this._batchingTransformChange = false;
		if (this._needClearTransformCache) {
			this._clearCache(TRANSFORM);
			this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
		}
		this._needClearTransformCache = false;
	}
	setPosition(pos) {
		this._batchTransformChanges(() => {
			this.x(pos.x);
			this.y(pos.y);
		});
		return this;
	}
	getPosition() {
		return {
			x: this.x(),
			y: this.y()
		};
	}
	getRelativePointerPosition() {
		const stage = this.getStage();
		if (!stage) return null;
		const pos = stage.getPointerPosition();
		if (!pos) return null;
		const transform = this.getAbsoluteTransform().copy();
		transform.invert();
		return transform.point(pos);
	}
	getAbsolutePosition(top) {
		let haveCachedParent = false;
		let parent = this.parent;
		while (parent) {
			if (parent.isCached()) {
				haveCachedParent = true;
				break;
			}
			parent = parent.parent;
		}
		if (haveCachedParent && !top) top = true;
		const absoluteMatrix = this.getAbsoluteTransform(top).getMatrix(), absoluteTransform = new Transform(), offset = this.offset();
		absoluteTransform.m = absoluteMatrix.slice();
		absoluteTransform.translate(offset.x, offset.y);
		return absoluteTransform.getTranslation();
	}
	setAbsolutePosition(pos) {
		const { x, y, ...origTrans } = this._clearTransform();
		this.attrs.x = x;
		this.attrs.y = y;
		this._clearCache(TRANSFORM);
		const it = this._getAbsoluteTransform().copy();
		it.invert();
		it.translate(pos.x, pos.y);
		pos = {
			x: this.attrs.x + it.getTranslation().x,
			y: this.attrs.y + it.getTranslation().y
		};
		this._setTransform(origTrans);
		this.setPosition({
			x: pos.x,
			y: pos.y
		});
		this._clearCache(TRANSFORM);
		this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
		return this;
	}
	_setTransform(trans) {
		let key;
		for (key in trans) this.attrs[key] = trans[key];
	}
	_clearTransform() {
		const trans = {
			x: this.x(),
			y: this.y(),
			rotation: this.rotation(),
			scaleX: this.scaleX(),
			scaleY: this.scaleY(),
			offsetX: this.offsetX(),
			offsetY: this.offsetY(),
			skewX: this.skewX(),
			skewY: this.skewY()
		};
		this.attrs.x = 0;
		this.attrs.y = 0;
		this.attrs.rotation = 0;
		this.attrs.scaleX = 1;
		this.attrs.scaleY = 1;
		this.attrs.offsetX = 0;
		this.attrs.offsetY = 0;
		this.attrs.skewX = 0;
		this.attrs.skewY = 0;
		return trans;
	}
	move(change) {
		let changeX = change.x, changeY = change.y, x = this.x(), y = this.y();
		if (changeX !== void 0) x += changeX;
		if (changeY !== void 0) y += changeY;
		this.setPosition({
			x,
			y
		});
		return this;
	}
	_eachAncestorReverse(func, top) {
		let family = [], parent = this.getParent(), len, n;
		if (top && top._id === this._id) return;
		family.unshift(this);
		while (parent && (!top || parent._id !== top._id)) {
			family.unshift(parent);
			parent = parent.parent;
		}
		len = family.length;
		for (n = 0; n < len; n++) func(family[n]);
	}
	rotate(theta) {
		this.rotation(this.rotation() + theta);
		return this;
	}
	moveToTop() {
		if (!this.parent) {
			Util.warn("Node has no parent. moveToTop function is ignored.");
			return false;
		}
		const index = this.index;
		if (index < this.parent.getChildren().length - 1) {
			this.parent.children.splice(index, 1);
			this.parent.children.push(this);
			this.parent._setChildrenIndices();
			return true;
		}
		return false;
	}
	moveUp() {
		if (!this.parent) {
			Util.warn("Node has no parent. moveUp function is ignored.");
			return false;
		}
		const index = this.index;
		if (index < this.parent.getChildren().length - 1) {
			this.parent.children.splice(index, 1);
			this.parent.children.splice(index + 1, 0, this);
			this.parent._setChildrenIndices();
			return true;
		}
		return false;
	}
	moveDown() {
		if (!this.parent) {
			Util.warn("Node has no parent. moveDown function is ignored.");
			return false;
		}
		const index = this.index;
		if (index > 0) {
			this.parent.children.splice(index, 1);
			this.parent.children.splice(index - 1, 0, this);
			this.parent._setChildrenIndices();
			return true;
		}
		return false;
	}
	moveToBottom() {
		if (!this.parent) {
			Util.warn("Node has no parent. moveToBottom function is ignored.");
			return false;
		}
		const index = this.index;
		if (index > 0) {
			this.parent.children.splice(index, 1);
			this.parent.children.unshift(this);
			this.parent._setChildrenIndices();
			return true;
		}
		return false;
	}
	setZIndex(zIndex) {
		if (!this.parent) {
			Util.warn("Node has no parent. zIndex parameter is ignored.");
			return this;
		}
		if (zIndex < 0 || zIndex >= this.parent.children.length) Util.warn("Unexpected value " + zIndex + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
		const index = this.index;
		this.parent.children.splice(index, 1);
		this.parent.children.splice(zIndex, 0, this);
		this.parent._setChildrenIndices();
		return this;
	}
	getAbsoluteOpacity() {
		return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
	}
	_getAbsoluteOpacity() {
		let absOpacity = this.opacity();
		const parent = this.getParent();
		if (parent && !parent._isUnderCache) absOpacity *= parent.getAbsoluteOpacity();
		return absOpacity;
	}
	moveTo(newContainer) {
		if (this.getParent() !== newContainer) {
			this._remove();
			newContainer.add(this);
		}
		return this;
	}
	toObject() {
		let attrs = this.getAttrs(), key, val, getter, defaultValue, nonPlainObject;
		const obj = {
			attrs: {},
			className: this.getClassName()
		};
		for (key in attrs) {
			val = attrs[key];
			nonPlainObject = Util.isObject(val) && !Util._isPlainObject(val) && !Util._isArray(val);
			if (nonPlainObject) continue;
			getter = typeof this[key] === "function" && this[key];
			delete attrs[key];
			defaultValue = getter ? getter.call(this) : null;
			attrs[key] = val;
			if (defaultValue !== val) obj.attrs[key] = val;
		}
		return Util._prepareToStringify(obj);
	}
	toJSON() {
		return JSON.stringify(this.toObject());
	}
	getParent() {
		return this.parent;
	}
	findAncestors(selector, includeSelf, stopNode) {
		const res = [];
		if (includeSelf && this._isMatch(selector)) res.push(this);
		let ancestor = this.parent;
		while (ancestor) {
			if (ancestor === stopNode) return res;
			if (ancestor._isMatch(selector)) res.push(ancestor);
			ancestor = ancestor.parent;
		}
		return res;
	}
	isAncestorOf(node) {
		return false;
	}
	findAncestor(selector, includeSelf, stopNode) {
		return this.findAncestors(selector, includeSelf, stopNode)[0];
	}
	_isMatch(selector) {
		if (!selector) return false;
		if (typeof selector === "function") return selector(this);
		let selectorArr = selector.replace(/ /g, "").split(","), len = selectorArr.length, n, sel;
		for (n = 0; n < len; n++) {
			sel = selectorArr[n];
			if (!Util.isValidSelector(sel)) {
				Util.warn("Selector \"" + sel + "\" is invalid. Allowed selectors examples are \"#foo\", \".bar\" or \"Group\".");
				Util.warn("If you have a custom shape with such className, please change it to start with upper letter like \"Triangle\".");
				Util.warn("Konva is awesome, right?");
			}
			if (sel.charAt(0) === "#") {
				if (this.id() === sel.slice(1)) return true;
			} else if (sel.charAt(0) === ".") {
				if (this.hasName(sel.slice(1))) return true;
			} else if (this.className === sel || this.nodeType === sel) return true;
		}
		return false;
	}
	getLayer() {
		const parent = this.getParent();
		return parent ? parent.getLayer() : null;
	}
	getStage() {
		return this._getCache(STAGE$1, this._getStage);
	}
	_getStage() {
		const parent = this.getParent();
		if (parent) return parent.getStage();
		else return null;
	}
	fire(eventType, evt = {}, bubble) {
		evt.target = evt.target || this;
		if (bubble) this._fireAndBubble(eventType, evt);
		else this._fire(eventType, evt);
		return this;
	}
	getAbsoluteTransform(top) {
		if (top) return this._getAbsoluteTransform(top);
		else return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
	}
	_getAbsoluteTransform(top) {
		let at;
		if (top) {
			at = new Transform();
			this._eachAncestorReverse(function(node) {
				const transformsEnabled = node.transformsEnabled();
				if (transformsEnabled === "all") at.multiply(node.getTransform());
				else if (transformsEnabled === "position") at.translate(node.x() - node.offsetX(), node.y() - node.offsetY());
			}, top);
			return at;
		} else {
			at = this._cache.get(ABSOLUTE_TRANSFORM) || new Transform();
			if (this.parent) this.parent.getAbsoluteTransform().copyInto(at);
			else at.reset();
			const transformsEnabled = this.transformsEnabled();
			if (transformsEnabled === "all") at.multiply(this.getTransform());
			else if (transformsEnabled === "position") {
				const x = this.attrs.x || 0;
				const y = this.attrs.y || 0;
				const offsetX = this.attrs.offsetX || 0;
				const offsetY = this.attrs.offsetY || 0;
				at.translate(x - offsetX, y - offsetY);
			}
			at.dirty = false;
			return at;
		}
	}
	getAbsoluteScale(top) {
		let parent = this;
		while (parent) {
			if (parent._isUnderCache) top = parent;
			parent = parent.getParent();
		}
		const attrs = this.getAbsoluteTransform(top).decompose();
		return {
			x: attrs.scaleX,
			y: attrs.scaleY
		};
	}
	getAbsoluteRotation() {
		return this.getAbsoluteTransform().decompose().rotation;
	}
	getTransform() {
		return this._getCache(TRANSFORM, this._getTransform);
	}
	_getTransform() {
		var _a, _b;
		const m = this._cache.get(TRANSFORM) || new Transform();
		m.reset();
		const x = this.x(), y = this.y(), rotation = Konva$2.getAngle(this.rotation()), scaleX = (_a = this.attrs.scaleX) !== null && _a !== void 0 ? _a : 1, scaleY = (_b = this.attrs.scaleY) !== null && _b !== void 0 ? _b : 1, skewX = this.attrs.skewX || 0, skewY = this.attrs.skewY || 0, offsetX = this.attrs.offsetX || 0, offsetY = this.attrs.offsetY || 0;
		if (x !== 0 || y !== 0) m.translate(x, y);
		if (rotation !== 0) m.rotate(rotation);
		if (skewX !== 0 || skewY !== 0) m.skew(skewX, skewY);
		if (scaleX !== 1 || scaleY !== 1) m.scale(scaleX, scaleY);
		if (offsetX !== 0 || offsetY !== 0) m.translate(-1 * offsetX, -1 * offsetY);
		m.dirty = false;
		return m;
	}
	clone(obj) {
		let attrs = Util.cloneObject(this.attrs), key, allListeners, len, n, listener;
		for (key in obj) attrs[key] = obj[key];
		const node = new this.constructor(attrs);
		for (key in this.eventListeners) {
			allListeners = this.eventListeners[key];
			len = allListeners.length;
			for (n = 0; n < len; n++) {
				listener = allListeners[n];
				if (listener.name.indexOf(KONVA) < 0) {
					if (!node.eventListeners[key]) node.eventListeners[key] = [];
					node.eventListeners[key].push(listener);
				}
			}
		}
		return node;
	}
	_toKonvaCanvas(config) {
		config = config || {};
		const box = this.getClientRect();
		const stage = this.getStage(), x = config.x !== void 0 ? config.x : Math.floor(box.x), y = config.y !== void 0 ? config.y : Math.floor(box.y), pixelRatio = config.pixelRatio || 1, canvas = new SceneCanvas({
			width: config.width || Math.ceil(box.width) || (stage ? stage.width() : 0),
			height: config.height || Math.ceil(box.height) || (stage ? stage.height() : 0),
			pixelRatio
		}), context = canvas.getContext();
		const bufferCanvas = new SceneCanvas({
			width: canvas.width / canvas.pixelRatio + Math.abs(x),
			height: canvas.height / canvas.pixelRatio + Math.abs(y),
			pixelRatio: canvas.pixelRatio
		});
		if (config.imageSmoothingEnabled === false) context._context.imageSmoothingEnabled = false;
		context.save();
		if (x || y) context.translate(-1 * x, -1 * y);
		this.drawScene(canvas, void 0, bufferCanvas);
		context.restore();
		return canvas;
	}
	toCanvas(config) {
		return this._toKonvaCanvas(config)._canvas;
	}
	toDataURL(config) {
		config = config || {};
		const mimeType = config.mimeType || null, quality = config.quality || null;
		const url = this._toKonvaCanvas(config).toDataURL(mimeType, quality);
		if (config.callback) config.callback(url);
		return url;
	}
	toImage(config) {
		return new Promise((resolve, reject) => {
			try {
				const callback = config === null || config === void 0 ? void 0 : config.callback;
				if (callback) delete config.callback;
				Util._urlToImage(this.toDataURL(config), function(img) {
					resolve(img);
					callback === null || callback === void 0 || callback(img);
				});
			} catch (err) {
				reject(err);
			}
		});
	}
	toBlob(config) {
		return new Promise((resolve, reject) => {
			try {
				const callback = config === null || config === void 0 ? void 0 : config.callback;
				if (callback) delete config.callback;
				this.toCanvas(config).toBlob((blob) => {
					resolve(blob);
					callback === null || callback === void 0 || callback(blob);
				}, config === null || config === void 0 ? void 0 : config.mimeType, config === null || config === void 0 ? void 0 : config.quality);
			} catch (err) {
				reject(err);
			}
		});
	}
	setSize(size) {
		this.width(size.width);
		this.height(size.height);
		return this;
	}
	getSize() {
		return {
			width: this.width(),
			height: this.height()
		};
	}
	getClassName() {
		return this.className || this.nodeType;
	}
	getType() {
		return this.nodeType;
	}
	getDragDistance() {
		if (this.attrs.dragDistance !== void 0) return this.attrs.dragDistance;
		else if (this.parent) return this.parent.getDragDistance();
		else return Konva$2.dragDistance;
	}
	_off(type, name, callback) {
		let evtListeners = this.eventListeners[type], i, evtName, handler;
		for (i = 0; i < evtListeners.length; i++) {
			evtName = evtListeners[i].name;
			handler = evtListeners[i].handler;
			if ((evtName !== "konva" || name === "konva") && (!name || evtName === name) && (!callback || callback === handler)) {
				evtListeners.splice(i, 1);
				if (evtListeners.length === 0) {
					delete this.eventListeners[type];
					break;
				}
				i--;
			}
		}
	}
	_fireChangeEvent(attr, oldVal, newVal) {
		this._fire(attr + CHANGE, {
			oldVal,
			newVal
		});
	}
	addName(name) {
		if (!this.hasName(name)) {
			const oldName = this.name();
			const newName = oldName ? oldName + " " + name : name;
			this.name(newName);
		}
		return this;
	}
	hasName(name) {
		if (!name) return false;
		const fullName = this.name();
		if (!fullName) return false;
		return (fullName || "").split(/\s/g).indexOf(name) !== -1;
	}
	removeName(name) {
		const names = (this.name() || "").split(/\s/g);
		const index = names.indexOf(name);
		if (index !== -1) {
			names.splice(index, 1);
			this.name(names.join(" "));
		}
		return this;
	}
	setAttr(attr, val) {
		const func = this[SET + Util._capitalize(attr)];
		if (Util._isFunction(func)) func.call(this, val);
		else this._setAttr(attr, val);
		return this;
	}
	_requestDraw() {
		if (Konva$2.autoDrawEnabled) {
			const drawNode = this.getLayer() || this.getStage();
			drawNode === null || drawNode === void 0 || drawNode.batchDraw();
		}
	}
	_setAttr(key, val) {
		const oldVal = this.attrs[key];
		if (oldVal === val && !Util.isObject(val)) return;
		if (val === void 0 || val === null) delete this.attrs[key];
		else this.attrs[key] = val;
		if (this._shouldFireChangeEvents) this._fireChangeEvent(key, oldVal, val);
		this._requestDraw();
	}
	_setComponentAttr(key, component, val) {
		let oldVal;
		if (val !== void 0) {
			oldVal = this.attrs[key];
			if (!oldVal) this.attrs[key] = this.getAttr(key);
			this.attrs[key][component] = val;
			this._fireChangeEvent(key, oldVal, val);
		}
	}
	_fireAndBubble(eventType, evt, compareShape) {
		if (evt && this.nodeType === SHAPE) evt.target = this;
		const nonBubbling = [
			MOUSEENTER$1,
			MOUSELEAVE$1,
			POINTERENTER$1,
			POINTERLEAVE$1,
			TOUCHENTER,
			TOUCHLEAVE
		];
		if (!(nonBubbling.indexOf(eventType) !== -1 && (compareShape && (this === compareShape || this.isAncestorOf && this.isAncestorOf(compareShape)) || this.nodeType === "Stage" && !compareShape))) {
			this._fire(eventType, evt);
			const stopBubble = nonBubbling.indexOf(eventType) !== -1 && compareShape && compareShape.isAncestorOf && compareShape.isAncestorOf(this) && !compareShape.isAncestorOf(this.parent);
			if ((evt && !evt.cancelBubble || !evt) && this.parent && this.parent.isListening() && !stopBubble) {
				if (compareShape && compareShape.parent) this._fireAndBubble.call(this.parent, eventType, evt, compareShape);
				else this._fireAndBubble.call(this.parent, eventType, evt);
			}
		}
	}
	_getProtoListeners(eventType) {
		var _a, _b;
		const { nodeType } = this;
		const allListeners = Node.protoListenerMap.get(nodeType) || {};
		let events = allListeners === null || allListeners === void 0 ? void 0 : allListeners[eventType];
		if (events === void 0) {
			events = [];
			const seen = /* @__PURE__ */ new Set();
			let obj = Object.getPrototypeOf(this);
			while (obj) {
				const hierarchyEvents = (_b = (_a = obj.eventListeners) === null || _a === void 0 ? void 0 : _a[eventType]) !== null && _b !== void 0 ? _b : [];
				for (let i = 0; i < hierarchyEvents.length; i++) {
					const entry = hierarchyEvents[i];
					if (!seen.has(entry)) {
						seen.add(entry);
						events.push(entry);
					}
				}
				obj = Object.getPrototypeOf(obj);
			}
			allListeners[eventType] = events;
			Node.protoListenerMap.set(nodeType, allListeners);
		}
		return events;
	}
	_fire(eventType, evt) {
		evt = evt || {};
		evt.currentTarget = this;
		evt.type = eventType;
		const topListeners = this._getProtoListeners(eventType);
		if (topListeners) for (let i = 0; i < topListeners.length; i++) topListeners[i].handler.call(this, evt);
		const selfListeners = this.eventListeners[eventType];
		if (selfListeners) {
			const list = selfListeners.slice();
			const origLen = list.length;
			for (let i = 0; i < list.length; i++) list[i].handler.call(this, evt);
			const liveListeners = this.eventListeners[eventType];
			if (liveListeners) for (let i = origLen; i < liveListeners.length; i++) liveListeners[i].handler.call(this, evt);
		}
	}
	draw() {
		this.drawScene();
		this.drawHit();
		return this;
	}
	_createDragElement(evt) {
		const pointerId = evt ? evt.pointerId : void 0;
		const stage = this.getStage();
		const ap = this.getAbsolutePosition();
		if (!stage) return;
		const pos = stage._getPointerById(pointerId) || stage._changedPointerPositions[0] || ap;
		DD._dragElements.set(this._id, {
			node: this,
			startPointerPos: pos,
			offset: {
				x: pos.x - ap.x,
				y: pos.y - ap.y
			},
			dragStatus: "ready",
			pointerId,
			startEvent: evt
		});
	}
	startDrag(evt, bubbleEvent = true) {
		if (!DD._dragElements.has(this._id)) this._createDragElement(evt);
		const elem = DD._dragElements.get(this._id);
		elem.dragStatus = "dragging";
		this.fire("dragstart", {
			type: "dragstart",
			target: this,
			evt: elem.startEvent && elem.startEvent.evt || evt && evt.evt
		}, bubbleEvent);
	}
	_setDragPosition(evt, elem) {
		const pos = this.getStage()._getPointerById(elem.pointerId);
		if (!pos) return;
		let newNodePos = {
			x: pos.x - elem.offset.x,
			y: pos.y - elem.offset.y
		};
		const dbf = this.dragBoundFunc();
		if (dbf !== void 0) {
			const bounded = dbf.call(this, newNodePos, evt);
			if (!bounded) Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
			else newNodePos = bounded;
		}
		if (!this._lastPos || this._lastPos.x !== newNodePos.x || this._lastPos.y !== newNodePos.y) {
			this.setAbsolutePosition(newNodePos);
			this._requestDraw();
		}
		this._lastPos = newNodePos;
	}
	stopDrag(evt) {
		const elem = DD._dragElements.get(this._id);
		if (elem) elem.dragStatus = "stopped";
		DD._endDragBefore(evt);
		DD._endDragAfter(evt);
	}
	setDraggable(draggable) {
		this._setAttr("draggable", draggable);
		this._dragChange();
	}
	isDragging() {
		const elem = DD._dragElements.get(this._id);
		return elem ? elem.dragStatus === "dragging" : false;
	}
	_listenDrag() {
		this._dragCleanup();
		this.on("mousedown.konva touchstart.konva", function(evt) {
			if (!(!(evt.evt["button"] !== void 0) || Konva$2.dragButtons.indexOf(evt.evt["button"]) >= 0)) return;
			if (this.isDragging()) return;
			let hasDraggingChild = false;
			DD._dragElements.forEach((elem) => {
				if (this.isAncestorOf(elem.node)) hasDraggingChild = true;
			});
			if (!hasDraggingChild) this._createDragElement(evt);
		});
	}
	_dragChange() {
		if (this.attrs.draggable) this._listenDrag();
		else {
			this._dragCleanup();
			if (!this.getStage()) return;
			const dragElement = DD._dragElements.get(this._id);
			const isDragging = dragElement && dragElement.dragStatus === "dragging";
			const isReady = dragElement && dragElement.dragStatus === "ready";
			if (isDragging) this.stopDrag();
			else if (isReady) DD._dragElements.delete(this._id);
		}
	}
	_dragCleanup() {
		this.off("mousedown.konva");
		this.off("touchstart.konva");
	}
	isClientRectOnScreen(margin = {
		x: 0,
		y: 0
	}) {
		const stage = this.getStage();
		if (!stage) return false;
		const screenRect = {
			x: -margin.x,
			y: -margin.y,
			width: stage.width() + 2 * margin.x,
			height: stage.height() + 2 * margin.y
		};
		return Util.haveIntersection(screenRect, this.getClientRect());
	}
	static create(data, container) {
		if (Util._isString(data)) data = JSON.parse(data);
		return this._createNode(data, container);
	}
	static _createNode(obj, container) {
		let className = Node.prototype.getClassName.call(obj), children = obj.children, no, len, n;
		if (container) obj.attrs.container = container;
		if (!Konva$2[className]) {
			Util.warn("Can not find a node with class name \"" + className + "\". Fallback to \"Shape\".");
			className = "Shape";
		}
		const Class = Konva$2[className];
		no = new Class(obj.attrs);
		if (children) {
			len = children.length;
			for (n = 0; n < len; n++) no.add(Node._createNode(children[n]));
		}
		return no;
	}
};
Node._absTransformCascadeDepth = 0;
Node._pendingAfterCascade = [];
Node.protoListenerMap = /* @__PURE__ */ new Map();
Node.prototype.nodeType = "Node";
Node.prototype._attrsAffectingSize = [];
Node.prototype.eventListeners = {};
Node.prototype.on(TRANSFORM_CHANGE_STR$1, function() {
	if (this._batchingTransformChange) {
		this._needClearTransformCache = true;
		return;
	}
	this._clearCache(TRANSFORM);
	this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
});
Node.prototype.on("visibleChange.konva", function() {
	this._clearSelfAndDescendantCache(VISIBLE);
});
Node.prototype.on("listeningChange.konva", function() {
	this._clearSelfAndDescendantCache(LISTENING);
});
Node.prototype.on("opacityChange.konva", function() {
	this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
});
var addGetterSetter = Factory.addGetterSetter;
addGetterSetter(Node, "zIndex");
addGetterSetter(Node, "absolutePosition");
addGetterSetter(Node, "position");
addGetterSetter(Node, "x", 0, getNumberValidator());
addGetterSetter(Node, "y", 0, getNumberValidator());
addGetterSetter(Node, "globalCompositeOperation", "source-over", getStringValidator());
addGetterSetter(Node, "opacity", 1, getNumberValidator());
addGetterSetter(Node, "name", "", getStringValidator());
addGetterSetter(Node, "id", "", getStringValidator());
addGetterSetter(Node, "rotation", 0, getNumberValidator());
Factory.addComponentsGetterSetter(Node, "scale", ["x", "y"]);
addGetterSetter(Node, "scaleX", 1, getNumberValidator());
addGetterSetter(Node, "scaleY", 1, getNumberValidator());
Factory.addComponentsGetterSetter(Node, "skew", ["x", "y"]);
addGetterSetter(Node, "skewX", 0, getNumberValidator());
addGetterSetter(Node, "skewY", 0, getNumberValidator());
Factory.addComponentsGetterSetter(Node, "offset", ["x", "y"]);
addGetterSetter(Node, "offsetX", 0, getNumberValidator());
addGetterSetter(Node, "offsetY", 0, getNumberValidator());
addGetterSetter(Node, "dragDistance", void 0, getNumberValidator());
addGetterSetter(Node, "width", 0, getNumberValidator());
addGetterSetter(Node, "height", 0, getNumberValidator());
addGetterSetter(Node, "listening", true, getBooleanValidator());
addGetterSetter(Node, "preventDefault", true, getBooleanValidator());
addGetterSetter(Node, "filters", void 0, function(val) {
	this._filterUpToDate = false;
	return val;
});
addGetterSetter(Node, "visible", true, getBooleanValidator());
addGetterSetter(Node, "transformsEnabled", "all", getStringValidator());
addGetterSetter(Node, "size");
addGetterSetter(Node, "dragBoundFunc");
addGetterSetter(Node, "draggable", false, getBooleanValidator());
Factory.backCompat(Node, {
	rotateDeg: "rotate",
	setRotationDeg: "setRotation",
	getRotationDeg: "getRotation"
});
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Container.js
var Container = class extends Node {
	constructor() {
		super(...arguments);
		this.children = [];
	}
	getChildren(filterFunc) {
		const children = this.children || [];
		if (filterFunc) return children.filter(filterFunc);
		return children;
	}
	hasChildren() {
		return this.getChildren().length > 0;
	}
	removeChildren() {
		this.getChildren().forEach((child) => {
			child.parent = null;
			child.index = 0;
			child.remove();
		});
		this.children = [];
		this._requestDraw();
		return this;
	}
	destroyChildren() {
		this.getChildren().forEach((child) => {
			child.parent = null;
			child.index = 0;
			child.destroy();
		});
		this.children = [];
		this._requestDraw();
		return this;
	}
	add(...children) {
		if (children.length === 0) return this;
		if (children.length > 1) {
			for (let i = 0; i < children.length; i++) this.add(children[i]);
			return this;
		}
		const child = children[0];
		if (child.getParent()) {
			child.moveTo(this);
			return this;
		}
		this._validateAdd(child);
		child.index = this.getChildren().length;
		child.parent = this;
		child._clearCaches();
		this.getChildren().push(child);
		this._fire("add", { child });
		this._requestDraw();
		return this;
	}
	destroy() {
		if (this.hasChildren()) this.destroyChildren();
		super.destroy();
		return this;
	}
	find(selector) {
		return this._generalFind(selector, false);
	}
	findOne(selector) {
		const result = this._generalFind(selector, true);
		return result.length > 0 ? result[0] : void 0;
	}
	_generalFind(selector, findOne) {
		const retArr = [];
		this._descendants((node) => {
			const valid = node._isMatch(selector);
			if (valid) retArr.push(node);
			if (valid && findOne) return true;
			return false;
		});
		return retArr;
	}
	_descendants(fn) {
		let shouldStop = false;
		const children = this.getChildren();
		for (const child of children) {
			shouldStop = fn(child);
			if (shouldStop) return true;
			if (!child.hasChildren()) continue;
			shouldStop = child._descendants(fn);
			if (shouldStop) return true;
		}
		return false;
	}
	toObject() {
		const obj = Node.prototype.toObject.call(this);
		obj.children = [];
		this.getChildren().forEach((child) => {
			obj.children.push(child.toObject());
		});
		return obj;
	}
	isAncestorOf(node) {
		let parent = node.getParent();
		while (parent) {
			if (parent._id === this._id) return true;
			parent = parent.getParent();
		}
		return false;
	}
	clone(obj) {
		const node = Node.prototype.clone.call(this, obj);
		this.getChildren().forEach(function(no) {
			node.add(no.clone());
		});
		return node;
	}
	getAllIntersections(pos) {
		const arr = [];
		this.find("Shape").forEach((shape) => {
			if (shape.isVisible() && shape.intersects(pos)) arr.push(shape);
		});
		return arr;
	}
	_clearSelfAndDescendantCache(attr) {
		var _a;
		const isAbsTransform = attr === "absoluteTransform";
		if (isAbsTransform) Node._absTransformCascadeDepth++;
		try {
			super._clearSelfAndDescendantCache(attr);
			if (this.isCached()) return;
			(_a = this.children) === null || _a === void 0 || _a.forEach(function(node) {
				node._clearSelfAndDescendantCache(attr);
			});
		} finally {
			if (isAbsTransform && --Node._absTransformCascadeDepth === 0) {
				const callbacks = Node._pendingAfterCascade;
				if (callbacks.length) {
					Node._pendingAfterCascade = [];
					for (let i = 0; i < callbacks.length; i++) callbacks[i]();
				}
			}
		}
	}
	_setChildrenIndices() {
		var _a;
		(_a = this.children) === null || _a === void 0 || _a.forEach(function(child, n) {
			child.index = n;
		});
		this._requestDraw();
	}
	drawScene(can, top, bufferCanvas) {
		const layer = this.getLayer(), canvas = can || layer && layer.getCanvas(), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;
		const caching = canvas && canvas.isCache;
		if (!this.isVisible() && !caching) return this;
		if (cachedSceneCanvas) {
			context.save();
			const m = this.getAbsoluteTransform(top).getMatrix();
			context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
			this._drawCachedSceneCanvas(context);
			context.restore();
		} else this._drawChildren("drawScene", canvas, top, bufferCanvas);
		return this;
	}
	drawHit(can, top) {
		if (!this.shouldDrawHit(top)) return this;
		const layer = this.getLayer(), canvas = can || layer && layer.hitCanvas, context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache();
		if (cachedCanvas && cachedCanvas.hit) {
			context.save();
			const m = this.getAbsoluteTransform(top).getMatrix();
			context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
			this._drawCachedHitCanvas(context);
			context.restore();
		} else this._drawChildren("drawHit", canvas, top);
		return this;
	}
	_drawChildren(drawMethod, canvas, top, bufferCanvas) {
		var _a;
		const context = canvas && canvas.getContext(), clipWidth = this.clipWidth(), clipHeight = this.clipHeight(), clipFunc = this.clipFunc(), hasClip = typeof clipWidth === "number" && typeof clipHeight === "number" || clipFunc;
		const selfCache = top === this;
		if (hasClip) {
			context.save();
			const transform = this.getAbsoluteTransform(top);
			let m = transform.getMatrix();
			context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
			context.beginPath();
			let clipArgs;
			if (clipFunc) clipArgs = clipFunc.call(this, context, this);
			else {
				const clipX = this.clipX();
				const clipY = this.clipY();
				context.rect(clipX || 0, clipY || 0, clipWidth, clipHeight);
			}
			context.clip.apply(context, clipArgs);
			m = transform.copy().invert().getMatrix();
			context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
		}
		const hasComposition = !selfCache && this.globalCompositeOperation() !== "source-over" && drawMethod === "drawScene";
		if (hasComposition) {
			context.save();
			context._applyGlobalCompositeOperation(this);
		}
		(_a = this.children) === null || _a === void 0 || _a.forEach(function(child) {
			child[drawMethod](canvas, top, bufferCanvas);
		});
		if (hasComposition) context.restore();
		if (hasClip) context.restore();
	}
	getClientRect(config = {}) {
		var _a;
		const skipTransform = config.skipTransform;
		const relativeTo = config.relativeTo;
		let minX, minY, maxX, maxY;
		let selfRect = {
			x: Infinity,
			y: Infinity,
			width: 0,
			height: 0
		};
		const that = this;
		(_a = this.children) === null || _a === void 0 || _a.forEach(function(child) {
			if (!child.visible()) return;
			const rect = child.getClientRect({
				relativeTo: that,
				skipShadow: config.skipShadow,
				skipStroke: config.skipStroke
			});
			if (rect.width === 0 && rect.height === 0) return;
			if (minX === void 0) {
				minX = rect.x;
				minY = rect.y;
				maxX = rect.x + rect.width;
				maxY = rect.y + rect.height;
			} else {
				minX = Math.min(minX, rect.x);
				minY = Math.min(minY, rect.y);
				maxX = Math.max(maxX, rect.x + rect.width);
				maxY = Math.max(maxY, rect.y + rect.height);
			}
		});
		const shapes = this.find("Shape");
		let hasVisible = false;
		for (let i = 0; i < shapes.length; i++) if (shapes[i]._isVisible(this)) {
			hasVisible = true;
			break;
		}
		if (hasVisible && minX !== void 0) selfRect = {
			x: minX,
			y: minY,
			width: maxX - minX,
			height: maxY - minY
		};
		else selfRect = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
		if (!skipTransform) return this._transformedRect(selfRect, relativeTo);
		return selfRect;
	}
};
Factory.addComponentsGetterSetter(Container, "clip", [
	"x",
	"y",
	"width",
	"height"
]);
Factory.addGetterSetter(Container, "clipX", void 0, getNumberValidator());
Factory.addGetterSetter(Container, "clipY", void 0, getNumberValidator());
Factory.addGetterSetter(Container, "clipWidth", void 0, getNumberValidator());
Factory.addGetterSetter(Container, "clipHeight", void 0, getNumberValidator());
Factory.addGetterSetter(Container, "clipFunc");
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/PointerEvents.js
var Captures = /* @__PURE__ */ new Map();
var SUPPORT_POINTER_EVENTS = Konva$2._global["PointerEvent"] !== void 0;
function getCapturedShape(pointerId) {
	return Captures.get(pointerId);
}
function createEvent(evt) {
	return {
		evt,
		pointerId: evt.pointerId
	};
}
function hasPointerCapture(pointerId, shape) {
	return Captures.get(pointerId) === shape;
}
function setPointerCapture(pointerId, shape) {
	releaseCapture(pointerId);
	if (!shape.getStage()) return;
	Captures.set(pointerId, shape);
	if (SUPPORT_POINTER_EVENTS) shape._fire("gotpointercapture", createEvent(new PointerEvent("gotpointercapture")));
}
function releaseCapture(pointerId, target) {
	const shape = Captures.get(pointerId);
	if (!shape) return;
	const stage = shape.getStage();
	if (stage && stage.content) {}
	Captures.delete(pointerId);
	if (SUPPORT_POINTER_EVENTS) shape._fire("lostpointercapture", createEvent(new PointerEvent("lostpointercapture")));
}
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Stage.js
var STAGE = "Stage";
var STRING = "string";
var PX = "px";
var MOUSEOUT = "mouseout";
var MOUSELEAVE = "mouseleave";
var MOUSEOVER = "mouseover";
var MOUSEENTER = "mouseenter";
var MOUSEMOVE = "mousemove";
var MOUSEDOWN = "mousedown";
var MOUSEUP = "mouseup";
var POINTERMOVE = "pointermove";
var POINTERDOWN = "pointerdown";
var POINTERUP = "pointerup";
var POINTERCANCEL = "pointercancel";
var LOSTPOINTERCAPTURE = "lostpointercapture";
var POINTEROUT = "pointerout";
var POINTERLEAVE = "pointerleave";
var POINTEROVER = "pointerover";
var POINTERENTER = "pointerenter";
var CONTEXTMENU = "contextmenu";
var TOUCHSTART = "touchstart";
var TOUCHEND = "touchend";
var TOUCHMOVE = "touchmove";
var TOUCHCANCEL = "touchcancel";
var WHEEL = "wheel";
var MAX_LAYERS_NUMBER = 5;
var EVENTS = [
	[MOUSEENTER, "_pointerenter"],
	[MOUSEDOWN, "_pointerdown"],
	[MOUSEMOVE, "_pointermove"],
	[MOUSEUP, "_pointerup"],
	[MOUSELEAVE, "_pointerleave"],
	[TOUCHSTART, "_pointerdown"],
	[TOUCHMOVE, "_pointermove"],
	[TOUCHEND, "_pointerup"],
	[TOUCHCANCEL, "_pointercancel"],
	[MOUSEOVER, "_pointerover"],
	[WHEEL, "_wheel"],
	[CONTEXTMENU, "_contextmenu"],
	[POINTERDOWN, "_pointerdown"],
	[POINTERMOVE, "_pointermove"],
	[POINTERUP, "_pointerup"],
	[POINTERCANCEL, "_pointercancel"],
	[POINTERLEAVE, "_pointerleave"],
	[LOSTPOINTERCAPTURE, "_lostpointercapture"]
];
var EVENTS_MAP = {
	mouse: {
		[POINTEROUT]: MOUSEOUT,
		[POINTERLEAVE]: MOUSELEAVE,
		[POINTEROVER]: MOUSEOVER,
		[POINTERENTER]: MOUSEENTER,
		[POINTERMOVE]: MOUSEMOVE,
		[POINTERDOWN]: MOUSEDOWN,
		[POINTERUP]: MOUSEUP,
		[POINTERCANCEL]: "mousecancel",
		pointerclick: "click",
		pointerdblclick: "dblclick"
	},
	touch: {
		[POINTEROUT]: "touchout",
		[POINTERLEAVE]: "touchleave",
		[POINTEROVER]: "touchover",
		[POINTERENTER]: "touchenter",
		[POINTERMOVE]: TOUCHMOVE,
		[POINTERDOWN]: TOUCHSTART,
		[POINTERUP]: TOUCHEND,
		[POINTERCANCEL]: TOUCHCANCEL,
		pointerclick: "tap",
		pointerdblclick: "dbltap"
	},
	pointer: {
		[POINTEROUT]: POINTEROUT,
		[POINTERLEAVE]: POINTERLEAVE,
		[POINTEROVER]: POINTEROVER,
		[POINTERENTER]: POINTERENTER,
		[POINTERMOVE]: POINTERMOVE,
		[POINTERDOWN]: POINTERDOWN,
		[POINTERUP]: POINTERUP,
		[POINTERCANCEL]: POINTERCANCEL,
		pointerclick: "pointerclick",
		pointerdblclick: "pointerdblclick"
	}
};
var getEventType = (type) => {
	if (type.indexOf("pointer") >= 0) return "pointer";
	if (type.indexOf("touch") >= 0) return "touch";
	return "mouse";
};
var getEventsMap = (eventType) => {
	const type = getEventType(eventType);
	if (type === "pointer") return Konva$2.pointerEventsEnabled && EVENTS_MAP.pointer;
	if (type === "touch") return EVENTS_MAP.touch;
	if (type === "mouse") return EVENTS_MAP.mouse;
};
function checkNoClip(attrs = {}) {
	if (attrs.clipFunc || attrs.clipWidth || attrs.clipHeight) Util.warn("Stage does not support clipping. Please use clip for Layers or Groups.");
	return attrs;
}
var NO_POINTERS_MESSAGE = `Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);`;
var stages = [];
var Stage = class extends Container {
	constructor(config) {
		super(checkNoClip(config));
		this._pointerPositions = [];
		this._changedPointerPositions = [];
		this._buildDOM();
		this._bindContentEvents();
		stages.push(this);
		this.on("widthChange.konva heightChange.konva", this._resizeDOM);
		this.on("visibleChange.konva", this._checkVisibility);
		this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
			checkNoClip(this.attrs);
		});
		this._checkVisibility();
	}
	_validateAdd(child) {
		const isLayer = child.getType() === "Layer";
		const isFastLayer = child.getType() === "FastLayer";
		if (!(isLayer || isFastLayer)) Util.throw("You may only add layers to the stage.");
	}
	_checkVisibility() {
		if (!this.content) return;
		const style = this.visible() ? "" : "none";
		this.content.style.display = style;
	}
	setContainer(container) {
		if (typeof container === STRING) {
			let id;
			if (container.charAt(0) === ".") {
				const className = container.slice(1);
				container = document.getElementsByClassName(className)[0];
			} else {
				if (container.charAt(0) !== "#") id = container;
				else id = container.slice(1);
				container = document.getElementById(id);
			}
			if (!container) throw "Can not find container in document with id " + id;
		}
		this._setAttr("container", container);
		if (this.content) {
			if (this.content.parentElement) this.content.parentElement.removeChild(this.content);
			container.appendChild(this.content);
		}
		return this;
	}
	shouldDrawHit() {
		return true;
	}
	clear() {
		const layers = this.children, len = layers.length;
		for (let n = 0; n < len; n++) layers[n].clear();
		return this;
	}
	clone(obj) {
		if (!obj) obj = {};
		obj.container = typeof document !== "undefined" && document.createElement("div");
		return Container.prototype.clone.call(this, obj);
	}
	destroy() {
		super.destroy();
		const content = this.content;
		if (content && Util._isInDocument(content)) this.container().removeChild(content);
		const index = stages.indexOf(this);
		if (index > -1) stages.splice(index, 1);
		Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas);
		return this;
	}
	getPointerPosition() {
		const pos = this._pointerPositions[0] || this._changedPointerPositions[0];
		if (!pos) {
			Util.warn(NO_POINTERS_MESSAGE);
			return null;
		}
		return {
			x: pos.x,
			y: pos.y
		};
	}
	_getPointerById(id) {
		return this._pointerPositions.find((p) => p.id === id);
	}
	getPointersPositions() {
		return this._pointerPositions;
	}
	getStage() {
		return this;
	}
	getContent() {
		return this.content;
	}
	_toKonvaCanvas(config) {
		config = { ...config };
		config.x = config.x || 0;
		config.y = config.y || 0;
		config.width = config.width || this.width();
		config.height = config.height || this.height();
		const canvas = new SceneCanvas({
			width: config.width,
			height: config.height,
			pixelRatio: config.pixelRatio || 1
		});
		const _context = canvas.getContext()._context;
		const layers = this.children;
		if (config.x || config.y) _context.translate(-1 * config.x, -1 * config.y);
		layers.forEach(function(layer) {
			if (!layer.isVisible()) return;
			const layerCanvas = layer._toKonvaCanvas(config);
			_context.drawImage(layerCanvas._canvas, config.x, config.y, layerCanvas.getWidth() / layerCanvas.getPixelRatio(), layerCanvas.getHeight() / layerCanvas.getPixelRatio());
		});
		return canvas;
	}
	getIntersection(pos) {
		if (!pos) return null;
		const layers = this.children, end = layers.length - 1;
		for (let n = end; n >= 0; n--) {
			const shape = layers[n].getIntersection(pos);
			if (shape) return shape;
		}
		return null;
	}
	_resizeDOM() {
		const width = this.width();
		const height = this.height();
		if (this.content) {
			this.content.style.width = width + PX;
			this.content.style.height = height + PX;
		}
		this.bufferCanvas.setSize(width, height);
		this.bufferHitCanvas.setSize(width, height);
		this.children.forEach((layer) => {
			layer.setSize({
				width,
				height
			});
			layer.draw();
		});
	}
	add(layer, ...rest) {
		if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) this.add(arguments[i]);
			return this;
		}
		super.add(layer);
		const length = this.children.length;
		if (length > MAX_LAYERS_NUMBER) Util.warn("The stage has " + length + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.");
		layer.setSize({
			width: this.width(),
			height: this.height()
		});
		layer.draw();
		if (Konva$2.isBrowser) this.content.appendChild(layer.canvas._canvas);
		return this;
	}
	getParent() {
		return null;
	}
	getLayer() {
		return null;
	}
	hasPointerCapture(pointerId) {
		return hasPointerCapture(pointerId, this);
	}
	setPointerCapture(pointerId) {
		setPointerCapture(pointerId, this);
	}
	releaseCapture(pointerId) {
		releaseCapture(pointerId, this);
	}
	getLayers() {
		return this.children;
	}
	_bindContentEvents() {
		if (!Konva$2.isBrowser) return;
		EVENTS.forEach(([event, methodName]) => {
			this.content.addEventListener(event, (evt) => {
				this[methodName](evt);
			}, { passive: false });
		});
	}
	_pointerenter(evt) {
		this.setPointersPositions(evt);
		const events = getEventsMap(evt.type);
		if (events) this._fire(events.pointerenter, {
			evt,
			target: this,
			currentTarget: this
		});
	}
	_pointerover(evt) {
		this.setPointersPositions(evt);
		const events = getEventsMap(evt.type);
		if (events) this._fire(events.pointerover, {
			evt,
			target: this,
			currentTarget: this
		});
	}
	_getTargetShape(evenType) {
		let shape = this[evenType + "targetShape"];
		if (shape && !shape.getStage()) shape = null;
		return shape;
	}
	_pointerleave(evt) {
		const events = getEventsMap(evt.type);
		const eventType = getEventType(evt.type);
		if (!events) return;
		this.setPointersPositions(evt);
		const targetShape = this._getTargetShape(eventType);
		const eventsEnabled = !(Konva$2.isDragging() || Konva$2.isTransforming()) || Konva$2.hitOnDragEnabled;
		if (targetShape && eventsEnabled) {
			targetShape._fireAndBubble(events.pointerout, { evt });
			targetShape._fireAndBubble(events.pointerleave, { evt });
			this._fire(events.pointerleave, {
				evt,
				target: this,
				currentTarget: this
			});
			this[eventType + "targetShape"] = null;
		} else if (eventsEnabled) {
			this._fire(events.pointerleave, {
				evt,
				target: this,
				currentTarget: this
			});
			this._fire(events.pointerout, {
				evt,
				target: this,
				currentTarget: this
			});
		}
		this.pointerPos = null;
		this._pointerPositions = [];
	}
	_pointerdown(evt) {
		const events = getEventsMap(evt.type);
		const eventType = getEventType(evt.type);
		if (!events) return;
		this.setPointersPositions(evt);
		let triggeredOnShape = false;
		this._changedPointerPositions.forEach((pos) => {
			const shape = this.getIntersection(pos);
			DD.justDragged = false;
			Konva$2["_" + eventType + "ListenClick"] = true;
			if (!shape || !shape.isListening()) {
				this[eventType + "ClickStartShape"] = void 0;
				return;
			}
			if (Konva$2.capturePointerEventsEnabled) shape.setPointerCapture(pos.id);
			this[eventType + "ClickStartShape"] = shape;
			shape._fireAndBubble(events.pointerdown, {
				evt,
				pointerId: pos.id
			});
			triggeredOnShape = true;
			const isTouch = evt.type.indexOf("touch") >= 0;
			if (shape.preventDefault() && evt.cancelable && isTouch) evt.preventDefault();
		});
		if (!triggeredOnShape) this._fire(events.pointerdown, {
			evt,
			target: this,
			currentTarget: this,
			pointerId: this._pointerPositions[0].id
		});
	}
	_pointermove(evt) {
		const events = getEventsMap(evt.type);
		const eventType = getEventType(evt.type);
		if (!events) return;
		const isTouchPointer = evt.type.indexOf("touch") >= 0 || evt.pointerType === "touch";
		if (Konva$2.isDragging() && DD.node.preventDefault() && evt.cancelable && isTouchPointer) evt.preventDefault();
		this.setPointersPositions(evt);
		if (!(!(Konva$2.isDragging() || Konva$2.isTransforming()) || Konva$2.hitOnDragEnabled)) return;
		const processedShapesIds = {};
		let triggeredOnShape = false;
		const targetShape = this._getTargetShape(eventType);
		this._changedPointerPositions.forEach((pos) => {
			const shape = getCapturedShape(pos.id) || this.getIntersection(pos);
			const pointerId = pos.id;
			const event = {
				evt,
				pointerId
			};
			const differentTarget = targetShape !== shape;
			if (differentTarget && targetShape) {
				targetShape._fireAndBubble(events.pointerout, { ...event }, shape);
				targetShape._fireAndBubble(events.pointerleave, { ...event }, shape);
			}
			if (shape) {
				if (processedShapesIds[shape._id]) return;
				processedShapesIds[shape._id] = true;
			}
			if (shape && shape.isListening()) {
				triggeredOnShape = true;
				if (differentTarget) {
					shape._fireAndBubble(events.pointerover, { ...event }, targetShape);
					shape._fireAndBubble(events.pointerenter, { ...event }, targetShape);
					this[eventType + "targetShape"] = shape;
				}
				shape._fireAndBubble(events.pointermove, { ...event });
			} else if (targetShape) {
				this._fire(events.pointerover, {
					evt,
					target: this,
					currentTarget: this,
					pointerId
				});
				this[eventType + "targetShape"] = null;
			}
		});
		if (!triggeredOnShape) this._fire(events.pointermove, {
			evt,
			target: this,
			currentTarget: this,
			pointerId: this._changedPointerPositions[0].id
		});
	}
	_pointerup(evt) {
		const events = getEventsMap(evt.type);
		const eventType = getEventType(evt.type);
		if (!events) return;
		this.setPointersPositions(evt);
		const clickStartShape = this[eventType + "ClickStartShape"];
		const clickEndShape = this[eventType + "ClickEndShape"];
		const processedShapesIds = {};
		let skipPointerUpTrigger = false;
		this._changedPointerPositions.forEach((pos) => {
			const shape = getCapturedShape(pos.id) || this.getIntersection(pos);
			if (shape) {
				shape.releaseCapture(pos.id);
				if (processedShapesIds[shape._id]) return;
				processedShapesIds[shape._id] = true;
			}
			const pointerId = pos.id;
			const event = {
				evt,
				pointerId
			};
			let fireDblClick = false;
			if (Konva$2["_" + eventType + "InDblClickWindow"]) {
				fireDblClick = true;
				clearTimeout(this[eventType + "DblTimeout"]);
			} else if (!DD.justDragged) {
				Konva$2["_" + eventType + "InDblClickWindow"] = true;
				clearTimeout(this[eventType + "DblTimeout"]);
			}
			this[eventType + "DblTimeout"] = setTimeout(function() {
				Konva$2["_" + eventType + "InDblClickWindow"] = false;
			}, Konva$2.dblClickWindow);
			if (shape && shape.isListening()) {
				skipPointerUpTrigger = true;
				this[eventType + "ClickEndShape"] = shape;
				shape._fireAndBubble(events.pointerup, { ...event });
				if (Konva$2["_" + eventType + "ListenClick"] && clickStartShape && clickStartShape === shape) {
					shape._fireAndBubble(events.pointerclick, { ...event });
					if (fireDblClick && clickEndShape && clickEndShape === shape) shape._fireAndBubble(events.pointerdblclick, { ...event });
				}
			} else {
				this[eventType + "ClickEndShape"] = null;
				if (!skipPointerUpTrigger) {
					this._fire(events.pointerup, {
						evt,
						target: this,
						currentTarget: this,
						pointerId: this._changedPointerPositions[0].id
					});
					skipPointerUpTrigger = true;
				}
				if (Konva$2["_" + eventType + "ListenClick"]) this._fire(events.pointerclick, {
					evt,
					target: this,
					currentTarget: this,
					pointerId
				});
				if (fireDblClick) this._fire(events.pointerdblclick, {
					evt,
					target: this,
					currentTarget: this,
					pointerId
				});
			}
		});
		if (!skipPointerUpTrigger) this._fire(events.pointerup, {
			evt,
			target: this,
			currentTarget: this,
			pointerId: this._changedPointerPositions[0].id
		});
		Konva$2["_" + eventType + "ListenClick"] = false;
		if (evt.cancelable && eventType !== "touch" && eventType !== "pointer") evt.preventDefault();
	}
	_contextmenu(evt) {
		this.setPointersPositions(evt);
		const shape = this.getIntersection(this.getPointerPosition());
		if (shape && shape.isListening()) shape._fireAndBubble(CONTEXTMENU, { evt });
		else this._fire(CONTEXTMENU, {
			evt,
			target: this,
			currentTarget: this
		});
	}
	_wheel(evt) {
		this.setPointersPositions(evt);
		const shape = this.getIntersection(this.getPointerPosition());
		if (shape && shape.isListening()) shape._fireAndBubble(WHEEL, { evt });
		else this._fire(WHEEL, {
			evt,
			target: this,
			currentTarget: this
		});
	}
	_pointercancel(evt) {
		this.setPointersPositions(evt);
		const shape = getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());
		if (shape) shape._fireAndBubble(POINTERUP, createEvent(evt));
		releaseCapture(evt.pointerId);
	}
	_lostpointercapture(evt) {
		releaseCapture(evt.pointerId);
	}
	setPointersPositions(evt) {
		const contentPosition = this._getContentPosition();
		let x = null, y = null;
		evt = evt ? evt : window.event;
		if (evt.touches !== void 0) {
			this._pointerPositions = [];
			this._changedPointerPositions = [];
			Array.prototype.forEach.call(evt.touches, (touch) => {
				this._pointerPositions.push({
					id: touch.identifier,
					x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
					y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
				});
			});
			Array.prototype.forEach.call(evt.changedTouches || evt.touches, (touch) => {
				this._changedPointerPositions.push({
					id: touch.identifier,
					x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
					y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
				});
			});
		} else {
			x = (evt.clientX - contentPosition.left) / contentPosition.scaleX;
			y = (evt.clientY - contentPosition.top) / contentPosition.scaleY;
			this.pointerPos = {
				x,
				y
			};
			this._pointerPositions = [{
				x,
				y,
				id: Util._getFirstPointerId(evt)
			}];
			this._changedPointerPositions = [{
				x,
				y,
				id: Util._getFirstPointerId(evt)
			}];
		}
	}
	_setPointerPosition(evt) {
		Util.warn("Method _setPointerPosition is deprecated. Use \"stage.setPointersPositions(event)\" instead.");
		this.setPointersPositions(evt);
	}
	_getContentPosition() {
		if (!this.content || !this.content.getBoundingClientRect) return {
			top: 0,
			left: 0,
			scaleX: 1,
			scaleY: 1
		};
		const rect = this.content.getBoundingClientRect();
		return {
			top: rect.top,
			left: rect.left,
			scaleX: rect.width / this.content.clientWidth || 1,
			scaleY: rect.height / this.content.clientHeight || 1
		};
	}
	_buildDOM() {
		this.bufferCanvas = new SceneCanvas({
			width: this.width(),
			height: this.height()
		});
		this.bufferHitCanvas = new HitCanvas({
			pixelRatio: 1,
			width: this.width(),
			height: this.height()
		});
		if (!Konva$2.isBrowser) return;
		const container = this.container();
		if (!container) throw "Stage has no container. A container is required.";
		container.innerHTML = "";
		this.content = document.createElement("div");
		this.content.style.position = "relative";
		this.content.style.userSelect = "none";
		this.content.className = "konvajs-content";
		this.content.setAttribute("role", "presentation");
		container.appendChild(this.content);
		this._resizeDOM();
	}
	cache() {
		Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.");
		return this;
	}
	clearCache() {
		return this;
	}
	batchDraw() {
		this.getChildren().forEach(function(layer) {
			layer.batchDraw();
		});
		return this;
	}
};
Stage.prototype.nodeType = STAGE;
_registerNode(Stage);
Factory.addGetterSetter(Stage, "container");
if (Konva$2.isBrowser) document.addEventListener("visibilitychange", () => {
	stages.forEach((stage) => {
		stage.batchDraw();
	});
});
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Shape.js
var HAS_SHADOW = "hasShadow";
var SHADOW_RGBA = "shadowRGBA";
var patternImage = "patternImage";
var linearGradient = "linearGradient";
var radialGradient = "radialGradient";
var dummyContext$1;
function getDummyContext$1() {
	if (dummyContext$1) return dummyContext$1;
	dummyContext$1 = Util.createCanvasElement().getContext("2d");
	return dummyContext$1;
}
var shapes = {};
function _fillFunc$2(context) {
	const fillRule = this.attrs.fillRule;
	if (fillRule) context.fill(fillRule);
	else context.fill();
}
function _strokeFunc$2(context) {
	context.stroke();
}
function _fillFuncHit(context) {
	const fillRule = this.attrs.fillRule;
	if (fillRule) context.fill(fillRule);
	else context.fill();
}
function _strokeFuncHit(context) {
	context.stroke();
}
function _clearHasShadowCache() {
	this._clearCache(HAS_SHADOW);
}
function _clearGetShadowRGBACache() {
	this._clearCache(SHADOW_RGBA);
}
function _clearFillPatternCache() {
	this._clearCache(patternImage);
}
function _clearLinearGradientCache() {
	this._clearCache(linearGradient);
}
function _clearRadialGradientCache() {
	this._clearCache(radialGradient);
}
var Shape = class extends Node {
	constructor(config) {
		super(config);
		let key;
		let attempts = 0;
		while (true) {
			key = Util.getHitColor();
			if (key && !(key in shapes)) break;
			attempts++;
			if (attempts >= 1e4) {
				Util.warn("Failed to find a unique color key for a shape. Konva may work incorrectly. Most likely your browser is using canvas farbling. Consider disabling it.");
				key = Util.getRandomColor();
				break;
			}
		}
		this.colorKey = key;
		shapes[key] = this;
	}
	getContext() {
		Util.warn("shape.getContext() method is deprecated. Please do not use it.");
		return this.getLayer().getContext();
	}
	getCanvas() {
		Util.warn("shape.getCanvas() method is deprecated. Please do not use it.");
		return this.getLayer().getCanvas();
	}
	getSceneFunc() {
		return this.attrs.sceneFunc || this["_sceneFunc"];
	}
	getHitFunc() {
		return this.attrs.hitFunc || this["_hitFunc"];
	}
	hasShadow() {
		return this._getCache(HAS_SHADOW, this._hasShadow);
	}
	_hasShadow() {
		return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
	}
	_getFillPattern() {
		return this._getCache(patternImage, this.__getFillPattern);
	}
	__getFillPattern() {
		if (this.fillPatternImage()) {
			const pattern = getDummyContext$1().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
			if (pattern && pattern.setTransform) {
				const tr = new Transform();
				tr.translate(this.fillPatternX(), this.fillPatternY());
				tr.rotate(Konva$2.getAngle(this.fillPatternRotation()));
				tr.scale(this.fillPatternScaleX(), this.fillPatternScaleY());
				tr.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
				const m = tr.getMatrix();
				const matrix = typeof DOMMatrix === "undefined" ? {
					a: m[0],
					b: m[1],
					c: m[2],
					d: m[3],
					e: m[4],
					f: m[5]
				} : new DOMMatrix(m);
				pattern.setTransform(matrix);
			}
			return pattern;
		}
	}
	_getLinearGradient() {
		return this._getCache(linearGradient, this.__getLinearGradient);
	}
	__getLinearGradient() {
		const colorStops = this.fillLinearGradientColorStops();
		if (colorStops) {
			const ctx = getDummyContext$1();
			const start = this.fillLinearGradientStartPoint();
			const end = this.fillLinearGradientEndPoint();
			const grd = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
			for (let n = 0; n < colorStops.length; n += 2) grd.addColorStop(colorStops[n], colorStops[n + 1]);
			return grd;
		}
	}
	_getRadialGradient() {
		return this._getCache(radialGradient, this.__getRadialGradient);
	}
	__getRadialGradient() {
		const colorStops = this.fillRadialGradientColorStops();
		if (colorStops) {
			const ctx = getDummyContext$1();
			const start = this.fillRadialGradientStartPoint();
			const end = this.fillRadialGradientEndPoint();
			const grd = ctx.createRadialGradient(start.x, start.y, this.fillRadialGradientStartRadius(), end.x, end.y, this.fillRadialGradientEndRadius());
			for (let n = 0; n < colorStops.length; n += 2) grd.addColorStop(colorStops[n], colorStops[n + 1]);
			return grd;
		}
	}
	getShadowRGBA() {
		return this._getCache(SHADOW_RGBA, this._getShadowRGBA);
	}
	_getShadowRGBA() {
		if (!this.hasShadow()) return;
		const rgba = Util.colorToRGBA(this.shadowColor());
		if (rgba) return "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + rgba.a * (this.shadowOpacity() || 1) + ")";
	}
	hasFill() {
		return this._calculate("hasFill", [
			"fillEnabled",
			"fill",
			"fillPatternImage",
			"fillLinearGradientColorStops",
			"fillRadialGradientColorStops"
		], () => {
			return this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops());
		});
	}
	hasStroke() {
		return this._calculate("hasStroke", [
			"strokeEnabled",
			"strokeWidth",
			"stroke",
			"strokeLinearGradientColorStops"
		], () => {
			return this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops());
		});
	}
	hasHitStroke() {
		const width = this.hitStrokeWidth();
		if (width === "auto") return this.hasStroke();
		return this.strokeEnabled() && !!width;
	}
	intersects(point) {
		const stage = this.getStage();
		if (!stage) return false;
		const bufferHitCanvas = stage.bufferHitCanvas;
		bufferHitCanvas.getContext().clear();
		this.drawHit(bufferHitCanvas, void 0, true);
		return bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data[3] > 0;
	}
	destroy() {
		Node.prototype.destroy.call(this);
		delete shapes[this.colorKey];
		delete this.colorKey;
		return this;
	}
	_useBufferCanvas(forceFill) {
		var _a;
		if (!((_a = this.attrs.perfectDrawEnabled) !== null && _a !== void 0 ? _a : true)) return false;
		const hasFill = forceFill || this.hasFill();
		const hasStroke = this.hasStroke();
		const isTransparent = this.getAbsoluteOpacity() !== 1;
		if (hasFill && hasStroke && isTransparent) return true;
		const hasShadow = this.hasShadow();
		const strokeForShadow = this.shadowForStrokeEnabled();
		if (hasFill && hasStroke && hasShadow && strokeForShadow) return true;
		return false;
	}
	setStrokeHitEnabled(val) {
		Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.");
		if (val) this.hitStrokeWidth("auto");
		else this.hitStrokeWidth(0);
	}
	getStrokeHitEnabled() {
		if (this.hitStrokeWidth() === 0) return false;
		else return true;
	}
	getSelfRect() {
		const size = this.size();
		return {
			x: this._centroid ? -size.width / 2 : 0,
			y: this._centroid ? -size.height / 2 : 0,
			width: size.width,
			height: size.height
		};
	}
	getClientRect(config = {}) {
		let hasCachedParent = false;
		let parent = this.getParent();
		while (parent) {
			if (parent.isCached()) {
				hasCachedParent = true;
				break;
			}
			parent = parent.getParent();
		}
		const skipTransform = config.skipTransform;
		const relativeTo = config.relativeTo || hasCachedParent && this.getStage() || void 0;
		const fillRect = this.getSelfRect();
		const strokeWidth = !config.skipStroke && this.hasStroke() && this.strokeWidth() || 0;
		const fillAndStrokeWidth = fillRect.width + strokeWidth;
		const fillAndStrokeHeight = fillRect.height + strokeWidth;
		const applyShadow = !config.skipShadow && this.hasShadow();
		const shadowOffsetX = applyShadow ? this.shadowOffsetX() : 0;
		const shadowOffsetY = applyShadow ? this.shadowOffsetY() : 0;
		const preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
		const preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);
		const blurRadius = applyShadow && this.shadowBlur() || 0;
		const rect = {
			width: preWidth + blurRadius * 2,
			height: preHeight + blurRadius * 2,
			x: -(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetX, 0) + fillRect.x,
			y: -(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetY, 0) + fillRect.y
		};
		if (!skipTransform) return this._transformedRect(rect, relativeTo);
		return rect;
	}
	drawScene(can, top, bufferCanvas) {
		const layer = this.getLayer();
		const context = (can || layer.getCanvas()).getContext(), cachedCanvas = this._getCanvasCache(), drawFunc = this.getSceneFunc(), hasShadow = this.hasShadow();
		let stage;
		const cachingSelf = top === this;
		if (!this.isVisible() && !cachingSelf) return this;
		if (cachedCanvas) {
			context.save();
			const m = this.getAbsoluteTransform(top).getMatrix();
			context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
			this._drawCachedSceneCanvas(context);
			context.restore();
			return this;
		}
		if (!drawFunc) return this;
		context.save();
		if (this._useBufferCanvas() && true) {
			stage = this.getStage();
			const bc = bufferCanvas || stage.bufferCanvas;
			const bufferContext = bc.getContext();
			if (bufferCanvas) {
				bufferContext.save();
				bufferContext.setTransform(1, 0, 0, 1, 0, 0);
				bufferContext.clearRect(0, 0, bc.width, bc.height);
				bufferContext.restore();
			} else bufferContext.clear();
			bufferContext.save();
			bufferContext.imageSmoothingEnabled = context.imageSmoothingEnabled;
			bufferContext._applyLineJoin(this);
			bufferContext._applyMiterLimit(this);
			const o = this.getAbsoluteTransform(top).getMatrix();
			bufferContext.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
			drawFunc.call(this, bufferContext, this);
			bufferContext.restore();
			const ratio = bc.pixelRatio;
			if (hasShadow) context._applyShadow(this);
			if (!cachingSelf) {
				context._applyOpacity(this);
				context._applyGlobalCompositeOperation(this);
			}
			context.drawImage(bc._canvas, bc.x || 0, bc.y || 0, bc.width / ratio, bc.height / ratio);
		} else {
			context._applyLineJoin(this);
			context._applyMiterLimit(this);
			if (!cachingSelf) {
				const o = this.getAbsoluteTransform(top).getMatrix();
				context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
				context._applyOpacity(this);
				context._applyGlobalCompositeOperation(this);
			}
			if (hasShadow) context._applyShadow(this);
			drawFunc.call(this, context, this);
		}
		context.restore();
		return this;
	}
	drawHit(can, top, skipDragCheck = false) {
		if (!this.shouldDrawHit(top, skipDragCheck)) return this;
		const layer = this.getLayer(), canvas = can || layer.hitCanvas, context = canvas && canvas.getContext(), drawFunc = this.hitFunc() || this.sceneFunc(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
		if (!this.colorKey) Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()");
		if (cachedHitCanvas) {
			context.save();
			const m = this.getAbsoluteTransform(top).getMatrix();
			context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
			this._drawCachedHitCanvas(context);
			context.restore();
			return this;
		}
		if (!drawFunc) return this;
		context.save();
		context._applyLineJoin(this);
		context._applyMiterLimit(this);
		if (!(this === top)) {
			const o = this.getAbsoluteTransform(top).getMatrix();
			context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
		}
		drawFunc.call(this, context, this);
		context.restore();
		return this;
	}
	drawHitFromCache(alphaThreshold = 0) {
		const cachedCanvas = this._getCanvasCache(), sceneCanvas = this._getCachedSceneCanvas(), hitCanvas = cachedCanvas.hit, hitContext = hitCanvas.getContext(), hitWidth = hitCanvas.getWidth(), hitHeight = hitCanvas.getHeight();
		hitContext.clear();
		hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);
		try {
			const hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
			const hitData = hitImageData.data;
			const len = hitData.length;
			const rgbColorKey = Util._hexToRgb(this.colorKey);
			for (let i = 0; i < len; i += 4) if (hitData[i + 3] > alphaThreshold) {
				hitData[i] = rgbColorKey.r;
				hitData[i + 1] = rgbColorKey.g;
				hitData[i + 2] = rgbColorKey.b;
				hitData[i + 3] = 255;
			} else hitData[i + 3] = 0;
			hitContext.putImageData(hitImageData, 0, 0);
		} catch (e) {
			Util.error("Unable to draw hit graph from cached scene canvas. " + e.message);
		}
		return this;
	}
	hasPointerCapture(pointerId) {
		return hasPointerCapture(pointerId, this);
	}
	setPointerCapture(pointerId) {
		setPointerCapture(pointerId, this);
	}
	releaseCapture(pointerId) {
		releaseCapture(pointerId, this);
	}
};
Shape.prototype._fillFunc = _fillFunc$2;
Shape.prototype._strokeFunc = _strokeFunc$2;
Shape.prototype._fillFuncHit = _fillFuncHit;
Shape.prototype._strokeFuncHit = _strokeFuncHit;
Shape.prototype._centroid = false;
Shape.prototype.nodeType = "Shape";
_registerNode(Shape);
Shape.prototype.eventListeners = {};
Shape.prototype.on("shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearHasShadowCache);
Shape.prototype.on("shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearGetShadowRGBACache);
Shape.prototype.on("fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", _clearFillPatternCache);
Shape.prototype.on("fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", _clearLinearGradientCache);
Shape.prototype.on("fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", _clearRadialGradientCache);
Factory.addGetterSetter(Shape, "stroke", void 0, getStringOrGradientValidator());
Factory.addGetterSetter(Shape, "strokeWidth", 2, getNumberValidator());
Factory.addGetterSetter(Shape, "fillAfterStrokeEnabled", false);
Factory.addGetterSetter(Shape, "hitStrokeWidth", "auto", getNumberOrAutoValidator());
Factory.addGetterSetter(Shape, "strokeHitEnabled", true, getBooleanValidator());
Factory.addGetterSetter(Shape, "perfectDrawEnabled", true, getBooleanValidator());
Factory.addGetterSetter(Shape, "shadowForStrokeEnabled", true, getBooleanValidator());
Factory.addGetterSetter(Shape, "lineJoin");
Factory.addGetterSetter(Shape, "lineCap");
Factory.addGetterSetter(Shape, "miterLimit");
Factory.addGetterSetter(Shape, "sceneFunc");
Factory.addGetterSetter(Shape, "hitFunc");
Factory.addGetterSetter(Shape, "dash");
Factory.addGetterSetter(Shape, "dashOffset", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "shadowColor", void 0, getStringValidator());
Factory.addGetterSetter(Shape, "shadowBlur", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "shadowOpacity", 1, getNumberValidator());
Factory.addComponentsGetterSetter(Shape, "shadowOffset", ["x", "y"]);
Factory.addGetterSetter(Shape, "shadowOffsetX", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "shadowOffsetY", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "fillPatternImage");
Factory.addGetterSetter(Shape, "fill", void 0, getStringOrGradientValidator());
Factory.addGetterSetter(Shape, "fillPatternX", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "fillPatternY", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "fillLinearGradientColorStops");
Factory.addGetterSetter(Shape, "strokeLinearGradientColorStops");
Factory.addGetterSetter(Shape, "fillRadialGradientStartRadius", 0);
Factory.addGetterSetter(Shape, "fillRadialGradientEndRadius", 0);
Factory.addGetterSetter(Shape, "fillRadialGradientColorStops");
Factory.addGetterSetter(Shape, "fillPatternRepeat", "repeat");
Factory.addGetterSetter(Shape, "fillEnabled", true);
Factory.addGetterSetter(Shape, "strokeEnabled", true);
Factory.addGetterSetter(Shape, "shadowEnabled", true);
Factory.addGetterSetter(Shape, "dashEnabled", true);
Factory.addGetterSetter(Shape, "strokeScaleEnabled", true);
Factory.addGetterSetter(Shape, "fillPriority", "color");
Factory.addComponentsGetterSetter(Shape, "fillPatternOffset", ["x", "y"]);
Factory.addGetterSetter(Shape, "fillPatternOffsetX", 0, getNumberValidator());
Factory.addGetterSetter(Shape, "fillPatternOffsetY", 0, getNumberValidator());
Factory.addComponentsGetterSetter(Shape, "fillPatternScale", ["x", "y"]);
Factory.addGetterSetter(Shape, "fillPatternScaleX", 1, getNumberValidator());
Factory.addGetterSetter(Shape, "fillPatternScaleY", 1, getNumberValidator());
Factory.addComponentsGetterSetter(Shape, "fillLinearGradientStartPoint", ["x", "y"]);
Factory.addComponentsGetterSetter(Shape, "strokeLinearGradientStartPoint", ["x", "y"]);
Factory.addGetterSetter(Shape, "fillLinearGradientStartPointX", 0);
Factory.addGetterSetter(Shape, "strokeLinearGradientStartPointX", 0);
Factory.addGetterSetter(Shape, "fillLinearGradientStartPointY", 0);
Factory.addGetterSetter(Shape, "strokeLinearGradientStartPointY", 0);
Factory.addComponentsGetterSetter(Shape, "fillLinearGradientEndPoint", ["x", "y"]);
Factory.addComponentsGetterSetter(Shape, "strokeLinearGradientEndPoint", ["x", "y"]);
Factory.addGetterSetter(Shape, "fillLinearGradientEndPointX", 0);
Factory.addGetterSetter(Shape, "strokeLinearGradientEndPointX", 0);
Factory.addGetterSetter(Shape, "fillLinearGradientEndPointY", 0);
Factory.addGetterSetter(Shape, "strokeLinearGradientEndPointY", 0);
Factory.addComponentsGetterSetter(Shape, "fillRadialGradientStartPoint", ["x", "y"]);
Factory.addGetterSetter(Shape, "fillRadialGradientStartPointX", 0);
Factory.addGetterSetter(Shape, "fillRadialGradientStartPointY", 0);
Factory.addComponentsGetterSetter(Shape, "fillRadialGradientEndPoint", ["x", "y"]);
Factory.addGetterSetter(Shape, "fillRadialGradientEndPointX", 0);
Factory.addGetterSetter(Shape, "fillRadialGradientEndPointY", 0);
Factory.addGetterSetter(Shape, "fillPatternRotation", 0);
Factory.addGetterSetter(Shape, "fillRule", void 0, getStringValidator());
Factory.backCompat(Shape, {
	dashArray: "dash",
	getDashArray: "getDash",
	setDashArray: "getDash",
	drawFunc: "sceneFunc",
	getDrawFunc: "getSceneFunc",
	setDrawFunc: "setSceneFunc",
	drawHitFunc: "hitFunc",
	getDrawHitFunc: "getHitFunc",
	setDrawHitFunc: "setHitFunc"
});
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Layer.js
var BEFORE_DRAW = "beforeDraw";
var DRAW = "draw";
var INTERSECTION_OFFSETS = [
	{
		x: 0,
		y: 0
	},
	{
		x: -1,
		y: -1
	},
	{
		x: 1,
		y: -1
	},
	{
		x: 1,
		y: 1
	},
	{
		x: -1,
		y: 1
	}
];
var INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;
var Layer = class extends Container {
	constructor(config) {
		super(config);
		this.canvas = new SceneCanvas();
		this.hitCanvas = new HitCanvas({ pixelRatio: 1 });
		this._waitingForDraw = false;
		this.on("visibleChange.konva", this._checkVisibility);
		this._checkVisibility();
		this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled);
		this._setSmoothEnabled();
	}
	createPNGStream() {
		return this.canvas._canvas.createPNGStream();
	}
	getCanvas() {
		return this.canvas;
	}
	getNativeCanvasElement() {
		return this.canvas._canvas;
	}
	getHitCanvas() {
		return this.hitCanvas;
	}
	getContext() {
		return this.getCanvas().getContext();
	}
	clear(bounds) {
		this.getContext().clear(bounds);
		this.getHitCanvas().getContext().clear(bounds);
		return this;
	}
	setZIndex(index) {
		super.setZIndex(index);
		const stage = this.getStage();
		if (stage && stage.content) {
			stage.content.removeChild(this.getNativeCanvasElement());
			if (index < stage.children.length - 1) stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[index + 1].getCanvas()._canvas);
			else stage.content.appendChild(this.getNativeCanvasElement());
		}
		return this;
	}
	moveToTop() {
		Node.prototype.moveToTop.call(this);
		const stage = this.getStage();
		if (stage && stage.content) {
			stage.content.removeChild(this.getNativeCanvasElement());
			stage.content.appendChild(this.getNativeCanvasElement());
		}
		return true;
	}
	moveUp() {
		if (!Node.prototype.moveUp.call(this)) return false;
		const stage = this.getStage();
		if (!stage || !stage.content) return false;
		stage.content.removeChild(this.getNativeCanvasElement());
		if (this.index < stage.children.length - 1) stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[this.index + 1].getCanvas()._canvas);
		else stage.content.appendChild(this.getNativeCanvasElement());
		return true;
	}
	moveDown() {
		if (Node.prototype.moveDown.call(this)) {
			const stage = this.getStage();
			if (stage) {
				const children = stage.children;
				if (stage.content) {
					stage.content.removeChild(this.getNativeCanvasElement());
					stage.content.insertBefore(this.getNativeCanvasElement(), children[this.index + 1].getCanvas()._canvas);
				}
			}
			return true;
		}
		return false;
	}
	moveToBottom() {
		if (Node.prototype.moveToBottom.call(this)) {
			const stage = this.getStage();
			if (stage) {
				const children = stage.children;
				if (stage.content) {
					stage.content.removeChild(this.getNativeCanvasElement());
					stage.content.insertBefore(this.getNativeCanvasElement(), children[1].getCanvas()._canvas);
				}
			}
			return true;
		}
		return false;
	}
	getLayer() {
		return this;
	}
	remove() {
		const _canvas = this.getNativeCanvasElement();
		Node.prototype.remove.call(this);
		if (_canvas && _canvas.parentNode && Util._isInDocument(_canvas)) _canvas.parentNode.removeChild(_canvas);
		return this;
	}
	getStage() {
		return this.parent;
	}
	setSize({ width, height }) {
		this.canvas.setSize(width, height);
		this.hitCanvas.setSize(width, height);
		this._setSmoothEnabled();
		return this;
	}
	_validateAdd(child) {
		const type = child.getType();
		if (type !== "Group" && type !== "Shape") Util.throw("You may only add groups and shapes to a layer.");
	}
	_toKonvaCanvas(config) {
		config = { ...config };
		config.width = config.width || this.getWidth();
		config.height = config.height || this.getHeight();
		config.x = config.x !== void 0 ? config.x : this.x();
		config.y = config.y !== void 0 ? config.y : this.y();
		return Node.prototype._toKonvaCanvas.call(this, config);
	}
	_checkVisibility() {
		if (this.visible()) this.canvas._canvas.style.display = "block";
		else this.canvas._canvas.style.display = "none";
	}
	_setSmoothEnabled() {
		this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
	}
	getWidth() {
		if (this.parent) return this.parent.width();
	}
	setWidth() {
		Util.warn("Can not change width of layer. Use \"stage.width(value)\" function instead.");
	}
	getHeight() {
		if (this.parent) return this.parent.height();
	}
	setHeight() {
		Util.warn("Can not change height of layer. Use \"stage.height(value)\" function instead.");
	}
	batchDraw() {
		if (!this._waitingForDraw) {
			this._waitingForDraw = true;
			Util.requestAnimFrame(() => {
				this.draw();
				this._waitingForDraw = false;
			});
		}
		return this;
	}
	getIntersection(pos) {
		if (!this.isListening() || !this.isVisible()) return null;
		let spiralSearchDistance = 1;
		let continueSearch = false;
		while (true) {
			for (let i = 0; i < INTERSECTION_OFFSETS_LEN; i++) {
				const intersectionOffset = INTERSECTION_OFFSETS[i];
				const obj = this._getIntersection({
					x: pos.x + intersectionOffset.x * spiralSearchDistance,
					y: pos.y + intersectionOffset.y * spiralSearchDistance
				});
				const shape = obj.shape;
				if (shape) return shape;
				continueSearch = !!obj.antialiased;
				if (!obj.antialiased) break;
			}
			if (continueSearch) spiralSearchDistance += 1;
			else return null;
		}
	}
	_getIntersection(pos) {
		const ratio = this.hitCanvas.pixelRatio;
		const p = this.hitCanvas.context.getImageData(Math.round(pos.x * ratio), Math.round(pos.y * ratio), 1, 1).data;
		const p3 = p[3];
		if (p3 === 255) {
			const shape = shapes[Util.getHitColorKey(p[0], p[1], p[2])];
			if (shape) return { shape };
			return { antialiased: true };
		} else if (p3 > 0) return { antialiased: true };
		return {};
	}
	drawScene(can, top, bufferCanvas) {
		const layer = this.getLayer(), canvas = can || layer && layer.getCanvas();
		this._fire(BEFORE_DRAW, { node: this });
		if (this.clearBeforeDraw()) canvas.getContext().clear();
		Container.prototype.drawScene.call(this, canvas, top, bufferCanvas);
		this._fire(DRAW, { node: this });
		return this;
	}
	drawHit(can, top) {
		const layer = this.getLayer(), canvas = can || layer && layer.hitCanvas;
		if (layer && layer.clearBeforeDraw()) layer.getHitCanvas().getContext().clear();
		Container.prototype.drawHit.call(this, canvas, top);
		return this;
	}
	enableHitGraph() {
		this.hitGraphEnabled(true);
		return this;
	}
	disableHitGraph() {
		this.hitGraphEnabled(false);
		return this;
	}
	setHitGraphEnabled(val) {
		Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
		this.listening(val);
	}
	getHitGraphEnabled(val) {
		Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
		return this.listening();
	}
	toggleHitCanvas() {
		if (!this.parent || !this.parent["content"]) return;
		const parent = this.parent;
		if (!!this.hitCanvas._canvas.parentNode) parent.content.removeChild(this.hitCanvas._canvas);
		else parent.content.appendChild(this.hitCanvas._canvas);
	}
	destroy() {
		Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas);
		return super.destroy();
	}
};
Layer.prototype.nodeType = "Layer";
_registerNode(Layer);
Factory.addGetterSetter(Layer, "imageSmoothingEnabled", true);
Factory.addGetterSetter(Layer, "clearBeforeDraw", true);
Factory.addGetterSetter(Layer, "hitGraphEnabled", true, getBooleanValidator());
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/FastLayer.js
var FastLayer = class extends Layer {
	constructor(attrs) {
		super(attrs);
		this.listening(false);
		Util.warn("Konva.Fast layer is deprecated. Please use \"new Konva.Layer({ listening: false })\" instead.");
	}
};
FastLayer.prototype.nodeType = "FastLayer";
_registerNode(FastLayer);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Group.js
var Group = class extends Container {
	_validateAdd(child) {
		const type = child.getType();
		if (type !== "Group" && type !== "Shape") Util.throw("You may only add groups and shapes to groups.");
	}
};
Group.prototype.nodeType = "Group";
_registerNode(Group);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Animation.js
var now = (function() {
	if (glob.performance && glob.performance.now) return function() {
		return glob.performance.now();
	};
	return function() {
		return (/* @__PURE__ */ new Date()).getTime();
	};
})();
var Animation = class Animation {
	constructor(func, layers) {
		this.id = Animation.animIdCounter++;
		this.frame = {
			time: 0,
			timeDiff: 0,
			lastTime: now(),
			frameRate: 0
		};
		this.func = func;
		this.setLayers(layers);
	}
	setLayers(layers) {
		let lays = [];
		if (layers) lays = Array.isArray(layers) ? layers : [layers];
		this.layers = lays;
		return this;
	}
	getLayers() {
		return this.layers;
	}
	addLayer(layer) {
		const layers = this.layers;
		const len = layers.length;
		for (let n = 0; n < len; n++) if (layers[n]._id === layer._id) return false;
		this.layers.push(layer);
		return true;
	}
	isRunning() {
		const animations = Animation.animations;
		const len = animations.length;
		for (let n = 0; n < len; n++) if (animations[n].id === this.id) return true;
		return false;
	}
	start() {
		this.stop();
		this.frame.timeDiff = 0;
		this.frame.lastTime = now();
		Animation._addAnimation(this);
		return this;
	}
	stop() {
		Animation._removeAnimation(this);
		return this;
	}
	_updateFrameObject(time) {
		this.frame.timeDiff = time - this.frame.lastTime;
		this.frame.lastTime = time;
		this.frame.time += this.frame.timeDiff;
		this.frame.frameRate = 1e3 / this.frame.timeDiff;
	}
	static _addAnimation(anim) {
		this.animations.push(anim);
		this._handleAnimation();
	}
	static _removeAnimation(anim) {
		const id = anim.id;
		const animations = this.animations;
		const len = animations.length;
		for (let n = 0; n < len; n++) if (animations[n].id === id) {
			this.animations.splice(n, 1);
			break;
		}
	}
	static _runFrames() {
		const layerHash = {};
		const animations = this.animations;
		for (let n = 0; n < animations.length; n++) {
			const anim = animations[n];
			const layers = anim.layers;
			const func = anim.func;
			anim._updateFrameObject(now());
			const layersLen = layers.length;
			let needRedraw;
			if (func) needRedraw = func.call(anim, anim.frame) !== false;
			else needRedraw = true;
			if (!needRedraw) continue;
			for (let i = 0; i < layersLen; i++) {
				const layer = layers[i];
				if (layer._id !== void 0) layerHash[layer._id] = layer;
			}
		}
		for (const key in layerHash) {
			if (!layerHash.hasOwnProperty(key)) continue;
			layerHash[key].batchDraw();
		}
	}
	static _animationLoop() {
		const Anim = Animation;
		if (Anim.animations.length) {
			Anim._runFrames();
			Util.requestAnimFrame(Anim._animationLoop);
		} else Anim.animRunning = false;
	}
	static _handleAnimation() {
		if (!this.animRunning) {
			this.animRunning = true;
			Util.requestAnimFrame(this._animationLoop);
		}
	}
};
Animation.animations = [];
Animation.animIdCounter = 0;
Animation.animRunning = false;
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/Tween.js
var blacklist = {
	node: 1,
	duration: 1,
	easing: 1,
	onFinish: 1,
	yoyo: 1
};
var PAUSED = 1;
var PLAYING = 2;
var REVERSING = 3;
var colorAttrs = [
	"fill",
	"stroke",
	"shadowColor"
];
var idCounter = 0;
function colorToRGBA(color) {
	return Util.colorToRGBA(color) || Util.throw("can not tween the color \"" + color + "\", because it is not a valid color.");
}
var TweenEngine = class {
	constructor(prop, propFunc, func, begin, finish, duration, yoyo) {
		this.prop = prop;
		this.propFunc = propFunc;
		this.begin = begin;
		this._pos = begin;
		this.duration = duration;
		this._change = 0;
		this.prevPos = 0;
		this.yoyo = yoyo;
		this._time = 0;
		this._position = 0;
		this._startTime = 0;
		this._finish = 0;
		this.func = func;
		this._change = finish - this.begin;
		this.pause();
	}
	fire(str) {
		const handler = this[str];
		if (handler) handler();
	}
	setTime(t) {
		if (t > this.duration) {
			if (this.yoyo) {
				this._time = this.duration;
				this.reverse();
			} else this.finish();
		} else if (t < 0) {
			if (this.yoyo) {
				this._time = 0;
				this.play();
			} else this.reset();
		} else {
			this._time = t;
			this.update();
		}
	}
	getTime() {
		return this._time;
	}
	setPosition(p) {
		this.prevPos = this._pos;
		this.propFunc(p);
		this._pos = p;
	}
	getPosition(t) {
		if (t === void 0) t = this._time;
		return this.func(t, this.begin, this._change, this.duration);
	}
	play() {
		this.state = PLAYING;
		this._startTime = this.getTimer() - this._time;
		this.onEnterFrame();
		this.fire("onPlay");
	}
	reverse() {
		this.state = REVERSING;
		this._time = this.duration - this._time;
		this._startTime = this.getTimer() - this._time;
		this.onEnterFrame();
		this.fire("onReverse");
	}
	seek(t) {
		this.pause();
		this._time = t;
		this.update();
		this.fire("onSeek");
	}
	reset() {
		this.pause();
		this._time = 0;
		this.update();
		this.fire("onReset");
	}
	finish() {
		this.pause();
		this._time = this.duration;
		this.update();
		this.fire("onFinish");
	}
	update() {
		this.setPosition(this.getPosition(this._time));
		this.fire("onUpdate");
	}
	onEnterFrame() {
		const t = this.getTimer() - this._startTime;
		if (this.state === PLAYING) this.setTime(t);
		else if (this.state === REVERSING) this.setTime(this.duration - t);
	}
	pause() {
		this.state = PAUSED;
		this.fire("onPause");
	}
	getTimer() {
		return (/* @__PURE__ */ new Date()).getTime();
	}
};
var Tween = class Tween {
	constructor(config) {
		const that = this, node = config.node, nodeId = node._id, easing = config.easing || Easings.Linear, yoyo = !!config.yoyo;
		let duration, key;
		if (typeof config.duration === "undefined") duration = .3;
		else if (config.duration === 0) duration = .001;
		else duration = config.duration;
		this.node = node;
		this._id = idCounter++;
		const layers = node.getLayer() || (node instanceof Konva$2["Stage"] ? node.getLayers() : null);
		if (!layers) Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first.");
		this.anim = new Animation(function() {
			that.tween.onEnterFrame();
		}, layers);
		this.tween = new TweenEngine(key, function(i) {
			that._tweenFunc(i);
		}, easing, 0, 1, duration * 1e3, yoyo);
		this._addListeners();
		if (!Tween.attrs[nodeId]) Tween.attrs[nodeId] = {};
		if (!Tween.attrs[nodeId][this._id]) Tween.attrs[nodeId][this._id] = {};
		if (!Tween.tweens[nodeId]) Tween.tweens[nodeId] = {};
		for (key in config) if (blacklist[key] === void 0) this._addAttr(key, config[key]);
		this.reset();
		this.onFinish = config.onFinish;
		this.onReset = config.onReset;
		this.onUpdate = config.onUpdate;
	}
	_addAttr(key, end) {
		const node = this.node, nodeId = node._id;
		let diff, len, trueEnd, trueStart, endRGBA;
		const tweenId = Tween.tweens[nodeId][key];
		if (tweenId) delete Tween.attrs[nodeId][tweenId][key];
		let start = node.getAttr(key);
		if (Util._isArray(end)) {
			diff = [];
			len = Math.max(end.length, start.length);
			if (key === "points" && end.length !== start.length) {
				if (end.length > start.length) {
					trueStart = start;
					start = Util._prepareArrayForTween(start, end, node.closed());
				} else {
					trueEnd = end;
					end = Util._prepareArrayForTween(end, start, node.closed());
				}
			}
			if (key.indexOf("fill") === 0) for (let n = 0; n < len; n++) if (n % 2 === 0) diff.push(end[n] - start[n]);
			else {
				const startRGBA = colorToRGBA(start[n]);
				endRGBA = colorToRGBA(end[n]);
				start[n] = startRGBA;
				diff.push({
					r: endRGBA.r - startRGBA.r,
					g: endRGBA.g - startRGBA.g,
					b: endRGBA.b - startRGBA.b,
					a: endRGBA.a - startRGBA.a
				});
			}
			else for (let n = 0; n < len; n++) diff.push(end[n] - start[n]);
		} else if (colorAttrs.indexOf(key) !== -1) {
			start = colorToRGBA(start);
			endRGBA = colorToRGBA(end);
			diff = {
				r: endRGBA.r - start.r,
				g: endRGBA.g - start.g,
				b: endRGBA.b - start.b,
				a: endRGBA.a - start.a
			};
		} else diff = end - start;
		Tween.attrs[nodeId][this._id][key] = {
			start,
			diff,
			end,
			trueEnd,
			trueStart
		};
		Tween.tweens[nodeId][key] = this._id;
	}
	_tweenFunc(i) {
		const node = this.node, attrs = Tween.attrs[node._id][this._id];
		let key, attr, start, diff, newVal, n, len, end;
		for (key in attrs) {
			attr = attrs[key];
			start = attr.start;
			diff = attr.diff;
			end = attr.end;
			if (Util._isArray(start)) {
				newVal = [];
				len = Math.max(start.length, end.length);
				if (key.indexOf("fill") === 0) for (n = 0; n < len; n++) if (n % 2 === 0) newVal.push((start[n] || 0) + diff[n] * i);
				else newVal.push("rgba(" + Math.round(start[n].r + diff[n].r * i) + "," + Math.round(start[n].g + diff[n].g * i) + "," + Math.round(start[n].b + diff[n].b * i) + "," + (start[n].a + diff[n].a * i) + ")");
				else for (n = 0; n < len; n++) newVal.push((start[n] || 0) + diff[n] * i);
			} else if (colorAttrs.indexOf(key) !== -1) newVal = "rgba(" + Math.round(start.r + diff.r * i) + "," + Math.round(start.g + diff.g * i) + "," + Math.round(start.b + diff.b * i) + "," + (start.a + diff.a * i) + ")";
			else newVal = start + diff * i;
			node.setAttr(key, newVal);
		}
	}
	_addListeners() {
		this.tween.onPlay = () => {
			this.anim.start();
		};
		this.tween.onReverse = () => {
			this.anim.start();
		};
		this.tween.onPause = () => {
			this.anim.stop();
		};
		this.tween.onFinish = () => {
			const node = this.node;
			const attrs = Tween.attrs[node._id][this._id];
			if (attrs.points && attrs.points.trueEnd) node.setAttr("points", attrs.points.trueEnd);
			if (this.onFinish) this.onFinish.call(this);
		};
		this.tween.onReset = () => {
			const node = this.node;
			const attrs = Tween.attrs[node._id][this._id];
			if (attrs.points && attrs.points.trueStart) node.points(attrs.points.trueStart);
			if (this.onReset) this.onReset();
		};
		this.tween.onUpdate = () => {
			if (this.onUpdate) this.onUpdate.call(this);
		};
	}
	play() {
		this.tween.play();
		return this;
	}
	reverse() {
		this.tween.reverse();
		return this;
	}
	reset() {
		this.tween.reset();
		return this;
	}
	seek(t) {
		this.tween.seek(t * 1e3);
		return this;
	}
	pause() {
		this.tween.pause();
		return this;
	}
	finish() {
		this.tween.finish();
		return this;
	}
	destroy() {
		const nodeId = this.node._id, thisId = this._id, attrs = Tween.tweens[nodeId];
		this.pause();
		if (this.anim) this.anim.stop();
		for (const key in attrs) delete Tween.tweens[nodeId][key];
		delete Tween.attrs[nodeId][thisId];
		if (Tween.tweens[nodeId]) {
			if (Object.keys(Tween.tweens[nodeId]).length === 0) delete Tween.tweens[nodeId];
			if (Object.keys(Tween.attrs[nodeId]).length === 0) delete Tween.attrs[nodeId];
		}
	}
};
Tween.attrs = {};
Tween.tweens = {};
Node.prototype.to = function(params) {
	const onFinish = params.onFinish;
	params.node = this;
	params.onFinish = function() {
		this.destroy();
		if (onFinish) onFinish();
	};
	new Tween(params).play();
};
var Easings = {
	BackEaseIn(t, b, c, d) {
		return c * (t /= d) * t * (2.70158 * t - 1.70158) + b;
	},
	BackEaseOut(t, b, c, d) {
		return c * ((t = t / d - 1) * t * (2.70158 * t + 1.70158) + 1) + b;
	},
	BackEaseInOut(t, b, c, d) {
		let s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	},
	ElasticEaseIn(t, b, c, d, a, p) {
		let s = 0;
		if (t === 0) return b;
		if ((t /= d) === 1) return b + c;
		if (!p) p = d * .3;
		if (!a || a < Math.abs(c)) {
			a = c;
			s = p / 4;
		} else s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	ElasticEaseOut(t, b, c, d, a, p) {
		let s = 0;
		if (t === 0) return b;
		if ((t /= d) === 1) return b + c;
		if (!p) p = d * .3;
		if (!a || a < Math.abs(c)) {
			a = c;
			s = p / 4;
		} else s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	ElasticEaseInOut(t, b, c, d, a, p) {
		let s = 0;
		if (t === 0) return b;
		if ((t /= d / 2) === 2) return b + c;
		if (!p) p = d * (.3 * 1.5);
		if (!a || a < Math.abs(c)) {
			a = c;
			s = p / 4;
		} else s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	BounceEaseOut(t, b, c, d) {
		if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;
		else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
		else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
		else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
	},
	BounceEaseIn(t, b, c, d) {
		return c - Easings.BounceEaseOut(d - t, 0, c, d) + b;
	},
	BounceEaseInOut(t, b, c, d) {
		if (t < d / 2) return Easings.BounceEaseIn(t * 2, 0, c, d) * .5 + b;
		else return Easings.BounceEaseOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	},
	EaseIn(t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	EaseOut(t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	EaseInOut(t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * (--t * (t - 2) - 1) + b;
	},
	StrongEaseIn(t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	StrongEaseOut(t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	StrongEaseInOut(t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	Linear(t, b, c, d) {
		return c * t / d + b;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/_CoreInternals.js
var Konva$1 = Util._assign(Konva$2, {
	Util,
	Transform,
	Node,
	Container,
	Stage,
	stages,
	Layer,
	FastLayer,
	Group,
	DD,
	Shape,
	shapes,
	Animation,
	Tween,
	Easings,
	Context,
	Canvas
});
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Arc.js
var Arc = class extends Shape {
	_sceneFunc(context) {
		const angle = Konva$2.getAngle(this.angle()), clockwise = this.clockwise();
		context.beginPath();
		context.arc(0, 0, this.outerRadius(), 0, angle, clockwise);
		context.arc(0, 0, this.innerRadius(), angle, 0, !clockwise);
		context.closePath();
		context.fillStrokeShape(this);
	}
	getWidth() {
		return this.outerRadius() * 2;
	}
	getHeight() {
		return this.outerRadius() * 2;
	}
	setWidth(width) {
		this.outerRadius(width / 2);
	}
	setHeight(height) {
		this.outerRadius(height / 2);
	}
	getSelfRect() {
		const innerRadius = this.innerRadius();
		const outerRadius = this.outerRadius();
		const clockwise = this.clockwise();
		const rawAngle = Konva$2.getAngle(this.angle());
		if (rawAngle % (Math.PI * 2) === 0) return rawAngle !== 0 ? {
			x: -outerRadius,
			y: -outerRadius,
			width: outerRadius * 2,
			height: outerRadius * 2
		} : {
			x: innerRadius,
			y: 0,
			width: outerRadius - innerRadius,
			height: 0
		};
		const angle = Konva$2.getAngle(clockwise ? 360 - this.angle() : this.angle());
		const boundLeftRatio = Math.cos(Math.min(angle, Math.PI));
		const boundRightRatio = 1;
		const boundTopRatio = Math.sin(Math.min(Math.max(Math.PI, angle), 3 * Math.PI / 2));
		const boundBottomRatio = Math.sin(Math.min(angle, Math.PI / 2));
		const boundLeft = boundLeftRatio * (boundLeftRatio > 0 ? innerRadius : outerRadius);
		const boundRight = boundRightRatio * outerRadius;
		const boundTop = boundTopRatio * (boundTopRatio > 0 ? innerRadius : outerRadius);
		const boundBottom = boundBottomRatio * (boundBottomRatio > 0 ? outerRadius : innerRadius);
		return {
			x: boundLeft,
			y: clockwise ? -1 * boundBottom : boundTop,
			width: boundRight - boundLeft,
			height: boundBottom - boundTop
		};
	}
};
Arc.prototype._centroid = true;
Arc.prototype.className = "Arc";
Arc.prototype._attrsAffectingSize = [
	"innerRadius",
	"outerRadius",
	"angle",
	"clockwise"
];
_registerNode(Arc);
Factory.addGetterSetter(Arc, "innerRadius", 0, getNumberValidator());
Factory.addGetterSetter(Arc, "outerRadius", 0, getNumberValidator());
Factory.addGetterSetter(Arc, "angle", 0, getNumberValidator());
Factory.addGetterSetter(Arc, "clockwise", false, getBooleanValidator());
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/BezierFunctions.js
var tValues = [
	[],
	[],
	[-.5773502691896257, .5773502691896257],
	[
		0,
		-.7745966692414834,
		.7745966692414834
	],
	[
		-.33998104358485626,
		.33998104358485626,
		-.8611363115940526,
		.8611363115940526
	],
	[
		0,
		-.5384693101056831,
		.5384693101056831,
		-.906179845938664,
		.906179845938664
	],
	[
		.6612093864662645,
		-.6612093864662645,
		-.2386191860831969,
		.2386191860831969,
		-.932469514203152,
		.932469514203152
	],
	[
		0,
		.4058451513773972,
		-.4058451513773972,
		-.7415311855993945,
		.7415311855993945,
		-.9491079123427585,
		.9491079123427585
	],
	[
		-.1834346424956498,
		.1834346424956498,
		-.525532409916329,
		.525532409916329,
		-.7966664774136267,
		.7966664774136267,
		-.9602898564975363,
		.9602898564975363
	],
	[
		0,
		-.8360311073266358,
		.8360311073266358,
		-.9681602395076261,
		.9681602395076261,
		-.3242534234038089,
		.3242534234038089,
		-.6133714327005904,
		.6133714327005904
	],
	[
		-.14887433898163122,
		.14887433898163122,
		-.4333953941292472,
		.4333953941292472,
		-.6794095682990244,
		.6794095682990244,
		-.8650633666889845,
		.8650633666889845,
		-.9739065285171717,
		.9739065285171717
	],
	[
		0,
		-.26954315595234496,
		.26954315595234496,
		-.5190961292068118,
		.5190961292068118,
		-.7301520055740494,
		.7301520055740494,
		-.8870625997680953,
		.8870625997680953,
		-.978228658146057,
		.978228658146057
	],
	[
		-.1252334085114689,
		.1252334085114689,
		-.3678314989981802,
		.3678314989981802,
		-.5873179542866175,
		.5873179542866175,
		-.7699026741943047,
		.7699026741943047,
		-.9041172563704749,
		.9041172563704749,
		-.9815606342467192,
		.9815606342467192
	],
	[
		0,
		-.2304583159551348,
		.2304583159551348,
		-.44849275103644687,
		.44849275103644687,
		-.6423493394403402,
		.6423493394403402,
		-.8015780907333099,
		.8015780907333099,
		-.9175983992229779,
		.9175983992229779,
		-.9841830547185881,
		.9841830547185881
	],
	[
		-.10805494870734367,
		.10805494870734367,
		-.31911236892788974,
		.31911236892788974,
		-.5152486363581541,
		.5152486363581541,
		-.6872929048116855,
		.6872929048116855,
		-.827201315069765,
		.827201315069765,
		-.9284348836635735,
		.9284348836635735,
		-.9862838086968123,
		.9862838086968123
	],
	[
		0,
		-.20119409399743451,
		.20119409399743451,
		-.3941513470775634,
		.3941513470775634,
		-.5709721726085388,
		.5709721726085388,
		-.7244177313601701,
		.7244177313601701,
		-.8482065834104272,
		.8482065834104272,
		-.937273392400706,
		.937273392400706,
		-.9879925180204854,
		.9879925180204854
	],
	[
		-.09501250983763744,
		.09501250983763744,
		-.2816035507792589,
		.2816035507792589,
		-.45801677765722737,
		.45801677765722737,
		-.6178762444026438,
		.6178762444026438,
		-.755404408355003,
		.755404408355003,
		-.8656312023878318,
		.8656312023878318,
		-.9445750230732326,
		.9445750230732326,
		-.9894009349916499,
		.9894009349916499
	],
	[
		0,
		-.17848418149584785,
		.17848418149584785,
		-.3512317634538763,
		.3512317634538763,
		-.5126905370864769,
		.5126905370864769,
		-.6576711592166907,
		.6576711592166907,
		-.7815140038968014,
		.7815140038968014,
		-.8802391537269859,
		.8802391537269859,
		-.9506755217687678,
		.9506755217687678,
		-.9905754753144174,
		.9905754753144174
	],
	[
		-.0847750130417353,
		.0847750130417353,
		-.2518862256915055,
		.2518862256915055,
		-.41175116146284263,
		.41175116146284263,
		-.5597708310739475,
		.5597708310739475,
		-.6916870430603532,
		.6916870430603532,
		-.8037049589725231,
		.8037049589725231,
		-.8926024664975557,
		.8926024664975557,
		-.9558239495713977,
		.9558239495713977,
		-.9915651684209309,
		.9915651684209309
	],
	[
		0,
		-.16035864564022537,
		.16035864564022537,
		-.31656409996362983,
		.31656409996362983,
		-.46457074137596094,
		.46457074137596094,
		-.600545304661681,
		.600545304661681,
		-.7209661773352294,
		.7209661773352294,
		-.8227146565371428,
		.8227146565371428,
		-.9031559036148179,
		.9031559036148179,
		-.96020815213483,
		.96020815213483,
		-.9924068438435844,
		.9924068438435844
	],
	[
		-.07652652113349734,
		.07652652113349734,
		-.22778585114164507,
		.22778585114164507,
		-.37370608871541955,
		.37370608871541955,
		-.5108670019508271,
		.5108670019508271,
		-.636053680726515,
		.636053680726515,
		-.7463319064601508,
		.7463319064601508,
		-.8391169718222188,
		.8391169718222188,
		-.912234428251326,
		.912234428251326,
		-.9639719272779138,
		.9639719272779138,
		-.9931285991850949,
		.9931285991850949
	],
	[
		0,
		-.1455618541608951,
		.1455618541608951,
		-.2880213168024011,
		.2880213168024011,
		-.4243421202074388,
		.4243421202074388,
		-.5516188358872198,
		.5516188358872198,
		-.6671388041974123,
		.6671388041974123,
		-.7684399634756779,
		.7684399634756779,
		-.8533633645833173,
		.8533633645833173,
		-.9200993341504008,
		.9200993341504008,
		-.9672268385663063,
		.9672268385663063,
		-.9937521706203895,
		.9937521706203895
	],
	[
		-.06973927331972223,
		.06973927331972223,
		-.20786042668822127,
		.20786042668822127,
		-.34193582089208424,
		.34193582089208424,
		-.469355837986757,
		.469355837986757,
		-.5876404035069116,
		.5876404035069116,
		-.6944872631866827,
		.6944872631866827,
		-.7878168059792081,
		.7878168059792081,
		-.8658125777203002,
		.8658125777203002,
		-.926956772187174,
		.926956772187174,
		-.9700604978354287,
		.9700604978354287,
		-.9942945854823992,
		.9942945854823992
	],
	[
		0,
		-.1332568242984661,
		.1332568242984661,
		-.26413568097034495,
		.26413568097034495,
		-.3903010380302908,
		.3903010380302908,
		-.5095014778460075,
		.5095014778460075,
		-.6196098757636461,
		.6196098757636461,
		-.7186613631319502,
		.7186613631319502,
		-.8048884016188399,
		.8048884016188399,
		-.8767523582704416,
		.8767523582704416,
		-.9329710868260161,
		.9329710868260161,
		-.9725424712181152,
		.9725424712181152,
		-.9947693349975522,
		.9947693349975522
	],
	[
		-.06405689286260563,
		.06405689286260563,
		-.1911188674736163,
		.1911188674736163,
		-.3150426796961634,
		.3150426796961634,
		-.4337935076260451,
		.4337935076260451,
		-.5454214713888396,
		.5454214713888396,
		-.6480936519369755,
		.6480936519369755,
		-.7401241915785544,
		.7401241915785544,
		-.820001985973903,
		.820001985973903,
		-.8864155270044011,
		.8864155270044011,
		-.9382745520027328,
		.9382745520027328,
		-.9747285559713095,
		.9747285559713095,
		-.9951872199970213,
		.9951872199970213
	]
];
var cValues = [
	[],
	[],
	[1, 1],
	[
		.8888888888888888,
		.5555555555555556,
		.5555555555555556
	],
	[
		.6521451548625461,
		.6521451548625461,
		.34785484513745385,
		.34785484513745385
	],
	[
		.5688888888888889,
		.47862867049936647,
		.47862867049936647,
		.23692688505618908,
		.23692688505618908
	],
	[
		.3607615730481386,
		.3607615730481386,
		.46791393457269104,
		.46791393457269104,
		.17132449237917036,
		.17132449237917036
	],
	[
		.4179591836734694,
		.3818300505051189,
		.3818300505051189,
		.27970539148927664,
		.27970539148927664,
		.1294849661688697,
		.1294849661688697
	],
	[
		.362683783378362,
		.362683783378362,
		.31370664587788727,
		.31370664587788727,
		.22238103445337448,
		.22238103445337448,
		.10122853629037626,
		.10122853629037626
	],
	[
		.3302393550012598,
		.1806481606948574,
		.1806481606948574,
		.08127438836157441,
		.08127438836157441,
		.31234707704000286,
		.31234707704000286,
		.26061069640293544,
		.26061069640293544
	],
	[
		.29552422471475287,
		.29552422471475287,
		.26926671930999635,
		.26926671930999635,
		.21908636251598204,
		.21908636251598204,
		.1494513491505806,
		.1494513491505806,
		.06667134430868814,
		.06667134430868814
	],
	[
		.2729250867779006,
		.26280454451024665,
		.26280454451024665,
		.23319376459199048,
		.23319376459199048,
		.18629021092773426,
		.18629021092773426,
		.1255803694649046,
		.1255803694649046,
		.05566856711617366,
		.05566856711617366
	],
	[
		.24914704581340277,
		.24914704581340277,
		.2334925365383548,
		.2334925365383548,
		.20316742672306592,
		.20316742672306592,
		.16007832854334622,
		.16007832854334622,
		.10693932599531843,
		.10693932599531843,
		.04717533638651183,
		.04717533638651183
	],
	[
		.2325515532308739,
		.22628318026289723,
		.22628318026289723,
		.2078160475368885,
		.2078160475368885,
		.17814598076194574,
		.17814598076194574,
		.13887351021978725,
		.13887351021978725,
		.09212149983772845,
		.09212149983772845,
		.04048400476531588,
		.04048400476531588
	],
	[
		.2152638534631578,
		.2152638534631578,
		.2051984637212956,
		.2051984637212956,
		.18553839747793782,
		.18553839747793782,
		.15720316715819355,
		.15720316715819355,
		.12151857068790319,
		.12151857068790319,
		.08015808715976021,
		.08015808715976021,
		.03511946033175186,
		.03511946033175186
	],
	[
		.2025782419255613,
		.19843148532711158,
		.19843148532711158,
		.1861610000155622,
		.1861610000155622,
		.16626920581699392,
		.16626920581699392,
		.13957067792615432,
		.13957067792615432,
		.10715922046717194,
		.10715922046717194,
		.07036604748810812,
		.07036604748810812,
		.03075324199611727,
		.03075324199611727
	],
	[
		.1894506104550685,
		.1894506104550685,
		.18260341504492358,
		.18260341504492358,
		.16915651939500254,
		.16915651939500254,
		.14959598881657674,
		.14959598881657674,
		.12462897125553388,
		.12462897125553388,
		.09515851168249279,
		.09515851168249279,
		.062253523938647894,
		.062253523938647894,
		.027152459411754096,
		.027152459411754096
	],
	[
		.17944647035620653,
		.17656270536699264,
		.17656270536699264,
		.16800410215645004,
		.16800410215645004,
		.15404576107681028,
		.15404576107681028,
		.13513636846852548,
		.13513636846852548,
		.11188384719340397,
		.11188384719340397,
		.08503614831717918,
		.08503614831717918,
		.0554595293739872,
		.0554595293739872,
		.02414830286854793,
		.02414830286854793
	],
	[
		.1691423829631436,
		.1691423829631436,
		.16427648374583273,
		.16427648374583273,
		.15468467512626524,
		.15468467512626524,
		.14064291467065065,
		.14064291467065065,
		.12255520671147846,
		.12255520671147846,
		.10094204410628717,
		.10094204410628717,
		.07642573025488905,
		.07642573025488905,
		.0497145488949698,
		.0497145488949698,
		.02161601352648331,
		.02161601352648331
	],
	[
		.1610544498487837,
		.15896884339395434,
		.15896884339395434,
		.15276604206585967,
		.15276604206585967,
		.1426067021736066,
		.1426067021736066,
		.12875396253933621,
		.12875396253933621,
		.11156664554733399,
		.11156664554733399,
		.09149002162245,
		.09149002162245,
		.06904454273764123,
		.06904454273764123,
		.0448142267656996,
		.0448142267656996,
		.019461788229726478,
		.019461788229726478
	],
	[
		.15275338713072584,
		.15275338713072584,
		.14917298647260374,
		.14917298647260374,
		.14209610931838204,
		.14209610931838204,
		.13168863844917664,
		.13168863844917664,
		.11819453196151841,
		.11819453196151841,
		.10193011981724044,
		.10193011981724044,
		.08327674157670475,
		.08327674157670475,
		.06267204833410907,
		.06267204833410907,
		.04060142980038694,
		.04060142980038694,
		.017614007139152118,
		.017614007139152118
	],
	[
		.14608113364969041,
		.14452440398997005,
		.14452440398997005,
		.13988739479107315,
		.13988739479107315,
		.13226893863333747,
		.13226893863333747,
		.12183141605372853,
		.12183141605372853,
		.10879729916714838,
		.10879729916714838,
		.09344442345603386,
		.09344442345603386,
		.0761001136283793,
		.0761001136283793,
		.057134425426857205,
		.057134425426857205,
		.036953789770852494,
		.036953789770852494,
		.016017228257774335,
		.016017228257774335
	],
	[
		.13925187285563198,
		.13925187285563198,
		.13654149834601517,
		.13654149834601517,
		.13117350478706238,
		.13117350478706238,
		.12325237681051242,
		.12325237681051242,
		.11293229608053922,
		.11293229608053922,
		.10041414444288096,
		.10041414444288096,
		.08594160621706773,
		.08594160621706773,
		.06979646842452049,
		.06979646842452049,
		.052293335152683286,
		.052293335152683286,
		.03377490158481415,
		.03377490158481415,
		.0146279952982722,
		.0146279952982722
	],
	[
		.13365457218610619,
		.1324620394046966,
		.1324620394046966,
		.12890572218808216,
		.12890572218808216,
		.12304908430672953,
		.12304908430672953,
		.11499664022241136,
		.11499664022241136,
		.10489209146454141,
		.10489209146454141,
		.09291576606003515,
		.09291576606003515,
		.07928141177671895,
		.07928141177671895,
		.06423242140852585,
		.06423242140852585,
		.04803767173108467,
		.04803767173108467,
		.030988005856979445,
		.030988005856979445,
		.013411859487141771,
		.013411859487141771
	],
	[
		.12793819534675216,
		.12793819534675216,
		.1258374563468283,
		.1258374563468283,
		.12167047292780339,
		.12167047292780339,
		.1155056680537256,
		.1155056680537256,
		.10744427011596563,
		.10744427011596563,
		.09761865210411388,
		.09761865210411388,
		.08619016153195327,
		.08619016153195327,
		.0733464814110803,
		.0733464814110803,
		.05929858491543678,
		.05929858491543678,
		.04427743881741981,
		.04427743881741981,
		.028531388628933663,
		.028531388628933663,
		.0123412297999872,
		.0123412297999872
	]
];
var binomialCoefficients = [
	[1],
	[1, 1],
	[
		1,
		2,
		1
	],
	[
		1,
		3,
		3,
		1
	]
];
var getCubicArcLength = (xs, ys, t) => {
	let sum;
	let correctedT;
	const n = 20;
	const z = t / 2;
	sum = 0;
	for (let i = 0; i < n; i++) {
		correctedT = z * tValues[n][i] + z;
		sum += cValues[n][i] * BFunc(xs, ys, correctedT);
	}
	return z * sum;
};
var getQuadraticArcLength = (xs, ys, t) => {
	if (t === void 0) t = 1;
	const ax = xs[0] - 2 * xs[1] + xs[2];
	const ay = ys[0] - 2 * ys[1] + ys[2];
	const bx = 2 * xs[1] - 2 * xs[0];
	const by = 2 * ys[1] - 2 * ys[0];
	const A = 4 * (ax * ax + ay * ay);
	const B = 4 * (ax * bx + ay * by);
	const C = bx * bx + by * by;
	if (A === 0) return t * Math.sqrt(Math.pow(xs[2] - xs[0], 2) + Math.pow(ys[2] - ys[0], 2));
	const b = B / (2 * A);
	const c = C / A;
	const u = t + b;
	const k = c - b * b;
	const uuk = u * u + k > 0 ? Math.sqrt(u * u + k) : 0;
	const bbk = b * b + k > 0 ? Math.sqrt(b * b + k) : 0;
	const term = b + Math.sqrt(b * b + k) !== 0 ? k * Math.log(Math.abs((u + uuk) / (b + bbk))) : 0;
	return Math.sqrt(A) / 2 * (u * uuk - b * bbk + term);
};
function BFunc(xs, ys, t) {
	const xbase = getDerivative(1, t, xs);
	const ybase = getDerivative(1, t, ys);
	const combined = xbase * xbase + ybase * ybase;
	return Math.sqrt(combined);
}
var getDerivative = (derivative, t, vs) => {
	const n = vs.length - 1;
	let _vs;
	let value;
	if (n === 0) return 0;
	if (derivative === 0) {
		value = 0;
		for (let k = 0; k <= n; k++) value += binomialCoefficients[n][k] * Math.pow(1 - t, n - k) * Math.pow(t, k) * vs[k];
		return value;
	} else {
		_vs = new Array(n);
		for (let k = 0; k < n; k++) _vs[k] = n * (vs[k + 1] - vs[k]);
		return getDerivative(derivative - 1, t, _vs);
	}
};
var t2length = (length, totalLength, func) => {
	let error = 1;
	let t = length / totalLength;
	let step = (length - func(t)) / totalLength;
	let numIterations = 0;
	while (error > .001) {
		const increasedTLength = func(t + step);
		const increasedTError = Math.abs(length - increasedTLength) / totalLength;
		if (increasedTError < error) {
			error = increasedTError;
			t += step;
		} else {
			const decreasedTLength = func(t - step);
			const decreasedTError = Math.abs(length - decreasedTLength) / totalLength;
			if (decreasedTError < error) {
				error = decreasedTError;
				t -= step;
			} else step /= 2;
		}
		numIterations++;
		if (numIterations > 500) break;
	}
	return t;
};
var quadraticAt = (p0, p1, p2, t) => {
	const mt = 1 - t;
	return mt * mt * p0 + 2 * mt * t * p1 + t * t * p2;
};
var getQuadraticExtremaPoints = (x0, y0, x1, y1, x2, y2) => {
	const extrema = [];
	for (const axis of [[
		x0,
		x1,
		x2
	], [
		y0,
		y1,
		y2
	]]) {
		const t = (axis[0] - axis[1]) / (axis[0] - 2 * axis[1] + axis[2]);
		if (t > 0 && t < 1) extrema.push(quadraticAt(x0, x1, x2, t), quadraticAt(y0, y1, y2, t));
	}
	return extrema;
};
var cubicAt = (p0, p1, p2, p3, t) => {
	const mt = 1 - t;
	return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
};
var getCubicExtremaPoints = (x0, y0, x1, y1, x2, y2, x3, y3) => {
	const extrema = [];
	for (const axis of [[
		x0,
		x1,
		x2,
		x3
	], [
		y0,
		y1,
		y2,
		y3
	]]) {
		const a = -3 * axis[0] + 9 * axis[1] - 9 * axis[2] + 3 * axis[3];
		const b = 6 * axis[0] - 12 * axis[1] + 6 * axis[2];
		const c = -3 * axis[0] + 3 * axis[1];
		const discriminant = b * b - 4 * a * c;
		if (discriminant < 0) continue;
		const q = -(b + (b < 0 ? -1 : 1) * Math.sqrt(discriminant)) / 2;
		for (const t of [q / a, c / q]) if (t > 0 && t < 1) extrema.push(cubicAt(x0, x1, x2, x3, t), cubicAt(y0, y1, y2, y3, t));
	}
	return extrema;
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Line.js
function getControlPoints(x0, y0, x1, y1, x2, y2, t) {
	const d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)), d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), dSum = d01 + d12;
	if (dSum === 0) return [
		x1,
		y1,
		x1,
		y1
	];
	const fa = t * d01 / dSum, fb = t * d12 / dSum;
	return [
		x1 - fa * (x2 - x0),
		y1 - fa * (y2 - y0),
		x1 + fb * (x2 - x0),
		y1 + fb * (y2 - y0)
	];
}
function expandPoints(p, tension) {
	const len = p.length, allPoints = [];
	for (let n = 2; n < len - 2; n += 2) {
		const cp = getControlPoints(p[n - 2], p[n - 1], p[n], p[n + 1], p[n + 2], p[n + 3], tension);
		if (isNaN(cp[0])) continue;
		allPoints.push(cp[0]);
		allPoints.push(cp[1]);
		allPoints.push(p[n]);
		allPoints.push(p[n + 1]);
		allPoints.push(cp[2]);
		allPoints.push(cp[3]);
	}
	return allPoints;
}
function getBezierExtremaPoints(points) {
	const extrema = [];
	for (let n = 0; n + 7 < points.length; n += 6) extrema.push(points[n + 6], points[n + 7], ...getCubicExtremaPoints(points[n], points[n + 1], points[n + 2], points[n + 3], points[n + 4], points[n + 5], points[n + 6], points[n + 7]));
	return extrema;
}
var Line = class extends Shape {
	constructor(config) {
		super(config);
		this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
			this._clearCache("tensionPoints");
		});
	}
	_hasTension() {
		return this.tension() !== 0 && this.points().length > 4;
	}
	_eachTensionSegment(onQuadratic, onCubic) {
		const points = this.points(), length = points.length, closed = this.closed(), tp = this.getTensionPoints(), len = tp.length;
		let x0 = points[0], y0 = points[1], n = closed ? 0 : 4;
		if (!closed) {
			onQuadratic(x0, y0, tp[0], tp[1], tp[2], tp[3]);
			x0 = tp[2];
			y0 = tp[3];
		}
		while (n < len - 2) {
			const cp1x = tp[n++], cp1y = tp[n++], cp2x = tp[n++], cp2y = tp[n++], x = tp[n++], y = tp[n++];
			onCubic(x0, y0, cp1x, cp1y, cp2x, cp2y, x, y);
			x0 = x;
			y0 = y;
		}
		if (!closed) onQuadratic(x0, y0, tp[len - 2], tp[len - 1], points[length - 2], points[length - 1]);
	}
	_sceneFunc(context) {
		const points = this.points(), length = points.length, closed = this.closed(), bezier = this.bezier();
		if (!length) return;
		let n = 0;
		context.beginPath();
		context.moveTo(points[0], points[1]);
		if (this._hasTension()) this._eachTensionSegment((_x0, _y0, cpx, cpy, x, y) => context.quadraticCurveTo(cpx, cpy, x, y), (_x0, _y0, cp1x, cp1y, cp2x, cp2y, x, y) => context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y));
		else if (bezier) {
			n = 2;
			while (n < length) context.bezierCurveTo(points[n++], points[n++], points[n++], points[n++], points[n++], points[n++]);
		} else for (n = 2; n < length; n += 2) context.lineTo(points[n], points[n + 1]);
		if (closed) {
			context.closePath();
			context.fillStrokeShape(this);
		} else context.strokeShape(this);
	}
	getTensionPoints() {
		return this._getCache("tensionPoints", this._getTensionPoints);
	}
	_getTensionPoints() {
		if (this.closed()) return this._getTensionPointsClosed();
		else return expandPoints(this.points(), this.tension());
	}
	_getTensionPointsClosed() {
		const p = this.points(), len = p.length, tension = this.tension(), firstControlPoints = getControlPoints(p[len - 2], p[len - 1], p[0], p[1], p[2], p[3], tension), lastControlPoints = getControlPoints(p[len - 4], p[len - 3], p[len - 2], p[len - 1], p[0], p[1], tension), middle = expandPoints(p, tension);
		return [firstControlPoints[2], firstControlPoints[3]].concat(middle).concat([
			lastControlPoints[0],
			lastControlPoints[1],
			p[len - 2],
			p[len - 1],
			lastControlPoints[2],
			lastControlPoints[3],
			firstControlPoints[0],
			firstControlPoints[1],
			p[0],
			p[1]
		]);
	}
	getWidth() {
		return this.getSelfRect().width;
	}
	getHeight() {
		return this.getSelfRect().height;
	}
	getSelfRect() {
		let points = this.points();
		if (points.length < 4) return {
			x: points[0] || 0,
			y: points[1] || 0,
			width: 0,
			height: 0
		};
		if (this._hasTension()) {
			const bounds = [points[0], points[1]];
			this._eachTensionSegment((x0, y0, cpx, cpy, x, y) => bounds.push(x, y, ...getQuadraticExtremaPoints(x0, y0, cpx, cpy, x, y)), (x0, y0, cp1x, cp1y, cp2x, cp2y, x, y) => bounds.push(x, y, ...getCubicExtremaPoints(x0, y0, cp1x, cp1y, cp2x, cp2y, x, y)));
			points = bounds;
		} else if (this.bezier()) points = [
			points[0],
			points[1],
			...getBezierExtremaPoints(points)
		];
		let minX = points[0];
		let maxX = points[0];
		let minY = points[1];
		let maxY = points[1];
		let x, y;
		for (let i = 0; i < points.length / 2; i++) {
			x = points[i * 2];
			y = points[i * 2 + 1];
			minX = Math.min(minX, x);
			maxX = Math.max(maxX, x);
			minY = Math.min(minY, y);
			maxY = Math.max(maxY, y);
		}
		return {
			x: minX,
			y: minY,
			width: maxX - minX,
			height: maxY - minY
		};
	}
};
Line.prototype.className = "Line";
Line.prototype._attrsAffectingSize = [
	"points",
	"bezier",
	"tension"
];
_registerNode(Line);
Factory.addGetterSetter(Line, "closed", false);
Factory.addGetterSetter(Line, "bezier", false);
Factory.addGetterSetter(Line, "tension", 0, getNumberValidator());
Factory.addGetterSetter(Line, "points", [], getNumberArrayValidator());
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Path.js
var Path = class Path extends Shape {
	constructor(config) {
		super(config);
		this.dataArray = [];
		this.pathLength = 0;
		this._readDataAttribute();
		this.on("dataChange.konva", function() {
			this._readDataAttribute();
		});
	}
	_readDataAttribute() {
		this.dataArray = Path.parsePathData(this.data());
		this.pathLength = Path.getPathLength(this.dataArray);
	}
	_sceneFunc(context) {
		const ca = this.dataArray;
		context.beginPath();
		let isClosed = false;
		for (let n = 0; n < ca.length; n++) {
			const c = ca[n].command;
			const p = ca[n].points;
			switch (c) {
				case "L":
					context.lineTo(p[0], p[1]);
					break;
				case "M":
					context.moveTo(p[0], p[1]);
					break;
				case "C":
					context.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
					break;
				case "Q":
					context.quadraticCurveTo(p[0], p[1], p[2], p[3]);
					break;
				case "A":
					const cx = p[0], cy = p[1], rx = p[2], ry = p[3], theta = p[4], dTheta = p[5], psi = p[6], fs = p[7];
					const r = rx > ry ? rx : ry;
					const scaleX = rx > ry ? 1 : rx / ry;
					const scaleY = rx > ry ? ry / rx : 1;
					context.translate(cx, cy);
					context.rotate(psi);
					context.scale(scaleX, scaleY);
					context.arc(0, 0, r, theta, theta + dTheta, 1 - fs);
					context.scale(1 / scaleX, 1 / scaleY);
					context.rotate(-psi);
					context.translate(-cx, -cy);
					break;
				case "z":
					isClosed = true;
					context.closePath();
			}
		}
		if (!isClosed && !this.hasFill()) context.strokeShape(this);
		else context.fillStrokeShape(this);
	}
	getSelfRect() {
		let points = [];
		this.dataArray.forEach(function(data) {
			if (data.command === "A") {
				const start = data.points[4];
				const dTheta = data.points[5];
				const end = data.points[4] + dTheta;
				let inc = Math.PI / 180;
				if (Math.abs(start - end) < inc) inc = Math.abs(start - end);
				if (dTheta < 0) for (let t = start - inc; t > end; t -= inc) {
					const point = Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t, 0);
					points.push(point.x, point.y);
				}
				else for (let t = start + inc; t < end; t += inc) {
					const point = Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t, 0);
					points.push(point.x, point.y);
				}
			} else if (data.command === "C") points.push(data.start.x, data.start.y, data.points[4], data.points[5], ...getCubicExtremaPoints(data.start.x, data.start.y, data.points[0], data.points[1], data.points[2], data.points[3], data.points[4], data.points[5]));
			else if (data.command === "Q") points.push(data.start.x, data.start.y, data.points[2], data.points[3], ...getQuadraticExtremaPoints(data.start.x, data.start.y, data.points[0], data.points[1], data.points[2], data.points[3]));
			else points = points.concat(data.points);
		});
		let minX = points[0];
		let maxX = points[0];
		let minY = points[1];
		let maxY = points[1];
		let x, y;
		for (let i = 0; i < points.length / 2; i++) {
			x = points[i * 2];
			y = points[i * 2 + 1];
			if (!isNaN(x)) {
				minX = Math.min(minX, x);
				maxX = Math.max(maxX, x);
			}
			if (!isNaN(y)) {
				minY = Math.min(minY, y);
				maxY = Math.max(maxY, y);
			}
		}
		return {
			x: minX,
			y: minY,
			width: maxX - minX,
			height: maxY - minY
		};
	}
	getLength() {
		return this.pathLength;
	}
	getPointAtLength(length) {
		return Path.getPointAtLengthOfDataArray(length, this.dataArray);
	}
	static getLineLength(x1, y1, x2, y2) {
		return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
	}
	static getPathLength(dataArray) {
		let pathLength = 0;
		for (let i = 0; i < dataArray.length; ++i) pathLength += dataArray[i].pathLength;
		return pathLength;
	}
	static getPointAtLengthOfDataArray(length, dataArray) {
		let points, i = 0, ii = dataArray.length;
		if (!ii) return null;
		while (i < ii && length > dataArray[i].pathLength) {
			length -= dataArray[i].pathLength;
			++i;
		}
		if (i === ii) {
			let j = i - 1;
			while (j > 0 && dataArray[j].points.length < 2) j--;
			points = dataArray[j].points.slice(-2);
			return {
				x: points[0],
				y: points[1]
			};
		}
		if (length < .01) {
			if (dataArray[i].command === "M") {
				points = dataArray[i].points.slice(0, 2);
				return {
					x: points[0],
					y: points[1]
				};
			} else return {
				x: dataArray[i].start.x,
				y: dataArray[i].start.y
			};
		}
		const cp = dataArray[i];
		const p = cp.points;
		switch (cp.command) {
			case "L": return Path.getPointOnLine(length, cp.start.x, cp.start.y, p[0], p[1]);
			case "C": return Path.getPointOnCubicBezier(t2length(length, Path.getPathLength(dataArray), (i) => {
				return getCubicArcLength([
					cp.start.x,
					p[0],
					p[2],
					p[4]
				], [
					cp.start.y,
					p[1],
					p[3],
					p[5]
				], i);
			}), cp.start.x, cp.start.y, p[0], p[1], p[2], p[3], p[4], p[5]);
			case "Q": return Path.getPointOnQuadraticBezier(t2length(length, Path.getPathLength(dataArray), (i) => {
				return getQuadraticArcLength([
					cp.start.x,
					p[0],
					p[2]
				], [
					cp.start.y,
					p[1],
					p[3]
				], i);
			}), cp.start.x, cp.start.y, p[0], p[1], p[2], p[3]);
			case "A":
				const cx = p[0], cy = p[1], rx = p[2], ry = p[3], dTheta = p[5], psi = p[6];
				let theta = p[4];
				theta += dTheta * length / cp.pathLength;
				return Path.getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi);
		}
		return null;
	}
	static getPointOnLine(dist, P1x, P1y, P2x, P2y, fromX, fromY) {
		fromX = fromX !== null && fromX !== void 0 ? fromX : P1x;
		fromY = fromY !== null && fromY !== void 0 ? fromY : P1y;
		const len = this.getLineLength(P1x, P1y, P2x, P2y);
		if (len < 1e-10) return {
			x: P1x,
			y: P1y
		};
		if (P2x === P1x) return {
			x: fromX,
			y: fromY + (P2y > P1y ? dist : -dist)
		};
		const m = (P2y - P1y) / (P2x - P1x);
		const run = Math.sqrt(dist * dist / (1 + m * m)) * (P2x < P1x ? -1 : 1);
		const rise = m * run;
		if (Math.abs(fromY - P1y - m * (fromX - P1x)) < 1e-10) return {
			x: fromX + run,
			y: fromY + rise
		};
		const u = ((fromX - P1x) * (P2x - P1x) + (fromY - P1y) * (P2y - P1y)) / (len * len);
		const ix = P1x + u * (P2x - P1x);
		const iy = P1y + u * (P2y - P1y);
		const pRise = this.getLineLength(fromX, fromY, ix, iy);
		const pRun = Math.sqrt(dist * dist - pRise * pRise);
		const adjustedRun = Math.sqrt(pRun * pRun / (1 + m * m)) * (P2x < P1x ? -1 : 1);
		const adjustedRise = m * adjustedRun;
		return {
			x: ix + adjustedRun,
			y: iy + adjustedRise
		};
	}
	static getPointOnCubicBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y, P4x, P4y) {
		function CB1(t) {
			return t * t * t;
		}
		function CB2(t) {
			return 3 * t * t * (1 - t);
		}
		function CB3(t) {
			return 3 * t * (1 - t) * (1 - t);
		}
		function CB4(t) {
			return (1 - t) * (1 - t) * (1 - t);
		}
		return {
			x: P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct),
			y: P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct)
		};
	}
	static getPointOnQuadraticBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y) {
		function QB1(t) {
			return t * t;
		}
		function QB2(t) {
			return 2 * t * (1 - t);
		}
		function QB3(t) {
			return (1 - t) * (1 - t);
		}
		return {
			x: P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct),
			y: P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct)
		};
	}
	static getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
		const cosPsi = Math.cos(psi), sinPsi = Math.sin(psi);
		const pt = {
			x: rx * Math.cos(theta),
			y: ry * Math.sin(theta)
		};
		return {
			x: cx + (pt.x * cosPsi - pt.y * sinPsi),
			y: cy + (pt.x * sinPsi + pt.y * cosPsi)
		};
	}
	static parsePathData(data) {
		if (!data) return [];
		let cs = data;
		const cc = [
			"m",
			"M",
			"l",
			"L",
			"v",
			"V",
			"h",
			"H",
			"z",
			"Z",
			"c",
			"C",
			"q",
			"Q",
			"t",
			"T",
			"s",
			"S",
			"a",
			"A"
		];
		cs = cs.replace(/* @__PURE__ */ new RegExp(" ", "g"), ",");
		for (let n = 0; n < cc.length; n++) cs = cs.replace(new RegExp(cc[n], "g"), "|" + cc[n]);
		const arr = cs.split("|");
		const ca = [];
		const coords = [];
		let cpx = 0;
		let cpy = 0;
		const re = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
		let match;
		for (let n = 1; n < arr.length; n++) {
			let str = arr[n];
			let c = str.charAt(0);
			str = str.slice(1);
			coords.length = 0;
			while (match = re.exec(str)) coords.push(match[0]);
			let p = [];
			let arcParamIndex = c === "A" || c === "a" ? 0 : -1;
			for (let j = 0, jlen = coords.length; j < jlen; j++) {
				const token = coords[j];
				if (token === "00") {
					p.push(0, 0);
					if (arcParamIndex >= 0) {
						arcParamIndex += 2;
						if (arcParamIndex >= 7) arcParamIndex -= 7;
					}
					continue;
				}
				if (arcParamIndex >= 0) {
					if (arcParamIndex === 3) {
						if (/^[01]{2}\d+(?:\.\d+)?$/.test(token)) {
							p.push(parseInt(token[0], 10));
							p.push(parseInt(token[1], 10));
							p.push(parseFloat(token.slice(2)));
							arcParamIndex += 3;
							if (arcParamIndex >= 7) arcParamIndex -= 7;
							continue;
						}
						if (token === "11" || token === "10" || token === "01") {
							p.push(parseInt(token[0], 10));
							p.push(parseInt(token[1], 10));
							arcParamIndex += 2;
							if (arcParamIndex >= 7) arcParamIndex -= 7;
							continue;
						}
						if (token === "0" || token === "1") {
							p.push(parseInt(token, 10));
							arcParamIndex += 1;
							if (arcParamIndex >= 7) arcParamIndex -= 7;
							continue;
						}
					} else if (arcParamIndex === 4) {
						if (/^[01]\d+(?:\.\d+)?$/.test(token)) {
							p.push(parseInt(token[0], 10));
							p.push(parseFloat(token.slice(1)));
							arcParamIndex += 2;
							if (arcParamIndex >= 7) arcParamIndex -= 7;
							continue;
						}
						if (token === "0" || token === "1") {
							p.push(parseInt(token, 10));
							arcParamIndex += 1;
							if (arcParamIndex >= 7) arcParamIndex -= 7;
							continue;
						}
					}
					const parsedArc = parseFloat(token);
					if (!isNaN(parsedArc)) p.push(parsedArc);
					else p.push(0);
					arcParamIndex += 1;
					if (arcParamIndex >= 7) arcParamIndex -= 7;
				} else {
					const parsed = parseFloat(token);
					if (!isNaN(parsed)) p.push(parsed);
					else p.push(0);
				}
			}
			while (p.length > 0) {
				if (isNaN(p[0])) break;
				let cmd = "";
				let points = [];
				const startX = cpx, startY = cpy;
				let prevCmd, ctlPtx, ctlPty;
				let rx, ry, psi, fa, fs, x1, y1;
				switch (c) {
					case "l":
						cpx += p.shift();
						cpy += p.shift();
						cmd = "L";
						points.push(cpx, cpy);
						break;
					case "L":
						cpx = p.shift();
						cpy = p.shift();
						points.push(cpx, cpy);
						break;
					case "m":
						const dx = p.shift();
						const dy = p.shift();
						cpx += dx;
						cpy += dy;
						cmd = "M";
						if (ca.length > 2 && ca[ca.length - 1].command === "z") {
							for (let idx = ca.length - 2; idx >= 0; idx--) if (ca[idx].command === "M") {
								cpx = ca[idx].points[0] + dx;
								cpy = ca[idx].points[1] + dy;
								break;
							}
						}
						points.push(cpx, cpy);
						c = "l";
						break;
					case "M":
						cpx = p.shift();
						cpy = p.shift();
						cmd = "M";
						points.push(cpx, cpy);
						c = "L";
						break;
					case "h":
						cpx += p.shift();
						cmd = "L";
						points.push(cpx, cpy);
						break;
					case "H":
						cpx = p.shift();
						cmd = "L";
						points.push(cpx, cpy);
						break;
					case "v":
						cpy += p.shift();
						cmd = "L";
						points.push(cpx, cpy);
						break;
					case "V":
						cpy = p.shift();
						cmd = "L";
						points.push(cpx, cpy);
						break;
					case "C":
						points.push(p.shift(), p.shift(), p.shift(), p.shift());
						cpx = p.shift();
						cpy = p.shift();
						points.push(cpx, cpy);
						break;
					case "c":
						points.push(cpx + p.shift(), cpy + p.shift(), cpx + p.shift(), cpy + p.shift());
						cpx += p.shift();
						cpy += p.shift();
						cmd = "C";
						points.push(cpx, cpy);
						break;
					case "S":
						ctlPtx = cpx;
						ctlPty = cpy;
						prevCmd = ca[ca.length - 1];
						if (prevCmd.command === "C") {
							ctlPtx = cpx + (cpx - prevCmd.points[2]);
							ctlPty = cpy + (cpy - prevCmd.points[3]);
						}
						points.push(ctlPtx, ctlPty, p.shift(), p.shift());
						cpx = p.shift();
						cpy = p.shift();
						cmd = "C";
						points.push(cpx, cpy);
						break;
					case "s":
						ctlPtx = cpx;
						ctlPty = cpy;
						prevCmd = ca[ca.length - 1];
						if (prevCmd.command === "C") {
							ctlPtx = cpx + (cpx - prevCmd.points[2]);
							ctlPty = cpy + (cpy - prevCmd.points[3]);
						}
						points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
						cpx += p.shift();
						cpy += p.shift();
						cmd = "C";
						points.push(cpx, cpy);
						break;
					case "Q":
						points.push(p.shift(), p.shift());
						cpx = p.shift();
						cpy = p.shift();
						points.push(cpx, cpy);
						break;
					case "q":
						points.push(cpx + p.shift(), cpy + p.shift());
						cpx += p.shift();
						cpy += p.shift();
						cmd = "Q";
						points.push(cpx, cpy);
						break;
					case "T":
						ctlPtx = cpx;
						ctlPty = cpy;
						prevCmd = ca[ca.length - 1];
						if (prevCmd.command === "Q") {
							ctlPtx = cpx + (cpx - prevCmd.points[0]);
							ctlPty = cpy + (cpy - prevCmd.points[1]);
						}
						cpx = p.shift();
						cpy = p.shift();
						cmd = "Q";
						points.push(ctlPtx, ctlPty, cpx, cpy);
						break;
					case "t":
						ctlPtx = cpx;
						ctlPty = cpy;
						prevCmd = ca[ca.length - 1];
						if (prevCmd.command === "Q") {
							ctlPtx = cpx + (cpx - prevCmd.points[0]);
							ctlPty = cpy + (cpy - prevCmd.points[1]);
						}
						cpx += p.shift();
						cpy += p.shift();
						cmd = "Q";
						points.push(ctlPtx, ctlPty, cpx, cpy);
						break;
					case "A":
						rx = p.shift();
						ry = p.shift();
						psi = p.shift();
						fa = p.shift();
						fs = p.shift();
						x1 = cpx;
						y1 = cpy;
						cpx = p.shift();
						cpy = p.shift();
						cmd = "A";
						points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
						break;
					case "a":
						rx = p.shift();
						ry = p.shift();
						psi = p.shift();
						fa = p.shift();
						fs = p.shift();
						x1 = cpx;
						y1 = cpy;
						cpx += p.shift();
						cpy += p.shift();
						cmd = "A";
						points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
				}
				ca.push({
					command: cmd || c,
					points,
					start: {
						x: startX,
						y: startY
					},
					pathLength: this.calcLength(startX, startY, cmd || c, points)
				});
			}
			if (c === "z" || c === "Z") ca.push({
				command: "z",
				points: [],
				start: void 0,
				pathLength: 0
			});
		}
		return ca;
	}
	static calcLength(x, y, cmd, points) {
		let len, p1, p2, t;
		const path = Path;
		switch (cmd) {
			case "L": return path.getLineLength(x, y, points[0], points[1]);
			case "C": return getCubicArcLength([
				x,
				points[0],
				points[2],
				points[4]
			], [
				y,
				points[1],
				points[3],
				points[5]
			], 1);
			case "Q": return getQuadraticArcLength([
				x,
				points[0],
				points[2]
			], [
				y,
				points[1],
				points[3]
			], 1);
			case "A":
				len = 0;
				const start = points[4];
				const dTheta = points[5];
				const end = points[4] + dTheta;
				let inc = Math.PI / 180;
				if (Math.abs(start - end) < inc) inc = Math.abs(start - end);
				p1 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
				if (dTheta < 0) for (t = start - inc; t > end; t -= inc) {
					p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
					len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
					p1 = p2;
				}
				else for (t = start + inc; t < end; t += inc) {
					p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
					len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
					p1 = p2;
				}
				p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
				len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
				return len;
		}
		return 0;
	}
	static convertEndpointToCenterParameterization(x1, y1, x2, y2, fa, fs, rx, ry, psiDeg) {
		const psi = psiDeg * (Math.PI / 180);
		const xp = Math.cos(psi) * (x1 - x2) / 2 + Math.sin(psi) * (y1 - y2) / 2;
		const yp = -1 * Math.sin(psi) * (x1 - x2) / 2 + Math.cos(psi) * (y1 - y2) / 2;
		const lambda = xp * xp / (rx * rx) + yp * yp / (ry * ry);
		if (lambda > 1) {
			rx *= Math.sqrt(lambda);
			ry *= Math.sqrt(lambda);
		}
		let f = Math.sqrt((rx * rx * (ry * ry) - rx * rx * (yp * yp) - ry * ry * (xp * xp)) / (rx * rx * (yp * yp) + ry * ry * (xp * xp)));
		if (fa === fs) f *= -1;
		if (isNaN(f)) f = 0;
		const cxp = f * rx * yp / ry;
		const cyp = f * -ry * xp / rx;
		const cx = (x1 + x2) / 2 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
		const cy = (y1 + y2) / 2 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;
		const vMag = function(v) {
			return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
		};
		const vRatio = function(u, v) {
			return (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v));
		};
		const vAngle = function(u, v) {
			return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
		};
		const theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
		const u = [(xp - cxp) / rx, (yp - cyp) / ry];
		const v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
		let dTheta = vAngle(u, v);
		if (vRatio(u, v) <= -1) dTheta = Math.PI;
		if (vRatio(u, v) >= 1) dTheta = 0;
		if (fs === 0 && dTheta > 0) dTheta = dTheta - 2 * Math.PI;
		if (fs === 1 && dTheta < 0) dTheta = dTheta + 2 * Math.PI;
		return [
			cx,
			cy,
			rx,
			ry,
			theta,
			dTheta,
			psi,
			fs
		];
	}
};
Path.prototype.className = "Path";
Path.prototype._attrsAffectingSize = ["data"];
_registerNode(Path);
Factory.addGetterSetter(Path, "data");
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Arrow.js
var Arrow = class extends Line {
	_sceneFunc(ctx) {
		super._sceneFunc(ctx);
		const PI2 = Math.PI * 2;
		const points = this.points();
		let tp = points;
		const fromTension = this.tension() !== 0 && points.length > 4;
		if (fromTension) tp = this.getTensionPoints();
		const length = this.pointerLength();
		const n = points.length;
		let dx, dy;
		if (fromTension) {
			const lp = [
				tp[tp.length - 4],
				tp[tp.length - 3],
				tp[tp.length - 2],
				tp[tp.length - 1],
				points[n - 2],
				points[n - 1]
			];
			const lastLength = Path.calcLength(tp[tp.length - 4], tp[tp.length - 3], "C", lp);
			const previous = Path.getPointOnQuadraticBezier(Math.min(1, 1 - length / lastLength), lp[0], lp[1], lp[2], lp[3], lp[4], lp[5]);
			dx = points[n - 2] - previous.x;
			dy = points[n - 1] - previous.y;
		} else {
			dx = points[n - 2] - points[n - 4];
			dy = points[n - 1] - points[n - 3];
		}
		const radians = (Math.atan2(dy, dx) + PI2) % PI2;
		const width = this.pointerWidth();
		if (this.pointerAtEnding()) {
			ctx.save();
			ctx.beginPath();
			ctx.translate(points[n - 2], points[n - 1]);
			ctx.rotate(radians);
			ctx.moveTo(0, 0);
			ctx.lineTo(-length, width / 2);
			ctx.lineTo(-length, -width / 2);
			ctx.closePath();
			ctx.restore();
			this.__fillStroke(ctx);
		}
		if (this.pointerAtBeginning()) {
			ctx.save();
			ctx.beginPath();
			ctx.translate(points[0], points[1]);
			if (fromTension) {
				dx = (tp[0] + tp[2]) / 2 - points[0];
				dy = (tp[1] + tp[3]) / 2 - points[1];
			} else {
				dx = points[2] - points[0];
				dy = points[3] - points[1];
			}
			ctx.rotate((Math.atan2(-dy, -dx) + PI2) % PI2);
			ctx.moveTo(0, 0);
			ctx.lineTo(-length, width / 2);
			ctx.lineTo(-length, -width / 2);
			ctx.closePath();
			ctx.restore();
			this.__fillStroke(ctx);
		}
	}
	__fillStroke(ctx) {
		const isDashEnabled = this.dashEnabled();
		if (isDashEnabled) {
			this.attrs.dashEnabled = false;
			ctx.setLineDash([]);
		}
		ctx.fillStrokeShape(this);
		if (isDashEnabled) this.attrs.dashEnabled = true;
	}
	getSelfRect() {
		const lineRect = super.getSelfRect();
		const offset = this.pointerWidth() / 2;
		return {
			x: lineRect.x,
			y: lineRect.y - offset,
			width: lineRect.width,
			height: lineRect.height + offset * 2
		};
	}
};
Arrow.prototype.className = "Arrow";
_registerNode(Arrow);
Factory.addGetterSetter(Arrow, "pointerLength", 10, getNumberValidator());
Factory.addGetterSetter(Arrow, "pointerWidth", 10, getNumberValidator());
Factory.addGetterSetter(Arrow, "pointerAtBeginning", false);
Factory.addGetterSetter(Arrow, "pointerAtEnding", true);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Circle.js
var Circle = class extends Shape {
	_sceneFunc(context) {
		context.beginPath();
		context.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, false);
		context.closePath();
		context.fillStrokeShape(this);
	}
	getWidth() {
		return this.radius() * 2;
	}
	getHeight() {
		return this.radius() * 2;
	}
	setWidth(width) {
		if (this.radius() !== width / 2) this.radius(width / 2);
	}
	setHeight(height) {
		if (this.radius() !== height / 2) this.radius(height / 2);
	}
};
Circle.prototype._centroid = true;
Circle.prototype.className = "Circle";
Circle.prototype._attrsAffectingSize = ["radius"];
_registerNode(Circle);
Factory.addGetterSetter(Circle, "radius", 0, getNumberValidator());
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Ellipse.js
var Ellipse = class extends Shape {
	_sceneFunc(context) {
		const rx = this.radiusX(), ry = this.radiusY();
		context.beginPath();
		context.save();
		if (rx !== ry) context.scale(1, ry / rx);
		context.arc(0, 0, rx, 0, Math.PI * 2, false);
		context.restore();
		context.closePath();
		context.fillStrokeShape(this);
	}
	getWidth() {
		return this.radiusX() * 2;
	}
	getHeight() {
		return this.radiusY() * 2;
	}
	setWidth(width) {
		this.radiusX(width / 2);
	}
	setHeight(height) {
		this.radiusY(height / 2);
	}
};
Ellipse.prototype.className = "Ellipse";
Ellipse.prototype._centroid = true;
Ellipse.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
_registerNode(Ellipse);
Factory.addComponentsGetterSetter(Ellipse, "radius", ["x", "y"]);
Factory.addGetterSetter(Ellipse, "radiusX", 0, getNumberValidator());
Factory.addGetterSetter(Ellipse, "radiusY", 0, getNumberValidator());
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Image.js
var Image$1 = class Image$1 extends Shape {
	constructor(attrs) {
		super(attrs);
		this._loadListener = () => {
			this._requestDraw();
		};
		this.on("imageChange.konva", (props) => {
			this._removeImageLoad(props.oldVal);
			this._setImageLoad();
		});
		this._setImageLoad();
	}
	_setImageLoad() {
		const image = this.image();
		if (image && image.complete) return;
		if (image && image.readyState === 4) return;
		if (image && image["addEventListener"]) image["addEventListener"]("load", this._loadListener);
	}
	_removeImageLoad(image) {
		if (image && image["removeEventListener"]) image["removeEventListener"]("load", this._loadListener);
	}
	destroy() {
		this._removeImageLoad(this.image());
		super.destroy();
		return this;
	}
	_useBufferCanvas() {
		const hasCornerRadius = !!this.cornerRadius();
		const hasShadow = this.hasShadow();
		if (hasCornerRadius && hasShadow) return true;
		return super._useBufferCanvas(true);
	}
	_sceneFunc(context) {
		const width = this.getWidth();
		const height = this.getHeight();
		const cornerRadius = this.cornerRadius();
		const image = this.attrs.image;
		let params;
		if (image) {
			const cropWidth = this.attrs.cropWidth;
			const cropHeight = this.attrs.cropHeight;
			if (cropWidth && cropHeight) params = [
				image,
				this.cropX(),
				this.cropY(),
				cropWidth,
				cropHeight,
				0,
				0,
				width,
				height
			];
			else params = [
				image,
				0,
				0,
				width,
				height
			];
		}
		if (this.hasFill() || this.hasStroke() || cornerRadius) {
			context.beginPath();
			cornerRadius ? Util.drawRoundedRectPath(context, width, height, cornerRadius) : context.rect(0, 0, width, height);
			context.closePath();
			context.fillStrokeShape(this);
		}
		if (image) {
			if (cornerRadius) context.clip();
			context.drawImage.apply(context, params);
		}
	}
	_hitFunc(context) {
		const width = this.width(), height = this.height(), cornerRadius = this.cornerRadius();
		context.beginPath();
		if (!cornerRadius) context.rect(0, 0, width, height);
		else Util.drawRoundedRectPath(context, width, height, cornerRadius);
		context.closePath();
		context.fillStrokeShape(this);
	}
	getWidth() {
		var _a, _b, _c;
		return (_c = (_a = this.attrs.width) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.width) !== null && _c !== void 0 ? _c : 0;
	}
	getHeight() {
		var _a, _b, _c;
		return (_c = (_a = this.attrs.height) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.height) !== null && _c !== void 0 ? _c : 0;
	}
	static fromURL(url, callback, onError = null) {
		const img = Util.createImageElement();
		img.onload = function() {
			callback(new Image$1({ image: img }));
		};
		img.onerror = onError;
		img.crossOrigin = "Anonymous";
		img.src = url;
	}
};
Image$1.prototype.className = "Image";
Image$1.prototype._attrsAffectingSize = ["image"];
_registerNode(Image$1);
Factory.addGetterSetter(Image$1, "cornerRadius", 0, getNumberOrArrayOfNumbersValidator(4));
Factory.addGetterSetter(Image$1, "image");
Factory.addComponentsGetterSetter(Image$1, "crop", [
	"x",
	"y",
	"width",
	"height"
]);
Factory.addGetterSetter(Image$1, "cropX", 0, getNumberValidator());
Factory.addGetterSetter(Image$1, "cropY", 0, getNumberValidator());
Factory.addGetterSetter(Image$1, "cropWidth", 0, getNumberValidator());
Factory.addGetterSetter(Image$1, "cropHeight", 0, getNumberValidator());
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Label.js
var ATTR_CHANGE_LIST$2 = [
	"fontFamily",
	"fontSize",
	"fontStyle",
	"padding",
	"lineHeight",
	"text",
	"width",
	"height",
	"pointerDirection",
	"pointerWidth",
	"pointerHeight"
];
var CHANGE_KONVA$1 = "Change.konva";
var NONE$1 = "none";
var UP = "up";
var RIGHT$1 = "right";
var DOWN = "down";
var LEFT$1 = "left";
var attrChangeListLen$1 = ATTR_CHANGE_LIST$2.length;
var Label = class extends Group {
	constructor(config) {
		super(config);
		this.on("add.konva", function(evt) {
			this._addListeners(evt.child);
			this._sync();
		});
	}
	getText() {
		return this.find("Text")[0];
	}
	getTag() {
		return this.find("Tag")[0];
	}
	_addListeners(text) {
		let that = this, n;
		const func = function() {
			that._sync();
		};
		for (n = 0; n < attrChangeListLen$1; n++) text.on(ATTR_CHANGE_LIST$2[n] + CHANGE_KONVA$1, func);
	}
	getWidth() {
		return this.getText().width();
	}
	getHeight() {
		return this.getText().height();
	}
	_sync() {
		let text = this.getText(), tag = this.getTag(), width, height, pointerDirection, pointerWidth, x, y, pointerHeight;
		if (text && tag) {
			width = text.width();
			height = text.height();
			pointerDirection = tag.pointerDirection();
			pointerWidth = tag.pointerWidth();
			pointerHeight = tag.pointerHeight();
			x = 0;
			y = 0;
			switch (pointerDirection) {
				case UP:
					x = width / 2;
					y = -1 * pointerHeight;
					break;
				case RIGHT$1:
					x = width + pointerWidth;
					y = height / 2;
					break;
				case DOWN:
					x = width / 2;
					y = height + pointerHeight;
					break;
				case LEFT$1:
					x = -1 * pointerWidth;
					y = height / 2;
			}
			tag.setAttrs({
				x: -1 * x,
				y: -1 * y,
				width,
				height
			});
			text.setAttrs({
				x: -1 * x,
				y: -1 * y
			});
		}
	}
};
Label.prototype.className = "Label";
_registerNode(Label);
var Tag = class extends Shape {
	_sceneFunc(context) {
		const width = this.width(), height = this.height(), pointerDirection = this.pointerDirection(), pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), cornerRadius = this.cornerRadius();
		let topLeft = 0;
		let topRight = 0;
		let bottomLeft = 0;
		let bottomRight = 0;
		if (typeof cornerRadius === "number") topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
		else {
			topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
			topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
			bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
			bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
		}
		context.beginPath();
		context.moveTo(topLeft, 0);
		if (pointerDirection === UP) {
			context.lineTo((width - pointerWidth) / 2, 0);
			context.lineTo(width / 2, -1 * pointerHeight);
			context.lineTo((width + pointerWidth) / 2, 0);
		}
		context.lineTo(width - topRight, 0);
		context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
		if (pointerDirection === RIGHT$1) {
			context.lineTo(width, (height - pointerHeight) / 2);
			context.lineTo(width + pointerWidth, height / 2);
			context.lineTo(width, (height + pointerHeight) / 2);
		}
		context.lineTo(width, height - bottomRight);
		context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
		if (pointerDirection === DOWN) {
			context.lineTo((width + pointerWidth) / 2, height);
			context.lineTo(width / 2, height + pointerHeight);
			context.lineTo((width - pointerWidth) / 2, height);
		}
		context.lineTo(bottomLeft, height);
		context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
		if (pointerDirection === LEFT$1) {
			context.lineTo(0, (height + pointerHeight) / 2);
			context.lineTo(-1 * pointerWidth, height / 2);
			context.lineTo(0, (height - pointerHeight) / 2);
		}
		context.lineTo(0, topLeft);
		context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
		context.closePath();
		context.fillStrokeShape(this);
	}
	getSelfRect() {
		let x = 0, y = 0, pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), direction = this.pointerDirection(), width = this.width(), height = this.height();
		if (direction === UP) {
			y -= pointerHeight;
			height += pointerHeight;
		} else if (direction === DOWN) height += pointerHeight;
		else if (direction === LEFT$1) {
			x -= pointerWidth * 1.5;
			width += pointerWidth;
		} else if (direction === RIGHT$1) width += pointerWidth * 1.5;
		return {
			x,
			y,
			width,
			height
		};
	}
};
Tag.prototype.className = "Tag";
_registerNode(Tag);
Factory.addGetterSetter(Tag, "pointerDirection", NONE$1);
Factory.addGetterSetter(Tag, "pointerWidth", 0, getNumberValidator());
Factory.addGetterSetter(Tag, "pointerHeight", 0, getNumberValidator());
Factory.addGetterSetter(Tag, "cornerRadius", 0, getNumberOrArrayOfNumbersValidator(4));
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Rect.js
var Rect = class extends Shape {
	_sceneFunc(context) {
		const cornerRadius = this.cornerRadius(), width = this.width(), height = this.height();
		context.beginPath();
		if (!cornerRadius) context.rect(0, 0, width, height);
		else Util.drawRoundedRectPath(context, width, height, cornerRadius);
		context.closePath();
		context.fillStrokeShape(this);
	}
};
Rect.prototype.className = "Rect";
_registerNode(Rect);
Factory.addGetterSetter(Rect, "cornerRadius", 0, getNumberOrArrayOfNumbersValidator(4));
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/RegularPolygon.js
var RegularPolygon = class extends Shape {
	_sceneFunc(context) {
		const points = this._getPoints(), radius = this.radius(), sides = this.sides(), cornerRadius = this.cornerRadius();
		context.beginPath();
		if (!cornerRadius) {
			context.moveTo(points[0].x, points[0].y);
			for (let n = 1; n < points.length; n++) context.lineTo(points[n].x, points[n].y);
		} else Util.drawRoundedPolygonPath(context, points, sides, radius, cornerRadius);
		context.closePath();
		context.fillStrokeShape(this);
	}
	_getPoints() {
		const sides = this.attrs.sides;
		const radius = this.attrs.radius || 0;
		const points = [];
		for (let n = 0; n < sides; n++) points.push({
			x: radius * Math.sin(n * 2 * Math.PI / sides),
			y: -1 * radius * Math.cos(n * 2 * Math.PI / sides)
		});
		return points;
	}
	getSelfRect() {
		const points = this._getPoints();
		let minX = points[0].x;
		let maxX = points[0].x;
		let minY = points[0].y;
		let maxY = points[0].y;
		points.forEach((point) => {
			minX = Math.min(minX, point.x);
			maxX = Math.max(maxX, point.x);
			minY = Math.min(minY, point.y);
			maxY = Math.max(maxY, point.y);
		});
		return {
			x: minX,
			y: minY,
			width: maxX - minX,
			height: maxY - minY
		};
	}
	getWidth() {
		return this.radius() * 2;
	}
	getHeight() {
		return this.radius() * 2;
	}
	setWidth(width) {
		this.radius(width / 2);
	}
	setHeight(height) {
		this.radius(height / 2);
	}
};
RegularPolygon.prototype.className = "RegularPolygon";
RegularPolygon.prototype._centroid = true;
RegularPolygon.prototype._attrsAffectingSize = ["radius"];
_registerNode(RegularPolygon);
Factory.addGetterSetter(RegularPolygon, "radius", 0, getNumberValidator());
Factory.addGetterSetter(RegularPolygon, "sides", 0, getNumberValidator());
Factory.addGetterSetter(RegularPolygon, "cornerRadius", 0, getNumberOrArrayOfNumbersValidator(4));
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Ring.js
var PIx2 = Math.PI * 2;
var Ring = class extends Shape {
	_sceneFunc(context) {
		context.beginPath();
		context.arc(0, 0, this.innerRadius(), 0, PIx2, false);
		context.moveTo(this.outerRadius(), 0);
		context.arc(0, 0, this.outerRadius(), PIx2, 0, true);
		context.closePath();
		context.fillStrokeShape(this);
	}
	getWidth() {
		return this.outerRadius() * 2;
	}
	getHeight() {
		return this.outerRadius() * 2;
	}
	setWidth(width) {
		this.outerRadius(width / 2);
	}
	setHeight(height) {
		this.outerRadius(height / 2);
	}
};
Ring.prototype.className = "Ring";
Ring.prototype._centroid = true;
Ring.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
_registerNode(Ring);
Factory.addGetterSetter(Ring, "innerRadius", 0, getNumberValidator());
Factory.addGetterSetter(Ring, "outerRadius", 0, getNumberValidator());
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Sprite.js
var Sprite = class extends Shape {
	constructor(config) {
		super(config);
		this._updated = true;
		this.anim = new Animation(() => {
			const updated = this._updated;
			this._updated = false;
			return updated;
		});
		this.on("animationChange.konva", function() {
			this.frameIndex(0);
		});
		this.on("frameIndexChange.konva", function() {
			this._updated = true;
		});
		this.on("frameRateChange.konva", function() {
			if (!this.anim.isRunning()) return;
			clearInterval(this.interval);
			this._setInterval();
		});
	}
	_sceneFunc(context) {
		const anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), x = set[ix4 + 0], y = set[ix4 + 1], width = set[ix4 + 2], height = set[ix4 + 3], image = this.image();
		if (this.hasFill() || this.hasStroke()) {
			context.beginPath();
			context.rect(0, 0, width, height);
			context.closePath();
			context.fillStrokeShape(this);
		}
		if (image) {
			if (offsets) {
				const offset = offsets[anim], ix2 = index * 2;
				context.drawImage(image, x, y, width, height, offset[ix2 + 0], offset[ix2 + 1], width, height);
			} else context.drawImage(image, x, y, width, height, 0, 0, width, height);
		}
	}
	_hitFunc(context) {
		const anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), width = set[ix4 + 2], height = set[ix4 + 3];
		context.beginPath();
		if (offsets) {
			const offset = offsets[anim];
			const ix2 = index * 2;
			context.rect(offset[ix2 + 0], offset[ix2 + 1], width, height);
		} else context.rect(0, 0, width, height);
		context.closePath();
		context.fillShape(this);
	}
	_useBufferCanvas() {
		return super._useBufferCanvas(true);
	}
	_setInterval() {
		const that = this;
		this.interval = setInterval(function() {
			that._updateIndex();
		}, 1e3 / this.frameRate());
	}
	start() {
		if (this.isRunning()) return;
		const layer = this.getLayer();
		this.anim.setLayers(layer);
		this._setInterval();
		this.anim.start();
	}
	stop() {
		this.anim.stop();
		clearInterval(this.interval);
	}
	isRunning() {
		return this.anim.isRunning();
	}
	_updateIndex() {
		const index = this.frameIndex(), animation = this.animation();
		if (index < this.animations()[animation].length / 4 - 1) this.frameIndex(index + 1);
		else this.frameIndex(0);
	}
};
Sprite.prototype.className = "Sprite";
_registerNode(Sprite);
Factory.addGetterSetter(Sprite, "animation");
Factory.addGetterSetter(Sprite, "animations");
Factory.addGetterSetter(Sprite, "frameOffsets");
Factory.addGetterSetter(Sprite, "image");
Factory.addGetterSetter(Sprite, "frameIndex", 0, getNumberValidator());
Factory.addGetterSetter(Sprite, "frameRate", 17, getNumberValidator());
Factory.backCompat(Sprite, {
	index: "frameIndex",
	getIndex: "getFrameIndex",
	setIndex: "setFrameIndex"
});
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Star.js
var Star = class extends Shape {
	_sceneFunc(context) {
		const innerRadius = this.innerRadius(), outerRadius = this.outerRadius(), numPoints = this.numPoints();
		context.beginPath();
		context.moveTo(0, 0 - outerRadius);
		for (let n = 1; n < numPoints * 2; n++) {
			const radius = n % 2 === 0 ? outerRadius : innerRadius;
			const x = radius * Math.sin(n * Math.PI / numPoints);
			const y = -1 * radius * Math.cos(n * Math.PI / numPoints);
			context.lineTo(x, y);
		}
		context.closePath();
		context.fillStrokeShape(this);
	}
	getWidth() {
		return this.outerRadius() * 2;
	}
	getHeight() {
		return this.outerRadius() * 2;
	}
	setWidth(width) {
		this.outerRadius(width / 2);
	}
	setHeight(height) {
		this.outerRadius(height / 2);
	}
};
Star.prototype.className = "Star";
Star.prototype._centroid = true;
Star.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
_registerNode(Star);
Factory.addGetterSetter(Star, "numPoints", 5, getNumberValidator());
Factory.addGetterSetter(Star, "innerRadius", 0, getNumberValidator());
Factory.addGetterSetter(Star, "outerRadius", 0, getNumberValidator());
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Text.js
function stringToArray(string) {
	return [...string].reduce((acc, char, index, array) => {
		if (/\p{Emoji}/u.test(char)) {
			const nextChar = array[index + 1];
			if (nextChar && /\p{Emoji_Modifier}|\u200D/u.test(nextChar)) {
				acc.push(char + nextChar);
				array[index + 1] = "";
			} else acc.push(char);
		} else if (/\p{Regional_Indicator}{2}/u.test(char + (array[index + 1] || ""))) acc.push(char + array[index + 1]);
		else if (index > 0 && /\p{Mn}|\p{Me}|\p{Mc}/u.test(char)) acc[acc.length - 1] += char;
		else if (char) acc.push(char);
		return acc;
	}, []);
}
var AUTO = "auto";
var CENTER = "center";
var INHERIT = "inherit";
var JUSTIFY = "justify";
var CHANGE_KONVA = "Change.konva";
var CONTEXT_2D = "2d";
var DASH = "-";
var LEFT = "left";
var TEXT = "text";
var TEXT_UPPER = "Text";
var TOP = "top";
var BOTTOM = "bottom";
var MIDDLE = "middle";
var NORMAL$1 = "normal";
var PX_SPACE = "px ";
var SPACE = " ";
var RIGHT = "right";
var RTL = "rtl";
var WORD = "word";
var CHAR = "char";
var NONE = "none";
var ELLIPSIS = "…";
var ATTR_CHANGE_LIST$1 = [
	"direction",
	"fontFamily",
	"fontSize",
	"fontStyle",
	"fontVariant",
	"padding",
	"align",
	"verticalAlign",
	"lineHeight",
	"text",
	"width",
	"height",
	"wrap",
	"ellipsis",
	"letterSpacing"
];
var attrChangeListLen = ATTR_CHANGE_LIST$1.length;
var _shadowOpacityBuggy = null;
function hasShadowOpacityBug() {
	if (_shadowOpacityBuggy !== null) return _shadowOpacityBuggy;
	_shadowOpacityBuggy = false;
	try {
		const c = document.createElement("canvas");
		c.width = 10;
		c.height = 10;
		const ctx = c.getContext(CONTEXT_2D);
		if (ctx) {
			ctx.globalAlpha = 0;
			ctx.shadowColor = "black";
			ctx.shadowBlur = 5;
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 5;
			ctx.fillStyle = "black";
			ctx.font = "10px Arial";
			ctx.fillText("X", 0, 10);
			const data = ctx.getImageData(0, 0, 10, 10).data;
			for (let i = 3; i < data.length; i += 4) if (data[i] > 0) {
				_shadowOpacityBuggy = true;
				break;
			}
		}
	} catch (e) {}
	return _shadowOpacityBuggy;
}
function normalizeFontFamily(fontFamily) {
	return fontFamily.split(",").map((family) => {
		family = family.trim();
		const hasSpace = family.indexOf(" ") >= 0;
		const hasQuotes = family.indexOf("\"") >= 0 || family.indexOf("'") >= 0;
		if (hasSpace && !hasQuotes) family = `"${family}"`;
		return family;
	}).join(", ");
}
var dummyContext;
function getDummyContext() {
	if (dummyContext) return dummyContext;
	dummyContext = Util.createCanvasElement().getContext(CONTEXT_2D);
	return dummyContext;
}
function _fillFunc$1(context) {
	context.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function _strokeFunc$1(context) {
	context.setAttr("miterLimit", 2);
	context.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function checkDefaultFill(config) {
	config = config || {};
	if (!config.fillLinearGradientColorStops && !config.fillRadialGradientColorStops && !config.fillPatternImage) config.fill = config.fill || "black";
	return config;
}
var Text = class extends Shape {
	constructor(config) {
		super(checkDefaultFill(config));
		this._partialTextX = 0;
		this._partialTextY = 0;
		for (let n = 0; n < attrChangeListLen; n++) this.on(ATTR_CHANGE_LIST$1[n] + CHANGE_KONVA, this._setTextData);
		this._setTextData();
	}
	_sceneFunc(context) {
		var _a, _b;
		const textArr = this.textArr, textArrLen = textArr.length;
		if (!this.text()) return;
		let padding = this.padding(), fontSize = this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, verticalAlign = this.verticalAlign(), direction = this.direction(), alignY = 0, align = this.align(), totalWidth = this.getWidth(), letterSpacing = this.letterSpacing(), charRenderFunc = this.charRenderFunc(), fill = this.fill(), textDecoration = this.textDecoration(), underlineOffset = this.underlineOffset(), shouldUnderline = textDecoration.indexOf("underline") !== -1, shouldLineThrough = textDecoration.indexOf("line-through") !== -1, n;
		direction = direction === INHERIT ? context.direction : direction;
		let translateY = lineHeightPx / 2;
		let baseline = MIDDLE;
		if (!Konva$2.legacyTextRendering) {
			const metrics = this.measureSize("M");
			baseline = "alphabetic";
			translateY = (((_a = metrics.fontBoundingBoxAscent) !== null && _a !== void 0 ? _a : metrics.actualBoundingBoxAscent) - ((_b = metrics.fontBoundingBoxDescent) !== null && _b !== void 0 ? _b : metrics.actualBoundingBoxDescent)) / 2 + lineHeightPx / 2;
		}
		if (direction === RTL) context.setAttr("direction", direction);
		context.setAttr("font", this._getContextFont());
		context.setAttr("textBaseline", baseline);
		context.setAttr("textAlign", LEFT);
		if (verticalAlign === MIDDLE) alignY = (this.getHeight() - textArrLen * lineHeightPx - padding * 2) / 2;
		else if (verticalAlign === BOTTOM) alignY = this.getHeight() - textArrLen * lineHeightPx - padding * 2;
		context.translate(padding, alignY + padding);
		for (n = 0; n < textArrLen; n++) {
			let lineTranslateX = 0;
			let lineTranslateY = 0;
			const obj = textArr[n], text = obj.text, width = obj.width, lastLine = obj.lastInParagraph;
			context.save();
			if (align === RIGHT) lineTranslateX += totalWidth - width - padding * 2;
			else if (align === CENTER) lineTranslateX += (totalWidth - width - padding * 2) / 2;
			if (shouldUnderline) {
				context.save();
				context.beginPath();
				const yOffset = underlineOffset !== null && underlineOffset !== void 0 ? underlineOffset : !Konva$2.legacyTextRendering ? Math.round(fontSize / 4) : Math.round(fontSize / 2);
				const x = lineTranslateX;
				const y = translateY + lineTranslateY + yOffset;
				context.moveTo(x, y);
				const lineWidth = align === JUSTIFY && !lastLine ? totalWidth - padding * 2 : width;
				context.lineTo(x + Math.round(lineWidth), y);
				context.lineWidth = fontSize / 15;
				context.strokeStyle = this._getLinearGradient() || fill;
				context.stroke();
				context.restore();
			}
			const lineThroughStartX = lineTranslateX;
			if (direction !== RTL && (letterSpacing !== 0 || align === JUSTIFY || charRenderFunc)) {
				const spacesNumber = text.split(" ").length - 1;
				const array = stringToArray(text);
				for (let li = 0; li < array.length; li++) {
					const letter = array[li];
					if (letter === " " && !lastLine && align === JUSTIFY) lineTranslateX += (totalWidth - padding * 2 - width) / spacesNumber;
					this._partialTextX = lineTranslateX;
					this._partialTextY = translateY + lineTranslateY;
					this._partialText = letter;
					if (charRenderFunc) {
						context.save();
						const previousGraphemes = textArr.slice(0, n).reduce((acc, line) => acc + stringToArray(line.text).length, 0);
						charRenderFunc({
							char: letter,
							index: li + previousGraphemes,
							x: lineTranslateX,
							y: translateY + lineTranslateY,
							lineIndex: n,
							column: li,
							isLastInLine: lastLine,
							width: this.measureSize(letter).width,
							context
						});
					}
					context.fillStrokeShape(this);
					if (charRenderFunc) context.restore();
					lineTranslateX += this.measureSize(letter).width + letterSpacing;
				}
			} else {
				if (letterSpacing !== 0) context.setAttr("letterSpacing", `${letterSpacing}px`);
				this._partialTextX = lineTranslateX;
				this._partialTextY = translateY + lineTranslateY;
				this._partialText = text;
				context.fillStrokeShape(this);
			}
			if (shouldLineThrough) {
				context.save();
				context.beginPath();
				const yOffset = !Konva$2.legacyTextRendering ? -Math.round(fontSize / 4) : 0;
				const x = lineThroughStartX;
				context.moveTo(x, translateY + lineTranslateY + yOffset);
				const lineWidth = align === JUSTIFY && !lastLine ? totalWidth - padding * 2 : width;
				context.lineTo(x + Math.round(lineWidth), translateY + lineTranslateY + yOffset);
				context.lineWidth = fontSize / 15;
				context.strokeStyle = this._getLinearGradient() || fill;
				context.stroke();
				context.restore();
			}
			context.restore();
			if (textArrLen > 1) translateY += lineHeightPx;
		}
	}
	_hitFunc(context) {
		const width = this.getWidth(), height = this.getHeight();
		context.beginPath();
		context.rect(0, 0, width, height);
		context.closePath();
		context.fillStrokeShape(this);
	}
	setText(text) {
		const str = Util._isString(text) ? text : text === null || text === void 0 ? "" : text + "";
		this._setAttr(TEXT, str);
		return this;
	}
	getWidth() {
		return this.attrs.width === AUTO || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
	}
	getHeight() {
		return this.attrs.height === AUTO || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
	}
	getTextWidth() {
		return this.textWidth;
	}
	getTextHeight() {
		Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
		return this.textHeight;
	}
	measureSize(text) {
		var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
		let _context = getDummyContext(), fontSize = this.fontSize(), metrics;
		_context.save();
		_context.font = this._getContextFont();
		metrics = _context.measureText(text);
		_context.restore();
		const scaleFactor = fontSize / 100;
		return {
			actualBoundingBoxAscent: (_a = metrics.actualBoundingBoxAscent) !== null && _a !== void 0 ? _a : 71.58203125 * scaleFactor,
			actualBoundingBoxDescent: (_b = metrics.actualBoundingBoxDescent) !== null && _b !== void 0 ? _b : 0,
			actualBoundingBoxLeft: (_c = metrics.actualBoundingBoxLeft) !== null && _c !== void 0 ? _c : -7.421875 * scaleFactor,
			actualBoundingBoxRight: (_d = metrics.actualBoundingBoxRight) !== null && _d !== void 0 ? _d : 75.732421875 * scaleFactor,
			alphabeticBaseline: (_e = metrics.alphabeticBaseline) !== null && _e !== void 0 ? _e : 0,
			emHeightAscent: (_f = metrics.emHeightAscent) !== null && _f !== void 0 ? _f : 100 * scaleFactor,
			emHeightDescent: (_g = metrics.emHeightDescent) !== null && _g !== void 0 ? _g : -20 * scaleFactor,
			fontBoundingBoxAscent: (_h = metrics.fontBoundingBoxAscent) !== null && _h !== void 0 ? _h : 91 * scaleFactor,
			fontBoundingBoxDescent: (_j = metrics.fontBoundingBoxDescent) !== null && _j !== void 0 ? _j : 21 * scaleFactor,
			hangingBaseline: (_k = metrics.hangingBaseline) !== null && _k !== void 0 ? _k : 72.80000305175781 * scaleFactor,
			ideographicBaseline: (_l = metrics.ideographicBaseline) !== null && _l !== void 0 ? _l : -21 * scaleFactor,
			width: metrics.width,
			height: fontSize
		};
	}
	_getContextFont() {
		return this.fontStyle() + SPACE + this.fontVariant() + SPACE + (this.fontSize() + PX_SPACE) + normalizeFontFamily(this.fontFamily());
	}
	_addTextLine(line) {
		if (this.align() === JUSTIFY) line = line.trim();
		const width = this._getTextWidth(line);
		return this.textArr.push({
			text: line,
			width,
			lastInParagraph: false
		});
	}
	_getTextWidth(text) {
		const letterSpacing = this.letterSpacing();
		const length = text.length;
		return getDummyContext().measureText(text).width + letterSpacing * length;
	}
	_setTextData() {
		let lines = this.text().split("\n"), fontSize = +this.fontSize(), textWidth = 0, lineHeightPx = this.lineHeight() * fontSize, width = this.attrs.width, height = this.attrs.height, fixedWidth = width !== AUTO && width !== void 0, fixedHeight = height !== AUTO && height !== void 0, padding = this.padding(), maxWidth = width - padding * 2, maxHeightPx = height - padding * 2, currentHeightPx = 0, wrap = this.wrap(), wrapAtWord = wrap !== CHAR && wrap !== NONE, shouldAddEllipsis = this.ellipsis();
		this.textArr = [];
		getDummyContext().font = this._getContextFont();
		const additionalWidth = shouldAddEllipsis ? this._getTextWidth(ELLIPSIS) : 0;
		for (let i = 0, max = lines.length; i < max; ++i) {
			let line = lines[i];
			let lineWidth = this._getTextWidth(line);
			if (fixedWidth && lineWidth > maxWidth) while (line.length > 0) {
				const lineArray = stringToArray(line);
				let low = 0, high = lineArray.length, match = "", matchWidth = 0;
				while (low < high) {
					const mid = low + high >>> 1, substr = lineArray.slice(0, mid + 1).join(""), substrWidth = this._getTextWidth(substr);
					if ((shouldAddEllipsis && fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx ? substrWidth + additionalWidth : substrWidth) <= maxWidth) {
						low = mid + 1;
						match = substr;
						matchWidth = substrWidth;
					} else high = mid;
				}
				if (match) {
					if (wrapAtWord) {
						const matchArray = stringToArray(match);
						const nextChar = lineArray[matchArray.length];
						const nextIsSpaceOrDash = nextChar === SPACE || nextChar === DASH;
						let wrapIndex;
						if (nextIsSpaceOrDash && matchWidth <= maxWidth) wrapIndex = matchArray.length;
						else {
							const lastSpaceIndex = matchArray.lastIndexOf(SPACE);
							const lastDashIndex = matchArray.lastIndexOf(DASH);
							wrapIndex = Math.max(lastSpaceIndex, lastDashIndex) + 1;
						}
						if (wrapIndex > 0) {
							low = wrapIndex;
							match = lineArray.slice(0, low).join("");
							matchWidth = this._getTextWidth(match);
						}
					}
					match = match.trimRight();
					this._addTextLine(match);
					textWidth = Math.max(textWidth, matchWidth);
					currentHeightPx += lineHeightPx;
					if (this._shouldHandleEllipsis(currentHeightPx)) {
						this._tryToAddEllipsisToLastLine();
						break;
					}
					line = lineArray.slice(low).join("").trimLeft();
					if (line.length > 0) {
						lineWidth = this._getTextWidth(line);
						if (lineWidth <= maxWidth) {
							this._addTextLine(line);
							currentHeightPx += lineHeightPx;
							textWidth = Math.max(textWidth, lineWidth);
							break;
						}
					}
				} else break;
			}
			else {
				this._addTextLine(line);
				currentHeightPx += lineHeightPx;
				textWidth = Math.max(textWidth, lineWidth);
				if (this._shouldHandleEllipsis(currentHeightPx) && i < max - 1) this._tryToAddEllipsisToLastLine();
			}
			if (this.textArr[this.textArr.length - 1]) this.textArr[this.textArr.length - 1].lastInParagraph = true;
			if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) break;
		}
		this.textHeight = fontSize;
		this.textWidth = textWidth;
	}
	_shouldHandleEllipsis(currentHeightPx) {
		const fontSize = +this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, height = this.attrs.height, fixedHeight = height !== AUTO && height !== void 0, maxHeightPx = height - this.padding() * 2;
		return !(this.wrap() !== NONE) || fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx;
	}
	_tryToAddEllipsisToLastLine() {
		const width = this.attrs.width, fixedWidth = width !== AUTO && width !== void 0, maxWidth = width - this.padding() * 2, shouldAddEllipsis = this.ellipsis();
		const lastLine = this.textArr[this.textArr.length - 1];
		if (!lastLine || !shouldAddEllipsis) return;
		if (fixedWidth) {
			if (!(this._getTextWidth(lastLine.text + ELLIPSIS) < maxWidth)) lastLine.text = lastLine.text.slice(0, lastLine.text.length - 3);
		}
		this.textArr.splice(this.textArr.length - 1, 1);
		this._addTextLine(lastLine.text + ELLIPSIS);
	}
	getStrokeScaleEnabled() {
		return true;
	}
	_useBufferCanvas() {
		const hasLine = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1;
		const hasShadow = this.hasShadow();
		if (hasLine && hasShadow) return true;
		if (hasShadow && this.getAbsoluteOpacity() !== 1 && hasShadowOpacityBug()) return true;
		return super._useBufferCanvas();
	}
};
Text.prototype._fillFunc = _fillFunc$1;
Text.prototype._strokeFunc = _strokeFunc$1;
Text.prototype.className = TEXT_UPPER;
Text.prototype._attrsAffectingSize = [
	"text",
	"fontSize",
	"padding",
	"wrap",
	"lineHeight",
	"letterSpacing"
];
_registerNode(Text);
Factory.overWriteSetter(Text, "width", getNumberOrAutoValidator());
Factory.overWriteSetter(Text, "height", getNumberOrAutoValidator());
Factory.addGetterSetter(Text, "direction", INHERIT);
Factory.addGetterSetter(Text, "fontFamily", "Arial");
Factory.addGetterSetter(Text, "fontSize", 12, getNumberValidator());
Factory.addGetterSetter(Text, "fontStyle", NORMAL$1);
Factory.addGetterSetter(Text, "fontVariant", NORMAL$1);
Factory.addGetterSetter(Text, "padding", 0, getNumberValidator());
Factory.addGetterSetter(Text, "align", LEFT);
Factory.addGetterSetter(Text, "verticalAlign", TOP);
Factory.addGetterSetter(Text, "lineHeight", 1, getNumberValidator());
Factory.addGetterSetter(Text, "wrap", WORD);
Factory.addGetterSetter(Text, "ellipsis", false, getBooleanValidator());
Factory.addGetterSetter(Text, "letterSpacing", 0, getNumberValidator());
Factory.addGetterSetter(Text, "text", "", getStringValidator());
Factory.addGetterSetter(Text, "textDecoration", "");
Factory.addGetterSetter(Text, "underlineOffset", void 0, getNumberValidator());
Factory.addGetterSetter(Text, "charRenderFunc", void 0);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/TextPath.js
var EMPTY_STRING = "";
var NORMAL = "normal";
function _fillFunc(context) {
	context.fillText(this.partialText, 0, 0);
}
function _strokeFunc(context) {
	context.strokeText(this.partialText, 0, 0);
}
var TextPath = class extends Shape {
	constructor(config) {
		super(config);
		this.dummyCanvas = Util.createCanvasElement();
		this.dataArray = [];
		this._readDataAttribute();
		this.on("dataChange.konva", function() {
			this._readDataAttribute();
			this._setTextData();
		});
		this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva directionChange.konva", this._setTextData);
		this._setTextData();
	}
	_getTextPathLength() {
		return Path.getPathLength(this.dataArray);
	}
	_getPointAtLength(length) {
		if (!this.attrs.data) return null;
		if (length > this.pathLength) return null;
		return Path.getPointAtLengthOfDataArray(length, this.dataArray);
	}
	_readDataAttribute() {
		this.dataArray = Path.parsePathData(this.attrs.data);
		this.pathLength = this._getTextPathLength();
	}
	_sceneFunc(context) {
		context.setAttr("font", this._getContextFont());
		context.setAttr("textBaseline", this.textBaseline());
		context.setAttr("textAlign", "left");
		context.save();
		const textDecoration = this.textDecoration();
		const fill = this.fill();
		const fontSize = this.fontSize();
		const glyphInfo = this.glyphInfo;
		const hasUnderline = textDecoration.indexOf("underline") !== -1;
		const hasLineThrough = textDecoration.indexOf("line-through") !== -1;
		if (hasUnderline) context.beginPath();
		for (let i = 0; i < glyphInfo.length; i++) {
			context.save();
			const p0 = glyphInfo[i].p0;
			context.translate(p0.x, p0.y);
			context.rotate(glyphInfo[i].rotation);
			this.partialText = glyphInfo[i].text;
			context.fillStrokeShape(this);
			if (hasUnderline) {
				if (i === 0) context.moveTo(0, fontSize / 2 + 1);
				context.lineTo(glyphInfo[i].width, fontSize / 2 + 1);
			}
			context.restore();
		}
		if (hasUnderline) {
			context.strokeStyle = fill;
			context.lineWidth = fontSize / 20;
			context.stroke();
		}
		if (hasLineThrough) {
			context.beginPath();
			for (let i = 0; i < glyphInfo.length; i++) {
				context.save();
				const p0 = glyphInfo[i].p0;
				context.translate(p0.x, p0.y);
				context.rotate(glyphInfo[i].rotation);
				if (i === 0) context.moveTo(0, 0);
				context.lineTo(glyphInfo[i].width, 0);
				context.restore();
			}
			context.strokeStyle = fill;
			context.lineWidth = fontSize / 20;
			context.stroke();
		}
		context.restore();
	}
	_hitFunc(context) {
		context.beginPath();
		const glyphInfo = this.glyphInfo;
		if (glyphInfo.length >= 1) {
			const p0 = glyphInfo[0].p0;
			context.moveTo(p0.x, p0.y);
		}
		for (let i = 0; i < glyphInfo.length; i++) {
			const p1 = glyphInfo[i].p1;
			context.lineTo(p1.x, p1.y);
		}
		context.setAttr("lineWidth", this.fontSize());
		context.setAttr("strokeStyle", this.colorKey);
		context.stroke();
	}
	getTextWidth() {
		return this.textWidth;
	}
	getTextHeight() {
		Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
		return this.textHeight;
	}
	setText(text) {
		return Text.prototype.setText.call(this, text);
	}
	_getContextFont() {
		return Text.prototype._getContextFont.call(this);
	}
	_getTextSize(text) {
		const _context = this.dummyCanvas.getContext("2d");
		_context.save();
		_context.font = this._getContextFont();
		const metrics = _context.measureText(text);
		_context.restore();
		return {
			width: metrics.width,
			height: parseInt(`${this.fontSize()}`, 10)
		};
	}
	_setTextData() {
		const charArr = stringToArray(this.text());
		if (this.direction() === "rtl") charArr.reverse();
		const chars = [];
		let width = 0;
		for (let i = 0; i < charArr.length; i++) {
			chars.push({
				char: charArr[i],
				width: this._getTextSize(charArr[i]).width
			});
			width += chars[i].width;
		}
		const { width: fullTextWidth, height } = this._getTextSize(this.attrs.text);
		this.textWidth = width;
		this.textHeight = height;
		this.glyphInfo = [];
		if (!this.attrs.data) return null;
		const letterSpacing = this.letterSpacing();
		const align = this.align();
		const kerningFunc = this.kerningFunc();
		const kerningAdjustment = Math.max(0, width - fullTextWidth);
		const textWidth = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * letterSpacing, 0);
		let offset = 0;
		if (align === "center") offset = Math.max(0, this.pathLength / 2 - textWidth / 2);
		if (align === "right") offset = Math.max(0, this.pathLength - textWidth);
		let offsetToGlyph = offset;
		for (let i = 0; i < chars.length; i++) {
			const charStartPoint = this._getPointAtLength(offsetToGlyph);
			if (!charStartPoint) return;
			const char = chars[i].char;
			let glyphWidth = chars[i].width + letterSpacing;
			if (char === " " && align === "justify") {
				const numberOfSpaces = this.text().split(" ").length - 1;
				glyphWidth += (this.pathLength - textWidth) / numberOfSpaces;
			}
			const charEndLength = offsetToGlyph + glyphWidth;
			const charEndPoint = this._getPointAtLength(charEndLength > this.pathLength && charEndLength - this.pathLength <= kerningAdjustment ? this.pathLength : charEndLength);
			if (!charEndPoint) return;
			const width = Path.getLineLength(charStartPoint.x, charStartPoint.y, charEndPoint.x, charEndPoint.y);
			let kern = 0;
			if (kerningFunc) try {
				kern = kerningFunc(chars[i - 1].char, char) * this.fontSize();
			} catch (e) {
				kern = 0;
			}
			charStartPoint.x += kern;
			charEndPoint.x += kern;
			this.textWidth += kern;
			const midpoint = Path.getPointOnLine(kern + width / 2, charStartPoint.x, charStartPoint.y, charEndPoint.x, charEndPoint.y);
			const rotation = Math.atan2(charEndPoint.y - charStartPoint.y, charEndPoint.x - charStartPoint.x);
			this.glyphInfo.push({
				transposeX: midpoint.x,
				transposeY: midpoint.y,
				text: charArr[i],
				rotation,
				p0: charStartPoint,
				p1: charEndPoint,
				width
			});
			offsetToGlyph += glyphWidth;
		}
	}
	getSelfRect() {
		if (!this.glyphInfo.length) return {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
		const points = [];
		this.glyphInfo.forEach(function(info) {
			points.push(info.p0.x);
			points.push(info.p0.y);
			points.push(info.p1.x);
			points.push(info.p1.y);
		});
		let minX = points[0] || 0;
		let maxX = points[0] || 0;
		let minY = points[1] || 0;
		let maxY = points[1] || 0;
		let x, y;
		for (let i = 0; i < points.length / 2; i++) {
			x = points[i * 2];
			y = points[i * 2 + 1];
			minX = Math.min(minX, x);
			maxX = Math.max(maxX, x);
			minY = Math.min(minY, y);
			maxY = Math.max(maxY, y);
		}
		const fontSize = this.fontSize();
		return {
			x: minX - fontSize / 2,
			y: minY - fontSize / 2,
			width: maxX - minX + fontSize,
			height: maxY - minY + fontSize
		};
	}
	destroy() {
		Util.releaseCanvas(this.dummyCanvas);
		return super.destroy();
	}
};
TextPath.prototype._fillFunc = _fillFunc;
TextPath.prototype._strokeFunc = _strokeFunc;
TextPath.prototype._fillFuncHit = _fillFunc;
TextPath.prototype._strokeFuncHit = _strokeFunc;
TextPath.prototype.className = "TextPath";
TextPath.prototype._attrsAffectingSize = [
	"text",
	"fontSize",
	"data"
];
_registerNode(TextPath);
Factory.addGetterSetter(TextPath, "data");
Factory.addGetterSetter(TextPath, "fontFamily", "Arial");
Factory.addGetterSetter(TextPath, "fontSize", 12, getNumberValidator());
Factory.addGetterSetter(TextPath, "fontStyle", NORMAL);
Factory.addGetterSetter(TextPath, "align", "left");
Factory.addGetterSetter(TextPath, "letterSpacing", 0, getNumberValidator());
Factory.addGetterSetter(TextPath, "textBaseline", "middle");
Factory.addGetterSetter(TextPath, "fontVariant", NORMAL);
Factory.addGetterSetter(TextPath, "text", EMPTY_STRING);
Factory.addGetterSetter(TextPath, "textDecoration", "");
Factory.addGetterSetter(TextPath, "kerningFunc", void 0);
Factory.addGetterSetter(TextPath, "direction", "inherit");
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Transformer.js
var EVENTS_NAME = "tr-konva";
var ATTR_CHANGE_LIST = [
	"resizeEnabledChange",
	"rotateAnchorOffsetChange",
	"rotateAnchorAngleChange",
	"rotateEnabledChange",
	"enabledAnchorsChange",
	"anchorSizeChange",
	"borderEnabledChange",
	"borderStrokeChange",
	"borderStrokeWidthChange",
	"borderDashChange",
	"anchorStrokeChange",
	"anchorStrokeWidthChange",
	"anchorFillChange",
	"anchorCornerRadiusChange",
	"ignoreStrokeChange",
	"anchorStyleFuncChange"
].map((e) => e + `.${EVENTS_NAME}`).join(" ");
var NODES_RECT = "nodesRect";
var TRANSFORM_CHANGE_STR = [
	"widthChange",
	"heightChange",
	"scaleXChange",
	"scaleYChange",
	"skewXChange",
	"skewYChange",
	"rotationChange",
	"offsetXChange",
	"offsetYChange",
	"transformsEnabledChange",
	"strokeWidthChange",
	"draggableChange"
];
var ANGLES = {
	"top-left": -45,
	"top-center": 0,
	"top-right": 45,
	"middle-right": -90,
	"middle-left": 90,
	"bottom-left": -135,
	"bottom-center": 180,
	"bottom-right": 135
};
var TOUCH_DEVICE = "ontouchstart" in Konva$2._global;
function getCursor(anchorName, rad, rotateCursor) {
	if (anchorName === "rotater") return rotateCursor;
	rad += Util.degToRad(ANGLES[anchorName] || 0);
	const angle = (Util.radToDeg(rad) % 360 + 360) % 360;
	if (Util._inRange(angle, 337.5, 360) || Util._inRange(angle, 0, 22.5)) return "ns-resize";
	else if (Util._inRange(angle, 22.5, 67.5)) return "nesw-resize";
	else if (Util._inRange(angle, 67.5, 112.5)) return "ew-resize";
	else if (Util._inRange(angle, 112.5, 157.5)) return "nwse-resize";
	else if (Util._inRange(angle, 157.5, 202.5)) return "ns-resize";
	else if (Util._inRange(angle, 202.5, 247.5)) return "nesw-resize";
	else if (Util._inRange(angle, 247.5, 292.5)) return "ew-resize";
	else if (Util._inRange(angle, 292.5, 337.5)) return "nwse-resize";
	else {
		Util.error("Transformer has unknown angle for cursor detection: " + angle);
		return "pointer";
	}
}
var ANCHORS_NAMES = [
	"top-left",
	"top-center",
	"top-right",
	"middle-right",
	"middle-left",
	"bottom-left",
	"bottom-center",
	"bottom-right"
];
function getCenter(shape) {
	return {
		x: shape.x + shape.width / 2 * Math.cos(shape.rotation) + shape.height / 2 * Math.sin(-shape.rotation),
		y: shape.y + shape.height / 2 * Math.cos(shape.rotation) + shape.width / 2 * Math.sin(shape.rotation)
	};
}
function rotateAroundPoint(shape, angleRad, point) {
	const x = point.x + (shape.x - point.x) * Math.cos(angleRad) - (shape.y - point.y) * Math.sin(angleRad);
	const y = point.y + (shape.x - point.x) * Math.sin(angleRad) + (shape.y - point.y) * Math.cos(angleRad);
	return {
		...shape,
		rotation: shape.rotation + angleRad,
		x,
		y
	};
}
function rotateAroundCenter(shape, deltaRad) {
	return rotateAroundPoint(shape, deltaRad, getCenter(shape));
}
function getSnap(snaps, newRotationRad, tol) {
	let snapped = newRotationRad;
	for (let i = 0; i < snaps.length; i++) {
		const angle = Konva$2.getAngle(snaps[i]);
		const absDiff = Math.abs(angle - newRotationRad) % (Math.PI * 2);
		if (Math.min(absDiff, Math.PI * 2 - absDiff) < tol) snapped = angle;
	}
	return snapped;
}
var activeTransformersCount = 0;
var Transformer = class extends Group {
	constructor(config) {
		super(config);
		this._movingAnchorName = null;
		this._transforming = false;
		this._elementsCreated = false;
		this._updateScheduled = false;
		this._createElements();
		this._handleMouseMove = this._handleMouseMove.bind(this);
		this._handleMouseUp = this._handleMouseUp.bind(this);
		this.update = this.update.bind(this);
		this.on(ATTR_CHANGE_LIST, this.update);
		if (this.getNode()) this.update();
	}
	attachTo(node) {
		this.setNode(node);
		return this;
	}
	setNode(node) {
		Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.");
		return this.setNodes([node]);
	}
	getNode() {
		return this._nodes && this._nodes[0];
	}
	_getEventNamespace() {
		return EVENTS_NAME + this._id;
	}
	setNodes(nodes = []) {
		if (this._nodes && this._nodes.length) this.detach();
		const filteredNodes = nodes.filter((node) => {
			if (node.isAncestorOf(this)) {
				Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach");
				return false;
			}
			return true;
		});
		this._nodes = nodes = filteredNodes;
		if (nodes.length === 1 && this.useSingleNodeRotation()) this.rotation(nodes[0].getAbsoluteRotation());
		else this.rotation(0);
		this._nodes.forEach((node) => {
			const onChange = () => {
				if (this._transforming) return;
				if (this.nodes().length === 1 && this.useSingleNodeRotation()) this.rotation(this.nodes()[0].getAbsoluteRotation());
				this._resetTransformCache();
				if (!this.isDragging()) this._scheduleUpdate();
			};
			if (node._attrsAffectingSize.length) {
				const additionalEvents = node._attrsAffectingSize.map((prop) => prop + "Change." + this._getEventNamespace()).join(" ");
				node.on(additionalEvents, onChange);
			}
			node.on(TRANSFORM_CHANGE_STR.map((e) => e + `.${this._getEventNamespace()}`).join(" "), onChange);
			node.on(`absoluteTransformChange.${this._getEventNamespace()}`, onChange);
			this._proxyDrag(node);
		});
		this._resetTransformCache();
		if (!!this.findOne(".top-left")) this.update();
		return this;
	}
	_proxyDrag(node) {
		let lastPos;
		node.on(`dragstart.${this._getEventNamespace()}`, (e) => {
			lastPos = node.getAbsolutePosition();
			if (!this.isDragging() && node !== this.findOne(".back")) this.startDrag(e, false);
		});
		node.on(`dragmove.${this._getEventNamespace()}`, (e) => {
			if (!lastPos) return;
			const abs = node.getAbsolutePosition();
			const dx = abs.x - lastPos.x;
			const dy = abs.y - lastPos.y;
			this.nodes().forEach((otherNode) => {
				if (otherNode === node) return;
				if (otherNode.isDragging()) return;
				const otherAbs = otherNode.getAbsolutePosition();
				otherNode.setAbsolutePosition({
					x: otherAbs.x + dx,
					y: otherAbs.y + dy
				});
				otherNode.startDrag(e);
			});
			lastPos = null;
		});
	}
	getNodes() {
		return this._nodes || [];
	}
	getActiveAnchor() {
		return this._movingAnchorName;
	}
	detach() {
		if (this._nodes) this._nodes.forEach((node) => {
			node.off("." + this._getEventNamespace());
		});
		this._nodes = [];
		this._resetTransformCache();
	}
	_resetTransformCache() {
		this._clearCache(NODES_RECT);
		this._clearCache("transform");
		this._clearSelfAndDescendantCache("absoluteTransform");
	}
	_getNodeRect() {
		return this._getCache(NODES_RECT, this.__getNodeRect);
	}
	__getNodeShape(node, rot = this.rotation(), relative) {
		const rect = node.getClientRect({
			skipTransform: true,
			skipShadow: true,
			skipStroke: this.ignoreStroke()
		});
		const absScale = node.getAbsoluteScale(relative);
		const absPos = node.getAbsolutePosition(relative);
		const dx = rect.x * absScale.x - node.offsetX() * absScale.x;
		const dy = rect.y * absScale.y - node.offsetY() * absScale.y;
		const rotation = (Konva$2.getAngle(node.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2);
		return rotateAroundPoint({
			x: absPos.x + dx * Math.cos(rotation) + dy * Math.sin(-rotation),
			y: absPos.y + dy * Math.cos(rotation) + dx * Math.sin(rotation),
			width: rect.width * absScale.x,
			height: rect.height * absScale.y,
			rotation
		}, -Konva$2.getAngle(rot), {
			x: 0,
			y: 0
		});
	}
	__getNodeRect() {
		if (!this.getNode()) return {
			x: -1e8,
			y: -1e8,
			width: 0,
			height: 0,
			rotation: 0
		};
		const totalPoints = [];
		this.nodes().map((node) => {
			const box = node.getClientRect({
				skipTransform: true,
				skipShadow: true,
				skipStroke: this.ignoreStroke()
			});
			const points = [
				{
					x: box.x,
					y: box.y
				},
				{
					x: box.x + box.width,
					y: box.y
				},
				{
					x: box.x + box.width,
					y: box.y + box.height
				},
				{
					x: box.x,
					y: box.y + box.height
				}
			];
			const trans = node.getAbsoluteTransform();
			points.forEach(function(point) {
				const transformed = trans.point(point);
				totalPoints.push(transformed);
			});
		});
		const tr = new Transform();
		tr.rotate(-Konva$2.getAngle(this.rotation()));
		let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
		totalPoints.forEach(function(point) {
			const transformed = tr.point(point);
			if (minX === void 0) {
				minX = maxX = transformed.x;
				minY = maxY = transformed.y;
			}
			minX = Math.min(minX, transformed.x);
			minY = Math.min(minY, transformed.y);
			maxX = Math.max(maxX, transformed.x);
			maxY = Math.max(maxY, transformed.y);
		});
		tr.invert();
		const p = tr.point({
			x: minX,
			y: minY
		});
		return {
			x: p.x,
			y: p.y,
			width: maxX - minX,
			height: maxY - minY,
			rotation: Konva$2.getAngle(this.rotation())
		};
	}
	getX() {
		return this._getNodeRect().x;
	}
	getY() {
		return this._getNodeRect().y;
	}
	getWidth() {
		return this._getNodeRect().width;
	}
	getHeight() {
		return this._getNodeRect().height;
	}
	_createElements() {
		this._createBack();
		ANCHORS_NAMES.forEach((name) => {
			this._createAnchor(name);
		});
		this._createAnchor("rotater");
		this._elementsCreated = true;
	}
	_createAnchor(name) {
		const anchor = new Rect({
			stroke: "rgb(0, 161, 255)",
			fill: "white",
			strokeWidth: 1,
			name: name + " _anchor",
			dragDistance: 0,
			draggable: true,
			hitStrokeWidth: TOUCH_DEVICE ? 10 : "auto"
		});
		const self = this;
		anchor.on("mousedown touchstart", function(e) {
			self._handleMouseDown(e);
		});
		anchor.on("dragstart", (e) => {
			anchor.stopDrag();
			e.cancelBubble = true;
		});
		anchor.on("dragend", (e) => {
			e.cancelBubble = true;
		});
		anchor.on("mouseenter", () => {
			const cursor = getCursor(name, Konva$2.getAngle(this.rotation()), this.rotateAnchorCursor());
			anchor.getStage().content && (anchor.getStage().content.style.cursor = cursor);
			this._cursorChange = true;
		});
		anchor.on("mouseout", () => {
			anchor.getStage().content && (anchor.getStage().content.style.cursor = "");
			this._cursorChange = false;
		});
		this.add(anchor);
	}
	_createBack() {
		const back = new Shape({
			name: "back",
			width: 0,
			height: 0,
			sceneFunc(ctx, shape) {
				const tr = shape.getParent();
				const padding = tr.padding();
				const width = shape.width();
				const height = shape.height();
				ctx.beginPath();
				ctx.rect(-padding, -padding, width + padding * 2, height + padding * 2);
				if (tr.rotateEnabled() && tr.rotateLineVisible()) {
					const rotateAnchorAngle = tr.rotateAnchorAngle();
					const rotateAnchorOffset = tr.rotateAnchorOffset();
					const rad = Util.degToRad(rotateAnchorAngle);
					const dirX = Math.sin(rad);
					const dirY = -Math.cos(rad);
					const cx = width / 2;
					const cy = height / 2;
					let t = Infinity;
					if (dirY < 0) t = Math.min(t, -cy / dirY);
					else if (dirY > 0) t = Math.min(t, (height - cy) / dirY);
					if (dirX < 0) t = Math.min(t, -cx / dirX);
					else if (dirX > 0) t = Math.min(t, (width - cx) / dirX);
					const edgeX = cx + dirX * t;
					const edgeY = cy + dirY * t;
					const sign = Util._sign(height);
					const endX = edgeX + dirX * rotateAnchorOffset * sign;
					const endY = edgeY + dirY * rotateAnchorOffset * sign;
					ctx.moveTo(edgeX, edgeY);
					ctx.lineTo(endX, endY);
				}
				ctx.fillStrokeShape(shape);
			},
			hitFunc: (ctx, shape) => {
				if (!this.shouldOverdrawWholeArea()) return;
				const padding = this.padding();
				ctx.beginPath();
				ctx.rect(-padding, -padding, shape.width() + padding * 2, shape.height() + padding * 2);
				ctx.fillStrokeShape(shape);
			}
		});
		this.add(back);
		this._proxyDrag(back);
		back.on("dragstart", (e) => {
			e.cancelBubble = true;
		});
		back.on("dragmove", (e) => {
			e.cancelBubble = true;
		});
		back.on("dragend", (e) => {
			e.cancelBubble = true;
		});
		this.on("dragmove", (e) => {
			this.update();
		});
	}
	_handleMouseDown(e) {
		if (this._transforming) return;
		this._movingAnchorName = e.target.name().split(" ")[0];
		const attrs = this._getNodeRect();
		const width = attrs.width;
		const height = attrs.height;
		const hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
		this.sin = Math.abs(height / hypotenuse);
		this.cos = Math.abs(width / hypotenuse);
		if (typeof window !== "undefined") {
			window.addEventListener("mousemove", this._handleMouseMove);
			window.addEventListener("touchmove", this._handleMouseMove);
			window.addEventListener("mouseup", this._handleMouseUp, true);
			window.addEventListener("touchend", this._handleMouseUp, true);
		}
		this._transforming = true;
		const ap = e.target.getAbsolutePosition();
		const pos = e.target.getStage().getPointerPosition();
		this._anchorDragOffset = {
			x: pos.x - ap.x,
			y: pos.y - ap.y
		};
		activeTransformersCount++;
		this._fire("transformstart", {
			evt: e.evt,
			target: this.getNode()
		});
		this._nodes.forEach((target) => {
			target._fire("transformstart", {
				evt: e.evt,
				target
			});
		});
	}
	_handleMouseMove(e) {
		let x, y, newHypotenuse;
		const anchorNode = this.findOne("." + this._movingAnchorName);
		const stage = anchorNode.getStage();
		stage.setPointersPositions(e);
		const pp = stage.getPointerPosition();
		let newNodePos = {
			x: pp.x - this._anchorDragOffset.x,
			y: pp.y - this._anchorDragOffset.y
		};
		const oldAbs = anchorNode.getAbsolutePosition();
		if (this.anchorDragBoundFunc()) newNodePos = this.anchorDragBoundFunc()(oldAbs, newNodePos, e);
		anchorNode.setAbsolutePosition(newNodePos);
		const newAbs = anchorNode.getAbsolutePosition();
		if (oldAbs.x === newAbs.x && oldAbs.y === newAbs.y) return;
		if (this._movingAnchorName === "rotater") {
			const attrs = this._getNodeRect();
			x = anchorNode.x() - attrs.width / 2;
			y = -anchorNode.y() + attrs.height / 2;
			const rotateAnchorAngleRad = Konva$2.getAngle(this.rotateAnchorAngle());
			let delta = Math.atan2(-y, x) + Math.PI / 2 - rotateAnchorAngleRad;
			if (attrs.height < 0) delta -= Math.PI;
			const newRotation = Konva$2.getAngle(this.rotation()) + delta;
			const tol = Konva$2.getAngle(this.rotationSnapTolerance());
			const shape = rotateAroundCenter(attrs, getSnap(this.rotationSnaps(), newRotation, tol) - attrs.rotation);
			this._fitNodesInto(shape, e);
			return;
		}
		const shiftBehavior = this.shiftBehavior();
		let keepProportion;
		if (shiftBehavior === "inverted") keepProportion = this.keepRatio() && !e.shiftKey;
		else if (shiftBehavior === "none") keepProportion = this.keepRatio();
		else keepProportion = this.keepRatio() || e.shiftKey;
		let centeredScaling = this.centeredScaling() || e.altKey;
		if (this._movingAnchorName === "top-left") {
			if (keepProportion) {
				const comparePoint = centeredScaling ? {
					x: this.width() / 2,
					y: this.height() / 2
				} : {
					x: this.findOne(".bottom-right").x(),
					y: this.findOne(".bottom-right").y()
				};
				newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
				const reverseX = this.findOne(".top-left").x() > comparePoint.x ? -1 : 1;
				const reverseY = this.findOne(".top-left").y() > comparePoint.y ? -1 : 1;
				x = newHypotenuse * this.cos * reverseX;
				y = newHypotenuse * this.sin * reverseY;
				this.findOne(".top-left").x(comparePoint.x - x);
				this.findOne(".top-left").y(comparePoint.y - y);
			}
		} else if (this._movingAnchorName === "top-center") this.findOne(".top-left").y(anchorNode.y());
		else if (this._movingAnchorName === "top-right") {
			if (keepProportion) {
				const comparePoint = centeredScaling ? {
					x: this.width() / 2,
					y: this.height() / 2
				} : {
					x: this.findOne(".bottom-left").x(),
					y: this.findOne(".bottom-left").y()
				};
				newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
				const reverseX = this.findOne(".top-right").x() < comparePoint.x ? -1 : 1;
				const reverseY = this.findOne(".top-right").y() > comparePoint.y ? -1 : 1;
				x = newHypotenuse * this.cos * reverseX;
				y = newHypotenuse * this.sin * reverseY;
				this.findOne(".top-right").x(comparePoint.x + x);
				this.findOne(".top-right").y(comparePoint.y - y);
			}
			var pos = anchorNode.position();
			this.findOne(".top-left").y(pos.y);
			this.findOne(".bottom-right").x(pos.x);
		} else if (this._movingAnchorName === "middle-left") this.findOne(".top-left").x(anchorNode.x());
		else if (this._movingAnchorName === "middle-right") this.findOne(".bottom-right").x(anchorNode.x());
		else if (this._movingAnchorName === "bottom-left") {
			if (keepProportion) {
				const comparePoint = centeredScaling ? {
					x: this.width() / 2,
					y: this.height() / 2
				} : {
					x: this.findOne(".top-right").x(),
					y: this.findOne(".top-right").y()
				};
				newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
				const reverseX = comparePoint.x < anchorNode.x() ? -1 : 1;
				const reverseY = anchorNode.y() < comparePoint.y ? -1 : 1;
				x = newHypotenuse * this.cos * reverseX;
				y = newHypotenuse * this.sin * reverseY;
				anchorNode.x(comparePoint.x - x);
				anchorNode.y(comparePoint.y + y);
			}
			pos = anchorNode.position();
			this.findOne(".top-left").x(pos.x);
			this.findOne(".bottom-right").y(pos.y);
		} else if (this._movingAnchorName === "bottom-center") this.findOne(".bottom-right").y(anchorNode.y());
		else if (this._movingAnchorName === "bottom-right") {
			if (keepProportion) {
				const comparePoint = centeredScaling ? {
					x: this.width() / 2,
					y: this.height() / 2
				} : {
					x: this.findOne(".top-left").x(),
					y: this.findOne(".top-left").y()
				};
				newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
				const reverseX = this.findOne(".bottom-right").x() < comparePoint.x ? -1 : 1;
				const reverseY = this.findOne(".bottom-right").y() < comparePoint.y ? -1 : 1;
				x = newHypotenuse * this.cos * reverseX;
				y = newHypotenuse * this.sin * reverseY;
				this.findOne(".bottom-right").x(comparePoint.x + x);
				this.findOne(".bottom-right").y(comparePoint.y + y);
			}
		} else console.error(/* @__PURE__ */ new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
		centeredScaling = this.centeredScaling() || e.altKey;
		if (centeredScaling) {
			const topLeft = this.findOne(".top-left");
			const bottomRight = this.findOne(".bottom-right");
			const topOffsetX = topLeft.x();
			const topOffsetY = topLeft.y();
			const bottomOffsetX = this.getWidth() - bottomRight.x();
			const bottomOffsetY = this.getHeight() - bottomRight.y();
			bottomRight.move({
				x: -topOffsetX,
				y: -topOffsetY
			});
			topLeft.move({
				x: bottomOffsetX,
				y: bottomOffsetY
			});
		}
		const absPos = this.findOne(".top-left").getAbsolutePosition();
		x = absPos.x;
		y = absPos.y;
		const width = this.findOne(".bottom-right").x() - this.findOne(".top-left").x();
		const height = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
		this._fitNodesInto({
			x,
			y,
			width,
			height,
			rotation: Konva$2.getAngle(this.rotation())
		}, e);
	}
	_handleMouseUp(e) {
		this._removeEvents(e);
	}
	getAbsoluteTransform() {
		return this.getTransform();
	}
	_removeEvents(e) {
		var _a;
		if (this._transforming) {
			this._transforming = false;
			if (typeof window !== "undefined") {
				window.removeEventListener("mousemove", this._handleMouseMove);
				window.removeEventListener("touchmove", this._handleMouseMove);
				window.removeEventListener("mouseup", this._handleMouseUp, true);
				window.removeEventListener("touchend", this._handleMouseUp, true);
			}
			const node = this.getNode();
			activeTransformersCount--;
			this._fire("transformend", {
				evt: e,
				target: node
			});
			(_a = this.getLayer()) === null || _a === void 0 || _a.batchDraw();
			if (node) this._nodes.forEach((target) => {
				var _a;
				target._fire("transformend", {
					evt: e,
					target
				});
				(_a = target.getLayer()) === null || _a === void 0 || _a.batchDraw();
			});
			this._movingAnchorName = null;
		}
	}
	_fitNodesInto(newAttrs, evt) {
		const prevAutoDraw = Konva$2.autoDrawEnabled;
		Konva$2.autoDrawEnabled = false;
		try {
			return this._doFitNodesInto(newAttrs, evt);
		} finally {
			Konva$2.autoDrawEnabled = prevAutoDraw;
		}
	}
	_doFitNodesInto(newAttrs, evt) {
		const oldAttrs = this._getNodeRect();
		const minSize = 1;
		if (Util._inRange(newAttrs.width, -this.padding() * 2 - minSize, minSize)) {
			this.update();
			return;
		}
		if (Util._inRange(newAttrs.height, -this.padding() * 2 - minSize, minSize)) {
			this.update();
			return;
		}
		const t = new Transform();
		t.rotate(Konva$2.getAngle(this.rotation()));
		if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
			const offset = t.point({
				x: -this.padding() * 2,
				y: 0
			});
			newAttrs.x += offset.x;
			newAttrs.y += offset.y;
			newAttrs.width += this.padding() * 2;
			this._movingAnchorName = this._movingAnchorName.replace("left", "right");
			this._anchorDragOffset.x -= offset.x;
			this._anchorDragOffset.y -= offset.y;
		} else if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
			const offset = t.point({
				x: this.padding() * 2,
				y: 0
			});
			this._movingAnchorName = this._movingAnchorName.replace("right", "left");
			this._anchorDragOffset.x -= offset.x;
			this._anchorDragOffset.y -= offset.y;
			newAttrs.width += this.padding() * 2;
		}
		if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
			const offset = t.point({
				x: 0,
				y: -this.padding() * 2
			});
			newAttrs.x += offset.x;
			newAttrs.y += offset.y;
			this._movingAnchorName = this._movingAnchorName.replace("top", "bottom");
			this._anchorDragOffset.x -= offset.x;
			this._anchorDragOffset.y -= offset.y;
			newAttrs.height += this.padding() * 2;
		} else if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
			const offset = t.point({
				x: 0,
				y: this.padding() * 2
			});
			this._movingAnchorName = this._movingAnchorName.replace("bottom", "top");
			this._anchorDragOffset.x -= offset.x;
			this._anchorDragOffset.y -= offset.y;
			newAttrs.height += this.padding() * 2;
		}
		if (this.boundBoxFunc()) {
			const bounded = this.boundBoxFunc()(oldAttrs, newAttrs);
			if (bounded) newAttrs = bounded;
			else Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
		}
		const baseSize = 1e7;
		const oldTr = new Transform();
		oldTr.translate(oldAttrs.x, oldAttrs.y);
		oldTr.rotate(oldAttrs.rotation);
		oldTr.scale(oldAttrs.width / baseSize, oldAttrs.height / baseSize);
		const newTr = new Transform();
		const newScaleX = newAttrs.width / baseSize;
		const newScaleY = newAttrs.height / baseSize;
		if (this.flipEnabled() === false) {
			newTr.translate(newAttrs.x, newAttrs.y);
			newTr.rotate(newAttrs.rotation);
			newTr.translate(newAttrs.width < 0 ? newAttrs.width : 0, newAttrs.height < 0 ? newAttrs.height : 0);
			newTr.scale(Math.abs(newScaleX), Math.abs(newScaleY));
		} else {
			newTr.translate(newAttrs.x, newAttrs.y);
			newTr.rotate(newAttrs.rotation);
			newTr.scale(newScaleX, newScaleY);
		}
		const delta = newTr.multiply(oldTr.invert());
		const layersToDraw = /* @__PURE__ */ new Set();
		this._nodes.forEach((node) => {
			if (!node.getStage()) return;
			const parentTransform = node.getParent().getAbsoluteTransform();
			const localTransform = node.getTransform().copy();
			localTransform.translate(node.offsetX(), node.offsetY());
			const newLocalTransform = new Transform();
			newLocalTransform.multiply(parentTransform.copy().invert()).multiply(delta).multiply(parentTransform).multiply(localTransform);
			const attrs = newLocalTransform.decompose();
			node.setAttrs(attrs);
			const layer = node.getLayer();
			if (layer) layersToDraw.add(layer);
		});
		this.rotation(Util._getRotation(newAttrs.rotation));
		this._nodes.forEach((node) => {
			this._fire("transform", {
				evt,
				target: node
			});
			node._fire("transform", {
				evt,
				target: node
			});
		});
		this._resetTransformCache();
		this.update();
		layersToDraw.add(this.getLayer());
		layersToDraw.forEach((layer) => layer && layer.batchDraw());
	}
	_scheduleUpdate() {
		if (this._updateScheduled) return;
		this._updateScheduled = true;
		Node._runAfterAbsTransformCascade(() => {
			var _a;
			this._updateScheduled = false;
			if (!((_a = this._nodes) === null || _a === void 0 ? void 0 : _a.length) || this._transforming || this.isDragging()) return;
			this.update();
		});
	}
	forceUpdate() {
		this._resetTransformCache();
		this.update();
	}
	_batchChangeChild(selector, attrs) {
		this.findOne(selector).setAttrs(attrs);
	}
	update() {
		var _a;
		const attrs = this._getNodeRect();
		this.rotation(Util._getRotation(attrs.rotation));
		const width = attrs.width;
		const height = attrs.height;
		const enabledAnchors = this.enabledAnchors();
		const resizeEnabled = this.resizeEnabled();
		const padding = this.padding();
		const anchorSize = this.anchorSize();
		const anchors = this.find("._anchor");
		anchors.forEach((node) => {
			node.setAttrs({
				width: anchorSize,
				height: anchorSize,
				offsetX: anchorSize / 2,
				offsetY: anchorSize / 2,
				stroke: this.anchorStroke(),
				strokeWidth: this.anchorStrokeWidth(),
				fill: this.anchorFill(),
				cornerRadius: this.anchorCornerRadius()
			});
		});
		this._batchChangeChild(".top-left", {
			x: 0,
			y: 0,
			offsetX: anchorSize / 2 + padding,
			offsetY: anchorSize / 2 + padding,
			visible: resizeEnabled && enabledAnchors.indexOf("top-left") >= 0
		});
		this._batchChangeChild(".top-center", {
			x: width / 2,
			y: 0,
			offsetY: anchorSize / 2 + padding,
			visible: resizeEnabled && enabledAnchors.indexOf("top-center") >= 0
		});
		this._batchChangeChild(".top-right", {
			x: width,
			y: 0,
			offsetX: anchorSize / 2 - padding,
			offsetY: anchorSize / 2 + padding,
			visible: resizeEnabled && enabledAnchors.indexOf("top-right") >= 0
		});
		this._batchChangeChild(".middle-left", {
			x: 0,
			y: height / 2,
			offsetX: anchorSize / 2 + padding,
			visible: resizeEnabled && enabledAnchors.indexOf("middle-left") >= 0
		});
		this._batchChangeChild(".middle-right", {
			x: width,
			y: height / 2,
			offsetX: anchorSize / 2 - padding,
			visible: resizeEnabled && enabledAnchors.indexOf("middle-right") >= 0
		});
		this._batchChangeChild(".bottom-left", {
			x: 0,
			y: height,
			offsetX: anchorSize / 2 + padding,
			offsetY: anchorSize / 2 - padding,
			visible: resizeEnabled && enabledAnchors.indexOf("bottom-left") >= 0
		});
		this._batchChangeChild(".bottom-center", {
			x: width / 2,
			y: height,
			offsetY: anchorSize / 2 - padding,
			visible: resizeEnabled && enabledAnchors.indexOf("bottom-center") >= 0
		});
		this._batchChangeChild(".bottom-right", {
			x: width,
			y: height,
			offsetX: anchorSize / 2 - padding,
			offsetY: anchorSize / 2 - padding,
			visible: resizeEnabled && enabledAnchors.indexOf("bottom-right") >= 0
		});
		const rotateAnchorAngle = this.rotateAnchorAngle();
		const rotateAnchorOffset = this.rotateAnchorOffset();
		const rad = Util.degToRad(rotateAnchorAngle);
		const dirX = Math.sin(rad);
		const dirY = -Math.cos(rad);
		const cx = width / 2;
		const cy = height / 2;
		let t = Infinity;
		if (dirY < 0) t = Math.min(t, -cy / dirY);
		else if (dirY > 0) t = Math.min(t, (height - cy) / dirY);
		if (dirX < 0) t = Math.min(t, -cx / dirX);
		else if (dirX > 0) t = Math.min(t, (width - cx) / dirX);
		const edgeX = cx + dirX * t;
		const edgeY = cy + dirY * t;
		const sign = Util._sign(height);
		this._batchChangeChild(".rotater", {
			x: edgeX + dirX * rotateAnchorOffset * sign,
			y: edgeY + dirY * rotateAnchorOffset * sign - padding * dirY,
			visible: this.rotateEnabled()
		});
		this._batchChangeChild(".back", {
			width,
			height,
			visible: this.borderEnabled(),
			stroke: this.borderStroke(),
			strokeWidth: this.borderStrokeWidth(),
			dash: this.borderDash(),
			draggable: this.nodes().some((node) => node.draggable()),
			x: 0,
			y: 0
		});
		const styleFunc = this.anchorStyleFunc();
		if (styleFunc) anchors.forEach((node) => {
			styleFunc(node);
		});
		(_a = this.getLayer()) === null || _a === void 0 || _a.batchDraw();
	}
	isTransforming() {
		return this._transforming;
	}
	stopTransform() {
		if (this._transforming) {
			this._removeEvents();
			const anchorNode = this.findOne("." + this._movingAnchorName);
			if (anchorNode) anchorNode.stopDrag();
		}
	}
	destroy() {
		if (this.getStage() && this._cursorChange) this.getStage().content && (this.getStage().content.style.cursor = "");
		Group.prototype.destroy.call(this);
		this.detach();
		this._removeEvents();
		return this;
	}
	add(...children) {
		if (this._elementsCreated) {
			Util.error("You cannot add external nodes to the Transformer. Use tr.nodes([node]) instead.");
			return this;
		}
		return super.add(...children);
	}
	toObject() {
		return Node.prototype.toObject.call(this);
	}
	clone(obj) {
		return Node.prototype.clone.call(this, obj);
	}
	getClientRect() {
		if (this.nodes().length > 0) return super.getClientRect();
		else return {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
	}
};
Transformer.isTransforming = () => {
	return activeTransformersCount > 0;
};
function validateAnchors(val) {
	if (!(val instanceof Array)) Util.warn("enabledAnchors value should be an array");
	if (val instanceof Array) val.forEach(function(name) {
		if (ANCHORS_NAMES.indexOf(name) === -1) Util.warn("Unknown anchor name: " + name + ". Available names are: " + ANCHORS_NAMES.join(", "));
	});
	return val || [];
}
Transformer.prototype.className = "Transformer";
_registerNode(Transformer);
Factory.addGetterSetter(Transformer, "enabledAnchors", ANCHORS_NAMES, validateAnchors);
Factory.addGetterSetter(Transformer, "flipEnabled", true, getBooleanValidator());
Factory.addGetterSetter(Transformer, "resizeEnabled", true);
Factory.addGetterSetter(Transformer, "anchorSize", 10, getNumberValidator());
Factory.addGetterSetter(Transformer, "rotateEnabled", true);
Factory.addGetterSetter(Transformer, "rotateLineVisible", true);
Factory.addGetterSetter(Transformer, "rotationSnaps", []);
Factory.addGetterSetter(Transformer, "rotateAnchorOffset", 50, getNumberValidator());
Factory.addGetterSetter(Transformer, "rotateAnchorAngle", 0, getNumberValidator());
Factory.addGetterSetter(Transformer, "rotateAnchorCursor", "crosshair");
Factory.addGetterSetter(Transformer, "rotationSnapTolerance", 5, getNumberValidator());
Factory.addGetterSetter(Transformer, "borderEnabled", true);
Factory.addGetterSetter(Transformer, "anchorStroke", "rgb(0, 161, 255)");
Factory.addGetterSetter(Transformer, "anchorStrokeWidth", 1, getNumberValidator());
Factory.addGetterSetter(Transformer, "anchorFill", "white");
Factory.addGetterSetter(Transformer, "anchorCornerRadius", 0, getNumberValidator());
Factory.addGetterSetter(Transformer, "borderStroke", "rgb(0, 161, 255)");
Factory.addGetterSetter(Transformer, "borderStrokeWidth", 1, getNumberValidator());
Factory.addGetterSetter(Transformer, "borderDash");
Factory.addGetterSetter(Transformer, "keepRatio", true);
Factory.addGetterSetter(Transformer, "shiftBehavior", "default");
Factory.addGetterSetter(Transformer, "centeredScaling", false);
Factory.addGetterSetter(Transformer, "ignoreStroke", false);
Factory.addGetterSetter(Transformer, "padding", 0, getNumberValidator());
Factory.addGetterSetter(Transformer, "nodes");
Factory.addGetterSetter(Transformer, "node");
Factory.addGetterSetter(Transformer, "boundBoxFunc");
Factory.addGetterSetter(Transformer, "anchorDragBoundFunc");
Factory.addGetterSetter(Transformer, "anchorStyleFunc");
Factory.addGetterSetter(Transformer, "shouldOverdrawWholeArea", false);
Factory.addGetterSetter(Transformer, "useSingleNodeRotation", true);
Factory.backCompat(Transformer, {
	lineEnabled: "borderEnabled",
	rotateHandlerOffset: "rotateAnchorOffset",
	enabledHandlers: "enabledAnchors"
});
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/shapes/Wedge.js
var Wedge = class extends Shape {
	_sceneFunc(context) {
		context.beginPath();
		context.arc(0, 0, this.radius(), 0, Konva$2.getAngle(this.angle()), this.clockwise());
		context.lineTo(0, 0);
		context.closePath();
		context.fillStrokeShape(this);
	}
	getWidth() {
		return this.radius() * 2;
	}
	getHeight() {
		return this.radius() * 2;
	}
	setWidth(width) {
		this.radius(width / 2);
	}
	setHeight(height) {
		this.radius(height / 2);
	}
};
Wedge.prototype.className = "Wedge";
Wedge.prototype._centroid = true;
Wedge.prototype._attrsAffectingSize = ["radius"];
_registerNode(Wedge);
Factory.addGetterSetter(Wedge, "radius", 0, getNumberValidator());
Factory.addGetterSetter(Wedge, "angle", 0, getNumberValidator());
Factory.addGetterSetter(Wedge, "clockwise", false);
Factory.backCompat(Wedge, {
	angleDeg: "angle",
	getAngleDeg: "getAngle",
	setAngleDeg: "setAngle"
});
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Blur.js
function BlurStack() {
	this.r = 0;
	this.g = 0;
	this.b = 0;
	this.a = 0;
	this.next = null;
}
var mul_table = [
	512,
	512,
	456,
	512,
	328,
	456,
	335,
	512,
	405,
	328,
	271,
	456,
	388,
	335,
	292,
	512,
	454,
	405,
	364,
	328,
	298,
	271,
	496,
	456,
	420,
	388,
	360,
	335,
	312,
	292,
	273,
	512,
	482,
	454,
	428,
	405,
	383,
	364,
	345,
	328,
	312,
	298,
	284,
	271,
	259,
	496,
	475,
	456,
	437,
	420,
	404,
	388,
	374,
	360,
	347,
	335,
	323,
	312,
	302,
	292,
	282,
	273,
	265,
	512,
	497,
	482,
	468,
	454,
	441,
	428,
	417,
	405,
	394,
	383,
	373,
	364,
	354,
	345,
	337,
	328,
	320,
	312,
	305,
	298,
	291,
	284,
	278,
	271,
	265,
	259,
	507,
	496,
	485,
	475,
	465,
	456,
	446,
	437,
	428,
	420,
	412,
	404,
	396,
	388,
	381,
	374,
	367,
	360,
	354,
	347,
	341,
	335,
	329,
	323,
	318,
	312,
	307,
	302,
	297,
	292,
	287,
	282,
	278,
	273,
	269,
	265,
	261,
	512,
	505,
	497,
	489,
	482,
	475,
	468,
	461,
	454,
	447,
	441,
	435,
	428,
	422,
	417,
	411,
	405,
	399,
	394,
	389,
	383,
	378,
	373,
	368,
	364,
	359,
	354,
	350,
	345,
	341,
	337,
	332,
	328,
	324,
	320,
	316,
	312,
	309,
	305,
	301,
	298,
	294,
	291,
	287,
	284,
	281,
	278,
	274,
	271,
	268,
	265,
	262,
	259,
	257,
	507,
	501,
	496,
	491,
	485,
	480,
	475,
	470,
	465,
	460,
	456,
	451,
	446,
	442,
	437,
	433,
	428,
	424,
	420,
	416,
	412,
	408,
	404,
	400,
	396,
	392,
	388,
	385,
	381,
	377,
	374,
	370,
	367,
	363,
	360,
	357,
	354,
	350,
	347,
	344,
	341,
	338,
	335,
	332,
	329,
	326,
	323,
	320,
	318,
	315,
	312,
	310,
	307,
	304,
	302,
	299,
	297,
	294,
	292,
	289,
	287,
	285,
	282,
	280,
	278,
	275,
	273,
	271,
	269,
	267,
	265,
	263,
	261,
	259
];
var shg_table = [
	9,
	11,
	12,
	13,
	13,
	14,
	14,
	15,
	15,
	15,
	15,
	16,
	16,
	16,
	16,
	17,
	17,
	17,
	17,
	17,
	17,
	17,
	18,
	18,
	18,
	18,
	18,
	18,
	18,
	18,
	18,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24
];
function filterGaussBlurRGBA(imageData, radius) {
	const pixels = imageData.data, width = imageData.width, height = imageData.height;
	let p, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;
	const div = radius + radius + 1, widthMinus1 = width - 1, heightMinus1 = height - 1, radiusPlus1 = radius + 1, sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2, stackStart = new BlurStack(), mul_sum = mul_table[radius], shg_sum = shg_table[radius];
	let stackEnd = null, stack = stackStart, stackIn = null, stackOut = null;
	for (let i = 1; i < div; i++) {
		stack = stack.next = new BlurStack();
		if (i === radiusPlus1) stackEnd = stack;
	}
	stack.next = stackStart;
	yw = yi = 0;
	for (let y = 0; y < height; y++) {
		r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
		r_out_sum = radiusPlus1 * (pr = pixels[yi]);
		g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
		b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
		a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
		r_sum += sumFactor * pr;
		g_sum += sumFactor * pg;
		b_sum += sumFactor * pb;
		a_sum += sumFactor * pa;
		stack = stackStart;
		for (let i = 0; i < radiusPlus1; i++) {
			stack.r = pr;
			stack.g = pg;
			stack.b = pb;
			stack.a = pa;
			stack = stack.next;
		}
		for (let i = 1; i < radiusPlus1; i++) {
			p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
			r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
			g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
			b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
			a_sum += (stack.a = pa = pixels[p + 3]) * rbs;
			r_in_sum += pr;
			g_in_sum += pg;
			b_in_sum += pb;
			a_in_sum += pa;
			stack = stack.next;
		}
		stackIn = stackStart;
		stackOut = stackEnd;
		for (let x = 0; x < width; x++) {
			pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum;
			if (pa !== 0) {
				pa = 255 / pa;
				pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa;
				pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
				pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
			} else pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
			r_sum -= r_out_sum;
			g_sum -= g_out_sum;
			b_sum -= b_out_sum;
			a_sum -= a_out_sum;
			r_out_sum -= stackIn.r;
			g_out_sum -= stackIn.g;
			b_out_sum -= stackIn.b;
			a_out_sum -= stackIn.a;
			p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
			r_in_sum += stackIn.r = pixels[p];
			g_in_sum += stackIn.g = pixels[p + 1];
			b_in_sum += stackIn.b = pixels[p + 2];
			a_in_sum += stackIn.a = pixels[p + 3];
			r_sum += r_in_sum;
			g_sum += g_in_sum;
			b_sum += b_in_sum;
			a_sum += a_in_sum;
			stackIn = stackIn.next;
			r_out_sum += pr = stackOut.r;
			g_out_sum += pg = stackOut.g;
			b_out_sum += pb = stackOut.b;
			a_out_sum += pa = stackOut.a;
			r_in_sum -= pr;
			g_in_sum -= pg;
			b_in_sum -= pb;
			a_in_sum -= pa;
			stackOut = stackOut.next;
			yi += 4;
		}
		yw += width;
	}
	for (let x = 0; x < width; x++) {
		g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
		yi = x << 2;
		r_out_sum = radiusPlus1 * (pr = pixels[yi]);
		g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
		b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
		a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
		r_sum += sumFactor * pr;
		g_sum += sumFactor * pg;
		b_sum += sumFactor * pb;
		a_sum += sumFactor * pa;
		stack = stackStart;
		for (let i = 0; i < radiusPlus1; i++) {
			stack.r = pr;
			stack.g = pg;
			stack.b = pb;
			stack.a = pa;
			stack = stack.next;
		}
		let yp = width;
		for (let i = 1; i <= radius; i++) {
			yi = yp + x << 2;
			r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
			g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
			b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
			a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;
			r_in_sum += pr;
			g_in_sum += pg;
			b_in_sum += pb;
			a_in_sum += pa;
			stack = stack.next;
			if (i < heightMinus1) yp += width;
		}
		yi = x;
		stackIn = stackStart;
		stackOut = stackEnd;
		for (let y = 0; y < height; y++) {
			p = yi << 2;
			pixels[p + 3] = pa = a_sum * mul_sum >> shg_sum;
			if (pa > 0) {
				pa = 255 / pa;
				pixels[p] = (r_sum * mul_sum >> shg_sum) * pa;
				pixels[p + 1] = (g_sum * mul_sum >> shg_sum) * pa;
				pixels[p + 2] = (b_sum * mul_sum >> shg_sum) * pa;
			} else pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
			r_sum -= r_out_sum;
			g_sum -= g_out_sum;
			b_sum -= b_out_sum;
			a_sum -= a_out_sum;
			r_out_sum -= stackIn.r;
			g_out_sum -= stackIn.g;
			b_out_sum -= stackIn.b;
			a_out_sum -= stackIn.a;
			p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
			r_sum += r_in_sum += stackIn.r = pixels[p];
			g_sum += g_in_sum += stackIn.g = pixels[p + 1];
			b_sum += b_in_sum += stackIn.b = pixels[p + 2];
			a_sum += a_in_sum += stackIn.a = pixels[p + 3];
			stackIn = stackIn.next;
			r_out_sum += pr = stackOut.r;
			g_out_sum += pg = stackOut.g;
			b_out_sum += pb = stackOut.b;
			a_out_sum += pa = stackOut.a;
			r_in_sum -= pr;
			g_in_sum -= pg;
			b_in_sum -= pb;
			a_in_sum -= pa;
			stackOut = stackOut.next;
			yi += width;
		}
	}
}
var Blur = function Blur(imageData) {
	const radius = Math.round(this.blurRadius());
	if (radius > 0) filterGaussBlurRGBA(imageData, radius);
};
Factory.addGetterSetter(Node, "blurRadius", 0, getNumberValidator(), Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Brighten.js
var Brighten = function(imageData) {
	const brightness = this.brightness() * 255, data = imageData.data, len = data.length;
	for (let i = 0; i < len; i += 4) {
		data[i] += brightness;
		data[i + 1] += brightness;
		data[i + 2] += brightness;
	}
};
Factory.addGetterSetter(Node, "brightness", 0, getNumberValidator(), Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Brightness.js
var Brightness = function(imageData) {
	const brightness = this.brightness(), data = imageData.data, len = data.length;
	for (let i = 0; i < len; i += 4) {
		data[i] = Math.min(255, data[i] * brightness);
		data[i + 1] = Math.min(255, data[i + 1] * brightness);
		data[i + 2] = Math.min(255, data[i + 2] * brightness);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Contrast.js
var Contrast = function(imageData) {
	const adjust = Math.pow((this.contrast() + 100) / 100, 2);
	const data = imageData.data, nPixels = data.length;
	let red = 150, green = 150, blue = 150;
	for (let i = 0; i < nPixels; i += 4) {
		red = data[i];
		green = data[i + 1];
		blue = data[i + 2];
		red /= 255;
		red -= .5;
		red *= adjust;
		red += .5;
		red *= 255;
		green /= 255;
		green -= .5;
		green *= adjust;
		green += .5;
		green *= 255;
		blue /= 255;
		blue -= .5;
		blue *= adjust;
		blue += .5;
		blue *= 255;
		red = red < 0 ? 0 : red > 255 ? 255 : red;
		green = green < 0 ? 0 : green > 255 ? 255 : green;
		blue = blue < 0 ? 0 : blue > 255 ? 255 : blue;
		data[i] = red;
		data[i + 1] = green;
		data[i + 2] = blue;
	}
};
Factory.addGetterSetter(Node, "contrast", 0, getNumberValidator(), Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Emboss.js
var Emboss = function(imageData) {
	var _a, _b, _c, _d, _e, _f, _g, _h, _j;
	const data = imageData.data;
	const w = imageData.width;
	const h = imageData.height;
	const strength01 = Math.min(1, Math.max(0, (_b = (_a = this.embossStrength) === null || _a === void 0 ? void 0 : _a.call(this)) !== null && _b !== void 0 ? _b : .5));
	const whiteLevel01 = Math.min(1, Math.max(0, (_d = (_c = this.embossWhiteLevel) === null || _c === void 0 ? void 0 : _c.call(this)) !== null && _d !== void 0 ? _d : .5));
	const directionDeg = (_g = {
		"top-left": 315,
		top: 270,
		"top-right": 225,
		right: 180,
		"bottom-right": 135,
		bottom: 90,
		"bottom-left": 45,
		left: 0
	}[(_f = (_e = this.embossDirection) === null || _e === void 0 ? void 0 : _e.call(this)) !== null && _f !== void 0 ? _f : "top-left"]) !== null && _g !== void 0 ? _g : 315;
	const blend = !!((_j = (_h = this.embossBlend) === null || _h === void 0 ? void 0 : _h.call(this)) !== null && _j !== void 0 ? _j : false);
	const strength = strength01 * 10;
	const bias = whiteLevel01 * 255;
	const dirRad = directionDeg * Math.PI / 180;
	const cx = Math.cos(dirRad);
	const cy = Math.sin(dirRad);
	const SCALE = 128 / 1020 * strength;
	const src = new Uint8ClampedArray(data);
	const lum = new Float32Array(w * h);
	for (let p = 0, i = 0; i < data.length; i += 4, p++) lum[p] = .2126 * src[i] + .7152 * src[i + 1] + .0722 * src[i + 2];
	const Gx = [
		-1,
		0,
		1,
		-2,
		0,
		2,
		-1,
		0,
		1
	];
	const Gy = [
		-1,
		-2,
		-1,
		0,
		0,
		0,
		1,
		2,
		1
	];
	const OFF = [
		-w - 1,
		-w,
		-w + 1,
		-1,
		0,
		1,
		w - 1,
		w,
		w + 1
	];
	const clamp8 = (v) => v < 0 ? 0 : v > 255 ? 255 : v;
	for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
		const p = y * w + x;
		let sx = 0, sy = 0;
		sx += lum[p + OFF[0]] * Gx[0];
		sy += lum[p + OFF[0]] * Gy[0];
		sx += lum[p + OFF[1]] * Gx[1];
		sy += lum[p + OFF[1]] * Gy[1];
		sx += lum[p + OFF[2]] * Gx[2];
		sy += lum[p + OFF[2]] * Gy[2];
		sx += lum[p + OFF[3]] * Gx[3];
		sy += lum[p + OFF[3]] * Gy[3];
		sx += lum[p + OFF[5]] * Gx[5];
		sy += lum[p + OFF[5]] * Gy[5];
		sx += lum[p + OFF[6]] * Gx[6];
		sy += lum[p + OFF[6]] * Gy[6];
		sx += lum[p + OFF[7]] * Gx[7];
		sy += lum[p + OFF[7]] * Gy[7];
		sx += lum[p + OFF[8]] * Gx[8];
		sy += lum[p + OFF[8]] * Gy[8];
		const outGray = clamp8(bias + (cx * sx + cy * sy) * SCALE);
		const o = p * 4;
		if (blend) {
			const delta = outGray - bias;
			data[o] = clamp8(src[o] + delta);
			data[o + 1] = clamp8(src[o + 1] + delta);
			data[o + 2] = clamp8(src[o + 2] + delta);
			data[o + 3] = src[o + 3];
		} else {
			data[o] = data[o + 1] = data[o + 2] = outGray;
			data[o + 3] = src[o + 3];
		}
	}
	for (let x = 0; x < w; x++) {
		let oTop = x * 4, oBot = ((h - 1) * w + x) * 4;
		data[oTop] = src[oTop];
		data[oTop + 1] = src[oTop + 1];
		data[oTop + 2] = src[oTop + 2];
		data[oTop + 3] = src[oTop + 3];
		data[oBot] = src[oBot];
		data[oBot + 1] = src[oBot + 1];
		data[oBot + 2] = src[oBot + 2];
		data[oBot + 3] = src[oBot + 3];
	}
	for (let y = 1; y < h - 1; y++) {
		let oL = y * w * 4, oR = (y * w + (w - 1)) * 4;
		data[oL] = src[oL];
		data[oL + 1] = src[oL + 1];
		data[oL + 2] = src[oL + 2];
		data[oL + 3] = src[oL + 3];
		data[oR] = src[oR];
		data[oR + 1] = src[oR + 1];
		data[oR + 2] = src[oR + 2];
		data[oR + 3] = src[oR + 3];
	}
	return imageData;
};
Factory.addGetterSetter(Node, "embossStrength", .5, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "embossWhiteLevel", .5, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "embossDirection", "top-left", void 0, Factory.afterSetFilter);
Factory.addGetterSetter(Node, "embossBlend", false, void 0, Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Enhance.js
function remap(fromValue, fromMin, fromMax, toMin, toMax) {
	const fromRange = fromMax - fromMin, toRange = toMax - toMin;
	if (fromRange === 0) return toMin + toRange / 2;
	if (toRange === 0) return toMin;
	let toValue = (fromValue - fromMin) / fromRange;
	toValue = toRange * toValue + toMin;
	return toValue;
}
var Enhance = function(imageData) {
	const data = imageData.data, nSubPixels = data.length;
	let rMin = data[0], rMax = rMin, r, gMin = data[1], gMax = gMin, g, bMin = data[2], bMax = bMin, b;
	const enhanceAmount = this.enhance();
	if (enhanceAmount === 0) return;
	for (let i = 0; i < nSubPixels; i += 4) {
		r = data[i + 0];
		if (r < rMin) rMin = r;
		else if (r > rMax) rMax = r;
		g = data[i + 1];
		if (g < gMin) gMin = g;
		else if (g > gMax) gMax = g;
		b = data[i + 2];
		if (b < bMin) bMin = b;
		else if (b > bMax) bMax = b;
	}
	if (rMax === rMin) {
		rMax = 255;
		rMin = 0;
	}
	if (gMax === gMin) {
		gMax = 255;
		gMin = 0;
	}
	if (bMax === bMin) {
		bMax = 255;
		bMin = 0;
	}
	let rGoalMax, rGoalMin, gGoalMax, gGoalMin, bGoalMax, bGoalMin;
	if (enhanceAmount > 0) {
		rGoalMax = rMax + enhanceAmount * (255 - rMax);
		rGoalMin = rMin - enhanceAmount * (rMin - 0);
		gGoalMax = gMax + enhanceAmount * (255 - gMax);
		gGoalMin = gMin - enhanceAmount * (gMin - 0);
		bGoalMax = bMax + enhanceAmount * (255 - bMax);
		bGoalMin = bMin - enhanceAmount * (bMin - 0);
	} else {
		const rMid = (rMax + rMin) * .5;
		rGoalMax = rMax + enhanceAmount * (rMax - rMid);
		rGoalMin = rMin + enhanceAmount * (rMin - rMid);
		const gMid = (gMax + gMin) * .5;
		gGoalMax = gMax + enhanceAmount * (gMax - gMid);
		gGoalMin = gMin + enhanceAmount * (gMin - gMid);
		const bMid = (bMax + bMin) * .5;
		bGoalMax = bMax + enhanceAmount * (bMax - bMid);
		bGoalMin = bMin + enhanceAmount * (bMin - bMid);
	}
	for (let i = 0; i < nSubPixels; i += 4) {
		data[i + 0] = remap(data[i + 0], rMin, rMax, rGoalMin, rGoalMax);
		data[i + 1] = remap(data[i + 1], gMin, gMax, gGoalMin, gGoalMax);
		data[i + 2] = remap(data[i + 2], bMin, bMax, bGoalMin, bGoalMax);
	}
};
Factory.addGetterSetter(Node, "enhance", 0, getNumberValidator(), Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Grayscale.js
var Grayscale = function(imageData) {
	const data = imageData.data, len = data.length;
	for (let i = 0; i < len; i += 4) {
		const brightness = .34 * data[i] + .5 * data[i + 1] + .16 * data[i + 2];
		data[i] = brightness;
		data[i + 1] = brightness;
		data[i + 2] = brightness;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/HSL.js
Factory.addGetterSetter(Node, "hue", 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "saturation", 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "luminance", 0, getNumberValidator(), Factory.afterSetFilter);
var HSL = function(imageData) {
	const data = imageData.data, nPixels = data.length, v = 1, s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, l = this.luminance() * 127;
	const vsu = v * s * Math.cos(h * Math.PI / 180), vsw = v * s * Math.sin(h * Math.PI / 180);
	const rr = .299 * v + .701 * vsu + .167 * vsw, rg = .587 * v - .587 * vsu + .33 * vsw, rb = .114 * v - .114 * vsu - .497 * vsw;
	const gr = .299 * v - .299 * vsu - .328 * vsw, gg = .587 * v + .413 * vsu + .035 * vsw, gb = .114 * v - .114 * vsu + .293 * vsw;
	const br = .299 * v - .3 * vsu + 1.25 * vsw, bg = .587 * v - .586 * vsu - 1.05 * vsw, bb = .114 * v + .886 * vsu - .2 * vsw;
	let r, g, b, a;
	for (let i = 0; i < nPixels; i += 4) {
		r = data[i + 0];
		g = data[i + 1];
		b = data[i + 2];
		a = data[i + 3];
		data[i + 0] = rr * r + rg * g + rb * b + l;
		data[i + 1] = gr * r + gg * g + gb * b + l;
		data[i + 2] = br * r + bg * g + bb * b + l;
		data[i + 3] = a;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/HSV.js
var HSV = function(imageData) {
	const data = imageData.data, nPixels = data.length, v = Math.pow(2, this.value()), s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360;
	const vsu = v * s * Math.cos(h * Math.PI / 180), vsw = v * s * Math.sin(h * Math.PI / 180);
	const rr = .299 * v + .701 * vsu + .167 * vsw, rg = .587 * v - .587 * vsu + .33 * vsw, rb = .114 * v - .114 * vsu - .497 * vsw;
	const gr = .299 * v - .299 * vsu - .328 * vsw, gg = .587 * v + .413 * vsu + .035 * vsw, gb = .114 * v - .114 * vsu + .293 * vsw;
	const br = .299 * v - .3 * vsu + 1.25 * vsw, bg = .587 * v - .586 * vsu - 1.05 * vsw, bb = .114 * v + .886 * vsu - .2 * vsw;
	for (let i = 0; i < nPixels; i += 4) {
		const r = data[i + 0];
		const g = data[i + 1];
		const b = data[i + 2];
		const a = data[i + 3];
		data[i + 0] = rr * r + rg * g + rb * b;
		data[i + 1] = gr * r + gg * g + gb * b;
		data[i + 2] = br * r + bg * g + bb * b;
		data[i + 3] = a;
	}
};
Factory.addGetterSetter(Node, "hue", 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "saturation", 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "value", 0, getNumberValidator(), Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Invert.js
var Invert = function(imageData) {
	const data = imageData.data, len = data.length;
	for (let i = 0; i < len; i += 4) {
		data[i] = 255 - data[i];
		data[i + 1] = 255 - data[i + 1];
		data[i + 2] = 255 - data[i + 2];
	}
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Kaleidoscope.js
var ToPolar = function(src, dst, opt) {
	const srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2;
	let rMax = Math.sqrt(xMid * xMid + yMid * yMid);
	let x = xSize - xMid;
	let y = ySize - yMid;
	const rad = Math.sqrt(x * x + y * y);
	rMax = rad > rMax ? rad : rMax;
	const rSize = ySize, tSize = xSize;
	const conversion = 360 / tSize * Math.PI / 180;
	for (let theta = 0; theta < tSize; theta += 1) {
		const sin = Math.sin(theta * conversion);
		const cos = Math.cos(theta * conversion);
		for (let radius = 0; radius < rSize; radius += 1) {
			x = Math.floor(xMid + rMax * radius / rSize * cos);
			y = Math.floor(yMid + rMax * radius / rSize * sin);
			let i = (y * xSize + x) * 4;
			const r = srcPixels[i + 0];
			const g = srcPixels[i + 1];
			const b = srcPixels[i + 2];
			const a = srcPixels[i + 3];
			i = (theta + radius * xSize) * 4;
			dstPixels[i + 0] = r;
			dstPixels[i + 1] = g;
			dstPixels[i + 2] = b;
			dstPixels[i + 3] = a;
		}
	}
};
var FromPolar = function(src, dst, opt) {
	const srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2;
	let rMax = Math.sqrt(xMid * xMid + yMid * yMid);
	let x = xSize - xMid;
	let y = ySize - yMid;
	const rad = Math.sqrt(x * x + y * y);
	rMax = rad > rMax ? rad : rMax;
	const rSize = ySize, tSize = xSize, phaseShift = opt.polarRotation || 0;
	let x1, y1;
	for (x = 0; x < xSize; x += 1) for (y = 0; y < ySize; y += 1) {
		const dx = x - xMid;
		const dy = y - yMid;
		const radius = Math.sqrt(dx * dx + dy * dy) * rSize / rMax;
		let theta = (Math.atan2(dy, dx) * 180 / Math.PI + 360 + phaseShift) % 360;
		theta = theta * tSize / 360;
		x1 = Math.floor(theta);
		y1 = Math.floor(radius);
		let i = (y1 * xSize + x1) * 4;
		const r = srcPixels[i + 0];
		const g = srcPixels[i + 1];
		const b = srcPixels[i + 2];
		const a = srcPixels[i + 3];
		i = (y * xSize + x) * 4;
		dstPixels[i + 0] = r;
		dstPixels[i + 1] = g;
		dstPixels[i + 2] = b;
		dstPixels[i + 3] = a;
	}
};
var Kaleidoscope = function(imageData) {
	const xSize = imageData.width, ySize = imageData.height;
	let x, y, xoff, i, r, g, b, a, srcPos, dstPos;
	let power = Math.round(this.kaleidoscopePower());
	const angle = Math.round(this.kaleidoscopeAngle());
	const offset = Math.floor(xSize * (angle % 360) / 360);
	if (power < 1) return;
	const tempCanvas = Util.createCanvasElement();
	tempCanvas.width = xSize;
	tempCanvas.height = ySize;
	const scratchData = tempCanvas.getContext("2d").getImageData(0, 0, xSize, ySize);
	Util.releaseCanvas(tempCanvas);
	ToPolar(imageData, scratchData, {
		polarCenterX: xSize / 2,
		polarCenterY: ySize / 2
	});
	let minSectionSize = xSize / Math.pow(2, power);
	while (minSectionSize <= 8) {
		minSectionSize = minSectionSize * 2;
		power -= 1;
	}
	minSectionSize = Math.ceil(minSectionSize);
	let sectionSize = minSectionSize;
	let xStart = 0, xEnd = sectionSize, xDelta = 1;
	if (offset + minSectionSize > xSize) {
		xStart = sectionSize;
		xEnd = 0;
		xDelta = -1;
	}
	for (y = 0; y < ySize; y += 1) for (x = xStart; x !== xEnd; x += xDelta) {
		xoff = Math.round(x + offset) % xSize;
		srcPos = (xSize * y + xoff) * 4;
		r = scratchData.data[srcPos + 0];
		g = scratchData.data[srcPos + 1];
		b = scratchData.data[srcPos + 2];
		a = scratchData.data[srcPos + 3];
		dstPos = (xSize * y + x) * 4;
		scratchData.data[dstPos + 0] = r;
		scratchData.data[dstPos + 1] = g;
		scratchData.data[dstPos + 2] = b;
		scratchData.data[dstPos + 3] = a;
	}
	for (y = 0; y < ySize; y += 1) {
		sectionSize = Math.floor(minSectionSize);
		for (i = 0; i < power; i += 1) {
			for (x = 0; x < sectionSize + 1; x += 1) {
				srcPos = (xSize * y + x) * 4;
				r = scratchData.data[srcPos + 0];
				g = scratchData.data[srcPos + 1];
				b = scratchData.data[srcPos + 2];
				a = scratchData.data[srcPos + 3];
				dstPos = (xSize * y + sectionSize * 2 - x - 1) * 4;
				scratchData.data[dstPos + 0] = r;
				scratchData.data[dstPos + 1] = g;
				scratchData.data[dstPos + 2] = b;
				scratchData.data[dstPos + 3] = a;
			}
			sectionSize *= 2;
		}
	}
	FromPolar(scratchData, imageData, { polarRotation: 0 });
};
Factory.addGetterSetter(Node, "kaleidoscopePower", 2, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node, "kaleidoscopeAngle", 0, getNumberValidator(), Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Mask.js
function pixelAt(idata, x, y) {
	let idx = (y * idata.width + x) * 4;
	const d = [];
	d.push(idata.data[idx++], idata.data[idx++], idata.data[idx++], idata.data[idx++]);
	return d;
}
function rgbDistance(p1, p2) {
	return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2));
}
function rgbMean(pTab) {
	const m = [
		0,
		0,
		0
	];
	for (let i = 0; i < pTab.length; i++) {
		m[0] += pTab[i][0];
		m[1] += pTab[i][1];
		m[2] += pTab[i][2];
	}
	m[0] /= pTab.length;
	m[1] /= pTab.length;
	m[2] /= pTab.length;
	return m;
}
function backgroundMask(idata, threshold) {
	const rgbv_no = pixelAt(idata, 0, 0);
	const rgbv_ne = pixelAt(idata, idata.width - 1, 0);
	const rgbv_so = pixelAt(idata, 0, idata.height - 1);
	const rgbv_se = pixelAt(idata, idata.width - 1, idata.height - 1);
	const thres = threshold || 10;
	if (rgbDistance(rgbv_no, rgbv_ne) < thres && rgbDistance(rgbv_ne, rgbv_se) < thres && rgbDistance(rgbv_se, rgbv_so) < thres && rgbDistance(rgbv_so, rgbv_no) < thres) {
		const mean = rgbMean([
			rgbv_ne,
			rgbv_no,
			rgbv_se,
			rgbv_so
		]);
		const mask = [];
		for (let i = 0; i < idata.width * idata.height; i++) {
			const d = rgbDistance(mean, [
				idata.data[i * 4],
				idata.data[i * 4 + 1],
				idata.data[i * 4 + 2]
			]);
			mask[i] = d < thres ? 0 : 255;
		}
		return mask;
	}
}
function applyMask(idata, mask) {
	for (let i = 0; i < idata.width * idata.height; i++) idata.data[4 * i + 3] = mask[i];
}
function erodeMask(mask, sw, sh) {
	const weights = [
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1
	];
	const side = Math.round(Math.sqrt(weights.length));
	const halfSide = Math.floor(side / 2);
	const maskResult = [];
	for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) {
		const so = y * sw + x;
		let a = 0;
		for (let cy = 0; cy < side; cy++) for (let cx = 0; cx < side; cx++) {
			const scy = y + cy - halfSide;
			const scx = x + cx - halfSide;
			if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
				const srcOff = scy * sw + scx;
				const wt = weights[cy * side + cx];
				a += mask[srcOff] * wt;
			}
		}
		maskResult[so] = a === 2040 ? 255 : 0;
	}
	return maskResult;
}
function dilateMask(mask, sw, sh) {
	const weights = [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1
	];
	const side = Math.round(Math.sqrt(weights.length));
	const halfSide = Math.floor(side / 2);
	const maskResult = [];
	for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) {
		const so = y * sw + x;
		let a = 0;
		for (let cy = 0; cy < side; cy++) for (let cx = 0; cx < side; cx++) {
			const scy = y + cy - halfSide;
			const scx = x + cx - halfSide;
			if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
				const srcOff = scy * sw + scx;
				const wt = weights[cy * side + cx];
				a += mask[srcOff] * wt;
			}
		}
		maskResult[so] = a >= 1020 ? 255 : 0;
	}
	return maskResult;
}
function smoothEdgeMask(mask, sw, sh) {
	const weights = [
		1 / 9,
		1 / 9,
		1 / 9,
		1 / 9,
		1 / 9,
		1 / 9,
		1 / 9,
		1 / 9,
		1 / 9
	];
	const side = Math.round(Math.sqrt(weights.length));
	const halfSide = Math.floor(side / 2);
	const maskResult = [];
	for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) {
		const so = y * sw + x;
		let a = 0;
		for (let cy = 0; cy < side; cy++) for (let cx = 0; cx < side; cx++) {
			const scy = y + cy - halfSide;
			const scx = x + cx - halfSide;
			if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
				const srcOff = scy * sw + scx;
				const wt = weights[cy * side + cx];
				a += mask[srcOff] * wt;
			}
		}
		maskResult[so] = a;
	}
	return maskResult;
}
var Mask = function(imageData) {
	let mask = backgroundMask(imageData, this.threshold());
	if (mask) {
		mask = erodeMask(mask, imageData.width, imageData.height);
		mask = dilateMask(mask, imageData.width, imageData.height);
		mask = smoothEdgeMask(mask, imageData.width, imageData.height);
		applyMask(imageData, mask);
	}
	return imageData;
};
Factory.addGetterSetter(Node, "threshold", 0, getNumberValidator(), Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Noise.js
var Noise = function(imageData) {
	const amount = this.noise() * 255, data = imageData.data, nPixels = data.length, half = amount / 2;
	for (let i = 0; i < nPixels; i += 4) {
		data[i + 0] += half - 2 * half * Math.random();
		data[i + 1] += half - 2 * half * Math.random();
		data[i + 2] += half - 2 * half * Math.random();
	}
};
Factory.addGetterSetter(Node, "noise", .2, getNumberValidator(), Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Pixelate.js
var Pixelate = function(imageData) {
	let pixelSize = Math.ceil(this.pixelSize()), width = imageData.width, height = imageData.height, nBinsX = Math.ceil(width / pixelSize), nBinsY = Math.ceil(height / pixelSize), data = imageData.data;
	if (pixelSize <= 0) {
		Util.error("pixelSize value can not be <= 0");
		return;
	}
	for (let xBin = 0; xBin < nBinsX; xBin += 1) for (let yBin = 0; yBin < nBinsY; yBin += 1) {
		let red = 0;
		let green = 0;
		let blue = 0;
		let alpha = 0;
		const xBinStart = xBin * pixelSize;
		const xBinEnd = xBinStart + pixelSize;
		const yBinStart = yBin * pixelSize;
		const yBinEnd = yBinStart + pixelSize;
		let pixelsInBin = 0;
		for (let x = xBinStart; x < xBinEnd; x += 1) {
			if (x >= width) continue;
			for (let y = yBinStart; y < yBinEnd; y += 1) {
				if (y >= height) continue;
				const i = (width * y + x) * 4;
				red += data[i + 0];
				green += data[i + 1];
				blue += data[i + 2];
				alpha += data[i + 3];
				pixelsInBin += 1;
			}
		}
		red = red / pixelsInBin;
		green = green / pixelsInBin;
		blue = blue / pixelsInBin;
		alpha = alpha / pixelsInBin;
		for (let x = xBinStart; x < xBinEnd; x += 1) {
			if (x >= width) continue;
			for (let y = yBinStart; y < yBinEnd; y += 1) {
				if (y >= height) continue;
				const i = (width * y + x) * 4;
				data[i + 0] = red;
				data[i + 1] = green;
				data[i + 2] = blue;
				data[i + 3] = alpha;
			}
		}
	}
};
Factory.addGetterSetter(Node, "pixelSize", 8, getNumberValidator(), Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Posterize.js
var Posterize = function(imageData) {
	const levels = Math.round(this.levels() * 254) + 1, data = imageData.data, len = data.length, scale = 255 / levels;
	for (let i = 0; i < len; i += 1) data[i] = Math.floor(data[i] / scale) * scale;
};
Factory.addGetterSetter(Node, "levels", .5, getNumberValidator(), Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/RGB.js
var RGB = function(imageData) {
	const data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue();
	for (let i = 0; i < nPixels; i += 4) {
		const brightness = (.34 * data[i] + .5 * data[i + 1] + .16 * data[i + 2]) / 255;
		data[i] = brightness * red;
		data[i + 1] = brightness * green;
		data[i + 2] = brightness * blue;
		data[i + 3] = data[i + 3];
	}
};
Factory.addGetterSetter(Node, "red", 0, function(val) {
	this._filterUpToDate = false;
	if (val > 255) return 255;
	else if (val < 0) return 0;
	else return Math.round(val);
});
Factory.addGetterSetter(Node, "green", 0, function(val) {
	this._filterUpToDate = false;
	if (val > 255) return 255;
	else if (val < 0) return 0;
	else return Math.round(val);
});
Factory.addGetterSetter(Node, "blue", 0, RGBComponent, Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/RGBA.js
var RGBA = function(imageData) {
	const data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), alpha = this.alpha();
	for (let i = 0; i < nPixels; i += 4) {
		const ia = 1 - alpha;
		data[i] = red * alpha + data[i] * ia;
		data[i + 1] = green * alpha + data[i + 1] * ia;
		data[i + 2] = blue * alpha + data[i + 2] * ia;
	}
};
Factory.addGetterSetter(Node, "red", 0, function(val) {
	this._filterUpToDate = false;
	if (val > 255) return 255;
	else if (val < 0) return 0;
	else return Math.round(val);
});
Factory.addGetterSetter(Node, "green", 0, function(val) {
	this._filterUpToDate = false;
	if (val > 255) return 255;
	else if (val < 0) return 0;
	else return Math.round(val);
});
Factory.addGetterSetter(Node, "blue", 0, RGBComponent, Factory.afterSetFilter);
Factory.addGetterSetter(Node, "alpha", 1, function(val) {
	this._filterUpToDate = false;
	if (val > 1) return 1;
	else if (val < 0) return 0;
	else return val;
});
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Sepia.js
var Sepia = function(imageData) {
	const data = imageData.data, nPixels = data.length;
	for (let i = 0; i < nPixels; i += 4) {
		const r = data[i + 0];
		const g = data[i + 1];
		const b = data[i + 2];
		data[i + 0] = Math.min(255, r * .393 + g * .769 + b * .189);
		data[i + 1] = Math.min(255, r * .349 + g * .686 + b * .168);
		data[i + 2] = Math.min(255, r * .272 + g * .534 + b * .131);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Solarize.js
var Solarize = function(imageData) {
	const threshold = 128;
	const d = imageData.data;
	for (let i = 0; i < d.length; i += 4) {
		const r = d[i], g = d[i + 1], b = d[i + 2];
		if (.2126 * r + .7152 * g + .0722 * b >= threshold) {
			d[i] = 255 - r;
			d[i + 1] = 255 - g;
			d[i + 2] = 255 - b;
		}
	}
	return imageData;
};
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/filters/Threshold.js
var Threshold = function(imageData) {
	const level = this.threshold() * 255, data = imageData.data, len = data.length;
	for (let i = 0; i < len; i += 1) data[i] = data[i] < level ? 0 : 255;
};
Factory.addGetterSetter(Node, "threshold", .5, getNumberValidator(), Factory.afterSetFilter);
//#endregion
//#region ../../node_modules/.pnpm/konva@10.3.1/node_modules/konva/lib/index.js
var lib_default = Konva$1.Util._assign(Konva$1, {
	Arc,
	Arrow,
	Circle,
	Ellipse,
	Image: Image$1,
	Label,
	Tag,
	Line,
	Path,
	Rect,
	RegularPolygon,
	Ring,
	Sprite,
	Star,
	Text,
	TextPath,
	Transformer,
	Wedge,
	Filters: {
		Blur,
		Brightness,
		Brighten,
		Contrast,
		Emboss,
		Enhance,
		Grayscale,
		HSL,
		HSV,
		Invert,
		Kaleidoscope,
		Mask,
		Noise,
		Pixelate,
		Posterize,
		RGB,
		RGBA,
		Sepia,
		Solarize,
		Threshold
	}
});
//#endregion
//#region ../../node_modules/.pnpm/vue-konva@3.4.0_konva@10.3.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vue-konva/dist/vue-konva.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function y(o) {
	if (!lib_default.autoDrawEnabled) {
		const n = o.getLayer() || o.getStage();
		n && n.batchDraw();
	}
}
var T = {
	key: !0,
	style: !0,
	elm: !0,
	isRootInsert: !0
};
var S = ".vue-konva-event";
function M(o, n, c, a) {
	const e = o.__konvaNode, l = {};
	let r = !1;
	for (let t in c) {
		if (T.hasOwnProperty(t)) continue;
		const s = t.slice(0, 2) === "on", f = c[t] !== n[t];
		if (s && f) {
			let g = t.slice(2).toLowerCase();
			g.slice(0, 7) === "content" && (g = "content" + g.slice(7, 1).toUpperCase() + g.slice(8)), e?.off(g + S, c[t]);
		}
		!n.hasOwnProperty(t) && e?.setAttr(t, void 0);
	}
	for (let t in n) {
		if (T.hasOwnProperty(t)) continue;
		let s = t.slice(0, 2) === "on";
		const f = c[t] !== n[t];
		if (s && f) {
			let d = t.slice(2).toLowerCase();
			d.slice(0, 7) === "content" && (d = "content" + d.slice(7, 1).toUpperCase() + d.slice(8)), n[t] && (e?.off(d + S), e?.on(d + S, n[t]));
		}
		!s && (n[t] !== c[t] || a && n[t] !== e?.getAttr(t)) && (r = !0, l[t] = n[t]);
	}
	r && e && (e.setAttrs(l), y(e));
}
var P = ".vue-konva-vmodel";
var b = "onUpdate:";
function _(o, n) {
	o.off(P);
	const c = n.vnode.props || {};
	for (const a in c) if (a.startsWith(b)) {
		const e = a.slice(9), l = c[a];
		o.on(`${e}Change${P}`, () => {
			l(o.getAttr(e));
		});
	}
}
var F = "V";
function G(o) {
	function n(c) {
		return c?.__konvaNode ? c : c?.parent ? n(c.parent) : (console.error("vue-konva error: Can not find parent node"), null);
	}
	return n(o.parent);
}
function R(o) {
	return o.component ? o.component.__konvaNode || R(o.component.subTree) : null;
}
function W(o) {
	const { el: n, component: c } = o, a = R(o);
	if (n?.tagName && c && !a) {
		const e = n.tagName.toLowerCase();
		return console.error(`vue-konva error: You are trying to render "${e}" inside your component tree. Looks like it is not a Konva node. You can render only Konva components inside the Stage.`), null;
	}
	return a;
}
function B(o) {
	const n = (e) => !!e && typeof e == "object" && "component" in e, c = (e) => Array.isArray(e), a = (e) => n(e) ? [e, ...a(e.children)] : c(e) ? e.flatMap(a) : [];
	return a(o.children);
}
function I(o, n) {
	const c = B(o), a = [];
	c.forEach((l) => {
		const r = W(l);
		r && a.push(r);
	});
	let e = !1;
	a.forEach((l, r) => {
		l.getZIndex() !== r && (l.setZIndex(r), e = !0);
	}), e && y(n);
}
var D = lib_default.default?.Stage || lib_default.Stage;
var Y = defineComponent({
	name: "Stage",
	props: {
		config: {
			type: Object,
			default: function() {
				return {};
			}
		},
		__useStrictMode: { type: Boolean }
	},
	inheritAttrs: !1,
	setup(o, { attrs: n, slots: c, expose: a }) {
		const e = getCurrentInstance();
		if (!e) return;
		const l = reactive({}), r = ref(null), t = new D({
			width: o.config.width,
			height: o.config.height,
			container: document.createElement("div")
		});
		e.__konvaNode = t, d();
		function s() {
			return e?.__konvaNode;
		}
		function f() {
			return e?.__konvaNode;
		}
		function d() {
			if (!e) return;
			const g = l || {}, m = {
				...n,
				...o.config
			};
			M(e, m, g, o.__useStrictMode), Object.assign(l, m);
		}
		return onMounted(() => {
			r.value && t.container(r.value), d(), _(t, e);
		}), onUpdated(() => {
			d(), I(e.subTree, t), _(t, e);
		}), onBeforeUnmount(() => {
			t.destroy();
		}), watch(() => o.config, d, { deep: !0 }), a({
			getStage: f,
			getNode: s
		}), () => h("div", {
			ref: r,
			id: n?.id,
			accesskey: n?.accesskey,
			class: n?.class,
			role: n?.role,
			style: n?.style,
			tabindex: n?.tabindex,
			title: n?.title
		}, c.default?.());
	}
});
var Z = ".vue-konva-event";
var z = {
	Group: !0,
	Layer: !0,
	FastLayer: !0,
	Label: !0
};
function i(o, n) {
	return defineComponent({
		name: o,
		props: {
			config: {
				type: Object,
				default: function() {
					return {};
				}
			},
			__useStrictMode: { type: Boolean }
		},
		setup(c, { attrs: a, slots: e, expose: l }) {
			const r = getCurrentInstance();
			if (!r) return;
			const t = reactive({}), s = new n();
			r.__konvaNode = s, r.vnode.__konvaNode = s, g();
			function f() {
				return r?.__konvaNode;
			}
			function d() {
				return r?.__konvaNode;
			}
			function g() {
				if (!r) return;
				const v = {};
				for (const h in r?.vnode.props) h.slice(0, 2) === "on" && (v[h] = r.vnode.props[h]);
				const K = t || {}, E = {
					...a,
					...c.config,
					...v
				};
				M(r, E, K, c.__useStrictMode), Object.assign(t, E);
			}
			onMounted(() => {
				const v = G(r)?.__konvaNode;
				v && "add" in v && v.add(s), y(s), _(s, r);
			}), onUnmounted(() => {
				y(s), s.destroy(), s.off(Z), s.off(P);
			}), onUpdated(() => {
				g(), I(r.subTree, s), _(s, r);
			}), watch(() => c.config, g, { deep: !0 }), l({
				getStage: d,
				getNode: f
			});
			const m = z.hasOwnProperty(o);
			return () => m ? e.default?.() : null;
		}
	});
}
var u = lib_default.default || lib_default;
var X = i("Arc", u.Arc);
var q = i("Arrow", u.Arrow);
var H = i("Circle", u.Circle);
var J = i("Ellipse", u.Ellipse);
var Q = i("FastLayer", u.FastLayer);
var ee = i("Group", u.Group);
var ne = i("Image", u.Image);
var te = i("Label", u.Label);
var oe = i("Layer", u.Layer);
var re = i("Line", u.Line);
var ce = i("Path", u.Path);
var ae = i("Rect", u.Rect);
var se = i("RegularPolygon", u.RegularPolygon);
var ie = i("Ring", u.Ring);
var ue = i("Shape", u.Shape);
var le = i("Sprite", u.Sprite);
var de = i("Star", u.Star);
var fe = i("Tag", u.Tag);
var ge = i("Text", u.Text);
var ve = i("TextPath", u.TextPath);
var pe = i("Transformer", u.Transformer);
var me = i("Wedge", u.Wedge);
var ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	Arc: X,
	Arrow: q,
	Circle: H,
	Ellipse: J,
	FastLayer: Q,
	Group: ee,
	Image: ne,
	Label: te,
	Layer: oe,
	Line: re,
	Path: ce,
	Rect: ae,
	RegularPolygon: se,
	Ring: ie,
	Shape: ue,
	Sprite: le,
	Star: de,
	Tag: fe,
	Text: ge,
	TextPath: ve,
	Transformer: pe,
	Wedge: me
}, Symbol.toStringTag, { value: "Module" }));
var Se = { install: (o, n) => {
	const c = n?.prefix || F, a = n?.customNodes ? Object.entries(n.customNodes).map(([l, r]) => i(l, r)) : [];
	[
		Y,
		...Object.values(ye),
		...a
	].forEach((l) => {
		o.component(`${c}${l.name}`, l);
	});
} };
//#endregion
//#region src/renderer/src/main.ts
init_runtime_dom_esm_bundler();
var isWeb = !window.api;
window.isWeb = isWeb;
if (isWeb) window.path = src_default;
window.isFullstack = false;
var init = async () => {
	await init$2();
	const pinia = createPinia();
	createApp(App_default).use(router).use(Qe).use(Se).use(pinia).mount("#app");
};
init();
//#endregion
export { fadeInHeightExpandTransition as $, color2Class as $n, cE as $r, eq as $t, iconLight as A, formItemInjectionKey as An, rgba as Ar, cloneArrayBuffer as At, colorPickerLight as B, resolveWrappedSlot as Bn, hsl2rgb as Br, arrayLikeKeys as Bt, dividerLight as C, millisecondsInSecond as Cn, off as Cr, useStyle as Ct, dialogApiInjectionKey as D, buildLocalizeFn as Dn, changeColor as Dr, baseFor as Dt, Modal_default as E, buildMatchFn as En, repeat as Er, cssrAnchorMetaName as Et, dropdownLight as F, configProviderInjectionKey as Fn, toHsvString as Fr, toString as Ft, calendarLight as G, keep as Gn, depx as Gr, isArguments as Gt, cascaderLight as H, render as Hn, hsv2rgb as Hr, nodeUtil as Ht, paginationLight as I, Wrapper as In, toHsvaString as Ir, MapCache as It, buttonGroupInjectionKey as J, call as Jn, pxfy as Jr, isArrayLike as Jt, Button as K, getFirstSlotVNode as Kn, getGap as Kr, isPrototype as Kt, selectLight as L, isSlotEmpty as Ln, toRgbString as Lr, Map$1 as Lt, radioLight as M, useThemeClass as Mn, toHexaString as Mr, cloneBuffer as Mt, ellipsisLight as N, useConfig as Nn, toHslString as Nr, Stack as Nt, datePickerLight as O, buildFormatLongFn as On, hsla as Or, initCloneObject as Ot, tooltipLight as P, useMergedClsPrefix as Pn, toHslaString as Pr, getPrototype as Pt, isSafari as Q, markEventEffectPerformed as Qn, cCB as Qr, assignValue as Qt, popselectLight as R, resolveSlot as Rn, toRgbaString as Rr, keysIn as Rt, drawerLight as S, millisecondsInMinute as Sn, useFalseUntilTruthy as Sr, useTheme as St, messageApiInjectionKey as T, buildMatchPatternFn as Tn, createId as Tr, useRtl as Tt, checkboxLight as U, omit as Un, rgb2hsl as Ur, baseUnary as Ut, collapseLight as V, resolveWrappedSlotWithProps as Vn, hsv2hsl as Vr, isTypedArray as Vt, Card_default as W, keysOf as Wn, rgb2hsv as Wr, isBuffer as Wt, avatarLight as X, warn as Xn, c as Xr, baseRest as Xt, breadcrumbLight as Y, throwError as Yn, getPreciseEventTarget as Yr, isLength as Yt, inputLight as Z, eventEffectNotPerformed as Zn, cB as Zr, copyObject as Zt, listLight as _, getDefaultOptions as _n, createInjectionKey as _r, Info_default as _t, themeLight$1 as a, CssRender as ai, isObject as an, zindexable as ar, internalSelectMenuLight as at, formLight as b, millisecondsInDay as bn, isBrowser$2 as br, IconSwitchTransition_default as bt, tabsLight as c, isSymbol as cn, getSlot as cr, XScrollbar as ct, statisticLight as d, Symbol$1 as dn, useIsComposing as dr, exposedLoadingProps as dt, cM as ei, isIndex as en, FocusTrap as er, alertLight as et, spinLight as f, root as fn, isBrowser$1 as fr, FadeInExpandTransition_default as ft, menuLight as g, toDate as gn, drawerInjectionKey as gr, Success_default as gt, popconfirmLight as h, startOfWeek as hn, drawerBodyInjectionKey as hr, Warning_default as ht, storeToRefs as i, insidePopover as ii, identity as in, useSsrAdapter as ir, fadeInScaleUpTransition as it, dataTableLight as j, useFormItem as jn, toHexString as jr, Uint8Array as jt, timePickerLight as k, zhCN$1 as kn, hsva as kr, cloneTypedArray as kt, tableLight as l, isObjectLike as ln, useReactivated as lr, fadeInTransition as lt, progressLight as m, isSameWeek as mn, modalBodyInjectionKey as mr, iconSwitchTransition as mt, useThemeStore as n, createKey as ni, getNative as nn, delegate_default as nr, tagLight as nt, typographyLight as o, murmur2 as oi, isArray as on, clickoutside as or, emptyLight as ot, sliderLight as p, dateZhCN as pn, popoverBodyInjectionKey as pr, Close_default as pt, XButton as q, flatten as qn, getMargin as qr, isIterateeCall as qt, defineStore as r, insideModal as ri, toSource as rn, src_default$1 as rr, popoverLight as rt, thingLight as s, arrayMap as sn, getFirstVNode as sr, Scrollbar as st, Qe as t, cNotM as ti, copyArray as tn, VResizeObserver_default as tr, internalSelectionLight as tt, switchLight as u, baseGetTag as un, useLockHtmlScroll as ur, Loading_default as ut, layoutLight as v, normalizeDates as vn, isMounted as vr, Error_default as vt, notificationApiInjectionKey as w, millisecondsInWeek as wn, on as wr, _common_default$41 as wt, spaceLight as x, millisecondsInHour as xn, useMemo as xr, Icon_default as xt, inputNumberLight as y, constructFrom as yn, hasInstance as yr, replaceable as yt, ConfigProvider_default as z, resolveSlotWithTypedProps as zn, hsl2hsv as zr, overArg as zt };
