<Switch bind:checked on:change="{onChange}" />

<script>
  import { Switch } from "svant";

  let checked = true;

  function onChange({ detail: checked }) {
    console.log(`switch to ${checked}`);
  }
</script>
