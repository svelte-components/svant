<Select
  bind:value
  searchable
  {searchFunction}
  style="{{ width: 200 }}"
  placeholder="Select a person"
  on:focus="{onFocus}"
  on:blur="{onBlur}"
  on:search="{onSearch}">
  <Option value="jack" label="Jack" />
  <Option value="lucy" label="Lucy" />
  <Option value="tom" label="Tom" />
</Select>

<script>
  import { Select } from "svant";
  const { Option } = Select;

  let value = "";

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  function searchFunction(searchInput, option) {
    // option has a value and a label. For example { value: 'lucy', label: 'Lucy' }
    const label = option.label.toLowerCase();
    return label.indexOf(searchInput.toLowerCase()) >= 0;
  }
</script>
