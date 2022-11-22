<template>
    <div class="login">
        <div class="box">
            <h1>elm后台管理系统</h1>
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.usersname" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-button type="primary" @click="login">登陆</el-button>
                <div class="text">
                    <h5>温馨提示：</h5>
                    <h5>未登录的新用户,自动注册</h5>
                    <h5>注册过的用户可凭账号密码登录</h5>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                usersname: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            if (this.form.usersname !== '' && this.form.usersname !== "") {
                this.$router.push('/manage')
            }else {
                return false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100%;
    background-color: #324057;
    display: flex;
    justify-content: center;
    color: #fff;
    text-align: center;
    .box{
        margin-top: 170px;
        .el-form{
            background-color: #fff;
            width: 400px;
            height: 260px;
            padding: 20px;
            border-radius: 6px;
            .el-button{
                width: 100%;
            }
            .text{
                color: rgb(243, 23, 23);
                margin-top: 40px;
                h5{
                    margin: 0;
                }
            }
        }
    }
}
</style>