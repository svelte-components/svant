<label
  class="{classString}"
  {style}
  on:mouseenter="{e => {
    dispatch('mouseenter', e);
  }}"
  on:mouseleave="{e => {
    dispatch('mouseleave', e);
  }}">
  <BaseCheckbox
    {prefixCls}
    class="{checkboxClass}"
    {...checkboxProps}
    bind:focus
    bind:blur
    on:change="{({ detail }) => onChange(detail)}" />
  <span bind:this="{childSlot}">
    <slot />
  </span>
</label>

<script>
  import {
    createEventDispatcher,
    getContext,
    onDestroy,
    onMount
  } from "svelte";
  import { string as toStyle } from "to-style";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import BaseCheckbox from "./BaseCheckbox.svelte";
  import { writable } from "svelte/store";
  import classNames from "classnames";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************
  // the checkbox value
  export let value = null;
  // is checkbox in intermediate state
  export let indeterminate = false;
  // disables the checkbox
  export let disabled = false;
  // this allows us to get the style as object
  export let style = null;
  // allows you to bind:focus so you can programmatically focus the checkbox
  export let focus = null;
  // allows you to bind:blur so you can programmatically blur the checkbox
  export let blur = null;

  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };
  // ********************** /Props **********************

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls } = $config;
  const prefixCls = getPrefixCls("checkbox");

  let context = getContext("groupContext") || writable(null);

  let _prevValue = value;
  let classString;
  let checkboxClass;
  let checkboxProps;
  let childSlot = null;

  // since we are not adding any style we just convert the style object to a style sting if it is not already a string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  $: {
    checkboxProps = { disabled, ...$$restProps };

    if ($context) {
      checkboxProps.name = $context.name;
      checkboxProps.checked = $context.value.indexOf(value) !== -1;
      checkboxProps.disabled = disabled || $context.disabled;
    }
    classString = classNames(classObj, {
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-wrapper-checked`]: checkboxProps.checked,
      [`${prefixCls}-wrapper-disabled`]: checkboxProps.disabled
    });
    checkboxClass = classNames({
      [`${prefixCls}-indeterminate`]: indeterminate
    });
  }

  $: {
    if (value !== _prevValue) {
      $context && $context.cancelValue(_prevValue);
      $context && $context.registerValue(value);
    }
    _prevValue = value;
  }

  $: if (childSlot && !childSlot.hasChildNodes()) {
    childSlot.remove();
  }
  onMount(() => {
    $context && $context.registerValue(value);
    let valid = "checked" in $$props || $context || !("value" in $$props);
    if (!valid) {
      console.warn("`value` is not validate prop, do you mean `checked`?");
    }
  });

  onDestroy(() => {
    $context && $context.cancelValue(value);
  });

  function onChange(detail) {
    dispatch("change", detail);
    $context && $context.toggleOption({ value });
  }
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
