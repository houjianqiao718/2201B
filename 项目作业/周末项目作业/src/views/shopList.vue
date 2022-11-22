<template>
  <div>
    <!-- 商品列表 -->
    <div class="users">
      <div class="con">
        <el-table :data="tableData" style="width: 97%" border stripe :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }">
          <el-table-column type="expand">
            <template slot-scope="scope">
              <el-form label-position="left" inline class="demo-table-expand">
                <div class="content">
                  <div class="left">
                    <el-form-item label="店铺名称">
                      <span>{{ scope.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="店铺介绍">
                      <span>{{ scope.row.description }}</span>
                    </el-form-item>
                    <el-form-item label="联系电话">
                      <span>{{ scope.row.phone }}</span>
                    </el-form-item>
                    <el-form-item label="销售量">
                      <span>{{ scope.row.rating_count }}</span>
                    </el-form-item>
                  </div>
                  <div class="right">
                    <el-form-item label="店铺地址">
                      <span>{{ scope.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                      <span>{{ scope.row.id }}</span>
                    </el-form-item>
                    <el-form-item label="评分">
                      <span>{{ scope.row.rating }}</span>
                    </el-form-item>
                    <el-form-item label="分类">
                      <span>{{ scope.row.category }}</span>
                    </el-form-item>
                  </div>
                </div>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="#" type="index"></el-table-column>
          <el-table-column prop="name" label="店铺名称"></el-table-column>
          <el-table-column prop="address" label="店铺地址" width="600"></el-table-column>
          <el-table-column prop="description" label="店铺介绍"></el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button size="mini" @click="edit(scope.$index)">编辑</el-button>
              <el-button size="mini" @click="$router.push('/addGoods')">添加食品</el-button>
              <el-button type="danger" size="mini" @click="del(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
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
      <!-- 编辑弹出框 -->
      <el-dialog title="编辑" :visible.sync="dialogVisible" width="50%">
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="店铺名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="店铺地址">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="店铺介绍">
              <el-input v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="店铺分类">
              <el-select v-model="form.category" placeholder="请选择"></el-select>
            </el-form-item>
            <el-form-item label="商铺图片">
              <img :src="form.image_path" alt="" />
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editOk">确 定</el-button>
        </span>
      </el-dialog>
    </div>
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
          dialogVisible: false,
          form: {
            name: "",
            address: "",
            description: "",
            phone: '',
            category: '',
            image_path: ''
          },
          index: 0,
          total: 0
        };
    },
    created() {
      axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=34.74725&longitude=113.624931&offset=0&limit=20").then((res) => {
        // console.log(res);
        this.tableData = res.data;
        this._tableData = JSON.stringify(res.data);
        this.total = this.tableData.length;
        this.pages();
      });
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
      // 删除
      del(i) {
        this.tableData.splice(i, 1);
      },
      // 点击编辑回填
      edit(i) {
        this.dialogVisible = true;
          this.index = i;
          this.form.name = this.tableData[i].name;
          this.form.address = this.tableData[i].address;
          this.form.description = this.tableData[i].description;
          this.form.phone = this.tableData[i].phone;
          this.form.category = this.tableData[i].category;
          this.form.image_path = this.tableData[i].image_path;
      },
      // 点击确定按钮修改成功
      editOk() {
        this.tableData[this.index].name = this.form.name;
        this.tableData[this.index].address = this.form.address;
        this.tableData[this.index].description = this.form.description;
        this.tableData[this.index].phone = this.form.phone;
        this.tableData[this.index].category = this.form.category;
        this.tableData[this.index].image_path = this.form.image_path;
        this.dialogVisible = false;
      },
    },
};
</script>

<style lang="scss" scoped>
.users {
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
  height: 30px !important;
}
</style>