import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck, faUserCircle)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
