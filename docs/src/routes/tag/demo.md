# Tag

Description of the Tag's function.

## Examples

<Example
  id="tag-demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">
  <p slot="description">
    Basic Tag usage. Set the closable to allow it to be closed. It also supports an `on:close` event.
  </p>
</Example>

<Example
  id="tag-demo-color"
  title="Colors"
  demoComponent="{Color}"
  demoCode="{ColorCode}">
  <p slot="description">
    The Tag has a set of predefined colors. The color can also be set to a custom hex color string.
  </p>
</Example>

<Example
  id="tag-demo-icon"
  title="Icon"
  demoComponent="{Icon}"
  demoCode="{IconCode}">
  <p slot="description">
    `Tag` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Tag`.
  </p>
</Example>

<Example
  id="tag-demo-status"
  title="Status"
  demoComponent="{Status}"
  demoCode="{StatusCode}">
  <p slot="description">
    There are five different preset colors that can be used to communicate status. The following can be set using the `color` property. `success`, `processing`, `error`, `default`, and `warning`.
  </p>
</Example>

<Example
  id="tag-demo-add-remove"
  title="Add & Remove Dynamically"
  demoComponent="{AddRemove}"
  demoCode="{AddRemoveCode}"/>

<Example
  id="tag-demo-visibility"
  title="Controlled Visibility"
  demoComponent="{Visibility}"
  demoCode="{VisibilityCode}">
  <p slot="description">
    The visibility can be controlled using the `visible` prop.
  </p>
</Example>

<Example
  id="tag-demo-checkable"
  title="Checkable"
  demoComponent="{Checkable}"
  demoCode="{CheckableCode}">
  <p slot="description">
    Use the `checked` prop to make the `Tag` work like a checkbox. Click a tag to toggle its checked state.
  </p>
</Example>

## API

<DocsTable {...attributesData}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'

  import Color from './demos/color.demo.svelte'
  import ColorCode from './demos/color.demo.txt'

  import Icon from './demos/icon.demo.svelte'
  import IconCode from './demos/icon.demo.txt'

  import Status from './demos/status.demo.svelte'
  import StatusCode from './demos/status.demo.txt'

  import AddRemove from './demos/add-remove.demo.svelte'
  import AddRemoveCode from './demos/add-remove.demo.txt'

  import Visibility from './demos/visibility.demo.svelte'
  import VisibilityCode from './demos/visibility.demo.txt'

  import Checkable from './demos/checkable.demo.svelte'
  import CheckableCode from './demos/checkable.demo.txt'

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

  // Events
  // CLick
</script>
