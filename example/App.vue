<template lang="pug">
.app
  label Country:&nbsp;
    input(v-query:sync="'country'")
  label City:&nbsp;
    input(v-query:sync="'city'")
  .numbers
    label Min:&nbsp;
      select(v-query:sync="'min'")
        option(selected value='') Min..
        option(v-for="i in 10", :key="i", :value="i * 10") {{ i * 10 }} $
    label Max:&nbsp;
      select(v-query:sync="'max'")
        option(selected value='') Max..
        option(v-for="i in 10", :key="i", :value="i * 10") {{ i * 10 }} $
  label Is Registered:&nbsp;
    input(type="checkbox", v-query:sync="'registered'")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
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