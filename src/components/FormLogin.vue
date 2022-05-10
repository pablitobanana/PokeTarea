<template>
  <div id="form-login" class="container">
  <div class="col">
    <form class="col-lg-4 col-md-8  m-auto my-5 border p-4 bg-light">
      <h2>login</h2>
  <div class="mb-4">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correro">
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1" autocomplete="on" placeholder="Contraseña">
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
  <div class="row mt-4">
    <a @click="cambioForm" class=" text-start" href="#">¿Quieres registrarte?</a>
  </div>
</form>
  </div>
</div>
</template>

<script>
export default{
  name:'FormLogin',
  emits: ['cambio'],
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
