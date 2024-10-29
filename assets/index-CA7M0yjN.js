import { m as inject, e6 as dialogApiInjectionKey, M as throwError, r as ref, v as h, B as Button } from "./index-BdK_bIY-.js";
import { e as __unplugin_components_1 } from "./index-C4u8aLk_.js";
function useDialog() {
  const dialog = inject(dialogApiInjectionKey, null);
  if (dialog === null) {
    throwError("use-dialog", "No outer <n-dialog-provider /> founded.");
  }
  return dialog;
}
const useConfirm = () => {
  const dialog = useDialog();
  return {
    warning: ({
      title,
      content,
      positiveText,
      negativeText,
      showCheckbox,
      showAgainKey,
      checkboxText,
      checkboxTip
    }) => new Promise((reslove) => {
      const data = JSON.parse(localStorage.getItem("notShowAgain") || "{}");
      if (showAgainKey && data[showAgainKey] === true) return reslove([true, true]);
      const hasChecked = ref(false);
      const d = dialog.warning({
        title: title || "警告",
        content,
        action: () => {
          let checkbox = h("div");
          if (showCheckbox) {
            checkbox = h(
              __unplugin_components_1,
              {
                // @ts-ignore
                checked: hasChecked,
                "onUpdate:checked": (value) => {
                  hasChecked.value = value;
                },
                title: checkboxTip
              },
              h("span", checkboxText || "不再提示")
              // checkboxText || "不再提示",
            );
          }
          const btns = h(
            "div",
            {
              style: {
                display: "inline-flex",
                gap: "10px"
              }
            },
            [
              h(
                Button,
                {
                  onClick: () => {
                    d.destroy();
                    if (showCheckbox) {
                      reslove([false, hasChecked.value]);
                    } else {
                      reslove([false, false]);
                    }
                  }
                },
                h("span", negativeText || "取消")
              ),
              h(
                Button,
                {
                  type: "primary",
                  onClick: () => {
                    if (showCheckbox) {
                      if (showAgainKey) {
                        data[showAgainKey] = hasChecked.value;
                        localStorage.setItem("notShowAgain", JSON.stringify(data));
                      }
                      reslove([true, hasChecked.value]);
                    } else {
                      reslove([true, true]);
                    }
                    d.destroy();
                  }
                },
                h("span", positiveText || "继续")
              )
            ]
          );
          return h(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%"
              }
            },
            [checkbox, btns]
          );
        },
        positiveText: positiveText || "继续",
        negativeText: negativeText || "取消",
        onPositiveClick: () => {
          reslove([true, true]);
        },
        onNegativeClick: () => {
          reslove([false, false]);
        },
        onClose: () => {
          reslove([false, false]);
        },
        onMaskClick: () => {
          reslove([false, false]);
        }
      });
    })
  };
};
const useBili = () => {
  const presetOptions = ref({});
  const handlePresetOptions = (preset) => {
    presetOptions.value = preset;
  };
  return { handlePresetOptions, presetOptions };
};
export {
  useBili as a,
  useConfirm as u
};
