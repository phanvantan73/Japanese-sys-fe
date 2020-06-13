<template>
  <div class="authenticate">
    <Login />
    <span class="spacing">||</span>
    <Register />
  </div>
</template>

<style>
  .spacing {
    margin: 0 10px;
    color: blue;
  }
  .el-dialog__footer {
    padding: 0 !important;
  }
  .el-dialog__header {
    padding: 0 !important;
  }
  .el-dialog__body {
    padding: 0 20px 20px 20px !important;
  }
  .submit-box {
    text-align: center;
    margin-bottom: 0 !important;
  }
</style>

<script>
import Login from '@/views/authenticate/login/Index'
import Register from '@/views/authenticate/register/Index'

export default {
  name: 'Authenticate',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    Login,
    Register
  }
}
</script>
