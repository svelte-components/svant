<Collapse defaultActiveKey="{['1']}" expandIconPosition="right">
  <CollapsePanel header="This is panel header 1" key="1">
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
</script>
