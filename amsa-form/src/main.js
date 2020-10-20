import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { firestorePlugin } from 'vuefire';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate'


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMaterial);
Vue.use(firestorePlugin);
Vue.use(Vuelidate)

Vue.material.locale.dateFormat = 'dd/MM/yyyy'


new Vue({
  render: h => h(App),
}).$mount('#app')
