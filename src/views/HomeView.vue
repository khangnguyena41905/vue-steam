<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import BaseComponent from "@/components/Base/base-component";
import { Component} from "vue-facing-decorator";

@Component
export default class HomeView extends BaseComponent {}
</script>
