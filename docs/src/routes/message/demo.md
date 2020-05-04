# Message

Display global messages as feedback in response to user operations.

## Examples

<Example
  id="message-demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">
  <p slot="description">
    A basic example of an information message.
  </p>
</Example>

<Example
  id="message-demo-statuses"
  title="Status"
  demoComponent="{Status}"
  demoCode="{StatusCode}">
  <p slot="description">
    System status can be communicated using `success`, `warning`, or `error` messages.
  </p>
</Example>

<Example
  id="message-demo-duration"
  title="Custom Duration"
  demoComponent="{Duration}"
  demoCode="{DurationCode}">
  <div slot="description">
    <p>Customize the message display duration by using the `duration` option. The default is `3000` (3 seconds).</p>
    <p>The message will never dismiss if the `duration` is set to `0`.</p>
  </div>
</Example>

<Example
  id="message-demo-loading"
  title="Loading Indicator"
  demoComponent="{Loading}"
  demoCode="{LoadingCode}">
  <p slot="description">
    Display a global loading indicator, which can be dismissed asynchronously. The resolved value of the message call promise is a `destroy` function.
  </p>
</Example>

<Example
  id="message-demo-promise"
  title="Promise Interface"
  demoComponent="{Promise}"
  demoCode="{PromiseCode}">
  <p slot="description">
    `message` provides a promise interface for performing actions after it closes. This example will display a new message when the old message closes.
  </p>
</Example>

<Example
  id="message-demo-update"
  title="Updating a Message"
  demoComponent="{Update}"
  demoCode="{UpdateCode}">
  <p slot="description">
    A message can be updated by using a unique `key`.
  </p>
</Example>

## API

<DocsTable {...attributesData}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'

  import Status from './demos/status.demo.svelte'
  import StatusCode from './demos/status.demo.txt'

  import Duration from './demos/duration.demo.svelte'
  import DurationCode from './demos/duration.demo.txt'

  import Loading from './demos/loading.demo.svelte'
  import LoadingCode from './demos/loading.demo.txt'

  import Promise from './demos/promise.demo.svelte'
  import PromiseCode from './demos/promise.demo.txt'

  import Update from './demos/update.demo.svelte'
  import UpdateCode from './demos/update.demo.txt'

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
