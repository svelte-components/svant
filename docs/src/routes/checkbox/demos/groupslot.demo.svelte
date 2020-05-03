<CheckBoxGroup style="{{ width: '100%' }}" on:change="{onChange}">
  <CheckBox value="A">A</CheckBox>
  <CheckBox value="B">B</CheckBox>
  <CheckBox value="C">C</CheckBox>
  <CheckBox value="D">D</CheckBox>
  <CheckBox value="E">E</CheckBox>
</CheckBoxGroup>

<script>
  import { CheckBoxGroup, CheckBox } from "svant";
  function onChange({ detail }) {
    console.log("checked = ", detail);
  }
</script>
