<template>
  <div class="workAreaRoot">
    <control-panel :title = "title" :componentData = "componentData" ></control-panel>
  </div>
</template>

<script>
import ControlPanelVue from './WorkArea/ControlPanel.vue'
export default {
  components:{
    "control-panel":ControlPanelVue,
  },
    data(){
        return{
          componentData: [],
          title: 'Панель управления'
        }
    },
    created(){
      this.emitter.on("Title", data=>{
        this.title = data
      })
    }
}
</script>

<style>

</style>