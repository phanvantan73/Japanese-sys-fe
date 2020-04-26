<template>
  <el-header>
    <el-dropdown trigger="click">
      <el-avatar
        :size="46" 
        @error="errorHandler"
        class="el-dropdown-link"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      >
        <img src="defaultAvatar"/>
      </el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="logout">
          <i class="el-icon-s-tools"></i>
          Setting
        </el-dropdown-item>
        <el-dropdown-item @click.native="logout">Logout</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    line-height: 60px;
    text-align: right;
  }
  .el-dropdown-link {
    cursor: pointer;
    margin-top: 7px;
  }
</style>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        defaultAvatar: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      }
    },
    methods: {
      logout() {
      },
      errorHandler: () => true
    }
  };
</script>
