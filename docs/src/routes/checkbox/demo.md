# Checkbox

## Examples

<Example
  id="demo-type"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">
  <p slot="description">
  Basic usage of checkbox.
  </p>
</Example>

<Example
  id="demo-type"
  title="Disabled"
  demoComponent="{Disabled}"
  demoCode="{DisabledCode}">
  <p slot="description">
  Disabled checkbox.
  </p>
</Example>

<Example
  id="demo-type"
  title="Controlled Checkbox"
  demoComponent="{Controlled}"
  demoCode="{ControlledCode}">
  <p slot="description">
    Communicated with other components.
  </p>
</Example>

<Example
  id="demo-type"
  title="Checkbox Group"
  demoComponent="{Group}"
  demoCode="{GroupCode}">
  <p slot="description">
    Generate a group of checkboxes from an array.
  </p>
</Example>

<Example
  id="demo-type"
  title="Check all"
  demoComponent="{CheckAll}"
  demoCode="{CheckAllCode}">
  <p slot="description">
    The `indeterminate` property can help you to achieve a 'check all' effect.
  </p>
</Example>

<Example
  id="demo-type"
  title="Checkbox Group With Slot"
  demoComponent="{GroupSlot}"
  demoCode="{GroupSlotCode}">
  <p slot="description">
    Instead of using the options attribute you can just provide the checkboxes in the slot
  </p>
</Example>

## API

<DocsTable {...attributesData}/>

<DocsTable {...groupAttributesData}/>

<DocsTable {...checkBoxEventData}/>

<DocsTable {...checkBoxGroupEventData}/>

<DocsTable {...checkBoxBindData}/>

<script>
  import Example from 'docs/src/components/Example.svelte'

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'

  import Disabled from './demos/disabled.demo.svelte'
  import DisabledCode from './demos/disabled.demo.txt'

  import Controlled from './demos/controlled.demo.svelte'
  import ControlledCode from './demos/controlled.demo.txt'

  import Group from './demos/group.demo.svelte'
  import GroupCode from './demos/group.demo.txt'

  import CheckAll from './demos/checkall.demo.svelte'
  import CheckAllCode from './demos/checkall.demo.txt'

  import GroupSlot from './demos/groupslot.demo.svelte'
  import GroupSlotCode from './demos/groupslot.demo.txt'

  import DocsTable from 'docs/src/components/DocsTable.svelte'
  const attributesData = {
    title: 'Checkbox Attributes',
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
        description: 'Specifies whether the checkbox is selected. Can be used for 2 way binding.',
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
        property: 'indeterminate',
        description: 'Indeterminate checked state of checkbox.',
        type: 'Boolean',
        default: 'false'
      }
    ]
  };

  const groupAttributesData = {
    title: 'CheckboxGroup Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'disabled',
        description: 'Disable all checkboxes.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'name',
        description: 'The name property of all input[type="checkbox"] children.',
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
        type: 'String[]',
        default: '[]'
      }
    ]
  };
  const checkBoxEventData = {
    title: 'Checkbox Events',
    columns: ['Name', 'Description'],
    data: [
      {
        name: 'change',
        description: 'Triggers when the checkbox checked state changes.'
      },
    ]
  };

  const checkBoxGroupEventData = {
    title: 'CheckboxGroup Events',
    columns: ['Name', 'Description'],
    data: [
      {
        name: 'change',
        description: 'Triggers when the checkbox group value changes.'
      },
    ]
  };

  const checkBoxBindData = {
    title: 'Checkbox Bind',
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
