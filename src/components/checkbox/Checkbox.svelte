<label class="{classString}" {style} on:mouseenter on:mouseleave>
  <BaseCheckbox
    {prefixCls}
    class="{checkboxClass}"
    {...checkboxProps}
    disabled="{!!isDisabled}"
    checked="{!!isChecked}"
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
  // Allows 2 way binding
  export let checked = null;

  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };
  // ********************** /Props **********************

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls } = $config;
  const prefixCls = getPrefixCls("checkbox");

  let context = getContext("checkBoxGroupStore") || writable(null);

  let _prevValue = value;
  let classString;
  let checkboxClass;
  let checkboxProps;
  let isChecked;
  let isDisabled;
  let childSlot = null;

  // since we are not adding any style we just convert the style object to a style sting if it is not already a string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  $: isChecked = checked || ($context && $context.value.indexOf(value) !== -1);
  $: isDisabled = disabled || ($context && $context.disabled);

  $: {
    checkboxProps = { ...$$restProps };

    if ($context) {
      checkboxProps.name = $context.name;
    }

    classString = classNames(classObj, {
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-wrapper-checked`]: isChecked,
      [`${prefixCls}-wrapper-disabled`]: isDisabled
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
      console.warn(
        "`value` is not a valid prop when checkbox is not used in a group, do you mean `checked`?"
      );
    }
  });

  onDestroy(() => {
    $context && $context.cancelValue(value);
  });

  function onChange(detail) {
    checked = detail.target.checked;
    dispatch("change", detail);
    $context && $context.toggleOption({ value });
  }
</script>
