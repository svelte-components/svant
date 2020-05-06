<section class="{classes}" {style} {...$$restProps}>
  <slot />
</section>

<script>
  import { getContext, setContext } from "svelte";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import classNames from "classnames";
  import { string as toStyle } from "to-style";

  // ********************** Props **********************

  // manually tell the layout that there is a sider
  export let hasSider = null;
  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // this allows us to get the style as object e.x  style={{'color':'red'}}.
  export let style = null;

  // ********************** /Props **********************

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
  const prefixCls = getPrefixCls("layout");

  // we make the classObj an object so we can add it to the classNames func.
  $: if (typeof classObj === "string") {
    classObj = {
      [classObj]: true
    };
  }

  // since we are not adding any style we just convert the style object to a style sting if it is not already a string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  $: classes = classNames(prefixCls, {
    ...classObj,
    [`${prefixCls}-has-sider`]:
      typeof hasSider === "boolean" ? hasSider : siders.length > 0
  });
</script>
