<template>
  <div class="authRoot">
      <button class="back" @click="btnBackClick()" >Назад</button>
      <div class="inputBlock" v-show="way == 'auth'">
          <div class="loginBlock">
              <input id="login" type="text"/>
          </div>
          <div class="passwordBlock">
              <input id="password" type="password"/>
          </div>
          <div class="alert">
              <p class="alert" v-if="alertVisible">{{alertText}}</p>
          </div>
          <div class="entBtn">
              <button @click="EntireBtnClick()">Вход</button>
          </div>
      </div>
        <div class="application" v-show="way == 'application'">
            <input id="email" type="email"/>
        </div>
  </div>
</template>

<script>
import ColorChange from "./Scripts/ColorChange"
import { requestData } from "./Scripts/Connect"
export default {
    props:{
        way: String
    },
    data(){
        return{
            alertVisible: false,
            alertText: "Введите данные корректно",
        }
    },
    beforeCreate: function(){
        ColorChange({backgroundColor: "white"})
    },
    created(){
        
    },
    methods:{
        btnBackClick(){
            ColorChange({backgroundColor: "#090909"})
            this.emitter.emit("StartAuth", {visible: false, way: "back"})
        },
        EntireBtnClick(){
            try{
                validateEmail();
                this.alertVisible = false;
                let lgn = document.getElementById("login").value;
                let pswrd = document.getElementById("password").value;
                if(pswrd.length != 0 && lgn.length != 0){
                    document.getElementById("password").value = "";
                    requestData({type: "Authorization",login: lgn, password: pswrd})
                }
                else{
                    this.alertText = "Введите данные правильно"
                    this.alertVisible = true;
                }
            }
            catch(e){
                this.alertVisible = true;
                console.error(e)
            }
        }
    }
}

function validateEmail(){
    var email = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        console.log("aaaaa")
    }else{console.log("vbb")}
}
</script>

<style>
p.alert{
    color: red;
}
</style>