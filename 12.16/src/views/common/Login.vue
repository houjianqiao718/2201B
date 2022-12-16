<template>
  <div class="box">
    <el-form :rules="rules" ref="ruleForm" :model="form" class="from">
      <img src="@/assets/图片.jpg" alt="" />
      <el-form-item label="" prop="name">
        <el-input
          v-model="form.name"
          prefix-icon="el-icon-user-solid"
        ></el-input>
      </el-form-item>
      <el-form-item label="" prop="pass">
        <el-input
          v-model="form.pass"
          show-password
          prefix-icon="el-icon-s-goods"
        ></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="onSubmit('ruleForm')">登录</el-button>
        <el-button type="info">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setToken } from "@/untils/auth"
import { login } from "@/untils/login"
export default {
  data() {
    return {
      form: {
        name: "",
        pass: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { pattern: "admin", message: "登录账号错误", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { pattern: "123456", message: "登录密码错误", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login({
            username: this.form.name,
            password: this.form.pass
          }).then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {
              this.$notify({
                title: res.data.meta.msg,
                message: `欢迎用户${res.data.data.username}`,
                duration: 2000
              })
              setToken(res.data.data.token)
              this.$router.push({ path: "/welcome" })
            } else {
              this.$notify({
                title: res.data.meta.msg,
                duration: 2000
              })
            }
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-image: url("@/assets/xxxx.gif");
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.from {
  width: 500px;
  background-color: #fff;
  padding: 80px 20px;
  border-radius: 8px;
  padding-bottom: 50px;
  position: relative;
  img {
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 150px;
    top: -100px;
    left: 190px;
    border: 10px solid #fff;
    box-shadow: 5px 5px 10px #ccc;
    background-color: #ccc;
  }
}
.btn {
  text-align: right;
}
</style>
