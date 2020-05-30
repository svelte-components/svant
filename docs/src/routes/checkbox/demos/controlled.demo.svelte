<div>
  <p style="{{ marginBottom: '20px' }}">
    <Checkbox bind:checked {disabled} on:change="{onChange}">{label}</Checkbox>
  </p>
  <p>
    <Button type="primary" size="small" on:click="{toggleChecked}">
      {!checked ? 'Check' : 'Uncheck'}
    </Button>
    <Button
      style="{{ margin: '0 10px' }}"
      type="primary"
      size="small"
      on:click="{toggleDisable}">
      {!disabled ? 'Disable' : 'Enable'}
    </Button>
  </p>
</div>

<script>
  import { Checkbox } from "svant";
  import { Button } from "svant";
  let checked = true;
  let disabled = false;
  let label;
  $: label = `${checked ? "Checked" : "Unchecked"}-${
    disabled ? "Disabled" : "Enabled"
  }`;
  function toggleChecked() {
    checked = !checked;
  }

  function toggleDisable() {
    disabled = !disabled;
  }

  function onChange() {
    console.log("checked = ", checked);
  }
</script>
