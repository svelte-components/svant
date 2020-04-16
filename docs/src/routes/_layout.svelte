<div class="header">
  <div class="logo">Awesome Svant</div>
</div>

<div class="main-wrapper">
  <Nav {segment} />
  <div class="body">
    <slot />
  </div>
</div>


<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style global lang="less">
  @import "../theme/index.less";
  @import "../../src/style/index.less";

  .header {
    height: 64px;
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0 2px 8px #f0f1f2;
    display: flex;
    align-items: center;
    z-index: 10;;
  }

  .logo {
    padding-left: 40px;
  }

  .main-wrapper {
    margin-top: 64px;
    position: relative;
    padding: 40px 0 0;
    background: #fff;
  }

  .body {
    width: 80%;
    margin-left: 20%;
    padding: 0 64px;
  }
</style>
