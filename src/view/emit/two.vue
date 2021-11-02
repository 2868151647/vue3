<template>
  <div class="two"><button @click="muFun">按钮</button></div>
</template>

<script>
// import bus from "../../utils/eventBus";
export default {
  setup(props) {
    function muFun() {
      console.log("点击>>>>");
    }
    return {
      muFun,
    };
  },
  mounted() {
    console.log("two>>>");
    bus.$on("ces", () => {
      console.log("ces>>>>>>>>>");
    });
  },
};
</script>

<style>
.two {
  width: 500px;
  height: 500px;
  background-color: coral;
}
</style>