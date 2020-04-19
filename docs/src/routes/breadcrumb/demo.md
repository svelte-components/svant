# Breadcrumb

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## Examples

### Basic Usage

<div id="components-breadcrumb-demo-basic">
  <Basic />
</div>
<Prism language="svelte" source="{BasicCode}"/>

### With Icons

<div id="components-breadcrumb-demo-icon">
  <WithIcon />
</div>
<Prism language="svelte" source="{WithIconCode}"/>

### Configuring the Separator

The separator can be changed using the `separator` prop on the `Breadcrumb` component. Either a string or a Svelte component (for example - an icon component) can be passed.

<div id="components-breadcrumb-demo-text-separator">
  <Separator />
</div>
<Prism language="svelte" source="{SeparatorCode}"/>

### Using Multiple Separators

The separator can be customized for each BreadcrumbItem individually as well.

<div id="components-breadcrumb-demo-text-separator">
  <MultipleSeparator />
</div>
<Prism language="svelte" source="{MultipleSeparatorCode}"/>

## API

<DocsTable {...breadcrumbAttributesData}/>
<DocsTable {...breadcrumbItemAttributesData}/>

<script>
  import Prism from 'docs/src/components/prism/Prism.svelte';

  import Basic from './demos/basic.demo.svelte';
  import BasicCode from './demos/basic.demo.txt';

  import WithIcon from './demos/icon.demo.svelte';
  import WithIconCode from './demos/icon.demo.txt';

  import Separator from './demos/separator.demo.svelte';
  import SeparatorCode from './demos/separator.demo.txt';

  import MultipleSeparator from './demos/multiple-separator.demo.svelte';
  import MultipleSeparatorCode from './demos/multiple-separator.demo.txt';

  import DocsTable from 'docs/src/components/DocsTable.svelte';
  const breadcrumbAttributesData = {
    title: "Breadcrumb Attributes",
    columns: ["Property", "Description", "Type", "Default"],
    data: [
      {
        property: "separator",
        description: "Sets the separator used for the component",
        type: "String or Svelte component",
        default: "/"
      }
    ]
  };

  const breadcrumbItemAttributesData = {
    title: "BreadcrumbItem Attributes",
    columns: ["Property", "Description", "Type", "Default"],
    data: [
      {
        property: "href",
        description: "If set, the item will be wrapper in a link",
        type: "String",
        default: ""
      },
      {
        property: "separator",
        description: "Sets the individual separator for the item",
        type: "String or Svelte component",
        default: "/"
      }
    ]
  };
</script>
