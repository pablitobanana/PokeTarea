<template>
  <div id="login" class="container-fluid">
    <FormLogin  v-if="mostrar" @cambio="change"/>
    <FormCheckIn v-if="!mostrar" @cambio="change" />
  </div>
</template>

<script>
import FormLogin from '@/components/FormLogin.vue';
import FormCheckIn from '@/components/FormCheckIn.vue';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../main.js';
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
      if(mostrar.value === true){
        mostrar.value = false;
      }else{
        mostrar.value = true;
      }
    }

    const agregar = async (nUsuario) =>{
    try {
      const docRef = await addDoc(collection(db, "usuario"),nUsuario); 
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    return{mostrar,change,agregar}
  }
};
</script>

<style scoped>
#login{
  background: #000;
  position: fixed;
  height: 100%;
}
</style>
