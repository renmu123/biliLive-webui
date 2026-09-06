function happensIn(e, dataSetPropName) {
  let { target } = e;
  while (target) {
    if (target.dataset) {
      if (target.dataset[dataSetPropName] !== void 0)
        return true;
    }
    target = target.parentElement;
  }
  return false;
}
function toArray(arg) {
  if (Array.isArray(arg))
    return arg;
  return [arg];
}
const TRAVERSE_COMMAND = {
  STOP: "STOP"
};
function traverseWithCb(treeNode, callback) {
  const command = callback(treeNode);
  if (treeNode.children !== void 0 && command !== TRAVERSE_COMMAND.STOP) {
    treeNode.children.forEach((childNode) => traverseWithCb(childNode, callback));
  }
}
function getNonLeafKeys(treeNodes, options = {}) {
  const { preserveGroup = false } = options;
  const keys = [];
  const cb = preserveGroup ? (node) => {
    if (!node.isLeaf) {
      keys.push(node.key);
      traverse(node.children);
    }
  } : (node) => {
    if (!node.isLeaf) {
      if (!node.isGroup)
        keys.push(node.key);
      traverse(node.children);
    }
  };
  function traverse(nodes) {
    nodes.forEach(cb);
  }
  traverse(treeNodes);
  return keys;
}
function isLeaf(rawNode, getChildren) {
  const { isLeaf: isLeaf2 } = rawNode;
  if (isLeaf2 !== void 0)
    return isLeaf2;
  else if (!getChildren(rawNode))
    return true;
  return false;
}
function defaultGetChildren(node) {
  return node.children;
}
function defaultGetKey(node) {
  return node.key;
}
function isIgnored() {
  return false;
}
function isShallowLoaded(rawNode, getChildren) {
  const { isLeaf: isLeaf2 } = rawNode;
  if (isLeaf2 === false && !Array.isArray(getChildren(rawNode)))
    return false;
  return true;
}
function isDisabled(rawNode) {
  return rawNode.disabled === true;
}
function isExpilicitlyNotLoaded(rawNode, getChildren) {
  return rawNode.isLeaf === false && !Array.isArray(getChildren(rawNode));
}
function unwrapCheckedKeys(result) {
  var _a;
  if (result === void 0 || result === null)
    return [];
  if (Array.isArray(result))
    return result;
  return (_a = result.checkedKeys) !== null && _a !== void 0 ? _a : [];
}
function unwrapIndeterminateKeys(result) {
  var _a;
  if (result === void 0 || result === null || Array.isArray(result)) {
    return [];
  }
  return (_a = result.indeterminateKeys) !== null && _a !== void 0 ? _a : [];
}
function merge(originalKeys, keysToAdd) {
  const set = new Set(originalKeys);
  keysToAdd.forEach((key) => {
    if (!set.has(key)) {
      set.add(key);
    }
  });
  return Array.from(set);
}
function minus(originalKeys, keysToRemove) {
  const set = new Set(originalKeys);
  keysToRemove.forEach((key) => {
    if (set.has(key)) {
      set.delete(key);
    }
  });
  return Array.from(set);
}
function isGroup(rawNode) {
  return (rawNode === null || rawNode === void 0 ? void 0 : rawNode.type) === "group";
}
function createIndexGetter(treeNodes) {
  const map = /* @__PURE__ */ new Map();
  treeNodes.forEach((treeNode, i) => {
    map.set(treeNode.key, i);
  });
  return (key) => {
    var _a;
    return (_a = map.get(key)) !== null && _a !== void 0 ? _a : null;
  };
}
class SubtreeNotLoadedError extends Error {
  constructor() {
    super();
    this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function getExtendedCheckedKeySetAfterCheck(checkKeys, currentCheckedKeys, treeMate, allowNotLoaded) {
  return getExtendedCheckedKeySet(currentCheckedKeys.concat(checkKeys), treeMate, allowNotLoaded, false);
}
function getAvailableAscendantNodeSet(uncheckedKeys, treeMate) {
  const visitedKeys = /* @__PURE__ */ new Set();
  uncheckedKeys.forEach((uncheckedKey) => {
    const uncheckedTreeNode = treeMate.treeNodeMap.get(uncheckedKey);
    if (uncheckedTreeNode !== void 0) {
      let nodeCursor = uncheckedTreeNode.parent;
      while (nodeCursor !== null) {
        if (nodeCursor.disabled)
          break;
        if (visitedKeys.has(nodeCursor.key))
          break;
        else {
          visitedKeys.add(nodeCursor.key);
        }
        nodeCursor = nodeCursor.parent;
      }
    }
  });
  return visitedKeys;
}
function getExtendedCheckedKeySetAfterUncheck(uncheckedKeys, currentCheckedKeys, treeMate, allowNotLoaded) {
  const extendedCheckedKeySet = getExtendedCheckedKeySet(currentCheckedKeys, treeMate, allowNotLoaded, false);
  const extendedKeySetToUncheck = getExtendedCheckedKeySet(uncheckedKeys, treeMate, allowNotLoaded, true);
  const ascendantKeySet = getAvailableAscendantNodeSet(uncheckedKeys, treeMate);
  const keysToRemove = [];
  extendedCheckedKeySet.forEach((key) => {
    if (extendedKeySetToUncheck.has(key) || ascendantKeySet.has(key)) {
      keysToRemove.push(key);
    }
  });
  keysToRemove.forEach((key) => extendedCheckedKeySet.delete(key));
  return extendedCheckedKeySet;
}
function getCheckedKeys(options, treeMate) {
  const { checkedKeys, keysToCheck, keysToUncheck, indeterminateKeys, cascade, leafOnly, checkStrategy, allowNotLoaded } = options;
  if (!cascade) {
    if (keysToCheck !== void 0) {
      return {
        checkedKeys: merge(checkedKeys, keysToCheck),
        indeterminateKeys: Array.from(indeterminateKeys)
      };
    } else if (keysToUncheck !== void 0) {
      return {
        checkedKeys: minus(checkedKeys, keysToUncheck),
        indeterminateKeys: Array.from(indeterminateKeys)
      };
    } else {
      return {
        checkedKeys: Array.from(checkedKeys),
        indeterminateKeys: Array.from(indeterminateKeys)
      };
    }
  }
  const { levelTreeNodeMap } = treeMate;
  let extendedCheckedKeySet;
  if (keysToUncheck !== void 0) {
    extendedCheckedKeySet = getExtendedCheckedKeySetAfterUncheck(keysToUncheck, checkedKeys, treeMate, allowNotLoaded);
  } else if (keysToCheck !== void 0) {
    extendedCheckedKeySet = getExtendedCheckedKeySetAfterCheck(keysToCheck, checkedKeys, treeMate, allowNotLoaded);
  } else {
    extendedCheckedKeySet = getExtendedCheckedKeySet(checkedKeys, treeMate, allowNotLoaded, false);
  }
  const checkStrategyIsParent = checkStrategy === "parent";
  const checkStrategyIsChild = checkStrategy === "child" || leafOnly;
  const syntheticCheckedKeySet = extendedCheckedKeySet;
  const syntheticIndeterminateKeySet = /* @__PURE__ */ new Set();
  const maxLevel = Math.max.apply(null, Array.from(levelTreeNodeMap.keys()));
  for (let level = maxLevel; level >= 0; level -= 1) {
    const levelIsZero = level === 0;
    const levelTreeNodes = levelTreeNodeMap.get(level);
    for (const levelTreeNode of levelTreeNodes) {
      if (levelTreeNode.isLeaf)
        continue;
      const { key: levelTreeNodeKey, shallowLoaded } = levelTreeNode;
      if (checkStrategyIsChild && shallowLoaded) {
        levelTreeNode.children.forEach((v) => {
          if (!v.disabled && !v.isLeaf && v.shallowLoaded && syntheticCheckedKeySet.has(v.key)) {
            syntheticCheckedKeySet.delete(v.key);
          }
        });
      }
      if (levelTreeNode.disabled || !shallowLoaded) {
        continue;
      }
      let fullyChecked = true;
      let partialChecked = false;
      let allDisabled = true;
      for (const childNode of levelTreeNode.children) {
        const childKey = childNode.key;
        if (childNode.disabled)
          continue;
        if (allDisabled)
          allDisabled = false;
        if (syntheticCheckedKeySet.has(childKey)) {
          partialChecked = true;
        } else if (syntheticIndeterminateKeySet.has(childKey)) {
          partialChecked = true;
          fullyChecked = false;
          break;
        } else {
          fullyChecked = false;
          if (partialChecked) {
            break;
          }
        }
      }
      if (fullyChecked && !allDisabled) {
        if (checkStrategyIsParent) {
          levelTreeNode.children.forEach((v) => {
            if (!v.disabled && syntheticCheckedKeySet.has(v.key)) {
              syntheticCheckedKeySet.delete(v.key);
            }
          });
        }
        syntheticCheckedKeySet.add(levelTreeNodeKey);
      } else if (partialChecked) {
        syntheticIndeterminateKeySet.add(levelTreeNodeKey);
      }
      if (levelIsZero && checkStrategyIsChild && syntheticCheckedKeySet.has(levelTreeNodeKey)) {
        syntheticCheckedKeySet.delete(levelTreeNodeKey);
      }
    }
  }
  return {
    checkedKeys: Array.from(syntheticCheckedKeySet),
    indeterminateKeys: Array.from(syntheticIndeterminateKeySet)
  };
}
function getExtendedCheckedKeySet(checkedKeys, treeMate, allowNotLoaded, isUnchecking) {
  const { treeNodeMap, getChildren } = treeMate;
  const visitedKeySet = /* @__PURE__ */ new Set();
  const extendedKeySet = new Set(checkedKeys);
  checkedKeys.forEach((checkedKey) => {
    const checkedTreeNode = treeNodeMap.get(checkedKey);
    if (checkedTreeNode !== void 0) {
      traverseWithCb(checkedTreeNode, (treeNode) => {
        if (treeNode.disabled) {
          return TRAVERSE_COMMAND.STOP;
        }
        const { key } = treeNode;
        if (visitedKeySet.has(key))
          return;
        visitedKeySet.add(key);
        extendedKeySet.add(key);
        if (isExpilicitlyNotLoaded(treeNode.rawNode, getChildren)) {
          if (isUnchecking) {
            return TRAVERSE_COMMAND.STOP;
          } else if (!allowNotLoaded) {
            throw new SubtreeNotLoadedError();
          }
        }
      });
    }
  });
  return extendedKeySet;
}
function getPath(key, { includeGroup = false, includeSelf = true }, treeMate) {
  var _a;
  const treeNodeMap = treeMate.treeNodeMap;
  let treeNode = key === null || key === void 0 ? null : (_a = treeNodeMap.get(key)) !== null && _a !== void 0 ? _a : null;
  const mergedPath = {
    keyPath: [],
    treeNodePath: [],
    treeNode
  };
  if (treeNode === null || treeNode === void 0 ? void 0 : treeNode.ignored) {
    mergedPath.treeNode = null;
    return mergedPath;
  }
  while (treeNode) {
    if (!treeNode.ignored && (includeGroup || !treeNode.isGroup)) {
      mergedPath.treeNodePath.push(treeNode);
    }
    treeNode = treeNode.parent;
  }
  mergedPath.treeNodePath.reverse();
  if (!includeSelf)
    mergedPath.treeNodePath.pop();
  mergedPath.keyPath = mergedPath.treeNodePath.map((treeNode2) => treeNode2.key);
  return mergedPath;
}
function getFirstAvailableNode(nodes) {
  if (nodes.length === 0)
    return null;
  const node = nodes[0];
  if (node.isGroup || node.ignored || node.disabled) {
    return node.getNext();
  }
  return node;
}
function rawGetNext(node, loop) {
  const sibs = node.siblings;
  const l = sibs.length;
  const { index } = node;
  if (loop) {
    return sibs[(index + 1) % l];
  } else {
    if (index === sibs.length - 1)
      return null;
    return sibs[index + 1];
  }
}
function move(fromNode, dir, { loop = false, includeDisabled = false } = {}) {
  const iterate = dir === "prev" ? rawGetPrev : rawGetNext;
  const getChildOptions = {
    reverse: dir === "prev"
  };
  let meet = false;
  let endNode = null;
  function traverse(node) {
    if (node === null)
      return;
    if (node === fromNode) {
      if (!meet) {
        meet = true;
      } else if (!fromNode.disabled && !fromNode.isGroup) {
        endNode = fromNode;
        return;
      }
    } else {
      if ((!node.disabled || includeDisabled) && !node.ignored && !node.isGroup) {
        endNode = node;
        return;
      }
    }
    if (node.isGroup) {
      const child = getChild(node, getChildOptions);
      if (child !== null) {
        endNode = child;
      } else {
        traverse(iterate(node, loop));
      }
    } else {
      const nextNode = iterate(node, false);
      if (nextNode !== null) {
        traverse(nextNode);
      } else {
        const parent = rawGetParent(node);
        if (parent === null || parent === void 0 ? void 0 : parent.isGroup) {
          traverse(iterate(parent, loop));
        } else if (loop) {
          traverse(iterate(node, true));
        }
      }
    }
  }
  traverse(fromNode);
  return endNode;
}
function rawGetPrev(node, loop) {
  const sibs = node.siblings;
  const l = sibs.length;
  const { index } = node;
  if (loop) {
    return sibs[(index - 1 + l) % l];
  } else {
    if (index === 0)
      return null;
    return sibs[index - 1];
  }
}
function rawGetParent(node) {
  return node.parent;
}
function getChild(node, options = {}) {
  const { reverse = false } = options;
  const { children } = node;
  if (children) {
    const { length } = children;
    const start = reverse ? length - 1 : 0;
    const end = reverse ? -1 : length;
    const delta = reverse ? -1 : 1;
    for (let i = start; i !== end; i += delta) {
      const child = children[i];
      if (!child.disabled && !child.ignored) {
        if (child.isGroup) {
          const childInGroup = getChild(child, options);
          if (childInGroup !== null)
            return childInGroup;
        } else {
          return child;
        }
      }
    }
  }
  return null;
}
const moveMethods = {
  getChild() {
    if (this.ignored)
      return null;
    return getChild(this);
  },
  getParent() {
    const { parent } = this;
    if (parent === null || parent === void 0 ? void 0 : parent.isGroup) {
      return parent.getParent();
    }
    return parent;
  },
  getNext(options = {}) {
    return move(this, "next", options);
  },
  getPrev(options = {}) {
    return move(this, "prev", options);
  }
};
function flatten(treeNodes, expandedKeys) {
  const expandedKeySet = expandedKeys ? new Set(expandedKeys) : void 0;
  const flattenedNodes = [];
  function traverse(treeNodes2) {
    treeNodes2.forEach((treeNode) => {
      flattenedNodes.push(treeNode);
      if (treeNode.isLeaf || !treeNode.children || treeNode.ignored)
        return;
      if (treeNode.isGroup) {
        traverse(treeNode.children);
      } else if (
        // normal non-leaf node
        expandedKeySet === void 0 || expandedKeySet.has(treeNode.key)
      ) {
        traverse(treeNode.children);
      }
    });
  }
  traverse(treeNodes);
  return flattenedNodes;
}
function contains(parent, child) {
  const parentKey = parent.key;
  while (child) {
    if (child.key === parentKey)
      return true;
    child = child.parent;
  }
  return false;
}
function createTreeNodes(rawNodes, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren, parent = null, level = 0) {
  const treeNodes = [];
  rawNodes.forEach((rawNode, index) => {
    var _a;
    const treeNode = Object.create(nodeProto);
    treeNode.rawNode = rawNode;
    treeNode.siblings = treeNodes;
    treeNode.level = level;
    treeNode.index = index;
    treeNode.isFirstChild = index === 0;
    treeNode.isLastChild = index + 1 === rawNodes.length;
    treeNode.parent = parent;
    if (!treeNode.ignored) {
      const rawChildren = getChildren(rawNode);
      if (Array.isArray(rawChildren)) {
        treeNode.children = createTreeNodes(rawChildren, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren, treeNode, level + 1);
      }
    }
    treeNodes.push(treeNode);
    treeNodeMap.set(treeNode.key, treeNode);
    if (!levelTreeNodeMap.has(level))
      levelTreeNodeMap.set(level, []);
    (_a = levelTreeNodeMap.get(level)) === null || _a === void 0 ? void 0 : _a.push(treeNode);
  });
  return treeNodes;
}
function createTreeMate(rawNodes, options = {}) {
  var _a;
  const treeNodeMap = /* @__PURE__ */ new Map();
  const levelTreeNodeMap = /* @__PURE__ */ new Map();
  const { getDisabled = isDisabled, getIgnored = isIgnored, getIsGroup = isGroup, getKey = defaultGetKey } = options;
  const _getChildren = (_a = options.getChildren) !== null && _a !== void 0 ? _a : defaultGetChildren;
  const getChildren = options.ignoreEmptyChildren ? (node) => {
    const children = _getChildren(node);
    if (Array.isArray(children)) {
      if (!children.length)
        return null;
      return children;
    }
    return children;
  } : _getChildren;
  const nodeProto = Object.assign({
    get key() {
      return getKey(this.rawNode);
    },
    get disabled() {
      return getDisabled(this.rawNode);
    },
    get isGroup() {
      return getIsGroup(this.rawNode);
    },
    get isLeaf() {
      return isLeaf(this.rawNode, getChildren);
    },
    get shallowLoaded() {
      return isShallowLoaded(this.rawNode, getChildren);
    },
    get ignored() {
      return getIgnored(this.rawNode);
    },
    contains(node) {
      return contains(this, node);
    }
  }, moveMethods);
  const treeNodes = createTreeNodes(rawNodes, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren);
  function getNode(key) {
    if (key === null || key === void 0)
      return null;
    const tmNode = treeNodeMap.get(key);
    if (tmNode && !tmNode.isGroup && !tmNode.ignored) {
      return tmNode;
    }
    return null;
  }
  function _getNode(key) {
    if (key === null || key === void 0)
      return null;
    const tmNode = treeNodeMap.get(key);
    if (tmNode && !tmNode.ignored) {
      return tmNode;
    }
    return null;
  }
  function getPrev(key, options2) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getPrev(options2);
  }
  function getNext(key, options2) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getNext(options2);
  }
  function getParent(key) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getParent();
  }
  function getChild2(key) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getChild();
  }
  const treemate = {
    treeNodes,
    treeNodeMap,
    levelTreeNodeMap,
    maxLevel: Math.max(...levelTreeNodeMap.keys()),
    getChildren,
    getFlattenedNodes(expandedKeys) {
      return flatten(treeNodes, expandedKeys);
    },
    getNode,
    getPrev,
    getNext,
    getParent,
    getChild: getChild2,
    getFirstAvailableNode() {
      return getFirstAvailableNode(treeNodes);
    },
    getPath(key, options2 = {}) {
      return getPath(key, options2, treemate);
    },
    getCheckedKeys(checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    check(keysToCheck, checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        keysToCheck: keysToCheck === void 0 || keysToCheck === null ? [] : toArray(keysToCheck),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    uncheck(keysToUncheck, checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        keysToUncheck: keysToUncheck === null || keysToUncheck === void 0 ? [] : toArray(keysToUncheck),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    getNonLeafKeys(options2 = {}) {
      return getNonLeafKeys(treeNodes, options2);
    }
  };
  return treemate;
}
export {
  SubtreeNotLoadedError as S,
  createIndexGetter as a,
  createTreeMate as c,
  happensIn as h
};
