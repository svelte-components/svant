<Select bind:value style="{{ width: 200 }}">
  <OptionGroup label="Manager">
    <Option value="jack" label="Jack" />
    <Option value="lucy" label="Lucy" />
  </OptionGroup>
  <OptionGroup label="Engineer">
    <Option value="yiminghe" label="Yiminghe" />
  </OptionGroup>
</Select>

<script>
  import { Select, Option, OptionGroup } from "svant";

  let value = "lucy";
</script>
