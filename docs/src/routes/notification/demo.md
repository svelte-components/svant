# Notification

Description of the Notification's function.

## Examples

<Example
  id="notification-demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">
  <p slot="description">
    A basic example of a notification.
  </p>
</Example>

<Example
  id="notification-demo-duration"
  title="Custom Duration"
  demoComponent="{Duration}"
  demoCode="{DurationCode}">
  <p slot="description">
    The `duration` can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, the default duration is 4.5 seconds. If the duration is set to 0, the notification box will never close automatically.
  </p>
</Example>

<Example
  id="notification-demo-status-icon"
  title="Status Icon"
  demoComponent="{Status}"
  demoCode="{StatusCode}">
  <p slot="description">
    A status icon can be included on the left side of the notification.
  </p>
</Example>

<Example
  id="notification-demo-custom-icon"
  title="Custom Icon"
  demoComponent="{Icon}"
  demoCode="{IconCode}">
  <p slot="description">
    A custom icon can also be added. Use the `iconColor` option to set it's color. Using status methods (notification.success) will color the icon according to the status color.
  </p>
</Example>

<Example
  id="notification-demo-button"
  title="Custom Button"
  demoComponent="{Button}"
  demoCode="{ButtonCode}">
  <p slot="description">
    A custom button can be added to the notification. It should include an object with the buttons props and a `onClick` function.
  </p>
</Example>

<Example
  id="notification-demo-custom-style"
  title="Customized Styling"
  demoComponent="{Style}"
  demoCode="{StyleCode}">
  <p slot="description">
    The Notification has options for `style` and `className` so it's style can be customized.
  </p>
</Example>

<Example
  id="notification-demo-placement"
  title="Placement"
  demoComponent="{Placement}"
  demoCode="{PlacementCode}">
  <p slot="description">
    A notification box can appear from the `topRight`, `bottomRight`, `bottomLeft` or `topLeft` of the viewport.
  </p>
</Example>

<Example
  id="notification-demo-update"
  title="Updating a Notification"
  demoComponent="{Update}"
  demoCode="{UpdateCode}">
  <p slot="description">
    A notification can be updated by using a unique `key`.
  </p>
</Example>

## API

This component provides the following methods:

- `notification.open(options)`
- `notification.success(options)`
- `notification.error(options)`
- `notification.info(options)`
- `notification.warning(options)`
- `notification.warn(options) // alias of warning`
- `notification.close(key: String)`
- `notification.destroyAll()`

<DocsTable {...attributesData}/>

### Global Configuration

A `notification.config` method is also provided. These can be overridden on an individual basis.

<Prism language="javascript" source="{configExampleCode}" />

<DocsTable {...configAttributesData}/>

<script>
  import Example from "docs/src/components/Example.svelte";

  import Basic from "./demos/basic.demo.svelte";
  import BasicCode from "./demos/basic.demo.txt";

  import Duration from "./demos/duration.demo.svelte";
  import DurationCode from "./demos/duration.demo.txt";

  import Status from "./demos/status.demo.svelte";
  import StatusCode from "./demos/status.demo.txt";

  import Button from "./demos/button.demo.svelte";
  import ButtonCode from "./demos/button.demo.txt";

  import Icon from "./demos/icon.demo.svelte";
  import IconCode from "./demos/icon.demo.txt";

  import Style from "./demos/style.demo.svelte";
  import StyleCode from "./demos/style.demo.txt";

  import Placement from "./demos/placement.demo.svelte";
  import PlacementCode from "./demos/placement.demo.txt";

  import Update from "./demos/update.demo.svelte";
  import UpdateCode from "./demos/update.demo.txt";

  import DocsTable from "docs/src/components/DocsTable.svelte";
  import Prism from 'docs/src/components/prism/Prism.svelte';

    const configExampleCode = `notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3000,
  rtl: true,
});`

  const attributesData = {
    title: 'Notification Options',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'message',
        description: 'The title of notification box (required)',
        type: 'String',
        default: ''
      },
      {
        property: 'description',
        description: 'The text content of notification box (required)',
        type: 'String',
        default: ''
      },
      {
        property: 'className',
        description: 'Customized CSS class',
        type: 'String',
        default: ''
      },
      {
        property: 'duration',
        description: 'Time in milliseconds before Notification is closed. When set to 0 or null, it will never be closed automatically',
        type: 'Number',
        default: ''
      },
      {
        property: 'button',
        description: 'Object of Button props along with onClick and text options. Will add a button to the bottom of the notification',
        type: 'Object',
        default: ''
      },
      {
        property: 'icon',
        description: 'Customized icon',
        type: 'SvelteComponent',
        default: ''
      },
      {
        property: 'iconColor',
        description: 'Color for the customized icon',
        type: 'String (CSS color property)',
        default: ''
      },
      {
        property: 'closeIcon',
        description: 'Custom close icon',
        type: 'SvelteComponent',
        default: ''
      },
      {
        property: 'key',
        description: 'The unique identifier of the Notification',
        type: 'String',
        default: ''
      },
      {
        property: 'onClose',
        description: 'Specify a function that will be called when the close button is clicked',
        type: 'Function',
        default: ''
      },
      {
        property: 'onClick',
        description: 'Specify a function that will be called when the notification is clicked',
        type: 'Function',
        default: ''
      },
      {
        property: 'placement',
        description: 'Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight`',
        type: 'String',
        default: '`topRight`'
      },
      {
        property: 'style',
        description: 'Customized inline style',
        type: 'Object|String',
        default: ''
      }
    ]
  }

  const configAttributesData = {
    title: 'Global Config Options',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'bottom',
        description: 'Distance from the bottom of the viewport, when placement is bottomRight or bottomLeft (unit: pixels).',
        type: 'Number',
        default: '24'
      },
      {
        property: 'top',
        description: 'Distance from the top of the viewport, when placement is topRight or topLeft (unit: pixels).',
        type: 'Number',
        default: '24'
      },
      {
        property: 'closeIcon',
        description: 'Global close icon',
        type: 'SvelteComponent',
        default: ''
      },
      {
        property: 'duration',
        description: 'Time in milliseconds before Notification is closed. When set to 0 or null, it will never be closed automatically',
        type: 'Number',
        default: ''
      },
      {
        property: 'placement',
        description: 'Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight`',
        type: 'String',
        default: '`topRight`'
      },
      {
        property: 'rtl',
        description: 'Whether to enable RTL mode',
        type: 'Boolean',
        default: 'false'
      }
    ]
  }
</script>
