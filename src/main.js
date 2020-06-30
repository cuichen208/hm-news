import Vue from 'vue'
import App from './App.vue'
import { Button, Field } from 'vant'
import 'amfe-flexible'
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant)
Vue.use(Button)
Vue.use(Field)

Vue.config.productionTip = false

new Vue({
  render: c => c(App)
}).$mount('#app')
