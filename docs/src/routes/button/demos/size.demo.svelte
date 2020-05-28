<RadioGroup bind:value="{size}" style="{{ marginBottom: '16px' }}">
  <RadioButton value="large">Large</RadioButton>
  <RadioButton value="default">Default</RadioButton>
  <RadioButton value="small">Small</RadioButton>
</RadioGroup>
<br />
<Button type="primary" {size}>Primary</Button>
<Button {size}>Default</Button>
<Button type="dashed" {size}>Dashed</Button>
<Button type="link" {size}>Link</Button>
<br />
<Button type="primary" icon="{DownloadOutlined}" {size} />
<Button type="primary" shape="circle" icon="{DownloadOutlined}" {size} />
<Button type="primary" shape="round" icon="{DownloadOutlined}" {size} />
<Button type="primary" shape="round" icon="{DownloadOutlined}" {size}>
  Download
</Button>
<Button type="primary" icon="{DownloadOutlined}" {size}>Download</Button>

<script>
  import { Button, RadioGroup, RadioButton } from "svant";
  import { DownloadOutlined } from "svant/icons";
  let size = "default";
</script>
