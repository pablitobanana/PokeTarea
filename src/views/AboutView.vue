<template>
  <div class="about">
    <NavBar />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
  }
}

  </script>
