<div class="{classes}">{label}</div>
<slot />

<script>
  import { getContext } from "svelte";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import classNames from "classnames";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls } = $config;
  let prefixCls = getPrefixCls("select");

  // ********************** Props **********************
  // The value shown to the user
  export let label;

  // ********************** /Props **********************
  let classes;

  $: classes = classNames(`${prefixCls}-item`, `${prefixCls}-item-group`);
</script>
