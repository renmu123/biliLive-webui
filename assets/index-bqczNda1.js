import { i as isRef, aO as reactive, f as unref, ae as onMounted, a8 as nextTick, a5 as watch, c8 as toRefs$1, c9 as customRef, b_ as toValue, b$ as shallowRef, ca as readonly, J as toRef$1, r as ref, bA as getCurrentInstance, cb as hasInjectionContext, S as inject, cc as getCurrentScope, cd as onScopeDispose, x as computed, ce as onUpdated, a0 as watchEffect, ab as toRaw } from "./index-gjuLIDoI.js";
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function createEventHook() {
  const fns = /* @__PURE__ */ new Set();
  const off = (fn) => {
    fns.delete(fn);
  };
  const clear = () => {
    fns.clear();
  };
  const on = (fn) => {
    fns.add(fn);
    const offFn = () => off(fn);
    tryOnScopeDispose(offFn);
    return {
      off: offFn
    };
  };
  const trigger = (...args) => {
    return Promise.all(Array.from(fns).map((fn) => fn(...args)));
  };
  return {
    on,
    off,
    trigger,
    clear
  };
}
const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
const injectLocal = (...args) => {
  var _a;
  const key = args[0];
  const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
  if (instance == null && !hasInjectionContext())
    throw new Error("injectLocal must be called in setup");
  if (instance && localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance))
    return localProvidedStateMap.get(instance)[key];
  return inject(...args);
};
function toReactive(objectRef) {
  if (!isRef(objectRef))
    return reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (isRef(objectRef.value[p]) && !isRef(value))
        objectRef.value[p].value = value;
      else
        objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key);
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function throttleFilter(...args) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  let ms;
  let trailing;
  let leading;
  let rejectOnCancel;
  if (!isRef(args[0]) && typeof args[0] === "object")
    ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
  else
    [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter, options = {}) {
  const {
    initialState = "active"
  } = options;
  const isActive = toRef(initialState === "active");
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    initialState = "active",
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter, { initialState });
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function toRefs(objectRef, options = {}) {
  if (!isRef(objectRef))
    return toRefs$1(objectRef);
  const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
  for (const key in objectRef.value) {
    result[key] = customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        var _a;
        const replaceRef = (_a = toValue(options.replaceRef)) != null ? _a : true;
        if (replaceRef) {
          if (Array.isArray(objectRef.value)) {
            const copy = [...objectRef.value];
            copy[key] = v;
            objectRef.value = copy;
          } else {
            const newObject = { ...objectRef.value, [key]: v };
            Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
            objectRef.value = newObject;
          }
        } else {
          objectRef.value[key] = v;
        }
      }
    }));
  }
  return result;
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  const isPending = shallowRef(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    if (immediateCallback)
      cb();
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}
function watchThrottled(source, cb, options = {}) {
  const {
    throttle = 0,
    trailing = true,
    leading = true,
    ...watchOptions
  } = options;
  return watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter: throttleFilter(throttle, trailing, leading)
    }
  );
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
const defaultNavigator = isClient ? window.navigator : void 0;
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
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
function useMounted() {
  const isMounted = shallowRef(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, instance);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function templateRef(key, initialValue = null) {
  const instance = getCurrentInstance();
  let _trigger = () => {
  };
  const element = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a, _b;
        track();
        return (_b = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$refs[key]) != null ? _b : initialValue;
      },
      set() {
      }
    };
  });
  tryOnMounted(_trigger);
  onUpdated(_trigger);
  return element;
}
const ssrWidthSymbol = Symbol("vueuse-ssr-width");
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow, ssrWidth = useSSRWidth() } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      const queryStrings = toValue(query).split(",");
      matches.value = queryStrings.some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) {
          res = ssrWidth >= pxValue(minWidth[1]);
        }
        if (maxWidth && res) {
          res = ssrWidth <= pxValue(maxWidth[1]);
        }
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value)
      return;
    mediaQuery.value = window2.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches.value);
}
function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator: navigator2 = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator2 && "permissions" in navigator2);
  const permissionStatus = shallowRef();
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = shallowRef();
  const update = () => {
    var _a, _b;
    state.value = (_b = (_a = permissionStatus.value) == null ? void 0 : _a.state) != null ? _b : "prompt";
  };
  useEventListener(permissionStatus, "change", update, { passive: true });
  const query = createSingletonPromise(async () => {
    if (!isSupported.value)
      return;
    if (!permissionStatus.value) {
      try {
        permissionStatus.value = await navigator2.permissions.query(desc);
      } catch (e) {
        permissionStatus.value = void 0;
      } finally {
        update();
      }
    }
    if (controls)
      return toRaw(permissionStatus.value);
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}
function useClipboard(options = {}) {
  const {
    navigator: navigator2 = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const isClipboardApiSupported = useSupported(() => navigator2 && "clipboard" in navigator2);
  const permissionRead = usePermission("clipboard-read");
  const permissionWrite = usePermission("clipboard-write");
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text = shallowRef("");
  const copied = shallowRef(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring, { immediate: false });
  async function updateText() {
    let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionRead.value));
    if (!useLegacy) {
      try {
        text.value = await navigator2.clipboard.readText();
      } catch (e) {
        useLegacy = true;
      }
    }
    if (useLegacy) {
      text.value = legacyRead();
    }
  }
  if (isSupported.value && read)
    useEventListener(["copy", "cut"], updateText, { passive: true });
  async function copy(value = toValue(source)) {
    if (isSupported.value && value != null) {
      let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionWrite.value));
      if (!useLegacy) {
        try {
          await navigator2.clipboard.writeText(value);
        } catch (e) {
          useLegacy = true;
        }
      }
      if (useLegacy)
        legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = document.createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a, _b, _c;
    return (_c = (_b = (_a = document == null ? void 0 : document.getSelection) == null ? void 0 : _a.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
  }
  function isAllowed(status) {
    return status === "granted" || status === "prompt";
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults2, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults2 === "function" ? defaults2() : defaults2);
  const keyComputed = computed(() => toValue(key));
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults2);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  watch(keyComputed, () => update(), { flush });
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      if (storage instanceof Storage)
        useEventListener(window2, "storage", update, { passive: true });
      else
        useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window2) {
      const payload = {
        key: keyComputed.value,
        oldValue,
        newValue,
        storageArea: storage
      };
      window2.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, {
        detail: payload
      }));
    }
  }
  function write(v) {
    try {
      const oldValue = storage.getItem(keyComputed.value);
      if (v == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(keyComputed.value);
      } else {
        const serialized = serializer.write(v);
        if (oldValue !== serialized) {
          storage.setItem(keyComputed.value, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(keyComputed.value, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== keyComputed.value)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}
function useDraggable(target, options = {}) {
  var _a;
  const {
    pointerTypes,
    preventDefault: preventDefault2,
    stopPropagation,
    exact,
    onMove,
    onEnd,
    onStart,
    initialValue,
    axis = "both",
    draggingElement = defaultWindow,
    containerElement,
    handle: draggingHandle = target,
    buttons = [0]
  } = options;
  const position = ref(
    (_a = toValue(initialValue)) != null ? _a : { x: 0, y: 0 }
  );
  const pressedDelta = ref();
  const filterEvent = (e) => {
    if (pointerTypes)
      return pointerTypes.includes(e.pointerType);
    return true;
  };
  const handleEvent = (e) => {
    if (toValue(preventDefault2))
      e.preventDefault();
    if (toValue(stopPropagation))
      e.stopPropagation();
  };
  const start = (e) => {
    var _a2;
    if (!toValue(buttons).includes(e.button))
      return;
    if (toValue(options.disabled) || !filterEvent(e))
      return;
    if (toValue(exact) && e.target !== toValue(target))
      return;
    const container = toValue(containerElement);
    const containerRect = (_a2 = container == null ? void 0 : container.getBoundingClientRect) == null ? void 0 : _a2.call(container);
    const targetRect = toValue(target).getBoundingClientRect();
    const pos = {
      x: e.clientX - (container ? targetRect.left - containerRect.left + container.scrollLeft : targetRect.left),
      y: e.clientY - (container ? targetRect.top - containerRect.top + container.scrollTop : targetRect.top)
    };
    if ((onStart == null ? void 0 : onStart(pos, e)) === false)
      return;
    pressedDelta.value = pos;
    handleEvent(e);
  };
  const move = (e) => {
    if (toValue(options.disabled) || !filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    const container = toValue(containerElement);
    const targetRect = toValue(target).getBoundingClientRect();
    let { x, y } = position.value;
    if (axis === "x" || axis === "both") {
      x = e.clientX - pressedDelta.value.x;
      if (container)
        x = Math.min(Math.max(0, x), container.scrollWidth - targetRect.width);
    }
    if (axis === "y" || axis === "both") {
      y = e.clientY - pressedDelta.value.y;
      if (container)
        y = Math.min(Math.max(0, y), container.scrollHeight - targetRect.height);
    }
    position.value = {
      x,
      y
    };
    onMove == null ? void 0 : onMove(position.value, e);
    handleEvent(e);
  };
  const end = (e) => {
    if (toValue(options.disabled) || !filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    pressedDelta.value = void 0;
    onEnd == null ? void 0 : onEnd(position.value, e);
    handleEvent(e);
  };
  if (isClient) {
    const config = () => {
      var _a2;
      return {
        capture: (_a2 = options.capture) != null ? _a2 : true,
        passive: !toValue(preventDefault2)
      };
    };
    useEventListener(draggingHandle, "pointerdown", start, config);
    useEventListener(draggingElement, "pointermove", move, config);
    useEventListener(draggingElement, "pointerup", end, config);
  }
  return {
    ...toRefs(position),
    position,
    isDragging: computed(() => !!pressedDelta.value),
    style: computed(
      () => `left:${position.value.x}px;top:${position.value.y}px;`
    )
  };
}
function useDropZone(target, options = {}) {
  var _a, _b;
  const isOverDropZone = shallowRef(false);
  const files = shallowRef(null);
  let counter = 0;
  let isValid = true;
  if (isClient) {
    const _options = typeof options === "function" ? { onDrop: options } : options;
    const multiple = (_a = _options.multiple) != null ? _a : true;
    const preventDefaultForUnhandled = (_b = _options.preventDefaultForUnhandled) != null ? _b : false;
    const getFiles = (event) => {
      var _a2, _b2;
      const list = Array.from((_b2 = (_a2 = event.dataTransfer) == null ? void 0 : _a2.files) != null ? _b2 : []);
      return list.length === 0 ? null : multiple ? list : [list[0]];
    };
    const checkDataTypes = (types) => {
      const dataTypes = unref(_options.dataTypes);
      if (typeof dataTypes === "function")
        return dataTypes(types);
      if (!(dataTypes == null ? void 0 : dataTypes.length))
        return true;
      if (types.length === 0)
        return false;
      return types.every(
        (type) => dataTypes.some((allowedType) => type.includes(allowedType))
      );
    };
    const checkValidity = (items) => {
      const types = Array.from(items != null ? items : []).map((item) => item.type);
      const dataTypesValid = checkDataTypes(types);
      const multipleFilesValid = multiple || items.length <= 1;
      return dataTypesValid && multipleFilesValid;
    };
    const isSafari = () => /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent) && !("chrome" in window);
    const handleDragEvent = (event, eventType) => {
      var _a2, _b2, _c, _d, _e, _f;
      const dataTransferItemList = (_a2 = event.dataTransfer) == null ? void 0 : _a2.items;
      isValid = (_b2 = dataTransferItemList && checkValidity(dataTransferItemList)) != null ? _b2 : false;
      if (preventDefaultForUnhandled) {
        event.preventDefault();
      }
      if (!isSafari() && !isValid) {
        if (event.dataTransfer) {
          event.dataTransfer.dropEffect = "none";
        }
        return;
      }
      event.preventDefault();
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "copy";
      }
      const currentFiles = getFiles(event);
      switch (eventType) {
        case "enter":
          counter += 1;
          isOverDropZone.value = true;
          (_c = _options.onEnter) == null ? void 0 : _c.call(_options, null, event);
          break;
        case "over":
          (_d = _options.onOver) == null ? void 0 : _d.call(_options, null, event);
          break;
        case "leave":
          counter -= 1;
          if (counter === 0)
            isOverDropZone.value = false;
          (_e = _options.onLeave) == null ? void 0 : _e.call(_options, null, event);
          break;
        case "drop":
          counter = 0;
          isOverDropZone.value = false;
          if (isValid) {
            files.value = currentFiles;
            (_f = _options.onDrop) == null ? void 0 : _f.call(_options, currentFiles, event);
          }
          break;
      }
    };
    useEventListener(target, "dragenter", (event) => handleDragEvent(event, "enter"));
    useEventListener(target, "dragover", (event) => handleDragEvent(event, "over"));
    useEventListener(target, "dragleave", (event) => handleDragEvent(event, "leave"));
    useEventListener(target, "drop", (event) => handleDragEvent(event, "drop"));
  }
  return {
    files,
    isOverDropZone
  };
}
const DEFAULT_OPTIONS = {
  multiple: true,
  accept: "*",
  reset: false,
  directory: false
};
function prepareInitialFiles(files) {
  if (!files)
    return null;
  if (files instanceof FileList)
    return files;
  const dt = new DataTransfer();
  for (const file of files) {
    dt.items.add(file);
  }
  return dt.files;
}
function useFileDialog(options = {}) {
  const {
    document: document2 = defaultDocument
  } = options;
  const files = ref(prepareInitialFiles(options.initialFiles));
  const { on: onChange, trigger: changeTrigger } = createEventHook();
  const { on: onCancel, trigger: cancelTrigger } = createEventHook();
  let input;
  if (document2) {
    input = document2.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const result = event.target;
      files.value = result.files;
      changeTrigger(files.value);
    };
    input.oncancel = () => {
      cancelTrigger();
    };
  }
  const reset = () => {
    files.value = null;
    if (input && input.value) {
      input.value = "";
      changeTrigger(null);
    }
  };
  const open = (localOptions) => {
    if (!input)
      return;
    const _options = {
      ...DEFAULT_OPTIONS,
      ...options,
      ...localOptions
    };
    input.multiple = _options.multiple;
    input.accept = _options.accept;
    input.webkitdirectory = _options.directory;
    if (hasOwn(_options, "capture"))
      input.capture = _options.capture;
    if (_options.reset)
      reset();
    input.click();
  };
  return {
    files: readonly(files),
    open,
    reset,
    onCancel,
    onChange
  };
}
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true,
    type = "inner"
  } = options;
  const width = shallowRef(initialWidth);
  const height = shallowRef(initialHeight);
  const update = () => {
    if (window2) {
      if (type === "outer") {
        width.value = window2.outerWidth;
        height.value = window2.outerHeight;
      } else if (type === "visual" && window2.visualViewport) {
        const { width: visualViewportWidth, height: visualViewportHeight, scale } = window2.visualViewport;
        width.value = Math.round(visualViewportWidth * scale);
        height.value = Math.round(visualViewportHeight * scale);
      } else if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  const listenerOptions = { passive: true };
  useEventListener("resize", update, listenerOptions);
  if (window2 && type === "visual" && window2.visualViewport) {
    useEventListener(window2.visualViewport, "resize", update, listenerOptions);
  }
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}
export {
  useStorage as a,
  toReactive as b,
  useDropZone as c,
  useEventListener as d,
  useWindowSize as e,
  useDraggable as f,
  isClient as g,
  toArray as h,
  isIOS as i,
  watchImmediate as j,
  isObject as k,
  tryOnScopeDispose as l,
  toRef as m,
  noop as n,
  useClipboard as o,
  templateRef as t,
  useFileDialog as u,
  watchThrottled as w
};
