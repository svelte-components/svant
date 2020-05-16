<button
  {...$$restProps}
  type="button"
  role="switch"
  aria-checked="{checked}"
  {disabled}
  class="{classes}"
  {style}
  use:wave="{{ insertExtraNode: true }}"
  bind:this="{node}"
  on:keydown="{handleKeyDown}"
  on:click="{handleClick}"
  on:mouseup="{handleMouseUp}">
  {#if loading}
    <LoadingOutlined class="{`${prefixCls}-loading-icon`}" spin />
  {/if}
  <span class="{`${prefixCls}-inner`}">
    {#if checked}
      <slot name="checked" />
    {:else}
      <slot name="unchecked" />
    {/if}
  </span>
</button>

<script>
  import { string as toStyle } from "to-style";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import LoadingOutlined from "@/components/icons/LoadingOutlined.svelte";
  import classNames from "classnames";
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import wave from "@/components/_util/wave";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************
  // sets the default checked state
  export let defaultChecked = false;
  // disabled state of switch
  export let disabled = false;
  // set the loading status of button
  export let loading = false;
  // set the size of switch, can be set to `default` or `small`
  export let size = null;
  // the class prefix
  export let prefixCls = null;
  // this allows us to get the style as object
  export let style = null;
  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };
  // allows you to bind:focus so you can programmatically focus the switch
  export const focus = () => node.focus();
  // allows you to bind:blur so you can programmatically blur the switch
  export const blur = () => node.blur();
  // ********************** /Props **********************

  // since we are not adding any style we just convert the style object to a style sting if it is not already a string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }
  let node;
  let classes;
  let checked = false;
  $: if ("checked" in $$props) {
    checked = !!$$props.checked;
  }
  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction, size: configSize } = $config;
  prefixCls = prefixCls || getPrefixCls("switch");

  $: classes = classNames(classObj, {
    [prefixCls]: true,
    [`${prefixCls}-small`]: (size || configSize) === "small",
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-disabled`]: disabled
  });

  onMount(() => {
    if (!("checked" in $$props)) {
      checked = !!defaultChecked;
    }
    if ($$props["autoFocus"] && !disabled) {
      focus();
    }
  });

  function setChecked(newChecked) {
    if (disabled || loading) {
      return;
    }

    if (!("checked" in $$props)) {
      checked = newChecked;
    }
    dispatch("change", newChecked);
  }

  function handleClick() {
    setChecked(!checked);
    dispatch("click");
  }

  function handleKeyDown(e) {
    if (e.code === "ArrowLeft") {
      // Left
      setChecked(false);
    } else if (e.code === "ArrowRight") {
      // Right
      setChecked(true);
    }
  }

  // Handle auto focus when click switch in Chrome
  function handleMouseUp(e) {
    blur();
  }
</script>
