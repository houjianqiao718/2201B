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
        <el-table-column label="序号" type="index" width="70" />
        <el-table-column property="processName" label="审批类型" sortable width="150" />
        <el-table-column property="username" label="申请人" sortable width="150" />
        <el-table-column
          property="procCurrNodeUserName"
          label="当前审批人"
          sortable
          width="270"
        />
        <el-table-column property="time" label="审批发起时间" sortable width="220" >
          <template #default="scope">
            {{ new Date(scope.row.procApplyTime).toLocaleString() }}
          </template>
        </el-table-column>
        <el-table-column property="address1" label="审批状态" sortable>
          <template #default="scope">
            <span
              style="
                background-color: #00a854;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                display: inline-block;
              "
              v-if="scope.row.processState == 2"
            ></span>
            <span
              style="
                background-color: #8a771f;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                display: inline-block;
              "
              v-if="scope.row.processState == 1"
            ></span>
            <span
              style="
                background-color: #f04134;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                display: inline-block;
              "
              v-if="scope.row.processState == 3"
            ></span>
            <span
              style="
                background-color: #bfbfbf;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                display: inline-block;
              "
              v-if="scope.row.processState == 4"
            ></span>
            {{ scope.row.processState == 2 ? '审批通过' : '' }}
            {{ scope.row.processState == 4 ? '撤销' : '' }}
            {{ scope.row.processState == 1 ? '审批中' : '' }}
            {{ scope.row.processState == 3 ? '审批不通过' : '' }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click="router.push('/Appsee')"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
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
import { getApproval } from '@/api/Approval'
const router = useRouter()
components: {
  Apptop
}

/*表格数据*/
const tableData = reactive<Appuser[]>([])
/*分页*/
const pageSize = ref<number>(10)
const currentPage = ref<number>(1)

// 请求数据
getApproval({ page: currentPage.value, pageSize: pageSize.value }).then(
  (res) => {
    console.log(res)
    res.data.data.rows.forEach((item: Appuser) => {
      tableData.push(item)
    })
  }
)

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
