<Checkbox bind:checked on:change="{onChange}">Checkbox</Checkbox>

<script>
  import { Checkbox } from "svant";

  let checked = false;

  function onChange() {
    console.log(`checked = ${checked}`);
  }
</script>
