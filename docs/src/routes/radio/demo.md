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

<DocsTable {...groupAttributesData}/>

<DocsTable {...radioEventData}/>

<DocsTable {...radioGroupEventData}/>

<DocsTable {...radioBindData}/>

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
    title: 'Radio Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'autoFocus',
        description: 'Set focus when component mounted.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'checked',
        description: 'Specifies whether the checkbox is selected.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'defaultChecked',
        description: 'Specifies the initial state: whether or not the checkbox is selected.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'disabled',
        description: 'Disable checkbox.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'value',
        description: 'Value is used to determine if this radio is selected in a group.',
        type: 'Any',
        default: '-'
      }
    ]
  };
  
  const groupAttributesData = {
    title: 'RadioGroup Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'defaultValue',
        description: 'Default selected value.',
        type: 'Any',
        default: '-'
      },
      {
        property: 'disabled',
        description: 'Disable all radios.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'name',
        description: 'The name property of all input[type="radio"] children.',
        type: 'String',
        default: '-'
      },
      {
        property: 'options',
        description: 'Specifies options.',
        type: 'String[] | [{label:"",value:"",disabled:false}]',
        default: '[]'
      },
      {
        property: 'value',
        description: 'Used for setting the currently selected value.',
        type: 'String',
        default: '-'
      },
      {
        property: 'size',
        description: 'Size for radio buttons.',
        type: 'large | middle | small',
        default: '-'
      },
      {
        property: 'buttonStyle',
        description: 'Style type of the radio buttons.',
        type: 'outline | solid',
        default: 'outline'
      }
    ]
    
  };
  
  const radioEventData = {
    title: 'Radio Events',
    columns: ['Name', 'Description'],
    data: [
      {
        name: 'change',
        description: 'Triggers when the radio checked state changes.'
      },
    ]
  };

  const radioGroupEventData = {
    title: 'RadioGroup Events',
    columns: ['Name', 'Description'],
    data: [
      {
        name: 'change',
        description: 'Triggers when the radio group value changes.'
      },
    ]
  };
  
   const radioBindData = {
      title: 'Radio Bind',
      columns: ['Name', 'Description'],
      data: [
        {
          name: 'focus',
          description: 'Let\'s you bind to the input focus method.'
        },
        {
          name: 'blur',
          description: 'Let\'s you bind to the input blur method.'
        },
      ]
    }
</script>
