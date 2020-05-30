<ul class="{classes}" direction="ltr" role="menu">
  <slot />
</ul>

<script>
  import { writable } from "svelte/store";
  import { setContext, getContext, createEventDispatcher } from "svelte";
  import classNames from "classnames";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, size: configSize, direction } = $config;
  let prefixCls = getPrefixCls("menu");

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  // Store selected item keys
  export let selectedKeys = [];
  // Mode of the menu - vertical, horizontal, or inline
  export let mode = "vertical";
  // this exports the classObj as class so the user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // ********************** /Props **********************
  let classes;

  let menuStore = writable({});
  setContext("menuStore", menuStore);

  $: $menuStore.selectedKeys = selectedKeys;
  $: $menuStore.mode = mode;

  $: if (typeof classObj === "string") {
    classObj = {
      [classObj]: true
    };
  }

  $: classes = classNames([prefixCls, `${prefixCls}-${mode}`], {
    ...classObj,
    [`${prefixCls}-light`]: true,
    [`${prefixCls}-root`]: true
  });

  $: if ($menuStore.itemClicked) {
    dispatch("click", { key: $menuStore.itemClicked });
    $menuStore.itemClicked = null;
  }
</script>
