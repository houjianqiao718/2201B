<template>
  <div class="home">
    <div class="login">
      <!-- 标题 -->
      <h1>iHRM后台登录系统</h1>
      <!-- 表单 -->
      <el-form class="from" ref="ruleFormRef" :model="ruleForm" :rules="rules">
        <el-form-item prop="username">
          <el-input
            placeholder="username"
            v-model="ruleForm.username"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="password"
            show-password
            v-model="ruleForm.password"
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-button class="btn" type="primary">登录</el-button>
        <div class="text">还没有账号？立即注册</div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import * as TS from "@/common/defind";
import type { FormRules } from "element-plus";
import { User, Lock } from "@element-plus/icons-vue";

/*校验账号密码*/
const ruleForm = reactive<TS.LoginForm>({
  username: "",
  password: "",
});
/*表单验证*/
const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
  ],
});
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  background-image: url(http://ihrm-java.itheima.net/static/img/login.c75bab6.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}
.login {
  padding: 10px;
  margin: 220px auto;
  .from {
    margin-top: 20px;
    .btn {
      width: 100%;
    }
    .text{
      font-weight: 900;
      font-size: 12px;
      text-align: center;
      margin-top: 20px;
      color: #fff;
    }
  }
}
h1 {
  margin: 0;
  color: #fff;
  font-family: "宋体";
  font-size: 40px;
}
</style>
