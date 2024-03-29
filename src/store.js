import Vue from 'vue'
import Vuex from 'vuex'
import router from './router';
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    appTitle: 'RealChat',
    user: null,
    error: null,
    loading: false,
    // username is not part of firebase object
    username: ''

  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },

    updateUserName (state, username) {
      state.username = username
    },



  },

  actions: {
    // User Sign-up
    userSignUp ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', {email: firebaseUser.user.email})
        commit('setLoading', false)
        router.push('/home')
      })
      .catch (error => {
        commit('setError', error.message)
        commit('setLoading', false)
        
      })
    },

    userSignIn ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', {email: firebaseUser.user.email})
        commit('setLoading', false)
        commit('setError', null)
        router.push('/home')
      })

      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
    },

    autoSignIn ({commit}, payload) {
      commit('setUser', {email: payload.email})
     },

    userSignOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
      router.push('/')
    }
  },

  getters: {
    // Hide signup button if  user is signed in
    isAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    },
    
    // get username
    currentUser: function(state) {
      return state.user || ""
    }
  }
})
