<template>
  <div>
    <!-- 卡片视图 -->
    <el-card>
      <el-row>
        <el-col :span="6">
          <el-input placeholder="请输入内容" v-model="input">
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 订单列表 -->
      <el-table :data="orderList" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="订单编号" prop="order_number"></el-table-column>
        <el-table-column label="订单价格" prop="order_price"></el-table-column>
        <el-table-column label="是否付款">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" v-if="scope.row.pay_status == 0">未付款</el-button>
            <el-button type="primary" size="mini" v-else>已付款</el-button>
          </template>
        </el-table-column>
        <el-table-column label="是否发货" prop="is_send"></el-table-column>
        <el-table-column label="下单时间" prop="create_time"></el-table-column>
        <el-table-column label="操作">
          <template slot>
            <el-button type="primary" size="mini" icon="el-icon-edit" @click="addressDialogVisible = true"></el-button>
            <el-button type="success" size="mini" icon="el-icon-location" @click="showProgressDialog"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10"
      ></el-pagination>
    </el-card>

    <!-- 编辑对话框 -->
    <el-dialog title="修改地址" :visible.sync="addressDialogVisible" width="50%">
      <el-form :model="addressForm" :rules="addressFormRules" ref="addressFormRef" label-width="100px">
        <el-form-item label="省市区/县" prop="address1">
          <el-cascader
            v-model="addressForm.address1"
            :options="cityData"
            :props="{ expandTrigger: 'hover' }"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="address2">
          <el-input v-model="addressForm.address2"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addressDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 展示物流进度对话框 -->
    <el-dialog title="查看物流进度" :visible.sync="progressDialogVisible" width="50%">
      <!-- 时间线 -->
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in progressInfo" :key="index" :timestamp="activity.time">{{
          activity.context
        }}</el-timeline-item>
      </el-timeline>
    </el-dialog>
  </div>
</template>

<script>
import cityData from "./citydata";

export default {
  data() {
    return {
      // 订单列表查询参数
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 5
      },
      total: 0,
      // 订单列表
      orderList: [],
      // 修改地址对话框
      addressDialogVisible: false,
      addressForm: {
        address1: [],
        address2: ""
      },
      addressFormRules: {
        address1: [{ required: true, message: "请选择省市区县", trigger: "blur" }],
        address2: [{ required: true, message: "请输入详细地址", trigger: "blur" }]
      },
      cityData,
      // 物流进度对话框
      progressDialogVisible: false,
      // 物流进度
      progressInfo: [],
      input: "" // 搜索
    };
  },
  created() {
    this.getOrderList();
  },
  methods: {
    //请求
    async getOrderList() {
      const { data: res } = await this.$http.request("/orders", {
        params: this.queryInfo
      });
      if (res.meta.status !== 200) {
        return this.$message.error("获取订单列表失败！");
      }
      // this.total = res.data.total;
      this.orderList = res.data.goods;
      this.orderList_ = JSON.stringify(res.data.goods);
      this.pages();
    },
    // 分页
    handleSizeChange(value) {
      this.queryInfo.pagesize = value;
      this.pages();
    },
    handleCurrentChange(value) {
      this.queryInfo.pagenum = value;
      this.pages();
    },
    // 封装分页
    pages() {
      let arr = JSON.parse(this.orderList_);
      this.orderList = arr.slice(
        (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize,
        this.queryInfo.pagenum * this.queryInfo.pagesize
      );
    },
    // 搜索功能
    search() {
      let arr = JSON.parse(this.orderList_);
      this.orderList = arr.filter((item) => {
        return item.order_number.includes(this.input);
      });
      this.input = "";
    },
    // 物流请求
    async showProgressDialog() {
      // 供测试的物流单号：1106975712662
      const { data: res } = await this.$http.request("/kuaidi/:id");
      console.log(res, "140");
      if (res.meta.status !== 200) {
        return this.$message.error("获取物流进度失败!");
      }
      this.progressInfo = res.data;
      this.progressDialogVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-cascader {
  width: 100%;
}
.el-card {
  margin: 10px 20px;
}
.el-pagination {
  margin: 15px;
}
.el-table {
  margin-top: 15px;
}
</style>
