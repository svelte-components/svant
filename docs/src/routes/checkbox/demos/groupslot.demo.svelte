<CheckboxGroup style="{{ width: '100%' }}" on:change="{onChange}">
  <Checkbox value="A">A</Checkbox>
  <Checkbox value="B">B</Checkbox>
  <Checkbox value="C">C</Checkbox>
  <Checkbox value="D">D</Checkbox>
  <Checkbox value="E">E</Checkbox>
</CheckboxGroup>

<script>
  import { CheckboxGroup, Checkbox } from "svant";
  function onChange({ detail }) {
    console.log("checked = ", detail);
  }
</script>
