<template>
  <div id="cards" class="pb-4">
    <div class="container-xl">
      <h1 class="text-light m-3">Selecciona Pokemons</h1>
      <div class="row row-cols-1 row-cols-md-3 g-3">
        <div class="col-md-4" v-for="(pokemon,i) in pokemons" :key="i">
          <div class="card p-1 mb-3 mt-3 m-sm-auto ms-md-auto h-100 bg-dark boder border-info">
  <div class="row g-0">
    <div class="col-md-12 col-lg-4">
      <img :src="pokemon.sprites.other.dream_world.front_default" class="img-fluid rounded-start rounded-4 bg-dark" alt="...">
        <p class="card-text mt-4"><small class="text-dark bg-info text-uppercase p-2 rounded-pill badge ">{{pokemon.types[0].type.name}}</small></p>
    </div>
    <div class="col-md-12 col-lg-8">
      <div class="card-body text-white">
        <h3 class="card-title text-capitalize">{{pokemon.name}}<small class="fs-6"> #{{pokemon.id.toString().padStart(3,0)}}</small></h3>
        <p class="card-text">{{pokeDet[i]}}</p>
        <button class="btn btn-primary" @click="agregar(pokemon)">Agregar</button>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
    <ListaPokemons :pokeprops="pokeprops" @borrar="borrarPokemon" @borrarl="borrarLista"/>
  </div>
</template>

<script>
  import ListaPokemons from './ListaPokemons.vue';
import { ref,onMounted } from "vue"
export default{
  name:'Cards',
  components: { 
    ListaPokemons,
  },
  setup(){
    const pokemons = ref([]);
    const pokeDet = ref([]);
    const pokeprops = ref([]);

    onMounted(async () => {
      for (let i = 1; i <= 26; i++) {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+i)
      const respuesta = await res.json() 
      pokeDet.value.push(respuesta.flavor_text_entries[34].flavor_text)
    } 
  })
   
    onMounted( async () =>{
      for (let i = 1; i <= 26; i++) {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+i)
        pokemons.value.push(await res.json());
      }
    })
    
    const agregar = (poke) =>{
      pokeprops.value.push(poke);
    }
    const borrarPokemon = (num) =>{
      pokeprops.value.splice(num,1);
    }
    const borrarLista = () =>{
      pokeprops.value.splice(0);
    }
    return{pokemons,pokeDet,pokeprops,agregar,borrarPokemon,borrarLista}
  } 
};
</script>

<style scoped>

</style>
