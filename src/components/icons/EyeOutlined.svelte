<Icon {...props} on:click="{e => dispatch('click', e)}" />

<script>
  // GENERATE BY scripts/generateIcons.js
  // DON NOT EDIT IT MANUALLY
  import Icon from "@/components/icons/base/Icon.svelte";
  import EyeOutlinedSvg from "@ant-design/icons-svg/lib/asn/EyeOutlined";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // icon props
  export let spin = false;
  export let rotate = false;
  export let style = "";

  // SVG props
  export let width = null;
  export let height = null;
  export let fill = null;

  let className = "";

  export { className as class };

  $: props = {
    icon: EyeOutlinedSvg,
    spin,
    rotate,
    style,
    class: className,
    width,
    height,
    fill
  };
</script>
