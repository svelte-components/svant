<span
  role="img"
  aria-label="{icon.name}"
  class="{classes}"
  {style}
  tabindex="{tabIndex}"
  bind:this="{iconEl}"
  on:click="{e => dispatch('click', e)}">
  {#if component}
    <svelte:component this="{component}" />
  {:else}
    <SVGElement
      icon="{iconConfig}"
      class="{svgClasses}"
      style="{svgStyle}"
      {width}
      {height}
      {fill} />
  {/if}

</span>

<script>
  import SVGElement from "@/components/icons/base/SVGElement.svelte";
  import classnames from "classnames";
  import {
    getSecondaryColor,
    getTwoToneColors,
    normalizeTwoToneColors
  } from "./utils";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // icon props
  export let icon = {};
  export let spin = false;
  export let rotate = false;
  export let style = "";
  export let tabIndex = null;
  export let component = null;
  export let twoToneColor = null;

  // SVG props
  export let width = null;
  export let height = null;
  export let fill = null;
  export let svgClass = "";
  export let svgStyle = "";

  let className = "";

  export { className as class };

  let _twoToneColor;
  let iconEl;

  $: classes = classnames(["anticon", `anticon-${icon.name}`, className]);
  $: svgClasses = classnames([{ "anticon-spin": spin }, svgClass]);
  if (!svgStyle) {
    svgStyle = "";
  }
  svgStyle = svgStyle.trim();
  if (!svgStyle.endsWith(";")) {
    svgStyle = svgStyle + ";";
  }
  $: svgStyle = rotate
    ? svgStyle +
      `ms-transform: rotate(${rotate}deg);  transform: rotate(${rotate}deg);`
    : svgStyle;

  $: if (twoToneColor) {
    const _colors = normalizeTwoToneColors(twoToneColor);
    if (_colors.length === 1) {
      _twoToneColor = getTwoToneColors({
        primaryColor: _colors[0]
      });
    } else {
      _twoToneColor = getTwoToneColors({
        primaryColor: _colors[0],
        secondaryColor: _colors[1]
      });
    }
  } else {
    _twoToneColor = getTwoToneColors({
      primaryColor: "#1890ff",
      secondaryColor: getSecondaryColor("#1890ff")
    });
  }

  let iconConfig;

  $: if (typeof icon.icon === "function") {
    iconConfig = icon.icon(
      _twoToneColor.primaryColor,
      _twoToneColor.secondaryColor
    );
  } else {
    iconConfig = icon.icon;
  }

  $: if (component && iconEl) {
    let customeSvg = iconEl.children[0];
    if (iconEl.children > 1 || !customeSvg || customeSvg.tagName !== "svg") {
      iconEl.innerHTML = "";
      console.error("Only one svg child allowed");
    } else {
      let classAttr =
        (customeSvg.getAttribute("class") || "") + ` ${svgClasses}`;
      let existingStyle = customeSvg.getAttribute("style") || "";
      existingStyle = existingStyle.trim();
      if (!existingStyle.endsWith(";")) {
        existingStyle = existingStyle + ";";
      }
      existingStyle = existingStyle + svgStyle;
      customeSvg.setAttribute("class", classAttr);
      customeSvg.setAttribute("style", existingStyle);
      if (width) {
        customeSvg.setAttribute("width", width);
      }
      if (height) {
        customeSvg.setAttribute("height", height);
      }
      if (fill) {
        customeSvg.setAttribute("fill", fill);
      }
    }
  }
</script>

<style global>
  .anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .anticon > * {
    line-height: 1;
  }
  .anticon svg {
    display: inline-block;
  }
  .anticon::before {
    display: none;
  }
  .anticon .anticon-icon {
    display: block;
  }
  .anticon[tabindex] {
    cursor: pointer;
  }
  .anticon-spin::before,
  .anticon-spin {
    display: inline-block;
    -webkit-animation: loadingCircle 1s infinite linear;
    animation: loadingCircle 1s infinite linear;
  }
  @-webkit-keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
