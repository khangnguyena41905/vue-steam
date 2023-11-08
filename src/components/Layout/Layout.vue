<template>
  <div id="view-layout">
    <div class="left-area">
      <slot name="left"></slot>
    </div>
    <div class="right-area">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-facing-decorator";
import BaseComponent from "../Base/base-component";

@Component
export default class Layout extends BaseComponent {}
</script>

<style scoped lang="scss">
#view-layout {
  display: flex;

  .left-area {
    width: 200px;
  }

  .right-area{
    flex-grow: 1;
  }
}
</style>
