<template>
  <!-- 首页 -->
  <div class="home">
    <el-container>
      <el-aside width="250px">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#324057" text-color="#fff" active-text-color="#1f76f3" router>
          <el-menu-item index="/manage">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/userList">用户列表</el-menu-item>
              <el-menu-item index="/shopList">商家列表</el-menu-item>
              <el-menu-item index="/foodList">食品列表</el-menu-item>
              <el-menu-item index="/orderList">订单列表</el-menu-item>
              <el-menu-item index="/adminList">管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/addShop">添加商铺</el-menu-item>
              <el-menu-item index="/addGoods">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/visitor">用户分布</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/vueEdit">文本编辑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/adminSet">管理员设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/explain">说明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 坑 -->
        <div class="foot">
          <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(ele, index) in $route.meta.title" :key="index">{{ele}}</el-breadcrumb-item>
          </el-breadcrumb>
          <el-popover placement="bottom" width="150" trigger="manual" v-model="visible">
            <div class="btn">
              <el-button type="primary" size="mini" @click="visible = false">取消</el-button>
              <el-button type="info" size="mini" @click="$router.push('/login')">退出</el-button>
            </div>
            <img src="../assets/logo.png" alt="" slot="reference" @click="visible = !visible">
          </el-popover>
        </div>
        <router-view class="view"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      visible: false
    }
  },
}
</script>

<style lang="scss" scoped>
.el-container, .el-aside, .el-menu, .home{
  height: 100%;
}
.el-main{
  height: 100%;
  background-color: #eff2f7;
  margin: 0;
  padding: 0;
}
.view{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.breadcrumb{
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
}
.foot{
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  .el-button{
    margin-top: 4px;
  }
  .btn{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  img{
    width: 50px;
    height: 50px;
  }
}
</style>