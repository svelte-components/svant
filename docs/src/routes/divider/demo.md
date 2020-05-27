# Divider

Description of the Divider's function.

## Examples

<Example
  id="divider-demo-horizontal"
  title="Horizontal"
  demoComponent="{Horizontal}"
  demoCode="{HorizontalCode}">
  <p slot="description">
    A simple example. The `Divider` is horizontal by default.
  </p>
</Example>

<Example
  id="divider-demo-title"
  title="Title"
  demoComponent="{Title}"
  demoCode="{TitleCode}">
  <p slot="description">
    An inner title can be added using the `orientation` prop. The heading style can be removed with the `plain` prop.
  </p>
</Example>

<Example
  id="divider-demo-vertical"
  title="Vertical"
  demoComponent="{Vertical}"
  demoCode="{VerticalCode}">
  <p slot="description">
    A `Divider` can also be vertical.
  </p>
</Example>

## API

<DocsTable {...attributesData}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

  import Horizontal from './demos/horizontal.demo.svelte'
  import HorizontalCode from './demos/horizontal.demo.txt'

  import Title from './demos/title.demo.svelte'
  import TitleCode from './demos/title.demo.txt'

  import Vertical from './demos/vertical.demo.svelte'
  import VerticalCode from './demos/vertical.demo.txt'

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
