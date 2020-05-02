<Collapse
  borderless
  defaultActiveKey="{['1']}"
  expandIcon="{CaretRightOutlined}"
  class="{{ 'site-collapse-custom-collapse': true }}">
  <CollapsePanel
    header="This is panel header 1"
    key="1"
    class="site-collapse-custom-panel">
    <p>{text}</p>
  </CollapsePanel>
  <CollapsePanel
    header="This is panel header 2"
    key="2"
    class="site-collapse-custom-panel">
    <p>{text}</p>
  </CollapsePanel>
  <CollapsePanel
    header="This is panel header 3"
    key="3"
    class="site-collapse-custom-panel">
    <p>{text}</p>
  </CollapsePanel>
</Collapse>

<script>
  import { Collapse, CollapsePanel } from "svant";
  import { CaretRightOutlined } from "svant/icons";

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
</script>

<style>
  :global(.site-collapse-custom-collapse) {
    background: #fff;
  }

  :global(.site-collapse-custom-panel) {
    background: #fff;
    border-radius: 2px;
    margin-bottom: 24px;
    border-bottom: 0px !important;
    overflow: hidden;
  }

  :global(.site-collapse-custom-panel .ant-collapse-content) {
    background: rgba(0, 102, 204, 0.1) !important;
    margin-left: 40px;
  }
</style>
