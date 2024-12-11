import { d as defineComponent, v as h, z as cB, dt as fadeInTransition, dr as useStyle, G as toRef, r as ref, c9 as onBeforeUnmount, X as Transition, N as createInjectionKey, m as inject, p as computed, a9 as useMemo, a4 as NBaseLoading, W as NBaseIcon, S as Scrollbar, a$ as depx, Y as withDirectives, Z as clickoutside, b7 as resolveSlot, aZ as resolveWrappedSlot, x as c, O as fadeInScaleUpTransition, C as cE, A as cM, D as useConfig, H as useTheme, Q as useFormItem, c0 as isReactive, F as watch, U as provide, V as isMounted, J as useThemeClass, du as cascaderLight, T as nextTick, a1 as getPreciseEventTarget, a0 as markEventEffectPerformed, dv as changeColor, $ as call } from "./index-NC0giMhn.js";
import { d as FinishedIcon, h as happensIn, b as VVirtualList, u as useOnResize, F as FocusDetector, e as NEmpty, N as NInternalSelectMenu, c as createTreeMate, a as createTmOptions, f as NInternalSelection, S as SubtreeNotLoadedError } from "./utils-C7pbjsii.js";
import { e as __unplugin_components_1, u as useAdjustedTo, B as Binder, V as VTarget, a as VFollower } from "./index-DAcKDtwE.js";
import { u as useLocale } from "./Suffix-7DVZuGw_.js";
import { a as useMergedState } from "./use-notification-zXzPItCr.js";
const ChevronRightIcon = defineComponent({
  name: "ChevronRight",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
      fill: "currentColor"
    }));
  }
});
const style$1 = cB("base-menu-mask", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 padding: 14px;
 overflow: hidden;
`, [fadeInTransition()]);
const NBaseMenuMask = defineComponent({
  name: "BaseMenuMask",
  props: {
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup(props) {
    useStyle("-base-menu-mask", style$1, toRef(props, "clsPrefix"));
    const messageRef = ref(null);
    let timerId = null;
    const uncontrolledShowRef = ref(false);
    onBeforeUnmount(() => {
      if (timerId !== null) {
        window.clearTimeout(timerId);
      }
    });
    const exposedRef = {
      showOnce(message, duration = 1500) {
        if (timerId) window.clearTimeout(timerId);
        uncontrolledShowRef.value = true;
        messageRef.value = message;
        timerId = window.setTimeout(() => {
          uncontrolledShowRef.value = false;
          messageRef.value = null;
        }, duration);
      }
    };
    return Object.assign({
      message: messageRef,
      show: uncontrolledShowRef
    }, exposedRef);
  },
  render() {
    return h(Transition, {
      name: "fade-in-transition"
    }, {
      default: () => this.show ? h("div", {
        class: `${this.clsPrefix}-base-menu-mask`
      }, this.message) : null
    });
  }
});
function getRawNodePath(tmNodes) {
  if (!tmNodes) return null;
  return tmNodes.map((tmNode) => tmNode.rawNode);
}
function createSelectOptions(tmNodes, checkStrategyIsChild, labelField, separator) {
  const selectOptions = [];
  const path = [];
  function traverse(_tmNodes) {
    for (const tmNode of _tmNodes) {
      if (tmNode.disabled) continue;
      const {
        rawNode
      } = tmNode;
      path.push(rawNode);
      if (tmNode.isLeaf || !checkStrategyIsChild) {
        selectOptions.push({
          label: getPathLabel(tmNode, separator, labelField),
          value: tmNode.key,
          rawNode: tmNode.rawNode,
          path: Array.from(path)
        });
      }
      if (!tmNode.isLeaf && tmNode.children) {
        traverse(tmNode.children);
      }
      path.pop();
    }
  }
  traverse(tmNodes);
  return selectOptions;
}
function getPathLabel(node, separator, labelField) {
  const path = [];
  while (node) {
    path.push(node.rawNode[labelField]);
    node = node.parent;
  }
  return path.reverse().join(separator);
}
const cascaderInjectionKey = createInjectionKey("n-cascader");
const NCascaderOption = defineComponent({
  name: "NCascaderOption",
  props: {
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {
      expandTriggerRef,
      remoteRef,
      multipleRef,
      mergedValueRef,
      checkedKeysRef,
      indeterminateKeysRef,
      hoverKeyPathRef,
      keyboardKeyRef,
      loadingKeySetRef,
      cascadeRef,
      mergedCheckStrategyRef,
      onLoadRef,
      mergedClsPrefixRef,
      mergedThemeRef,
      labelFieldRef,
      showCheckboxRef,
      renderPrefixRef,
      renderSuffixRef,
      updateHoverKey,
      updateKeyboardKey,
      addLoadingKey,
      deleteLoadingKey,
      closeMenu,
      doCheck,
      doUncheck,
      renderLabelRef
    } = inject(cascaderInjectionKey);
    const valueRef = computed(() => props.tmNode.key);
    const useHoverTriggerRef = computed(() => {
      const {
        value: expandTrigger
      } = expandTriggerRef;
      const {
        value: remote
      } = remoteRef;
      return !remote && expandTrigger === "hover";
    });
    const mergedHandleMouseEnterRef = computed(() => {
      if (useHoverTriggerRef.value) {
        return handleMouseEnter;
      }
      return void 0;
    });
    const mergedHandleMouseMoveRef = computed(() => {
      if (useHoverTriggerRef.value) {
        return handleMouseMove;
      }
      return void 0;
    });
    const checkedRef = useMemo(() => {
      const {
        value: multiple
      } = multipleRef;
      if (!multiple) return mergedValueRef.value === valueRef.value;
      return checkedKeysRef.value.includes(valueRef.value);
    });
    const indeterminateRef = useMemo(() => {
      if (!multipleRef.value) return false;
      return indeterminateKeysRef.value.includes(valueRef.value);
    });
    const hoverPendingRef = useMemo(() => {
      return hoverKeyPathRef.value.includes(valueRef.value);
    });
    const keyboardPendingRef = useMemo(() => {
      const {
        value: keyboardKey
      } = keyboardKeyRef;
      if (keyboardKey === null) return false;
      return keyboardKey === valueRef.value;
    });
    const isLoadingRef = useMemo(() => {
      if (remoteRef.value) {
        return loadingKeySetRef.value.has(valueRef.value);
      }
      return false;
    });
    const isLeafRef = computed(() => props.tmNode.isLeaf);
    const disabledRef = computed(() => props.tmNode.disabled);
    const labelRef = computed(() => props.tmNode.rawNode[labelFieldRef.value]);
    const isShallowLoadedRef = computed(() => {
      return props.tmNode.shallowLoaded;
    });
    function handleClick(e) {
      if (disabledRef.value) return;
      const {
        value: remote
      } = remoteRef;
      const {
        value: loadingKeySet
      } = loadingKeySetRef;
      const {
        value: onLoad
      } = onLoadRef;
      const {
        value
      } = valueRef;
      const {
        value: isLeaf
      } = isLeafRef;
      const {
        value: isShallowLoaded
      } = isShallowLoadedRef;
      if (!happensIn(e, "checkbox")) {
        if (remote && !isShallowLoaded && !loadingKeySet.has(value) && onLoad) {
          addLoadingKey(value);
          onLoad(props.tmNode.rawNode).then(() => {
            deleteLoadingKey(value);
          }).catch(() => {
            deleteLoadingKey(value);
          });
        }
        updateHoverKey(value);
        updateKeyboardKey(value);
      }
      if (isLeaf) {
        toggleCheckbox();
      }
    }
    function handleMouseEnter() {
      if (!useHoverTriggerRef.value || disabledRef.value) return;
      const {
        value
      } = valueRef;
      updateHoverKey(value);
      updateKeyboardKey(value);
    }
    function handleMouseMove() {
      if (!useHoverTriggerRef.value) return;
      handleMouseEnter();
    }
    function handleCheckboxUpdateValue() {
      const {
        value: isLeaf
      } = isLeafRef;
      if (!isLeaf) toggleCheckbox();
    }
    function toggleCheckbox() {
      const {
        value: multiple
      } = multipleRef;
      const {
        value
      } = valueRef;
      if (multiple) {
        if (indeterminateRef.value || checkedRef.value) {
          doUncheck(value);
        } else {
          doCheck(value);
        }
      } else {
        doCheck(value);
        closeMenu(true);
      }
    }
    return {
      checkStrategy: mergedCheckStrategyRef,
      multiple: multipleRef,
      cascade: cascadeRef,
      checked: checkedRef,
      indeterminate: indeterminateRef,
      hoverPending: hoverPendingRef,
      keyboardPending: keyboardPendingRef,
      isLoading: isLoadingRef,
      showCheckbox: showCheckboxRef,
      isLeaf: isLeafRef,
      disabled: disabledRef,
      label: labelRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: mergedThemeRef,
      handleClick,
      handleCheckboxUpdateValue,
      mergedHandleMouseEnter: mergedHandleMouseEnterRef,
      mergedHandleMouseMove: mergedHandleMouseMoveRef,
      renderLabel: renderLabelRef,
      renderPrefix: renderPrefixRef,
      renderSuffix: renderSuffixRef
    };
  },
  render() {
    const {
      mergedClsPrefix,
      showCheckbox,
      renderLabel,
      renderPrefix,
      renderSuffix
    } = this;
    let prefixNode = null;
    if (showCheckbox || renderPrefix) {
      const originalNode = this.showCheckbox ? h(__unplugin_components_1, {
        focusable: false,
        "data-checkbox": true,
        disabled: this.disabled,
        checked: this.checked,
        indeterminate: this.indeterminate,
        theme: this.mergedTheme.peers.Checkbox,
        themeOverrides: this.mergedTheme.peerOverrides.Checkbox,
        onUpdateChecked: this.handleCheckboxUpdateValue
      }) : null;
      prefixNode = h("div", {
        class: `${mergedClsPrefix}-cascader-option__prefix`
      }, renderPrefix ? renderPrefix({
        option: this.tmNode.rawNode,
        checked: this.checked,
        node: originalNode
      }) : originalNode);
    }
    let suffixNode = null;
    const originalSuffixChild = h("div", {
      class: `${mergedClsPrefix}-cascader-option-icon-placeholder`
    }, !this.isLeaf ? h(NBaseLoading, {
      clsPrefix: mergedClsPrefix,
      scale: 0.85,
      strokeWidth: 24,
      show: this.isLoading,
      class: `${mergedClsPrefix}-cascader-option-icon`
    }, {
      default: () => h(NBaseIcon, {
        clsPrefix: mergedClsPrefix,
        key: "arrow",
        class: `${mergedClsPrefix}-cascader-option-icon ${mergedClsPrefix}-cascader-option-icon--arrow`
      }, {
        default: () => h(ChevronRightIcon, null)
      })
    }) : this.checkStrategy === "child" && !(this.multiple && this.cascade) ? h(Transition, {
      name: "fade-in-scale-up-transition"
    }, {
      default: () => this.checked ? h(NBaseIcon, {
        clsPrefix: mergedClsPrefix,
        class: `${mergedClsPrefix}-cascader-option-icon ${mergedClsPrefix}-cascader-option-icon--checkmark`
      }, {
        default: () => h(FinishedIcon, null)
      }) : null
    }) : null);
    suffixNode = h("div", {
      class: `${mergedClsPrefix}-cascader-option__suffix`
    }, renderSuffix ? renderSuffix({
      option: this.tmNode.rawNode,
      checked: this.checked,
      node: originalSuffixChild
    }) : originalSuffixChild);
    return h("div", {
      class: [`${mergedClsPrefix}-cascader-option`, this.keyboardPending || this.hoverPending && `${mergedClsPrefix}-cascader-option--pending`, this.disabled && `${mergedClsPrefix}-cascader-option--disabled`, this.showCheckbox && `${mergedClsPrefix}-cascader-option--show-prefix`],
      onMouseenter: this.mergedHandleMouseEnter,
      onMousemove: this.mergedHandleMouseMove,
      onClick: this.handleClick
    }, prefixNode, h("span", {
      class: `${mergedClsPrefix}-cascader-option__label`
    }, renderLabel ? renderLabel(this.tmNode.rawNode, this.checked) : this.label), suffixNode);
  }
});
const NCascaderSubmenu = defineComponent({
  name: "CascaderSubmenu",
  props: {
    depth: {
      type: Number,
      required: true
    },
    tmNodes: {
      type: Array,
      required: true
    }
  },
  setup() {
    const {
      virtualScrollRef,
      mergedClsPrefixRef,
      mergedThemeRef,
      optionHeightRef
    } = inject(cascaderInjectionKey);
    const scrollbarInstRef = ref(null);
    const vlInstRef = ref(null);
    const inst = {
      scroll(index, elSize) {
        var _a, _b;
        if (virtualScrollRef.value) {
          (_a = vlInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo({
            index
          });
        } else {
          (_b = scrollbarInstRef.value) === null || _b === void 0 ? void 0 : _b.scrollTo({
            index,
            elSize
          });
        }
      }
    };
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: mergedThemeRef,
      scrollbarInstRef,
      vlInstRef,
      virtualScroll: virtualScrollRef,
      itemSize: computed(() => depx(optionHeightRef.value)),
      handleVlScroll: () => {
        var _a;
        (_a = scrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.sync();
      },
      getVlContainer: () => {
        var _a;
        return (_a = vlInstRef.value) === null || _a === void 0 ? void 0 : _a.listElRef;
      },
      getVlContent: () => {
        var _a;
        return (_a = vlInstRef.value) === null || _a === void 0 ? void 0 : _a.itemsElRef;
      }
    }, inst);
  },
  render() {
    const {
      mergedClsPrefix,
      mergedTheme,
      virtualScroll
    } = this;
    return h("div", {
      class: [virtualScroll && `${mergedClsPrefix}-cascader-submenu--virtual`, `${mergedClsPrefix}-cascader-submenu`]
    }, h(Scrollbar, {
      ref: "scrollbarInstRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      container: virtualScroll ? this.getVlContainer : void 0,
      content: virtualScroll ? this.getVlContent : void 0
    }, {
      default: () => virtualScroll ? h(VVirtualList, {
        items: this.tmNodes,
        itemSize: this.itemSize,
        onScroll: this.handleVlScroll,
        showScrollbar: false,
        ref: "vlInstRef"
      }, {
        default: ({
          item: tmNode
        }) => h(NCascaderOption, {
          key: tmNode.key,
          tmNode
        })
      }) : this.tmNodes.map((tmNode) => h(NCascaderOption, {
        key: tmNode.key,
        tmNode
      }))
    }));
  }
});
const CascaderMenu = defineComponent({
  name: "NCascaderMenu",
  props: {
    value: [String, Number, Array],
    placement: {
      type: String,
      default: "bottom-start"
    },
    show: Boolean,
    menuModel: {
      type: Array,
      required: true
    },
    loading: Boolean,
    onFocus: {
      type: Function,
      required: true
    },
    onBlur: {
      type: Function,
      required: true
    },
    onKeydown: {
      type: Function,
      required: true
    },
    onMousedown: {
      type: Function,
      required: true
    },
    onTabout: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const {
      localeRef,
      isMountedRef,
      mergedClsPrefixRef,
      syncCascaderMenuPosition,
      handleCascaderMenuClickOutside,
      mergedThemeRef,
      getColumnStyleRef
    } = inject(cascaderInjectionKey);
    const submenuInstRefs = [];
    const maskInstRef = ref(null);
    const selfElRef = ref(null);
    function handleResize() {
      syncCascaderMenuPosition();
    }
    useOnResize(selfElRef, handleResize);
    function showErrorMessage(label) {
      var _a;
      const {
        value: {
          loadingRequiredMessage
        }
      } = localeRef;
      (_a = maskInstRef.value) === null || _a === void 0 ? void 0 : _a.showOnce(loadingRequiredMessage(label));
    }
    function handleClickOutside(e) {
      handleCascaderMenuClickOutside(e);
    }
    function handleFocusin(e) {
      const {
        value: selfEl
      } = selfElRef;
      if (!selfEl) return;
      if (!selfEl.contains(e.relatedTarget)) {
        props.onFocus(e);
      }
    }
    function handleFocusout(e) {
      const {
        value: selfEl
      } = selfElRef;
      if (!selfEl) return;
      if (!selfEl.contains(e.relatedTarget)) {
        props.onBlur(e);
      }
    }
    const exposedRef = {
      scroll(depth, index, elSize) {
        const submenuInst = submenuInstRefs[depth];
        if (submenuInst) {
          submenuInst.scroll(index, elSize);
        }
      },
      showErrorMessage
    };
    return Object.assign({
      isMounted: isMountedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      selfElRef,
      submenuInstRefs,
      maskInstRef,
      mergedTheme: mergedThemeRef,
      getColumnStyle: getColumnStyleRef,
      handleFocusin,
      handleFocusout,
      handleClickOutside
    }, exposedRef);
  },
  render() {
    const {
      submenuInstRefs,
      mergedClsPrefix,
      mergedTheme
    } = this;
    return h(Transition, {
      name: "fade-in-scale-up-transition",
      appear: this.isMounted
    }, {
      default: () => {
        if (!this.show) return null;
        return withDirectives(h("div", {
          tabindex: "0",
          ref: "selfElRef",
          class: `${mergedClsPrefix}-cascader-menu`,
          onMousedown: this.onMousedown,
          onFocusin: this.handleFocusin,
          onFocusout: this.handleFocusout,
          onKeydown: this.onKeydown
        }, this.menuModel[0].length ? h("div", {
          class: `${mergedClsPrefix}-cascader-submenu-wrapper`
        }, this.menuModel.map((submenuOptions, index) => {
          var _a;
          return h(NCascaderSubmenu, {
            style: (_a = this.getColumnStyle) === null || _a === void 0 ? void 0 : _a.call(this, {
              level: index
            }),
            ref: (instance) => {
              if (instance) {
                submenuInstRefs[index] = instance;
              }
            },
            key: index,
            tmNodes: submenuOptions,
            depth: index + 1
          });
        }), h(NBaseMenuMask, {
          clsPrefix: mergedClsPrefix,
          ref: "maskInstRef"
        })) : h("div", {
          class: `${mergedClsPrefix}-cascader-menu__empty`
        }, resolveSlot(this.$slots.empty, () => [h(NEmpty, {
          theme: mergedTheme.peers.Empty,
          themeOverrides: mergedTheme.peerOverrides.Empty
        })])), resolveWrappedSlot(this.$slots.action, (children) => children && h("div", {
          class: `${mergedClsPrefix}-cascader-menu-action`,
          "data-action": true
        }, children)), h(FocusDetector, {
          onFocus: this.onTabout
        })), [[clickoutside, this.handleClickOutside, void 0, {
          capture: true
        }]]);
      }
    });
  }
});
const CascaderSelectMenu = defineComponent({
  name: "NCascaderSelectMenu",
  props: {
    value: {
      type: [String, Number, Array],
      default: null
    },
    show: Boolean,
    pattern: {
      type: String,
      default: ""
    },
    multiple: Boolean,
    tmNodes: {
      type: Array,
      default: () => []
    },
    filter: Function,
    labelField: {
      type: String,
      required: true
    },
    separator: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const {
      isMountedRef,
      mergedValueRef,
      mergedClsPrefixRef,
      mergedThemeRef,
      mergedCheckStrategyRef,
      slots: cascaderSlots,
      syncSelectMenuPosition,
      closeMenu,
      handleSelectMenuClickOutside,
      doUncheck: cascaderDoUncheck,
      doCheck: cascaderDoCheck,
      clearPattern
    } = inject(cascaderInjectionKey);
    const menuInstRef = ref(null);
    const selectOptionsRef = computed(() => {
      return createSelectOptions(props.tmNodes, mergedCheckStrategyRef.value === "child", props.labelField, props.separator);
    });
    const mergedFilterRef = computed(() => {
      const {
        filter
      } = props;
      if (filter) return filter;
      const {
        labelField
      } = props;
      return (pattern, _, path) => path.some((option) => option[labelField] && ~option[labelField].indexOf(pattern));
    });
    const filteredSelectOptionsRef = computed(() => {
      const {
        pattern
      } = props;
      const {
        value: mergedFilter
      } = mergedFilterRef;
      return (pattern ? selectOptionsRef.value.filter((option) => {
        return mergedFilter(pattern, option.rawNode, option.path);
      }) : selectOptionsRef.value).map((option) => ({
        value: option.value,
        label: option.label
      }));
    });
    const selectTreeMateRef = computed(() => {
      return createTreeMate(filteredSelectOptionsRef.value, createTmOptions("value", "children"));
    });
    function handleResize() {
      syncSelectMenuPosition();
    }
    function handleToggle(tmNode) {
      doCheck(tmNode);
    }
    function doCheck(tmNode) {
      if (props.multiple) {
        const {
          value: mergedValue
        } = mergedValueRef;
        if (Array.isArray(mergedValue)) {
          if (!mergedValue.includes(tmNode.key)) {
            cascaderDoCheck(tmNode.key);
          } else {
            cascaderDoUncheck(tmNode.key);
          }
        } else if (mergedValue === null) {
          cascaderDoCheck(tmNode.key);
        }
        clearPattern();
      } else {
        cascaderDoCheck(tmNode.key);
        closeMenu(true);
      }
    }
    function prev() {
      var _a;
      (_a = menuInstRef.value) === null || _a === void 0 ? void 0 : _a.prev();
    }
    function next() {
      var _a;
      (_a = menuInstRef.value) === null || _a === void 0 ? void 0 : _a.next();
    }
    function enter() {
      var _a;
      if (menuInstRef) {
        const pendingOptionTmNode = (_a = menuInstRef.value) === null || _a === void 0 ? void 0 : _a.getPendingTmNode();
        if (pendingOptionTmNode) {
          doCheck(pendingOptionTmNode);
        }
        return true;
      }
      return false;
    }
    function handleClickOutside(e) {
      handleSelectMenuClickOutside(e);
    }
    const exposedRef = {
      prev,
      next,
      enter
    };
    return Object.assign({
      isMounted: isMountedRef,
      mergedTheme: mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      menuInstRef,
      selectTreeMate: selectTreeMateRef,
      handleResize,
      handleToggle,
      handleClickOutside,
      cascaderSlots
    }, exposedRef);
  },
  render() {
    const {
      mergedClsPrefix,
      isMounted: isMounted2,
      mergedTheme,
      cascaderSlots
    } = this;
    return h(Transition, {
      name: "fade-in-scale-up-transition",
      appear: isMounted2
    }, {
      default: () => this.show ? withDirectives(h(NInternalSelectMenu, {
        ref: "menuInstRef",
        onResize: this.handleResize,
        clsPrefix: mergedClsPrefix,
        class: `${mergedClsPrefix}-cascader-menu`,
        autoPending: true,
        themeOverrides: mergedTheme.peerOverrides.InternalSelectMenu,
        theme: mergedTheme.peers.InternalSelectMenu,
        treeMate: this.selectTreeMate,
        multiple: this.multiple,
        value: this.value,
        onToggle: this.handleToggle
      }, {
        empty: () => resolveSlot(cascaderSlots["not-found"], () => [])
      }), [[clickoutside, this.handleClickOutside, void 0, {
        capture: true
      }]]) : null
    });
  }
});
const style = c([cB("cascader-menu", `
 outline: none;
 position: relative;
 margin: 4px 0;
 display: flex;
 flex-flow: column nowrap;
 border-radius: var(--n-menu-border-radius);
 overflow: hidden;
 box-shadow: var(--n-menu-box-shadow);
 color: var(--n-option-text-color);
 background-color: var(--n-menu-color);
 `, [
  fadeInScaleUpTransition({
    transformOrigin: "inherit",
    duration: "0.2s"
  }),
  cE("empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),
  // if width not set, cascader select menu's inner scroll area's width is
  // not correct, which won't change after select menu width is set
  cB("scrollbar", `
 width: 100%;
 `),
  cB("base-menu-mask", `
 background-color: var(--n-menu-mask-color);
 `),
  cB("base-loading", `
 color: var(--n-loading-color);
 `),
  cB("cascader-submenu-wrapper", `
 position: relative;
 display: flex;
 flex-wrap: nowrap;
 `),
  cB("cascader-submenu", `
 height: var(--n-menu-height);
 min-width: var(--n-column-width);
 position: relative;
 `, [cM("virtual", `
 width: var(--n-column-width);
 `), cB("scrollbar-content", `
 position: relative;
 `), c("&:first-child", `
 border-top-left-radius: var(--n-menu-border-radius);
 border-bottom-left-radius: var(--n-menu-border-radius);
 `), c("&:last-child", `
 border-top-right-radius: var(--n-menu-border-radius);
 border-bottom-right-radius: var(--n-menu-border-radius);
 `), c("&:not(:first-child)", `
 border-left: 1px solid var(--n-menu-divider-color);
 `)]),
  cB("cascader-menu-action", `
 box-sizing: border-box;
 padding: 8px;
 border-top: 1px solid var(--n-menu-divider-color);
 `),
  cB("cascader-option", `
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 padding: 0 0 0 18px;
 box-sizing: border-box;
 min-width: 182px;
 background-color: #0000;
 display: flex;
 align-items: center;
 white-space: nowrap;
 position: relative;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color 0.2s var(--n-bezier);
 `, [cM("show-prefix", `
 padding-left: 0;
 `), cE("label", `
 flex: 1 0 0;
 overflow: hidden;
 text-overflow: ellipsis;
 `), cE("prefix", `
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `), cE("suffix", `
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `), cB("cascader-option-icon-placeholder", `
 line-height: 0;
 position: relative;
 width: 16px;
 height: 16px;
 font-size: 16px;
 `, [cB("cascader-option-icon", [cM("checkmark", `
 color: var(--n-option-check-mark-color);
 `, [fadeInScaleUpTransition({
    originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
  })]), cM("arrow", `
 color: var(--n-option-arrow-color);
 `)])]), cM("selected", `
 color: var(--n-option-text-color-active);
 `), cM("active", `
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-hover);
 `), cM("pending", `
 background-color: var(--n-option-color-hover);
 `), c("&:hover", `
 background-color: var(--n-option-color-hover);
 `), cM("disabled", `
 color: var(--n-option-text-color-disabled);
 background-color: #0000;
 cursor: not-allowed;
 `, [cB("cascader-option-icon", [cM("arrow", `
 color: var(--n-option-text-color-disabled);
 `)])])])
]), cB("cascader", `
 z-index: auto;
 position: relative;
 width: 100%;
 `)]);
const cascaderProps = Object.assign(Object.assign({}, useTheme.props), {
  allowCheckingNotLoaded: Boolean,
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  options: {
    type: Array,
    default: () => []
  },
  value: [String, Number, Array],
  defaultValue: {
    type: [String, Number, Array],
    default: null
  },
  placeholder: String,
  multiple: Boolean,
  size: String,
  filterable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  },
  disabledField: {
    type: String,
    default: "disabled"
  },
  expandTrigger: {
    type: String,
    default: "click"
  },
  clearable: Boolean,
  clearFilterAfterSelect: {
    type: Boolean,
    default: true
  },
  remote: Boolean,
  onLoad: Function,
  separator: {
    type: String,
    default: " / "
  },
  filter: Function,
  placement: {
    type: String,
    default: "bottom-start"
  },
  cascade: {
    type: Boolean,
    default: true
  },
  leafOnly: Boolean,
  showPath: {
    type: Boolean,
    default: true
  },
  show: {
    type: Boolean,
    default: void 0
  },
  maxTagCount: [String, Number],
  ellipsisTagPopoverProps: Object,
  menuProps: Object,
  filterMenuProps: Object,
  virtualScroll: {
    type: Boolean,
    default: true
  },
  checkStrategy: {
    type: String,
    default: "all"
  },
  valueField: {
    type: String,
    default: "value"
  },
  labelField: {
    type: String,
    default: "label"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  renderLabel: Function,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onBlur: Function,
  onFocus: Function,
  getColumnStyle: Function,
  renderPrefix: Function,
  renderSuffix: Function,
  // deprecated
  onChange: [Function, Array]
});
const __unplugin_components_0 = defineComponent({
  name: "Cascader",
  props: cascaderProps,
  setup(props, {
    slots
  }) {
    const {
      mergedBorderedRef,
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Cascader", "-cascader", style, cascaderLight, props, mergedClsPrefixRef);
    const {
      localeRef
    } = useLocale("Cascader");
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = computed(() => props.value);
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const mergedCheckStrategyRef = computed(() => {
      return props.leafOnly ? "child" : props.checkStrategy;
    });
    const patternRef = ref("");
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    const cascaderMenuInstRef = ref(null);
    const selectMenuInstRef = ref(null);
    const triggerInstRef = ref(null);
    const keyboardKeyRef = ref(null);
    const hoverKeyRef = ref(null);
    const loadingKeySetRef = ref(/* @__PURE__ */ new Set());
    const selectMenuFollowerRef = ref(null);
    const cascaderMenuFollowerRef = ref(null);
    const adjustedToRef = useAdjustedTo(props);
    const focusedRef = ref(false);
    const addLoadingKey = (key) => {
      loadingKeySetRef.value.add(key);
    };
    const deleteLoadingKey = (key) => {
      loadingKeySetRef.value.delete(key);
    };
    const treeMateRef = computed(() => {
      const {
        valueField,
        childrenField,
        disabledField
      } = props;
      return createTreeMate(props.options, {
        getDisabled(node) {
          return node[disabledField];
        },
        getKey(node) {
          return node[valueField];
        },
        getChildren(node) {
          return node[childrenField];
        }
      });
    });
    const mergedKeysRef = computed(() => {
      const {
        cascade,
        multiple
      } = props;
      if (multiple && Array.isArray(mergedValueRef.value)) {
        return treeMateRef.value.getCheckedKeys(mergedValueRef.value, {
          cascade,
          allowNotLoaded: props.allowCheckingNotLoaded
        });
      } else {
        return {
          checkedKeys: [],
          indeterminateKeys: []
        };
      }
    });
    const checkedKeysRef = computed(() => mergedKeysRef.value.checkedKeys);
    const indeterminateKeysRef = computed(() => mergedKeysRef.value.indeterminateKeys);
    const menuModelRef = computed(() => {
      const {
        treeNodePath,
        treeNode
      } = treeMateRef.value.getPath(hoverKeyRef.value);
      let ret;
      if (treeNode === null) {
        ret = [treeMateRef.value.treeNodes];
      } else {
        ret = treeNodePath.map((treeNode2) => treeNode2.siblings);
        if (!treeNode.isLeaf && !loadingKeySetRef.value.has(treeNode.key) && treeNode.children) {
          ret.push(treeNode.children);
        }
      }
      return ret;
    });
    const hoverKeyPathRef = computed(() => {
      const {
        keyPath
      } = treeMateRef.value.getPath(hoverKeyRef.value);
      return keyPath;
    });
    const optionHeightRef = computed(() => {
      return themeRef.value.self.optionHeight;
    });
    if (isReactive(props.options)) {
      watch(props.options, (value, oldValue) => {
        if (!(value === oldValue)) {
          hoverKeyRef.value = null;
          keyboardKeyRef.value = null;
        }
      });
    }
    const uncontrolledShowRef = ref(false);
    function doUpdateShow(value) {
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow) {
        call(onUpdateShow, value);
      }
      if (_onUpdateShow) {
        call(_onUpdateShow, value);
      }
      uncontrolledShowRef.value = value;
    }
    function doUpdateValue(value, option, optionPath) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue,
        onChange
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (onUpdateValue) {
        call(onUpdateValue, value, option, optionPath);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, option, optionPath);
      }
      if (onChange) {
        call(onChange, value, option, optionPath);
      }
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function updateKeyboardKey(key) {
      keyboardKeyRef.value = key;
    }
    function updateHoverKey(key) {
      hoverKeyRef.value = key;
    }
    function getOptionsByKeys(keys) {
      const {
        value: {
          getNode
        }
      } = treeMateRef;
      return keys.map((keys2) => {
        var _a;
        return ((_a = getNode(keys2)) === null || _a === void 0 ? void 0 : _a.rawNode) || null;
      });
    }
    function doCheck(key) {
      var _a;
      const {
        cascade,
        multiple,
        filterable
      } = props;
      const {
        value: {
          check,
          getNode,
          getPath
        }
      } = treeMateRef;
      if (multiple) {
        try {
          const {
            checkedKeys
          } = check(key, mergedKeysRef.value.checkedKeys, {
            cascade,
            checkStrategy: mergedCheckStrategyRef.value,
            allowNotLoaded: props.allowCheckingNotLoaded
          });
          doUpdateValue(checkedKeys, getOptionsByKeys(checkedKeys), checkedKeys.map((checkedKey) => {
            var _a2;
            return getRawNodePath((_a2 = getPath(checkedKey)) === null || _a2 === void 0 ? void 0 : _a2.treeNodePath);
          }));
          if (filterable) focusSelectionInput();
          keyboardKeyRef.value = key;
          hoverKeyRef.value = key;
        } catch (err) {
          if (err instanceof SubtreeNotLoadedError) {
            if (cascaderMenuInstRef.value) {
              const tmNode = getNode(key);
              if (tmNode !== null) {
                cascaderMenuInstRef.value.showErrorMessage(tmNode.rawNode[props.labelField]);
              }
            }
          } else {
            throw err;
          }
        }
      } else {
        if (mergedCheckStrategyRef.value === "child") {
          const tmNode = getNode(key);
          if (tmNode === null || tmNode === void 0 ? void 0 : tmNode.isLeaf) {
            doUpdateValue(key, tmNode.rawNode, getRawNodePath(getPath(key).treeNodePath));
          } else {
            return false;
          }
        } else {
          const tmNode = getNode(key);
          doUpdateValue(key, (tmNode === null || tmNode === void 0 ? void 0 : tmNode.rawNode) || null, getRawNodePath((_a = getPath(key)) === null || _a === void 0 ? void 0 : _a.treeNodePath));
        }
      }
      return true;
    }
    function doUncheck(key) {
      const {
        cascade,
        multiple
      } = props;
      if (multiple) {
        const {
          value: {
            uncheck,
            getNode,
            getPath
          }
        } = treeMateRef;
        const {
          checkedKeys
        } = uncheck(key, mergedKeysRef.value.checkedKeys, {
          cascade,
          checkStrategy: mergedCheckStrategyRef.value,
          allowNotLoaded: props.allowCheckingNotLoaded
        });
        doUpdateValue(checkedKeys, checkedKeys.map((checkedKey) => {
          var _a;
          return ((_a = getNode(checkedKey)) === null || _a === void 0 ? void 0 : _a.rawNode) || null;
        }), checkedKeys.map((checkedKey) => {
          var _a;
          return getRawNodePath((_a = getPath(checkedKey)) === null || _a === void 0 ? void 0 : _a.treeNodePath);
        }));
        keyboardKeyRef.value = key;
        hoverKeyRef.value = key;
      }
    }
    const selectedOptionsRef = computed(() => {
      if (props.multiple) {
        const {
          showPath,
          separator,
          labelField,
          cascade
        } = props;
        const {
          getCheckedKeys,
          getNode
        } = treeMateRef.value;
        const value = getCheckedKeys(checkedKeysRef.value, {
          cascade,
          checkStrategy: mergedCheckStrategyRef.value,
          allowNotLoaded: props.allowCheckingNotLoaded
        }).checkedKeys;
        return value.map((key) => {
          const node = getNode(key);
          if (node === null) {
            return {
              label: String(key),
              value: key
            };
          } else {
            return {
              label: showPath ? getPathLabel(node, separator, labelField) : node.rawNode[labelField],
              value: node.key
            };
          }
        });
      } else {
        return [];
      }
    });
    const selectedOptionRef = computed(() => {
      const {
        multiple,
        showPath,
        separator,
        labelField
      } = props;
      const {
        value
      } = mergedValueRef;
      if (!multiple && !Array.isArray(value)) {
        const {
          getNode
        } = treeMateRef.value;
        if (value === null) {
          return null;
        }
        const node = getNode(value);
        if (node === null) {
          return {
            label: String(value),
            value
          };
        } else {
          return {
            label: showPath ? getPathLabel(node, separator, labelField) : node.rawNode[labelField],
            value: node.key
          };
        }
      } else {
        return null;
      }
    });
    const controlledShowRef = toRef(props, "show");
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const localizedPlaceholderRef = computed(() => {
      const {
        placeholder
      } = props;
      if (placeholder !== void 0) return placeholder;
      return localeRef.value.placeholder;
    });
    const showSelectMenuRef = computed(() => {
      return !!(props.filterable && patternRef.value);
    });
    watch(mergedShowRef, (show) => {
      if (!show) return;
      if (props.multiple) return;
      const {
        value
      } = mergedValueRef;
      if (!Array.isArray(value) && value !== null) {
        keyboardKeyRef.value = value;
        hoverKeyRef.value = value;
        void nextTick(() => {
          var _a;
          if (!mergedShowRef.value) return;
          const {
            value: hoverKey
          } = hoverKeyRef;
          if (mergedValueRef.value !== null) {
            const node = treeMateRef.value.getNode(hoverKey);
            if (node) {
              (_a = cascaderMenuInstRef.value) === null || _a === void 0 ? void 0 : _a.scroll(node.level, node.index, depx(optionHeightRef.value));
            }
          }
        });
      } else {
        keyboardKeyRef.value = null;
        hoverKeyRef.value = null;
      }
    }, {
      immediate: true
    });
    function doBlur(e) {
      const {
        onBlur
      } = props;
      const {
        nTriggerFormBlur
      } = formItem;
      if (onBlur) call(onBlur, e);
      nTriggerFormBlur();
    }
    function doFocus(e) {
      const {
        onFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus) call(onFocus, e);
      nTriggerFormFocus();
    }
    function focusSelectionInput() {
      var _a;
      (_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
    }
    function focusSelection() {
      var _a;
      (_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    }
    function openMenu() {
      if (!mergedDisabledRef.value) {
        patternRef.value = "";
        doUpdateShow(true);
        if (props.filterable) {
          focusSelectionInput();
        }
      }
    }
    function closeMenu(returnFocus = false) {
      if (returnFocus) {
        focusSelection();
      }
      doUpdateShow(false);
      patternRef.value = "";
    }
    function handleCascaderMenuClickOutside(e) {
      var _a;
      if (showSelectMenuRef.value) return;
      if (mergedShowRef.value) {
        if (!((_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(getPreciseEventTarget(e)))) {
          closeMenu();
        }
      }
    }
    function handleSelectMenuClickOutside(e) {
      if (!showSelectMenuRef.value) return;
      handleCascaderMenuClickOutside(e);
    }
    function clearPattern() {
      if (props.clearFilterAfterSelect) patternRef.value = "";
    }
    function move(direction) {
      var _a, _b, _c;
      const {
        value: keyboardKey
      } = keyboardKeyRef;
      const {
        value: treeMate
      } = treeMateRef;
      switch (direction) {
        case "prev":
          if (keyboardKey !== null) {
            const node = treeMate.getPrev(keyboardKey, {
              loop: true
            });
            if (node !== null) {
              updateKeyboardKey(node.key);
              (_a = cascaderMenuInstRef.value) === null || _a === void 0 ? void 0 : _a.scroll(node.level, node.index, depx(optionHeightRef.value));
            }
          }
          break;
        case "next":
          if (keyboardKey === null) {
            const node = treeMate.getFirstAvailableNode();
            if (node !== null) {
              updateKeyboardKey(node.key);
              (_b = cascaderMenuInstRef.value) === null || _b === void 0 ? void 0 : _b.scroll(node.level, node.index, depx(optionHeightRef.value));
            }
          } else {
            const node = treeMate.getNext(keyboardKey, {
              loop: true
            });
            if (node !== null) {
              updateKeyboardKey(node.key);
              (_c = cascaderMenuInstRef.value) === null || _c === void 0 ? void 0 : _c.scroll(node.level, node.index, depx(optionHeightRef.value));
            }
          }
          break;
        case "child":
          if (keyboardKey !== null) {
            const currentNode = treeMate.getNode(keyboardKey);
            if (currentNode !== null) {
              if (currentNode.shallowLoaded) {
                const node = treeMate.getChild(keyboardKey);
                if (node !== null) {
                  updateHoverKey(keyboardKey);
                  updateKeyboardKey(node.key);
                }
              } else {
                const {
                  value: loadingKeySet
                } = loadingKeySetRef;
                if (!loadingKeySet.has(keyboardKey)) {
                  addLoadingKey(keyboardKey);
                  updateHoverKey(keyboardKey);
                  const {
                    onLoad
                  } = props;
                  if (onLoad) {
                    onLoad(currentNode.rawNode).then(() => {
                      deleteLoadingKey(keyboardKey);
                    }).catch(() => {
                      deleteLoadingKey(keyboardKey);
                    });
                  }
                }
              }
            }
          }
          break;
        case "parent":
          if (keyboardKey !== null) {
            const node = treeMate.getParent(keyboardKey);
            if (node !== null) {
              updateKeyboardKey(node.key);
              const parentNode = node.getParent();
              if (parentNode === null) {
                updateHoverKey(null);
              } else {
                updateHoverKey(parentNode.key);
              }
            }
          }
          break;
      }
    }
    function handleKeydown(e) {
      var _a, _b;
      switch (e.key) {
        case " ":
        case "ArrowDown":
        case "ArrowUp":
          if (props.filterable && mergedShowRef.value) {
            break;
          }
          e.preventDefault();
          break;
      }
      if (happensIn(e, "action")) return;
      switch (e.key) {
        case " ":
          if (props.filterable) return;
        case "Enter":
          if (!mergedShowRef.value) {
            openMenu();
          } else {
            const {
              value: showSelectMenu
            } = showSelectMenuRef;
            const {
              value: keyboardKey
            } = keyboardKeyRef;
            if (!showSelectMenu) {
              if (keyboardKey !== null) {
                if (checkedKeysRef.value.includes(keyboardKey) || indeterminateKeysRef.value.includes(keyboardKey)) {
                  doUncheck(keyboardKey);
                } else {
                  const checkIsValid = doCheck(keyboardKey);
                  if (!props.multiple && checkIsValid) {
                    closeMenu(true);
                  }
                }
              }
            } else {
              if (selectMenuInstRef.value) {
                const hasCorrespondingOption = selectMenuInstRef.value.enter();
                if (hasCorrespondingOption) clearPattern();
              }
            }
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (mergedShowRef.value) {
            if (showSelectMenuRef.value) {
              (_a = selectMenuInstRef.value) === null || _a === void 0 ? void 0 : _a.prev();
            } else {
              move("prev");
            }
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (mergedShowRef.value) {
            if (showSelectMenuRef.value) {
              (_b = selectMenuInstRef.value) === null || _b === void 0 ? void 0 : _b.next();
            } else {
              move("next");
            }
          } else {
            openMenu();
          }
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (mergedShowRef.value && !showSelectMenuRef.value) {
            move("parent");
          }
          break;
        case "ArrowRight":
          e.preventDefault();
          if (mergedShowRef.value && !showSelectMenuRef.value) {
            move("child");
          }
          break;
        case "Escape":
          if (mergedShowRef.value) {
            markEventEffectPerformed(e);
            closeMenu(true);
          }
      }
    }
    function handleMenuKeydown(e) {
      handleKeydown(e);
    }
    function handleClear(e) {
      e.stopPropagation();
      if (props.multiple) {
        doUpdateValue([], [], []);
      } else {
        doUpdateValue(null, null, null);
      }
    }
    function handleTriggerFocus(e) {
      var _a;
      if (!((_a = cascaderMenuInstRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.relatedTarget))) {
        focusedRef.value = true;
        doFocus(e);
      }
    }
    function handleTriggerBlur(e) {
      var _a;
      if (!((_a = cascaderMenuInstRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.relatedTarget))) {
        focusedRef.value = false;
        doBlur(e);
        closeMenu();
      }
    }
    function handleMenuFocus(e) {
      var _a;
      if (!((_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.relatedTarget))) {
        focusedRef.value = true;
        doFocus(e);
      }
    }
    function handleMenuBlur(e) {
      var _a;
      if (!((_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.relatedTarget))) {
        focusedRef.value = false;
        doBlur(e);
      }
    }
    function handleMenuMousedown(e) {
      if (!happensIn(e, "action")) {
        if (props.multiple && props.filter) {
          e.preventDefault();
          focusSelectionInput();
        }
      }
    }
    function handleMenuTabout() {
      closeMenu(true);
    }
    function handleTriggerClick() {
      if (props.filterable) {
        openMenu();
      } else {
        if (mergedShowRef.value) {
          closeMenu(true);
        } else {
          openMenu();
        }
      }
    }
    function handlePatternInput(e) {
      patternRef.value = e.target.value;
    }
    function handleDeleteOption(option) {
      const {
        multiple
      } = props;
      const {
        value: mergedValue
      } = mergedValueRef;
      if (multiple && Array.isArray(mergedValue) && option.value !== void 0) {
        doUncheck(option.value);
      } else {
        doUpdateValue(null, null, null);
      }
    }
    function syncSelectMenuPosition() {
      var _a;
      (_a = selectMenuFollowerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    function syncCascaderMenuPosition() {
      var _a;
      (_a = cascaderMenuFollowerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    function handleTriggerResize() {
      if (mergedShowRef.value) {
        if (showSelectMenuRef.value) {
          syncSelectMenuPosition();
        } else {
          syncCascaderMenuPosition();
        }
      }
    }
    const showCheckboxRef = computed(() => {
      if (props.multiple && props.cascade) return true;
      if (mergedCheckStrategyRef.value !== "child") return true;
      return false;
    });
    provide(cascaderInjectionKey, {
      slots,
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      mergedValueRef,
      checkedKeysRef,
      indeterminateKeysRef,
      hoverKeyPathRef,
      mergedCheckStrategyRef,
      showCheckboxRef,
      cascadeRef: toRef(props, "cascade"),
      multipleRef: toRef(props, "multiple"),
      keyboardKeyRef,
      hoverKeyRef,
      remoteRef: toRef(props, "remote"),
      loadingKeySetRef,
      expandTriggerRef: toRef(props, "expandTrigger"),
      isMountedRef: isMounted(),
      onLoadRef: toRef(props, "onLoad"),
      virtualScrollRef: toRef(props, "virtualScroll"),
      optionHeightRef,
      localeRef,
      labelFieldRef: toRef(props, "labelField"),
      renderLabelRef: toRef(props, "renderLabel"),
      getColumnStyleRef: toRef(props, "getColumnStyle"),
      renderPrefixRef: toRef(props, "renderPrefix"),
      renderSuffixRef: toRef(props, "renderSuffix"),
      syncCascaderMenuPosition,
      syncSelectMenuPosition,
      updateKeyboardKey,
      updateHoverKey,
      addLoadingKey,
      deleteLoadingKey,
      doCheck,
      doUncheck,
      closeMenu,
      handleSelectMenuClickOutside,
      handleCascaderMenuClickOutside,
      clearPattern
    });
    const exposedMethods = {
      focus: () => {
        var _a;
        (_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        (_a = triggerInstRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      },
      getCheckedData: () => {
        if (showCheckboxRef.value) {
          const checkedKeys = checkedKeysRef.value;
          return {
            keys: checkedKeys,
            options: getOptionsByKeys(checkedKeys)
          };
        }
        return {
          keys: [],
          options: []
        };
      },
      getIndeterminateData: () => {
        if (showCheckboxRef.value) {
          const indeterminateKeys = indeterminateKeysRef.value;
          return {
            keys: indeterminateKeys,
            options: getOptionsByKeys(indeterminateKeys)
          };
        }
        return {
          keys: [],
          options: []
        };
      }
    };
    const cssVarsRef = computed(() => {
      const {
        self: {
          optionArrowColor,
          optionTextColor,
          optionTextColorActive,
          optionTextColorDisabled,
          optionCheckMarkColor,
          menuColor,
          menuBoxShadow,
          menuDividerColor,
          menuBorderRadius,
          menuHeight,
          optionColorHover,
          optionHeight,
          optionFontSize,
          loadingColor,
          columnWidth
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-menu-border-radius": menuBorderRadius,
        "--n-menu-box-shadow": menuBoxShadow,
        "--n-menu-height": menuHeight,
        "--n-column-width": columnWidth,
        "--n-menu-color": menuColor,
        "--n-menu-divider-color": menuDividerColor,
        "--n-option-height": optionHeight,
        "--n-option-font-size": optionFontSize,
        "--n-option-text-color": optionTextColor,
        "--n-option-text-color-disabled": optionTextColorDisabled,
        "--n-option-text-color-active": optionTextColorActive,
        "--n-option-color-hover": optionColorHover,
        "--n-option-check-mark-color": optionCheckMarkColor,
        "--n-option-arrow-color": optionArrowColor,
        "--n-menu-mask-color": changeColor(menuColor, {
          alpha: 0.75
        }),
        "--n-loading-color": loadingColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("cascader", void 0, cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedMethods), {
      handleTriggerResize,
      mergedStatus: mergedStatusRef,
      selectMenuFollowerRef,
      cascaderMenuFollowerRef,
      triggerInstRef,
      selectMenuInstRef,
      cascaderMenuInstRef,
      mergedBordered: mergedBorderedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      mergedValue: mergedValueRef,
      mergedShow: mergedShowRef,
      showSelectMenu: showSelectMenuRef,
      pattern: patternRef,
      treeMate: treeMateRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      localizedPlaceholder: localizedPlaceholderRef,
      selectedOption: selectedOptionRef,
      selectedOptions: selectedOptionsRef,
      adjustedTo: adjustedToRef,
      menuModel: menuModelRef,
      handleMenuTabout,
      handleMenuFocus,
      handleMenuBlur,
      handleMenuKeydown,
      handleMenuMousedown,
      handleTriggerFocus,
      handleTriggerBlur,
      handleTriggerClick,
      handleClear,
      handleDeleteOption,
      handlePatternInput,
      handleKeydown,
      focused: focusedRef,
      optionHeight: optionHeightRef,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      class: `${mergedClsPrefix}-cascader`
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h(NInternalSelection, {
          onResize: this.handleTriggerResize,
          ref: "triggerInstRef",
          status: this.mergedStatus,
          clsPrefix: mergedClsPrefix,
          maxTagCount: this.maxTagCount,
          ellipsisTagPopoverProps: this.ellipsisTagPopoverProps,
          bordered: this.mergedBordered,
          size: this.mergedSize,
          theme: this.mergedTheme.peers.InternalSelection,
          themeOverrides: this.mergedTheme.peerOverrides.InternalSelection,
          active: this.mergedShow,
          pattern: this.pattern,
          placeholder: this.localizedPlaceholder,
          selectedOption: this.selectedOption,
          selectedOptions: this.selectedOptions,
          multiple: this.multiple,
          filterable: this.filterable,
          clearable: this.clearable,
          disabled: this.mergedDisabled,
          focused: this.focused,
          onFocus: this.handleTriggerFocus,
          onBlur: this.handleTriggerBlur,
          onClick: this.handleTriggerClick,
          onClear: this.handleClear,
          onDeleteOption: this.handleDeleteOption,
          onPatternInput: this.handlePatternInput,
          onKeydown: this.handleKeydown
        }, {
          arrow: () => {
            var _a, _b;
            return (_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a);
          }
        })
      }), h(VFollower, {
        key: "cascaderMenu",
        ref: "cascaderMenuFollowerRef",
        show: this.mergedShow && !this.showSelectMenu,
        containerClass: this.namespace,
        placement: this.placement,
        width: !this.options.length ? "target" : void 0,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        to: this.adjustedTo
      }, {
        default: () => {
          var _a;
          (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
          const {
            menuProps
          } = this;
          return h(CascaderMenu, Object.assign({}, menuProps, {
            ref: "cascaderMenuInstRef",
            class: [this.themeClass, menuProps === null || menuProps === void 0 ? void 0 : menuProps.class],
            value: this.mergedValue,
            show: this.mergedShow && !this.showSelectMenu,
            menuModel: this.menuModel,
            style: [this.cssVars, menuProps === null || menuProps === void 0 ? void 0 : menuProps.style],
            onFocus: this.handleMenuFocus,
            onBlur: this.handleMenuBlur,
            onKeydown: this.handleMenuKeydown,
            onMousedown: this.handleMenuMousedown,
            onTabout: this.handleMenuTabout
          }), {
            action: () => {
              var _a2, _b;
              return (_b = (_a2 = this.$slots).action) === null || _b === void 0 ? void 0 : _b.call(_a2);
            },
            empty: () => {
              var _a2, _b;
              return (_b = (_a2 = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a2);
            }
          });
        }
      }), h(VFollower, {
        key: "selectMenu",
        ref: "selectMenuFollowerRef",
        show: this.mergedShow && this.showSelectMenu,
        containerClass: this.namespace,
        width: "target",
        placement: this.placement,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey
      }, {
        default: () => {
          var _a;
          (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
          const {
            filterMenuProps
          } = this;
          return h(CascaderSelectMenu, Object.assign({}, filterMenuProps, {
            ref: "selectMenuInstRef",
            class: [this.themeClass, filterMenuProps === null || filterMenuProps === void 0 ? void 0 : filterMenuProps.class],
            value: this.mergedValue,
            show: this.mergedShow && this.showSelectMenu,
            pattern: this.pattern,
            multiple: this.multiple,
            tmNodes: this.treeMate.treeNodes,
            filter: this.filter,
            labelField: this.labelField,
            separator: this.separator,
            style: [this.cssVars, filterMenuProps === null || filterMenuProps === void 0 ? void 0 : filterMenuProps.style]
          }));
        }
      })]
    }));
  }
});
export {
  ChevronRightIcon as C,
  __unplugin_components_0 as _
};
