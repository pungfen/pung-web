<template>
  <th class="px-4 py-2 text-green-600">{{ label }}</th>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'pu-table-column',

  props: {
    label: String
  }
})
</script>
