<template>
  <button
    :class="[
    'p-2',
    'rounded-md',
    'bg-blue-600',
    'text-white',
    'font-medium'
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
    },
  },
}
</script>
