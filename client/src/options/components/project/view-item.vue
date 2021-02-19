<template>
  <div class="view-item">
    <slot></slot>
  </div>
</template>

<style scoped>
.view-item {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>
