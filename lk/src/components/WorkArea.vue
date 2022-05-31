<template>
  <div class="workAreaRoot"></div>
  <control-panel v-if="visible == 0"></control-panel>
  <employee-page v-if="visible == 1"></employee-page>
  <history-page v-if="visible == 2"></history-page>
  <settings-page v-if="visible == 3"></settings-page>
</template>

<script>
import ControlPanelVue from './WorkArea/ControlPanel.vue'
import EmployeePageVue from './WorkArea/EmployeePage.vue'
import historyPageVue from './WorkArea/historyPage.vue'
import SettingsPageVue from './WorkArea/SettingsPage.vue'
export default {
  components:{
    "control-panel":ControlPanelVue,
    "employee-page":EmployeePageVue,
    "history-page":historyPageVue,
    "settings-page":SettingsPageVue
  },
    data(){
        return{
          visible: 0
        }
    },
    created(){
        this.emitter.on("workAreaContain", data =>{
          this.visible = data
        })
    }
}
</script>

<style>

</style>