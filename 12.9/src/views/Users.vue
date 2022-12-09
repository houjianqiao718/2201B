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
        <el-table-column prop="role_name" label="角色">超级管理员</el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="changState(scope.$index)"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit" @click="handleEdit(scope.row)"></el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(scope.row, scope.$index)"
            ></el-button>
            <el-button
              size="mini"
              type="warning"
              icon="el-icon-setting"
              @click="assignRoles(scope.row, scope.$index)"
            ></el-button>
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
        <el-button type="primary" @click="editAdd">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 角色弹出框 -->
    <el-dialog title="分配角色" :visible.sync="dialogVisible11" width="40%">
      <div>
        <p>
          <span>当前的用户：</span>
          <span>{{ rolesForm.username }}</span>
        </p>
        <p>
          <span>当前的角色：</span>
          <span>{{ rolesForm.role_name }}</span>
        </p>
        <p>
          <span>分配新角色：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.roleName" :label="item.roleName" :value="item.roleName">
            </el-option>
          </el-select>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible11 = false">取 消</el-button>
        <el-button type="primary" @click="rolesOk">确 定</el-button>
      </span>
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
      disabled: false,
      id: 0,
      dialogVisible11: false, //分配角色
      options: [],
      value: "",
      rolesIndex: -1, //分配角色下标
      rolesForm: {
        //分类角色数据
        username: "",
        role_name: ""
      }
    };
  },
  created() {
    this.usersList();
    this.$http.request("/roles", {}, "get").then((res) => {
      this.options = res.data.data;
    });
  },
  methods: {
    // 请求用户数据
    usersList() {
      this.$http.request("/users", this.info, "get").then((res) => {
        console.log(res);
        if (res.data.meta.status == 200) {
          this.tableData = res.data.data.users;
          this.tableDatas = JSON.stringify(res.data.data.users);
          // 获取总数
          this.total = res.data.data.total;
        } else {
          // 拿到错误信息
          this.$message.error(res.data.meta.msg);
        }
      });
    },
    // 添加功能
    submitForm() {
      this.tableData.push(...this.ruleForm);
      this.dialogFormVisible = false;
      this.ruleForm = {};
      this.$message.success("添加成功！");
    },
    // 删除功能
    handleDelete(index) {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
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
      let arr = JSON.parse(this.tableDatas);
      this.tableData = arr.filter((item) => {
        return item.username.includes(this.input);
      });
      this.input = "";
    },
    // 每页显示条数发生改变时触发
    handleSizeChange(val) {
      this.info.pagesize = val;
      this.pages();
    },
    // 当前页码数发生改变时触发
    handleCurrentChange(val) {
      this.info.pagenum = val;
      this.pages();
    },
    // 分页逻辑
    pages() {
      let arr = JSON.parse(this.tableDatas);
      this.tableData = arr.slice((this.info.pagenum - 1) * this.info.pagesize, this.info.pagenum * this.info.pagesize);
    },
    // 编辑功能
    handleEdit(row) {
      this.dialogFormVisible1 = true;
      // console.log(row);
      this.ruleForm1 = row; //赋值
      this.id = row.id;
    },
    // 确定修改
    editAdd() {
      this.dialogFormVisible1 = false; //关闭模态框
      this.tableData[this.id] = this.ruleForm1; //赋值
    },
    // 分配角色
    assignRoles(val, i) {
      this.dialogVisible11 = true;
      this.rolesIndex = i;
      this.rolesForm = val;
    },
    // 确定分配
    rolesOk() {
      this.tableData[this.rolesIndex].roleName = this.value;
      this.dialogVisible11 = false;
      this.$message.success("更新角色成功");
    },
    // 状态切换
    changState(i) {
      console.log(this.tableData[i].mg_state);
      this.$message.success("切换成功");
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
