<RadioGroup bind:value="{value1}" size="large">
  <RadioButton value="a">Hangzhou</RadioButton>
  <RadioButton value="b">Shanghai</RadioButton>
  <RadioButton value="c">Beijing</RadioButton>
  <RadioButton value="d">Chengdu</RadioButton>
</RadioGroup>
<br />

<RadioGroup bind:value="{value2}" style="{{ marginTop: 16 }}">
  <RadioButton value="a">Hangzhou</RadioButton>
  <RadioButton value="b">Shanghai</RadioButton>
  <RadioButton value="c">Beijing</RadioButton>
  <RadioButton value="d">Chengdu</RadioButton>
</RadioGroup>
<br />

<RadioGroup bind:value="{value3}" size="small" style="{{ marginTop: 16 }}">
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
</script>
