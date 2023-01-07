<template>
  <!-- 工资模块 -->
  <div>
    <div class="box">
      <!-- 头部 -->
      <div class="top">
        <el-card class="box-card">
          <div>
            <div>
              <div class="flex">
                <span>
                  <el-tag size="large"
                    ><el-icon><InfoFilled /></el-icon> 本月：入职 离职 调薪
                    未定薪</el-tag
                  >
                </span>
                <span class="shou">
                  <span>设置</span>
                  <span>202003月报表</span>
                </span>
              </div>
            </div>
          </div>
        </el-card>
        <!-- 中间部分 -->
        <el-card class="box-card" style="margin-top: 10px">
          <div>
            <div>
              <b>聘用形式: </b>
              <span style="margin-right: 10px">
                <span>
                  <el-checkbox size="large" /><span class="text">正式</span>
                </span>
                <span>
                  <el-checkbox size="large" /><span class="text">非正式</span>
                </span>
              </span>
            </div>
            <div>
              <b>员工状态: </b>
              <span style="margin-right: 10px">
                <span>
                  <el-checkbox size="large" /><span class="text">在职</span>
                </span>
                <span>
                  <el-checkbox size="large" /><span class="text">离职</span>
                </span>
              </span>
            </div>
            <div>
              <b>部门：</b>
              <span
                v-for="item in tableDataList.tableDataList"
                :key="item.id"
                style="margin-right: 10px"
              >
                <el-checkbox size="large" @change="fliterName(item.name)" />
                <span class="text">{{ item.name }}</span></span
              >
            </div>
          </div>
        </el-card>
      </div>
      <!-- 表格 -->
      <div class="list">
        <el-card class="box-card" style="height: 100%">
          <el-table :data="tableData.tableData" style="width: 100%">
            <el-table-column label="序号" type="index" width="60px" />
            <el-table-column prop="username" label="姓名" width="100x" />
            <el-table-column prop="mobile" label="手机" width="140" />

            <el-table-column prop="workNumber" label="工号" />
            <el-table-column prop="workNumber" label="聘用形式" />
            <el-table-column prop="departmentName" label="部门" />
            <el-table-column prop="timeOfEntry" label="入职时间" width="230" />
            <el-table-column label="工资基数">
              <template #default="scope">
                {{ scope.row.currentBasicSalary + scope.row.currentPostWage }}
              </template>
            </el-table-column>
            <el-table-column prop="departmentName" label="津贴方案"
              >通用方案</el-table-column
            >
            <el-table-column label="操作" width="140">
              <template #default="scope">
                <el-button size="small" type="primary">调薪</el-button>
                <el-button
                  size="small"
                  @click="handleEdit(scope.$index, scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="page">
            <div class="right">
              <el-pagination
                v-model:current-page="data.page"
                v-model:page-size="data.pageSize"
                :page-sizes="[10, 20, 30, 50]"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { salary } from '@/api/Wages'
import { depaerMent } from '@/api/Wages'
import { reactive } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'
import * as TS from '@/api/defind'
// 分页
const data: TS.params = reactive({
  page: 1,
  pageSize: 10
})
let total = 0
let tableData: Array<object> = reactive({
  tableData: [],
  tableDataCope: []
})
let tableDataList: Array<object> = reactive({
  tableDataList: []
})

salary(data).then(async (res) => {
  console.log(res)
  total = res.data.data.total
  tableData.tableData = [...res.data.data.rows]
  tableData.tableDataCope = [...res.data.data.rows]
})

depaerMent().then((res) => {
  tableDataList.tableDataList = [...res.data.data.depts]
})
/*分页逻辑*/
const handleSizeChange = (val: number) => {
  data.pageSize = val
  salary(data).then(async (res) => {
    console.log(res)
    total = res.data.data.total
    tableData.tableData = [...res.data.data.rows]
    tableData.tableDataCope = [...res.data.data.rows]
  })
}
const handleCurrentChange = (val: number) => {
  data.page = val
  salary(data).then(async (res) => {
    console.log(res)
    total = res.data.data.total
    tableData.tableData = [...res.data.data.rows]
    tableData.tableDataCope = [...res.data.data.rows]
  })
}

const fliterName = (val: any) => {
  tableData.tableData = tableData.tableDataCope.filter(
    (ele: { departmentName: any }) => {
      return ele.departmentName == val
    }
  )
}
</script>

<style lang="scss" scoped>
.box {
  padding: 15px;
  height: calc(100% - 102px);
  background-color: #eceef1;
}
.list {
  margin-top: 10px;
}
.page {
  width: 100%;
  height: 30px;
  .right {
    float: right;
  }
}
.el-alert--info.is-light {
  border: 1px solid #439eff;
  background-color: #e6f7ff;
}
.fill {
  background-color: #e6f7ff;
  color: #000;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:nth-child(2) {
    span {
      margin-right: 20px;
    }
  }
}
.right {
  margin-top: 10px;
}
.shou:hover {
  cursor: pointer;
}
.box-card {
  font-size: 14px;
  .text {
    margin-left: 5px;
  }
  b {
    display: inline-block;
    width: 70px;
  }
  .el-checkbox {
    margin-left: 6px;
  }
}
</style>
