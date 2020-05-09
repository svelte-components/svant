{#if visible}
  <span
    class="{wrapperClasses}"
    transition:fadeScale="{{ duration: 200, easing: cubicInOut, baseScale: 0.5 }}">
    <slot />
    {#if closable}
      <CloseOutlined on:click="{onClose}" />
    {/if}
  </span>
{/if}

<script>
  import { CloseOutlined } from "@/components/icons";
  import { fadeScale } from "@/components/_util/transitions";
  import { cubicInOut } from "svelte/easing";
  import classNames from "classnames";
  import { createEventDispatcher, getContext } from "svelte";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const dispatch = createEventDispatcher();
  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction } = $config;
  let prefixCls = getPrefixCls("tag");

  // ********************** Props **********************

  // Whether the tag shoul be closable
  export let closable = false;
  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // ********************** /Props **********************

  // Whether the tag is shown
  let visible = true;
  // Clases for the tag wrapper
  let wrapperClasses;

  $: wrapperClasses = classNames(prefixCls, {
    ...classObj,
    [`${prefixCls}-rtl`]: direction === "rtl"
  });

  function onClose(event) {
    let prevented = false;
    event.preventClose = () => {
      prevented = true;
    };
    dispatch("close", event);
    if (!prevented) visible = false;
  }
</script>
