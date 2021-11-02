import {
  reactive
} from "vue";

function submitFun(state) {
  let stateA = reactive({
    stu: {
      id: "",
      name: "",
      age: "",
    },
  });

  function submit(e) {
    e.preventDefault();
    console.log("123");
    state.stus.push(stateA.stu);
  }
  return {
    stateA,
    submit
  };
}
export default submitFun;