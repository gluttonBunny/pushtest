<template>
  <div class="switch-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "SwitchBar"
}
</script>

<style scoped>
  .switch-bar {
    width: 100vw;
    height: 49px;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: #f2f2f2;
    box-shadow: 0px -1px 2px #ccc;
  }
</style>