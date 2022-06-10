<template> <!-- контейнер разметки страницы авторизации -->
  <div class="authRoot">
      <div class="goback"  @click="btnBackClick()"> <!-- кнопка возврата на основной сайт -->
          <img class="backImg" src="@/assets/back.png"/>
          <a class="backText">Вернуться на основную страницу</a>
      </div>
      <div class="authCont"> <!-- контейнер с формой выбора типа авторизации -->
          <div class="raindowPart">
                <div class="logoCont">
                    <img src="@/assets/logo.png"/> <!-- логотип -->
                </div>
                <div class="entieTitle" v-if="way == 'auth'"> <!-- отобрается при выборе авторизации -->
                    <h1 class="avt">Регистрация</h1>
                    <div class="h2cont">
                        <h2 class="subTitle">Для продолжения работы с нами, вы должны быть зарегестрированы в системе.</h2>
                    <div class="entireBtn">
                        <button @click="authBtnClick('regist')" class="entireBtn">Зарегестрироваться</button>
                    </div>
                    </div>
                </div>
                <div class="entieTitle" v-if="way == 'regist'"> <!-- отображается при выборе регистрации -->
                    <h1 class="avt">Авторизация</h1>
                    <div class="h2cont">
                        <h2 class="subTitle">Для продолжения работы с нами, пожалуйста, войдите в свою учетную запись.</h2>
                    <div class="entireBtn">
                        <button @click="authBtnClick('auth')" class="entireBtn">Войти</button>
                    </div>
                    </div>
                </div>
          </div>
          <div v-if="station" class="dataInPart">
              <div class="contInput">
                  <div class="ttitle" v-if="way == 'auth'"> <!-- смена заголовка в зависимости от выбора пути -->
                    <h1 class="authBlockTitle">Авторизация</h1>
                  </div>
                  <div class="ttitle" v-if="way == 'regist'">
                      <h1 class="authBlockTitle">Регистрация</h1>
                  </div>
                <div class="inputBlock">
                    <div class="authBlo" >
                    <div class="auth" v-if="way == 'regist'"> <!-- поля ввода для регистрации -->
                        <div class="fm">
                            <input id="fmInp" class="fmInp" type="text" placeholder="Фамилия" />
                        </div>
                        <div class="nm">
                            <input id="nmInp" class="fmInp" type="text" placeholder="Имя" />
                        </div>
                        <div class="ot">
                            <input id="otInp" class="fmInp" type="text" placeholder="Отчетство" />
                        </div>
                        <div class="ps">
                            <input id="phNum" class="fmInp" type="text" placeholder="Номер телефона" />
                        </div>
                    </div>
                        <div class="em"> <!-- поля ввода для регистрации и авторизации -->
                            <input id="emInp" class="fmInp" type="text" placeholder="Эл. почта" />
                        </div>
                        <div class="ps">
                            <input id="psInp" class="fmInp" type="password" placeholder="Пароль" />
                        </div>
                    </div>
                </div>
                <p class="alertText" v-if="alertVisible">Введите все данные</p> <!-- предупреждение при некорректном вводе -->
                <button class="registBtn" @click="EntireBtnClick()">{{BtnTitle}}</button> <!-- вызов метода для отправки запроса -->
            </div>
          </div>
          <new-order v-else></new-order>
      </div>
  </div>
</template>

