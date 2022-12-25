<template>
  <div class="home">
    <div class="head">
      <img src="@/assets/head.png" alt="" />
    </div>
    <div class="box">
      <!-- 左边部分 -->
      <div class="left">
        <!-- 左边上部 -->
        <left1></left1>
        <!-- 左边第二部分 -->
        <left2></left2>
        <!-- 左边第三部分 -->
        <left3></left3>
        <!-- 左边第四部分 -->
        <left4></left4>
        <!-- 左边第五部分 -->
        <left5></left5>
        <!-- 左边第六部分 -->
        <left6></left6>
      </div>
      <div class="right">222</div>
    </div>
  </div>
</template>

<script>
import left1 from "@/components/left1.vue"
import left2 from "@/components/left2.vue"
import left3 from "@/components/left3.vue"
import left4 from "@/components/left4.vue"
import left5 from "@/components/left5.vue"
import left6 from "@/components/left6.vue"
export default {
  components: { left1, left2, left3, left4, left5, left6 },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background-color: #1c1c1c;
  color: #fff;
  overflow: hidden;
}
.head {
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  img {
    width: 100%;
  }
}
.box {
  width: 100%;
  display: flex;
  margin-top: 20px;
  .left {
    width: 23%;
    padding: 0 10px;
  }
}
</style>
