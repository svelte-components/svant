<Select
  bind:value
  searchable
  {searchFunction}
  placeholder="Search for Star Wars Characters"
  style="{{ width: 275 }}"
  on:search="{searchForStarWarsPeople}"
  {showEmptyMessage}
  {loading}>
  {#each options as option (option)}
    <Option value="{option}" label="{option}" />
  {/each}
</Select>

<script>
  import { Select, Option } from "svant";

  let value = "";
  let timeout;
  let loading = false;
  let options = [];
  let showEmptyMessage;

  // Set showEmptyMessage explicitly since we are changing options asyncrounously
  // and the component doesn't know to re-render
  $: if (options.length) {
    showEmptyMessage = false;
  } else {
    showEmptyMessage = true;
  }

  function searchFunction(searchInput, option) {
    const value = option.value.toLowerCase();
    return value.indexOf(searchInput.toLowerCase()) >= 0;
  }

  function searchForStarWarsPeople({ detail: searchValue }) {
    loading = true;
    // If the user presses another key before the last search started
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    timeout = setTimeout(() => {
      if (typeof fetch) {
        fetch(`https://swapi.dev/api/people/?search=${searchValue}`)
          .then(response => response.json())
          .then(async data => {
            options = data.results.map(result => result.name);
            loading = false;
          });
      }
    }, 1000);
  }
</script>
