import { F as FileSelect } from "./FileSelect-B0aQpShO.js";
import { d as useAppConfig } from "./index-BpXg0f34.js";
import { d as defineComponent, a4 as storeToRefs, x as computed, r as ref, ak as onActivated, al as onDeactivated, am as onUnmounted, c as createElementBlock, e as createBaseVNode, a as createVNode, w as withCtx, B as Button, i as isRef, f as unref, j as createTextVNode, o as openBlock } from "./index-gjuLIDoI.js";
import "./_plugin-vue_export-helper-B1lyReKF.js";
import { s as syncApi } from "./sync-CUfd7gwV.js";
import { h as hotkeys } from "./hotkeys.esm-CkQxwFRj.js";
import { u as useNotification } from "./use-notification-LRtjAvoZ.js";
import { b as toReactive } from "./index-bqczNda1.js";
import { _ as __unplugin_components_0 } from "./Select-xWcqChuz.js";
import { _ as __unplugin_components_0$1 } from "./Input--Gp3P9gj.js";
import { _ as __unplugin_components_1 } from "./Checkbox-pQXdXXSK.js";
import "./EditableText-DJHDEqjl.js";
import "./Icon-D2Zo6Coc.js";
import "./showDirectoryDialog-CUR2gD_Z.js";
import "./common-Da25N27f.js";
import "./text-CwQ4I63s.js";
import "./_getTag-NYFG1GAg.js";
import "./Popover-T5GorXob.js";
import "./create-DfXrl36C.js";
const _hoisted_1 = {
  class: "flex justify-center align-center",
  style: { "margin-bottom": "20px", "gap": "10px" }
};
const _hoisted_2 = {
  class: "flex align-center",
  style: { "margin-top": "10px", "gap": "10px", "justify-content": "center" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "FileSync"
  },
  __name: "index",
  setup(__props) {
    const notice = useNotification();
    const { appConfig } = storeToRefs(useAppConfig());
    const options = toReactive(
      computed({
        get: () => appConfig.value.tool.fileSync,
        set: (value) => {
          appConfig.value.tool.fileSync = value;
        }
      })
    );
    const fileList = ref([]);
    onActivated(() => {
      hotkeys("ctrl+enter", function() {
        sync();
      });
    });
    onDeactivated(() => {
      hotkeys.unbind();
    });
    onUnmounted(() => {
      hotkeys.unbind();
    });
    const syncConfigOptions = computed(() => {
      return [
        {
          label: "百度网盘",
          value: "baiduPCS"
        },
        {
          label: "阿里云盘",
          value: "aliyunpan"
        },
        {
          label: "alist",
          value: "alist"
        },
        {
          label: "123网盘",
          value: "pan123"
        }
        // {
        //   label: "本地复制",
        //   value: "copy",
        // },
      ];
    });
    const sync = async () => {
      if (!options.syncType) {
        notice.error({
          title: `请选择同步网盘`,
          duration: 1e3
        });
        return;
      }
      if (fileList.value.length === 0) {
        notice.error({
          title: `至少选择一个文件`,
          duration: 1e3
        });
        return;
      }
      notice.info({
        title: `开始上传`,
        duration: 1e3
      });
      for (const file of fileList.value) {
        await syncApi.sync({
          file: file.path,
          type: options.syncType,
          targetPath: options.targetPath,
          options: {
            removeOrigin: options.removeOrigin
          }
        });
      }
      fileList.value = [];
    };
    const clear = () => {
      fileList.value = [];
    };
    const fileSelect = ref(null);
    const addFiles = async () => {
      fileSelect.value?.select();
    };
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_select = __unplugin_components_0;
      const _component_n_input = __unplugin_components_0$1;
      const _component_n_checkbox = __unplugin_components_1;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("span", {
            style: { "cursor": "pointer", "color": "#958e8e" },
            onClick: clear
          }, "清空"),
          createVNode(_component_n_button, { onClick: addFiles }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode(" 添加 ")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            onClick: sync,
            title: "立即同步(ctrl+enter)"
          }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode(" 立即上传 ")
            ])),
            _: 1
          })
        ]),
        createVNode(FileSelect, {
          ref_key: "fileSelect",
          ref: fileSelect,
          modelValue: unref(fileList),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(fileList) ? fileList.value = $event : null),
          sort: false,
          extensions: ["*"]
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_n_select, {
            value: unref(options).syncType,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(options).syncType = $event),
            options: unref(syncConfigOptions),
            placeholder: "选择同步网盘",
            style: { "width": "140px", "display": "inline-block" }
          }, null, 8, ["value", "options"]),
          createVNode(_component_n_input, {
            value: unref(options).targetPath,
            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).targetPath = $event),
            placeholder: "请输入目标路径",
            style: { "width": "200px" }
          }, null, 8, ["value"]),
          createVNode(_component_n_checkbox, {
            checked: unref(options).removeOrigin,
            "onUpdate:checked": _cache[3] || (_cache[3] = ($event) => unref(options).removeOrigin = $event)
          }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode(" 完成后移除源文件 ")
            ])),
            _: 1
          }, 8, ["checked"])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
