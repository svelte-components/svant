<div {style} class="wrapper {wrapperClasses}" id="{wrapperId}">
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
      {#if !isSingleMode && $selectStore.selectedValue}
        {#each $selectStore.selectedValue as value, index (value)}
          {#if tagProps}
            {#if !maxTagDisplayCount || (maxTagDisplayCount && index < maxTagDisplayCount)}
              <span
                on:click|stopPropagation="{currentTagAttributes[index].onClick}">
                <Tag
                  {...currentTagAttributes[index].props}
                  on:close="{currentTagAttributes[index].onClose}">
                  {tagLabelDisplayText($selectStore.selectedLabel[index])}
                </Tag>
              </span>
            {/if}
          {:else if !maxTagDisplayCount || (maxTagDisplayCount && index < maxTagDisplayCount)}
            <span
              class="{prefixCls}-selection-item"
              transition:fadeScale="{{ duration: 200, easing: cubicInOut, baseScale: 0.5 }}">
              <span class="{prefixCls}-selection-item-content">
                {tagLabelDisplayText($selectStore.selectedLabel[index])}
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
          {/if}
        {/each}
        {#if maxTagDisplayCount && $selectStore.selectedValue.length > maxTagDisplayCount}
          <Tag>
            + {$selectStore.selectedValue.length - maxTagDisplayCount} ...
          </Tag>
        {/if}
      {/if}
      {#if searchable || !isSingleMode}
        <span
          class="{prefixCls}-selection-search"
          style="{!isSingleMode ? `width: ${inputWidth}` : ''}">
          <input
            autocomplete="off"
            class="{prefixCls}-selection-search-input"
            role="combobox"
            aria-haspopup="listbox"
            aria-autocomplete="list"
            bind:value="{$selectStore.searchValue}"
            bind:this="{inputNode}"
            on:input="{onSearchInput}"
            style="opacity: {$selectStore.optionsVisible ? '1' : '0'};" />
        </span>
      {/if}

      {#if showPlaceholder}
        <span class="{prefixCls}-selection-placeholder">
          {#if !$selectStore.searchValue}{placeholder}{/if}
        </span>
      {:else if isSingleMode}
        <span class="{prefixCls}-selection-item">
          {#if !$selectStore.searchValue}{$selectStore.selectedLabel || ''}{/if}
        </span>
      {/if}
    </div>
    {#if isSingleMode}
      <span
        class="{iconWrapperClasses}"
        unselectable="on"
        aria-hidden="true"
        style="user-select: none;">
        {#if loading}
          <LoadingOutlined spin />
        {:else if $selectStore.optionsVisible && searchable}
          <SearchOutlined />
        {:else if showClearIcon}
          <span on:click|stopPropagation="{onClearableClicked}">
            <svelte:component this="{clearIcon}" />
          </span>
        {:else if showArrow}
          <svelte:component this="{suffixIcon}" />
        {/if}
      </span>
    {/if}
  </div>

  <div
    bind:this="{dropdownNode}"
    class="{dropdownClasses}"
    style="{dropdownStyle}">
    <div
      class="{noOptions && showEmptyMessage ? `${prefixCls}-item-empty` : ''}"
      style="max-height: {dropdownHeight}; overflow-y: auto; overflow-anchor:
      none;">
      <div class="" style="display: flex; flex-direction: column;">
        {#if $selectStore.pendingTag}
          <Option
            value="{$selectStore.pendingTag}"
            label="{$selectStore.pendingTag}" />
        {/if}
        <slot />
        {#each $selectStore.addedTags || [] as addedTag (addedTag.id)}
          <Option value="{addedTag.value}" label="{addedTag.value}" />
        {/each}
        {#if noOptions && showEmptyMessage}
          <slot name="no-options">
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
  import Tag from "../tag/Tag.svelte";
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
  // Automatically clear the searchValue when an option is selected
  export let autoClearSearchValue = true;
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
  // Whether to show the empty message if there are no options
  export let showEmptyMessage = true;
  // Allow a borderless verison
  export let borderless = false;
  // Custom tag props function for multiple and tags mode
  export let tagProps = null;
  // Custom dropdown width
  export let dropdownStyle = null;
  // Dropdown height
  export let dropdownHeight = "256px";
  // Maximum number of tags to show in the input
  export let maxTagDisplayCount = null;
  // Max amount of characters to show in a tag in the input
  export let maxTagTextLength = null;
  // Choose if the arrow should show
  export let showArrow = true;
  // custom suffix icon - replaces arrow
  export let suffixIcon = DownOutlined;
  // Custom icon for clearing the value
  export let clearIcon = CloseCircleFilled;
  // default open state of the dropdown when the select is first rendered
  export let defaultOpen = false;
  // this exports the classObj as class so the user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };
  let dropdownClassObj = null;
  export { dropdownClassObj as dropdownClass };

  // ********************** /Props **********************

  // We need to pre-render the options very quickly to grab the default Label value
  // This will be set to false onMount
  let hideOptions = true;
  // Keeps track of focused state
  let selectFocused = false;
  // Get the txt of the Selected label
  let selectedLabel = "";
  // wrapper classes
  let wrapperClasses;
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
  // Keep track of the input for easy blur and focus
  let inputNode;
  // For the dropdown transition to work properly we store dropdownVisible in a separate variable
  let dropdownVisible;
  // Keep current tag props in an array so they can be used easily
  let currentTagAttributes;
  // keep track of former value so we can properly dispatch the change event
  let formerValue;

  //********* TODO: config-provider RTL ******//

  let selectStore = writable({
    optionsVisible: defaultOpen,
    searchFunction: null,
    searchValue: "",
    activeValue: "",
    options: [],
    addedTags: [],
    allOptionNodes: [],
    mode
  });

  // We use this function in the option as well when it's clicked
  $selectStore.handleSelectPendingTag = async () => {
    if (mode === "tags" && $selectStore.searchValue) {
      $selectStore.pendingTag = null;
      $selectStore.activeValue = "";
      if (autoClearSearchValue) $selectStore.searchValue = "";
    }
  };

  $selectStore.updateAllOptionNodes = async () => {
    // Make sure options are up to date
    await tick();
    $selectStore.allOptionNodes = $selectStore.dropdownNode.querySelectorAll(
      `.${prefixCls}-item-option`
    );
  };

  setContext("selectStore", selectStore);

  onMount(async () => {
    $selectStore.selectedValue = value;
    $selectStore.selectedLabel = selectedLabel;
    $selectStore.dropdownNode = dropdownNode;

    // Make sure all options all available and set them to the selectStore
    await tick();
    const optionNodes = $selectStore.dropdownNode.querySelectorAll(
      `.${prefixCls}-item-option`
    );
    optionNodes.forEach(node => {
      $selectStore.options = [
        ...$selectStore.options,
        node.dataset.optionValue
      ];
    });

    // Set event listeners for key presses
    const wrapper = document.getElementById(wrapperId);
    unbindClickOutside = onClickOutside(wrapper, () => {
      if (selectFocused) dispatch("blur");
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

  $: $selectStore.mode = mode;

  $: isSingleMode = !["multiple", "tags"].includes(mode);

  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  $: if (typeof dropdownStyle !== "string") {
    dropdownStyle = toStyle(dropdownStyle);
  }

  $: if (typeof classObj === "string") {
    classObj = {
      [classObj]: true
    };
  }

  $: if (typeof dropdownClassObj === "string") {
    dropdownClassObj = {
      [dropdownClassObj]: true
    };
  }

  // If the user passes a search function we want the options to use it
  $: if (!searchable && isSingleMode) {
    $selectStore.searchFunction = null;
  } else {
    $selectStore.searchFunction =
      searchFunction || ((input, option) => option.label.indexOf(input) >= 0);
  }

  // We need to store visibilty in 2 separate variables so the transition can work
  // dropdownVisible is only used to set the '...-open' classes. Everything else uses $store.optionsVisible
  $: if (Object.keys($$props).includes("open")) {
    dropdownVisible = $$props.open;
    dispatch("dropdownvisiblechange", { visible: $$props.open });
  } else if ($selectStore.optionsVisible && !dropdownVisible) {
    dropdownVisible = true;
    dispatch("dropdownvisiblechange", { visible: true });
  } else if (!$selectStore.optionsVisible && dropdownVisible) {
    dropdownVisible = false;
    dispatch("dropdownvisiblechange", { visible: false });
  }

  $: wrapperClasses = classNames(`${prefixCls}-wrapper`, { ...classObj });

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
    [`${prefixCls}-show-search`]: searchable || !isSingleMode,
    [`${prefixCls}-borderless`]: borderless
  });

  $: dropdownClasses = classNames({
    ...dropdownClassObj,
    [`${prefixCls}-dropdown`]: true,
    [`${prefixCls}-dropdown-placement-bottomLeft`]: true,
    [`${prefixCls}-dropdown-open`]: dropdownVisible
  });

  $: showClearIcon =
    isInputHovered &&
    clearable &&
    $selectStore.selectedLabel &&
    !($selectStore.optionsVisible && searchable);

  $: iconWrapperClasses = classNames({
    [`${prefixCls}-arrow`]: !showClearIcon,
    [`${prefixCls}-clear`]: showClearIcon,
    [`${prefixCls}-arrow-loading`]: loading
  });

  // Keep value up to date for 2 way binding
  $: if ($selectStore.selectedValue || $selectStore.selectedValue === "") {
    value = $selectStore.selectedValue;
  }

  // dispatch change event when the value changes
  $: if (value || value === "") {
    if (!formerValue && formerValue !== "") {
      formerValue = value;
    } else if (formerValue !== value) {
      console.log("changed", formerValue, value);
      dispatch("change", { value, label: getSelectedLabel() });
    }
  }
  // use a function to fetch the label so the above
  // watcher doesn't fire on every change to the label
  function getSelectedLabel() {
    return $selectStore.selectedLabel;
  }

  $: if (!$selectStore.optionsVisible) {
    // Allow transition to finish before clearing search
    setTimeout(() => {
      if ($selectStore.searchValue && autoClearSearchValue) {
        $selectStore.searchValue = "";
      }
    }, 200);
  }

  // When the search value changes, we need to know when
  // there are no options so that we can display an empty message
  $: if (typeof $selectStore.searchValue) {
    $selectStore.allOptionNodes =
      $selectStore.dropdownNode &&
      $selectStore.dropdownNode.querySelectorAll(`.${prefixCls}-item-option`);
  }

  $: noOptions =
    $selectStore.allOptionNodes &&
    !$selectStore.allOptionNodes.length &&
    !$selectStore.pendingTag &&
    !$selectStore.addedTags.length;

  $: showPlaceholder = (function() {
    if (!placeholder) return false;
    if (
      !isSingleMode &&
      $selectStore.selectedValue &&
      !$selectStore.selectedValue.length
    ) {
      return true;
    }
    if (!$selectStore.selectedValue) return true;
  })();

  // Set input width as the user types to allow maximum space for selected options
  $: if (
    typeof document !== "undefined" &&
    document.getElementById(wrapperId)
  ) {
    const item = document
      .getElementById(wrapperId)
      .querySelector(`.${prefixCls}`);
    const size = calculateSize($selectStore.searchValue, {
      font: "Arial",
      fontSize: window.getComputedStyle(item).fontSize
    });
    inputWidth = `${size.width + $selectStore.searchValue.length}px`;
  }

  // In multiple mode, make sure focus stays on
  // the input even after selecting/deselecting options
  $: if (
    typeof document !== "undefined" &&
    !isSingleMode &&
    $selectStore.selectedValue &&
    $selectStore.optionsVisible
  ) {
    inputNode.focus();
  }

  // A user can use the tagProps option to pass a function
  // that will render tags with custom props
  $: if (typeof $selectStore.selectedValue === "object" && tagProps) {
    currentTagAttributes = $selectStore.selectedValue.map((value, index) => {
      const props = tagProps({
        value,
        label: $selectStore.selectedLabel[index]
      });

      // So we can saftely delete values without worrying
      // about references when we want to call a function
      const propsCopy = { ...props };

      let onClose = () => {};
      if (props.onClose) {
        onClose = event => {
          propsCopy.onClose(event);
          removeOption(index);
        };
        delete props.onClose;
      }

      let onClick = () => {};
      if (props.onClick) {
        onClick = propsCopy.onClick;
        delete props.onClick;
      }

      const propsKeys = Object.keys(props);

      if (!propsKeys.includes("closable")) {
        props.closable = true;
      }

      if (!propsKeys.includes("visible")) {
        props.visible = true;
      }

      return { props, onClick, onClose };
    });
  }

  function tagLabelDisplayText(tagText) {
    if (!tagText) return "";
    if (!maxTagTextLength || tagText.length < maxTagTextLength) {
      return tagText;
    }
    return (
      tagText
        .split("")
        .filter((char, index) => index < maxTagTextLength)
        .join("") + "..."
    );
  }

  // used in click outside and escape press events
  function closeDropdown() {
    if ($selectStore.optionsVisible) {
      $selectStore.pendingTag = null;
      $selectStore.optionsVisible = false;
    }
  }

  // Opening the select dropdown
  // ensures that the proper item is set to active when the dropdown opens
  function onSelectClick() {
    if (!disabled) {
      selectFocused = true;
      dispatch("focus");

      const optionsArray = $selectStore.allOptionNodes
        ? Array.from($selectStore.allOptionNodes)
        : [];
      const firstSelected = optionsArray.find(option => {
        return option.classList.contains(`${prefixCls}-item-option-selected`);
      });

      if (!$selectStore.optionsVisible) {
        if (firstSelected) {
          $selectStore.activeValue = firstSelected.dataset.optionValue;
        } else {
          $selectStore.activeValue = $selectStore.options[0];
        }
      }

      $selectStore.optionsVisible = true;
    }
  }

  // Clear icon is clicked
  function onClearableClicked() {
    selectStore.set({
      ...$selectStore,
      selectedValue: "",
      selectedLabel: "",
      optionsVisible: false
    });
  }

  function removeOptionAttribute(attr, index) {
    // Need to assign with '=' so that we can use stopPropagation so that the dropdown doesn't open
    $selectStore[attr] = $selectStore[attr].filter(
      l => l !== $selectStore[attr][index]
    );
  }

  async function removeOption(index) {
    removeOptionAttribute("selectedValue", index);
    removeOptionAttribute("selectedLabel", index);

    $selectStore.updateAllOptionNodes();
  }

  async function onSearchInput() {
    dispatch("search", $selectStore.searchValue);

    $selectStore.activeValue = "";

    if (!$selectStore.searchValue) {
      $selectStore.activeValue = $selectStore.options[0];
    } else {
      await tick();
      const firstVisibleOption = $selectStore.allOptionNodes[0];
      if (firstVisibleOption) {
        $selectStore.activeValue = firstVisibleOption.dataset.optionValue;
      }
    }

    // Check if the searched value is already an added tag
    const matchingAddedTag = $selectStore.addedTags.find(
      tag => tag.value === $selectStore.searchValue
    );
    if (matchingAddedTag) {
      $selectStore.pendingTag = "";
      $selectStore.activeValue = matchingAddedTag.value;

      // Check if search was cleared and there is a pending tag
    } else if (!$selectStore.searchValue && $selectStore.pendingTag) {
      $selectStore.pendingTag = "";

      // check if we need to add a pending tag
    } else if (
      mode === "tags" &&
      !$selectStore.options.includes($selectStore.searchValue)
    ) {
      $selectStore.pendingTag = $selectStore.searchValue;
      $selectStore.activeValue = $selectStore.pendingTag;
    }
  }

  function handleArrowPress(event, key) {
    if (selectFocused && $selectStore.optionsVisible) {
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

  function getSiblingOption(direction, activeDomOption) {
    const method =
      direction === "next" ? "nextElementSibling" : "previousElementSibling";
    let sibling = activeDomOption && activeDomOption[method];
    if (!sibling) return null;

    // An non-option should not be an active element
    if (
      sibling.classList.contains(`${prefixCls}-item-group`) ||
      !sibling.classList.contains(`${prefixCls}-item`)
    ) {
      return sibling[method];
    }
    return sibling;
  }

  function navigateDropdown(key) {
    let activeDomOption = $selectStore.dropdownNode.querySelector(
      `.${prefixCls}-item-option-active`
    );

    // If there is no active option we still want arrows to work
    if (!activeDomOption) {
      $selectStore.allOptionNodes = $selectStore.dropdownNode.querySelectorAll(
        `.${prefixCls}-item-option`
      );
      if ($selectStore.allOptionNodes.length && key === "ArrowUp") {
        activeDomOption = $selectStore.allOptionNodes[0];
      } else {
        activeDomOption =
          $selectStore.allOptionNodes[$selectStore.allOptionNodes.length - 1];
      }
    }

    // If there is only one option make it active
    if ($selectStore.allOptionNodes.length === 1) {
      $selectStore.activeValue = activeDomOption.dataset.optionValue;
      return;
    }

    let previousDomOption = getSiblingOption("previous", activeDomOption);
    let nextDomOption = getSiblingOption("next", activeDomOption);

    // Infinitly navigate through the list
    let localScrollBehavior = "smooth";
    if (!previousDomOption && $selectStore.allOptionNodes.length > 1) {
      localScrollBehavior = "auto";
      const lastOption =
        $selectStore.allOptionNodes[$selectStore.allOptionNodes.length - 1];
      previousDomOption = lastOption;
    }
    if (!nextDomOption && $selectStore.allOptionNodes.length > 1) {
      localScrollBehavior = "auto";
      const firstOption = $selectStore.allOptionNodes[0];
      nextDomOption = firstOption;
    }

    const previousValue = findNonDisabledValue("previous", previousDomOption);
    const nextValue = findNonDisabledValue("next", nextDomOption);

    if (key === "ArrowUp" && previousDomOption) {
      $selectStore.activeValue = previousValue;
      previousDomOption.scrollIntoView({
        behavior: localScrollBehavior,
        block: "nearest",
        inline: "start"
      });
    } else if (key === "ArrowDown" && nextDomOption) {
      $selectStore.activeValue = nextValue;
      nextDomOption.scrollIntoView({
        behavior: localScrollBehavior,
        block: "nearest",
        inline: "start"
      });
    }
  }

  function handleBackspacePress() {
    if (
      selectFocused &&
      !isSingleMode &&
      $selectStore.selectedValue.length &&
      !$selectStore.searchValue
    ) {
      // Check if input has focus
      if (document.activeElement === inputNode) {
        const index = $selectStore.selectedValue.length - 1;

        // Make sure to remove added tags
        if ($selectStore.addedTags.length) {
          $selectStore.addedTags = $selectStore.addedTags.filter(
            tag => tag.value !== $selectStore.selectedValue[index]
          );
        }

        removeOption(index);
      }
    }
  }

  function handleEnterPress() {
    if (!selectFocused) return;

    if (!$selectStore.optionsVisible && selectFocused) {
      $selectStore.optionsVisible = true;
      return;
    }

    inputNode && inputNode.blur();

    const activeNode = $selectStore.dropdownNode.querySelector(
      `.${prefixCls}-item-option-active`
    );
    if (
      $selectStore.optionsVisible &&
      activeNode &&
      !activeNode.classList.contains(`${prefixCls}-item-option-disabled`)
    ) {
      const value = activeNode.dataset.optionValue;
      const label = activeNode.dataset.optionLabel;

      $selectStore.handleSelectPendingTag();

      if (isSingleMode) {
        $selectStore.selectedValue = value;
        $selectStore.selectedLabel = label;
        $selectStore.optionsVisible = false;
      } else if ($selectStore.selectedValue.includes(value)) {
        // already selected - remove it
        $selectStore.selectedValue = $selectStore.selectedValue.filter(
          v => v !== value
        );
        $selectStore.selectedLabel = $selectStore.selectedLabel.filter(
          l => l !== label
        );

        if (autoClearSearchValue) $selectStore.searchValue = "";

        if ($selectStore.addedTags.length) {
          $selectStore.addedTags = $selectStore.addedTags.filter(
            tag => tag.value !== value
          );
        }
      } else {
        // select in multiple mode
        $selectStore.selectedValue = [...$selectStore.selectedValue, value];
        $selectStore.selectedLabel = [...$selectStore.selectedLabel, label];

        if (autoClearSearchValue) $selectStore.searchValue = "";

        if (
          mode === "tags" &&
          !$selectStore.options.find(option => option === value)
        ) {
          $selectStore.addedTags = [
            ...$selectStore.addedTags,
            { value, label: value, id: nanoid() }
          ];
        }
      }
    }
    $selectStore.updateAllOptionNodes();
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
