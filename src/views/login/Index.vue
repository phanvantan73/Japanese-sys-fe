<template>
  <div class="login">
    <el-button type="text" @click="dialogFormVisible = true">{{ $t('login') }}</el-button>
    <el-dialog :title="$t('login')" :visible.sync="dialogFormVisible" :center="true">
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

<style>
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
import { handleLogin } from '@/api/authenticate';

export default {
  name: 'Login',
  data() {
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('validate.required', {field: this.$t('password')})));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //eslint-disable-line
      if (value === '') {
        callback(new Error(this.$t('validate.required', {field: this.$t('email')})));
      } else {
        if (!reg.test(value)) {
          callback(new Error(this.$t('validate.email')));
        }
        callback();
      }
    };
    return {
      dialogFormVisible: false,
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
          this.dialogFormVisible = false;
          const data = await handleLogin({
            email: this.form.email,
            password: this.form.password
          });
          this.getIsLogin(data);
          if (data.success) {
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