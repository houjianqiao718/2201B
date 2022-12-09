<template>
  <div class="box">
    <el-button type="primary" class="button" @click="dialogFormVisible = true">添加角色</el-button>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-row v-for="item1 in scope.row.children" :key="item1.id">
            <div class="boax">
              <!-- 渲染一级权限 -->
              <el-col :span="5" class="left">
                <el-button type="primary" size="mini"
                  >{{ item1.authName }} <span class="del" @click="removeRightById(scope.row, item1.id)">X</span>
                </el-button>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 渲染二级和三级 -->
              <el-col :span="19" class="right">
                <el-row v-for="item2 in item1.children" :key="item2.id" class="col">
                  <el-col class="col-1">
                    <el-button type="success" size="mini"
                      >{{ item2.authName }} <span class="del" @click="removeRightById(scope.row, item2.id)">X</span>
                    </el-button>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18" class="col-2">
                    <el-button type="warning" size="mini" v-for="item3 in item2.children" :key="item3.id">
                      {{ item3.authName }}
                      <span class="del" @click="removeRightById(scope.row, item3.id)">X</span></el-button
                    >
                  </el-col>
                </el-row>
              </el-col>
            </div>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="roleName" label="角色描述"> </el-table-column>
      <el-table-column prop="roleDesc" label="角色名称"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" @click="handleEdit(scope.row, scope.$index)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index)"
            >删除</el-button
          >
          <el-button size="mini" type="warning" icon="el-icon-setting" @click="showSetRightDialog(scope.row)"
            >分配权限</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加模态框 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 编辑模态框 -->
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisible1">
      <el-form :model="ruleForm" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="roleName">
          <el-input v-model="ruleForm1.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm1.roleDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="editAdd">确定</el-button>
          <el-button @click="dialogFormVisible1 = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 分配权限对话框-->
    <el-dialog title="分配权限" :visible.sync="setRightDialogVisible" width="50%">
      <!-- 树形控件-->
      <el-tree
        :data="rightsList"
        :props="treeProps"
        show-checkbox
        node-key="id"
        default-expand-all
        :default-checked-keys="defKeys"
        ref="treeRef"
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setRightDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="allotRights">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      ruleForm: {
        id: 0,
        roleName: "",
        roleDesc: ""
      },
      rules: {
        roleName: [{ required: true, message: "请输入角色名称", trigger: "blur" }]
      },
      dialogFormVisible: false, // 添加模态框
      dialogFormVisible1: false, //编辑模态框
      ruleForm1: {
        id: 0,
        roleName: "",
        roleDesc: ""
      },
      index: -1,
      // 控制分配权限对话框的显示与隐藏
      setRightDialogVisible: false,
      // 所有权限的数据
      rightsList: [],
      // 树形控件的属性绑定对象
      treeProps: {
        label: "authName",
        children: "children"
      },
      // 默认选中的节点Id值数组
      defKeys: [],
      // 当前即将分配权限的角色id
      roleId: ""
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.request("/roles").then((res) => {
        this.tableData = res.data.data;
      });
    },
    // 添加功能
    submitForm() {
      if (this.ruleForm.roleName == "" || this.ruleForm.roleDesc == "") {
        return false;
      } else {
        this.tableData.push(this.ruleForm);
        this.$message.success("添加成功！");
        this.dialogFormVisible = false;
        this.ruleForm = {};
      }
    },
    // 编辑
    handleEdit(row, index) {
      console.log(row);
      this.dialogFormVisible1 = true;
      // 回填
      this.ruleForm1.roleName = row.roleName;
      this.ruleForm1.roleDesc = row.roleDesc;
      this.index = index;
    },
    // 确认修改
    editAdd() {
      this.tableData[this.index].roleName = this.ruleForm1.roleName;
      this.tableData[this.index].roleDesc = this.ruleForm1.roleDesc;
      this.dialogFormVisible1 = false;
    },
    // 删除角色
    handleDelete(index) {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 根据id删除对应的权限
    async removeRightById(role, rightId) {
      // 弹框提示用户是否要删除
      const confirmResult = await this.$confirm("此操作将永久删除该权限, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).catch((err) => err);
      if (confirmResult !== "confirm") {
        return this.$message.info("取消了删除");
      }
      const { data: res } = await this.$http.request("/delete", "roles/" + role.id + "/rights/" + rightId);
      if (res.meta.status !== 200) {
        return this.$message.error("权限删除失败");
      }
      this.$message.success("删除权限成功!");
      role.children = res.data;
    },

    /* 展示分配权限对话框 */
    async showSetRightDialog(role) {
      this.roleId = role.id;
      // 获取所有权限数据
      const { data: res } = await this.$http.request("/roles/:roleId/rights");
      if (res.meta.status !== 200) {
        return this.$message.error("获取权限数据失败");
      }
      // 获取到的权限数据
      this.rightsList = res.data;
      // 获得三级节点的id
      this.getLeafKeys(role, this.defKeys);
      this.setRightDialogVisible = true;
    },
    // 通过递归的形式，获得角色下所有三级权限的id，并保存到 defkeys 数组中
    getLeafKeys(node, arr) {
      // 如果当前 node 节点不包含children 属性，则是三级节点
      if (!node.children) {
        return arr.push(node.id);
      }
      node.children.forEach((item) => this.getLeafKeys(item, arr));
    },
    // 为角色分配权限
    async allotRights() {
      const keys = [...this.$refs.treeRef.getCheckedKeys(), ...this.$refs.treeRef.getHalfCheckedKeys()];
      const idstr = keys.join(",");
      const { data: res } = await this.$http.request(`roles/${this.roleId}/rights`, { rids: idstr }, "post");
      console.log(res);
      if (res.meta.status !== 200) {
        return this.$message.error("分配权限失败");
      }

      this.$message.success("分配权限成功");
      this.getList();
      this.setRightDialogVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.box button[data-v-6888ae73] {
  margin: 10px;
}
.box {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  button {
    margin-bottom: 20px;
  }
}
.boax {
  display: flex;
  align-items: center;
  border: 1px solid #eee;
}
.left {
  width: 20%;
  text-align: center;
}
.col {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #eee;
}
.col-1 {
  width: 20%;
  text-align: center;
}
.col-2 {
  padding-left: 15px;
}
.del {
  margin-left: 10px;
}
</style>
