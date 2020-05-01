# Breadcrumb

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## Examples

<Example
  id="demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}"/>

<Example
  id="demo-with-icon"
  title="With Icons"
  demoComponent="{WithIcon}"
  demoCode="{WithIconCode}"/>

<Example
  id="demo-text-separator"
  title="Configuring the Separator"
  demoComponent="{Separator}"
  demoCode="{SeparatorCode}">
  <p slot="description">The separator can be changed using the `separator` prop on the `Breadcrumb` component. Either a string or a Svelte component (for example - an icon component) can be passed.</p>
</Example>

<Example
  id="demo-multiple-separators"
  title="Using Multiple Separators"
  demoComponent="{MultipleSeparator}"
  demoCode="{MultipleSeparatorCode}">
  <p slot="description">The separator can be changed using the `separator` prop on the `Breadcrumb` component. Either a string or a Svelte component (for example - an icon component) can be passed.</p>
</Example>

## API

<DocsTable {...breadcrumbAttributesData}/>
<DocsTable {...breadcrumbItemAttributesData}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

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
