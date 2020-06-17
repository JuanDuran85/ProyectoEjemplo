import axios from 'axios';
import store from '../store/store';

export function conexionApi() {
    axios.get('https://reqres.in/api/users')
    .then(response=>{
        store.dispatch('recibidoInfoPersona',response.data.data);
    }).catch(error => {
        console.error(error);
    })
}