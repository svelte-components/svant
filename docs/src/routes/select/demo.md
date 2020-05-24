# Select

A Select component to select values from a list of options.

## Examples

<Example
  id="select-demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">
  <p slot="description">
    Basic `Select` usage examples
  </p>
</Example>

<Example
  id="select-demo-search"
  title="Search Field"
  demoComponent="{Search}"
  demoCode="{SearchCode}">
  <p slot="description">
    Use the `searchable` prop to search the options while the Select is expanded. By default it will search the label for an exact match, but a `searchFunction` can be passed for customizing the search.
  </p>
</Example>

<Example
  id="select-demo-multiple"
  title="Multiple Select"
  demoComponent="{Multiple}"
  demoCode="{MultipleCode}">
  <p slot="description">
    Show more than one selection using `multiple` mode. Multiple mode is searchable as well.
  </p>
</Example>

<Example
  id="select-demo-tags"
  title="Tags"
  demoComponent="{Tags}"
  demoCode="{TagsCode}">
  <p slot="description">
    In tags mode, text added to the search input can be converted into a tag by pressing enter. Added tags will be added to the options.
  </p>
</Example>

<Example
  id="select-demo-sizes"
  title="Sizes"
  demoComponent="{Sizes}"
  demoCode="{SizesCode}">
  <p slot="description">
    The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.
  </p>
</Example>

<Example
  id="select-demo-custom-displayed-selection"
  title="Custom Selection Display"
  demoComponent="{CustomSelection}"
  demoCode="{CustomSelectionCode}">
  <p slot="description">
    Custom content can be displayed for each option inside the dropdown.
  </p>
</Example>

<Example
  id="select-demo-option-groups"
  title="Option Groups"
  demoComponent="{OptionGroup}"
  demoCode="{OptionGroupCode}">
  <p slot="description">
    Options can be organized in groups within the dropdown.
  </p>
</Example>

<Example
  id="select-demo-remote-search"
  title="Remote Search"
  demoComponent="{RemoteSearch}"
  demoCode="{RemoteSearchCode}">
  <p slot="description">
    An example of using the `search` event to fetch options from an external source.
  </p>
</Example>

<!--
   TODO:
    - Copy/Paste tag values
    - onChange should give label and value
    - Custom select content - menu should be a named slot?
    - Hide already selected
    - Borderless
    - Custom tags
    - API tables
-->

## API

<DocsTable {...attributesData}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'

  import Search from './demos/search.demo.svelte'
  import SearchCode from './demos/search.demo.txt'

  import Multiple from './demos/multiple.demo.svelte'
  import MultipleCode from './demos/multiple.demo.txt'

  import Tags from './demos/tags.demo.svelte'
  import TagsCode from './demos/tags.demo.txt'

  import Sizes from './demos/sizes.demo.svelte'
  import SizesCode from './demos/sizes.demo.txt'

  import CustomSelection from './demos/custom-selection.demo.svelte'
  import CustomSelectionCode from './demos/custom-selection.demo.txt'

  import OptionGroup from './demos/option-group.demo.svelte'
  import OptionGroupCode from './demos/option-group.demo.txt'

  import RemoteSearch from './demos/remote-search.demo.svelte'
  import RemoteSearchCode from './demos/remote-search.demo.txt'

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
