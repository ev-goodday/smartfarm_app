import axios from '@/plugins/axios'

export default {
  namespaced: true,

  state: {
    name: '',
    phone: '',
    department: '',
    position: '',
    profile_image: '',
    last_login: '',
    created_at: '',
    userDevices: [],
    loading: false,
    error: null,
    userId: 1,
  },

  mutations: {
    SET_USER(state, user) {
      Object.assign(state, user)
    },
    SET_USER_DEVICES(state, userDevices) {
      state.userDevices = userDevices
    },
  },

  actions: {
    async fetchUserProfile({ commit, state }) {
      try {
        const response = await axios.get(`/user/${state.userId}`)
        commit('SET_USER', response.data)
      } catch (error) {
        console.error('사용자 정보 조회 실패:', error)
        throw error
      }
    },

    async fetchUserDevices({ commit, state }) {
      try {
        const response = await axios.get(`/user/device/${state.userId}`)
        commit('SET_USER_DEVICES', response.data)
      } catch (error) {
        console.error('사용자 디바이스 조회 실패:', error)
        throw error
      }
    },
  },
}
