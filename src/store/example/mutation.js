export const types = {
  SET: 'SET'
}

const mutations = {
  [types.SET] (state, data) {
    state.data = data
  }
}

export default mutations
