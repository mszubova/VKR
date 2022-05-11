<template>
  <div class="previewRoot">
    <div class="title">
      <div class="raindowTitle">
        <h2>Мы вынуждены отталкиваться от того,</h2>
        <h2>что реализация намеченных плановых</h2>
      </div>
      <div class="descript">
          <h2>Многие известные личности заблокированы в рамках </h2>
          <h2>своих собственных рациональных ограничений!</h2>
          <h2>Мы вынуждены отталкиваться от того, что </h2>
          <h2>убеждённость некоторых оппонентов создаёт</h2> 
          <h2>необходимость включения в производственный план</h2> 
          <h2>целого ряда внеочередных мероприятий с учётом </h2>
          <h2>комплекса кластеризации усилий. </h2>
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
.title{
  position: relative;
  float: left;
}
.raindowTitle{
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;

align-items: center;

background: linear-gradient(90.67deg, #A953D1 5.17%, #53B3D1 64.6%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
}
.descript{
  font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 20px;
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
  right: 25vh;
  top: 5vh;
}
</style>