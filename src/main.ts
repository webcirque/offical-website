import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './main.css'

const Vue = createApp(App)
Vue.use(router)
Vue.mount('#app')
