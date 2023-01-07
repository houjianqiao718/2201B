<template>
  <div class="box">
    <!-- 顶部 -->
    <div class="homepage">
      <div class="left">
        <img src="@/assets/touxiang.png" alt="" />
      </div>
      <div class="right">
        <h3>早安，{{ username }}，祝您开心每一天！</h3>
        <span>{{ username }} | 传智播客-总裁办</span>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="con">
      <div class="con-left">
        <!-- 日历 -->
        <calendar></calendar>
        <!-- 公告 -->
        <Notice></Notice>
      </div>
      <div class="con-right">
        <!-- 流程申请 -->
        <process></process>
        <!-- 便捷导航 -->
        <navigation></navigation>
        <!-- 帮助链接 -->
        <Helplink></Helplink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import calendar from './calendar.vue'
import Notice from './Notice.vue'
import process from './process.vue'
import navigation from './navigation.vue'
import Helplink from './Helplink.vue'
import { ref, reactive, toRefs } from 'vue'
import { getUsername } from '@/api/Homepage'
components: {
  calendar
}
components: {
  Notice
}
components: {
  process
}
components: {
  navigation
}
components: {
  Helplink
}
/*发起请求*/
const username = ref<string>('没落容克贵族')
getUsername().then((res) => {
  console.log(res)
  username.value = res.data.data.username
})
</script>

<style lang="scss" scoped>
.homepage {
  height: 120px;
  background-color: #fff;
  margin: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  .left {
    img {
      width: 80px;
      height: 80px;
    }
  }
  .right {
    margin-left: 15px;
    h3 {
      margin: 6px 0;
      font-weight: normal;
    }
    span {
      color: #aaa;
    }
  }
}
.con {
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  .con-left {
    width: 54%;
  }
  .con-right {
    width: 45%;
  }
}
</style>
