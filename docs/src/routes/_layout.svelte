<Layout>
  <Header theme="light" class="header">
    <a class="logo" href="/">
      <img alt="logo" src="/svant_logo.svg" />
      Svant
    </a>
  </Header>
  <Layout>
    <Sider theme="light" width="16.66%" class="layout-sidebar">
      <Nav {segment} />
    </Sider>
    <Content class="body">
      <slot />
    </Content>
  </Layout>
</Layout>

<script>
  import Nav from "../components/Nav.svelte";
  import Layout from "@/components/layout/Layout.svelte";
  import Content from "@/components/layout/Content.svelte";
  import Sider from "@/components/layout/Sider.svelte";
  import Header from "@/components/layout/Header.svelte";

  export let segment;
</script>

<style global lang="less">
  .header {
    position: fixed;
    width: 100%;
    box-shadow: 0 2px 8px #f0f1f2;
    z-index: 10;
  }
  .logo {
    font-family: Avenir, -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
      helvetica neue, Arial, noto sans, sans-serif, apple color emoji,
      segoe ui emoji, segoe ui symbol, noto color emoji, sans-serif;
    height: 64px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-size: 18px;
    font-weight: 500;
    line-height: 64px;
    white-space: nowrap;
    text-decoration: none;
    display: inline-flex;
    align-items: center;

    &:hover {
      color: rgba(0, 0, 0, 0.85);
    }

    img {
      position: relative;
      top: -1.5px;
      height: 32px;
      margin-right: 12px;
    }
  }
  .body {
    padding: 104px 64px;
    background: #fff;
    margin-left: 16.66%; /* width of sidebar */
  }

  .layout-sidebar {
    position: fixed;
    top: 64px; /* top nav */
    bottom: 0;
    overflow-y: scroll;
  }
</style>
