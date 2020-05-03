<Checkbox on:change="{onChange}">Checkbox</Checkbox>

<script>
  import { Checkbox } from "svant";
  function onChange({ detail }) {
    console.log(`checked = ${detail.target.checked}`);
  }
</script>
