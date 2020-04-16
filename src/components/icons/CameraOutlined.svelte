<Icon {...props} on:click="{e => dispatch('click', e)}" />

<script>
  // GENERATE BY ./scripts/generate.js
  // DON NOT EDIT IT MANUALLY
  import Icon from "@/components/icons/base/Icon.svelte";
  import CameraOutlinedSvg from "@ant-design/icons-svg/lib/asn/CameraOutlined";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // icon props
  export let spin = false;
  export let rotate = false;
  export let style = "";
  export let tabIndex = null;

  // SVG props
  export let width = null;
  export let height = null;
  export let fill = null;
  export let svgClass = null;
  export let svgStyle = null;

  let className = "";

  export { className as class };

  $: props = {
    icon: CameraOutlinedSvg,
    spin,
    rotate,
    style,
    class: className,
    tabIndex,
    width,
    height,
    fill,
    svgClass,
    svgStyle
  };
</script>
