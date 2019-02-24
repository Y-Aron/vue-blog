

const state = {
  // i18n
  locale: 'zh',
  opSearch: false
}

const mutations = {
  TOGGLE_SEARCH: (state, open) => {
    state.opSearch = open
  }

}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
