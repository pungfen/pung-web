<template>
  <button
    :class="[
      'py-1', 'px-4',
      'bg-green-600',
      'text-white',
      'font-semibold',
      'rounded-lg',
      'shadow-md',
      'hover:bg-green-700',
      'focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
  ]"
    type="button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'pu-button',

  emits: ['click'],

  methods: {
    handleClick() {
      this.$emit('click', evt)
    }
  }
}
</script>
