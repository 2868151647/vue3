import { reactive } from "vue";
function removeFun() {
  let state = reactive({
    stus: [
      { id: 1, name: "zs", age: 10 },
      { id: 2, name: "ls", age: 20 },
      { id: 3, name: "ww", age: 30 },
    ],
  });
  function delFun(index) {
    state.stus = state.stus.filter((value, idx, array) => {
      return index != idx;
    });
  }
  return { state, delFun };
}
export default removeFun;