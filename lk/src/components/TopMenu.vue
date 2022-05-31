<template>
  <div class="topMenuRoot">
      <div class="rightPart">
          <a class="name">{{name}}</a>
          <a class="role">{{role}}</a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        name: String,
        role: String
    }
}
</script>

<style>
a.role{
    position: relative;
    float: left;
    top: 40%;
    left: 30%;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    color: white;
    border: 1px solid #A953D1;
    border-radius: 50px;
    height: 20pt;
    width: 135pt;
    vertical-align:middle;
    text-align: center;
    padding-top:5pt;
}
a.name{
    position: relative;
    top: 40%;
    float: right;
    right: 20%;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    color: white;
}
div.rightPart{
    position: inherit;
    float: right;
    width: 30%;
    height: 9vh;
}
</style>