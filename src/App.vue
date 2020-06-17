<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/favoritos">Favoritos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {conexionApi} from './config/conexionApi';
import firebase from 'firebase'

export default {
  name: 'App',
  mounted() {
    console.log("mounted");
    conexionApi();
    firebase.auth().onAuthStateChanged(user=>{
      if (user) {
        this.$store.dispatch('idUserLog',user.uid);
      }else{
        console.log("Salida de Usuario")
        this.$store.dispatch('idUserLog','');
      }
    });
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
