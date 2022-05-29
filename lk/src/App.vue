<template>
  <div class="appRoot">
    <div class="nav">
      <main-menu></main-menu>
    </div>
  </div>
</template>

<script>
import MainMenuVue from "./components/MainMenu.vue"
import readCookies from './components/Script/readCookies.js'
import {responsePersonalData} from "@/components/Script/profileData.js"
export default {
  name: 'App',
  data(){
    return{
      login: String,
    }
  },
  components: {
    "main-menu": MainMenuVue,
  },
  mounted: function(){
    try{
      this.login = readCookies('login');
      responsePersonalData({"type": "personData", "login": this.login})
    }
    catch(e){
      try{
        if(this.login == undefined){
          setTimeout(() => {
            this.login = readCookies('login');
          }, 2000);
        }
        responsePersonalData({"type": "personData", "login": this.login})
        }
      catch(e){
        console.error("давай умрем", e)
      }
      alert(e);
      console.error(e)
    }
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
  width: 200pt;
  left: 0;
  top:0;
  background-color: grey;
}
</style>
