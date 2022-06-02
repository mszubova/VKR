<template>
  <div class="workAreaRoot">
    <control-panel :componentData = "componentData" ></control-panel>
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
          componentData: []
        }
    },
    created(){

    }
}
</script>

<style>

</style>