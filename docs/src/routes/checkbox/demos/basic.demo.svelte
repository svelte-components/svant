<Checkbox bind:checked on:change="{onChange}">Checkbox</Checkbox>

<script>
  import { Checkbox } from "svant";

  let checked = false;

  function onChange({ detail }) {
    console.log(`checked = ${detail.target.checked}`);
  }
</script>
