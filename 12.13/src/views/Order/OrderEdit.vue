<template>
  <!-- 编辑对话框 -->
  <el-dialog title="修改地址" :visible.sync="addressDialogVisible" width="40%">
    <el-form :model="addressForm" :rules="addressFormRules" ref="addressFormRef" label-width="100px">
      <el-form-item label="省市区/县" prop="address1">
        <el-cascader
          v-model="addressForm.address1"
          :options="cityData"
          :props="{ expandTrigger: 'hover' }"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="详细地址" prop="address2">
        <el-input v-model="addressForm.address2"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="addressDialogVisible = false">取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import cityData from "./citydata"
export default {
	data() {
		return {
			// 修改地址对话框
      addressDialogVisible: false,
      addressForm: {
        address1: [],
        address2: ""
      },
      addressFormRules: {
        address1: [{ required: true, message: "请选择省市区县", trigger: "blur" }],
        address2: [{ required: true, message: "请输入详细地址", trigger: "blur" }]
      },
      cityData,
		}
	},
		methods: {
			init() {
				this.addressDialogVisible = true
				this.$message.success("获取修改框成功！")
			},
		},
}
</script>

<style lang="scss" scoped>
</style>
