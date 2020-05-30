<RadioGroup on:change="{onChange1}" bind:value="{value1}">
  <RadioButton value="a">Hangzhou</RadioButton>
  <RadioButton value="b">Shanghai</RadioButton>
  <RadioButton value="c">Beijing</RadioButton>
  <RadioButton value="d">Chengdu</RadioButton>
</RadioGroup>
<br />
<RadioGroup
  on:change="{onChange2}"
  bind:value="{value2}"
  style="{{ marginTop: 16 }}">
  <RadioButton value="a">Hangzhou</RadioButton>
  <RadioButton value="b" disabled>Shanghai</RadioButton>
  <RadioButton value="c">Beijing</RadioButton>
  <RadioButton value="d">Chengdu</RadioButton>
</RadioGroup>
<br />
<RadioGroup
  disabled
  on:change="{onChange3}"
  bind:value="{value3}"
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
  let value3 = "a";

  function onChange1() {
    console.log("first radio group changed", value1);
  }

  function onChange2() {
    console.log("second radio group changed", value2);
  }

  function onChange3() {
    console.log("third radio group changed", value3);
  }
</script>
