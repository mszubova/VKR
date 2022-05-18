<template>
  <div class="appRoot">
    <div class="nav">
      <main-menu></main-menu>
    </div>
  </div>
</template>

<script>
import MainMenuVue from "./components/MainMenu.vue"
export default {
  name: 'App',
  components: {
    "main-menu": MainMenuVue,
  }
}
</script>

<style>
#app {

}
div.nav{
  position:fixed;
  float: left;
  height: 100vh;
  width: 20vw;
  left: 0;
  top:0;
}
</style>
