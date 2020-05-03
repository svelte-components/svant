<CheckBox on:change="{onChange}">Checkbox</CheckBox>

<script>
  import { CheckBox } from "svant";
  function onChange({ detail }) {
    console.log(`checked = ${detail.target.checked}`);
  }
</script>
