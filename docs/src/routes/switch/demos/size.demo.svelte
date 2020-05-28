<div>
  <Switch bind:checked="{checked1}" />
  <br />
  <Switch size="small" bind:checked="{checked2}" />
</div>

<script>
  import { Switch } from "svant";
  let checked1 = true;
  let checked2 = true;
</script>
