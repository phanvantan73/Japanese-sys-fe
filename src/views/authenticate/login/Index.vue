<template>
  <div class="login-block">
    <el-button type="text" @click="dialogLoginFormVisible = true">{{ $t('login') }}</el-button>
    <el-dialog :title="$t('login')" :visible.sync="dialogLoginFormVisible" :center="true">
      <el-divider><i class="el-icon-star-on"></i><i class="el-icon-star-on"></i><i class="el-icon-star-on"></i></el-divider>
      <el-form :model="form" status-icon :rules="rules" ref="form">
        <el-form-item 
          :label="$t('email')"
          prop="email"
        >
          <el-input type="email" v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('password')"
          prop="password"
        >
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="submit-box">
          <el-button type="primary" @click="submitForm('form')">{{ $t('login') }}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<style scoped>
  .login-block {
    display: inline-block;
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
import { mapActions } from 'vuex';
import { login } from '@/api/authenticate';
import { setToken } from '@/utils/auth';

export default {
  name: 'Login',
  data() {
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('validate.required', {field: this.$t('attributes.password')})));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //eslint-disable-line
      if (value === '') {
        callback(new Error(this.$t('validate.required', {field: this.$t('attributes.email')})));
      } else {
        if (!reg.test(value)) {
          callback(new Error(this.$t('validate.email')));
        }
        callback();
      }
    };
    return {
      dialogLoginFormVisible: false,
      form: {
        email: '',
        password: '',
      },
      rules: {
        password: [
          { 
            validator: validatePassword,
            trigger: 'blur'
          }
        ],
        email: [
          {
            type: 'email',
            validator: validateEmail,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'getIsLogin'
    ]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.dialogLoginFormVisible = false;
          const data = await login({
            email: this.form.email,
            password: this.form.password
          });
          setToken(data.data.access_token);
          this.getIsLogin(data);
          if (data.data.status) {
            this.$refs[formName].resetFields();
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
