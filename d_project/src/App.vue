<template>
  <div class="appRoot">
    <div class="authPage" v-if="visibilityAuth">
      <auth-page></auth-page>
    </div>
    <div class="landing" v-if="!visibilityAuth">
      <div class="navMenu">
        <nav-menu></nav-menu>
      </div>
      <div class="mainContainer">
        <main-container></main-container>
      </div>
    </div>
  </div>
</template>

<script>
//подключение общих скриптов
import ColorChange from "./components/Scripts/ColorChange"
//импорт файлов для страницы по умолчанию
import navMenu from "./components/Landing/NavMenu.vue"
import mainContainer from "./components/Landing/MainContainer.vue"
import AuthPageVue from "./components/AuthPage.vue"
export default {
  data(){
    return{
      visibilityAuth: false,
    }
  },
  components:{
    "nav-menu":navMenu,
    "main-container": mainContainer,
    "auth-page":AuthPageVue
  },
  created: function(){
    this.emitter.on("StartAuth", data=>{
        this.visibilityAuth = data;
    })
  },
  beforeCreate: function(){
    ColorChange();
  }
}
</script>

<style>
html{
  overflow-x: hidden;
}
.navMenu{
  width: 100%;
  position: absolute;
  top: 4vh;
}
.mainContainer{
  position: relative;
  height: 87vh;
  top:13vh;
}
</style>
