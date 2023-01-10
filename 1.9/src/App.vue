<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
div {
  box-sizing: border-box;
}
.el-input__inner {
  color: #68b0fe !important;
}
.el-form-item__error {
  color: #fff !important;
  font-size: 12px !important;
}
.el-dialog__header{
  text-align: left !important;
  margin: 0 !important;
  background-color: #68b0fe !important;
}
.el-dialog__body{
  text-align: left !important;
}

.el-dialog__title{
  color: #fff !important;
}
.el-dialog__headerbtn .el-dialog__close{
  color: #fff !important;
}
.el-table .el-table__cell{
  padding: 10px 0 !important;
}
</style>
