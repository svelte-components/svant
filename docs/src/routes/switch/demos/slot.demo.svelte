<Switch bind:checked="{checked1}">
  <span slot="checked">ON</span>
  <span slot="unchecked">OFF</span>
</Switch>
<br />
<Switch bind:checked="{checked2}">
  <span slot="checked">1</span>
  <span slot="unchecked">0</span>
</Switch>
<br />
<Switch bind:checked="{checked3}">
  <div slot="checked">
    <CheckOutlined />
  </div>
  <div slot="unchecked">
    <CloseOutlined />
  </div>
</Switch>

<script>
  import { Button, Switch } from "svant";
  import { CheckOutlined, CloseOutlined } from "svant/icons";

  let checked1 = true;
  let checked2 = true;
  let checked3 = true;
</script>
