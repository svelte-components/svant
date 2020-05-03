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
            <InfoCircleFilled />
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
  import { InfoCircleFilled } from "@/components/icons";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction } = $config;
  const prefixCls = getPrefixCls("message");

  $: $messages.forEach(message => {
    setTimeout(() => {
      $messages = $messages.filter(m => m !== message);
    }, 2000);
  });
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
