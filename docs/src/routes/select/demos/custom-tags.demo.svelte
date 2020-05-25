<Select
  mode="multiple"
  style="{{ width: 300 }}"
  placeholder="Please select"
  bind:value
  {tagProps}>
  {#each options as option (option.value)}
    <Option value="{option.value}" label="{option.value}" />
  {/each}
</Select>

<script>
  import { Select, Option } from "svant";

  const options = [
    { value: "gold" },
    { value: "lime" },
    { value: "green" },
    { value: "cyan" }
  ];
  let value = ["gold", "cyan"];

  // Takes the option as an argument. Should return tag props and can include an onClose function
  const tagProps = option => {
    return {
      color: option.value,
      onClick: () => {
        console.log(`${option.label} clicked`);
      },
      onClose: () => {
        console.log(`${option.label} option removed`);
      }
    };
  };
</script>
