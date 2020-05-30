<label class="{wrapperClassString}" {style} on:mouseenter on:mouseleave>
  <BaseCheckbox
    {...radioProps}
    disabled="{!!isDisabled}"
    checked="{!!isChecked}"
    {prefixCls}
    bind:focus
    type="radio"
    bind:blur
    on:change="{onChange}" />
  <span bind:this="{childSlot}">
    <slot />
  </span>
</label>

<script>
  import { string as toStyle } from "to-style";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import omit from "lodash-es/omit";
  import { writable } from "svelte/store";
  import classNames from "classnames";
  import { createEventDispatcher, getContext } from "svelte";
  import BaseCheckbox from "../checkbox/BaseCheckbox.svelte";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************
  // the class prefix
  export let prefixCls = null;
  // this allows us to get the style as object
  export let style = null;
  // the radio value
  export let value = null;
  // disables the radio
  export let disabled = false;
  // allows you to bind:focus so you can programmatically focus the checkbox
  export let focus = null;
  // allows you to bind:blur so you can programmatically blur the checkbox
  export let blur = null;
  // Allows 2 way binding
  export let checked = null;

  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // since we are not adding any style we just convert the style object to a style sting if it is not already a string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction } = $config;
  prefixCls = prefixCls || getPrefixCls("radio");

  let context = getContext("radioGroupStore") || writable(null);

  let radioProps;
  let childSlot;
  let wrapperClassString;
  let isChecked;
  let isDisabled;

  $: radioProps = { ...$$restProps, value };

  $: if ($context) {
    radioProps.name = context.name;
  }

  $: if ($context && value === $context.value) {
    isChecked = true;
    checked = true;
  } else if ($context) {
    isChecked = false;
    checked = false;
  } else {
    isChecked = !!checked;
  }

  $: isDisabled = disabled || ($context && $context.disabled);

  $: if (childSlot && !childSlot.hasChildNodes()) {
    childSlot.remove();
  }

  $: wrapperClassString = classNames(classObj, {
    [`${prefixCls}-wrapper`]: true,
    [`${prefixCls}-wrapper-checked`]: isChecked,
    [`${prefixCls}-wrapper-disabled`]: isDisabled,
    [`${prefixCls}-wrapper-rtl`]: direction === "rtl"
  });

  function onChange({ detail }) {
    $context && $context.setValue(radioProps.value);
    checked = detail.target.checked;
    dispatch("change", detail);
  }
</script>
