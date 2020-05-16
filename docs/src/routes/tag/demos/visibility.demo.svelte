<Tag {visible} closable on:close="{onClose}">Movies</Tag>

<div style="margin-top: 15px;">
  <Button size="small" on:click="{toggleVisibility}">Toggle</Button>
</div>

<script>
  import { Tag, Button } from "svant";

  let visible = true;

  const toggleVisibility = () => {
    visible = !visible;
  };

  const onClose = () => {
    visible = false;
  };
</script>
