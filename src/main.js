import Vue from 'vue';
import App from './App.vue';
import store, { keepInStoreState } from './store';
import vueVuexPersist from './vue-vuex-persist';

Vue.config.productionTip = false;

Vue.use(vueVuexPersist, store, keepInStoreState);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
