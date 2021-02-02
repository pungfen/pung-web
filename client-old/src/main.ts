import { createApp } from 'vue'

import router from './router'
import plugin from './plugin'

import './assets/init.css'

import App from './App.vue'

createApp(App).use(plugin).use(router).mount('#app')
