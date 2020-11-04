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

//ue.material.locale.dateFormat = 'dd/MM/yyyy'
Vue.material.locale = {
  startYear: 1900,
  endYear: 2099,
  dateFormat: 'dd/MM/yyyy',
  days: ['Domingo', 'Lunes', 'Martes','Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  shortDays: ['Dom', 'Lun', 'Mar', 'Mié','Jue','Vie','Sáb'],
  shorterDays: ['D','L','Ma','Mi','J','V','S'],
  months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre','Octubre','Noviembre', 'Diciembre'],
  shortMonths: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sept','Oct','Nov','Dic'],
  shorterMonths: ['E','F','Mar','May','Jun','Jul','A','S','O','N','D'],
  firstDayOfAWeek: 0,
  cancel: 'Cancelar',
  confirm: 'Ok'
}
new Vue({
  render: h => h(App),
}).$mount('#app')
