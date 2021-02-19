import { createApp } from 'vue'

import Plugin from './plugins'

import App from './App.vue'

import './assets/styles/reset.css'

createApp(App).use(Plugin).mount('#app')
