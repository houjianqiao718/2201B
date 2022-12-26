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
      <div class="right">
        <!-- 左侧顶部 -->
        <rightTop></rightTop>
        <div class="con">
          <div class="con-left">
            <!-- 地图部分 -->
            <mapDT></mapDT>
            <!-- 实时订单趋势图 -->
            <RealTime></RealTime>
          </div>
          <div class="con-right">222</div>
        </div>
      </div>
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
import rightTop from "@/components/rightTop.vue"
import mapDT from "@/components/mapDT.vue"
import RealTime from "@/components/RealTime.vue"
export default {
  components: { left1, left2, left3, left4, left5, left6, rightTop, mapDT, RealTime },
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
  height: 40px;
  line-height: 40px;
  img {
    width: 100%;
    height: 60px;
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
.right{
  width: 75%;
  .con{
    display: flex;
    margin-top: 40px;
    .con-left{
      width: 60%;
    }
    .con-right{
      width: 40%;
    }
  }
}
</style>
