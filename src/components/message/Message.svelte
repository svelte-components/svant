<div class="{prefixCls}" id="svant-messages-wrapper">
  <span>
    {#each $messages as message (message.id)}
      <div class="{prefixCls}-notice" animate:flip>
        <div
          class="{prefixCls}-notice-content"
          transition:fly="{{ y: -25, duration: 250 }}">
          <div
            class="{classNames(`${prefixCls}-custom-content`, {
              [`${prefixCls}-${message.type}`]: true,
              [`${prefixCls}-rtl`]: direction === 'rtl'
            })}">
            <svelte:component
              this="{message.icon || getMessageIcon(message.type)}"
              spin="{message.type === 'loading'}" />
            <span>{message.content}</span>
          </div>
        </div>
      </div>
    {/each}
  </span>
</div>

<script>
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { getContext } from "svelte";
  import messages from "./store.js";
  import classNames from "classnames";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import {
    InfoCircleFilled,
    CheckCircleFilled,
    CloseCircleFilled,
    ExclamationCircleFilled,
    LoadingOutlined
  } from "@/components/icons";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction } = $config;
  const prefixCls = getPrefixCls("message");

  function getMessageIcon(type) {
    switch (type) {
      case "success":
        return CheckCircleFilled;
      case "error":
        return CloseCircleFilled;
      case "warning":
        return ExclamationCircleFilled;
      case "loading":
        return LoadingOutlined;
      default:
        return InfoCircleFilled;
    }
  }
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
