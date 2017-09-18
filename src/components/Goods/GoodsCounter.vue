<template>
  <div class="goods_counter">
    <div class="goods_counter__sub" @click="subGoods">
      <button :class="{'btn-disabled' : this.goodsNumber < 1}">-</button>
    </div>
    <input type="text" class="goods_counter__val" v-model="goodsNumber">
    <div class="goods_counter__add" @click="addGoods">
      <button>+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsCounter',
  props: {
    goodsNumber: Number
  },
  methods: {
    subGoods() {
      if (this.goodsNumber === 0) {
        return
      }
      this.$emit('subGoods')
    },
    addGoods() {
      this.$emit('addGoods')
    }
  }
}
</script>

<style lang="less">
//Variables
@border-color: #5a5a5a;
@btn-color: #2d8cf0;

//minixs
.set-border {
  content: " ";
  position: absolute;
  transform-origin: 0 0;
  transform: scale(0.5);
}

.goods_counter {
  position: relative;
  display: flex;
  align-items: center;
  line-height: 30px;
  font-size: 16px;
  &:before {
    .set-border;
    width: 200%;
    left: 0;
    top: 0;
    height: 1px;
    border-bottom: 1px solid @border-color;
  }
  &:after {
    .set-border;
    width: 200%;
    left: 0;
    bottom: 0;
    height: 1px;
    border-bottom: 1px solid @border-color;
  }
  .goods_counter__add {
    position: relative;
    font-weight: 600;
    left: 1px;
    &:before {
      .set-border;
      height: 200%;
      width: 1px;
      left: 0;
      top: 0;
      border-left: 1px solid @border-color;
    }
    &:after {
      .set-border;
      height: 200%;
      width: 1px;
      right: 0;
      top: 0;
      border-right: 1px solid @border-color;
    }
    button {
      margin: 0 13px;
      border: none;
      background-color: #fff;
      color: @btn-color;
      &:active {
        transform: scale(1.3);
        border: none;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .goods_counter__sub {
    position: relative;
    font-weight: 600;
    &:before {
      .set-border;
      height: 200%;
      width: 1px;
      left: 0;
      top: 0;
      border-left: 1px solid @border-color;
    }
    &:after {
      .set-border;
      height: 200%;
      width: 1px;
      right: 0;
      top: 0;
      border-right: 1px solid @border-color;
    }
    button {
      margin: 0 13px;
      border: none;
      background-color: #fff;
      color: @btn-color;
       :not(.btn-disabled):active {
        transform: scale(1.3);
        border: none;
      }
      &:focus {
        outline: none;
      }
    }
    .btn-disabled {
      color: #ccc;
    }
  }
  .goods_counter__val {
    height: 26px;
    border: none;
    width: 50px;
    font-size: 20px;
    text-align: center;
    &:focus {
      border: none;
      outline: none;
    }
  }
}

input[type="text"]:disabled {
  background-color: #fff;
}
</style>
