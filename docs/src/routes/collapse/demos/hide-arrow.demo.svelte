<Collapse defaultActiveKey="{['1']}">
  <CollapsePanel header="This is panel header with arrow icon" key="1">
    <p>{text}</p>
  </CollapsePanel>
  <CollapsePanel
    hideArrow
    header="This is panel header with no arrow icon"
    key="2">
    <p>{text}</p>
  </CollapsePanel>
</Collapse>

<script>
  import { Collapse, CollapsePanel } from "svant";

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
</script>
