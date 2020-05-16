<label class="{wrapperClassString}" {style} on:mouseenter on:mouseleave>
  <BaseCheckbox
    {...radioProps}
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
  // allows you to bind:focus so you can programmatically focus the checkbox
  export let focus = null;
  // allows you to bind:blur so you can programmatically blur the checkbox
  export let blur = null;

  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };
  // ********************** /Props **********************

  // since we are not adding any style we just convert the style object to a style sting if it is not already a string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction } = $config;
  prefixCls = prefixCls || getPrefixCls("radio");

  let context = getContext("radioGroupContext") || writable(null);

  let radioProps;
  let childSlot;
  let wrapperClassString;

  $: radioProps = { ...$$restProps };

  $: if ($context) {
    radioProps.name = context.name;
    radioProps.checked = $$props.value === $context.value;
    radioProps.disabled = $$props.disabled || $context.disabled;
  }

  $: if (childSlot && !childSlot.hasChildNodes()) {
    childSlot.remove();
  }

  $: wrapperClassString = classNames(classObj, {
    [`${prefixCls}-wrapper`]: true,
    [`${prefixCls}-wrapper-checked`]: radioProps.checked,
    [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
    [`${prefixCls}-wrapper-rtl`]: direction === "rtl"
  });

  function onChange({ detail }) {
    $context && $context.setValue(radioProps.value);
    dispatch("change", detail);
  }
</script>
