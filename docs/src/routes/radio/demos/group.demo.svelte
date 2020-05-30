<RadioGroup bind:value on:change="{onChange}">
  <Radio value="{1}">A</Radio>
  <Radio value="{2}">B</Radio>
  <Radio value="{3}">C</Radio>
  <Radio value="{4}">D</Radio>
</RadioGroup>

<script>
  import { Radio, RadioGroup } from "svant";
  let value = 1;

  function onChange() {
    console.log("radio checked", value);
  }
</script>
