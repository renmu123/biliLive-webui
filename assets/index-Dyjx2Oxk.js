import { d as defineComponent, c as createElementBlock, e as createBaseVNode, o as openBlock, aV as reactive, av as useRoute, r as ref, x as computed, ax as onMounted, g as createBlock, h as createCommentVNode, a as createVNode, f as unref, i as isRef, w as withCtx, B as Button, l as h, _ as __unplugin_components_3, j as createTextVNode, t as toDisplayString, u as useRouter } from "./index-CB8xvhFr.js";
import { f as formatTime, k as formatDuration } from "./index-guw4y6OO.js";
import { a as recordHistoryApi } from "./recordHistory-CX6UkL3E.js";
import { u as useConfirm } from "./index--O4HUYks.js";
import { u as useVisibleColumns, _ as _sfc_main$1 } from "./ColumnSelector.vue_vue_type_script_setup_true_lang-DlN61JnU.js";
import { a as toVideoPlayerPage } from "./pages-BFwPG4zS.js";
import { q as useTitle } from "./index-CMOU2boc.js";
import { u as useNotice } from "./useNotice-D8AmCNaE.js";
import { F as FileOpenOutlined, D as DownloadOutline } from "./FileOpenOutlined-Cy8DggN0.js";
import { F as FolderOpenOutline } from "./FolderOpenOutline-vqwY7EUo.js";
import { _ as __unplugin_components_4 } from "./DataTable-DBhKNBf2.js";
import { _ as __unplugin_components_0 } from "./DatePicker-bHyidnXI.js";
import { _ as __unplugin_components_5 } from "./Spin-BBY6Rzmi.js";
import { N as NIcon } from "./Icon-D1o4HjX4.js";
import { N as NTag, a as __unplugin_components_5$1 } from "./Select-CYnthXY-.js";
import { _ as __unplugin_components_2 } from "./Space-Dcg2rQj1.js";
import { _ as __unplugin_components_8 } from "./Pagination-DTxcX5iK.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-uo42igUt.js";
import "./Checkbox-Buw5q29r.js";
import "./Input-C3jgSm1V.js";
import "./Popover-D4v8saSe.js";
import "./_getTag-22mR82vJ.js";
import "./common-1CgNZfMf.js";
import "./use-notification-Bzrm1lu9.js";
import "./RadioGroup-CJq397k5.js";
import "./Tooltip-VU4s6Ip5.js";
import "./ChevronRight-BrIDHZkd.js";
import "./Dropdown-CwFZzQPI.js";
import "./create-DfXrl36C.js";
import "./create-ref-setter-slkfdNqs.js";
import "./TimePicker-WQrinlQm.js";
import "./Forward-C2N4dC5_.js";
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 20 20"
};
const Delete20Regular = defineComponent({
  name: "Delete20Regular",
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
              d: "M11.5 4a1.5 1.5 0 0 0-3 0h-1a2.5 2.5 0 0 1 5 0H17a.5.5 0 0 1 0 1h-.554L15.15 16.23A2 2 0 0 1 13.163 18H6.837a2 2 0 0 1-1.987-1.77L3.553 5H3a.5.5 0 0 1-.492-.41L2.5 4.5A.5.5 0 0 1 3 4h8.5zm3.938 1H4.561l1.282 11.115a1 1 0 0 0 .994.885h6.326a1 1 0 0 0 .993-.885L15.438 5zM8.5 7.5c.245 0 .45.155.492.359L9 7.938v6.125c0 .241-.224.437-.5.437c-.245 0-.45-.155-.492-.359L8 14.062V7.939c0-.242.224-.438.5-.438zm3 0c.245 0 .45.155.492.359l.008.079v6.125c0 .241-.224.437-.5.437c-.245 0-.45-.155-.492-.359L11 14.062V7.939c0-.242.224-.438.5-.438z",
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
  viewBox: "0 0 24 24"
};
const PlayCircle24Regular = defineComponent({
  name: "PlayCircle24Regular",
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
              d: "M10.856 8.155A1.25 1.25 0 0 0 9 9.248v5.504a1.25 1.25 0 0 0 1.856 1.093l5.757-3.189a.75.75 0 0 0 0-1.312l-5.757-3.189zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zM3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0z",
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
const _hoisted_1 = { class: "live-history" };
const _hoisted_2 = { style: { "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "20px" } };
const _hoisted_3 = {
  key: 1,
  class: "result-container"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LiveHistory"
  },
  __name: "index",
  setup(__props) {
    const route = useRoute();
    const pageTitle = useTitle();
    const streamerInfo = reactive({
      platform: route.query.platform || "",
      room_id: route.query.channelId || "",
      name: route.query.name || ""
    });
    pageTitle.value = `${streamerInfo.name} 录制历史`;
    const queryParams = reactive({
      room_id: streamerInfo.room_id,
      platform: streamerInfo.platform,
      liveId: route.query.liveId || void 0,
      page: 1,
      pageSize: 10,
      startTime: null,
      endTime: null
    });
    const recordList = ref([]);
    const pagination = reactive({
      page: 1,
      pageSize: 10,
      total: 0
    });
    const loading = ref(false);
    const hasQueried = ref(false);
    const columnConfig = [
      { value: "title", label: "标题" },
      { value: "live_start_time", label: "开播时间" },
      { value: "record_start_time", label: "视频录制开始" },
      { value: "record_end_time", label: "视频录制结束" },
      { value: "duration", label: "持续时长" },
      { value: "video_duration", label: "视频时长" },
      { value: "danma_num", label: "弹幕数量" },
      { value: "interact_num", label: "弹幕互动人数" },
      { value: "danma_density", label: "弹幕密度" },
      { value: "actions", label: "操作" }
    ];
    const { visibleColumns } = useVisibleColumns({
      columns: columnConfig,
      storageKey: "live-history-visible-columns"
    });
    const allColumns = [
      {
        title: "标题",
        key: "title"
      },
      {
        title: "开播时间",
        key: "live_start_time",
        render: (row) => formatTime(row.live_start_time)
      },
      {
        title: "录制开始时间",
        key: "record_start_time",
        render: (row) => formatTime(row.record_start_time)
      },
      {
        title: "录制结束时间",
        key: "record_end_time",
        render: (row) => row.record_end_time ? formatTime(row.record_end_time) : "未结束"
      },
      {
        title: "持续时长",
        key: "duration",
        render: (row) => formatWithStart(row.record_start_time, row.record_end_time)
      },
      {
        title: "视频时长",
        key: "video_duration",
        render: (row) => formatDuration(row.video_duration)
      },
      {
        title: "弹幕数量",
        key: "danma_num"
      },
      {
        title: "弹幕互动人数",
        key: "interact_num"
      },
      {
        title: "弹幕密度",
        key: "danma_density",
        render: (row) => row.danma_density !== null && row.danma_density !== void 0 ? `${row.danma_density}/秒` : ""
      },
      {
        title: "操作",
        key: "actions",
        render: (row) => {
          const subNodes = [];
          subNodes.push(
            h(
              NIcon,
              {
                size: "20",
                style: {
                  cursor: "pointer"
                },
                title: "视频预览",
                onClick: () => previewVideo(row.id)
              },
              { default: () => h(PlayCircle24Regular) }
            )
          );
          if (!window.isWeb) {
            subNodes.push(
              h(
                NIcon,
                {
                  size: "20",
                  style: {
                    cursor: "pointer"
                  },
                  title: "打开文件",
                  onClick: () => openFile(row.id)
                },
                { default: () => h(FileOpenOutlined) }
              )
            );
            subNodes.push(
              h(
                NIcon,
                {
                  size: "20",
                  style: {
                    cursor: "pointer"
                  },
                  title: "打开文件夹",
                  onClick: () => openFolder(row.id)
                },
                { default: () => h(FolderOpenOutline) }
              )
            );
          }
          if (window.isWeb) {
            subNodes.push(
              h(
                NIcon,
                {
                  size: "20",
                  style: {
                    cursor: "pointer"
                  },
                  title: "下载",
                  onClick: () => downloadFile(row.id)
                },
                { default: () => h(DownloadOutline) }
              )
            );
          }
          return h(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }
            },
            [
              ...subNodes,
              h(
                NIcon,
                {
                  size: "20",
                  style: {
                    cursor: "pointer"
                  },
                  title: "删除记录",
                  onClick: () => removeRecord(row.id)
                },
                { default: () => h(Delete20Regular) }
              )
            ]
          );
        }
      }
    ];
    const visibleTableColumns = computed(() => {
      return allColumns.filter((column) => visibleColumns.value.includes(column.key));
    });
    onMounted(() => {
      if (streamerInfo.room_id && streamerInfo.platform) {
        handleQuery();
      }
    });
    const handleQuery = async () => {
      queryParams.room_id = streamerInfo.room_id;
      queryParams.platform = streamerInfo.platform;
      queryParams.liveId = route.query.liveId;
      if (!queryParams.room_id || !queryParams.platform) {
        console.error("缺少必要的房间号或平台参数");
        return;
      }
      const apiParams = {
        room_id: queryParams.room_id,
        platform: queryParams.platform,
        liveId: queryParams.liveId,
        page: queryParams.page,
        pageSize: queryParams.pageSize,
        startTime: queryParams.startTime ?? void 0,
        endTime: queryParams.endTime ?? void 0
      };
      loading.value = true;
      hasQueried.value = true;
      try {
        const result = await recordHistoryApi.queryRecords(apiParams);
        recordList.value = result.data || [];
        pagination.total = result.pagination.total;
        pagination.page = result.pagination.page;
        pagination.pageSize = result.pagination.pageSize;
        if (result.data && result.data.length > 0 && result.data[0].streamer_name) {
          streamerInfo.name = result.data[0].streamer_name;
          pageTitle.value = `${streamerInfo.name} 录制历史`;
        }
      } catch (error) {
        console.error("查询直播记录失败", error);
      } finally {
        loading.value = false;
      }
    };
    const handlePageChange = (page) => {
      queryParams.page = page;
      handleQuery();
    };
    const handlePageSizeChange = (pageSize) => {
      queryParams.pageSize = pageSize;
      handleQuery();
    };
    const formatWithStart = (startTime, endTime) => {
      if (!startTime || !endTime) return "--";
      const duration = (endTime - startTime) / 1e3;
      return formatDuration(duration);
    };
    const openFile = async (id) => {
      try {
        const { videoFilePath } = await recordHistoryApi.getFileInfo(id);
        if (!videoFilePath) return;
        window.api.openPath(videoFilePath);
      } catch (error) {
        notice.error({
          title: error.message || error
        });
      }
    };
    const downloadFile = async (id) => {
      try {
        const fileUrl = await recordHistoryApi.downloadFile(id);
        const a = document.createElement("a");
        a.href = fileUrl;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (error) {
        notice.error({
          title: error.message || error
        });
      }
    };
    const openFolder = async (id) => {
      try {
        const { videoFilePath } = await recordHistoryApi.getFileInfo(id);
        if (!videoFilePath) return;
        window.api.common.showItemInFolder(videoFilePath);
      } catch (error) {
        notice.error({
          title: error.message || error
        });
      }
    };
    const confirm = useConfirm();
    const notice = useNotice();
    const removeRecord = async (id) => {
      const [status] = await confirm.warning({
        content: "确定要删除这条直播记录吗？此操作不可撤销。"
      });
      if (!status) return;
      await recordHistoryApi.removeRecord(id);
      notice.success({
        title: `删除成功`,
        duration: 1e3
      });
      await handleQuery();
    };
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    const previewVideo = async (id) => {
      const { videoFileId, videoFileExt, danmaFileId } = await recordHistoryApi.getFileInfo(id);
      toVideoPlayerPage({
        videoId: videoFileId,
        videoType: videoFileExt,
        danmaId: danmaFileId
      });
    };
    return (_ctx, _cache) => {
      const _component_n_date_picker = __unplugin_components_0;
      const _component_n_button = Button;
      const _component_n_tag = NTag;
      const _component_n_space = __unplugin_components_2;
      const _component_n_card = __unplugin_components_3;
      const _component_n_data_table = __unplugin_components_4;
      const _component_n_pagination = __unplugin_components_8;
      const _component_n_spin = __unplugin_components_5;
      const _component_n_empty = __unplugin_components_5$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_n_date_picker, {
            value: unref(queryParams).startTime,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(queryParams).startTime = $event),
            type: "date",
            clearable: "",
            actions: ["clear", "confirm"],
            placeholder: "开始时间",
            style: { "width": "150px" }
          }, null, 8, ["value"]),
          createVNode(_component_n_date_picker, {
            value: unref(queryParams).endTime,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(queryParams).endTime = $event),
            type: "date",
            clearable: "",
            actions: ["clear", "confirm"],
            placeholder: "结束时间",
            style: { "width": "150px" }
          }, null, 8, ["value"]),
          createVNode(_sfc_main$1, {
            modelValue: unref(visibleColumns),
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(visibleColumns) ? visibleColumns.value = $event : null),
            columns: columnConfig
          }, null, 8, ["modelValue"]),
          createVNode(_component_n_button, {
            type: "primary",
            onClick: handleQuery
          }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode(" 查询 ")
            ])),
            _: 1
          }),
          createVNode(_component_n_button, { onClick: goBack }, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("返回")
            ])),
            _: 1
          })
        ]),
        unref(streamerInfo).room_id ? (openBlock(), createBlock(_component_n_card, {
          key: 0,
          class: "room-info",
          size: "small"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_space, null, {
              default: withCtx(() => [
                createVNode(_component_n_tag, null, {
                  default: withCtx(() => [
                    createTextVNode("平台：" + toDisplayString(unref(streamerInfo).platform), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_n_tag, null, {
                  default: withCtx(() => [
                    createTextVNode("房间号：" + toDisplayString(unref(streamerInfo).room_id), 1)
                  ]),
                  _: 1
                }),
                unref(streamerInfo).name ? (openBlock(), createBlock(_component_n_tag, { key: 0 }, {
                  default: withCtx(() => [
                    createTextVNode("主播：" + toDisplayString(unref(streamerInfo).name), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        unref(recordList).length > 0 || unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createVNode(_component_n_spin, { show: unref(loading) }, {
            default: withCtx(() => [
              createVNode(_component_n_data_table, {
                columns: unref(visibleTableColumns),
                data: unref(recordList),
                pagination: false
              }, null, 8, ["columns", "data"]),
              unref(pagination).total > 0 ? (openBlock(), createBlock(_component_n_pagination, {
                key: 0,
                style: { "margin-top": "20px" },
                page: unref(pagination).page,
                "onUpdate:page": [
                  _cache[3] || (_cache[3] = ($event) => unref(pagination).page = $event),
                  handlePageChange
                ],
                "page-size": unref(pagination).pageSize,
                "item-count": unref(pagination).total,
                "show-size-picker": "",
                "onUpdate:pageSize": handlePageSizeChange,
                "page-sizes": [10, 20, 30, 40]
              }, null, 8, ["page", "page-size", "item-count"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["show"])
        ])) : !unref(loading) && unref(hasQueried) ? (openBlock(), createBlock(_component_n_empty, {
          key: 2,
          description: "没有查询到相关记录"
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b57d97c5"]]);
export {
  index as default
};
