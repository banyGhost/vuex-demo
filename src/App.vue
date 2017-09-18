<template>
  <div id="app">
    <goods v-for="(item, index) in shopList" :key="index" :goods="item"></goods>
    <cart></cart>
  </div>
</template>

<script>
import Cart from './components/Cart'
import Goods from './components/Goods/Goods'
export default {
  name: 'app',
  components: {
    Cart,
    Goods
  },
  data() {
    return {  
      shopList: [
        {
          id: 1,
          title: '商品1',
          price: 21.90,
          goodsNum: 0
        },
        {
          id: 2,
          title: '商品2',
          price: 99.80,
          goodsNum: 0
        }
      ]
    }
  }
}
</script>

<style lang="less">
*,
*:before,
*:after {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  padding-bottom: 54px;
  font-family: '微软雅黑';
}
</style>
