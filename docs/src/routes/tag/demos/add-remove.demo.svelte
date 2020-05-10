{#each tags as tag (`tag-${randomNumber()}`)}
  <Tag closable disableTransition="{true}" on:close="{() => removeTag(tag)}">
    {tag}
  </Tag>
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

  let tags = ["Tag one", "Tag 2"];
  let inputVisible = false;
  let newTagValue = "";

  const randomNumber = () => Math.floor(Math.random() * Math.floor(10000));

  const addTag = () => {
    tags = [...tags, newTagValue];
    newTagValue = "";
    inputVisible = false;
  };

  const removeTag = tag => {
    tags.splice(tags.indexOf(tag), 1);
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
