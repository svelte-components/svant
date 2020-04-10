<header class="{classes}" {style} {...$$restProps}>
  <slot />
</header>

<script>
  import { getContext } from "svelte";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import classNames from "classnames";
  import { string as toStyle } from "to-style";

  // ********************** Props **********************

  // theme to use
  export let theme = "dark";
  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // this allows us to get the style as object e.x  style={{'color':'red'}}.
  export let style = null;

  // ********************** /Props **********************

  const config = getContext(CONFIG_KEY) || configProvider();
  const prefixCls = $config.getPrefixCls("layout-header");

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

  $: classes = classNames(prefixCls, classObj, `${prefixCls}-${theme}`);
</script>
