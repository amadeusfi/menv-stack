import Vue from 'vue'
import App from './App.vue'
import router from './router/route'
import store from './store/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import ('./assets/css/style.css')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
