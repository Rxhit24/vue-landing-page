import { createApp } from 'vue'
import './index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { createHead, VueHeadMixin } from '@unhead/vue/client'

createApp(App).use(router).use(createHead()).mixin(VueHeadMixin).mount('#app')
