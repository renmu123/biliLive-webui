import { d as defineComponent, c as createElementBlock, e as createBaseVNode, o as openBlock, aV as reactive, av as useRoute, r as ref, x as computed, Y as watch, ax as onMounted, a as createVNode, w as withCtx, f as unref, i as isRef, _ as __unplugin_components_3, t as toDisplayString, B as Button, g as createBlock, h as createCommentVNode, j as createTextVNode, F as Fragment, ao as renderList, u as useRouter } from "./index-CB8xvhFr.js";
import { k as formatDuration, f as formatTime, g as formatRecentRecordTime } from "./index-guw4y6OO.js";
import { r as recoder, a as recordHistoryApi } from "./recordHistory-CX6UkL3E.js";
import { c as common } from "./common-1CgNZfMf.js";
import { _ as _sfc_main$1 } from "./Index.vue_vue_type_style_index_0_lang-CddyytYf.js";
import { A as AddRecorderModal, _ as __unplugin_components_0 } from "./addModal-BTWBqaAL.js";
import { q as useTitle } from "./index-CMOU2boc.js";
import { u as useNotice } from "./useNotice-D8AmCNaE.js";
import { _ as __unplugin_components_5 } from "./Spin-BBY6Rzmi.js";
import { N as NIcon } from "./Icon-D1o4HjX4.js";
import { N as NTag, a as __unplugin_components_5$1 } from "./Select-CYnthXY-.js";
import { _ as __unplugin_components_9, a as __unplugin_components_6 } from "./Tabs-Bty2OdIu.js";
import { _ as __unplugin_components_8 } from "./Pagination-DTxcX5iK.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import "./Tip.vue_vue_type_script_setup_true_lang-BVeN5TP1.js";
import "./Popover-D4v8saSe.js";
import "./_getTag-22mR82vJ.js";
import "./Input-C3jgSm1V.js";
import "./HelpCircleOutline-DC8ljYG3.js";
import "./index-FWk7a7hG.js";
import "./recorder-h_P4r7Df.js";
import "./index--O4HUYks.js";
import "./Checkbox-Buw5q29r.js";
import "./enum-DWbwatii.js";
import "./use-notification-Bzrm1lu9.js";
import "./useBreakpoints-y2ktmuab.js";
import "./Switch-n0tH4Ke1.js";
import "./InputNumber-DuVe1x-P.js";
import "./TimePicker-WQrinlQm.js";
import "./create-ref-setter-slkfdNqs.js";
import "./create-DfXrl36C.js";
import "./Forward-C2N4dC5_.js";
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 16 16"
};
const Copy16Regular = defineComponent({
  name: "Copy16Regular",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$2,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "g",
          {
            fill: "none"
          },
          [
            createBaseVNode("path", {
              d: "M4 4.085V10.5a2.5 2.5 0 0 0 2.336 2.495L6.5 13h4.414A1.5 1.5 0 0 1 9.5 14H6a3 3 0 0 1-3-3V5.5a1.5 1.5 0 0 1 1-1.415zM11.5 2A1.5 1.5 0 0 1 13 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 5 10.5v-7A1.5 1.5 0 0 1 6.5 2h5zm0 1h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5z",
              fill: "currentColor"
            })
          ],
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 20 20"
};
const LinkSquare20Regular = defineComponent({
  name: "LinkSquare20Regular",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "g",
          {
            fill: "none"
          },
          [
            createBaseVNode("path", {
              d: "M4.5 3A1.5 1.5 0 0 0 3 4.5v6A1.5 1.5 0 0 0 4.5 12H6v1H4.5A2.5 2.5 0 0 1 2 10.5v-6A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5v6a2.5 2.5 0 0 1-2.5 2.5H9v-1h1.5a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 10.5 3h-6zm5 4H11v1H9.5A1.5 1.5 0 0 0 8 9.5v6A1.5 1.5 0 0 0 9.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 8H14V7h1.5A2.5 2.5 0 0 1 18 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-6A2.5 2.5 0 0 1 9.5 7z",
              fill: "currentColor"
            })
          ],
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1 = { class: "streamer-detail-page" };
const _hoisted_2 = { class: "overview-shell" };
const _hoisted_3 = { class: "hero-main" };
const _hoisted_4 = { class: "profile-block" };
const _hoisted_5 = { class: "profile-content" };
const _hoisted_6 = { class: "profile-heading" };
const _hoisted_7 = { class: "profile-meta" };
const _hoisted_8 = { class: "room-meta" };
const _hoisted_9 = ["href"];
const _hoisted_10 = { class: "profile-tags" };
const _hoisted_11 = { class: "hero-actions" };
const _hoisted_12 = { class: "stat-grid" };
const _hoisted_13 = ["title"];
const _hoisted_14 = { class: "stat-label" };
const _hoisted_15 = { class: "stat-value" };
const _hoisted_16 = {
  key: 0,
  class: "timeline-list"
};
const _hoisted_17 = { class: "timeline-track" };
const _hoisted_18 = {
  key: 0,
  class: "timeline-line"
};
const _hoisted_19 = { class: "timeline-content" };
const _hoisted_20 = { class: "timeline-time" };
const _hoisted_21 = { class: "timeline-text" };
const _hoisted_22 = {
  key: 0,
  class: "clip-card-grid"
};
const _hoisted_23 = { class: "clip-info" };
const _hoisted_24 = { class: "clip-title" };
const _hoisted_25 = { class: "clip-meta-row" };
const _hoisted_26 = { class: "session-table-wrap" };
const _hoisted_27 = { class: "session-table" };
const _hoisted_28 = { class: "title-cell" };
const _hoisted_29 = { class: "session-name" };
const _hoisted_30 = { class: "operation-cell" };
const _hoisted_31 = {
  key: 0,
  class: "pagination-row"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "streamerDetail"
  },
  __name: "index",
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const notice = useNotice();
    const pageTitle = useTitle();
    const streamerInfo = reactive({
      recorderId: route.query.recorderId || route.query.id || "",
      name: route.query.name || ""
    });
    const queryParams = reactive({
      recorderId: streamerInfo.recorderId,
      page: 1,
      pageSize: 10,
      startTime: void 0,
      endTime: void 0
    });
    const loading = ref(false);
    const recordActionLoading = ref(false);
    const recentClipLoading = ref(false);
    const recorderSettingVisible = ref(false);
    const activeTab = ref("timeline");
    const recentClips = ref([]);
    const result = reactive({
      recorderInfo: null,
      streamer: null,
      summary: {
        sessionCount: 0,
        clipCount: 0,
        totalDuration: 0,
        totalDanmaNum: 0,
        totalInteractNum: 0,
        lastRecordTime: null
      },
      pagination: {
        total: 0,
        page: 1,
        pageSize: 10
      },
      data: []
    });
    const displayName = computed(() => result.streamer?.name || streamerInfo.name);
    watch(
      () => displayName.value,
      (newName) => {
        if (newName) {
          pageTitle.value = `${newName} 录制详情`;
        }
      },
      { immediate: true }
    );
    const avatar = computed(
      () => result.recorderInfo?.liveInfo?.avatar || result.recorderInfo?.extra?.avatar
    );
    const platformLabel = computed(
      () => result.recorderInfo?.providerId || result.streamer?.platform || "-"
    );
    const roomIdValue = computed(
      () => result.recorderInfo?.channelId || result.streamer?.room_id || ""
    );
    const roomLabel = computed(() => roomIdValue.value || "--");
    const monitorLabel = computed(() => result.recorderInfo?.disableAutoCheck ? "" : "自动监控");
    const monitorTagType = computed(
      () => result.recorderInfo?.disableAutoCheck ? "warning" : "success"
    );
    const isRecording = computed(() => result.recorderInfo?.state === "recording");
    const stateLabel = computed(() => isRecording.value ? "录制中" : "");
    const stateTagType = computed(() => isRecording.value ? "error" : "default");
    const channelURL = computed(() => result.recorderInfo?.channelURL || "");
    const recorderTimeline = computed(() => [...result.recorderInfo?.timeline || []].reverse());
    const overviewCards = computed(() => [
      {
        label: "总场次",
        value: formatNumber(result.summary.sessionCount)
      },
      {
        label: "总录制时长",
        value: formatDuration(result.summary.totalDuration, "00:00:00")
      },
      {
        label: "总录制片段",
        value: formatNumber(result.summary.clipCount)
      },
      {
        label: "总弹幕数",
        value: formatNumber(result.summary.totalDanmaNum)
      },
      {
        label: "上次录制时间",
        value: formatRecentRecordTime(result.summary.lastRecordTime),
        title: formatTime(result.summary.lastRecordTime)
      }
    ]);
    const applyResult = (payload) => {
      result.recorderInfo = payload.recorderInfo;
      result.streamer = payload.streamer;
      result.summary = payload.summary;
      result.pagination = payload.pagination;
      result.data = payload.data;
    };
    const queryRecentClips = async () => {
      if (!result.recorderInfo?.channelId || !result.recorderInfo?.providerId) {
        recentClips.value = [];
        return;
      }
      recentClipLoading.value = true;
      try {
        const response = await recordHistoryApi.queryRecentClips({
          room_id: result.recorderInfo.channelId,
          platform: result.recorderInfo.providerId
        });
        recentClips.value = response.data || [];
      } catch (error) {
        recentClips.value = [];
        notice.error({
          title: error?.message || "查询最近录制片段失败"
        });
      } finally {
        recentClipLoading.value = false;
      }
    };
    const handleQuery = async () => {
      if (!queryParams.recorderId) {
        notice.error({
          title: "缺少录制器信息"
        });
        return;
      }
      loading.value = true;
      try {
        const payload = await recoder.queryStreamerDetail(queryParams);
        applyResult(payload);
        await queryRecentClips();
      } catch (error) {
        notice.error({
          title: error?.message || "查询主播详情失败"
        });
      } finally {
        loading.value = false;
      }
    };
    const handlePageChange = (page) => {
      queryParams.page = page;
      handleQuery();
    };
    const handlePageSizeChange = (pageSize) => {
      queryParams.page = 1;
      queryParams.pageSize = pageSize;
      handleQuery();
    };
    const goBack = () => {
      router.push({
        path: "/recorder"
      });
    };
    const openRecorderSetting = () => {
      if (!streamerInfo.recorderId) {
        notice.warning({
          title: "缺少录制器信息，无法打开设置"
        });
        return;
      }
      recorderSettingVisible.value = true;
    };
    const handleRecorderSettingConfirm = async () => {
      await handleQuery();
    };
    const copyRoomId = async () => {
      if (!roomIdValue.value) {
        notice.warning({
          title: "当前没有可复制的房间号"
        });
        return;
      }
      try {
        await navigator.clipboard.writeText(roomIdValue.value);
        notice.success({
          title: "复制成功",
          content: `已复制房间号 ${roomIdValue.value}`,
          duration: 1e3
        });
      } catch (_error) {
        notice.error({
          title: "复制失败",
          content: "无法访问剪贴板"
        });
      }
    };
    const goToHistory = () => {
      if (!result.recorderInfo?.channelId || !result.recorderInfo?.providerId) {
        notice.warning({
          title: "当前缺少房间号或平台信息，无法跳转历史记录"
        });
        return;
      }
      router.push({
        path: "/liveHistory",
        query: {
          id: streamerInfo.recorderId,
          channelId: result.recorderInfo.channelId,
          platform: result.recorderInfo.providerId,
          name: result.streamer?.name || streamerInfo.name
        }
      });
    };
    const toggleRecording = async () => {
      if (!queryParams.recorderId) return;
      recordActionLoading.value = true;
      try {
        if (isRecording.value) {
          await recoder.stopRecord(queryParams.recorderId);
          notice.success({
            title: "已停止录制"
          });
        } else {
          await recoder.startRecord(queryParams.recorderId);
          notice.success({
            title: "已开始录制"
          });
        }
        setTimeout(() => {
          handleQuery();
        }, 1e3);
      } catch (error) {
        notice.error({
          title: error?.message || "操作失败"
        });
      } finally {
        recordActionLoading.value = false;
      }
    };
    const resolveSessionStatus = (index2) => {
      if (isRecording.value && queryParams.page === 1 && index2 === 0) {
        return {
          label: "录制中",
          type: "error"
        };
      }
      return {
        label: "已完成",
        type: "success"
      };
    };
    const showSessionDetailPlaceholder = (session) => {
      if (!result.recorderInfo?.channelId || !result.recorderInfo?.providerId) {
        notice.warning({
          title: "当前缺少房间号或平台信息，无法跳转历史记录"
        });
        return;
      }
      router.push({
        path: "/liveHistory",
        query: {
          id: streamerInfo.recorderId,
          channelId: result.recorderInfo.channelId,
          platform: result.recorderInfo.providerId,
          name: result.streamer?.name || streamerInfo.name,
          liveId: session.liveId
        }
      });
    };
    const formatNumber = (value) => {
      return Number(value || 0);
    };
    const formatTimelineRange = (startTime, endTime) => {
      const normalizedStartTime = startTime ?? null;
      const startLabel = formatTime(normalizedStartTime);
      if (!endTime || normalizedStartTime == null || endTime <= normalizedStartTime) {
        return `${startLabel}`;
      }
      return `${startLabel} - ${formatTime(endTime)}`;
    };
    const formatFileSize = (fileSize) => {
      if (!fileSize || fileSize <= 0) return "--";
      const mb = fileSize / (1024 * 1024);
      if (mb >= 1024) {
        return `${(mb / 1024).toFixed(1)} GB`;
      }
      return `${mb.toFixed(1)} MB`;
    };
    onMounted(() => {
      handleQuery();
    });
    return (_ctx, _cache) => {
      const _component_n_avatar = __unplugin_components_0;
      const _component_n_icon = NIcon;
      const _component_n_button = Button;
      const _component_n_tag = NTag;
      const _component_n_card = __unplugin_components_3;
      const _component_n_empty = __unplugin_components_5$1;
      const _component_n_tab_pane = __unplugin_components_6;
      const _component_n_spin = __unplugin_components_5;
      const _component_n_pagination = __unplugin_components_8;
      const _component_n_tabs = __unplugin_components_9;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n_spin, { show: unref(loading) }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_n_card, {
                class: "hero-card",
                bordered: false
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_3, [
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(_component_n_avatar, {
                        round: "",
                        size: 80,
                        class: "profile-avatar",
                        src: unref(avatar),
                        referrerpolicy: "no-referrer"
                      }, null, 8, ["src"]),
                      createBaseVNode("div", _hoisted_5, [
                        createBaseVNode("div", _hoisted_6, [
                          createBaseVNode("div", null, [
                            createBaseVNode("h1", null, toDisplayString(unref(displayName)), 1),
                            createBaseVNode("div", _hoisted_7, [
                              createBaseVNode("span", null, toDisplayString(unref(platformLabel)), 1),
                              createBaseVNode("span", _hoisted_8, [
                                createBaseVNode("span", null, "房间号：" + toDisplayString(unref(roomLabel)), 1),
                                createVNode(_component_n_button, {
                                  text: "",
                                  class: "copy-room-button",
                                  title: "复制房间号",
                                  onClick: copyRoomId
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_component_n_icon, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(Copy16Regular))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_n_button, {
                                  text: "",
                                  class: "copy-room-button"
                                }, {
                                  icon: withCtx(() => [
                                    createBaseVNode("a", {
                                      href: unref(channelURL),
                                      target: "_blank",
                                      rel: "noreferrer",
                                      class: "channel-link",
                                      title: "访问直播间"
                                    }, [
                                      createVNode(_component_n_icon, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(LinkSquare20Regular))
                                        ]),
                                        _: 1
                                      })
                                    ], 8, _hoisted_9)
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_10, [
                            unref(monitorLabel) ? (openBlock(), createBlock(_component_n_tag, {
                              key: 0,
                              type: unref(monitorTagType),
                              round: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(monitorLabel)), 1)
                              ]),
                              _: 1
                            }, 8, ["type"])) : createCommentVNode("", true),
                            unref(stateLabel) ? (openBlock(), createBlock(_component_n_tag, {
                              key: 1,
                              type: unref(stateTagType),
                              round: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(stateLabel)), 1)
                              ]),
                              _: 1
                            }, 8, ["type"])) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_11, [
                      createVNode(_component_n_button, {
                        type: "primary",
                        loading: unref(recordActionLoading),
                        onClick: toggleRecording
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(isRecording) ? "停止录制" : "开始录制"), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_n_button, {
                        type: "warning",
                        onClick: goToHistory
                      }, {
                        default: withCtx(() => _cache[3] || (_cache[3] = [
                          createTextVNode("录制历史")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_button, { onClick: openRecorderSetting }, {
                        default: withCtx(() => _cache[4] || (_cache[4] = [
                          createTextVNode("直播间设置")
                        ])),
                        _: 1
                      }),
                      createVNode(_component_n_button, { onClick: goBack }, {
                        default: withCtx(() => _cache[5] || (_cache[5] = [
                          createTextVNode("返回")
                        ])),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_12, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(overviewCards), (item) => {
                  return openBlock(), createBlock(_component_n_card, {
                    class: "stat-card",
                    key: item.label,
                    bordered: false
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", {
                        class: "stat-card-content",
                        title: item.title
                      }, [
                        createBaseVNode("span", _hoisted_14, toDisplayString(item.label), 1),
                        createBaseVNode("strong", _hoisted_15, toDisplayString(item.value), 1)
                      ], 8, _hoisted_13)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              createVNode(_component_n_card, {
                class: "tab-panel",
                bordered: false
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_tabs, {
                    value: unref(activeTab),
                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => isRef(activeTab) ? activeTab.value = $event : null),
                    type: "segment",
                    animated: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_tab_pane, {
                        name: "timeline",
                        tab: "时间线"
                      }, {
                        default: withCtx(() => [
                          unref(recorderTimeline).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_16, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(recorderTimeline), (item, index2) => {
                              return openBlock(), createElementBlock("div", {
                                key: `${item.startTime}-${index2}`,
                                class: "timeline-item"
                              }, [
                                createBaseVNode("div", _hoisted_17, [
                                  _cache[6] || (_cache[6] = createBaseVNode("span", { class: "timeline-dot" }, null, -1)),
                                  index2 !== unref(recorderTimeline).length - 1 ? (openBlock(), createElementBlock("span", _hoisted_18)) : createCommentVNode("", true)
                                ]),
                                createBaseVNode("div", _hoisted_19, [
                                  createBaseVNode("span", _hoisted_20, toDisplayString(formatTimelineRange(item.startTime, item.endTime)), 1),
                                  createBaseVNode("span", _hoisted_21, toDisplayString(item.text), 1)
                                ])
                              ]);
                            }), 128))
                          ])) : (openBlock(), createBlock(_component_n_empty, {
                            key: 1,
                            description: "暂无数据"
                          }))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_tab_pane, {
                        name: "clips",
                        tab: "最近录制片段"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_spin, { show: unref(recentClipLoading) }, {
                            default: withCtx(() => [
                              unref(recentClips).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_22, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(recentClips), (clip) => {
                                  return openBlock(), createElementBlock("div", {
                                    key: clip.id,
                                    class: "clip-card"
                                  }, [
                                    createVNode(_sfc_main$1, {
                                      style: { "height": "160px" },
                                      option: {
                                        url: unref(common).getVideo(clip.videoFileId),
                                        type: clip.videoFileExt
                                      },
                                      isLive: false
                                    }, null, 8, ["option"]),
                                    createBaseVNode("div", _hoisted_23, [
                                      createBaseVNode("div", _hoisted_24, toDisplayString(clip.title || "未命名片段"), 1),
                                      createBaseVNode("div", _hoisted_25, [
                                        createBaseVNode("span", null, toDisplayString(unref(formatRecentRecordTime)(clip.recordStartTime)), 1),
                                        createBaseVNode("span", null, toDisplayString(formatFileSize(clip.videoFileSize)), 1)
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])) : (openBlock(), createBlock(_component_n_empty, {
                                key: 1,
                                description: "暂无可播放的录制片段"
                              }))
                            ]),
                            _: 1
                          }, 8, ["show"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_n_tab_pane, {
                        name: "sessions",
                        tab: "最近场次"
                      }, {
                        default: withCtx(() => [
                          unref(result).data.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createBaseVNode("div", _hoisted_26, [
                              createBaseVNode("table", _hoisted_27, [
                                _cache[8] || (_cache[8] = createBaseVNode("thead", { class: "table-header" }, [
                                  createBaseVNode("tr", null, [
                                    createBaseVNode("th", null, "直播标题"),
                                    createBaseVNode("th", null, "直播开始时间"),
                                    createBaseVNode("th", null, "开始时间"),
                                    createBaseVNode("th", null, "结束时间"),
                                    createBaseVNode("th", null, "录制时长"),
                                    createBaseVNode("th", null, "片段数"),
                                    createBaseVNode("th", null, "弹幕数"),
                                    createBaseVNode("th", null, "状态"),
                                    createBaseVNode("th", null, "操作")
                                  ])
                                ], -1)),
                                createBaseVNode("tbody", null, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(result).data, (session, index2) => {
                                    return openBlock(), createElementBlock("tr", {
                                      key: session.sessionKey
                                    }, [
                                      createBaseVNode("td", _hoisted_28, [
                                        createBaseVNode("div", _hoisted_29, toDisplayString(session.title || "-"), 1)
                                      ]),
                                      createBaseVNode("td", null, toDisplayString(unref(formatTime)(session.recordStartTime)), 1),
                                      createBaseVNode("td", null, toDisplayString(unref(formatTime)(session.liveStartTime)), 1),
                                      createBaseVNode("td", null, toDisplayString(unref(formatTime)(session.lastRecordTime)), 1),
                                      createBaseVNode("td", null, toDisplayString(unref(formatDuration)(session.totalDuration, "00:00:00")), 1),
                                      createBaseVNode("td", null, toDisplayString(session.clipCount), 1),
                                      createBaseVNode("td", null, toDisplayString(formatNumber(session.totalDanmaNum)), 1),
                                      createBaseVNode("td", null, [
                                        createVNode(_component_n_tag, {
                                          size: "small",
                                          round: "",
                                          type: resolveSessionStatus(index2).type
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(resolveSessionStatus(index2).label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["type"])
                                      ]),
                                      createBaseVNode("td", _hoisted_30, [
                                        createVNode(_component_n_button, {
                                          text: "",
                                          type: "primary",
                                          onClick: ($event) => showSessionDetailPlaceholder(session)
                                        }, {
                                          default: withCtx(() => _cache[7] || (_cache[7] = [
                                            createTextVNode(" 详情 ")
                                          ])),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ]),
                            unref(result).pagination.total > unref(result).pagination.pageSize ? (openBlock(), createElementBlock("div", _hoisted_31, [
                              createVNode(_component_n_pagination, {
                                page: unref(queryParams).page,
                                "onUpdate:page": [
                                  _cache[0] || (_cache[0] = ($event) => unref(queryParams).page = $event),
                                  handlePageChange
                                ],
                                "page-size": unref(queryParams).pageSize,
                                "item-count": unref(result).pagination.total,
                                "show-size-picker": "",
                                "page-sizes": [5, 10, 20, 30],
                                "onUpdate:pageSize": handlePageSizeChange
                              }, null, 8, ["page", "page-size", "item-count"])
                            ])) : createCommentVNode("", true)
                          ], 64)) : (openBlock(), createBlock(_component_n_empty, {
                            key: 1,
                            description: "暂无场次数据"
                          }))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(AddRecorderModal, {
          id: unref(streamerInfo).recorderId,
          visible: unref(recorderSettingVisible),
          "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => isRef(recorderSettingVisible) ? recorderSettingVisible.value = $event : null),
          onConfirm: handleRecorderSettingConfirm
        }, null, 8, ["id", "visible"])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc58911f"]]);
export {
  index as default
};
