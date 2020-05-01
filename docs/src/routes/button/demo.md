# Button

To trigger an operation.

## Examples

<Example
  id="demo-type"
  title="Type"
  demoComponent="{Type}"
  demoCode="{TypeCode}">
  <p slot="description">
    The following types can be used for the button: `primary`, `default`, `dashed`, and `link`.
  </p>
</Example>

<Example
  id="demo-icons"
  title="Icons"
  demoComponent="{Icons}"
  demoCode="{IconsCode}">
  <div slot="description">
    <p>`Button` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`.</p>
    <p>If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Button` rather than using the `icon` property.</p>
  </div>
</Example>

<Example
  id="demo-size"
  title="Size"
  demoComponent="{Size}"
  demoCode="{SizeCode}">
  <div slot="description">
    <p>Supports a default button size as well as a large and small size.</p>
    <p>If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.</p>
  </div>
</Example>

<Example
  id="demo-disabled"
  title="Disabled"
  demoComponent="{Disabled}"
  demoCode="{DisabledCode}">
  <p slot="description">
    To mark a button as disabled, add the `disabled` property to the `Button`.
  </p>
</Example>

<Example
  id="demo-loading"
  title="Loading"
  demoComponent="{Loading}"
  demoCode="{LoadingCode}">
  <p slot="description">
    A loading indicator can be added to a button by setting the `loading` property on the `Button`.
  </p>
</Example>

<Example
  id="demo-danger"
  title="Danger"
  demoComponent="{Danger}"
  demoCode="{DangerCode}">
  <p slot="description">
    For a red color, use the `danger` property.
  </p>
</Example>

<Example
  id="demo-block"
  title="Block"
  demoComponent="{Block}"
  demoCode="{BlockCode}">
  <p slot="description">
    The `block` property will make the button fit to its parent width.
  </p>
</Example>

## API

<DocsTable {...attributesData}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

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
