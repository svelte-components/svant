<div>
  <CheckboxGroup
    options="{plainOptions}"
    bind:value="{value1}"
    on:change="{onChange}" />
  <br />
  <br />
  <CheckboxGroup {options} bind:value="{value2}" on:change="{onChange}" />
  <br />
  <br />
  <CheckboxGroup
    options="{optionsWithDisabled}"
    disabled
    bind:value="{value3}"
    on:change="{onChange}" />
</div>

<script>
  import { CheckboxGroup } from "svant";

  let value1 = ['Apple'];
  let value2 = ['Pear'];
  let value3 = ['Apple'];

  const plainOptions = ["Apple", "Pear", "Orange"];
  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange", disabled: true }
  ];
  const optionsWithDisabled = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" }
  ];

  function onChange({ detail: checkedValues }) {
    console.log("checked = ", checkedValues);
  }
</script>
