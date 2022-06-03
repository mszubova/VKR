<template>
  <div class="menuroot">
      <div class="menuPoint">
        <li class="point">
          <a class="menuPoint" @click="selected(0)" >ПАНЕЛЬ УПРАВЛЕНИЯ</a>
        </li>
        <li class="point">
          <a class="menuPoint" @click="selected(1)">ИСТОРИЯ ЗАКАЗОВ</a>
          <ul class="historyParam" v-show="historyParamVisible">
            <li class="subPoint" @click="selected(1, 0)">ОТКЛОНЕННЫЕ ЗАЯВКИ</li>
            <li class="subPoint" @click="selected(1, 1)">ВСЕ ЗАЯВКИ</li>
          </ul>
        </li>
        <li class="point">
          <a class="menuPoint" @click="selected(2)">СОТРУДНИКИ</a>
        </li>
        <li class="point">
          <a class="menuPoint"  @click="selected(3)" >НАСТРОЙКИ</a>
        </li>
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
          this.emitter.emit("Title", 'Панель управления')
          break;
        case 1:
          this.hideElem();
          this.historyParamVisible = !this.historyParamVisible
          this.emitter.emit("Title", 'История заказов')
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
          this.emitter.emit("Title", 'Сотрудники')
          this.selectEmployee = true;
          this.emitter.emit("updateControlComponent", num)
          break;
        case 3:
          this.hideElem()
          this.emitter.emit("Title", 'Настройки')
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
}
.historyParam{
  position: relative;
}
li.subPoint{
  position: relative;
  top: 2vh;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 14pt;
  color: #FFFFFF;
  text-align: center;
  list-style-type: none; 
  text-align: left;
  margin-bottom: 2em;
}
.menuPoint{
  position: relative;
  top: 2vh;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 14pt;
  color: #FFFFFF;
  text-align: center;
  left: 0vw;
  padding-left: 10pt;
}
.menuPoint:hover{
  cursor: pointer;
}
li{
  list-style-type: none; 
  text-align: left;
  margin-bottom: 2em;
}
div.menuPoint{
  top: 12vh;
}
</style>