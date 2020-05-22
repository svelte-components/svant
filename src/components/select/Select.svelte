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
      {#if !isSingleMode && $store.selectedValue}
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
      {#if (searchable || !isSingleMode) && $store.options.length}
        <span
          class="{prefixCls}-selection-search"
          style="{!isSingleMode ? `width: ${inputWidth}` : ''}">
          <input
            autocomplete="off"
            class="{prefixCls}-selection-search-input"
            role="combobox"
            aria-haspopup="listbox"
            aria-autocomplete="list"
            bind:value="{$store.searchValue}"
            on:input="{onSearchInput}"
            style="opacity: {$store.optionsVisible ? '1' : '0'};" />
        </span>
      {/if}

      {#if showPlaceholder}
        <span class="{prefixCls}-selection-placeholder">
          {#if !$store.searchValue}{placeholder}{/if}
        </span>
      {:else if isSingleMode}
        <span class="{prefixCls}-selection-item">
          {#if !$store.searchValue}{$store.selectedLabel || ''}{/if}
        </span>
      {/if}
    </div>
    {#if isSingleMode}
      <span
        class="{iconWrapperClasses}"
        unselectable="on"
        aria-hidden="true"
        style="user-select: none;">
        {#if $store.optionsVisible && searchable}
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

  <div class="{dropdownClasses}" bind:this="{dropdownNode}">
    <div
      class="{noOptions ? `${prefixCls}-item-empty` : ''}"
      style="max-height: 256px; overflow-y: auto; overflow-anchor: none;">
      <div class="" style="display: flex; flex-direction: column;">
        {#if $store.pendingTag}
          <Option value="{$store.pendingTag}" label="{$store.pendingTag}" />
        {/if}
        <slot />
        {#each $store.addedTags || [] as addedTag (addedTag.id)}
          <Option value="{addedTag.value}" label="{addedTag.value}" />
        {/each}
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
    onBackspace,
    onArrowUp,
    onArrowDown,
    onEnter
  } from "@/components/_util/events";
  import Option from "./Option.svelte";
  import { fadeScale } from "@/components/_util/transitions";
  import { cubicInOut } from "svelte/easing";
  import { nanoid } from "nanoid";
  import { string as toStyle } from "to-style";
  import classNames from "classnames";
  import calculateSize from "calculate-size";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, size: configSize } = $config;
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
  // Custom size of the select input
  export let size = null;

  // ********************** /Props **********************

  // We need to pre-render the options very quickly to grab the default Label value
  // This will be set to false onMount
  let hideOptions = true;
  // Keeps track of focused state
  let selectFocused = false;
  // Get the txt of the Selected label
  let selectedLabel = "";
  // classes for the select
  let classes;
  // dropdown classes
  let dropdownClasses;
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
  // Register events and save the unbind function for destroy - set onMount
  let unbindClickOutside;
  let unbindEscapePress;
  let unbindBackspacePress;
  let unbindArrowUpPress;
  let unbindArrowDownPress;
  let unbindEnterPress;
  // function to determine if placeholder displays
  let showPlaceholder = false;
  // Input needs an explicit with in multiple mode
  let inputWidth = "4px";
  // keep track of single mode
  let isSingleMode = true;
  // Set the dropdown to the store so we can use it in child options
  let dropdownNode;
  // For the dropdown transition to work properly we store dropdownVisible in a separate variable
  let dropdownVisible;

  //********* TODO: config-provider RTL ******//

  let store = writable({
    optionsVisible: false,
    searchFunction: null,
    searchValue: "",
    activeValue: "",
    options: [],
    addedTags: [],
    allOptionNodes: [],
    mode
  });

  // We use this function in the option as well when it's clicked
  $store.handleSelectPendingTag = async () => {
    if (mode === "tags" && $store.searchValue) {
      $store.pendingTag = null;
      $store.searchValue = "";
      $store.activeValue = "";
    }
  };

  setContext("store", store);

  onMount(async () => {
    $store.selectedValue = value;
    $store.selectedLabel = selectedLabel;
    $store.dropdownNode = dropdownNode;

    // Make sure all options all available and set them to the store
    await tick();
    const optionNodes = dropdownNode.querySelectorAll(
      `.${prefixCls}-item-option`
    );
    optionNodes.forEach(node => {
      $store.options = [...$store.options, node.dataset.optionValue];
    });

    // Set event listeners for key presses
    const wrapper = document.getElementById(wrapperId);
    unbindClickOutside = onClickOutside(wrapper, () => {
      selectFocused = false;
      closeDropdown();
    });
    unbindEscapePress = onEscape(() => {
      closeDropdown();
    });
    unbindArrowUpPress = onArrowUp(event => {
      handleArrowPress(event, "ArrowUp");
    });
    unbindArrowDownPress = onArrowDown(event => {
      handleArrowPress(event, "ArrowDown");
    });
    unbindBackspacePress = onBackspace(handleBackspacePress);
    unbindEnterPress = onEnter(handleEnterPress);
  });

  onDestroy(() => {
    // remove event listeners added in onMount
    if (typeof document !== "undefined") {
      unbindClickOutside();
      unbindEscapePress();
      unbindBackspacePress();
      unbindArrowUpPress();
      unbindArrowDownPress();
      unbindEnterPress();
    }
  });

  $: $store.mode = mode;

  $: isSingleMode = !["multiple", "tags"].includes(mode);

  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  // If the user passes a search function we want the options to use it
  $: if (!searchable && isSingleMode) {
    $store.searchFunction = null;
  } else {
    $store.searchFunction =
      searchFunction || ((input, option) => option.label.indexOf(input) >= 0);
  }

  // We need to store visibilty in 2 separate variables so the transition can work
  // dropdownVisible is only used to set the '...-open' classes. Everything else uses $store.optionsVisible
  $: if ($store.optionsVisible && !dropdownVisible) {
    dropdownVisible = true;
  } else if (!$store.optionsVisible && dropdownVisible) {
    dropdownVisible = false;
  }

  $: classes = classNames(prefixCls, {
    [`${prefixCls}-single`]: isSingleMode,
    [`${prefixCls}-sm`]: size === "small" || configSize === "small",
    [`${prefixCls}-lg`]: size === "large" || configSize === "large",
    [`${prefixCls}-multiple`]: !isSingleMode,
    [`${prefixCls}-show-arrow`]: true,
    [`${prefixCls}-open`]: dropdownVisible,
    [`${prefixCls}-focused`]: selectFocused,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-allow-clear`]: clearable,
    [`${prefixCls}-show-search`]: searchable || !isSingleMode
  });

  $: dropdownClasses = classNames({
    [`${prefixCls}-dropdown`]: true,
    [`${prefixCls}-dropdown-placement-bottomLeft`]: true,
    [`${prefixCls}-dropdown-open`]: dropdownVisible
  });

  $: showClearIcon =
    isInputHovered &&
    clearable &&
    $store.selectedLabel &&
    !($store.optionsVisible && searchable);

  $: iconWrapperClasses = classNames({
    [`${prefixCls}-arrow`]: !showClearIcon,
    [`${prefixCls}-clear`]: showClearIcon,
    [`${prefixCls}-arrow-loading`]: loading
  });

  // Keep value up to date for 2 way binding
  $: if ($store.selectedValue) {
    value = $store.selectedValue;
  }

  // dispatch change event when the value changes
  $: if (value) {
    dispatch("change", { value });
  }

  $: if (!$store.optionsVisible) {
    // Allow transition to finish before clearing search
    setTimeout(() => {
      if ($store.searchValue) $store.searchValue = "";
    }, 200);
  }

  // When the search value changes, we need to know when
  // there are no options so that we can display an empty message
  $: if (typeof $store.searchValue) {
    $store.allOptionNodes =
      $store.dropdownNode &&
      $store.dropdownNode.querySelectorAll(`.${prefixCls}-item-option`);
  }

  $: noOptions =
    $store.allOptionNodes &&
    !$store.allOptionNodes.length &&
    !$store.pendingTag &&
    !$store.addedTags.length;

  $: showPlaceholder = (function() {
    if (!placeholder) return false;
    if (!isSingleMode && $store.selectedValue && !$store.selectedValue.length) {
      return true;
    }
    if (!$store.selectedValue) return true;
  })();

  // Set input width as the user types to allow maximum space for selected options
  $: if (
    typeof document !== "undefined" &&
    document.getElementById(wrapperId)
  ) {
    const item = document
      .getElementById(wrapperId)
      .querySelector(`.${prefixCls}`);
    const size = calculateSize($store.searchValue, {
      font: "Arial",
      fontSize: window.getComputedStyle(item).fontSize
    });
    inputWidth = `${size.width + $store.searchValue.length}px`;
  }

  // In multiple mode, make sure focus stays on
  // the input even after selecting/deselecting options
  $: if (
    typeof document !== "undefined" &&
    !isSingleMode &&
    $store.selectedValue &&
    $store.optionsVisible
  ) {
    const wrapper = document.getElementById(wrapperId);
    const input = wrapper.querySelector(`.${prefixCls}-selection-search-input`);
    input.focus();
  }

  // used in click outside and escape press events
  function closeDropdown() {
    if ($store.optionsVisible) {
      $store.pendingTag = null;
      $store.optionsVisible = false;
    }
  }

  // Opening the select dropdown
  // ensures that the proper item is set to active when the dropdown opens
  function onSelectClick() {
    if (!disabled) {
      selectFocused = true;

      const optionsArray = $store.allOptionNodes
        ? Array.from($store.allOptionNodes)
        : [];
      const firstSelected = optionsArray.find(option => {
        return option.classList.contains(`${prefixCls}-item-option-selected`);
      });

      if (!$store.optionsVisible) {
        if (firstSelected) {
          $store.activeValue = firstSelected.dataset.optionValue;
        } else {
          $store.activeValue = $store.options[0];
        }
      }

      $store.optionsVisible = true;
    }
  }

  // Clear icon is clicked
  function onClearableClicked() {
    store.set({
      ...$store,
      selectedValue: "",
      selectedLabel: "",
      optionsVisible: false
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

  async function onSearchInput() {
    $store.activeValue = "";

    if (!$store.searchValue) {
      $store.activeValue = $store.options[0];
    } else {
      await tick();
      const firstVisibleOption = $store.allOptionNodes[0];
      if (firstVisibleOption) {
        $store.activeValue = firstVisibleOption.dataset.optionValue;
      }
    }

    // Check if the searched value is already an added tag
    const matchingAddedTag = $store.addedTags.find(
      tag => tag.value === $store.searchValue
    );
    if (matchingAddedTag) {
      $store.pendingTag = "";
      $store.activeValue = matchingAddedTag.value;

      // Check if search was cleared and there is a pending tag
    } else if (!$store.searchValue && $store.pendingTag) {
      $store.pendingTag = "";

      // check if we need to add a pending tag
    } else if (
      mode === "tags" &&
      !$store.options.includes($store.searchValue)
    ) {
      $store.pendingTag = $store.searchValue;
      $store.activeValue = $store.pendingTag;
    }
  }

  function handleArrowPress(event, key) {
    if ($store.optionsVisible) {
      event.preventDefault();
      navigateDropdown(key);
    }
  }

  // when using the arrow keys we want to skip over disabled options
  function findNonDisabledValue(direction, startNode) {
    while (
      startNode &&
      startNode.classList.contains(`${prefixCls}-item-option-disabled`)
    ) {
      startNode = startNode[`${direction}ElementSibling`];
    }
    return startNode && startNode.dataset.optionValue;
  }

  function navigateDropdown(key) {
    const activeDomOption = dropdownNode.querySelector(
      `.${prefixCls}-item-option-active`
    );

    let previousDomOption =
      activeDomOption && activeDomOption.previousElementSibling;
    let nextDomOption = activeDomOption && activeDomOption.nextElementSibling;

    // Infinitly navigate through the list
    let localScrollBehavior = "smooth";
    if (!previousDomOption && $store.allOptionNodes.length > 1) {
      localScrollBehavior = "auto";
      const lastOption =
        $store.allOptionNodes[$store.allOptionNodes.length - 1];
      previousDomOption = lastOption;
    }
    if (!nextDomOption && $store.allOptionNodes.length > 1) {
      localScrollBehavior = "auto";
      const firstOption = $store.allOptionNodes[0];
      nextDomOption = firstOption;
    }

    const previousValue = findNonDisabledValue("previous", previousDomOption);
    const nextValue = findNonDisabledValue("next", nextDomOption);

    if (key === "ArrowUp" && previousDomOption) {
      $store.activeValue = previousValue;
      previousDomOption.scrollIntoView({
        behavior: localScrollBehavior,
        block: "nearest",
        inline: "start"
      });
    } else if (key === "ArrowDown" && nextDomOption) {
      $store.activeValue = nextValue;
      nextDomOption.scrollIntoView({
        behavior: localScrollBehavior,
        block: "nearest",
        inline: "start"
      });
    }
  }

  function handleBackspacePress() {
    if (!isSingleMode && $store.selectedValue.length && !$store.searchValue) {
      const wrapper = document.getElementById(wrapperId);
      const input = wrapper.querySelector(
        `.${prefixCls}-selection-search-input`
      );
      // Check if input has focus
      if (document.activeElement === input) {
        const index = $store.selectedValue.length - 1;

        // Make sure to remove added tags
        if ($store.addedTags.length) {
          $store.addedTags = $store.addedTags.filter(
            tag => tag.value !== $store.selectedValue[index]
          );
        }

        removeOption(index);
      }
    }
  }

  function handleEnterPress() {
    if (!$store.optionsVisible && selectFocused) {
      $store.optionsVisible = true;
      return;
    }

    const activeNode = dropdownNode.querySelector(
      `.${prefixCls}-item-option-active`
    );
    if (
      $store.optionsVisible &&
      activeNode &&
      !activeNode.classList.contains(`${prefixCls}-item-option-disabled`)
    ) {
      const value = activeNode.dataset.optionValue;
      const label = activeNode.innerText;

      $store.handleSelectPendingTag();

      if (isSingleMode) {
        $store.selectedValue = value;
        $store.selectedLabel = label;
        $store.optionsVisible = false;
      } else if ($store.selectedValue.includes(value)) {
        // already selected - remove it
        $store.selectedValue = $store.selectedValue.filter(v => v !== value);
        $store.selectedLabel = $store.selectedLabel.filter(l => l !== label);

        $store.searchValue = "";

        if ($store.addedTags.length) {
          $store.addedTags = $store.addedTags.filter(
            tag => tag.value !== value
          );
        }
      } else {
        // select in multiple mode
        $store.selectedValue = [...$store.selectedValue, value];
        $store.selectedLabel = [...$store.selectedLabel, label];

        $store.searchValue = "";

        if (
          mode === "tags" &&
          !$store.options.find(option => option === value)
        ) {
          $store.addedTags = [
            ...$store.addedTags,
            { value, label: value, id: nanoid() }
          ];
        }
      }
    }
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
