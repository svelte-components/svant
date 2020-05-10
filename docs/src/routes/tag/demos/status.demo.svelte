<div>
  <h4>Without icon</h4>
  <Tag color="success">success</Tag>
  <Tag color="processing">processing</Tag>
  <Tag color="error">error</Tag>
  <Tag color="warning">warning</Tag>
  <Tag color="default">default</Tag>
</div>

<div>
  <h4>With icon</h4>
  <Tag icon="{CheckCircleOutlined}" color="success">success</Tag>
  <Tag color="processing">
    <SyncOutlined spin />
    <span class="procesing-text">processing</span>
  </Tag>
  <Tag icon="{CloseCircleOutlined}" color="error">error</Tag>
  <Tag icon="{ExclamationCircleOutlined}" color="warning">warning</Tag>
  <Tag icon="{ClockCircleOutlined}" color="default">waiting</Tag>
  <Tag icon="{MinusCircleOutlined}" color="default">stop</Tag>
</div>

<script>
  import { Tag } from "svant";
  import {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined
  } from "svant/icons";
</script>

<style>
  .procesing-text {
    margin-left: 3px;
  }
</style>
