<input
  {placeholder}
  type="text"
  class="{wrapperClasses}"
  bind:value
  on:input
  on:keyup="{onKeyup}" />

<script>
  import { getContext, createEventDispatcher } from "svelte";
  import classNames from "classnames";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const dispatch = createEventDispatcher();

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls } = $config; // TODO: will need size and direction
  let prefixCls = getPrefixCls("input");

  // ********************** Props **********************

  export let placeholder = "";
  // User should use bind:value
  export let value;
  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  $: if (typeof classObj === "string") {
    classObj = {
      [classObj]: true
    };
  }

  $: wrapperClasses = classNames(prefixCls, {
    ...classObj
  });

  const onKeyup = event => {
    if (event.key === "Enter") {
      dispatch("enter", value);
    }
  };
</script>
