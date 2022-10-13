import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//import global css
import './assets/css/Global.scss'
//import css file and sass file
import './assets/css/size.scss'
import './assets/sass/color.sass'
import './assets/css/fonts.scss'
import App from './App.vue'
//import raouter
import router from "@/router";

createApp(App).use(router).mount('#app')
