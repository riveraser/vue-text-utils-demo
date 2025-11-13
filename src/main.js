import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueTextUtils } from '@riveraser/vue-text-utils'

const app = createApp(App)

// Register VueTextUtils plugin with global options
app.use(VueTextUtils, {
  locale: 'en-US',
  defaultCurrency: 'USD',
  defaultTimezone: 'UTC',
  debug: false
})

app.mount('#app')
