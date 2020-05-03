<div>
  <div className="site-checkbox-all-wrapper">
    <CheckBox
      {indeterminate}
      on:change="{onCheckAllChange}"
      checked="{checkAll}">
      Check all
    </CheckBox>
  </div>
  <br />
  <CheckBoxGroup
    options="{plainOptions}"
    value="{checkedList}"
    on:change="{onChange}" />
</div>

<script>
  import { CheckBoxGroup, CheckBox } from "svant";

  const plainOptions = ["Apple", "Pear", "Orange"];
  let checkedList = ["Apple", "Orange"];
  let indeterminate = true;
  let checkAll = false;

  function onChange({ detail }) {
    checkedList = detail;
    indeterminate =
      checkedList.length && checkedList.length < plainOptions.length;
    checkAll = checkedList.length === plainOptions.length;
  }

  function onCheckAllChange({ detail }) {
    console.log(detail.target.checked);
    checkedList = detail.target.checked ? plainOptions : [];
    indeterminate = false;
    checkAll = detail.target.checked;
  }
</script>
