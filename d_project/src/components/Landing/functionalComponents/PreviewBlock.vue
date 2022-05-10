<template>
  <div class="previewRoot">
      <div class="canvas">
          <canvas id="canvas"></canvas>
      </div>
  </div>
</template>

<script>
import Renderer from '@/components/Scripts/Three/Renderer'
import * as three from 'three'
export default{
  mounted: function(){
    Renderer(three, document.getElementById("canvas"));
  }
}
</script>

<style>
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
</style>