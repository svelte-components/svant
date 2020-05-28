<div
  class="{classString}"
  {style}
  on:mouseenter
  on:mouseleave
  bind:this="{groupNode}"
  id="{$$props.id}">
  {#if options.length}
    {#each getOptions() as option (option.value)}
      <Radio
        key="{option.key}"
        {prefixCls}
        disabled="{option.disabled || disabled}"
        value="{option.value}"
        checked="{value === option.value}"
        style="{option.style}">
        {option.label}
      </Radio>
    {/each}
  {:else}
    <slot />
  {/if}
</div>

<script>
  import {
    createEventDispatcher,
    getContext,
    onMount,
    setContext
  } from "svelte";
  import { string as toStyle } from "to-style";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import { writable } from "svelte/store";
  import classNames from "classnames";
  import Radio from "./Radio.svelte";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************
  // the options of the radio group, can be a list of strings
  // or a list of objects {label:"a", value:"a", disabled:false}
  export let options = [];
  // sets the radio button style
  export let buttonStyle = "outline";
  // selected radio value
  export let value = null;
  // is the radio group disabled
  export let disabled = null;
  // is the radio group disabled
  export let name = null;
  // this allows us to get the style as object
  export let style = null;

  // change the radio sizes
  let customizeSize = null;
  export { customizeSize as size };
  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = {};
  export { classObj as class };
  // ********************** /Props **********************

  // since we are not adding any style we just convert the style object to a style sting if it is not already a string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction, size } = $config;
  const prefixCls = getPrefixCls("radio");
  const groupPrefixCls = `${prefixCls}-group`;
  let classString;
  let groupNode;
  let context = writable({ value, disabled, name, setValue });

  setContext("radioGroupStore", context);

  $: classString = classNames(
    groupPrefixCls,
    `${groupPrefixCls}-${buttonStyle}`,
    {
      [`${groupPrefixCls}-${customizeSize || size}`]: customizeSize || size,
      [`${groupPrefixCls}-rtl`]: direction === "rtl"
    },
    classObj
  );

  $: $context = {
    value,
    disabled,
    name,
    setValue
  };
  onMount(() => {
    classObj[`${groupPrefixCls}-button-group`] = hasButtonGroupChild();
  });

  function getOptions() {
    return options.map(option => {
      if (typeof option === "string") {
        return {
          label: option,
          key: option,
          value: option,
          style: null
        };
      }
      return option;
    });
  }

  function setValue(v) {
    value = v;
    dispatch("change", value);
  }
  function hasButtonGroupChild() {
    return (
      groupNode &&
      groupNode.getElementsByClassName(`${prefixCls}-button-wrapper`).length
    );
  }
</script>
