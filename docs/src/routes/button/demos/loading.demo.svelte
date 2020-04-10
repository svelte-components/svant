<Button type="primary" loading>Loading</Button>
<Button type="primary" size="small" loading>Loading</Button>
<br />
<Button
  type="primary"
  {loading}
  on:click={() => {
    loading = true;
  }}>
  Click me!
</Button>
<Button
  type="primary"
  icon={PoweroffOutlined}
  loading={iconLoading}
  on:click={() => {
    iconLoading = true;
  }}>
  Click me!
</Button>

<script>
  import Button from "@/components/button/Button.svelte";
  import { PoweroffOutlined } from "@/components/icons";

  let loading = false;
  let iconLoading = false;
</script>
