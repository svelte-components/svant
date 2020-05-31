<svelte:head>
  {#if !scrollableBody}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

{#if localVisible}
  <div class="{prefixCls}-root" bind:this="{thisModal}">
    {#if mask}
      <div
        transition:fade="{{ duration: 100 }}"
        class="{prefixCls}-mask"
        style="{`z-index: ${zIndex}; ${maskStyle}`}"></div>
    {/if}
    <div class="{wrapClasses}" role="dialog" style="{`z-index: ${zIndex};`}">
      <div class="{modalClasses}" role="document" style="{modalStyleString}">
        <div
          transition:fadescale="{{ duration: 200 }}"
          class="{prefixCls}-content">
          {#if modalType === 'standard'}
            {#if closeable}
              <button
                aria-label="Close"
                class="{prefixCls}-close"
                type="button"
                on:click="{onCancel}">
                <span class="{prefixCls}-close-x">
                  <svelte:component
                    this="{closeIcon}"
                    class="{prefixCls}-close-icon" />
                </span>
              </button>
            {/if}
            {#if title}
              <div class="{prefixCls}-header">
                <div class="{prefixCls}-title">{title}</div>
              </div>
            {/if}
          {/if}
          {#if modalType !== 'standard' && closeable}
            <button
              aria-label="Close"
              class="{prefixCls}-close"
              type="button"
              on:click="{onCancel}">
              <span class="{prefixCls}-close-x">
                <svelte:component
                  this="{closeIcon}"
                  class="{prefixCls}-close-icon" />
              </span>
            </button>
          {/if}
          <div class="{prefixCls}-body" style="{bodyStyle}">
            {#if modalType === 'standard'}
              <slot />
            {:else}
              <div
                class="{prefixCls}-confirm-body-wrapper"
                class:confirm-body-wrapper--closeable="{closeable}">
                <div class="{prefixCls}-confirm-body">
                  {#if icon}
                    <svelte:component this="{icon}" />
                  {/if}

                  {#if title}
                    <span class="{prefixCls}-confirm-title">{title}</span>
                  {/if}

                  <div class="{prefixCls}-confirm-content">
                    {#if typeof content === 'function'}
                      <svelte:component this="{content}" />
                    {:else}{content}{/if}
                  </div>
                </div>
                <div class="{prefixCls}-confirm-btns">
                  {#if modalType === 'confirm'}
                    <Button
                      on:click="{onCancel}"
                      {...cancelButtonProps}
                      focusOnMount="{autoFocusButton === 'cancel'}">
                      {cancelText || locale.cancelText}
                    </Button>
                  {/if}
                  <Button
                    type="{okType}"
                    on:click="{onOk}"
                    {...okButtonProps}
                    loading="{confirmLoading}"
                    focusOnMount="{autoFocusButton === 'ok'}">
                    {okText || locale.okText}
                  </Button>
                </div>
              </div>
            {/if}
          </div>
          {#if footer && modalType === 'standard'}
            <div class="ant-modal-footer">
              <slot name="footer">
                <div>
                  <Button
                    on:click="{onCancel}"
                    {...cancelButtonProps}
                    focusOnMount="{autoFocusButton === 'cancel'}">
                    {cancelText || locale.cancelText}
                  </Button>
                  <Button
                    {...okButtonProps}
                    type="{okType}"
                    on:click="{onOk}"
                    loading="{confirmLoading}"
                    focusOnMount="{autoFocusButton === 'ok'}">
                    {okText || locale.okText}
                  </Button>
                </div>
              </slot>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

<script>
  import {
    createEventDispatcher,
    onMount,
    onDestroy,
    getContext
  } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { string as toStyle } from "to-style";
  import classNames from "classnames";

  import { default as CloseOutlined } from "@/components/icons/CloseOutlined.svelte";
  import { default as InfoCircleOutlined } from "@/components/icons/InfoCircleOutlined.svelte";
  import { default as CheckCircleOutlined } from "@/components/icons/CheckCircleOutlined.svelte";
  import { default as CloseCircleOutlined } from "@/components/icons/CloseCircleOutlined.svelte";
  import { default as ExclamationCircleOutlined } from "@/components/icons/ExclamationCircleOutlined.svelte";

  import Button from "../button/Button.svelte";
  import { modalDestroyFunctions } from "./store";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  // If the modal is visible
  export let visible = false;
  // User has the option to remove the footer
  export let footer = true;
  // Modal width
  export let width = null;
  // Title for the header
  export let title = "";
  // If the ok button is in loading state
  export let confirmLoading = false;
  // Confirm and status modals need a differnet component sructure
  export let modalType = "standard";
  // Icon for confirm and status modals
  export let icon = null;
  // confirm and status modals can accept content as an option (string or component)
  export let content = null;
  // Extra props for the buttons
  export let okButtonProps = {};
  export let cancelButtonProps = {};
  // Type of button to use for OK (primary, danger, etc.)
  export let okType = "primary";
  // Text of the ok button
  export let okText = "";
  // Text of the cancel button
  export let cancelText = "";
  // Allow top and bottom positioning
  export let verticalPosition = {};
  // Center modal on page
  export let centered = false;
  // Visibility of the close button
  export let closeable = true;
  // Icon to use for the close button
  export let closeIcon = CloseOutlined;
  // Whether show mask or not
  export let mask = true;
  // Close the modal when the mask is clicked
  export let maskClosable = true;
  // So the user can call modalInstance.destroy()
  export const destroy = () => {
    localVisible = false;
    scrollableBody = true;
    dispatch("after-close");
    // Remove the destroy function modalDestroyFunctions store
    if (modalType !== "standard") {
      modalDestroyFunctions.set(
        $modalDestroyFunctions.filter(func => func !== destroy)
      );
    }
  };
  // Body style for modal body element
  export let bodyStyle = null;
  // Style for the mask
  export let maskStyle = null;
  // The classname for the wrapper
  export let wrapClassName = "";
  // Custom z-index
  export let zIndex = 1000;
  // Focuses on the button when the modal opens
  export let autoFocusButton = "ok";
  // Allow user to close the modal if ESC is pressed
  export let keyboard = true;

  // ********************** /Props **********************

  // Need to allow clickPosition to be set before first transition
  let localVisible = false;
  // Used so we can set a transform-origin for the transition
  let clickPosition = null;
  // Used for custom transition.
  let fadescale = function(node, { duration }) {
    return {
      duration,
      css: t => `opacity: ${t}; transform: scale(${t});`
    };
  };
  // Body should not be scrollable when the modal is open
  let scrollableBody = true;
  // Confirm and status modals need special classes
  let modalClasses;
  // Wrap classes need to be computed
  let wrapClasses;
  // Style string for the ant-modal element
  let modalStyleString = width ? `width: ${width};` : "";
  // Ref for the root element
  let thisModal;
  // we get global configuration or create a default one
  const config = getContext(CONFIG_KEY) || configProvider();
  const {
    getPrefixCls,
    direction,
    locale: { Modal: locale }
  } = $config;
  const prefixCls = getPrefixCls("modal");

  function setClickPosition(e) {
    clickPosition = {
      x: e.pageX,
      y: e.pageY
    };
  }

  function setWrapClickClose(e) {
    if (e.target.classList.value.includes("ant-modal-wrap")) {
      onCancel();
    }
  }

  function removeModalOnEscape(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      const allModalsOpen = document.querySelectorAll(".ant-modal-root");
      const lastModal = allModalsOpen[allModalsOpen.length - 1];
      if (thisModal === lastModal) {
        onCancel();
      }
    }
  }

  onMount(() => {
    if (keyboard) {
      window.addEventListener("keydown", removeModalOnEscape);
    }

    // Add destroy function to the store so we can call Modal.destroyAll()
    if (modalType !== "standard") {
      $modalDestroyFunctions.push(destroy);
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", removeModalOnEscape);
      document.body.removeEventListener("click", setWrapClickClose);
      document.removeEventListener("click", setClickPosition);
    }
  });

  $: wrapClasses = classNames({
    [`${prefixCls}-wrap`]: true,
    [wrapClassName]: true,
    [`${prefixCls}-centered`]: centered,
    [`${prefixCls}-wrap-rtl`]: direction === "rtl"
  });

  $: modalClasses = classNames(prefixCls, {
    [`${prefixCls}-confirm ${prefixCls}-confirm-${modalType}`]:
      modalType !== "standard"
  });

  $: if (!width) {
    width = modalType === "standard" ? "520px" : "416px";
    modalStyleString = `width: ${width};`;
  }

  $: if (visible) {
    // Need the timeout so that we are sure the click
    // location is set for the opening transition
    setTimeout(() => {
      scrollableBody = false;
      localVisible = true;
    }, 0);
  } else {
    destroy();
  }

  $: if (Object.keys(verticalPosition)) {
    for (const [key, value] of Object.entries(verticalPosition)) {
      if (["top", "bottom"].includes(key))
        modalStyleString += ` ${key}: ${value};`;
    }
  }

  $: if (!icon) {
    switch (modalType) {
      case "info":
        icon = InfoCircleOutlined;
        break;
      case "success":
        icon = CheckCircleOutlined;
        break;
      case "error":
        icon = CloseCircleOutlined;
        break;
      case "warning":
        icon = ExclamationCircleOutlined;
        break;
      default:
        icon = null;
    }
  }

  // We want to close the modal if we clicked outside of it
  $: if (localVisible && mask && maskClosable) {
    document.body.addEventListener("click", setWrapClickClose);
  }

  // Convert style objects to strings
  $: if (typeof bodyStyle !== "string") {
    bodyStyle = toStyle(bodyStyle);
  }
  $: if (typeof maskStyle !== "string") {
    maskStyle = toStyle(maskStyle);
  }

  // Set click position each time there is a click
  if (typeof window !== "undefined" && window.document) {
    window.document.addEventListener("click", setClickPosition);
  }

  //*** Transition logic start ***//
  $: if (clickPosition) {
    fadescale = function(node, { duration }) {
      let transformOrigin = "";
      const dialogNode = document.querySelector(".ant-modal-content");
      const elOffset = offset(dialogNode);
      transformOrigin = ` transform-origin: ${clickPosition.x -
        elOffset.left}px ${clickPosition.y - elOffset.top}px;`;

      return {
        duration,
        css: t => `opacity: ${t}; transform: scale(${t});${transformOrigin}`
      };
    };
  }

  function getScroll(w, top) {
    let ret = w[`page${top ? "Y" : "X"}Offset`];
    const method = `scroll${top ? "Top" : "Left"}`;
    if (typeof ret !== "number") {
      const d = w.document;
      ret = d.documentElement[method];
      if (typeof ret !== "number") {
        ret = d.body[method];
      }
    }
    return ret;
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    const pos = {
      left: rect.left,
      top: rect.top
    };
    const doc = el.ownerDocument;
    const w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
  }
  //*** Transition logic end ***//

  function onOk() {
    if (modalType !== "standard") destroy();
    dispatch("ok");
  }

  function onCancel() {
    if (modalType !== "standard") destroy();
    dispatch("cancel");
  }
</script>

<style global>
  .confirm-body-wrapper--closeable {
    margin-top: 10px;
  }
</style>
