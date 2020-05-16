<Button type="primary" on:click="{() => openNotification('topLeft')}">
  <RadiusUpleftOutlined />
  topLeft
</Button>
<Button type="primary" on:click="{() => openNotification('topRight')}">
  <RadiusUprightOutlined />
  topRight
</Button>
<br />
<Button type="primary" on:click="{() => openNotification('bottomLeft')}">
  <RadiusBottomleftOutlined />
  bottomLeft
</Button>
<Button type="primary" on:click="{() => openNotification('bottomRight')}">
  <RadiusBottomrightOutlined />
  bottomRight
</Button>

<script>
  import { notification, Button } from "svant";
  import {
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined
  } from "svant/icons";

  const openNotification = placement => {
    notification.info({
      message: `Notification ${placement}`,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      placement
    });
  };
</script>
