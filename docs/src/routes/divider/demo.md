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
        property: 'type',
        description: 'Direction if the divider.',
        type: 'horizontal | vertical',
        default: 'horizontal'
      },
      {
        property: 'dashed',
        description: 'Whether the line is dashed.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'orientation',
        description: 'Position of the title inside the divider.',
        type: 'left | right | center',
        default: 'center'
      },
      {
        property: 'plain',
        description: 'Makes the title inside the divider is plain text instead of a heading.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'class',
        description: 'Custom class for the divider.',
        type: 'String|Object',
        default: '-'
      },
      {
        property: 'style',
        description: 'Custom style of the divider.',
        type: 'String|Object',
        default: '-'
      }
    ]
  }
</script>
