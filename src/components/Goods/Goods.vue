<template>
  <div class="goods">
    <div class="goods_hd">
      <img src="http://via.placeholder.com/100x100" alt="商品图片">
    </div>
    <div class="goods_bd">
      <div class="goods_title">{{goods.title}}</div>
      <div class="goods_price">{{goods.price | priceFix}}</div>
      <div class="goods_op">
        <goods-counter @addGoods="addGoods(goods)" @subGoods="delGoods(goods)" :goodsNumber="goods.goodsNum"></goods-counter>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import GoodsCounter from './GoodsCounter'
export default {
  // 
  name: 'goods',
  components: {
    GoodsCounter
  },
  props: {
    goods: Object
  },
  methods: {
    ...mapActions([
      'addGoods',
      'delGoods'
    ])
  }
}
</script>

<style lang="less">
.goods {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 15px;
  .goods_hd {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  .goods_bd {
    flex: 1;
    .goods_title {
      font-size: 16px;
      margin-bottom: 4px;
    }
    .goods_price {
      color: #f5317f;
      font-size: 18px;
    }
    .goods_op {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  &:after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 1px;
    border-bottom: 1px solid #e9eaec;
    transform-origin: 0 0;
    transform: scale(0.5);
  }
}

.goods_btn {
  padding: 4px 8px;
  color: #fff;
  background-color: #2d8cf0;
  border-radius: 3px;
}
</style>
