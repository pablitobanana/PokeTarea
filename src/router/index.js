import { createRouter, createWebHistory } from 'vue-router'
import  firebaseApp from '../api/firebase.js';
import { getAuth } from "firebase/auth";
// import {computed} from 'vue'
const routes = [
  {
   path:'/:pathMatch(.*)*',
    redirect: '/',
    meta:{protect:true},
  },
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import (/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import (/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    meta:{protect: true},
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


router.beforeEach((to,from,next) =>{
    const auth = getAuth(firebaseApp);
    let consultaUsuario = auth.currentUser;
  console.log(consultaUsuario);
  if(to.meta.protect && !consultaUsuario){
    next("/");
  }else if(!to.meta.protect && consultaUsuario ){
    next("/home");
  }else{
    next();
  }
    
})










// router.beforeEach((to, from, next) => {
//     const auth = getAuth();
//     const user = auth.currentUser;
//     const autoriza = to.matched.some(record => record.meta.protect);
//     console.log(!user);
//   if (autoriza) {
//     if (!user) {
//       next({
//         path: '/',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else if(user) {
//     next() // asegúrese de llamar a next ()
//   }else{
//     next()
//   }
// })
//
//
//
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.protect)) {
//     const auth = getAuth(firebaseApp);
//     const user = auth.currentUser;
//     if (user==null) {
//       next('/');
//     } else {
//       next("/home");
//     }
//   } else {
//     next();
//   }
// });



// router.beforeEach((to,from,next) => {
// const authe = getAuth(firebaseApp);
// let user = authe.currentUser;
//   console.log(user);
// let autorizacion = to.matched.some(record => record.meta.auth);
//   if(autorizacion && user == null){
//     next("/")
//   }else if(!autorizacion && user != null){
//     next("/home")
//   }else{
//     next()
//   }

// });

// router.beforeEach((to,from,next) => {
//   let usuario = firebaseApp.auth().correntUser;
//   let autorizacion = to.meta.autorizacion(record => record.meta.autentificado);
//   if (( autorizacion && !usuario ) || (!autorizacion && usuario)) {
//     next('/login')
//   }else{
//     next();
//   }
// });

export default router
