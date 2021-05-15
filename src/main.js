import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/nav.css'
import './assets/css/common.scss'
import './assets/css/reset_element.scss'
import './assets/css/sidebar.scss'

Vue.config.productionTip = false

let token = localStorage.getItem('token');
if (token) {
  store.commit('LoginModule/setUser', token)
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
