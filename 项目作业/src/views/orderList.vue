<template>
    <!-- 订单列表 -->
    <div class="order">
        <div class="con">
            <el-table :data="tableData" style="width: 97%" border stripe :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }">
            <el-table-column type="expand">
                <template slot-scope="scope">
                <el-form label-position="left" inline class="demo-table-expand">
                    <div class="content">
                    <div class="left">
                        <el-form-item label="用户名">
                        <span>{{ scope.row.basket.packing_fee.name}}</span>
                        </el-form-item>
                        <el-form-item label="收获地址">
                        <span>{{ scope.row.description }}</span>
                        </el-form-item>
                        <el-form-item label="店铺地址">
                        <span>{{ scope.row.phone }}</span>
                        </el-form-item>
                    </div>
                    <div class="right">
                        <el-form-item label="店铺名称">
                        <span>{{ scope.row.restaurant_name }}</span>
                        </el-form-item>
                        <el-form-item label="店铺 ID">
                        <span>{{ scope.row.restaurant_id }}</span>
                        </el-form-item>
                    </div>
                    </div>
                </el-form>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="订单 ID"></el-table-column>
            <el-table-column prop="basket.packing_fee.price" label="总价格"></el-table-column>
            <el-table-column prop="status_bar.title" label="订单状态"></el-table-column>
            </el-table>
        </div>
        <!-- 分页 -->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagenum"
            :page-sizes="[5, 8, 10, 20]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            tableData: [],
            _tableData: "",
            pagenum: 1,
            pagesize: 10,
            total: 0,
        }
    },
    created() {
        axios.get("https://elm.cangdu.org/bos/orders?offset=20&limit=20&restaurant_id=undefined").then((res) => {
            console.log(res);
            this.tableData = res.data;
            this.total = res.data.length;
            this._tableData = JSON.stringify(res.data);
            this.pages();
        })
    },
    methods: {
        handleSizeChange(val) {
            this.pagesize = val;
            this.pages();
        },
        handleCurrentChange(val) {
            this.pagenum = val;
            this.pages();
        },
        // 分页逻辑
        pages() {
            let arr = JSON.parse(this._tableData);
            this.tableData = arr.slice( (this.pagenum - 1) * this.pagesize, this.pagenum * this.pagesize );
        },
    }
}
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  background-color: #fff;
  padding: 20px;
}
.el-pagination {
  margin-top: 15px;
}
.con {
  margin-top: 20px;
}
.content {
  display: flex;
  height: 150px;
  background-color: #eef1f6;
}
.left, .right {
  padding-left: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  color: #aaa;
}
.el-form-item {
  height: 20px !important;
}
</style>