<template>
  <div class="roles">
    <el-button type="primary" @click="addUser">添加角色</el-button>
    <el-table :data="roles" border>
      <el-table-column width="55" type="expand">
        <template slot-scope="scope">
          <ul>
            <li class="first-leval" v-for="first in scope.row.children" :key="first.id">
              <!-- 渲染一级权限 -->
              <div class="first-tag">
                <el-button type="primary" closable>{{ first.authName }} <span class="del">X</span></el-button>
              </div>
              <ul class="second-ul">
                <!-- 渲染二级和三级 -->
                <li class="second-leval" v-for="second in first.children" :key="second.id">
                  <div class="second-tag">
                    <el-button type="success" closable>{{ second.authName }} <span class="del">X</span></el-button>
                  </div>
                  <ul class="third-leval">
                    <li v-for="third in second.children" :key="third.id">
                      <div class="third-tag">
                        <el-button closable type="warning">{{ third.authName }} <span class="del">X</span></el-button>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column label="#" type="index"></el-table-column>
      <el-table-column label="角色名称" prop="roleName"></el-table-column>
      <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
      <el-table-column label="操作" width="400">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" @click="exitRoles(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="del(scope.row.id, scope.$index)"
            >删除</el-button
          >
          <el-button size="mini" type="warning" icon="el-icon-setting" @click="rights(scope.row)">分配权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <AddrolesVue ref="AddrolesVue" @addrolse="addrolse" @edit="edit" />
  </div>
</template>
<script>
import { GetRoles, AddRoles, DelRoles, EditRoles } from "@/API/httpApi"
import AddrolesVue from "./Addroles.vue"
export default {
  components: {
    AddrolesVue
  },
  data() {
    return {
      roles: [],
      isExit: false,
      userId: ""
    }
  },
  created() {
    this.getlist()
  },
  methods: {
    /**获取列表数据 */
    getlist() {
      GetRoles().then((res) => {
        console.log(res)
        let { data } = res.data
        this.roles = data
      })
    },
    addUser() {
      this.$refs.AddrolesVue.open()
    },
    /**添加用户接口 */
    addrolse(obj) {
      AddRoles(obj).then(() => {})
      this.getlist()
    },
    /**编辑角色 */
    exitRoles(obj) {
      this.$refs.AddrolesVue.open(obj)
    },
    /**删除角色 */
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          })
          DelRoles(id).then(() => {})
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    /**编辑接口 */
    edit(obj) {
      EditRoles(obj).then(() => {})
      this.getlist()
    }
  }
}
</script>
<style lang="scss" scoped>
.roles {
  padding: 20px;
  margin: 20px;
  background: #fff;
}

ul {
  list-style: none !important;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .first-leval {
    width: 100%;
    height: 100%;
  }

  .first-tag {
    padding: 0 10px;
    border: 1px solid #eee;
    height: 72px;
    line-height: 72px;
    width: 15%;
    text-align: center;
  }

  .second-leval {
    min-width: 400px;
		padding: 10px 0;
    border: 1px solid #eee;
  }

  .second-tag {
    width: 20%;
    text-align: center;
  }

  .third-tag {
    margin-right: 20px;
  }

  .third-leval {
    display: flex;
		align-items: center;
    border-left: 1px solid #eee;
    padding-left: 15px;
		flex-wrap: wrap;
		width: 100%;
		.el-button{
				margin-bottom: 10px;
		}
  }
}
.del {
  margin-left: 10px;
}
.el-table{
	margin-top: 15px;
}
</style>


