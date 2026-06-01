import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './app/router'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// vue query
const queryClient = new QueryClient()
app.use(VueQueryPlugin, {
  queryClient,
})

app.use(BootstrapVue3)

app.mount('#app')
