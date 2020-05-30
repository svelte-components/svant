<Menu on:click="{handleClick}" selectedKeys="{[current]}" mode="horizontal">
  <MenuItem key="mail" icon="{MailOutlined}">Navigation One</MenuItem>
  <MenuItem key="app" disabled icon="{AppstoreOutlined}">
    Navigation Two
  </MenuItem>
  <Submenu icon="{SettingOutlined}" title="Navigation Three - Submenu">
    <MenuItemGroup title="Item 1">
      <MenuItem key="setting:1">Option 1</MenuItem>
      <MenuItem key="setting:2">Option 2</MenuItem>
    </MenuItemGroup>
    <MenuItemGroup title="Item 2">
      <MenuItem key="setting:3">Option 3</MenuItem>
      <MenuItem key="setting:4">Option 4</MenuItem>
    </MenuItemGroup>
  </Submenu>
  <MenuItem key="alipay">
    <a href="https://svant.dev" target="_blank" rel="noopener noreferrer">
      Navigation Four - Link
    </a>
  </MenuItem>
</Menu>

<script>
  import { Menu, MenuItem, MenuItemGroup, Submenu } from "svant";
  import { MailOutlined, AppstoreOutlined, SettingOutlined } from "svant/icons";

  let current = "mail";

  function handleClick({ detail }) {
    current = detail.key;
  }
</script>
