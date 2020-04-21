<div class="ant-modal-root">
  {#if visible}
    <div transition:fade="{{ duration: 100 }}" class="ant-modal-mask"></div>
    <div
      transition:fadescale="{{ duration: 250 }}"
      class="ant-modal-wrap"
      role="dialog"
      style=""
      tabindex="-1">
      <div
        class="ant-modal"
        role="document"
        style="width: 520px; transform-origin: 15px 11px;">
        <div
          aria-hidden="true"
          style="width: 0px; height: 0px; overflow: hidden; outline: none;"
          tabindex="0"></div>
        <div class="ant-modal-content">
          <button
            aria-label="Close"
            class="ant-modal-close"
            type="button"
            on:click="{onCancel}">
            <span class="ant-modal-close-x">
              <CloseOutlined class="ant-modal-close-icon" />
            </span>
          </button>

          <div class="ant-modal-header">
            <div class="ant-modal-title">Basic Modal</div>
          </div>
          <div class="ant-modal-body">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </div>
          <div class="ant-modal-footer">
            <div>
              <button class="ant-btn" type="button" on:click="{onCancel}">
                <span>Cancel</span>
              </button>
              <button
                class="ant-btn ant-btn-primary"
                type="button"
                on:click="{onOk}">
                <span>OK</span>
              </button>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          style="width: 0px; height: 0px; overflow: hidden; outline: none;"
          tabindex="0"></div>
      </div>
    </div>
  {/if}
</div>

<script>
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import { CloseOutlined } from "@/components/icons";

  const dispatch = createEventDispatcher();

  export let visible = false;

  function onOk() {
    dispatch("ok");
  }

  function onCancel() {
    dispatch("cancel");
  }

  function fadescale(node, { duration }) {
    return {
      duration,
      easing: quadOut,
      css: t =>
        `opacity: ${t}; transform: scale(${t}); transition-timing-function:cubic-bezier(0,.55,.45,1);`
    };
  }
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
