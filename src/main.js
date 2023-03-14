import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes';
import store from './store/store';


const app =createApp(App);
app.use(router)
app.use(store)
app.mount('#app')
