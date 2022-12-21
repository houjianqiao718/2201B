<template>
  <div class="home">
    <div class="title">联心菜市场</div>
    <div class="div">
      <!-- 左侧部分 -->
      <div class="left">
        <div class="left-top">
          <ul>
            <!-- 1 -->
            <li>
              <div class="box">
                <h3>这里是标题1</h3>
                <div class="shu">
                  <span class="shu1">6890.69</span><i>元</i>
                </div>
                <div class="zi">
                  <span class="span1">小标题：文字</span
                  ><span>小标题：文字</span>
                </div>
                <span class="span2"></span>
                <span class="span3"></span>
                <span class="span4"></span>
                <span class="span5"></span>
              </div>
            </li>
            <!-- 2 -->
            <li>
              <div class="box">
                <h3>这里是标题2</h3>
                <p class="shu"><span class="shu1">6090.99</span><i>元</i></p>
                <div class="zi">
                  <span class="span1">小标题：文字</span
                  ><span>小标题：文字</span>
                </div>
                <span class="span2"></span>
                <span class="span3"></span>
                <span class="span4"></span>
                <span class="span5"></span>
              </div>
            </li>
            <!-- 3 -->
            <li>
              <div class="box">
                <h3>这里是标题3</h3>
                <p class="shu"><span class="shu1">2890.39</span><i>元</i></p>
                <div class="zi">
                  <span class="span1">小标题：文字</span
                  ><span>小标题：文字</span>
                </div>
                <span class="span2"></span>
                <span class="span3"></span>
                <span class="span4"></span>
                <span class="span5"></span>
              </div>
            </li>
            <!-- 4 -->
            <li>
              <div class="box">
                <h3>这里是标题4</h3>
                <p class="shu"><span class="shu1">7590.15</span><i>元</i></p>
                <div class="zi">
                  <span class="span1">小标题：文字</span
                  ><span>小标题：文字</span>
                </div>
                <span class="span2"></span>
                <span class="span3"></span>
                <span class="span4"></span>
                <span class="span5"></span>
              </div>
            </li>
          </ul>
        </div>
        <!-- 左侧中间--第一个echarts -->
        <div class="left-echarts">
          <div class="left-echarts-box">
            <div class="left-echarts-boxdiv">
              <h3>这里是标题</h3>
              <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
              <div style="width: 100%; height: 25vh" id="echarts1"></div>
              <span class="span2"></span>
              <span class="span3"></span>
              <span class="span4"></span>
              <span class="span5"></span>
            </div>
          </div>
          <!-- 左侧中间--名次 -->
          <div class="left-echarts-boxright">
            <div class="left-echarts-boxdiv-right">
              <h3>这里是标题</h3>
              <div class="box1 box1_pai" style="width: 100%; height: 25vh">
                <ul>
                  <!-- 第一名 -->
                  <li>
                    <div class="list">
                      <div class="list_left">
                        <span class="bot"></span><span class="zi">第一名</span>
                      </div>
                      <div class="list_line">
                        <div class="list_lineIn" style="width: 98.5%"></div>
                      </div>
                      <p class="num">98.5%</p>
                    </div>
                  </li>
                  <!-- 第二名 -->
                  <li>
                    <div class="list list2">
                      <div class="list_left">
                        <span class="bot"></span><span class="zi">第二名</span>
                      </div>
                      <div class="list_line">
                        <div class="list_lineIn" style="width: 88.5%"></div>
                      </div>
                      <p class="num">88.5%</p>
                    </div>
                  </li>
                  <!-- 第三名 -->
                  <li>
                    <div class="list list3">
                      <div class="list_left">
                        <span class="bot"></span><span class="zi">第三名</span>
                      </div>
                      <div class="list_line">
                        <div class="list_lineIn" style="width: 68.5%"></div>
                      </div>
                      <p class="num">68.5%</p>
                    </div>
                  </li>
                  <!-- 第四名 -->
                  <li>
                    <div class="list list4">
                      <div class="list_left">
                        <span class="bot"></span><span class="zi">第四名</span>
                      </div>
                      <div class="list_line">
                        <div class="list_lineIn" style="width: 40.5%"></div>
                      </div>
                      <p class="num">40.5%</p>
                    </div>
                  </li>
                  <!-- 第五名 -->
                  <li>
                    <div class="list list5">
                      <div class="list_left">
                        <span class="bot"></span><span class="zi">第五名</span>
                      </div>
                      <div class="list_line">
                        <div class="list_lineIn" style="width: 22.5%"></div>
                      </div>
                      <p class="num">22.5%</p>
                    </div>
                  </li>
                </ul>
              </div>
              <span class="span2"></span>
              <span class="span3"></span>
              <span class="span4"></span>
              <span class="span5"></span>
            </div>
          </div>
        </div>
        <!-- 左侧底部第二个echarts -->
        <div class="left-echarts">
          <div class="left-echarts-box">
            <div class="left-echarts-boxdiv">
              <h3>这里是标题</h3>
              <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
              <div style="width: 100%; height: 25vh" id="echarts2"></div>
              <span class="span2"></span>
              <span class="span3"></span>
              <span class="span4"></span>
              <span class="span5"></span>
            </div>
          </div>
          <div class="left-echarts-boxright">
            <div class="left-echarts-boxdiv-right">
              <h3>这里是标题</h3>
              <div class="biao biao-bb" style="width: 100%; height: 25vh">
                <ul>
                  <li>
                    <p class="shu">23</p>
                    <p class="zii">今日收益比例</p>
                  </li>
                  <li>
                    <p class="shu">107</p>
                    <p class="zii">本月收益比例</p>
                  </li>
                  <li>
                    <p class="shu">107</p>
                    <p class="zii">历史收益比例</p>
                  </li>
                  <li>
                    <p class="shu">23</p>
                    <p class="zii">今日收益比例</p>
                  </li>
                  <li>
                    <p class="shu">23</p>
                    <p class="zii">本月收益比例</p>
                  </li>
                  <li>
                    <p class="shu">23</p>
                    <p class="zi">历史收益比例</p>
                  </li>
                </ul>
              </div>
              <span class="span2"></span>
              <span class="span3"></span>
              <span class="span4"></span>
              <span class="span5"></span>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧部分 -->
      <div class="right">
        <!-- 右侧上部分 -->
        <div class="right-top">
          <div class="right-top-box">
            <h3>这里是标题</h3>
            <!-- 给echarts一个容器 -->
            <div style="width: 100%; height: 35vh" id="echarts3"></div>
            <span class="span2"></span>
            <span class="span3"></span>
            <span class="span4"></span>
            <span class="span5"></span>
          </div>
        </div>
        <!-- 右侧下部分 -->
        <div class="right-bottom">
          <div class="right-bottom-box">
            <h3>这里是标题</h3>
            <div class="biaoge biaoge_list" style="width: 100%; height: 36vh">
              <div class="biaoge_listIn">
                <ul class="ul_title">
                  <li>用户</li>
                  <li>类型号</li>
                  <li>类别一</li>
                  <li>类别二</li>
                  <li>类别三</li>
                </ul>
                <div class="ul_list">
                  <div class="ul_listIn">
                    <ul class="ul_con">
                      <li>张三</li>
                      <li>11</li>
                      <li>类别一</li>
                      <li>类别二</li>
                      <li>类别三</li>
                    </ul>
                    <ul class="ul_con">
                      <li>张三</li>
                      <li>12</li>
                      <li>类别一</li>
                      <li>类别二</li>
                      <li>类别三</li>
                    </ul>
                    <ul class="ul_con">
                      <li>张三</li>
                      <li>13</li>
                      <li>类别一</li>
                      <li>类别二</li>
                      <li>类别三</li>
                    </ul>
                    <ul class="ul_con">
                      <li>张三</li>
                      <li>14</li>
                      <li>类别一</li>
                      <li>类别二</li>
                      <li>类别三</li>
                    </ul>
                    <ul class="ul_con">
                      <li>张三</li>
                      <li>15</li>
                      <li>类别一</li>
                      <li>类别二</li>
                      <li>类别三</li>
                    </ul>
                    <ul class="ul_con">
                      <li>张三</li>
                      <li>16</li>
                      <li>类别一</li>
                      <li>类别二</li>
                      <li>类别三</li>
                    </ul>
                    <ul class="ul_con">
                      <li>张三</li>
                      <li>11</li>
                      <li>类别一</li>
                      <li>类别二</li>
                      <li>类别三</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <span class="span2"></span>
            <span class="span3"></span>
            <span class="span4"></span>
            <span class="span5"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.echarts1(); // 调用
    this.echarts2(); // 调用
    this.echarts3(); // 调用
  },
  methods: {
    // 第一个echarts
    echarts1() {
      //获取dom容器
      var myChart = echarts.init(document.getElementById("echarts1"));
      //图表的配置项和数据
      var dataAxis = [
        "1日",
        "2日",
        "3日",
        "4日",
        "5日",
        "6日",
        "7日",
        "8日",
        "9日",
        "10日",
        "11日",
        "12日",
        "13日",
        "14日",
        "15日",
      ];
      var data = [
        220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122,
        200,
      ];
      var yMax = 500;
      var dataShadow = []; // 定义一个空数组
      var option;
      for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "",
          subtext: "",
        },
        grid: {
          x: 40,
          y: 40,
          x2: 20,
          y2: 20,
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolOffset: 12,
            lineStyle: {
              color: "#fff",
            },
          },
          z: 10,
        },
        yAxis: {
          type: "value",
          name: "单位：元",
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolOffset: 12,
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
        },

        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            type: "bar",
            itemStyle: {
              color: "rgba(0,0,0,0.05)",
            },
            barGap: "-100%",
            barCategoryGap: "40%",
            data: dataShadow,
            animation: false,
          },
          {
            type: "bar",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#0efdff",
                },
                {
                  offset: 0.5,
                  color: "#188df0",
                },
                {
                  offset: 1,
                  color: "#188df0",
                },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#2378f7",
                  },
                  {
                    offset: 0.7,
                    color: "#2378f7",
                  },
                  {
                    offset: 1,
                    color: "#0efdff",
                  },
                ]),
              },
            },
            data: data,
          },
        ],
      };
      // 使用指定的配置项和数据显示图表。
      option && myChart.setOption(option);
    },
    // 第二个echarts
    echarts2() {
      //获取dom容器
      var myChart = echarts.init(document.getElementById("echarts2"));
      //指定图表的配置项和数据
      var option;
      option = {
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          right: "10%",
          data: ["折线一", "折线二"],
        },
        grid: {
          x: 40,
          y: 40,
          x2: 20,
          y2: 20,
        },
        toolbox: {
          feature: {
            //saveAsImage: {}
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            /*inside: true,*/
            interval: 0,
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolOffset: 12,
            lineStyle: {
              color: "#fff",
            },
          },
          data: ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00"],
        },
        yAxis: {
          type: "value",

          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolOffset: 12,
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
        },
        series: [
          {
            name: "折线一",
            type: "line",
            stack: "总量",
            data: [280, 102, 191, 134, 390, 230, 210],
            itemStyle: {
              normal: {
                color: "skyblue", //折线点的颜色
                lineStyle: {
                  color: "skyblue", //折线的颜色
                  width: 2,
                },
              },
            },
          },
          {
            name: "折线二",
            type: "line",
            stack: "总量",
            data: [100, 132, 131, 234, 290, 330, 110],
            itemStyle: {
              normal: {
                color: "#d00", //折线点的颜色
                lineStyle: {
                  color: "#d00", //折线的颜色
                  width: 2,
                },
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    //第三个echarts
    echarts3() {
      //获取dom容器
      var myChart = echarts.init(document.getElementById("echarts3"));
      var option;
      option = {
        title: {
          text: "数据情况统计",
          subtext: "",
          left: "right",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          type: "scroll",
          orient: "vertical",
          right: 20,
          top: 40,
          bottom: 20,
          left: "right",
          data: ["西凉", "益州", "兖州", "荆州", "幽州"],
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
        },
        grid: {
          x: "-10%",
          y: 40,
          x2: 20,
          y2: 20,
        },
        color: ["#09d0fb", "#f88cfb", "#95f8fe", "#f9f390", "#ecfeb7"],
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              {
                value: 1548,
                name: "幽州",
              },
              {
                value: 535,
                name: "荆州",
              },
              {
                value: 510,
                name: "兖州",
              },
              {
                value: 634,
                name: "益州",
              },
              {
                value: 735,
                name: "西凉",
              },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
  width: 100%;
  height: 110vh;
  min-height: 100vh;
  background: url(../assets/images/bg2.jpg) no-repeat;
  background-size: 100% 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.div {
  display: flex;
  justify-content: space-between;
}
.title {
  width: 100%;
  font-size: 28px;
  line-height: 60px;
  color: rgba(14, 253, 255, 1);
  text-align: center;
  font-weight: bold;
}
.left {
  width: 75%;
  float: left;
}
.right {
  width: 25%;
}
.left-top {
  width: 100%;
  padding-bottom: 20px;
}
.left-top ul {
  display: flex;
}

.left-top ul li {
  float: left;
  width: 25%;
  margin-right: 20px;
}

.box {
  border: 1.6px solid rgba(14, 253, 255, 0.5);
  width: 100%;
  min-height: 60px;
  position: relative;
  padding: 16px 10px;
  box-sizing: border-box;
}

.box h3 {
  font-size: 16px;
  color: #fff;
}

.shu {
  font-size: 24px;
  color: rgba(14, 253, 255, 1);
  margin-bottom: 4px;
  font-weight: 900;
  font-family: "仿宋体";
}

.shu i {
  font-size: 8px;
  margin-left: 12px;
  font-style: normal;
}

.zi {
  font-size: 12px;
  color: #fff;
  position: relative;
  z-index: 10;
}

.span1 {
  margin-right: 2px;
}
.span2 {
  position: absolute;
  left: -1.6px;
  top: -8px;
  width: 74px;
  height: 10px;
  display: block;
  background: #01279d url(../assets/images/title_left_bg.png) no-repeat;
  background-size: cover;
}

.span3 {
  position: absolute;
  right: -2px;
  top: -2px;
  width: 20px;
  height: 20px;
  display: block;
  background: url(../assets/images/border_bg.jpg) no-repeat;
  background-size: cover;
}

.span4 {
  position: absolute;
  left: -1.6px;
  bottom: -1.6px;
  width: 20px;
  height: 20px;
  display: block;
  background: url(../assets/images/border_bg.jpg) no-repeat;
  background-size: cover;
}

.span5 {
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 16px;
  height: 16px;
  display: block;
  background: url(../assets/images/title_right_bg.png) no-repeat;
  background-size: cover;
}

.left-echarts {
  width: 100%;
  padding-bottom: 20px;
  display: flex;
}
.left-echarts-box {
  width: 60%;
  padding-right: 20px;
}

.left-echarts-boxdiv {
  border: 1.6px solid rgba(14, 253, 255, 0.5);
  min-height: 60px;
  position: relative;
  padding: 16px 10px;
  h3 {
    font-size: 16px;
    color: #fff;
    margin: 0;
    margin-bottom: 10px;
  }
}
.left-echarts-boxright {
  width: 36%;
}

.left-echarts-boxdiv-right {
  border: 1.6px solid rgba(14, 253, 255, 0.5);
  min-height: 60px;
  position: relative;
  padding: 8px 10px;
}

.left-echarts-boxdiv-right h3 {
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
}

/*左边中间部分*/
.box1_pai {
  width: 100%;
  overflow: hidden;
}
.box1 ul {
  padding: 0;
}
.list {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 12px;
  height: 34px;
}

.list_left {
  width: 15%;
  position: relative;
  padding-left: 28px;
}
.bot {
  width: 16px;
  height: 16px;
  background: #f78cf3;
  border-radius: 1000px;
  display: block;
  position: absolute;
  left: 4px;
  top: 0;
  bottom: 0;
  margin: auto 0;
}

.list_line {
  width: 60%;
  height: 16px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2000px;
}

.list_lineIn {
  width: 100%;
  height: 16px;
  background: #f78cf3;
  border-radius: 100px;
  -webkit-animation: widthMove1 2s ease-in-out;
}
.list2 .bot {
  background: #e7feb8;
}

.list3 .bot {
  background: #fdea8a;
}

.list4 .bot {
  background: #8ff9f8;
}

.lixt5 .bot {
  background: #d890fa;
}

.list2 .list_line .list_lineIn {
  background: #e7feb8;
  -webkit-animation: widthMove2 2s ease-in-out;
}

.list3 .list_line .list_lineIn {
  background: #fdea8a;
  -webkit-animation: widthMove3 2s ease-in-out;
}

.list4 .list_line .list_lineIn {
  background: #8ff9f8;
  -webkit-animation: widthMove4 2s ease-in-out;
}

.list5 .list_line .list_lineIn {
  background: #d890fa;
  -webkit-animation: widthMove5 2s ease-in-out;
}

.num {
  width: 17%;
  font-family: dig;
  padding-left: 4px;
}
/*左边底部*/
.biao-bb ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
}

.biao-bb ul li {
  width: 33.3%;
  text-align: center;
}

.shu {
  font-size: 26px;
  color: rgba(14, 253, 255, 1);
  font-family: dig;
  margin-top: 20px;
}
.zii {
  font-size: 12px;
  color: #fff;
}
/*右边部分*/
.right .right-top {
  padding-bottom: 20px;
  margin-top: 16px;
}

.right .right-top-box {
  border: 1.6px solid rgba(14, 253, 255, 0.5);
  min-height: 60px;
  position: relative;
  padding: 16px 10px;
}

.right-bottom-box h3 {
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
}

/*右下角表格*/
.right-bottom-box {
	border: 1.6px solid rgba(14, 253, 255, 0.5);
	min-height: 60px;
	position: relative;
	padding: 16px 10px;
}

.biaoge {
  min-height: 200px;
}

.right .right-top-box h3 {
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
}

.biaoge_list {
  overflow: hidden;
  position: relative;
}

.ul_list {
  overflow: hidden;
  position: relative;
}

.biaoge_list ul {
  display: flex;
  display: -webkit-flex;
  width: 100%;
}

.ul_con {
  border-bottom: 1.6px solid rgba(14, 253, 255, 0.5);
}

.biaoge_listIn{
  height: 100%;
}
.biaoge_list ul li {
  width: 20%;
  text-align: center;
  color: #fff;
  font-size: 12px;
  height: 4px;
  line-height: 40px;
}

.biaoge_list ul li:frist-child {
  text-align: left;
}
</style>
