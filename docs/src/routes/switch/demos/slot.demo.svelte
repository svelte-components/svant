<Switch defaultChecked>
  <span slot="checked">ON</span>
  <span slot="unchecked">OFF</span>
</Switch>
<br />
<Switch defaultChecked>
  <span slot="checked">1</span>
  <span slot="unchecked">0</span>
</Switch>
<br />
<Switch defaultChecked>
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
</script>
