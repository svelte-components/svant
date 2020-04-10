<script>
  import Prism from 'docs/src/components/prism/Prism.svelte'

  import Base from './demos/base.demo.svelte'
  import BaseCode from './demos/base.demo.txt'

  import Type from './demos/type.demo.svelte'
  import TypeCode from './demos/type.demo.txt'
  
  import Icons from './demos/icons.demo.svelte'
  import IconsCode from './demos/icons.demo.txt'

  import DocsTable from 'docs/src/components/DocsTable.svelte'
  const attributesData = {
    title: 'Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'color',
        description: 'the color',
        type: 'String',
        default: 'white'
      },
      {
        property: 'size',
        description: 'The main size',
        type: 'Number',
        default: '10'
      },
      {
        property: 'round',
        description: 'If the button is round',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'clickHandler',
        description: 'Function to call on click',
        type: 'Function',
        default: ''
      }
    ]
  }
</script>

# Button

## Example type

<Type />
<Prism language="html" source="{TypeCode}"/>

## Example icons

<Icons />
<Prism language="html" source="{IconsCode}"/>


## A simple place to click

This is a simple demo for a button

<Base />
<Prism language="html" source="{BaseCode}"/>

## API

<DocsTable {...attributesData}/>
