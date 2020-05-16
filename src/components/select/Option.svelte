{#if visible}
  <div
    aria-selected="{isCurrentlySelected}"
    class="{classes}"
    data-option-value="{value}"
    on:click="{onClick}"
    on:mouseenter="{() => {
      $store.activeOptionIndex = $store.options.indexOf(value);
    }}">
    <div class="ant-select-item-option-content">{label}</div>
    {#if ['multiple', 'tags'].includes($store.mode) && isCurrentlySelected}
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
  let isCurrentlySelected;
  // Need to know if it's the first item selected to determine if it should be active
  let isFirstSelected;
  // List of classes for the wrapper
  let classes = "";
  // Visibility based on search
  let visible = true;

  onMount(async () => {
    await tick();
    if (
      ["multiple", "tags"].includes($store.mode) &&
      $store.selectedValue.indexOf(value) >= 0
    ) {
      $store.selectedLabel = [...$store.selectedLabel, label];
    } else if ($store.selectedValue === value) {
      $store.selectedLabel = label;
    }

    // In multiple mode, we want to make sure that the first selected option starts as the active one
    if (isFirstSelected) {
      $store.activeOptionIndex = $store.options.indexOf(value);
    }
  });

  $: isCurrentlySelected =
    $store.selectedValue &&
    ($store.selectedValue === value ||
      $store.selectedValue.indexOf(value) >= 0);

  $: isFirstSelected =
    isCurrentlySelected &&
    ($store.selectedValue === value || $store.selectedValue[0] === value);

  $: classes = classNames({
    [`${prefixCls}-item`]: true,
    [`${prefixCls}-item-option`]: true,
    [`${prefixCls}-item-option-disabled`]: disabled,
    [`${prefixCls}-item-option-selected`]: isCurrentlySelected,
    [`${prefixCls}-item-option-active`]:
      $store.activeOptionIndex === $store.options.indexOf(value)
  });

  // Update visibility based on search value and function
  $: if (!$store.searchValue) {
    visible = true;
  } else {
    visible = $store.searchFunction($store.searchValue, { label, value });
  }

  function onClick() {
    if (!disabled) {
      const isSingleMode = !["multiple", "tags"].includes($store.mode);
      if (!isSingleMode && isCurrentlySelected) {
        store.set({
          ...$store,
          selectedValue: $store.selectedValue.filter(v => v !== value),
          selectedLabel: $store.selectedLabel.filter(l => l !== label),
          searchValue: ""
        });
      } else if (!isSingleMode) {
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
          popupVisible: false
        });
      }
    }
  }
</script>
