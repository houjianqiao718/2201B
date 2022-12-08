<template>
  <div class="box">
    <el-row>
      <el-col :span="7">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" @click="dialogFormVisible = true" class="button">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" border style="width: 100%" class="table">
      <el-table-column label="#" type="index"> </el-table-column>
      <el-table-column label="商品名称" prop="goods_name" width="800"></el-table-column>
      <el-table-column label="商品价格" prop="goods_price"></el-table-column>
      <el-table-column label="商品重量" prop="goods_weight"></el-table-column>
      <el-table-column label="创建时间" prop="add_time"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" @click="handleEdit(scope.row)"></el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="info.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="info.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [],
      info: {
        query: "",
        pagenum: 1, //当前页码数
        pagesize: 2 //每页展示的个数
      },
      total: 0, //总数
      tableDatas: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.request("/goods", this.info).then((res) => {
        console.log(res);
        this.tableData = res.data.data.goods;
        this.tableDatas = JSON.stringify(res.data.data.goods);
        this.total = res.data.data.total;
        this.pages();
      });
    },
    // 每页显示条数发生改变时触发
    handleSizeChange(val) {
      this.info.pagesize = val;
      this.pages();
    },
    // 当前页码数发生改变时触发
    handleCurrentChange(val) {
      this.info.pagenum = val;
      this.pages();
    },
    // 分页逻辑
    pages() {
      let arr = JSON.parse(this.tableDatas);
      this.tableData = arr.slice((this.info.pagenum - 1) * this.info.pagesize, this.info.pagenum * this.info.pagesize);
    },
    // 搜索功能
    search() {
      let arr = JSON.parse(this.tableDatas);
      this.tableData = arr.filter((item) => {
        return item.goods_name.includes(this.input);
      });
      this.input = "";
    },
    // 删除功能
    handleDelete(index) {
      // console.log(index);
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(index, 1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
}
.table {
  margin-top: 20px;
}
.button {
  margin-left: 20px;
}
.el-pagination {
  margin-top: 15px;
}
</style>
