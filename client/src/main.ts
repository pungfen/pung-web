import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import router from './router'
import plugin from './plugin'

import './assets/init.css'

import App from './App.vue'

createApp(App).use(plugin).use(router).use(ElementPlus).mount('#app')
