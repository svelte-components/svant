<div>
  <p style="{{ marginBottom: '20px' }}">
    <CheckBox {checked} {disabled} on:change="{onChange}">{label}</CheckBox>
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
  import { CheckBox } from "svant";
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

  function onChange({ detail }) {
    console.log("checked = ", detail.target.checked);
    checked = detail.target.checked;
  }
</script>
