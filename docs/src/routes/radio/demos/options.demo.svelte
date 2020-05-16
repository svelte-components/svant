<RadioGroup options="{plainOptions}" on:change="{onChange1}" value="{value1}" />
<br/>
<RadioGroup {options} on:change="{onChange2}" value="{value2}" />
<br/>
<RadioGroup
  options="{optionsWithDisabled}"
  on:change="{onChange3}"
  value="{value3}" />

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

  function onChange1({ detail }) {
    console.log("radio1 checked", detail);
    value1 = detail;
  }

  function onChange2({ detail }) {
    console.log("radio2 checked", detail);
    value2 = detail;
  }

  function onChange3({ detail }) {
    console.log("radio3 checked", detail);
    value3 = detail;
  }
</script>
