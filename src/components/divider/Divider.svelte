<div class="{classes}" {style} role="separator">
  {#if hasContent}
    <span class="{prefixCls}-inner-text">
      <slot />
    </span>
  {/if}
</div>

<script>
  import { getContext } from "svelte";
  import classNames from "classnames";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import { string as toStyle } from "to-style";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction } = $config;
  let prefixCls = getPrefixCls("divider");

  // ********************** Props **********************

  // Type - either horizontal or vertical
  export let type = "horizontal";
  export let dashed = false;
  // Allows title to be added inside the Divider. Can be center, right, or left
  export let orientation = "center";
  // Removes header style from title text
  export let plain = false;

  // this exports the classObj as class so the user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // this allows us to get the style as object e.x  style={{'color':'red'}}.
  export let style = null;

  // ********************** Props **********************

  let classes;
  let hasContent = $$props.$$slots;

  // we make the classObj an object so we can add it to the classNames func.
  $: if (typeof classObj === "string") {
    classObj = {
      [classObj]: true
    };
  }

  // since we are not adding any style we just convert the style object to a style sting if it is not already a string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  $: classes = classNames(prefixCls, {
    ...classObj,
    [`${prefixCls}-${type}`]: true,
    [`${prefixCls}-dashed`]: dashed,
    [`${prefixCls}-with-text`]: hasContent,
    [`${prefixCls}-with-text-${orientation}`]: hasContent,
    [`${prefixCls}-plain`]: plain,
    [`${prefixCls}-rtl`]: direction === "rtl"
  });
</script>
