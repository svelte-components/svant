<Tag>Tag 1</Tag>
<Tag>
  <a href="https://svant.dev">Link</a>
</Tag>
<Tag closable on:close="{tag2Message}">Tag 2</Tag>
<Tag closable on:close="{tag3Message}">Prevent Close</Tag>

<script>
  import { Tag, message } from "svant";

  function tag2Message() {
    message.info("Tag 2 closed");
  }

  function tag3Message(e) {
    e.detail.preventClose();
    message.info("Tag 3 clicked but close was prevented");
  }
</script>
