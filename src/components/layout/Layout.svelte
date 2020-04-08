<section class={classes} {...$$restProps}>
  <slot />
</section>

<script>
  import { getContext, setContext } from "svelte";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import classNames from "classnames";

  let customizePrefixCls;
  export let hasSider;
  export { customizePrefixCls as prefixCls };
  let customClasses;
  export { customClasses as class };
  const config = getContext(CONFIG_KEY) || configProvider();

  let siders = [];

  const siderHook = {
    addSider: id => {
      siders = [...siders, id];
    },
    removeSider: id => {
      siders = siders.filter(currentId => currentId !== id);
    }
  };

  setContext("$siderHook", siderHook);

  const getPrefixCls = $config.getPrefixCls;
  const prefixCls = getPrefixCls("layout", customizePrefixCls);

  $: classes = classNames(prefixCls, customClasses, {
    [`${prefixCls}-has-sider`]:
      typeof hasSider === "boolean" ? hasSider : siders.length > 0
  });
</script>

<style global lang="less">
  @import "style/index";
</style>
