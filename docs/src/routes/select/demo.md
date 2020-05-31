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

## API

<DocsTable {...selectAttributesData}/>
<DocsTable {...optionAttributesData}/>
<DocsTable {...optionGroupAttributesData}/>
<DocsTable {...selectEventData}/>
<DocsTable {...slotsData}/>

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
  const selectAttributesData = {
    title: 'Select Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'value',
        description: 'The current value of the select. Can be used for 2 way binding: `bind:value`.',
        type: 'String|Array',
        default: '-'
      },
      {
        property: 'style',
        description: 'Style string or style object (e.x. `style={{ fontSize: 18 }}`) for the Select wrapper.',
        type: 'String|Object',
        default: '-'
      },
      {
        property: 'class',
        description: "Class name or class object (e.x. `class={{ 'abc':true }}`) for the Select wrapper.",
        type: 'String|Object',
        default: '-'
      },
      {
        property: 'dropdownClass',
        description: "Class name or class object (e.x. `class={{ 'abc':true }}`) for the dropdown.",
        type: 'String|Object',
        default: '-'
      },
      {
        property: 'dropdownStyle',
        description: "Style string or style object (e.x. `style={{ fontSize: 18 }}`) for the dropdown.",
        type: 'String|Object',
        default: '-'
      },
      {
        property: 'dropdownHeight',
        description: "Max height of the dropdown. Overflow will be scrollable",
        type: 'String',
        default: '256px'
      },
      {
        property: 'disabled',
        description: 'Whether or not the Select is interactive.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'loading',
        description: 'Whether the loading spinner should show.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'clearable',
        description: 'Whether the close icon will show when the Select is hovered on. When clicked it will clear the value.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'autoClearSearchValue',
        description: 'Whether the current search will be cleared on selecting an item. Only applies `when` mode is set to `multiple` or `tags`.',
        type: 'Boolean',
        default: 'true'
      },
      {
        property: 'placeholder',
        description: 'The placeholder to show if there is no value.',
        type: 'String',
        default: '-'
      },
      {
        property: 'searchable',
        description: 'Whether the select has a search input in single mode to filter the options displayed.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'searchFunction',
        description: 'Custom search function used together with the `searchable` prop. It takes the `searchInput` and the `option` as arguments and will be used to search in place of the default label only search. If the function returns `true` for a given option, it wil be displayed.',
        type: 'Function',
        default: 'function that searches for a matching label'
      },
      {
        property: 'mode',
        description: 'The select mode. Allowed values are `single`, `multiple`, and `tags`. See the examples above for details.',
        type: 'String',
        default: 'single'
      },
      {
        property: 'size',
        description: 'The size of the Select input. Valid values are `small`, `default`, and `large`.',
        type: 'String',
        default: 'default'
      },
      {
        property: 'showEmptyMessage',
        description: 'Whether to show the "No options" message in the dropdown when there are no options available.',
        type: 'Boolean',
        default: 'true'
      },
      {
        property: 'borderless',
        description: 'Makes the Select input render with no borders so it looks like plain text with chevron down icon.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'tagProps',
        description: 'A function used in `tags` mode that will render tags with custom props. It takes the option as an argument and should return tag props. It can also include onClose and onClick functions.',
        type: 'Function',
        default: '-'
      },
      {
        property: 'maxTagDisplayCount',
        description: 'The maximum amount of tags to show in the input when in `multiple` or `tags` mode.',
        type: 'Number',
        default: '-'
      },
      {
        property: 'maxTagTextLength',
        description: 'The maximum amount of characters for a display tag in `multiple` or `tags` mode. An ellipses will be shown if there are more characters.',
        type: 'Number',
        default: '-'
      },
      {
        property: 'showArrow',
        description: 'Whether to show the drop-down arrow.',
        type: 'Boolean',
        default: 'true'
      },
      {
        property: 'suffixIcon',
        description: 'Custom icon in place of the arrow in the select input.',
        type: 'SvelteComponent',
        default: 'DownOutlined'
      },
      {
        property: 'clearIcon',
        description: 'Clear icon to use when the Select is clearable and the user hovers over the select.',
        type: 'SvelteComponent',
        default: 'CloseCircleFilled'
      },
      {
        property: 'defaultOpen',
        description: 'Initial open state of the dropdown.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'open',
        description: 'Controlled open state of the dropdown.',
        type: 'Boolean',
        default: '-'
      }
    ]
  }

  const optionAttributesData = {
    title: 'Option Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'value',
        description: 'Value of the option.',
        type: 'String',
        default: '-'
      },
      {
        property: 'label',
        description: 'Label of the option',
        type: 'String',
        default: '-'
      },
      {
        property: 'disabled',
        description: 'Disabled state of the option',
        type: 'Boolean',
        default: 'false'
      }
    ]
  }

  const optionGroupAttributesData = {
    title: 'OptionGroup Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'label',
        description: 'The OptionGroup label',
        type: 'String',
        default: '-'
      }
    ]
  }

  const selectEventData = {
    title: 'Select Events',
    columns: ['Name', 'Description'],
    data: [
      {
        name: 'change',
        description: 'The Select\'s value changed.'
      },
      {
        name: 'blur',
        description: 'The user clicked away from the Select.'
      },
      {
        name: 'focus',
        description: 'The user focused the Select.'
      },
      {
        name: 'search',
        description: 'The user typed a character into the search input.'
      },
      {
        name: 'dropdownvisiblechange',
        description: 'The dropdown is opened or closed.'
      }
    ]
  };


  const slotsData = {
    title: 'Slots',
    columns: ['Name', 'Description', 'Component'],
    data: [
      {
        name: 'default (no name needed)',
        description: 'The default slot for Select expects options, but any custom content can be added in there as well together with the options. See the above "Custom Dropdown Content" section for an example.',
        component: 'Select'
      },
      {
        name: 'no-options',
        description: 'Custom content to display when there are no options. Generally used for when search results come up empty.',
        component: 'Select'
      },
      {
        name: 'default (no name needed)',
        description: 'Custom content to display for the Option inside the dropdown. If no content is put in the default slot, the option will render the label. See the above "Custom Selection Display" section for an example.',
        component: 'Option'
      }
    ]
  }
</script>
