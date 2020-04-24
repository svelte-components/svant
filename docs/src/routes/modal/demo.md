# Modal

Description of the Modal's function.

## Examples

### Basic

<div id="components-modal-demo-basic">
  <Basic />
</div>
<Prism language="svelte" source="{BasicCode}"/>

### Asynchronously Close

<div id="components-modal-demo-async-close">
  <AsyncClose />
</div>
<Prism language="svelte" source="{AsyncCloseCode}"/>

### Customized Footer

<div id="components-modal-demo-async-close">
  <CustomFooter />
</div>
<Prism language="svelte" source="{CustomFooterCode}"/>

### Confirmation Modal Dialog

Use `ModalHelper.confirm()` to show a confirmation modal dialog.

<div id="components-modal-demo-confirm">
  <ConfirmModal />
</div>
<Prism language="svelte" source="{ConfirmModalCode}"/>

## API

<DocsTable {...attributesData}/>

<script>
  import Prism from 'docs/src/components/prism/Prism.svelte'

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'

  import AsyncClose from './demos/async.demo.svelte'
  import AsyncCloseCode from './demos/async.demo.txt'

  import CustomFooter from './demos/footer.demo.svelte'
  import CustomFooterCode from './demos/footer.demo.txt'

  import ConfirmModal from './demos/confirm.demo.svelte'
  import ConfirmModalCode from './demos/confirm.demo.txt'

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
