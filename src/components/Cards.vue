<template>
  <div id="cards" class=" ">
    <div class="container-xxl mb-3">
      <h1>Selecciona Pokemos</h1>
      <div class="row row-cols-1 row-cols-md-3 g-3">
        <div class="col-md-4" v-for="(pokemon,i) in pokemons" :key="i">
          <div class="card mb-3 mt-3 m-sm-auto ms-md-auto" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-12 col-lg-4">
      <img :src="pokemon.sprites.other.dream_world.front_default" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-12 col-lg-8">
      <div class="card-body">
        <h3 class="card-title">{{pokemon.name}}</h3>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">{{pokemon.types[0].type.name}}</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref,onMounted } from "vue"
export default{
  setup(){
    const pokemons = ref([]);
    onMounted( async () =>{
      for (let i = 1; i <= 65; i++) {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+i)
        pokemons.value.push(await res.json());
      }
    })
    return{pokemons}
  } 
};
</script>

<style scoped>

</style>
