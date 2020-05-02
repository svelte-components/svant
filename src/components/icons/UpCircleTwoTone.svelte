<Icon {...props} on:click="{e => dispatch('click', e)}" />

<script>
  // GENERATE BY scripts/generateIcons.js
  // DON NOT EDIT IT MANUALLY
  import Icon from "@/components/icons/base/Icon.svelte";
  import UpCircleTwoToneSvg from "@ant-design/icons-svg/lib/asn/UpCircleTwoTone";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // icon props
  export let spin = false;
  export let rotate = false;
  export let style = "";

  export let twoToneColor = null;

  // SVG props
  export let width = null;
  export let height = null;
  export let fill = null;

  let className = "";

  export { className as class };

  $: props = {
    icon: UpCircleTwoToneSvg,
    spin,
    rotate,
    style,
    class: className,
    twoToneColor,
    width,
    height,
    fill
  };
</script>
