<template>
  <div id="flex-box" :style="{}">
    <div class="flex-box-parent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill'

// ro.observe(document.querySelector('#flex-box'))
export default {
  props: ['height'],
  emits: ['update:height'],

  data() {
    return {
      height: 10
    }
  },

  watch: {
    height: {
      handler(height) {
        this.$emit('update:height', height)
      }
    }
  },

  mounted() {
    const ro = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        const { left, top, width, height } = entry.contentRect

        this.height = height

        console.log('Element:', entry.target)
        console.log(`Element's size: ${width}px x ${height}px`)
        console.log(`Element's paddings: ${top}px ; ${left}px`)
      }
    })
    ro.observe(this.$el)
  }
}
</script>

<style scoped>
#flex-box {
  display: flex;
  flex-direction: row;
}

.flex-box-parent {
  flex: 1;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
}
</style>
