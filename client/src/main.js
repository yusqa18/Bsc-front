import { createApp } from 'vue';
import { createStore } from 'vuex';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';

const store = createStore({
  state() {
    return {
      URL: '',
    };
  },
  mutations: {
  },
});

const app = createApp(App).use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');
