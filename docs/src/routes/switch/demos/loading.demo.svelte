<Switch loading bind:checked="{checked1}" />
<br />
<Switch bind:checked="{checked2}" size="small" loading />

<script>
  import { Button, Switch } from "svant";
  let checked1 = true;
  let checked2 = false;
</script>
