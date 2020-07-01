import Vue from 'vue'
import App from './App.vue'
import { Button, Field } from 'vant'
import 'amfe-flexible'
import './styles/common.less'
import './styles/iconfont.less'
import router from './router'

Vue.use(Button)
Vue.use(Field)

Vue.config.productionTip = false

new Vue({
  render: c => c(App),
  router
}).$mount('#app')
