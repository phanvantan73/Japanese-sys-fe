<template>
  <div class="register-block">
    <el-button type="text" @click="dialogRegisterFormVisible = true">{{ $t('register') }}</el-button>
    <el-dialog :title="$t('register')" :visible.sync="dialogRegisterFormVisible" :center="true">
      <el-divider><i class="el-icon-star-on"></i><i class="el-icon-star-on"></i><i class="el-icon-star-on"></i></el-divider>
      <el-form :model="formRegister" status-icon :rules="rules" ref="formRegister">
        <el-form-item 
          :label="$t('email')"
          prop="email"
        >
          <el-input type="email" v-model="formRegister.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('password')"
          prop="password"
        >
          <el-input type="password" v-model="formRegister.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('password_confirmation')"
          prop="password_confirmation"
        >
          <el-input type="password" v-model="formRegister.password_confirmation" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="submit-box">
          <el-button type="primary" @click="handleRegister('formRegister')">{{ $t('register') }}</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>
  </div>
</template>

<style scoped>
  .register-block {
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
import { register } from '@/api/authenticate';

export default {
  name: 'Register',
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
    var validateConfirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('validate.required', {field: this.$t('attributes.password_confirmation')})));
      } else if (value !== this.formRegister.password) {
        callback(new Error(this.$t('validate.password_confirmation')));
      } else {
        callback();
      }
    };
    return {
      isRegisterSuccess: false,
      dialogRegisterFormVisible: false,
      formRegister: {
        email: '',
        password: '',
        password_confirmation: ''
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
        ],
        password_confirmation: [
          {
            validator: validateConfirmPassword,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleRegister(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.dialogRegisterFormVisible = false
          const data = await register(this.formRegister)
          this.isRegisterSuccess = data.data.status
          this.$notify({
            message: 'Đăng ký thành công',
            type: 'success'
          });
        } else {
          console.log('register error')
        }
      });
    }
  }
};
</script>
