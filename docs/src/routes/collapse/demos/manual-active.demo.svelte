<Collapse {activeKey} on:click="{handleClick}">
  <CollapsePanel header="This is panel header 1" key="1">
    <p>{text}</p>
  </CollapsePanel>
  <CollapsePanel header="This is panel header 2" key="2">
    <p>{text}</p>
  </CollapsePanel>
  <CollapsePanel header="This is panel header 3" key="3">
    <p>{text}</p>
  </CollapsePanel>
</Collapse>

<script>
  import { Collapse, CollapsePanel, Modal } from "svant";

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  let activeKey = ["1"];

  function handleClick({ detail }) {
    const { lastKeyClicked } = detail;
    const alreadyOpen = activeKey.includes(lastKeyClicked);
    const message = `Are you sure you want to ${
      alreadyOpen ? "close" : "open"
    } this panel`;
    const callback = () => {
      if (alreadyOpen) {
        // Make sure to reassign activeKey so it's
        activeKey = activeKey.splice(activeKey.indexOf(lastKeyClicked), 0);
      } else {
        activeKey = [...activeKey, lastKeyClicked];
      }
    };
    Modal.confirm({
      content: message,
      onOk: callback
    });
  }
</script>
