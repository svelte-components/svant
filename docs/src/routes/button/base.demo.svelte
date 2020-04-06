<script>
  import Button from "@/components/Button.svelte";
  let text = "there";
</script>

<div>
  <Button>Hello</Button>
  <Button>{text}</Button>
</div>
