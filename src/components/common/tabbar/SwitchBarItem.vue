<template>
  <div class="switch-bar-item" @click="itemClick">
    <div class="switch-item-active-icon" v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div class="switch-item-icon" v-else>
      <slot name="item-icon"></slot>
    </div>
    <div class="switch-item-text" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchBarItem",
  props: {
    path : String,
    colorActive: {
      type: String,
      default: '#FC2659'
    }
  },
  data() {
    return {

    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color : this.colorActive} : {}
    }
  },
  methods:{
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .switch-bar-item {
    flex: 1;
    position: relative;
  }

  .switch-item-icon,
  .switch-item-active-icon,
  .switch-item-text {
    position: absolute;
    left: 0;
    right: 0;
  }

  .switch-bar-item div img{
    width: 21px;
    height: 21px;
    margin-top: 3px;
    vertical-align: middle;
  }

  .switch-item-text {
    bottom: 3px;
  }
</style>