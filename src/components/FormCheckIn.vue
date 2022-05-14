<template>
  <div id="form-check-in" class="container">
    <form class="row g-3 border mt-5 col-md-8 col-lg-5 m-auto p-4 bg-light">
      <h2>Check in</h2>
  <div class="col-md-12">
    <input type="email" class="form-control" id="inputEmail4" placeholder="Correo" v-model="nuevoUsuario.correo.value">
  </div>
  <div class="col-md-12">
    <input type="password" class="form-control" id="inputPassword1" autocomplete="on" placeholder="Contraseña" v-model="nuevoUsuario.contraseña.value">
  </div>
  <div class="col-md-12">
    <input type="password" class="form-control" id="inputPassword2" autocomplete="on" placeholder="Confirmar contraseña" v-model="nuevoUsuario.contraseñaB.value" >
    <p v-if="notifyCon" class="alert alert-danger mt-3" role="alert">Las contraseñas no coninciden</p>
  </div>
  <div class="row mt-4 justify-content-center">
    <button type="submit"  class="btn btn-primary col-3" :disabled="isDisabled" @click="registroCorreoContra">Enviar</button>
  </div>
  <div class="row mt-4 justify-content-center">
    <a @click="registroG" class="btn btn-dark col-2 "><i class="bi bi-google "></i></a>
  </div>
  <div class="row mt-4">
    <a @click="cambioForm" class="text-start col-6" href="#">¿Ya tienes una cuenta?</a>
  </div>
</form>
  </div> 
</template>

<script>
import {ref ,computed} from 'vue';
import  firebaseApp from '../api/firebase.js';
import {getAuth , createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import router from '../router/index.js'
export default{
   name: 'FormCheckIn',
  emits:['cambio'],
  setup(props, {emit}){

    const auth = getAuth(firebaseApp);
    const googleAutenticacion = new GoogleAuthProvider();

    const cambioForm = () => {
      emit("cambio");
    }

    const nuevoUsuario = {
      correo: ref(""),
      contraseña: ref(""),
      contraseñaB: ref(""),
    }

    const registroG = () =>{
      signInWithPopup(auth, googleAutenticacion).then(()=>router.push("/home"))
    }

    const registroCorreoContra = async (e) =>{
      try{
        e.preventDefault();
        await createUserWithEmailAndPassword(auth,nuevoUsuario.correo.value,nuevoUsuario.contraseña.value).then(() => router.push("/home"))
      }catch(er){
        console.log(er.message);
      }
    }
    const isDisabled = computed(()=>{
    if(( nuevoUsuario.correo.value !== "" && nuevoUsuario.contraseña.value !== "" && nuevoUsuario.contraseñaB.value !== "" ) && (nuevoUsuario.contraseña.value === nuevoUsuario.contraseñaB.value ))
        return false;
      else
        return true;
    });

    const notifyCon = computed(() => {
      if ((nuevoUsuario.contraseña.value !== "" && nuevoUsuario.contraseñaB.value !== "") && (nuevoUsuario.contraseña.value !== nuevoUsuario.contraseñaB.value )) {
        return true;
      }else{
        return false;
      }
    })
    return{cambioForm,nuevoUsuario, isDisabled , notifyCon,registroCorreoContra,registroG}
  },
};
</script>

<style scoped>

</style>
