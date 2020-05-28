<RadioGroup
  options="{plainOptions}"
  on:change="{onChange1}"
  bind:value="{value1}" />
<br />
<RadioGroup
  options="{optionsWithDisabled}"
  on:change="{onChange2}"
  bind:value="{value2}" />
<br />
<RadioGroup {options} disabled bind:value="{value3}" />

<script>
  import { RadioGroup } from "svant";
  let value1 = "Apple";
  let value2 = "Apple";
  let value3 = "Apple";
  const plainOptions = ["Apple", "Pear", "Orange"];
  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" }
  ];
  const optionsWithDisabled = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange", disabled: true }
  ];

  function onChange1() {
    console.log("radio1 checked", value1);
  }

  function onChange2() {
    console.log("radio2 checked", value2);
  }
</script>
