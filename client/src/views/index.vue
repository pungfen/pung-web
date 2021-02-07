<template>
  <el-button type="primary" @click="routecLick('/note')">Note</el-button>
</template>

<script>
export default {
  methods: {
    routecLick(type) {
      this.$router.push(type)
    }
  }
}
</script>

<style></style>
