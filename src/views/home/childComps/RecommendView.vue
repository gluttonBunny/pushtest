<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommend-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend-view",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item a {
    display: block;
    padding:7px 5px;
    text-align: center;
  }

  .recommend-item a img {
    width: 100%;
    margin-bottom: 5px;
  }

  .recommend-text {
    font-size: 12px;
  }
</style>