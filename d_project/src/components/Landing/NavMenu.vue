<template> <!-- разметка элемента навигации -->
  <div class="navRoot">
      <div class="leftPart">
        <div class="LogoContainer" @click="navBlockButtonClick('home')">
            <img class="NavLogo" src="@/assets/logo.png"> <!-- логотип -->
        </div>
        <div class="navList">
            <div class="navBlock" @click="navBlockButtonClick('portfolio')"> <!-- переадресация на страницу портфолио -->
                <p class="navTitles">Портфолио</p>
            </div>
            <div class="navBlock" @click="navBlockButtonClick('services')"> <!-- переадресация на страницу услуг -->
                <p class="navTitles">Услуги</p>
            </div>
            <div class="navBlock" @click="navBlockButtonClick('contacts')"> <!-- переадресация на страницу контактов -->
                <p class="navTitles">Контакты</p>
            </div>
            <div class="navBlock" @click="navBlockButtonClick('about')"> <!-- переадресация на страницу о студии -->
                <p class="navTitles">О студии</p>
            </div>
        </div>
      </div>
      <div class="rightPart">
        <div class="lkButton">
          <button class="GlobalLogicButtonLk" @click="lkBtnClick()">Личный кабинет</button> <!-- переадресация на окно входа -->
        </div>
      </div>
  </div>
</template>
<!-- скрипт обработки данных компонента -->
<script>
import {checkLoginAndPass} from "../Scripts/CookieRunner.js" //проверка ранее введенных данных
export default {
    data(){
        return{}
    },
    methods:{
        navBlockButtonClick(adress){ //измение содержимого окна в зависимости от выбранной страницы
            this.emitter.emit("NewPage", adress)
        },
        lkBtnClick(){ //открытие окна входа в систему
          if(checkLoginAndPass()){ 
            this.emitter.emit("StartAuth", {visible: true, way: "regist"})
          }
        }
    },
    create:{

    }
}
</script>
<!-- скрипт стилизации компонента -->
<style>
/* позиция правой части меню */
.rightPart{
    position: relative;
    float: right;
    right: 9vw
}
/* стилизация текста навигации */
.navTitles{
    font-size: 24px;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
    color: white;
}
/* пункты меню */
.navList{
  position: relative;
  left: 4vw;
  display: table-cell;
}
/* стилизация левой части меню */
.leftPart{
    margin-left: 22%;
    float: left;
    display: table;
}
/* блок логотипа */
.LogoContainer{
    position: absolute;
    left: 11.5vw;
    top: 20%;
}
/* стилизация курсора при наведении на логотип */
.NavLogo:hover{
    cursor: pointer;
}
/* позиционирование блока навигации */
.navBlock{
    float: left;
    width: 11vw;
    text-align: center;
}
/* изменение курсора  */
.navBlock:hover{
    cursor: pointer;
}
/* стили кнопки входа в личный кабинет */
.lkButton{
    text-align: center;
    position: relative;
    top: 1.5vh;
}
/* изменение курсора при навдении */
.lkButton:hover{
  cursor: pointer;
}
/* стилизация кнопки личного кабинета */
.GlobalLogicButtonLk, .GlobalLogicButtonLk::after {
    width: 14vw;
    height:5.5vh;
    min-width: 150pt;
    min-height: 45pt;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 27px;
    background: linear-gradient(45deg, transparent 5%, #A953D1 5%);
    border: 0;
    color: #fff;
    box-shadow: 6px 0px 0px #00E6F6;
    outline: transparent;
    position: relative;
}
/* курсор при наведении мыши */
.GlobalLogicButtonLk:hover{
  cursor: pointer;
}
/* стилизация кнопки при взаимодейтсвии */
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
/* стилизация кнопки после взаимодействия */
.GlobalLogicButtonLk:hover::after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}
/* фрейм анимации кнопки */
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