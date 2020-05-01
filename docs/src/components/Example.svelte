<div {id}>
  <h3>{title}</h3>
  <slot name="description" />
  <section class="code-box">
    <section class="code-box-demo">
      <svelte:component this="{demoComponent}" />
    </section>
    <Collapse {activeKey} className="demo-code-collapse">
      <CollapsePanel key="1" hideArrow className="demo-code-collapse-panel">
        <div slot="header" class="demo-panel-header">
          <div class="toggle-code-wrapper" on:click="{toggleCollapse}">
            <div class="toggle-code">
              <CodeOutlined width="1.5em" height="1.5em" />
              <span style="margin: 2px 0 0 .5rem;">{viewCodeText}</span>
            </div>
          </div>
          {#if isClipboardSupported}
            <div
              class="copy-icon clipboard"
              data-clipboard-text="{demoCode}"
              on:mouseenter="{onCopyHover}"
              on:mouseleave="{onCopyLeave}"
              on:click="{onCopyClicked}"
              class:green-icon="{recentlyCopied}">
              <svelte:component
                this="{recentlyCopied ? CheckOutlined : CopyOutlined}"
                width="1.5em"
                height="1.5em" />
            </div>
          {/if}
        </div>
        <Prism language="svelte" source="{demoCode}" />
      </CollapsePanel>
    </Collapse>
  </section>
</div>

<script>
  import Prism from "./prism/Prism.svelte";
  import { Collapse, CollapsePanel } from "svant";
  import { CodeOutlined, CopyOutlined, CheckOutlined } from "svant/icons";
  import ClipboardJS from "clipboard";
  import { onDestroy, onMount } from "svelte";

  export let id;
  export let title;
  export let demoComponent;
  export let demoCode;

  let activeKey = [];
  let viewCodeText = "View Code";
  // Need to store instance of clipboard in a variable so we can use it in onDestroy
  let clipboard;
  let isClipboardSupported = false;
  let recentlyCopied = false;
  let copyHovering = false;
  let copyIcon = CopyOutlined;

  $: copyIcon = recentlyCopied && copyHovering ? CheckOutlined : CopyOutlined;

  onMount(() => {
    // This cannot run on the server
    clipboard = new ClipboardJS(".clipboard");
    isClipboardSupported = ClipboardJS.isSupported();
  });

  onDestroy(() => {
    clipboard && clipboard.destroy();
  });

  $: viewCodeText = activeKey.includes("1") ? "Hide Code" : "View Code";

  function toggleCollapse() {
    activeKey = activeKey.includes("1") ? [] : ["1"];
  }

  function onCopyHover() {
    copyHovering = true;
  }

  function onCopyLeave() {
    recentlyCopied = false;
    copyHovering = false;
  }

  function onCopyClicked() {
    recentlyCopied = true;
  }
</script>

<style>
  .demo-panel-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
  }

  .toggle-code-wrapper {
    margin-right: auto;
    margin-left: auto;
  }

  .toggle-code {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .copy-icon {
    margin-right: 1rem;
    cursor: pointer;
  }

  .green-icon {
    color: rgb(82, 196, 26);
  }

  :global(.demo-code-collapse) {
    background: #fff;
    border: none !important;
  }

  :global(.ant-collapse
      > .ant-collapse-item.demo-code-collapse-panel
      > .ant-collapse-header) {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.45);
    padding: 0 !important;
    cursor: auto;
  }

  :global(.ant-collapse
      > .ant-collapse-item.demo-code-collapse-panel
      > .ant-collapse-header:hover) {
    background-color: #e6f7ff;
    color: #1890ff;
  }

  :global(.demo-code-collapse-panel > .ant-collapse-content) {
    border-top: 0;
  }

  :global(.demo-code-collapse-panel .ant-collapse-content-box) {
    padding: 0;
    background-color: #fafafa;
  }

  :global(.demo-code-collapse-panel .language-svelte) {
    background-color: transparent;
  }
</style>
