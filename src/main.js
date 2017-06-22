
import Vue from 'vue'
import Layout from '@/components/Layout'
import router from './router'

import axios from 'axios'
import vueAxios from 'vue-axios'

import store from './store'
import storage from './utils/storage'
import * as filters from './utils/filters'

import './assets/sass/main.scss'
import './assets/js/rem.js'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import './assets/swiper/css/swiper.min.css'


Object.keys(filters).forEach(k=>Vue.filter(k,filters[k]))

Vue.use(vueAxios,axios);
Vue.config.productionTip = false
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
