<template>
  <!-- 社保历史归档模块 -->
  <div class="Sechistory">
    <div class="box">
      <el-card class="box-card">
        <template #header>
          <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
            <span class="paddTit">全公司</span>
            <span>
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker v-model="value" type="date" placeholder="Pick a day" :size="size" />
              </div>
            </span>
          </div>
        </template>
        <div style="display: flex; align-items: center">
          <span style="padding: 10px 30px"> > </span>
          <span>
            <span style="padding: 10px 30px"
              >202001社保报表<span style="font-size: 10px; margin-left: 10px">未归档</span></span
            >
            <div style="padding: 10px 30px">社保报表</div>
          </span>
          <span style="width: 1px; height: 60px; background-color: #ccc; margin: 2px 10px"></span>
          <span style="padding: 10px 30px">
            <span style="color: #ccc">企业缴纳</span>
            <div style="margin-top: 10px; font-size: 20px">
              {{ history.enterprisePayment }}
            </div>
          </span>
          <span style="width: 1px; height: 60px; background-color: #ccc; margin: 2px 10px"></span>
          <span style="padding: 10px 30px">
            <span style="color: #ccc">个人缴纳</span>
            <div style="margin-top: 10px; font-size: 20px">
              {{ history.personalPayment }}
            </div>
          </span>
          <span style="width: 1px; height: 60px; background-color: #ccc; margin: 2px 10px"></span>
          <span style="padding: 10px 30px">
            <span style="color: #ccc">合计</span>
            <div style="margin-top: 10px; font-size: 20px">
              {{ history.total }}
            </div>
          </span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getHistory } from "@/api/Security"
export default {
  data() {
    return {
      history: {},
      size: "default",
      value: ""
    }
  },
  methods: {},
  created() {
    /*发起请求*/
    getHistory().then((res) => {
      console.log(res)
      this.history = { ...res.data.data[0] }
    })
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-color: #eaecef;
  padding: 10px;
}
.paddTit {
  margin-top: 10px;
  padding: 0 10px 10px;
  font-weight: 900;
  color: #409eff;
  border-bottom: 3px solid #409eff;
}
p {
  background-color: #eaecef;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  margin: 10px 0;
}
</style>
