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
div {
  box-sizing: border-box;
}

.el-input__wrapper {
  background-color: #d4e5ff !important;
}
.el-input__inner {
  color: #68b0fe !important;
}
.el-form-item__error {
  color: #fff !important;
  font-size: 12px !important;
}
</style>
