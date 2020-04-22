<div class="ant-modal-root">
  {#if localVisible}
    <div transition:fade="{{ duration: 100 }}" class="ant-modal-mask"></div>
    <div class="ant-modal-wrap" role="dialog" style="" tabindex="-1">
      <div class="ant-modal" role="document" style="width: 520px;">
        <div
          aria-hidden="true"
          style="width: 0px; height: 0px; overflow: hidden; outline: none;"
          tabindex="0"></div>
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
  // import { quadOut } from "svelte/easing";
  import { CloseOutlined } from "@/components/icons";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  export let visible = false;

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
