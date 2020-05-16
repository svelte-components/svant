# Select

A Select component to select values from a list of options.

## Examples

<Example
  id="select-demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">
  <p slot="description">
    Basic `Select` usage examples
  </p>
</Example>

<Example
  id="select-demo-search"
  title="Search Field"
  demoComponent="{Search}"
  demoCode="{SearchCode}">
  <p slot="description">
    Use the `searchable` prop to search the options while the Select is expanded. By default it will search the label for an exact match, but a `searchFunction` can be passed for customizing the search.
  </p>
</Example>

<Example
  id="select-demo-multiple"
  title="Multiple Select"
  demoComponent="{Multiple}"
  demoCode="{MultipleCode}">
  <p slot="description">
    Show more than one selection using `multiple` mode. Multiple mode is searchable as well.
  </p>
</Example>

<Example
  id="select-demo-tags"
  title="Tags"
  demoComponent="{Tags}"
  demoCode="{TagsCode}">
  <p slot="description">
    In tags mode, text added to the search input can be converted into a tag by pressing enter. Added tags will be added to the options.
  </p>
</Example>

## API

<DocsTable {...attributesData}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'

  import Search from './demos/search.demo.svelte'
  import SearchCode from './demos/search.demo.txt'

  import Multiple from './demos/multiple.demo.svelte'
  import MultipleCode from './demos/multiple.demo.txt'

  import Tags from './demos/tags.demo.svelte'
  import TagsCode from './demos/tags.demo.txt'

  import DocsTable from 'docs/src/components/DocsTable.svelte'
  const attributesData = {
    title: 'Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'test',
        description: 'test description',
        type: 'String',
        default: 'test'
      }
    ]
  }
</script>
