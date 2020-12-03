import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../services/AuthService' // Did comment out because of error, should be uncomment

Vue.use(Vuex)
/*let auth = true*/ //made this variable because of error late I should delete it
export default new Vuex.Store({
  state: { //the username in my navbar user
    isLoggedIn: false,
    apiUrl: 'http://localhost:3000',
    username:null,
    userId:null
  },
  mutations: {
    authenticate(state) { //here we mutate the state
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.username = auth.getUsername();
        state.userId = auth.getUserId();
      } else {
        state.userId = null; //clear  values
        state.username = null;
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit('authenticate'); //here we call the mutation
    }
  },
  modules: {
  }
})
