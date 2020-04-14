<Button type="primary">Primary</Button>
<Button type="primary" disabled>Primary(disabled)</Button>
<br />
<Button>Default</Button>
<Button disabled>Default(disabled)</Button>
<br />
<Button type="dashed">Dashed</Button>
<Button type="dashed" disabled>Dashed(disabled)</Button>
<br />
<Button type="link">Link</Button>
<Button type="link" disabled>Link(disabled)</Button>
<br />
<Button type="link" danger>Danger Link</Button>
<Button type="link" danger disabled>Danger Link(disabled)</Button>
<br />
<Button danger>Danger Default</Button>
<Button danger disabled>Danger Default(disabled)</Button>
<div class="site-button-ghost-wrapper">
  <Button ghost>Ghost</Button>
  <Button ghost disabled>Ghost(disabled)</Button>
</div>

<script>
  import Button from "@/components/button/Button.svelte";
</script>

<style>
  .site-button-ghost-wrapper {
    padding: 8px 8px 0 8px;
    background: rgb(190, 200, 200);
  }
</style>
