<template>
  <div class="contPanelRoot">
    <div class="innerCont">
      <h1 class="title">Панель управления</h1>
      <div class="orders" v-for="n in orders" :key="n">
        <div class="ord" >
          <div class="left">
            <h3 class="ordData">Название: {{n['name']}}</h3>
          </div>
          <div class="middle" v-if="n['finishDate'] != null">
            <h3 class="ordData">Дата окончания: {{n['finishDate']}}</h3>
          </div>
          <div class="right">
            <h3 class="ordData">Дата начала: {{n['startDate']}}</h3>
            <h3 class="ordData">Статус: {{n['idStage']}}</h3>
            <a class="open" @click="n['visible'] = !n['visible']">Просмотреть полностью</a>
          </div>
          <div class="desc" v-if="n['visible']">
          <h3 class="ordData">Описание: {{n['description']}}</h3>
          <div class="ordBtn" v-if="n['idStage'] == 'В обработке'">
          <div class="accept">
            <a class="accept" @click="acceptOrder(n['id'], true)">Принять</a>
          </div>
          <div class="reject">
            <a class="reject" @click="acceptOrder(n['id'], false)">Отклонить</a> 
          </div>
          </div> 
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
  props:{
    componentData: Array
  },
  data(){
    return{
      orders:[]
    }
  },
  methods:{
    acceptOrder(id, status){
    this.orders =   requestData({
    "type": "acceptOrder",
    "projectId": id,
    "status": status,
    "email": readCookies('email')
})
    },
    jsonToRequest(json){requestData(json)}
  },
 created(){
    this.emitter.on("updateControlComponent", data=>{
      switch(data[0]){
        case 0:
          this.jsonToRequest({
        "type":"viewOrder",
        "email": readCookies('email'),
        "ordStatus": "accepted"
        })
          break;
        case 1:
          if(data[1]=='all'){
            this.jsonToRequest({
        "type":"viewOrder",
        "email": readCookies('email'),
        "ordStatus": "all"
        })}
         if(data[1]=='rejected'){
            this.jsonToRequest({
        "type":"viewOrder",
        "email": readCookies('email'),
        "ordStatus": "rejected"
        })
        }
      }
    })
    this.emitter.on("ControlPanelData", data =>{
      this.orders = data
    })
 }
}
</script>

<style>
div.ordBtn{
  float: left;
  left: 10%;
  width: 50%;
  padding-bottom: 1%;
  padding-left: 3%;
}
a.reject{
    float: left;
    left: 20vh;
    top: 20pt;
    right: 40%;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    color: white;
    border: 1px solid #A953D1;
    border-radius: 12px;
    height: 20pt;
    width: 110pt;
    vertical-align:middle;
    text-align: center;
    padding-top:5pt;
    padding-right: 1%;
}
a.accept{
    float: right;
    top: 20pt;
    right: 40%;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    color: white;
    background-color: #A953D1;
    border: 1px solid #A953D1;
    border-radius: 12px;
    height: 20pt;
    width: 110pt;
    vertical-align:middle;
    text-align: center;
    padding-top:5pt;
}
a.open{
  float: right;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  font-size: 12pt;
  color: #FFFFFF;
  padding: 3%;
}
a.open:hover{
  cursor: pointer;
}
div.desc{
  position: sticky;
  float: left;
}
div.right{
  float: right;
  width: 100%;
}
div.middle{
width: 100%;
}
div.left{
  float: left;
  width: 100%;
}
h3.ordTitle{
  position: relative;
  left: 30pt;
  top: 5pt;
  color: #FFFFFF;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
}
div.ord{
  height: 100%;
  position: relative;
  background: #3D3D3D;
  width: 500pt;
  left: 5%;
  border-radius: 14px;

}
h3.ordData{
  position: relative;
  left: 30pt;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  color: #FFFFFF;
}
div.orders{
  height: auto;
  display: flex;
  width: 550pt;
  bottom: 10%;
  background: #262626;
  padding: 5pt;
}
div.innerCont{
  position: relative;
  display: inline;
  left: 5%;
  top: 3%;
  height: 97%;
  width: 95%;
  height: auto;
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
  overflow-y: auto;
  overflow-x: hidden;
}
</style>