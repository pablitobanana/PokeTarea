<template>
  <div class="home">
    <NavBar />
    <Cards />
    <ListaPokemons />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import Cards from '@/components/Cards.vue';
  import ListaPokemons from '@/components/ListaPokemons.vue';
export default {
  name: 'HomeView',
  components: {
    NavBar,
    Cards,
    ListaPokemons,
  }
}
</script>
<style scoped>
*{background: #000000;}
</style>
