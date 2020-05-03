<div>
  <CheckBoxGroup
    options="{plainOptions}"
    defaultValue="{['Apple']}"
    on:change="{onChange}" />
  <br />
  <br />
  <CheckBoxGroup {options} defaultValue="{['Pear']}" on:change="{onChange}" />
  <br />
  <br />
  <CheckBoxGroup
    options="{optionsWithDisabled}"
    disabled
    defaultValue="{['Apple']}"
    on:change="{onChange}" />
</div>

<script>
  import { CheckBoxGroup } from "svant";

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
