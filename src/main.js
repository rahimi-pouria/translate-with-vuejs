import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//import global css
import './assets/css/Global.scss'
//import css file and sass file
import './assets/css/size.scss'
import './assets/sass/color.sass'
import './assets/sass/fonts.sass'
import App from './App.vue'

createApp(App).mount('#app')
