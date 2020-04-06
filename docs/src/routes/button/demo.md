<script>
  import Prism from 'docs/src/components/prism/Prism.svelte'
  import Button from '@/components/Button.svelte';

  import Base from './base.demo.svelte'
  import BaseCode from './base.demo.txt'

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

## A simple place to click

This is a simple demo for a button

<Base />
<Prism language="html" source="{BaseCode}"/>

<!-- This is a colored demo for a button
{@html colored}
<Prism language="html" source="{colored}"/> -->

<DocsTable {...attributesData}/>
