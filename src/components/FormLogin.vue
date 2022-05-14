<template>
  <div id="form-login" class="container">
  <div class="col">
    <form @submit.prevent="iniciar" class="col-lg-4 col-md-8  m-auto my-5 border p-4 bg-light">
      <h2>login</h2>
  <div class="mb-4">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correro" v-model="usuario.correo.value">
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1" autocomplete="on" placeholder="Contraseña" v-model="usuario.contraseña.value">
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" @click="iniciar" :disabled="Disabled" >Enviar</button>
  </div>
  <div class="row mt-4 justify-content-center">
    <a @click="iniciarG" class="btn btn-dark col-2 "><i class="bi bi-google "></i></a>
  </div>
  <div class="row mt-4">
    <a @click="cambioForm" class="text-start col-6" href="#">¿Quieres registrarte?</a>
  </div>
</form>
  </div>
</div>
</template>

<script>
import {ref ,computed} from 'vue'
import  firebaseApp from '../api/firebase.js';
import {getAuth , signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import router from '../router/index.js'
export default{
  name:'FormLogin',
  emits: ['cambio'],
  setup(props, {emit}){
    
    const auth = getAuth(firebaseApp);
    
    const googleAutenticacionI = new GoogleAuthProvider();
    const cambioForm = () => {
      emit("cambio");
    }
    const usuario = {
      correo: ref(""),
      contraseña: ref(""),
    }

    const Disabled = computed(() =>{
      if(usuario.correo.value == "" || usuario.contraseña.value == "")
        return true
      else
        return false
    });

    const iniciar = async () =>{
      await signInWithEmailAndPassword(auth,usuario.correo.value,usuario.contraseña.value).then(()=>{
      router.push("/home")
      })
    }

    
    const iniciarG = () =>{
      signInWithPopup(auth, googleAutenticacionI).then(() => router.push("/home"))
    }
 
    return{cambioForm, usuario, Disabled,iniciar, iniciarG}
  },
};
</script>

<style scoped>

</style>
