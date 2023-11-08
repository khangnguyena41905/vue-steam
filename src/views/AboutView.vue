<template>
  <div id="about-view" class="about">
    <h1>This is an about page</h1>
    <h1 class="text-danger">TEST BOOTSTRAP 5</h1>
    <div class="">
      <h1 class="test-color bg_light-purple">TEST GLOBAL Variable</h1>
    </div>
    <div>
      <h2>Vue Antd</h2>
      <div>
        <TestAntdView/>
      </div>
    </div>
    <div>
      <TestVuexView/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TestVuexView from "./test/test-vuex-view/TestVuexView.vue";
import TestAntdView from "./test/test-antd-view/TestAntdView.vue"

@Options({
  components: {
    TestVuexView,
    TestAntdView
  },
})
export default class AboutView extends Vue {}
</script>

<style lang="scss">
#about-view {
  .test-color {
    color: $dark-blue;
  }
}
</style>
