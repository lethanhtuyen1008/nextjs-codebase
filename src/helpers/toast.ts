import { toast as toastBase, ToastContent, ToastOptions } from 'react-toastify';

const baseOptions: ToastOptions = {
  onOpen: () => {},
};

export const toast = {
  success(content: ToastContent, options?: ToastOptions | undefined) {
    return toastBase.success(content, { ...baseOptions, ...options });
  },

  info(content: ToastContent, options?: ToastOptions | undefined) {
    return toastBase.info(content, { ...baseOptions, ...options });
  },

  error(content: ToastContent, options?: ToastOptions | undefined) {
    return toastBase.error(content, { ...baseOptions, ...options });
  },

  warning(content: ToastContent, options?: ToastOptions | undefined) {
    return toastBase.warning(content, { ...baseOptions, ...options });
  },

  dark(content: ToastContent, options?: ToastOptions | undefined) {
    return toastBase.dark(content, { ...baseOptions, ...options });
  },

  warn(content: ToastContent, options?: ToastOptions | undefined) {
    return toastBase.warn(content, { ...baseOptions, ...options });
  },
};
