<template>
  <div id="test-vuex">
    <p class="state-name">State Name : {{ name }}</p>
    <button @click="changeStateName()">change state</button>
  </div>
</template>

<script lang="ts">
import { testVuexStore } from "./test-vuex-store/test-vuex-store";
import { Vue } from "vue-class-component";

export default class TestVuexView extends Vue {
  public get name() {
    return testVuexStore.stateName;
  }

  public changeStateName() {
    const value =
      testVuexStore.stateName === "BASE NAME" ? "CHANGED NAME" : "BASE NAME";
    return testVuexStore.changeStateName(value);
  }
}
</script>

<style lang="scss">
#test-vuex {
  .state-name {
    color: red;
  }
}
</style>
