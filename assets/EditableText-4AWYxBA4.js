import { $t as __commonJSMin, At as capitalize, B as mergeModels, Bt as isReservedProp, C as computed, D as createElementBlock, Dt as NO, Et as EMPTY_OBJ, Ft as isBuiltInDirective, Gt as makeMap, Ht as isString, It as isHTMLTag, Kt as normalizeClass, L as init_runtime_core_esm_bundler, Lt as isMathMLTag, M as defineComponent, Mt as generateCodeFrame, Nt as init_shared_esm_bundler, Ot as NOOP, Pt as isArray, Qt as toHandlerKey, Rt as isObject, Tt as unref, Ut as isSymbol, Vt as isSVGTag, Wt as isVoidTag, Xt as shared_esm_bundler_exports, Yt as parseStringStyle, Z as openBlock, at as watch, bt as shallowRef, ct as withDirectives, en as __esmMin, f as runtime_dom_esm_bundler_exports, ft as init_reactivity_esm_bundler, jt as extend$1, k as createStaticVNode, kt as camelize, p as vModelText, rn as __toCommonJS, rt as useModel, tn as __exportAll, u as init_runtime_dom_esm_bundler, w as createBaseVNode, wt as toValue, yt as ref, zt as isOn } from "./request-CkCeAZAO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { _ as toRef, d as isClient, f as isIOS, h as toArray, m as noop, p as isObject$1, v as tryOnScopeDispose, y as watchImmediate } from "./core-DWew9NA7.js";
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/Close.js
init_runtime_core_esm_bundler();
var _hoisted_1$2 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var Close_default = defineComponent({
	name: "Close",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [createBaseVNode("path", {
			d: "M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",
			fill: "currentColor"
		}, null, -1)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vicons+ionicons5@0.13.0/node_modules/@vicons/ionicons5/es/Move.js
init_runtime_core_esm_bundler();
var _hoisted_1$1 = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	viewBox: "0 0 512 512"
};
var Move_default = defineComponent({
	name: "Move",
	render: function render(_ctx, _cache) {
		return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [createStaticVNode("<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M176 112l80-80l80 80\"></path><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M255.98 32l.02 448\"></path><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M176 400l80 80l80-80\"></path><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M400 176l80 80l-80 80\"></path><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M112 176l-80 80l80 80\"></path><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M32 256h448\"></path>", 6)]));
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@vue+compiler-core@3.5.13/node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js
/**
* @vue/compiler-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function registerRuntimeHelpers(helpers) {
	Object.getOwnPropertySymbols(helpers).forEach((s) => {
		helperNameMap[s] = helpers[s];
	});
}
function createRoot(children, source = "") {
	return {
		type: 0,
		source,
		children,
		helpers: /* @__PURE__ */ new Set(),
		components: [],
		directives: [],
		hoists: [],
		imports: [],
		cached: [],
		temps: 0,
		codegenNode: void 0,
		loc: locStub
	};
}
function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent = false, loc = locStub) {
	if (context) {
		if (isBlock) {
			context.helper(OPEN_BLOCK);
			context.helper(getVNodeBlockHelper(context.inSSR, isComponent));
		} else context.helper(getVNodeHelper(context.inSSR, isComponent));
		if (directives) context.helper(WITH_DIRECTIVES);
	}
	return {
		type: 13,
		tag,
		props,
		children,
		patchFlag,
		dynamicProps,
		directives,
		isBlock,
		disableTracking,
		isComponent,
		loc
	};
}
function createArrayExpression(elements, loc = locStub) {
	return {
		type: 17,
		loc,
		elements
	};
}
function createObjectExpression(properties, loc = locStub) {
	return {
		type: 15,
		loc,
		properties
	};
}
function createObjectProperty(key, value) {
	return {
		type: 16,
		loc: locStub,
		key: isString(key) ? createSimpleExpression(key, true) : key,
		value
	};
}
function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
	return {
		type: 4,
		loc,
		content,
		isStatic,
		constType: isStatic ? 3 : constType
	};
}
function createInterpolation(content, loc) {
	return {
		type: 5,
		loc,
		content: isString(content) ? createSimpleExpression(content, false, loc) : content
	};
}
function createCompoundExpression(children, loc = locStub) {
	return {
		type: 8,
		loc,
		children
	};
}
function createCallExpression(callee, args = [], loc = locStub) {
	return {
		type: 14,
		loc,
		callee,
		arguments: args
	};
}
function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
	return {
		type: 18,
		params,
		returns,
		newline,
		isSlot,
		loc
	};
}
function createConditionalExpression(test, consequent, alternate, newline = true) {
	return {
		type: 19,
		test,
		consequent,
		alternate,
		newline,
		loc: locStub
	};
}
function createCacheExpression(index, value, needPauseTracking = false, inVOnce = false) {
	return {
		type: 20,
		index,
		value,
		needPauseTracking,
		inVOnce,
		needArraySpread: false,
		loc: locStub
	};
}
function createBlockStatement(body) {
	return {
		type: 21,
		body,
		loc: locStub
	};
}
function createTemplateLiteral(elements) {
	return {
		type: 22,
		elements,
		loc: locStub
	};
}
function createIfStatement(test, consequent, alternate) {
	return {
		type: 23,
		test,
		consequent,
		alternate,
		loc: locStub
	};
}
function createAssignmentExpression(left, right) {
	return {
		type: 24,
		left,
		right,
		loc: locStub
	};
}
function createSequenceExpression(expressions) {
	return {
		type: 25,
		expressions,
		loc: locStub
	};
}
function createReturnStatement(returns) {
	return {
		type: 26,
		returns,
		loc: locStub
	};
}
function getVNodeHelper(ssr, isComponent) {
	return ssr || isComponent ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}
function getVNodeBlockHelper(ssr, isComponent) {
	return ssr || isComponent ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}
function convertToBlock(node, { helper, removeHelper, inSSR }) {
	if (!node.isBlock) {
		node.isBlock = true;
		removeHelper(getVNodeHelper(inSSR, node.isComponent));
		helper(OPEN_BLOCK);
		helper(getVNodeBlockHelper(inSSR, node.isComponent));
	}
}
function isTagStartChar(c) {
	return c >= 97 && c <= 122 || c >= 65 && c <= 90;
}
function isWhitespace(c) {
	return c === 32 || c === 10 || c === 9 || c === 12 || c === 13;
}
function isEndOfTagSection(c) {
	return c === 47 || c === 62 || isWhitespace(c);
}
function toCharCodes(str) {
	const ret = new Uint8Array(str.length);
	for (let i = 0; i < str.length; i++) ret[i] = str.charCodeAt(i);
	return ret;
}
function getCompatValue(key, { compatConfig }) {
	const value = compatConfig && compatConfig[key];
	if (key === "MODE") return value || 3;
	else return value;
}
function isCompatEnabled(key, context) {
	const mode = getCompatValue("MODE", context);
	const value = getCompatValue(key, context);
	return mode === 3 ? value === true : value !== false;
}
function checkCompatEnabled(key, context, loc, ...args) {
	return isCompatEnabled(key, context);
}
function warnDeprecation(key, context, loc, ...args) {
	if (getCompatValue(key, context) === "suppress-warning") return;
	const { message, link } = deprecationData[key];
	const msg = `(deprecation ${key}) ${typeof message === "function" ? message(...args) : message}${link ? `
  Details: ${link}` : ``}`;
	const err = new SyntaxError(msg);
	err.code = key;
	if (loc) err.loc = loc;
	context.onWarn(err);
}
function defaultOnError(error) {
	throw error;
}
function defaultOnWarn(msg) {}
function createCompilerError(code, loc, messages, additionalMessage) {
	const msg = `https://vuejs.org/error-reference/#compiler-${code}`;
	const error = new SyntaxError(String(msg));
	error.code = code;
	error.loc = loc;
	return error;
}
function walkIdentifiers(root, onIdentifier, includeAll = false, parentStack = [], knownIds = /* @__PURE__ */ Object.create(null)) {}
function isReferencedIdentifier(id, parent, parentStack) {
	return false;
}
function isInDestructureAssignment(parent, parentStack) {
	if (parent && (parent.type === "ObjectProperty" || parent.type === "ArrayPattern")) {
		let i = parentStack.length;
		while (i--) {
			const p = parentStack[i];
			if (p.type === "AssignmentExpression") return true;
			else if (p.type !== "ObjectProperty" && !p.type.endsWith("Pattern")) break;
		}
	}
	return false;
}
function isInNewExpression(parentStack) {
	let i = parentStack.length;
	while (i--) {
		const p = parentStack[i];
		if (p.type === "NewExpression") return true;
		else if (p.type !== "MemberExpression") break;
	}
	return false;
}
function walkFunctionParams(node, onIdent) {
	for (const p of node.params) for (const id of extractIdentifiers(p)) onIdent(id);
}
function walkBlockDeclarations(block, onIdent) {
	for (const stmt of block.body) if (stmt.type === "VariableDeclaration") {
		if (stmt.declare) continue;
		for (const decl of stmt.declarations) for (const id of extractIdentifiers(decl.id)) onIdent(id);
	} else if (stmt.type === "FunctionDeclaration" || stmt.type === "ClassDeclaration") {
		if (stmt.declare || !stmt.id) continue;
		onIdent(stmt.id);
	} else if (isForStatement(stmt)) walkForStatement(stmt, true, onIdent);
}
function isForStatement(stmt) {
	return stmt.type === "ForOfStatement" || stmt.type === "ForInStatement" || stmt.type === "ForStatement";
}
function walkForStatement(stmt, isVar, onIdent) {
	const variable = stmt.type === "ForStatement" ? stmt.init : stmt.left;
	if (variable && variable.type === "VariableDeclaration" && (variable.kind === "var" ? isVar : !isVar)) for (const decl of variable.declarations) for (const id of extractIdentifiers(decl.id)) onIdent(id);
}
function extractIdentifiers(param, nodes = []) {
	switch (param.type) {
		case "Identifier":
			nodes.push(param);
			break;
		case "MemberExpression":
			let object = param;
			while (object.type === "MemberExpression") object = object.object;
			nodes.push(object);
			break;
		case "ObjectPattern":
			for (const prop of param.properties) if (prop.type === "RestElement") extractIdentifiers(prop.argument, nodes);
			else extractIdentifiers(prop.value, nodes);
			break;
		case "ArrayPattern":
			param.elements.forEach((element) => {
				if (element) extractIdentifiers(element, nodes);
			});
			break;
		case "RestElement":
			extractIdentifiers(param.argument, nodes);
			break;
		case "AssignmentPattern": extractIdentifiers(param.left, nodes);
	}
	return nodes;
}
function unwrapTSNode(node) {
	if (TS_NODE_TYPES.includes(node.type)) return unwrapTSNode(node.expression);
	else return node;
}
function isCoreComponent(tag) {
	switch (tag) {
		case "Teleport":
		case "teleport": return TELEPORT;
		case "Suspense":
		case "suspense": return SUSPENSE;
		case "KeepAlive":
		case "keep-alive": return KEEP_ALIVE;
		case "BaseTransition":
		case "base-transition": return BASE_TRANSITION;
	}
}
function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
	return advancePositionWithMutation({
		offset: pos.offset,
		line: pos.line,
		column: pos.column
	}, source, numberOfCharacters);
}
function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
	let linesCount = 0;
	let lastNewLinePos = -1;
	for (let i = 0; i < numberOfCharacters; i++) if (source.charCodeAt(i) === 10) {
		linesCount++;
		lastNewLinePos = i;
	}
	pos.offset += numberOfCharacters;
	pos.line += linesCount;
	pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
	return pos;
}
function assert(condition, msg) {
	if (!condition) throw new Error(msg || `unexpected compiler condition`);
}
function findDir(node, name, allowEmpty = false) {
	for (let i = 0; i < node.props.length; i++) {
		const p = node.props[i];
		if (p.type === 7 && (allowEmpty || p.exp) && (isString(name) ? p.name === name : name.test(p.name))) return p;
	}
}
function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
	for (let i = 0; i < node.props.length; i++) {
		const p = node.props[i];
		if (p.type === 6) {
			if (dynamicOnly) continue;
			if (p.name === name && (p.value || allowEmpty)) return p;
		} else if (p.name === "bind" && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) return p;
	}
}
function isStaticArgOf(arg, name) {
	return !!(arg && isStaticExp(arg) && arg.content === name);
}
function hasDynamicKeyVBind(node) {
	return node.props.some((p) => p.type === 7 && p.name === "bind" && (!p.arg || p.arg.type !== 4 || !p.arg.isStatic));
}
function isText$1(node) {
	return node.type === 5 || node.type === 2;
}
function isVSlot(p) {
	return p.type === 7 && p.name === "slot";
}
function isTemplateNode(node) {
	return node.type === 1 && node.tagType === 3;
}
function isSlotOutlet(node) {
	return node.type === 1 && node.tagType === 2;
}
function getUnnormalizedProps(props, callPath = []) {
	if (props && !isString(props) && props.type === 14) {
		const callee = props.callee;
		if (!isString(callee) && propsHelperSet.has(callee)) return getUnnormalizedProps(props.arguments[0], callPath.concat(props));
	}
	return [props, callPath];
}
function injectProp(node, prop, context) {
	let propsWithInjection;
	let props = node.type === 13 ? node.props : node.arguments[2];
	let callPath = [];
	let parentCall;
	if (props && !isString(props) && props.type === 14) {
		const ret = getUnnormalizedProps(props);
		props = ret[0];
		callPath = ret[1];
		parentCall = callPath[callPath.length - 1];
	}
	if (props == null || isString(props)) propsWithInjection = createObjectExpression([prop]);
	else if (props.type === 14) {
		const first = props.arguments[0];
		if (!isString(first) && first.type === 15) {
			if (!hasProp(prop, first)) first.properties.unshift(prop);
		} else if (props.callee === TO_HANDLERS) propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
		else props.arguments.unshift(createObjectExpression([prop]));
		!propsWithInjection && (propsWithInjection = props);
	} else if (props.type === 15) {
		if (!hasProp(prop, props)) props.properties.unshift(prop);
		propsWithInjection = props;
	} else {
		propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
		if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) parentCall = callPath[callPath.length - 2];
	}
	if (node.type === 13) {
		if (parentCall) parentCall.arguments[0] = propsWithInjection;
		else node.props = propsWithInjection;
	} else if (parentCall) parentCall.arguments[0] = propsWithInjection;
	else node.arguments[2] = propsWithInjection;
}
function hasProp(prop, props) {
	let result = false;
	if (prop.key.type === 4) {
		const propKeyName = prop.key.content;
		result = props.properties.some((p) => p.key.type === 4 && p.key.content === propKeyName);
	}
	return result;
}
function toValidAssetId(name, type) {
	return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
		return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
	})}`;
}
function hasScopeRef(node, ids) {
	if (!node || Object.keys(ids).length === 0) return false;
	switch (node.type) {
		case 1:
			for (let i = 0; i < node.props.length; i++) {
				const p = node.props[i];
				if (p.type === 7 && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) return true;
			}
			return node.children.some((c) => hasScopeRef(c, ids));
		case 11:
			if (hasScopeRef(node.source, ids)) return true;
			return node.children.some((c) => hasScopeRef(c, ids));
		case 9: return node.branches.some((b) => hasScopeRef(b, ids));
		case 10:
			if (hasScopeRef(node.condition, ids)) return true;
			return node.children.some((c) => hasScopeRef(c, ids));
		case 4: return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];
		case 8: return node.children.some((c) => isObject(c) && hasScopeRef(c, ids));
		case 5:
		case 12: return hasScopeRef(node.content, ids);
		case 2:
		case 3:
		case 20: return false;
		default: return false;
	}
}
function getMemoedVNodeCall(node) {
	if (node.type === 14 && node.callee === WITH_MEMO) return node.arguments[1].returns;
	else return node;
}
function parseForExpression(input) {
	const loc = input.loc;
	const exp = input.content;
	const inMatch = exp.match(forAliasRE);
	if (!inMatch) return;
	const [, LHS, RHS] = inMatch;
	const createAliasExpression = (content, offset, asParam = false) => {
		const start = loc.start.offset + offset;
		return createExp(content, false, getLoc(start, start + content.length), 0, asParam ? 1 : 0);
	};
	const result = {
		source: createAliasExpression(RHS.trim(), exp.indexOf(RHS, LHS.length)),
		value: void 0,
		key: void 0,
		index: void 0,
		finalized: false
	};
	let valueContent = LHS.trim().replace(stripParensRE, "").trim();
	const trimmedOffset = LHS.indexOf(valueContent);
	const iteratorMatch = valueContent.match(forIteratorRE);
	if (iteratorMatch) {
		valueContent = valueContent.replace(forIteratorRE, "").trim();
		const keyContent = iteratorMatch[1].trim();
		let keyOffset;
		if (keyContent) {
			keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
			result.key = createAliasExpression(keyContent, keyOffset, true);
		}
		if (iteratorMatch[2]) {
			const indexContent = iteratorMatch[2].trim();
			if (indexContent) result.index = createAliasExpression(indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length), true);
		}
	}
	if (valueContent) result.value = createAliasExpression(valueContent, trimmedOffset, true);
	return result;
}
function getSlice(start, end) {
	return currentInput.slice(start, end);
}
function endOpenTag(end) {
	if (tokenizer.inSFCRoot) currentOpenTag.innerLoc = getLoc(end + 1, end + 1);
	addNode(currentOpenTag);
	const { tag, ns } = currentOpenTag;
	if (ns === 0 && currentOptions.isPreTag(tag)) inPre++;
	if (currentOptions.isVoidTag(tag)) onCloseTag(currentOpenTag, end);
	else {
		stack.unshift(currentOpenTag);
		if (ns === 1 || ns === 2) tokenizer.inXML = true;
	}
	currentOpenTag = null;
}
function onText(content, start, end) {
	{
		const tag = stack[0] && stack[0].tag;
		if (tag !== "script" && tag !== "style" && content.includes("&")) content = currentOptions.decodeEntities(content, false);
	}
	const parent = stack[0] || currentRoot;
	const lastNode = parent.children[parent.children.length - 1];
	if (lastNode && lastNode.type === 2) {
		lastNode.content += content;
		setLocEnd(lastNode.loc, end);
	} else parent.children.push({
		type: 2,
		content,
		loc: getLoc(start, end)
	});
}
function onCloseTag(el, end, isImplied = false) {
	if (isImplied) setLocEnd(el.loc, backTrack(end, 60));
	else setLocEnd(el.loc, lookAhead(end, 62) + 1);
	if (tokenizer.inSFCRoot) {
		if (el.children.length) el.innerLoc.end = extend$1({}, el.children[el.children.length - 1].loc.end);
		else el.innerLoc.end = extend$1({}, el.innerLoc.start);
		el.innerLoc.source = getSlice(el.innerLoc.start.offset, el.innerLoc.end.offset);
	}
	const { tag, ns, children } = el;
	if (!inVPre) {
		if (tag === "slot") el.tagType = 2;
		else if (isFragmentTemplate(el)) el.tagType = 3;
		else if (isComponent(el)) el.tagType = 1;
	}
	if (!tokenizer.inRCDATA) el.children = condenseWhitespace(children);
	if (ns === 0 && currentOptions.isIgnoreNewlineTag(tag)) {
		const first = children[0];
		if (first && first.type === 2) first.content = first.content.replace(/^\r?\n/, "");
	}
	if (ns === 0 && currentOptions.isPreTag(tag)) inPre--;
	if (currentVPreBoundary === el) {
		inVPre = tokenizer.inVPre = false;
		currentVPreBoundary = null;
	}
	if (tokenizer.inXML && (stack[0] ? stack[0].ns : currentOptions.ns) === 0) tokenizer.inXML = false;
	{
		const props = el.props;
		if (!tokenizer.inSFCRoot && isCompatEnabled("COMPILER_NATIVE_TEMPLATE", currentOptions) && el.tag === "template" && !isFragmentTemplate(el)) {
			const parent = stack[0] || currentRoot;
			const index = parent.children.indexOf(el);
			parent.children.splice(index, 1, ...el.children);
		}
		const inlineTemplateProp = props.find((p) => p.type === 6 && p.name === "inline-template");
		if (inlineTemplateProp && checkCompatEnabled("COMPILER_INLINE_TEMPLATE", currentOptions, inlineTemplateProp.loc) && el.children.length) inlineTemplateProp.value = {
			type: 2,
			content: getSlice(el.children[0].loc.start.offset, el.children[el.children.length - 1].loc.end.offset),
			loc: inlineTemplateProp.loc
		};
	}
}
function lookAhead(index, c) {
	let i = index;
	while (currentInput.charCodeAt(i) !== c && i < currentInput.length - 1) i++;
	return i;
}
function backTrack(index, c) {
	let i = index;
	while (currentInput.charCodeAt(i) !== c && i >= 0) i--;
	return i;
}
function isFragmentTemplate({ tag, props }) {
	if (tag === "template") {
		for (let i = 0; i < props.length; i++) if (props[i].type === 7 && specialTemplateDir.has(props[i].name)) return true;
	}
	return false;
}
function isComponent({ tag, props }) {
	if (currentOptions.isCustomElement(tag)) return false;
	if (tag === "component" || isUpperCase(tag.charCodeAt(0)) || isCoreComponent(tag) || currentOptions.isBuiltInComponent && currentOptions.isBuiltInComponent(tag) || currentOptions.isNativeTag && !currentOptions.isNativeTag(tag)) return true;
	for (let i = 0; i < props.length; i++) {
		const p = props[i];
		if (p.type === 6) {
			if (p.name === "is" && p.value) {
				if (p.value.content.startsWith("vue:")) return true;
				else if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT", currentOptions, p.loc)) return true;
			}
		} else if (p.name === "bind" && isStaticArgOf(p.arg, "is") && checkCompatEnabled("COMPILER_IS_ON_ELEMENT", currentOptions, p.loc)) return true;
	}
	return false;
}
function isUpperCase(c) {
	return c > 64 && c < 91;
}
function condenseWhitespace(nodes, tag) {
	const shouldCondense = currentOptions.whitespace !== "preserve";
	let removedWhitespace = false;
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i];
		if (node.type === 2) {
			if (!inPre) {
				if (isAllWhitespace(node.content)) {
					const prev = nodes[i - 1] && nodes[i - 1].type;
					const next = nodes[i + 1] && nodes[i + 1].type;
					if (!prev || !next || shouldCondense && (prev === 3 && (next === 3 || next === 1) || prev === 1 && (next === 3 || next === 1 && hasNewlineChar(node.content)))) {
						removedWhitespace = true;
						nodes[i] = null;
					} else node.content = " ";
				} else if (shouldCondense) node.content = condense(node.content);
			} else node.content = node.content.replace(windowsNewlineRE, "\n");
		}
	}
	return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function isAllWhitespace(str) {
	for (let i = 0; i < str.length; i++) if (!isWhitespace(str.charCodeAt(i))) return false;
	return true;
}
function hasNewlineChar(str) {
	for (let i = 0; i < str.length; i++) {
		const c = str.charCodeAt(i);
		if (c === 10 || c === 13) return true;
	}
	return false;
}
function condense(str) {
	let ret = "";
	let prevCharIsWhitespace = false;
	for (let i = 0; i < str.length; i++) if (isWhitespace(str.charCodeAt(i))) {
		if (!prevCharIsWhitespace) {
			ret += " ";
			prevCharIsWhitespace = true;
		}
	} else {
		ret += str[i];
		prevCharIsWhitespace = false;
	}
	return ret;
}
function addNode(node) {
	(stack[0] || currentRoot).children.push(node);
}
function getLoc(start, end) {
	return {
		start: tokenizer.getPos(start),
		end: end == null ? end : tokenizer.getPos(end),
		source: end == null ? end : getSlice(start, end)
	};
}
function cloneLoc(loc) {
	return getLoc(loc.start.offset, loc.end.offset);
}
function setLocEnd(loc, end) {
	loc.end = tokenizer.getPos(end);
	loc.source = getSlice(loc.start.offset, end);
}
function dirToAttr(dir) {
	const attr = {
		type: 6,
		name: dir.rawName,
		nameLoc: getLoc(dir.loc.start.offset, dir.loc.start.offset + dir.rawName.length),
		value: void 0,
		loc: dir.loc
	};
	if (dir.exp) {
		const loc = dir.exp.loc;
		if (loc.end.offset < dir.loc.end.offset) {
			loc.start.offset--;
			loc.start.column--;
			loc.end.offset++;
			loc.end.column++;
		}
		attr.value = {
			type: 2,
			content: dir.exp.content,
			loc
		};
	}
	return attr;
}
function createExp(content, isStatic = false, loc, constType = 0, parseMode = 0) {
	return createSimpleExpression(content, isStatic, loc, constType);
}
function emitError(code, index, message) {
	currentOptions.onError(createCompilerError(code, getLoc(index, index), void 0, message));
}
function reset() {
	tokenizer.reset();
	currentOpenTag = null;
	currentProp = null;
	currentAttrValue = "";
	currentAttrStartIndex = -1;
	currentAttrEndIndex = -1;
	stack.length = 0;
}
function baseParse(input, options) {
	reset();
	currentInput = input;
	currentOptions = extend$1({}, defaultParserOptions);
	if (options) {
		let key;
		for (key in options) if (options[key] != null) currentOptions[key] = options[key];
	}
	tokenizer.mode = currentOptions.parseMode === "html" ? 1 : currentOptions.parseMode === "sfc" ? 2 : 0;
	tokenizer.inXML = currentOptions.ns === 1 || currentOptions.ns === 2;
	const delimiters = options && options.delimiters;
	if (delimiters) {
		tokenizer.delimiterOpen = toCharCodes(delimiters[0]);
		tokenizer.delimiterClose = toCharCodes(delimiters[1]);
	}
	const root = currentRoot = createRoot([], input);
	tokenizer.parse(currentInput);
	root.loc = getLoc(0, input.length);
	root.children = condenseWhitespace(root.children);
	currentRoot = null;
	return root;
}
function cacheStatic(root, context) {
	walk(root, void 0, context, isSingleElementRoot(root, root.children[0]));
}
function isSingleElementRoot(root, child) {
	const { children } = root;
	return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
}
function walk(node, parent, context, doNotHoistNode = false, inFor = false) {
	const { children } = node;
	const toCache = [];
	for (let i = 0; i < children.length; i++) {
		const child = children[i];
		if (child.type === 1 && child.tagType === 0) {
			const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
			if (constantType > 0) {
				if (constantType >= 2) {
					child.codegenNode.patchFlag = -1;
					toCache.push(child);
					continue;
				}
			} else {
				const codegenNode = child.codegenNode;
				if (codegenNode.type === 13) {
					const flag = codegenNode.patchFlag;
					if ((flag === void 0 || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
						const props = getNodeProps(child);
						if (props) codegenNode.props = context.hoist(props);
					}
					if (codegenNode.dynamicProps) codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
				}
			}
		} else if (child.type === 12) {
			if ((doNotHoistNode ? 0 : getConstantType(child, context)) >= 2) {
				toCache.push(child);
				continue;
			}
		}
		if (child.type === 1) {
			const isComponent = child.tagType === 1;
			if (isComponent) context.scopes.vSlot++;
			walk(child, node, context, false, inFor);
			if (isComponent) context.scopes.vSlot--;
		} else if (child.type === 11) walk(child, node, context, child.children.length === 1, true);
		else if (child.type === 9) for (let i2 = 0; i2 < child.branches.length; i2++) walk(child.branches[i2], node, context, child.branches[i2].children.length === 1, inFor);
	}
	let cachedAsArray = false;
	if (toCache.length === children.length && node.type === 1) {
		if (node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
			node.codegenNode.children = getCacheExpression(createArrayExpression(node.codegenNode.children));
			cachedAsArray = true;
		} else if (node.tagType === 1 && node.codegenNode && node.codegenNode.type === 13 && node.codegenNode.children && !isArray(node.codegenNode.children) && node.codegenNode.children.type === 15) {
			const slot = getSlotNode(node.codegenNode, "default");
			if (slot) {
				slot.returns = getCacheExpression(createArrayExpression(slot.returns));
				cachedAsArray = true;
			}
		} else if (node.tagType === 3 && parent && parent.type === 1 && parent.tagType === 1 && parent.codegenNode && parent.codegenNode.type === 13 && parent.codegenNode.children && !isArray(parent.codegenNode.children) && parent.codegenNode.children.type === 15) {
			const slotName = findDir(node, "slot", true);
			const slot = slotName && slotName.arg && getSlotNode(parent.codegenNode, slotName.arg);
			if (slot) {
				slot.returns = getCacheExpression(createArrayExpression(slot.returns));
				cachedAsArray = true;
			}
		}
	}
	if (!cachedAsArray) for (const child of toCache) child.codegenNode = context.cache(child.codegenNode);
	function getCacheExpression(value) {
		const exp = context.cache(value);
		if (inFor && context.hmr) exp.needArraySpread = true;
		return exp;
	}
	function getSlotNode(node2, name) {
		if (node2.children && !isArray(node2.children) && node2.children.type === 15) {
			const slot = node2.children.properties.find((p) => p.key === name || p.key.content === name);
			return slot && slot.value;
		}
	}
	if (toCache.length && context.transformHoist) context.transformHoist(children, context, node);
}
function getConstantType(node, context) {
	const { constantCache } = context;
	switch (node.type) {
		case 1:
			if (node.tagType !== 0) return 0;
			const cached = constantCache.get(node);
			if (cached !== void 0) return cached;
			const codegenNode = node.codegenNode;
			if (codegenNode.type !== 13) return 0;
			if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject" && node.tag !== "math") return 0;
			if (codegenNode.patchFlag === void 0) {
				let returnType2 = 3;
				const generatedPropsType = getGeneratedPropsConstantType(node, context);
				if (generatedPropsType === 0) {
					constantCache.set(node, 0);
					return 0;
				}
				if (generatedPropsType < returnType2) returnType2 = generatedPropsType;
				for (let i = 0; i < node.children.length; i++) {
					const childType = getConstantType(node.children[i], context);
					if (childType === 0) {
						constantCache.set(node, 0);
						return 0;
					}
					if (childType < returnType2) returnType2 = childType;
				}
				if (returnType2 > 1) for (let i = 0; i < node.props.length; i++) {
					const p = node.props[i];
					if (p.type === 7 && p.name === "bind" && p.exp) {
						const expType = getConstantType(p.exp, context);
						if (expType === 0) {
							constantCache.set(node, 0);
							return 0;
						}
						if (expType < returnType2) returnType2 = expType;
					}
				}
				if (codegenNode.isBlock) {
					for (let i = 0; i < node.props.length; i++) if (node.props[i].type === 7) {
						constantCache.set(node, 0);
						return 0;
					}
					context.removeHelper(OPEN_BLOCK);
					context.removeHelper(getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
					codegenNode.isBlock = false;
					context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
				}
				constantCache.set(node, returnType2);
				return returnType2;
			} else {
				constantCache.set(node, 0);
				return 0;
			}
		case 2:
		case 3: return 3;
		case 9:
		case 11:
		case 10: return 0;
		case 5:
		case 12: return getConstantType(node.content, context);
		case 4: return node.constType;
		case 8:
			let returnType = 3;
			for (let i = 0; i < node.children.length; i++) {
				const child = node.children[i];
				if (isString(child) || isSymbol(child)) continue;
				const childType = getConstantType(child, context);
				if (childType === 0) return 0;
				else if (childType < returnType) returnType = childType;
			}
			return returnType;
		case 20: return 2;
		default: return 0;
	}
}
function getConstantTypeOfHelperCall(value, context) {
	if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
		const arg = value.arguments[0];
		if (arg.type === 4) return getConstantType(arg, context);
		else if (arg.type === 14) return getConstantTypeOfHelperCall(arg, context);
	}
	return 0;
}
function getGeneratedPropsConstantType(node, context) {
	let returnType = 3;
	const props = getNodeProps(node);
	if (props && props.type === 15) {
		const { properties } = props;
		for (let i = 0; i < properties.length; i++) {
			const { key, value } = properties[i];
			const keyType = getConstantType(key, context);
			if (keyType === 0) return keyType;
			if (keyType < returnType) returnType = keyType;
			let valueType;
			if (value.type === 4) valueType = getConstantType(value, context);
			else if (value.type === 14) valueType = getConstantTypeOfHelperCall(value, context);
			else valueType = 0;
			if (valueType === 0) return valueType;
			if (valueType < returnType) returnType = valueType;
		}
	}
	return returnType;
}
function getNodeProps(node) {
	const codegenNode = node.codegenNode;
	if (codegenNode.type === 13) return codegenNode.props;
}
function createTransformContext(root, { filename = "", prefixIdentifiers = false, hoistStatic = false, hmr = false, cacheHandlers = false, nodeTransforms = [], directiveTransforms = {}, transformHoist = null, isBuiltInComponent = NOOP, isCustomElement = NOOP, expressionPlugins = [], scopeId = null, slotted = true, ssr = false, inSSR = false, ssrCssVars = ``, bindingMetadata = EMPTY_OBJ, inline = false, isTS = false, onError = defaultOnError, onWarn = defaultOnWarn, compatConfig }) {
	const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
	const context = {
		filename,
		selfName: nameMatch && capitalize(camelize(nameMatch[1])),
		prefixIdentifiers,
		hoistStatic,
		hmr,
		cacheHandlers,
		nodeTransforms,
		directiveTransforms,
		transformHoist,
		isBuiltInComponent,
		isCustomElement,
		expressionPlugins,
		scopeId,
		slotted,
		ssr,
		inSSR,
		ssrCssVars,
		bindingMetadata,
		inline,
		isTS,
		onError,
		onWarn,
		compatConfig,
		root,
		helpers: /* @__PURE__ */ new Map(),
		components: /* @__PURE__ */ new Set(),
		directives: /* @__PURE__ */ new Set(),
		hoists: [],
		imports: [],
		cached: [],
		constantCache: /* @__PURE__ */ new WeakMap(),
		temps: 0,
		identifiers: /* @__PURE__ */ Object.create(null),
		scopes: {
			vFor: 0,
			vSlot: 0,
			vPre: 0,
			vOnce: 0
		},
		parent: null,
		grandParent: null,
		currentNode: root,
		childIndex: 0,
		inVOnce: false,
		helper(name) {
			const count = context.helpers.get(name) || 0;
			context.helpers.set(name, count + 1);
			return name;
		},
		removeHelper(name) {
			const count = context.helpers.get(name);
			if (count) {
				const currentCount = count - 1;
				if (!currentCount) context.helpers.delete(name);
				else context.helpers.set(name, currentCount);
			}
		},
		helperString(name) {
			return `_${helperNameMap[context.helper(name)]}`;
		},
		replaceNode(node) {
			context.parent.children[context.childIndex] = context.currentNode = node;
		},
		removeNode(node) {
			const list = context.parent.children;
			const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
			if (!node || node === context.currentNode) {
				context.currentNode = null;
				context.onNodeRemoved();
			} else if (context.childIndex > removalIndex) {
				context.childIndex--;
				context.onNodeRemoved();
			}
			context.parent.children.splice(removalIndex, 1);
		},
		onNodeRemoved: NOOP,
		addIdentifiers(exp) {},
		removeIdentifiers(exp) {},
		hoist(exp) {
			if (isString(exp)) exp = createSimpleExpression(exp);
			context.hoists.push(exp);
			const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2);
			identifier.hoisted = exp;
			return identifier;
		},
		cache(exp, isVNode = false, inVOnce = false) {
			const cacheExp = createCacheExpression(context.cached.length, exp, isVNode, inVOnce);
			context.cached.push(cacheExp);
			return cacheExp;
		}
	};
	context.filters = /* @__PURE__ */ new Set();
	return context;
}
function transform(root, options) {
	const context = createTransformContext(root, options);
	traverseNode(root, context);
	if (options.hoistStatic) cacheStatic(root, context);
	if (!options.ssr) createRootCodegen(root, context);
	root.helpers = /* @__PURE__ */ new Set([...context.helpers.keys()]);
	root.components = [...context.components];
	root.directives = [...context.directives];
	root.imports = context.imports;
	root.hoists = context.hoists;
	root.temps = context.temps;
	root.cached = context.cached;
	root.transformed = true;
	root.filters = [...context.filters];
}
function createRootCodegen(root, context) {
	const { helper } = context;
	const { children } = root;
	if (children.length === 1) {
		const child = children[0];
		if (isSingleElementRoot(root, child) && child.codegenNode) {
			const codegenNode = child.codegenNode;
			if (codegenNode.type === 13) convertToBlock(codegenNode, context);
			root.codegenNode = codegenNode;
		} else root.codegenNode = child;
	} else if (children.length > 1) root.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, root.children, 64, void 0, void 0, true, void 0, false);
}
function traverseChildren(parent, context) {
	let i = 0;
	const nodeRemoved = () => {
		i--;
	};
	for (; i < parent.children.length; i++) {
		const child = parent.children[i];
		if (isString(child)) continue;
		context.grandParent = context.parent;
		context.parent = parent;
		context.childIndex = i;
		context.onNodeRemoved = nodeRemoved;
		traverseNode(child, context);
	}
}
function traverseNode(node, context) {
	context.currentNode = node;
	const { nodeTransforms } = context;
	const exitFns = [];
	for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
		const onExit = nodeTransforms[i2](node, context);
		if (onExit) {
			if (isArray(onExit)) exitFns.push(...onExit);
			else exitFns.push(onExit);
		}
		if (!context.currentNode) return;
		else node = context.currentNode;
	}
	switch (node.type) {
		case 3:
			if (!context.ssr) context.helper(CREATE_COMMENT);
			break;
		case 5:
			if (!context.ssr) context.helper(TO_DISPLAY_STRING);
			break;
		case 9:
			for (let i2 = 0; i2 < node.branches.length; i2++) traverseNode(node.branches[i2], context);
			break;
		case 10:
		case 11:
		case 1:
		case 0: traverseChildren(node, context);
	}
	context.currentNode = node;
	let i = exitFns.length;
	while (i--) exitFns[i]();
}
function createStructuralDirectiveTransform(name, fn) {
	const matches = isString(name) ? (n) => n === name : (n) => name.test(n);
	return (node, context) => {
		if (node.type === 1) {
			const { props } = node;
			if (node.tagType === 3 && props.some(isVSlot)) return;
			const exitFns = [];
			for (let i = 0; i < props.length; i++) {
				const prop = props[i];
				if (prop.type === 7 && matches(prop.name)) {
					props.splice(i, 1);
					i--;
					const onExit = fn(node, prop, context);
					if (onExit) exitFns.push(onExit);
				}
			}
			return exitFns;
		}
	};
}
function createCodegenContext(ast, { mode = "function", prefixIdentifiers = mode === "module", sourceMap = false, filename = `template.vue.html`, scopeId = null, optimizeImports = false, runtimeGlobalName = `Vue`, runtimeModuleName = `vue`, ssrRuntimeModuleName = "vue/server-renderer", ssr = false, isTS = false, inSSR = false }) {
	const context = {
		mode,
		prefixIdentifiers,
		sourceMap,
		filename,
		scopeId,
		optimizeImports,
		runtimeGlobalName,
		runtimeModuleName,
		ssrRuntimeModuleName,
		ssr,
		isTS,
		inSSR,
		source: ast.source,
		code: ``,
		column: 1,
		line: 1,
		offset: 0,
		indentLevel: 0,
		pure: false,
		map: void 0,
		helper(key) {
			return `_${helperNameMap[key]}`;
		},
		push(code, newlineIndex = -2, node) {
			context.code += code;
		},
		indent() {
			newline(++context.indentLevel);
		},
		deindent(withoutNewLine = false) {
			if (withoutNewLine) --context.indentLevel;
			else newline(--context.indentLevel);
		},
		newline() {
			newline(context.indentLevel);
		}
	};
	function newline(n) {
		context.push("\n" + `  `.repeat(n), 0);
	}
	return context;
}
function generate(ast, options = {}) {
	const context = createCodegenContext(ast, options);
	if (options.onContextCreated) options.onContextCreated(context);
	const { mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr } = context;
	const helpers = Array.from(ast.helpers);
	const hasHelpers = helpers.length > 0;
	const useWithBlock = !prefixIdentifiers && mode !== "module";
	genFunctionPreamble(ast, context);
	push(`function ${ssr ? `ssrRender` : `render`}(${(ssr ? [
		"_ctx",
		"_push",
		"_parent",
		"_attrs"
	] : ["_ctx", "_cache"]).join(", ")}) {`);
	indent();
	if (useWithBlock) {
		push(`with (_ctx) {`);
		indent();
		if (hasHelpers) {
			push(`const { ${helpers.map(aliasHelper).join(", ")} } = _Vue
`, -1);
			newline();
		}
	}
	if (ast.components.length) {
		genAssets(ast.components, "component", context);
		if (ast.directives.length || ast.temps > 0) newline();
	}
	if (ast.directives.length) {
		genAssets(ast.directives, "directive", context);
		if (ast.temps > 0) newline();
	}
	if (ast.filters && ast.filters.length) {
		newline();
		genAssets(ast.filters, "filter", context);
		newline();
	}
	if (ast.temps > 0) {
		push(`let `);
		for (let i = 0; i < ast.temps; i++) push(`${i > 0 ? `, ` : ``}_temp${i}`);
	}
	if (ast.components.length || ast.directives.length || ast.temps) {
		push(`
`, 0);
		newline();
	}
	if (!ssr) push(`return `);
	if (ast.codegenNode) genNode(ast.codegenNode, context);
	else push(`null`);
	if (useWithBlock) {
		deindent();
		push(`}`);
	}
	deindent();
	push(`}`);
	return {
		ast,
		code: context.code,
		preamble: ``,
		map: context.map ? context.map.toJSON() : void 0
	};
}
function genFunctionPreamble(ast, context) {
	const { ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName, ssrRuntimeModuleName } = context;
	const VueBinding = runtimeGlobalName;
	const helpers = Array.from(ast.helpers);
	if (helpers.length > 0) {
		push(`const _Vue = ${VueBinding}
`, -1);
		if (ast.hoists.length) push(`const { ${[
			CREATE_VNODE,
			CREATE_ELEMENT_VNODE,
			CREATE_COMMENT,
			CREATE_TEXT,
			CREATE_STATIC
		].filter((helper) => helpers.includes(helper)).map(aliasHelper).join(", ")} } = _Vue
`, -1);
	}
	genHoists(ast.hoists, context);
	newline();
	push(`return `);
}
function genAssets(assets, type, { helper, push, newline, isTS }) {
	const resolver = helper(type === "filter" ? RESOLVE_FILTER : type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);
	for (let i = 0; i < assets.length; i++) {
		let id = assets[i];
		const maybeSelfReference = id.endsWith("__self");
		if (maybeSelfReference) id = id.slice(0, -6);
		push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`);
		if (i < assets.length - 1) newline();
	}
}
function genHoists(hoists, context) {
	if (!hoists.length) return;
	context.pure = true;
	const { push, newline } = context;
	newline();
	for (let i = 0; i < hoists.length; i++) {
		const exp = hoists[i];
		if (exp) {
			push(`const _hoisted_${i + 1} = `);
			genNode(exp, context);
			newline();
		}
	}
	context.pure = false;
}
function genNodeListAsArray(nodes, context) {
	const multilines = nodes.length > 3 || false;
	context.push(`[`);
	multilines && context.indent();
	genNodeList(nodes, context, multilines);
	multilines && context.deindent();
	context.push(`]`);
}
function genNodeList(nodes, context, multilines = false, comma = true) {
	const { push, newline } = context;
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i];
		if (isString(node)) push(node, -3);
		else if (isArray(node)) genNodeListAsArray(node, context);
		else genNode(node, context);
		if (i < nodes.length - 1) {
			if (multilines) {
				comma && push(",");
				newline();
			} else comma && push(", ");
		}
	}
}
function genNode(node, context) {
	if (isString(node)) {
		context.push(node, -3);
		return;
	}
	if (isSymbol(node)) {
		context.push(context.helper(node));
		return;
	}
	switch (node.type) {
		case 1:
		case 9:
		case 11:
			genNode(node.codegenNode, context);
			break;
		case 2:
			genText(node, context);
			break;
		case 4:
			genExpression(node, context);
			break;
		case 5:
			genInterpolation(node, context);
			break;
		case 12:
			genNode(node.codegenNode, context);
			break;
		case 8:
			genCompoundExpression(node, context);
			break;
		case 3:
			genComment(node, context);
			break;
		case 13:
			genVNodeCall(node, context);
			break;
		case 14:
			genCallExpression(node, context);
			break;
		case 15:
			genObjectExpression(node, context);
			break;
		case 17:
			genArrayExpression(node, context);
			break;
		case 18:
			genFunctionExpression(node, context);
			break;
		case 19:
			genConditionalExpression(node, context);
			break;
		case 20:
			genCacheExpression(node, context);
			break;
		case 21: genNodeList(node.body, context, true, false);
	}
}
function genText(node, context) {
	context.push(JSON.stringify(node.content), -3, node);
}
function genExpression(node, context) {
	const { content, isStatic } = node;
	context.push(isStatic ? JSON.stringify(content) : content, -3, node);
}
function genInterpolation(node, context) {
	const { push, helper, pure } = context;
	if (pure) push(PURE_ANNOTATION);
	push(`${helper(TO_DISPLAY_STRING)}(`);
	genNode(node.content, context);
	push(`)`);
}
function genCompoundExpression(node, context) {
	for (let i = 0; i < node.children.length; i++) {
		const child = node.children[i];
		if (isString(child)) context.push(child, -3);
		else genNode(child, context);
	}
}
function genExpressionAsPropertyKey(node, context) {
	const { push } = context;
	if (node.type === 8) {
		push(`[`);
		genCompoundExpression(node, context);
		push(`]`);
	} else if (node.isStatic) push(isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content), -2, node);
	else push(`[${node.content}]`, -3, node);
}
function genComment(node, context) {
	const { push, helper, pure } = context;
	if (pure) push(PURE_ANNOTATION);
	push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, -3, node);
}
function genVNodeCall(node, context) {
	const { push, helper, pure } = context;
	const { tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking, isComponent } = node;
	let patchFlagString;
	if (patchFlag) patchFlagString = String(patchFlag);
	if (directives) push(helper(WITH_DIRECTIVES) + `(`);
	if (isBlock) push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
	if (pure) push(PURE_ANNOTATION);
	push(helper(isBlock ? getVNodeBlockHelper(context.inSSR, isComponent) : getVNodeHelper(context.inSSR, isComponent)) + `(`, -2, node);
	genNodeList(genNullableArgs([
		tag,
		props,
		children,
		patchFlagString,
		dynamicProps
	]), context);
	push(`)`);
	if (isBlock) push(`)`);
	if (directives) {
		push(`, `);
		genNode(directives, context);
		push(`)`);
	}
}
function genNullableArgs(args) {
	let i = args.length;
	while (i--) if (args[i] != null) break;
	return args.slice(0, i + 1).map((arg) => arg || `null`);
}
function genCallExpression(node, context) {
	const { push, helper, pure } = context;
	const callee = isString(node.callee) ? node.callee : helper(node.callee);
	if (pure) push(PURE_ANNOTATION);
	push(callee + `(`, -2, node);
	genNodeList(node.arguments, context);
	push(`)`);
}
function genObjectExpression(node, context) {
	const { push, indent, deindent, newline } = context;
	const { properties } = node;
	if (!properties.length) {
		push(`{}`, -2, node);
		return;
	}
	const multilines = properties.length > 1 || false;
	push(multilines ? `{` : `{ `);
	multilines && indent();
	for (let i = 0; i < properties.length; i++) {
		const { key, value } = properties[i];
		genExpressionAsPropertyKey(key, context);
		push(`: `);
		genNode(value, context);
		if (i < properties.length - 1) {
			push(`,`);
			newline();
		}
	}
	multilines && deindent();
	push(multilines ? `}` : ` }`);
}
function genArrayExpression(node, context) {
	genNodeListAsArray(node.elements, context);
}
function genFunctionExpression(node, context) {
	const { push, indent, deindent } = context;
	const { params, returns, body, newline, isSlot } = node;
	if (isSlot) push(`_${helperNameMap[WITH_CTX]}(`);
	push(`(`, -2, node);
	if (isArray(params)) genNodeList(params, context);
	else if (params) genNode(params, context);
	push(`) => `);
	if (newline || body) {
		push(`{`);
		indent();
	}
	if (returns) {
		if (newline) push(`return `);
		if (isArray(returns)) genNodeListAsArray(returns, context);
		else genNode(returns, context);
	} else if (body) genNode(body, context);
	if (newline || body) {
		deindent();
		push(`}`);
	}
	if (isSlot) {
		if (node.isNonScopedSlot) push(`, undefined, true`);
		push(`)`);
	}
}
function genConditionalExpression(node, context) {
	const { test, consequent, alternate, newline: needNewline } = node;
	const { push, indent, deindent, newline } = context;
	if (test.type === 4) {
		const needsParens = !isSimpleIdentifier(test.content);
		needsParens && push(`(`);
		genExpression(test, context);
		needsParens && push(`)`);
	} else {
		push(`(`);
		genNode(test, context);
		push(`)`);
	}
	needNewline && indent();
	context.indentLevel++;
	needNewline || push(` `);
	push(`? `);
	genNode(consequent, context);
	context.indentLevel--;
	needNewline && newline();
	needNewline || push(` `);
	push(`: `);
	const isNested = alternate.type === 19;
	if (!isNested) context.indentLevel++;
	genNode(alternate, context);
	if (!isNested) context.indentLevel--;
	needNewline && deindent(true);
}
function genCacheExpression(node, context) {
	const { push, helper, indent, deindent, newline } = context;
	const { needPauseTracking, needArraySpread } = node;
	if (needArraySpread) push(`[...(`);
	push(`_cache[${node.index}] || (`);
	if (needPauseTracking) {
		indent();
		push(`${helper(SET_BLOCK_TRACKING)}(-1`);
		if (node.inVOnce) push(`, true`);
		push(`),`);
		newline();
		push(`(`);
	}
	push(`_cache[${node.index}] = `);
	genNode(node.value, context);
	if (needPauseTracking) {
		push(`).cacheIndex = ${node.index},`);
		newline();
		push(`${helper(SET_BLOCK_TRACKING)}(1),`);
		newline();
		push(`_cache[${node.index}]`);
		deindent();
	}
	push(`)`);
	if (needArraySpread) push(`)]`);
}
function processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
	return node;
}
function stringifyExpression(exp) {
	if (isString(exp)) return exp;
	else if (exp.type === 4) return exp.content;
	else return exp.children.map(stringifyExpression).join("");
}
function processIf(node, dir, context, processCodegen) {
	if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
		const loc = dir.exp ? dir.exp.loc : node.loc;
		context.onError(createCompilerError(28, dir.loc));
		dir.exp = createSimpleExpression(`true`, false, loc);
	}
	if (dir.name === "if") {
		const branch = createIfBranch(node, dir);
		const ifNode = {
			type: 9,
			loc: cloneLoc(node.loc),
			branches: [branch]
		};
		context.replaceNode(ifNode);
		if (processCodegen) return processCodegen(ifNode, branch, true);
	} else {
		const siblings = context.parent.children;
		let i = siblings.indexOf(node);
		while (i-- >= -1) {
			const sibling = siblings[i];
			if (sibling && sibling.type === 3) {
				context.removeNode(sibling);
				continue;
			}
			if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
				context.removeNode(sibling);
				continue;
			}
			if (sibling && sibling.type === 9) {
				if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) context.onError(createCompilerError(30, node.loc));
				context.removeNode();
				const branch = createIfBranch(node, dir);
				sibling.branches.push(branch);
				const onExit = processCodegen && processCodegen(sibling, branch, false);
				traverseNode(branch, context);
				if (onExit) onExit();
				context.currentNode = null;
			} else context.onError(createCompilerError(30, node.loc));
			break;
		}
	}
}
function createIfBranch(node, dir) {
	const isTemplateIf = node.tagType === 3;
	return {
		type: 10,
		loc: node.loc,
		condition: dir.name === "else" ? void 0 : dir.exp,
		children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
		userKey: findProp(node, `key`),
		isTemplateIf
	};
}
function createCodegenNodeForBranch(branch, keyIndex, context) {
	if (branch.condition) return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), createCallExpression(context.helper(CREATE_COMMENT), ["\"\"", "true"]));
	else return createChildrenCodegenNode(branch, keyIndex, context);
}
function createChildrenCodegenNode(branch, keyIndex, context) {
	const { helper } = context;
	const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, 2));
	const { children } = branch;
	const firstChild = children[0];
	if (children.length !== 1 || firstChild.type !== 1) {
		if (children.length === 1 && firstChild.type === 11) {
			const vnodeCall = firstChild.codegenNode;
			injectProp(vnodeCall, keyProperty, context);
			return vnodeCall;
		} else return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, 64, void 0, void 0, true, false, false, branch.loc);
	} else {
		const ret = firstChild.codegenNode;
		const vnodeCall = getMemoedVNodeCall(ret);
		if (vnodeCall.type === 13) convertToBlock(vnodeCall, context);
		injectProp(vnodeCall, keyProperty, context);
		return ret;
	}
}
function getParentCondition(node) {
	while (true) if (node.type === 19) {
		if (node.alternate.type === 19) node = node.alternate;
		else return node;
	} else if (node.type === 20) node = node.value;
}
function processFor(node, dir, context, processCodegen) {
	if (!dir.exp) {
		context.onError(createCompilerError(31, dir.loc));
		return;
	}
	const parseResult = dir.forParseResult;
	if (!parseResult) {
		context.onError(createCompilerError(32, dir.loc));
		return;
	}
	finalizeForParseResult(parseResult, context);
	const { addIdentifiers, removeIdentifiers, scopes } = context;
	const { source, value, key, index } = parseResult;
	const forNode = {
		type: 11,
		loc: dir.loc,
		source,
		valueAlias: value,
		keyAlias: key,
		objectIndexAlias: index,
		parseResult,
		children: isTemplateNode(node) ? node.children : [node]
	};
	context.replaceNode(forNode);
	scopes.vFor++;
	const onExit = processCodegen && processCodegen(forNode);
	return () => {
		scopes.vFor--;
		if (onExit) onExit();
	};
}
function finalizeForParseResult(result, context) {
	if (result.finalized) return;
	result.finalized = true;
}
function createForLoopParams({ value, key, index }, memoArgs = []) {
	return createParamsList([
		value,
		key,
		index,
		...memoArgs
	]);
}
function createParamsList(args) {
	let i = args.length;
	while (i--) if (args[i]) break;
	return args.slice(0, i + 1).map((arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false));
}
function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
	context.helper(WITH_CTX);
	const { children, loc } = node;
	const slotsProperties = [];
	const dynamicSlots = [];
	let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
	const onComponentSlot = findDir(node, "slot", true);
	if (onComponentSlot) {
		const { arg, exp } = onComponentSlot;
		if (arg && !isStaticExp(arg)) hasDynamicSlots = true;
		slotsProperties.push(createObjectProperty(arg || createSimpleExpression("default", true), buildSlotFn(exp, void 0, children, loc)));
	}
	let hasTemplateSlots = false;
	let hasNamedDefaultSlot = false;
	const implicitDefaultChildren = [];
	const seenSlotNames = /* @__PURE__ */ new Set();
	let conditionalBranchIndex = 0;
	for (let i = 0; i < children.length; i++) {
		const slotElement = children[i];
		let slotDir;
		if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
			if (slotElement.type !== 3) implicitDefaultChildren.push(slotElement);
			continue;
		}
		if (onComponentSlot) {
			context.onError(createCompilerError(37, slotDir.loc));
			break;
		}
		hasTemplateSlots = true;
		const { children: slotChildren, loc: slotLoc } = slotElement;
		const { arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc } = slotDir;
		let staticSlotName;
		if (isStaticExp(slotName)) staticSlotName = slotName ? slotName.content : `default`;
		else hasDynamicSlots = true;
		const vFor = findDir(slotElement, "for");
		const slotFunction = buildSlotFn(slotProps, vFor, slotChildren, slotLoc);
		let vIf;
		let vElse;
		if (vIf = findDir(slotElement, "if")) {
			hasDynamicSlots = true;
			dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback));
		} else if (vElse = findDir(slotElement, /^else(-if)?$/, true)) {
			let j = i;
			let prev;
			while (j--) {
				prev = children[j];
				if (prev.type !== 3) break;
			}
			if (prev && isTemplateNode(prev) && findDir(prev, /^(else-)?if$/)) {
				let conditional = dynamicSlots[dynamicSlots.length - 1];
				while (conditional.alternate.type === 19) conditional = conditional.alternate;
				conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
			} else context.onError(createCompilerError(30, vElse.loc));
		} else if (vFor) {
			hasDynamicSlots = true;
			const parseResult = vFor.forParseResult;
			if (parseResult) {
				finalizeForParseResult(parseResult, context);
				dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [parseResult.source, createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true)]));
			} else context.onError(createCompilerError(32, vFor.loc));
		} else {
			if (staticSlotName) {
				if (seenSlotNames.has(staticSlotName)) {
					context.onError(createCompilerError(38, dirLoc));
					continue;
				}
				seenSlotNames.add(staticSlotName);
				if (staticSlotName === "default") hasNamedDefaultSlot = true;
			}
			slotsProperties.push(createObjectProperty(slotName, slotFunction));
		}
	}
	if (!onComponentSlot) {
		const buildDefaultSlotProperty = (props, children2) => {
			const fn = buildSlotFn(props, void 0, children2, loc);
			if (context.compatConfig) fn.isNonScopedSlot = true;
			return createObjectProperty(`default`, fn);
		};
		if (!hasTemplateSlots) slotsProperties.push(buildDefaultSlotProperty(void 0, children));
		else if (implicitDefaultChildren.length && implicitDefaultChildren.some((node2) => isNonWhitespaceContent(node2))) {
			if (hasNamedDefaultSlot) context.onError(createCompilerError(39, implicitDefaultChildren[0].loc));
			else slotsProperties.push(buildDefaultSlotProperty(void 0, implicitDefaultChildren));
		}
	}
	const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
	let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(`_`, createSimpleExpression(slotFlag + ``, false))), loc);
	if (dynamicSlots.length) slots = createCallExpression(context.helper(CREATE_SLOTS), [slots, createArrayExpression(dynamicSlots)]);
	return {
		slots,
		hasDynamicSlots
	};
}
function buildDynamicSlot(name, fn, index) {
	const props = [createObjectProperty(`name`, name), createObjectProperty(`fn`, fn)];
	if (index != null) props.push(createObjectProperty(`key`, createSimpleExpression(String(index), true)));
	return createObjectExpression(props);
}
function hasForwardedSlots(children) {
	for (let i = 0; i < children.length; i++) {
		const child = children[i];
		switch (child.type) {
			case 1:
				if (child.tagType === 2 || hasForwardedSlots(child.children)) return true;
				break;
			case 9:
				if (hasForwardedSlots(child.branches)) return true;
				break;
			case 10:
			case 11: if (hasForwardedSlots(child.children)) return true;
		}
	}
	return false;
}
function isNonWhitespaceContent(node) {
	if (node.type !== 2 && node.type !== 12) return true;
	return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
}
function resolveComponentType(node, context, ssr = false) {
	let { tag } = node;
	const isExplicitDynamic = isComponentTag(tag);
	const isProp = findProp(node, "is", false, true);
	if (isProp) {
		if (isExplicitDynamic || isCompatEnabled("COMPILER_IS_ON_ELEMENT", context)) {
			let exp;
			if (isProp.type === 6) exp = isProp.value && createSimpleExpression(isProp.value.content, true);
			else {
				exp = isProp.exp;
				if (!exp) exp = createSimpleExpression(`is`, false, isProp.arg.loc);
			}
			if (exp) return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [exp]);
		} else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) tag = isProp.value.content.slice(4);
	}
	const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
	if (builtIn) {
		if (!ssr) context.helper(builtIn);
		return builtIn;
	}
	context.helper(RESOLVE_COMPONENT);
	context.components.add(tag);
	return toValidAssetId(tag, `component`);
}
function buildProps(node, context, props = node.props, isComponent, isDynamicComponent, ssr = false) {
	const { tag, loc: elementLoc, children } = node;
	let properties = [];
	const mergeArgs = [];
	const runtimeDirectives = [];
	const hasChildren = children.length > 0;
	let shouldUseBlock = false;
	let patchFlag = 0;
	let hasRef = false;
	let hasClassBinding = false;
	let hasStyleBinding = false;
	let hasHydrationEventBinding = false;
	let hasDynamicKeys = false;
	let hasVnodeHook = false;
	const dynamicPropNames = [];
	const pushMergeArg = (arg) => {
		if (properties.length) {
			mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
			properties = [];
		}
		if (arg) mergeArgs.push(arg);
	};
	const pushRefVForMarker = () => {
		if (context.scopes.vFor > 0) properties.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
	};
	const analyzePatchFlag = ({ key, value }) => {
		if (isStaticExp(key)) {
			const name = key.content;
			const isEventHandler = isOn(name);
			if (isEventHandler && (!isComponent || isDynamicComponent) && name.toLowerCase() !== "onclick" && name !== "onUpdate:modelValue" && !isReservedProp(name)) hasHydrationEventBinding = true;
			if (isEventHandler && isReservedProp(name)) hasVnodeHook = true;
			if (isEventHandler && value.type === 14) value = value.arguments[0];
			if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) return;
			if (name === "ref") hasRef = true;
			else if (name === "class") hasClassBinding = true;
			else if (name === "style") hasStyleBinding = true;
			else if (name !== "key" && !dynamicPropNames.includes(name)) dynamicPropNames.push(name);
			if (isComponent && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) dynamicPropNames.push(name);
		} else hasDynamicKeys = true;
	};
	for (let i = 0; i < props.length; i++) {
		const prop = props[i];
		if (prop.type === 6) {
			const { loc, name, nameLoc, value } = prop;
			let isStatic = true;
			if (name === "ref") {
				hasRef = true;
				pushRefVForMarker();
			}
			if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || isCompatEnabled("COMPILER_IS_ON_ELEMENT", context))) continue;
			properties.push(createObjectProperty(createSimpleExpression(name, true, nameLoc), createSimpleExpression(value ? value.content : "", isStatic, value ? value.loc : loc)));
		} else {
			const { name, arg, exp, loc, modifiers } = prop;
			const isVBind = name === "bind";
			const isVOn = name === "on";
			if (name === "slot") {
				if (!isComponent) context.onError(createCompilerError(40, loc));
				continue;
			}
			if (name === "once" || name === "memo") continue;
			if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || isCompatEnabled("COMPILER_IS_ON_ELEMENT", context))) continue;
			if (isVOn && ssr) continue;
			if (isVBind && isStaticArgOf(arg, "key") || isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")) shouldUseBlock = true;
			if (isVBind && isStaticArgOf(arg, "ref")) pushRefVForMarker();
			if (!arg && (isVBind || isVOn)) {
				hasDynamicKeys = true;
				if (exp) {
					if (isVBind) {
						pushRefVForMarker();
						pushMergeArg();
						if (isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER", context)) {
							mergeArgs.unshift(exp);
							continue;
						}
						mergeArgs.push(exp);
					} else pushMergeArg({
						type: 14,
						loc,
						callee: context.helper(TO_HANDLERS),
						arguments: isComponent ? [exp] : [exp, `true`]
					});
				} else context.onError(createCompilerError(isVBind ? 34 : 35, loc));
				continue;
			}
			if (isVBind && modifiers.some((mod) => mod.content === "prop")) patchFlag |= 32;
			const directiveTransform = context.directiveTransforms[name];
			if (directiveTransform) {
				const { props: props2, needRuntime } = directiveTransform(prop, node, context);
				!ssr && props2.forEach(analyzePatchFlag);
				if (isVOn && arg && !isStaticExp(arg)) pushMergeArg(createObjectExpression(props2, elementLoc));
				else properties.push(...props2);
				if (needRuntime) {
					runtimeDirectives.push(prop);
					if (isSymbol(needRuntime)) directiveImportMap.set(prop, needRuntime);
				}
			} else if (!isBuiltInDirective(name)) {
				runtimeDirectives.push(prop);
				if (hasChildren) shouldUseBlock = true;
			}
		}
	}
	let propsExpression = void 0;
	if (mergeArgs.length) {
		pushMergeArg();
		if (mergeArgs.length > 1) propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
		else propsExpression = mergeArgs[0];
	} else if (properties.length) propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
	if (hasDynamicKeys) patchFlag |= 16;
	else {
		if (hasClassBinding && !isComponent) patchFlag |= 2;
		if (hasStyleBinding && !isComponent) patchFlag |= 4;
		if (dynamicPropNames.length) patchFlag |= 8;
		if (hasHydrationEventBinding) patchFlag |= 32;
	}
	if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) patchFlag |= 512;
	if (!context.inSSR && propsExpression) switch (propsExpression.type) {
		case 15:
			let classKeyIndex = -1;
			let styleKeyIndex = -1;
			let hasDynamicKey = false;
			for (let i = 0; i < propsExpression.properties.length; i++) {
				const key = propsExpression.properties[i].key;
				if (isStaticExp(key)) {
					if (key.content === "class") classKeyIndex = i;
					else if (key.content === "style") styleKeyIndex = i;
				} else if (!key.isHandlerKey) hasDynamicKey = true;
			}
			const classProp = propsExpression.properties[classKeyIndex];
			const styleProp = propsExpression.properties[styleKeyIndex];
			if (!hasDynamicKey) {
				if (classProp && !isStaticExp(classProp.value)) classProp.value = createCallExpression(context.helper(NORMALIZE_CLASS), [classProp.value]);
				if (styleProp && (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || styleProp.value.type === 17)) styleProp.value = createCallExpression(context.helper(NORMALIZE_STYLE), [styleProp.value]);
			} else propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [propsExpression]);
			break;
		case 14: break;
		default: propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [propsExpression])]);
	}
	return {
		props: propsExpression,
		directives: runtimeDirectives,
		patchFlag,
		dynamicPropNames,
		shouldUseBlock
	};
}
function dedupeProperties(properties) {
	const knownProps = /* @__PURE__ */ new Map();
	const deduped = [];
	for (let i = 0; i < properties.length; i++) {
		const prop = properties[i];
		if (prop.key.type === 8 || !prop.key.isStatic) {
			deduped.push(prop);
			continue;
		}
		const name = prop.key.content;
		const existing = knownProps.get(name);
		if (existing) {
			if (name === "style" || name === "class" || isOn(name)) mergeAsArray(existing, prop);
		} else {
			knownProps.set(name, prop);
			deduped.push(prop);
		}
	}
	return deduped;
}
function mergeAsArray(existing, incoming) {
	if (existing.value.type === 17) existing.value.elements.push(incoming.value);
	else existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
}
function buildDirectiveArgs(dir, context) {
	const dirArgs = [];
	const runtime = directiveImportMap.get(dir);
	if (runtime) dirArgs.push(context.helperString(runtime));
	else {
		context.helper(RESOLVE_DIRECTIVE);
		context.directives.add(dir.name);
		dirArgs.push(toValidAssetId(dir.name, `directive`));
	}
	const { loc } = dir;
	if (dir.exp) dirArgs.push(dir.exp);
	if (dir.arg) {
		if (!dir.exp) dirArgs.push(`void 0`);
		dirArgs.push(dir.arg);
	}
	if (Object.keys(dir.modifiers).length) {
		if (!dir.arg) {
			if (!dir.exp) dirArgs.push(`void 0`);
			dirArgs.push(`void 0`);
		}
		const trueExpression = createSimpleExpression(`true`, false, loc);
		dirArgs.push(createObjectExpression(dir.modifiers.map((modifier) => createObjectProperty(modifier, trueExpression)), loc));
	}
	return createArrayExpression(dirArgs, dir.loc);
}
function stringifyDynamicPropNames(props) {
	let propsNamesString = `[`;
	for (let i = 0, l = props.length; i < l; i++) {
		propsNamesString += JSON.stringify(props[i]);
		if (i < l - 1) propsNamesString += ", ";
	}
	return propsNamesString + `]`;
}
function isComponentTag(tag) {
	return tag === "component" || tag === "Component";
}
function processSlotOutlet(node, context) {
	let slotName = `"default"`;
	let slotProps = void 0;
	const nonNameProps = [];
	for (let i = 0; i < node.props.length; i++) {
		const p = node.props[i];
		if (p.type === 6) {
			if (p.value) {
				if (p.name === "name") slotName = JSON.stringify(p.value.content);
				else {
					p.name = camelize(p.name);
					nonNameProps.push(p);
				}
			}
		} else if (p.name === "bind" && isStaticArgOf(p.arg, "name")) {
			if (p.exp) slotName = p.exp;
			else if (p.arg && p.arg.type === 4) slotName = p.exp = createSimpleExpression(camelize(p.arg.content), false, p.arg.loc);
		} else {
			if (p.name === "bind" && p.arg && isStaticExp(p.arg)) p.arg.content = camelize(p.arg.content);
			nonNameProps.push(p);
		}
	}
	if (nonNameProps.length > 0) {
		const { props, directives } = buildProps(node, context, nonNameProps, false, false);
		slotProps = props;
		if (directives.length) context.onError(createCompilerError(36, directives[0].loc));
	}
	return {
		slotName,
		slotProps
	};
}
function createTransformProps(props = []) {
	return { props };
}
function rewriteFilter(node, context) {
	if (node.type === 4) parseFilter(node, context);
	else for (let i = 0; i < node.children.length; i++) {
		const child = node.children[i];
		if (typeof child !== "object") continue;
		if (child.type === 4) parseFilter(child, context);
		else if (child.type === 8) rewriteFilter(node, context);
		else if (child.type === 5) rewriteFilter(child.content, context);
	}
}
function parseFilter(node, context) {
	const exp = node.content;
	let inSingle = false;
	let inDouble = false;
	let inTemplateString = false;
	let inRegex = false;
	let curly = 0;
	let square = 0;
	let paren = 0;
	let lastFilterIndex = 0;
	let c, prev, i, expression, filters = [];
	for (i = 0; i < exp.length; i++) {
		prev = c;
		c = exp.charCodeAt(i);
		if (inSingle) {
			if (c === 39 && prev !== 92) inSingle = false;
		} else if (inDouble) {
			if (c === 34 && prev !== 92) inDouble = false;
		} else if (inTemplateString) {
			if (c === 96 && prev !== 92) inTemplateString = false;
		} else if (inRegex) {
			if (c === 47 && prev !== 92) inRegex = false;
		} else if (c === 124 && exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
			if (expression === void 0) {
				lastFilterIndex = i + 1;
				expression = exp.slice(0, i).trim();
			} else pushFilter();
		} else {
			switch (c) {
				case 34:
					inDouble = true;
					break;
				case 39:
					inSingle = true;
					break;
				case 96:
					inTemplateString = true;
					break;
				case 40:
					paren++;
					break;
				case 41:
					paren--;
					break;
				case 91:
					square++;
					break;
				case 93:
					square--;
					break;
				case 123:
					curly++;
					break;
				case 125: curly--;
			}
			if (c === 47) {
				let j = i - 1;
				let p;
				for (; j >= 0; j--) {
					p = exp.charAt(j);
					if (p !== " ") break;
				}
				if (!p || !validDivisionCharRE.test(p)) inRegex = true;
			}
		}
	}
	if (expression === void 0) expression = exp.slice(0, i).trim();
	else if (lastFilterIndex !== 0) pushFilter();
	function pushFilter() {
		filters.push(exp.slice(lastFilterIndex, i).trim());
		lastFilterIndex = i + 1;
	}
	if (filters.length) {
		for (i = 0; i < filters.length; i++) expression = wrapFilter(expression, filters[i], context);
		node.content = expression;
		node.ast = void 0;
	}
}
function wrapFilter(exp, filter, context) {
	context.helper(RESOLVE_FILTER);
	const i = filter.indexOf("(");
	if (i < 0) {
		context.filters.add(filter);
		return `${toValidAssetId(filter, "filter")}(${exp})`;
	} else {
		const name = filter.slice(0, i);
		const args = filter.slice(i + 1);
		context.filters.add(name);
		return `${toValidAssetId(name, "filter")}(${exp}${args !== ")" ? "," + args : args}`;
	}
}
function getBaseTransformPreset(prefixIdentifiers) {
	return [[
		transformOnce,
		transformIf,
		transformMemo,
		transformFor,
		...[transformFilter],
		...[],
		transformSlotOutlet,
		transformElement,
		trackSlotScopes,
		transformText
	], {
		on: transformOn$1,
		bind: transformBind,
		model: transformModel$1
	}];
}
function baseCompile(source, options = {}) {
	const onError = options.onError || defaultOnError;
	const isModuleMode = options.mode === "module";
	if (options.prefixIdentifiers === true) onError(createCompilerError(47));
	else if (isModuleMode) onError(createCompilerError(48));
	const prefixIdentifiers = false;
	if (options.cacheHandlers) onError(createCompilerError(49));
	if (options.scopeId && !isModuleMode) onError(createCompilerError(50));
	const resolvedOptions = extend$1({}, options, { prefixIdentifiers });
	const ast = isString(source) ? baseParse(source, resolvedOptions) : source;
	const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
	transform(ast, extend$1({}, resolvedOptions, {
		nodeTransforms: [...nodeTransforms, ...options.nodeTransforms || []],
		directiveTransforms: extend$1({}, directiveTransforms, options.directiveTransforms || {})
	}));
	return generate(ast, resolvedOptions);
}
var FRAGMENT, TELEPORT, SUSPENSE, KEEP_ALIVE, BASE_TRANSITION, OPEN_BLOCK, CREATE_BLOCK, CREATE_ELEMENT_BLOCK, CREATE_VNODE, CREATE_ELEMENT_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC, RESOLVE_COMPONENT, RESOLVE_DYNAMIC_COMPONENT, RESOLVE_DIRECTIVE, RESOLVE_FILTER, WITH_DIRECTIVES, RENDER_LIST, RENDER_SLOT, CREATE_SLOTS, TO_DISPLAY_STRING, MERGE_PROPS, NORMALIZE_CLASS, NORMALIZE_STYLE, NORMALIZE_PROPS, GUARD_REACTIVE_PROPS, TO_HANDLERS, CAMELIZE, CAPITALIZE, TO_HANDLER_KEY, SET_BLOCK_TRACKING, PUSH_SCOPE_ID, POP_SCOPE_ID, WITH_CTX, UNREF, IS_REF, WITH_MEMO, IS_MEMO_SAME, helperNameMap, Namespaces, NodeTypes, ElementTypes, ConstantTypes, locStub, defaultDelimitersOpen, defaultDelimitersClose, Sequences, Tokenizer, CompilerDeprecationTypes, deprecationData, ErrorCodes, errorMessages, isFunctionType, isStaticProperty, isStaticPropertyKey, TS_NODE_TYPES, isStaticExp, nonIdentifierRE, isSimpleIdentifier, validFirstIdentCharRE, validIdentCharRE, whitespaceRE, getExpSource, isMemberExpressionBrowser, isMemberExpressionNode, isMemberExpression, fnExpRE, isFnExpressionBrowser, isFnExpressionNode, isFnExpression, propsHelperSet, forAliasRE, defaultParserOptions, currentOptions, currentRoot, currentInput, currentOpenTag, currentProp, currentAttrValue, currentAttrStartIndex, currentAttrEndIndex, inPre, inVPre, currentVPreBoundary, stack, tokenizer, forIteratorRE, stripParensRE, specialTemplateDir, windowsNewlineRE, allowHoistedHelperSet, PURE_ANNOTATION, aliasHelper, transformExpression, transformIf, transformBind, transformBindShorthand, injectPrefix, transformFor, defaultFallback, trackSlotScopes, trackVForSlotScopes, buildClientSlotFn, directiveImportMap, transformElement, transformSlotOutlet, transformOn$1, transformText, seen$1, transformOnce, transformModel$1, validDivisionCharRE, transformFilter, seen, transformMemo, BindingTypes, noopDirectiveTransform;
var init_compiler_core_esm_bundler = __esmMin((() => {
	init_shared_esm_bundler();
	FRAGMENT = Symbol(``);
	TELEPORT = Symbol(``);
	SUSPENSE = Symbol(``);
	KEEP_ALIVE = Symbol(``);
	BASE_TRANSITION = Symbol(``);
	OPEN_BLOCK = Symbol(``);
	CREATE_BLOCK = Symbol(``);
	CREATE_ELEMENT_BLOCK = Symbol(``);
	CREATE_VNODE = Symbol(``);
	CREATE_ELEMENT_VNODE = Symbol(``);
	CREATE_COMMENT = Symbol(``);
	CREATE_TEXT = Symbol(``);
	CREATE_STATIC = Symbol(``);
	RESOLVE_COMPONENT = Symbol(``);
	RESOLVE_DYNAMIC_COMPONENT = Symbol(``);
	RESOLVE_DIRECTIVE = Symbol(``);
	RESOLVE_FILTER = Symbol(``);
	WITH_DIRECTIVES = Symbol(``);
	RENDER_LIST = Symbol(``);
	RENDER_SLOT = Symbol(``);
	CREATE_SLOTS = Symbol(``);
	TO_DISPLAY_STRING = Symbol(``);
	MERGE_PROPS = Symbol(``);
	NORMALIZE_CLASS = Symbol(``);
	NORMALIZE_STYLE = Symbol(``);
	NORMALIZE_PROPS = Symbol(``);
	GUARD_REACTIVE_PROPS = Symbol(``);
	TO_HANDLERS = Symbol(``);
	CAMELIZE = Symbol(``);
	CAPITALIZE = Symbol(``);
	TO_HANDLER_KEY = Symbol(``);
	SET_BLOCK_TRACKING = Symbol(``);
	PUSH_SCOPE_ID = Symbol(``);
	POP_SCOPE_ID = Symbol(``);
	WITH_CTX = Symbol(``);
	UNREF = Symbol(``);
	IS_REF = Symbol(``);
	WITH_MEMO = Symbol(``);
	IS_MEMO_SAME = Symbol(``);
	helperNameMap = {
		[FRAGMENT]: `Fragment`,
		[TELEPORT]: `Teleport`,
		[SUSPENSE]: `Suspense`,
		[KEEP_ALIVE]: `KeepAlive`,
		[BASE_TRANSITION]: `BaseTransition`,
		[OPEN_BLOCK]: `openBlock`,
		[CREATE_BLOCK]: `createBlock`,
		[CREATE_ELEMENT_BLOCK]: `createElementBlock`,
		[CREATE_VNODE]: `createVNode`,
		[CREATE_ELEMENT_VNODE]: `createElementVNode`,
		[CREATE_COMMENT]: `createCommentVNode`,
		[CREATE_TEXT]: `createTextVNode`,
		[CREATE_STATIC]: `createStaticVNode`,
		[RESOLVE_COMPONENT]: `resolveComponent`,
		[RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
		[RESOLVE_DIRECTIVE]: `resolveDirective`,
		[RESOLVE_FILTER]: `resolveFilter`,
		[WITH_DIRECTIVES]: `withDirectives`,
		[RENDER_LIST]: `renderList`,
		[RENDER_SLOT]: `renderSlot`,
		[CREATE_SLOTS]: `createSlots`,
		[TO_DISPLAY_STRING]: `toDisplayString`,
		[MERGE_PROPS]: `mergeProps`,
		[NORMALIZE_CLASS]: `normalizeClass`,
		[NORMALIZE_STYLE]: `normalizeStyle`,
		[NORMALIZE_PROPS]: `normalizeProps`,
		[GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
		[TO_HANDLERS]: `toHandlers`,
		[CAMELIZE]: `camelize`,
		[CAPITALIZE]: `capitalize`,
		[TO_HANDLER_KEY]: `toHandlerKey`,
		[SET_BLOCK_TRACKING]: `setBlockTracking`,
		[PUSH_SCOPE_ID]: `pushScopeId`,
		[POP_SCOPE_ID]: `popScopeId`,
		[WITH_CTX]: `withCtx`,
		[UNREF]: `unref`,
		[IS_REF]: `isRef`,
		[WITH_MEMO]: `withMemo`,
		[IS_MEMO_SAME]: `isMemoSame`
	};
	Namespaces = {
		"HTML": 0,
		"0": "HTML",
		"SVG": 1,
		"1": "SVG",
		"MATH_ML": 2,
		"2": "MATH_ML"
	};
	NodeTypes = {
		"ROOT": 0,
		"0": "ROOT",
		"ELEMENT": 1,
		"1": "ELEMENT",
		"TEXT": 2,
		"2": "TEXT",
		"COMMENT": 3,
		"3": "COMMENT",
		"SIMPLE_EXPRESSION": 4,
		"4": "SIMPLE_EXPRESSION",
		"INTERPOLATION": 5,
		"5": "INTERPOLATION",
		"ATTRIBUTE": 6,
		"6": "ATTRIBUTE",
		"DIRECTIVE": 7,
		"7": "DIRECTIVE",
		"COMPOUND_EXPRESSION": 8,
		"8": "COMPOUND_EXPRESSION",
		"IF": 9,
		"9": "IF",
		"IF_BRANCH": 10,
		"10": "IF_BRANCH",
		"FOR": 11,
		"11": "FOR",
		"TEXT_CALL": 12,
		"12": "TEXT_CALL",
		"VNODE_CALL": 13,
		"13": "VNODE_CALL",
		"JS_CALL_EXPRESSION": 14,
		"14": "JS_CALL_EXPRESSION",
		"JS_OBJECT_EXPRESSION": 15,
		"15": "JS_OBJECT_EXPRESSION",
		"JS_PROPERTY": 16,
		"16": "JS_PROPERTY",
		"JS_ARRAY_EXPRESSION": 17,
		"17": "JS_ARRAY_EXPRESSION",
		"JS_FUNCTION_EXPRESSION": 18,
		"18": "JS_FUNCTION_EXPRESSION",
		"JS_CONDITIONAL_EXPRESSION": 19,
		"19": "JS_CONDITIONAL_EXPRESSION",
		"JS_CACHE_EXPRESSION": 20,
		"20": "JS_CACHE_EXPRESSION",
		"JS_BLOCK_STATEMENT": 21,
		"21": "JS_BLOCK_STATEMENT",
		"JS_TEMPLATE_LITERAL": 22,
		"22": "JS_TEMPLATE_LITERAL",
		"JS_IF_STATEMENT": 23,
		"23": "JS_IF_STATEMENT",
		"JS_ASSIGNMENT_EXPRESSION": 24,
		"24": "JS_ASSIGNMENT_EXPRESSION",
		"JS_SEQUENCE_EXPRESSION": 25,
		"25": "JS_SEQUENCE_EXPRESSION",
		"JS_RETURN_STATEMENT": 26,
		"26": "JS_RETURN_STATEMENT"
	};
	ElementTypes = {
		"ELEMENT": 0,
		"0": "ELEMENT",
		"COMPONENT": 1,
		"1": "COMPONENT",
		"SLOT": 2,
		"2": "SLOT",
		"TEMPLATE": 3,
		"3": "TEMPLATE"
	};
	ConstantTypes = {
		"NOT_CONSTANT": 0,
		"0": "NOT_CONSTANT",
		"CAN_SKIP_PATCH": 1,
		"1": "CAN_SKIP_PATCH",
		"CAN_CACHE": 2,
		"2": "CAN_CACHE",
		"CAN_STRINGIFY": 3,
		"3": "CAN_STRINGIFY"
	};
	locStub = {
		start: {
			line: 1,
			column: 1,
			offset: 0
		},
		end: {
			line: 1,
			column: 1,
			offset: 0
		},
		source: ""
	};
	defaultDelimitersOpen = new Uint8Array([123, 123]);
	defaultDelimitersClose = new Uint8Array([125, 125]);
	Sequences = {
		Cdata: new Uint8Array([
			67,
			68,
			65,
			84,
			65,
			91
		]),
		CdataEnd: new Uint8Array([
			93,
			93,
			62
		]),
		CommentEnd: new Uint8Array([
			45,
			45,
			62
		]),
		ScriptEnd: new Uint8Array([
			60,
			47,
			115,
			99,
			114,
			105,
			112,
			116
		]),
		StyleEnd: new Uint8Array([
			60,
			47,
			115,
			116,
			121,
			108,
			101
		]),
		TitleEnd: new Uint8Array([
			60,
			47,
			116,
			105,
			116,
			108,
			101
		]),
		TextareaEnd: new Uint8Array([
			60,
			47,
			116,
			101,
			120,
			116,
			97,
			114,
			101,
			97
		])
	};
	Tokenizer = class {
		constructor(stack, cbs) {
			this.stack = stack;
			this.cbs = cbs;
			/** The current state the tokenizer is in. */
			this.state = 1;
			/** The read buffer. */
			this.buffer = "";
			/** The beginning of the section that is currently being read. */
			this.sectionStart = 0;
			/** The index within the buffer that we are currently looking at. */
			this.index = 0;
			/** The start of the last entity. */
			this.entityStart = 0;
			/** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
			this.baseState = 1;
			/** For special parsing behavior inside of script and style tags. */
			this.inRCDATA = false;
			/** For disabling RCDATA tags handling */
			this.inXML = false;
			/** For disabling interpolation parsing in v-pre */
			this.inVPre = false;
			/** Record newline positions for fast line / column calculation */
			this.newlines = [];
			this.mode = 0;
			this.delimiterOpen = defaultDelimitersOpen;
			this.delimiterClose = defaultDelimitersClose;
			this.delimiterIndex = -1;
			this.currentSequence = void 0;
			this.sequenceIndex = 0;
		}
		get inSFCRoot() {
			return this.mode === 2 && this.stack.length === 0;
		}
		reset() {
			this.state = 1;
			this.mode = 0;
			this.buffer = "";
			this.sectionStart = 0;
			this.index = 0;
			this.baseState = 1;
			this.inRCDATA = false;
			this.currentSequence = void 0;
			this.newlines.length = 0;
			this.delimiterOpen = defaultDelimitersOpen;
			this.delimiterClose = defaultDelimitersClose;
		}
		/**
		* Generate Position object with line / column information using recorded
		* newline positions. We know the index is always going to be an already
		* processed index, so all the newlines up to this index should have been
		* recorded.
		*/
		getPos(index) {
			let line = 1;
			let column = index + 1;
			for (let i = this.newlines.length - 1; i >= 0; i--) {
				const newlineIndex = this.newlines[i];
				if (index > newlineIndex) {
					line = i + 2;
					column = index - newlineIndex;
					break;
				}
			}
			return {
				column,
				line,
				offset: index
			};
		}
		peek() {
			return this.buffer.charCodeAt(this.index + 1);
		}
		stateText(c) {
			if (c === 60) {
				if (this.index > this.sectionStart) this.cbs.ontext(this.sectionStart, this.index);
				this.state = 5;
				this.sectionStart = this.index;
			} else if (!this.inVPre && c === this.delimiterOpen[0]) {
				this.state = 2;
				this.delimiterIndex = 0;
				this.stateInterpolationOpen(c);
			}
		}
		stateInterpolationOpen(c) {
			if (c === this.delimiterOpen[this.delimiterIndex]) {
				if (this.delimiterIndex === this.delimiterOpen.length - 1) {
					const start = this.index + 1 - this.delimiterOpen.length;
					if (start > this.sectionStart) this.cbs.ontext(this.sectionStart, start);
					this.state = 3;
					this.sectionStart = start;
				} else this.delimiterIndex++;
			} else if (this.inRCDATA) {
				this.state = 32;
				this.stateInRCDATA(c);
			} else {
				this.state = 1;
				this.stateText(c);
			}
		}
		stateInterpolation(c) {
			if (c === this.delimiterClose[0]) {
				this.state = 4;
				this.delimiterIndex = 0;
				this.stateInterpolationClose(c);
			}
		}
		stateInterpolationClose(c) {
			if (c === this.delimiterClose[this.delimiterIndex]) {
				if (this.delimiterIndex === this.delimiterClose.length - 1) {
					this.cbs.oninterpolation(this.sectionStart, this.index + 1);
					if (this.inRCDATA) this.state = 32;
					else this.state = 1;
					this.sectionStart = this.index + 1;
				} else this.delimiterIndex++;
			} else {
				this.state = 3;
				this.stateInterpolation(c);
			}
		}
		stateSpecialStartSequence(c) {
			const isEnd = this.sequenceIndex === this.currentSequence.length;
			if (!(isEnd ? isEndOfTagSection(c) : (c | 32) === this.currentSequence[this.sequenceIndex])) this.inRCDATA = false;
			else if (!isEnd) {
				this.sequenceIndex++;
				return;
			}
			this.sequenceIndex = 0;
			this.state = 6;
			this.stateInTagName(c);
		}
		/** Look for an end tag. For <title> and <textarea>, also decode entities. */
		stateInRCDATA(c) {
			if (this.sequenceIndex === this.currentSequence.length) {
				if (c === 62 || isWhitespace(c)) {
					const endOfText = this.index - this.currentSequence.length;
					if (this.sectionStart < endOfText) {
						const actualIndex = this.index;
						this.index = endOfText;
						this.cbs.ontext(this.sectionStart, endOfText);
						this.index = actualIndex;
					}
					this.sectionStart = endOfText + 2;
					this.stateInClosingTagName(c);
					this.inRCDATA = false;
					return;
				}
				this.sequenceIndex = 0;
			}
			if ((c | 32) === this.currentSequence[this.sequenceIndex]) this.sequenceIndex += 1;
			else if (this.sequenceIndex === 0) {
				if (this.currentSequence === Sequences.TitleEnd || this.currentSequence === Sequences.TextareaEnd && !this.inSFCRoot) {
					if (!this.inVPre && c === this.delimiterOpen[0]) {
						this.state = 2;
						this.delimiterIndex = 0;
						this.stateInterpolationOpen(c);
					}
				} else if (this.fastForwardTo(60)) this.sequenceIndex = 1;
			} else this.sequenceIndex = Number(c === 60);
		}
		stateCDATASequence(c) {
			if (c === Sequences.Cdata[this.sequenceIndex]) {
				if (++this.sequenceIndex === Sequences.Cdata.length) {
					this.state = 28;
					this.currentSequence = Sequences.CdataEnd;
					this.sequenceIndex = 0;
					this.sectionStart = this.index + 1;
				}
			} else {
				this.sequenceIndex = 0;
				this.state = 23;
				this.stateInDeclaration(c);
			}
		}
		/**
		* When we wait for one specific character, we can speed things up
		* by skipping through the buffer until we find it.
		*
		* @returns Whether the character was found.
		*/
		fastForwardTo(c) {
			while (++this.index < this.buffer.length) {
				const cc = this.buffer.charCodeAt(this.index);
				if (cc === 10) this.newlines.push(this.index);
				if (cc === c) return true;
			}
			this.index = this.buffer.length - 1;
			return false;
		}
		/**
		* Comments and CDATA end with `-->` and `]]>`.
		*
		* Their common qualities are:
		* - Their end sequences have a distinct character they start with.
		* - That character is then repeated, so we have to check multiple repeats.
		* - All characters but the start character of the sequence can be skipped.
		*/
		stateInCommentLike(c) {
			if (c === this.currentSequence[this.sequenceIndex]) {
				if (++this.sequenceIndex === this.currentSequence.length) {
					if (this.currentSequence === Sequences.CdataEnd) this.cbs.oncdata(this.sectionStart, this.index - 2);
					else this.cbs.oncomment(this.sectionStart, this.index - 2);
					this.sequenceIndex = 0;
					this.sectionStart = this.index + 1;
					this.state = 1;
				}
			} else if (this.sequenceIndex === 0) {
				if (this.fastForwardTo(this.currentSequence[0])) this.sequenceIndex = 1;
			} else if (c !== this.currentSequence[this.sequenceIndex - 1]) this.sequenceIndex = 0;
		}
		startSpecial(sequence, offset) {
			this.enterRCDATA(sequence, offset);
			this.state = 31;
		}
		enterRCDATA(sequence, offset) {
			this.inRCDATA = true;
			this.currentSequence = sequence;
			this.sequenceIndex = offset;
		}
		stateBeforeTagName(c) {
			if (c === 33) {
				this.state = 22;
				this.sectionStart = this.index + 1;
			} else if (c === 63) {
				this.state = 24;
				this.sectionStart = this.index + 1;
			} else if (isTagStartChar(c)) {
				this.sectionStart = this.index;
				if (this.mode === 0) this.state = 6;
				else if (this.inSFCRoot) this.state = 34;
				else if (!this.inXML) {
					if (c === 116) this.state = 30;
					else this.state = c === 115 ? 29 : 6;
				} else this.state = 6;
			} else if (c === 47) this.state = 8;
			else {
				this.state = 1;
				this.stateText(c);
			}
		}
		stateInTagName(c) {
			if (isEndOfTagSection(c)) this.handleTagName(c);
		}
		stateInSFCRootTagName(c) {
			if (isEndOfTagSection(c)) {
				const tag = this.buffer.slice(this.sectionStart, this.index);
				if (tag !== "template") this.enterRCDATA(toCharCodes(`</` + tag), 0);
				this.handleTagName(c);
			}
		}
		handleTagName(c) {
			this.cbs.onopentagname(this.sectionStart, this.index);
			this.sectionStart = -1;
			this.state = 11;
			this.stateBeforeAttrName(c);
		}
		stateBeforeClosingTagName(c) {
			if (isWhitespace(c));
			else if (c === 62) {
				this.state = 1;
				this.sectionStart = this.index + 1;
			} else {
				this.state = isTagStartChar(c) ? 9 : 27;
				this.sectionStart = this.index;
			}
		}
		stateInClosingTagName(c) {
			if (c === 62 || isWhitespace(c)) {
				this.cbs.onclosetag(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.state = 10;
				this.stateAfterClosingTagName(c);
			}
		}
		stateAfterClosingTagName(c) {
			if (c === 62) {
				this.state = 1;
				this.sectionStart = this.index + 1;
			}
		}
		stateBeforeAttrName(c) {
			if (c === 62) {
				this.cbs.onopentagend(this.index);
				if (this.inRCDATA) this.state = 32;
				else this.state = 1;
				this.sectionStart = this.index + 1;
			} else if (c === 47) this.state = 7;
			else if (c === 60 && this.peek() === 47) {
				this.cbs.onopentagend(this.index);
				this.state = 5;
				this.sectionStart = this.index;
			} else if (!isWhitespace(c)) this.handleAttrStart(c);
		}
		handleAttrStart(c) {
			if (c === 118 && this.peek() === 45) {
				this.state = 13;
				this.sectionStart = this.index;
			} else if (c === 46 || c === 58 || c === 64 || c === 35) {
				this.cbs.ondirname(this.index, this.index + 1);
				this.state = 14;
				this.sectionStart = this.index + 1;
			} else {
				this.state = 12;
				this.sectionStart = this.index;
			}
		}
		stateInSelfClosingTag(c) {
			if (c === 62) {
				this.cbs.onselfclosingtag(this.index);
				this.state = 1;
				this.sectionStart = this.index + 1;
				this.inRCDATA = false;
			} else if (!isWhitespace(c)) {
				this.state = 11;
				this.stateBeforeAttrName(c);
			}
		}
		stateInAttrName(c) {
			if (c === 61 || isEndOfTagSection(c)) {
				this.cbs.onattribname(this.sectionStart, this.index);
				this.handleAttrNameEnd(c);
			}
		}
		stateInDirName(c) {
			if (c === 61 || isEndOfTagSection(c)) {
				this.cbs.ondirname(this.sectionStart, this.index);
				this.handleAttrNameEnd(c);
			} else if (c === 58) {
				this.cbs.ondirname(this.sectionStart, this.index);
				this.state = 14;
				this.sectionStart = this.index + 1;
			} else if (c === 46) {
				this.cbs.ondirname(this.sectionStart, this.index);
				this.state = 16;
				this.sectionStart = this.index + 1;
			}
		}
		stateInDirArg(c) {
			if (c === 61 || isEndOfTagSection(c)) {
				this.cbs.ondirarg(this.sectionStart, this.index);
				this.handleAttrNameEnd(c);
			} else if (c === 91) this.state = 15;
			else if (c === 46) {
				this.cbs.ondirarg(this.sectionStart, this.index);
				this.state = 16;
				this.sectionStart = this.index + 1;
			}
		}
		stateInDynamicDirArg(c) {
			if (c === 93) this.state = 14;
			else if (c === 61 || isEndOfTagSection(c)) {
				this.cbs.ondirarg(this.sectionStart, this.index + 1);
				this.handleAttrNameEnd(c);
			}
		}
		stateInDirModifier(c) {
			if (c === 61 || isEndOfTagSection(c)) {
				this.cbs.ondirmodifier(this.sectionStart, this.index);
				this.handleAttrNameEnd(c);
			} else if (c === 46) {
				this.cbs.ondirmodifier(this.sectionStart, this.index);
				this.sectionStart = this.index + 1;
			}
		}
		handleAttrNameEnd(c) {
			this.sectionStart = this.index;
			this.state = 17;
			this.cbs.onattribnameend(this.index);
			this.stateAfterAttrName(c);
		}
		stateAfterAttrName(c) {
			if (c === 61) this.state = 18;
			else if (c === 47 || c === 62) {
				this.cbs.onattribend(0, this.sectionStart);
				this.sectionStart = -1;
				this.state = 11;
				this.stateBeforeAttrName(c);
			} else if (!isWhitespace(c)) {
				this.cbs.onattribend(0, this.sectionStart);
				this.handleAttrStart(c);
			}
		}
		stateBeforeAttrValue(c) {
			if (c === 34) {
				this.state = 19;
				this.sectionStart = this.index + 1;
			} else if (c === 39) {
				this.state = 20;
				this.sectionStart = this.index + 1;
			} else if (!isWhitespace(c)) {
				this.sectionStart = this.index;
				this.state = 21;
				this.stateInAttrValueNoQuotes(c);
			}
		}
		handleInAttrValue(c, quote) {
			if (c === quote || this.fastForwardTo(quote)) {
				this.cbs.onattribdata(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.cbs.onattribend(quote === 34 ? 3 : 2, this.index + 1);
				this.state = 11;
			}
		}
		stateInAttrValueDoubleQuotes(c) {
			this.handleInAttrValue(c, 34);
		}
		stateInAttrValueSingleQuotes(c) {
			this.handleInAttrValue(c, 39);
		}
		stateInAttrValueNoQuotes(c) {
			if (isWhitespace(c) || c === 62) {
				this.cbs.onattribdata(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.cbs.onattribend(1, this.index);
				this.state = 11;
				this.stateBeforeAttrName(c);
			} else if (c === 39 || c === 60 || c === 61 || c === 96) this.cbs.onerr(18, this.index);
		}
		stateBeforeDeclaration(c) {
			if (c === 91) {
				this.state = 26;
				this.sequenceIndex = 0;
			} else this.state = c === 45 ? 25 : 23;
		}
		stateInDeclaration(c) {
			if (c === 62 || this.fastForwardTo(62)) {
				this.state = 1;
				this.sectionStart = this.index + 1;
			}
		}
		stateInProcessingInstruction(c) {
			if (c === 62 || this.fastForwardTo(62)) {
				this.cbs.onprocessinginstruction(this.sectionStart, this.index);
				this.state = 1;
				this.sectionStart = this.index + 1;
			}
		}
		stateBeforeComment(c) {
			if (c === 45) {
				this.state = 28;
				this.currentSequence = Sequences.CommentEnd;
				this.sequenceIndex = 2;
				this.sectionStart = this.index + 1;
			} else this.state = 23;
		}
		stateInSpecialComment(c) {
			if (c === 62 || this.fastForwardTo(62)) {
				this.cbs.oncomment(this.sectionStart, this.index);
				this.state = 1;
				this.sectionStart = this.index + 1;
			}
		}
		stateBeforeSpecialS(c) {
			if (c === Sequences.ScriptEnd[3]) this.startSpecial(Sequences.ScriptEnd, 4);
			else if (c === Sequences.StyleEnd[3]) this.startSpecial(Sequences.StyleEnd, 4);
			else {
				this.state = 6;
				this.stateInTagName(c);
			}
		}
		stateBeforeSpecialT(c) {
			if (c === Sequences.TitleEnd[3]) this.startSpecial(Sequences.TitleEnd, 4);
			else if (c === Sequences.TextareaEnd[3]) this.startSpecial(Sequences.TextareaEnd, 4);
			else {
				this.state = 6;
				this.stateInTagName(c);
			}
		}
		startEntity() {}
		stateInEntity() {}
		/**
		* Iterates through the buffer, calling the function corresponding to the current state.
		*
		* States that are more likely to be hit are higher up, as a performance improvement.
		*/
		parse(input) {
			this.buffer = input;
			while (this.index < this.buffer.length) {
				const c = this.buffer.charCodeAt(this.index);
				if (c === 10) this.newlines.push(this.index);
				switch (this.state) {
					case 1:
						this.stateText(c);
						break;
					case 2:
						this.stateInterpolationOpen(c);
						break;
					case 3:
						this.stateInterpolation(c);
						break;
					case 4:
						this.stateInterpolationClose(c);
						break;
					case 31:
						this.stateSpecialStartSequence(c);
						break;
					case 32:
						this.stateInRCDATA(c);
						break;
					case 26:
						this.stateCDATASequence(c);
						break;
					case 19:
						this.stateInAttrValueDoubleQuotes(c);
						break;
					case 12:
						this.stateInAttrName(c);
						break;
					case 13:
						this.stateInDirName(c);
						break;
					case 14:
						this.stateInDirArg(c);
						break;
					case 15:
						this.stateInDynamicDirArg(c);
						break;
					case 16:
						this.stateInDirModifier(c);
						break;
					case 28:
						this.stateInCommentLike(c);
						break;
					case 27:
						this.stateInSpecialComment(c);
						break;
					case 11:
						this.stateBeforeAttrName(c);
						break;
					case 6:
						this.stateInTagName(c);
						break;
					case 34:
						this.stateInSFCRootTagName(c);
						break;
					case 9:
						this.stateInClosingTagName(c);
						break;
					case 5:
						this.stateBeforeTagName(c);
						break;
					case 17:
						this.stateAfterAttrName(c);
						break;
					case 20:
						this.stateInAttrValueSingleQuotes(c);
						break;
					case 18:
						this.stateBeforeAttrValue(c);
						break;
					case 8:
						this.stateBeforeClosingTagName(c);
						break;
					case 10:
						this.stateAfterClosingTagName(c);
						break;
					case 29:
						this.stateBeforeSpecialS(c);
						break;
					case 30:
						this.stateBeforeSpecialT(c);
						break;
					case 21:
						this.stateInAttrValueNoQuotes(c);
						break;
					case 7:
						this.stateInSelfClosingTag(c);
						break;
					case 23:
						this.stateInDeclaration(c);
						break;
					case 22:
						this.stateBeforeDeclaration(c);
						break;
					case 25:
						this.stateBeforeComment(c);
						break;
					case 24:
						this.stateInProcessingInstruction(c);
						break;
					case 33: this.stateInEntity();
				}
				this.index++;
			}
			this.cleanup();
			this.finish();
		}
		/**
		* Remove data that has already been consumed from the buffer.
		*/
		cleanup() {
			if (this.sectionStart !== this.index) {
				if (this.state === 1 || this.state === 32 && this.sequenceIndex === 0) {
					this.cbs.ontext(this.sectionStart, this.index);
					this.sectionStart = this.index;
				} else if (this.state === 19 || this.state === 20 || this.state === 21) {
					this.cbs.onattribdata(this.sectionStart, this.index);
					this.sectionStart = this.index;
				}
			}
		}
		finish() {
			this.handleTrailingData();
			this.cbs.onend();
		}
		/** Handle any trailing data. */
		handleTrailingData() {
			const endIndex = this.buffer.length;
			if (this.sectionStart >= endIndex) return;
			if (this.state === 28) {
				if (this.currentSequence === Sequences.CdataEnd) this.cbs.oncdata(this.sectionStart, endIndex);
				else this.cbs.oncomment(this.sectionStart, endIndex);
			} else if (this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9);
			else this.cbs.ontext(this.sectionStart, endIndex);
		}
		emitCodePoint(cp, consumed) {}
	};
	CompilerDeprecationTypes = {
		"COMPILER_IS_ON_ELEMENT": "COMPILER_IS_ON_ELEMENT",
		"COMPILER_V_BIND_SYNC": "COMPILER_V_BIND_SYNC",
		"COMPILER_V_BIND_OBJECT_ORDER": "COMPILER_V_BIND_OBJECT_ORDER",
		"COMPILER_V_ON_NATIVE": "COMPILER_V_ON_NATIVE",
		"COMPILER_V_IF_V_FOR_PRECEDENCE": "COMPILER_V_IF_V_FOR_PRECEDENCE",
		"COMPILER_NATIVE_TEMPLATE": "COMPILER_NATIVE_TEMPLATE",
		"COMPILER_INLINE_TEMPLATE": "COMPILER_INLINE_TEMPLATE",
		"COMPILER_FILTERS": "COMPILER_FILTERS"
	};
	deprecationData = {
		["COMPILER_IS_ON_ELEMENT"]: {
			message: `Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".`,
			link: `https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html`
		},
		["COMPILER_V_BIND_SYNC"]: {
			message: (key) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${key}.sync\` should be changed to \`v-model:${key}\`.`,
			link: `https://v3-migration.vuejs.org/breaking-changes/v-model.html`
		},
		["COMPILER_V_BIND_OBJECT_ORDER"]: {
			message: `v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.`,
			link: `https://v3-migration.vuejs.org/breaking-changes/v-bind.html`
		},
		["COMPILER_V_ON_NATIVE"]: {
			message: `.native modifier for v-on has been removed as is no longer necessary.`,
			link: `https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html`
		},
		["COMPILER_V_IF_V_FOR_PRECEDENCE"]: {
			message: `v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.`,
			link: `https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html`
		},
		["COMPILER_NATIVE_TEMPLATE"]: { message: `<template> with no special directives will render as a native template element instead of its inner content in Vue 3.` },
		["COMPILER_INLINE_TEMPLATE"]: {
			message: `"inline-template" has been removed in Vue 3.`,
			link: `https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html`
		},
		["COMPILER_FILTERS"]: {
			message: `filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.`,
			link: `https://v3-migration.vuejs.org/breaking-changes/filters.html`
		}
	};
	ErrorCodes = {
		"ABRUPT_CLOSING_OF_EMPTY_COMMENT": 0,
		"0": "ABRUPT_CLOSING_OF_EMPTY_COMMENT",
		"CDATA_IN_HTML_CONTENT": 1,
		"1": "CDATA_IN_HTML_CONTENT",
		"DUPLICATE_ATTRIBUTE": 2,
		"2": "DUPLICATE_ATTRIBUTE",
		"END_TAG_WITH_ATTRIBUTES": 3,
		"3": "END_TAG_WITH_ATTRIBUTES",
		"END_TAG_WITH_TRAILING_SOLIDUS": 4,
		"4": "END_TAG_WITH_TRAILING_SOLIDUS",
		"EOF_BEFORE_TAG_NAME": 5,
		"5": "EOF_BEFORE_TAG_NAME",
		"EOF_IN_CDATA": 6,
		"6": "EOF_IN_CDATA",
		"EOF_IN_COMMENT": 7,
		"7": "EOF_IN_COMMENT",
		"EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT": 8,
		"8": "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT",
		"EOF_IN_TAG": 9,
		"9": "EOF_IN_TAG",
		"INCORRECTLY_CLOSED_COMMENT": 10,
		"10": "INCORRECTLY_CLOSED_COMMENT",
		"INCORRECTLY_OPENED_COMMENT": 11,
		"11": "INCORRECTLY_OPENED_COMMENT",
		"INVALID_FIRST_CHARACTER_OF_TAG_NAME": 12,
		"12": "INVALID_FIRST_CHARACTER_OF_TAG_NAME",
		"MISSING_ATTRIBUTE_VALUE": 13,
		"13": "MISSING_ATTRIBUTE_VALUE",
		"MISSING_END_TAG_NAME": 14,
		"14": "MISSING_END_TAG_NAME",
		"MISSING_WHITESPACE_BETWEEN_ATTRIBUTES": 15,
		"15": "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES",
		"NESTED_COMMENT": 16,
		"16": "NESTED_COMMENT",
		"UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME": 17,
		"17": "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME",
		"UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE": 18,
		"18": "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE",
		"UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME": 19,
		"19": "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME",
		"UNEXPECTED_NULL_CHARACTER": 20,
		"20": "UNEXPECTED_NULL_CHARACTER",
		"UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME": 21,
		"21": "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME",
		"UNEXPECTED_SOLIDUS_IN_TAG": 22,
		"22": "UNEXPECTED_SOLIDUS_IN_TAG",
		"X_INVALID_END_TAG": 23,
		"23": "X_INVALID_END_TAG",
		"X_MISSING_END_TAG": 24,
		"24": "X_MISSING_END_TAG",
		"X_MISSING_INTERPOLATION_END": 25,
		"25": "X_MISSING_INTERPOLATION_END",
		"X_MISSING_DIRECTIVE_NAME": 26,
		"26": "X_MISSING_DIRECTIVE_NAME",
		"X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END": 27,
		"27": "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END",
		"X_V_IF_NO_EXPRESSION": 28,
		"28": "X_V_IF_NO_EXPRESSION",
		"X_V_IF_SAME_KEY": 29,
		"29": "X_V_IF_SAME_KEY",
		"X_V_ELSE_NO_ADJACENT_IF": 30,
		"30": "X_V_ELSE_NO_ADJACENT_IF",
		"X_V_FOR_NO_EXPRESSION": 31,
		"31": "X_V_FOR_NO_EXPRESSION",
		"X_V_FOR_MALFORMED_EXPRESSION": 32,
		"32": "X_V_FOR_MALFORMED_EXPRESSION",
		"X_V_FOR_TEMPLATE_KEY_PLACEMENT": 33,
		"33": "X_V_FOR_TEMPLATE_KEY_PLACEMENT",
		"X_V_BIND_NO_EXPRESSION": 34,
		"34": "X_V_BIND_NO_EXPRESSION",
		"X_V_ON_NO_EXPRESSION": 35,
		"35": "X_V_ON_NO_EXPRESSION",
		"X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET": 36,
		"36": "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET",
		"X_V_SLOT_MIXED_SLOT_USAGE": 37,
		"37": "X_V_SLOT_MIXED_SLOT_USAGE",
		"X_V_SLOT_DUPLICATE_SLOT_NAMES": 38,
		"38": "X_V_SLOT_DUPLICATE_SLOT_NAMES",
		"X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN": 39,
		"39": "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN",
		"X_V_SLOT_MISPLACED": 40,
		"40": "X_V_SLOT_MISPLACED",
		"X_V_MODEL_NO_EXPRESSION": 41,
		"41": "X_V_MODEL_NO_EXPRESSION",
		"X_V_MODEL_MALFORMED_EXPRESSION": 42,
		"42": "X_V_MODEL_MALFORMED_EXPRESSION",
		"X_V_MODEL_ON_SCOPE_VARIABLE": 43,
		"43": "X_V_MODEL_ON_SCOPE_VARIABLE",
		"X_V_MODEL_ON_PROPS": 44,
		"44": "X_V_MODEL_ON_PROPS",
		"X_INVALID_EXPRESSION": 45,
		"45": "X_INVALID_EXPRESSION",
		"X_KEEP_ALIVE_INVALID_CHILDREN": 46,
		"46": "X_KEEP_ALIVE_INVALID_CHILDREN",
		"X_PREFIX_ID_NOT_SUPPORTED": 47,
		"47": "X_PREFIX_ID_NOT_SUPPORTED",
		"X_MODULE_MODE_NOT_SUPPORTED": 48,
		"48": "X_MODULE_MODE_NOT_SUPPORTED",
		"X_CACHE_HANDLER_NOT_SUPPORTED": 49,
		"49": "X_CACHE_HANDLER_NOT_SUPPORTED",
		"X_SCOPE_ID_NOT_SUPPORTED": 50,
		"50": "X_SCOPE_ID_NOT_SUPPORTED",
		"X_VNODE_HOOKS": 51,
		"51": "X_VNODE_HOOKS",
		"X_V_BIND_INVALID_SAME_NAME_ARGUMENT": 52,
		"52": "X_V_BIND_INVALID_SAME_NAME_ARGUMENT",
		"__EXTEND_POINT__": 53,
		"53": "__EXTEND_POINT__"
	};
	errorMessages = {
		[0]: "Illegal comment.",
		[1]: "CDATA section is allowed only in XML context.",
		[2]: "Duplicate attribute.",
		[3]: "End tag cannot have attributes.",
		[4]: "Illegal '/' in tags.",
		[5]: "Unexpected EOF in tag.",
		[6]: "Unexpected EOF in CDATA section.",
		[7]: "Unexpected EOF in comment.",
		[8]: "Unexpected EOF in script.",
		[9]: "Unexpected EOF in tag.",
		[10]: "Incorrectly closed comment.",
		[11]: "Incorrectly opened comment.",
		[12]: "Illegal tag name. Use '&lt;' to print '<'.",
		[13]: "Attribute value was expected.",
		[14]: "End tag name was expected.",
		[15]: "Whitespace was expected.",
		[16]: "Unexpected '<!--' in comment.",
		[17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
		[18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
		[19]: "Attribute name cannot start with '='.",
		[21]: "'<?' is allowed only in XML context.",
		[20]: `Unexpected null character.`,
		[22]: "Illegal '/' in tags.",
		[23]: "Invalid end tag.",
		[24]: "Element is missing end tag.",
		[25]: "Interpolation end sign was not found.",
		[27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
		[26]: "Legal directive name was expected.",
		[28]: `v-if/v-else-if is missing expression.`,
		[29]: `v-if/else branches must use unique keys.`,
		[30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
		[31]: `v-for is missing expression.`,
		[32]: `v-for has invalid expression.`,
		[33]: `<template v-for> key should be placed on the <template> tag.`,
		[34]: `v-bind is missing expression.`,
		[52]: `v-bind with same-name shorthand only allows static argument.`,
		[35]: `v-on is missing expression.`,
		[36]: `Unexpected custom directive on <slot> outlet.`,
		[37]: `Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
		[38]: `Duplicate slot names found. `,
		[39]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
		[40]: `v-slot can only be used on components or <template> tags.`,
		[41]: `v-model is missing expression.`,
		[42]: `v-model value must be a valid JavaScript member expression.`,
		[43]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
		[44]: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
		[45]: `Error parsing JavaScript expression: `,
		[46]: `<KeepAlive> expects exactly one child component.`,
		[51]: `@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.`,
		[47]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
		[48]: `ES module mode is not supported in this build of compiler.`,
		[49]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
		[50]: `"scopeId" option is only supported in module mode.`,
		[53]: ``
	};
	isFunctionType = (node) => {
		return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
	};
	isStaticProperty = (node) => node && (node.type === "ObjectProperty" || node.type === "ObjectMethod") && !node.computed;
	isStaticPropertyKey = (node, parent) => isStaticProperty(parent) && parent.key === node;
	TS_NODE_TYPES = [
		"TSAsExpression",
		"TSTypeAssertion",
		"TSNonNullExpression",
		"TSInstantiationExpression",
		"TSSatisfiesExpression"
	];
	isStaticExp = (p) => p.type === 4 && p.isStatic;
	nonIdentifierRE = /^\d|[^\$\w\xA0-\uFFFF]/;
	isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
	validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
	validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
	whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
	getExpSource = (exp) => exp.type === 4 ? exp.content : exp.loc.source;
	isMemberExpressionBrowser = (exp) => {
		const path = getExpSource(exp).trim().replace(whitespaceRE, (s) => s.trim());
		let state = 0;
		let stateStack = [];
		let currentOpenBracketCount = 0;
		let currentOpenParensCount = 0;
		let currentStringType = null;
		for (let i = 0; i < path.length; i++) {
			const char = path.charAt(i);
			switch (state) {
				case 0:
					if (char === "[") {
						stateStack.push(state);
						state = 1;
						currentOpenBracketCount++;
					} else if (char === "(") {
						stateStack.push(state);
						state = 2;
						currentOpenParensCount++;
					} else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) return false;
					break;
				case 1:
					if (char === `'` || char === `"` || char === "`") {
						stateStack.push(state);
						state = 3;
						currentStringType = char;
					} else if (char === `[`) currentOpenBracketCount++;
					else if (char === `]`) {
						if (!--currentOpenBracketCount) state = stateStack.pop();
					}
					break;
				case 2:
					if (char === `'` || char === `"` || char === "`") {
						stateStack.push(state);
						state = 3;
						currentStringType = char;
					} else if (char === `(`) currentOpenParensCount++;
					else if (char === `)`) {
						if (i === path.length - 1) return false;
						if (!--currentOpenParensCount) state = stateStack.pop();
					}
					break;
				case 3: if (char === currentStringType) {
					state = stateStack.pop();
					currentStringType = null;
				}
			}
		}
		return !currentOpenBracketCount && !currentOpenParensCount;
	};
	isMemberExpressionNode = NOOP;
	isMemberExpression = isMemberExpressionBrowser;
	fnExpRE = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
	isFnExpressionBrowser = (exp) => fnExpRE.test(getExpSource(exp));
	isFnExpressionNode = NOOP;
	isFnExpression = isFnExpressionBrowser;
	propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
	forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
	defaultParserOptions = {
		parseMode: "base",
		ns: 0,
		delimiters: [`{{`, `}}`],
		getNamespace: () => 0,
		isVoidTag: NO,
		isPreTag: NO,
		isIgnoreNewlineTag: NO,
		isCustomElement: NO,
		onError: defaultOnError,
		onWarn: defaultOnWarn,
		comments: false,
		prefixIdentifiers: false
	};
	currentOptions = defaultParserOptions;
	currentRoot = null;
	currentInput = "";
	currentOpenTag = null;
	currentProp = null;
	currentAttrValue = "";
	currentAttrStartIndex = -1;
	currentAttrEndIndex = -1;
	inPre = 0;
	inVPre = false;
	currentVPreBoundary = null;
	stack = [];
	tokenizer = new Tokenizer(stack, {
		onerr: emitError,
		ontext(start, end) {
			onText(getSlice(start, end), start, end);
		},
		ontextentity(char, start, end) {
			onText(char, start, end);
		},
		oninterpolation(start, end) {
			if (inVPre) return onText(getSlice(start, end), start, end);
			let innerStart = start + tokenizer.delimiterOpen.length;
			let innerEnd = end - tokenizer.delimiterClose.length;
			while (isWhitespace(currentInput.charCodeAt(innerStart))) innerStart++;
			while (isWhitespace(currentInput.charCodeAt(innerEnd - 1))) innerEnd--;
			let exp = getSlice(innerStart, innerEnd);
			if (exp.includes("&")) exp = currentOptions.decodeEntities(exp, false);
			addNode({
				type: 5,
				content: createExp(exp, false, getLoc(innerStart, innerEnd)),
				loc: getLoc(start, end)
			});
		},
		onopentagname(start, end) {
			const name = getSlice(start, end);
			currentOpenTag = {
				type: 1,
				tag: name,
				ns: currentOptions.getNamespace(name, stack[0], currentOptions.ns),
				tagType: 0,
				props: [],
				children: [],
				loc: getLoc(start - 1, end),
				codegenNode: void 0
			};
		},
		onopentagend(end) {
			endOpenTag(end);
		},
		onclosetag(start, end) {
			const name = getSlice(start, end);
			if (!currentOptions.isVoidTag(name)) {
				let found = false;
				for (let i = 0; i < stack.length; i++) if (stack[i].tag.toLowerCase() === name.toLowerCase()) {
					found = true;
					if (i > 0) emitError(24, stack[0].loc.start.offset);
					for (let j = 0; j <= i; j++) onCloseTag(stack.shift(), end, j < i);
					break;
				}
				if (!found) emitError(23, backTrack(start, 60));
			}
		},
		onselfclosingtag(end) {
			const name = currentOpenTag.tag;
			currentOpenTag.isSelfClosing = true;
			endOpenTag(end);
			if (stack[0] && stack[0].tag === name) onCloseTag(stack.shift(), end);
		},
		onattribname(start, end) {
			currentProp = {
				type: 6,
				name: getSlice(start, end),
				nameLoc: getLoc(start, end),
				value: void 0,
				loc: getLoc(start)
			};
		},
		ondirname(start, end) {
			const raw = getSlice(start, end);
			const name = raw === "." || raw === ":" ? "bind" : raw === "@" ? "on" : raw === "#" ? "slot" : raw.slice(2);
			if (!inVPre && name === "") emitError(26, start);
			if (inVPre || name === "") currentProp = {
				type: 6,
				name: raw,
				nameLoc: getLoc(start, end),
				value: void 0,
				loc: getLoc(start)
			};
			else {
				currentProp = {
					type: 7,
					name,
					rawName: raw,
					exp: void 0,
					arg: void 0,
					modifiers: raw === "." ? [createSimpleExpression("prop")] : [],
					loc: getLoc(start)
				};
				if (name === "pre") {
					inVPre = tokenizer.inVPre = true;
					currentVPreBoundary = currentOpenTag;
					const props = currentOpenTag.props;
					for (let i = 0; i < props.length; i++) if (props[i].type === 7) props[i] = dirToAttr(props[i]);
				}
			}
		},
		ondirarg(start, end) {
			if (start === end) return;
			const arg = getSlice(start, end);
			if (inVPre) {
				currentProp.name += arg;
				setLocEnd(currentProp.nameLoc, end);
			} else {
				const isStatic = arg[0] !== `[`;
				currentProp.arg = createExp(isStatic ? arg : arg.slice(1, -1), isStatic, getLoc(start, end), isStatic ? 3 : 0);
			}
		},
		ondirmodifier(start, end) {
			const mod = getSlice(start, end);
			if (inVPre) {
				currentProp.name += "." + mod;
				setLocEnd(currentProp.nameLoc, end);
			} else if (currentProp.name === "slot") {
				const arg = currentProp.arg;
				if (arg) {
					arg.content += "." + mod;
					setLocEnd(arg.loc, end);
				}
			} else {
				const exp = createSimpleExpression(mod, true, getLoc(start, end));
				currentProp.modifiers.push(exp);
			}
		},
		onattribdata(start, end) {
			currentAttrValue += getSlice(start, end);
			if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
			currentAttrEndIndex = end;
		},
		onattribentity(char, start, end) {
			currentAttrValue += char;
			if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
			currentAttrEndIndex = end;
		},
		onattribnameend(end) {
			const start = currentProp.loc.start.offset;
			const name = getSlice(start, end);
			if (currentProp.type === 7) currentProp.rawName = name;
			if (currentOpenTag.props.some((p) => (p.type === 7 ? p.rawName : p.name) === name)) emitError(2, start);
		},
		onattribend(quote, end) {
			if (currentOpenTag && currentProp) {
				setLocEnd(currentProp.loc, end);
				if (quote !== 0) {
					if (currentAttrValue.includes("&")) currentAttrValue = currentOptions.decodeEntities(currentAttrValue, true);
					if (currentProp.type === 6) {
						if (currentProp.name === "class") currentAttrValue = condense(currentAttrValue).trim();
						if (quote === 1 && !currentAttrValue) emitError(13, end);
						currentProp.value = {
							type: 2,
							content: currentAttrValue,
							loc: quote === 1 ? getLoc(currentAttrStartIndex, currentAttrEndIndex) : getLoc(currentAttrStartIndex - 1, currentAttrEndIndex + 1)
						};
						if (tokenizer.inSFCRoot && currentOpenTag.tag === "template" && currentProp.name === "lang" && currentAttrValue && currentAttrValue !== "html") tokenizer.enterRCDATA(toCharCodes(`</template`), 0);
					} else {
						currentProp.exp = createExp(currentAttrValue, false, getLoc(currentAttrStartIndex, currentAttrEndIndex), 0, 0);
						if (currentProp.name === "for") currentProp.forParseResult = parseForExpression(currentProp.exp);
						let syncIndex = -1;
						if (currentProp.name === "bind" && (syncIndex = currentProp.modifiers.findIndex((mod) => mod.content === "sync")) > -1 && checkCompatEnabled("COMPILER_V_BIND_SYNC", currentOptions, currentProp.loc, currentProp.rawName)) {
							currentProp.name = "model";
							currentProp.modifiers.splice(syncIndex, 1);
						}
					}
				}
				if (currentProp.type !== 7 || currentProp.name !== "pre") currentOpenTag.props.push(currentProp);
			}
			currentAttrValue = "";
			currentAttrStartIndex = currentAttrEndIndex = -1;
		},
		oncomment(start, end) {
			if (currentOptions.comments) addNode({
				type: 3,
				content: getSlice(start, end),
				loc: getLoc(start - 4, end + 3)
			});
		},
		onend() {
			const end = currentInput.length;
			for (let index = 0; index < stack.length; index++) {
				onCloseTag(stack[index], end - 1);
				emitError(24, stack[index].loc.start.offset);
			}
		},
		oncdata(start, end) {
			if (stack[0].ns !== 0) onText(getSlice(start, end), start, end);
			else emitError(1, start - 9);
		},
		onprocessinginstruction(start) {
			if ((stack[0] ? stack[0].ns : currentOptions.ns) === 0) emitError(21, start - 1);
		}
	});
	forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
	stripParensRE = /^\(|\)$/g;
	specialTemplateDir = /* @__PURE__ */ new Set([
		"if",
		"else",
		"else-if",
		"for",
		"slot"
	]);
	windowsNewlineRE = /\r\n/g;
	allowHoistedHelperSet = /* @__PURE__ */ new Set([
		NORMALIZE_CLASS,
		NORMALIZE_STYLE,
		NORMALIZE_PROPS,
		GUARD_REACTIVE_PROPS
	]);
	PURE_ANNOTATION = `/*@__PURE__*/`;
	aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
	new RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
	transformExpression = (node, context) => {
		if (node.type === 5) node.content = processExpression(node.content, context);
		else if (node.type === 1) {
			const memo = findDir(node, "memo");
			for (let i = 0; i < node.props.length; i++) {
				const dir = node.props[i];
				if (dir.type === 7 && dir.name !== "for") {
					const exp = dir.exp;
					const arg = dir.arg;
					if (exp && exp.type === 4 && !(dir.name === "on" && arg) && !(memo && arg && arg.type === 4 && arg.content === "key")) dir.exp = processExpression(exp, context, dir.name === "slot");
					if (arg && arg.type === 4 && !arg.isStatic) dir.arg = processExpression(arg, context);
				}
			}
		}
	};
	transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context) => {
		return processIf(node, dir, context, (ifNode, branch, isRoot) => {
			const siblings = context.parent.children;
			let i = siblings.indexOf(ifNode);
			let key = 0;
			while (i-- >= 0) {
				const sibling = siblings[i];
				if (sibling && sibling.type === 9) key += sibling.branches.length;
			}
			return () => {
				if (isRoot) ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
				else {
					const parentCondition = getParentCondition(ifNode.codegenNode);
					parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
				}
			};
		});
	});
	transformBind = (dir, _node, context) => {
		const { modifiers, loc } = dir;
		const arg = dir.arg;
		let { exp } = dir;
		if (exp && exp.type === 4 && !exp.content.trim()) exp = void 0;
		if (!exp) {
			if (arg.type !== 4 || !arg.isStatic) {
				context.onError(createCompilerError(52, arg.loc));
				return { props: [createObjectProperty(arg, createSimpleExpression("", true, loc))] };
			}
			transformBindShorthand(dir);
			exp = dir.exp;
		}
		if (arg.type !== 4) {
			arg.children.unshift(`(`);
			arg.children.push(`) || ""`);
		} else if (!arg.isStatic) arg.content = `${arg.content} || ""`;
		if (modifiers.some((mod) => mod.content === "camel")) {
			if (arg.type === 4) {
				if (arg.isStatic) arg.content = camelize(arg.content);
				else arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
			} else {
				arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
				arg.children.push(`)`);
			}
		}
		if (!context.inSSR) {
			if (modifiers.some((mod) => mod.content === "prop")) injectPrefix(arg, ".");
			if (modifiers.some((mod) => mod.content === "attr")) injectPrefix(arg, "^");
		}
		return { props: [createObjectProperty(arg, exp)] };
	};
	transformBindShorthand = (dir, context) => {
		const arg = dir.arg;
		dir.exp = createSimpleExpression(camelize(arg.content), false, arg.loc);
	};
	injectPrefix = (arg, prefix) => {
		if (arg.type === 4) {
			if (arg.isStatic) arg.content = prefix + arg.content;
			else arg.content = `\`${prefix}\${${arg.content}}\``;
		} else {
			arg.children.unshift(`'${prefix}' + (`);
			arg.children.push(`)`);
		}
	};
	transformFor = createStructuralDirectiveTransform("for", (node, dir, context) => {
		const { helper, removeHelper } = context;
		return processFor(node, dir, context, (forNode) => {
			const renderExp = createCallExpression(helper(RENDER_LIST), [forNode.source]);
			const isTemplate = isTemplateNode(node);
			const memo = findDir(node, "memo");
			const keyProp = findProp(node, `key`, false, true);
			if (keyProp && keyProp.type === 7 && !keyProp.exp) transformBindShorthand(keyProp);
			let keyExp = keyProp && (keyProp.type === 6 ? keyProp.value ? createSimpleExpression(keyProp.value.content, true) : void 0 : keyProp.exp);
			const keyProperty = keyProp && keyExp ? createObjectProperty(`key`, keyExp) : null;
			const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
			const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
			forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, renderExp, fragmentFlag, void 0, void 0, true, !isStableFragment, false, node.loc);
			return () => {
				let childBlock;
				const { children } = forNode;
				const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
				const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
				if (slotOutlet) {
					childBlock = slotOutlet.codegenNode;
					if (isTemplate && keyProperty) injectProp(childBlock, keyProperty, context);
				} else if (needFragmentWrapper) childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : void 0, node.children, 64, void 0, void 0, true, void 0, false);
				else {
					childBlock = children[0].codegenNode;
					if (isTemplate && keyProperty) injectProp(childBlock, keyProperty, context);
					if (childBlock.isBlock !== !isStableFragment) {
						if (childBlock.isBlock) {
							removeHelper(OPEN_BLOCK);
							removeHelper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
						} else removeHelper(getVNodeHelper(context.inSSR, childBlock.isComponent));
					}
					childBlock.isBlock = !isStableFragment;
					if (childBlock.isBlock) {
						helper(OPEN_BLOCK);
						helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
					} else helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
				}
				if (memo) {
					const loop = createFunctionExpression(createForLoopParams(forNode.parseResult, [createSimpleExpression(`_cached`)]));
					loop.body = createBlockStatement([
						createCompoundExpression([
							`const _memo = (`,
							memo.exp,
							`)`
						]),
						createCompoundExpression([
							`if (_cached`,
							...keyExp ? [` && _cached.key === `, keyExp] : [],
							` && ${context.helperString(IS_MEMO_SAME)}(_cached, _memo)) return _cached`
						]),
						createCompoundExpression([`const _item = `, childBlock]),
						createSimpleExpression(`_item.memo = _memo`),
						createSimpleExpression(`return _item`)
					]);
					renderExp.arguments.push(loop, createSimpleExpression(`_cache`), createSimpleExpression(String(context.cached.length)));
					context.cached.push(null);
				} else renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true));
			};
		});
	});
	defaultFallback = createSimpleExpression(`undefined`, false);
	trackSlotScopes = (node, context) => {
		if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
			const vSlot = findDir(node, "slot");
			if (vSlot) {
				vSlot.exp;
				context.scopes.vSlot++;
				return () => {
					context.scopes.vSlot--;
				};
			}
		}
	};
	trackVForSlotScopes = (node, context) => {
		let vFor;
		if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, "for"))) {
			const result = vFor.forParseResult;
			if (result) {
				finalizeForParseResult(result, context);
				const { value, key, index } = result;
				const { addIdentifiers, removeIdentifiers } = context;
				value && addIdentifiers(value);
				key && addIdentifiers(key);
				index && addIdentifiers(index);
				return () => {
					value && removeIdentifiers(value);
					key && removeIdentifiers(key);
					index && removeIdentifiers(index);
				};
			}
		}
	};
	buildClientSlotFn = (props, _vForExp, children, loc) => createFunctionExpression(props, children, false, true, children.length ? children[0].loc : loc);
	directiveImportMap = /* @__PURE__ */ new WeakMap();
	transformElement = (node, context) => {
		return function postTransformElement() {
			node = context.currentNode;
			if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) return;
			const { tag, props } = node;
			const isComponent = node.tagType === 1;
			let vnodeTag = isComponent ? resolveComponentType(node, context) : `"${tag}"`;
			const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
			let vnodeProps;
			let vnodeChildren;
			let patchFlag = 0;
			let vnodeDynamicProps;
			let dynamicPropNames;
			let vnodeDirectives;
			let shouldUseBlock = isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && (tag === "svg" || tag === "foreignObject" || tag === "math");
			if (props.length > 0) {
				const propsBuildResult = buildProps(node, context, void 0, isComponent, isDynamicComponent);
				vnodeProps = propsBuildResult.props;
				patchFlag = propsBuildResult.patchFlag;
				dynamicPropNames = propsBuildResult.dynamicPropNames;
				const directives = propsBuildResult.directives;
				vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map((dir) => buildDirectiveArgs(dir, context))) : void 0;
				if (propsBuildResult.shouldUseBlock) shouldUseBlock = true;
			}
			if (node.children.length > 0) {
				if (vnodeTag === KEEP_ALIVE) {
					shouldUseBlock = true;
					patchFlag |= 1024;
				}
				if (isComponent && vnodeTag !== TELEPORT && vnodeTag !== KEEP_ALIVE) {
					const { slots, hasDynamicSlots } = buildSlots(node, context);
					vnodeChildren = slots;
					if (hasDynamicSlots) patchFlag |= 1024;
				} else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
					const child = node.children[0];
					const type = child.type;
					const hasDynamicTextChild = type === 5 || type === 8;
					if (hasDynamicTextChild && getConstantType(child, context) === 0) patchFlag |= 1;
					if (hasDynamicTextChild || type === 2) vnodeChildren = child;
					else vnodeChildren = node.children;
				} else vnodeChildren = node.children;
			}
			if (dynamicPropNames && dynamicPropNames.length) vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
			node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, patchFlag === 0 ? void 0 : patchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false, isComponent, node.loc);
		};
	};
	transformSlotOutlet = (node, context) => {
		if (isSlotOutlet(node)) {
			const { children, loc } = node;
			const { slotName, slotProps } = processSlotOutlet(node, context);
			const slotArgs = [
				context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
				slotName,
				"{}",
				"undefined",
				"true"
			];
			let expectedLen = 2;
			if (slotProps) {
				slotArgs[2] = slotProps;
				expectedLen = 3;
			}
			if (children.length) {
				slotArgs[3] = createFunctionExpression([], children, false, false, loc);
				expectedLen = 4;
			}
			if (context.scopeId && !context.slotted) expectedLen = 5;
			slotArgs.splice(expectedLen);
			node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
		}
	};
	transformOn$1 = (dir, node, context, augmentor) => {
		const { loc, modifiers, arg } = dir;
		if (!dir.exp && !modifiers.length) context.onError(createCompilerError(35, loc));
		let eventName;
		if (arg.type === 4) {
			if (arg.isStatic) {
				let rawName = arg.content;
				if (rawName.startsWith("vue:")) rawName = `vnode-${rawName.slice(4)}`;
				eventName = createSimpleExpression(node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? toHandlerKey(camelize(rawName)) : `on:${rawName}`, true, arg.loc);
			} else eventName = createCompoundExpression([
				`${context.helperString(TO_HANDLER_KEY)}(`,
				arg,
				`)`
			]);
		} else {
			eventName = arg;
			eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
			eventName.children.push(`)`);
		}
		let exp = dir.exp;
		if (exp && !exp.content.trim()) exp = void 0;
		let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
		if (exp) {
			const isMemberExp = isMemberExpression(exp);
			const isInlineStatement = !(isMemberExp || isFnExpression(exp));
			const hasMultipleStatements = exp.content.includes(`;`);
			if (isInlineStatement || shouldCache && isMemberExp) exp = createCompoundExpression([
				`${isInlineStatement ? `$event` : `(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
				exp,
				hasMultipleStatements ? `}` : `)`
			]);
		}
		let ret = { props: [createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))] };
		if (augmentor) ret = augmentor(ret);
		if (shouldCache) ret.props[0].value = context.cache(ret.props[0].value);
		ret.props.forEach((p) => p.key.isHandlerKey = true);
		return ret;
	};
	transformText = (node, context) => {
		if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) return () => {
			const children = node.children;
			let currentContainer = void 0;
			let hasText = false;
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				if (isText$1(child)) {
					hasText = true;
					for (let j = i + 1; j < children.length; j++) {
						const next = children[j];
						if (isText$1(next)) {
							if (!currentContainer) currentContainer = children[i] = createCompoundExpression([child], child.loc);
							currentContainer.children.push(` + `, next);
							children.splice(j, 1);
							j--;
						} else {
							currentContainer = void 0;
							break;
						}
					}
				}
			}
			if (!hasText || children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && !node.props.find((p) => p.type === 7 && !context.directiveTransforms[p.name]) && !(node.tag === "template"))) return;
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				if (isText$1(child) || child.type === 8) {
					const callArgs = [];
					if (child.type !== 2 || child.content !== " ") callArgs.push(child);
					if (!context.ssr && getConstantType(child, context) === 0) callArgs.push("1");
					children[i] = {
						type: 12,
						content: child,
						loc: child.loc,
						codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
					};
				}
			}
		};
	};
	seen$1 = /* @__PURE__ */ new WeakSet();
	transformOnce = (node, context) => {
		if (node.type === 1 && findDir(node, "once", true)) {
			if (seen$1.has(node) || context.inVOnce || context.inSSR) return;
			seen$1.add(node);
			context.inVOnce = true;
			context.helper(SET_BLOCK_TRACKING);
			return () => {
				context.inVOnce = false;
				const cur = context.currentNode;
				if (cur.codegenNode) cur.codegenNode = context.cache(cur.codegenNode, true, true);
			};
		}
	};
	transformModel$1 = (dir, node, context) => {
		const { exp, arg } = dir;
		if (!exp) {
			context.onError(createCompilerError(41, dir.loc));
			return createTransformProps();
		}
		const rawExp = exp.loc.source.trim();
		const expString = exp.type === 4 ? exp.content : rawExp;
		const bindingType = context.bindingMetadata[rawExp];
		if (bindingType === "props" || bindingType === "props-aliased") {
			context.onError(createCompilerError(44, exp.loc));
			return createTransformProps();
		}
		if (!expString.trim() || !isMemberExpression(exp) && true) {
			context.onError(createCompilerError(42, exp.loc));
			return createTransformProps();
		}
		const propName = arg ? arg : createSimpleExpression("modelValue", true);
		const eventName = arg ? isStaticExp(arg) ? `onUpdate:${camelize(arg.content)}` : createCompoundExpression(["\"onUpdate:\" + ", arg]) : `onUpdate:modelValue`;
		let assignmentExp;
		assignmentExp = createCompoundExpression([
			`${context.isTS ? `($event: any)` : `$event`} => ((`,
			exp,
			`) = $event)`
		]);
		const props = [createObjectProperty(propName, dir.exp), createObjectProperty(eventName, assignmentExp)];
		if (dir.modifiers.length && node.tagType === 1) {
			const modifiers = dir.modifiers.map((m) => m.content).map((m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
			const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, " + \"Modifiers\""]) : `modelModifiers`;
			props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2)));
		}
		return createTransformProps(props);
	};
	validDivisionCharRE = /[\w).+\-_$\]]/;
	transformFilter = (node, context) => {
		if (!isCompatEnabled("COMPILER_FILTERS", context)) return;
		if (node.type === 5) rewriteFilter(node.content, context);
		else if (node.type === 1) node.props.forEach((prop) => {
			if (prop.type === 7 && prop.name !== "for" && prop.exp) rewriteFilter(prop.exp, context);
		});
	};
	seen = /* @__PURE__ */ new WeakSet();
	transformMemo = (node, context) => {
		if (node.type === 1) {
			const dir = findDir(node, "memo");
			if (!dir || seen.has(node)) return;
			seen.add(node);
			return () => {
				const codegenNode = node.codegenNode || context.currentNode.codegenNode;
				if (codegenNode && codegenNode.type === 13) {
					if (node.tagType !== 1) convertToBlock(codegenNode, context);
					node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
						dir.exp,
						createFunctionExpression(void 0, codegenNode),
						`_cache`,
						String(context.cached.length)
					]);
					context.cached.push(null);
				}
			};
		}
	};
	BindingTypes = {
		"DATA": "data",
		"PROPS": "props",
		"PROPS_ALIASED": "props-aliased",
		"SETUP_LET": "setup-let",
		"SETUP_CONST": "setup-const",
		"SETUP_REACTIVE_CONST": "setup-reactive-const",
		"SETUP_MAYBE_REF": "setup-maybe-ref",
		"SETUP_REF": "setup-ref",
		"OPTIONS": "options",
		"LITERAL_CONST": "literal-const"
	};
	noopDirectiveTransform = () => ({ props: [] });
}));
//#endregion
//#region ../../node_modules/.pnpm/@vue+compiler-dom@3.5.13/node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js
var compiler_dom_esm_bundler_exports = /* @__PURE__ */ __exportAll({
	BASE_TRANSITION: () => BASE_TRANSITION,
	BindingTypes: () => BindingTypes,
	CAMELIZE: () => CAMELIZE,
	CAPITALIZE: () => CAPITALIZE,
	CREATE_BLOCK: () => CREATE_BLOCK,
	CREATE_COMMENT: () => CREATE_COMMENT,
	CREATE_ELEMENT_BLOCK: () => CREATE_ELEMENT_BLOCK,
	CREATE_ELEMENT_VNODE: () => CREATE_ELEMENT_VNODE,
	CREATE_SLOTS: () => CREATE_SLOTS,
	CREATE_STATIC: () => CREATE_STATIC,
	CREATE_TEXT: () => CREATE_TEXT,
	CREATE_VNODE: () => CREATE_VNODE,
	CompilerDeprecationTypes: () => CompilerDeprecationTypes,
	ConstantTypes: () => ConstantTypes,
	DOMDirectiveTransforms: () => DOMDirectiveTransforms,
	DOMErrorCodes: () => DOMErrorCodes,
	DOMErrorMessages: () => DOMErrorMessages,
	DOMNodeTransforms: () => DOMNodeTransforms,
	ElementTypes: () => ElementTypes,
	ErrorCodes: () => ErrorCodes,
	FRAGMENT: () => FRAGMENT,
	GUARD_REACTIVE_PROPS: () => GUARD_REACTIVE_PROPS,
	IS_MEMO_SAME: () => IS_MEMO_SAME,
	IS_REF: () => IS_REF,
	KEEP_ALIVE: () => KEEP_ALIVE,
	MERGE_PROPS: () => MERGE_PROPS,
	NORMALIZE_CLASS: () => NORMALIZE_CLASS,
	NORMALIZE_PROPS: () => NORMALIZE_PROPS,
	NORMALIZE_STYLE: () => NORMALIZE_STYLE,
	Namespaces: () => Namespaces,
	NodeTypes: () => NodeTypes,
	OPEN_BLOCK: () => OPEN_BLOCK,
	POP_SCOPE_ID: () => POP_SCOPE_ID,
	PUSH_SCOPE_ID: () => PUSH_SCOPE_ID,
	RENDER_LIST: () => RENDER_LIST,
	RENDER_SLOT: () => RENDER_SLOT,
	RESOLVE_COMPONENT: () => RESOLVE_COMPONENT,
	RESOLVE_DIRECTIVE: () => RESOLVE_DIRECTIVE,
	RESOLVE_DYNAMIC_COMPONENT: () => RESOLVE_DYNAMIC_COMPONENT,
	RESOLVE_FILTER: () => RESOLVE_FILTER,
	SET_BLOCK_TRACKING: () => SET_BLOCK_TRACKING,
	SUSPENSE: () => SUSPENSE,
	TELEPORT: () => TELEPORT,
	TO_DISPLAY_STRING: () => TO_DISPLAY_STRING,
	TO_HANDLERS: () => TO_HANDLERS,
	TO_HANDLER_KEY: () => TO_HANDLER_KEY,
	TRANSITION: () => TRANSITION,
	TRANSITION_GROUP: () => TRANSITION_GROUP,
	TS_NODE_TYPES: () => TS_NODE_TYPES,
	UNREF: () => UNREF,
	V_MODEL_CHECKBOX: () => V_MODEL_CHECKBOX,
	V_MODEL_DYNAMIC: () => V_MODEL_DYNAMIC,
	V_MODEL_RADIO: () => V_MODEL_RADIO,
	V_MODEL_SELECT: () => V_MODEL_SELECT,
	V_MODEL_TEXT: () => V_MODEL_TEXT,
	V_ON_WITH_KEYS: () => V_ON_WITH_KEYS,
	V_ON_WITH_MODIFIERS: () => V_ON_WITH_MODIFIERS,
	V_SHOW: () => V_SHOW,
	WITH_CTX: () => WITH_CTX,
	WITH_DIRECTIVES: () => WITH_DIRECTIVES,
	WITH_MEMO: () => WITH_MEMO,
	advancePositionWithClone: () => advancePositionWithClone,
	advancePositionWithMutation: () => advancePositionWithMutation,
	assert: () => assert,
	baseCompile: () => baseCompile,
	baseParse: () => baseParse,
	buildDirectiveArgs: () => buildDirectiveArgs,
	buildProps: () => buildProps,
	buildSlots: () => buildSlots,
	checkCompatEnabled: () => checkCompatEnabled,
	compile: () => compile,
	convertToBlock: () => convertToBlock,
	createArrayExpression: () => createArrayExpression,
	createAssignmentExpression: () => createAssignmentExpression,
	createBlockStatement: () => createBlockStatement,
	createCacheExpression: () => createCacheExpression,
	createCallExpression: () => createCallExpression,
	createCompilerError: () => createCompilerError,
	createCompoundExpression: () => createCompoundExpression,
	createConditionalExpression: () => createConditionalExpression,
	createDOMCompilerError: () => createDOMCompilerError,
	createForLoopParams: () => createForLoopParams,
	createFunctionExpression: () => createFunctionExpression,
	createIfStatement: () => createIfStatement,
	createInterpolation: () => createInterpolation,
	createObjectExpression: () => createObjectExpression,
	createObjectProperty: () => createObjectProperty,
	createReturnStatement: () => createReturnStatement,
	createRoot: () => createRoot,
	createSequenceExpression: () => createSequenceExpression,
	createSimpleExpression: () => createSimpleExpression,
	createStructuralDirectiveTransform: () => createStructuralDirectiveTransform,
	createTemplateLiteral: () => createTemplateLiteral,
	createTransformContext: () => createTransformContext,
	createVNodeCall: () => createVNodeCall,
	errorMessages: () => errorMessages,
	extractIdentifiers: () => extractIdentifiers,
	findDir: () => findDir,
	findProp: () => findProp,
	forAliasRE: () => forAliasRE,
	generate: () => generate,
	generateCodeFrame: () => generateCodeFrame,
	getBaseTransformPreset: () => getBaseTransformPreset,
	getConstantType: () => getConstantType,
	getMemoedVNodeCall: () => getMemoedVNodeCall,
	getVNodeBlockHelper: () => getVNodeBlockHelper,
	getVNodeHelper: () => getVNodeHelper,
	hasDynamicKeyVBind: () => hasDynamicKeyVBind,
	hasScopeRef: () => hasScopeRef,
	helperNameMap: () => helperNameMap,
	injectProp: () => injectProp,
	isCoreComponent: () => isCoreComponent,
	isFnExpression: () => isFnExpression,
	isFnExpressionBrowser: () => isFnExpressionBrowser,
	isFnExpressionNode: () => isFnExpressionNode,
	isFunctionType: () => isFunctionType,
	isInDestructureAssignment: () => isInDestructureAssignment,
	isInNewExpression: () => isInNewExpression,
	isMemberExpression: () => isMemberExpression,
	isMemberExpressionBrowser: () => isMemberExpressionBrowser,
	isMemberExpressionNode: () => isMemberExpressionNode,
	isReferencedIdentifier: () => isReferencedIdentifier,
	isSimpleIdentifier: () => isSimpleIdentifier,
	isSlotOutlet: () => isSlotOutlet,
	isStaticArgOf: () => isStaticArgOf,
	isStaticExp: () => isStaticExp,
	isStaticProperty: () => isStaticProperty,
	isStaticPropertyKey: () => isStaticPropertyKey,
	isTemplateNode: () => isTemplateNode,
	isText: () => isText$1,
	isVSlot: () => isVSlot,
	locStub: () => locStub,
	noopDirectiveTransform: () => noopDirectiveTransform,
	parse: () => parse,
	parserOptions: () => parserOptions,
	processExpression: () => processExpression,
	processFor: () => processFor,
	processIf: () => processIf,
	processSlotOutlet: () => processSlotOutlet,
	registerRuntimeHelpers: () => registerRuntimeHelpers,
	resolveComponentType: () => resolveComponentType,
	stringifyExpression: () => stringifyExpression,
	toValidAssetId: () => toValidAssetId,
	trackSlotScopes: () => trackSlotScopes,
	trackVForSlotScopes: () => trackVForSlotScopes,
	transform: () => transform,
	transformBind: () => transformBind,
	transformElement: () => transformElement,
	transformExpression: () => transformExpression,
	transformModel: () => transformModel$1,
	transformOn: () => transformOn$1,
	transformStyle: () => transformStyle,
	traverseNode: () => traverseNode,
	unwrapTSNode: () => unwrapTSNode,
	walkBlockDeclarations: () => walkBlockDeclarations,
	walkFunctionParams: () => walkFunctionParams,
	walkIdentifiers: () => walkIdentifiers,
	warnDeprecation: () => warnDeprecation
});
/**
* @vue/compiler-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function decodeHtmlBrowser(raw, asAttr = false) {
	if (!decoder) decoder = document.createElement("div");
	if (asAttr) {
		decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
		return decoder.children[0].getAttribute("foo");
	} else {
		decoder.innerHTML = raw;
		return decoder.textContent;
	}
}
function createDOMCompilerError(code, loc) {
	return createCompilerError(code, loc, void 0);
}
function compile(src, options = {}) {
	return baseCompile(src, extend$1({}, parserOptions, options, {
		nodeTransforms: [
			ignoreSideEffectTags,
			...DOMNodeTransforms,
			...options.nodeTransforms || []
		],
		directiveTransforms: extend$1({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
		transformHoist: null
	}));
}
function parse(template, options = {}) {
	return baseParse(template, extend$1({}, parserOptions, options));
}
var V_MODEL_RADIO, V_MODEL_CHECKBOX, V_MODEL_TEXT, V_MODEL_SELECT, V_MODEL_DYNAMIC, V_ON_WITH_MODIFIERS, V_ON_WITH_KEYS, V_SHOW, TRANSITION, TRANSITION_GROUP, decoder, parserOptions, transformStyle, parseInlineCSS, DOMErrorCodes, DOMErrorMessages, transformVHtml, transformVText, transformModel, isEventOptionModifier, isNonKeyModifier, maybeKeyModifier, isKeyboardEvent, resolveModifiers, transformClick, transformOn, transformShow, ignoreSideEffectTags, DOMNodeTransforms, DOMDirectiveTransforms;
var init_compiler_dom_esm_bundler = __esmMin((() => {
	init_compiler_core_esm_bundler();
	init_compiler_core_esm_bundler();
	init_shared_esm_bundler();
	V_MODEL_RADIO = Symbol(``);
	V_MODEL_CHECKBOX = Symbol(``);
	V_MODEL_TEXT = Symbol(``);
	V_MODEL_SELECT = Symbol(``);
	V_MODEL_DYNAMIC = Symbol(``);
	V_ON_WITH_MODIFIERS = Symbol(``);
	V_ON_WITH_KEYS = Symbol(``);
	V_SHOW = Symbol(``);
	TRANSITION = Symbol(``);
	TRANSITION_GROUP = Symbol(``);
	registerRuntimeHelpers({
		[V_MODEL_RADIO]: `vModelRadio`,
		[V_MODEL_CHECKBOX]: `vModelCheckbox`,
		[V_MODEL_TEXT]: `vModelText`,
		[V_MODEL_SELECT]: `vModelSelect`,
		[V_MODEL_DYNAMIC]: `vModelDynamic`,
		[V_ON_WITH_MODIFIERS]: `withModifiers`,
		[V_ON_WITH_KEYS]: `withKeys`,
		[V_SHOW]: `vShow`,
		[TRANSITION]: `Transition`,
		[TRANSITION_GROUP]: `TransitionGroup`
	});
	parserOptions = {
		parseMode: "html",
		isVoidTag,
		isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
		isPreTag: (tag) => tag === "pre",
		isIgnoreNewlineTag: (tag) => tag === "pre" || tag === "textarea",
		decodeEntities: decodeHtmlBrowser,
		isBuiltInComponent: (tag) => {
			if (tag === "Transition" || tag === "transition") return TRANSITION;
			else if (tag === "TransitionGroup" || tag === "transition-group") return TRANSITION_GROUP;
		},
		getNamespace(tag, parent, rootNamespace) {
			let ns = parent ? parent.ns : rootNamespace;
			if (parent && ns === 2) {
				if (parent.tag === "annotation-xml") {
					if (tag === "svg") return 1;
					if (parent.props.some((a) => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml"))) ns = 0;
				} else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") ns = 0;
			} else if (parent && ns === 1) {
				if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") ns = 0;
			}
			if (ns === 0) {
				if (tag === "svg") return 1;
				if (tag === "math") return 2;
			}
			return ns;
		}
	};
	transformStyle = (node) => {
		if (node.type === 1) node.props.forEach((p, i) => {
			if (p.type === 6 && p.name === "style" && p.value) node.props[i] = {
				type: 7,
				name: `bind`,
				arg: createSimpleExpression(`style`, true, p.loc),
				exp: parseInlineCSS(p.value.content, p.loc),
				modifiers: [],
				loc: p.loc
			};
		});
	};
	parseInlineCSS = (cssText, loc) => {
		const normalized = parseStringStyle(cssText);
		return createSimpleExpression(JSON.stringify(normalized), false, loc, 3);
	};
	DOMErrorCodes = {
		"X_V_HTML_NO_EXPRESSION": 53,
		"53": "X_V_HTML_NO_EXPRESSION",
		"X_V_HTML_WITH_CHILDREN": 54,
		"54": "X_V_HTML_WITH_CHILDREN",
		"X_V_TEXT_NO_EXPRESSION": 55,
		"55": "X_V_TEXT_NO_EXPRESSION",
		"X_V_TEXT_WITH_CHILDREN": 56,
		"56": "X_V_TEXT_WITH_CHILDREN",
		"X_V_MODEL_ON_INVALID_ELEMENT": 57,
		"57": "X_V_MODEL_ON_INVALID_ELEMENT",
		"X_V_MODEL_ARG_ON_ELEMENT": 58,
		"58": "X_V_MODEL_ARG_ON_ELEMENT",
		"X_V_MODEL_ON_FILE_INPUT_ELEMENT": 59,
		"59": "X_V_MODEL_ON_FILE_INPUT_ELEMENT",
		"X_V_MODEL_UNNECESSARY_VALUE": 60,
		"60": "X_V_MODEL_UNNECESSARY_VALUE",
		"X_V_SHOW_NO_EXPRESSION": 61,
		"61": "X_V_SHOW_NO_EXPRESSION",
		"X_TRANSITION_INVALID_CHILDREN": 62,
		"62": "X_TRANSITION_INVALID_CHILDREN",
		"X_IGNORED_SIDE_EFFECT_TAG": 63,
		"63": "X_IGNORED_SIDE_EFFECT_TAG",
		"__EXTEND_POINT__": 64,
		"64": "__EXTEND_POINT__"
	};
	DOMErrorMessages = {
		[53]: `v-html is missing expression.`,
		[54]: `v-html will override element children.`,
		[55]: `v-text is missing expression.`,
		[56]: `v-text will override element children.`,
		[57]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
		[58]: `v-model argument is not supported on plain elements.`,
		[59]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
		[60]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
		[61]: `v-show is missing expression.`,
		[62]: `<Transition> expects exactly one child element or component.`,
		[63]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
	};
	transformVHtml = (dir, node, context) => {
		const { exp, loc } = dir;
		if (!exp) context.onError(createDOMCompilerError(53, loc));
		if (node.children.length) {
			context.onError(createDOMCompilerError(54, loc));
			node.children.length = 0;
		}
		return { props: [createObjectProperty(createSimpleExpression(`innerHTML`, true, loc), exp || createSimpleExpression("", true))] };
	};
	transformVText = (dir, node, context) => {
		const { exp, loc } = dir;
		if (!exp) context.onError(createDOMCompilerError(55, loc));
		if (node.children.length) {
			context.onError(createDOMCompilerError(56, loc));
			node.children.length = 0;
		}
		return { props: [createObjectProperty(createSimpleExpression(`textContent`, true), exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(context.helperString(TO_DISPLAY_STRING), [exp], loc) : createSimpleExpression("", true))] };
	};
	transformModel = (dir, node, context) => {
		const baseResult = transformModel$1(dir, node, context);
		if (!baseResult.props.length || node.tagType === 1) return baseResult;
		if (dir.arg) context.onError(createDOMCompilerError(58, dir.arg.loc));
		const { tag } = node;
		const isCustomElement = context.isCustomElement(tag);
		if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
			let directiveToUse = V_MODEL_TEXT;
			let isInvalidType = false;
			if (tag === "input" || isCustomElement) {
				const type = findProp(node, `type`);
				if (type) {
					if (type.type === 7) directiveToUse = V_MODEL_DYNAMIC;
					else if (type.value) switch (type.value.content) {
						case "radio":
							directiveToUse = V_MODEL_RADIO;
							break;
						case "checkbox":
							directiveToUse = V_MODEL_CHECKBOX;
							break;
						case "file":
							isInvalidType = true;
							context.onError(createDOMCompilerError(59, dir.loc));
					}
				} else if (hasDynamicKeyVBind(node)) directiveToUse = V_MODEL_DYNAMIC;
			} else if (tag === "select") directiveToUse = V_MODEL_SELECT;
			if (!isInvalidType) baseResult.needRuntime = context.helper(directiveToUse);
		} else context.onError(createDOMCompilerError(57, dir.loc));
		baseResult.props = baseResult.props.filter((p) => !(p.key.type === 4 && p.key.content === "modelValue"));
		return baseResult;
	};
	isEventOptionModifier = /* @__PURE__ */ makeMap(`passive,once,capture`);
	isNonKeyModifier = /* @__PURE__ */ makeMap(`stop,prevent,self,ctrl,shift,alt,meta,exact,middle`);
	maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
	isKeyboardEvent = /* @__PURE__ */ makeMap(`onkeyup,onkeydown,onkeypress`);
	resolveModifiers = (key, modifiers, context, loc) => {
		const keyModifiers = [];
		const nonKeyModifiers = [];
		const eventOptionModifiers = [];
		for (let i = 0; i < modifiers.length; i++) {
			const modifier = modifiers[i].content;
			if (modifier === "native" && checkCompatEnabled("COMPILER_V_ON_NATIVE", context, loc)) eventOptionModifiers.push(modifier);
			else if (isEventOptionModifier(modifier)) eventOptionModifiers.push(modifier);
			else if (maybeKeyModifier(modifier)) {
				if (isStaticExp(key)) {
					if (isKeyboardEvent(key.content.toLowerCase())) keyModifiers.push(modifier);
					else nonKeyModifiers.push(modifier);
				} else {
					keyModifiers.push(modifier);
					nonKeyModifiers.push(modifier);
				}
			} else if (isNonKeyModifier(modifier)) nonKeyModifiers.push(modifier);
			else keyModifiers.push(modifier);
		}
		return {
			keyModifiers,
			nonKeyModifiers,
			eventOptionModifiers
		};
	};
	transformClick = (key, event) => {
		return isStaticExp(key) && key.content.toLowerCase() === "onclick" ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([
			`(`,
			key,
			`) === "onClick" ? "${event}" : (`,
			key,
			`)`
		]) : key;
	};
	transformOn = (dir, node, context) => {
		return transformOn$1(dir, node, context, (baseResult) => {
			const { modifiers } = dir;
			if (!modifiers.length) return baseResult;
			let { key, value: handlerExp } = baseResult.props[0];
			const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
			if (nonKeyModifiers.includes("right")) key = transformClick(key, `onContextmenu`);
			if (nonKeyModifiers.includes("middle")) key = transformClick(key, `onMouseup`);
			if (nonKeyModifiers.length) handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [handlerExp, JSON.stringify(nonKeyModifiers)]);
			if (keyModifiers.length && (!isStaticExp(key) || isKeyboardEvent(key.content.toLowerCase()))) handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [handlerExp, JSON.stringify(keyModifiers)]);
			if (eventOptionModifiers.length) {
				const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
				key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([
					`(`,
					key,
					`) + "${modifierPostfix}"`
				]);
			}
			return { props: [createObjectProperty(key, handlerExp)] };
		});
	};
	transformShow = (dir, node, context) => {
		const { exp, loc } = dir;
		if (!exp) context.onError(createDOMCompilerError(61, loc));
		return {
			props: [],
			needRuntime: context.helper(V_SHOW)
		};
	};
	ignoreSideEffectTags = (node, context) => {
		if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) context.removeNode();
	};
	DOMNodeTransforms = [transformStyle, ...[]];
	DOMDirectiveTransforms = {
		cloak: noopDirectiveTransform,
		html: transformVHtml,
		text: transformVText,
		model: transformModel,
		on: transformOn,
		show: transformShow
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2/node_modules/vue/dist/vue.cjs.prod.js
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var require_vue_cjs_prod = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var compilerDom = (init_compiler_dom_esm_bundler(), __toCommonJS(compiler_dom_esm_bundler_exports));
	var runtimeDom = (init_runtime_dom_esm_bundler(), __toCommonJS(runtime_dom_esm_bundler_exports));
	var shared = (init_shared_esm_bundler(), __toCommonJS(shared_esm_bundler_exports));
	function _interopNamespaceDefault(e) {
		var n = Object.create(null);
		if (e) for (var k in e) n[k] = e[k];
		n.default = e;
		return Object.freeze(n);
	}
	var runtimeDom__namespace = /*#__PURE__*/ _interopNamespaceDefault(runtimeDom);
	var compileCache = /* @__PURE__ */ Object.create(null);
	function compileToFunction(template, options) {
		if (!shared.isString(template)) {
			if (template.nodeType) template = template.innerHTML;
			else return shared.NOOP;
		}
		const key = shared.genCacheKey(template, options);
		const cached = compileCache[key];
		if (cached) return cached;
		if (template[0] === "#") {
			const el = document.querySelector(template);
			template = el ? el.innerHTML : ``;
		}
		const opts = shared.extend({
			hoistStatic: true,
			onError: void 0,
			onWarn: shared.NOOP
		}, options);
		if (!opts.isCustomElement && typeof customElements !== "undefined") opts.isCustomElement = (tag) => !!customElements.get(tag);
		const { code } = compilerDom.compile(template, opts);
		const render = new Function("Vue", code)(runtimeDom__namespace);
		render._rc = true;
		return compileCache[key] = render;
	}
	runtimeDom.registerRuntimeCompiler(compileToFunction);
	exports.compile = compileToFunction;
	Object.keys(runtimeDom).forEach(function(k) {
		if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = runtimeDom[k];
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2/node_modules/vue/index.js
var require_vue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_vue_cjs_prod();
}));
//#endregion
//#region ../../node_modules/.pnpm/sortablejs@1.14.0/node_modules/sortablejs/modular/sortable.esm.js
var sortable_esm_exports = /* @__PURE__ */ __exportAll({
	MultiDrag: () => MultiDragPlugin,
	Sortable: () => Sortable,
	Swap: () => SwapPlugin,
	default: () => Sortable
});
/**!
* Sortable 1.14.0
* @author	RubaXa   <trash@rubaxa.org>
* @author	owenm    <owen23355@gmail.com>
* @license MIT
*/
function ownKeys(object, enumerableOnly) {
	var keys = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		if (enumerableOnly) symbols = symbols.filter(function(sym) {
			return Object.getOwnPropertyDescriptor(object, sym).enumerable;
		});
		keys.push.apply(keys, symbols);
	}
	return keys;
}
function _objectSpread2(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i] != null ? arguments[i] : {};
		if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
			_defineProperty(target, key, source[key]);
		});
		else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
		else ownKeys(Object(source)).forEach(function(key) {
			Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
		});
	}
	return target;
}
function _typeof(obj) {
	"@babel/helpers - typeof";
	if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
		return typeof obj;
	};
	else _typeof = function(obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	return _typeof(obj);
}
function _defineProperty(obj, key, value) {
	if (key in obj) Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	else obj[key] = value;
	return obj;
}
function _extends() {
	_extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
	if (source == null) return {};
	var target = {};
	var sourceKeys = Object.keys(source);
	var key, i = 0;
	for (; i < sourceKeys.length; i++) {
		key = sourceKeys[i];
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}
function _objectWithoutProperties(source, excluded) {
	if (source == null) return {};
	var target = _objectWithoutPropertiesLoose(source, excluded);
	var key, i;
	if (Object.getOwnPropertySymbols) {
		var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
		for (i = 0; i < sourceSymbolKeys.length; i++) {
			key = sourceSymbolKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
			target[key] = source[key];
		}
	}
	return target;
}
function _toConsumableArray(arr) {
	return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
	if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
	if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
	if (!o) return;
	if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === "Object" && o.constructor) n = o.constructor.name;
	if (n === "Map" || n === "Set") return Array.from(o);
	if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	return arr2;
}
function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function userAgent(pattern) {
	if (typeof window !== "undefined" && window.navigator) return !!/*@__PURE__*/ navigator.userAgent.match(pattern);
}
function on(el, event, fn) {
	el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
	el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el, selector) {
	if (!selector) return;
	selector[0] === ">" && (selector = selector.substring(1));
	if (el) try {
		if (el.matches) return el.matches(selector);
		else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
		else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
	} catch (_) {
		return false;
	}
	return false;
}
function getParentOrHost(el) {
	return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(el, selector, ctx, includeCTX) {
	if (el) {
		ctx = ctx || document;
		do {
			if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) return el;
			if (el === ctx) break;
		} while (el = getParentOrHost(el));
	}
	return null;
}
function toggleClass(el, name, state) {
	if (el && name) {
		if (el.classList) el.classList[state ? "add" : "remove"](name);
		else el.className = ((" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ") + (state ? " " + name : "")).replace(R_SPACE, " ");
	}
}
function css(el, prop, val) {
	var style = el && el.style;
	if (style) {
		if (val === void 0) {
			if (document.defaultView && document.defaultView.getComputedStyle) val = document.defaultView.getComputedStyle(el, "");
			else if (el.currentStyle) val = el.currentStyle;
			return prop === void 0 ? val : val[prop];
		} else {
			if (!(prop in style) && prop.indexOf("webkit") === -1) prop = "-webkit-" + prop;
			style[prop] = val + (typeof val === "string" ? "" : "px");
		}
	}
}
function matrix(el, selfOnly) {
	var appliedTransforms = "";
	if (typeof el === "string") appliedTransforms = el;
	else do {
		var transform = css(el, "transform");
		if (transform && transform !== "none") appliedTransforms = transform + " " + appliedTransforms;
	} while (!selfOnly && (el = el.parentNode));
	var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
	return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
	if (ctx) {
		var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
		if (iterator) for (; i < n; i++) iterator(list[i], i);
		return list;
	}
	return [];
}
function getWindowScrollingElement() {
	var scrollingElement = document.scrollingElement;
	if (scrollingElement) return scrollingElement;
	else return document.documentElement;
}
/**
* Returns the "bounding client rect" of given element
* @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
* @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
* @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
* @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
* @param  {[HTMLElement]} container              The parent the element will be placed in
* @return {Object}                               The boundingClientRect of el, with specified adjustments
*/
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
	if (!el.getBoundingClientRect && el !== window) return;
	var elRect, top, left, bottom, right, height, width;
	if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
		elRect = el.getBoundingClientRect();
		top = elRect.top;
		left = elRect.left;
		bottom = elRect.bottom;
		right = elRect.right;
		height = elRect.height;
		width = elRect.width;
	} else {
		top = 0;
		left = 0;
		bottom = window.innerHeight;
		right = window.innerWidth;
		height = window.innerHeight;
		width = window.innerWidth;
	}
	if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
		container = container || el.parentNode;
		if (!IE11OrLess) do
			if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
				var containerRect = container.getBoundingClientRect();
				top -= containerRect.top + parseInt(css(container, "border-top-width"));
				left -= containerRect.left + parseInt(css(container, "border-left-width"));
				bottom = top + elRect.height;
				right = left + elRect.width;
				break;
			}
		while (container = container.parentNode);
	}
	if (undoScale && el !== window) {
		var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
		if (elMatrix) {
			top /= scaleY;
			left /= scaleX;
			width /= scaleX;
			height /= scaleY;
			bottom = top + height;
			right = left + width;
		}
	}
	return {
		top,
		left,
		bottom,
		right,
		width,
		height
	};
}
/**
* Checks if a side of an element is scrolled past a side of its parents
* @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
* @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
* @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
* @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
*/
function isScrolledPast(el, elSide, parentSide) {
	var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
	while (parent) {
		var parentSideVal = getRect(parent)[parentSide], visible = void 0;
		if (parentSide === "top" || parentSide === "left") visible = elSideVal >= parentSideVal;
		else visible = elSideVal <= parentSideVal;
		if (!visible) return parent;
		if (parent === getWindowScrollingElement()) break;
		parent = getParentAutoScrollElement(parent, false);
	}
	return false;
}
/**
* Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
* and non-draggable elements
* @param  {HTMLElement} el       The parent element
* @param  {Number} childNum      The index of the child
* @param  {Object} options       Parent Sortable's options
* @return {HTMLElement}          The child at index childNum, or null if not found
*/
function getChild(el, childNum, options, includeDragEl) {
	var currentChild = 0, i = 0, children = el.children;
	while (i < children.length) {
		if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
			if (currentChild === childNum) return children[i];
			currentChild++;
		}
		i++;
	}
	return null;
}
/**
* Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
* @param  {HTMLElement} el       Parent element
* @param  {selector} selector    Any other elements that should be ignored
* @return {HTMLElement}          The last child, ignoring ghostEl
*/
function lastChild(el, selector) {
	var last = el.lastElementChild;
	while (last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector))) last = last.previousElementSibling;
	return last || null;
}
/**
* Returns the index of an element within its parent for a selected set of
* elements
* @param  {HTMLElement} el
* @param  {selector} selector
* @return {number}
*/
function index(el, selector) {
	var index = 0;
	if (!el || !el.parentNode) return -1;
	while (el = el.previousElementSibling) if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) index++;
	return index;
}
/**
* Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
* The value is returned in real pixels.
* @param  {HTMLElement} el
* @return {Array}             Offsets in the format of [left, top]
*/
function getRelativeScrollOffset(el) {
	var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
	if (el) do {
		var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
		offsetLeft += el.scrollLeft * scaleX;
		offsetTop += el.scrollTop * scaleY;
	} while (el !== winScroller && (el = el.parentNode));
	return [offsetLeft, offsetTop];
}
/**
* Returns the index of the object within the given array
* @param  {Array} arr   Array that may or may not hold the object
* @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
* @return {Number}      The index of the object in the array, or -1
*/
function indexOfObject(arr, obj) {
	for (var i in arr) {
		if (!arr.hasOwnProperty(i)) continue;
		for (var key in obj) if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
	}
	return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
	if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
	var elem = el;
	var gotSelf = false;
	do
		if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
			var elemCSS = css(elem);
			if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
				if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
				if (gotSelf || includeSelf) return elem;
				gotSelf = true;
			}
		}
	while (elem = elem.parentNode);
	return getWindowScrollingElement();
}
function extend(dst, src) {
	if (dst && src) {
		for (var key in src) if (src.hasOwnProperty(key)) dst[key] = src[key];
	}
	return dst;
}
function isRectEqual(rect1, rect2) {
	return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
function throttle(callback, ms) {
	return function() {
		if (!_throttleTimeout) {
			var args = arguments, _this = this;
			if (args.length === 1) callback.call(_this, args[0]);
			else callback.apply(_this, args);
			_throttleTimeout = setTimeout(function() {
				_throttleTimeout = void 0;
			}, ms);
		}
	};
}
function cancelThrottle() {
	clearTimeout(_throttleTimeout);
	_throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
	el.scrollLeft += x;
	el.scrollTop += y;
}
function clone(el) {
	var Polymer = window.Polymer;
	var $ = window.jQuery || window.Zepto;
	if (Polymer && Polymer.dom) return Polymer.dom(el).cloneNode(true);
	else if ($) return $(el).clone(true)[0];
	else return el.cloneNode(true);
}
function setRect(el, rect) {
	css(el, "position", "absolute");
	css(el, "top", rect.top);
	css(el, "left", rect.left);
	css(el, "width", rect.width);
	css(el, "height", rect.height);
}
function unsetRect(el) {
	css(el, "position", "");
	css(el, "top", "");
	css(el, "left", "");
	css(el, "width", "");
	css(el, "height", "");
}
function AnimationStateManager() {
	var animationStates = [], animationCallbackId;
	return {
		captureAnimationState: function captureAnimationState() {
			animationStates = [];
			if (!this.options.animation) return;
			[].slice.call(this.el.children).forEach(function(child) {
				if (css(child, "display") === "none" || child === Sortable.ghost) return;
				animationStates.push({
					target: child,
					rect: getRect(child)
				});
				var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
				if (child.thisAnimationDuration) {
					var childMatrix = matrix(child, true);
					if (childMatrix) {
						fromRect.top -= childMatrix.f;
						fromRect.left -= childMatrix.e;
					}
				}
				child.fromRect = fromRect;
			});
		},
		addAnimationState: function addAnimationState(state) {
			animationStates.push(state);
		},
		removeAnimationState: function removeAnimationState(target) {
			animationStates.splice(indexOfObject(animationStates, { target }), 1);
		},
		animateAll: function animateAll(callback) {
			var _this = this;
			if (!this.options.animation) {
				clearTimeout(animationCallbackId);
				if (typeof callback === "function") callback();
				return;
			}
			var animating = false, animationTime = 0;
			animationStates.forEach(function(state) {
				var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
				if (targetMatrix) {
					toRect.top -= targetMatrix.f;
					toRect.left -= targetMatrix.e;
				}
				target.toRect = toRect;
				if (target.thisAnimationDuration) {
					if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
				}
				if (!isRectEqual(toRect, fromRect)) {
					target.prevFromRect = fromRect;
					target.prevToRect = toRect;
					if (!time) time = _this.options.animation;
					_this.animate(target, animatingRect, toRect, time);
				}
				if (time) {
					animating = true;
					animationTime = Math.max(animationTime, time);
					clearTimeout(target.animationResetTimer);
					target.animationResetTimer = setTimeout(function() {
						target.animationTime = 0;
						target.prevFromRect = null;
						target.fromRect = null;
						target.prevToRect = null;
						target.thisAnimationDuration = null;
					}, time);
					target.thisAnimationDuration = time;
				}
			});
			clearTimeout(animationCallbackId);
			if (!animating) {
				if (typeof callback === "function") callback();
			} else animationCallbackId = setTimeout(function() {
				if (typeof callback === "function") callback();
			}, animationTime);
			animationStates = [];
		},
		animate: function animate(target, currentRect, toRect, duration) {
			if (duration) {
				css(target, "transition", "");
				css(target, "transform", "");
				var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
				target.animatingX = !!translateX;
				target.animatingY = !!translateY;
				css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
				this.forRepaintDummy = repaint(target);
				css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
				css(target, "transform", "translate3d(0,0,0)");
				typeof target.animated === "number" && clearTimeout(target.animated);
				target.animated = setTimeout(function() {
					css(target, "transition", "");
					css(target, "transform", "");
					target.animated = false;
					target.animatingX = false;
					target.animatingY = false;
				}, duration);
			}
		}
	};
}
function repaint(target) {
	return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
	return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
function dispatchEvent(_ref) {
	var sortable = _ref.sortable, rootEl = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex = _ref.oldIndex, newIndex = _ref.newIndex, oldDraggableIndex = _ref.oldDraggableIndex, newDraggableIndex = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
	sortable = sortable || rootEl && rootEl[expando];
	if (!sortable) return;
	var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
	if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent(name, {
		bubbles: true,
		cancelable: true
	});
	else {
		evt = document.createEvent("Event");
		evt.initEvent(name, true, true);
	}
	evt.to = toEl || rootEl;
	evt.from = fromEl || rootEl;
	evt.item = targetEl || rootEl;
	evt.clone = cloneEl;
	evt.oldIndex = oldIndex;
	evt.newIndex = newIndex;
	evt.oldDraggableIndex = oldDraggableIndex;
	evt.newDraggableIndex = newDraggableIndex;
	evt.originalEvent = originalEvent;
	evt.pullMode = putSortable ? putSortable.lastPutMode : void 0;
	var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
	for (var option in allEventProperties) evt[option] = allEventProperties[option];
	if (rootEl) rootEl.dispatchEvent(evt);
	if (options[onName]) options[onName].call(sortable, evt);
}
function _dispatchEvent(info) {
	dispatchEvent(_objectSpread2({
		putSortable,
		cloneEl,
		targetEl: dragEl,
		rootEl,
		oldIndex,
		oldDraggableIndex,
		newIndex,
		newDraggableIndex
	}, info));
}
/**
* @class  Sortable
* @param  {HTMLElement}  el
* @param  {Object}       [options]
*/
function Sortable(el, options) {
	if (!(el && el.nodeType && el.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
	this.el = el;
	this.options = options = _extends({}, options);
	el[expando] = this;
	var defaults = {
		group: null,
		sort: true,
		disabled: false,
		store: null,
		handle: null,
		draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
		swapThreshold: 1,
		invertSwap: false,
		invertedSwapThreshold: null,
		removeCloneOnHide: true,
		direction: function direction() {
			return _detectDirection(el, this.options);
		},
		ghostClass: "sortable-ghost",
		chosenClass: "sortable-chosen",
		dragClass: "sortable-drag",
		ignore: "a, img",
		filter: null,
		preventOnFilter: true,
		animation: 0,
		easing: null,
		setData: function setData(dataTransfer, dragEl) {
			dataTransfer.setData("Text", dragEl.textContent);
		},
		dropBubble: false,
		dragoverBubble: false,
		dataIdAttr: "data-id",
		delay: 0,
		delayOnTouchOnly: false,
		touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
		forceFallback: false,
		fallbackClass: "sortable-fallback",
		fallbackOnBody: false,
		fallbackTolerance: 0,
		fallbackOffset: {
			x: 0,
			y: 0
		},
		supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
		emptyInsertThreshold: 5
	};
	PluginManager.initializePlugins(this, el, defaults);
	for (var name in defaults) !(name in options) && (options[name] = defaults[name]);
	_prepareGroup(options);
	for (var fn in this) if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
	this.nativeDraggable = options.forceFallback ? false : supportDraggable;
	if (this.nativeDraggable) this.options.touchStartThreshold = 1;
	if (options.supportPointer) on(el, "pointerdown", this._onTapStart);
	else {
		on(el, "mousedown", this._onTapStart);
		on(el, "touchstart", this._onTapStart);
	}
	if (this.nativeDraggable) {
		on(el, "dragover", this);
		on(el, "dragenter", this);
	}
	sortables.push(this.el);
	options.store && options.store.get && this.sort(options.store.get(this) || []);
	_extends(this, AnimationStateManager());
}
function _globalDragOver(evt) {
	if (evt.dataTransfer) evt.dataTransfer.dropEffect = "move";
	evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
	var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
	if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent("move", {
		bubbles: true,
		cancelable: true
	});
	else {
		evt = document.createEvent("Event");
		evt.initEvent("move", true, true);
	}
	evt.to = toEl;
	evt.from = fromEl;
	evt.dragged = dragEl;
	evt.draggedRect = dragRect;
	evt.related = targetEl || toEl;
	evt.relatedRect = targetRect || getRect(toEl);
	evt.willInsertAfter = willInsertAfter;
	evt.originalEvent = originalEvent;
	fromEl.dispatchEvent(evt);
	if (onMoveFn) retVal = onMoveFn.call(sortable, evt, originalEvent);
	return retVal;
}
function _disableDraggable(el) {
	el.draggable = false;
}
function _unsilent() {
	_silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
	var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
	var spacer = 10;
	return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
	var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
	var spacer = 10;
	return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
	var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
	if (!invertSwap) {
		if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
			if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) pastFirstInvertThresh = true;
			if (!pastFirstInvertThresh) {
				if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) return -lastDirection;
			} else invert = true;
		} else if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) return _getInsertDirection(target);
	}
	invert = invert || invertSwap;
	if (invert) {
		if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
	}
	return 0;
}
/**
* Gets the direction dragEl must be swapped relative to target in order to make it
* seem that dragEl has been "inserted" into that element's position
* @param  {HTMLElement} target       The target whose position dragEl is being inserted at
* @return {Number}                   Direction dragEl must be swapped
*/
function _getInsertDirection(target) {
	if (index(dragEl) < index(target)) return 1;
	else return -1;
}
/**
* Generate id
* @param   {HTMLElement} el
* @returns {String}
* @private
*/
function _generateId(el) {
	var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
	while (i--) sum += str.charCodeAt(i);
	return sum.toString(36);
}
function _saveInputCheckedState(root) {
	savedInputChecked.length = 0;
	var inputs = root.getElementsByTagName("input");
	var idx = inputs.length;
	while (idx--) {
		var el = inputs[idx];
		el.checked && savedInputChecked.push(el);
	}
}
function _nextTick(fn) {
	return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
	return clearTimeout(id);
}
function AutoScrollPlugin() {
	function AutoScroll() {
		this.defaults = {
			scroll: true,
			forceAutoScrollFallback: false,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: true
		};
		for (var fn in this) if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
	}
	AutoScroll.prototype = {
		dragStarted: function dragStarted(_ref) {
			var originalEvent = _ref.originalEvent;
			if (this.sortable.nativeDraggable) on(document, "dragover", this._handleAutoScroll);
			else if (this.options.supportPointer) on(document, "pointermove", this._handleFallbackAutoScroll);
			else if (originalEvent.touches) on(document, "touchmove", this._handleFallbackAutoScroll);
			else on(document, "mousemove", this._handleFallbackAutoScroll);
		},
		dragOverCompleted: function dragOverCompleted(_ref2) {
			var originalEvent = _ref2.originalEvent;
			if (!this.options.dragOverBubble && !originalEvent.rootEl) this._handleAutoScroll(originalEvent);
		},
		drop: function drop() {
			if (this.sortable.nativeDraggable) off(document, "dragover", this._handleAutoScroll);
			else {
				off(document, "pointermove", this._handleFallbackAutoScroll);
				off(document, "touchmove", this._handleFallbackAutoScroll);
				off(document, "mousemove", this._handleFallbackAutoScroll);
			}
			clearPointerElemChangedInterval();
			clearAutoScrolls();
			cancelThrottle();
		},
		nulling: function nulling() {
			touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
			autoScrolls.length = 0;
		},
		_handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
			this._handleAutoScroll(evt, true);
		},
		_handleAutoScroll: function _handleAutoScroll(evt, fallback) {
			var _this = this;
			var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
			touchEvt$1 = evt;
			if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
				autoScroll(evt, this.options, elem, fallback);
				var ogElemScroller = getParentAutoScrollElement(elem, true);
				if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
					pointerElemChangedInterval && clearPointerElemChangedInterval();
					pointerElemChangedInterval = setInterval(function() {
						var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
						if (newElem !== ogElemScroller) {
							ogElemScroller = newElem;
							clearAutoScrolls();
						}
						autoScroll(evt, _this.options, newElem, fallback);
					}, 10);
					lastAutoScrollX = x;
					lastAutoScrollY = y;
				}
			} else {
				if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
					clearAutoScrolls();
					return;
				}
				autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
			}
		}
	};
	return _extends(AutoScroll, {
		pluginName: "scroll",
		initializeByDefault: true
	});
}
function clearAutoScrolls() {
	autoScrolls.forEach(function(autoScroll) {
		clearInterval(autoScroll.pid);
	});
	autoScrolls = [];
}
function clearPointerElemChangedInterval() {
	clearInterval(pointerElemChangedInterval);
}
function Revert() {}
function Remove() {}
function SwapPlugin() {
	function Swap() {
		this.defaults = { swapClass: "sortable-swap-highlight" };
	}
	Swap.prototype = {
		dragStart: function dragStart(_ref) {
			lastSwapEl = _ref.dragEl;
		},
		dragOverValid: function dragOverValid(_ref2) {
			var completed = _ref2.completed, target = _ref2.target, onMove = _ref2.onMove, activeSortable = _ref2.activeSortable, changed = _ref2.changed, cancel = _ref2.cancel;
			if (!activeSortable.options.swap) return;
			var el = this.sortable.el, options = this.options;
			if (target && target !== el) {
				var prevSwapEl = lastSwapEl;
				if (onMove(target) !== false) {
					toggleClass(target, options.swapClass, true);
					lastSwapEl = target;
				} else lastSwapEl = null;
				if (prevSwapEl && prevSwapEl !== lastSwapEl) toggleClass(prevSwapEl, options.swapClass, false);
			}
			changed();
			completed(true);
			cancel();
		},
		drop: function drop(_ref3) {
			var activeSortable = _ref3.activeSortable, putSortable = _ref3.putSortable, dragEl = _ref3.dragEl;
			var toSortable = putSortable || this.sortable;
			var options = this.options;
			lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
			if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
				if (dragEl !== lastSwapEl) {
					toSortable.captureAnimationState();
					if (toSortable !== activeSortable) activeSortable.captureAnimationState();
					swapNodes(dragEl, lastSwapEl);
					toSortable.animateAll();
					if (toSortable !== activeSortable) activeSortable.animateAll();
				}
			}
		},
		nulling: function nulling() {
			lastSwapEl = null;
		}
	};
	return _extends(Swap, {
		pluginName: "swap",
		eventProperties: function eventProperties() {
			return { swapItem: lastSwapEl };
		}
	});
}
function swapNodes(n1, n2) {
	var p1 = n1.parentNode, p2 = n2.parentNode, i1, i2;
	if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
	i1 = index(n1);
	i2 = index(n2);
	if (p1.isEqualNode(p2) && i1 < i2) i2++;
	p1.insertBefore(n2, p1.children[i1]);
	p2.insertBefore(n1, p2.children[i2]);
}
function MultiDragPlugin() {
	function MultiDrag(sortable) {
		for (var fn in this) if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
		if (sortable.options.supportPointer) on(document, "pointerup", this._deselectMultiDrag);
		else {
			on(document, "mouseup", this._deselectMultiDrag);
			on(document, "touchend", this._deselectMultiDrag);
		}
		on(document, "keydown", this._checkKeyDown);
		on(document, "keyup", this._checkKeyUp);
		this.defaults = {
			selectedClass: "sortable-selected",
			multiDragKey: null,
			setData: function setData(dataTransfer, dragEl) {
				var data = "";
				if (multiDragElements.length && multiDragSortable === sortable) multiDragElements.forEach(function(multiDragElement, i) {
					data += (!i ? "" : ", ") + multiDragElement.textContent;
				});
				else data = dragEl.textContent;
				dataTransfer.setData("Text", data);
			}
		};
	}
	MultiDrag.prototype = {
		multiDragKeyDown: false,
		isMultiDrag: false,
		delayStartGlobal: function delayStartGlobal(_ref) {
			dragEl$1 = _ref.dragEl;
		},
		delayEnded: function delayEnded() {
			this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
		},
		setupClone: function setupClone(_ref2) {
			var sortable = _ref2.sortable, cancel = _ref2.cancel;
			if (!this.isMultiDrag) return;
			for (var i = 0; i < multiDragElements.length; i++) {
				multiDragClones.push(clone(multiDragElements[i]));
				multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
				multiDragClones[i].draggable = false;
				multiDragClones[i].style["will-change"] = "";
				toggleClass(multiDragClones[i], this.options.selectedClass, false);
				multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
			}
			sortable._hideClone();
			cancel();
		},
		clone: function clone(_ref3) {
			var sortable = _ref3.sortable, rootEl = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
			if (!this.isMultiDrag) return;
			if (!this.options.removeCloneOnHide) {
				if (multiDragElements.length && multiDragSortable === sortable) {
					insertMultiDragClones(true, rootEl);
					dispatchSortableEvent("clone");
					cancel();
				}
			}
		},
		showClone: function showClone(_ref4) {
			var cloneNowShown = _ref4.cloneNowShown, rootEl = _ref4.rootEl, cancel = _ref4.cancel;
			if (!this.isMultiDrag) return;
			insertMultiDragClones(false, rootEl);
			multiDragClones.forEach(function(clone) {
				css(clone, "display", "");
			});
			cloneNowShown();
			clonesHidden = false;
			cancel();
		},
		hideClone: function hideClone(_ref5) {
			var _this = this;
			_ref5.sortable;
			var cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
			if (!this.isMultiDrag) return;
			multiDragClones.forEach(function(clone) {
				css(clone, "display", "none");
				if (_this.options.removeCloneOnHide && clone.parentNode) clone.parentNode.removeChild(clone);
			});
			cloneNowHidden();
			clonesHidden = true;
			cancel();
		},
		dragStartGlobal: function dragStartGlobal(_ref6) {
			_ref6.sortable;
			if (!this.isMultiDrag && multiDragSortable) multiDragSortable.multiDrag._deselectMultiDrag();
			multiDragElements.forEach(function(multiDragElement) {
				multiDragElement.sortableIndex = index(multiDragElement);
			});
			multiDragElements = multiDragElements.sort(function(a, b) {
				return a.sortableIndex - b.sortableIndex;
			});
			dragStarted = true;
		},
		dragStarted: function dragStarted(_ref7) {
			var _this2 = this;
			var sortable = _ref7.sortable;
			if (!this.isMultiDrag) return;
			if (this.options.sort) {
				sortable.captureAnimationState();
				if (this.options.animation) {
					multiDragElements.forEach(function(multiDragElement) {
						if (multiDragElement === dragEl$1) return;
						css(multiDragElement, "position", "absolute");
					});
					var dragRect = getRect(dragEl$1, false, true, true);
					multiDragElements.forEach(function(multiDragElement) {
						if (multiDragElement === dragEl$1) return;
						setRect(multiDragElement, dragRect);
					});
					folding = true;
					initialFolding = true;
				}
			}
			sortable.animateAll(function() {
				folding = false;
				initialFolding = false;
				if (_this2.options.animation) multiDragElements.forEach(function(multiDragElement) {
					unsetRect(multiDragElement);
				});
				if (_this2.options.sort) removeMultiDragElements();
			});
		},
		dragOver: function dragOver(_ref8) {
			var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
			if (folding && ~multiDragElements.indexOf(target)) {
				completed(false);
				cancel();
			}
		},
		revert: function revert(_ref9) {
			var fromSortable = _ref9.fromSortable, rootEl = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
			if (multiDragElements.length > 1) {
				multiDragElements.forEach(function(multiDragElement) {
					sortable.addAnimationState({
						target: multiDragElement,
						rect: folding ? getRect(multiDragElement) : dragRect
					});
					unsetRect(multiDragElement);
					multiDragElement.fromRect = dragRect;
					fromSortable.removeAnimationState(multiDragElement);
				});
				folding = false;
				insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
			}
		},
		dragOverCompleted: function dragOverCompleted(_ref10) {
			var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl = _ref10.parentEl, putSortable = _ref10.putSortable;
			var options = this.options;
			if (insertion) {
				if (isOwner) activeSortable._hideClone();
				initialFolding = false;
				if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
					var dragRectAbsolute = getRect(dragEl$1, false, true, true);
					multiDragElements.forEach(function(multiDragElement) {
						if (multiDragElement === dragEl$1) return;
						setRect(multiDragElement, dragRectAbsolute);
						parentEl.appendChild(multiDragElement);
					});
					folding = true;
				}
				if (!isOwner) {
					if (!folding) removeMultiDragElements();
					if (multiDragElements.length > 1) {
						var clonesHiddenBefore = clonesHidden;
						activeSortable._showClone(sortable);
						if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) multiDragClones.forEach(function(clone) {
							activeSortable.addAnimationState({
								target: clone,
								rect: clonesFromRect
							});
							clone.fromRect = clonesFromRect;
							clone.thisAnimationDuration = null;
						});
					} else activeSortable._showClone(sortable);
				}
			}
		},
		dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
			var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
			multiDragElements.forEach(function(multiDragElement) {
				multiDragElement.thisAnimationDuration = null;
			});
			if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
				clonesFromRect = _extends({}, dragRect);
				var dragMatrix = matrix(dragEl$1, true);
				clonesFromRect.top -= dragMatrix.f;
				clonesFromRect.left -= dragMatrix.e;
			}
		},
		dragOverAnimationComplete: function dragOverAnimationComplete() {
			if (folding) {
				folding = false;
				removeMultiDragElements();
			}
		},
		drop: function drop(_ref12) {
			var evt = _ref12.originalEvent, rootEl = _ref12.rootEl, parentEl = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex = _ref12.oldIndex, putSortable = _ref12.putSortable;
			var toSortable = putSortable || this.sortable;
			if (!evt) return;
			var options = this.options, children = parentEl.children;
			if (!dragStarted) {
				if (options.multiDragKey && !this.multiDragKeyDown) this._deselectMultiDrag();
				toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
				if (!~multiDragElements.indexOf(dragEl$1)) {
					multiDragElements.push(dragEl$1);
					dispatchEvent({
						sortable,
						rootEl,
						name: "select",
						targetEl: dragEl$1,
						originalEvt: evt
					});
					if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
						var lastIndex = index(lastMultiDragSelect), currentIndex = index(dragEl$1);
						if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
							var n, i;
							if (currentIndex > lastIndex) {
								i = lastIndex;
								n = currentIndex;
							} else {
								i = currentIndex;
								n = lastIndex + 1;
							}
							for (; i < n; i++) {
								if (~multiDragElements.indexOf(children[i])) continue;
								toggleClass(children[i], options.selectedClass, true);
								multiDragElements.push(children[i]);
								dispatchEvent({
									sortable,
									rootEl,
									name: "select",
									targetEl: children[i],
									originalEvt: evt
								});
							}
						}
					} else lastMultiDragSelect = dragEl$1;
					multiDragSortable = toSortable;
				} else {
					multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
					lastMultiDragSelect = null;
					dispatchEvent({
						sortable,
						rootEl,
						name: "deselect",
						targetEl: dragEl$1,
						originalEvt: evt
					});
				}
			}
			if (dragStarted && this.isMultiDrag) {
				folding = false;
				if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
					var dragRect = getRect(dragEl$1), multiDragIndex = index(dragEl$1, ":not(." + this.options.selectedClass + ")");
					if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
					toSortable.captureAnimationState();
					if (!initialFolding) {
						if (options.animation) {
							dragEl$1.fromRect = dragRect;
							multiDragElements.forEach(function(multiDragElement) {
								multiDragElement.thisAnimationDuration = null;
								if (multiDragElement !== dragEl$1) {
									var rect = folding ? getRect(multiDragElement) : dragRect;
									multiDragElement.fromRect = rect;
									toSortable.addAnimationState({
										target: multiDragElement,
										rect
									});
								}
							});
						}
						removeMultiDragElements();
						multiDragElements.forEach(function(multiDragElement) {
							if (children[multiDragIndex]) parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
							else parentEl.appendChild(multiDragElement);
							multiDragIndex++;
						});
						if (oldIndex === index(dragEl$1)) {
							var update = false;
							multiDragElements.forEach(function(multiDragElement) {
								if (multiDragElement.sortableIndex !== index(multiDragElement)) {
									update = true;
									return;
								}
							});
							if (update) dispatchSortableEvent("update");
						}
					}
					multiDragElements.forEach(function(multiDragElement) {
						unsetRect(multiDragElement);
					});
					toSortable.animateAll();
				}
				multiDragSortable = toSortable;
			}
			if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") multiDragClones.forEach(function(clone) {
				clone.parentNode && clone.parentNode.removeChild(clone);
			});
		},
		nullingGlobal: function nullingGlobal() {
			this.isMultiDrag = dragStarted = false;
			multiDragClones.length = 0;
		},
		destroyGlobal: function destroyGlobal() {
			this._deselectMultiDrag();
			off(document, "pointerup", this._deselectMultiDrag);
			off(document, "mouseup", this._deselectMultiDrag);
			off(document, "touchend", this._deselectMultiDrag);
			off(document, "keydown", this._checkKeyDown);
			off(document, "keyup", this._checkKeyUp);
		},
		_deselectMultiDrag: function _deselectMultiDrag(evt) {
			if (typeof dragStarted !== "undefined" && dragStarted) return;
			if (multiDragSortable !== this.sortable) return;
			if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return;
			if (evt && evt.button !== 0) return;
			while (multiDragElements.length) {
				var el = multiDragElements[0];
				toggleClass(el, this.options.selectedClass, false);
				multiDragElements.shift();
				dispatchEvent({
					sortable: this.sortable,
					rootEl: this.sortable.el,
					name: "deselect",
					targetEl: el,
					originalEvt: evt
				});
			}
		},
		_checkKeyDown: function _checkKeyDown(evt) {
			if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = true;
		},
		_checkKeyUp: function _checkKeyUp(evt) {
			if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = false;
		}
	};
	return _extends(MultiDrag, {
		pluginName: "multiDrag",
		utils: {
			/**
			* Selects the provided multi-drag item
			* @param  {HTMLElement} el    The element to be selected
			*/
			select: function select(el) {
				var sortable = el.parentNode[expando];
				if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
				if (multiDragSortable && multiDragSortable !== sortable) {
					multiDragSortable.multiDrag._deselectMultiDrag();
					multiDragSortable = sortable;
				}
				toggleClass(el, sortable.options.selectedClass, true);
				multiDragElements.push(el);
			},
			/**
			* Deselects the provided multi-drag item
			* @param  {HTMLElement} el    The element to be deselected
			*/
			deselect: function deselect(el) {
				var sortable = el.parentNode[expando], index = multiDragElements.indexOf(el);
				if (!sortable || !sortable.options.multiDrag || !~index) return;
				toggleClass(el, sortable.options.selectedClass, false);
				multiDragElements.splice(index, 1);
			}
		},
		eventProperties: function eventProperties() {
			var _this3 = this;
			var oldIndicies = [], newIndicies = [];
			multiDragElements.forEach(function(multiDragElement) {
				oldIndicies.push({
					multiDragElement,
					index: multiDragElement.sortableIndex
				});
				var newIndex;
				if (folding && multiDragElement !== dragEl$1) newIndex = -1;
				else if (folding) newIndex = index(multiDragElement, ":not(." + _this3.options.selectedClass + ")");
				else newIndex = index(multiDragElement);
				newIndicies.push({
					multiDragElement,
					index: newIndex
				});
			});
			return {
				items: _toConsumableArray(multiDragElements),
				clones: [].concat(multiDragClones),
				oldIndicies,
				newIndicies
			};
		},
		optionListeners: { multiDragKey: function multiDragKey(key) {
			key = key.toLowerCase();
			if (key === "ctrl") key = "Control";
			else if (key.length > 1) key = key.charAt(0).toUpperCase() + key.substr(1);
			return key;
		} }
	});
}
function insertMultiDragElements(clonesInserted, rootEl) {
	multiDragElements.forEach(function(multiDragElement, i) {
		var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
		if (target) rootEl.insertBefore(multiDragElement, target);
		else rootEl.appendChild(multiDragElement);
	});
}
/**
* Insert multi-drag clones
* @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
* @param  {HTMLElement} rootEl
*/
function insertMultiDragClones(elementsInserted, rootEl) {
	multiDragClones.forEach(function(clone, i) {
		var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
		if (target) rootEl.insertBefore(clone, target);
		else rootEl.appendChild(clone);
	});
}
function removeMultiDragElements() {
	multiDragElements.forEach(function(multiDragElement) {
		if (multiDragElement === dragEl$1) return;
		multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
	});
}
var version, IE11OrLess, Edge, FireFox, Safari, IOS, ChromeForAndroid, captureMode, R_SPACE, _throttleTimeout, expando, plugins, defaults, PluginManager, _excluded, pluginEvent, dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted, ignoreNextClick, sortables, tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh, isCircumstantialInvert, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll, _silent, savedInputChecked, documentExists, PositionGhostAbsolutely, CSSFloatProperty, supportDraggable, supportCssPointerEvents, _detectDirection, _dragElInRowColumn, _detectNearestEmptySortable, _prepareGroup, _hideGhostForTarget, _unhideGhostForTarget, nearestEmptyInsertDetectEvent, _checkOutsideTargetEl, autoScrolls, scrollEl, scrollRootEl, scrolling, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval, autoScroll, drop, lastSwapEl, multiDragElements, multiDragClones, lastMultiDragSelect, multiDragSortable, initialFolding, folding, dragStarted, dragEl$1, clonesFromRect, clonesHidden;
var init_sortable_esm = __esmMin((() => {
	version = "1.14.0";
	IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
	Edge = userAgent(/Edge/i);
	FireFox = userAgent(/firefox/i);
	Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
	IOS = userAgent(/iP(ad|od|hone)/i);
	ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
	captureMode = {
		capture: false,
		passive: false
	};
	R_SPACE = /\s+/g;
	expando = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
	plugins = [];
	defaults = { initializeByDefault: true };
	PluginManager = {
		mount: function mount(plugin) {
			for (var option in defaults) if (defaults.hasOwnProperty(option) && !(option in plugin)) plugin[option] = defaults[option];
			plugins.forEach(function(p) {
				if (p.pluginName === plugin.pluginName) throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
			});
			plugins.push(plugin);
		},
		pluginEvent: function pluginEvent(eventName, sortable, evt) {
			var _this = this;
			this.eventCanceled = false;
			evt.cancel = function() {
				_this.eventCanceled = true;
			};
			var eventNameGlobal = eventName + "Global";
			plugins.forEach(function(plugin) {
				if (!sortable[plugin.pluginName]) return;
				if (sortable[plugin.pluginName][eventNameGlobal]) sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({ sortable }, evt));
				if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) sortable[plugin.pluginName][eventName](_objectSpread2({ sortable }, evt));
			});
		},
		initializePlugins: function initializePlugins(sortable, el, defaults, options) {
			plugins.forEach(function(plugin) {
				var pluginName = plugin.pluginName;
				if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
				var initialized = new plugin(sortable, el, sortable.options);
				initialized.sortable = sortable;
				initialized.options = sortable.options;
				sortable[pluginName] = initialized;
				_extends(defaults, initialized.defaults);
			});
			for (var option in sortable.options) {
				if (!sortable.options.hasOwnProperty(option)) continue;
				var modified = this.modifyOption(sortable, option, sortable.options[option]);
				if (typeof modified !== "undefined") sortable.options[option] = modified;
			}
		},
		getEventProperties: function getEventProperties(name, sortable) {
			var eventProperties = {};
			plugins.forEach(function(plugin) {
				if (typeof plugin.eventProperties !== "function") return;
				_extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
			});
			return eventProperties;
		},
		modifyOption: function modifyOption(sortable, name, value) {
			var modifiedValue;
			plugins.forEach(function(plugin) {
				if (!sortable[plugin.pluginName]) return;
				if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
			});
			return modifiedValue;
		}
	};
	_excluded = ["evt"];
	pluginEvent = function pluginEvent(eventName, sortable) {
		var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
		PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
			dragEl,
			parentEl,
			ghostEl,
			rootEl,
			nextEl,
			lastDownEl,
			cloneEl,
			cloneHidden,
			dragStarted: moved,
			putSortable,
			activeSortable: Sortable.active,
			originalEvent,
			oldIndex,
			oldDraggableIndex,
			newIndex,
			newDraggableIndex,
			hideGhostForTarget: _hideGhostForTarget,
			unhideGhostForTarget: _unhideGhostForTarget,
			cloneNowHidden: function cloneNowHidden() {
				cloneHidden = true;
			},
			cloneNowShown: function cloneNowShown() {
				cloneHidden = false;
			},
			dispatchSortableEvent: function dispatchSortableEvent(name) {
				_dispatchEvent({
					sortable,
					name,
					originalEvent
				});
			}
		}, data));
	};
	awaitingDragStarted = false;
	ignoreNextClick = false;
	sortables = [];
	pastFirstInvertThresh = false;
	isCircumstantialInvert = false;
	ghostRelativeParentInitialScroll = [];
	_silent = false;
	savedInputChecked = [];
	documentExists = typeof document !== "undefined";
	PositionGhostAbsolutely = IOS;
	CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float";
	supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div");
	supportCssPointerEvents = function() {
		if (!documentExists) return;
		if (IE11OrLess) return false;
		var el = document.createElement("x");
		el.style.cssText = "pointer-events:auto";
		return el.style.pointerEvents === "auto";
	}();
	_detectDirection = function _detectDirection(el, options) {
		var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
		if (elCSS.display === "flex") return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
		if (elCSS.display === "grid") return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
		if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
			var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
			return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
		}
		return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
	};
	_dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
		var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
		return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
	};
	_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
		var ret;
		sortables.some(function(sortable) {
			var threshold = sortable[expando].options.emptyInsertThreshold;
			if (!threshold || lastChild(sortable)) return;
			var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
			if (insideHorizontally && insideVertically) return ret = sortable;
		});
		return ret;
	};
	_prepareGroup = function _prepareGroup(options) {
		function toFn(value, pull) {
			return function(to, from, dragEl, evt) {
				var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
				if (value == null && (pull || sameGroup)) return true;
				else if (value == null || value === false) return false;
				else if (pull && value === "clone") return value;
				else if (typeof value === "function") return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
				else {
					var otherGroup = (pull ? to : from).options.group.name;
					return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
				}
			};
		}
		var group = {};
		var originalGroup = options.group;
		if (!originalGroup || _typeof(originalGroup) != "object") originalGroup = { name: originalGroup };
		group.name = originalGroup.name;
		group.checkPull = toFn(originalGroup.pull, true);
		group.checkPut = toFn(originalGroup.put);
		group.revertClone = originalGroup.revertClone;
		options.group = group;
	};
	_hideGhostForTarget = function _hideGhostForTarget() {
		if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "none");
	};
	_unhideGhostForTarget = function _unhideGhostForTarget() {
		if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "");
	};
	if (documentExists) document.addEventListener("click", function(evt) {
		if (ignoreNextClick) {
			evt.preventDefault();
			evt.stopPropagation && evt.stopPropagation();
			evt.stopImmediatePropagation && evt.stopImmediatePropagation();
			ignoreNextClick = false;
			return false;
		}
	}, true);
	nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
		if (dragEl) {
			evt = evt.touches ? evt.touches[0] : evt;
			var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
			if (nearest) {
				var event = {};
				for (var i in evt) if (evt.hasOwnProperty(i)) event[i] = evt[i];
				event.target = event.rootEl = nearest;
				event.preventDefault = void 0;
				event.stopPropagation = void 0;
				nearest[expando]._onDragOver(event);
			}
		}
	};
	_checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
		if (dragEl) dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
	};
	Sortable.prototype = (
	/** @lends Sortable.prototype */
	{
		constructor: Sortable,
		_isOutsideThisEl: function _isOutsideThisEl(target) {
			if (!this.el.contains(target) && target !== this.el) lastTarget = null;
		},
		_getDirection: function _getDirection(evt, target) {
			return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
		},
		_onTapStart: function _onTapStart(evt) {
			if (!evt.cancelable) return;
			var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
			_saveInputCheckedState(el);
			if (dragEl) return;
			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) return;
			if (originalTarget.isContentEditable) return;
			if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") return;
			target = closest(target, options.draggable, el, false);
			if (target && target.animated) return;
			if (lastDownEl === target) return;
			oldIndex = index(target);
			oldDraggableIndex = index(target, options.draggable);
			if (typeof filter === "function") {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent({
						sortable: _this,
						rootEl: originalTarget,
						name: "filter",
						targetEl: target,
						toEl: el,
						fromEl: el
					});
					pluginEvent("filter", _this, { evt });
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return;
				}
			} else if (filter) {
				filter = filter.split(",").some(function(criteria) {
					criteria = closest(originalTarget, criteria.trim(), el, false);
					if (criteria) {
						_dispatchEvent({
							sortable: _this,
							rootEl: criteria,
							name: "filter",
							targetEl: target,
							fromEl: el,
							toEl: el
						});
						pluginEvent("filter", _this, { evt });
						return true;
					}
				});
				if (filter) {
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return;
				}
			}
			if (options.handle && !closest(originalTarget, options.handle, el, false)) return;
			this._prepareDragStart(evt, touch, target);
		},
		_prepareDragStart: function _prepareDragStart(evt, touch, target) {
			var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
			if (target && !dragEl && target.parentNode === el) {
				var dragRect = getRect(target);
				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				Sortable.dragged = dragEl;
				tapEvt = {
					target: dragEl,
					clientX: (touch || evt).clientX,
					clientY: (touch || evt).clientY
				};
				tapDistanceLeft = tapEvt.clientX - dragRect.left;
				tapDistanceTop = tapEvt.clientY - dragRect.top;
				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;
				dragEl.style["will-change"] = "all";
				dragStartFn = function dragStartFn() {
					pluginEvent("delayEnded", _this, { evt });
					if (Sortable.eventCanceled) {
						_this._onDrop();
						return;
					}
					_this._disableDelayedDragEvents();
					if (!FireFox && _this.nativeDraggable) dragEl.draggable = true;
					_this._triggerDragStart(evt, touch);
					_dispatchEvent({
						sortable: _this,
						name: "choose",
						originalEvent: evt
					});
					toggleClass(dragEl, options.chosenClass, true);
				};
				options.ignore.split(",").forEach(function(criteria) {
					find(dragEl, criteria.trim(), _disableDraggable);
				});
				on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
				on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
				on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
				on(ownerDocument, "mouseup", _this._onDrop);
				on(ownerDocument, "touchend", _this._onDrop);
				on(ownerDocument, "touchcancel", _this._onDrop);
				if (FireFox && this.nativeDraggable) {
					this.options.touchStartThreshold = 4;
					dragEl.draggable = true;
				}
				pluginEvent("delayStart", this, { evt });
				if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
					if (Sortable.eventCanceled) {
						this._onDrop();
						return;
					}
					on(ownerDocument, "mouseup", _this._disableDelayedDrag);
					on(ownerDocument, "touchend", _this._disableDelayedDrag);
					on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
					on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
					on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
					options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else dragStartFn();
			}
		},
		_delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
			var touch = e.touches ? e.touches[0] : e;
			if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) this._disableDelayedDrag();
		},
		_disableDelayedDrag: function _disableDelayedDrag() {
			dragEl && _disableDraggable(dragEl);
			clearTimeout(this._dragStartTimer);
			this._disableDelayedDragEvents();
		},
		_disableDelayedDragEvents: function _disableDelayedDragEvents() {
			var ownerDocument = this.el.ownerDocument;
			off(ownerDocument, "mouseup", this._disableDelayedDrag);
			off(ownerDocument, "touchend", this._disableDelayedDrag);
			off(ownerDocument, "touchcancel", this._disableDelayedDrag);
			off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
			off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
			off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
		},
		_triggerDragStart: function _triggerDragStart(evt, touch) {
			touch = touch || evt.pointerType == "touch" && evt;
			if (!this.nativeDraggable || touch) {
				if (this.options.supportPointer) on(document, "pointermove", this._onTouchMove);
				else if (touch) on(document, "touchmove", this._onTouchMove);
				else on(document, "mousemove", this._onTouchMove);
			} else {
				on(dragEl, "dragend", this);
				on(rootEl, "dragstart", this._onDragStart);
			}
			try {
				if (document.selection) _nextTick(function() {
					document.selection.empty();
				});
				else window.getSelection().removeAllRanges();
			} catch (err) {}
		},
		_dragStarted: function _dragStarted(fallback, evt) {
			awaitingDragStarted = false;
			if (rootEl && dragEl) {
				pluginEvent("dragStarted", this, { evt });
				if (this.nativeDraggable) on(document, "dragover", _checkOutsideTargetEl);
				var options = this.options;
				!fallback && toggleClass(dragEl, options.dragClass, false);
				toggleClass(dragEl, options.ghostClass, true);
				Sortable.active = this;
				fallback && this._appendGhost();
				_dispatchEvent({
					sortable: this,
					name: "start",
					originalEvent: evt
				});
			} else this._nulling();
		},
		_emulateDragOver: function _emulateDragOver() {
			if (touchEvt) {
				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;
				_hideGhostForTarget();
				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				var parent = target;
				while (target && target.shadowRoot) {
					target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
					if (target === parent) break;
					parent = target;
				}
				dragEl.parentNode[expando]._isOutsideThisEl(target);
				if (parent) do {
					if (parent[expando]) {
						var inserted = void 0;
						inserted = parent[expando]._onDragOver({
							clientX: touchEvt.clientX,
							clientY: touchEvt.clientY,
							target,
							rootEl: parent
						});
						if (inserted && !this.options.dragoverBubble) break;
					}
					target = parent;
				} while (parent = parent.parentNode);
				_unhideGhostForTarget();
			}
		},
		_onTouchMove: function _onTouchMove(evt) {
			if (tapEvt) {
				var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
				if (!Sortable.active && !awaitingDragStarted) {
					if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) return;
					this._onDragStart(evt, true);
				}
				if (ghostEl) {
					if (ghostMatrix) {
						ghostMatrix.e += dx - (lastDx || 0);
						ghostMatrix.f += dy - (lastDy || 0);
					} else ghostMatrix = {
						a: 1,
						b: 0,
						c: 0,
						d: 1,
						e: dx,
						f: dy
					};
					var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
					css(ghostEl, "webkitTransform", cssMatrix);
					css(ghostEl, "mozTransform", cssMatrix);
					css(ghostEl, "msTransform", cssMatrix);
					css(ghostEl, "transform", cssMatrix);
					lastDx = dx;
					lastDy = dy;
					touchEvt = touch;
				}
				evt.cancelable && evt.preventDefault();
			}
		},
		_appendGhost: function _appendGhost() {
			if (!ghostEl) {
				var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
				if (PositionGhostAbsolutely) {
					ghostRelativeParent = container;
					while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) ghostRelativeParent = ghostRelativeParent.parentNode;
					if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
						if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
						rect.top += ghostRelativeParent.scrollTop;
						rect.left += ghostRelativeParent.scrollLeft;
					} else ghostRelativeParent = getWindowScrollingElement();
					ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
				}
				ghostEl = dragEl.cloneNode(true);
				toggleClass(ghostEl, options.ghostClass, false);
				toggleClass(ghostEl, options.fallbackClass, true);
				toggleClass(ghostEl, options.dragClass, true);
				css(ghostEl, "transition", "");
				css(ghostEl, "transform", "");
				css(ghostEl, "box-sizing", "border-box");
				css(ghostEl, "margin", 0);
				css(ghostEl, "top", rect.top);
				css(ghostEl, "left", rect.left);
				css(ghostEl, "width", rect.width);
				css(ghostEl, "height", rect.height);
				css(ghostEl, "opacity", "0.8");
				css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
				css(ghostEl, "zIndex", "100000");
				css(ghostEl, "pointerEvents", "none");
				Sortable.ghost = ghostEl;
				container.appendChild(ghostEl);
				css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
			}
		},
		_onDragStart: function _onDragStart(evt, fallback) {
			var _this = this;
			var dataTransfer = evt.dataTransfer;
			var options = _this.options;
			pluginEvent("dragStart", this, { evt });
			if (Sortable.eventCanceled) {
				this._onDrop();
				return;
			}
			pluginEvent("setupClone", this);
			if (!Sortable.eventCanceled) {
				cloneEl = clone(dragEl);
				cloneEl.draggable = false;
				cloneEl.style["will-change"] = "";
				this._hideClone();
				toggleClass(cloneEl, this.options.chosenClass, false);
				Sortable.clone = cloneEl;
			}
			_this.cloneId = _nextTick(function() {
				pluginEvent("clone", _this);
				if (Sortable.eventCanceled) return;
				if (!_this.options.removeCloneOnHide) rootEl.insertBefore(cloneEl, dragEl);
				_this._hideClone();
				_dispatchEvent({
					sortable: _this,
					name: "clone"
				});
			});
			!fallback && toggleClass(dragEl, options.dragClass, true);
			if (fallback) {
				ignoreNextClick = true;
				_this._loopId = setInterval(_this._emulateDragOver, 50);
			} else {
				off(document, "mouseup", _this._onDrop);
				off(document, "touchend", _this._onDrop);
				off(document, "touchcancel", _this._onDrop);
				if (dataTransfer) {
					dataTransfer.effectAllowed = "move";
					options.setData && options.setData.call(_this, dataTransfer, dragEl);
				}
				on(document, "drop", _this);
				css(dragEl, "transform", "translateZ(0)");
			}
			awaitingDragStarted = true;
			_this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
			on(document, "selectstart", _this);
			moved = true;
			if (Safari) css(document.body, "user-select", "none");
		},
		_onDragOver: function _onDragOver(evt) {
			var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
			if (_silent) return;
			function dragOverEvent(name, extra) {
				pluginEvent(name, _this, _objectSpread2({
					evt,
					isOwner,
					axis: vertical ? "vertical" : "horizontal",
					revert,
					dragRect,
					targetRect,
					canSort,
					fromSortable,
					target,
					completed,
					onMove: function onMove(target, after) {
						return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
					},
					changed
				}, extra));
			}
			function capture() {
				dragOverEvent("dragOverAnimationCapture");
				_this.captureAnimationState();
				if (_this !== fromSortable) fromSortable.captureAnimationState();
			}
			function completed(insertion) {
				dragOverEvent("dragOverCompleted", { insertion });
				if (insertion) {
					if (isOwner) activeSortable._hideClone();
					else activeSortable._showClone(_this);
					if (_this !== fromSortable) {
						toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
						toggleClass(dragEl, options.ghostClass, true);
					}
					if (putSortable !== _this && _this !== Sortable.active) putSortable = _this;
					else if (_this === Sortable.active && putSortable) putSortable = null;
					if (fromSortable === _this) _this._ignoreWhileAnimating = target;
					_this.animateAll(function() {
						dragOverEvent("dragOverAnimationComplete");
						_this._ignoreWhileAnimating = null;
					});
					if (_this !== fromSortable) {
						fromSortable.animateAll();
						fromSortable._ignoreWhileAnimating = null;
					}
				}
				if (target === dragEl && !dragEl.animated || target === el && !target.animated) lastTarget = null;
				if (!options.dragoverBubble && !evt.rootEl && target !== document) {
					dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
					!insertion && nearestEmptyInsertDetectEvent(evt);
				}
				!options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
				return completedFired = true;
			}
			function changed() {
				newIndex = index(dragEl);
				newDraggableIndex = index(dragEl, options.draggable);
				_dispatchEvent({
					sortable: _this,
					name: "change",
					toEl: el,
					newIndex,
					newDraggableIndex,
					originalEvent: evt
				});
			}
			if (evt.preventDefault !== void 0) evt.cancelable && evt.preventDefault();
			target = closest(target, options.draggable, el, true);
			dragOverEvent("dragOver");
			if (Sortable.eventCanceled) return completedFired;
			if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) return completed(false);
			ignoreNextClick = false;
			if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
				vertical = this._getDirection(evt, target) === "vertical";
				dragRect = getRect(dragEl);
				dragOverEvent("dragOverValid");
				if (Sortable.eventCanceled) return completedFired;
				if (revert) {
					parentEl = rootEl;
					capture();
					this._hideClone();
					dragOverEvent("revert");
					if (!Sortable.eventCanceled) {
						if (nextEl) rootEl.insertBefore(dragEl, nextEl);
						else rootEl.appendChild(dragEl);
					}
					return completed(true);
				}
				var elLastChild = lastChild(el, options.draggable);
				if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
					if (elLastChild === dragEl) return completed(false);
					if (elLastChild && el === evt.target) target = elLastChild;
					if (target) targetRect = getRect(target);
					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
						capture();
						el.appendChild(dragEl);
						parentEl = el;
						changed();
						return completed(true);
					}
				} else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
					var firstChild = getChild(el, 0, options, true);
					if (firstChild === dragEl) return completed(false);
					target = firstChild;
					targetRect = getRect(target);
					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
						capture();
						el.insertBefore(dragEl, firstChild);
						parentEl = el;
						changed();
						return completed(true);
					}
				} else if (target.parentNode === el) {
					targetRect = getRect(target);
					var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
					if (lastTarget !== target) {
						targetBeforeFirstSwap = targetRect[side1];
						pastFirstInvertThresh = false;
						isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
					}
					direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
					var sibling;
					if (direction !== 0) {
						var dragIndex = index(dragEl);
						do {
							dragIndex -= direction;
							sibling = parentEl.children[dragIndex];
						} while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
					}
					if (direction === 0 || sibling === target) return completed(false);
					lastTarget = target;
					lastDirection = direction;
					var nextSibling = target.nextElementSibling, after = false;
					after = direction === 1;
					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) after = moveVector === 1;
						_silent = true;
						setTimeout(_unsilent, 30);
						capture();
						if (after && !nextSibling) el.appendChild(dragEl);
						else target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
						if (scrolledPastTop) scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
						parentEl = dragEl.parentNode;
						if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
						changed();
						return completed(true);
					}
				}
				if (el.contains(dragEl)) return completed(false);
			}
			return false;
		},
		_ignoreWhileAnimating: null,
		_offMoveEvents: function _offMoveEvents() {
			off(document, "mousemove", this._onTouchMove);
			off(document, "touchmove", this._onTouchMove);
			off(document, "pointermove", this._onTouchMove);
			off(document, "dragover", nearestEmptyInsertDetectEvent);
			off(document, "mousemove", nearestEmptyInsertDetectEvent);
			off(document, "touchmove", nearestEmptyInsertDetectEvent);
		},
		_offUpEvents: function _offUpEvents() {
			var ownerDocument = this.el.ownerDocument;
			off(ownerDocument, "mouseup", this._onDrop);
			off(ownerDocument, "touchend", this._onDrop);
			off(ownerDocument, "pointerup", this._onDrop);
			off(ownerDocument, "touchcancel", this._onDrop);
			off(document, "selectstart", this);
		},
		_onDrop: function _onDrop(evt) {
			var el = this.el, options = this.options;
			newIndex = index(dragEl);
			newDraggableIndex = index(dragEl, options.draggable);
			pluginEvent("drop", this, { evt });
			parentEl = dragEl && dragEl.parentNode;
			newIndex = index(dragEl);
			newDraggableIndex = index(dragEl, options.draggable);
			if (Sortable.eventCanceled) {
				this._nulling();
				return;
			}
			awaitingDragStarted = false;
			isCircumstantialInvert = false;
			pastFirstInvertThresh = false;
			clearInterval(this._loopId);
			clearTimeout(this._dragStartTimer);
			_cancelNextTick(this.cloneId);
			_cancelNextTick(this._dragStartId);
			if (this.nativeDraggable) {
				off(document, "drop", this);
				off(el, "dragstart", this._onDragStart);
			}
			this._offMoveEvents();
			this._offUpEvents();
			if (Safari) css(document.body, "user-select", "");
			css(dragEl, "transform", "");
			if (evt) {
				if (moved) {
					evt.cancelable && evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}
				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
				if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				if (dragEl) {
					if (this.nativeDraggable) off(dragEl, "dragend", this);
					_disableDraggable(dragEl);
					dragEl.style["will-change"] = "";
					if (moved && !awaitingDragStarted) toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
					toggleClass(dragEl, this.options.chosenClass, false);
					_dispatchEvent({
						sortable: this,
						name: "unchoose",
						toEl: parentEl,
						newIndex: null,
						newDraggableIndex: null,
						originalEvent: evt
					});
					if (rootEl !== parentEl) {
						if (newIndex >= 0) {
							_dispatchEvent({
								rootEl: parentEl,
								name: "add",
								toEl: parentEl,
								fromEl: rootEl,
								originalEvent: evt
							});
							_dispatchEvent({
								sortable: this,
								name: "remove",
								toEl: parentEl,
								originalEvent: evt
							});
							_dispatchEvent({
								rootEl: parentEl,
								name: "sort",
								toEl: parentEl,
								fromEl: rootEl,
								originalEvent: evt
							});
							_dispatchEvent({
								sortable: this,
								name: "sort",
								toEl: parentEl,
								originalEvent: evt
							});
						}
						putSortable && putSortable.save();
					} else if (newIndex !== oldIndex) {
						if (newIndex >= 0) {
							_dispatchEvent({
								sortable: this,
								name: "update",
								toEl: parentEl,
								originalEvent: evt
							});
							_dispatchEvent({
								sortable: this,
								name: "sort",
								toEl: parentEl,
								originalEvent: evt
							});
						}
					}
					if (Sortable.active) {
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
							newDraggableIndex = oldDraggableIndex;
						}
						_dispatchEvent({
							sortable: this,
							name: "end",
							toEl: parentEl,
							originalEvent: evt
						});
						this.save();
					}
				}
			}
			this._nulling();
		},
		_nulling: function _nulling() {
			pluginEvent("nulling", this);
			rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
			savedInputChecked.forEach(function(el) {
				el.checked = true;
			});
			savedInputChecked.length = lastDx = lastDy = 0;
		},
		handleEvent: function handleEvent(evt) {
			switch (evt.type) {
				case "drop":
				case "dragend":
					this._onDrop(evt);
					break;
				case "dragenter":
				case "dragover":
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;
				case "selectstart": evt.preventDefault();
			}
		},
		/**
		* Serializes the item into an array of string.
		* @returns {String[]}
		*/
		toArray: function toArray() {
			var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
			for (; i < n; i++) {
				el = children[i];
				if (closest(el, options.draggable, this.el, false)) order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
			}
			return order;
		},
		/**
		* Sorts the elements according to the array.
		* @param  {String[]}  order  order of the items
		*/
		sort: function sort(order, useAnimation) {
			var items = {}, rootEl = this.el;
			this.toArray().forEach(function(id, i) {
				var el = rootEl.children[i];
				if (closest(el, this.options.draggable, rootEl, false)) items[id] = el;
			}, this);
			useAnimation && this.captureAnimationState();
			order.forEach(function(id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
			useAnimation && this.animateAll();
		},
		/**
		* Save the current sorting
		*/
		save: function save() {
			var store = this.options.store;
			store && store.set && store.set(this);
		},
		/**
		* For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		* @param   {HTMLElement}  el
		* @param   {String}       [selector]  default: `options.draggable`
		* @returns {HTMLElement|null}
		*/
		closest: function closest$1(el, selector) {
			return closest(el, selector || this.options.draggable, this.el, false);
		},
		/**
		* Set/get option
		* @param   {string} name
		* @param   {*}      [value]
		* @returns {*}
		*/
		option: function option(name, value) {
			var options = this.options;
			if (value === void 0) return options[name];
			else {
				var modifiedValue = PluginManager.modifyOption(this, name, value);
				if (typeof modifiedValue !== "undefined") options[name] = modifiedValue;
				else options[name] = value;
				if (name === "group") _prepareGroup(options);
			}
		},
		/**
		* Destroy
		*/
		destroy: function destroy() {
			pluginEvent("destroy", this);
			var el = this.el;
			el[expando] = null;
			off(el, "mousedown", this._onTapStart);
			off(el, "touchstart", this._onTapStart);
			off(el, "pointerdown", this._onTapStart);
			if (this.nativeDraggable) {
				off(el, "dragover", this);
				off(el, "dragenter", this);
			}
			Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el) {
				el.removeAttribute("draggable");
			});
			this._onDrop();
			this._disableDelayedDragEvents();
			sortables.splice(sortables.indexOf(this.el), 1);
			this.el = el = null;
		},
		_hideClone: function _hideClone() {
			if (!cloneHidden) {
				pluginEvent("hideClone", this);
				if (Sortable.eventCanceled) return;
				css(cloneEl, "display", "none");
				if (this.options.removeCloneOnHide && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
				cloneHidden = true;
			}
		},
		_showClone: function _showClone(putSortable) {
			if (putSortable.lastPutMode !== "clone") {
				this._hideClone();
				return;
			}
			if (cloneHidden) {
				pluginEvent("showClone", this);
				if (Sortable.eventCanceled) return;
				if (dragEl.parentNode == rootEl && !this.options.group.revertClone) rootEl.insertBefore(cloneEl, dragEl);
				else if (nextEl) rootEl.insertBefore(cloneEl, nextEl);
				else rootEl.appendChild(cloneEl);
				if (this.options.group.revertClone) this.animate(dragEl, cloneEl);
				css(cloneEl, "display", "");
				cloneHidden = false;
			}
		}
	});
	if (documentExists) on(document, "touchmove", function(evt) {
		if ((Sortable.active || awaitingDragStarted) && evt.cancelable) evt.preventDefault();
	});
	Sortable.utils = {
		on,
		off,
		css,
		find,
		is: function is(el, selector) {
			return !!closest(el, selector, el, false);
		},
		extend,
		throttle,
		closest,
		toggleClass,
		clone,
		index,
		nextTick: _nextTick,
		cancelNextTick: _cancelNextTick,
		detectDirection: _detectDirection,
		getChild
	};
	/**
	* Get the Sortable instance of an element
	* @param  {HTMLElement} element The element
	* @return {Sortable|undefined}         The instance of Sortable
	*/
	Sortable.get = function(element) {
		return element[expando];
	};
	/**
	* Mount a plugin to Sortable
	* @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
	*/
	Sortable.mount = function() {
		for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) plugins[_key] = arguments[_key];
		if (plugins[0].constructor === Array) plugins = plugins[0];
		plugins.forEach(function(plugin) {
			if (!plugin.prototype || !plugin.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
			if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
			PluginManager.mount(plugin);
		});
	};
	/**
	* Create sortable instance
	* @param {HTMLElement}  el
	* @param {Object}      [options]
	*/
	Sortable.create = function(el, options) {
		return new Sortable(el, options);
	};
	Sortable.version = version;
	autoScrolls = [];
	scrolling = false;
	autoScroll = throttle(function(evt, options, rootEl, isFallback) {
		if (!options.scroll) return;
		var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
		var scrollThisInstance = false, scrollCustomFn;
		if (scrollRootEl !== rootEl) {
			scrollRootEl = rootEl;
			clearAutoScrolls();
			scrollEl = options.scroll;
			scrollCustomFn = options.scrollFn;
			if (scrollEl === true) scrollEl = getParentAutoScrollElement(rootEl, true);
		}
		var layersOut = 0;
		var currentParent = scrollEl;
		do {
			var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
			if (el === winScroller) {
				canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
				canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
			} else {
				canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
				canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
			}
			var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
			var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
			if (!autoScrolls[layersOut]) {
				for (var i = 0; i <= layersOut; i++) if (!autoScrolls[i]) autoScrolls[i] = {};
			}
			if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
				autoScrolls[layersOut].el = el;
				autoScrolls[layersOut].vx = vx;
				autoScrolls[layersOut].vy = vy;
				clearInterval(autoScrolls[layersOut].pid);
				if (vx != 0 || vy != 0) {
					scrollThisInstance = true;
					autoScrolls[layersOut].pid = setInterval(function() {
						if (isFallback && this.layer === 0) Sortable.active._onTouchMove(touchEvt$1);
						var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
						var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
						if (typeof scrollCustomFn === "function") {
							if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") return;
						}
						scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
					}.bind({ layer: layersOut }), 24);
				}
			}
			layersOut++;
		} while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
		scrolling = scrollThisInstance;
	}, 30);
	drop = function drop(_ref) {
		var originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, dragEl = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
		if (!originalEvent) return;
		var toSortable = putSortable || activeSortable;
		hideGhostForTarget();
		var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
		var target = document.elementFromPoint(touch.clientX, touch.clientY);
		unhideGhostForTarget();
		if (toSortable && !toSortable.el.contains(target)) {
			dispatchSortableEvent("spill");
			this.onSpill({
				dragEl,
				putSortable
			});
		}
	};
	Revert.prototype = {
		startIndex: null,
		dragStart: function dragStart(_ref2) {
			var oldDraggableIndex = _ref2.oldDraggableIndex;
			this.startIndex = oldDraggableIndex;
		},
		onSpill: function onSpill(_ref3) {
			var dragEl = _ref3.dragEl, putSortable = _ref3.putSortable;
			this.sortable.captureAnimationState();
			if (putSortable) putSortable.captureAnimationState();
			var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
			if (nextSibling) this.sortable.el.insertBefore(dragEl, nextSibling);
			else this.sortable.el.appendChild(dragEl);
			this.sortable.animateAll();
			if (putSortable) putSortable.animateAll();
		},
		drop
	};
	_extends(Revert, { pluginName: "revertOnSpill" });
	Remove.prototype = {
		onSpill: function onSpill(_ref4) {
			var dragEl = _ref4.dragEl;
			var parentSortable = _ref4.putSortable || this.sortable;
			parentSortable.captureAnimationState();
			dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
			parentSortable.animateAll();
		},
		drop
	};
	_extends(Remove, { pluginName: "removeOnSpill" });
	multiDragElements = [];
	multiDragClones = [];
	initialFolding = false;
	folding = false;
	dragStarted = false;
	Sortable.mount(new AutoScrollPlugin());
	Sortable.mount(Remove, Revert);
}));
//#endregion
//#region ../../node_modules/.pnpm/vuedraggable@4.1.0_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/vuedraggable/dist/vuedraggable.umd.js
var require_vuedraggable_umd = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function webpackUniversalModuleDefinition(root, factory) {
		if (typeof exports === "object" && typeof module === "object") module.exports = factory(require_vue(), (init_sortable_esm(), __toCommonJS(sortable_esm_exports)));
		else if (typeof define === "function" && define.amd) define([, "sortablejs"], factory);
		else if (typeof exports === "object") exports["vuedraggable"] = factory(require_vue(), (init_sortable_esm(), __toCommonJS(sortable_esm_exports)));
		else root["vuedraggable"] = factory(root["Vue"], root["Sortable"]);
	})(typeof self !== "undefined" ? self : exports, function(__WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a352__) {
		return (function(modules) {
			var installedModules = {};
			function __webpack_require__(moduleId) {
				if (installedModules[moduleId]) return installedModules[moduleId].exports;
				var module$1 = installedModules[moduleId] = {
					i: moduleId,
					l: false,
					exports: {}
				};
				modules[moduleId].call(module$1.exports, module$1, module$1.exports, __webpack_require__);
				module$1.l = true;
				return module$1.exports;
			}
			__webpack_require__.m = modules;
			__webpack_require__.c = installedModules;
			__webpack_require__.d = function(exports$1, name, getter) {
				if (!__webpack_require__.o(exports$1, name)) Object.defineProperty(exports$1, name, {
					enumerable: true,
					get: getter
				});
			};
			__webpack_require__.r = function(exports$2) {
				if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports$2, Symbol.toStringTag, { value: "Module" });
				Object.defineProperty(exports$2, "__esModule", { value: true });
			};
			__webpack_require__.t = function(value, mode) {
				if (mode & 1) value = __webpack_require__(value);
				if (mode & 8) return value;
				if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
				var ns = Object.create(null);
				__webpack_require__.r(ns);
				Object.defineProperty(ns, "default", {
					enumerable: true,
					value
				});
				if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key) {
					return value[key];
				}.bind(null, key));
				return ns;
			};
			__webpack_require__.n = function(module$2) {
				var getter = module$2 && module$2.__esModule ? function getDefault() {
					return module$2["default"];
				} : function getModuleExports() {
					return module$2;
				};
				__webpack_require__.d(getter, "a", getter);
				return getter;
			};
			__webpack_require__.o = function(object, property) {
				return Object.prototype.hasOwnProperty.call(object, property);
			};
			__webpack_require__.p = "";
			return __webpack_require__(__webpack_require__.s = "fb15");
		})({
			"00ee": (function(module$3, exports$3, __webpack_require__) {
				var TO_STRING_TAG = __webpack_require__("b622")("toStringTag");
				var test = {};
				test[TO_STRING_TAG] = "z";
				module$3.exports = String(test) === "[object z]";
			}),
			"0366": (function(module$4, exports$4, __webpack_require__) {
				var aFunction = __webpack_require__("1c0b");
				module$4.exports = function(fn, that, length) {
					aFunction(fn);
					if (that === void 0) return fn;
					switch (length) {
						case 0: return function() {
							return fn.call(that);
						};
						case 1: return function(a) {
							return fn.call(that, a);
						};
						case 2: return function(a, b) {
							return fn.call(that, a, b);
						};
						case 3: return function(a, b, c) {
							return fn.call(that, a, b, c);
						};
					}
					return function() {
						return fn.apply(that, arguments);
					};
				};
			}),
			"057f": (function(module$5, exports$5, __webpack_require__) {
				var toIndexedObject = __webpack_require__("fc6a");
				var nativeGetOwnPropertyNames = __webpack_require__("241c").f;
				var toString = {}.toString;
				var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
				var getWindowNames = function(it) {
					try {
						return nativeGetOwnPropertyNames(it);
					} catch (error) {
						return windowNames.slice();
					}
				};
				module$5.exports.f = function getOwnPropertyNames(it) {
					return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
				};
			}),
			"06cf": (function(module$6, exports$6, __webpack_require__) {
				var DESCRIPTORS = __webpack_require__("83ab");
				var propertyIsEnumerableModule = __webpack_require__("d1e7");
				var createPropertyDescriptor = __webpack_require__("5c6c");
				var toIndexedObject = __webpack_require__("fc6a");
				var toPrimitive = __webpack_require__("c04e");
				var has = __webpack_require__("5135");
				var IE8_DOM_DEFINE = __webpack_require__("0cfb");
				var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
				exports$6.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
					O = toIndexedObject(O);
					P = toPrimitive(P, true);
					if (IE8_DOM_DEFINE) try {
						return nativeGetOwnPropertyDescriptor(O, P);
					} catch (error) {}
					if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
				};
			}),
			"0cfb": (function(module$7, exports$7, __webpack_require__) {
				var DESCRIPTORS = __webpack_require__("83ab");
				var fails = __webpack_require__("d039");
				var createElement = __webpack_require__("cc12");
				module$7.exports = !DESCRIPTORS && !fails(function() {
					return Object.defineProperty(createElement("div"), "a", { get: function() {
						return 7;
					} }).a != 7;
				});
			}),
			"13d5": (function(module$8, exports$8, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var $reduce = __webpack_require__("d58f").left;
				var arrayMethodIsStrict = __webpack_require__("a640");
				var arrayMethodUsesToLength = __webpack_require__("ae40");
				var STRICT_METHOD = arrayMethodIsStrict("reduce");
				var USES_TO_LENGTH = arrayMethodUsesToLength("reduce", { 1: 0 });
				$({
					target: "Array",
					proto: true,
					forced: !STRICT_METHOD || !USES_TO_LENGTH
				}, { reduce: function reduce(callbackfn) {
					return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
				} });
			}),
			"14c3": (function(module$9, exports$9, __webpack_require__) {
				var classof = __webpack_require__("c6b6");
				var regexpExec = __webpack_require__("9263");
				module$9.exports = function(R, S) {
					var exec = R.exec;
					if (typeof exec === "function") {
						var result = exec.call(R, S);
						if (typeof result !== "object") throw TypeError("RegExp exec method returned something other than an Object or null");
						return result;
					}
					if (classof(R) !== "RegExp") throw TypeError("RegExp#exec called on incompatible receiver");
					return regexpExec.call(R, S);
				};
			}),
			"159b": (function(module$10, exports$10, __webpack_require__) {
				var global = __webpack_require__("da84");
				var DOMIterables = __webpack_require__("fdbc");
				var forEach = __webpack_require__("17c2");
				var createNonEnumerableProperty = __webpack_require__("9112");
				for (var COLLECTION_NAME in DOMIterables) {
					var Collection = global[COLLECTION_NAME];
					var CollectionPrototype = Collection && Collection.prototype;
					if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
						createNonEnumerableProperty(CollectionPrototype, "forEach", forEach);
					} catch (error) {
						CollectionPrototype.forEach = forEach;
					}
				}
			}),
			"17c2": (function(module$11, exports$11, __webpack_require__) {
				"use strict";
				var $forEach = __webpack_require__("b727").forEach;
				var arrayMethodIsStrict = __webpack_require__("a640");
				var arrayMethodUsesToLength = __webpack_require__("ae40");
				var STRICT_METHOD = arrayMethodIsStrict("forEach");
				var USES_TO_LENGTH = arrayMethodUsesToLength("forEach");
				module$11.exports = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn) {
					return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
				} : [].forEach;
			}),
			"1be4": (function(module$12, exports$12, __webpack_require__) {
				module$12.exports = __webpack_require__("d066")("document", "documentElement");
			}),
			"1c0b": (function(module$13, exports$13) {
				module$13.exports = function(it) {
					if (typeof it != "function") throw TypeError(String(it) + " is not a function");
					return it;
				};
			}),
			"1c7e": (function(module$14, exports$14, __webpack_require__) {
				var ITERATOR = __webpack_require__("b622")("iterator");
				var SAFE_CLOSING = false;
				try {
					var called = 0;
					var iteratorWithReturn = {
						next: function() {
							return { done: !!called++ };
						},
						"return": function() {
							SAFE_CLOSING = true;
						}
					};
					iteratorWithReturn[ITERATOR] = function() {
						return this;
					};
					Array.from(iteratorWithReturn, function() {
						throw 2;
					});
				} catch (error) {}
				module$14.exports = function(exec, SKIP_CLOSING) {
					if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
					var ITERATION_SUPPORT = false;
					try {
						var object = {};
						object[ITERATOR] = function() {
							return { next: function() {
								return { done: ITERATION_SUPPORT = true };
							} };
						};
						exec(object);
					} catch (error) {}
					return ITERATION_SUPPORT;
				};
			}),
			"1d80": (function(module$15, exports$15) {
				module$15.exports = function(it) {
					if (it == void 0) throw TypeError("Can't call method on " + it);
					return it;
				};
			}),
			"1dde": (function(module$16, exports$16, __webpack_require__) {
				var fails = __webpack_require__("d039");
				var wellKnownSymbol = __webpack_require__("b622");
				var V8_VERSION = __webpack_require__("2d00");
				var SPECIES = wellKnownSymbol("species");
				module$16.exports = function(METHOD_NAME) {
					return V8_VERSION >= 51 || !fails(function() {
						var array = [];
						var constructor = array.constructor = {};
						constructor[SPECIES] = function() {
							return { foo: 1 };
						};
						return array[METHOD_NAME](Boolean).foo !== 1;
					});
				};
			}),
			"23cb": (function(module$17, exports$17, __webpack_require__) {
				var toInteger = __webpack_require__("a691");
				var max = Math.max;
				var min = Math.min;
				module$17.exports = function(index, length) {
					var integer = toInteger(index);
					return integer < 0 ? max(integer + length, 0) : min(integer, length);
				};
			}),
			"23e7": (function(module$18, exports$18, __webpack_require__) {
				var global = __webpack_require__("da84");
				var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
				var createNonEnumerableProperty = __webpack_require__("9112");
				var redefine = __webpack_require__("6eeb");
				var setGlobal = __webpack_require__("ce4e");
				var copyConstructorProperties = __webpack_require__("e893");
				var isForced = __webpack_require__("94ca");
				module$18.exports = function(options, source) {
					var TARGET = options.target;
					var GLOBAL = options.global;
					var STATIC = options.stat;
					var FORCED, target, key, targetProperty, sourceProperty, descriptor;
					if (GLOBAL) target = global;
					else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {});
					else target = (global[TARGET] || {}).prototype;
					if (target) for (key in source) {
						sourceProperty = source[key];
						if (options.noTargetGet) {
							descriptor = getOwnPropertyDescriptor(target, key);
							targetProperty = descriptor && descriptor.value;
						} else targetProperty = target[key];
						FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
						if (!FORCED && targetProperty !== void 0) {
							if (typeof sourceProperty === typeof targetProperty) continue;
							copyConstructorProperties(sourceProperty, targetProperty);
						}
						if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
						redefine(target, key, sourceProperty, options);
					}
				};
			}),
			"241c": (function(module$19, exports$19, __webpack_require__) {
				var internalObjectKeys = __webpack_require__("ca84");
				var hiddenKeys = __webpack_require__("7839").concat("length", "prototype");
				exports$19.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
					return internalObjectKeys(O, hiddenKeys);
				};
			}),
			"25f0": (function(module$20, exports$20, __webpack_require__) {
				"use strict";
				var redefine = __webpack_require__("6eeb");
				var anObject = __webpack_require__("825a");
				var fails = __webpack_require__("d039");
				var flags = __webpack_require__("ad6d");
				var TO_STRING = "toString";
				var RegExpPrototype = RegExp.prototype;
				var nativeToString = RegExpPrototype[TO_STRING];
				var NOT_GENERIC = fails(function() {
					return nativeToString.call({
						source: "a",
						flags: "b"
					}) != "/a/b";
				});
				var INCORRECT_NAME = nativeToString.name != TO_STRING;
				if (NOT_GENERIC || INCORRECT_NAME) redefine(RegExp.prototype, TO_STRING, function toString() {
					var R = anObject(this);
					var p = String(R.source);
					var rf = R.flags;
					var f = String(rf === void 0 && R instanceof RegExp && !("flags" in RegExpPrototype) ? flags.call(R) : rf);
					return "/" + p + "/" + f;
				}, { unsafe: true });
			}),
			"2ca0": (function(module$21, exports$21, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
				var toLength = __webpack_require__("50c4");
				var notARegExp = __webpack_require__("5a34");
				var requireObjectCoercible = __webpack_require__("1d80");
				var correctIsRegExpLogic = __webpack_require__("ab13");
				var IS_PURE = __webpack_require__("c430");
				var nativeStartsWith = "".startsWith;
				var min = Math.min;
				var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("startsWith");
				$({
					target: "String",
					proto: true,
					forced: !(!IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
						var descriptor = getOwnPropertyDescriptor(String.prototype, "startsWith");
						return descriptor && !descriptor.writable;
					}()) && !CORRECT_IS_REGEXP_LOGIC
				}, { startsWith: function startsWith(searchString) {
					var that = String(requireObjectCoercible(this));
					notARegExp(searchString);
					var index = toLength(min(arguments.length > 1 ? arguments[1] : void 0, that.length));
					var search = String(searchString);
					return nativeStartsWith ? nativeStartsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
				} });
			}),
			"2d00": (function(module$22, exports$22, __webpack_require__) {
				var global = __webpack_require__("da84");
				var userAgent = __webpack_require__("342f");
				var process = global.process;
				var versions = process && process.versions;
				var v8 = versions && versions.v8;
				var match, version;
				if (v8) {
					match = v8.split(".");
					version = match[0] + match[1];
				} else if (userAgent) {
					match = userAgent.match(/Edge\/(\d+)/);
					if (!match || match[1] >= 74) {
						match = userAgent.match(/Chrome\/(\d+)/);
						if (match) version = match[1];
					}
				}
				module$22.exports = version && +version;
			}),
			"342f": (function(module$23, exports$23, __webpack_require__) {
				module$23.exports = __webpack_require__("d066")("navigator", "userAgent") || "";
			}),
			"35a1": (function(module$24, exports$24, __webpack_require__) {
				var classof = __webpack_require__("f5df");
				var Iterators = __webpack_require__("3f8c");
				var ITERATOR = __webpack_require__("b622")("iterator");
				module$24.exports = function(it) {
					if (it != void 0) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
				};
			}),
			"37e8": (function(module$25, exports$25, __webpack_require__) {
				var DESCRIPTORS = __webpack_require__("83ab");
				var definePropertyModule = __webpack_require__("9bf2");
				var anObject = __webpack_require__("825a");
				var objectKeys = __webpack_require__("df75");
				module$25.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
					anObject(O);
					var keys = objectKeys(Properties);
					var length = keys.length;
					var index = 0;
					var key;
					while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
					return O;
				};
			}),
			"3bbe": (function(module$26, exports$26, __webpack_require__) {
				var isObject = __webpack_require__("861d");
				module$26.exports = function(it) {
					if (!isObject(it) && it !== null) throw TypeError("Can't set " + String(it) + " as a prototype");
					return it;
				};
			}),
			"3ca3": (function(module$27, exports$27, __webpack_require__) {
				"use strict";
				var charAt = __webpack_require__("6547").charAt;
				var InternalStateModule = __webpack_require__("69f3");
				var defineIterator = __webpack_require__("7dd0");
				var STRING_ITERATOR = "String Iterator";
				var setInternalState = InternalStateModule.set;
				var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
				defineIterator(String, "String", function(iterated) {
					setInternalState(this, {
						type: STRING_ITERATOR,
						string: String(iterated),
						index: 0
					});
				}, function next() {
					var state = getInternalState(this);
					var string = state.string;
					var index = state.index;
					var point;
					if (index >= string.length) return {
						value: void 0,
						done: true
					};
					point = charAt(string, index);
					state.index += point.length;
					return {
						value: point,
						done: false
					};
				});
			}),
			"3f8c": (function(module$28, exports$28) {
				module$28.exports = {};
			}),
			"4160": (function(module$29, exports$29, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var forEach = __webpack_require__("17c2");
				$({
					target: "Array",
					proto: true,
					forced: [].forEach != forEach
				}, { forEach });
			}),
			"428f": (function(module$30, exports$30, __webpack_require__) {
				module$30.exports = __webpack_require__("da84");
			}),
			"44ad": (function(module$31, exports$31, __webpack_require__) {
				var fails = __webpack_require__("d039");
				var classof = __webpack_require__("c6b6");
				var split = "".split;
				module$31.exports = fails(function() {
					return !Object("z").propertyIsEnumerable(0);
				}) ? function(it) {
					return classof(it) == "String" ? split.call(it, "") : Object(it);
				} : Object;
			}),
			"44d2": (function(module$32, exports$32, __webpack_require__) {
				var wellKnownSymbol = __webpack_require__("b622");
				var create = __webpack_require__("7c73");
				var definePropertyModule = __webpack_require__("9bf2");
				var UNSCOPABLES = wellKnownSymbol("unscopables");
				var ArrayPrototype = Array.prototype;
				if (ArrayPrototype[UNSCOPABLES] == void 0) definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
					configurable: true,
					value: create(null)
				});
				module$32.exports = function(key) {
					ArrayPrototype[UNSCOPABLES][key] = true;
				};
			}),
			"44e7": (function(module$33, exports$33, __webpack_require__) {
				var isObject = __webpack_require__("861d");
				var classof = __webpack_require__("c6b6");
				var MATCH = __webpack_require__("b622")("match");
				module$33.exports = function(it) {
					var isRegExp;
					return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) == "RegExp");
				};
			}),
			"4930": (function(module$34, exports$34, __webpack_require__) {
				var fails = __webpack_require__("d039");
				module$34.exports = !!Object.getOwnPropertySymbols && !fails(function() {
					return !String(Symbol());
				});
			}),
			"4d64": (function(module$35, exports$35, __webpack_require__) {
				var toIndexedObject = __webpack_require__("fc6a");
				var toLength = __webpack_require__("50c4");
				var toAbsoluteIndex = __webpack_require__("23cb");
				var createMethod = function(IS_INCLUDES) {
					return function($this, el, fromIndex) {
						var O = toIndexedObject($this);
						var length = toLength(O.length);
						var index = toAbsoluteIndex(fromIndex, length);
						var value;
						if (IS_INCLUDES && el != el) while (length > index) {
							value = O[index++];
							if (value != value) return true;
						}
						else for (; length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
						return !IS_INCLUDES && -1;
					};
				};
				module$35.exports = {
					includes: createMethod(true),
					indexOf: createMethod(false)
				};
			}),
			"4de4": (function(module$36, exports$36, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var $filter = __webpack_require__("b727").filter;
				var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
				var arrayMethodUsesToLength = __webpack_require__("ae40");
				var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
				var USES_TO_LENGTH = arrayMethodUsesToLength("filter");
				$({
					target: "Array",
					proto: true,
					forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
				}, { filter: function filter(callbackfn) {
					return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
				} });
			}),
			"4df4": (function(module$37, exports$37, __webpack_require__) {
				"use strict";
				var bind = __webpack_require__("0366");
				var toObject = __webpack_require__("7b0b");
				var callWithSafeIterationClosing = __webpack_require__("9bdd");
				var isArrayIteratorMethod = __webpack_require__("e95a");
				var toLength = __webpack_require__("50c4");
				var createProperty = __webpack_require__("8418");
				var getIteratorMethod = __webpack_require__("35a1");
				module$37.exports = function from(arrayLike) {
					var O = toObject(arrayLike);
					var C = typeof this == "function" ? this : Array;
					var argumentsLength = arguments.length;
					var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
					var mapping = mapfn !== void 0;
					var iteratorMethod = getIteratorMethod(O);
					var index = 0;
					var length, result, step, iterator, next, value;
					if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2);
					if (iteratorMethod != void 0 && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
						iterator = iteratorMethod.call(O);
						next = iterator.next;
						result = new C();
						for (; !(step = next.call(iterator)).done; index++) {
							value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
							createProperty(result, index, value);
						}
					} else {
						length = toLength(O.length);
						result = new C(length);
						for (; length > index; index++) {
							value = mapping ? mapfn(O[index], index) : O[index];
							createProperty(result, index, value);
						}
					}
					result.length = index;
					return result;
				};
			}),
			"4fad": (function(module$38, exports$38, __webpack_require__) {
				var $ = __webpack_require__("23e7");
				var $entries = __webpack_require__("6f53").entries;
				$({
					target: "Object",
					stat: true
				}, { entries: function entries(O) {
					return $entries(O);
				} });
			}),
			"50c4": (function(module$39, exports$39, __webpack_require__) {
				var toInteger = __webpack_require__("a691");
				var min = Math.min;
				module$39.exports = function(argument) {
					return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
				};
			}),
			"5135": (function(module$40, exports$40) {
				var hasOwnProperty = {}.hasOwnProperty;
				module$40.exports = function(it, key) {
					return hasOwnProperty.call(it, key);
				};
			}),
			"5319": (function(module$41, exports$41, __webpack_require__) {
				"use strict";
				var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
				var anObject = __webpack_require__("825a");
				var toObject = __webpack_require__("7b0b");
				var toLength = __webpack_require__("50c4");
				var toInteger = __webpack_require__("a691");
				var requireObjectCoercible = __webpack_require__("1d80");
				var advanceStringIndex = __webpack_require__("8aa5");
				var regExpExec = __webpack_require__("14c3");
				var max = Math.max;
				var min = Math.min;
				var floor = Math.floor;
				var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
				var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;
				var maybeToString = function(it) {
					return it === void 0 ? it : String(it);
				};
				fixRegExpWellKnownSymbolLogic("replace", 2, function(REPLACE, nativeReplace, maybeCallNative, reason) {
					var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
					var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
					var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
					return [function replace(searchValue, replaceValue) {
						var O = requireObjectCoercible(this);
						var replacer = searchValue == void 0 ? void 0 : searchValue[REPLACE];
						return replacer !== void 0 ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
					}, function(regexp, replaceValue) {
						if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === "string" && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
							var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
							if (res.done) return res.value;
						}
						var rx = anObject(regexp);
						var S = String(this);
						var functionalReplace = typeof replaceValue === "function";
						if (!functionalReplace) replaceValue = String(replaceValue);
						var global = rx.global;
						if (global) {
							var fullUnicode = rx.unicode;
							rx.lastIndex = 0;
						}
						var results = [];
						while (true) {
							var result = regExpExec(rx, S);
							if (result === null) break;
							results.push(result);
							if (!global) break;
							if (String(result[0]) === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
						}
						var accumulatedResult = "";
						var nextSourcePosition = 0;
						for (var i = 0; i < results.length; i++) {
							result = results[i];
							var matched = String(result[0]);
							var position = max(min(toInteger(result.index), S.length), 0);
							var captures = [];
							for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
							var namedCaptures = result.groups;
							if (functionalReplace) {
								var replacerArgs = [matched].concat(captures, position, S);
								if (namedCaptures !== void 0) replacerArgs.push(namedCaptures);
								var replacement = String(replaceValue.apply(void 0, replacerArgs));
							} else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
							if (position >= nextSourcePosition) {
								accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
								nextSourcePosition = position + matched.length;
							}
						}
						return accumulatedResult + S.slice(nextSourcePosition);
					}];
					function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
						var tailPos = position + matched.length;
						var m = captures.length;
						var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
						if (namedCaptures !== void 0) {
							namedCaptures = toObject(namedCaptures);
							symbols = SUBSTITUTION_SYMBOLS;
						}
						return nativeReplace.call(replacement, symbols, function(match, ch) {
							var capture;
							switch (ch.charAt(0)) {
								case "$": return "$";
								case "&": return matched;
								case "`": return str.slice(0, position);
								case "'": return str.slice(tailPos);
								case "<":
									capture = namedCaptures[ch.slice(1, -1)];
									break;
								default:
									var n = +ch;
									if (n === 0) return match;
									if (n > m) {
										var f = floor(n / 10);
										if (f === 0) return match;
										if (f <= m) return captures[f - 1] === void 0 ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
										return match;
									}
									capture = captures[n - 1];
							}
							return capture === void 0 ? "" : capture;
						});
					}
				});
			}),
			"5692": (function(module$42, exports$42, __webpack_require__) {
				var IS_PURE = __webpack_require__("c430");
				var store = __webpack_require__("c6cd");
				(module$42.exports = function(key, value) {
					return store[key] || (store[key] = value !== void 0 ? value : {});
				})("versions", []).push({
					version: "3.6.5",
					mode: IS_PURE ? "pure" : "global",
					copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
				});
			}),
			"56ef": (function(module$43, exports$43, __webpack_require__) {
				var getBuiltIn = __webpack_require__("d066");
				var getOwnPropertyNamesModule = __webpack_require__("241c");
				var getOwnPropertySymbolsModule = __webpack_require__("7418");
				var anObject = __webpack_require__("825a");
				module$43.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
					var keys = getOwnPropertyNamesModule.f(anObject(it));
					var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
					return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
				};
			}),
			"5a34": (function(module$44, exports$44, __webpack_require__) {
				var isRegExp = __webpack_require__("44e7");
				module$44.exports = function(it) {
					if (isRegExp(it)) throw TypeError("The method doesn't accept regular expressions");
					return it;
				};
			}),
			"5c6c": (function(module$45, exports$45) {
				module$45.exports = function(bitmap, value) {
					return {
						enumerable: !(bitmap & 1),
						configurable: !(bitmap & 2),
						writable: !(bitmap & 4),
						value
					};
				};
			}),
			"5db7": (function(module$46, exports$46, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var flattenIntoArray = __webpack_require__("a2bf");
				var toObject = __webpack_require__("7b0b");
				var toLength = __webpack_require__("50c4");
				var aFunction = __webpack_require__("1c0b");
				var arraySpeciesCreate = __webpack_require__("65f0");
				$({
					target: "Array",
					proto: true
				}, { flatMap: function flatMap(callbackfn) {
					var O = toObject(this);
					var sourceLen = toLength(O.length);
					var A;
					aFunction(callbackfn);
					A = arraySpeciesCreate(O, 0);
					A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
					return A;
				} });
			}),
			"6547": (function(module$47, exports$47, __webpack_require__) {
				var toInteger = __webpack_require__("a691");
				var requireObjectCoercible = __webpack_require__("1d80");
				var createMethod = function(CONVERT_TO_STRING) {
					return function($this, pos) {
						var S = String(requireObjectCoercible($this));
						var position = toInteger(pos);
						var size = S.length;
						var first, second;
						if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
						first = S.charCodeAt(position);
						return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
					};
				};
				module$47.exports = {
					codeAt: createMethod(false),
					charAt: createMethod(true)
				};
			}),
			"65f0": (function(module$48, exports$48, __webpack_require__) {
				var isObject = __webpack_require__("861d");
				var isArray = __webpack_require__("e8b5");
				var SPECIES = __webpack_require__("b622")("species");
				module$48.exports = function(originalArray, length) {
					var C;
					if (isArray(originalArray)) {
						C = originalArray.constructor;
						if (typeof C == "function" && (C === Array || isArray(C.prototype))) C = void 0;
						else if (isObject(C)) {
							C = C[SPECIES];
							if (C === null) C = void 0;
						}
					}
					return new (C === void 0 ? Array : C)(length === 0 ? 0 : length);
				};
			}),
			"69f3": (function(module$49, exports$49, __webpack_require__) {
				var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
				var global = __webpack_require__("da84");
				var isObject = __webpack_require__("861d");
				var createNonEnumerableProperty = __webpack_require__("9112");
				var objectHas = __webpack_require__("5135");
				var sharedKey = __webpack_require__("f772");
				var hiddenKeys = __webpack_require__("d012");
				var WeakMap = global.WeakMap;
				var set, get, has;
				var enforce = function(it) {
					return has(it) ? get(it) : set(it, {});
				};
				var getterFor = function(TYPE) {
					return function(it) {
						var state;
						if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
						return state;
					};
				};
				if (NATIVE_WEAK_MAP) {
					var store = new WeakMap();
					var wmget = store.get;
					var wmhas = store.has;
					var wmset = store.set;
					set = function(it, metadata) {
						wmset.call(store, it, metadata);
						return metadata;
					};
					get = function(it) {
						return wmget.call(store, it) || {};
					};
					has = function(it) {
						return wmhas.call(store, it);
					};
				} else {
					var STATE = sharedKey("state");
					hiddenKeys[STATE] = true;
					set = function(it, metadata) {
						createNonEnumerableProperty(it, STATE, metadata);
						return metadata;
					};
					get = function(it) {
						return objectHas(it, STATE) ? it[STATE] : {};
					};
					has = function(it) {
						return objectHas(it, STATE);
					};
				}
				module$49.exports = {
					set,
					get,
					has,
					enforce,
					getterFor
				};
			}),
			"6eeb": (function(module$50, exports$50, __webpack_require__) {
				var global = __webpack_require__("da84");
				var createNonEnumerableProperty = __webpack_require__("9112");
				var has = __webpack_require__("5135");
				var setGlobal = __webpack_require__("ce4e");
				var inspectSource = __webpack_require__("8925");
				var InternalStateModule = __webpack_require__("69f3");
				var getInternalState = InternalStateModule.get;
				var enforceInternalState = InternalStateModule.enforce;
				var TEMPLATE = String(String).split("String");
				(module$50.exports = function(O, key, value, options) {
					var unsafe = options ? !!options.unsafe : false;
					var simple = options ? !!options.enumerable : false;
					var noTargetGet = options ? !!options.noTargetGet : false;
					if (typeof value == "function") {
						if (typeof key == "string" && !has(value, "name")) createNonEnumerableProperty(value, "name", key);
						enforceInternalState(value).source = TEMPLATE.join(typeof key == "string" ? key : "");
					}
					if (O === global) {
						if (simple) O[key] = value;
						else setGlobal(key, value);
						return;
					} else if (!unsafe) delete O[key];
					else if (!noTargetGet && O[key]) simple = true;
					if (simple) O[key] = value;
					else createNonEnumerableProperty(O, key, value);
				})(Function.prototype, "toString", function toString() {
					return typeof this == "function" && getInternalState(this).source || inspectSource(this);
				});
			}),
			"6f53": (function(module$51, exports$51, __webpack_require__) {
				var DESCRIPTORS = __webpack_require__("83ab");
				var objectKeys = __webpack_require__("df75");
				var toIndexedObject = __webpack_require__("fc6a");
				var propertyIsEnumerable = __webpack_require__("d1e7").f;
				var createMethod = function(TO_ENTRIES) {
					return function(it) {
						var O = toIndexedObject(it);
						var keys = objectKeys(O);
						var length = keys.length;
						var i = 0;
						var result = [];
						var key;
						while (length > i) {
							key = keys[i++];
							if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
						}
						return result;
					};
				};
				module$51.exports = {
					entries: createMethod(true),
					values: createMethod(false)
				};
			}),
			"73d9": (function(module$52, exports$52, __webpack_require__) {
				__webpack_require__("44d2")("flatMap");
			}),
			"7418": (function(module$53, exports$53) {
				exports$53.f = Object.getOwnPropertySymbols;
			}),
			"746f": (function(module$54, exports$54, __webpack_require__) {
				var path = __webpack_require__("428f");
				var has = __webpack_require__("5135");
				var wrappedWellKnownSymbolModule = __webpack_require__("e538");
				var defineProperty = __webpack_require__("9bf2").f;
				module$54.exports = function(NAME) {
					var Symbol = path.Symbol || (path.Symbol = {});
					if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, { value: wrappedWellKnownSymbolModule.f(NAME) });
				};
			}),
			"7839": (function(module$55, exports$55) {
				module$55.exports = [
					"constructor",
					"hasOwnProperty",
					"isPrototypeOf",
					"propertyIsEnumerable",
					"toLocaleString",
					"toString",
					"valueOf"
				];
			}),
			"7b0b": (function(module$56, exports$56, __webpack_require__) {
				var requireObjectCoercible = __webpack_require__("1d80");
				module$56.exports = function(argument) {
					return Object(requireObjectCoercible(argument));
				};
			}),
			"7c73": (function(module$57, exports$57, __webpack_require__) {
				var anObject = __webpack_require__("825a");
				var defineProperties = __webpack_require__("37e8");
				var enumBugKeys = __webpack_require__("7839");
				var hiddenKeys = __webpack_require__("d012");
				var html = __webpack_require__("1be4");
				var documentCreateElement = __webpack_require__("cc12");
				var sharedKey = __webpack_require__("f772");
				var GT = ">";
				var LT = "<";
				var PROTOTYPE = "prototype";
				var SCRIPT = "script";
				var IE_PROTO = sharedKey("IE_PROTO");
				var EmptyConstructor = function() {};
				var scriptTag = function(content) {
					return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
				};
				var NullProtoObjectViaActiveX = function(activeXDocument) {
					activeXDocument.write(scriptTag(""));
					activeXDocument.close();
					var temp = activeXDocument.parentWindow.Object;
					activeXDocument = null;
					return temp;
				};
				var NullProtoObjectViaIFrame = function() {
					var iframe = documentCreateElement("iframe");
					var JS = "java" + SCRIPT + ":";
					var iframeDocument;
					iframe.style.display = "none";
					html.appendChild(iframe);
					iframe.src = String(JS);
					iframeDocument = iframe.contentWindow.document;
					iframeDocument.open();
					iframeDocument.write(scriptTag("document.F=Object"));
					iframeDocument.close();
					return iframeDocument.F;
				};
				var activeXDocument;
				var NullProtoObject = function() {
					try {
						activeXDocument = document.domain && new ActiveXObject("htmlfile");
					} catch (error) {}
					NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
					var length = enumBugKeys.length;
					while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
					return NullProtoObject();
				};
				hiddenKeys[IE_PROTO] = true;
				module$57.exports = Object.create || function create(O, Properties) {
					var result;
					if (O !== null) {
						EmptyConstructor[PROTOTYPE] = anObject(O);
						result = new EmptyConstructor();
						EmptyConstructor[PROTOTYPE] = null;
						result[IE_PROTO] = O;
					} else result = NullProtoObject();
					return Properties === void 0 ? result : defineProperties(result, Properties);
				};
			}),
			"7dd0": (function(module$58, exports$58, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var createIteratorConstructor = __webpack_require__("9ed3");
				var getPrototypeOf = __webpack_require__("e163");
				var setPrototypeOf = __webpack_require__("d2bb");
				var setToStringTag = __webpack_require__("d44e");
				var createNonEnumerableProperty = __webpack_require__("9112");
				var redefine = __webpack_require__("6eeb");
				var wellKnownSymbol = __webpack_require__("b622");
				var IS_PURE = __webpack_require__("c430");
				var Iterators = __webpack_require__("3f8c");
				var IteratorsCore = __webpack_require__("ae93");
				var IteratorPrototype = IteratorsCore.IteratorPrototype;
				var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
				var ITERATOR = wellKnownSymbol("iterator");
				var KEYS = "keys";
				var VALUES = "values";
				var ENTRIES = "entries";
				var returnThis = function() {
					return this;
				};
				module$58.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
					createIteratorConstructor(IteratorConstructor, NAME, next);
					var getIterationMethod = function(KIND) {
						if (KIND === DEFAULT && defaultIterator) return defaultIterator;
						if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
						switch (KIND) {
							case KEYS: return function keys() {
								return new IteratorConstructor(this, KIND);
							};
							case VALUES: return function values() {
								return new IteratorConstructor(this, KIND);
							};
							case ENTRIES: return function entries() {
								return new IteratorConstructor(this, KIND);
							};
						}
						return function() {
							return new IteratorConstructor(this);
						};
					};
					var TO_STRING_TAG = NAME + " Iterator";
					var INCORRECT_VALUES_NAME = false;
					var IterablePrototype = Iterable.prototype;
					var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
					var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
					var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
					var CurrentIteratorPrototype, methods, KEY;
					if (anyNativeIterator) {
						CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
						if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
							if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
								if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
								else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
							}
							setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
							if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
						}
					}
					if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
						INCORRECT_VALUES_NAME = true;
						defaultIterator = function values() {
							return nativeIterator.call(this);
						};
					}
					if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
					Iterators[NAME] = defaultIterator;
					if (DEFAULT) {
						methods = {
							values: getIterationMethod(VALUES),
							keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
							entries: getIterationMethod(ENTRIES)
						};
						if (FORCED) {
							for (KEY in methods) if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) redefine(IterablePrototype, KEY, methods[KEY]);
						} else $({
							target: NAME,
							proto: true,
							forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
						}, methods);
					}
					return methods;
				};
			}),
			"7f9a": (function(module$59, exports$59, __webpack_require__) {
				var global = __webpack_require__("da84");
				var inspectSource = __webpack_require__("8925");
				var WeakMap = global.WeakMap;
				module$59.exports = typeof WeakMap === "function" && /native code/.test(inspectSource(WeakMap));
			}),
			"825a": (function(module$60, exports$60, __webpack_require__) {
				var isObject = __webpack_require__("861d");
				module$60.exports = function(it) {
					if (!isObject(it)) throw TypeError(String(it) + " is not an object");
					return it;
				};
			}),
			"83ab": (function(module$61, exports$61, __webpack_require__) {
				module$61.exports = !__webpack_require__("d039")(function() {
					return Object.defineProperty({}, 1, { get: function() {
						return 7;
					} })[1] != 7;
				});
			}),
			"8418": (function(module$62, exports$62, __webpack_require__) {
				"use strict";
				var toPrimitive = __webpack_require__("c04e");
				var definePropertyModule = __webpack_require__("9bf2");
				var createPropertyDescriptor = __webpack_require__("5c6c");
				module$62.exports = function(object, key, value) {
					var propertyKey = toPrimitive(key);
					if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
					else object[propertyKey] = value;
				};
			}),
			"861d": (function(module$63, exports$63) {
				module$63.exports = function(it) {
					return typeof it === "object" ? it !== null : typeof it === "function";
				};
			}),
			"8875": (function(module$64, exports$64, __webpack_require__) {
				var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
				(function(root, factory) {
					__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports$64, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module$64.exports = __WEBPACK_AMD_DEFINE_RESULT__);
				})(typeof self !== "undefined" ? self : this, function() {
					function getCurrentScript() {
						var descriptor = Object.getOwnPropertyDescriptor(document, "currentScript");
						if (!descriptor && "currentScript" in document && document.currentScript) return document.currentScript;
						if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) return document.currentScript;
						try {
							throw new Error();
						} catch (err) {
							var stackDetails = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(err.stack) || /@([^@]*):(\d+):(\d+)\s*$/gi.exec(err.stack), scriptLocation = stackDetails && stackDetails[1] || false, line = stackDetails && stackDetails[2] || false, currentLocation = document.location.href.replace(document.location.hash, ""), pageSource, inlineScriptSourceRegExp, inlineScriptSource, scripts = document.getElementsByTagName("script");
							if (scriptLocation === currentLocation) {
								pageSource = document.documentElement.outerHTML;
								inlineScriptSourceRegExp = new RegExp("(?:[^\\n]+?\\n){0," + (line - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i");
								inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, "$1").trim();
							}
							for (var i = 0; i < scripts.length; i++) {
								if (scripts[i].readyState === "interactive") return scripts[i];
								if (scripts[i].src === scriptLocation) return scripts[i];
								if (scriptLocation === currentLocation && scripts[i].innerHTML && scripts[i].innerHTML.trim() === inlineScriptSource) return scripts[i];
							}
							return null;
						}
					}
					return getCurrentScript;
				});
			}),
			"8925": (function(module$65, exports$65, __webpack_require__) {
				var store = __webpack_require__("c6cd");
				var functionToString = Function.toString;
				if (typeof store.inspectSource != "function") store.inspectSource = function(it) {
					return functionToString.call(it);
				};
				module$65.exports = store.inspectSource;
			}),
			"8aa5": (function(module$66, exports$66, __webpack_require__) {
				"use strict";
				var charAt = __webpack_require__("6547").charAt;
				module$66.exports = function(S, index, unicode) {
					return index + (unicode ? charAt(S, index).length : 1);
				};
			}),
			"8bbf": (function(module$67, exports$67) {
				module$67.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;
			}),
			"90e3": (function(module$68, exports$68) {
				var id = 0;
				var postfix = Math.random();
				module$68.exports = function(key) {
					return "Symbol(" + String(key === void 0 ? "" : key) + ")_" + (++id + postfix).toString(36);
				};
			}),
			"9112": (function(module$69, exports$69, __webpack_require__) {
				var DESCRIPTORS = __webpack_require__("83ab");
				var definePropertyModule = __webpack_require__("9bf2");
				var createPropertyDescriptor = __webpack_require__("5c6c");
				module$69.exports = DESCRIPTORS ? function(object, key, value) {
					return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
				} : function(object, key, value) {
					object[key] = value;
					return object;
				};
			}),
			"9263": (function(module$70, exports$70, __webpack_require__) {
				"use strict";
				var regexpFlags = __webpack_require__("ad6d");
				var stickyHelpers = __webpack_require__("9f7f");
				var nativeExec = RegExp.prototype.exec;
				var nativeReplace = String.prototype.replace;
				var patchedExec = nativeExec;
				var UPDATES_LAST_INDEX_WRONG = (function() {
					var re1 = /a/;
					var re2 = /b*/g;
					nativeExec.call(re1, "a");
					nativeExec.call(re2, "a");
					return re1.lastIndex !== 0 || re2.lastIndex !== 0;
				})();
				var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;
				var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
				if (UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y) patchedExec = function exec(str) {
					var re = this;
					var lastIndex, reCopy, match, i;
					var sticky = UNSUPPORTED_Y && re.sticky;
					var flags = regexpFlags.call(re);
					var source = re.source;
					var charsAdded = 0;
					var strCopy = str;
					if (sticky) {
						flags = flags.replace("y", "");
						if (flags.indexOf("g") === -1) flags += "g";
						strCopy = String(str).slice(re.lastIndex);
						if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== "\n")) {
							source = "(?: " + source + ")";
							strCopy = " " + strCopy;
							charsAdded++;
						}
						reCopy = new RegExp("^(?:" + source + ")", flags);
					}
					if (NPCG_INCLUDED) reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
					if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
					match = nativeExec.call(sticky ? reCopy : re, strCopy);
					if (sticky) {
						if (match) {
							match.input = match.input.slice(charsAdded);
							match[0] = match[0].slice(charsAdded);
							match.index = re.lastIndex;
							re.lastIndex += match[0].length;
						} else re.lastIndex = 0;
					} else if (UPDATES_LAST_INDEX_WRONG && match) re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
					if (NPCG_INCLUDED && match && match.length > 1) nativeReplace.call(match[0], reCopy, function() {
						for (i = 1; i < arguments.length - 2; i++) if (arguments[i] === void 0) match[i] = void 0;
					});
					return match;
				};
				module$70.exports = patchedExec;
			}),
			"94ca": (function(module$71, exports$71, __webpack_require__) {
				var fails = __webpack_require__("d039");
				var replacement = /#|\.prototype\./;
				var isForced = function(feature, detection) {
					var value = data[normalize(feature)];
					return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
				};
				var normalize = isForced.normalize = function(string) {
					return String(string).replace(replacement, ".").toLowerCase();
				};
				var data = isForced.data = {};
				var NATIVE = isForced.NATIVE = "N";
				var POLYFILL = isForced.POLYFILL = "P";
				module$71.exports = isForced;
			}),
			"99af": (function(module$72, exports$72, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var fails = __webpack_require__("d039");
				var isArray = __webpack_require__("e8b5");
				var isObject = __webpack_require__("861d");
				var toObject = __webpack_require__("7b0b");
				var toLength = __webpack_require__("50c4");
				var createProperty = __webpack_require__("8418");
				var arraySpeciesCreate = __webpack_require__("65f0");
				var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
				var wellKnownSymbol = __webpack_require__("b622");
				var V8_VERSION = __webpack_require__("2d00");
				var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
				var MAX_SAFE_INTEGER = 9007199254740991;
				var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
				var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
					var array = [];
					array[IS_CONCAT_SPREADABLE] = false;
					return array.concat()[0] !== array;
				});
				var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
				var isConcatSpreadable = function(O) {
					if (!isObject(O)) return false;
					var spreadable = O[IS_CONCAT_SPREADABLE];
					return spreadable !== void 0 ? !!spreadable : isArray(O);
				};
				$({
					target: "Array",
					proto: true,
					forced: !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT
				}, { concat: function concat(arg) {
					var O = toObject(this);
					var A = arraySpeciesCreate(O, 0);
					var n = 0;
					var i = -1, k, length = arguments.length, len, E;
					for (; i < length; i++) {
						E = i === -1 ? O : arguments[i];
						if (isConcatSpreadable(E)) {
							len = toLength(E.length);
							if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
							for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
						} else {
							if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
							createProperty(A, n++, E);
						}
					}
					A.length = n;
					return A;
				} });
			}),
			"9bdd": (function(module$73, exports$73, __webpack_require__) {
				var anObject = __webpack_require__("825a");
				module$73.exports = function(iterator, fn, value, ENTRIES) {
					try {
						return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
					} catch (error) {
						var returnMethod = iterator["return"];
						if (returnMethod !== void 0) anObject(returnMethod.call(iterator));
						throw error;
					}
				};
			}),
			"9bf2": (function(module$74, exports$74, __webpack_require__) {
				var DESCRIPTORS = __webpack_require__("83ab");
				var IE8_DOM_DEFINE = __webpack_require__("0cfb");
				var anObject = __webpack_require__("825a");
				var toPrimitive = __webpack_require__("c04e");
				var nativeDefineProperty = Object.defineProperty;
				exports$74.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
					anObject(O);
					P = toPrimitive(P, true);
					anObject(Attributes);
					if (IE8_DOM_DEFINE) try {
						return nativeDefineProperty(O, P, Attributes);
					} catch (error) {}
					if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
					if ("value" in Attributes) O[P] = Attributes.value;
					return O;
				};
			}),
			"9ed3": (function(module$75, exports$75, __webpack_require__) {
				"use strict";
				var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
				var create = __webpack_require__("7c73");
				var createPropertyDescriptor = __webpack_require__("5c6c");
				var setToStringTag = __webpack_require__("d44e");
				var Iterators = __webpack_require__("3f8c");
				var returnThis = function() {
					return this;
				};
				module$75.exports = function(IteratorConstructor, NAME, next) {
					var TO_STRING_TAG = NAME + " Iterator";
					IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
					setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
					Iterators[TO_STRING_TAG] = returnThis;
					return IteratorConstructor;
				};
			}),
			"9f7f": (function(module$76, exports$76, __webpack_require__) {
				"use strict";
				var fails = __webpack_require__("d039");
				function RE(s, f) {
					return RegExp(s, f);
				}
				exports$76.UNSUPPORTED_Y = fails(function() {
					var re = RE("a", "y");
					re.lastIndex = 2;
					return re.exec("abcd") != null;
				});
				exports$76.BROKEN_CARET = fails(function() {
					var re = RE("^r", "gy");
					re.lastIndex = 2;
					return re.exec("str") != null;
				});
			}),
			"a2bf": (function(module$77, exports$77, __webpack_require__) {
				"use strict";
				var isArray = __webpack_require__("e8b5");
				var toLength = __webpack_require__("50c4");
				var bind = __webpack_require__("0366");
				var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
					var targetIndex = start;
					var sourceIndex = 0;
					var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
					var element;
					while (sourceIndex < sourceLen) {
						if (sourceIndex in source) {
							element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
							if (depth > 0 && isArray(element)) targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
							else {
								if (targetIndex >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
								target[targetIndex] = element;
							}
							targetIndex++;
						}
						sourceIndex++;
					}
					return targetIndex;
				};
				module$77.exports = flattenIntoArray;
			}),
			"a352": (function(module$78, exports$78) {
				module$78.exports = __WEBPACK_EXTERNAL_MODULE_a352__;
			}),
			"a434": (function(module$79, exports$79, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var toAbsoluteIndex = __webpack_require__("23cb");
				var toInteger = __webpack_require__("a691");
				var toLength = __webpack_require__("50c4");
				var toObject = __webpack_require__("7b0b");
				var arraySpeciesCreate = __webpack_require__("65f0");
				var createProperty = __webpack_require__("8418");
				var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
				var arrayMethodUsesToLength = __webpack_require__("ae40");
				var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
				var USES_TO_LENGTH = arrayMethodUsesToLength("splice", {
					ACCESSORS: true,
					0: 0,
					1: 2
				});
				var max = Math.max;
				var min = Math.min;
				var MAX_SAFE_INTEGER = 9007199254740991;
				var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
				$({
					target: "Array",
					proto: true,
					forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
				}, { splice: function splice(start, deleteCount) {
					var O = toObject(this);
					var len = toLength(O.length);
					var actualStart = toAbsoluteIndex(start, len);
					var argumentsLength = arguments.length;
					var insertCount, actualDeleteCount, A, k, from, to;
					if (argumentsLength === 0) insertCount = actualDeleteCount = 0;
					else if (argumentsLength === 1) {
						insertCount = 0;
						actualDeleteCount = len - actualStart;
					} else {
						insertCount = argumentsLength - 2;
						actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
					}
					if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
					A = arraySpeciesCreate(O, actualDeleteCount);
					for (k = 0; k < actualDeleteCount; k++) {
						from = actualStart + k;
						if (from in O) createProperty(A, k, O[from]);
					}
					A.length = actualDeleteCount;
					if (insertCount < actualDeleteCount) {
						for (k = actualStart; k < len - actualDeleteCount; k++) {
							from = k + actualDeleteCount;
							to = k + insertCount;
							if (from in O) O[to] = O[from];
							else delete O[to];
						}
						for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
					} else if (insertCount > actualDeleteCount) for (k = len - actualDeleteCount; k > actualStart; k--) {
						from = k + actualDeleteCount - 1;
						to = k + insertCount - 1;
						if (from in O) O[to] = O[from];
						else delete O[to];
					}
					for (k = 0; k < insertCount; k++) O[k + actualStart] = arguments[k + 2];
					O.length = len - actualDeleteCount + insertCount;
					return A;
				} });
			}),
			"a4d3": (function(module$80, exports$80, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var global = __webpack_require__("da84");
				var getBuiltIn = __webpack_require__("d066");
				var IS_PURE = __webpack_require__("c430");
				var DESCRIPTORS = __webpack_require__("83ab");
				var NATIVE_SYMBOL = __webpack_require__("4930");
				var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
				var fails = __webpack_require__("d039");
				var has = __webpack_require__("5135");
				var isArray = __webpack_require__("e8b5");
				var isObject = __webpack_require__("861d");
				var anObject = __webpack_require__("825a");
				var toObject = __webpack_require__("7b0b");
				var toIndexedObject = __webpack_require__("fc6a");
				var toPrimitive = __webpack_require__("c04e");
				var createPropertyDescriptor = __webpack_require__("5c6c");
				var nativeObjectCreate = __webpack_require__("7c73");
				var objectKeys = __webpack_require__("df75");
				var getOwnPropertyNamesModule = __webpack_require__("241c");
				var getOwnPropertyNamesExternal = __webpack_require__("057f");
				var getOwnPropertySymbolsModule = __webpack_require__("7418");
				var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
				var definePropertyModule = __webpack_require__("9bf2");
				var propertyIsEnumerableModule = __webpack_require__("d1e7");
				var createNonEnumerableProperty = __webpack_require__("9112");
				var redefine = __webpack_require__("6eeb");
				var shared = __webpack_require__("5692");
				var sharedKey = __webpack_require__("f772");
				var hiddenKeys = __webpack_require__("d012");
				var uid = __webpack_require__("90e3");
				var wellKnownSymbol = __webpack_require__("b622");
				var wrappedWellKnownSymbolModule = __webpack_require__("e538");
				var defineWellKnownSymbol = __webpack_require__("746f");
				var setToStringTag = __webpack_require__("d44e");
				var InternalStateModule = __webpack_require__("69f3");
				var $forEach = __webpack_require__("b727").forEach;
				var HIDDEN = sharedKey("hidden");
				var SYMBOL = "Symbol";
				var PROTOTYPE = "prototype";
				var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
				var setInternalState = InternalStateModule.set;
				var getInternalState = InternalStateModule.getterFor(SYMBOL);
				var ObjectPrototype = Object[PROTOTYPE];
				var $Symbol = global.Symbol;
				var $stringify = getBuiltIn("JSON", "stringify");
				var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
				var nativeDefineProperty = definePropertyModule.f;
				var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
				var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
				var AllSymbols = shared("symbols");
				var ObjectPrototypeSymbols = shared("op-symbols");
				var StringToSymbolRegistry = shared("string-to-symbol-registry");
				var SymbolToStringRegistry = shared("symbol-to-string-registry");
				var WellKnownSymbolsStore = shared("wks");
				var QObject = global.QObject;
				var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
				var setSymbolDescriptor = DESCRIPTORS && fails(function() {
					return nativeObjectCreate(nativeDefineProperty({}, "a", { get: function() {
						return nativeDefineProperty(this, "a", { value: 7 }).a;
					} })).a != 7;
				}) ? function(O, P, Attributes) {
					var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
					if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
					nativeDefineProperty(O, P, Attributes);
					if (ObjectPrototypeDescriptor && O !== ObjectPrototype) nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
				} : nativeDefineProperty;
				var wrap = function(tag, description) {
					var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
					setInternalState(symbol, {
						type: SYMBOL,
						tag,
						description
					});
					if (!DESCRIPTORS) symbol.description = description;
					return symbol;
				};
				var isSymbol = USE_SYMBOL_AS_UID ? function(it) {
					return typeof it == "symbol";
				} : function(it) {
					return Object(it) instanceof $Symbol;
				};
				var $defineProperty = function defineProperty(O, P, Attributes) {
					if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
					anObject(O);
					var key = toPrimitive(P, true);
					anObject(Attributes);
					if (has(AllSymbols, key)) {
						if (!Attributes.enumerable) {
							if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
							O[HIDDEN][key] = true;
						} else {
							if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
							Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
						}
						return setSymbolDescriptor(O, key, Attributes);
					}
					return nativeDefineProperty(O, key, Attributes);
				};
				var $defineProperties = function defineProperties(O, Properties) {
					anObject(O);
					var properties = toIndexedObject(Properties);
					$forEach(objectKeys(properties).concat($getOwnPropertySymbols(properties)), function(key) {
						if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
					});
					return O;
				};
				var $create = function create(O, Properties) {
					return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
				};
				var $propertyIsEnumerable = function propertyIsEnumerable(V) {
					var P = toPrimitive(V, true);
					var enumerable = nativePropertyIsEnumerable.call(this, P);
					if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
					return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
				};
				var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
					var it = toIndexedObject(O);
					var key = toPrimitive(P, true);
					if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
					var descriptor = nativeGetOwnPropertyDescriptor(it, key);
					if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) descriptor.enumerable = true;
					return descriptor;
				};
				var $getOwnPropertyNames = function getOwnPropertyNames(O) {
					var names = nativeGetOwnPropertyNames(toIndexedObject(O));
					var result = [];
					$forEach(names, function(key) {
						if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
					});
					return result;
				};
				var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
					var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
					var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
					var result = [];
					$forEach(names, function(key) {
						if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) result.push(AllSymbols[key]);
					});
					return result;
				};
				if (!NATIVE_SYMBOL) {
					$Symbol = function Symbol() {
						if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor");
						var description = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]);
						var tag = uid(description);
						var setter = function(value) {
							if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
							if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
							setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
						};
						if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
							configurable: true,
							set: setter
						});
						return wrap(tag, description);
					};
					redefine($Symbol[PROTOTYPE], "toString", function toString() {
						return getInternalState(this).tag;
					});
					redefine($Symbol, "withoutSetter", function(description) {
						return wrap(uid(description), description);
					});
					propertyIsEnumerableModule.f = $propertyIsEnumerable;
					definePropertyModule.f = $defineProperty;
					getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
					getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
					getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
					wrappedWellKnownSymbolModule.f = function(name) {
						return wrap(wellKnownSymbol(name), name);
					};
					if (DESCRIPTORS) {
						nativeDefineProperty($Symbol[PROTOTYPE], "description", {
							configurable: true,
							get: function description() {
								return getInternalState(this).description;
							}
						});
						if (!IS_PURE) redefine(ObjectPrototype, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
					}
				}
				$({
					global: true,
					wrap: true,
					forced: !NATIVE_SYMBOL,
					sham: !NATIVE_SYMBOL
				}, { Symbol: $Symbol });
				$forEach(objectKeys(WellKnownSymbolsStore), function(name) {
					defineWellKnownSymbol(name);
				});
				$({
					target: SYMBOL,
					stat: true,
					forced: !NATIVE_SYMBOL
				}, {
					"for": function(key) {
						var string = String(key);
						if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
						var symbol = $Symbol(string);
						StringToSymbolRegistry[string] = symbol;
						SymbolToStringRegistry[symbol] = string;
						return symbol;
					},
					keyFor: function keyFor(sym) {
						if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol");
						if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
					},
					useSetter: function() {
						USE_SETTER = true;
					},
					useSimple: function() {
						USE_SETTER = false;
					}
				});
				$({
					target: "Object",
					stat: true,
					forced: !NATIVE_SYMBOL,
					sham: !DESCRIPTORS
				}, {
					create: $create,
					defineProperty: $defineProperty,
					defineProperties: $defineProperties,
					getOwnPropertyDescriptor: $getOwnPropertyDescriptor
				});
				$({
					target: "Object",
					stat: true,
					forced: !NATIVE_SYMBOL
				}, {
					getOwnPropertyNames: $getOwnPropertyNames,
					getOwnPropertySymbols: $getOwnPropertySymbols
				});
				$({
					target: "Object",
					stat: true,
					forced: fails(function() {
						getOwnPropertySymbolsModule.f(1);
					})
				}, { getOwnPropertySymbols: function getOwnPropertySymbols(it) {
					return getOwnPropertySymbolsModule.f(toObject(it));
				} });
				if ($stringify) $({
					target: "JSON",
					stat: true,
					forced: !NATIVE_SYMBOL || fails(function() {
						var symbol = $Symbol();
						return $stringify([symbol]) != "[null]" || $stringify({ a: symbol }) != "{}" || $stringify(Object(symbol)) != "{}";
					})
				}, { stringify: function stringify(it, replacer, space) {
					var args = [it];
					var index = 1;
					var $replacer;
					while (arguments.length > index) args.push(arguments[index++]);
					$replacer = replacer;
					if (!isObject(replacer) && it === void 0 || isSymbol(it)) return;
					if (!isArray(replacer)) replacer = function(key, value) {
						if (typeof $replacer == "function") value = $replacer.call(this, key, value);
						if (!isSymbol(value)) return value;
					};
					args[1] = replacer;
					return $stringify.apply(null, args);
				} });
				if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
				setToStringTag($Symbol, SYMBOL);
				hiddenKeys[HIDDEN] = true;
			}),
			"a630": (function(module$81, exports$81, __webpack_require__) {
				var $ = __webpack_require__("23e7");
				var from = __webpack_require__("4df4");
				$({
					target: "Array",
					stat: true,
					forced: !__webpack_require__("1c7e")(function(iterable) {
						Array.from(iterable);
					})
				}, { from });
			}),
			"a640": (function(module$82, exports$82, __webpack_require__) {
				"use strict";
				var fails = __webpack_require__("d039");
				module$82.exports = function(METHOD_NAME, argument) {
					var method = [][METHOD_NAME];
					return !!method && fails(function() {
						method.call(null, argument || function() {
							throw 1;
						}, 1);
					});
				};
			}),
			"a691": (function(module$83, exports$83) {
				var ceil = Math.ceil;
				var floor = Math.floor;
				module$83.exports = function(argument) {
					return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
				};
			}),
			"ab13": (function(module$84, exports$84, __webpack_require__) {
				var MATCH = __webpack_require__("b622")("match");
				module$84.exports = function(METHOD_NAME) {
					var regexp = /./;
					try {
						"/./"[METHOD_NAME](regexp);
					} catch (e) {
						try {
							regexp[MATCH] = false;
							return "/./"[METHOD_NAME](regexp);
						} catch (f) {}
					}
					return false;
				};
			}),
			"ac1f": (function(module$85, exports$85, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var exec = __webpack_require__("9263");
				$({
					target: "RegExp",
					proto: true,
					forced: /./.exec !== exec
				}, { exec });
			}),
			"ad6d": (function(module$86, exports$86, __webpack_require__) {
				"use strict";
				var anObject = __webpack_require__("825a");
				module$86.exports = function() {
					var that = anObject(this);
					var result = "";
					if (that.global) result += "g";
					if (that.ignoreCase) result += "i";
					if (that.multiline) result += "m";
					if (that.dotAll) result += "s";
					if (that.unicode) result += "u";
					if (that.sticky) result += "y";
					return result;
				};
			}),
			"ae40": (function(module$87, exports$87, __webpack_require__) {
				var DESCRIPTORS = __webpack_require__("83ab");
				var fails = __webpack_require__("d039");
				var has = __webpack_require__("5135");
				var defineProperty = Object.defineProperty;
				var cache = {};
				var thrower = function(it) {
					throw it;
				};
				module$87.exports = function(METHOD_NAME, options) {
					if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
					if (!options) options = {};
					var method = [][METHOD_NAME];
					var ACCESSORS = has(options, "ACCESSORS") ? options.ACCESSORS : false;
					var argument0 = has(options, 0) ? options[0] : thrower;
					var argument1 = has(options, 1) ? options[1] : void 0;
					return cache[METHOD_NAME] = !!method && !fails(function() {
						if (ACCESSORS && !DESCRIPTORS) return true;
						var O = { length: -1 };
						if (ACCESSORS) defineProperty(O, 1, {
							enumerable: true,
							get: thrower
						});
						else O[1] = 1;
						method.call(O, argument0, argument1);
					});
				};
			}),
			"ae93": (function(module$88, exports$88, __webpack_require__) {
				"use strict";
				var getPrototypeOf = __webpack_require__("e163");
				var createNonEnumerableProperty = __webpack_require__("9112");
				var has = __webpack_require__("5135");
				var wellKnownSymbol = __webpack_require__("b622");
				var IS_PURE = __webpack_require__("c430");
				var ITERATOR = wellKnownSymbol("iterator");
				var BUGGY_SAFARI_ITERATORS = false;
				var returnThis = function() {
					return this;
				};
				var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
				if ([].keys) {
					arrayIterator = [].keys();
					if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
					else {
						PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
						if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
					}
				}
				if (IteratorPrototype == void 0) IteratorPrototype = {};
				if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
				module$88.exports = {
					IteratorPrototype,
					BUGGY_SAFARI_ITERATORS
				};
			}),
			"b041": (function(module$89, exports$89, __webpack_require__) {
				"use strict";
				var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
				var classof = __webpack_require__("f5df");
				module$89.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
					return "[object " + classof(this) + "]";
				};
			}),
			"b0c0": (function(module$90, exports$90, __webpack_require__) {
				var DESCRIPTORS = __webpack_require__("83ab");
				var defineProperty = __webpack_require__("9bf2").f;
				var FunctionPrototype = Function.prototype;
				var FunctionPrototypeToString = FunctionPrototype.toString;
				var nameRE = /^\s*function ([^ (]*)/;
				var NAME = "name";
				if (DESCRIPTORS && !(NAME in FunctionPrototype)) defineProperty(FunctionPrototype, NAME, {
					configurable: true,
					get: function() {
						try {
							return FunctionPrototypeToString.call(this).match(nameRE)[1];
						} catch (error) {
							return "";
						}
					}
				});
			}),
			"b622": (function(module$91, exports$91, __webpack_require__) {
				var global = __webpack_require__("da84");
				var shared = __webpack_require__("5692");
				var has = __webpack_require__("5135");
				var uid = __webpack_require__("90e3");
				var NATIVE_SYMBOL = __webpack_require__("4930");
				var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
				var WellKnownSymbolsStore = shared("wks");
				var Symbol = global.Symbol;
				var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
				module$91.exports = function(name) {
					if (!has(WellKnownSymbolsStore, name)) {
						if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
						else WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
					}
					return WellKnownSymbolsStore[name];
				};
			}),
			"b64b": (function(module$92, exports$92, __webpack_require__) {
				var $ = __webpack_require__("23e7");
				var toObject = __webpack_require__("7b0b");
				var nativeKeys = __webpack_require__("df75");
				$({
					target: "Object",
					stat: true,
					forced: __webpack_require__("d039")(function() {
						nativeKeys(1);
					})
				}, { keys: function keys(it) {
					return nativeKeys(toObject(it));
				} });
			}),
			"b727": (function(module$93, exports$93, __webpack_require__) {
				var bind = __webpack_require__("0366");
				var IndexedObject = __webpack_require__("44ad");
				var toObject = __webpack_require__("7b0b");
				var toLength = __webpack_require__("50c4");
				var arraySpeciesCreate = __webpack_require__("65f0");
				var push = [].push;
				var createMethod = function(TYPE) {
					var IS_MAP = TYPE == 1;
					var IS_FILTER = TYPE == 2;
					var IS_SOME = TYPE == 3;
					var IS_EVERY = TYPE == 4;
					var IS_FIND_INDEX = TYPE == 6;
					var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
					return function($this, callbackfn, that, specificCreate) {
						var O = toObject($this);
						var self = IndexedObject(O);
						var boundFunction = bind(callbackfn, that, 3);
						var length = toLength(self.length);
						var index = 0;
						var create = specificCreate || arraySpeciesCreate;
						var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0;
						var value, result;
						for (; length > index; index++) if (NO_HOLES || index in self) {
							value = self[index];
							result = boundFunction(value, index, O);
							if (TYPE) {
								if (IS_MAP) target[index] = result;
								else if (result) switch (TYPE) {
									case 3: return true;
									case 5: return value;
									case 6: return index;
									case 2: push.call(target, value);
								}
								else if (IS_EVERY) return false;
							}
						}
						return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
					};
				};
				module$93.exports = {
					forEach: createMethod(0),
					map: createMethod(1),
					filter: createMethod(2),
					some: createMethod(3),
					every: createMethod(4),
					find: createMethod(5),
					findIndex: createMethod(6)
				};
			}),
			"c04e": (function(module$94, exports$94, __webpack_require__) {
				var isObject = __webpack_require__("861d");
				module$94.exports = function(input, PREFERRED_STRING) {
					if (!isObject(input)) return input;
					var fn, val;
					if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
					if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input))) return val;
					if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
					throw TypeError("Can't convert object to primitive value");
				};
			}),
			"c430": (function(module$95, exports$95) {
				module$95.exports = false;
			}),
			"c6b6": (function(module$96, exports$96) {
				var toString = {}.toString;
				module$96.exports = function(it) {
					return toString.call(it).slice(8, -1);
				};
			}),
			"c6cd": (function(module$97, exports$97, __webpack_require__) {
				var global = __webpack_require__("da84");
				var setGlobal = __webpack_require__("ce4e");
				var SHARED = "__core-js_shared__";
				module$97.exports = global[SHARED] || setGlobal(SHARED, {});
			}),
			"c740": (function(module$98, exports$98, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var $findIndex = __webpack_require__("b727").findIndex;
				var addToUnscopables = __webpack_require__("44d2");
				var arrayMethodUsesToLength = __webpack_require__("ae40");
				var FIND_INDEX = "findIndex";
				var SKIPS_HOLES = true;
				var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);
				if (FIND_INDEX in []) Array(1)[FIND_INDEX](function() {
					SKIPS_HOLES = false;
				});
				$({
					target: "Array",
					proto: true,
					forced: SKIPS_HOLES || !USES_TO_LENGTH
				}, { findIndex: function findIndex(callbackfn) {
					return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
				} });
				addToUnscopables(FIND_INDEX);
			}),
			"c8ba": (function(module$99, exports$99) {
				var g = (function() {
					return this;
				})();
				try {
					g = g || new Function("return this")();
				} catch (e) {
					if (typeof window === "object") g = window;
				}
				module$99.exports = g;
			}),
			"c975": (function(module$100, exports$100, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var $indexOf = __webpack_require__("4d64").indexOf;
				var arrayMethodIsStrict = __webpack_require__("a640");
				var arrayMethodUsesToLength = __webpack_require__("ae40");
				var nativeIndexOf = [].indexOf;
				var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
				var STRICT_METHOD = arrayMethodIsStrict("indexOf");
				var USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", {
					ACCESSORS: true,
					1: 0
				});
				$({
					target: "Array",
					proto: true,
					forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH
				}, { indexOf: function indexOf(searchElement) {
					return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : void 0);
				} });
			}),
			"ca84": (function(module$101, exports$101, __webpack_require__) {
				var has = __webpack_require__("5135");
				var toIndexedObject = __webpack_require__("fc6a");
				var indexOf = __webpack_require__("4d64").indexOf;
				var hiddenKeys = __webpack_require__("d012");
				module$101.exports = function(object, names) {
					var O = toIndexedObject(object);
					var i = 0;
					var result = [];
					var key;
					for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
					while (names.length > i) if (has(O, key = names[i++])) ~indexOf(result, key) || result.push(key);
					return result;
				};
			}),
			"caad": (function(module$102, exports$102, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var $includes = __webpack_require__("4d64").includes;
				var addToUnscopables = __webpack_require__("44d2");
				$({
					target: "Array",
					proto: true,
					forced: !__webpack_require__("ae40")("indexOf", {
						ACCESSORS: true,
						1: 0
					})
				}, { includes: function includes(el) {
					return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
				} });
				addToUnscopables("includes");
			}),
			"cc12": (function(module$103, exports$103, __webpack_require__) {
				var global = __webpack_require__("da84");
				var isObject = __webpack_require__("861d");
				var document = global.document;
				var EXISTS = isObject(document) && isObject(document.createElement);
				module$103.exports = function(it) {
					return EXISTS ? document.createElement(it) : {};
				};
			}),
			"ce4e": (function(module$104, exports$104, __webpack_require__) {
				var global = __webpack_require__("da84");
				var createNonEnumerableProperty = __webpack_require__("9112");
				module$104.exports = function(key, value) {
					try {
						createNonEnumerableProperty(global, key, value);
					} catch (error) {
						global[key] = value;
					}
					return value;
				};
			}),
			"d012": (function(module$105, exports$105) {
				module$105.exports = {};
			}),
			"d039": (function(module$106, exports$106) {
				module$106.exports = function(exec) {
					try {
						return !!exec();
					} catch (error) {
						return true;
					}
				};
			}),
			"d066": (function(module$107, exports$107, __webpack_require__) {
				var path = __webpack_require__("428f");
				var global = __webpack_require__("da84");
				var aFunction = function(variable) {
					return typeof variable == "function" ? variable : void 0;
				};
				module$107.exports = function(namespace, method) {
					return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
				};
			}),
			"d1e7": (function(module$108, exports$108, __webpack_require__) {
				"use strict";
				var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
				var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
				exports$108.f = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1) ? function propertyIsEnumerable(V) {
					var descriptor = getOwnPropertyDescriptor(this, V);
					return !!descriptor && descriptor.enumerable;
				} : nativePropertyIsEnumerable;
			}),
			"d28b": (function(module$109, exports$109, __webpack_require__) {
				__webpack_require__("746f")("iterator");
			}),
			"d2bb": (function(module$110, exports$110, __webpack_require__) {
				var anObject = __webpack_require__("825a");
				var aPossiblePrototype = __webpack_require__("3bbe");
				module$110.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
					var CORRECT_SETTER = false;
					var test = {};
					var setter;
					try {
						setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
						setter.call(test, []);
						CORRECT_SETTER = test instanceof Array;
					} catch (error) {}
					return function setPrototypeOf(O, proto) {
						anObject(O);
						aPossiblePrototype(proto);
						if (CORRECT_SETTER) setter.call(O, proto);
						else O.__proto__ = proto;
						return O;
					};
				}() : void 0);
			}),
			"d3b7": (function(module$111, exports$111, __webpack_require__) {
				var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
				var redefine = __webpack_require__("6eeb");
				var toString = __webpack_require__("b041");
				if (!TO_STRING_TAG_SUPPORT) redefine(Object.prototype, "toString", toString, { unsafe: true });
			}),
			"d44e": (function(module$112, exports$112, __webpack_require__) {
				var defineProperty = __webpack_require__("9bf2").f;
				var has = __webpack_require__("5135");
				var TO_STRING_TAG = __webpack_require__("b622")("toStringTag");
				module$112.exports = function(it, TAG, STATIC) {
					if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) defineProperty(it, TO_STRING_TAG, {
						configurable: true,
						value: TAG
					});
				};
			}),
			"d58f": (function(module$113, exports$113, __webpack_require__) {
				var aFunction = __webpack_require__("1c0b");
				var toObject = __webpack_require__("7b0b");
				var IndexedObject = __webpack_require__("44ad");
				var toLength = __webpack_require__("50c4");
				var createMethod = function(IS_RIGHT) {
					return function(that, callbackfn, argumentsLength, memo) {
						aFunction(callbackfn);
						var O = toObject(that);
						var self = IndexedObject(O);
						var length = toLength(O.length);
						var index = IS_RIGHT ? length - 1 : 0;
						var i = IS_RIGHT ? -1 : 1;
						if (argumentsLength < 2) while (true) {
							if (index in self) {
								memo = self[index];
								index += i;
								break;
							}
							index += i;
							if (IS_RIGHT ? index < 0 : length <= index) throw TypeError("Reduce of empty array with no initial value");
						}
						for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) memo = callbackfn(memo, self[index], index, O);
						return memo;
					};
				};
				module$113.exports = {
					left: createMethod(false),
					right: createMethod(true)
				};
			}),
			"d784": (function(module$114, exports$114, __webpack_require__) {
				"use strict";
				__webpack_require__("ac1f");
				var redefine = __webpack_require__("6eeb");
				var fails = __webpack_require__("d039");
				var wellKnownSymbol = __webpack_require__("b622");
				var regexpExec = __webpack_require__("9263");
				var createNonEnumerableProperty = __webpack_require__("9112");
				var SPECIES = wellKnownSymbol("species");
				var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
					var re = /./;
					re.exec = function() {
						var result = [];
						result.groups = { a: "7" };
						return result;
					};
					return "".replace(re, "$<a>") !== "7";
				});
				var REPLACE_KEEPS_$0 = (function() {
					return "a".replace(/./, "$0") === "$0";
				})();
				var REPLACE = wellKnownSymbol("replace");
				var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function() {
					if (/./[REPLACE]) return /./[REPLACE]("a", "$0") === "";
					return false;
				})();
				var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
					var re = /(?:)/;
					var originalExec = re.exec;
					re.exec = function() {
						return originalExec.apply(this, arguments);
					};
					var result = "ab".split(re);
					return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
				});
				module$114.exports = function(KEY, length, exec, sham) {
					var SYMBOL = wellKnownSymbol(KEY);
					var DELEGATES_TO_SYMBOL = !fails(function() {
						var O = {};
						O[SYMBOL] = function() {
							return 7;
						};
						return ""[KEY](O) != 7;
					});
					var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
						var execCalled = false;
						var re = /a/;
						if (KEY === "split") {
							re = {};
							re.constructor = {};
							re.constructor[SPECIES] = function() {
								return re;
							};
							re.flags = "";
							re[SYMBOL] = /./[SYMBOL];
						}
						re.exec = function() {
							execCalled = true;
							return null;
						};
						re[SYMBOL]("");
						return !execCalled;
					});
					if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
						var nativeRegExpMethod = /./[SYMBOL];
						var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
							if (regexp.exec === regexpExec) {
								if (DELEGATES_TO_SYMBOL && !forceStringMethod) return {
									done: true,
									value: nativeRegExpMethod.call(regexp, str, arg2)
								};
								return {
									done: true,
									value: nativeMethod.call(str, regexp, arg2)
								};
							}
							return { done: false };
						}, {
							REPLACE_KEEPS_$0,
							REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
						});
						var stringMethod = methods[0];
						var regexMethod = methods[1];
						redefine(String.prototype, KEY, stringMethod);
						redefine(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
							return regexMethod.call(string, this, arg);
						} : function(string) {
							return regexMethod.call(string, this);
						});
					}
					if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], "sham", true);
				};
			}),
			"d81d": (function(module$115, exports$115, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var $map = __webpack_require__("b727").map;
				var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
				var arrayMethodUsesToLength = __webpack_require__("ae40");
				var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
				var USES_TO_LENGTH = arrayMethodUsesToLength("map");
				$({
					target: "Array",
					proto: true,
					forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
				}, { map: function map(callbackfn) {
					return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
				} });
			}),
			"da84": (function(module$116, exports$116, __webpack_require__) {
				(function(global) {
					var check = function(it) {
						return it && it.Math == Math && it;
					};
					module$116.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || Function("return this")();
				}).call(this, __webpack_require__("c8ba"));
			}),
			"dbb4": (function(module$117, exports$117, __webpack_require__) {
				var $ = __webpack_require__("23e7");
				var DESCRIPTORS = __webpack_require__("83ab");
				var ownKeys = __webpack_require__("56ef");
				var toIndexedObject = __webpack_require__("fc6a");
				var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
				var createProperty = __webpack_require__("8418");
				$({
					target: "Object",
					stat: true,
					sham: !DESCRIPTORS
				}, { getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
					var O = toIndexedObject(object);
					var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
					var keys = ownKeys(O);
					var result = {};
					var index = 0;
					var key, descriptor;
					while (keys.length > index) {
						descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
						if (descriptor !== void 0) createProperty(result, key, descriptor);
					}
					return result;
				} });
			}),
			"dbf1": (function(module$118, __webpack_exports__, __webpack_require__) {
				"use strict";
				(function(global) {
					__webpack_require__.d(__webpack_exports__, "a", function() {
						return console;
					});
					function getConsole() {
						if (typeof window !== "undefined") return window.console;
						return global.console;
					}
					var console = getConsole();
				}).call(this, __webpack_require__("c8ba"));
			}),
			"ddb0": (function(module$119, exports$118, __webpack_require__) {
				var global = __webpack_require__("da84");
				var DOMIterables = __webpack_require__("fdbc");
				var ArrayIteratorMethods = __webpack_require__("e260");
				var createNonEnumerableProperty = __webpack_require__("9112");
				var wellKnownSymbol = __webpack_require__("b622");
				var ITERATOR = wellKnownSymbol("iterator");
				var TO_STRING_TAG = wellKnownSymbol("toStringTag");
				var ArrayValues = ArrayIteratorMethods.values;
				for (var COLLECTION_NAME in DOMIterables) {
					var Collection = global[COLLECTION_NAME];
					var CollectionPrototype = Collection && Collection.prototype;
					if (CollectionPrototype) {
						if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
							createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
						} catch (error) {
							CollectionPrototype[ITERATOR] = ArrayValues;
						}
						if (!CollectionPrototype[TO_STRING_TAG]) createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
						if (DOMIterables[COLLECTION_NAME]) {
							for (var METHOD_NAME in ArrayIteratorMethods) if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
								createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
							} catch (error) {
								CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
							}
						}
					}
				}
			}),
			"df75": (function(module$120, exports$119, __webpack_require__) {
				var internalObjectKeys = __webpack_require__("ca84");
				var enumBugKeys = __webpack_require__("7839");
				module$120.exports = Object.keys || function keys(O) {
					return internalObjectKeys(O, enumBugKeys);
				};
			}),
			"e01a": (function(module$121, exports$120, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var DESCRIPTORS = __webpack_require__("83ab");
				var global = __webpack_require__("da84");
				var has = __webpack_require__("5135");
				var isObject = __webpack_require__("861d");
				var defineProperty = __webpack_require__("9bf2").f;
				var copyConstructorProperties = __webpack_require__("e893");
				var NativeSymbol = global.Symbol;
				if (DESCRIPTORS && typeof NativeSymbol == "function" && (!("description" in NativeSymbol.prototype) || NativeSymbol().description !== void 0)) {
					var EmptyStringDescriptionStore = {};
					var SymbolWrapper = function Symbol() {
						var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]);
						var result = this instanceof SymbolWrapper ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
						if (description === "") EmptyStringDescriptionStore[result] = true;
						return result;
					};
					copyConstructorProperties(SymbolWrapper, NativeSymbol);
					var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
					symbolPrototype.constructor = SymbolWrapper;
					var symbolToString = symbolPrototype.toString;
					var native = String(NativeSymbol("test")) == "Symbol(test)";
					var regexp = /^Symbol\((.*)\)[^)]+$/;
					defineProperty(symbolPrototype, "description", {
						configurable: true,
						get: function description() {
							var symbol = isObject(this) ? this.valueOf() : this;
							var string = symbolToString.call(symbol);
							if (has(EmptyStringDescriptionStore, symbol)) return "";
							var desc = native ? string.slice(7, -1) : string.replace(regexp, "$1");
							return desc === "" ? void 0 : desc;
						}
					});
					$({
						global: true,
						forced: true
					}, { Symbol: SymbolWrapper });
				}
			}),
			"e163": (function(module$122, exports$121, __webpack_require__) {
				var has = __webpack_require__("5135");
				var toObject = __webpack_require__("7b0b");
				var sharedKey = __webpack_require__("f772");
				var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");
				var IE_PROTO = sharedKey("IE_PROTO");
				var ObjectPrototype = Object.prototype;
				module$122.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
					O = toObject(O);
					if (has(O, IE_PROTO)) return O[IE_PROTO];
					if (typeof O.constructor == "function" && O instanceof O.constructor) return O.constructor.prototype;
					return O instanceof Object ? ObjectPrototype : null;
				};
			}),
			"e177": (function(module$123, exports$122, __webpack_require__) {
				module$123.exports = !__webpack_require__("d039")(function() {
					function F() {}
					F.prototype.constructor = null;
					return Object.getPrototypeOf(new F()) !== F.prototype;
				});
			}),
			"e260": (function(module$124, exports$123, __webpack_require__) {
				"use strict";
				var toIndexedObject = __webpack_require__("fc6a");
				var addToUnscopables = __webpack_require__("44d2");
				var Iterators = __webpack_require__("3f8c");
				var InternalStateModule = __webpack_require__("69f3");
				var defineIterator = __webpack_require__("7dd0");
				var ARRAY_ITERATOR = "Array Iterator";
				var setInternalState = InternalStateModule.set;
				var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
				module$124.exports = defineIterator(Array, "Array", function(iterated, kind) {
					setInternalState(this, {
						type: ARRAY_ITERATOR,
						target: toIndexedObject(iterated),
						index: 0,
						kind
					});
				}, function() {
					var state = getInternalState(this);
					var target = state.target;
					var kind = state.kind;
					var index = state.index++;
					if (!target || index >= target.length) {
						state.target = void 0;
						return {
							value: void 0,
							done: true
						};
					}
					if (kind == "keys") return {
						value: index,
						done: false
					};
					if (kind == "values") return {
						value: target[index],
						done: false
					};
					return {
						value: [index, target[index]],
						done: false
					};
				}, "values");
				Iterators.Arguments = Iterators.Array;
				addToUnscopables("keys");
				addToUnscopables("values");
				addToUnscopables("entries");
			}),
			"e439": (function(module$125, exports$124, __webpack_require__) {
				var $ = __webpack_require__("23e7");
				var fails = __webpack_require__("d039");
				var toIndexedObject = __webpack_require__("fc6a");
				var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
				var DESCRIPTORS = __webpack_require__("83ab");
				var FAILS_ON_PRIMITIVES = fails(function() {
					nativeGetOwnPropertyDescriptor(1);
				});
				$({
					target: "Object",
					stat: true,
					forced: !DESCRIPTORS || FAILS_ON_PRIMITIVES,
					sham: !DESCRIPTORS
				}, { getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
					return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
				} });
			}),
			"e538": (function(module$126, exports$125, __webpack_require__) {
				exports$125.f = __webpack_require__("b622");
			}),
			"e893": (function(module$127, exports$126, __webpack_require__) {
				var has = __webpack_require__("5135");
				var ownKeys = __webpack_require__("56ef");
				var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
				var definePropertyModule = __webpack_require__("9bf2");
				module$127.exports = function(target, source) {
					var keys = ownKeys(source);
					var defineProperty = definePropertyModule.f;
					var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
					for (var i = 0; i < keys.length; i++) {
						var key = keys[i];
						if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
					}
				};
			}),
			"e8b5": (function(module$128, exports$127, __webpack_require__) {
				var classof = __webpack_require__("c6b6");
				module$128.exports = Array.isArray || function isArray(arg) {
					return classof(arg) == "Array";
				};
			}),
			"e95a": (function(module$129, exports$128, __webpack_require__) {
				var wellKnownSymbol = __webpack_require__("b622");
				var Iterators = __webpack_require__("3f8c");
				var ITERATOR = wellKnownSymbol("iterator");
				var ArrayPrototype = Array.prototype;
				module$129.exports = function(it) {
					return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
				};
			}),
			"f5df": (function(module$130, exports$129, __webpack_require__) {
				var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
				var classofRaw = __webpack_require__("c6b6");
				var TO_STRING_TAG = __webpack_require__("b622")("toStringTag");
				var CORRECT_ARGUMENTS = classofRaw(function() {
					return arguments;
				}()) == "Arguments";
				var tryGet = function(it, key) {
					try {
						return it[key];
					} catch (error) {}
				};
				module$130.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
					var O, tag, result;
					return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
				};
			}),
			"f772": (function(module$131, exports$130, __webpack_require__) {
				var shared = __webpack_require__("5692");
				var uid = __webpack_require__("90e3");
				var keys = shared("keys");
				module$131.exports = function(key) {
					return keys[key] || (keys[key] = uid(key));
				};
			}),
			"fb15": (function(module$132, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				if (typeof window !== "undefined") {
					var currentScript = window.document.currentScript;
					var getCurrentScript = __webpack_require__("8875");
					currentScript = getCurrentScript();
					if (!("currentScript" in document)) Object.defineProperty(document, "currentScript", { get: getCurrentScript });
					var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
					if (src) __webpack_require__.p = src[1];
				}
				__webpack_require__("99af");
				__webpack_require__("4de4");
				__webpack_require__("4160");
				__webpack_require__("c975");
				__webpack_require__("d81d");
				__webpack_require__("a434");
				__webpack_require__("159b");
				__webpack_require__("a4d3");
				__webpack_require__("e439");
				__webpack_require__("dbb4");
				__webpack_require__("b64b");
				function _defineProperty(obj, key, value) {
					if (key in obj) Object.defineProperty(obj, key, {
						value,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value;
					return obj;
				}
				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) symbols = symbols.filter(function(sym) {
							return Object.getOwnPropertyDescriptor(object, sym).enumerable;
						});
						keys.push.apply(keys, symbols);
					}
					return keys;
				}
				function _objectSpread2(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
							_defineProperty(target, key, source[key]);
						});
						else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
						else ownKeys(Object(source)).forEach(function(key) {
							Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
						});
					}
					return target;
				}
				function _arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}
				__webpack_require__("e01a");
				__webpack_require__("d28b");
				__webpack_require__("e260");
				__webpack_require__("d3b7");
				__webpack_require__("3ca3");
				__webpack_require__("ddb0");
				function _iterableToArrayLimit(arr, i) {
					if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = void 0;
					try {
						for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}
				__webpack_require__("a630");
				__webpack_require__("fb6a");
				__webpack_require__("b0c0");
				__webpack_require__("25f0");
				function _arrayLikeToArray(arr, len) {
					if (len == null || len > arr.length) len = arr.length;
					for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
					return arr2;
				}
				function _unsupportedIterableToArray(o, minLen) {
					if (!o) return;
					if (typeof o === "string") return _arrayLikeToArray(o, minLen);
					var n = Object.prototype.toString.call(o).slice(8, -1);
					if (n === "Object" && o.constructor) n = o.constructor.name;
					if (n === "Map" || n === "Set") return Array.from(o);
					if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
				}
				function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function _slicedToArray(arr, i) {
					return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
				}
				function _arrayWithoutHoles(arr) {
					if (Array.isArray(arr)) return _arrayLikeToArray(arr);
				}
				function _iterableToArray(iter) {
					if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
				}
				function _nonIterableSpread() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				function _toConsumableArray(arr) {
					return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
				}
				var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
				var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/ __webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);
				function removeNode(node) {
					if (node.parentElement !== null) node.parentElement.removeChild(node);
				}
				function insertNodeAt(fatherNode, node, position) {
					var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
					fatherNode.insertBefore(node, refNode);
				}
				var console = __webpack_require__("dbf1");
				__webpack_require__("13d5");
				__webpack_require__("4fad");
				__webpack_require__("ac1f");
				__webpack_require__("5319");
				function cached(fn) {
					var cache = Object.create(null);
					return function cachedFn(str) {
						return cache[str] || (cache[str] = fn(str));
					};
				}
				var regex = /-(\w)/g;
				var camelize = cached(function(str) {
					return str.replace(regex, function(_, c) {
						return c.toUpperCase();
					});
				});
				__webpack_require__("5db7");
				__webpack_require__("73d9");
				var manageAndEmit = [
					"Start",
					"Add",
					"Remove",
					"Update",
					"End"
				];
				var emit = [
					"Choose",
					"Unchoose",
					"Sort",
					"Filter",
					"Clone"
				];
				var manage = ["Move"];
				var eventHandlerNames = [
					manage,
					manageAndEmit,
					emit
				].flatMap(function(events) {
					return events;
				}).map(function(evt) {
					return "on".concat(evt);
				});
				var events = {
					manage,
					manageAndEmit,
					emit
				};
				function isReadOnly(eventName) {
					return eventHandlerNames.indexOf(eventName) !== -1;
				}
				__webpack_require__("caad");
				__webpack_require__("2ca0");
				var tags = [
					"a",
					"abbr",
					"address",
					"area",
					"article",
					"aside",
					"audio",
					"b",
					"base",
					"bdi",
					"bdo",
					"blockquote",
					"body",
					"br",
					"button",
					"canvas",
					"caption",
					"cite",
					"code",
					"col",
					"colgroup",
					"data",
					"datalist",
					"dd",
					"del",
					"details",
					"dfn",
					"dialog",
					"div",
					"dl",
					"dt",
					"em",
					"embed",
					"fieldset",
					"figcaption",
					"figure",
					"footer",
					"form",
					"h1",
					"h2",
					"h3",
					"h4",
					"h5",
					"h6",
					"head",
					"header",
					"hgroup",
					"hr",
					"html",
					"i",
					"iframe",
					"img",
					"input",
					"ins",
					"kbd",
					"label",
					"legend",
					"li",
					"link",
					"main",
					"map",
					"mark",
					"math",
					"menu",
					"menuitem",
					"meta",
					"meter",
					"nav",
					"noscript",
					"object",
					"ol",
					"optgroup",
					"option",
					"output",
					"p",
					"param",
					"picture",
					"pre",
					"progress",
					"q",
					"rb",
					"rp",
					"rt",
					"rtc",
					"ruby",
					"s",
					"samp",
					"script",
					"section",
					"select",
					"slot",
					"small",
					"source",
					"span",
					"strong",
					"style",
					"sub",
					"summary",
					"sup",
					"svg",
					"table",
					"tbody",
					"td",
					"template",
					"textarea",
					"tfoot",
					"th",
					"thead",
					"time",
					"title",
					"tr",
					"track",
					"u",
					"ul",
					"var",
					"video",
					"wbr"
				];
				function isHtmlTag(name) {
					return tags.includes(name);
				}
				function isTransition(name) {
					return ["transition-group", "TransitionGroup"].includes(name);
				}
				function isHtmlAttribute(value) {
					return [
						"id",
						"class",
						"role",
						"style"
					].includes(value) || value.startsWith("data-") || value.startsWith("aria-") || value.startsWith("on");
				}
				function project(entries) {
					return entries.reduce(function(res, _ref) {
						var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0];
						res[key] = _ref2[1];
						return res;
					}, {});
				}
				function getComponentAttributes(_ref3) {
					var $attrs = _ref3.$attrs, _ref3$componentData = _ref3.componentData, componentData = _ref3$componentData === void 0 ? {} : _ref3$componentData;
					return _objectSpread2(_objectSpread2({}, project(Object.entries($attrs).filter(function(_ref4) {
						var _ref5 = _slicedToArray(_ref4, 2), key = _ref5[0];
						_ref5[1];
						return isHtmlAttribute(key);
					}))), componentData);
				}
				function createSortableOption(_ref6) {
					var $attrs = _ref6.$attrs, callBackBuilder = _ref6.callBackBuilder;
					var options = project(getValidSortableEntries($attrs));
					Object.entries(callBackBuilder).forEach(function(_ref7) {
						var _ref8 = _slicedToArray(_ref7, 2), eventType = _ref8[0], eventBuilder = _ref8[1];
						events[eventType].forEach(function(event) {
							options["on".concat(event)] = eventBuilder(event);
						});
					});
					var draggable = "[data-draggable]".concat(options.draggable || "");
					return _objectSpread2(_objectSpread2({}, options), {}, { draggable });
				}
				function getValidSortableEntries(value) {
					return Object.entries(value).filter(function(_ref9) {
						var _ref10 = _slicedToArray(_ref9, 2), key = _ref10[0];
						_ref10[1];
						return !isHtmlAttribute(key);
					}).map(function(_ref11) {
						var _ref12 = _slicedToArray(_ref11, 2), key = _ref12[0], value = _ref12[1];
						return [camelize(key), value];
					}).filter(function(_ref13) {
						var _ref14 = _slicedToArray(_ref13, 2), key = _ref14[0];
						_ref14[1];
						return !isReadOnly(key);
					});
				}
				__webpack_require__("c740");
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
				}
				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}
				function _createClass(Constructor, protoProps, staticProps) {
					if (protoProps) _defineProperties(Constructor.prototype, protoProps);
					if (staticProps) _defineProperties(Constructor, staticProps);
					return Constructor;
				}
				var getHtmlElementFromNode = function getHtmlElementFromNode(_ref) {
					return _ref.el;
				};
				var addContext = function addContext(domElement, context) {
					return domElement.__draggable_context = context;
				};
				var getContext = function getContext(domElement) {
					return domElement.__draggable_context;
				};
				var componentStructure_ComponentStructure = /*#__PURE__*/ function() {
					function ComponentStructure(_ref2) {
						var _ref2$nodes = _ref2.nodes, header = _ref2$nodes.header, defaultNodes = _ref2$nodes.default, footer = _ref2$nodes.footer, root = _ref2.root, realList = _ref2.realList;
						_classCallCheck(this, ComponentStructure);
						this.defaultNodes = defaultNodes;
						this.children = [].concat(_toConsumableArray(header), _toConsumableArray(defaultNodes), _toConsumableArray(footer));
						this.externalComponent = root.externalComponent;
						this.rootTransition = root.transition;
						this.tag = root.tag;
						this.realList = realList;
					}
					_createClass(ComponentStructure, [
						{
							key: "render",
							value: function render(h, attributes) {
								var tag = this.tag, children = this.children;
								return h(tag, attributes, !this._isRootComponent ? children : { default: function _default() {
									return children;
								} });
							}
						},
						{
							key: "updated",
							value: function updated() {
								var defaultNodes = this.defaultNodes, realList = this.realList;
								defaultNodes.forEach(function(node, index) {
									addContext(getHtmlElementFromNode(node), {
										element: realList[index],
										index
									});
								});
							}
						},
						{
							key: "getUnderlyingVm",
							value: function getUnderlyingVm(domElement) {
								return getContext(domElement);
							}
						},
						{
							key: "getVmIndexFromDomIndex",
							value: function getVmIndexFromDomIndex(domIndex, element) {
								var defaultNodes = this.defaultNodes;
								var length = defaultNodes.length;
								var domChildren = element.children;
								var domElement = domChildren.item(domIndex);
								if (domElement === null) return length;
								var context = getContext(domElement);
								if (context) return context.index;
								if (length === 0) return 0;
								var firstDomListElement = getHtmlElementFromNode(defaultNodes[0]);
								return domIndex < _toConsumableArray(domChildren).findIndex(function(element) {
									return element === firstDomListElement;
								}) ? 0 : length;
							}
						},
						{
							key: "_isRootComponent",
							get: function get() {
								return this.externalComponent || this.rootTransition;
							}
						}
					]);
					return ComponentStructure;
				}();
				var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
				function getSlot(slots, key) {
					var slotValue = slots[key];
					return slotValue ? slotValue() : [];
				}
				function computeNodes(_ref) {
					var $slots = _ref.$slots, realList = _ref.realList, getKey = _ref.getKey;
					var normalizedList = realList || [];
					var _map2 = _slicedToArray(["header", "footer"].map(function(name) {
						return getSlot($slots, name);
					}), 2), header = _map2[0], footer = _map2[1];
					var item = $slots.item;
					if (!item) throw new Error("draggable element must have an item slot");
					var defaultNodes = normalizedList.flatMap(function(element, index) {
						return item({
							element,
							index
						}).map(function(node) {
							node.key = getKey(element);
							node.props = _objectSpread2(_objectSpread2({}, node.props || {}), {}, { "data-draggable": true });
							return node;
						});
					});
					if (defaultNodes.length !== normalizedList.length) throw new Error("Item slot must have only one child");
					return {
						header,
						footer,
						default: defaultNodes
					};
				}
				function getRootInformation(tag) {
					var transition = isTransition(tag);
					var externalComponent = !isHtmlTag(tag) && !transition;
					return {
						transition,
						externalComponent,
						tag: externalComponent ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])(tag) : transition ? external_commonjs_vue_commonjs2_vue_root_Vue_["TransitionGroup"] : tag
					};
				}
				function computeComponentStructure(_ref2) {
					var $slots = _ref2.$slots, tag = _ref2.tag, realList = _ref2.realList, getKey = _ref2.getKey;
					return new componentStructure_ComponentStructure({
						nodes: computeNodes({
							$slots,
							realList,
							getKey
						}),
						root: getRootInformation(tag),
						realList
					});
				}
				function _emit(evtName, evtData) {
					var _this = this;
					Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function() {
						return _this.$emit(evtName.toLowerCase(), evtData);
					});
				}
				function _manage(evtName) {
					var _this2 = this;
					return function(evtData, originalElement) {
						if (_this2.realList !== null) return _this2["onDrag".concat(evtName)](evtData, originalElement);
					};
				}
				function _manageAndEmit(evtName) {
					var _this3 = this;
					var delegateCallBack = _manage.call(this, evtName);
					return function(evtData, originalElement) {
						delegateCallBack.call(_this3, evtData, originalElement);
						_emit.call(_this3, evtName, evtData);
					};
				}
				var draggingElement = null;
				var props = {
					list: {
						type: Array,
						required: false,
						default: null
					},
					modelValue: {
						type: Array,
						required: false,
						default: null
					},
					itemKey: {
						type: [String, Function],
						required: true
					},
					clone: {
						type: Function,
						default: function _default(original) {
							return original;
						}
					},
					tag: {
						type: String,
						default: "div"
					},
					move: {
						type: Function,
						default: null
					},
					componentData: {
						type: Object,
						required: false,
						default: null
					}
				};
				var emits = ["update:modelValue", "change"].concat(_toConsumableArray([].concat(_toConsumableArray(events.manageAndEmit), _toConsumableArray(events.emit)).map(function(evt) {
					return evt.toLowerCase();
				})));
				__webpack_exports__["default"] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
					name: "draggable",
					inheritAttrs: false,
					props,
					emits,
					data: function data() {
						return { error: false };
					},
					render: function render() {
						try {
							this.error = false;
							var $slots = this.$slots, $attrs = this.$attrs, tag = this.tag, componentData = this.componentData, realList = this.realList, getKey = this.getKey;
							var componentStructure = computeComponentStructure({
								$slots,
								tag,
								realList,
								getKey
							});
							this.componentStructure = componentStructure;
							var attributes = getComponentAttributes({
								$attrs,
								componentData
							});
							return componentStructure.render(external_commonjs_vue_commonjs2_vue_root_Vue_["h"], attributes);
						} catch (err) {
							this.error = true;
							return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("pre", { style: { color: "red" } }, err.stack);
						}
					},
					created: function created() {
						if (this.list !== null && this.modelValue !== null) console["a"].error("modelValue and list props are mutually exclusive! Please set one or another.");
					},
					mounted: function mounted() {
						var _this4 = this;
						if (this.error) return;
						var $attrs = this.$attrs, $el = this.$el;
						this.componentStructure.updated();
						var sortableOptions = createSortableOption({
							$attrs,
							callBackBuilder: {
								manageAndEmit: function manageAndEmit(event) {
									return _manageAndEmit.call(_this4, event);
								},
								emit: function emit(event) {
									return _emit.bind(_this4, event);
								},
								manage: function manage(event) {
									return _manage.call(_this4, event);
								}
							}
						});
						var targetDomElement = $el.nodeType === 1 ? $el : $el.parentElement;
						this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(targetDomElement, sortableOptions);
						this.targetDomElement = targetDomElement;
						targetDomElement.__draggable_component__ = this;
					},
					updated: function updated() {
						this.componentStructure.updated();
					},
					beforeUnmount: function beforeUnmount() {
						if (this._sortable !== void 0) this._sortable.destroy();
					},
					computed: {
						realList: function realList() {
							var list = this.list;
							return list ? list : this.modelValue;
						},
						getKey: function getKey() {
							var itemKey = this.itemKey;
							if (typeof itemKey === "function") return itemKey;
							return function(element) {
								return element[itemKey];
							};
						}
					},
					watch: { $attrs: {
						handler: function handler(newOptionValue) {
							var _sortable = this._sortable;
							if (!_sortable) return;
							getValidSortableEntries(newOptionValue).forEach(function(_ref) {
								var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
								_sortable.option(key, value);
							});
						},
						deep: true
					} },
					methods: {
						getUnderlyingVm: function getUnderlyingVm(domElement) {
							return this.componentStructure.getUnderlyingVm(domElement) || null;
						},
						getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(htmElement) {
							return htmElement.__draggable_component__;
						},
						emitChanges: function emitChanges(evt) {
							var _this5 = this;
							Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function() {
								return _this5.$emit("change", evt);
							});
						},
						alterList: function alterList(onList) {
							if (this.list) {
								onList(this.list);
								return;
							}
							var newList = _toConsumableArray(this.modelValue);
							onList(newList);
							this.$emit("update:modelValue", newList);
						},
						spliceList: function spliceList() {
							var _arguments = arguments;
							this.alterList(function spliceList(list) {
								return list.splice.apply(list, _toConsumableArray(_arguments));
							});
						},
						updatePosition: function updatePosition(oldIndex, newIndex) {
							this.alterList(function updatePosition(list) {
								return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
							});
						},
						getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref3) {
							var to = _ref3.to, related = _ref3.related;
							var component = this.getUnderlyingPotencialDraggableComponent(to);
							if (!component) return { component };
							var list = component.realList;
							var context = {
								list,
								component
							};
							if (to !== related && list) return _objectSpread2(_objectSpread2({}, component.getUnderlyingVm(related) || {}), context);
							return context;
						},
						getVmIndexFromDomIndex: function getVmIndexFromDomIndex(domIndex) {
							return this.componentStructure.getVmIndexFromDomIndex(domIndex, this.targetDomElement);
						},
						onDragStart: function onDragStart(evt) {
							this.context = this.getUnderlyingVm(evt.item);
							evt.item._underlying_vm_ = this.clone(this.context.element);
							draggingElement = evt.item;
						},
						onDragAdd: function onDragAdd(evt) {
							var element = evt.item._underlying_vm_;
							if (element === void 0) return;
							removeNode(evt.item);
							var newIndex = this.getVmIndexFromDomIndex(evt.newIndex);
							this.spliceList(newIndex, 0, element);
							var added = {
								element,
								newIndex
							};
							this.emitChanges({ added });
						},
						onDragRemove: function onDragRemove(evt) {
							insertNodeAt(this.$el, evt.item, evt.oldIndex);
							if (evt.pullMode === "clone") {
								removeNode(evt.clone);
								return;
							}
							var _this$context = this.context, oldIndex = _this$context.index, element = _this$context.element;
							this.spliceList(oldIndex, 1);
							var removed = {
								element,
								oldIndex
							};
							this.emitChanges({ removed });
						},
						onDragUpdate: function onDragUpdate(evt) {
							removeNode(evt.item);
							insertNodeAt(evt.from, evt.item, evt.oldIndex);
							var oldIndex = this.context.index;
							var newIndex = this.getVmIndexFromDomIndex(evt.newIndex);
							this.updatePosition(oldIndex, newIndex);
							var moved = {
								element: this.context.element,
								oldIndex,
								newIndex
							};
							this.emitChanges({ moved });
						},
						computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
							if (!relatedContext.element) return 0;
							var domChildren = _toConsumableArray(evt.to.children).filter(function(el) {
								return el.style["display"] !== "none";
							});
							var currentDomIndex = domChildren.indexOf(evt.related);
							var currentIndex = relatedContext.component.getVmIndexFromDomIndex(currentDomIndex);
							return domChildren.indexOf(draggingElement) !== -1 || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
						},
						onDragMove: function onDragMove(evt, originalEvent) {
							var move = this.move, realList = this.realList;
							if (!move || !realList) return true;
							var relatedContext = this.getRelatedContextFromMoveEvent(evt);
							var futureIndex = this.computeFutureIndex(relatedContext, evt);
							var draggedContext = _objectSpread2(_objectSpread2({}, this.context), {}, { futureIndex });
							return move(_objectSpread2(_objectSpread2({}, evt), {}, {
								relatedContext,
								draggedContext
							}), originalEvent);
						},
						onDragEnd: function onDragEnd() {
							draggingElement = null;
						}
					}
				});
			}),
			"fb6a": (function(module$133, exports$131, __webpack_require__) {
				"use strict";
				var $ = __webpack_require__("23e7");
				var isObject = __webpack_require__("861d");
				var isArray = __webpack_require__("e8b5");
				var toAbsoluteIndex = __webpack_require__("23cb");
				var toLength = __webpack_require__("50c4");
				var toIndexedObject = __webpack_require__("fc6a");
				var createProperty = __webpack_require__("8418");
				var wellKnownSymbol = __webpack_require__("b622");
				var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
				var arrayMethodUsesToLength = __webpack_require__("ae40");
				var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
				var USES_TO_LENGTH = arrayMethodUsesToLength("slice", {
					ACCESSORS: true,
					0: 0,
					1: 2
				});
				var SPECIES = wellKnownSymbol("species");
				var nativeSlice = [].slice;
				var max = Math.max;
				$({
					target: "Array",
					proto: true,
					forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
				}, { slice: function slice(start, end) {
					var O = toIndexedObject(this);
					var length = toLength(O.length);
					var k = toAbsoluteIndex(start, length);
					var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
					var Constructor, result, n;
					if (isArray(O)) {
						Constructor = O.constructor;
						if (typeof Constructor == "function" && (Constructor === Array || isArray(Constructor.prototype))) Constructor = void 0;
						else if (isObject(Constructor)) {
							Constructor = Constructor[SPECIES];
							if (Constructor === null) Constructor = void 0;
						}
						if (Constructor === Array || Constructor === void 0) return nativeSlice.call(O, k, fin);
					}
					result = new (Constructor === void 0 ? Array : Constructor)(max(fin - k, 0));
					for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
					result.length = n;
					return result;
				} });
			}),
			"fc6a": (function(module$134, exports$132, __webpack_require__) {
				var IndexedObject = __webpack_require__("44ad");
				var requireObjectCoercible = __webpack_require__("1d80");
				module$134.exports = function(it) {
					return IndexedObject(requireObjectCoercible(it));
				};
			}),
			"fdbc": (function(module$135, exports$133) {
				module$135.exports = {
					CSSRuleList: 0,
					CSSStyleDeclaration: 0,
					CSSValueList: 0,
					ClientRectList: 0,
					DOMRectList: 0,
					DOMStringList: 0,
					DOMTokenList: 1,
					DataTransferItemList: 0,
					FileList: 0,
					HTMLAllCollection: 0,
					HTMLCollection: 0,
					HTMLFormElement: 0,
					HTMLSelectElement: 0,
					MediaList: 0,
					MimeTypeArray: 0,
					NamedNodeMap: 0,
					NodeList: 1,
					PaintRequestList: 0,
					Plugin: 0,
					PluginArray: 0,
					SVGLengthList: 0,
					SVGNumberList: 0,
					SVGPathSegList: 0,
					SVGPointList: 0,
					SVGStringList: 0,
					SVGTransformList: 0,
					SourceBufferList: 0,
					StyleSheetList: 0,
					TextTrackCueList: 0,
					TextTrackList: 0,
					TouchList: 0
				};
			}),
			"fdbf": (function(module$136, exports$134, __webpack_require__) {
				module$136.exports = __webpack_require__("4930") && !Symbol.sham && typeof Symbol.iterator == "symbol";
			})
		})["default"];
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vueuse+components@13.0.0_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/@vueuse/components/index.mjs
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
var defaultWindow = isClient ? window : void 0;
function unrefElement(elRef) {
	var _a;
	const plain = toValue(elRef);
	return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
	const cleanups = [];
	const cleanup = () => {
		cleanups.forEach((fn) => fn());
		cleanups.length = 0;
	};
	const register = (el, event, listener, options) => {
		el.addEventListener(event, listener, options);
		return () => el.removeEventListener(event, listener, options);
	};
	const firstParamTargets = computed(() => {
		const test = toArray(toValue(args[0])).filter((e) => e != null);
		return test.every((e) => typeof e !== "string") ? test : void 0;
	});
	const stopWatch = watchImmediate(() => {
		var _a, _b;
		return [
			(_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
			toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
			toArray(unref(firstParamTargets.value ? args[2] : args[1])),
			toValue(firstParamTargets.value ? args[3] : args[2])
		];
	}, ([raw_targets, raw_events, raw_listeners, raw_options]) => {
		cleanup();
		if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length)) return;
		const optionsClone = isObject$1(raw_options) ? { ...raw_options } : raw_options;
		cleanups.push(...raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone)))));
	}, { flush: "post" });
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose(cleanup);
	return stop;
}
var _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
	const { window = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
	if (!window) return controls ? {
		stop: noop,
		cancel: noop,
		trigger: noop
	} : noop;
	if (isIOS && !_iOSWorkaround) {
		_iOSWorkaround = true;
		const listenerOptions = { passive: true };
		Array.from(window.document.body.children).forEach((el) => useEventListener(el, "click", noop, listenerOptions));
		useEventListener(window.document.documentElement, "click", noop, listenerOptions);
	}
	let shouldListen = true;
	const shouldIgnore = (event) => {
		return toValue(ignore).some((target2) => {
			if (typeof target2 === "string") return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
			else {
				const el = unrefElement(target2);
				return el && (event.target === el || event.composedPath().includes(el));
			}
		});
	};
	function hasMultipleRoots(target2) {
		const vm = toValue(target2);
		return vm && vm.$.subTree.shapeFlag === 16;
	}
	function checkMultipleRoots(target2, event) {
		const vm = toValue(target2);
		const children = vm.$.subTree && vm.$.subTree.children;
		if (children == null || !Array.isArray(children)) return false;
		return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
	}
	const listener = (event) => {
		const el = unrefElement(target);
		if (event.target == null) return;
		if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event)) return;
		if (!el || el === event.target || event.composedPath().includes(el)) return;
		if ("detail" in event && event.detail === 0) shouldListen = !shouldIgnore(event);
		if (!shouldListen) {
			shouldListen = true;
			return;
		}
		handler(event);
	};
	let isProcessingClick = false;
	const cleanup = [
		useEventListener(window, "click", (event) => {
			if (!isProcessingClick) {
				isProcessingClick = true;
				setTimeout(() => {
					isProcessingClick = false;
				}, 0);
				listener(event);
			}
		}, {
			passive: true,
			capture
		}),
		useEventListener(window, "pointerdown", (e) => {
			const el = unrefElement(target);
			shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
		}, { passive: true }),
		detectIframe && useEventListener(window, "blur", (event) => {
			setTimeout(() => {
				var _a;
				const el = unrefElement(target);
				if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement))) handler(event);
			}, 0);
		}, { passive: true })
	].filter(Boolean);
	const stop = () => cleanup.forEach((fn) => fn());
	if (controls) return {
		stop,
		cancel: () => {
			shouldListen = false;
		},
		trigger: (event) => {
			shouldListen = true;
			listener(event);
			shouldListen = false;
		}
	};
	return stop;
}
var vOnClickOutside = {
	mounted(el, binding) {
		const capture = !binding.modifiers.bubble;
		if (typeof binding.value === "function") el.__onClickOutside_stop = onClickOutside(el, binding.value, { capture });
		else {
			const [handler, options] = binding.value;
			el.__onClickOutside_stop = onClickOutside(el, handler, Object.assign({ capture }, options));
		}
	},
	unmounted(el) {
		el.__onClickOutside_stop();
	}
};
function resolveElement(el) {
	if (typeof Window !== "undefined" && el instanceof Window) return el.document.documentElement;
	if (typeof Document !== "undefined" && el instanceof Document) return el.documentElement;
	return el;
}
function checkOverflowScroll(ele) {
	const style = window.getComputedStyle(ele);
	if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
	else {
		const parent = ele.parentNode;
		if (!parent || parent.tagName === "BODY") return false;
		return checkOverflowScroll(parent);
	}
}
function preventDefault(rawEvent) {
	const e = rawEvent || window.event;
	const _target = e.target;
	if (checkOverflowScroll(_target)) return false;
	if (e.touches.length > 1) return true;
	if (e.preventDefault) e.preventDefault();
	return false;
}
var elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
	const isLocked = shallowRef(initialState);
	let stopTouchMoveListener = null;
	let initialOverflow = "";
	watch(toRef(element), (el) => {
		const target = resolveElement(toValue(el));
		if (target) {
			const ele = target;
			if (!elInitialOverflow.get(ele)) elInitialOverflow.set(ele, ele.style.overflow);
			if (ele.style.overflow !== "hidden") initialOverflow = ele.style.overflow;
			if (ele.style.overflow === "hidden") return isLocked.value = true;
			if (isLocked.value) return ele.style.overflow = "hidden";
		}
	}, { immediate: true });
	const lock = () => {
		const el = resolveElement(toValue(element));
		if (!el || isLocked.value) return;
		if (isIOS) stopTouchMoveListener = useEventListener(el, "touchmove", (e) => {
			preventDefault(e);
		}, { passive: false });
		el.style.overflow = "hidden";
		isLocked.value = true;
	};
	const unlock = () => {
		const el = resolveElement(toValue(element));
		if (!el || !isLocked.value) return;
		if (isIOS) stopTouchMoveListener?.();
		el.style.overflow = initialOverflow;
		elInitialOverflow.delete(el);
		isLocked.value = false;
	};
	tryOnScopeDispose(unlock);
	return computed({
		get() {
			return isLocked.value;
		},
		set(v) {
			if (v) lock();
			else unlock();
		}
	});
}
function onScrollLock() {
	let isMounted = false;
	const state = shallowRef(false);
	return (el, binding) => {
		state.value = binding.value;
		if (isMounted) return;
		isMounted = true;
		const isLocked = useScrollLock(el, binding.value);
		watch(state, (v) => isLocked.value = v);
	};
}
onScrollLock();
//#endregion
//#region src/renderer/src/components/EditableText.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_runtime_dom_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = ["placeholder", "disabled"];
//#endregion
//#region src/renderer/src/components/EditableText.vue
var EditableText_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "EditableText",
	props: /*@__PURE__*/ mergeModels({
		placeholder: { default: "请输入" },
		disabled: { type: Boolean },
		validate: {
			type: Function,
			default: () => true
		},
		update: {}
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const props = __props;
		const tempText = ref("");
		const enterIn = () => {
			tempText.value = modelValue.value;
		};
		const enterOut = () => {
			if (props.update) modelValue.value = props.update(modelValue.value);
			if (!props.validate(modelValue.value)) modelValue.value = tempText.value;
		};
		return (_ctx, _cache) => {
			return withDirectives((openBlock(), createElementBlock("input", {
				ref: "input",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				class: normalizeClass(["input", { disabled: props.disabled }]),
				placeholder: props.placeholder,
				onFocus: enterIn,
				disabled: props.disabled
			}, null, 42, _hoisted_1)), [[vModelText, modelValue.value], [unref(vOnClickOutside), enterOut]]);
		};
	}
}), [["__scopeId", "data-v-41d23928"]]);
//#endregion
export { Close_default as i, require_vuedraggable_umd as n, Move_default as r, EditableText_default as t };
