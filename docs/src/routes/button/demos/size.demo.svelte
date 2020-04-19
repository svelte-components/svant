<Button
  on:click="{() => {
    size = 'large';
  }}">
  Large
</Button>
<Button
  on:click="{() => {
    size = 'default';
  }}">
  Default
</Button>
<Button
  on:click="{() => {
    size = 'small';
  }}">
  Small
</Button>
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
  import { Button } from "svant";
  import { DownloadOutlined } from "svant/icons";
  let size;
</script>
