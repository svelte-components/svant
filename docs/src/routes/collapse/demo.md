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
