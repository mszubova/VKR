<template>
  <div class="menuroot">
      <div class="logoContainer">
        <strong>{{name}} епта</strong>
      </div>
  </div>
</template>

<script>
import readCoolie from '@/components/Script/readCookies.js'
export default {
  data(){
    return{
      name: String,
    }
  },
  mounted: function(){
    try{
      setTimeout(() => {
        this.name = readCoolie('login');
      }, 1000);
    }
    catch(e){
      alert(e);
      console.log(e)
    }
  }
}
</script>

<style>
div.logoContainer{
    position: static;
    top: 0;
    float: left;
    left: 0;
    width: 100%;
    height: 10vh;
}

</style>