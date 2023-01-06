<template>
  <div class="Approval">
    <div class="top">
      <!-- 头部 -->
      <Apptop></Apptop>
    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table ref="singleTableRef" :data="tableData" highlight-current-row>
        <el-table-column type="selection" width="40" />
        <el-table-column label="序号" type="index" width="60" />
        <el-table-column property="date" label="审批类型" sortable />
        <el-table-column property="name" label="申请人" sortable />
        <el-table-column property="address" label="当前审批人" sortable />
        <el-table-column property="time" label="审批发起时间" sortable />
        <el-table-column property="address1" label="审批状态" sortable />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="router.push('/Appsee')">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[10, 20, 30, 40]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="sizes, prev, pager, next, jumper"
          :total="40"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Apptop from './Apptop.vue'
import { Appuser } from '@/api/defind'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
components: { Apptop }

/*表格数据*/
const tableData: Appuser[] = [
  {
    date: '请假',
    name: '孙财',
    address: '文吉星 巴思慧',
    time: '2019-09-23 18:56',
    address1: '审批通过'
  },
  {
    date: '请假',
    name: '孙财',
    address: '乔海 董昊空',
    time: '2019-09-23 19:00',
    address1: '审批通过'
  },
  {
    date: '请假',
    name: '孙财',
    address: '董昊空',
    time: '2019-09-23 19:02',
    address1: '撤销'
  },
  {
    date: '加班',
    name: '孙财',
    address: '孙财',
    time: '2019-09-23 19:29',
    address1: '审批通过'
  },
  {
    date: '离职',
    name: '管理员',
    address: '管理员 乔海 董昊空',
    time: '2019-09-23 18:56',
    address1: '审批中'
  },
  {
    date: '离职',
    name: '管理员',
    address: '管理员 乔海 董昊空',
    time: '2019-09-23 18:56',
    address1: '审批中'
  },
  {
    date: '加班',
    name: '管理员',
    address: '孙财',
    time: '2019-09-23 18:56',
    address1: '审批中'
  }
]
/*分页*/
const pageSize4 = ref(10)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const currentPage4 = ref(1)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style lang="scss" scoped>
.table {
  margin: 0 15px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  .pagination {
    margin-top: 20px;
  }
}
</style>
