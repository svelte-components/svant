<div class="{classString}" {style} {...domProps}>
  {#if options.length}
    {#each getOptions() as option (option.value)}
      <Checkbox
        {prefixCls}
        key="{option.value.toString()}"
        disabled="{'disabled' in option ? option.disabled : disabled}"
        value="{option.value}"
        checked="{value.indexOf(option.value) !== -1}"
        onChange="{option.onChange}"
        className="{`${groupPrefixCls}-item`}"
        style="{option.style}">
        {option.label}
      </Checkbox>
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
  import omit from "lodash-es/omit";
  import { writable } from "svelte/store";
  import classNames from "classnames";

  import Checkbox from "./Checkbox.svelte";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************
  // the options of the checkbox group, can be a list of strings
  // or a list of objects {label:"a", value:"a", disabled:false}
  export let options = [];
  // the checked values
  export let value = [];
  // group name
  export let name = null;
  // sets the group as disabled
  export let disabled = false;
  // this allows us to get the style as object
  export let style = null;

  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };
  // ********************** /Props **********************

  // since we are not adding any style we just convert the style object to a style sting if it is not already a string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  let registeredValues = [];
  let domProps;
  let classString;

  let context = writable({
    value,
    disabled,
    name,
    toggleOption,
    registerValue,
    cancelValue
  });

  setContext("checkBoxGroupStore", context);

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction } = $config;
  const prefixCls = getPrefixCls("checkbox");
  const groupPrefixCls = `${prefixCls}-group`;

  $: domProps = omit($$restProps, ["value", "disabled"]);
  $: classString = classNames(groupPrefixCls, classObj, {
    [`${groupPrefixCls}-rtl`]: direction === "rtl"
  });

  $: $context = {
    value,
    disabled,
    name,
    toggleOption,
    registerValue,
    cancelValue
  };

  onMount(() => {
    value = $$props.value || $$props.defaultValue || [];
  });

  function getOptions() {
    return options.map(option => {
      if (typeof option === "string") {
        return {
          label: option,
          value: option
        };
      }
      return option;
    });
  }

  function cancelValue(value) {
    registeredValues = registeredValues.filter(val => val !== value);
  }

  function registerValue(value) {
    registeredValues = [...registeredValues, value];
  }

  function toggleOption(option) {
    const optionIndex = value.indexOf(option.value);
    const _value = [...value];
    if (optionIndex === -1) {
      _value.push(option.value);
    } else {
      _value.splice(optionIndex, 1);
    }
    if (!("value" in $$props)) {
      value = _value;
    }
    const options = getOptions();
    const changeValue = _value
      .filter(val => registeredValues.indexOf(val) !== -1)
      .sort((a, b) => {
        const indexA = options.findIndex(opt => opt.value === a);
        const indexB = options.findIndex(opt => opt.value === b);
        return indexA - indexB;
      });
    dispatch("change", changeValue);
  }
</script>
