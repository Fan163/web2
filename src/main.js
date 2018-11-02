// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import Vuex from 'vuex'
import store from './store/store'
import VueResource from 'vue-resource'
import 'babel-polyfill'
import App from './App'
import router from './router'
import iView from 'iview'
import '../my-theme/dist/iview.css'

import '../static/css/common.css'
import '../static/css/Single.css'
import '../static/js/Single.js'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(iView)

Vue.config.debug = true
window.log = console.log

let data = {
  el:'#app',
  router,
  store
}
Vue.http.options.emulateJSON = true;

global.PRE_URL = ''
global.R_PRE_URL = 'https://zgeqscjdglj.org/dfjkorg'

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
