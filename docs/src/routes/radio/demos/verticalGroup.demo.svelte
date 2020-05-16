<RadioGroup on:change="{onChange}" {value}>
  <Radio value="{1}" style="{radioStyle}">Option A</Radio>
  <Radio value="{2}" style="{radioStyle}">Option B</Radio>
  <Radio value="{3}" style="{radioStyle}">Option C</Radio>
</RadioGroup>

<script>
  import { Radio, RadioGroup } from "svant";
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  };
  let value = 1;
  function onChange({ detail }) {
    console.log("radio checked", detail);
    value = detail;
  }
</script>
