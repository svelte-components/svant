# Modal

Description of the Modal's function.

## Examples

### Basic

<div id="components-modal-demo-basic">
  <Basic />
</div>
<Prism language="svelte" source="{BasicCode}"/>

### Asynchronously Close

Asynchronously close a modal dialog when a the OK button is pressed. For example, you can use this pattern when you submit a form.

<div id="components-modal-demo-async-close">
  <AsyncClose />
</div>
<Prism language="svelte" source="{AsyncCloseCode}"/>

### Customized Footer

A more complex example which define a customized footer button bar. The dialog will change to loading state after clicking the submit button, and when the loading is done, the modal dialog will be closed.

You could set the footer prop to null if you don't need default footer buttons.

<div id="components-modal-demo-async-close">
  <CustomFooter />
</div>
<Prism language="svelte" source="{CustomFooterCode}"/>

### Confirmation Modal Dialog

Use `Modal.confirm()` to show a confirmation modal dialog. The `onOk` and `onCancel` buttons can return a promise and will delay the modal from closing until completed.

<div id="components-modal-demo-confirm">
  <ConfirmModal />
</div>
<Prism language="svelte" source="{ConfirmModalCode}"/>

### Information Modal Dialog

The information modal dialog is used to communicate system status. Only one button is used to close the dialog.

<div id="components-modal-demo-information">
  <InformationModal />
</div>
<Prism language="svelte" source="{InformationModalCode}"/>

### Manually Updating and Destroying

Use Svelte's built in `$set` function to update the modal. The `Modal.destroy()` function will destroy a modal.

<div id="components-modal-demo-update-destroy">
  <UpdateDestroyModal />
</div>
<Prism language="svelte" source="{UpdateDestroyModalCode}"/>

### Positioning

You can use the centered prop, or set the verticalPosition's top or bottom to position the modal.

<div id="components-modal-demo-position">
  <PositioningModal />
</div>
<Prism language="svelte" source="{PositioningModalCode}"/>

### Destroying all Modals Open

`Modal.destroyAll()` will destroy all confirmation modal dialogs.

<div id="components-modal-demo-destroy-all">
  <DestroyAllModal />
</div>
<Prism language="svelte" source="{DestroyAllModalCode}"/>

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

  import InformationModal from './demos/information.demo.svelte'
  import InformationModalCode from './demos/information.demo.txt'

  import UpdateDestroyModal from './demos/update-destroy.demo.svelte'
  import UpdateDestroyModalCode from './demos/update-destroy.demo.txt'

  import PositioningModal from './demos/positioning.demo.svelte'
  import PositioningModalCode from './demos/positioning.demo.txt'

  import DestroyAllModal from './demos/destroy-all.demo.svelte'
  import DestroyAllModalCode from './demos/destroy-all.demo.txt'

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
