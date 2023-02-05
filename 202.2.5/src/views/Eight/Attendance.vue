<!-- 考勤模块 -->
<template>
  <div class="Attendance">
    <div class="box">
      <div class="top">
        <!-- 头部 -->
        <el-card>
          <div class="flex">
            <span>
              <el-tag size="large"><i class="el-icon-info"></i> 有 0 条考勤审批尚未处理</el-tag>
            </span>
            <span class="shou">
              <el-button size="mini" type="danger" @click="$router.push('/Attimport')">导入</el-button>
              <el-button size="mini" type="warning">提醒</el-button>
              <el-button size="mini" type="primary" @click="Attsetupstatus = !Attsetupstatus">设置</el-button>
              <el-button size="mini" @click="$router.push('/Atthistory')">历史归档</el-button>
              <el-button size="mini" type="primary" @click="$router.push('/Atrtreport')">3月份报表</el-button>
            </span>
          </div>
        </el-card>
        <!-- 中间渲染部分 -->
        <el-card class="card">
          <div class="list">
            <div class="list-left">
              <b>部门：</b>
            </div>
            <div class="list-right">
              <span class="span" v-for="(item, index) in $store.state.Attendance.AttTop" :key="item.id">
                <el-checkbox v-model="item.checked" size="large" @change="fliter(item, index)" />
                {{ item.name }}</span
              >
            </div>
          </div>
          <div class="list">
            <div class="list-left">
              <b>考勤状态: </b>
            </div>
            <span style="margin-right: 10px">
              <span>
                <el-radio-group v-model="radio1" class="ml-4">
                  <el-radio label="1" size="large">正常</el-radio>
                  <el-radio label="2" size="large">旷工</el-radio>
                  <el-radio label="3" size="large">事假</el-radio>
                  <el-radio label="4" size="large">调休</el-radio>
                  <el-radio label="5" size="large">迟到</el-radio>
                  <el-radio label="6" size="large">早退</el-radio>
                </el-radio-group>
              </span>
            </span>
          </div>
        </el-card>
      </div>
      <!-- 表格 -->
      <div class="list">
        <el-card class="box-card" style="height: 100%">
          <el-table border :data="$store.state.Attendance.tableData" style="width: 100%">
            <el-table-column label="序号" type="index" width="60px" />
            <el-table-column prop="username" label="姓名" width="100x" />
            <el-table-column prop="workNumber" label="工号" />
            <el-table-column prop="departmentName" label="部门" />
            <el-table-column prop="mobile" label="手机" width="140" />
            <el-table-column prop="timeOfEntry" label="3/1"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/2"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/3"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/4"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/5"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/6"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/7"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/8"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/9"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/10"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/11"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/12"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/13"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/14"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/15"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/16"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/17"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/18"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/19"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/20"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/21"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/22"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/23"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/24"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/25"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/26"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/27"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/28"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/29"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/30"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/31"> 旷工</el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination
            :current-page="params.page"
            :page-size="params.pagesize"
            :page-sizes="[10, 20, 30, 50]"
            layout="total, prev, pager, next"
            :total="$store.state.Attendance.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-card>
      </div>
    </div>
    <!-- 考勤设置弹框 -->
    <Attsetup v-if="Attsetupstatus"></Attsetup>
  </div>
</template>
<script>
import Attsetup from "./Attsetup.vue"
export default {
  components: { Attsetup },
  data() {
    return {
      Attsetupstatus: false,
      params: {
        page: 1,
        pagesize: 10,
        total: 0
      },
      radio1: 0,
      checked: false
    }
  },
  methods: {
    getAttentop() {
      /*请求数据*/
      this.$store.dispatch("Attendance/getAttTop")
    },
    /*请求表格数据*/
    getTable() {
      this.$store.dispatch("Attendance/getTableData", this.params)
    },
    // 分页逻辑
    handleSizeChange(val) {
      this.params.pagesize = val
      this.getTable()
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getTable()
    },
    // 过滤筛选
    fliter(val, index) {
      this.$store.state.Attendance.AttTop[index].checked = !this.$store.state.Attendance.AttTop[index].checked
      if (val.checked == true) {
        this.$store.state.Attendance.tableData = this.$store.state.Attendance._tableData.filter(
          (ele) => ele.departmentName == val.name
        )
      } else {
        this.$store.state.Attendance.tableData = this.$store.state.Attendance._tableData
      }
    }
  },
  created() {
    this.getAttentop() //调用
    this.getTable()
  }
}
</script>
<style lang="scss" scoped>
.span {
  margin-right: 15px;
  margin-bottom: 10px;
  display: inline-block;
  font-size: 14px;
}
.card {
  margin-top: 10px;
}
.box {
  padding: 10px;
  background-color: #eceef1;
}
.list {
  margin-top: 10px;
}

.el-alert--info.is-light {
  border: 1px solid #439eff;
  background-color: #e6f7ff;
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
.el-pagination {
  margin-top: 20px;
  text-align: center;
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
.list {
  .list-left {
    width: 100px;
  }
  display: flex;
  align-items: center;
}
</style>
