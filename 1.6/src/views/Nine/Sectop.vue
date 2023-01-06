<template>
  <div class="Sectop">
    <!-- 头部 -->
    <div class="box">
      <el-tag size="large"
        ><el-icon><InfoFilled /></el-icon> 本月：社保在缴 公积金在缴 增员 减员
        入职 离职</el-tag
      >
      <div class="title">
        <span>历史归档</span>
        <span class="text">202002月报表</span>
      </div>
    </div>
    <div class="bottom">
      <div class="list">
        <h5>部门：</h5>
        <ul>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>总裁办</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>行政部</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>人事部</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>财务部</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>技术部</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>运营部</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>市场部</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>财务核算部</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>Java研发部</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>Python研发部 </span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>Pht研发部</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>北京事业部</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>上海事业部</span>
          </li>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>寄中寄</span>
          </li>
        </ul>
      </div>
      <div class="list">
        <h5>社保城市：</h5>
        <ul>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>北京</span>
          </li>
        </ul>
      </div>
      <div class="list">
        <h5>公积金城市：</h5>
        <ul>
          <li>
            <el-checkbox v-model="checked1" size="large" />
            <span>北京</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { InfoFilled } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
const checked1 = ref(false)
</script>

<style lang="scss" scoped>
.Sectop {
  padding: 20px;
  background-color: #fff;
  .box {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 14px;
      .text {
        margin-left: 15px;
      }
    }
  }
  .bottom {
    margin-top: 20px;
    .list {
      display: flex;
      align-items: center;
      h5{
        margin: 0;
        width: 100px;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-right: 20px;
          font-size: 14px;
          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
