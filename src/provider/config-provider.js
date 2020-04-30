import { writable } from "svelte/store";
import allLocale from "./locale";

export const CONFIG_KEY = "$config";
export function configProvider({
  getPopupContainer,
  prefixCls = "ant",
  csp,
  locale = "en_US",
  pageHeader,
  size,
  direction,
  space
} = {}) {
  const localeDefinitions = allLocale[locale];
  let config = {
    getPrefixCls: getPrefixCls,
    csp,
    localeDefinitions,
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
