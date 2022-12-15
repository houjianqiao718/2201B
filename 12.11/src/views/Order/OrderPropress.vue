<template>
  <!-- 展示物流进度对话框 -->
  <el-dialog title="查看物流进度" :visible.sync="progressDialogVisible" width="50%">
    <!-- 时间线 -->
    <el-timeline>
      <el-timeline-item v-for="(activity, index) in progressInfo" :key="index" :timestamp="activity.time">{{
        activity.context
      }}</el-timeline-item>
    </el-timeline>
  </el-dialog>
</template>

<script>
import { STATUS } from "@/status/index.js"
export default {
		data() {
			return {
				// 物流进度对话框
				progressDialogVisible: false,
				// 物流进度
				progressInfo: [],
			}
		},
		methods: {
			init() {
				this.progressDialogVisible = true
			},
			// 物流请求
		},
  	created() {
      // 供测试的物流单号：1106975712662
      this.$http.request("/kuaidi/:id").then((res) => {
				console.log(res, "140")
				if (res.data.meta.status !== STATUS.SUCCESS) {
					this.$message.error("获取物流进度失败!")
				} else {
					this.$message.success("获取物流进度成功!")
				}
				this.progressInfo = res.data.data
      	this.progressDialogVisible = true
			})
    }
}
</script>
