# Icon

Semantic vector graphics.

## Examples

<Example
  id="icon-demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">
  <p slot="description">
   Svant offers a list of icons that you can import from `svant/icons`, there are components for icons with different themes, you can use `spin` to animate the icon, and `rotate` to rotate it. </p>
</Example>

<Example
  id="icon-demo-twotone"
  title="Two-tone icons"
  demoComponent="{TwoTone}"
  demoCode="{TwoToneCode}">
  <p slot="description">
  You can set `twoToneColor` prop to specific primary color for two-tone icons.
  </p>
</Example>

<Example
  id="icon-demo-twotone"
  title="Custom Icon"
  demoComponent="{CustomIcons}"
  demoCode="{CustomIconsCode}">
  <p slot="description">
  </p>
</Example>

<DocsTable {...attributesData}/>

If you are using the `Icon` component these are additional attributes besides the above

<DocsTable {...customAttributesData}/>

<DocsTable {...eventData}/>

<script>
  import Example from 'docs/src/components/Example.svelte';
  import DocsTable from 'docs/src/components/DocsTable.svelte'

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'
  import TwoTone from './demos/twotone.demo.svelte'
  import TwoToneCode from './demos/twotone.demo.txt'
  import CustomIcons from './demos/custom.demo.svelte'
  import CustomIconsCode from './demos/custom.demo.txt'

  const attributesData = {
    title: 'Common Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'class',
        description: 'Class of Icon',
        type: 'String | Object',
        default: '-'
      },
      {
        property: 'style',
        description: 'Style properties of icon, like fontSize and color',
        type: 'String | Object',
        default: '-'
      },
      {
        property: 'spin',
        description: 'Rotate icon with animation',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'rotate',
        description: 'Rotate by n degrees (not working in IE9)',
        type: 'Number',
        default: '-'
      },
      {
        property: 'twoToneColor',
        description: 'Only supports the two-tone icon. Specify the primary color.',
        type: 'String (hex color)',
        default: '-'
      },
    ]
  };

  const customAttributesData = {
    title: 'Custom Icon attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'component',
        description: 'SvelteComponent containing svg',
        type: 'SvelteComponent',
        default: '-'
      },
    ]
  };

  const eventData = {
    title: 'Events',
    columns: ['Name', 'Description'],
    data: [
      {
        name: 'click',
        description: 'Specify a function that will be called when a user clicks the icon.'
      },
    ]
  }
</script>
