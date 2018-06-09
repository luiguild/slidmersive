import state from './state'
import mutations from './mutations'
import actions from './actions'
import mirrorX from './plugin'
import getters from './getters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  mirrorX
}
