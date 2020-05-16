# Radio

Description of the Radio's function.

## Examples


<Example
  id="demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">
  <p slot="description">
  Basic usage of radio.
  </p>
</Example>

<Example
  id="demo-basic"
  title="Disabled"
  demoComponent="{Disabled}"
  demoCode="{DisabledCode}">
  <p slot="description">
  Disabled radio.
  </p>
</Example>

<Example
  id="demo-basic"
  title="Radio Group"
  demoComponent="{Group}"
  demoCode="{GroupCode}">
  <p slot="description">
  A group of radio components.
  </p>
</Example>

<Example
  id="demo-basic"
  title="Vertical Radio Group"
  demoComponent="{VerticalGroup}"
  demoCode="{VerticalGroupCode}">
  <p slot="description">
    Vertical radio group.
  </p>
</Example>

<Example
  id="demo-basic"
  title="Radio Group With Options"
  demoComponent="{OptionsGroup}"
  demoCode="{OptionsGroupCode}">
  <p slot="description">
    Render radios by configuring options.
  </p>
</Example>

<Example
  id="demo-basic"
  title="Radio Button Group"
  demoComponent="{RadioButtonGroup}"
  demoCode="{RadioButtonGroupCode}">
  <p slot="description">
   Radio button group example.
  </p>
</Example>

<Example
  id="demo-basic"
  title="Solid Button Group"
  demoComponent="{SolidButtonGroup}"
  demoCode="{SolidButtonGroupCode}">
  <p slot="description">
   Solid radio button group example.
  </p>
</Example>

<Example
  id="demo-basic"
  title="Size"
  demoComponent="{SizeRadioGroup}"
  demoCode="{SizeRadioGroupCode}">
  <p slot="description">
   Different size radio button groups.
  </p>
</Example>

## API

<DocsTable {...attributesData}/>

<script>
  import Example from 'docs/src/components/Example.svelte'

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'
  
  import Disabled from './demos/disabled.demo.svelte'
  import DisabledCode from './demos/disabled.demo.txt'
  
  import Group from './demos/group.demo.svelte'
  import GroupCode from './demos/group.demo.txt'

  import VerticalGroup from './demos/verticalGroup.demo.svelte'
  import VerticalGroupCode from './demos/verticalGroup.demo.txt'

  import OptionsGroup from './demos/options.demo.svelte'
  import OptionsGroupCode from './demos/options.demo.txt'

  import RadioButtonGroup from './demos/radioButton.demo.svelte'
  import RadioButtonGroupCode from './demos/radioButton.demo.txt'
  
  import SolidButtonGroup from './demos/solidButton.demo.svelte'
  import SolidButtonGroupCode from './demos/solidButton.demo.txt'
  
  import SizeRadioGroup from './demos/radioGroupSize.demo.svelte'
  import SizeRadioGroupCode from './demos/radioGroupSize.demo.txt'

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
