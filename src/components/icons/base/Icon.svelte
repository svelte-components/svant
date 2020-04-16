<span
  role="img"
  aria-label="{icon.name}"
  class="{classes}"
  {style}
  {...$$restProps}
  bind:this="{iconEl}"
  on:click="{e => dispatch('click', e)}">
  {#if component}
    <svelte:component this="{component}" />
  {:else}
    <SVGElement
      icon="{iconConfig}"
      {width}
      {height}
      {fill}
      class="{svgClasses}"
      style="{svgStyle}" />
  {/if}

</span>

<script>
  import SVGElement from "@/components/icons/base/SVGElement.svelte";
  import classNames from "classnames";
  import parse from "style-to-object";
  import { string as toStyle } from "to-style";
  import {
    getSecondaryColor,
    getTwoToneColors,
    normalizeTwoToneColors
  } from "./utils";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  // the icon object from @ant-design/icons-svg
  export let icon;
  // rotate icon with animation
  export let spin = false;
  // rotate by n degrees (not working in IE9)
  export let rotate = false;
  // only supports the two-tone icon. Specify the primary color.
  export let twoToneColor = null;
  // the component used for the root node, the first child of this component should be SVG
  export let component = null;
  // the width property of the svg node
  export let width = null;
  // the height property of the svg node
  export let height = null;
  // the fill property of the svg node
  export let fill = null;

  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // this allows us to get the style as object e.x  style={{'color':'red'}}.
  export let style = null;
  // ********************** /Props **********************

  let _twoToneColor;
  let iconEl;
  let iconConfig;
  let svgClasses;
  let svgStyleObj;
  let svgStyle;

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

  $: classes = classNames(["anticon", `anticon-${icon.name}`], classObj);

  $: svgClasses = spin ? "anticon-spin" : null;

  $: if (rotate) {
    svgStyleObj = {
      "ms-transform": `rotate(${rotate}deg)`,
      transform: `rotate(${rotate}deg)`
    };
  }

  $: svgStyle = toStyle(svgStyleObj);

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

  $: if (typeof icon.icon === "function") {
    iconConfig = icon.icon(
      _twoToneColor.primaryColor,
      _twoToneColor.secondaryColor
    );
  } else {
    iconConfig = icon.icon;
  }

  $: if (component && iconEl) {
    const customeSvg = iconEl.children[0];
    if (iconEl.children > 1 || !customeSvg || customeSvg.tagName !== "svg") {
      iconEl.innerHTML = "";
      console.error("Only one svg child allowed");
    } else {
      if (svgStyleObj) {
        let existingStyle = customeSvg.getAttribute("style") || "";
        let styleObj = parse(existingStyle);
        customeSvg.setAttribute("style", toStyle(...styleObj, ...svgStyleObj));
      }
      if (svgClasses) {
        let classAttr =
          (customeSvg.getAttribute("class") || "") + ` ${svgClasses}`;
        customeSvg.setAttribute("class", classAttr);
      }
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

<style global lang="less">
  @import "styles/index.less";
</style>
