// eslint-disable-next-line
import Vue from 'vue';
import App from './App.vue';
import store, { superState } from './store';
import vueVuexPersist from './vue-vuex-persist';

Vue.config.productionTip = false;

Vue.use(vueVuexPersist, store, superState);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
