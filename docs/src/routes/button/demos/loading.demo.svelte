<Button type="primary" loading>Loading</Button>
<Button type="primary" size="small" loading>Loading</Button>
<br />
<Button
  type="primary"
  {loading}
  on:click="{() => {
    loading = true;
  }}">
  Click me!
</Button>
<Button
  type="primary"
  icon="{PoweroffOutlined}"
  loading="{iconLoading}"
  on:click="{() => {
    iconLoading = true;
  }}">
  Click me!
</Button>
<Button
  type="primary"
  loading="{loadingWithDelay}"
  on:click="{() => {
    loadingWithDelay = { delay: 2000 };
  }}">
  With 2s Delay
</Button>
<Button
  type="primary"
  on:click="{() => {
    loading = false;
    iconLoading = false;
    loadingWithDelay = null;
  }}">
  Stop Loading
</Button>

<script>
  import { Button } from "svant";
  import { PoweroffOutlined } from "svant/icons";

  let loading = false;
  let iconLoading = false;

  let loadingWithDelay;
</script>
