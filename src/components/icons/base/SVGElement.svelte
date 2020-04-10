<svg bind:this={container} {...attrs} />

<script>
  import { onMount } from "svelte";

  let className;

  export { className as class };
  export let width;
  export let height;
  export let fill;
  export let style;

  const svgBaseProps = {
    width: width || "1em",
    height: height || "1em",
    fill: fill || "currentColor",
    "aria-hidden": "true",
    focusable: "false"
  };

  export let icon;
  let container;

  $: attrs = { ...icon.attrs, ...svgBaseProps, class: className, style };

  $: addChildren(container, icon);

  function createNode(nodeData) {
    let node = document.createElementNS(
      "http://www.w3.org/2000/svg",
      nodeData.tag
    );
    Object.keys(nodeData.attrs).forEach(key => {
      node.setAttribute(key, nodeData.attrs[key]);
    });
    return node;
  }
  function addChildren(parent, node) {
    if (!parent) {
      return;
    }
    parent.innerHTML = "";
    if (!node.children) {
      return;
    }
    node.children.forEach(child => {
      let childNode = createNode(child);
      addChildren(childNode, child);
      parent.appendChild(childNode);
    });
  }
</script>
