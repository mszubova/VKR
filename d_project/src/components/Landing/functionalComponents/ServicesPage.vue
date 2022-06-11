<template>
  <div class="servicesRoot">
      <div class="raindowTitl" id="dsd">
        <a id="raindowTitl">PROGRESS center предоставляет следующие услуги:</a>
      </div>
      <div class="servicesBlockContainer">
        <div class="servicesBlock" id="left">
          <div class="infoBlock" id="leftPosition">
            <a class="servicesBlockTitle">Разработка сайтов с нуля под индвидуальные потребности</a>
            <div class="dateReady">
              <p class="dateReady">Срок: от 3 до 30 дней</p>
            </div>
            <div class="dateReady2">
              <p class="dateReady">Стоимость: от 15 тыс. руб.</p>
            </div>
            <button id="services" class="makeOrderBtn" @click="makeOrderBtnClick()">Оставить заявку</button>
          </div>
        </div>
        <div class="servicesBlock" id="middle">
          <div class="infoBlock" id="centerPosition">
            <a class="servicesBlockTitle">Редизайн существующих проектов</a>
            <div class="dateReady">
              <p class="dateReady">Срок: от 1 до 16 дней</p>
            </div>
            <div class="dateReady2">
              <p class="dateReady">Стоимость: от 20 тыс. руб.</p>
            </div>
            <button id="services" class="makeOrderBtn" @click="makeOrderBtnClick()">Оставить заявку</button>
          </div>
        </div>
        <div class="servicesBlock" id="right">
          <div class="infoBlock" id="rightPosition">
            <a class="servicesBlockTitle">Разработка интернет-магазинов</a>
            <div class="dateReady">
              <p class="dateReady">Срок: от 20 до 70 дней</p>
            </div>
            <div class="dateReady2">
              <p class="dateReady">Стоимость: от 60 тыс. руб.</p>
            </div>
            <button id="services" class="makeOrderBtn" @click="makeOrderBtnClick()">Оставить заявку</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
button#services.makeOrderBtn{
  position: absolute;
  top: 85%;
  transform: translate(30%, -50%)
}
div.dateReady2{
  position: absolute;
  top: 50%;
}
div.dateReady{
  position: absolute;
  top: 30%;
}
p.dateReady{
  position: relative;
  font-family: 'Open Sans', 'sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-left: 30pt;
  margin-right: 20pt;
}
a.servicesBlockTitle{
  font-family: 'Open Sans', 'sans-serif';
  font-style: normal;
  font-weight: 600;
  font-size: 17pt;
  line-height: 38px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  position: relative;
  text-align: left;
  height: 30%;
  margin-top: 20pt;
  margin-left: 30pt;
  margin-right: 20pt;
}
div#rightPosition.infoBlock{
  background-color: rgba(62, 62, 62, 0.65);
  border-radius: 40px;
  width: 70%;
  height: 100%;
  display: flex;
  margin-left: auto;
  margin-right: 25%;
}
div#centerPosition.infoBlock{
  background-color: rgba(62, 62, 62, 0.65);
  border-radius: 40px;
  width: 70%;
  height: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
div#leftPosition.infoBlock{
  background-color: rgba(62, 62, 62, 0.65);
  border-radius: 40px;
  width: 70%;
  height: 100%;
  display: flex;
  margin-left: 25%;
  margin-right: auto;
}
div.servicesBlockContainer{
  margin-top: 15%;
  margin-bottom: auto;
  display: table;
  width: 100%;
}
div#left.servicesBlock{
  text-align: center;
  display: table-cell;
}
div#middle.servicesBlock{
  text-align: center;
  display: table-cell;
}
div#right.servicesBlock{
  text-align: center;
  display: table-cell;
}
div.servicesBlock{
  margin-left: 40vh;
  max-width: 20vw;
  width: 20vw;
  height: 300pt;
}
div#dsd.raindowTitl{
  position: absolute;
  top: -55%;
  display: flex;
  width: 100%;
}
a#raindowTitl{
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 114.9%;
  display: flex;
  align-items: center;
  background: linear-gradient(90.67deg, #A953D1 5.17%, #53B3D1 64.6%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
} 
</style>