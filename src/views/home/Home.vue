<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <ul>
      <li>1254</li>
      <li>1254</li>
      <li>1254</li>
      <li>1254</li>
      <li>1254</li>
      <li>1254</li>
      <li>1254</li>
      <li>1254</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import {getHomeMultiData} from "network/home";

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created() {
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  },
  mounted() {
    console.log(this.banners);
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
