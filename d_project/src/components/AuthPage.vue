<template>
  <div class="authRoot">
      <button class="back" @click="btnBackClick()">Назад</button>
  </div>
</template>

<script>
import ColorChange from "./Scripts/ColorChange"
export default {
    beforeCreate: function(){
        ColorChange({backgroundColor: "white"})
    },
    methods:{
        btnBackClick(){
            ColorChange({backgroundColor: "#090909"})
            this.emitter.emit("StartAuth", false)
        }
    }
}
</script>

<style>

</style>