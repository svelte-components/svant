<RadioGroup on:change="{onChange}" {value}>
  <Radio value="{1}">A</Radio>
  <Radio value="{2}">B</Radio>
  <Radio value="{3}">C</Radio>
  <Radio value="{4}">D</Radio>
</RadioGroup>

<script>
  import { Radio, RadioGroup } from "svant";
  let value = 1;
  function onChange({detail}) {
    console.log("radio checked", detail);
    value = detail;
  }
</script>
