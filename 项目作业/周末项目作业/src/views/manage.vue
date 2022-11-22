<template>
  <div class="index">
    <div class="content">
      <h1>数据统计</h1>
      <div>
        <span style="background: #ff9800"><b style="color: #fff">当日数据：</b></span>
        <span><b>3</b>新增用户</span>
        <span><b>2</b>新增订单</span>
        <span><b>24</b>新增管理员</span>
      </div>
      <div>
        <span style="background: #20a0ff"><b style="color: #fff">总数据：</b></span>
        <span><b>69858</b>注册用户</span>
        <span><b>32684</b>订单</span>
        <span><b>124679</b>管理员</span>
      </div>
      <span class="trend">走势图</span>
      <div id="main" style="width: 1000px; height: 400px"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: 'Stacked Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['新注册用户', '新增订单', '新增管理员']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2022-11-14', '2022-11-15', '2022-11-16', '2022-11-17', '2022-11-18', '2022-11-19', '2022-11-20']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '新注册用户',
          type: 'line',
          stack: 'Total',
          data: [18, 13, 29, 17, 8, 11, 3]
        },
        {
          name: '新增订单',
          type: 'line',
          stack: 'Total',
          data: [3, 5, 8, 6, 2, 5, 2]
        },
        {
          name: '新增管理员',
          type: 'line',
          stack: 'Total',
          data: [63, 47, 85, 68, 60, 30, 24]
        }
      ]
    };

    option && myChart.setOption(option);
  },
};
</script>

<style lang='scss' scoped>
#main {
  margin: 100px auto;
  width: 90%;
  height: 400px;
}
.trend {
  font-weight: 900;
  font-size: 20px;
  margin-left: 60px;
}
.index {
  width: 100%;
}
.content {
  padding: 20px;
  h1 {
    text-align: center;
    font-size: 40px;
    margin: 0;
    margin-bottom: 10px;
  }
  div {
    span {
      display: inline-block;
      width: 300px;
      height: 50px;
      line-height: 50px;
      background-color: #e5e9f2;
      margin-right: 20px;
      margin-top: 10px;
      border-radius: 10px;
      color: #89919a;
      text-align: center;
      b {
        color: #000;
        font-size: 26px;
      }
    }
  }
}
</style>
