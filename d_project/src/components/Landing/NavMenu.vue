<template>
  <div class="navRoot">
      <div class="leftPart">
        <div class="LogoContainer" @click="navBlockButtonClick('home')">
            <img class="NavLogo" src="@/assets/logo.png">
        </div>
        <div class="navList">
            <div class="navBlock" @click="navBlockButtonClick('portfolio')">
                <p class="navTitles">Портфолио</p>
            </div>
            <div class="navBlock" @click="navBlockButtonClick('services')">
                <p class="navTitles">Услуги</p>
            </div>
            <div class="navBlock" @click="navBlockButtonClick('contacts')">
                <p class="navTitles">Контакты</p>
            </div>
            <div class="navBlock" @click="navBlockButtonClick('about')">
                <p class="navTitles">О студии</p>
            </div>
        </div>
      </div>
      <div class="rightPart">
        <div class="lkButton">
          <button class="GlobalLogicButtonLk" @click="lkBtnClick()">Личный кабинет</button>
        </div>
      </div>
  </div>
</template>

<script>
import {checkLoginAndPass} from "../Scripts/CookieRunner.js"
export default {
    data(){
        return{

        }
    },
    methods:{
        navBlockButtonClick(adress){
            this.emitter.emit("NewPage", adress)
        },
        lkBtnClick(){
          if(checkLoginAndPass()){
            this.emitter.emit("StartAuth", true)
          }
        }
    },
    create:{

    }
}
</script>

<style>
.rightPart{
    position: relative;
    float: right;
    right: 6vw
}
.navTitles{
    font-size: 24px;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
    color: white;
}
.navList{
  position: relative;
  left: 4vw;
  display: table-cell;
}
.leftPart{
    margin-left: 22%;
    float: left;
    display: table;
}
.LogoContainer{
    position: absolute;
    left: 10vw;
    top: 20%;
}
.NavLogo:hover{
    cursor: pointer;
}
.navBlock{
    float: left;
    width: 11vw;
    text-align: center;
}
.navBlock:hover{
    cursor: pointer;
}
.lkButton{
    text-align: center;
    position: relative;
    top: 1.5vh;
}
.lkButton:hover{
  cursor: pointer;
}
.GlobalLogicButtonLk, .GlobalLogicButtonLk::after {
    width: 300px;
    height: 50px;
    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    background: linear-gradient(45deg, transparent 5%, #A953D1 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    box-shadow: 6px 0px 0px #00E6F6;
    outline: transparent;
    position: relative;
}
.GlobalLogicButtonLk:hover{
  cursor: pointer;
}
.GlobalLogicButtonLk::after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  
  content: 'AVAILABLE NOW';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #A953D1 5%);
  text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
  clip-path: var(--slice-0);
}

.GlobalLogicButtonLk:hover::after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}
</style>