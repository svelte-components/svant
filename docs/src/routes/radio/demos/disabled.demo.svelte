<Radio bind:checked="{checked1}" {disabled}>Disabled</Radio>
<br />
<Radio bind:checked="{checked2}" {disabled}>Disabled</Radio>
<Button type="primary" on:click="{toggleDisabled}" style="{{ marginTop: 20 }}">
  Toggle disabled
</Button>

<script>
  import { Radio, Button } from "svant";
  let disabled = true;

  let checked1 = false;
  let checked2 = true;

  function toggleDisabled() {
    disabled = !disabled;
  }
</script>
