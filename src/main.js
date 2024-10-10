import { createApp } from 'vue
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
  .use(store) // Vuex store 사용
  .use(router)
  .mount('#app')
