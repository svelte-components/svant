<Select
  mode="tags"
  style="{{ width: 300 }}"
  placeholder="Tags Mode"
  bind:value
  on:change="{handleChange}">
  {#each options as option (option.value)}
    <Option value="{option.value}" label="{option.label}" />
  {/each}
</Select>

<script>
  import { Select, Option } from "svant";

  const options = [];
  for (let i = 10; i < 36; i++) {
    const value = i.toString(36) + i;
    options.push({ value, label: value });
  }

  let value = [];

  function handleChange() {
    console.log(`selected ${value}`);
  }
</script>
