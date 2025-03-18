import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// Configuração do Axios
axios.defaults.baseURL = 'http://localhost:8080'; 

const app = createApp(App);
app.config.globalProperties.$axios = axios; 
app.mount('#app');

