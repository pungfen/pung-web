<template>
  <div class="container mx-auto">
    <div class="bg-white py-5 border border-red-500"></div>

    <router-view></router-view>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'admin'
})
</script>
