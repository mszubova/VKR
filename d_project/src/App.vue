<template>
  <div class="appRoot">
    <div class="navMenu">
        <nav-menu></nav-menu>
    </div>
    <div class="mainContainer">
      <main-container></main-container>
    </div>
  </div>
</template>

<script>
//подключение общих скриптов
import ColorChange from "./components/Scripts/ColorChange"
//импорт файлов для страницы по умолчанию
import navMenu from "./components/Landing/NavMenu.vue"
import mainContainer from "./components/Landing/MainContainer.vue"

export default {
  components:{
    "nav-menu":navMenu,
    "main-container": mainContainer,
  },
  beforeCreate: function(){
    ColorChange();
  }
}
</script>

<style>
.navMenu{
  width: 100%;
  position: fixed;
  top: 4vh;
}
</style>
