<template>
  <div class="Security">
    <!-- 头部 -->
    <Sectop></Sectop>
    <!-- 表格 -->
    <div class="table">
      <el-table
        ref="singleTableRef"
        :data="tableData"
        highlight-current-row
        @click="router.push('/Secdetail')"
      >
        <el-table-column label="序号" type="index" width="60" />
        <el-table-column property="username" label="姓名" sortable />
        <el-table-column property="mobile" label="手机号" sortable />
        <el-table-column property="workNumber" label="工号" sortable />
        <el-table-column property="departmentName" label="部门" sortable />
        <el-table-column property="timeOfEntry" label="入职时间" sortable />
        <el-table-column property="leaveTime" label="离职时间" sortable />
        <el-table-column property="providentFundCity" label="社保城市" />
        <el-table-column property="participatingInTheCity" label="公积金城市" />
        <el-table-column property="socialSecurityBase" label="社保基数" />
        <el-table-column property="providentFundBase" label="公积金基数" />
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
import Sectop from './Sectop.vue'
import { ref, reactive } from 'vue'
import { Security } from '@/api/defind' // 校验
import { useRouter } from 'vue-router'
import { getSecurity } from '@/api/Security' // 接口
const router = useRouter()
components: {
  Sectop
}
/*分页*/
const pageSize = ref<number>(10)
const currentPage = ref<number>(1)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

/*表格数据*/
const tableData = reactive<Security[]>([])

/*请求数据*/
getSecurity({ page: currentPage.value, pageSize: pageSize.value }).then(
  (res) => {
    console.log(res)
    res.data.data.rows.forEach((item: Security) => {
      tableData.push(item)
    })
  }
)
</script>

<style lang="scss" scoped>
.Security {
  margin: 15px;
  height: 100%;
  box-sizing: border-box;
}
.table {
  margin-top: 15px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  .pagination {
    margin-top: 20px;
  }
}
</style>
