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
  <div class="ant-modal-root" bind:this="{thisModal}">
    {#if mask}
      <div
        transition:fade="{{ duration: 100 }}"
        class="ant-modal-mask"
        style="{`z-index: ${zIndex};`}
        {maskStyle}"></div>
    {/if}
    <div
      class="ant-modal-wrap {wrapClassName}"
      class:ant-modal-centered="{centered}"
      role="dialog"
      style="{`z-index: ${zIndex};`}">
      <div class="{modalClasses}" role="document" style="{modalStyleString}">
        <div
          transition:fadescale="{{ duration: 200 }}"
          class="ant-modal-content">
          {#if modalType === 'standard'}
            {#if closeable}
              <button
                aria-label="Close"
                class="ant-modal-close"
                type="button"
                on:click="{onCancelLocal}">
                <span class="ant-modal-close-x">
                  <svelte:component
                    this="{closeIcon}"
                    class="ant-modal-close-icon" />
                </span>
              </button>
            {/if}
            {#if title}
              <div class="ant-modal-header">
                <div class="ant-modal-title">{title}</div>
              </div>
            {/if}
          {/if}
          {#if modalType !== 'standard' && closeable}
            <button
              aria-label="Close"
              class="ant-modal-close"
              type="button"
              on:click="{onCancelLocal}">
              <span class="ant-modal-close-x">
                <svelte:component
                  this="{closeIcon}"
                  class="ant-modal-close-icon" />
              </span>
            </button>
          {/if}
          <div class="ant-modal-body" style="{bodyStyle}">
            {#if modalType === 'standard'}
              <slot />
            {:else}
              <div
                class="ant-modal-confirm-body-wrapper"
                class:confirm-body-wrapper--closeable="{closeable}">
                <div class="ant-modal-confirm-body">
                  {#if icon}
                    <svelte:component this="{icon}" />
                  {/if}

                  {#if title}
                    <span class="ant-modal-confirm-title">{title}</span>
                  {/if}

                  <div class="ant-modal-confirm-content">
                    {#if typeof content === 'function'}
                      <svelte:component this="{content}" />
                    {:else}{content}{/if}
                  </div>
                </div>
                <div class="ant-modal-confirm-btns">
                  {#if modalType === 'confirm'}
                    <Button
                      on:click="{onCancelLocal}"
                      {...cancelButtonProps}
                      focusOnMount="{autoFocusButton === 'cancel'}">
                      {cancelText}
                    </Button>
                  {/if}
                  <Button
                    type="{okType}"
                    on:click="{onOkLocal}"
                    {...okButtonProps}
                    loading="{confirmLoading}"
                    focusOnMount="{autoFocusButton === 'ok'}">
                    {okText}
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
                    on:click="{onCancelLocal}"
                    {...cancelButtonProps}
                    focusOnMount="{autoFocusButton === 'cancel'}">
                    {cancelText}
                  </Button>
                  <Button
                    {...okButtonProps}
                    type="{okType}"
                    on:click="{onOkLocal}"
                    loading="{confirmLoading}"
                    focusOnMount="{autoFocusButton === 'ok'}">
                    {okText}
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
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { fade, fly } from "svelte/transition";
  import {
    CloseOutlined,
    InfoCircleOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined
  } from "@/components/icons";
  import Button from "../button/Button.svelte";
  import { destroyAll } from "./store";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  // If the modal is visible
  export let visible = false;
  // User has the option to remove the footer
  export let footer = true;
  // Modal width
  export let width;
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
  // confirm and status modals need to call ok and cancel functions
  export let onOk = null;
  export let onCancel = null;
  // Extra props for the buttons
  export let okButtonProps = {};
  export let cancelButtonProps = {};
  // Type of button to use for OK (primary, danger, etc.)
  export let okType = "primary";
  // Text of the ok button
  export let okText = "OK";
  // Text of the cancel button
  export let cancelText = "Cancel";
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
  // Function to be called after the modal closes
  export let afterClose = () => {};
  // Functions for destroying the modal
  export const destroy = () => {
    localVisible = false;
    scrollableBody = true;
    afterClose();
  };
  // Body style for modal body element
  export let bodyStyle = "";
  // Style for the mask
  export let maskStyle = "";
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
  // Style string for the ant-modal element
  let modalStyleString = width ? `width: ${width};` : "";
  // Ref for the root element
  let thisModal;

  function setClickPosition(e) {
    clickPosition = {
      x: e.pageX,
      y: e.pageY
    };
  }

  function setWrapClickClose(e) {
    if (e.target.className === "ant-modal-wrap") {
      onCancelLocal();
    }
  }

  function removeModalOnEscape(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      const allModalsOpen = document.querySelectorAll(".ant-modal-root");
      const lastModal = allModalsOpen[allModalsOpen.length - 1];
      if (thisModal === lastModal) {
        onCancelLocal();
      }
    }
  }

  onMount(() => {
    if (keyboard) {
      window.addEventListener("keydown", removeModalOnEscape);
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", removeModalOnEscape);
      document.body.removeEventListener("click", setWrapClickClose);
      document.removeEventListener("click", setClickPosition);
    }
  });

  $: modalClasses = computeModalClasses();

  function computeModalClasses() {
    let classes = "ant-modal";
    if (modalType !== "standard") {
      classes += ` ant-modal-confirm ant-modal-confirm-${modalType}`;
    }
    return classes;
  }

  $: if (!width) {
    width = modalType === "standard" ? "520px" : "416px";
    modalStyleString = `width: ${width};`;
  }

  $: if (visible) {
    setTimeout(() => {
      scrollableBody = false;
      localVisible = true;
    }, 50);
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

  // watch for Modal.destroyAll() call
  $: if ($destroyAll && modalType !== "standard") destroy();

  // We want to close the modal if we clicked outside of it
  $: if (localVisible && mask && maskClosable) {
    document.body.addEventListener("click", setWrapClickClose);
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

  async function onOkLocal() {
    if (onOk) {
      confirmLoading = true;
      await onOk();
      confirmLoading = false;
    }

    if (modalType !== "standard") destroy();
    dispatch("ok");
  }

  async function onCancelLocal() {
    onCancel && (await onCancel());
    if (modalType !== "standard") destroy();
    dispatch("cancel");
  }
</script>

<style lang="less" global>
  @import "style/index.less";

  .confirm-body-wrapper--closeable {
    margin-top: 10px;
  }
</style>
