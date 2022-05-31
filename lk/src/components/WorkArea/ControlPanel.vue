<template>
  <div class="contPanelRoot">
    <div class="innerCont">
      <h1 class="title">Панель управления</h1>
      <div class="oders">
      <div class="orders" v-for="n in orders" :key="n">
      <div class="ord">
        <h3 class="ordTitle">Название: {{n['name']}}</h3>
        <h3 class="ordData">Описание: {{n['description']}}</h3>
        <h3 class="ordData">Дата начала: {{n['startDate']}}</h3>
        <h3 class="ordData">Дата окончания: {{n['finishDate']}}</h3>
        <h3 class="ordData">Статус: {{n['idStage']}}</h3>
      </div>
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { requestData } from '../Script/request';
import readCookies from '../Script/readCookies';
export default {
  data(){
    return{
      arr:[],
      orderNum: Number,
      orders:[]
    }
  },
 created(){
   this.orders = requestData({
    "type":"viewOrder",
    "email": readCookies('email')
});
 }
}
</script>

<style>
h3.ordTitle{
  color: #FFFFFF;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
}
div.ord{
  background: #3D3D3D;
}
h3.ordData{
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  color: #FFFFFF;
}
div.orders{
  position: relative;
}
div.innerCont{
  position: relative;
  left: 5%;
  top: 3%;
  height: 97%;
  width: 95%;
}
h1.title{
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  color: #FFFFFF;
  font-size: 30pt;
}
div.contPanelRoot{
  width: 100%;
  height: 100%;
}
</style>