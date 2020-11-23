<template>
  <switch-bar>
    <switch-bar-item path="/home" colorActive="#a02ee4">
      <img slot="item-icon" src="~assets/img/bar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/bar/home-active.png" alt="">
      <div slot="item-text">首页</div>
    </switch-bar-item>
    <switch-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/bar/category.png" alt="">
      <img slot="item-icon-active" src="~assets/img/bar/category-active.png" alt="">
      <div slot="item-text">分类</div>
    </switch-bar-item>
    <switch-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/bar/cart.png" alt="">
      <img slot="item-icon-active" src="~assets/img/bar/cart-active.png" alt="">
      <div slot="item-text">购物车</div>
    </switch-bar-item>
    <switch-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/bar/profile.png" alt="">
      <img slot="item-icon-active" src="~assets/img/bar/profile-active.png" alt="">
      <div slot="item-text">个人中心</div>
    </switch-bar-item>
  </switch-bar>
</template>

<script>
import SwitchBar from "components/common/tabbar/SwitchBar";
import SwitchBarItem from "components/common/tabbar/SwitchBarItem";
export default {
  name: "TabBarMain",
  components: {
    SwitchBar,
    SwitchBarItem
  }
}
</script>

<style scoped>

</style>