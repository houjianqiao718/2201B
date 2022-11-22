<template>
    <div class="box">
        <div class="admin">
            <h2>管理员设置</h2>
            <div>姓名: </div>
            <div>注册时间: </div>
            <div>管理员权限: </div>
            <div>管理员ID: </div>
            <div>更换头像: 
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
.box{
    display: flex;
    justify-content: center;
}
.admin{
    width: 800px;
    height: 600px;
    background-color: #f9fafc;
    padding: 0 20px;
    h2{
        text-align: center;
    }
    div{
        height: 60px;
        line-height: 60px;
    }
}
</style>