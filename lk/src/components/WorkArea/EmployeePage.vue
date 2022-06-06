<template>
  <div class="EmpRoot">
      <div class="orders" v-for="n in employees" :key="n">
          <div class="ord" >
            <img class="profileImg" v-bind:src="n['photo']"/>
            <div class="left">
              <h3 class="ordData">{{n['name']+" "+ n['surName'] +" "+n['middleName']}}</h3>
            </div>
              <h3 class="ordData">Должность: {{n['position']}}</h3>
            <div class="right">
              <h3 class="ordData">Принят на работу: {{n['hiredDate']}}</h3>
              <a class="open" @click="n['visible'] = !n['visible']">Просмотреть полностью</a>
            </div>
                <div class="desc" v-if="n['visible']">
                    <h3 class="ordData">Номер телефона: {{n['phone']}}</h3>
                    <h3 class="ordData">Адрес: {{n['address']}}</h3>
                    <h3 class="ordData">Заработная плата: {{n['salary']}}</h3>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import readCookies from '../Script/readCookies'
import { requestData } from '../Script/request'
export default {
    data(){
        return{
            employees: []
        }
    },
    created(){
        this.emitter.on("EmployeeList", data =>{
            this.employees = data
        })
    requestData({
    "type": "viewEmployees",
    "role": readCookies('role'),
    "email": readCookies('email')
})
    }
}
</script>

<style>
img.profileImg{
    position: absolute;
    float: right;
    top: 5pt;
    right: 3%;
    border-radius: 14px;
    width:120pt;
    height:120pt;
    object-fit:cover;
}
</style>