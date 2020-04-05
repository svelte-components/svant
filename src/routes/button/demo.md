<script>
  import Prism from '../../components/prism/Prism.svelte'
  import Button from '../../../externals/components/Button.svelte';

  import Base from './base.demo.svelte'
  import BaseCode from './base.demo.txt'
</script>

# Button
## A simple place to click

This is a simple demo for a button
<Base/>
<Prism language="html" source="{BaseCode}"/>

<!-- This is a colored demo for a button
{@html colored}
<Prism language="html" source="{colored}"/> -->
