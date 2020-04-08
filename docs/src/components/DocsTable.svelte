<script>
  export let title = 'Attributes';
  export let columns = ['Property', 'Description', 'Type', 'Default'];
  export let data;
</script>

<h3>{title}</h3>
<table>
  <thead>
    <tr>
      {#each columns as column (column)}
         <th>{column}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as row (row[columns[0].toLowerCase()])}
      <tr>
        {#each columns as column (row[column.toLowerCase()])}
          <th>{row[column.toLowerCase()]}</th>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
