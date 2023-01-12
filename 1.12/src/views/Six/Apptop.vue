<template>
  <!-- 审批头部模块 -->
  <div class="Apptop">
    <el-tag size="large"><i class="el-icon-warning"></i> 当前审批中0 本月审批通过1 本月审批驳回0</el-tag>
    <el-button type="primary" size="mini" @click="$router.push('/SecuritySetting')">流程设置</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.Apptop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin: 10px;
  padding: 15px;
  box-sizing: border-box;
}
</style>
