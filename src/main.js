import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'
Vue.prototype.$axios = axios
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

