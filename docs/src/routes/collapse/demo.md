# Collapse

A content area which can be collapsed and expanded.

## Examples

### Basic

By default, any number of panels can be expanded at a time. The first panel is expanded in this example.

<div id="components-collapse-demo-basic">
  <Basic />
</div>
<Prism language="svelte" source="{BasicCode}"/>

### Accordion

In accordion mode, only one panel can be expanded at a time.

<div id="components-collapse-demo-accordion">
  <Accordion />
</div>
<Prism language="svelte" source="{AccordionCode}"/>

### Nested

A `Collapse` can be nested inside another.

<div id="components-collapse-demo-nested">
  <Nested />
</div>
<Prism language="svelte" source="{NestedCode}"/>

### Borderless

A border-less version of the `Collapse`.

<div id="components-collapse-demo-borderless">
  <Borderless />
</div>
<Prism language="svelte" source="{BorderlessCode}"/>

### Custom Panels

Customize the Collapse icon and the styles for each panel. Note: the icon will rotate when opening the panel.

<div id="components-collapse-demo-custom-panel">
  <CustomPanel />
</div>
<Prism language="svelte" source="{CustomPanelCode}"/>

### Hide Arrow

You can hide the arrow icon by passing `hideArrow` to `CollapsePanel` component.

<div id="components-collapse-demo-custom-hide-arrow">
  <HideArrow />
</div>
<Prism language="svelte" source="{HideArrowCode}"/>

### Arrow Position

You can move the arrow to the right side of the panel as well.

<div id="components-collapse-demo-custom-right-arrow">
  <RightArrow />
</div>
<Prism language="svelte" source="{RightArrowCode}"/>

### Custom Panel Header

You can use the `header` slot to customize a panel's header.

<div id="components-collapse-demo-custom-custom-header">
  <CustomHeader />
</div>
<Prism language="svelte" source="{CustomHeaderCode}"/>

### Manual Custom Key

For more control over what opens and when it opens, use the `customKey` prop. The `on:change` event exposes the `lastKeyClicked`.

<div id="components-collapse-demo-custom-manual-active">
  <ManualActiveKey />
</div>
<Prism language="svelte" source="{ManualActiveKeyCode}"/>

## API

<DocsTable {...collapseAttributesData}/>
<DocsTable {...panelAttributesData}/>
<DocsTable {...collapseEvents}/>
<DocsTable {...panelSlots}/>

<script>
  import Prism from 'docs/src/components/prism/Prism.svelte'

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
