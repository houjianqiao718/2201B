<template>
  <div class="about">
    <el-container>
      <el-aside :width="isCollapse ? '70px' : '240px'">
        <header>
          <h1>后台管理系统</h1>
        </header>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          :collapse="isCollapse"
        >
          <el-submenu :index="item.path" v-for="(item, index) in menuList" :key="index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="ele.path" v-for="(ele, index) in item.children" :key="index">
                <i :class="ele.icon"></i>
                {{ ele.authName }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="head">
          <i class="el-icon-s-operation" @click="toggle"></i>
          <el-button type="info" size="mini" @click="loginOut">退出</el-button>
        </div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/about' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in $route.meta.title" :key="index">{{ item }}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 布局容器-坑 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuList: []
    };
  },
  methods: {
    //侧边折叠切换
    toggle() {
      this.isCollapse = !this.isCollapse;
    },
    loginOut() {
      this.$router.push("/");
      localStorage.removeItem("token");
    }
  },
  created() {
    this.$http.request("/menus", "get").then((res) => {
      // console.log(res);
      this.menuList = res.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-aside {
  height: 100%;
  background-color: #333744;
  color: #fff;
}
.el-menu {
  border: 0;
}
.about {
  height: 100%;
}
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1e1e1e;
  padding: 0 10px;
  height: 60px;
}
h1 {
  font-size: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  margin-left: 15px;
}
.el-main {
  background-color: #eaedf1;
  margin: 0;
  padding: 0;
}
i {
  font-size: 24px;
  color: #fff;
}
.head {
  height: 60px;
  background-color: #1e1e1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.el-breadcrumb {
  font-size: 14px;
  line-height: 1;
  margin: 20px;
}
.box {
  background-color: #fff;
  padding: 20px;
  margin: 20px;
}
</style>
