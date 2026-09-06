import { d as defineComponent, x as computed, r as ref, aD as onDeactivated, aC as onActivated, c as createElementBlock, e as createBaseVNode, a as createVNode, w as withCtx, B as Button, g as createBlock, h as createCommentVNode, _ as __unplugin_components_3, f as unref, i as isRef, ar as __unplugin_components_3$1, F as Fragment, j as createTextVNode, t as toDisplayString, ap as normalizeClass, aB as withKeys, u as useRouter, o as openBlock } from "./index-CB8xvhFr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import { c as common } from "./common-1CgNZfMf.js";
import { u as useConfirm } from "./index--O4HUYks.js";
import { g as useQueueStore } from "./index-FWk7a7hG.js";
import { u as useNotice } from "./useNotice-D8AmCNaE.js";
import { _ as __unplugin_components_2 } from "./Input-C3jgSm1V.js";
import "./Checkbox-Buw5q29r.js";
import "./index-guw4y6OO.js";
import "./_getTag-22mR82vJ.js";
import "./use-notification-Bzrm1lu9.js";
const _hoisted_1 = { class: "dashboard-container" };
const _hoisted_2 = { class: "page-header" };
const _hoisted_3 = { class: "stats-grid" };
const _hoisted_4 = { class: "stat-content" };
const _hoisted_5 = { class: "stat-info" };
const _hoisted_6 = { class: "stat-value" };
const _hoisted_7 = { class: "stat-content" };
const _hoisted_8 = { class: "stat-info" };
const _hoisted_9 = { class: "stat-value" };
const _hoisted_10 = { class: "stat-content" };
const _hoisted_11 = { class: "stat-info" };
const _hoisted_12 = { class: "stat-value" };
const _hoisted_13 = { class: "stat-content" };
const _hoisted_14 = { class: "stat-info" };
const _hoisted_15 = { class: "stat-value" };
const _hoisted_16 = { class: "stat-content" };
const _hoisted_17 = { class: "stat-info" };
const _hoisted_18 = { class: "stat-value" };
const _hoisted_19 = { class: "stat-content" };
const _hoisted_20 = { class: "stat-info" };
const _hoisted_21 = { class: "action-buttons" };
const _hoisted_22 = { style: { "text-align": "right" } };
const _hoisted_23 = { key: 0 };
const _hoisted_24 = { class: "result-info" };
const _hoisted_25 = { style: { "text-align": "right" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Dashboard"
  },
  __name: "index",
  setup(__props) {
    const router = useRouter();
    const quenuStore = useQueueStore();
    const runningTaskNum = computed(() => quenuStore.runningTaskNum);
    const statistics = ref({
      startTime: null,
      videoTotalDuaration: null,
      recordingNum: 0,
      recorderNum: 0
    });
    const diskSpace = ref(null);
    const getTime = async () => {
      const data = await common.appStatistics();
      statistics.value = data;
      try {
        const diskData = await common.getDiskSpace();
        diskSpace.value = diskData;
      } catch (error) {
        console.error("获取磁盘空间失败:", error);
        diskSpace.value = null;
      }
    };
    const now = ref(Date.now());
    const formatTime = (time) => {
      const seconds = Math.floor(time / 1e3 % 60);
      const minutes = Math.floor(time / 1e3 / 60 % 60);
      const hours = Math.floor(time / 1e3 / 60 / 60 % 24);
      const days = Math.floor(time / 1e3 / 60 / 60 / 24);
      if (days > 0) {
        return `${days}天${hours}小时${minutes}分钟${seconds}秒`;
      } else {
        return `${hours}小时${minutes}分钟${seconds}秒`;
      }
    };
    let intervalId = null;
    const createInterval = () => {
      if (intervalId) return;
      const interval = window.isWeb ? 1e3 : 1e3;
      intervalId = setInterval(() => {
        now.value = Date.now();
      }, interval);
    };
    function cleanInterval() {
      intervalId && clearInterval(intervalId);
      intervalId = null;
    }
    onDeactivated(() => {
      cleanInterval();
    });
    let eventSource = null;
    async function getRunningTaskNum() {
      if (eventSource && eventSource?.readyState !== 2) return;
      eventSource = await common.getRunningTaskNum();
      eventSource.onmessage = function(event) {
        const data = JSON.parse(event.data || "{}");
        quenuStore.setRunningTaskNum(data.num);
      };
    }
    onActivated(() => {
      getTime();
      createInterval();
      getRunningTaskNum();
    });
    onDeactivated(() => {
      cleanInterval();
      if (eventSource) {
        eventSource.close();
        eventSource = null;
      }
    });
    const confirm = useConfirm();
    const notice = useNotice();
    const handleWebhook = async () => {
      const res = await common.testWebhook();
      if (res.length === 0) {
        notice.warning("没有发现问题");
        return false;
      }
      const list = res.map((item) => `${item.file}`).join("\n");
      const [status] = await confirm.warning({
        title: "以下数据存在问题，是否处理，以下数据将会被认为是错误数据，请手动处理？",
        content: `${list}`
      });
      if (!status) return false;
      await common.handleWebhook(res);
      notice.success("处理成功");
      return true;
    };
    const roomIdModalVisible = ref(false);
    const roomIdInput = ref("");
    const resultModalVisible = ref(false);
    const checkResult = ref(null);
    const whyUploadFailed = () => {
      roomIdInput.value = "";
      roomIdModalVisible.value = true;
    };
    const handleRoomIdConfirm = async () => {
      if (!roomIdInput.value.trim()) {
        notice.warning("请输入直播间号");
        return;
      }
      roomIdModalVisible.value = false;
      try {
        const res = await common.whyUploadFailed(roomIdInput.value.trim());
        checkResult.value = res;
        resultModalVisible.value = true;
      } catch (error) {
        notice.error("检测失败，请检查直播间号是否正确");
      }
    };
    const navigateToRecorder = () => {
      router.push({ name: "recorder" });
    };
    const navigateToQueue = () => {
      router.push({ name: "Queue" });
    };
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_3;
      const _component_n_input = __unplugin_components_2;
      const _component_n_modal = __unplugin_components_3$1;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            _cache[7] || (_cache[7] = createBaseVNode("h1", { class: "page-title" }, "数据看板", -1)),
            createVNode(_component_n_button, {
              type: "primary",
              onClick: getTime,
              secondary: ""
            }, {
              icon: withCtx(() => _cache[5] || (_cache[5] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createBaseVNode("path", { d: "M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" })
                ], -1)
              ])),
              default: withCtx(() => [
                _cache[6] || (_cache[6] = createTextVNode(" 刷新数据 "))
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_n_card, {
              class: "stat-card",
              hoverable: ""
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  _cache[9] || (_cache[9] = createBaseVNode("div", { class: "stat-icon running-icon" }, [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createBaseVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                      }),
                      createBaseVNode("polyline", { points: "12 6 12 12 16 14" })
                    ])
                  ], -1)),
                  createBaseVNode("div", _hoisted_5, [
                    _cache[8] || (_cache[8] = createBaseVNode("div", { class: "stat-label" }, "软件运行时长", -1)),
                    createBaseVNode("div", _hoisted_6, toDisplayString(formatTime(unref(now) - (unref(statistics)?.startTime || 0))), 1)
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_card, {
              class: "stat-card",
              hoverable: ""
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_7, [
                  _cache[11] || (_cache[11] = createBaseVNode("div", { class: "stat-icon record-icon" }, [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createBaseVNode("path", { d: "M12 20h9" }),
                      createBaseVNode("path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" })
                    ])
                  ], -1)),
                  createBaseVNode("div", _hoisted_8, [
                    _cache[10] || (_cache[10] = createBaseVNode("div", { class: "stat-label" }, "最近30天录制时长", -1)),
                    createBaseVNode("div", _hoisted_9, toDisplayString(formatTime((unref(statistics)?.videoTotalDuaration || 0) * 1e3)), 1)
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_card, {
              class: "stat-card clickable",
              hoverable: "",
              onClick: navigateToRecorder
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_10, [
                  _cache[13] || (_cache[13] = createBaseVNode("div", { class: "stat-icon streamer-icon" }, [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createBaseVNode("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
                      createBaseVNode("circle", {
                        cx: "9",
                        cy: "7",
                        r: "4"
                      }),
                      createBaseVNode("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
                      createBaseVNode("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
                    ])
                  ], -1)),
                  createBaseVNode("div", _hoisted_11, [
                    _cache[12] || (_cache[12] = createBaseVNode("div", { class: "stat-label" }, "主播总数", -1)),
                    createBaseVNode("div", _hoisted_12, toDisplayString(unref(statistics)?.recorderNum || 0), 1)
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_card, {
              class: "stat-card clickable",
              hoverable: "",
              onClick: navigateToRecorder
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_13, [
                  _cache[15] || (_cache[15] = createBaseVNode("div", { class: "stat-icon recording-icon" }, [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createBaseVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                      }),
                      createBaseVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "3"
                      })
                    ])
                  ], -1)),
                  createBaseVNode("div", _hoisted_14, [
                    _cache[14] || (_cache[14] = createBaseVNode("div", { class: "stat-label" }, "正在录制", -1)),
                    createBaseVNode("div", _hoisted_15, toDisplayString(unref(statistics)?.recordingNum || 0), 1)
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_n_card, {
              class: "stat-card clickable",
              hoverable: "",
              onClick: navigateToQueue
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_16, [
                  _cache[17] || (_cache[17] = createBaseVNode("div", { class: "stat-icon task-icon" }, [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createBaseVNode("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                      createBaseVNode("polyline", { points: "14 2 14 8 20 8" }),
                      createBaseVNode("line", {
                        x1: "16",
                        y1: "13",
                        x2: "8",
                        y2: "13"
                      }),
                      createBaseVNode("line", {
                        x1: "16",
                        y1: "17",
                        x2: "8",
                        y2: "17"
                      }),
                      createBaseVNode("polyline", { points: "10 9 9 9 8 9" })
                    ])
                  ], -1)),
                  createBaseVNode("div", _hoisted_17, [
                    _cache[16] || (_cache[16] = createBaseVNode("div", { class: "stat-label" }, "正在运行的任务", -1)),
                    createBaseVNode("div", _hoisted_18, toDisplayString(unref(runningTaskNum)), 1)
                  ])
                ])
              ]),
              _: 1
            }),
            unref(diskSpace) ? (openBlock(), createBlock(_component_n_card, {
              key: 0,
              class: "stat-card",
              hoverable: ""
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("div", {
                    class: normalizeClass(["stat-icon disk-icon", { "disk-icon-warning": unref(diskSpace).free < 5 }])
                  }, _cache[18] || (_cache[18] = [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createBaseVNode("ellipse", {
                        cx: "12",
                        cy: "5",
                        rx: "9",
                        ry: "3"
                      }),
                      createBaseVNode("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
                      createBaseVNode("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
                    ], -1)
                  ]), 2),
                  createBaseVNode("div", _hoisted_20, [
                    _cache[19] || (_cache[19] = createBaseVNode("div", { class: "stat-label" }, "录制磁盘空间", -1)),
                    createBaseVNode("div", {
                      class: normalizeClass(["stat-value", { "text-error": unref(diskSpace).free < 5 }])
                    }, " 剩余 " + toDisplayString(unref(diskSpace).free.toFixed(2)) + "GB ", 3),
                    createBaseVNode("div", {
                      class: normalizeClass(["stat-extra", { "text-error": unref(diskSpace).free < 5 }])
                    }, " 已用 " + toDisplayString(unref(diskSpace).usedPercentage.toFixed(1)) + "% ", 3)
                  ])
                ])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          createVNode(_component_n_card, {
            title: "快捷操作",
            class: "action-card"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_21, [
                createVNode(_component_n_button, {
                  type: "warning",
                  onClick: whyUploadFailed,
                  size: "large"
                }, {
                  icon: withCtx(() => _cache[20] || (_cache[20] = [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createBaseVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                      }),
                      createBaseVNode("line", {
                        x1: "12",
                        y1: "8",
                        x2: "12",
                        y2: "12"
                      }),
                      createBaseVNode("line", {
                        x1: "12",
                        y1: "16",
                        x2: "12.01",
                        y2: "16"
                      })
                    ], -1)
                  ])),
                  default: withCtx(() => [
                    _cache[21] || (_cache[21] = createTextVNode(" 诊断上传问题 "))
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "error",
                  onClick: handleWebhook,
                  size: "large",
                  style: { "display": "none" }
                }, {
                  icon: withCtx(() => _cache[22] || (_cache[22] = [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createBaseVNode("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
                      createBaseVNode("line", {
                        x1: "12",
                        y1: "9",
                        x2: "12",
                        y2: "13"
                      }),
                      createBaseVNode("line", {
                        x1: "12",
                        y1: "17",
                        x2: "12.01",
                        y2: "17"
                      })
                    ], -1)
                  ])),
                  default: withCtx(() => [
                    _cache[23] || (_cache[23] = createTextVNode(" 修复Webhook卡住 "))
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        createVNode(_component_n_modal, {
          show: unref(roomIdModalVisible),
          "onUpdate:show": _cache[2] || (_cache[2] = ($event) => isRef(roomIdModalVisible) ? roomIdModalVisible.value = $event : null),
          "mask-closable": false,
          "auto-focus": ""
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "500px" },
              bordered: false,
              role: "dialog",
              "aria-modal": "true"
            }, {
              header: withCtx(() => _cache[24] || (_cache[24] = [
                createBaseVNode("div", { style: { "font-size": "16px", "font-weight": "bold" } }, "输入直播间号", -1)
              ])),
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_22, [
                  createVNode(_component_n_button, {
                    onClick: _cache[1] || (_cache[1] = ($event) => roomIdModalVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[25] || (_cache[25] = [
                      createTextVNode("取消")
                    ])),
                    _: 1
                  }),
                  createVNode(_component_n_button, {
                    type: "primary",
                    style: { "margin-left": "10px" },
                    onClick: handleRoomIdConfirm
                  }, {
                    default: withCtx(() => _cache[26] || (_cache[26] = [
                      createTextVNode(" 确认 ")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n_input, {
                  value: unref(roomIdInput),
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(roomIdInput) ? roomIdInput.value = $event : null),
                  placeholder: "请输入直播间号",
                  maxlength: "20",
                  onKeyup: withKeys(handleRoomIdConfirm, ["enter"])
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(_component_n_modal, {
          show: unref(resultModalVisible),
          "onUpdate:show": _cache[4] || (_cache[4] = ($event) => isRef(resultModalVisible) ? resultModalVisible.value = $event : null),
          "mask-closable": false,
          "auto-focus": ""
        }, {
          default: withCtx(() => [
            createVNode(_component_n_card, {
              style: { "width": "600px" },
              bordered: false,
              role: "dialog",
              "aria-modal": "true"
            }, {
              header: withCtx(() => _cache[27] || (_cache[27] = [
                createBaseVNode("div", { style: { "font-size": "16px", "font-weight": "bold" } }, "检测结果", -1)
              ])),
              footer: withCtx(() => [
                createBaseVNode("div", _hoisted_25, [
                  createVNode(_component_n_button, {
                    type: "primary",
                    onClick: _cache[3] || (_cache[3] = ($event) => resultModalVisible.value = false)
                  }, {
                    default: withCtx(() => _cache[28] || (_cache[28] = [
                      createTextVNode("关闭")
                    ])),
                    _: 1
                  })
                ])
              ]),
              default: withCtx(() => [
                unref(checkResult) ? (openBlock(), createElementBlock("div", _hoisted_23, [
                  createBaseVNode("div", {
                    class: normalizeClass([unref(checkResult).hasError ? "result-error" : "result-success", "result-status"])
                  }, toDisplayString(unref(checkResult).hasError ? "发现问题" : "配置正常"), 3),
                  createBaseVNode("div", _hoisted_24, toDisplayString(unref(checkResult).errorInfo), 1)
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f7e64e21"]]);
export {
  index as default
};
