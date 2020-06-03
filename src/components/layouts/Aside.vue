<template>
  <el-aside>
    <div class="top-logo"></div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span>{{ $t('menu.home') }}</span>
      </el-menu-item>
      <el-submenu index="/courses">
        <template slot="title">
          <i class="el-icon-location"></i>
        <span>{{ $t('menu.courses.list') }}</span>
        </template>
        <el-menu-item index="/courses/n5">{{ $t('menu.courses.n5') }}</el-menu-item>
        <el-menu-item index="/courses/n4">{{ $t('menu.courses.n4') }}</el-menu-item>
        <el-menu-item index="/courses/n3">{{ $t('menu.courses.n3') }}</el-menu-item>
        <el-menu-item index="/courses/n2">{{ $t('menu.courses.n2') }}</el-menu-item>
        <el-menu-item index="/courses/n1">{{ $t('menu.courses.n1') }}</el-menu-item>
      </el-submenu>
      <el-menu-item index="/games">
        <i class="el-icon-document"></i>
        <span>{{ $t('menu.game') }}</span>
      </el-menu-item>
      <el-menu-item index="/word-research">
        <i class="el-icon-setting"></i>
        <span>{{ $t('menu.word_research') }}</span>
      </el-menu-item>
      <el-menu-item index="/list-of-posts">
        <i class="el-icon-setting"></i>
        <span>{{ $t('menu.posts') }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style>
  .el-aside {
    color: #333;
    background-color: rgb(84, 92, 100);
  }
  .el-menu {
    text-align: left;
    border: none !important;
  }
  .top-logo {
    height: 100px;
  }
</style>

<script>
  export default {
    name: 'Aside'
  };
</script>