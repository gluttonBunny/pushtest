<template>
  <div class="navbar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
  .navbar {
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 1px #ccc;
  }

  .nav-left, .nav-right {
    width: 60px;
  }

  .nav-center {
    flex: 1;
  }
</style>