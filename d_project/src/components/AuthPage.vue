<template>
  <div class="authRoot">
      <div class="goback"  @click="btnBackClick()">
          <img class="backImg" src="@/assets/back.png"/>
          <a class="backText">Вернуться на основную страницу</a>
      </div>
      <div class="authCont">
          <div class="raindowPart">
                <div class="logoCont">
                    <img src="@/assets/logo.png"/>
                </div>
                <div class="entieTitle" v-if="way == 'auth'">
                    <h1 class="avt">Регистрация</h1>
                    <div class="h2cont">
                        <h2 class="subTitle">Для продолжения работы с нами, вы должны быть зарегестрированы в системе.</h2>
                    <div class="entireBtn">
                        <button @click="authBtnClick('regist')" class="entireBtn">Зарегестрироваться</button>
                    </div>
                    </div>
                </div>
                <div class="entieTitle" v-if="way == 'regist'">
                    <h1 class="avt">Авторизация</h1>
                    <div class="h2cont">
                        <h2 class="subTitle">Для продолжения работы с нами, пожалуйста, войдите в свою учетную запись.</h2>
                    <div class="entireBtn">
                        <button @click="authBtnClick('auth')" class="entireBtn">Войти</button>
                    </div>
                    </div>
                </div>
          </div>
          <div class="dataInPart">
              <div class="contInput">
                  <div class="ttitle" v-if="way == 'auth'">
                    <h1 class="authBlockTitle">Авторизация</h1>
                  </div>
                  <div class="ttitle" v-if="way == 'regist'">
                      <h1 class="authBlockTitle">Регистрация</h1>
                  </div>
                <div class="inputBlock">
                    <div class="authBlo" >
                    <div class="auth" v-if="way == 'regist'">
                        <div class="fm">
                            <input id="fmInp" class="fmInp" type="text" placeholder="Фамилия" />
                        </div>
                        <div class="nm">
                            <input id="nmInp" class="nmInp" type="text" placeholder="Имя" />
                        </div>
                        <div class="ot">
                            <input id="otInp" class="otInp" type="text" placeholder="Отчетство" />
                        </div>
                    </div>
                        <div class="em">
                            <input id="emInp" class="emInp" type="text" placeholder="Эл. почта" />
                        </div>
                        <div class="ps">
                            <input id="psInp" class="psInp" type="password" placeholder="Пароль" />
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
    },
    methods:{
        authBtnClick(way){
            this.emitter.emit("StartAuth", {visible: true, way: way})
        },
        btnBackClick(){
            ColorChange({backgroundColor: "#090909"})
            this.emitter.emit("StartAuth", {visible: false, way: "back"})
        },
        EntireBtnClick(){
            try{
                this.alertVisible = false;
                let em, ps
                if(this.way == 'auth'){
                    em = document.getElementById("emInp").value;
                    ps = document.getElementById("psInp").value;
                    if(em != '' && ps != ''){
                    requestData({
                        "type": "Authorization",
                        "email": em, 
                        "password": ps
                    })}
                    else{
                        this.alertVisible = true;
                    }
                }else{
                    this.alertVisible = false;
                    let fm = document.getElementById("fmInp").value;
                    let nm = document.getElementById("nmInp").value;
                    let ot = document.getElementById("otInp").value;
                    if(fm != '' && nm != '' && em != '' && ps != ''){
                        requestData({"type": "Registration", 
                        "email": em, 
                        "password": ps, 
                        "registType": "customer", 
                        "PersonalData":{
                            "SurName": fm,
                            "name": nm,
                            "middleName": ot
                        }
                        })
                    }
                    else{
                        this.alertVisible = true;
                    }
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
div.goback:hover{
    cursor: pointer;
}
a.backText{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    color: #AEAEAE;
}
img.backImg{
    width: 20pt;
    height: auto;
}
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
div.ot{
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
input.nmInp{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
input.psInp{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
input.emInp{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
input.fmInp{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
input.otInp{
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
    width: 250pt;
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