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
    float: right;
    top: 20pt;
    right: 40%;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    color: white;
    border: 1px solid #A953D1;
    border-radius: 50px;
    height: 20pt;
    width: 110pt;
    vertical-align:middle;
    text-align: center;
    padding-top:5pt;
}
a.name{
    position: relative;
    top: 20pt;
    float: right;
    right: 33%;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 0px;
    height: 20pt;
    width: 0pt;
    vertical-align:middle;
    text-align: center;
    padding-top:5pt;
}
div.rightPart{
    position: inherit;
    float: right;
    right: 0;
    width: 30%;
    height: 9vh;
}
</style>