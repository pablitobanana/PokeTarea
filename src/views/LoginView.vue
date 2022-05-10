<template>
  <div id="login">
    <FormLogin  v-if="mostrar" @cambio="change"/>
    <FormCheckIn v-if="!mostrar" @cambio="change" />
  </div>
</template>

<script>
  import FormLogin from '@/components/FormLogin.vue';
  import FormCheckIn from '@/components/FormCheckIn.vue';
  import {ref} from 'vue';
export default{
  name: 'LoginView',
  components:{
    FormLogin,
    FormCheckIn,
  },
  setup(){
    const mostrar = ref(true);

    const change = () => {
      if(mostrar.value == true){
        mostrar.value = false;
      }else{
        mostrar.value = true;
      }
    }
    return{mostrar,change}
  }
};
</script>

<style scoped>

</style>
