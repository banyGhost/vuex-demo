const actions = {
  addGoods: ({ commit }, goods) => {
    commit('ADD_GOODS', goods)
  },
  delGoods: ({ commit }, goods) => {
    commit('DEL_GOODS', goods)
  }
}
export default actions