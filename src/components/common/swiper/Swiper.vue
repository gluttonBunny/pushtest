<template>
  <div class="crap-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
    <div class="indicator" v-if="showIndicator && slideCount > 1">
      <div class="indi-item" v-for="(item, index) in slideCount" :class="{active: index === currentIndex}" :key="index"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0,
      currentIndex: 0,
      totalWidth: 0,
      scrolling: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    },100)
  },
  methods: {
    //操作DOM，在DOM前后添加slide
    handleDom() {
      let swiperEl = document.querySelector('.swiper');
      let slideEl = document.getElementsByClassName('slide');

      this.slideCount = slideEl.length;
      console.log(this.slideCount);
    },
    startTimer() {
      // window.setInterval(() => {
      //
      // },this.interval)
    }
  }
}
</script>

<style scoped>
  .crap-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
</style>