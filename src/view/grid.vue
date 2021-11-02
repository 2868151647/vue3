<template>
  <h3>Grid布局练习</h3>
  <div class="main">
     <div class="item1">1</div>
     <div class="item2">2</div>
     <div class="item3">3</div>
     <div class="item4">4</div>
     <div class="item5">5</div>
     <div class="item6">6</div>
     <div class="item7">7</div>
     <div class="item8">8</div>
     <div class="item9">9</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(3, 200px);
  justify-content: center;
  gap: 10px;
  grid-auto-flow: column dense;
  width: 100%;
  height: 600px;
  grid-auto-columns: 200px;
  /* grid-auto-rows: 300px; */
}
.main div {
  font-size: 80px;
  color: white;
  /* justify-items: center; */
  text-align: center;
  /* align-self: center; */
  line-height: 200px;
}
.item1{
  background-color: brown;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: span 2;
}
.item2{
  background-color: cadetblue;
  grid-column: 1 / 3;
}
.item3{
  background-color: chartreuse;
}
.item4{
  background-color: rgb(245, 105, 222);
}
.item5{
  background-color: darkorange;
}
.item6{
  background-color: deepskyblue;
}
.item7{
  background-color: rgb(48, 85, 178);
}
.item8{
  background-color: green;
}
.item9{
  background-color: rgb(219, 216, 22);
}
</style>