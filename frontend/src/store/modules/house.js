export default {
  namespaced: true,

  state: {
    houses: {
      1: {
        name: '스마트팜 1호기',
        house_id: 1,
      },
      2: { name: '스마트팜 2호기', house_id: 2 },
      3: { name: '스마트팜 3호기', house_id: 3 },
    },
    selectedHouse: null,
  },

  mutations: {
    SET_HOUSES(state, houses) {
      state.houses = houses
    },
    SET_SELECTED_HOUSES(state, house) {
      state.selectedHouse = house
    },
  },

  actions: {
    selectHouse({ commit }, house) {
      commit('SET_SELECTED_HOUSES', house)
    },
  },

  getters: {},
}
