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

<DocsTable {...attributesData}/>

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
