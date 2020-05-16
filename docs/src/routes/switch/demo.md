# Switch

Switch is used to represent switching between two states (e.x on-off)

## Examples

<Example
  id="switch-demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">

  <p slot="description">
    Basic switch usage
  </p>
</Example>
<Example
  id="switch-demo-basic"
  title="Disabled"
  demoComponent="{Disabled}"
  demoCode="{DisabledCode}">
  <p slot="description">
    Disable state of `switch`
  </p>
</Example>

<Example
  id="switch-demo-basic"
  title="Using Slots"
  demoComponent="{Slot}"
  demoCode="{SlotCode}">

  <p slot="description">
    How to use slots to set values for checked/unchecked state
  </p>
</Example>
<Example
  id="switch-demo-basic"
  title="Switch size"
  demoComponent="{Size}"
  demoCode="{SizeCode}">
  <p slot="description">
    Switches can be either the `default` size or `small`
  </p>
</Example>
<Example
  id="switch-demo-basic"
  title="Loading"
  demoComponent="{Loading}"
  demoCode="{LoadingCode}">
  <p slot="description">
    Loading state of the switch
  </p>
</Example>

## API

<DocsTable {...attributesData}/>
<DocsTable {...switchEventData}/>
<DocsTable {...switchBindData}/>
<DocsTable {...switchSlotsData}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'

  import Disabled from './demos/disabled.demo.svelte'
  import DisabledCode from './demos/disabled.demo.txt'

  import Slot from './demos/slot.demo.svelte'
  import SlotCode from './demos/slot.demo.txt'

  import Size from './demos/size.demo.svelte'
  import SizeCode from './demos/size.demo.txt'

  import Loading from './demos/loading.demo.svelte'
  import LoadingCode from './demos/loading.demo.txt'

  import DocsTable from 'docs/src/components/DocsTable.svelte'
  const attributesData = {
    title: 'Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'autoFocus',
        description: 'Get focus when component mounted.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'checked',
        description: 'Determine whether the Switch is checked, if this prop is set the component will not handle state change the prop needs to change if you want to change the state.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'defaultChecked',
        description: 'Default state of the Switch',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'disabled',
        description: 'Disables the Switch',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'loading',
        description: 'Shows loading for the Switch',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'size',
        description: 'The size of the Switch, options: `default` `small`',
        type: 'String',
        default: 'default'
      }
    ]
  };
  
  const switchEventData = {
    title: 'Events',
    columns: ['Name', 'Description'],
    data: [
      {
        name: 'change',
        description: 'Triggers when the switch value changes.'
      },
      {
        name: 'click',
        description: 'Triggers when the switch is clicked.'
      },
    ]
  };
  
   const switchBindData = {
      title: 'Bind',
      columns: ['Name', 'Description'],
      data: [
        {
          name: 'focus',
          description: 'Let\'s you bind to the button focus method.'
        },
        {
          name: 'blur',
          description: 'Let\'s you bind to the button blur method.'
        },
      ]
    };
    
   const switchSlotsData = {
      title: 'Slots',
      columns: ['Name', 'Description'],
      data: [
        {
          name: 'checked',
          description: 'Used to define what to show when the switch is checked.'
        },
        {
          name: 'unchecked',
          description: 'Used to define what to show when the switch is unchecked.'
        },
      ]
    }
</script>
