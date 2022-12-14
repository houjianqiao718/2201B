<template>
  <div>
    <el-dialog title="分配角色" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form">
        <el-form-item label="当前的用户：">
          {{ form.username }}
        </el-form-item>
        <el-form-item label="当前的角色：">
          {{ form.role_name }}
        </el-form-item>
        <el-form-item label="分配新角色：">
          <el-select v-model="form.rid" placeholder="请选择">
            <el-option v-for="item in roleNameList" :key="item.id" :label="item.roleName" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
				<div class="dialog-btn">
					<el-button type="info" @click="dialogFormVisible = false">取消</el-button>
        	<el-button type="primary" @click="updateAdd">确定</el-button>
				</div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { GetRoles } from "@/API/httpApi"
export default {
  data() {
    return {
      dialogFormVisible: false, // 弹出框
      form: {},
      formLabelWidth: "120px",
      roleNameList: []
    }
  },
  methods: {
    /**打开对话框 */
    open(obj) {
      GetRoles().then((res) => {
        let { data } = res.data
        console.log(data)
        this.roleNameList = data
      })
      this.dialogFormVisible = true
      this.form = { ...obj }
    },
    /**关闭对话框 */
    close() {
      this.dialogFormVisible = false
	  	this.$message.success("分配角色成功！")
    },
    /**更新用户角色 */
    updateAdd() {
      this.$emit("updateAdd", { id: this.form.id, rid: this.form.rid })
      this.close()
    }
  },
}
</script>

<style lang='scss' scoped>
.dialog-btn{
	text-align: right;
}
.el-form-item{
	margin: 0;
}
</style>
