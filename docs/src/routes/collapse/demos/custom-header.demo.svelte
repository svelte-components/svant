<Collapse defaultActiveKey="{['1']}">
  <CollapsePanel key="1">
    <div slot="header" class="geared-panel">
      <span>This is a custom header</span>
      <SettingOutlined on:click="{onGearClicked}" />
    </div>
    <div>{text}</div>
  </CollapsePanel>
  <CollapsePanel header="This is panel header 2" key="2">
    <div>{text}</div>
  </CollapsePanel>
  <CollapsePanel header="This is panel header 3" key="3">
    <div>{text}</div>
  </CollapsePanel>
</Collapse>

<script>
  import { Collapse, CollapsePanel } from "svant";
  import { SettingOutlined } from "svant/icons";

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  function onGearClicked(event) {
    // If you don't want the click to trigger the panel:
    event.stopPropagation();
    console.log("Gear clicked but did not open the panel");
  }
</script>

<style>
  .geared-panel {
    display: flex;
    justify-content: space-between;
  }
</style>
