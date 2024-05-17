import axios from 'axios'

const state = {
  token: null,
  loading: false,
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  LOGIN_PENDING(state) {
    state.loading = true
  },
  LOGIN_SUCCESS(state) {
    state.loading = false
  }

}

const actions = {
  login({ commit }) {
    commit('LOGIN_PENDING') // set loading to true
    return axios.post('/api/login', {
      username: 'username',
      password: 'password',
    }).then((response) => {
      const TOKEN = response.data.token
      // save token to the localStorage
      localStorage.setItem('token', TOKEN)
      // mutate token state with the returned token
      commit('SET_TOKEN', TOKEN)
      commit('LOGIN_SUCCESS') // set loading to false
    })
  },

  logout({ commit }) {
    return new Promise((resolve) => {
      // remove token the localStorage
      localStorage.removeItem('token')
      // mutate token state to null
      commit('SET_TOKEN', null)
      resolve()
    })
  },
}

const getters = {
  token: (state) => state.token,
  isAuthenticated: (state) => !!state.token, // !! converts the value to a booleanv
  isLoading: (state) => state.loading,

}


const authModule = {
  state,
  mutations,
  actions,
  getters,
}

export default authModule


