const mutations = {
  ADD_GOODS: (state, goods) => {
    let hasGoods = false,
      goodsIndex = 0
    state.goodsList.forEach((item, index) => {
      if (item.id === goods.id) {
        hasGoods = true
        goodsIndex = index
      }
    })
    if (hasGoods) {
      state.goodsList[goodsIndex].goodsNum += 1
    } else {
      goods.goodsNum = 1
      state.goodsList.push(goods)
    }
  },
  DEL_GOODS: (state, goods) => {
    let hasGoods = false,
      goodsIndex = 0
    state.goodsList.forEach((item, index) => {
      if (item.id === goods.id) {
        hasGoods = true
        goodsIndex = index
      }
    })
    if (hasGoods) {
      if (state.goodsList[goodsIndex].goodsNum > 1) {
        state.goodsList[goodsIndex].goodsNum -= 1
      } else {
        state.goodsList[goodsIndex].goodsNum = 0
        state.goodsList.splice(goodsIndex, 1)
      }
    }
  }
}
export default mutations