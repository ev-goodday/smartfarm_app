import { createStore } from 'vuex'
import house from './modules/house.js'
import user from './modules/user.js'

export default createStore({
  modules: {
    house,
    user,
  },
})
