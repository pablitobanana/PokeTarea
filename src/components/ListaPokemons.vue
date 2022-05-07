<template>
  <div id="listaPokemons">
    <button class="btn btn-primary  rounded-end rounded-circle" id="btn-poke-list" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-arrow-bar-left" id="icon-btn-poke-list"></i></button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h1 id="offcanvasRightLabel" class="text-light">PokeList</h1>
    <button type="button" class="btn-close bg-light" id="tag-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="container-fluid">
      <div class="row bg-dark text-light">
        <div class="col">
          Nombre
        </div>
        <div class="col">
          Habilidad
        </div>
        <div class="col">
          Acción
        </div>
      </div>
      <div class="row text-light" v-for="(h,i) in hola" :key="i">
        <p>{{h}}</p>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default{
 name: 'Lista',
  props:{
    hola:[],
  },
};
</script>

<style scoped>
#btn-poke-list{
  position: fixed;
  right: 0;
  top: 19em;
}
#icon-btn-poke-list{
font-size: 1.65em;
}
#offcanvasRight{
  background: #000;
}
</style>
