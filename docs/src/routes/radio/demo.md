# Radio

Description of the Radio's function.

## Examples

### Basic

<div id="components-radio-demo-basic">
  <Basic />
</div>
<Prism language="svelte" source="{BasicCode}"/>

## API

<DocsTable {...attributesData}/>

<script>
  import Prism from 'docs/src/components/prism/Prism.svelte'

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
  