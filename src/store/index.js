import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  hasError: false,
  errorMessage: '發生錯誤',
  errorCode: null
}

const mutations = {
  hasError (state, data) {
    state.hasError = data
  },
  updateErrorMessage (state, data) {
    state.errorMessage = data
  },
  updateErrorCode (state, data) {
    state.errorCode = data
  }
}

const actions = {
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
