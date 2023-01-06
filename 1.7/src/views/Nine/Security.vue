<template>
  <div class="Security">
    <!-- 头部 -->
    <Sectop></Sectop>
    <!-- 表格 -->
    <div class="table">
      <el-table ref="singleTableRef" :data="tableData" highlight-current-row @click="router.push('/Secdetail')">
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
import Sectop from './Sectop.vue'
import { ref, reactive } from 'vue'
import { Security } from '@/api/defind'
import { useRouter } from 'vue-router'
const router = useRouter()
components: {
  Sectop
}
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

/*表格数据*/
const tableData: Security[] = [
  {
    username: 'cgx',
    mobile: '13800000001',
    workNumber: '',
    departmentName: '',
    timeOfEntry: '2018-11-01',
    leaveTime: '---',
    providentFundCity: '北京',
    participatingInTheCity: '北京',
    socialSecurityBase: '10000',
    providentFundBase: '10000'
  },
  {
    username: '管理员',
    mobile: '13800000002',
    workNumber: '9002',
    departmentName: '总裁办',
    timeOfEntry: '2018-11-02',
    leaveTime: '---',
    providentFundCity: '北京',
    participatingInTheCity: '北京',
    socialSecurityBase: '10000',
    providentFundBase: '10000'
  },
  {
    username: '孙财',
    mobile: '13800000003',
    workNumber: '111',
    departmentName: '市场部',
    timeOfEntry: '2018-11-04',
    leaveTime: '---',
    providentFundCity: '北京',
    participatingInTheCity: '北京',
    socialSecurityBase: '3388',
    providentFundBase: '2277'
  },
  {
    username: '罗晓晓',
    mobile: '13800000004',
    workNumber: '1111',
    departmentName: '人事部',
    timeOfEntry: '2018-12-02',
    leaveTime: '---',
    providentFundCity: '北京',
    participatingInTheCity: '北京',
    socialSecurityBase: '5000',
    providentFundBase: '5000'
  },
  {
    username: '文吉星',
    mobile: '13400000001',
    workNumber: '1001',
    departmentName: '人事部',
    timeOfEntry: '2018-01-01',
    leaveTime: '---',
    providentFundCity: '北京',
    participatingInTheCity: '北京',
    socialSecurityBase: '5900',
    providentFundBase: '5900'
  },
  {
    username: '巴思慧',
    mobile: '13400000002',
    workNumber: '1002',
    departmentName: '人事部',
    timeOfEntry: '2018-01-01',
    leaveTime: '--',
    providentFundCity: '',
    participatingInTheCity: '',
    socialSecurityBase: '',
    providentFundBase: ''
  },
  {
    username: '乔海',
    mobile: '13500000001',
    workNumber: '2001',
    departmentName: '总裁办',
    timeOfEntry: '2018-01-01',
    leaveTime: '---',
    providentFundCity: '',
    participatingInTheCity: '',
    socialSecurityBase: '',
    providentFundBase: ''
  },
  {
    username: '董昊空',
    mobile: '13500000002',
    workNumber: '1002',
    departmentName: '总裁办',
    timeOfEntry: '2018-01-01',
    leaveTime: '---',
    providentFundCity: '',
    participatingInTheCity: '',
    socialSecurityBase: '',
    providentFundBase: ''
  },
  {
    username: '周乐天',
    mobile: '13500000003',
    workNumber: '2003',
    departmentName: '财务部',
    timeOfEntry: '2018-01-01',
    leaveTime: '---',
    providentFundCity: '',
    participatingInTheCity: '',
    socialSecurityBase: '',
    providentFundBase: ''
  },
  {
    username: '吕勇锐',
    mobile: '13600000001',
    workNumber: '0001',
    departmentName: '总裁办',
    timeOfEntry: '1992-08-04',
    leaveTime: '---',
    providentFundCity: '',
    participatingInTheCity: '',
    socialSecurityBase: '',
    providentFundBase: ''
  },
]
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
