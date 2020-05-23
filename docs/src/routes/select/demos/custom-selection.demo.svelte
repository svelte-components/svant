<Select
  mode="multiple"
  bind:value
  style="{{ width: 300 }}"
  placeholder="Select a country"
  on:change="{onChange}">
  <Option value="china" label="China">🇨🇳 China</Option>
  <Option value="usa" label="USA">🇺🇸 USA</Option>
  <Option value="kosovo" label="Kosovo">🇽🇰 Kosovo</Option>
  <Option value="england" label="England">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</Option>
</Select>

<script>
  import { Select, Option } from "svant";

  let value = ["usa", "kosovo"];

  const onChange = () => {
    console.log(`Selected: ${value}`);
  };
</script>
