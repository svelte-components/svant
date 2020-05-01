# Collapse

A content area which can be collapsed and expanded.

## Examples

<Example
  id="demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">
  <p slot="description">
    By default, any number of panels can be expanded at a time. The first panel is expanded in this example.
  </p>
</Example>

<Example
  id="demo-accordion"
  title="Accordion"
  demoComponent="{Accordion}"
  demoCode="{AccordionCode}">
  <p slot="description">
    In accordion mode, only one panel can be expanded at a time.
  </p>
</Example>

<Example
  id="demo-nested"
  title="Nested"
  demoComponent="{Nested}"
  demoCode="{NestedCode}">
  <p slot="description">
    A `Collapse` can be nested inside another.
  </p>
</Example>

<Example
  id="demo-borderless"
  title="Borderless"
  demoComponent="{Borderless}"
  demoCode="{BorderlessCode}">
  <p slot="description">
    A border-less version of the `Collapse`.
  </p>
</Example>

<Example
  id="demo-custom-panel"
  title="Custom Panels"
  demoComponent="{CustomPanel}"
  demoCode="{CustomPanelCode}">
  <p slot="description">
    Customize the Collapse icon and the styles for each panel. Note: the icon will rotate when opening the panel.
  </p>
</Example>

<Example
  id="demo-hide-arrow"
  title="Hide Arrow"
  demoComponent="{HideArrow}"
  demoCode="{HideArrowCode}">
  <p slot="description">
    You can hide the arrow icon by passing `hideArrow` to `CollapsePanel` component.
  </p>
</Example>

<Example
  id="demo-arrow-position"
  title="Arrow Position"
  demoComponent="{RightArrow}"
  demoCode="{RightArrowCode}">
  <p slot="description">
    You can move the arrow to the right side of the panel as well.
  </p>
</Example>

<Example
  id="demo-custom-header"
  title="Custom Panel Header"
  demoComponent="{CustomHeader}"
  demoCode="{CustomHeaderCode}">
  <p slot="description">
    You can use the `header` slot to customize a panel's header.
  </p>
</Example>

<Example
  id="demo-custom-manual-active"
  title="Manual Custom Key"
  demoComponent="{ManualActiveKey}"
  demoCode="{ManualActiveKeyCode}">
  <p slot="description">
    For more control over what opens and when it opens, use the `customKey` prop. The `on:change` event exposes the `lastKeyClicked`.
  </p>
</Example>

## API

<DocsTable {...collapseAttributesData}/>
<DocsTable {...panelAttributesData}/>
<DocsTable {...collapseEvents}/>
<DocsTable {...panelSlots}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'

  import Accordion from './demos/accordion.demo.svelte'
  import AccordionCode from './demos/accordion.demo.txt'

  import Nested from './demos/nested.demo.svelte'
  import NestedCode from './demos/nested.demo.txt'

  import Borderless from './demos/borderless.demo.svelte'
  import BorderlessCode from './demos/borderless.demo.txt'

  import CustomPanel from './demos/custom-panel.demo.svelte'
  import CustomPanelCode from './demos/custom-panel.demo.txt'

  import HideArrow from './demos/hide-arrow.demo.svelte'
  import HideArrowCode from './demos/hide-arrow.demo.txt'

  import RightArrow from './demos/right-arrow.demo.svelte'
  import RightArrowCode from './demos/right-arrow.demo.txt'

  import CustomHeader from './demos/custom-header.demo.svelte'
  import CustomHeaderCode from './demos/custom-header.demo.txt'

  import ManualActiveKey from './demos/manual-active.demo.svelte'
  import ManualActiveKeyCode from './demos/manual-active.demo.txt'

  import DocsTable from 'docs/src/components/DocsTable.svelte'
  const collapseAttributesData = {
    title: 'Collapse Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'activeKey',
        description: 'Used to override the collapse auto functionality. Allows for manual control over what is open',
        type: 'Array',
        default: ''
      },
      {
        property: 'defaultActiveKey',
        description: 'An array of the keys to be initially opened',
        type: 'Array',
        default: ''
      },
      {
        property: 'borderless',
        description: 'Removes the borders',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'accordion',
        description: 'If true, only one panel opens at a time',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'expandIcon',
        description: 'Allows for a customize collapse icon',
        type: 'SvelteComponent',
        default: 'RightOutlined'
      },
      {
        property: 'className',
        description: 'Custom class for the Collapse wrapper',
        type: 'String',
        default: ''
      },
      {
        property: 'expandIconPosition',
        description: 'The icon can be displayed on the left or the right',
        type: "String - `left` | `right`",
        default: ''
      }
    ]
  }

  const panelAttributesData = {
    title: 'CollapsePanel Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'disabled',
        description: 'If true, panel cannot be opened or closed',
        type: "Boolean",
        default: 'false'
      },
      {
        property: 'header',
        description: 'Title of the panel (Can be replaced with the header slot)',
        type: "String",
        default: ''
      },
      {
        property: 'key',
        description: 'Unique key identifying the panel from among its siblings',
        type: "String",
        default: ''
      },
      {
        property: 'className',
        description: 'Custom CSS class for the panel',
        type: "String",
        default: ''
      },
      {
        property: 'hideArrow',
        description: 'Ability to hide the collapse arrow icon',
        type: "Boolean",
        default: 'false'
      }
    ]
  }

  const collapseEvents = {
    title: 'Collapse Events',
    columns: ['Name', 'Description'],
    data: [
      {
        name: 'click',
        description: 'Fired when a panel header is clicked'
      },
      {
        name: 'change',
        description: 'Fired when a panel is opened or closed'
      }
    ]
  }

  const panelSlots = {
    title: 'CollapsePanel Slots',
    columns: ['Name', 'Description'],
    data: [
      {
        name: 'header',
        description: 'Custom content for the panel header'
      }
    ]
  }
</script>
