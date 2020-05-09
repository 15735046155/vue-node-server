<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router>
        <el-submenu index='content'>
          <template slot="title"><i class="el-icon-message"></i>内容管理</template>
          <el-submenu index='categories'>
            <template slot="title" class="second_router">分类</template>
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header class="header">
        <span>王小虎</span>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'container',
    data() {
      return {
        
      }
    }
  };
</script>
<style lang="less" scoped>
.header{
    height: 60px;
    background-color: aqua;
    line-height: 60px;
    text-align: right;
}
.el-submenu__title.second_router{
  padding-left: 60px;
}
</style>