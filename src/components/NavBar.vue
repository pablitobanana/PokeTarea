<template>
  <div id="navBar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
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
        <router-link class="nav-link active" to="/about">About</router-link>
        <a class="nav-link active" href="#">Cerrar Sesión</a>
        <button type="button" class="btn btn-dark" >Modo Oscuro</button>
      </div>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default{
  name: 'NavBar',
  setup(){
    const nombre = 'Marco'
    const tarjeta = ` <i class="bi bi-person-circle"></i> <i>Bienvenido ${nombre}</i>`;
          return{tarjeta}
  }
};
</script>

<style scoped>

</style>
