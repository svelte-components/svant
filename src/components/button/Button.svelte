{#if href}
  <a {href} {target} {...commonProps} on:click="{handleClick}">
    {#if _isLoading}
      <LoadingOutlined spin />
    {:else if icon}
      <svelte:component this="{icon}" {...iconProps} />
    {/if}
    <span bind:this="{defaultSlot}">
      <slot />
    </span>
  </a>
{:else}
  <button
    type="{htmlType}"
    {...commonProps}
    use:wave="{{ csp }}"
    on:click="{handleClick}"
    use:triggerFocus>
    {#if _isLoading}
      <LoadingOutlined spin />
    {:else if icon}
      <svelte:component this="{icon}" {...iconProps} />
    {/if}
    <span bind:this="{defaultSlot}">
      <slot />
    </span>
  </button>
{/if}

<script>
  import { createEventDispatcher, getContext, onDestroy } from "svelte";
  import { string as toStyle } from "to-style";
  import { default as LoadingOutlined } from "@/components/icons/LoadingOutlined.svelte";
  import classNames from "classnames";
  import { default as _wave } from "@/components/_util/wave";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  // disabled state of button
  export let disabled = false;
  // make background transparent and invert text and border colors
  export let ghost = false;
  // redirect url of link button
  export let href = null;
  // set the original html type of button, see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type
  export let htmlType = "button";
  // set the icon component of button
  export let icon = null;
  // set the icon component props (this is an extra attribute that is not in the original ant design)
  export let iconProps = {};
  // set the loading status of button
  export let loading = false;
  // can be set to `circle`, `round` or `omitted`
  export let shape = null;
  // set the size of button, can be set to `large`, `medium` or `small`
  export let size = null;
  // same as target attribute of a, works when href is specified
  export let target = null;
  // can be set to `primary` `ghost` `dashed` `link` or omitted (meaning default)
  export let type = "default";
  // option to fit button width to its parent width
  export let block = false;
  // set the danger status of button
  export let danger = null;
  // sets the focus of the button when the button is mounted
  export let focusOnMount = false;

  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // this allows us to get the style as object e.x  style={{'color':'red'}}.
  export let style = null;

  // ********************** /Props **********************

  let _prevLoading;
  let _isLoading;
  let delayTimeout;
  let classes;
  let defaultSlot;
  let sizeCls;
  let commonProps;
  // we get global configuration or create a default one
  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction, size: globalSize, csp } = $config;

  onDestroy(() => {
    if (delayTimeout) {
      clearTimeout(delayTimeout);
    }
  });

  // we make the classObj an object so we can add it to the classNames func.
  $: if (typeof classObj === "string") {
    classObj = {
      [classObj]: true
    };
  }

  // since we are not adding any style we just convert the style object to a style sting if it is not already a string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  // this block gets triggered if any of the props change
  $: {
    switch (globalSize || size) {
      case "large":
        sizeCls = "lg";
        break;
      case "small":
        sizeCls = "sm";
        break;
      default:
        sizeCls = null;
        break;
    }

    let prefixCls = getPrefixCls("btn");

    setLoadingState(loading);

    classes = classNames(prefixCls, {
      ...classObj,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: checkIfOnlyIcon(),
      [`${prefixCls}-loading`]: !!_isLoading,
      [`${prefixCls}-background-ghost`]: ghost,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-dangerous`]: !!danger,
      [`${prefixCls}-rtl`]: direction === "rtl"
    });

    if (checkIfOnlyIcon() && defaultSlot) {
      // this removes the `span` if the slot was not populated (in the case of the button being icon only)
      defaultSlot.remove();
    }

    commonProps = {
      ...$$restProps,
      class: classes,
      style,
      disabled
    };
  }

  // if the button type is link we don't want the wave to show
  $: wave = type !== "link" ? _wave : () => {};

  function setLoadingState(loading) {
    if (_prevLoading && typeof _prevLoading !== "boolean") {
      clearTimeout(delayTimeout);
    }
    // if loading is an object and defines the delay
    if (loading && typeof loading !== "boolean" && loading.delay) {
      delayTimeout = window.setTimeout(() => {
        _isLoading = loading;
      }, loading.delay);
    } else if (_prevLoading !== loading) {
      _isLoading = loading;
    }
    _prevLoading = loading;
  }

  function handleClick(e) {
    if (loading) {
      return;
    }
    dispatch("click", e);
  }

  function checkIfOnlyIcon() {
    if (!defaultSlot) {
      return false;
    }
    return (
      defaultSlot &&
      defaultSlot.children.length === 0 &&
      defaultSlot.innerText === "" &&
      icon != null
    );
  }

  function triggerFocus(node) {
    if (focusOnMount) node.focus();
  }
</script>
