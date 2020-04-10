<footer class={classes} {...$$restProps}>
  <slot />
</footer>

<script>
  import { getContext, setContext } from "svelte";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import classNames from "classnames";

  let customizePrefixCls;
  export { customizePrefixCls as prefixCls };
  let customClasses;
  export { customClasses as class };
  const config = getContext(CONFIG_KEY) || configProvider();

  const getPrefixCls = $config.getPrefixCls;
  const prefixCls = getPrefixCls("layout-footer", customizePrefixCls);

  $: classes = classNames(prefixCls, customClasses);
</script>
