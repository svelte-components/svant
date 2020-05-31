<Select
  mode="multiple"
  style="{{ width: 300 }}"
  placeholder="Please select"
  bind:value
  on:change="{handleChange}"
  maxTagDisplayCount="{3}">
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

  let value = ["a10", "c12"];

  function handleChange() {
    console.log(`selected ${value}`);
  }
</script>
