<template>
  <div id="cards" class=" ">
    <div class="container-xxl">
      <h1>Selecciona Pokemos</h1>
      <div class="row" v-for="(n,o) in 5" :key="o">
        <div class="col-md-4" v-for="(n,i) in 3" :key="i">
          <div class="card mb-3 mt-3 m-sm-auto ms-md-auto" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-12 col-lg-4">
      <img :src="picture" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-12 col-lg-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
export default{
  setup(){
    const picture = "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2016/07/26/5fa2d21ddebf4.jpeg"
    return{picture}
  } 
};
</script>

<style scoped>

</style>
