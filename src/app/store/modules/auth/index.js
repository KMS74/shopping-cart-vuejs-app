import axios from 'axios'

const state = {
  token: null,
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
}

const actions = {
  login({ commit }) {
    return axios.post('/api/login', {
      username: 'username',
      password: 'password',
    }).then((response) => {
      const TOKEN = response.data.token
      // save token to the localStorage
      localStorage.setItem('token', TOKEN)
      // mutate token state with the returned token
      commit('SET_TOKEN', TOKEN)
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

}


const authModule = {
  state,
  mutations,
  actions,
  getters,
}

export default authModule


