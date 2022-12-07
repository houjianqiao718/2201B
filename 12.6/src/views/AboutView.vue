<template>
  <div class="about">
    <el-container>
      <el-header>
        <h1>后台管理系统</h1>
        <el-button type="info" @click="$router.back()">退出</el-button>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '60px' : '230px'">
          <div class="toggle">
            <i class="el-icon-s-operation" @click="toggle"></i>
          </div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="isCollapse"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航二</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-aside {
  height: 100%;
}
.el-menu {
  height: 100%;
}
.about {
  height: 100%;
}
.el-header {
  background-color: #000;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toggle {
  background-color: #2c2c2c;
  color: #fff;
  text-align: center;
}
</style>
