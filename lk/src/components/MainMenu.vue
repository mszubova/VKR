<template>
  <div class="menuroot">
      <div class="logoContainer">
        <strong>{{name}} епта</strong>
      </div>
  </div>
</template>

<script>
import readCoolie from './Script/readCoolie'
export default {
  data(){
    return{
      name: String,
    }
  },
  mounted: function(){
    try{
      this.name = readCoolie('login');
      if(this.name == undefined){
        this.name = readCoolie('login');
      }
    }
    catch(e){
      alert(e);
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