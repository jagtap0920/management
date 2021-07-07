import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import store from './store';

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
