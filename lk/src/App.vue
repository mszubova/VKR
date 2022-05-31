<template>
  <div class="appRoot">
    <div class="logoCont">
          <img class="logo" src="@/assets/logo.png"/>
      </div>
    <div class="nav">
      <main-menu></main-menu>
    </div>
    <div class="topNav">
        <top-menu :name="name" :role="role"></top-menu>
      </div>
      <div class="wa">
        <work-area></work-area>
      </div>
  </div>
</template>

<script>
import MainMenuVue from "./components/MainMenu.vue"
import readCookies from './components/Script/readCookies.js'
import TopMenu from "./components/TopMenu.vue"
import WorkAreaVue from "./components/WorkArea.vue"
export default {
  name: 'App',
  data(){
    return{
      name: String,
      role: String,
    }
  },
  components: {
    "main-menu": MainMenuVue,
    "top-menu": TopMenu,
    "work-area": WorkAreaVue
  },
  mounted: function(){
    try{
      let data = {'name': readCookies('name'),
        'role':readCookies('role'),
        'email':readCookies('email')};
      console.log(data)
      this.name = data['name'];

      switch(data['role']){
        case 'customer':
          this.role = 'Заказчик'
          break;
        case 'admin':
          this.role = 'Администратор'
          break;
        default:
          this.role = data['role'];
          break
      }
    }
    catch(e){
      try{
          if(this.login == undefined){
            setTimeout(() => {
              let data = {'name': readCookies('name'),
              'role':readCookies('role'),
              'email':readCookies('role')};
              console.log(data)
              this.name = data['name']
            }, 2000);
          }
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
img.logo{
  position: inherit;
  top: 1vh;
  left: 3vw;
}
div.wa{
  position: fixed;
  width: 91vw;
  height: 91vh;
  top: 9vh;
  left: 240pt;
}
div.logoCont{
  position: absolute;
  z-index: 1;
}
body{
  background-color: #1F1F1F;;
}
div.topNav{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 9vh;
  background-color: rgba(38, 38, 38, 1);
}
div.nav{
  position:fixed;
  float: left;
  height: 100vh;
  width: 240pt;
  left: 0;
  top:0;
  background-color: rgba(38, 38, 38, 1);
}
</style>
