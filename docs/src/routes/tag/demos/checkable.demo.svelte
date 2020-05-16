<span style="margin-right: 8px;">Categories:</span>
{#each tags as tag (tag.label)}
  <Tag
    checked="{tag.selected}"
    on:click="{() => {
      toggleSelected(tag.label);
    }}">
    {tag.label}
  </Tag>
{/each}

<script>
  import { Tag } from "svant";

  let tags = [
    {
      label: "Movies",
      selected: false
    },
    {
      label: "Books",
      selected: true
    },
    {
      label: "Music",
      selected: false
    },
    {
      label: "Sports",
      selected: false
    }
  ];

  const toggleSelected = label => {
    const tagsCopy = [...tags];
    const tag = tagsCopy.find(t => t.label === label);
    tag.selected = !tag.selected;
    tags = [...tagsCopy];
  };
</script>
