# Dropdown

When there are more than a few options to choose from, you can wrap them in a `Dropdown`. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.

## Examples

<Example
  id="dropdown-demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">
  <p slot="description">
    A basic example of a dropdown menu.
  </p>
</Example>

## API

<DocsTable {...attributesData}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'

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
