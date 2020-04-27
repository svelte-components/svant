<Collapse defaultActiveKey="{['1']}" onChange="{callback}">
  <CollapsePanel header="This is panel header 1" key="1">
    <p>{text}</p>
  </CollapsePanel>
  <CollapsePanel header="This is panel header 2" key="2">
    <p>{text}</p>
  </CollapsePanel>
  <CollapsePanel header="This is panel header 3" key="3" disabled>
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

  function callback(key) {
    console.log(key);
  }
</script>
