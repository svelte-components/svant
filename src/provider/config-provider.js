import { writable } from "svelte/store";
import defaultLocale from "./locale/default";

export const CONFIG_KEY = "$config";
export function configProvider({
  getPopupContainer,
  prefixCls = "ant",
  csp,
  locale = defaultLocale,
  pageHeader,
  size,
  direction,
  space
} = {}) {
  let config = {
    getPrefixCls: getPrefixCls,
    csp,
    locale,
    direction,
    space,
    getPopupContainer,
    pageHeader,
    size
  };
  function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;

    return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
  }
  return writable(config);
}
