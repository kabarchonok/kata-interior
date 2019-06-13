import Vue from 'vue'
import App from './App.vue'
import store from '../store/index'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import messages from './i18n/messages'


const i18n = new VueI18n({
    locale: 'ru',
    messages,
})

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
