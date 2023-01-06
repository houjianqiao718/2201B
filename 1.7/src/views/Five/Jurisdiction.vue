<template>
  <div class="Jurisdiction">
    <!-- 按钮 -->
    <div class="top">
      <Addmenu></Addmenu>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="菜单名称">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><FolderOpened /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="权限标识">
        <template #default="scope">
          <el-popover
            effect="light"
            trigger="hover"
            placement="top"
            width="auto"
          >
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>code: {{ scope.row.code }}</div>
            </template>
            <template #reference>
              <div>{{ scope.row.code }}</div>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="描述">
        <template #default="scope">
          <el-popover
            effect="light"
            trigger="hover"
            placement="top"
            width="auto"
          >
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>code: {{ scope.row.code }}</div>
            </template>
            <template #reference>
              <div>{{ scope.row.description }}</div>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="dialogVisible = true">添加权限点</el-button>
          <el-button link type="primary" size="small">查看api权限</el-button>
          <el-button link type="primary" size="small">查看</el-button>
          <el-button link type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加权限弹框 -->
    <el-dialog v-model="dialogVisible" title="编辑权限" width="40%">
      <el-form :model="form" label-width="100px">
        <el-form-item label="权限名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="权限标识">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="权限描述">
          <el-input v-model="form.description" />
        </el-form-item>
        <el-form-item label="企业可见">
          <span>不可见</span>
          <el-switch v-model="value1" />
          <span>可见</span>
        </el-form-item>
        <el-form-item label="按钮样式">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="按钮icon">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="按钮状态">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { FolderOpened } from '@element-plus/icons-vue'
import Addmenu from './Addmenu.vue'
import { ref, reactive } from 'vue'
import * as TS from '@/api/defind'
import { User } from '@/api/defind';
import { permission } from '@/api/permission'
const dialogVisible = ref(false)  //控制弹出框
const value1 = ref(true)  // 控制开关
components: {
  Addmenu
}
// 表单数据
const form = reactive<TS.Form>({
  name: '',
  code: '',
  description: ''
})

/**表格数据*/
const tableData: User[] = [
  {
    name: 'SAAS企业管理',
    code: 'saas-clients',
    description: '用户管理菜单'
  },
  {
    name: '员工管理',
    code: 'employees',
    description: '用户管理菜单'
  },
  {
    name: '组织架构',
    code: 'departments',
    description: '组织架构菜单'
  },
  {
    name: '公司设置',
    code: 'settings',
    description: '公司设置菜单'
  },
  {
    name: '权限管理',
    code: 'permissions',
    description: '权限菜单'
  },
  {
    name: '社保',
    code: 'saaaa',
    description: '社保菜单aaaa'
  },
  {
    name: '考勤',
    code: 'attendances',
    description: '考勤'
  },
  {
    name: '工资',
    code: 'salarys',
    description: '工资模块'
  },
  {
    name: '员工自助',
    code: 'user12345',
    description: '员工自助'
  },
  {
    name: '审批',
    code: 'approvals',
    description: '审批'
  },
  {
    name: 'aaaa',
    code: 'bbbb',
    description: 'cccc'
  },
  {
    name: '123',
    code: '123',
    description: '123'
  }
]

/*请求数据*/
permission().then((res)=> {
  console.log(res);

})
</script>

<style lang="scss" scoped>
.Jurisdiction {
  height: 100%;
  margin: 15px;
  background-color: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  .top {
    text-align: right;
  }
  .el-table {
    margin-top: 20px;
  }
}
</style>
