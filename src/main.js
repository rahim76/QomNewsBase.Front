import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './app/router'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import BootstrapVue3 from 'bootstrap-vue-3'
import VueLazyload from 'vue3-lazyload'
import defaultImage from './shared/images/1733753707Capture.png'
import errorImage from './shared/images/images.png'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueLazyload, {
  loading: defaultImage,
  error: errorImage,
  attempt: 1,
})

// vue query
const queryClient = new QueryClient()
app.use(VueQueryPlugin, {
  queryClient,
})

app.use(BootstrapVue3)

app.mount('#app')
