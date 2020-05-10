<div style="width: 50%; min-width: 230px;">
  <Input
    placeholder="Basic usage"
    bind:value
    on:input="{onInput}"
    on:enter="{onEnter}" />
</div>

<script>
  import { Input } from "svant";

  let value = "";

  const onInput = () => {
    console.log("Current value is:", value);
  };

  const onEnter = () => {
    console.log("Enter pressed, the value is:", value);
  };
</script>
