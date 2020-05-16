<h3>{title}</h3>
<table class="docs-table">
  <thead>
    <tr>
      {#each columns as column}
        <th>{column}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        {#each columns as column}
          <td>{row[column.toLowerCase()]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<script>
  export let title = "Attributes";
  export let columns = ["Property", "Description", "Type", "Default"];
  export let data;
</script>
