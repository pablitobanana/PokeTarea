<template>
  <div id="listaPokemons">
    <button class="btn btn-primary  rounded-end rounded-circle" id="poke-list" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-arrow-bar-left " id="btn-poke-list"></i></button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">PokeList</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
  </div>
</template>

<script>
export default{
 name: 'Lista',
};
</script>

<style scoped>
#poke-list{
  position: fixed;
  right: 0;
  top: 19em;
}
#btn-poke-list{
font-size: 1.65em;
}
</style>
