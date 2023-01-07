<template>
  <div class="Sectop">
    <!-- 头部 -->
    <div class="box">
      <el-tag size="large"
        ><el-icon><InfoFilled /></el-icon> 本月：社保在缴 公积金在缴 增员 减员
        入职 离职</el-tag
      >
      <div class="title">
        <span @click="router.push('/Sechistory')">历史归档</span>
        <span class="text" @click="router.push('/SecMonreport')">202002月报表</span>
      </div>
    </div>
    <div class="bottom">
      <div class="list">
        <span class="h5">部门：</span>
        <ul>
          <li v-for="item in Sectop" :key="item.id">
            <el-checkbox v-model="checked1" size="large" />
            <span class="span">{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="list">
        <span class="h5">社保城市：</span>
        <ul>
          <li>
            <el-checkbox size="large" />
            <span class="span">北京</span>
          </li>
        </ul>
      </div>
      <div class="list">
        <span class="h5">公积金城市：</span>
        <ul>
          <li>
            <el-checkbox size="large" />
            <span class="span">北京</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { InfoFilled } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import { getSectop } from '@/api/Security' // 接口
import { Sectopapi } from '@/api/defind'
import { useRouter } from 'vue-router'
const router = useRouter()
const checked1 = ref(false)

/*请求数据*/
const Sectop = reactive<Sectopapi[]>([])
getSectop().then((res) => {
  console.log(res)
  res.data.data.depts.forEach((item: Sectopapi) => {
    Sectop.push(item)
  })
})
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
      .h5 {
        display: inline-block;
        margin: 0;
        width: 110px;
        font-size: 14px;
        font-weight: bold;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-right: 20px;
          font-size: 14px;
          .span {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
