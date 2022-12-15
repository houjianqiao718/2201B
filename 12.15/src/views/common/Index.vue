<template>
  <div class="box">
    <el-container>
      <el-aside
        :width="isCollapse == false ? '240px' : '64px'"
        style="background-color: #333744"
      >
        <div class="header">
          <img src="@/assets/图片.jpg" alt="" />
          <h1 v-show="isCollapse == false">电商后台管理系统</h1>
        </div>
        <el-menu
          :collapse="isCollapse"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          style="width: 100%"
        >
          <el-submenu
            v-for="item in leftList"
            :key="item.id"
            :index="item.path"
          >
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item-group v-for="ele in item.children" :key="ele.id">
              <el-menu-item :index="ele.path"
                ><i class="el-icon-star-on"></i>
                {{ ele.authName }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <i
              :class="
                isCollapse == false ? 'el-icon-s-fold' : 'el-icon-s-unfold'
              "
              @click="isCollapse = !isCollapse"
            ></i>
          </div>
          <div>
            <el-button type="info" @click="quit" size="mini">退出</el-button>
          </div>
        </el-header>
        <el-main>
          <!-- 面包屑导航 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/welcome' }"
              >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item
              v-for="(item, index) in $route.meta.title"
              :key="index"
              >{{ item }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <!-- 布局容器-坑 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { removeToken } from "@/untils/auth"
export default {
  data() {
    return {
      leftList: [],
      isCollapse: false
    }
  },
  methods: {
    getLeftList() {
      this.$http({ url: this.$http.apis("/menus"), method: "get" }).then(
        (res) => {
          console.log(res)
          this.leftList = res.data.data
        }
      )
    },
    quit() {
      removeToken()
      this.$router.push({ path: "/login" })
    }
  },
  created() {
    this.getLeftList()
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  ::v-deep .el-container {
    width: 100%;
    height: 100%;
  }
  ::v-deep .el-header {
    height: 60px !important;
    background: #333744;
    display: flex;
    line-height: 60px;
    justify-content: space-between;
    i {
      font-size: 24px;
      color: white;
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    color: white;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .tops {
    width: 100%;
    height: 60px;
  }
  ::v-deep .el-main {
    background: #eaedf1;
  }
}
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>
