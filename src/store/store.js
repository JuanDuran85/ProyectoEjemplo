import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaPersona: []
  },
  getters: {
    envioListaPersona(state){
      return state.listaPersona;
    }
  },
  mutations: {
    mutandoInfoPersona(state, infoPersonaReci){
      state.listaPersona = infoPersonaReci;
    },
    // mutandoFav(state,id){
      

    // }
  },
  actions: {
    recibidoInfoPersona(context,infoPersona){
      context.commit('mutandoInfoPersona',infoPersona);
    },
    AgregarFavorito(context,personaCompleta){
      context.commit('mutandoFav',personaCompleta);
    }
  },
})
