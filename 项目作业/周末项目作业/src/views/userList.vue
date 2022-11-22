<template>
    <!-- 用户列表 -->
    <div class="users">
        <el-table :data="tableData" style="width: 97%" border stripe :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }">
            <el-table-column label="#" type="index"></el-table-column>
            <el-table-column prop="username" label="姓名"></el-table-column>
            <el-table-column prop="registe_time" label="日期"></el-table-column>
            <el-table-column prop="city" label="地址"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="danger" size="mini" @click="del(scope.$index)">删除</el-button>
                    <el-button type="primary" size="mini" @click="edit(scope.$index)">编辑</el-button>
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
        <el-dialog title="编辑" :visible.sync="dialogVisible" width="50%">
            <el-form ref="form" :model="form" label-width="60px">
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="editOk">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            tableData: [],
            _tableData: '',
            pagenum: 1,
            pagesize: 10,
            total: 0,
            dialogVisible: false,
            form: {
                name: '',
                address: ''
            },
            index: 0
        };
    },
    created() {
        axios.get("https://elm.cangdu.org/v1/users/list?offset=0&limit=20").then((res) => {
            // console.log(res);
            this.tableData = res.data
            this.total = res.data.length
            this._tableData = JSON.stringify(res.data)
            this.pages()
        })
    },
    methods: {
        handleSizeChange(val){
            this.pagesize = val
            this.pages();
        },
        handleCurrentChange(val){
            this.pagenum = val
            this.pages();
        },
        pages(){
            let arr = JSON.parse(this._tableData)
            this.tableData = arr.slice((this.pagenum - 1) * this.pagesize, this.pagenum * this.pagesize)
        },
        // 删除
        del(i){
            this.tableData.splice(i, 1);
        },
        // 点击编辑回填
        edit(i){
            this.dialogVisible = true
            this.index = i
            this.form.name = this.tableData[i].username
            this.form.address = this.tableData[i].city
        },
        // 点击确定按钮修改成功
        editOk(){
            this.tableData[this.index].username = this.form.name
            this.tableData[this.index].city = this.form.address
            this.dialogVisible = false
        },
    }
  
};
</script>

<style lang="scss" scoped>
.users{
    width: 100%;
    background-color: #fff;
    padding: 20px;
}
.el-pagination{
    margin-top: 15px;
}
</style>