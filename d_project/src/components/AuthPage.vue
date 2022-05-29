<template>
  <div class="authRoot">
      <div class="goback">
          
      </div>
      <div class="authCont">
          <div class="raindowPart">
                <div class="logoCont">
                    <img src="@/assets/logo.png"/>
                </div>
                <div class="entieTitle">
                    <h1 class="avt">Авторизация</h1>
                    <div class="h2cont">
                        <h2 class="subTitle">Для продолжения работы с нами, пожалуйста, войдите в свою учетную запись.</h2>
                    <div class="entireBtn">
                        <button class="entireBtn">Войти</button>
                    </div>
                    </div>
                </div>
          </div>
          <div class="dataInPart">
              <div class="contInput">
                <h1 class="authBlockTitle">Регистрация</h1>
                <div class="inputBlock">
                    <div class="registBlock" v-if="way == 'regist'"></div>
                    <div class="authBlo" v-if="way == 'auth'">
                        <div class="fm">
                            <input class="fm" type="text" placeholder="Фамилия" />
                        </div>
                        <div class="nm">
                            <input class="nm" type="text" placeholder="Имя" />
                        </div>
                        <div class="em">
                            <input class="em" type="text" placeholder="Эл. почта" />
                        </div>
                        <div class="ps">
                            <input class="ps" type="password" placeholder="Пароль" />
                        </div>
                    </div>
                </div>
                <p class="alertText" v-if="alertVisible">Введите все данные</p>
                <button class="registBtn" @click="EntireBtnClick()">Зарегистрироваться</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import ColorChange from "./Scripts/ColorChange"
import { requestData } from "./Scripts/Connect"
//import errorController from "./Scripts/errorController"
export default {
    props:{
        way: String
    },
    data(){
        return{
            alertVisible: false,
            title: ''
        }
    },
    beforeCreate: function(){
        ColorChange({backgroundColor: "white"})
    },
    created(){
        // try{
        //     if(this.way== 'auth'){
        //         this.title = "Вход в систему"
        //     }
        //     else if(this.way == 'application'){
        //         this.title = "Заполните заявку"
        //     }
        // }
        // catch(e){
        //     errorController(e);
        // }
    },
    methods:{
        btnBackClick(){
            ColorChange({backgroundColor: "#090909"})
            this.emitter.emit("StartAuth", {visible: false, way: "back"})
        },
        EntireBtnClick(){
            try{
                this.alertVisible = false;
                let fm = document.getElementsByClassName("fm").value;
                let nm = document.getElementsByClassName("nm").value;
                let em = document.getElementsByClassName("em").value;
                let ps = document.getElementsByClassName("ps").value;
                if(fm.length != 0 && nm.length != 0 && em.length != 0 && ps.length != 0){
                    document.getElementById("password").value = "";
                    requestData({"type": "Registration", 
                    "email": em, 
                    "password": ps, 
                    "registType": "customer", 
                    "PersonalData":{
                        "SurName": fm,
                        "name": nm
                    }
                    })
                }
                else{
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
p.alertText{
    position: static;
    text-align: center;
}
.registBtn{
    position: static;
    top: 50%;
    background: #53B3D1;
    border-radius: 30.5665px;
    border-style: none;
    width: 200pt;
    height: 40pt;
    color: #fff;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 17pt;
}
.registBtn:hover{
    cursor: pointer;
}
div.authBlo{
    height: 100%;
}
div.fm{
    width: 100%;
    margin-top: 3%;
}
div.nm{
    width: 100%;
    margin-top: 3%;
}
div.ps{
    width: 100%;
    margin-top: 3%;
}
div.em{
    width: 100%;
    margin-top: 3%;
}
input.nm{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
input.ps{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
input.em{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
input.fm{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
div.contInput{
    position: relative;
    height: 100%;
    top: 15%;
}
h1.authBlockTitle{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    color: #53B3D1;
    font-size: 30pt;
}
div.dataInPart{
    left: 40%;
    width: 60%;
    height: 100%;
    position: absolute;
    text-align: center;
}
div.logoCont{
    position: relative;
    top: 30pt;
    left: 30pt;
}
.h2cont{
    position: absolute;
    left: 10%;
    right: 10%;
    height: auto;
}
div.raindowPart{
    float: left;
    left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(201.05deg, #55D3EE 10.27%, #8091DF 48.83%, #A953D1 81.95%);
}
div.authCont{
    position: fixed;
    top: 10vh;
    left: 10vw;
    right: 10vw;
    bottom: 10vh;
    box-shadow: 0px 10px 20px rgba(38, 38, 38, 0.15);
}
h2.subTitle{
    text-align: center;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    color: #FFFFFF;
    font-size: 20pt;
}
h1.avt{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 30pt;
    color: #FFFFFF;
    text-align: center;
}
div.entieTitle{
    position: relative;
    top: 18%;
}
div.entireBtn{
    position: relative;
    text-align: center;
}
button.entireBtn{
    margin-top: 30pt;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #FFFFFF;
    border-radius: 33px;
    color: #fff;
    width: 135pt;
    height: 40pt;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 17pt;
}
button.entireBtn:hover{
    cursor: pointer;
}
</style>