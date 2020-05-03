<div>
  <div className="site-checkbox-all-wrapper">
    <Checkbox
      {indeterminate}
      on:change="{onCheckAllChange}"
      checked="{checkAll}">
      Check all
    </Checkbox>
  </div>
  <br />
  <CheckboxGroup
    options="{plainOptions}"
    value="{checkedList}"
    on:change="{onChange}" />
</div>

<script>
  import { CheckboxGroup, Checkbox } from "svant";

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
