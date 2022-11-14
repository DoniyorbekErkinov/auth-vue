import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
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
  

createApp(App).use(store).use(router).mount('#app')
