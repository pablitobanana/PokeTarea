<template>
  <div id="form-check-in" class="container">
    <form class="row g-3 border mt-5 col-md-8 col-lg-5 m-auto p-4 bg-light">
      <h2>Check in</h2>
  <div class="col-md-12">
    <input type="text" class="form-control" id="inputnombreUsuario" placeholder="Nombre de Usuario">
  </div>
  <div class="col-md-12">
    <input type="email" class="form-control" id="inputEmail4" placeholder="Correo">
  </div>
  <div class="col-md-12">
    <input type="password" class="form-control" id="inputPassword1" autocomplete="on" placeholder="Contraseña">
  </div>
  <div class="col-md-12">
    <input type="password" class="form-control" id="inputPassword2" autocomplete="on" placeholder="Confirmar contraseña">
  </div>
  <div class="col-12 mt-4">
    <button type="submit" class="btn btn-primary ">Enviar</button>
  </div>
  <a @click="cambioForm" class=" text-start" href="#">ya tienes una cuenta?</a>
</form>
  </div>
</template>

<script>
export default{
   name: 'FormCheckIn',
  emits:['cambio'],
  props:{
    
  },
  setup(props, {emit}){
    const cambioForm = () => {
      emit("cambio");
    }
    return{cambioForm}
  },
};
</script>

<style scoped>

</style>
