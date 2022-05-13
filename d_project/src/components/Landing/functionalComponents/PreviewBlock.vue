<template>
  <div class="previewRoot">
    <div class="title">
      <div class="raindowTitle">
        <h2 class="rnbTl">Мы вынуждены отталкиваться от того, что реализация </h2>
        <h2 class="rnbTl">намеченных плановых</h2>
      </div>
      <div class="descript">
          <h2 class="dsTl">Многие известные личности заблокированы в рамках </h2>
          <h2 class="dsTl">своих собственных рациональных ограничений!</h2>
          <h2 class="dsTl">Мы вынуждены отталкиваться от того, что </h2>
          <h2 class="dsTl">убеждённость некоторых оппонентов создаёт</h2> 
          <h2 class="dsTl">необходимость включения в производственный план</h2> 
          <h2 class="dsTl">целого ряда внеочередных мероприятий с учётом </h2>
          <h2 class="dsTl">комплекса кластеризации усилий. </h2>
        </div>
        <div class="order">
          <button class="makeOrderBtn">Оставить заявку</button>
        </div>
    </div>
      <div class="canvas" v-if="previewMediaVisible">
          <canvas id="canvas"></canvas>
      </div>
      <div class="imagePrev" v-if="!previewMediaVisible">
        <img src="https://i.scdn.co/image/ab67616d0000b273ca3ba69bdf0a3d78e03c64ec"/>
      </div>
  </div>
</template>

<script>
import Renderer from '@/components/Scripts/Three/Renderer'
import * as three from 'three'
export default{
  data(){
    return{
      previewMediaVisible: false
    }
  },
  mounted: function(){
    const canvas = document.getElementById("canvas")
    if(supportThreeCheck(canvas)){
      Renderer(three, canvas);
    }
    else{
      this.previewMediaVisible = false
    }
  }
}
function supportThreeCheck(canvas){
    let gl = null;
    try {
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        console.log(gl)
    }
    catch(e) {
        return false
}
  return gl;
}
</script>

<style>
.order{
  position: relative;
  margin-top: 10%;
}
.title{
  position: relative;
  float: left;
  left: 7%;
  top: 15vh;
}
.rnbTl{
  margin-bottom: -15px;
}
.dsTl{
  margin-block: 0px;
}
.raindowTitle{
  font-family: 'Nunito', 'sans-serif';
  font-style: normal;
  font-weight: 700;
  font-size: 13pt;
  align-items: center;
  line-height: 1.7em;

  background: linear-gradient(90.67deg, #A953D1 5.17%, #53B3D1 64.6%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.descript{
  margin-top: 10%;
  top: 10%;
  font-family: 'Rubik', 'sans-serif';
  font-style: italic;
  font-weight: 400;
  font-size: 10pt;
  line-height: 24px;
  letter-spacing: 0.04em;

  color: #FFFFFF;
}
.canvas{
  position: relative;
  width: 50vw;
  height: 87vh;
  left: 50%;
}
canvas{
  width: 100%;
  height: 100%;
}
.imagePrev{
  position: relative;
  float: right;
  right: 22vh;
  top: 5vh;
}

.makeOrderBtn{
    text-align: center;
    position: relative;
    top: 1.5vh;
}

.makeOrderBtn, .makeOrderBtn::after {
    width: 300px;
    height: 50px;
    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    background: linear-gradient(45deg, transparent 5%, #00E6F6 5%);
    border: 0;
    color: #000;
    letter-spacing: 3px;
    box-shadow: 6px 0px 0px  #A953D1;
    outline: transparent;
    position: relative;
}

.makeOrderBtn::after {
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

.makeOrderBtn:hover::after {
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