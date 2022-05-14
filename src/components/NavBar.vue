<template>
  <div id="navBar" class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-nv">
  <div class="container-fluid">
    <div class="navbar-brand">
      <img src="@/assets/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png" alt="" width="200" height="50" >
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" href="#" v-html="tarjeta"></a>
        <router-link class="nav-link active" to="/home">Home</router-link>
        <router-link class="nav-link active" to="/home">Habilidades</router-link>
          <button type="button" class="btn btn-dark" @click="cerrarS" >Cerrar Sesión</button>
      </div>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import  firebaseApp from '../api/firebase.js';
import {getAuth , signOut} from 'firebase/auth';
import router from '../router/index.js'
export default{
  name: 'NavBar',
  setup(){
    const auth = getAuth(firebaseApp);
    const cerrarS = () =>{
      signOut(auth).then(()=>router.push("/"))
    }
    const tarjeta = ` <i class="bi bi-person-circle"></i> <i>Bienvenido</i>`;
          return{tarjeta,cerrarS}
  }
};
</script>


<style scoped>
.bg-nv{
  background: #0E68A4;
}

nav {
  padding-right: 30px;
  padding-left: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
