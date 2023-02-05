<!-- 社保模块 -->
<template>
  <div class="Security">
    <!-- 头部 -->
    <div class="Sectop">
      <!-- 顶部 -->
      <div class="box">
        <el-tag size="large"><i class="el-icon-warning"></i> 本月：社保在缴 公积金在缴 增员 减员 入职 离职</el-tag>
        <div class="title">
          <el-button size="mini" type="danger" @click="$router.push('/Sechistory')">历史归档</el-button>
          <el-button size="mini" type="primary" class="text" @click="$router.push('/SecMonreport')"
            >202002月报表</el-button
          >
        </div>
      </div>
      <!-- 中间渲染部分 -->
      <div class="bottom">
        <div class="list">
          <span class="h5">部门：</span>
          <ul>
            <li v-for="(item, index) in $store.state.Security.Sectop" :key="item.id">
              <el-checkbox v-model="item.checked" size="large" @change="fliter(item, index)" />
              <span class="span">{{ item.name }}</span>
            </li>
          </ul>
        </div>
        <div class="list">
          <h5>社保城市：</h5>
          <ul>
            <li>
              <el-checkbox size="large" />
              <span class="span">北京</span>
            </li>
          </ul>
        </div>
        <div class="list">
          <h5>公积金城市：</h5>
          <ul>
            <li>
              <el-checkbox size="large" />
              <span class="span">北京</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table ref="singleTableRef" :data="$store.state.Security.tableData" highlight-current-row>
        <el-table-column label="序号" type="index" width="60" />
        <el-table-column property="username" label="姓名" sortable />
        <el-table-column property="mobile" label="手机号" sortable />
        <el-table-column property="workNumber" label="工号" sortable />
        <el-table-column property="departmentName" label="部门" sortable />
        <el-table-column property="timeOfEntry" label="入职时间" sortable />
        <el-table-column property="leaveTime" label="离职时间" sortable>
          <template slot-scope="scope">
            {{ scope.row.leaveTime == null ? "---" : "leaveTime" }}
          </template>
        </el-table-column>
        <el-table-column property="providentFundCity" label="社保城市" />
        <el-table-column property="participatingInTheCity" label="公积金城市" />
        <el-table-column property="socialSecurityBase" label="社保基数" />
        <el-table-column property="providentFundBase" label="公积金基数" />
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="$router.push({ name: 'Secdetail', params: { id: scope.row.id } })"
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :total="$store.state.Security.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.currentPage"
        :page-size="params.pageSize"
        :page-sizes="[5, 10, 20, 30]"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {
        pageSize: 10,
        page: 1,
        total: 0
      },
      // eslint-disable-next-line vue/no-reserved-keys
      _tableData: [],
      /*头部数据*/
      Sectop: [],
      checked: false
    }
  },
  methods: {
    getTop() {
      /*请求数据*/
      this.$store.dispatch("Security/getSectop")
    },
    getTable() {
      /*请求表格数据*/
      this.$store.dispatch("Security/getTableData", this.params)
    },
    // 分页功能
    handleSizeChange(val) {
      this.params.pageSize = val
      this.getTable()
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getTable()
    },
    // 过滤筛选
    fliter(val, index) {
      this.$store.state.Security.Sectop[index].checked = !this.$store.state.Security.Sectop[index].checked
      if (val.checked == true) {
        this.$store.state.Security.tableData = this.$store.state.Security._tableData.filter(
          (ele) => ele.departmentName == val.name
        )
      } else {
        this.$store.state.Security.tableData = this.$store.state.Security._tableData
      }
    }
  },
  created() {
    this.getTable()
    this.getTop()
  }
}
</script>

<style lang="scss" scoped>
.Sectop {
  .box {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    .title {
      font-size: 14px;
      .text {
        margin-left: 15px;
      }
    }
  }
  .bottom {
    padding: 20px 15px;
    box-sizing: border-box;
    margin-top: 10px;
    background-color: #fff;
    .list {
      display: flex;
      align-items: center;
      .h5 {
        display: inline-block;
        margin: 0;
        width: 150px;
        font-size: 14px;
        font-weight: bold;
      }
      h5 {
        margin: 10px 0;
        width: 90px;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-right: 20px;
          font-size: 14px;
          margin-bottom: 10px;
          .span {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
.el-pagination {
  margin-top: 15px;
  text-align: center;
}
.Security {
  margin: 10px;
  height: 100%;
  box-sizing: border-box;
}
.table {
  margin-top: 10px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
}
</style>
