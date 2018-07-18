// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
import { Popup } from 'mint-ui';
import $axios from './util/$axios.js';
import axios from 'axios';

Vue.component(Popup.name, Popup);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
