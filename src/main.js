import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firebaseApp from './api/firebase'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const auth = getAuth();
onAuthStateChanged(auth,(user)=>{
createApp(App).use(router).mount('#app')
})
