<template>
  <div class="menuroot">
      <div class="menuPoint">
        <div class="point">
          <div v-if="selectPanel" class="selectBlock">
          </div>
          <a class="menuPoint" @click="selected(0)" >ПАНЕЛЬ УПРАВЛЕНИЯ</a>
        </div>
        <div class="point">
          <div v-if="selectHistory"  class="selectBlock">
          </div>
          <a class="menuPoint" @click="selected(1)">ИСТОРИЯ ЗАКАЗОВ</a>
          <div class="historyParam" v-show="historyParamVisible">
            <a class="subdPoint" @click="selected(1, 0)">ОТКЛОНЕННЫЕ ЗАЯВКИ</a>
            <a class="subPoint" @click="selected(1, 1)">ВСЕ ЗАЯВКИ</a>
          </div>
        </div>
        <div class="point">
          <div v-if="selectEmployee"  class="selectBlock">
          </div>
          <a class="menuPoint" @click="selected(2)">СОТРУДНИКИ</a>
        </div>
        <div class="point">
          <div v-if="selectSettings" class="selectBlock">
          </div>
          <a class="menuPoint"  @click="selected(3)" >НАСТРОЙКИ</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: String,
      selectPanel: true,
      selectHistory: false,
      selectEmployee: false,
      selectSettings: false,
      historyParamVisible: false
    }
  },
  mounted: function(){
        this.selected(0)

  },
  methods:{
    selected(num, subPoint){
      this.historyParamVisible = false
      switch (num){
        case 0:
          this.hideElem();
          this.selectPanel = true;
          this.emitter.emit("updateControlComponent", [num])
          break;
        case 1:
          this.hideElem();
          this.historyParamVisible = true
          if(subPoint == 0){
            this.selectHistory = true;
            this.emitter.emit("updateControlComponent", [num, 'rejected'])
          }
          if(subPoint == 1){
            this.selectHistory = true;
            this.emitter.emit("updateControlComponent", [num, 'all'])
          }
          break;
        case 2:
          this.hideElem();
          this.selectEmployee = true;
          this.emitter.emit("updateControlComponent", num)
          break;
        case 3:
          this.hideElem()
          this.selectSettings = true;
          this.emitter.emit("updateControlComponent", num)
          break;
      }
    },
    hideElem(){
      this.selectPanel = false;
      this.selectHistory = false;
      this.selectEmployee = false;
      this.selectSettings = false;
    }
  },
  created(){
  }
}
</script>

<style>
div.point{
  position: relative;
  height: 100%;
  display: table;
}
div.selectBlock{
  display: table-cell;
  background: #BE9EC9;
  left: 0%;
  height: 100%;
  width: 0.2vw;
}
div.historyParam{
  position: relative;
}
a.subPoint{
  position: relative;
  top: 10%;
}
a.menuPoint{
  position: relative;
  display: table-cell;
  top: 2vh;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 14pt;
  color: #FFFFFF;
  text-align: center;
  left: 0vw;
  padding-left: 40pt;
}
a.menuPoint:hover{
  cursor: pointer;
}
div.point{
  width: 100%;
  height: 45pt;
}
div.menuPoint{
  position: relative;
  top: 12vh;
}
</style>