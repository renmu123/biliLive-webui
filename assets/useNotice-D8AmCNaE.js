import { u as useNotification } from "./use-notification-Bzrm1lu9.js";
function useNotice() {
  const { info, success, warning, error } = useNotification();
  return {
    info: (input) => {
      const iOptions = {
        duration: 1500,
        keepAliveOnHover: true
      };
      if (typeof input === "object") {
        return info({
          ...iOptions,
          ...input
        });
      } else {
        return info({
          ...iOptions,
          title: input
        });
      }
    },
    success: (input) => {
      const iOptions = {
        duration: 1e3,
        keepAliveOnHover: true
      };
      if (typeof input === "object") {
        return success({
          ...iOptions,
          ...input
        });
      } else {
        return success({
          ...iOptions,
          title: input
        });
      }
    },
    warning: (input) => {
      const iOptions = {
        duration: 1500,
        keepAliveOnHover: true
      };
      if (typeof input === "object") {
        return warning({
          ...iOptions,
          ...input
        });
      } else {
        return warning({
          ...iOptions,
          title: input
        });
      }
    },
    error: (input) => {
      const iOptions = {
        duration: 2e3,
        keepAliveOnHover: true
      };
      if (typeof input === "object") {
        return error({
          ...iOptions,
          ...input
        });
      } else {
        return error({
          ...iOptions,
          title: input
        });
      }
    }
  };
}
export {
  useNotice as u
};
