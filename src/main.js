import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store/'
import clickout from './directives/clickoutside'
import { axiosHelper } from './helpers/axios'

Vue.config.productionTip = false
Vue.directive('clickout', clickout)
Vue.use(axiosHelper, { apiUrl: process.env.VUE_APP_API_URL || '', store })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
