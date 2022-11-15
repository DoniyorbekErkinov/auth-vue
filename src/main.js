import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import router from './router'
import store from './store'
import ApiService from '@/service/api.service'
import AuthService from './service/auth.service'
import { TokenService } from './store/storage.service'


ApiService.init('http://localhost:1235')
if (TokenService.getToken()) {
    ApiService.setHeader();
    ApiService.mount401Interceptor();
  } else {
    AuthService.logout();
  }
  

  /* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import  { faHouse, faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHouse, faBars)

const app = createApp(App);
app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
