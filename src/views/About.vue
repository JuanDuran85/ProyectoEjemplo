<template>
  <div class="about">
    <h1>Lista de Personas</h1>
    <label for="busqueda">Buscar Persona</label>
    <input type="text" v-model="busqueda">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Avatar</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Favorito</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(persona,index) in traerPersona" :key="index" :class="{seleccionado: persona.favorito}">
          <td>{{persona.id}}</td>
          <td><img :src="persona.avatar" :alt="index" class="avatar"></td>
          <td>{{persona.first_name}}</td>
          <td>{{persona.last_name}}</td>
          <td>{{persona.email}}</td>
          <td><button @click="agregarFav(persona)">{{persona.favorito ? "Favorito":"Agregar a Favorito"}}</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      busqueda: '',
    }
  },
  computed: {
    traerPersona(){
      return this.$store.getters.envioListaPersona.filter(datos=>{
        return datos.first_name.toLowerCase().includes(this.busqueda.toLowerCase()) ||
                datos.last_name.toLowerCase().includes(this.busqueda.toLowerCase()) 
      })
    },
  },
  methods: {
    agregarFav(persona){
      this.$store.dispatch('AgregarFavorito',persona);
    }
  },
}
</script>

<style lang="scss">
  .avatar{
    width: 100px;
    height: 100px;
  }
  .seleccionado{
    background-color: aquamarine;
  }
</style>
