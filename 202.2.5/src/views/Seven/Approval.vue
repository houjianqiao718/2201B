<template>
  <!-- 审批模块 -->
  <div class="Approval">
    <div class="top">
      <!-- 头部 -->
      <Apptop></Apptop>
    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table ref="singleTableRef" :data="$store.state.Approval.tableData" highlight-current-row>
        <el-table-column type="selection" width="40" />
        <el-table-column label="序号" type="index" width="70" />
        <el-table-column property="processName" label="审批类型" sortable width="100" />
        <el-table-column property="username" label="申请人" sortable width="100" />
        <el-table-column property="procCurrNodeUserName" label="当前审批人" sortable width="270" />
        <el-table-column property="time" label="审批发起时间" sortable width="180">
          <template #default="scope">
            {{ new Date(scope.row.procApplyTime).toLocaleString() }}
          </template>
        </el-table-column>
        <el-table-column property="address1" label="审批状态" sortable>
          <template #default="scope">
            <span
              style="background-color: #00a854; width: 6px; height: 6px; border-radius: 50%; display: inline-block"
              v-if="scope.row.processState == 2"
            ></span>
            <span
              style="background-color: #8a771f; width: 6px; height: 6px; border-radius: 50%; display: inline-block"
              v-if="scope.row.processState == 1"
            ></span>
            <span
              style="background-color: #f04134; width: 6px; height: 6px; border-radius: 50%; display: inline-block"
              v-if="scope.row.processState == 3"
            ></span>
            <span
              style="background-color: #bfbfbf; width: 6px; height: 6px; border-radius: 50%; display: inline-block"
              v-if="scope.row.processState == 4"
            ></span>
            {{ scope.row.processState == 2 ? "审批通过" : "" }}
            {{ scope.row.processState == 4 ? "撤销" : "" }}
            {{ scope.row.processState == 1 ? "审批中" : "" }}
            {{ scope.row.processState == 3 ? "审批不通过" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="$router.push({ name: 'Appsee', params: { id: scope.row.processId } })"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          :current-page="params.currentPage"
          :page-size="params.pageSize"
          :page-sizes="[5, 10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="$store.state.Approval.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Apptop from "./Apptop.vue"
export default {
  components: { Apptop },
  data() {
    return {
      /*分页*/
      params: {
        page: 1,
        pageSize: 10,
        total: 0,
        year: 2018
      }
    }
  },
  created() {
    this.getApp() //调用
  },
  methods: {
    getApp() {
      /*请求数据*/
      this.$store.dispatch("Approval/getTableData", this.params)
    },
    /*分页*/
    handleSizeChange(val) {
      this.params.pageSize = val
      this.getApp()
    },
    handleCurrentChange(val) {
      this.params.currentPage = val
      this.getApp()
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  margin: 0 10px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
