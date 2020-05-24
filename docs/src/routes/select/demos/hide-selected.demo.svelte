<Select
  mode="multiple"
  style="{{ width: 300 }}"
  placeholder="Inserted are removed"
  bind:value>
  {#each filteredOptions as option (option.value)}
    <Option value="{option.value}" label="{option.label}" />
  {/each}
</Select>

<script>
  import { Select, Option } from "svant";

  const OPTIONS = [
    { label: "Apples", value: "apples" },
    { label: "Nails", value: "nails" },
    { label: "Bananas", value: "bananas" },
    { label: "Helicopters", value: "helicopters" }
  ];
  let value = [];
  let filteredOptions;

  $: if (value.length) {
    filteredOptions = OPTIONS.filter(option => !value.includes(option.value));
  } else {
    filteredOptions = [...OPTIONS];
  }
</script>