<script>
import newOrderVue from './Landing/functionalComponents/newOrder.vue'
import ColorChange from "./Scripts/ColorChange" //метод изменения цвета фона body
import { requestData } from "./Scripts/Connect" //метод отправки и обработки запросов
export default {
    props:{
        way: String, //принимаемый родительским копонентом параметр
        order: Boolean
    },
    components:{
        "new-order": newOrderVue
    },
    data(){
        return{
            alertVisible: false, //параметр видимости предупреждния
            title: '', //заголовок окна
            BtnTitle: '', //заголовок кнопки авторизации
            station: true
        }
    },
    beforeCreate: function(){
        ColorChange({backgroundColor: "white"}) //изменение цвета элемента body перед созданием окна 
    },
    created(){
        //////////////////////////////////////////ewedfndskjfn//////////////////////////////////////////////////////
        if(this.way == 'auth'){ //измение заголовка кнопки авторизации
            this.BtnTitle = 'Войти'
        }else{
            this.BtnTitle = "Регистрация"
        }
        this.emitter.on("EmailIsUsing", data=>{
            alert("Пользователь с почтой ", data, " уже существует") //предупреждение при неудачной регистрации
        })
    },
    updated(){ //измение заголовка кнопки на измение в окне
        if(this.way == 'auth'){
            this.BtnTitle = 'Войти'
        }else{
            this.BtnTitle = "Регистрация"
        }
    },
    methods:{ //пользовательские методы
        orderField(){
            if(this.order){
                this.station = false
            }
            return false;
        },
        authBtnClick(way){
            this.emitter.emit("StartAuth", {visible: true, way: way}) //измениеи окна ввода на авторизацию
        },
        btnBackClick(){//кнопка возвращения на сайт
            ColorChange({backgroundColor: "#090909"}) //цвет фона элемента body
            this.emitter.emit("StartAuth", {visible: false, way: "back"})
        },
        EntireBtnClick(){ //обработка полей ввода
            try{
                this.alertVisible = false;
                let em, ps
                if(this.way == 'auth'){ //отправка данных авторизации
                    em = document.getElementById("emInp").value; 
                    ps = document.getElementById("psInp").value;
                    if(em != '' && ps != ''){
                        if(this.orderField()){
                            requestData({
                        "type": "Authorization",
                        "email": em, 
                        "password": ps
                    })
                        }
                        else{
                            requestData({
                        "type": "Authorization",
                        "email": em, 
                        "password": ps
                    })
                        }
                    }
                    else{
                        this.alertVisible = true; //если поля ввода пустые отобразить предупреждение
                    }
                }else{
                    this.alertVisible = false;
                    em = document.getElementById("emInp").value;
                    ps = document.getElementById("psInp").value;
                    let fm = document.getElementById("fmInp").value;
                    let nm = document.getElementById("nmInp").value;
                    let ot = document.getElementById("otInp").value;
                    let pn = document.getElementById("phNum").value; 
                    if(fm != '' && nm != '' && em != '' && ps != ''){
                        
                        requestData({"type": "Registration", //отправка данных регистрации
                        "email": em, 
                        "password": ps, 
                        "registType": "customer", 
                        "PersonalData":{
                            "surName": fm,
                            "name": nm,
                            "middleName": ot,
                            "phoneNum": pn
                        }
                        })
                    }
                    else{
                        this.alertVisible = true; //если поля ввода пустые отобразить предупреждение
                    }
                }   
            }
            catch(e){
                console.error(e)
            }
        }
    }
}
</script>

<style>
/* обработка наведения на кнопку назад */
div.goback:hover{
    cursor: pointer;
}
/* стиль текста кнопки назад */
a.backText{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    color: #AEAEAE;
}
/* размеры курсора указателя назад */
img.backImg{
    width: 20pt;
    height: auto;
}
/* стиль текста предупреждения  */
p.alertText{
    position: static;
    text-align: center;
}
/* стиль кнопки авторизации */
.registBtn{
    position: relative;
    top: 5%;
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
/* измение курсора мыши при навдении */
.registBtn:hover{
    cursor: pointer;
}
/* размеры блока авторизации */
div.authBlo{
    height: 100%;
}
/* блок ввода фамилии */
div.fm{
    width: 100%;
    margin-top: 3%;
}
/* блок ввода отчетва */
div.ot{
    width: 100%;
    margin-top: 3%;
}
/* блок ввода имени */
div.nm{
    width: 100%;
    margin-top: 3%;
}
/* блок ввода пароля */
div.ps{
    width: 100%;
    margin-top: 3%;
}
/* блок ввода почты */
div.em{
    width: 100%;
    margin-top: 3%;
}
/* поле ввода имени */
input.nmInp{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
/* поле ввода пароля */
input.psInp{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
/* поле ввода почты */
input.emInp{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
/* поле ввода фамилии */
input.fmInp{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
/* пол ввода отчетсва */
input.otInp{
    background: #F2F2F2;
    border-style: none;
    width: 40%;
    height: 4vh;
}
/* блок ввода данных */
div.contInput{
    position: relative;
    height: 100%;
    top: 15%;
}
/* заголовок блока авторизации */
h1.authBlockTitle{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    color: #53B3D1;
    font-size: 30pt;
}
/* блок инпутов */
div.dataInPart{
    left: 40%;
    width: 60%;
    height: 100%;
    position: absolute;
    text-align: center;
}
/* блок с логотипом */
div.logoCont{
    position: relative;
    top: 30pt;
    left: 30pt;
}
/* описание заголовка авторизации */
.h2cont{
    position: absolute;
    left: 10%;
    right: 10%;
    height: auto;
}
/* параметры фона блока приветствия */
div.raindowPart{
    float: left;
    left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(201.05deg, #55D3EE 10.27%, #8091DF 48.83%, #A953D1 81.95%);
}
/* блок ввода данных */
div.authCont{
    position: fixed;
    top: 10vh;
    left: 10vw;
    right: 10vw;
    bottom: 10vh;
    box-shadow: 0px 10px 20px rgba(38, 38, 38, 0.15);
}
/* подзаголовок авторизации */
h2.subTitle{
    text-align: center;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    color: #FFFFFF;
    font-size: 20pt;
}
/* заголовок авторизации */
h1.avt{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 30pt;
    color: #FFFFFF;
    text-align: center;
}
/* заголовок ввода */
div.entieTitle{
    position: relative;
    top: 18%;
}
/* блок кнопки входа */
div.entireBtn{
    position: relative;
    text-align: center;
}
/* кнопка входа */
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
/* наведение на кнопку входа */
button.entireBtn:hover{
    cursor: pointer;
}
</style>