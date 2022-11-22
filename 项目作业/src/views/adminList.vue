<template>
    <!-- 管理员列表 -->
    <div class="admin">
        <el-table :data="tableData" style="width: 97%" border stripe :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }">
            <el-table-column label="#" type="index"></el-table-column>
            <el-table-column prop="user_name" label="姓名"></el-table-column>
            <el-table-column prop="create_time" label="注册日期"></el-table-column>
            <el-table-column prop="city" label="地址"></el-table-column>
            <el-table-column prop="admin" label="权限"></el-table-column>
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
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            tableData: [],
            _tableData: '',
            pagenum: 1,
            pagesize: 10,
            total: 0
        }
    },
    created() {
        axios.get("https://elm.cangdu.org/admin/all?offset=0&limit=20").then((res) => {
            console.log(res);
            this.tableData = res.data.data
            this.total = res.data.data.length
            this._tableData = JSON.stringify(res.data.data)
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
    }
}
</script>

<style lang="scss" scoped>
.admin{
    width: 100%;
    background-color: #fff;
    padding: 20px;
}
.el-pagination{
    margin-top: 15px;
}
</style>