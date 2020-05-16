<RadioGroup on:change="{onChange}" defaultValue="a" buttonStyle="solid">
  <RadioButton value="a">Hangzhou</RadioButton>
  <RadioButton value="b">Shanghai</RadioButton>
  <RadioButton value="c">Beijing</RadioButton>
  <RadioButton value="d">Chengdu</RadioButton>
</RadioGroup>
<br />

<RadioGroup
  disabled
  on:change="{onChange}"
  defaultValue="a"
  buttonStyle="solid"
  style="{{ marginTop: 16 }}">
  <RadioButton value="a">Hangzhou</RadioButton>
  <RadioButton value="b">Shanghai</RadioButton>
  <RadioButton value="c">Beijing</RadioButton>
  <RadioButton value="d">Chengdu</RadioButton>
</RadioGroup>

<script>
  import { RadioButton, RadioGroup } from "svant";

  let value = 1;

  function onChange({ detail }) {
    console.log("radio checked", detail);
    value = detail;
  }
</script>
