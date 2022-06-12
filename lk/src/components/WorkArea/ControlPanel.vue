<template>
  <div class="contPanelRoot">
    <div class="innerCont">
      <h1 class="title">{{title}}</h1>
      <div v-if="role == 'customer'">
          <p>Взаимодействуйте с проектами и отслеживайте их статус</p>
          <div class="ordCont">
            <div class="ordersCust" v-for="n in orders" :key="n">
              <div class="ordCust" >
                <div class="leftCust">
                  <h3 class="ordData">{{n['name']}}</h3>
                </div>
                <div class="middleCust" v-if="n['finishDate'] != null">
                  <h3 class="ordData">Дата окончания: {{n['finishDate']}}</h3>
                </div>
                <div class="rightCust">
                  <h3 class="ordData">Дата начала: {{n['startDate']}}</h3>
                  <h3 class="ordData">Статус: {{n['idStage']}}</h3>
                </div>
                <div class="descCust">
                <h3 class="ordData">Описание: {{n['description']}}</h3>
                  <h3 class="ordData">Бюджет: {{n['budget']}}</h3>
                <div class="ordBtnCust" v-if="n['idStage'] == 'В обработке'">
                <div class="acceptCust">
                  <a class="accept" @click="acceptOrder(n['id'], true)">Принять</a>
                </div>
                <div class="rejectCust">
                  <a class="reject" @click="acceptOrder(n['id'], false)">Отклонить</a> 
                </div>
                </div> 
              </div>      
            </div>
            </div>
          </div>
      </div>
      <div v-if="role == 'admin'">
        <employee-page v-if="title == 'Сотрудники'"></employee-page>
        <add-employee v-if="title == 'Добавление сотрудника'"></add-employee>
        <div v-if="title == 'Панель управления' || title == 'История заказов'" class="CPr">
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
                <h3 class="ordData">Бюджет: {{n['budget']}}</h3>
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
    </div>
  </div>
</template>

<script>
import { requestData } from '../Script/request';
import readCookies from '../Script/readCookies';
import employeePageVue from './EmployeePage.vue';
import AddEmployee from './AddEmployee.vue';
export default {
  components:{
    "employee-page": employeePageVue,
    AddEmployee
  },
    props: {
        componentData: Array,
        title: String
    },
    data() {
        return {
            orders: [],
            role: null
        };
    },
    methods: {
        acceptOrder(id, status) {
            this.orders = requestData({
                "type": "acceptOrder",
                "projectId": id,
                "status": status,
                "email": readCookies("email")
            });
        },
        jsonToRequest(json) { requestData(json); }
    },
    created() {
      this.role = readCookies('role')
        this.emitter.on("updateControlComponent", data => {
            switch (data[0]) {
                case 0:
                    this.jsonToRequest({
                        "type": "viewOrder",
                        "email": readCookies("email"),
                        "ordStatus": "inWork"
                    });
                    break;
                case 1:
                    if (data[1] == "all") {
                        this.jsonToRequest({
                            "type": "viewOrder",
                            "email": readCookies("email"),
                            "ordStatus": "all"
                        });
                    }
                    if (data[1] == "rejected") {
                        this.jsonToRequest({
                            "type": "viewOrder",
                            "email": readCookies("email"),
                            "ordStatus": "rejected"
                        });
                    }
                    if (data[1] == "final") {
                        this.jsonToRequest({
                            "type": "viewOrder",
                            "email": readCookies("email"),
                            "ordStatus": "final"
                        });
                    }
                    break;
                case 4:
                  switch(data[1]){
                    case 'inProgress':
                      this.jsonToRequest({
                        "type": "acceptOrder",
                        "projectId": "1",
                        "status": true,
                        "email": readCookies("email")
                    })
                      break;
                    case 'all':
                      this.jsonToRequest({
                        "type":"viewOrder",
                        "email": readCookies("email")
                    })
                      break;
                    case 'makeBuy':
                      
                      break;
                    case 'reject':

                      break;
                  }
            }
        });
        this.emitter.on("ControlPanelData", data => {
            this.orders = data;
        });
    },
}
</script>

<style>
div.descCust{
  width: 90%;
  left: 5%;
}
div.ordersCust{
  background: rgba(62, 62, 62, 0.65);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  min-width: 300pt;
  min-height: 17vw;
  max-width: 20vw;
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: auto;
  display: inline-block;
  position: relative;
  vertical-align:top;
}
div.ordCont{
  float: left;
  background-color: #262626;
  max-width: 80vw;
  width: 60vw;
  min-width: 30vw;
  height: 75vh;
  overflow-y:scroll;
  overflow-x: hidden;
}
p{
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  font-size: 13pt;
  line-height: 18px;
  display: flex;
  color: #FFFFFF;
}
div.ordBtn{
  float: left;
  left: 15%;
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
  width: 93%;
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
  width: 90%;
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
}
</style>