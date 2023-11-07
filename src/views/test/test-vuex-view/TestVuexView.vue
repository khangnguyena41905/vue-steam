<template>
  <div id="test-vuex">
    <p class="state-name">State Name : {{ name }}</p>
    <button @click="changeStateName()">change state</button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { testVuexStore } from "./test-vuex-store/test-vuex-store";

const name = computed(() => {
  return testVuexStore.stateName;
});

const changeStateName = ()=>{
    return testVuexStore.changeStateName("state change")
}
</script>

<style lang="scss">
#test-vuex {
  .state-name {
    color: red;
  }
}
</style>
