import { createStore } from 'vuex'
import house from './modules/house.js'

export default createStore({
  modules: {
    house,
  },
})
