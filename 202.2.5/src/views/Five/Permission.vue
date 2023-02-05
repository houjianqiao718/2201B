<template>
  <!-- 权限管理模块 -->
  <div class="Jurisdiction">
    <!-- 按钮 -->
    <div class="top">
      <el-button type="primary" size="mini" @click="AddPerm(1)">添加权限</el-button>
    </div>
    <!-- 表格 -->
    <el-table
      :data="$store.state.Permission.list"
      style="width: 100%"
      row-key="id"
      border
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="name" label="名称" align="center"> </el-table-column>
      <el-table-column prop="code" label="标识" align="center"> </el-table-column>
      <el-table-column prop="description" label="描述" align="center"> </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button link type="text" size="small" v-if="scope.row.pid == '0'" @click="AddPerm(2)">添加</el-button>
          <el-button link type="text" size="small" @click="AddPerm(scope.row)">编辑</el-button>
          <el-button link type="text" size="small" @click="delperm(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加权限弹出框 -->
    <AddPerm v-if="AddpermStatus" ref="AddPerm" @foo="foo"></AddPerm>
  </div>
</template>

<script>
import AddPerm from "./AddPerm.vue"
export default {
  components: { AddPerm },
  data() {
    return {
      AddpermStatus: false,
      // 表单数据
      form: {
        code: "",
        description: "",
        enVisible: "",
        id: "",
        name: "",
        pid: "",
        type: 1
      }
    }
  },
  created() {
    /*请求数据*/
    this.$store.dispatch("Permission/getList")
  },
  methods: {
    // 删除功能
    delperm(val) {
      console.log(val)
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store.commit("Permission/del", val)
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    /**添加 */
    AddPerm(info) {
      this.AddpermStatus = true
      this.$nextTick(() => {
        this.$refs.AddPerm.init(info)
      })
    },
    /**关闭模态框 */
    foo() {
      this.AddpermStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
.Jurisdiction {
  margin: 10px;
  box-sizing: border-box;
  .top {
    text-align: right;
    background-color: #fff;
    padding: 10px;
  }
  .el-table {
    margin-top: 10px;
    padding: 30px 20px;
    box-sizing: border-box;
  }
}
</style>
