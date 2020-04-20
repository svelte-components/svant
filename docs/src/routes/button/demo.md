<script>
  import Prism from 'docs/src/components/prism/Prism.svelte'

  import Type from './demos/type.demo.svelte'
  import TypeCode from './demos/type.demo.txt'

  import Icons from './demos/icons.demo.svelte'
  import IconsCode from './demos/icons.demo.txt'

  import Size from './demos/size.demo.svelte'
  import SizeCode from './demos/size.demo.txt'

  import Disabled from './demos/disabled.demo.svelte'
  import DisabledCode from './demos/disabled.demo.txt'

  import Loading from './demos/loading.demo.svelte'
  import LoadingCode from './demos/loading.demo.txt'

  import Danger from './demos/danger.demo.svelte'
  import DangerCode from './demos/danger.demo.txt'

  import Block from './demos/block.demo.svelte'
  import BlockCode from './demos/block.demo.txt'

  import DocsTable from 'docs/src/components/DocsTable.svelte'
  const attributesData = {
    title: 'Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'color',
        description: 'The color',
        type: 'String',
        default: 'white'
      },
      {
        property: 'size',
        description: 'The main size',
        type: 'Number',
        default: '10'
      },
      {
        property: 'round',
        description: 'If the button is round',
        type: 'Boolean',
        default: 'false'
      }
    ]
  }
</script>

# Button

To trigger an operation.

## Examples

### Type

<div id="components-button-demo-type">
    <Type />
</div>
<Prism language="svelte" source="{TypeCode}"/>

### Icons

<div id="components-button-demo-icons">
    <Icons />
</div>
<Prism language="svelte" source="{IconsCode}"/>

### Size

<div id="components-button-demo-size">
    <Size />
</div>
<Prism language="svelte" source="{SizeCode}"/>

### Disabled

<div id="components-button-demo-disabled">
    <Disabled />
</div>
<Prism language="svelte" source="{DisabledCode}"/>

### Loading

<div id="components-button-demo-loading">
    <Loading />
</div>

<Prism language="svelte" source="{LoadingCode}"/>

### Danger

<div id="components-button-demo-danger">
    <Danger />
</div>
<Prism language="svelte" source="{DangerCode}"/>

### Block

<div id="components-button-demo-block">
    <Block />
</div>
<Prism language="svelte" source="{BlockCode}"/>

## API

<DocsTable {...attributesData}/>
