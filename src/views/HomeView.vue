<template>
  <div class="home">
    <NavBar />
    <Cards />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import Cards from '@/components/Cards.vue';
export default {
  name: 'HomeView',
  components: {
    NavBar,
    Cards,
  }
}
</script>
<style scoped>
*{background: #000000;}
</style>
