<template>
  <div id="form-check-in" class="container">
    <form  class="border my-5 col-md-8 col-lg-6 m-auto p-4 bg-light">
      <h2>Check in</h2>
  <div class="mb-3">
    <input type="email" class="form-control" id="inputEmail4" placeholder="Correo" v-model="nuevoUsuario.correo.value">
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" id="inputPassword1" autocomplete="on" placeholder="Contraseña" v-model="nuevoUsuario.contraseña.value">
    <p v-if="cantiadDigitos" class="text-danger mt-1 mb-0">Demaciado corta, minimo 6 digitos</p>
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" id="inputPassword2" autocomplete="on" placeholder="Confirmar contraseña" v-model="nuevoUsuario.contraseñaB.value" >
    <p v-if="notifyCon" class="text-danger mt-1">Las contraseñas no coninciden</p>
  </div>
  <div class="row mt-4 justify-content-center">
    <button type="submit" class="btn btn-primary col-sm-5 col-lg-5 col-xl-4" :disabled="isDisabled" @click="registroCorreoContra" >Registrate</button>
  </div>
  <div class="row mt-4 justify-content-center">
    <button type="button" @click="registroG" class="btn btn-dark col-xl-2 col-lg-3 col-sm-3 col-3 "><i class="bi bi-google "></i></button>
  </div>
  <div class="row mt-4">
    <button type="button" @click="cambioForm" class="btn btn-link text-start col-sm-6" >¿Ya tienes una cuenta?</button>
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
    const cantiadDigitos = computed(() => {
      let strContraseña = nuevoUsuario.contraseña.value
      if(strContraseña === ""){
        return false
      } else if(strContraseña.length < 6){
          return true
        }else{
          return false
        }
      
    }) 
    const isDisabled = computed(()=>{
      if( (nuevoUsuario.contraseña.value.length >= 6) && ( nuevoUsuario.correo.value !== "" && nuevoUsuario.contraseña.value !== "" && nuevoUsuario.contraseñaB.value !== "" ) && (nuevoUsuario.contraseña.value === nuevoUsuario.contraseñaB.value ))
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
    return{cambioForm,nuevoUsuario, isDisabled , notifyCon,registroCorreoContra,registroG, cantiadDigitos}
  },
};
</script>

<style scoped>

</style>
