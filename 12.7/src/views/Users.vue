<template>
  <div class="box">
    <el-row>
      <el-col :span="7">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-button class="btn" type="primary" @click="dialogFormVisible = true">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index"> </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="mobile" label="电话"> </el-table-column>
        <el-table-column prop="role_name" label="角色">炒鸡管理员</el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="handleEdit(scope.row, scope.$index)"
            ></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row)"></el-button>
            <el-button size="mini" type="warning" icon="el-icon-setting"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="info.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="info.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 添加模态框 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" autocomplete="off" :disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="ruleForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑模态框 -->
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisible1">
      <el-form :model="ruleForm1" ref="ruleForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="ruleForm1.username" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="ruleForm1.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="ruleForm1.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [],
      tableDatas: [],
      info: {
        query: "",
        pagenum: 1, //当前页码数
        pagesize: 2 //每页展示的个数
      },
      total: 0, //总数
      dialogFormVisible: false, // 添加模态框
      dialogFormVisible1: false, //编辑模态框
      ruleForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      ruleForm1: {
        id: "",
        username: "",
        email: "",
        mobile: ""
      },
      formLabelWidth: "100px",
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请正确输入密码", trigger: "blur" }]
      },
      disabled: false
    };
  },
  created() {
    this.usersList();
  },
  methods: {
    // 请求用户数据
    usersList() {
      this.$http.request("/users", "get").then((res) => {
        // console.log(res);
        if (res.data.meta.status == 200) {
          this.tableData = res.data.data.users;
          this.tableDatas = this.tableData;
          // 获取总数
          this.total = res.data.data.totalpage;
        } else {
          // 拿到错误信息
          this.$message.error(res.data.meta.msg);
        }
      });
    },
    // 添加功能
    submitForm() {
      // this.$refs.ruleForm.validate((valid) => {
      // if (valid) {
      // this.$http.request("/add", this.ruleForm, "post").then((res) => {
      //   console.log(res);
      //   if (res.data.meta.status == 201) {
      //     // 关闭弹框
      //     this.dialogFormVisible = false;
      //     //提示信息
      //     this.$message.success("添加成功！");
      //     // 更新列表
      //     this.usersList();
      //   }
      // });
      this.tableData.push(this.ruleForm);
      this.dialogFormVisible = false;
      this.ruleForm = {};
      // }
      //   else {
      //     this.$message.error("请正确输入信息！");
      //     return false;
      //   }
      // });
    },
    // 删除功能
    handleDelete(index) {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // this.$http.request(`users/${row.id}`, "delete").then((res) => {
          //   console.log(res);
          //   if (res.data.meta.status == 200) {
          //     this.$message({
          //       type: "success",
          //       message: "删除成功!"
          //     });
          //     // 更新列表
          //     // this.usersList();
          //   }
          // });
          this.tableData.splice(index, 1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 搜索
    search() {
      this.tableData = this.tableDatas.filter((item) => {
        return item.username.includes(this.input);
      });
      this.input = "";
    },
    // 每页显示条数发生改变时触发
    handleSizeChange(val) {
      this.info.pagesize = val;
      // this.usersList();
    },
    // 当前页码数发生改变时触发
    handleCurrentChange(val) {
      this.info.pagenum = val;
      // this.usersList();
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  .table {
    margin: 20px 0;
    height: 100%;
  }
}
.el-pagination {
  margin-top: 20px;
}
.btn {
  margin-left: 15px;
}
</style>
