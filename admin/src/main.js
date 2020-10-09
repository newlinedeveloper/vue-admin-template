// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import Viser from 'viser-vue'
import axios from 'axios'
import store from './store'
import PouchDB from 'pouchdb';
import VueCookie from 'vue-cookie';
import Loading from "vue-loading-overlay";


// // Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

// /**
//  * VUE GLOBAL FILTERS
//  */
// // import '@/filters/filters';

// // import '@/permissionControl/permission' // permission control

// /**
//  * USED PLUGINS
//  */
Vue.use(Viser)
Vue.use(Antd);
Vue.use(VueCookie);

Vue.use(Loading, {
  loader: 'dots',
  color: '#ff9a10',
  width: 70,
  zIndex: 1019,
  height: 70,
  backgroundColor: "#383030cc" //"#4b4b4b"
})

Vue.config.productionTip = false;

// /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted() {
    var db = new PouchDB('admindb')
    db.get('currUser')
      .then(doc => {
        console.log('doc.user', doc.user)
        console.log('Vue.cookie.get : >>', Vue.cookie.get("HASHID"))
        this.$store.commit('Account/SET_USER', doc.user)
      }).catch((error) => {
        console.log('User Logout', error)
      })
  }
})


