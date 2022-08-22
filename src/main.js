import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vueBus from '@/utils/vueBus';
import store from './store'
import Directives from '@/utils/directives'
import '@/utils/filter'
Vue.config.productionTip = false
Vue.use(vueBus);
Vue.use(Directives);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
