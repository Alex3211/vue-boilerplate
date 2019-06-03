import { types } from './mutation'
export const set = ({ commit }, data) => {
  commit(types.SET, data)
}
