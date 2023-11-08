<template>
  <div class="w-fit-content mx-auto">
    <a-qrcode
      error-level="H"
      value="https://www.antdv.com"
      icon="https://www.antdv.com/assets/logo.1ef800a8.svg"
    />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class TestAntdView extends Vue {}
</script>

<style scoped></style>
