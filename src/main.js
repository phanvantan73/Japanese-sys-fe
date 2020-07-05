import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import i18n from '@/plugins/i18n';
import 'element-ui/lib/theme-chalk/index.css';
import 'expose-loader?$!expose-loader?jQuery!jquery'
// import jQuery from "jquery";
// const $ = jQuery;
// window.$ = $;
// const $ = require('jquery')
// window.$ = $
Vue.config.productionTip = false;
// window.$ = window.jQuery = require('jquery');
// /* eslint-disable */
// Vue.use({
//   install: function(Vue, options) {
//     Vue.prototype.$jQuery = require('jquery');
//   }
// });
/* eslint-enable */
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
});
