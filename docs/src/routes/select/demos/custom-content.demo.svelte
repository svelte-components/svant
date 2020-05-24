<Select
  bind:value="{selectValue}"
  style="{{ width: 250 }}"
  placeholder="Custom Dropdown">
  <Option value="jack" label="Jack" />
  <Option value="lucy" label="Lucy" />
  {#each additionalOptions as option (option.id)}
    <Option value="{option.value}" label="{option.value}" />
  {/each}
  <div class="add-option">
    <Input bind:value="{inputValue}" />
    <Button type="primary" style="{{ marginLeft: 10 }}" on:click="{addOption}">
      <PlusOutlined />
      Add item
    </Button>
  </div>
</Select>

<script>
  import { Select, Option, Input, Button } from "svant";
  import { PlusOutlined } from "svant/icons";
  import { nanoid } from "nanoid";

  let selectValue = "";
  let inputValue = "";
  let additionalOptions = [];

  function addOption() {
    if (!inputValue) return;
    additionalOptions = [
      ...additionalOptions,
      { value: inputValue, id: nanoid() }
    ];
    inputValue = "";
  }
</script>

<style>
  .add-option {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px;
    margin-top: 8px;
    display: flex;
  }
</style>
