{#if visible}
  <div
    aria-selected="{isSelected}"
    class="{classes}"
    data-option-value="{value}"
    data-option-label="{label}"
    on:click="{onClick}"
    on:mouseenter="{() => {
      $selectStore.activeValue = value;
    }}">
    <div class="ant-select-item-option-content">
      <slot>{label}</slot>
    </div>
    {#if ['multiple', 'tags'].includes($selectStore.mode) && isSelected}
      <span
        class="ant-select-item-option-state"
        unselectable="on"
        aria-hidden="true"
        style="user-select: none;">
        <CheckOutlined />
      </span>
    {/if}
  </div>
{/if}

<script>
  import { getContext, onMount, tick } from "svelte";
  import { default as CheckOutlined } from "@/components/icons/CheckOutlined.svelte";
  import classNames from "classnames";
  import { nanoid } from "nanoid";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls } = $config;
  let prefixCls = getPrefixCls("select");

  // ********************** Props **********************

  // The value of the option
  export let value;
  // The value shown to the user
  export let label;
  // disabled state
  export let disabled = false;

  // ********************** /Props **********************

  // Context for the whole select
  let selectStore = getContext("selectStore");
  // Whether this option is the currently selected one
  let isSelected;
  // Need to know if it's the first item selected to determine if it should be active
  let isFirstSelected;
  // If the item is highlighted and can be selected with enter
  let isActive;
  // List of classes for the wrapper
  let classes = "";
  // Visibility based on search
  let visible = true;

  onMount(async () => {
    await tick();

    if ($selectStore.selectedValue === value) {
      $selectStore.selectedLabel = label;
    } else if (
      $selectStore.selectedValue &&
      // multiple mode check if it's one of the selected options
      typeof $selectStore.selectedValue === "object" &&
      $selectStore.selectedValue.indexOf(value) >= 0 &&
      // We don't want duplicate labels if this is an added tag
      $selectStore.addedTags &&
      !$selectStore.addedTags.find(tag => tag.value === value)
    ) {
      $selectStore.selectedLabel = [...$selectStore.selectedLabel, label];
    }

    // In multiple mode, we want to make sure that the first selected option starts as the active one
    if (isFirstSelected) {
      $selectStore.activeValue = value;
    }
  });

  $: isSelected =
    $selectStore.selectedValue &&
    ($selectStore.selectedValue === value ||
      $selectStore.selectedValue.indexOf(value) >= 0);

  $: isFirstSelected =
    isSelected &&
    ($selectStore.selectedValue === value ||
      $selectStore.selectedValue[0] === value);

  $: isActive = $selectStore.activeValue === value;

  $: classes = classNames([`${prefixCls}-item`, `${prefixCls}-item-option`], {
    [`${prefixCls}-item-option-disabled`]: disabled,
    [`${prefixCls}-item-option-selected`]: isSelected,
    [`${prefixCls}-item-option-active`]: isActive
  });

  // Update visibility based on search value and function
  $: if (!$selectStore.searchValue) {
    visible = true;
  } else {
    visible = $selectStore.searchFunction($selectStore.searchValue, {
      label,
      value
    });
  }

  function onClick() {
    if (disabled) return;
    $selectStore.handleSelectPendingTag();

    const isSingleMode = !["multiple", "tags"].includes($selectStore.mode);
    if (!isSingleMode && isSelected) {
      selectStore.set({
        ...$selectStore,
        selectedValue: $selectStore.selectedValue.filter(v => v !== value),
        selectedLabel: $selectStore.selectedLabel.filter(l => l !== label),
        searchValue: ""
      });

      if ($selectStore.addedTags.length) {
        $selectStore.addedTags = $selectStore.addedTags.filter(
          tag => tag.value !== value
        );
      }
    } else if (!isSingleMode) {
      if (
        $selectStore.mode === "tags" &&
        !$selectStore.options.includes(value)
      ) {
        $selectStore.addedTags = [
          ...$selectStore.addedTags,
          { value, label, id: nanoid() }
        ];
      }

      selectStore.set({
        ...$selectStore,
        selectedValue: [...$selectStore.selectedValue, value],
        selectedLabel: [...$selectStore.selectedLabel, label],
        searchValue: ""
      });
    } else {
      selectStore.set({
        ...$selectStore,
        selectedValue: value,
        selectedLabel: label,
        optionsVisible: false
      });
    }
    $selectStore.updateAllOptionNodes();
  }
</script>
