<span>
  <span class="ant-breadcrumb-link">
    {#if href}
      <a {href}>
        <slot />
      </a>
    {:else}
      <slot />
    {/if}
  </span>
  <span class="ant-breadcrumb-separator">
    {#if separatorIsComponent}
      <svelte:component this="{separatorToUse}" />
    {:else}{separatorToUse}{/if}
  </span>
</span>

<script>
  import { onMount, getContext } from "svelte";

  // ********************** Props **********************

  // If set the item will be wrapper in a link
  export let href = "";
  // Will override the seperator set in the parent BreadcrumbItem
  export let separator = null;

  // ********************** /Props **********************

  let uniformedSeparator = getContext("uniformedSeparator");
  let separatorToUse;
  let separatorIsComponent;

  // either uses the separator passed directly as a prop or using the prop passed in from the parent Breadcrumb component
  $: separatorToUse = separator || $uniformedSeparator;
  // boolean to tell us if a Svelte component is passed as the separator
  $: separatorIsComponent = typeof separatorToUse === "function";
</script>
