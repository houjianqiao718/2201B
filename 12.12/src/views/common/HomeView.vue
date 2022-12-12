<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse ? '63px' : '230px'">
        <div class="title"><h1>电商后台管理系统</h1></div>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu :index="item.path" v-for="item in leftList" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.authName }}</span>
            </template>
            <el-menu-item-group v-for="ele in item.children" :key="ele.id">
              <el-menu-item :index="ele.path"><i :class="ele.icon"></i>
							{{ ele.authName }}	
							</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <header>
          <span class="left-span">
            <i @click="isCollapse = !isCollapse" class="el-icon-s-unfold"></i>
          </span>
          <el-button type="info" size="mini" @click="exit"> 退出 </el-button>
        </header>
        <el-breadcrumb class="crumbs" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, i) in $route.meta" :key="i">{{ item }}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 布局容器-坑 -->
        <router-view class="con"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftList: [],
      isCollapse: false
    }
  },
  methods: {
    exit() {
      this.$router.push("/longin")
      this.$message({
        message: "退出成功",
        type: "success"
      })
    }
  },
  created() {
    this.$http.request("/left").then((res) => {
      console.log(res)
      this.leftList = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
header {
  width: 100%;
  height: 60px;
  background: #373d41;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 20px;
  .left-span {
    display: flex;
    align-items: center;
  }

  .el-icon-s-unfold {
    line-height: 60px;
    font-size: 24px;
    padding-right: 50px;
  }
}
.crumbs[data-v-33f5e684]{
	margin: 20px;
}
.crumbs {
  margin: 30px;
}
.home {
  background: #eee;
}
.title {
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  padding: 0 10px;
  h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
}
.el-main{
	background-color: #eaedf1;
}
</style>
