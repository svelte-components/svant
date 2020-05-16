{#each tags as tag, index (tag.id)}
  <Tag closable on:close="{() => removeTag(tag.id)}">{tag.label}</Tag>
{/each}

{#if !inputVisible}
  <Tag
    class="demo-site-add-tag"
    disableTransition="{true}"
    on:click="{onClickAddTag}">
    <PlusOutlined />
    New Tag
  </Tag>
{:else}
  <Input
    bind:value="{newTagValue}"
    class="demo-site-add-tag-input"
    on:enter="{addTag}" />
{/if}

<script>
  import { Tag, Input } from "svant";
  import { PlusOutlined } from "svant/icons";
  import { tick } from "svelte";

  let tags = [
    { label: "Tag one", id: 1 },
    { label: "Tag two", id: 2 }
  ];
  let inputVisible = false;
  let newTagValue = "";

  const addTag = () => {
    inputVisible = false;
    tags[tags.length] = { label: newTagValue, id: tags.length + 1 };
    newTagValue = "";
  };

  const removeTag = tag => {
    tags = tags.filter(t => t.id !== tag.id);
  };

  const onClickAddTag = async () => {
    inputVisible = true;
    await tick();
    document.querySelector(".ant-input").focus();
  };
</script>

<style>
  :global(.demo-site-add-tag) {
    background: #fff;
    border-style: dashed;
    cursor: pointer;
  }

  :global(.demo-site-add-tag-input) {
    display: inline-block;
    width: 78px;
    height: 23px;
    vertical-align: middle;
  }
</style>
