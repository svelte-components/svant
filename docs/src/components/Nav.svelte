<div class="navigation">
  <ul>
    {#each navSections as section (section.name)}
      <li>
        <div class="group-title">{section.name}</div>
        <ul>
          {#each section.children as link (`${section.name}-${link}`)}
            <li>
              <a
                class:current-link="{segment === link}"
                class="nav-link"
                href="{link}">
                {startCase(link)}
              </a>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</div>

<script>
  import navSections from "../nav.config.json";
  import startCase from "lodash/startCase";

  export let segment;

  const setAreaCurrent = link => (segment === link ? "page" : undefined);
</script>

<style>
  .navigation {
    font-family: Avenir, -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
      helvetica neue, Arial, noto sans, sans-serif, apple color emoji,
      segoe ui emoji, segoe ui symbol, noto color emoji, sans-serif;
    border-right: 1px solid #f0f0f0;
  }

  .group-title {
    height: 1.5715;
    padding: 8px 16px 8px 40px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 1.5715;
    margin-bottom: 16px;
    font-size: 13px;
  }

  .group-title::after {
    position: relative;
    top: 12px;
    display: block;
    width: calc(100% - 20px);
    height: 1px;
    background: #f0f0f0;
    content: "";
  }

  .nav-link {
    display: block;
    padding: 0 16px 0 40px;
    height: 40px;
    margin-top: 4px;
    margin-bottom: 8px;
    overflow: hidden;
    font-size: 14px;
    line-height: 40px;
    text-overflow: ellipsis;
    color: rgba(0, 0, 0, 0.85);
    text-decoration: none;
  }

  .current-link {
    color: #1890ff;
    background-color: #e6f7ff;
    position: relative;
  }

  .current-link::after {
    content: "";
    height: 100%;
    border-right: 3px solid #1890ff;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
