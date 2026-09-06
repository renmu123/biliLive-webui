import { F as FileSelect } from "./FileSelect-CgztukHO.js";
import { d as useAppConfig } from "./index-FWk7a7hG.js";
import { d as defineComponent, an as storeToRefs, x as computed, r as ref, Y as watch, aC as onActivated, aD as onDeactivated, aE as onUnmounted, c as createElementBlock, e as createBaseVNode, a as createVNode, w as withCtx, B as Button, i as isRef, f as unref, g as createBlock, h as createCommentVNode, j as createTextVNode, o as openBlock } from "./index-CB8xvhFr.js";
import "./_plugin-vue_export-helper-uo42igUt.js";
import { s as syncApi } from "./sync-CDZcyPjM.js";
import { h as hotkeys } from "./hotkeys.esm-BrStqqkp.js";
import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
import { b as toReactive } from "./index-CMOU2boc.js";
import { _ as __unplugin_components_0 } from "./Select-CYnthXY-.js";
import { _ as __unplugin_components_2 } from "./Input-C3jgSm1V.js";
import { _ as __unplugin_components_1 } from "./Checkbox-Buw5q29r.js";
import "./EditableText-qBZLWFoX.js";
import "./common-1CgNZfMf.js";
import "./index-guw4y6OO.js";
import "./Icon-D1o4HjX4.js";
import "./showDirectoryDialog-CbG0Fkj3.js";
import "./text-BHgaUKrH.js";
import "./_getTag-22mR82vJ.js";
import "./Popover-D4v8saSe.js";
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
    const targetPathDraft = ref("");
    watch(
      () => options.targetPath,
      (value) => {
        targetPathDraft.value = value;
      },
      {
        immediate: true
      }
    );
    const handleTargetPathBlur = () => {
      if (targetPathDraft.value === options.targetPath) return;
      options.targetPath = targetPathDraft.value;
    };
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
    const aliyunpanDriveOptions = [
      {
        label: "备份盘",
        value: "backup"
      },
      {
        label: "资源库",
        value: "resource"
      }
    ];
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
          aliyunpanDriveType: options.syncType === "aliyunpan" ? options.aliyunpanDriveType || "backup" : void 0,
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
      const _component_n_input = __unplugin_components_2;
      const _component_n_checkbox = __unplugin_components_1;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("span", {
            style: { "cursor": "pointer", "color": "#958e8e" },
            onClick: clear
          }, "清空"),
          createVNode(_component_n_button, { onClick: addFiles }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode(" 添加 ")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, {
            type: "primary",
            onClick: sync,
            title: "立即同步(ctrl+enter)"
          }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
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
          extensions: ["*"],
          areaPlaceholder: "请选择文件"
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_n_select, {
            value: unref(options).syncType,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(options).syncType = $event),
            options: unref(syncConfigOptions),
            placeholder: "选择同步网盘",
            style: { "width": "140px", "display": "inline-block" }
          }, null, 8, ["value", "options"]),
          unref(options).syncType === "aliyunpan" ? (openBlock(), createBlock(_component_n_select, {
            key: 0,
            value: unref(options).aliyunpanDriveType,
            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(options).aliyunpanDriveType = $event),
            options: aliyunpanDriveOptions,
            placeholder: "选择上传位置",
            style: { "width": "140px", "display": "inline-block" }
          }, null, 8, ["value"])) : createCommentVNode("", true),
          createVNode(_component_n_input, {
            value: unref(targetPathDraft),
            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => isRef(targetPathDraft) ? targetPathDraft.value = $event : null),
            onBlur: handleTargetPathBlur,
            placeholder: "请输入目标路径",
            style: { "width": "200px" }
          }, null, 8, ["value"]),
          createVNode(_component_n_checkbox, {
            checked: unref(options).removeOrigin,
            "onUpdate:checked": _cache[4] || (_cache[4] = ($event) => unref(options).removeOrigin = $event)
          }, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
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
