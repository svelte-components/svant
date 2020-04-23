<div class="ant-modal-root">
  {#if localVisible}
    <div transition:fade="{{ duration: 100 }}" class="ant-modal-mask"></div>
    <div class="ant-modal-wrap" role="dialog">
      <div class="ant-modal" role="document" style="{`width: ${width};`}">
        <div
          transition:fadescale="{{ duration: 200 }}"
          class="ant-modal-content">
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
            <div class="ant-modal-title">{title}</div>
          </div>
          <div class="ant-modal-body">
            <slot />
          </div>
          <div class="ant-modal-footer">
            <slot name="footer">
              <div>
                <Button on:click="{onCancel}">Cancel</Button>
                <Button
                  type="primary"
                  on:click="{onOk}"
                  loading="{confirmLoading}">
                  OK
                </Button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<script>
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { CloseOutlined } from "@/components/icons";
  import Button from "../button/Button.svelte";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  // If the modal is visible
  export let visible = false;
  // Modal width
  export let width = "520px";
  // Title for the header
  export let title;
  // If the ok button is in loading state
  export let confirmLoading = false;

  // ********************** /Props **********************

  // Need to allow clickPosition to be set before first transition
  let localVisible = false;
  // Used so we can set a transform-origin for the transition
  let clickPosition = null;
  // Used for custom transition. Set below as a watched property
  let fadescale;

  $: if (visible) {
    setDialogOnBody("add");
    setTimeout(() => {
      localVisible = true;
    }, 50);
  } else {
    setDialogOnBody("remove");
    localVisible = false;
  }

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

  function setDialogOnBody(value) {
    // value should be 'add' or 'remove'
    document.querySelector("body").classList[value]("dialog-open");
  }

  function onOk() {
    dispatch("ok");
  }

  function onCancel() {
    dispatch("cancel");
  }
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
