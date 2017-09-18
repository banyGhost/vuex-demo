const getters = {
  cartInfo: (state) => {
    let price = 0
    let num = 0
    state.cart.goodsList.forEach((item) => {
      price += item.price * item.goodsNum
      num += item.goodsNum
    })
    price += ''
    state.cart.cartInfo.totalPrice = price.substr(0, price.indexOf(".") + 3)
    state.cart.cartInfo.totalNum = num
    return state.cart.cartInfo
  }
}

export default getters