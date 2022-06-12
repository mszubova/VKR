<template>
  <div class="menuroot">
      <div class="menuPoint">
        <li class="point">
          <a class="menuPoint" @click="selected(0)" >ПАНЕЛЬ УПРАВЛЕНИЯ</a>
        </li>
        <li class="point" v-if="role == 'admin'">
          <a class="menuPoint" @click="historyParamVisible = !historyParamVisible">ИСТОРИЯ ЗАКАЗОВ</a>
          <ul class="historyParam" v-show="historyParamVisible">
            <li class="subPoint" @click="selected(1, 1)">ВСЕ ЗАЯВКИ</li>
            <li class="subPoint" @click="selected(1, 0)">ОТКЛОНЕННЫЕ ЗАЯВКИ</li>
            <li class="subPoint" @click="selected(1, 2)">ЗАВЕРШЕННЫЕ</li>
          </ul>
        </li>
        <li class="point" v-if="role == 'customer'">
          <a class="menuPoint" @click="customerOrders = !customerOrders">МОИ ЗАКАЗЫ</a>
          <ul class="historyParam" v-show="customerOrders">
            <li class="subPoint" @click="selected(4, 0)">В разработке</li>
            <li class="subPoint" @click="selected(4, 1)">История заказов</li>
            <li class="subPoint" @click="selected(4, 2)">Требует оплаты</li>
            <li class="subPoint" @click="selected(4, 3)">Отказано</li>
          </ul>
        </li>
        <li class="point" v-if="role == 'admin'">
          <a class="menuPoint" @click="employeeVisible = !employeeVisible">СОТРУДНИКИ</a>
          <ul class="historyParam" v-show="employeeVisible">
            <li class="subPoint" @click="selected(2, 0)">ВСЕ СОТРУДНИКИ</li>
            <li class="subPoint" @click="selected(2, 1)">ДОБАВЛЕНИЕ СОТРУДНИКА</li>
          </ul>
        </li>
        <li class="point">
          <a class="menuPoint"  @click="selected(3)" >НАСТРОЙКИ</a>
        </li>
      </div>
    </div>
</template>

<script>
import readCookies from './Script/readCookies'
export default {
  data(){
    return{
      role: String,
      name: String,
      selectPanel: true,
      selectHistory: false,
      selectEmployee: false,
      selectSettings: false,
      historyParamVisible: false,
      employeeVisible: false,
      customerOrders: false
    }
  },
  mounted: function(){
        this.selected(0)

  },
  methods:{
    selected(num, subPoint){
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
          if(subPoint == 2){
            this.selectHistory = true;
            this.emitter.emit("updateControlComponent", [num, 'final'])
          }
          break;
        case 2:
          if(subPoint == 0){
            this.hideElem();
            this.emitter.emit("Title", 'Сотрудники')
            this.selectEmployee = true;
            this.emitter.emit("updateControlComponent", num)
          }
          if(subPoint == 1){
            this.hideElem();
            this.emitter.emit("Title", 'Добавление сотрудника')
            this.selectEmployee = true;
            this.emitter.emit("updateControlComponent", num)
          }
          break;
        case 3:
          this.hideElem()
          this.emitter.emit("Title", 'Настройки')
          this.selectSettings = true;
          this.emitter.emit("updateControlComponent", num)
          break;
        case 4:
          this.customerOrders = true;
          switch (subPoint){
            case 0:
              this.emitter.emit("Title", "Заказы в разработке")
              this.emitter.emit("updateControlComponent", [num, 'inProgress'])
              break;
            case 1:
              this.emitter.emit("Title", "История заказов")
              this.emitter.emit("updateControlComponent", [num, 'all'])
              break;
            case 2:
              this.emitter.emit("Title", "Заказы требующие оплаты")
              this.emitter.emit("updateControlComponent", [num, 'makeBuy'])
              break;
            case 3:
              this.emitter.emit("Title", "Отклоненные проекты")
              this.emitter.emit("updateControlComponent", [num, 'final'])
              break;
            default:
              this.customerOrders = !this.customerOrders
          }
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
    this.role = readCookies('role')
  }
}
</script>

<style>
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