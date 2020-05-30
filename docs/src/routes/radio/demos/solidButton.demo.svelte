<RadioGroup on:change="{onChange}" bind:value="{value1}" buttonStyle="solid">
  <RadioButton value="a">Hangzhou</RadioButton>
  <RadioButton value="b">Shanghai</RadioButton>
  <RadioButton value="c">Beijing</RadioButton>
  <RadioButton value="d">Chengdu</RadioButton>
</RadioGroup>
<br />

<RadioGroup
  disabled
  on:change="{onChange}"
  bind:value="{value2}"
  buttonStyle="solid"
  style="{{ marginTop: 16 }}">
  <RadioButton value="a">Hangzhou</RadioButton>
  <RadioButton value="b">Shanghai</RadioButton>
  <RadioButton value="c">Beijing</RadioButton>
  <RadioButton value="d">Chengdu</RadioButton>
</RadioGroup>

<script>
  import { RadioButton, RadioGroup } from "svant";

  let value1 = "a";
  let value2 = "a";

  function onChange() {
    console.log("radio checked", value1);
  }
</script>
