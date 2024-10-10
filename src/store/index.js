import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate' // vuex-persistedstate를 사용합니다.

const BASE_URL = process.env.VUE_APP_SERVER_URI

export default createStore({
  state: {
    loginSuccess: false,
    loginError: false,
    userName: null,
    password: null
  },
  getters: {
    isLoggedIn: (state) => state.loginSuccess,
    isLoginError: (state) => state.loginError,
    getUserName: (state) => state.userName,
    getUserPass: (state) => state.password
  },
  mutations: {
    loginSuccess (state, { userName, password }) {
      state.loginSuccess = true
      state.userName = userName
      state.password = password
    },
    loginError (state, { userName, password }) {
      state.loginError = true
      state.userName = userName
      state.password = password
    },
    logout (state) {
      state.loginSuccess = false
      state.loginError = false
      state.userName = null
      state.password = null
    }
  },
  actions: {
    async login ({ commit }, { userName, password }) {
      try {
        const result = await axios.post(
          `${BASE_URL}/api/login`,
          {
            id: userName,
            pw: password
          },
          {
            headers: { 'Content-Type': 'application/json' } // JSON 형식으로 데이터 전송
          }
        )
        if (result.status === 200) {
          commit('loginSuccess', {
            userName: userName,
            password: password
          })
        }
      } catch (err) {
        commit('loginError', {
          userName: userName,
          password: password
        })
        throw new Error(err)
      }
    },
    logout ({ commit }) {
      commit('logout')
    }
  },
  plugins: [
    createPersistedState({ // Vuex 상태 지속성 플러그인
      storage: window.sessionStorage
    })
  ]
})
