<template>
  <div class="workAreaRoot">
    <control-panel v-if="visible" :title = "title" :componentData = "componentData" ></control-panel>
    <new-order v-else></new-order>
  </div>
</template>

<script>
import ControlPanelVue from './WorkArea/ControlPanel.vue'
import newOrder from './WorkArea/newOrder.vue'
export default {
  props:{
    way: String
  },
  components:{
    "control-panel":ControlPanelVue,
    'new-order': newOrder
  },
    data(){ 
        return{
          componentData: [],
          title: 'Панель управления',
          visible: true
        }
    },
    beforeCreate(){
      switch(this.way){
        case 'neworder':
          this.visible = false
          break;
        case 'default':
          this.visible = true
          break;
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