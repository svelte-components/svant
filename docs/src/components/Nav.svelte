<ul>
  <li>
    <a aria-current="{segment === undefined ? 'page' : undefined}" href=".">
      Home
    </a>
  </li>
  <li>
    <a
      aria-current="{segment === 'button' ? 'page' : undefined}"
      href="button">
      Button
    </a>
  </li>
</ul>
<script>
  export let segment;

  const setAreaCurrent = link => (segment === link ? "page" : undefined);
</script>
<style>
li{
  padding-left: 2rem;
  padding-bottom: 1rem;
}
</style>
