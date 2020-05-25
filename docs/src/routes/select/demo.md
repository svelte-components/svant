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

<Example
  id="select-demo-custom-content"
  title="Custom Dropdown Content"
  demoComponent="{CustomContent}"
  demoCode="{CustomContentCode}">
  <p slot="description">
    The dropdown can be customized by adding content inside the Select tag.
  </p>
</Example>

<Example
  id="select-demo-hide-selected"
  title="Hide Already Selected"
  demoComponent="{HideSelected}"
  demoCode="{HideSelectedCode}">
  <p slot="description">
    Hide already selected options in the dropdown.
  </p>
</Example>

<Example
  id="select-demo-borderless"
  title="Borderless"
  demoComponent="{Borderless}"
  demoCode="{BorderlessCode}">
  <p slot="description">
    The select can be rendered without borders so it looks like text rather than an input.
  </p>
</Example>

<Example
  id="select-demo-custom-tags"
  title="Custom Tags"
  demoComponent="{CustomTags}"
  demoCode="{CustomTagsCode}">
  <div slot="description">
    <p>The tags displayed in the Select input in multiple or tags mode can be customized using the `tagProps` function. It should return the props to be added to the tag (color, icon).</p>
    <p>`onClick` and `onClose` functions can be added as well.</p>
  </div>
</Example>

<!--
   TODO:
    - Tests for Custom tags
    - scope key events (not body??)
    - API tables
-->

<!-- TODO: Automatic Tokenization https://ant.design/components/select/#components-select-demo-automatic-tokenization -->

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

  import CustomContent from './demos/custom-content.demo.svelte'
  import CustomContentCode from './demos/custom-content.demo.txt'

  import HideSelected from './demos/hide-selected.demo.svelte'
  import HideSelectedCode from './demos/hide-selected.demo.txt'

  import Borderless from './demos/borderless.demo.svelte'
  import BorderlessCode from './demos/borderless.demo.txt'

  import CustomTags from './demos/custom-tags.demo.svelte'
  import CustomTagsCode from './demos/custom-tags.demo.txt'

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
