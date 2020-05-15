{#if visible}
  <div
    aria-selected="{isCurrentlySelected}"
    class="{classes}"
    on:click="{onClick}"
    on:mouseenter="{() => {
      isCurrentlyHovered = true;
    }}"
    on:mouseleave="{() => {
      isCurrentlyHovered = false;
    }}">
    <div class="ant-select-item-option-content">{label}</div>
    {#if $store.mode === 'multiple' && isCurrentlySelected}
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
  // List of classes for the wrapper
  let classes = "";
  // Gives hover state
  let isCurrentlyHovered = false;
  // Visibility based on search
  let visible = true;

  onMount(async () => {
    await tick();
    if (
      $store.mode === "multiple" &&
      $store.selectedValue.indexOf(value) >= 0
    ) {
      $store.selectedLabel = [...$store.selectedLabel, label];
    } else if ($store.selectedValue === value) {
      $store.selectedLabel = label;
    }
  });

  $: isCurrentlySelected =
    $store.selectedValue &&
    ($store.selectedValue === value ||
      $store.selectedValue.indexOf(value) >= 0);

  $: classes = classNames({
    [`${prefixCls}-item`]: true,
    [`${prefixCls}-item-option`]: true,
    [`${prefixCls}-item-option-disabled`]: disabled,
    [`${prefixCls}-item-option-selected`]: isCurrentlySelected,
    [`${prefixCls}-item-option-active`]: isCurrentlyHovered
  });

  $: visible = (function() {
    if (!$store.searchValue) return true;
    return $store.searchFunction($store.searchValue, { label, value });
  })();

  function onClick() {
    if (!disabled) {
      if ($store.mode === "multiple" && isCurrentlySelected) {
        store.set({
          ...$store,
          selectedValue: $store.selectedValue.filter(v => v !== value),
          selectedLabel: $store.selectedLabel.filter(l => l !== label),
          searchValue: ""
        });
      } else if ($store.mode === "multiple") {
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
