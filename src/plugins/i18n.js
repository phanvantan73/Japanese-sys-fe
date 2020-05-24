import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {
    welcomeMsg: 'Welcome to Your Vue.js App',
    login: 'Login',
    email: 'Email',
    password: 'Password',
    validate: {
      required: 'Please input {field}',
      email: 'Please input correct email address'
    },
    attributes: {
      email: 'email',
      password: 'password'
    }
  },
  'vi': {
    welcomeMsg: 'Chào mừng đến với ứng dụng Vue.js của bạn',
    login: 'Đăng nhập',
    email: 'Email',
    password: 'Mật khẩu',
    validate: {
      required: 'Hãy nhập {field}',
      email: 'Hãy nhập email đúng định dạng'
    },
    attributes: {
      email: 'email',
      password: 'mật khẩu'
    }
  }
};

const i18n = new VueI18n({
  locale: 'vi',
  fallbackLocale: 'vi',
  messages
});

export default i18n;
