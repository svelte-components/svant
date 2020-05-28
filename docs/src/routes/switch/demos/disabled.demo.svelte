<Switch {disabled} bind:checked />
<br />
<Button type="primary" on:click="{toggle}" style="{{ marginTop: '16px' }}">
  Toggle disabled
</Button>

<script>
  import { Button, Switch } from "svant";
  let checked = true;
  let disabled = true;
  function onChange({ detail: checked }) {
    console.log(`switch to ${checked}`);
  }
  function toggle() {
    disabled = !disabled;
  }
</script>
