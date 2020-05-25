<Select
  bind:value="{selected1}"
  style="{{ width: 120 }}"
  on:change="{onChange}"
  class="my-select-wrapper"
  dropdownClass="my-dropdown">
  <Option value="jack" label="Jack" />
  <Option value="lucy" label="Lucy" />
  <Option value="disabled" label="Disabled" disabled />
  <Option value="Yiminghe" label="yiminghe" />
</Select>

<Select bind:value="{selected2}" style="{{ width: 120 }}" disabled>
  <Option value="lucy" label="Lucy" />
</Select>

<br />

<Select bind:value="{selected3}" style="{{ width: 120 }}" loading>
  <Option value="lucy" label="Lucy" />
</Select>

<Select
  bind:value="{selected4}"
  style="{{ width: 120 }}"
  dropdownStyle="{{ width: 100 }}"
  clearable>
  <Option value="lucy" label="Lucy" />
</Select>

<script>
  import { Select, Option } from "svant";

  let selected1 = "lucy";
  let selected2 = "lucy";
  let selected3 = "lucy";
  let selected4 = "lucy";

  const onChange = event => {
    // Note: the value can also be fetched from `event.detail.value`
    console.log(`Selected: ${selected1}`);
  };
</script>
