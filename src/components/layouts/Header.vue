<template>
  <el-header>
    <el-dropdown trigger="click" v-if="isLogin">
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
    <Login v-else/>
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
import Login from '@/views/login/Index';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  components: {
    Login
  },
  data() {
    return {
      defaultAvatar: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.app.isLogin
    })
  },
  methods: {
    ...mapActions([
      'getIsLogin'
    ]),
    logout() {
      this.getIsLogin(false);
    },
    errorHandler: () => true
  }
};
</script>
