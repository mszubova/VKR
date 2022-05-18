<template>
  <div class="authRoot">
      <button class="back" @click="btnBackClick()">Назад</button>
      <div class="inputBlock">
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
  </div>
</template>

<script>
import ColorChange from "./Scripts/ColorChange"
import { requestData } from "./Scripts/Connect"
export default {
    data(){
        return{
            alertVisible: false,
            alertText: "Введите данные корректно",
        }
    },
    beforeCreate: function(){
        ColorChange({backgroundColor: "white"})
    },
    methods:{
        btnBackClick(){
            ColorChange({backgroundColor: "#090909"})
            this.emitter.emit("StartAuth", false)
        },
        EntireBtnClick(){
            try{
                this.alertVisible = false;
                let lgn = document.getElementById("login").value;
                let pswrd = document.getElementById("password").value;
                if(pswrd.length != 0 && lgn.length != 0){
                    document.getElementById("password").value = "";
                    requestData({type: "Authorization",login: lgn, password: pswrd})
                }
                else{
                    this.alertText = "Введите пароль правильно"
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
</script>

<style>
p.alert{
    color: red;
}
</style>