<template>
    <!-- 食品列表 -->
  <div class="food">
    <div class="con">
      <el-table :data="tableData" style="width: 100%" border stripe>
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-form label-position="left" inline class="demo-table-expand">
              <div class="content">
                <div class="left">
                  <el-form-item label="食品名称">
                    <span>{{ scope.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="食品 ID">
                    <span>{{ scope.row.category_id }}</span>
                  </el-form-item>
                  <el-form-item label="食品介绍">
                    <span>{{ scope.row.description }}</span>
                  </el-form-item>
                  <el-form-item label="食品评分">
                    <span>{{ scope.row.rating }}</span>
                  </el-form-item>
                  <el-form-item label="月销量">
                    <span>{{ scope.row.month_sales }}</span>
                  </el-form-item>
                </div>
                <div class="right">
                  <el-form-item label="餐馆名称">
                    <span>{{ scope.row.pinyin_name }}</span>
                  </el-form-item>
                  <el-form-item label="餐馆 ID">
                    <span>{{ scope.row.restaurant_id }}</span>
                  </el-form-item>
                  <el-form-item label="餐馆地址">
                    <span>{{ scope.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="食品分类">
                    <span>{{ scope.row.tips }}</span>
                  </el-form-item>
                </div>
              </div>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="食品名称" prop="name"> </el-table-column>
        <el-table-column label="食品介绍" prop="description"> </el-table-column>
        <el-table-column label="评分" prop="rating"> </el-table-column>
        <el-table-column label="操作" prop="desc"> 
          <template slot-scope="scope">
            <el-button size="mini" @click="edit(scope.$index)">编辑</el-button>
            <el-button size="mini" type="danger" @click="del(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
      <!-- 编辑弹出框 -->
      <el-dialog title="修改店铺消息" :visible.sync="dialogVisible" width="50%">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="食品名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="食品介绍">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="食品分类">
            <el-select v-model="form.category" placeholder="请选择"></el-select>
          </el-form-item>
          <el-form-item label="食品图片">
            <img :src="form.image_path" alt="" />
          </el-form-item>
        </el-form>
        <el-table :data="tableData1" style="width: 100%" border>
          <el-table-column prop="standard" label="规格"> </el-table-column>
          <el-table-column prop="packing" label="包装费"> </el-table-column>
          <el-table-column  prop="price" label="价格"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger" size="mini" @click="deltable(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="btn"><el-button type="primary" @click="specification = true">添加规格</el-button></div>
        <span slot="footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editOk">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 规格弹框开始 -->
      <el-dialog width="30%" title="添加规格" :visible.sync="specification" append-to-body >
        <el-form :model="addstandard">
          <el-form-item label="规格" label-width="100px">
            <el-input
              v-model="addstandard.standard" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="包装费" label-width="100px">
            <div class="div">
              <input type="text" v-model="addstandard.packing" />
              <button @click="addstandard.packing == 0 ? 0 : addstandard.packing--" >-</button ><button @click="addstandard.packing++">+</button>
            </div>
          </el-form-item>
          <el-form-item label="价格" label-width="100px">
            <div class="div">
              <input type="text" v-model="addstandard.price" /><button
                @click="addstandard.price == 0 ? 0 : addstandard.price--" > -</button ><button @click="addstandard.price++">+</button>
            </div>
          </el-form-item>
          <div class="btn-right">
            <el-button @click="specification = false">取消</el-button>
            <el-button type="primary" @click="standardadd">确定</el-button>
          </div>
        </el-form>
      </el-dialog>
      <!-- 规格弹框结束 -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      _tableData: "",
      pagenum: 1,
      pagesize: 10,
      total: 0,
      dialogVisible: false,
      form: {
        name: '',
        description: '',
        category: '',
        image_path: ''
      },
      index: 0,
      tableData1: [],
      specification: false, //规格弹框
      addstandard: {
        standard: "",
        packing: 0,
        price: 20,
      },
    };
  },
  created() {
    axios.get("https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined").then((res) => {
      console.log(res);
      this.tableData = res.data;
      this.total = res.data.length;
      this._tableData = JSON.stringify(res.data);
      this.pages();
    });
  },
  methods: {
    // 删除
    del(i){
      this.tableData.splice(i, 1);
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.pages();
    },
    handleCurrentChange(val) {
      this.pagenum = val;
      this.pages();
    },
    pages() {
      let arr = JSON.parse(this._tableData);
      this.tableData = arr.slice( (this.pagenum - 1) * this.pagesize, this.pagenum * this.pagesize );
    },
    // 点击编辑回填
    edit(i) {
      this.dialogVisible = true;
      this.index = i;
      this.form = this.tableData[i];
    },
    // 点击确定按钮修改成功
    editOk() {
      this.tableData[this.index] = this.form
      this.dialogVisible = false;
    },
    standardadd() {
      this.specification = false;
      this.tableData1.push(this.addstandard);
    },
    deltable(i){
      this.tableData1.splice(i,1)
    }
  }
};
</script>

<style lang="scss" scoped>
.food {
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
  height: 200px;
  background-color: #eef1f6;
}
.left, .right {
  padding-left: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
}
.el-form-item {
  // height: 16px;
  font-size: 14px;
  margin-bottom: 0;
}
.btn{
  text-align: center;
  margin-top: 15px;
}
</style>