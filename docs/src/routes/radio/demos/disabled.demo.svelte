<Radio defaultChecked="{false}" {disabled}>Disabled</Radio>
<br />
<Radio defaultChecked {disabled}>Disabled</Radio>
<Button type="primary" on:click="{toggleDisabled}" style="{{ marginTop: 20 }}">
  Toggle disabled
</Button>

<script>
  import { Radio, Button } from "svant";
  let disabled = true;

  function toggleDisabled() {
    disabled = !disabled;
  }
</script>
