{#if visible}
  <span
    class="{wrapperClasses}"
    style="{tagStyle}"
    transition:fadeScale="{{ duration: 200, easing: cubicInOut, baseScale: 0.5 }}">
    <slot />
    {#if closable}
      <CloseOutlined on:click="{onClose}" />
    {/if}
  </span>
{/if}

<script>
  import { CloseOutlined } from "@/components/icons";
  import { fadeScale } from "@/components/_util/transitions";
  import { cubicInOut } from "svelte/easing";
  import classNames from "classnames";
  import { string as toStyle } from "to-style";
  import { PresetStatusColors, PresetColors } from "../_util/colors";
  import { createEventDispatcher, getContext } from "svelte";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const dispatch = createEventDispatcher();
  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction } = $config;
  let prefixCls = getPrefixCls("tag");

  // ********************** Props **********************

  // Whether the tag shoul be closable
  export let closable = false;
  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };
  // Color of the tag
  export let color = "";

  // ********************** /Props **********************

  // Whether the tag is shown
  let visible = true;
  // Clases for the tag wrapper
  let wrapperClasses;
  // this allows us to get the style as object e.x  style={{'color':'red'}}.
  export let style = null;
  // style object for the tag that includes custom color
  let tagStyle;

  const PresetColorRegex = new RegExp(
    `^(${PresetColors.join("|")})(-inverse)?$`
  );
  const PresetStatusColorRegex = new RegExp(
    `^(${PresetStatusColors.join("|")})$`
  );

  $: wrapperClasses = classNames(prefixCls, {
    ...classObj,
    [`${prefixCls}-${color}`]: isPresetColor(),
    [`${prefixCls}-has-color`]: color && !isPresetColor(),
    [`${prefixCls}-rtl`]: direction === "rtl"
  });

  // Convert the style object to a style string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  $: tagStyle = toStyle({
    backgroundColor: color && !isPresetColor() ? color : undefined,
    ...style
  });

  function onClose(event) {
    let prevented = false;
    event.preventClose = () => {
      prevented = true;
    };
    dispatch("close", event);
    if (!prevented) visible = false;
  }

  function isPresetColor() {
    if (!color) return false;
    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  }
</script>