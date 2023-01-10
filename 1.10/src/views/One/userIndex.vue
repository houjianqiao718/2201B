<template>
  <div class="user">
    <div class="content">
      <el-card class="box-card">
        <!-- 头部 -->
        <div class="card-top">
          <div class="img">
            <img src="http://ihrm-java.itheima.net/static/img/head.b6c3427.jpg" alt="" />
          </div>
          <div>
            <div style="font-size: 20px">早安，管理员，祝你开心每一天!</div>
            <div style="font-size: 16px; color: #ccc">管理员 | 传智博客-总裁办啊啊</div>
          </div>
        </div>
      </el-card>
      <!-- 下面部分 -->
      <div class="type" style="display: flex">
        <div class="type-left">
          <!-- 工作日历 -->
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>工作日历</span>
              </div>
            </template>
            <div>
              <el-calendar ref="calendar"> </el-calendar>
            </div>
          </el-card>
          <!-- 左边公告部分 -->
          <el-card class="box-card" style="margin-top: 10px; font-size: 14px">
            <template #header>
              <div class="card-header">
                <span>公告</span>
              </div>
            </template>
            <div style="display: flex; align-items: center">
              <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" style="width: 60px" />
              <div>
                <span class="span">朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
                <div style="margin-top: 10px">2018-07-21 15：21：38</div>
              </div>
            </div>
            <div style="padding: 0 60px 0 20px">
              <hr />
            </div>
            <div style="display: flex; align-items: center">
              <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" style="width: 60px" />
              <div>
                <span class="span">朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
                <div style="margin-top: 10px">2018-07-21 15：21：38</div>
              </div>
            </div>
            <div style="padding: 0 60px 0 20px">
              <hr />
            </div>
            <div style="display: flex; align-items: center">
              <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" style="width: 60px" />
              <div>
                <span class="span">朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
                <div style="margin-top: 10px">2018-07-21 15：21：38</div>
              </div>
            </div>
            <div style="padding: 0 60px 0 20px">
              <hr />
            </div>
          </el-card>
        </div>
        <!-- 右边导航部分 -->
        <div class="type-right" style="width: 45%; margin-left: 10px">
          <el-card class="box-card">
            <div class="card-header">
              <span class="right-top">流程申请</span>
            </div>
            <div class="top-btn">
              <button @click="applyStatus = !applyStatus">加班离职</button>
              <button @click="leaveStatus = !leaveStatus">请假调休</button>
              <button>审批列表</button>
              <button @click="$router.push('/my')">我的信息</button>
            </div>
          </el-card>
          <el-card class="box-card" style="margin-top: 10px">
            <div class="card-header">
              <span class="right-top">快速开始/便捷导航</span>
            </div>
            <div class="top-btn">
              <button>人事月报</button>
              <button>考勤查询</button>
              <button>考勤统计</button>
              <button>员工审核</button>
              <button>组织架构</button>
            </div>
          </el-card>
          <el-card class="box-card" style="margin-top: 10px">
            <div class="card-header">
              <span class="right-top">帮助链接</span>
            </div>
            <div class="right-img">
              <img src="@/assets/url.png" alt="" />
              <div>
                <span>入门指南</span>
                <span>在线帮助手册</span>
                <span>联系技术支持</span>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <p>copyright@ 2018 iHRM 系统 版权所有</p>
    <apply v-if="applyStatus" />
    <leave v-if="leaveStatus" />
  </div>
</template>

<script>
import apply from "./apply.vue"
import leave from "./leave.vue"

export default {
  data() {
    return {
      applyStatus: false,
      leaveStatus: false
    }
  },
  components: { apply, leave }
}
</script>

<style lang="scss" scoped>
.span {
  color: #f00;
}
.user {
  height: 100%;
}
p {
  background-color: #eaecef;
  width: 100%;
  margin: 0;
  text-align: center;
  padding-bottom: 10px;
}
.content {
  padding: 10px;
  background-color: #eaecef;
}
.img {
  width: 80px;
  height: 80px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
.el-card__body,
.el-main {
  padding: 10px;
}
.card-top {
  display: flex;
  div:nth-child(2) {
    padding-top: 10px;
  }
}
.type {
  margin-top: 10px;
}
.type-left {
  width: 55%;
}
.right-top {
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 6px solid #8a97f8;
}
.top-btn {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  button {
    padding: 10px 30px;
    margin-top: 10px;
    margin-right: 20px;
    border: 1px solid #ccc;
    color: rgba(67, 66, 66, 0.802);
    background-color: #ffffff;
    border-radius: 10px;
  }
}
.top-btn button:hover {
  cursor: pointer;
}
.right-img {
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
}
</style>
