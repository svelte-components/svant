<Layout style="min-height: 100vh;">
  <Header theme="light">
    Awesome Svant
  </Header>
  <Layout>
    <Sider theme="light" collapsible>
      <Nav {segment} />
    </Sider>
    <Content>
      <slot />
    </Content>
  </Layout>
  <Footer />
</Layout>

<script>
  import Nav from "../components/Nav.svelte";
  import Layout from "@/components/layout/Layout.svelte";
  import Header from "@/components/layout/Header.svelte";
  import Sider from "@/components/layout/Sider.svelte";
  import Content from "@/components/layout/Content.svelte";
  import Footer from "@/components/layout/Footer.svelte";

  export let segment;
</script>

<style global lang="less">
  @import "../theme/index.less";
  @import "../../src/style/index.less";

  main {
    position: relative;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
