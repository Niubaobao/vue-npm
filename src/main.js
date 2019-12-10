import Vue from 'vue'
import App from './App.vue'
import vpay from 'zycpay'

Vue.use(vpay)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
