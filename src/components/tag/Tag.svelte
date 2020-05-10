{#if localVisible}
  <span
    class="{wrapperClasses}"
    style="{tagStyle}"
    transition:fadeScale="{{ duration: disableTransition ? 0 : 200, easing: cubicInOut, baseScale: 0.5 }}"
    on:click>
    {#if icon}
      <svelte:component this="{icon}" />
    {/if}
    <span>
      <slot />
    </span>
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
  // Icon for the tag
  export let icon = null;
  // Disable the transition so the tag will just appear or disappear
  export let disableTransition = false;
  // Allow the user to control visibility manually
  export let visible = true;
  // Checkable tags
  export let checked = null;

  // ********************** /Props **********************

  // Used when the user clicks to close icon
  let localVisible = true;
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

  // Visibility variables should always match
  $: localVisible = visible;

  $: if (typeof classObj === "string") {
    classObj = {
      [classObj]: true
    };
  }

  $: wrapperClasses = classNames(prefixCls, {
    ...classObj,
    [`${prefixCls}-${color}`]: isPresetColor(),
    [`${prefixCls}-has-color`]: color && !isPresetColor(),
    [`${prefixCls}-checkable`]: checked !== null,
    [`${prefixCls}-checkable-checked`]: checked,
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
    if (!prevented) localVisible = false;
  }

  function isPresetColor() {
    if (!color) return false;
    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  }
</script>
