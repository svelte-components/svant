# Modal

Description of the Modal's function.

## Examples

<Example
  id="demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}"/>

<Example
  id="demo-async-close"
  title="Asynchronously Close"
  demoComponent="{AsyncClose}"
  demoCode="{AsyncCloseCode}">
  <p slot="description">
    Asynchronously close a modal dialog when a the OK button is pressed. For example, you can use this pattern when you submit a form.
  </p>
</Example>

<Example
  id="demo-custom-footer"
  title="Customized Footer"
  demoComponent="{CustomFooter}"
  demoCode="{CustomFooterCode}">
  <div slot="description">
    <p>A more complex example which define a customized footer button bar. The dialog will change to loading state after clicking the submit button, and when the loading is done, the modal dialog will be closed.</p>
    <p>You could set the footer prop to null if you don't need default footer buttons.</p>
  </div>
</Example>

<Example
  id="demo-confirm"
  title="Confirmation Modal Dialog"
  demoComponent="{ConfirmModal}"
  demoCode="{ConfirmModalCode}">
  <p slot="description">
    Use `Modal.confirm()` to show a confirmation modal dialog. The `onOk` and `onCancel` buttons can return a promise and will delay the modal from closing until completed.
  </p>
</Example>

<Example
  id="demo-information"
  title="Information Modal Dialog"
  demoComponent="{InformationModal}"
  demoCode="{InformationModalCode}">
  <p slot="description">
    The information modal dialog is used to communicate system status. Only one button is used to close the dialog.
  </p>
</Example>

<Example
  id="demo-update-destroy"
  title="Manually Updating and Destroying"
  demoComponent="{UpdateDestroyModal}"
  demoCode="{UpdateDestroyModalCode}">
  <p slot="description">
    Use Svelte's built in `$set` function to update the modal. The `Modal.destroy()` function will destroy a modal.
  </p>
</Example>

<Example
  id="demo-update-positioning"
  title="Positioning"
  demoComponent="{PositioningModal}"
  demoCode="{PositioningModalCode}">
  <p slot="description">
    You can use the centered prop, or set the verticalPosition's top or bottom to position the modal.
  </p>
</Example>

<Example
  id="demo-destroy-all"
  title="Destroying all Modals Open"
  demoComponent="{DestroyAllModal}"
  demoCode="{DestroyAllModalCode}">
  <p slot="description">
    `Modal.destroyAll()` will destroy all confirmation modal dialogs.
  </p>
</Example>

## API

<DocsTable {...attributesData}/>
<DocsTable {...eventData}/>

### Modal.method()

There are five ways to display the information based on the content's nature:

- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`
- `Modal.confirm`

The items listed above are all functions, expecting a settings object as parameter. The settings object takes any of the props above as attributes.

> Note: The `closeable` and `maskClosable` props default to false for these types of modals.

Additionally these options are available:

<DocsTable {...methodExtraAttributes}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

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
        property: 'bodyStyle',
        description: 'Body style for modal body element. Such as height, padding etc.',
        type: 'String|Object',
        default: ''
      },
      {
        property: 'cancelText',
        description: 'Text of the Cancel button.',
        type: 'String',
        default: 'Cancel'
      },
      {
        property: 'centered',
        description: 'Centered Modal',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'closable',
        description: 'Whether a close (x) button is visible on top right of the modal dialog or not.',
        type: 'Boolean',
        default: 'true'
      },
      {
        property: 'closeIcon',
        description: 'Custom close icon.',
        type: 'SvelteComponent',
        default: 'CloseOutlined'
      },
      {
        property: 'confirmLoading',
        description: 'Whether to apply loading visual effect for OK button or not.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'mask',
        description: 'Whether show mask or not.',
        type: 'Boolean',
        default: 'true'
      },
      {
        property: 'maskClosable',
        description: 'Whether to close the modal dialog when the mask (area outside the modal) is clicked.',
        type: 'Boolean',
        default: 'true'
      },
      {
        property: 'maskStyle',
        description: 'Style for modal\'s mask element.',
        type: 'String|Object',
        default: ''
      },
      {
        property: 'okText',
        description: 'Text of the OK button.',
        type: 'String',
        default: 'OK'
      },
      {
        property: 'okType',
        description: 'Button `type` of the OK button.',
        type: 'String',
        default: 'primary'
      },
      {
        property: 'okButtonProps',
        description: 'The OK button props.',
        type: 'Object',
        default: '{}'
      },
      {
        property: 'cancelButtonProps',
        description: 'The Cancel button props.',
        type: 'Object',
        default: '{}'
      },
      {
        property: 'verticalPosition',
        description: 'The vertical position of the modal (top or bottom)',
        type: 'Object',
        default: '{}'
      },
      {
        property: 'title',
        description: 'The modal dialog\'s title',
        type: 'String',
        default: '-'
      },
      {
        property: 'visible',
        description: 'Whether the modal dialog is visible or not.',
        type: 'Boolean',
        default: 'false'
      },
      {
        property: 'width',
        description: 'Width of the modal dialog.',
        type: 'String',
        default: '520px'
      },
      {
        property: 'wrapClassName',
        description: 'The class name of the container of the modal dialog.',
        type: 'String',
        default: '-'
      },
      {
        property: 'zIndex',
        description: 'The `z-index` of the Modal.',
        type: 'Number',
        default: '1000'
      },
      {
        property: 'autoFocusButton',
        description: 'Specify which button to autofocus when the modal opens.',
        type: "null|'ok'|'cancel'",
        default: 'ok'
      },
      {
        property: 'keyboard',
        description: 'Whether the escape key will close the modal.',
        type: "Boolean",
        default: 'true'
      }
    ]
  }
  const eventData = {
    title: 'Events',
    columns: ['Name', 'Description'],
    data: [
      {
        name: 'cancel',
        description: 'Specify a function that will be called when a user clicks mask, close button on top right or Cancel button.'
      },
      {
        name: 'ok',
        description: 'Specify a function that will be called when a user clicks the OK button.'
      },
      {
        property: 'after-close',
        description: 'Specify a function that will be called when modal is closed completely.'
      },
    ]
  }
  const methodExtraAttributes = {
    title: 'Modal.method() Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'content',
        description: 'Content for the modal body.',
        type: "String|SvelteComponent",
        default: '-'
      },
      {
        property: 'icon',
        description: 'Custom icon to display next to the content.',
        type: "SvelteComponent",
        default: 'Depends on the modal method'
      },
      {
        property: 'onCancel',
        description: 'Specify a function that will be called when a user clicks mask, close button on top right or Cancel button.',
        type: 'Function',
        default: '-'
      },
      {
        property: 'onOk',
        description: 'Specify a function that will be called when a user clicks the OK button.',
        type: 'Function',
        default: '-'
      }
    ]
  }
</script>
