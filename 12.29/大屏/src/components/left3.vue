<template>
  <div class="left3">
    <div class="list">
      <div id="main" style="width: 100%; height: 90px"></div>
      <div class="box">
        <div class="top">
          <div>
            <span class="text">慕课外卖登录设备</span> <br />
            <div class="span">Distribution of Internet</div>
          </div>
          <div class="shuzi">9,999<span class="span1">万台</span></div>
        </div>
        <div class="foot">
          <div class="shu">
            <div class="sp1">2,114,710</div>
            <div class="sp2"><span class="yuan"></span>ios</div>
          </div>
          <div class="shu">
            <div class="sp1">2,269,287</div>
            <div class="sp2"><span class="yuan"></span>PC</div>
          </div>
          <div class="shu">
            <div class="sp1">2,526,236</div>
            <div class="sp2"><span class="yuan"></span>Android</div>
          </div>
        </div>
      </div>
    </div>
    <div class="hr"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      backgroundColor: "#2b2c2e",
      title: {
        left: "center",
        top: 20,
      },
      series: [
        {
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [{ value: 335 }, { value: 310 }, { value: 274 }].sort(function (
            a,
            b
          ) {
            return a.value - b.value;
          }),
          roseType: "radius",
          itemStyle: {
            color: "#83a748",
          },
          //删除指示线
          labelLine: {
            show: false,
          },
        },
      ],
    };
    option && myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
.left3 {
  padding: 0 15px 10px 15px;
  background-color: #2b2c2e;
}
.list {
  display: flex;
}
.top {
  margin-left: 20px;
  display: flex;
  align-items: center;
  .text {
    font-size: 14px;
    margin: 0;
    font-weight: 900;
  }
  .span {
    font-size: 6px;
    transform: scale(0.5); //缩放0.8
  }
}
.span1 {
  font-size: 10px;
}
.shuzi {
  display: flex;
  font-family: DIN;
  font-size: 24px;
  font-weight: 900;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.foot {
  display: flex;
  justify-content: space-around;
  color: #fff;
  .shu {
    margin-top: 6px;
    margin-left: 20px;
    .sp1 {
      font-size: 12px;
      font-weight: 900;
    }
    .sp2 {
      font-size: 6px;
      font-weight: 900;
      transform: scale(0.8); // 缩放0.8
      .yuan {
        display: inline-block;
        width: 6px;
        height: 6px;
        background-color: #74a631;
        border-radius: 6px;
        margin-right: 3px;
      }
    }
  }
}
.hr {
  width: 100%;
  height: 6px;
  background-color: #3c3d40;
}
</style>
