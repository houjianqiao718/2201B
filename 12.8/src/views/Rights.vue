<template>
  <div class="box">
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="index"> </el-table-column>
      <el-table-column prop="authName" label="权限名称"> </el-table-column>
      <el-table-column prop="path" label="路径"> </el-table-column>
      <el-table-column prop="level" label="权限等级">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.level == 0">一级</el-tag>
          <el-tag type="success" v-if="scope.row.level == 1">二级</el-tag>
          <el-tag type="warning" v-if="scope.row.level == 2">三级</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.$http.request("rights").then((res) => {
      console.log(res);
      this.tableData = res.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.box {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
}
</style>
