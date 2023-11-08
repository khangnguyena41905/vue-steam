<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div id="main-app">
    <Layout>
      <template v-slot:left>
        <LeftMenu />
      </template>
      <template v-slot:right>
        <router-view />
      </template>
    </Layout>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import { Component } from "vue-facing-decorator";
import LeftMenu from "@/components/LeftMenu/LeftMenu.vue";

import Layout from "@/components/Layout/Layout.vue"; // @ is an alias to /src
import BaseComponent from "./components/Base/base-component";

@Component({
  components: {
    Layout,
    LeftMenu,
  },
})
export default class App extends BaseComponent {}
</script>
