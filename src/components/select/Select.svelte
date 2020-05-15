<div {style} class="wrapper {prefixCls}-wrapper" id="{wrapperId}">
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
      {#if mode === 'multiple' && $store.selectedValue}
        {#each $store.selectedValue as value, index (value)}
          <span
            class="{prefixCls}-selection-item"
            transition:fadeScale="{{ duration: 200, easing: cubicInOut, baseScale: 0.5 }}">
            <span class="{prefixCls}-selection-item-content">
              {$store.selectedLabel[index]}
            </span>
            <span
              class="{prefixCls}-selection-item-remove"
              on:click|stopPropagation="{() => {
                removeOption(index);
              }}"
              unselectable="on"
              aria-hidden="true"
              style="user-select: none;">
              <CloseOutlined />
            </span>
          </span>
        {/each}
      {/if}
      {#if searchable || mode === 'multiple'}
        <span
          class="{prefixCls}-selection-search"
          style="{mode === 'multiple' ? `width: ${inputWidth}` : ''}">
          <input
            autocomplete="off"
            class="{prefixCls}-selection-search-input"
            role="combobox"
            aria-haspopup="listbox"
            aria-autocomplete="list"
            readonly=""
            bind:value="{$store.searchValue}"
            style="opacity: {$store.popupVisible ? '1' : '0'};" />
        </span>
      {/if}

      {#if showPlaceholder}
        <span class="{prefixCls}-selection-placeholder">
          {#if !$store.searchValue}{placeholder}{/if}
        </span>
      {:else if mode !== 'multiple'}
        <span class="{prefixCls}-selection-item">
          {#if !$store.searchValue}{$store.selectedLabel || ''}{/if}
        </span>
      {/if}
    </div>
    {#if mode !== 'multiple'}
      <span
        class="{iconWrapperClasses}"
        unselectable="on"
        aria-hidden="true"
        style="user-select: none;">
        {#if $store.popupVisible && searchable}
          <SearchOutlined />
        {:else if showClearIcon}
          <span on:click|stopPropagation="{onClearableClicked}">
            <CloseCircleFilled />
          </span>
        {:else if loading}
          <LoadingOutlined spin />
        {:else}
          <DownOutlined />
        {/if}
      </span>
    {/if}
  </div>

  <div id="{popupId}" class="{popupClasses}">
    <div
      class="{noOptions ? `${prefixCls}-item-empty` : ''}"
      style="max-height: 256px; overflow-y: auto; overflow-anchor: none;">
      <div class="" style="display: flex; flex-direction: column;">
        <slot />
        {#if noOptions}
          <slot name="no-search-results">
            <div class="no-results">
              <InboxOutlined
                style="{{ fontSize: 34, color: 'rgba(0, 0, 0, .25)' }}" />
              <span>No Results</span>
            </div>
          </slot>
        {/if}
      </div>
    </div>
  </div>
</div>

<script>
  import {
    DownOutlined,
    LoadingOutlined,
    CloseCircleFilled,
    CloseOutlined,
    SearchOutlined,
    InboxOutlined
  } from "@/components/icons";
  import { writable } from "svelte/store";
  import {
    getContext,
    setContext,
    onMount,
    onDestroy,
    tick,
    createEventDispatcher
  } from "svelte";
  import {
    onClickOutside,
    onEscape,
    onBackspace
  } from "@/components/_util/events";
  import { fadeScale } from "@/components/_util/transitions";
  import { cubicInOut } from "svelte/easing";
  import { nanoid } from "nanoid";
  import { string as toStyle } from "to-style";
  import classNames from "classnames";
  import calculateSize from "calculate-size";
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
  // placeholder text
  export let placeholder = "";
  // allows select to have a search input
  export let searchable = false;
  // Custom search function
  export let searchFunction = null;
  // Mode can be multiple or tags
  export let mode = "single";

  // ********************** /Props **********************

  // We need to pre-render the options very quickly to grab the default Label value
  // This will be set to false onMount
  let hideOptions = true;
  // Get the txt of the Selected label
  let selectedLabel = "";
  // classes for the select
  let classes;
  // Popup classes
  let popupClasses;
  // icon wrapper classes
  let iconWrapperClasses;
  // Used to know if we should show the clear icon
  let isInputHovered = false;
  // whether to show the clear icon
  let showClearIcon = false;
  // Keep track of options so we can show an empty indicator
  let noOptions = false;
  // store the wrapper id
  let wrapperId = "select-wrapper-" + nanoid();
  // store a popup id so we can narrow down the popper if multiple selects are on the screen
  let popupId = "select-popup-" + nanoid();
  // Register events and save the unbind function for destroy - set onMount
  let unbindClickOutside;
  let unbindEscapePress;
  let unbindBackspacePress;
  // function to determine if placeholder displays
  let showPlaceholder = false;
  // Input needs an explicit with in multiple mode
  let inputWidth = "4px";

  let store = writable({
    popupVisible: false,
    searchFunction: null,
    searchValue: "",
    mode
  });
  setContext("store", store);

  onMount(async () => {
    $store.selectedValue = value;
    $store.selectedLabel = selectedLabel;

    const wrapper = document.getElementById(wrapperId);
    unbindClickOutside = onClickOutside(wrapper, () => {
      if ($store.popupVisible) $store.popupVisible = false;
    });
    unbindEscapePress = onEscape(() => {
      if ($store.popupVisible) $store.popupVisible = false;
    });
    unbindBackspacePress = onBackspace(() => {
      if (mode === "multiple" && $store.selectedValue.length) {
        const wrapper = document.getElementById(wrapperId);
        const input = wrapper.querySelector(
          `.${prefixCls}-selection-search-input`
        );
        // Check if input has focus
        if (document.activeElement === input) {
          const index = $store.selectedValue.length - 1;
          removeOption(index);
        }
      }
    });
  });

  onDestroy(() => {
    if (typeof document !== "undefined") {
      unbindClickOutside();
      unbindEscapePress();
      unbindBackspacePress();
    }
  });

  $: $store.mode = mode;

  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  $: $store.searchFunction = (function() {
    if (!searchable && mode !== "multiple") return null;
    return (
      searchFunction || ((input, option) => option.label.indexOf(input) >= 0)
    );
  })();

  $: classes = classNames(prefixCls, {
    [`${prefixCls}-single`]: mode !== "multiple",
    [`${prefixCls}-multiple`]: mode === "multiple",
    [`${prefixCls}-show-arrow`]: true,
    [`${prefixCls}-open`]: $store.popupVisible,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-allow-clear`]: clearable,
    [`${prefixCls}-show-search`]: searchable || mode === "multiple"
  });

  $: popupClasses = classNames({
    [`${prefixCls}-dropdown`]: true,
    [`${prefixCls}-dropdown-placement-bottomLeft`]: true,
    [`${prefixCls}-dropdown-open`]: $store.popupVisible
  });

  $: showClearIcon =
    isInputHovered &&
    clearable &&
    $store.selectedLabel &&
    !($store.popupVisible && searchable);

  $: iconWrapperClasses = classNames({
    [`${prefixCls}-arrow`]: !showClearIcon,
    [`${prefixCls}-clear`]: showClearIcon,
    [`${prefixCls}-arrow-loading`]: loading
  });

  // Keep value up to date for 2 way binding
  $: if ($store.selectedValue) {
    value = $store.selectedValue;
  }

  $: if (value) {
    dispatch("change", { value });
  }

  $: if (!$store.popupVisible) {
    // Allow transition to finish before clearing search
    setTimeout(() => {
      if ($store.searchValue) $store.searchValue = "";
    }, 200);
  }

  // We need to know when there are no options so that we can display an empty message
  $: (async function() {
    await tick();
    noOptions = $store.searchValue
      ? !document.getElementById(popupId).querySelector(`.${prefixCls}-item`)
      : false;
  })();

  $: showPlaceholder = (function() {
    if (!placeholder) return false;
    if (
      mode === "multiple" &&
      $store.selectedValue &&
      !$store.selectedValue.length
    )
      return true;
    if (!$store.selectedValue) return true;
  })();

  $: inputWidth = (function() {
    if (typeof document !== "undefined" && document.getElementById(wrapperId)) {
      const item = document
        .getElementById(wrapperId)
        .querySelector(`.${prefixCls}`);
      const size = calculateSize($store.searchValue, {
        font: "Arial",
        fontSize: window.getComputedStyle(item).fontSize
      });
      return `${size.width + $store.searchValue.length}px`;
    }
  })();

  // In multiple mode, make sure focus stays on
  // the input even after selecting/deselecting options
  $: (function() {
    if (
      typeof document !== "undefined" &&
      mode === "multiple" &&
      $store.selectedValue &&
      $store.popupVisible
    ) {
      const wrapper = document.getElementById(wrapperId);
      const input = wrapper.querySelector(
        `.${prefixCls}-selection-search-input`
      );
      input.focus();
    }
  })();

  //********* TODO: config-provider size and RTL ******//

  function onSelectClick() {
    if (!disabled) {
      $store.popupVisible = true;
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

  function removeOptionAttribute(attr, index) {
    // Need to assign with '=' so that we can use stopPropagation so that the dropdown doesn't open
    $store[attr] = $store[attr].filter(l => l !== $store[attr][index]);
  }

  function removeOption(index) {
    removeOptionAttribute("selectedValue", index);
    removeOptionAttribute("selectedLabel", index);
  }
</script>

<style>
  .wrapper {
    display: inline-block;
    position: relative;
    width: 100%;
  }

  .no-results {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    color: rgba(0, 0, 0, 0.45);
  }
</style>
