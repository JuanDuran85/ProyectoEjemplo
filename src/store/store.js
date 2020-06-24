import Vue from 'vue';
import Vuex from 'vuex';
import { db } from "../main";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uidUser: '',
    listaPersona: [] || JSON.parse(localStorage.getItem("favorito")),
  },
  getters: {
    envioListaPersona(state){
      return state.listaPersona;
    },
  },
  mutations: {
    mutandoInfoPersona(state, infoPersonaReci){
      state.listaPersona = infoPersonaReci;
      state.listaPersona.forEach(elemt=>{
          elemt.favorito = false;       
      })
    },
    mutandoFav(state,personaCompleta){
      db.collection(state.uidUser).doc(personaCompleta.last_name+personaCompleta.id).set({
        id: personaCompleta.id,
        first_name: personaCompleta.first_name,
        last_name: personaCompleta.last_name,
        email: personaCompleta.email,
        avatar: personaCompleta.avatar,
        favorito: true
      }).then(()=>{
        console.log("Agregado a favorito");
        let cambioFav = state.listaPersona.filter(item => item.id === personaCompleta.id)
        cambioFav[0].favorito = true;
        localStorage.setItem('favorito',JSON.stringify(state.listaPersona));
      }).catch(err => console.error(err))
    },
    mutandoUidUsuario(state,userID){
      state.uidUser = userID;
    }
  },
  actions: {
    recibidoInfoPersona(context,infoPersona){
      context.commit('mutandoInfoPersona',infoPersona);
    },
    AgregarFavorito(context,personaCompleta){
      context.commit('mutandoFav',personaCompleta);
    },
    idUserLog(context,userID){
      context.commit('mutandoUidUsuario',userID);
    }
  },
})
