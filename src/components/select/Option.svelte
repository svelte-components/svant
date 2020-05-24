{#if visible}
  <div
    aria-selected="{isSelected}"
    class="{classes}"
    data-option-value="{value}"
    data-option-label="{label}"
    on:click="{onClick}"
    on:mouseenter="{() => {
      $store.activeValue = value;
    }}">
    <div class="ant-select-item-option-content">
      <slot>{label}</slot>
    </div>
    {#if ['multiple', 'tags'].includes($store.mode) && isSelected}
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
  import { CheckOutlined } from "@/components/icons";
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
  let store = getContext("store");
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

    if ($store.selectedValue === value) {
      $store.selectedLabel = label;
    } else if (
      $store.selectedValue &&
      // multiple mode check if it's one of the selected options
      $store.selectedValue.indexOf(value) >= 0 &&
      // We don't want duplicate labels if this is an added tag
      $store.addedTags &&
      !$store.addedTags.find(tag => tag.value === value)
    ) {
      $store.selectedLabel = [...$store.selectedLabel, label];
    }

    // In multiple mode, we want to make sure that the first selected option starts as the active one
    if (isFirstSelected) {
      $store.activeValue = value;
    }
  });

  $: isSelected =
    $store.selectedValue &&
    ($store.selectedValue === value ||
      $store.selectedValue.indexOf(value) >= 0);

  $: isFirstSelected =
    isSelected &&
    ($store.selectedValue === value || $store.selectedValue[0] === value);

  $: isActive = $store.activeValue === value;

  $: classes = classNames({
    [`${prefixCls}-item`]: true,
    [`${prefixCls}-item-option`]: true,
    [`${prefixCls}-item-option-disabled`]: disabled,
    [`${prefixCls}-item-option-selected`]: isSelected,
    [`${prefixCls}-item-option-active`]: isActive
  });

  // Update visibility based on search value and function
  $: if (!$store.searchValue) {
    visible = true;
  } else {
    visible = $store.searchFunction($store.searchValue, { label, value });
  }

  function onClick() {
    if (!disabled) {
      $store.handleSelectPendingTag();

      const isSingleMode = !["multiple", "tags"].includes($store.mode);
      if (!isSingleMode && isSelected) {
        store.set({
          ...$store,
          selectedValue: $store.selectedValue.filter(v => v !== value),
          selectedLabel: $store.selectedLabel.filter(l => l !== label),
          searchValue: ""
        });

        if ($store.addedTags.length) {
          $store.addedTags = $store.addedTags.filter(
            tag => tag.value !== value
          );
        }
      } else if (!isSingleMode) {
        if ($store.mode === "tags" && !$store.options.includes(value)) {
          $store.addedTags = [
            ...$store.addedTags,
            { value, label, id: nanoid() }
          ];
        }

        store.set({
          ...$store,
          selectedValue: [...$store.selectedValue, value],
          selectedLabel: [...$store.selectedLabel, label],
          searchValue: ""
        });
      } else {
        store.set({
          ...$store,
          selectedValue: value,
          selectedLabel: label,
          optionsVisible: false
        });
      }
    }
  }
</script>
