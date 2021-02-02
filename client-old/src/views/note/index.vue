<template>
  <div class="note">
    <h3>笔记列表</h3>

    <div class="note-list">
      <div v-for="item of list.data">
        <span>{{}}</span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ajax from '/@/ajax'
import { defineComponent } from 'vue'

console.log(ajax)

export default defineComponent({
  name: 'Note',

  data() {
    return {
      list: {
        data: []
      }
    }
  },

  methods: {
    getListData() {}
  },

  created() {
    this.getListData()
  }
})
</script>

<style scoped>
.box-card {
  border: 1px solid red;
}
</style>
