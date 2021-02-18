import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayPersonajes: [] 
    
  },
  mutations: {
    
    setPersonajes(state , payload) {
      state.arrayPersonajes = payload
    }
  },
  

  actions: {
 async getPersonajes ({ commit }) {
    try{ 
       const res = await fetch("https://602367ff6bf3e6001766b0c8.mockapi.io/api/v1/users")
       const data = await res.json()
       console.log(data)

    } catch (error) {
      console.log(error)
    }

  }

  },
 

  modules: {
  }
})
