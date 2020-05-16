<Radio {prefixCls} {...$$props}>
  <slot />
</Radio>

<script>
  import { getContext } from "svelte";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import Radio from "./Radio.svelte";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction } = $config;
  const prefixCls = getPrefixCls("radio-button");
</script>
