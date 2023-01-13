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
                  <el-tag size="large"><i class="el-icon-info"></i> 本月：入职 离职 调薪 未定薪</el-tag>
                </span>
                <span class="shou">
                  <el-button size="mini" type="danger" @click="$router.push('/setting')">设置</el-button>
                  <el-button size="mini" type="primary" @click="$router.push('/Wagreport')">202003月报表</el-button>
                </span>
              </div>
            </div>
          </div>
        </el-card>
        <!-- 中间部分 -->
        <el-card class="box-card" style="margin-top: 10px">
          <div class="card">
            <div>
              <b>聘用形式: </b>
              <span style="margin-right: 10px">
                <span> <el-checkbox size="large" /><span class="text">正式</span> </span>
                <span> <el-checkbox size="large" /><span class="text">非正式</span> </span>
              </span>
            </div>
            <div>
              <b>员工状态: </b>
              <span style="margin-right: 10px">
                <span> <el-checkbox size="large" /><span class="text">在职</span> </span>
                <span> <el-checkbox size="large" /><span class="text">离职</span> </span>
              </span>
            </div>
            <div>
              <b>部门：</b>
              <span class="span" v-for="(item, index) in WagesTop" :key="item.id">
                <el-checkbox size="large" v-model="item.checked" @change="fliter(item, index)" />
                <span class="text">{{ item.name }}</span></span
              >
            </div>
          </div>
        </el-card>
      </div>
      <!-- 表格 -->
      <div class="list">
        <el-card class="box-card" style="height: 100%">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="序号" type="index" width="60px" />
            <el-table-column prop="username" label="姓名" width="100x" />
            <el-table-column prop="mobile" label="手机" width="140" />

            <el-table-column prop="workNumber" label="工号" />
            <el-table-column prop="formOfEmployment" label="聘用形式" />
            <el-table-column prop="departmentName" label="部门" />
            <el-table-column prop="timeOfEntry" label="入职时间">
              <template slot-scope="scope">
                {{ scope.row.timeOfEntry.slice(0, 10) }}
              </template>
            </el-table-column>
            <el-table-column label="工资基数">
              <template #default="scope">
                {{ scope.row.currentBasicSalary + scope.row.currentPostWage }}
              </template>
            </el-table-column>
            <el-table-column prop="departmentName" label="津贴方案">通用方案</el-table-column>
            <el-table-column label="操作" width="180">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" v-if="scope.row.currentBasicSalary == null">定薪</el-button>
                <el-button size="mini" type="primary" v-else>调薪</el-button>
                <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            :current-page="params.page"
            :page-size="params.pageSize"
            :page-sizes="[10, 20, 30, 50]"
            layout="total, prev, pager, next"
            :total="params.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getWagetop, getWagetable } from "@/api/Wages"
export default {
  data() {
    return {
      // 分页
      params: {
        page: 1,
        pageSize: 10,
        total: 0,
        approvalsStateChecks: [],
        approvalsTypeChecks: [],
        departmentChecks: []
      },
      tableData: [], //表格数据
      //备份数据
      // eslint-disable-next-line vue/no-reserved-keys
      _tableData: [],
      WagesTop: [], //头部数据
      checked: false
    }
  },
  methods: {
    // 请求头部数据
    getWagetop() {
      getWagetop().then((res) => {
        console.log(res)
        this.WagesTop = res.data.data.depts
        this.WagesTop.forEach((ele) => {
          ele.checked = false
        })
      })
    },
    // 请求表格数据
    getWagetable() {
      getWagetable(this.params).then((res) => {
        console.log(res)
        this.tableData = res.data.data.rows
        this._tableData = res.data.data.rows
        this.params.total = res.data.data.total
      })
    },
    // 分页功能
    handleSizeChange(val) {
      this.params.pageSize = val
      this.getWagetable()
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getWagetable()
    },
    // 过滤筛选
    fliter(val, index) {
      this.WagesTop[index].checked = !this.WagesTop[index].checked
      if (val.checked == true) {
        this.tableData = this._tableData.filter((ele) => ele.departmentName == val.name)
      } else {
        this.tableData = this._tableData
      }
    }
  },
  created() {
    //调用
    this.getWagetop()
    this.getWagetable()
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
  div {
    margin-bottom: 10px;
  }
}
.box {
  padding: 10px;
  background-color: #eceef1;
}
.list {
  margin-top: 10px;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
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
