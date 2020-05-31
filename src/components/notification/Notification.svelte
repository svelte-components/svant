<div id="svant-notification-wrapper">
  {#each placementOptions as placement (placement)}
    <div
      class="{prefixCls}
      {prefixCls}-{placement}"
      style="{placementStyle(placement)}">
      <span>
        {#each $notificationsStore.notifications as notification (notification.id)}
          <div animate:flip>
            {#if showNotificationHere(notification, placement)}
              <div
                in:fly="{inFly(placement)}"
                out:fly="{outFly(placement)}"
                on:click="{notification.onClick || (() => {})}"
                class="{notificationClasses(notification)}"
                style="{getNotificationStyle(notification)}">
                <div class="{prefixCls}-notice-content">
                  <div class="{notifiationContentClasses(notification)}">
                    {#if notification.type !== 'default' || notification.icon}
                      <svelte:component
                        this="{getNotificationIcon(notification)}"
                        style="{notification.iconColor ? { color: notification.iconColor } : ''}"
                        class="{prefixCls}-notice-icon {prefixCls}-notice-icon-{notification.type}" />
                    {/if}
                    <div class="{prefixCls}-notice-message">
                      {notification.message}
                    </div>
                    <div class="{prefixCls}-notice-description">
                      {notification.description}
                    </div>
                    {#if notification.button}
                      <span
                        class="{prefixCls}-notice-btn"
                        on:click|stopPropagation="{getButtonOptions(notification).onClick}">
                        <Button {...getButtonOptions(notification).props}>
                          {getButtonOptions(notification).text}
                        </Button>
                      </span>
                    {/if}
                  </div>
                </div>
                <span
                  class="{prefixCls}-notice-close"
                  on:click|stopPropagation="{notification.close}">
                  <span class="{prefixCls}-close-x">
                    <svelte:component
                      this="{getCloseIcon(notification)}"
                      class="{prefixCls}-close-icon" />
                  </span>
                </span>
              </div>
            {/if}
          </div>
        {/each}
      </span>
    </div>
  {/each}
</div>

<script>
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { getContext } from "svelte";
  import Button from "@/components/button/Button.svelte";
  import notificationsStore from "./store.js";

  import { default as CloseOutlined } from "@/components/icons/CloseOutlined.svelte";
  import { default as InfoCircleOutlined } from "@/components/icons/InfoCircleOutlined.svelte";
  import { default as CheckCircleOutlined } from "@/components/icons/CheckCircleOutlined.svelte";
  import { default as CloseCircleOutlined } from "@/components/icons/CloseCircleOutlined.svelte";
  import { default as ExclamationCircleOutlined } from "@/components/icons/ExclamationCircleOutlined.svelte";

  import classNames from "classnames";
  import { string as toStyle } from "to-style";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction } = $config;
  const prefixCls = getPrefixCls("notification");

  let placementOptions = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

  function getNotificationIcon(notification) {
    if (notification.icon) return notification.icon;

    switch (notification.type) {
      case "success":
        return CheckCircleOutlined;
      case "error":
        return CloseCircleOutlined;
      case "warning":
        return ExclamationCircleOutlined;
      default:
        return InfoCircleOutlined;
    }
  }

  function getButtonOptions(notification) {
    const { onClick, text, ...props } = notification.button;
    return { onClick, text, props };
  }

  function getNotificationStyle(notification) {
    let style = notification.style;
    if (typeof style !== "string") {
      style = toStyle(style);
    }
    return style;
  }

  function showNotificationHere(notification, placement) {
    return (
      (!notification.placement &&
        $notificationsStore.config.placement === placement) ||
      (!notification.placement &&
        placement === "topRight" &&
        !$notificationsStore.config.placement) ||
      notification.placement === placement
    );
  }

  let placementStyle = () => {};
  $: placementStyle = placement => {
    const left = ["topLeft", "bottomLeft"].includes(placement) ? 0 : "auto";
    const right = ["topRight", "bottomRight"].includes(placement) ? 0 : "auto";
    const top = ["topRight", "topLeft"].includes(placement)
      ? $notificationsStore.config.top || 24
      : "auto";
    const bottom = ["bottomRight", "bottomLeft"].includes(placement)
      ? $notificationsStore.config.bottom || 24
      : "auto";
    return toStyle({ top, right, bottom, left });
  };

  function inFly(placement) {
    return {
      duration: 250,
      x: ["topLeft", "bottomLeft"].includes(placement) ? -250 : 250
    };
  }

  function outFly(placement) {
    return {
      duration: 200,
      y: ["topLeft", "topRight"].includes(placement) ? -25 : 25
    };
  }

  function getCloseIcon(notification) {
    return (
      notification.closeIcon ||
      $notificationsStore.config.closeIcon ||
      CloseOutlined
    );
  }

  function notificationClasses(notification) {
    return classNames({
      [`${prefixCls}-notice`]: true,
      [`${prefixCls}-notice-closable`]: true,
      [notification.className]: !!notification.className,
      [`${prefixCls}-rtl`]:
        direction === "rtl" || $notificationsStore.config.rtl
    });
  }

  function notifiationContentClasses(notification) {
    return classNames({
      [`${prefixCls}-notice-with-icon`]:
        notification.type !== "default" || notification.icon
    });
  }
</script>
