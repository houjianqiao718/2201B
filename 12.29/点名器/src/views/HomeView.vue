<template>
  <div class="box">
    <div class="body">
      <!-- 音乐 -->
      <mp3></mp3>
      <!-- 头部 -->
      <div>
        <h1>2201B点名表</h1>
        <p class="newTime">时间：{{ Times }}</p>
      </div>
      <div class="content">
        <!-- 中间左侧部分 -->
        <div class="left">
          <ul>
            <li v-for="item in students" :key="item.id">{{ item.name }}</li>
          </ul>
        </div>
        <!-- 中间右侧部分 -->
        <div class="right">
          <div class="top">
            <span class="text">天选之人：</span>
            <span id="title" v-if="titleName.length !== 0">{{ titleName }}</span>
          </div>
          <footer>
            <span @click="one">单人点名</span>
            <span @click="two">双人点名</span>
            <span @click="boy">男生点名</span>
            <span @click="girl">女生点名</span>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import mp3 from "@/components/mp3.vue"
export default {
  components: {mp3},
  setup(props) {
    const data = reactive({
      Times: "", // 时间
      titleName: "", // 随机的名字
      /*学生数据 */
      student: [
        {
          id: 1,
          name: "张世权",
          sex: 0,
        },
        {
          id: 2,
          name: "吴倩",
          sex: 1,
        },
        {
          id: 3,
          name: "李宏恩",
          sex: 0,
        },
        {
          id: 4,
          name: "宋增杰",
          sex: 0,
        },
        {
          id: 5,
          name: "杨志豪",
          sex: 0,
        },
        {
          id: 6,
          name: "郝嫚嫚",
          sex: 1,
        },
        {
          id: 7,
          name: "侯建荞",
          sex: 1,
        },
        {
          id: 8,
          name: "程怀博",
          sex: 0,
        },
        {
          id: 9,
          name: "江萌洋",
          sex: 1,
        },
        {
          id: 10,
          name: "周璇",
          sex: 1,
        },
        {
          id: 11,
          name: "张建雨",
          sex: 0,
        },
        {
          id: 12,
          name: "孙铭",
          sex: 0,
        },
        {
          id: 13,
          name: "孙旭瑶",
          sex: 1,
        },
        {
          id: 14,
          name: "章奥博",
          sex: 0,
        },
        {
          id: 15,
          name: "王伟宸",
          sex: 0,
        },
        {
          id: 16,
          name: "代伊涵",
          sex: 0,
        },
        {
          id: 17,
          name: "邓林科",
          sex: 0,
        },
        {
          id: 18,
          name: "张立",
          sex: 0,
        },
        {
          id: 19,
          name: "李妍",
          sex: 1,
        },
        {
          id: 20,
          name: "薛翔元",
          sex: 0,
        },
        {
          id: 21,
          name: "郑锋",
          sex: 0,
        },
        {
          id: 22,
          name: "巴钦",
          sex: 0,
        },
        {
          id: 23,
          name: "张宗耀",
          sex: 0,
        },
        {
          id: 24,
          name: "章涵语",
          sex: 0,
        },
        {
          id: 25,
          name: "高鹏亚",
          sex: 0,
        },
        {
          id: 26,
          name: "付高聪",
          sex: 0,
        },
        {
          id: 27,
          name: "宋海宇",
          sex: 0,
        },
        {
          id: 28,
          name: "王龙翔",
          sex: 0,
        },
        {
          id: 29,
          name: "徐婉颖",
          sex: 1,
        },
        {
          id: 30,
          name: "韩雨泽",
          sex: 0,
        },
        {
          id: 31,
          name: "刘艺",
          sex: 1,
        },
      ],
      students: [
        {
          id: 1,
          name: "张世权",
          sex: 0,
        },
        {
          id: 2,
          name: "吴倩",
          sex: 1,
        },
        {
          id: 3,
          name: "李宏恩",
          sex: 0,
        },
        {
          id: 4,
          name: "宋增杰",
          sex: 0,
        },
        {
          id: 5,
          name: "杨志豪",
          sex: 0,
        },
        {
          id: 6,
          name: "郝嫚嫚",
          sex: 1,
        },
        {
          id: 7,
          name: "侯建荞",
          sex: 1,
        },
        {
          id: 8,
          name: "程怀博",
          sex: 0,
        },
        {
          id: 9,
          name: "江萌洋",
          sex: 1,
        },
        {
          id: 10,
          name: "周璇",
          sex: 1,
        },
        {
          id: 11,
          name: "张建雨",
          sex: 0,
        },
        {
          id: 12,
          name: "孙铭",
          sex: 0,
        },
        {
          id: 13,
          name: "孙旭瑶",
          sex: 1,
        },
        {
          id: 14,
          name: "章奥博",
          sex: 0,
        },
        {
          id: 15,
          name: "王伟宸",
          sex: 0,
        },
        {
          id: 16,
          name: "代伊涵",
          sex: 0,
        },
        {
          id: 17,
          name: "邓林科",
          sex: 0,
        },
        {
          id: 18,
          name: "张立",
          sex: 0,
        },
        {
          id: 19,
          name: "李妍",
          sex: 1,
        },
        {
          id: 20,
          name: "薛翔元",
          sex: 0,
        },
        {
          id: 21,
          name: "郑锋",
          sex: 0,
        },
        {
          id: 22,
          name: "巴钦",
          sex: 0,
        },
        {
          id: 23,
          name: "张宗耀",
          sex: 0,
        },
        {
          id: 24,
          name: "章涵语",
          sex: 0,
        },
        {
          id: 25,
          name: "高鹏亚",
          sex: 0,
        },
        {
          id: 26,
          name: "付高聪",
          sex: 0,
        },
        {
          id: 27,
          name: "宋海宇",
          sex: 0,
        },
        {
          id: 28,
          name: "王龙翔",
          sex: 0,
        },
        {
          id: 29,
          name: "徐婉颖",
          sex: 1,
        },
        {
          id: 30,
          name: "韩雨泽",
          sex: 0,
        },
        {
          id: 31,
          name: "刘艺",
          sex: 1,
        },
      ],
    });
    /*封装时间*/
    function getTime() {
      var data = new Date(); // 获取时间戳
      let year = data.getFullYear(); // 年份
      let month = data.getMonth() + 1; // 月份
      month = month < 10 ? "0" + month : month; // 补零
      let day = data.getDate(); // 日
      day = day < 10 ? "0" + day : day; // 补零
      let hours = data.getHours(); // 时
      hours = hours < 10 ? "0" + hours : hours; // 补零
      let minutes = data.getMinutes(); // 分
      minutes = minutes < 10 ? "0" + minutes : minutes; // 补零
      let seconds = data.getSeconds(); // 秒
      seconds = seconds < 10 ? "0" + seconds : seconds; // 补零
      return (
        year +
        "/" +
        month +
        "/" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    }
    /*定时器*/
    setInterval(() => {
      data.Times = getTime();
    }, 1000);

    /*封装随机数*/
    const randoms = (list) => {
      var max = list;
      var min = 0;
      return Math.floor(Math.random() * (max - min) + min);
    };

    /**单人点名 */
    const one = () => {
      let index = randoms(data.student.length);
      data.titleName = data.student[index].name;
      data.student.splice([randoms(index)], 1);
      if (data.student.length == 0) {
        data.student = [...data.students];
      }
    };

    /*双人点名*/
    const two = () => {
      let aIndex = randoms(data.student.length);
      let bIndex = randoms(data.student.length);
      let a = data.student[aIndex].name;
      let b = data.student[bIndex].name;
      data.titleName = a + " " + b;
      data.student.splice(aIndex, 1);
      data.student.splice(bIndex, 1);
      if (data.student.length <= 1) {
        data.student = [...data.students];
      }
    };

    /*男生点名*/
    const boy = () => {
      let list = data.student.filter((ele) => ele.sex == 0);
      console.log(data.student.length);
      let index = randoms(list.length);
      data.titleName = list[index].name;
    };

    /*女生点名*/
    const girl = () => {
      let list = data.student.filter((ele) => ele.sex == 1);
      console.log(data.student.length);
      let index = randoms(list.length);
      data.titleName = list[index].name;
    };

    return { ...toRefs(data), getTime, one, two, boy, girl };
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  color: #fff;
}
.box {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #1e1e1e;
  color: #fff;
  font-family: "楷体";
  background-image: url("../assets/xxxx.gif");
}
.body {
  text-align: center;
  width: 100%;
  overflow: hidden;
}
h1 {
  font-size: 40px;
}
p {
  display: inline-block;
  text-align: right;
  width: 95%;
  margin-top: 30px;
  font-size: 20px;
}
.text {
  color: aliceblue;
  font-size: 40px;
}
.content {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
}
.right {
  width: 600px;
  text-align: left;
}
.top {
  margin-top: 150px;
  height: 60px;
  display: flex;
  align-items: center;
}
footer {
  margin-top: 130px;
}
footer span {
  font-size: 13px;
  background-color: #67c23a;
  margin-right: 20px;
  padding: 10px 16px;
  border-radius: 30px;
  font-family: "微软雅黑";
}
.liColor {
  background-clip: text;
  -webkit-background-clip: text;
  color: #fff;
  font-size: 22px;
}
.left {
  width: 900px;
}
.left ul {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
}
.left ul li {
  font-size: 22px;
  text-align: center;
  width: 80px;
  margin: 26px;
  padding-bottom: 5px;
  border-radius: 16px;
  font-weight: bold;
  background-image: -webkit-linear-gradient(bottom, #ecb27c, #e89dd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#title {
  font-size: 60px;
  font-weight: bold;
  background-image: -webkit-linear-gradient(bottom, #ec7cce, #e4843f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
