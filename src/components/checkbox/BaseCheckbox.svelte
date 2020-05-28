<!-- svelte-ignore a11y-autofocus -->
<span class="{classString}" {style}>
  <input
    {name}
    {id}
    {type}
    {required}
    {readOnly}
    {disabled}
    {tabIndex}
    class="{`${prefixCls}-input`}"
    checked="{!!checked}"
    on:click
    on:focus
    on:blur
    on:change="{handleChange}"
    {autoFocus}
    bind:this="{input}"
    {value}
    {...globalProps} />
  <span class="{`${prefixCls}-inner`}"></span>
</span>

<script>
  import { createEventDispatcher } from "svelte";
  import { string as toStyle } from "to-style";
  import classNames from "classnames";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************
  // the checkbox value
  export let value = null;
  // disables the checkbox
  export let disabled = false;
  // the class prefix
  export let prefixCls;
  // this allows us to get the style as object
  export let style = null;
  // specifies if the checkbox is checked
  export let checked = null;
  // the input type
  export let type = "checkbox";
  // the input name
  export let name = null;
  // the input id
  export let id = null;
  // is the input readonly
  export let readOnly = null;
  // the tab index of the input
  export let tabIndex = null;
  // auto focus of the input
  export let autoFocus = null;
  // sets the input as required
  export let required = null;
  // allows you to bind:focus so you can programmatically focus the checkbox
  export const focus = () => input.focus();
  // allows you to bind:blur so you can programmatically blur the checkbox
  export const blur = () => input.blur();

  // this exports the classObj as class so the button user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };
  // ********************** /Props **********************

  // input dom element
  let input;
  let globalProps;
  let classString;

  // since we are not adding any style we just convert the style object to a style sting if it is not already a string
  $: if (typeof style !== "string") {
    style = toStyle(style);
  }

  $: globalProps = Object.keys($$restProps).reduce((prev, key) => {
    if (
      key.substr(0, 5) === "aria-" ||
      key.substr(0, 5) === "data-" ||
      key === "role"
    ) {
      prev[key] = $$restProps[key];
    }
    return prev;
  }, {});

  $: classString = classNames(prefixCls, classObj, {
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-disabled`]: disabled
  });

  function handleChange(e) {
    if (disabled) {
      return;
    }
    checked = e.target.checked;
    dispatch("change", {
      target: {
        ...$$props,
        checked: e.target.checked
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent
    });
  }
</script>
