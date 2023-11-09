import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})



const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app')
