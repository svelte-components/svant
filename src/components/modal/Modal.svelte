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
  <div class="ant-modal-root">
    <div transition:fade="{{ duration: 100 }}" class="ant-modal-mask"></div>
    <div
      class="ant-modal-wrap"
      class:ant-modal-centered="{centered}"
      role="dialog">
      <div class="{modalClasses}" role="document" style="{styleString}">
        <div
          transition:fadescale="{{ duration: 200 }}"
          class="ant-modal-content">
          {#if modalType === 'standard'}
            <button
              aria-label="Close"
              class="ant-modal-close"
              type="button"
              on:click="{onCancelLocal}">
              <span class="ant-modal-close-x">
                <CloseOutlined class="ant-modal-close-icon" />
              </span>
            </button>
            {#if title}
              <div class="ant-modal-header">
                <div class="ant-modal-title">{title}</div>
              </div>
            {/if}
          {/if}
          <div class="ant-modal-body">
            {#if modalType === 'standard'}
              <slot />
            {:else}
              <div class="ant-modal-confirm-body-wrapper">
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
                    <Button on:click="{onCancelLocal}" {...cancelButtonProps}>
                      {cancelText}
                    </Button>
                  {/if}
                  <Button
                    type="{okType}"
                    on:click="{onOkLocal}"
                    {...okButtonProps}
                    loading="{confirmLoading}">
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
                  <Button on:click="{onCancelLocal}">{cancelText}</Button>
                  <Button
                    type="{okType}"
                    on:click="{onOkLocal}"
                    loading="{confirmLoading}">
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
  import { createEventDispatcher } from "svelte";
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
  // Functions for destroying the modal
  export const destroy = () => {
    localVisible = false;
    scrollableBody = true;
  };

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
  let styleString = width ? `width: ${width};` : "";

  $: modalClasses = computeClasses();

  function computeClasses() {
    let classes = "ant-modal";
    if (modalType !== "standard") {
      classes += ` ant-modal-confirm ant-modal-confirm-${modalType}`;
    }
    return classes;
  }

  $: if (!width) {
    width = modalType === "standard" ? "520px" : "416px";
    styleString = `width: ${width};`;
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
      if (["top", "bottom"].includes(key)) styleString += ` ${key}: ${value};`;
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

  // Set click position each time there is a click
  if (typeof window !== "undefined" && window.document) {
    window.document.addEventListener("click", e => {
      clickPosition = {
        x: e.pageX,
        y: e.pageY
      };
    });
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
</style>
