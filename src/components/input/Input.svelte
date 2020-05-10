<input
  {placeholder}
  type="text"
  class="{prefixCls}"
  bind:value
  on:input
  on:keyup="{onKeyup}" />

<script>
  import { getContext, createEventDispatcher } from "svelte";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const dispatch = createEventDispatcher();

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls } = $config; // TODO: will need size and direction
  let prefixCls = getPrefixCls("input");

  // ********************** Props **********************

  export let placeholder = "";
  // User should use bind:value
  export let value;

  const onKeyup = event => {
    if (event.key === "Enter") {
      dispatch("enter", value);
    }
  };
</script>
