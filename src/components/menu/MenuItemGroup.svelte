<li class="{prefixCls}">
  <div class="{prefixCls}-title">{title}</div>
  <ul class="{prefixCls}-list">
    <slot />
  </ul>
</li>

<script>
  import classNames from "classnames";
  import { getContext } from "svelte";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls } = $config;
  const prefixCls = getPrefixCls("menu-item-group");

  // ********************** Props **********************

  // Title for the item group
  export let title;
</script>
