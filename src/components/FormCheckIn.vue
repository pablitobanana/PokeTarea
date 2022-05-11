<template>
  <div id="form-check-in" class="container">
    <form class="row g-3 border mt-5 col-md-8 col-lg-5 m-auto p-4 bg-light">
      <h2>Check in</h2>
  <div class="col-md-12">
    <input type="text" class="form-control" id="inputnombreUsuario" placeholder="Nombre de Usuario" v-model="nuevoUsuario.nombre.value">
  </div>
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
  <div class="col-12 mt-4">
    <button type="submit"  class="btn btn-primary" :disabled="isDisabled">Enviar</button>
  </div>
  <a @click="cambioForm" class=" text-start" href="#">¿Ya tienes una cuenta?</a>
</form>
  </div> 
</template>

<script>
import {ref ,computed} from 'vue';
export default{
   name: 'FormCheckIn',
  emits:['cambio'],
  props:{
    
  },

  setup(props, {emit}){
    const cambioForm = () => {
      emit("cambio");
    }
    
    const nuevoUsuario = {
      nombre: ref(""),
      correo: ref(""),
      contraseña: ref(""),
      contraseñaB: ref(""),
    }
    
    const isDisabled = computed(()=>{
    if(( nuevoUsuario.nombre.value !== "" && nuevoUsuario.correo.value !== "" && nuevoUsuario.contraseña.value !== "" && nuevoUsuario.contraseñaB.value !== "" ) && (nuevoUsuario.contraseña.value === nuevoUsuario.contraseñaB.value ))
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
    return{cambioForm,nuevoUsuario, isDisabled , notifyCon}
  },
};
</script>

<style scoped>

</style>
