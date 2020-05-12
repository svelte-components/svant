<div {style} class="wrapper {prefixCls}-wrapper">
  <div
    class="{classes}"
    on:click="{onSelectClick}"
    on:mouseenter="{() => {
      isInputHovered = true;
    }}"
    on:mouseleave="{() => {
      isInputHovered = false;
    }}">
    <div class="{prefixCls}-selector">
      <span class="{prefixCls}-selection-item">
        {$store.selectedLabel || ''}
      </span>
    </div>
    <span
      class="{iconWrapperClasses}"
      unselectable="on"
      aria-hidden="true"
      style="user-select: none;">
      {#if isInputHovered && clearable}
        <span on:click|stopPropagation="{onClearableClicked}">
          <CloseCircleFilled />
        </span>
      {:else if loading}
        <LoadingOutlined spin />
      {:else}
        <DownOutlined />
      {/if}
    </span>
  </div>

  {#if $store.popupVisible}
    <div
      class="ant-select-dropdown ant-select-dropdown-placement-bottomLeft"
      class:hidden="{hideOptions}"
      transition:slide="{{ delay: 100, duration: 200, easing: quintOut }}">
      <div
        class=""
        style="max-height: 256px; overflow-y: auto; overflow-anchor: none;">
        <div class="" style="display: flex; flex-direction: column;">
          <slot />
        </div>
      </div>
    </div>
  {/if}
</div>

<script>
  import {
    DownOutlined,
    LoadingOutlined,
    CloseCircleFilled
  } from "@/components/icons";
  import { getContext } from "svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { writable } from "svelte/store";
  import { setContext, onMount, tick, createEventDispatcher } from "svelte";
  import { string as toStyle } from "to-style";
  import classNames from "classnames";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls } = $config;
  let prefixCls = getPrefixCls("select");

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  // User should use bind:value on the Select
  export let value;
  // this allows us to get the style as object e.x  style={{'color':'red'}}.
  export let style = null;
  // disabled state
  export let disabled = false;
  // loading state
  export let loading = false;
  // Allow the user to click a clear icon to unset the value
  export let clearable = false;

  // ********************** /Props **********************

  // We need to pre-render the options very quickly to grab the default Label value
  // This will be set to false onMount
  let hideOptions = true;
  // Get the txt of the Selected label
  let selectedLabel = "";
  // classes for the select
  let classes;
  // icon wrapper classes
  let iconWrapperClasses;
  // Used to know if we should show the clear icon
  let isInputHovered = false;

  let store = writable({
    popupVisible: false
  });
  setContext("store", store);

  onMount(async () => {
    // In order to get the default Label we need to render the dropdown
    // for a split second. We can set display:none for this so the user doesn't realize
    $store.popupVisible = true;
    await tick();
    $store.popupVisible = false;
    hideOptions = false;

    $store.selectedValue = value;
    $store.selectedLabel = selectedLabel;
  });

  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  $: classes = classNames(prefixCls, {
    [`${prefixCls}-single`]: true,
    [`${prefixCls}-show-arrow`]: true,
    [`${prefixCls}-open`]: $store.popupVisible,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-allow-clear`]: clearable
  });

  $: iconWrapperClasses = classNames({
    [`${prefixCls}-arrow`]: !(isInputHovered && clearable),
    [`${prefixCls}-clear`]: isInputHovered && clearable,
    [`${prefixCls}-arrow-loading`]: loading
  });

  // Keep value up to date for 2 way binding
  $: if ($store.selectedValue) {
    value = $store.selectedValue;
  }

  $: if (value) {
    dispatch("change", { value });
  }

  // TODO: Escape should close
  // TODO: click outside should close
  // TODO: config-provider size and RTL

  function onSelectClick() {
    if (!disabled) {
      $store.popupVisible = !$store.popupVisible;
    }
  }

  function onClearableClicked() {
    store.set({
      ...$store,
      selectedValue: "",
      selectedLabel: "",
      popupVisible: false
    });
  }
</script>

<style>
  .hidden {
    display: none;
  }

  .wrapper {
    display: inline-block;
    position: relative;
    width: 100%;
  }
</style>
