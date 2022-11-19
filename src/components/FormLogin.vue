<template>
  <div id="form-login" class="container">
    <div class="container fixed-top">
      <div class="alert alert-danger" :hidden="alertState" id="alerta-error-inicio" role="alert">
        Informacion incorrecta, vuelva a intentarlo
      </div>
    </div>
  <div class="col">
    <form class="col-lg-5 col-md-8 m-auto my-5 border p-4 bg-light">
      <h2>login</h2>
  <div class="mb-3">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo" v-model="usuario.correo.value">
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1" autocomplete="on" placeholder="Contraseña" v-model="usuario.contraseña.value">
  </div>
  <div class="row mt-4 justify-content-center">
    <button type="submit" class="btn btn-primary col-sm-5 col-lg-5 col-xl-4" @click="iniciar" :disabled="Disabled" >Ingresar</button>
  </div>
  <div class="row mt-4 justify-content-center">
    <button type="button" @click="iniciarG" class="btn btn-dark col-xl-2 col-lg-3 col-sm-3 col-3 "><i class="bi bi-google "></i></button>
  </div>
  <div class="row mt-4">
    <button type="button" @click="cambioForm" class="btn btn-link text-start col-sm-6" >¿Quieres registrarte?</button>
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
      if(( usuario.correo.value == "" || ( usuario.contraseña.value == "" || usuario.contraseña.value.length <= 5 )) )
        return true
      else
        return false
    });

    const iniciar = async (e) =>{
      e.preventDefault();
      await signInWithEmailAndPassword(auth,usuario.correo.value,usuario.contraseña.value).then(()=>{
      router.push("/home")
      },esconderAlerta())
    }

    
    const iniciarG = () =>{
      signInWithPopup(auth, googleAutenticacionI).then(() => router.push("/home"))
    }

    const alertState = ref(true)
    const esconderAlerta = () => {
      alertState.value = false
      setTimeout(()=>alertState.value = true,8000)
    }
 
    return{cambioForm, usuario, Disabled,iniciar, iniciarG,alertState}
  },
};
</script>

<style scoped>

</style>
