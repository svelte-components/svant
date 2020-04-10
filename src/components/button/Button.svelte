{#if href}
  <a
          {href}
          {target}
          class={classes}
          on:click={handleClick}>
    {#if loading}
      <LoadingOutlined spin />
    {:else if icon}
      <svelte:component this={icon} {...iconProps} />
    {/if}
    <span bind:this={defaultSlot}>
        <slot />
      </span>
  </a>
{:else}
  <button
          use:wave={{ csp: $config.csp }}
          {...$$restProps}
          on:click={handleClick}
          class={classes}
          type={htmlType}>
    {#if loading}
      <LoadingOutlined spin />
    {:else if icon}
      <svelte:component this={icon} {...iconProps} />
    {/if}
    <span bind:this={defaultSlot}>
        <slot />
      </span>
  </button>
{/if}

<script>
  import { createEventDispatcher, getContext, onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import { LoadingOutlined } from "@/components/icons";
  import classNames from "classnames";
  import { default as _wave } from "@/components/_util/wave";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const dispatch = createEventDispatcher();

  export let type = "button";
  export let shape = null;
  export let size = "default";
  export let loading = false;
  let customizePrefixCls = null;
  export { customizePrefixCls as prefixCls };
  let className = "";
  export { className as class };
  export let ghost = false;
  export let danger = null;
  export let block = false;
  export let icon = null;
  export let iconProps = null;
  export let href = null;
  export let target = null;
  export let htmlType = "button";
  let _prevLoading;
  let delayTimeout;
  let classes;
  let defaultSlot;
  const config = getContext(CONFIG_KEY) || configProvider();

  let state = writable({
    loading: loading
  });

  onDestroy(() => {
    if (delayTimeout) {
      clearTimeout(delayTimeout);
    }
  });
  $: {
    if (_prevLoading && typeof _prevLoading !== "boolean") {
      clearTimeout(delayTimeout);
    }
    if (loading && typeof loading !== "boolean" && loading.delay) {
      delayTimeout = window.setTimeout(() => {
        $state.loading = loading;
      }, loading.delay);
    } else if (_prevLoading !== loading) {
      $state.loading = loading;
    }
    _prevLoading = loading;
  }

  function handleClick(e) {
    if (loading) {
      return;
    }
    dispatch("click", e);
  }

  $: {
    const { getPrefixCls, autoInsertSpaceInButton, direction } = $config;
    const { loading } = $state;

    const prefixCls = getPrefixCls("btn", customizePrefixCls);
    const autoInsertSpace = autoInsertSpaceInButton !== false;

    // large => lg
    // small => sm
    let sizeCls = "";
    switch ($config.size || size) {
      case "large":
        sizeCls = "lg";
        break;
      case "small":
        sizeCls = "sm";
        break;
      default:
        break;
    }

    classes = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: checkIfOnlyIcon(),
      [`${prefixCls}-loading`]: !!loading,
      [`${prefixCls}-background-ghost`]: ghost,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-dangerous`]: !!danger,
      [`${prefixCls}-rtl`]: direction === "rtl"
    });
    if (checkIfOnlyIcon() && defaultSlot) {
      defaultSlot.remove();
    }
  }
  function checkIfOnlyIcon() {
    if (!defaultSlot) {
      return false
    }
    return (
      defaultSlot &&
      defaultSlot.children.length === 0 &&
      defaultSlot.innerText === "" &&
      icon != null
    );
  }

  const wave = type !== "link" ? _wave : () => {};
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
