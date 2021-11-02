<template>
  {{ text.time }}
  <button @click="funA">button</button>
  <form>
    <input type="text" v-model="stateA.stu.id" />
    <input type="text" v-model="stateA.stu.name" />
    <input type="text" v-model="stateA.stu.age" />
    <!-- <button @click="submit" type="button">submit</button> -->
    <button @click="submit">submit</button>
    <button @click="reset">reset</button>
  </form>
  <ul>
    <li
      v-for="(item, index) in state.stus"
      :key="item.id"
      @click="delFun(index)"
    >
      {{ item.name }}----{{ item.age }}
    </li>
  </ul>
  <div>-------------------------</div>
  <video id="webcam"></video>

  <!-- 获取html页面的文字，并且更换背景颜色 -->
  <button @click="step1">获取文字</button>
  <button>找到该文字所在DOM</button>
  <button>改变颜色</button>
  <div>
    <span>一段文字1</span>
    <span>一段文字22</span>
    <span>一段文字333</span>
    <span>一段文字4444</span>
  </div>
  <!-- <router-link to="/">Go to Home</router-link> -->

  <router-view></router-view>
</template>

<script>
import { reactive } from "vue";
import submitFun from "../../utils/addStu";
import removeFun from "../../utils/removeStu";
export default {
  name: "App",
  setup(props) {
    let { state, delFun } = removeFun();
    let { stateA, submit } = submitFun(state);
    let text = reactive({
      time: new Date(),
    });
    function funA() {
      let newDate = new Date();
      text.time = newDate;
    }
    function step1($event) {
      // console.log($event);
      let sel = window.getSelection();
      console.log("获取文字>>", sel);
    }
    return { state, stateA, delFun, submit, text, funA, step1 };
  },
  methods: {
    myFn() {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ audio: false, video: false })
          .then((res) => {
            const video = document.getElementById("webcam");
            video.srcObject = res;
            video.autoplay = true;
          })
          .catch((err) => {
            console.log("err", err);
          });
      } else {
        console.log("err");
      }
    },
  },
  mounted() {
    // const str = "<div style='color:red'>";
    // const str_e = "</div>"
    // let body1 = document.body.innerHTML;
    // const index = document.body.innerHTML.indexOf("一段文字1");
    // const str2 = body1.slice(0, index) + str + body1.slice(index, index + 7) + str_e + body1.slice(index +7);
    // console.log(str2);
    // document.body.innerHTML = str2
  },
};
/* function removeFun() {
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
} */

/* function submitFun(state) {
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
  return { stateA, submit };
} */
</script>
<style scoped>
/* .flex-box .item{
  width: 380px;
  height: 80px;
  border: 1px solid red;
  flex: 1;
} */
</style>