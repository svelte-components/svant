<Switch on:change="{onChange}" defaultChecked />

<script>
  import { Switch } from "svant";
  function onChange({ detail: checked }) {
    console.log(`switch to ${checked}`);
  }
</script>
