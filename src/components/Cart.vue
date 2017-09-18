<template>
  <div class="cart">
    <div class="info">
      <span>{{cartInfo.totalNum}}</span>件商品, 共
      <span>{{cartInfo.totalPrice}}</span>元
    </div>
    <div class="btn">立即支付</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'cart',
  computed: {
    ...mapGetters([
      'cartInfo'
    ])
  }
}
</script>

<style lang="less">
.cart {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  border-top: 1px solid #e9eaec;
  display: flex;
  align-items: center;
  line-height: 50px;
  .info {
    flex: 1;
    color: #c11c7b;
    font-size: 16px;
    text-align: center;
  }
  span {
    font-weight: 600;
    font-size: 18px;
  }
  .btn {
    height: 100%;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #2d8cf0;
    padding: 0 15px;
    &:active {
      background-color: #4d9df1;
    }
  }
}
</style>
