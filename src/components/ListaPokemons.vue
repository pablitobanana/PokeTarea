<template>
  <div id="listaPokemons">
    <button class="btn btn-primary  rounded-end rounded-circle" id="btn-poke-list" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-arrow-bar-left" id="icon-btn-poke-list">
    <span class="position-absolute top-0 start-90 translate-middle badge rounded-end rounded-circle bg-danger fs-6">
      <small>{{pokemons.length}}</small>
  </span>
      </i>
    </button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h1 id="offcanvasRightLabel" class="text-light">PokeList</h1>
    <button type="button" class="btn-close bg-light" id="tag-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="container-fluid">
      <div class="row text-light bg-dark mb-4">
        <div class="col-1">
          #
        </div>
        <div class="col-4">
          Nombre
        </div>
        <div class="col-4">
          Habilidad
        </div>
        <div class="col-3">
          Acción
        </div>
      </div>
      <div class="row text-light" v-for="(pokemon,i) in pokemons" :key="i">
        <div class="col-1">
          <p>{{i+1}}</p>
        </div>
        <div class="col-4">
          <p class="text-capitalize">{{ pokemon.name }}</p> 
        </div>
        <div class="col-4">
          <p class="text-capitalize">{{ pokemon.abilities[1].ability.name }}</p> 
        </div>
        <div class="col-3">
          <p>
            <button class="text-capitalize btn btn-primary" @click="borrarOne(i)">quitar</button>
          </p>
        </div>
      </div>
      <button class="text-uppercase btn btn-primary" @click="borrarAll">Borrar lista</button> 
    </div>
  </div>
</div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default{
 name: 'Lista',
  emits: ["borrar", "borrarl"],
  props:{
    pokeprops: { 
      type: Array,
      default: () => [] },
  }, 
  setup(props, {emit}){
    const pokemons = ref( props.pokeprops );

    const borrarAll = () => {
    emit("borrarl")
    }
    const borrarOne = (num) => {
    emit("borrar",num)
    }
    return {pokemons,borrarOne,borrarAll}
  }
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
