import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'
import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import { Button, Select } from 'muse-ui';

Vue.use(Button);
Vue.use(Select);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
