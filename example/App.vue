<template lang="pug">
.app
  label Country:&nbsp;
    input(v-query:sync="'country'", v-model="countryData")
  label City:&nbsp;
    input(v-query:sync="'city'")
  .numbers
    label Min:&nbsp;
      select(v-query:sync="'min'", v-model="minValueData")
        option(selected, value="") Min..
        option(v-for="i in 10", :key="i", :value="i * 10") {{ i * 10 }} $
    label Max:&nbsp;
      select(v-query:sync="'max'")
        option(selected, value="") Max..
        option(v-for="i in 10", :key="i", :value="i * 10") {{ i * 10 }} $
  label Is Registered:&nbsp;
    input(
      type="checkbox",
      v-query:sync="'registered'",
      v-model="isRegisteredData"
    )
  p Country: {{ countryData }}
  p Min Value: {{ minValueData }}
  p IsRegistered: {{ isRegisteredData }}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      countryData: "",
      minValueData: 0,
      isRegisteredData: false,
    };
  },
});
</script>

<style lang="scss">
.app {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  .numbers {
    display: flex;
    gap: 10px;
  }
}
</style>