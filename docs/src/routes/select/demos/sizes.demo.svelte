<RadioGroup bind:value="{size}">
  <RadioButton value="large">Large</RadioButton>
  <RadioButton value="default">Default</RadioButton>
  <RadioButton value="small">Small</RadioButton>
</RadioGroup>

<br />

<Select {size} bind:value="{value1}" style="{{ width: 200, marginTop: 20 }}">
  {#each options as option (option.value)}
    <Option value="{option.value}" label="{option.label}" />
  {/each}
</Select>

<br />

<Select
  {size}
  mode="multiple"
  style="{{ width: 400 }}"
  placeholder="Please select"
  bind:value="{value2}">
  {#each options as option (option.value)}
    <Option value="{option.value}" label="{option.label}" />
  {/each}
</Select>

<br />

<Select
  {size}
  mode="tags"
  style="{{ width: 400 }}"
  placeholder="Please Select"
  bind:value="{value3}">
  {#each options as option (option.value)}
    <Option value="{option.value}" label="{option.label}" />
  {/each}
</Select>

<script>
  import { Select, Option, RadioGroup, RadioButton } from "svant";

  let size = "default";

  const options = [];
  for (let i = 10; i < 36; i++) {
    const value = i.toString(36) + i;
    options.push({ value, label: value });
  }

  let value1 = "a10";
  let value2 = ["a10", "c12"];
  let value3 = ["a10", "c12"];
</script>
